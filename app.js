/* =============================================
   MNOURISH — app.js
   ============================================= */
 
// ─────────────────────────────────────────────
// 0. CONSTANTS & HELPERS
// ─────────────────────────────────────────────
 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/CycleApp/sw.js');
}

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning,';
    if (hour < 17) return 'Good afternoon,';
    return 'Good evening,';
};
 
let tipsRefreshCount = 0;
let pinnedCategories = [];

// ─────────────────────────────────────────────
// STATE — centralised localStorage access
// Avoids repeated JSON.parse calls across functions.
// ─────────────────────────────────────────────
const state = {
    getProfile: () => JSON.parse(localStorage.getItem('userProfile')),
    setProfile: (profile) => localStorage.setItem('userProfile', JSON.stringify(profile)),
    getCycleStartDate: () => localStorage.getItem('cycleStartDate'),
    setCycleStartDate: (timestamp) => localStorage.setItem('cycleStartDate', timestamp),
    getMoodHistory: () => JSON.parse(localStorage.getItem('moodHistory')) || {},
    setMoodHistory: (history) => localStorage.setItem('moodHistory', JSON.stringify(history)),
    clear: () => localStorage.clear(),
};

// ─────────────────────────────────────────────
// 4. CORE CYCLE ENGINE
// ─────────────────────────────────────────────
const cycle = {
    setStartDate: () => {
        const dateInput = document.getElementById('cycle-start-date');
        const dateValue = dateInput.value;
 
        if (!dateValue) {
            dateInput.style.borderColor = 'var(--danger)';
            return;
        }
 
        const selectedDate = new Date(dateValue);
        const now = new Date();
 
        if (selectedDate > now) {
            dateInput.style.borderColor = 'var(--danger)';
            return;
        }
 
        dateInput.style.borderColor = 'var(--border)';
        state.setCycleStartDate(selectedDate.getTime().toString());
        ui.updateDashboard();
        ui.renderWeekAhead();
    },
 
    getCurrentDay: () => {
        const cycleStartDate = state.getCycleStartDate();
        if (!cycleStartDate) return null;
 
        const start = new Date(parseInt(cycleStartDate, 10)).setHours(0, 0, 0, 0);
        const now = new Date().setHours(0, 0, 0, 0);
 
        const diff = now - start;
        const day = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
        return Math.max(1, day);
    },
 
    getPhaseForDay: (day) => {
        if (!day || day < 1 || day > 37) return null;
 
        if (day <= 5)  return 'MENSTRUAL';
        if (day <= 12) return 'FOLLICULAR';
        if (day <= 16) return 'OVULATORY';
 
        // Day 17 and indefinitely onwards is considered Luteal
        if (day <= 37) return 'LUTEAL';
        if (day > 37) return null;
    },
};
 
const nutrition = {
    calculateBaseBMR: () => {
        const profile = state.getProfile();
        if (!profile) return 0;
 
        const heightCm = (parseFloat(profile.ft) * 30.48) + (parseFloat(profile.in) * 2.54);
        const st = parseFloat(profile.st) || 0;
        const lb = parseFloat(profile.lb) || 0;
        const weightKg = (st * 6.35029) + (lb * 0.453592);
        const age = parseInt(profile.age);
 
        if (!heightCm || !weightKg || !age) return 0;
 
        const bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
        return Math.round(bmr * 1.2);
    },
 
    getRecommendedCalories: (sedentaryLimit, phaseKey) => {
        if (!sedentaryLimit) return null;
        if (phaseKey === 'LUTEAL') return Math.round(sedentaryLimit + 250);
        return Math.round(sedentaryLimit);
    },
};
 
// ─────────────────────────────────────────────
// INLINE VALIDATION HELPER
// Replaces alert() with a styled inline error message.
// ─────────────────────────────────────────────
const showInlineError = (inputEl, message) => {
    // Remove any existing error for this input
    const existing = inputEl.parentElement.querySelector('.inline-error');
    if (existing) existing.remove();
 
    inputEl.style.borderColor = 'var(--danger)';
 
    const err = document.createElement('p');
    err.className = 'inline-error';
    err.style.cssText = 'color:var(--danger);font-size:0.78rem;margin-top:4px;';
    err.textContent = message;
    inputEl.insertAdjacentElement('afterend', err);
    inputEl.focus();
};
 
const clearInlineError = (inputEl) => {
    inputEl.style.borderColor = 'var(--border)';
    const existing = inputEl.parentElement.querySelector('.inline-error');
    if (existing) existing.remove();
};
 
// ─────────────────────────────────────────────
// PROFILE BUILDER HELPER
// Reads profile fields using a shared id prefix.
// prefix = '' for welcome form, 'settings-' for settings form.
// ─────────────────────────────────────────────
const buildProfileFromInputs = (prefix) => ({
    name: document.getElementById(`${prefix}name`).value.trim(),
    age:  document.getElementById(`${prefix}age`).value,
    ft:   document.getElementById(`${prefix}ft`).value,
    in:   document.getElementById(`${prefix}in`).value,
    st:   document.getElementById(`${prefix}st`).value,
    lb:   document.getElementById(`${prefix}lb`).value,
});

const validateProfileInputs = (prefix) => {
    const fields = [
        { id: `${prefix}age`, label: 'Age', min: 13, max: 60 },
        { id: `${prefix}ft`,  label: 'Height (ft)', min: 3, max: 7 },
        { id: `${prefix}st`,  label: 'Weight (st)', min: 5, max: 30 },
    ];

    let valid = true;
    fields.forEach(({ id, label, min, max }) => {
        const el = document.getElementById(id);
        const val = parseFloat(el.value);
        if (!el.value || isNaN(val) || val < min || val > max) {
            showInlineError(el, `${label} must be between ${min}–${max}.`);
            valid = false;
        } else {
            clearInlineError(el);
        }
    });
    return valid;
};
 
// ─────────────────────────────────────────────
// 5. UI CONTROLLER
// ─────────────────────────────────────────────
const ui = {
    activeMealTab: 'breakfast',
    selectedMealDayOffset: 0,

    stepMealDay: (direction) => {
        const next = ui.selectedMealDayOffset + direction;
        if (next < 0 || next > 6) return; // clamp to week
        ui.selectedMealDayOffset = next;
        ui.renderMealTab(ui.activeMealTab);
    },
 
    init: () => {
        const profile = state.getProfile();
        if (profile) {
            ui.showScreen('dashboard');
            ui.updateDashboard();

            const cycleStartDate = state.getCycleStartDate();
            const dashInput = document.getElementById('cycle-start-date');

            if (cycleStartDate) {
                const d = new Date(parseInt(cycleStartDate, 10));
                if (!isNaN(d.getTime())) {
                    const formatted = d.toISOString().split('T')[0];
                    if (dashInput) dashInput.value = formatted;
                }
            } else {
                // If no cycle is set, default the input to Today
                if (dashInput) {
                    dashInput.value = new Date().toISOString().split('T')[0];
                }
            }
        } else {
            ui.showScreen('welcome');
        }

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'refresh-tips') {
                tipsRefreshCount++;
                ui.updateDashboard(); 
            }
        });

        // Refresh greeting & dashboard when tab regains focus
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) ui.updateDashboard();
        });
    },
 
    handleDateChange: () => {
        cycle.setStartDate();
    },
 
    showDateSetup: () => {
        const setupSection  = document.getElementById('setup-section');
        const activeControls = document.getElementById('active-cycle-controls');
        const cycleDateCard  = document.getElementById('cycle-date-card');
 
        if (setupSection)   setupSection.classList.remove('hidden');
        if (cycleDateCard)  cycleDateCard.classList.remove('hidden');
        if (activeControls) activeControls.classList.add('hidden');
    },
 
    togglePinTip: (category) => {
        if (pinnedCategories.includes(category)) {
            // Unpin
            pinnedCategories = pinnedCategories.filter(c => c !== category);
        } else {
            // Pin
            pinnedCategories.push(category);
        }
        ui.updateDashboard(); // Re-render to show pinned state
    },

    showScreen: (name) => {
        document.querySelectorAll('.view').forEach(s => s.classList.add('hidden'));
        const screen = document.getElementById(`screen-${name}`);

        if (name === 'settings') {
            document.querySelectorAll('.settings-tile').forEach(t => t.classList.remove('active'));
            ui.populateSettingsForm();
        }

        if (screen) screen.classList.remove('hidden'); // ← screen revealed after tiles already collapsed

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (name === 'mealplans') {
            ui.selectedMealDayOffset = 0; // ← add this
            ui.renderMealTab(ui.activeMealTab);
            ui.renderWeekAhead();
            ui.renderLearnSection();
        }
    },
 
    saveProfile: () => {
        const nameInput = document.getElementById('input-name');
        if (!nameInput.value.trim()) {
            showInlineError(nameInput, 'Please enter your name.');
            return;
        }
        clearInlineError(nameInput);
        if (!validateProfileInputs('input-')) return; // ← add this
        
        const profile = buildProfileFromInputs('input-');
        state.setProfile(profile);
        ui.showScreen('dashboard');
        ui.updateDashboard();
    },
 
    saveSettings: () => {
        const nameInput = document.getElementById('settings-name');
        if (!nameInput.value.trim()) {
            showInlineError(nameInput, 'Please enter your name.');
            return;
        }
        clearInlineError(nameInput);
        if (!validateProfileInputs('settings-')) return; // ← add this

        const profile = buildProfileFromInputs('settings-');
        state.setProfile(profile);
        ui.showScreen('dashboard');
        ui.updateDashboard();
    },
 
    populateSettingsForm: () => {
        const profile = state.getProfile();
        if (!profile) return;
        document.getElementById('settings-name').value = profile.name || '';
        document.getElementById('settings-age').value  = profile.age  || '';
        document.getElementById('settings-ft').value   = profile.ft   || '';
        document.getElementById('settings-in').value   = profile.in   || '';
        document.getElementById('settings-st').value   = profile.st   || '';
        document.getElementById('settings-lb').value   = profile.lb   || '';
    },
 
    toggleSettingsDate: () => {
        const picker = document.getElementById('settings-date-picker');
        if (picker) picker.classList.toggle('hidden');
    },
 
    confirmSettingsDate: () => {
        const dateInput = document.getElementById('settings-cycle-start');
        const newDateStr = dateInput.value;
 
        if (!newDateStr) {
            showInlineError(dateInput, 'Please select a valid date.');
            return;
        }
 
        const selectedDate = new Date(newDateStr);
        const now = new Date();
 
        if (selectedDate > now) {
            showInlineError(dateInput, 'The start date cannot be in the future.');
            return;
        }
 
        clearInlineError(dateInput);
        state.setCycleStartDate(selectedDate.getTime().toString());
 
        const dashInput = document.getElementById('cycle-start-date');
        if (dashInput) dashInput.value = newDateStr;
 
        ui.updateDashboard();
        ui.renderWeekAhead();
 
        // Show brief inline confirmation rather than alert()
        const confirmBtn = document.querySelector('[onclick="ui.confirmSettingsDate()"]');
        if (confirmBtn) {
            const orig = confirmBtn.textContent;
            confirmBtn.textContent = '✓ Saved';
            confirmBtn.disabled = true;
            setTimeout(() => {
                confirmBtn.textContent = orig;
                confirmBtn.disabled = false;
            }, 1800);
        }
 
        document.getElementById('settings-date-picker').classList.add('hidden');
    },
 
    showResetConfirm: () => {
        document.getElementById('reset-confirm-area').classList.add('hidden');
        document.getElementById('reset-confirm-prompt').classList.remove('hidden');
    },

    cancelReset: () => {
        document.getElementById('reset-confirm-prompt').classList.add('hidden');
        document.getElementById('reset-confirm-area').classList.remove('hidden');
    },

    confirmReset: () => {
        state.clear();
        ['input-name', 'input-age', 'input-ft', 'input-in', 'input-st', 'input-lb']
            .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
        ui.showScreen('welcome');
    },
 
    updateDashboard: () => {
        const profile  = state.getProfile();
        const day      = cycle.getCurrentDay();
        const phaseKey = cycle.getPhaseForDay(day);
        const phase    = phaseKey ? phaseData[phaseKey] : null;

        const cycleDateCard  = document.getElementById('cycle-date-card');
        const setupSection   = document.getElementById('setup-section');
        const activeControls = document.getElementById('active-cycle-controls');
        const phaseCard      = document.getElementById('dash-phase-card');

        document.getElementById('dash-greeting').textContent = getGreeting();
        document.getElementById('dash-name').textContent = profile ? profile.name : 'there';

        if (!day || !phase) {
            if (cycleDateCard)  cycleDateCard.classList.remove('hidden');
            if (setupSection)   setupSection.classList.remove('hidden');
            if (activeControls) activeControls.classList.add('hidden');

            document.getElementById('dash-day-num').textContent     = '--';
            document.getElementById('dash-phase-badge').textContent = 'No Cycle Set';

            if (phaseCard) phaseCard.className = 'card phase-card';
            return;
        }

        if (day >= 28) {
            if (cycleDateCard)  cycleDateCard.classList.remove('hidden');
            if (setupSection)   setupSection.classList.add('hidden');
            if (activeControls) activeControls.classList.remove('hidden');
        } else {
            if (cycleDateCard) cycleDateCard.classList.add('hidden');
        }

        document.getElementById('dash-day-num').textContent = day;

        const badge = document.getElementById('dash-phase-badge');
        badge.textContent = phase.name;

        document.getElementById('dash-phase-advice').textContent = `${phase.dayRange} — ${phase.advice}`;
        document.getElementById('display-advice').textContent = phase.advice;

        // 1. Generate a unique number for today (e.g., 20260417)
        const now = new Date();
        const dailySeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

        // 2. Define our four specific categories
        const categories = ['Nutrition', 'Exercise', 'Wellness', 'Mindfulness'];

        // 3. Pick one tip from each category using the daily seed + global refresh count
        // ... inside updateDashboard ...

        const dailyTips = categories.map((cat, index) => {
            const categoryTips = phase.tips.filter(t => t.category === cat);
            if (categoryTips.length === 0) return null;

            // Check if this category is pinned
            const isPinned = pinnedCategories.includes(cat);
            
            // Logic: If pinned, offset is 0. If not pinned, offset is the refresh count.
            const offset = isPinned ? 0 : tipsRefreshCount;
            
            const deterministicIndex = (dailySeed + index + offset) % categoryTips.length;
            return { ...categoryTips[deterministicIndex], isPinned }; // Pass pinned status to the template
        }).filter(tip => tip !== null);

        // 4. Render with a pin toggle button
        document.getElementById('display-tips').innerHTML = dailyTips.map(tip => `
            <li class="tip-item tip-${tip.category.toLowerCase()} ${tip.isPinned ? 'pinned' : ''}">
                <div class="tip-header">
                    <small class="tip-category">${tip.category}</small>
                    <button class="pin-btn" onclick="ui.togglePinTip('${tip.category}')">
                        ${tip.isPinned ? '📌' : '📍'}
                    </button>
                </div>
                <p>${tip.text}</p>
            </li>
        `).join('');

        if (phaseCard) {
            phaseCard.className = 'card phase-card';
            phaseCard.classList.add(phaseKey.toLowerCase());
        }

        const hormoneEl = document.getElementById('hormone-responsible');
        if (hormoneEl) {
            hormoneEl.textContent = `Key Hormone(s): ${phase.hormoneDescription}`;
            hormoneEl.className   = `hormone-tag ${phase.cssClass}`;
        }

        const baseSedentaryTDEE  = nutrition.calculateBaseBMR();
        const recommendedCals    = nutrition.getRecommendedCalories(baseSedentaryTDEE, phaseKey);
        const calArea            = document.getElementById('display-calories');

        if (calArea && recommendedCals) {
            const isLuteal = phaseKey === 'LUTEAL';
            calArea.innerHTML = `
                <div class="cal-box ${isLuteal ? 'cal-boost' : ''}">
                    <strong>${recommendedCals} kcal</strong>
                    <span>Daily Maintenance <small>(Low Activity)</small></span>
                    ${isLuteal ? `<p style="font-size:0.75rem;margin-top:4px;color:var(--phase-luteal);font-weight:700;">
                        Includes +250 kcal metabolic boost
                    </p>` : ''}
                </div>
            `;
        }
    },
 
    checkMood: (mood) => {
        const day = cycle.getCurrentDay();
        if (!day) {
            // Inline nudge on the mood card instead of alert()
            const insight = document.getElementById('mood-insight');
            const analysis = document.getElementById('mood-analysis');
            insight.classList.remove('hidden');
            analysis.textContent = 'Set your cycle start date first to unlock mood insights.';
            return;
        }
 
        document.querySelectorAll('.mood-selector button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('aria-label') === mood) btn.classList.add('active');
        });
 
        const phaseKey = cycle.getPhaseForDay(day);
        const logicKey = phaseKey
            ? phaseKey.charAt(0).toUpperCase() + phaseKey.slice(1).toLowerCase()
            : 'Default';
 
        const insight = (moodLogic[mood] && moodLogic[mood][logicKey])
            ? moodLogic[mood][logicKey]
            : moodLogic[mood]['Default'];
 
        document.getElementById('mood-insight').classList.remove('hidden');
        document.getElementById('mood-analysis').textContent = insight;
 
        const dateKey = new Date().toISOString().split('T')[0];
        const history = state.getMoodHistory();
        history[dateKey] = mood;
        state.setMoodHistory(history);
 
        ui.renderMoodCalendar();
    },
 
    toggleTile: function (headerElement) {
        const tile     = headerElement.parentElement;
        const isActive = tile.classList.contains('active');
 
        document.querySelectorAll('.settings-tile').forEach(t => t.classList.remove('active'));
 
        if (!isActive) {
            tile.classList.add('active');
            // Use data-tile attribute — no fragile innerHTML string matching
            if (tile.dataset.tile === 'mood-history') {
                this.renderMoodCalendar();
            }
        }
    },
 
    renderMoodCalendar: function () {
        const grid = document.getElementById('mood-calendar-grid');
        if (!grid) return;

        const history = state.getMoodHistory();
        grid.innerHTML = '';

        // If 28 days is too many for your UI, 
        // consider changing 27 to 13 for a 2-week view.
        for (let i = 27; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateKey = date.toISOString().split('T')[0];
            const mood = history[dateKey];

            const dayDiv = document.createElement('div');
            dayDiv.className = 'mood-day';

            const moodClass = mood ? mood.toLowerCase() : 'empty';
            dayDiv.innerHTML = `
                <span class="mood-date-num">${date.getDate()}</span>
                <div class="mood-dot ${moodClass}"></div>
            `;
            grid.appendChild(dayDiv);
        }
    },
 
    switchMealTab: (tabEl) => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        tabEl.classList.add('active');
        ui.activeMealTab = tabEl.dataset.tab;
        ui.renderMealTab(ui.activeMealTab);
    },
 
    renderMealTab: (mealType) => {
        const contentArea = document.getElementById('meal-content-area');
        const badge       = document.getElementById('meal-phase-badge');
        const desc        = document.getElementById('meal-phase-desc');
        const dayLabel    = document.getElementById('meal-day-label');
        const offset      = ui.selectedMealDayOffset;

        const cycleStartDate = state.getCycleStartDate();
        let phaseKey = null;
        let cycleDay = null;

        if (cycleStartDate) {
            const target = new Date();
            target.setDate(target.getDate() + offset);
            const targetNoon = new Date(target).setHours(0, 0, 0, 0);
            const startNoon  = new Date(parseInt(cycleStartDate, 10)).setHours(0, 0, 0, 0);
            cycleDay = Math.floor((targetNoon - startNoon) / (1000 * 60 * 60 * 24)) + 1;
            if (cycleDay >= 1) phaseKey = cycle.getPhaseForDay(cycleDay);
        }

        // Day label handling
        if (dayLabel) {
            if (offset === 0) dayLabel.textContent = 'Today';
            else {
                const d = new Date();
                d.setDate(d.getDate() + offset);
                dayLabel.textContent = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });
            }
        }

        if (!phaseKey) {
            badge.textContent = 'No Phase';
            badge.className   = 'phase-badge';
            desc.textContent  = 'Set your cycle start date to unlock meal plans.';
            contentArea.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px 0;">No cycle data.</p>';
            return;
        }

        const phase = phaseData[phaseKey];
        badge.textContent = phase.name;
        badge.className   = `phase-badge ${phase.cssClass}`;
        desc.textContent  = `Meals selected for the ${phase.name} phase. ${phase.nutritionFocus}`;

        const allMeals = mealPlanData[phaseKey][mealType];
        if (!allMeals || allMeals.length === 0) {
            contentArea.innerHTML = '<p>No meals available.</p>';
            return;
        }

        // --- ROLLING 7-DAY UNIQUE LOGIC ---

        // 1. Create a seed tied to the Phase and MealType only.
        // This ensures the shuffle order is the SAME every time we look at this phase.
        const seedString = `${phaseKey}${mealType}`;
        let seed = 0;
        for (let i = 0; i < seedString.length; i++) {
            seed = ((seed << 5) - seed) + seedString.charCodeAt(i);
            seed |= 0;
        }

        const seededRandom = () => {
            seed = (seed * 1664525 + 1013904223) % 4294967296;
            return seed / 4294967296;
        };

        // 2. Shuffle the entire pool for this phase.
        const poolShuffle = [...allMeals].sort(() => 0.5 - seededRandom());

        // 3. Use the cycleDay to pick a unique starting index.
        // Multiplying by 2 ensures each day gets its own pair of meals.
        const startIndex = (cycleDay * 2);

        // 4. Select the two meals using modulo to wrap around the pool.
        // Because the pool is shuffled, these indices will always show 
        // a unique pair for each of the 7 days in the "Week Ahead" view.
        const meal1 = poolShuffle[startIndex % poolShuffle.length];
        const meal2 = poolShuffle[(startIndex + 1) % poolShuffle.length];
        const selectedMeals = [meal1, meal2];

        contentArea.innerHTML = selectedMeals.map(meal => `
            <div class="meal-card">
                <div class="meal-card-title">${meal.name}</div>
                <div class="meal-card-reason">${meal.reason}</div>
                <div class="meal-tag-list">
                    ${meal.tags.map(tag => `<span class="meal-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    },
 
    renderWeekAhead: () => {
        const container = document.getElementById('week-ahead-list');
        if (!container) return;
 
        const today          = new Date();
        const rows           = [];
        const dayNames       = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const cycleStartDate = state.getCycleStartDate();
 
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
 
            let phaseKey  = null;
            let cycleDay  = null;
 
            if (cycleStartDate) {
                // Use separate timestamps to avoid mutating `date`
                const dateNoon  = new Date(date).setHours(0, 0, 0, 0);
                const startNoon = new Date(parseInt(cycleStartDate, 10)).setHours(0, 0, 0, 0);
                const diff = dateNoon - startNoon;
                cycleDay = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
                if (cycleDay >= 1) phaseKey = cycle.getPhaseForDay(cycleDay);
            }
 
            const isToday   = i === 0;
            const dayLabel  = isToday ? 'Today' : dayNames[date.getDay()];
            const dateNum   = date.getDate();
            const phaseName = phaseKey ? phaseData[phaseKey].name : 'Not set';
            const dotClass  = phaseKey ? phaseData[phaseKey].cssClass : 'unknown';
 
            rows.push(`
                <div class="week-day-row ${isToday ? 'today' : ''}" 
                    onclick="ui.focusLearnPhase('${phaseKey}')" 
                    style="cursor: pointer;">
                    <span class="week-day-label">${dayLabel}</span>
                    <span class="week-phase-dot ${dotClass}"></span>
                    <span class="week-phase-name">${phaseName}</span>
                    <span class="week-day-num">${cycleDay ? `Day ${cycleDay}` : `${dateNum}`}</span>
                </div>
            `);
        }
        container.innerHTML = rows.join('');
    },

    renderLearnSection: () => {
        const container = document.getElementById('learn-phases-carousel');
        if (!container) return;

        const cycleStartDate = state.getCycleStartDate();
        const phaseOrder = ['MENSTRUAL', 'FOLLICULAR', 'OVULATORY', 'LUTEAL'];
        
        let currentPhaseKey = 'MENSTRUAL';
        if (cycleStartDate) {
            const todayNoon = new Date().setHours(0, 0, 0, 0);
            const startNoon = new Date(parseInt(cycleStartDate, 10)).setHours(0, 0, 0, 0);
            const cycleDay = Math.floor((todayNoon - startNoon) / (1000 * 60 * 60 * 24)) + 1;
            currentPhaseKey = cycle.getPhaseForDay(cycleDay) || 'MENSTRUAL';
        }

        // Reorder: Start from current phase and wrap around
        const startIndex = phaseOrder.indexOf(currentPhaseKey);
        const sortedPhases = [
            ...phaseOrder.slice(startIndex),
            ...phaseOrder.slice(0, startIndex)
        ];

        container.innerHTML = sortedPhases.map(key => {
            const phase = phaseData[key];
            return `
                <div class="carousel-item" data-phase="${key}">
                    <div class="phase-badge ${phase.cssClass}">${phase.name}</div>
                    <p>${phase.nutritionKnowledge}</p>
                    <div class="subtitle"><strong>Breakfast</strong></div>
                    <div class="subtitle">${phase.nutritionBreakfast}</div>
                    <div class="subtitle"><strong>Lunch</strong></div>
                    <div class="subtitle">${phase.nutritionLunch}</div>
                    <div class="subtitle"><strong>Dinner</strong></div>
                    <div class="subtitle">${phase.nutritionDinner}</div>
                    <div class="subtitle"><strong>Snacks</strong></div>
                    <div class="subtitle">${phase.nutritionSnacks}</div>
                </div>
            `;
        }).join('');
    },

    focusLearnPhase: (phaseKey) => {
    if (!phaseKey) return;
    
        const carousel = document.getElementById('learn-phases-carousel');
        const targetCard = carousel.querySelector(`[data-phase="${phaseKey}"]`);
        
        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
            
            // Optional: Add a brief "highlight" effect
            targetCard.style.borderColor = 'var(--primary)';
            setTimeout(() => {
                targetCard.style.borderColor = 'var(--border)';
            }, 1000);
        }
    },

};
 
ui.init();