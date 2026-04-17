// ─────────────────────────────────────────────
// 1. PHASE DATA — Nutritional advice & Hormones
// ─────────────────────────────────────────────
const phaseData = {
MENSTRUAL: {
        name: 'Menstrual',
        cssClass: 'menstrual',
        dayRange: '~Days 1–5',
        hormoneDescription: 'Low Oestrogen & Progesterone',
        nutritionFocus: 'Oestrogen and Progesterone are at their lowest. Iron replenishment, anti-inflammatory fats, and remineralisation are needed.',
        advice: 'Your hormones are at their lowest. Focus on replenishment and rest.',
        nutritionKnowledge: 'During menstruation, the body is shedding the uterine lining, which can lead to a temporary drop in iron levels. This is why it\'s important to focus on iron-rich foods to replenish what is lost. Additionally, anti-inflammatory fats can help soothe cramps and reduce inflammation, while remineralisation supports overall recovery and well-being during this phase.',
        nutritionBreakfast: 'Focus on warm, mineral-rich foods. Think porridge topped with pumpkin seeds and goji berries or buckwheat pancakes to help replenish iron lost during menstruation.',
        nutritionLunch: 'Opt for nutrient-dense bowls featuring dark leafy greens (like kale or spinach) paired with lentils or beans to support energy levels when they are naturally lower.',
        nutritionDinner: 'Prioritise slow-cooked stews or soups. Root vegetables and magnesium-rich foods can help soothe the body and provide grounding comfort.',
        nutritionSnacks: 'Dark chocolate (at least 70% cocoa) or herbal teas like raspberry leaf can provide magnesium and gentle comfort.',
        tips: [
            // --- Nutrition ---
            { category: 'Nutrition', text: 'Eat iron-rich foods like lentils, steak, or spinach to recover any loss.' },
            { category: 'Nutrition', text: 'Pair iron with Vitamin C (oranges, peppers) to boost absorption.' },
            { category: 'Nutrition', text: 'Avoid excess salt to reduce water retention and bloating.' },
            { category: 'Nutrition', text: 'Magnesium-rich dark chocolate can help soothe cramps.' },
            { category: 'Nutrition', text: 'Sip on ginger or peppermint tea to alleviate digestive discomfort and nausea.' },
            { category: 'Nutrition', text: 'Increase Omega-3s (walnuts, salmon) to help manage inflammation.' },
            { category: 'Nutrition', text: 'Prioritise warm, slow-cooked meals like stews to support easy digestion.' },
            { category: 'Nutrition', text: 'Snack on pumpkin seeds for a boost of zinc to support skin health.' },
            { category: 'Nutrition', text: 'Include seaweed or mussels to replenish minerals like iodine and manganese.' },
            { category: 'Nutrition', text: 'Stay hydrated with room-temperature water to help flush out toxins without shocking the system.' },

            // --- Exercise ---
            { category: 'Exercise', text: 'Focus on restorative movement like Yin Yoga or gentle stretching.' },
            { category: 'Exercise', text: 'Go for a slow, 15-minute walk in nature to boost mood without overexertion.' },
            { category: 'Exercise', text: 'Avoid high-intensity workouts (HIIT) to prevent extra cortisol stress on the body.' },
            { category: 'Exercise', text: 'Try "Legs Up the Wall" pose to improve circulation and relieve pelvic heaviness.' },
            { category: 'Exercise', text: 'Focus on mobility work for the hips and lower back to release period-related tightness.' },
            { category: 'Exercise', text: 'Use light resistance bands for very low-impact toning if you feel an energy spark.' },
            { category: 'Exercise', text: 'Practice deep diaphragmatic breathing to oxygenate muscles and reduce pain.' },
            { category: 'Exercise', text: 'Listen to your body; it is okay to take a total rest day during the first 48 hours.' },
            { category: 'Exercise', text: 'Engage in gentle swimming to feel weightless and soothe joint inflammation.' },
            { category: 'Exercise', text: 'Try Tai Chi or Qi Gong for slow, intentional movement that balances energy.' },

            // --- Mindfulness ---
            { category: 'Mindfulness', text: 'Practice "Body Scanning" meditations to recognise and release pelvic tension.' },
            { category: 'Mindfulness', text: 'Use a gratitude journal to focus on what your body is capable of during this release.' },
            { category: 'Mindfulness', text: 'Try "Box Breathing" to calm the nervous system during bouts of irritability.' },
            { category: 'Mindfulness', text: 'Set a "Theme of the Month" during your day one to align your intentions.' },
            { category: 'Mindfulness', text: 'Visualise the shedding process as a symbolic "cleansing" of the old cycle.' },
            { category: 'Mindfulness', text: 'Dedicate 10 minutes to silent sitting to process any heightened emotions.' },
            { category: 'Mindfulness', text: 'Avoid over-scheduling social events; protect your mental energy and space.' },
            { category: 'Mindfulness', text: 'Practice "Self-Compassion" mantras to counter any negative body image thoughts.' },
            { category: 'Mindfulness', text: 'Engage in low-stimulation activities like reading or knitting to ground yourself.' },
            { category: 'Mindfulness', text: 'Use essential oils like lavender or clary sage to anchor your meditation sessions.' },

            // --- Wellness ---
            { category: 'Wellness', text: 'Prioritise sleep; your body requires more recovery time during this phase.' },
            { category: 'Wellness', text: 'Use a hot water bottle in the evening to encourage blood flow and soothe muscles.' },
            { category: 'Wellness', text: 'Take a warm Epsom salt bath to absorb magnesium transdermally for cramp relief.' },
            { category: 'Wellness', text: 'Swap coffee for herbal infusions to avoid overstimulating an already sensitive gut.' },
            { category: 'Wellness', text: 'Keep your feet and lower back warm to prevent "cold" from worsening contractions.' },
            { category: 'Wellness', text: 'Wear loose-fitting, breathable natural fabrics to manage bloating discomfort.' },
            { category: 'Wellness', text: 'Gently massage your abdomen with circular strokes to encourage healthy flow.' },
            { category: 'Wellness', text: 'Track your flow and symptoms to identify patterns for future cycle planning.' },
            { category: 'Wellness', text: 'Ensure you are getting enough Vitamin D to support immune function while hormones are low.' },
            { category: 'Wellness', text: 'Dim the lights in the evening to signal to your brain that it is time for deep rest.' }
        ]
    },
FOLLICULAR: {
        name: 'Follicular',
        cssClass: 'follicular',
        dayRange: '~Days 6–12',
        hormoneDescription: 'Rising Oestrogen',
        nutritionFocus: 'Oestrogen begins to rise steadily. Focus on fresh, vibrant foods that support gut health and oestrogen metabolism.',
        advice: 'Oestrogen is rising. You\'ll likely feel more energetic and motivated.',
        nutritionKnowledge: 'As oestrogen rises during the follicular phase, it promotes the growth of the uterine lining and supports the development of follicles in the ovaries. This hormonal shift can lead to increased energy levels, improved mood, and enhanced cognitive function. To support this phase, it\'s beneficial to focus on fresh, vibrant foods that are rich in antioxidants, vitamins, and minerals. Incorporating fermented foods can also promote gut health, which is crucial for hormone metabolism and overall well-being during this time.',
        nutritionBreakfast: 'Focus on fermented foods and light proteins. Probiotic yoghurt with ground flaxseeds or a sprouted grain toast with mashed avocado supports the gut as hormone production ramps up.',
        nutritionLunch: 'Incorporate colourful, raw salads with plenty of citrus dressings. The Vitamin C helps with the absorption of nutrients and mirrors the increasing energy of this phase.',
        nutritionDinner: 'Choose vibrant stir-fries with lean proteins and lightly sautéed vegetables. This supports the body’s building phase without feeling overly heavy.',
        nutritionSnacks: 'Fresh fruit, such as oranges or berries, and pumpkin seeds provide the necessary zing to match rising stamina.',
        tips: [
            // --- Nutrition ---
            { category: 'Nutrition', text: 'Incorporate fermented foods like kimchi or live yoghurt to support gut health.' },
            { category: 'Nutrition', text: 'Eat light, vibrant salads and lean proteins like chicken or fish.' },
            { category: 'Nutrition', text: 'Try pumpkin and flax seeds to support hormone building.' },
            { category: 'Nutrition', text: 'Add sprouted grains and seeds to your meals for steady, sustained energy.' },
            { category: 'Nutrition', text: 'Incorporate Vitamin E-rich foods like almonds to support healthy follicular development.' },
            { category: 'Nutrition', text: 'Consume cruciferous vegetables like broccoli or pak choi to help the liver process rising oestrogen.' },
            { category: 'Nutrition', text: 'Eat raw carrots daily; their unique fibre binds to used oestrogen for efficient removal.' },
            { category: 'Nutrition', text: 'Focus on iron-rich foods early in this phase to replenish what was lost during menstruation.' },
            { category: 'Nutrition', text: 'Include complex carbohydrates like oats or quinoa to match your increasing metabolic energy.' },
            { category: 'Nutrition', text: 'Stay hydrated with infused water (cucumber and mint) to support increasing cervical fluid.' },

            // --- Exercise ---
            { category: 'Exercise', text: 'This is the best window for higher-intensity workouts like HIIT or spinning.' },
            { category: 'Exercise', text: 'Trial a new fitness class; your coordination and learning capacity are at their peak.' },
            { category: 'Exercise', text: 'Build lean muscle with resistance training while rising oestrogen levels support repair.' },
            { category: 'Exercise', text: 'Focus on progressive overload in your weightlifting; you are likely at your strongest now.' },
            { category: 'Exercise', text: 'Take advantage of higher stamina for longer cardiovascular sessions like running or cycling.' },
            { category: 'Exercise', text: 'Incorporate power yoga or Vinyasa flows that challenge your balance and strength.' },
            { category: 'Exercise', text: 'Try competitive sports or group fitness; your social confidence is naturally higher.' },
            { category: 'Exercise', text: 'Focus on core stability and posture work to support your rising energy levels.' },
            { category: 'Exercise', text: 'Use this time for outdoor boot camps or high-energy hiking.' },
            { category: 'Exercise', text: 'Prioritise active recovery; though energy is high, muscles still need time to rebuild.' },

            // --- Mindfulness ---
            { category: 'Mindfulness', text: 'Use this creative window for journaling or setting specific goals for the month.' },
            { category: 'Mindfulness', text: 'Practice "Future Self" visualisations to align with your rising ambition and drive.' },
            { category: 'Mindfulness', text: 'Engage in "Mindful Brainstorming" for work projects or personal hobbies.' },
            { category: 'Mindfulness', text: 'Use upbeat, energising mantras like "I am capable and focused" during morning routines.' },
            { category: 'Mindfulness', text: 'Try walking meditations to combine physical energy with mental clarity.' },
            { category: 'Mindfulness', text: 'Harness your social peak by scheduling meetings or difficult conversations now.' },
            { category: 'Mindfulness', text: 'Practice "Open Monitoring" meditation to stay receptive to new ideas and perspectives.' },
            { category: 'Mindfulness', text: 'Create a vision board or digital mood board for your current aspirations.' },
            { category: 'Mindfulness', text: 'Use this time to learn a new mindfulness technique, such as Vedic meditation.' },
            { category: 'Mindfulness', text: 'Reflect on the month ahead and break down your larger goals into actionable steps.' },

            // --- Wellness ---
            { category: 'Wellness', text: 'Try dry brushing before showering to support lymphatic drainage and detoxification.' },
            { category: 'Wellness', text: 'Schedule skin treatments or facials; skin is often most resilient and glowing during this phase.' },
            { category: 'Wellness', text: 'Experiment with a new skincare routine or product while hormone levels are stable.' },
            { category: 'Wellness', text: 'Prioritise social wellness; plan outings and catch-ups with friends while energy is high.' },
            { category: 'Wellness', text: 'Utilise cold therapy (like cold showers) to boost circulation and metabolic rate.' },
            { category: 'Wellness', text: 'Focus on "life admin" tasks; your executive function is typically sharper during this window.' },
            { category: 'Wellness', text: 'Support your liver with milk thistle tea or lemon water to assist oestrogen metabolism.' },
            { category: 'Wellness', text: 'Refresh your environment; use this burst of energy to declutter your home or workspace.' },
            { category: 'Wellness', text: 'Optimise your morning routine to take advantage of the natural increase in cortisol.' },
            { category: 'Wellness', text: 'Track your rising energy levels to help plan your most demanding tasks for next month.' }
        ]
    },
OVULATORY: {
        name: 'Ovulatory',
        cssClass: 'ovulatory',
        dayRange: '~Day 13-15/16',
        hormoneDescription: 'Oestrogen Peak & Luteinising Hormone Surge',
        nutritionFocus: 'Oestrogen peaks and testosterone rises. Focus on anti-inflammatory foods, antioxidants, and liver-supporting nutrients.',
        advice: 'The peak of the cycle. Focus on oestrogen metabolism and hydration.',
        nutritionKnowledge: 'During the ovulatory phase, oestrogen reaches its peak, which triggers the release of luteinising hormone (LH) and leads to ovulation. This hormonal surge can increase energy levels, libido, and mental clarity. To support this phase, it\'s beneficial to focus on anti-inflammatory foods that can help manage any potential PMS symptoms, antioxidants to protect egg health, and liver-supporting nutrients to assist with hormone metabolism. Staying well-hydrated is also crucial as the body\'s internal temperature may rise during this time.',
        nutritionBreakfast: 'Focus on anti-inflammatory berries and liver-supporting nutrients. A smoothie bowl with maca and chia seeds helps the body process the peak hormonal surge.',
        nutritionLunch: 'Focus on cruciferous vegetables like broccoli or cauliflower. These contain compounds that assist the liver in processing and clearing the peak in oestrogen.',
        nutritionDinner: 'Focus on lean proteins and high-fibre grains. These provide the necessary fuel for a slightly higher metabolism while supporting cellular health.',
        nutritionSnacks: 'Focus on hydrating, antioxidant-rich snacks. Sliced peppers with hummus or a handful of almonds offer a light, energising boost.',
        tips: [
            // --- Nutrition ---
            { category: 'Nutrition', text: 'Cruciferous veggies (broccoli, kale) help the liver clear excess hormones efficiently.' },
            { category: 'Nutrition', text: 'Keep well hydrated; your body temperature is starting to rise during this peak.' },
            { category: 'Nutrition', text: 'High fibre intake is essential to prevent sluggish digestion during hormonal shifts.' },
            { category: 'Nutrition', text: 'Focus on anti-inflammatory berries and antioxidants to protect egg health.' },
            { category: 'Nutrition', text: 'Prioritise zinc-rich foods like pumpkin seeds or shellfish to support hormonal balance.' },
            { category: 'Nutrition', text: 'Eat bitter foods like arugula or chicory to assist the liver in oestrogen metabolism.' },
            { category: 'Nutrition', text: 'Incorporate red bell peppers or kiwis for a Vitamin C boost to support the LH surge.' },
            { category: 'Nutrition', text: 'Enjoy light, cooling foods like cucumber and watermelon to manage rising internal heat.' },
            { category: 'Nutrition', text: 'Add a tablespoon of ground flaxseeds to meals for lignans that help balance oestrogen.' },
            { category: 'Nutrition', text: 'Sip on dandelion root tea to support gallbladder function and hormone excretion.' },

            // --- Exercise ---
            { category: 'Exercise', text: 'Aim for a "Personal Best" in strength or speed workouts while stamina is highest.' },
            { category: 'Exercise', text: 'Enjoy social movement like team sports, group hikes, or high-energy dance classes.' },
            { category: 'Exercise', text: 'Utilise your peak coordination for complex skills like tennis or advanced yoga poses.' },
            { category: 'Exercise', text: 'Engage in high-impact cardio like running or plyometrics while energy is at its max.' },
            { category: 'Exercise', text: 'Focus on explosive power movements like kettlebell swings or box jumps.' },
            { category: 'Exercise', text: 'Take your workout outdoors; your body is well-equipped for higher intensity in fresh air.' },
            { category: 'Exercise', text: 'Try a boot camp or HIIT session to capitalise on your natural endurance peak.' },
            { category: 'Exercise', text: 'Incorporate active stretching to maintain flexibility as your metabolic rate increases.' },
            { category: 'Exercise', text: 'Enjoy a vigorous swim to combine high-intensity movement with cooling water.' },
            { category: 'Exercise', text: 'Listen to your body; some feel a "pinch" (Mittelschmerz) and may prefer lower impact for 24 hours.' },

            // --- Mindfulness ---
            { category: 'Mindfulness', text: 'Practice confident communication while your social magnetism is naturally heightened.' },
            { category: 'Mindfulness', text: 'Use this high-energy window for public speaking, presentations, or networking events.' },
            { category: 'Mindfulness', text: 'Focus on "Outward Reflection"—connect with your community and strengthen relationships.' },
            { category: 'Mindfulness', text: 'Practice heart-opening meditations to lean into your natural peak in empathy.' },
            { category: 'Mindfulness', text: 'Journal about your successes; your self-confidence is typically at its highest now.' },
            { category: 'Mindfulness', text: 'Engage in "Flow State" activities where you can lose yourself in creative work.' },
            { category: 'Mindfulness', text: 'Use your verbal fluency peak to write, record content, or have important discussions.' },
            { category: 'Mindfulness', text: 'Meditate on "Vitality"—visualise your energy radiating outwards to others.' },
            { category: 'Mindfulness', text: 'Practice presence during social interactions; listen as deeply as you speak.' },
            { category: 'Mindfulness', text: 'Set boundaries if you feel "over-socialised" despite the energy surge.' },

            // --- Wellness ---
            { category: 'Wellness', text: 'Keep skin clean with gentle exfoliation as sebum levels can shift during the LH surge.' },
            { category: 'Wellness', text: 'Use a lightweight, water-based moisturiser to accommodate rising body temperature.' },
            { category: 'Wellness', text: 'Prioritise dental hygiene; gums can be more sensitive to inflammation during oestrogen peaks.' },
            { category: 'Wellness', text: 'Support your liver with a castor oil pack in the evening to aid detoxification.' },
            { category: 'Wellness', text: 'Wear your favourite "power" outfits; you likely feel most comfortable in your skin right now.' },
            { category: 'Wellness', text: 'Plan a date night or social gathering to capitalise on your peak libido and energy.' },
            { category: 'Wellness', text: 'Be mindful of sleep quality; the energy surge can sometimes make it harder to wind down.' },
            { category: 'Wellness', text: 'Try cooling peppermint oil on your temples if the hormonal shift causes mild tension.' },
            { category: 'Wellness', text: 'Optimise your workspace for collaboration; you are at your most cooperative and persuasive.' },
            { category: 'Wellness', text: 'Monitor changes in your cervical mucus to better understand your body’s unique rhythm.' }
        ],
    },
LUTEAL: {
        name: 'Luteal',
        cssClass: 'luteal',
        dayRange: '~Day 16/17 onwards',
        hormoneDescription: 'High Progesterone',
        nutritionFocus: 'Progesterone rises and becomes the dominant hormone. B-vitamins, slow-release carbohydrates, and fibre are important.',
        advice: 'Progesterone is high. Metabolism increases by roughly 5–10%.',
        nutritionKnowledge: 'During the luteal phase, progesterone becomes the dominant hormone, leading to a natural increase in basal body temperature and metabolism. This phase can be characterised by heightened appetite, cravings, and potential mood shifts due to the effects of progesterone on the brain. To support this phase, it\'s important to focus on B-vitamins, which are crucial for progesterone production and mood regulation, slow-release carbohydrates to stabilise blood sugar levels and manage cravings, and fibre to support digestion and hormone excretion. Additionally, magnesium-rich foods can help relax the nervous system and alleviate common premenstrual symptoms.',
        nutritionBreakfast: 'Focus on complex carbohydrates to stabilise blood sugar. Overnight oats with cinnamon or rye bread with nut butter help manage the natural increase in appetite.',
        nutritionLunch: 'Incorporate roasted Mediterranean vegetables and complex grains like quinoa. These provide steady energy and fibre to support digestion, which can slow down during this phase.',
        nutritionDinner: 'Focus on magnesium-rich foods like baked salmon or roasted sweet potatoes. These help relax the nervous system and manage potential cravings or mood shifts.',
        nutritionSnacks: 'Apple slices with almond butter or a handful of walnuts. These provide the healthy fats and B-vitamins required for progesterone production.',
        tips: [
            // --- Nutrition ---
            { category: 'Nutrition', text: 'Eat slow-release carbs (sweet potato, oats) to curb cravings and stabilise blood sugar.' },
            { category: 'Nutrition', text: 'Increase healthy fats like avocado and walnuts to support progesterone production.' },
            { category: 'Nutrition', text: 'Limit caffeine if you feel anxious or have trouble sleeping as cortisol sensitivity increases.' },
            { category: 'Nutrition', text: 'It\'s natural to need 200–300 extra calories now — listen to your hunger cues.' },
            { category: 'Nutrition', text: 'Focus on B6-rich foods like bananas or chickpeas to help regulate mood and reduce PMS.' },
            { category: 'Nutrition', text: 'Reduce salt and refined sugar intake to minimise bloating and breast tenderness.' },
            { category: 'Nutrition', text: 'Eat magnesium-rich nuts in the evening to support restful, deep sleep and muscle relaxation.' },
            { category: 'Nutrition', text: 'Incorporate leafy greens for calcium to help reduce pre-menstrual water retention.' },
            { category: 'Nutrition', text: 'Sip on peppermint or ginger tea to soothe progesterone-related digestive slowdowns.' },
            { category: 'Nutrition', text: 'Choose high-fibre legumes to ensure regular bowel movements and hormone excretion.' },
            { category: 'Nutrition', text: 'Snack on dark chocolate (85%+) for a healthy magnesium and dopamine boost.' },
            { category: 'Nutrition', text: 'Eat tryptophan-rich turkey or seeds to support serotonin levels during mood dips.' },
            { category: 'Nutrition', text: 'Avoid alcohol, as it can worsen luteal-phase night sweats and disrupted sleep.' },
            { category: 'Nutrition', text: 'Include berries for antioxidants to combat systemic inflammation before your period.' },
            { category: 'Nutrition', text: 'Opt for warm, grounding meals like soups or stews as your body temperature rises.' },
            { category: 'Nutrition', text: 'Eat sesame seeds for zinc and calcium to support skin and bone health.' },
            { category: 'Nutrition', text: 'Add flaxseeds to your breakfast to help the body process the drop in oestrogen.' },
            { category: 'Nutrition', text: 'Focus on lean proteins to maintain satiety and repair muscle tissue.' },
            { category: 'Nutrition', text: 'Stay consistent with meal times to prevent the blood sugar crashes that trigger irritability.' },
            { category: 'Nutrition', text: 'Drink dandelion root tea to help the liver flush out used hormones.' },

            // --- Exercise ---
            { category: 'Exercise', text: 'Switch to steady-state cardio or Pilates as your basal body temperature rises.' },
            { category: 'Exercise', text: 'Focus on strength training with higher repetitions and lower weights to protect joints.' },
            { category: 'Exercise', text: 'Prioritise restorative yoga or gentle stretching to alleviate lower back tension.' },
            { category: 'Exercise', text: 'Go for long, brisk walks to maintain cardiovascular health without overstressing your system.' },
            { category: 'Exercise', text: 'Incorporate more recovery time between sets; your heart rate may rise faster than usual.' },
            { category: 'Exercise', text: 'Focus on pelvic floor and core stability work to support your changing internal environment.' },
            { category: 'Exercise', text: 'Try swimming to feel weightless and reduce the pressure on bloated tissues.' },
            { category: 'Exercise', text: 'Avoid pushing for "Personal Bests" as your breath may feel shorter in this phase.' },
            { category: 'Exercise', text: 'Engage in "Cosy Cardio"—low-intensity movement in a comfortable, low-stress setting.' },
            { category: 'Exercise', text: 'Use a foam roller to help with lymphatic drainage and muscle soreness.' },
            { category: 'Exercise', text: 'Listen to your body; if you feel exhausted, a 20-minute gentle flow is better than an hour of HIIT.' },
            { category: 'Exercise', text: 'Try Tai Chi to focus on balance and calm, intentional movement.' },
            { category: 'Exercise', text: 'Focus on mobility drills for the hips and glutes to prepare for the menstrual release.' },
            { category: 'Exercise', text: 'Wear a supportive sports bra to accommodate any pre-menstrual breast sensitivity.' },
            { category: 'Exercise', text: 'Work out in a cool environment to prevent overheating due to your higher body temperature.' },
            { category: 'Exercise', text: 'Prioritise a longer warm-up to prepare your ligaments, which can be more prone to injury now.' },
            { category: 'Exercise', text: 'Try deep-water aerobics for a low-impact way to keep moving.' },
            { category: 'Exercise', text: 'Focus on your breath during movement to manage the increased heart rate response.' },
            { category: 'Exercise', text: 'Do 10 minutes of gentle morning movement to wake up your metabolism softly.' },
            { category: 'Exercise', text: 'End every session with 5 minutes of mindful relaxation to lower cortisol.' },

            // --- Mindfulness ---
            { category: 'Mindfulness', text: 'Dedicate time to "Organisational Zen" by clearing physical or digital clutter.' },
            { category: 'Mindfulness', text: 'Protect your energy by saying "no" to non-essential social commitments.' },
            { category: 'Mindfulness', text: 'Practice "Introspective Journaling" to process the heightened emotions of this phase.' },
            { category: 'Mindfulness', text: 'Use grounding meditations that focus on your connection to the Earth.' },
            { category: 'Mindfulness', text: 'Practice the "3-3-3 Rule" to stay present if pre-menstrual anxiety strikes.' },
            { category: 'Mindfulness', text: 'Allow yourself to feel "withdrawn"—it is a natural time for inner reflection.' },
            { category: 'Mindfulness', text: 'Use calming affirmations like "I am safe and supported" to counter mood swings.' },
            { category: 'Mindfulness', text: 'Engage in "Mindful Nesting"—making your home a calm sanctuary for the upcoming bleed.' },
            { category: 'Mindfulness', text: 'Try "Loving-Kindness" meditation (Metta) to improve your relationship with your body.' },
            { category: 'Mindfulness', text: 'Avoid making major life decisions if you feel overwhelmed by the "Luteal Lens".' },
            { category: 'Mindfulness', text: 'Focus on breathwork that emphasises a long, slow exhale to soothe the nervous system.' },
            { category: 'Mindfulness', text: 'Take a break from social media to avoid comparison during low-confidence days.' },
            { category: 'Mindfulness', text: 'Practice "Non-Sleep Deep Rest" (NSDR) or Yoga Nidra to manage afternoon fatigue.' },
            { category: 'Mindfulness', text: 'Spend time in silence to help process any irritability or sensory sensitivity.' },
            { category: 'Mindfulness', text: 'Acknowledge your cravings without judgment; observe them as biological signals.' },
            { category: 'Mindfulness', text: 'Use aromatherapy (lavender, bergamot) to anchor your mindfulness practice.' },
            { category: 'Mindfulness', text: 'Set an "End of Day" ritual to leave work stress behind and transition into rest.' },
            { category: 'Mindfulness', text: 'Visualise your stress leaving your body with every breath.' },
            { category: 'Mindfulness', text: 'Write a "to-do" list for the next week to get concerns out of your head.' },
            { category: 'Mindfulness', text: 'Spend 5 minutes each morning simply observing your thoughts without reacting.' },

            // --- Wellness ---
            { category: 'Wellness', text: 'Prioritise an early bedtime; the body needs more sleep as the cycle concludes.' },
            { category: 'Wellness', text: 'Take warm Epsom salt baths to soothe the nervous system and absorb magnesium.' },
            { category: 'Wellness', text: 'Update your skincare to focus on calming, anti-inflammatory products for luteal breakouts.' },
            { category: 'Wellness', text: 'Use a silk pillowcase to be gentle on skin that may be more sensitive now.' },
            { category: 'Wellness', text: 'Keep your environment cool at night to counter potential night sweats.' },
            { category: 'Wellness', text: 'Wear comfortable, loose-fitting clothes that allow for natural bloating.' },
            { category: 'Wellness', text: 'Try lymphatic drainage massage to help with swelling in the legs and face.' },
            { category: 'Wellness', text: 'Focus on "Self-Care Sunday" rituals like hair masks or reading in bed.' },
            { category: 'Wellness', text: 'Ensure you are getting adequate Vitamin D to support mood and immunity.' },
            { category: 'Wellness', text: 'Use a heating pad for lower back aches that start before your period.' },
            { category: 'Wellness', text: 'Hydrate well; progesterone can cause mild dehydration and dry eyes.' },
            { category: 'Wellness', text: 'Schedule a massage or acupuncture session to release deep-seated tension.' },
            { category: 'Wellness', text: 'Check your iron and mineral supplements are ready for the upcoming bleed.' },
            { category: 'Wellness', text: 'Lower the lighting in your home after sunset to encourage melatonin production.' },
            { category: 'Wellness', text: 'Use a weighted blanket to help with anxiety or restless legs at night.' },
            { category: 'Wellness', text: 'Monitor your basal body temperature if tracking for fertility or health insights.' },
            { category: 'Wellness', text: 'Limit screen time an hour before bed to protect your fragile luteal sleep.' },
            { category: 'Wellness', text: 'Practice gentle breast massage to help reduce lymphatic congestion and tenderness.' },
            { category: 'Wellness', text: 'Stock up on healthy "comfort" snacks so they are ready when cravings hit.' },
            { category: 'Wellness', text: 'Take slow, deep breaths whenever you feel your heart rate increasing.' }
        ]
    }
};
 
// ─────────────────────────────────────────────
// 2. MEAL PLAN DATA
// ─────────────────────────────────────────────
const mealPlanData = {
    MENSTRUAL: {
        breakfast: [
            {
                name: 'Warm Spiced Porridge with Dried Figs & Pumpkin Seeds',
                reason: 'Oats provide slow-release energy. Figs are a source of iron and calcium to replenish what is lost during menstruation.',
                tags: ['High Iron', 'Warming', 'Vegan', 'Magnesium', '380 Calories'],
            },
            {
                name: 'Scrambled Eggs on Dark Rye Toast with Wilted Spinach',
                reason: 'Eggs provide choline and B vitamins; spinach delivers iron. Dark rye is gentle on the digestive system.',
                tags: ['High Iron', 'High Protein', 'B Vitamins', '340 Calories'],
            },
            {
                name: 'Smashed Avocado & Smoked Salmon on Toasted Sourdough',
                reason: 'Omega-3 fatty acids in salmon help reduce inflammation and cramps, while avocado provides healthy fats and potassium to manage bloating.',
                tags: ['Omega-3', 'Anti-inflammatory', 'Healthy Fats', '450 Calories'],
            },
            {
                name: 'Quinoa Breakfast Bowl with Blueberries and Almond Butter',
                reason: 'Quinoa is a complex carbohydrate and plant-based protein source containing iron. Blueberries provide antioxidants to combat oxidative stress.',
                tags: ['Gluten-Free', 'Antioxidant-Rich', 'Plant Protein', '410 Calories'],
            },
            {
                name: 'Chia Seed Pudding with Raspberries and Raw Cacao Nibs',
                reason: 'Magnesium in raw cacao helps relax muscles and ease cramps, while chia seeds provide fibre for digestive regularity.',
                tags: ['High Magnesium', 'High Fibre', 'Refined Sugar-Free', '320 Calories'],
            },
            {
                name: 'Greek Yogurt with Hemp Hearts and Pomegranate Seeds',
                reason: 'Pomegranate is rich in Vitamin C, which aids the absorption of iron. Hemp hearts provide essential fatty acids and protein.',
                tags: ['Iron Absorption', 'High Protein', 'Probiotic', '350 Calories'],
            },
            {
                name: 'Baked Shakshuka with Spinach and Feta',
                reason: 'The vitamin C in tomatoes enhances the absorption of non-heme iron from the spinach. Feta provides a gentle source of calcium.',
                tags: ['Iron Absorption', 'Vegetarian', 'High Iron', '310 Calories'],
            },
            {
                name: 'Tofu Scramble with Turmeric and Kale',
                reason: 'Turmeric contains curcumin, which has anti-inflammatory properties to help with cramping. Kale is a nutrient-dense source of iron and fibre.',
                tags: ['Anti-inflammatory', 'Vegan', 'High Fibre', '280 Calories'],
            },
            {
                name: 'Buckwheat Pancakes with Stewed Apples and Cinnamon',
                reason: 'Buckwheat is a gluten-free pseudo-grain high in magnesium. Cinnamon helps regulate blood sugar and improve circulation.',
                tags: ['Gluten-Free', 'Magnesium', 'Warming', '390 Calories'],
            },
            {
                name: 'Smoked Mackerel on Rye with Sliced Radish',
                reason: 'Mackerel is one of the highest sources of vitamin D and Omega-3, essential for mood support and reducing prostaglandins.',
                tags: ['Omega-3', 'Vitamin D', 'Brain Health', '420 Calories'],
            },
            {
                name: 'Warm Black Bean and Sweet Potato Breakfast Burrito',
                reason: 'Black beans are an excellent source of plant-based iron and protein, while sweet potatoes provide vitamin A for skin health.',
                tags: ['High Protein', 'High Iron', 'Complex Carbs', '480 Calories'],
            },
            {
                name: 'Overnight Oats with Molasses and Walnuts',
                reason: 'Blackstrap molasses is a traditional remedy for menstruation as it is incredibly dense in iron, magnesium, and calcium.',
                tags: ['High Iron', 'Magnesium', 'Vegan', '440 Calories'],
            },
            {
                name: 'Smoothie Bowl with Spirulina, Banana, and Flaxseeds',
                reason: 'Spirulina is a concentrated source of iron. Flaxseeds provide lignans which help in gentle hormone balancing.',
                tags: ['Superfood', 'Iron-Rich', 'Omega-3', '370 Calories'],
            },
            {
                name: 'Sardines on Whole-Grain Toast with Lemon and Parsley',
                reason: 'Sardines are rich in calcium and vitamin B12. Parsley is a natural diuretic that can help reduce water retention.',
                tags: ['High Calcium', 'B12', 'Reduces Bloating', '380 Calories'],
            },
            {
                name: 'Red Lentil ‘Dal’ Breakfast Soup with Ginger',
                reason: 'Lentils are high in iron and folate. Ginger is clinically shown to be as effective as some painkillers for menstrual cramps.',
                tags: ['High Iron', 'Pain Relief', 'Warming', '290 Calories'],
            },
            {
                name: 'Cottage Cheese with Sliced Peaches and Roasted Sunflower Seeds',
                reason: 'Sunflower seeds are high in vitamin E and selenium, which help support the liver during hormonal transitions.',
                tags: ['High Protein', 'Vitamin E', 'Selenium', '330 Calories'],
            },
            {
                name: 'Amaranth Porridge with Dark Cherry Compote',
                reason: 'Amaranth is a gluten-free grain containing more iron than most others. Cherries contain melatonin to assist with period-related insomnia.',
                tags: ['High Iron', 'Sleep Support', 'Gluten-Free', '360 Calories'],
            },
            {
                name: 'Soft Boiled Eggs with Asparagus Soldiers',
                reason: 'Asparagus acts as a prebiotic to support gut health and contains vitamin K, which is essential for healthy blood clotting.',
                tags: ['Vitamin K', 'Prebiotic', 'Low Carb', '220 Calories'],
            },
            {
                name: 'Nutty Teff Porridge with Sliced Dates',
                reason: 'Teff is a tiny ancient grain with significant iron content. Dates provide a natural energy boost without a sharp glucose spike.',
                tags: ['High Iron', 'Ancient Grains', 'Magnesium', '400 Calories'],
            },
            {
                name: 'Beef Liver Pate on Toasted Spelt Bread',
                reason: 'Liver is the most bioavailable source of heme iron and B12 available, making it the gold standard for blood replenishment.',
                tags: ['Heme Iron', 'B12', 'Nutrient Dense', '310 Calories'],
            },
        ],
        lunch: [
            {
                name: 'Lentil & Sweet Potato Soup with a Crusty Roll',
                reason: 'Lentils are one of the best plant-based iron sources. Sweet potato adds beta-carotene and gentle carbohydrates to sustain energy.',
                tags: ['High Iron', 'Warming', 'Vegan', 'Fibre-Rich', '420 Calories'],
            },
            {
                name: 'Beef & Broccoli Stir-Fry with Brown Rice',
                reason: 'Lean red meat provides highly bioavailable haem iron. Broccoli adds Vitamin C to maximise absorption.',
                tags: ['High Iron', 'High Protein', 'Quick', '510 Calories'],
            },
            {
                name: 'Grilled Salmon Salad with Quinoa and Kale',
                reason: 'Salmon provides Omega-3s to ease uterine contractions, while kale and quinoa offer a double hit of plant-based iron.',
                tags: ['Omega-3', 'High Iron', 'Anti-inflammatory', '540 Calories'],
            },
            {
                name: 'Turkey and Spinach Stuffed Whole-Wheat Pitta',
                reason: 'Turkey is rich in tryptophan, which helps with mood regulation. Spinach and whole wheat provide iron and B vitamins.',
                tags: ['Mood Support', 'High Iron', 'B Vitamins', '380 Calories'],
            },
            {
                name: 'Warm Chickpea and Beetroot Salad with Feta',
                reason: 'Beetroot helps support blood flow and iron levels, while chickpeas provide fibre to help process excess oestrogen.',
                tags: ['Blood Support', 'High Fibre', 'Vegetarian', '410 Calories'],
            },
            {
                name: 'Mackerel Paté on Rye Bread with Cucumber',
                reason: 'Mackerel is high in Vitamin D and Omega-3. Rye bread is high in fibre, helping to reduce hormonal bloating.',
                tags: ['Vitamin D', 'Omega-3', 'Fibre-Rich', '460 Calories'],
            },
            {
                name: 'Chicken and Cashew Nut Stir-fry with Snap Peas',
                reason: 'Cashews are an excellent source of magnesium to help relax muscles. Chicken provides lean protein for tissue repair.',
                tags: ['Magnesium', 'High Protein', 'Mineral-Rich', '490 Calories'],
            },
            {
                name: 'Moroccan Lamb Stew with Apricots and Couscous',
                reason: 'Lamb offers highly absorbable haem iron. Dried apricots provide additional non-haem iron and potassium for fluid balance.',
                tags: ['Haem Iron', 'Potassium', 'Warming', '580 Calories'],
            },
            {
                name: 'Black Bean and Corn Quesadillas with Avocado',
                reason: 'Black beans provide iron and folate. Avocado fats help with the absorption of fat-soluble vitamins found in the vegetables.',
                tags: ['High Iron', 'Healthy Fats', 'Folate', '520 Calories'],
            },
            {
                name: 'Tuna and White Bean Salad with Lemon Dressing',
                reason: 'Tuna provides B12 and protein, while white beans are packed with iron. Lemon juice (Vitamin C) boosts iron uptake.',
                tags: ['Iron Absorption', 'High Protein', 'B12', '430 Calories'],
            },
            {
                name: 'Roast Pumpkin and Pine Nut Risotto',
                reason: 'Pumpkin is rich in Vitamin A, and pine nuts provide zinc, which is essential for immune function and skin health during your period.',
                tags: ['Zinc', 'Vitamin A', 'Vegetarian', '470 Calories'],
            },
            {
                name: 'Tempeh Grain Bowl with Edamame and Tahini',
                reason: 'Tempeh and edamame are phytoestrogens that can help gently balance hormone fluctuations. Tahini adds a boost of calcium.',
                tags: ['Hormone Balance', 'Vegan', 'High Calcium', '530 Calories'],
            },
            {
                name: 'Baked Potato with Chilli Con Carne and Spinach',
                reason: 'The combination of beef (iron) and kidney beans (fibre) provides a powerful meal for blood replenishment and digestion.',
                tags: ['Haem Iron', 'High Fibre', 'Comfort Food', '550 Calories'],
            },
            {
                name: 'Sesame Miso Tofu with Steamed Bok Choy',
                reason: 'Miso is a probiotic that supports gut health, while bok choy is a calcium-rich leafy green that helps reduce cramping.',
                tags: ['Probiotic', 'Calcium', 'Vegan', '340 Calories'],
            },
            {
                name: 'Venison Burger with Rocket Salad (No Bun)',
                reason: 'Venison is extremely high in iron and lower in fat than beef. Rocket provides bitter compounds that aid liver detoxification.',
                tags: ['Highest Iron', 'Liver Support', 'Low Carb', '380 Calories'],
            },
            {
                name: 'Prawn and Mango Summer Rolls with Peanut Sauce',
                reason: 'Prawns provide iodine for thyroid support. Peanut sauce offers healthy fats and Vitamin E to soothe breast tenderness.',
                tags: ['Iodine', 'Vitamin E', 'Light', '360 Calories'],
            },
            {
                name: 'Red Kidney Bean Soup with Brown Rice',
                reason: 'Kidney beans are exceptionally high in antioxidants and iron, providing a stable energy source to combat fatigue.',
                tags: ['Antioxidant-Rich', 'Vegan', 'Steady Energy', '440 Calories'],
            },
            {
                name: 'Egg Salad on Sourdough with Watercress',
                reason: 'Sourdough is easier on the gut than standard bread. Watercress is a potent source of Vitamin K and iron.',
                tags: ['Vitamin K', 'Gut Health', 'Vegetarian', '390 Calories'],
            },
            {
                name: 'Sardines on Toast with Tomato and Parsley',
                reason: 'Sardines provide the calcium lost during the transition into the menstrual phase. Parsley helps flush excess water.',
                tags: ['High Calcium', 'Natural Diuretic', 'Omega-3', '410 Calories'],
            },
            {
                name: 'Hummus and Roasted Vegetable Wrap',
                reason: 'Chickpea-based hummus provides manganese and iron. Whole-wheat wraps ensure a slow release of glucose.',
                tags: ['Manganese', 'High Iron', 'Vegan', '430 Calories'],
            },
        ],
        dinner: [
            {
                name: 'Slow-Cooked Lamb Tagine with Chickpeas & Apricots',
                reason: 'Lamb is rich in haem iron and zinc. Chickpeas and dried apricots add supplementary iron and anti-cramping magnesium.',
                tags: ['High Iron', 'Anti-Inflammatory', 'Zinc-Rich', '620 Calories'],
            },
            {
                name: 'Butter Bean & Tomato Bake with Feta',
                reason: 'Butter beans deliver plant-based iron and protein. Tomatoes are a source of Vitamin C to enhance absorption.',
                tags: ['High Iron', 'Vegetarian', 'Comforting', '440 Calories'],
            },
            {
                name: 'Grilled Steak with Roasted Root Vegetables and Kale',
                reason: 'Beef provides highly bioavailable haem iron, while root vegetables offer complex carbohydrates to stabilise serotonin levels.',
                tags: ['High Iron', 'B Vitamins', 'Blood Replenishment', '590 Calories'],
            },
            {
                name: 'Baked Cod with a Walnut Crust and Steamed Asparagus',
                reason: 'Walnuts provide Omega-3 fatty acids to reduce prostaglandin levels (which cause cramps), and cod is a light, lean protein.',
                tags: ['Omega-3', 'Anti-Inflammatory', 'Light', '380 Calories'],
            },
            {
                name: 'Tofu and Cashew Nut Stir-fry with Brown Rice',
                reason: 'Tofu and cashews are rich in magnesium, which acts as a natural muscle relaxant for the uterus.',
                tags: ['Magnesium-Rich', 'Vegan', 'High Protein', '480 Calories'],
            },
            {
                name: 'Spinach and Ricotta Stuffed Shells with Marinara',
                reason: 'Cooked spinach is a powerhouse of non-haem iron. The Vitamin C in the tomato sauce ensures maximum absorption.',
                tags: ['Iron Absorption', 'Vegetarian', 'Calcium-Rich', '520 Calories'],
            },
            {
                name: 'Venison Stew with Red Wine and Mushrooms',
                reason: 'Venison is one of the leanest red meats and is exceptionally high in iron. Mushrooms provide Vitamin D to support mood.',
                tags: ['Highest Iron', 'Warming', 'Vitamin D', '490 Calories'],
            },
            {
                name: 'Mackerel Fillets with Warm Potato and Chive Salad',
                reason: 'Oily fish provides the essential fats needed to combat menstrual inflammation and joint pain.',
                tags: ['Omega-3', 'Healthy Fats', 'Anti-Inflammatory', '550 Calories'],
            },
            {
                name: 'Red Lentil and Spinach Dahl with Turmeric',
                reason: 'Lentils provide iron, while turmeric and ginger act as powerful natural anti-inflammatories for pain relief.',
                tags: ['High Iron', 'Vegan', 'Pain Relief', '410 Calories'],
            },
            {
                name: 'Turkey Meatballs in a Rich Tomato and Basil Sauce',
                reason: 'Turkey is high in tryptophan, which aids in the production of serotonin to help with period-related low mood.',
                tags: ['Mood Support', 'High Protein', 'B Vitamins', '460 Calories'],
            },
            {
                name: 'Quinoa Stuffed Bell Peppers with Black Beans',
                reason: 'Black beans and quinoa offer a double dose of plant protein and iron. Peppers are high in Vitamin C.',
                tags: ['Gluten-Free', 'High Iron', 'Vegan', '390 Calories'],
            },
            {
                name: 'Sesame Crusted Salmon with Sautéed Pak Choi',
                reason: 'Salmon provides Vitamin B12 and Omega-3, while Pak Choi is a highly absorbable source of calcium.',
                tags: ['Omega-3', 'Calcium', 'B12', '510 Calories'],
            },
            {
                name: 'Beef and Guinness Stew with Carrots and Potatoes',
                reason: 'Traditional slow-cooked beef provides heme iron. The iron content is slightly boosted by the malt in the stout.',
                tags: ['Haem Iron', 'Comforting', 'Nutrient-Dense', '580 Calories'],
            },
            {
                name: 'Roasted Chicken Thighs with Sweet Potato and Broccoli',
                reason: 'Chicken thighs contain more iron than breast meat. Broccoli provides fibre and calcium to help with bloating.',
                tags: ['High Iron', 'Fibre-Rich', 'Vitamin A', '540 Calories'],
            },
            {
                name: 'Black Bean Chilli with Dark Chocolate and Avocado',
                reason: 'Dark chocolate (85%+) adds magnesium and antioxidants. Beans provide the iron and fibre needed for hormone processing.',
                tags: ['Magnesium', 'High Iron', 'Antioxidant-Rich', '490 Calories'],
            },
            {
                name: 'Prawn and Pea Risotto with Lemon and Parsley',
                reason: 'Prawns are rich in iodine and selenium. Parsley acts as a natural diuretic to reduce water retention.',
                tags: ['Iodine', 'Reduces Bloating', 'Selenium', '470 Calories'],
            },
            {
                name: 'Tempeh Stir-fry with Broccoli and Sesame Seeds',
                reason: 'Tempeh is a fermented soy product that is easier to digest and provides plant-based iron and probiotics.',
                tags: ['Probiotic', 'Vegan', 'High Iron', '430 Calories'],
            },
            {
                name: 'Liver and Onions with Mashed Cauliflower',
                reason: 'Liver is the most concentrated source of iron and B12 available, ideal for those with very heavy flows.',
                tags: ['Bioavailable Iron', 'B12', 'Nutrient-Dense', '380 Calories'],
            },
            {
                name: 'Squash and Chickpea Curry with Coconut Milk',
                reason: 'Chickpeas provide iron, while the healthy fats in coconut milk help soothe the digestive system.',
                tags: ['High Iron', 'Vegan', 'Warming', '460 Calories'],
            },
            {
                name: 'Mussels Steamed in Garlic, Tomato, and White Wine',
                reason: 'Mussels are incredibly high in iron, B12, and manganese, making them a perfect restorative meal.',
                tags: ['High Iron', 'B12', 'Manganese', '350 Calories'],
            },
        ],
        snacks: [
            {
                name: 'Dark Chocolate (70%+) with Walnut Halves',
                reason: 'Dark chocolate is high in magnesium, which helps relax uterine muscles and ease cramping.',
                tags: ['Magnesium', 'Anti-Cramp', 'Quick', '180 Calories'],
            },
            {
                name: 'Warm Golden Milk (Turmeric Latte)',
                reason: 'Turmeric has well-studied anti-inflammatory properties. Can help ease period pain and bloating.',
                tags: ['Anti-Inflammatory', 'Warming', 'Caffeine-Free', '120 Calories'],
            },
            {
                name: 'Pumpkin Seeds (Pepitas)',
                reason: 'A powerhouse of magnesium and zinc, which can help reduce the severity of cramps and support skin health.',
                tags: ['High Magnesium', 'Zinc-Rich', 'Vegan', '160 Calories'],
            },
            {
                name: 'Greek Yogurt with Sliced Banana and Honey',
                reason: 'Bananas are high in Vitamin B6 and potassium, which help regulate mood and reduce water retention.',
                tags: ['Potassium', 'B Vitamins', 'Probiotic', '210 Calories'],
            },
            {
                name: 'Hummus with Carrot and Cucumber Sticks',
                reason: 'Chickpeas provide plant-based iron and fibre, while the high water content in cucumbers helps with hydration.',
                tags: ['Hydrating', 'High Fibre', 'Iron-Rich', '150 Calories'],
            },
            {
                name: 'Dried Apricots and Almonds',
                reason: 'Apricots are a concentrated source of non-haem iron, and almonds provide Vitamin E to help with breast tenderness.',
                tags: ['High Iron', 'Vitamin E', 'Portable', '190 Calories'],
            },
            {
                name: 'Boiled Egg with a Pinch of Sea Salt',
                reason: 'A quick source of protein and B12 to keep energy levels stable and repair tissues.',
                tags: ['High Protein', 'B12', 'Quick', '75 Calories'],
            },
            {
                name: 'Chia Seed Pudding with Berries',
                reason: 'Chia seeds are rich in Omega-3 fatty acids, which help lower the inflammatory markers that cause pain.',
                tags: ['Omega-3', 'Anti-Inflammatory', 'Fibre-Rich', '180 Calories'],
            },
            {
                name: 'Edamame Beans with Sea Salt',
                reason: 'Contains soy isoflavones which can gently mimic oestrogen to help balance hormone drops.',
                tags: ['Hormone Support', 'Plant Protein', 'Vegan', '120 Calories'],
            },
            {
                name: 'Apple Slices with Nut Butter',
                reason: 'The combination of fibre and healthy fats prevents blood sugar spikes, keeping "hangry" feelings at bay.',
                tags: ['Steady Energy', 'Healthy Fats', 'Fibre', '200 Calories'],
            },
            {
                name: 'Cottage Cheese with Pineapple',
                reason: 'Pineapple contains bromelain, an enzyme that helps with muscle relaxation and digestion.',
                tags: ['Muscle Relaxant', 'High Protein', 'Enzymes', '160 Calories'],
            },
            {
                name: 'Roasted Chickpeas with Cumin and Paprika',
                reason: 'A crunchy, high-fibre alternative to crisps that provides steady iron and manganese.',
                tags: ['Crunchy', 'High Iron', 'Manganese', '140 Calories'],
            },
            {
                name: 'Goji Berries and Dark Soy Ginger Thins',
                reason: 'Goji berries are high in antioxidants, and ginger is excellent for settling a nauseous or bloated stomach.',
                tags: ['Antioxidant', 'Digestion', 'Iron-Rich', '130 Calories'],
            },
            {
                name: 'Avocado on Crispbread',
                reason: 'Provides healthy monounsaturated fats and potassium to help fight fatigue and bloating.',
                tags: ['Healthy Fats', 'Potassium', 'Quick', '190 Calories'],
            },
            {
                name: 'Brazil Nuts (2-3 per day)',
                reason: 'An incredible source of selenium, which supports the liver in detoxifying excess hormones.',
                tags: ['Selenium', 'Liver Support', 'Mineral-Rich', '90 Calories'],
            },
            {
                name: 'Prunes (Dried Plums)',
                reason: 'Naturally high in iron and highly effective for keeping digestion moving if the cycle causes constipation.',
                tags: ['High Iron', 'Digestive Health', 'Vegan', '100 Calories'],
            },
            {
                name: 'Small Bowl of Miso Soup',
                reason: 'Warm and comforting, miso provides probiotics for gut health and salt to replenish electrolytes.',
                tags: ['Probiotic', 'Hydrating', 'Warming', '45 Calories'],
            },
            {
                name: 'Baked Kale Chips',
                reason: 'A light way to consume leafy greens that are rich in Vitamin K and calcium for bone and blood health.',
                tags: ['Vitamin K', 'Low Calorie', 'Calcium', '60 Calories'],
            },
            {
                name: 'Dates stuffed with Tahini',
                reason: 'Tahini is a great source of calcium and healthy fats, while dates provide iron and natural sweetness.',
                tags: ['Calcium-Rich', 'High Iron', 'Sweet', '180 Calories'],
            },
            {
                name: 'Beef Jerky or Biltong',
                reason: 'A very high-protein, high-iron snack that is perfect for replenishing blood loss on the go.',
                tags: ['Haem Iron', 'High Protein', 'Paleo', '110 Calories'],
            },
        ],
    },
 
    FOLLICULAR: {
        breakfast: [
            {
                name: 'Green Smoothie Bowl with Granola, Kiwi & Flaxseeds',
                reason: 'Rising oestrogen pairs well with phytoestrogen-containing flaxseeds. Kiwi adds Vitamin C to support the immune system.',
                tags: ['Phytoestrogen', 'Energising', 'Vegan', '380 Calories'],
            },
            {
                name: 'Live Greek Yoghurt with Berries, Honey & Pumpkin Seeds',
                reason: 'Probiotic-rich yoghurt supports gut health and oestrogen metabolism. Pumpkin seeds are rich in zinc for hormone production.',
                tags: ['Probiotic', 'Zinc-Rich', 'Quick', 'Vegetarian', '320 Calories'],
            },
            {
                name: 'Sprouted Grain Toast with Smashed Avocado and Sauerkraut',
                reason: 'Sprouted grains are easier to digest, and sauerkraut provides probiotics to help the liver metabolise increasing oestrogen.',
                tags: ['Probiotic', 'Gut Health', 'Vegan', '350 Calories'],
            },
            {
                name: 'Overnight Oats with Soy Milk, Mango and Hemp Hearts',
                reason: 'Soy milk contains gentle phytoestrogens, and hemp hearts provide essential fatty acids for follicle development.',
                tags: ['Phytoestrogen', 'Omega-3', 'Plant Protein', '410 Calories'],
            },
            {
                name: 'Buckwheat Crepes with Fresh Strawberries and Ricotta',
                reason: 'Buckwheat supports blood sugar stability as energy levels rise. Strawberries provide antioxidants for egg health.',
                tags: ['Antioxidant-Rich', 'Gluten-Free', 'Energising', '340 Calories'],
            },
            {
                name: 'Poached Eggs with Steamed Asparagus and Hollandaise',
                reason: 'Asparagus is a prebiotic that feeds good gut bacteria. Eggs provide the protein needed for the follicular surge.',
                tags: ['Prebiotic', 'High Protein', 'B Vitamins', '390 Calories'],
            },
            {
                name: 'Quinoa Breakfast Porridge with Pomegranate and Cashews',
                reason: 'Quinoa is a light, energising grain. Pomegranate is rich in polyphenols that support vascular health as the uterine lining builds.',
                tags: ['Polyphenols', 'Gluten-Free', 'Mineral-Rich', '370 Calories'],
            },
            {
                name: 'Chia Jam on Rye Toast with Sunflower Seed Butter',
                reason: 'Sunflower seeds provide Vitamin E and selenium, supporting the ovaries during the maturation of the egg.',
                tags: ['Vitamin E', 'Selenium', 'High Fibre', '310 Calories'],
            },
            {
                name: 'Smoked Salmon and Cucumber Carpaccio on Sourdough',
                reason: 'Healthy fats from salmon support hormone synthesis, and cucumber provides hydration for cervical mucus production.',
                tags: ['Omega-3', 'Hydrating', 'High Protein', '360 Calories'],
            },
            {
                name: 'Tempeh "Bacon" and Spinach Breakfast Wrap',
                reason: 'Fermented soy (tempeh) helps balance oestrogen levels. Spinach provides folate, which is crucial in this phase.',
                tags: ['Phytoestrogen', 'Folate', 'Vegan', '340 Calories'],
            },
            {
                name: 'Matcha Green Tea Latte with Almond Flour Blueberry Muffins',
                reason: 'Matcha provides a steady energy boost without the jitters. Almond flour offers vitamin E for healthy follicles.',
                tags: ['Antioxidant-Rich', 'Steady Energy', 'Vitamin E', '420 Calories'],
            },
            {
                name: 'Cottage Cheese Bowl with Pineapple and Pumpkin Seeds',
                reason: 'Pineapple contains bromelain to support healthy blood flow, and pumpkin seeds provide zinc for healthy cell division.',
                tags: ['Enzymes', 'Zinc-Rich', 'High Protein', '290 Calories'],
            },
            {
                name: 'Lentil Flour Savoury Pancakes with Tomato Salsa',
                reason: 'Lentil flour is high in fibre and iron. Tomatoes provide Vitamin C to assist in building the endometrial lining.',
                tags: ['High Fibre', 'Iron-Rich', 'Vegan', '330 Calories'],
            },
            {
                name: 'Boiled Eggs with Kimchi and Sliced Radish',
                reason: 'Kimchi supports the "oestrobolome" (gut bacteria that process oestrogen). Radish aids liver detoxification.',
                tags: ['Probiotic', 'Liver Support', 'B Vitamins', '240 Calories'],
            },
            {
                name: 'Smoothie with Maca Root, Banana, and Almond Milk',
                reason: 'Maca is an adaptogen that can help balance the endocrine system as hormone levels transition.',
                tags: ['Adaptogen', 'Hormone Balance', 'Vegan', '280 Calories'],
            },
            {
                name: 'Kefir Bowl with Raspberries, Pistachios and Bee Pollen',
                reason: 'Kefir is a potent probiotic. Bee pollen provides a dense array of enzymes and B-vitamins for rising energy.',
                tags: ['Probiotic', 'Vitamin-Dense', 'Vegetarian', '350 Calories'],
            },
            {
                name: 'Rye Crispbread with Beetroot Hummus and Sprouts',
                reason: 'Beetroot supports nitric oxide production for blood flow, and sprouts are at their peak nutrient density.',
                tags: ['Blood Flow', 'Nutrient-Dense', 'Vegan', '260 Calories'],
            },
            {
                name: 'Frittata with Artichoke Hearts and Spring Onions',
                reason: 'Artichokes are excellent for liver health, helping the body process the uptick in oestrogen production.',
                tags: ['Liver Support', 'High Protein', 'Vegetarian', '310 Calories'],
            },
            {
                name: 'Apple and Carrot Grated Slaw with Walnuts and Yoghurt',
                reason: 'Raw carrots contain unique fibres that bind to excess oestrogen and help move it out of the body.',
                tags: ['Oestrogen Metabolism', 'Crunchy', 'High Fibre', '290 Calories'],
            },
            {
                name: 'Tofu Scramble with Nutritional Yeast and Parsley',
                reason: 'Nutritional yeast is high in B-vitamins for energy metabolism. Parsley supports kidney function and reduces mild puffiness.',
                tags: ['B-Complex', 'Vegan', 'High Protein', '320 Calories'],
            },
        ],
        lunch: [
            {
                name: 'Vibrant Rainbow Salad with Poached Salmon & Lemon Vinaigrette',
                reason: 'Salmon\'s omega-3s reduce inflammation and support brain function. A variety of coloured vegetables provides a broad spectrum of antioxidants.',
                tags: ['Omega-3', 'Anti-Inflammatory', 'High Protein', '450 Calories'],
            },
            {
                name: 'Edamame & Quinoa Nourish Bowl with Tahini Dressing',
                reason: 'Edamame contains phytoestrogens that gently support rising oestrogen levels. Quinoa is a complete protein source.',
                tags: ['Phytoestrogen', 'Complete Protein', 'Vegan', '480 Calories'],
            },
            {
                name: 'Grilled Chicken & Mango Salad with Lime & Mint',
                reason: 'Lean protein supports muscle repair as energy rises. Mango provides Vitamin A for healthy cervical fluid production.',
                tags: ['High Protein', 'Energising', 'Fresh', '390 Calories'],
            },
            {
                name: 'Tempeh & Broccoli Poke Bowl with Pickled Ginger',
                reason: 'Fermented tempeh provides phytoestrogens to balance oestrogen, while ginger aids the liver in hormone processing.',
                tags: ['Phytoestrogen', 'Gut Health', 'Vegan', '440 Calories'],
            },
            {
                name: 'Steamed Trout with Asparagus and New Potatoes',
                reason: 'Trout is a lighter source of Omega-3s. Asparagus acts as a prebiotic to support the oestrobolome.',
                tags: ['Omega-3', 'Prebiotic', 'Light', '410 Calories'],
            },
            {
                name: 'Raw Carrot & Beetroot Slaw with Roasted Chickpeas',
                reason: 'Raw carrots contain unique fibres that help the body excrete excess oestrogen to prevent hormonal dominance.',
                tags: ['Oestrogen Metabolism', 'High Fibre', 'Vegan', '360 Calories'],
            },
            {
                name: 'Lentil & Apricot Tabbouleh with Fresh Parsley',
                reason: 'Parsley is a natural diuretic to keep bloating at bay. Lentils provide iron for the building endometrial lining.',
                tags: ['Iron-Rich', 'Detoxifying', 'Vegan', '380 Calories'],
            },
            {
                name: 'Prawn & Avocado Rice Paper Rolls',
                reason: 'A light, hydrating lunch. Avocado healthy fats are essential for the synthesis of rising hormones.',
                tags: ['Hydrating', 'Healthy Fats', 'Low Calorie', '310 Calories'],
            },
            {
                name: 'Tuna & White Bean Salad with Artichoke Hearts',
                reason: 'Artichokes support gallbladder and liver health, ensuring efficient metabolism of the follicular oestrogen surge.',
                tags: ['Liver Support', 'High Protein', 'B Vitamins', '420 Calories'],
            },
            {
                name: 'Zucchini Noodles with Walnut Pesto and Cherry Tomatoes',
                reason: 'Walnuts provide the Vitamin E needed for follicle maturation. Zucchini is hydrating and low-impact on blood sugar.',
                tags: ['Vitamin E', 'Anti-Inflammatory', 'Vegetarian', '370 Calories'],
            },
            {
                name: 'Turkey & Cranberry Spinach Wrap with Sprouts',
                reason: 'Sprouts are nutrient-dense powerhouses. Turkey provides tryptophan to keep mood stable as hormones shift.',
                tags: ['Nutrient-Dense', 'Mood Support', 'Quick', '350 Calories'],
            },
            {
                name: 'Miso-Glazed Aubergine with Black Rice and Bok Choy',
                reason: 'Bok choy is a cruciferous vegetable that helps the liver safely break down oestrogen metabolites.',
                tags: ['Liver Support', 'Vegan', 'Cruciferous', '390 Calories'],
            },
            {
                name: 'Mediterranean Stuffed Peppers with Pine Nuts and Currants',
                reason: 'Pine nuts are rich in zinc, which is crucial for the cell division required in the follicular phase.',
                tags: ['Zinc-Rich', 'Antioxidant', 'Vegetarian', '340 Calories'],
            },
            {
                name: 'Kimchi & Fried Rice with Spring Greens',
                reason: 'Probiotic kimchi supports gut health, while spring greens provide the folate needed for this phase of the cycle.',
                tags: ['Probiotic', 'Folate-Rich', 'Gut Health', '410 Calories'],
            },
            {
                name: 'Lemony Broad Bean and Feta Smash on Sourdough',
                reason: 'Broad beans (fava beans) are high in fibre and folate. Sourdough is fermented for easier digestion.',
                tags: ['High Fibre', 'Folate', 'Vegetarian', '380 Calories'],
            },
            {
                name: 'Roasted Cauliflower and Tahini Salad with Pomegranate',
                reason: 'Cauliflower helps balance oestrogen. Tahini provides calcium and healthy fats for hormone production.',
                tags: ['Hormone Balance', 'Calcium', 'Vegan', '370 Calories'],
            },
            {
                name: 'Smoked Mackerel and Apple Salad with Mixed Leaves',
                reason: 'The acidity of the apple and the fats in the mackerel provide a perfect energy balance for rising activity.',
                tags: ['Omega-3', 'Energising', 'Healthy Fats', '440 Calories'],
            },
            {
                name: 'Sprouted Mung Bean Salad with Chili and Lime',
                reason: 'Sprouted beans have increased bioavailability of nutrients, supporting the body’s metabolic ramp-up.',
                tags: ['Bioavailable', 'Vegan', 'Light', '320 Calories'],
            },
            {
                name: 'Chicken and Kimchi Pitta with Shredded Cabbage',
                reason: 'Cabbage is a cruciferous powerhouse that supports the liver’s detoxification of oestrogen.',
                tags: ['Cruciferous', 'High Protein', 'Probiotic', '430 Calories'],
            },
            {
                name: 'Cold Soba Noodle Salad with Snap Peas and Sesame',
                reason: 'Buckwheat noodles (soba) keep blood sugar stable. Sesame seeds provide zinc and lignans for hormone support.',
                tags: ['Zinc-Rich', 'Low GI', 'Vegan', '390 Calories'],
            },
        ],
        dinner: [
            {
                name: 'Baked Trout with Roasted Asparagus, New Potatoes & Dill',
                reason: 'Asparagus is a prebiotic, feeding beneficial gut bacteria. Trout is high in omega-3 fatty acids and B12.',
                tags: ['Omega-3', 'Prebiotic', 'B12-Rich', '480 Calories'],
            },
            {
                name: 'Chicken & Fermented Kimchi Fried Rice',
                reason: 'Fermented kimchi provides live cultures to support the gut microbiome, which plays a role in regulating oestrogen levels.',
                tags: ['Probiotic', 'High Protein', 'Gut Health', '520 Calories'],
            },
            {
                name: 'Tofu & Broccoli Stir-fry with Cashews and Black Rice',
                reason: 'Broccoli is a cruciferous vegetable that contains indole-3-carbinol, helping the liver metabolise oestrogen safely.',
                tags: ['Cruciferous', 'Oestrogen Metabolism', 'Vegan', '460 Calories'],
            },
            {
                name: 'Grilled Sea Bass with Fennel and Orange Salad',
                reason: 'Fennel supports digestion and reduces puffiness, while the vitamin C in orange aids the building of the uterine lining.',
                tags: ['Light', 'Vitamin C', 'Digestion', '420 Calories'],
            },
            {
                name: 'Lean Turkey Meatballs with Zucchini Noodles and Pesto',
                reason: 'Turkey provides selenium for thyroid health, and the healthy fats in pine nut pesto support rising hormone production.',
                tags: ['Thyroid Support', 'Low Carb', 'Healthy Fats', '440 Calories'],
            },
            {
                name: 'Lentil and Spinach Curry with Brown Rice',
                reason: 'Lentils provide the iron and folate necessary for the proliferative phase of the cycle when the lining thickens.',
                tags: ['Folate-Rich', 'High Iron', 'Plant Protein', '490 Calories'],
            },
            {
                name: 'Cod en Papillote with Spring Greens and Lemon',
                reason: 'Steaming fish in parchment keeps it light and lean. Spring greens are packed with folate for cellular health.',
                tags: ['Folate', 'Lean Protein', 'Fresh', '380 Calories'],
            },
            {
                name: 'Tempeh Grain Bowl with Pickled Carrots and Edamame',
                reason: 'Phytoestrogens in soy products like tempeh and edamame gently support the natural oestrogen rise.',
                tags: ['Phytoestrogen', 'Gut Health', 'Vegan', '470 Calories'],
            },
            {
                name: 'Roasted Chicken with Artichoke Hearts and Olives',
                reason: 'Artichokes are a bitter food that stimulates the gallbladder, aiding the liver in hormone clearance.',
                tags: ['Liver Support', 'High Protein', 'Mineral-Rich', '510 Calories'],
            },
            {
                name: 'Prawn and Snap Pea Risotto with Fresh Mint',
                reason: 'A lighter carbohydrate option. Prawns provide iodine to support the metabolic uptick during this phase.',
                tags: ['Iodine-Rich', 'Energising', 'Fresh', '460 Calories'],
            },
            {
                name: 'Quinoa Stuffed Courgettes with Pine Nuts and Herbs',
                reason: 'Quinoa is an energising complete protein. Pine nuts provide zinc, which is essential for follicle development.',
                tags: ['Zinc-Rich', 'Complete Protein', 'Vegetarian', '430 Calories'],
            },
            {
                name: 'Miso-Glazed Salmon with Sautéed Pak Choi',
                reason: 'The fermentation in miso supports the gut, while Pak Choi provides calcium and further cruciferous support.',
                tags: ['Probiotic', 'Cruciferous', 'Omega-3', '490 Calories'],
            },
            {
                name: 'Warm Buckwheat Salad with Roasted Beetroot and Goat’s Cheese',
                reason: 'Buckwheat supports blood sugar stability. Beetroot improves circulation to the reproductive organs.',
                tags: ['Blood Flow', 'Gluten-Free', 'Vegetarian', '410 Calories'],
            },
            {
                name: 'Venison Steak with a Berry Reduction and Steamed Kale',
                reason: 'Venison is a lean, iron-rich protein. Berries provide antioxidants to protect developing follicles.',
                tags: ['Antioxidant-Rich', 'High Iron', 'Lean Protein', '530 Calories'],
            },
            {
                name: 'Chickpea and Cauliflower Tacos with Avocado Crema',
                reason: 'Cauliflower supports oestrogen balance, and the fibre in chickpeas helps bind to and excrete used hormones.',
                tags: ['High Fibre', 'Hormone Balance', 'Vegan', '450 Calories'],
            },
            {
                name: 'Sesame Crusted Tuna Steaks with Seaweed Salad',
                reason: 'Tuna provides high-quality protein, and seaweed offers trace minerals like iodine for endocrine health.',
                tags: ['Iodine', 'Mineral-Rich', 'High Protein', '440 Calories'],
            },
            {
                name: 'Moroccan Spiced Chicken with Apricot and Chickpea Tagine',
                reason: 'A lighter take on a tagine. Apricots provide potassium to manage fluid balance as hormones rise.',
                tags: ['Potassium', 'B Vitamins', 'Energising', '480 Calories'],
            },
            {
                name: 'Stir-fried Beef Strips with Mangetout and Baby Corn',
                reason: 'Beef provides B12 for energy, while the quick cooking method keeps the vegetables crisp and nutrient-dense.',
                tags: ['B12-Rich', 'Iron', 'Quick', '500 Calories'],
            },
            {
                name: 'Roasted Root Vegetable Frittata with a Side of Rocket',
                reason: 'Eggs provide choline for brain health. Rocket is a bitter green that supports liver detoxification processes.',
                tags: ['Choline', 'Liver Support', 'Vegetarian', '390 Calories'],
            },
            {
                name: 'Steamed Mussels with Garlic, White Wine and Parsley',
                reason: 'Mussels are dense in iron and manganese. Parsley acts as a natural diuretic to prevent early cycle bloating.',
                tags: ['High Iron', 'Natural Diuretic', 'Light', '360 Calories'],
            },
        ],
        snacks: [
            {
                name: 'Apple Slices with Almond Butter',
                reason: 'A perfect balance of fibre, healthy fats, and natural sugars for steady energy during this higher-activity phase.',
                tags: ['Steady Energy', 'Quick', 'Vegan', '210 Calories'],
            },
            {
                name: 'A Small Handful of Mixed Nuts & Seeds',
                reason: 'Brazil nuts, pumpkin seeds, and sunflower seeds all provide minerals that support hormone synthesis.',
                tags: ['Zinc', 'Selenium', 'Quick', 'Vegan', '180 Calories'],
            },
            {
                name: 'Raw Carrot Sticks with Tahini Dip',
                reason: 'Raw carrots contain a unique fibre that binds to excess oestrogen and helps the body excrete it. Tahini provides calcium.',
                tags: ['Oestrogen Metabolism', 'Calcium-Rich', 'Vegan', '160 Calories'],
            },
            {
                name: 'Fresh Mango Slices with Lime & Chilli',
                reason: 'Mango provides Vitamin A, which is essential for healthy follicular development and cervical mucus production.',
                tags: ['Vitamin A', 'Energising', 'Vegan', '110 Calories'],
            },
            {
                name: 'Kefir Drink with a Handful of Raspberries',
                reason: 'Kefir is a potent probiotic that supports the oestrobolome, the gut bacteria responsible for metabolising oestrogen.',
                tags: ['Probiotic', 'Gut Health', 'Antioxidant', '140 Calories'],
            },
            {
                name: 'Pumpkin Seed Butter on Rice Cakes',
                reason: 'Pumpkin seeds are exceptionally high in zinc, which is necessary for healthy cell division and egg maturation.',
                tags: ['Zinc-Rich', 'Magnesium', 'Quick', '190 Calories'],
            },
            {
                name: 'Edamame Beans with Sea Salt',
                reason: 'These provide gentle phytoestrogens to support the follicular surge and plant-based protein for steady energy.',
                tags: ['Phytoestrogen', 'High Protein', 'Vegan', '150 Calories'],
            },
            {
                name: 'Sliced Pear with Walnuts',
                reason: 'Pears are hydrating and high in fibre, while walnuts provide the Omega-3s needed for hormone synthesis.',
                tags: ['Omega-3', 'Hydrating', 'Fibre-Rich', '170 Calories'],
            },
            {
                name: 'Beetroot Hummus with Oatcakes',
                reason: 'Beetroot supports nitric oxide production, improving blood flow to the ovaries and reproductive organs.',
                tags: ['Blood Flow', 'Iron-Rich', 'Vegan', '230 Calories'],
            },
            {
                name: 'Hard-Boiled Egg with Paprika',
                reason: 'Eggs are a source of choline, which supports brain health and neurotransmitter balance as oestrogen rises.',
                tags: ['Choline', 'High Protein', 'B Vitamins', '80 Calories'],
            },
            {
                name: 'Goji Berries and Coconut Flakes',
                reason: 'Goji berries are packed with antioxidants that protect developing follicles from oxidative stress.',
                tags: ['Antioxidant-Rich', 'Superfood', 'Vegan', '130 Calories'],
            },
            {
                name: 'Cucumber Slices with Smoked Salmon',
                reason: 'A hydrating snack that provides essential fatty acids and protein without being heavy or causing bloating.',
                tags: ['Omega-3', 'Hydrating', 'High Protein', '120 Calories'],
            },
            {
                name: 'Sunflower Seeds and Dried Apricots',
                reason: 'Sunflower seeds provide Vitamin E for follicular health, and apricots offer a light iron boost.',
                tags: ['Vitamin E', 'Iron-Rich', 'Portable', '160 Calories'],
            },
            {
                name: 'Greek Yoghurt with Bee Pollen',
                reason: 'Bee pollen is rich in B-vitamins and enzymes, supporting the natural increase in energy during this phase.',
                tags: ['B Vitamins', 'Enzymes', 'Probiotic', '150 Calories'],
            },
            {
                name: 'Matcha Bliss Balls (Cashew & Matcha)',
                reason: 'Matcha provides L-theanine for focused energy, helping you take advantage of the increased mental clarity in this phase.',
                tags: ['Steady Energy', 'Antioxidant', 'Vegan', '220 Calories'],
            },
            {
                name: 'Artichoke Hearts (Jarred) with Lemon',
                reason: 'Artichokes support the gallbladder and liver, helping the body efficiently process and clear used hormones.',
                tags: ['Liver Support', 'Digestion', 'Vegan', '90 Calories'],
            },
            {
                name: 'A Piece of Papaya with Black Seeds',
                reason: 'Papaya contains enzymes that aid digestion and is high in Vitamin C, supporting immune function as you become more active.',
                tags: ['Enzymes', 'Vitamin C', 'Vegan', '120 Calories'],
            },
            {
                name: 'Roasted Broad Beans (Fava Beans)',
                reason: 'A crunchy snack high in folate and fibre, supporting the rapid cell growth occurring in the uterine lining.',
                tags: ['Folate-Rich', 'High Fibre', 'Vegan', '140 Calories'],
            },
            {
                name: 'Fresh Strawberries dipped in Cacao Nibs',
                reason: 'Antioxidants in berries and magnesium in cacao support muscle function and protect cellular health.',
                tags: ['Antioxidant', 'Magnesium', 'Low GI', '100 Calories'],
            },
            {
                name: 'Sprouted Grain Toast with Miso Tahini',
                reason: 'Sprouted grains are nutrient-dense, and miso provides probiotics to support a healthy hormone metabolism.',
                tags: ['Probiotic', 'Nutrient-Dense', 'Vegan', '200 Calories'],
            },
        ]
    },
 
    OVULATORY: {
        breakfast: [
            {
                name: 'Açaí Bowl with Banana, Chia Seeds & Fresh Berries',
                reason: 'Açaí and mixed berries are high in antioxidants, which help metabolise the oestrogen peak and reduce oxidative stress.',
                tags: ['Antioxidants', 'Energising', 'Vegan', '380 Calories'],
            },
            {
                name: 'Smashed Avocado on Sourdough with a Poached Egg & Chilli Flakes',
                reason: 'Avocado provides healthy fats and Vitamin E to support the egg release process. Sourdough is easier to digest than standard bread.',
                tags: ['Healthy Fats', 'Vitamin E', 'High Fibre', '420 Calories'],
            },
            {
                name: 'Kefir Smoothie with Spinach, Pineapple and Flaxseeds',
                reason: 'Kefir supports the gut microbiome, while pineapple contains bromelain to manage the mild inflammation associated with ovulation.',
                tags: ['Probiotic', 'Anti-Inflammatory', 'Digestive Health', '280 Calories'],
            },
            {
                name: 'Quinoa Fruit Salad with Mint and Toasted Pistachios',
                reason: 'Quinoa provides light, sustained energy for peak activity levels. Pistachios are rich in antioxidants and healthy fats.',
                tags: ['Antioxidant-Rich', 'Energising', 'Gluten-Free', '310 Calories'],
            },
            {
                name: 'Smoked Salmon and Asparagus Omelette',
                reason: 'Asparagus is a natural diuretic to help with mid-cycle puffiness, and salmon provides Omega-3s for hormone regulation.',
                tags: ['Omega-3', 'High Protein', 'B Vitamins', '340 Calories'],
            },
            {
                name: 'Red Lentil Pancakes with Savoury Tomato Chutney',
                reason: 'Lentils provide the fibre necessary to bind to and excrete the peak oestrogen once it has been used.',
                tags: ['Oestrogen Metabolism', 'High Fibre', 'Vegan', '320 Calories'],
            },
            {
                name: 'Greek Yoghurt with Pomegranate Seeds and Walnuts',
                reason: 'Pomegranate is packed with polyphenols to support vascular health and blood flow to the reproductive organs.',
                tags: ['Polyphenols', 'Healthy Fats', 'Probiotic', '290 Calories'],
            },
            {
                name: 'Buckwheat Porridge with Fresh Figs and Hemp Seeds',
                reason: 'Buckwheat is a gluten-free grain that supports blood sugar. Hemp seeds provide a perfect ratio of essential fatty acids.',
                tags: ['Hormone Support', 'Mineral-Rich', 'Gluten-Free', '360 Calories'],
            },
            {
                name: 'Tofu Scramble with Turmeric, Kale and Cherry Tomatoes',
                reason: 'Turmeric helps manage the inflammatory response during ovulation. Kale provides the fibre needed for hormone clearance.',
                tags: ['Anti-Inflammatory', 'Vegan', 'High Fibre', '260 Calories'],
            },
            {
                name: 'Overnight Bircher Muesli with Grated Apple and Almonds',
                reason: 'Raw apple contains calcium d-glucarate, which assists the liver in processing the mid-cycle oestrogen peak.',
                tags: ['Liver Support', 'High Fibre', 'Steady Energy', '390 Calories'],
            },
            {
                name: 'Poached Eggs on Bed of Sautéed Swiss Chard',
                reason: 'Swiss chard is rich in magnesium and Vitamin K, supporting muscle function and healthy blood flow.',
                tags: ['Magnesium', 'Vitamin K', 'High Protein', '210 Calories'],
            },
            {
                name: 'Smoothie Bowl with Spirulina, Maca and Frozen Berries',
                reason: 'Maca is an adaptogen that supports the endocrine system during peak hormonal shifts.',
                tags: ['Adaptogen', 'Antioxidant', 'Vegan', '320 Calories'],
            },
            {
                name: 'Ricotta and Honey on Toasted Rye with Sliced Strawberries',
                reason: 'Rye is high in fibre to prevent oestrogen reabsorption. Strawberries offer a high dose of Vitamin C.',
                tags: ['Vitamin C', 'Fibre-Rich', 'Vegetarian', '290 Calories'],
            },
            {
                name: 'Black Bean Breakfast Tacos with Radish and Lime',
                reason: 'Radishes contain compounds that support liver detoxification pathways during the oestrogen surge.',
                tags: ['Liver Support', 'Iron-Rich', 'Vegan', '350 Calories'],
            },
            {
                name: 'Chia Seed Pudding with Matcha and Toasted Coconut',
                reason: 'Matcha provides a calm energy boost, and chia seeds offer the fibre and Omega-3s essential for this phase.',
                tags: ['Steady Energy', 'Omega-3', 'Vegan', '280 Calories'],
            },
            {
                name: 'Scrambled Silken Tofu with Chives on Sprouted Bread',
                reason: 'Sprouted bread has a lower glycaemic index, helping to stabilise energy during high-activity days.',
                tags: ['Low GI', 'Phytoestrogen', 'Vegan', '310 Calories'],
            },
            {
                name: 'Cottage Cheese with Sliced Kiwi and Sunflower Seeds',
                reason: 'Kiwi is exceptionally high in Vitamin C, which is vital for the health of the follicle and the corpus luteum.',
                tags: ['Vitamin C', 'High Protein', 'Zinc-Rich', '240 Calories'],
            },
            {
                name: 'Warm Amaranth Porridge with Apricots and Pecans',
                reason: 'Amaranth is a nutrient-dense pseudo-grain that provides the minerals needed for high-energy days.',
                tags: ['Mineral-Rich', 'Ancient Grains', 'Gluten-Free', '370 Calories'],
            },
            {
                name: 'Egg White Frittata with Red Peppers and Feta',
                reason: 'Red peppers are one of the best sources of Vitamin C to support the surge in Luteinising Hormone (LH).',
                tags: ['Vitamin C', 'High Protein', 'Light', '230 Calories'],
            },
            {
                name: 'Grated Raw Carrot and Apple Salad with Lemon and Walnuts',
                reason: 'A specific snack-style breakfast designed to bind to used oestrogen and sweep it out of the digestive tract.',
                tags: ['Oestrogen Metabolism', 'Detoxifying', 'Vegan', '190 Calories'],
            },
        ],
        lunch: [
            {
                name: 'Kale & Quinoa Salad with Roasted Chickpeas & Tahini',
                reason: 'Kale is cruciferous, helping the liver clear excess oestrogen efficiently. Chickpeas add plant-based protein and fibre.',
                tags: ['Cruciferous', 'Oestrogen-Clearing', 'Vegan', '410 Calories'],
            },
            {
                name: 'Broccoli & Almond Soup with Crusty Wholegrain Bread',
                reason: 'Broccoli contains DIM (diindolylmethane), a compound that actively supports healthy oestrogen metabolism.',
                tags: ['DIM', 'Cruciferous', 'Vegetarian', 'Fibre-Rich', '380 Calories'],
            },
            {
                name: 'Grilled Tuna Steak with a Mediterranean Bean Salad',
                reason: 'Tuna provides lean protein and B vitamins to support peak energy. White beans are high in fibre to help excrete used hormones.',
                tags: ['High Protein', 'Hormone Clearance', 'B Vitamins', '450 Calories'],
            },
            {
                name: 'Tempeh & Shaved Brussels Sprout Stir-fry',
                reason: 'Brussels sprouts are potent cruciferous vegetables that support oestrogen metabolism. Tempeh provides gut-friendly probiotics.',
                tags: ['Cruciferous', 'Gut Health', 'Vegan', '390 Calories'],
            },
            {
                name: 'Steamed Sea Bass with Ginger, Garlic & Pak Choi',
                reason: 'Pak choi helps the liver’s phase II detoxification. Ginger and garlic provide anti-inflammatory support during ovulation.',
                tags: ['Liver Support', 'Anti-inflammatory', 'Light', '290 Calories'],
            },
            {
                name: 'Red Lentil & Spinach Tabbouleh with Lemon Dressing',
                reason: 'Lentils provide a dense source of fibre and folate. The vitamin C in the lemon dressing helps with non-haem iron absorption.',
                tags: ['High Fibre', 'Folate-Rich', 'Vegan', '340 Calories'],
            },
            {
                name: 'Raw Rainbow Slaw with Shredded Chicken & Sesame',
                reason: 'A mix of raw cabbage and carrots provides specific fibres that bind to oestrogen, preventing its reabsorption in the gut.',
                tags: ['Oestrogen Metabolism', 'Crunchy', 'High Protein', '370 Calories'],
            },
            {
                name: 'Baked Falafel with Hummus and a Tabbouleh Salad',
                reason: 'Chickpeas and parsley are natural diuretics that help manage any mid-cycle water retention or puffiness.',
                tags: ['Natural Diuretic', 'High Fibre', 'Vegan', '480 Calories'],
            },
            {
                name: 'Turkey & Avocado Salad with Pumpkin Seeds & Berries',
                reason: 'Pumpkin seeds provide zinc for healthy egg release, and berries offer antioxidants to protect cellular health.',
                tags: ['Zinc-Rich', 'Antioxidant', 'Healthy Fats', '430 Calories'],
            },
            {
                name: 'Buckwheat Noodle Bowl with Edamame & Miso Dressing',
                reason: 'Buckwheat is a gluten-free grain that keeps blood sugar stable. Edamame provides gentle phytoestrogens to balance the surge.',
                tags: ['Phytoestrogens', 'Low GI', 'Vegan', '410 Calories'],
            },
            {
                name: 'Sardines on Toasted Rye with Sliced Tomatoes & Parsley',
                reason: 'Oily fish provides Omega-3s to manage inflammatory markers. Rye is one of the highest-fibre grains available.',
                tags: ['Omega-3', 'Fibre-Rich', 'Quick', '360 Calories'],
            },
            {
                name: 'Quinoa Stuffed Peppers with Pine Nuts and Spinach',
                reason: 'Pine nuts contain healthy fats that support the endocrine system. Spinach provides folate for cellular repair.',
                tags: ['Folate', 'Healthy Fats', 'Gluten-Free', '380 Calories'],
            },
            {
                name: 'Lemony Prawn & Asparagus Risotto (using Cauliflower Rice)',
                reason: 'Using cauliflower rice adds a cruciferous boost. Prawns provide iodine to support the thyroid during high-energy days.',
                tags: ['Cruciferous', 'Iodine-Rich', 'Low Carb', '310 Calories'],
            },
            {
                name: 'Mackerel & Apple Salad with Walnuts and Mixed Greens',
                reason: 'The acidity of apples supports digestion, while mackerel provides essential fats for hormone synthesis.',
                tags: ['Omega-3', 'Digestion', 'Healthy Fats', '420 Calories'],
            },
            {
                name: 'Black Bean & Mango Salsa Salad with Lime Vinaigrette',
                reason: 'Mango is rich in vitamin C and antioxidants. Black beans provide the protein and fibre needed for metabolic health.',
                tags: ['Antioxidant', 'High Fibre', 'Vegan', '350 Calories'],
            },
            {
                name: 'Cottage Cheese & Cucumber Tartine on Sprouted Bread',
                reason: 'Sprouted bread is enzyme-rich and easy to digest. Cucumber is hydrating to support cervical fluid production.',
                tags: ['Hydrating', 'Probiotic', 'Light', '280 Calories'],
            },
            {
                name: 'Roasted Root Vegetable Bowl with Hemp Hearts and Tahini',
                reason: 'Hemp hearts provide a perfect balance of Omega-3 and Omega-6 fatty acids to support the ovulatory shift.',
                tags: ['Hormone Support', 'Mineral-Rich', 'Vegan', '440 Calories'],
            },
            {
                name: 'Chicken & Kimchi Wrap with Rocket and Sprouts',
                reason: 'Kimchi and rocket support the liver and gut microbiome in clearing peak oestrogen levels.',
                tags: ['Probiotic', 'Liver Support', 'High Protein', '390 Calories'],
            },
            {
                name: 'Lentil & Vegetable "Nourish" Soup',
                reason: 'A light, broth-based soup that is easy on the digestive system while providing essential minerals and fibre.',
                tags: ['Nutrient-Dense', 'Easy Digestion', 'Vegan', '240 Calories'],
            },
            {
                name: 'Smoked Salmon Poke Bowl with Seaweed & Radish',
                reason: 'Radish and seaweed support liver and thyroid health respectively, ensuring a smooth hormonal transition.',
                tags: ['Thyroid Support', 'Liver Support', 'Omega-3', '460 Calories'],
            },
        ],
        dinner: [
            {
                name: 'Grilled Salmon with Roasted Cauliflower, Brown Rice & Miso Dressing',
                reason: 'Cauliflower and miso both support liver detoxification pathways, helping the body process peak oestrogen levels.',
                tags: ['Omega-3', 'Cruciferous', 'Anti-Inflammatory', '520 Calories'],
            },
            {
                name: 'Turkey Mince & Courgette Lettuce Cups with a Sesame Drizzle',
                reason: 'Turkey is a lean protein source with tryptophan, a precursor to serotonin, to support mood stability at ovulation.',
                tags: ['Lean Protein', 'Tryptophan', 'Low Carb', '340 Calories'],
            },
            {
                name: 'Steamed Sea Bass with Ginger, Bok Choy & Soba Noodles',
                reason: 'Bok choy is a cruciferous vegetable that assists the liver in metabolising the oestrogen surge. Ginger provides anti-inflammatory support.',
                tags: ['Cruciferous', 'Anti-Inflammatory', 'Light', '410 Calories'],
            },
            {
                name: 'Quinoa Stuffed Red Peppers with Pine Nuts and Spinach',
                reason: 'Red peppers are high in Vitamin C, which is crucial for progesterone production following the LH surge. Pine nuts provide healthy fats.',
                tags: ['Vitamin C', 'Healthy Fats', 'Gluten-Free', '380 Calories'],
            },
            {
                name: 'Tofu & Broccoli Stir-fry with Cashews and Garlic',
                reason: 'Broccoli contains DIM, which supports healthy oestrogen metabolism. Cashews provide magnesium for muscle and nerve support.',
                tags: ['DIM', 'Magnesium', 'Vegan', '390 Calories'],
            },
            {
                name: 'Grilled Chicken Breast with Shaved Brussels Sprout Salad',
                reason: 'Brussels sprouts are exceptionally high in fibre and indole-3-carbinol, aiding the body in sweeping out used hormones.',
                tags: ['High Fibre', 'Hormone Clearance', 'High Protein', '430 Calories'],
            },
            {
                name: 'Lentil and Swiss Chard Curry with Turmeric',
                reason: 'Swiss chard is rich in magnesium and iron. Turmeric helps manage the mild systemic inflammation that can occur during ovulation.',
                tags: ['Anti-Inflammatory', 'Magnesium', 'Vegan', '380 Calories'],
            },
            {
                name: 'Baked Cod with a Walnut and Parsley Crust',
                reason: 'Walnuts provide Omega-3 fatty acids for hormone synthesis. Parsley acts as a gentle diuretic to manage mid-cycle water retention.',
                tags: ['Omega-3', 'Natural Diuretic', 'B12-Rich', '370 Calories'],
            },
            {
                name: 'Tempeh Grain Bowl with Kimchi and Steamed Kale',
                reason: 'Kale and kimchi support the gut and liver (the "oestrobolome") in regulating and excreting peak oestrogen levels.',
                tags: ['Probiotic', 'Cruciferous', 'Vegan', '450 Calories'],
            },
            {
                name: 'Prawn and Asparagus Risotto with Lemon and Mint',
                reason: 'Asparagus is a prebiotic that supports gut health, while prawns provide iodine for thyroid and metabolic support.',
                tags: ['Iodine', 'Prebiotic', 'Energising', '480 Calories'],
            },
            {
                name: 'Roasted Duck Breast with Braised Red Cabbage and Apples',
                reason: 'Red cabbage contains anthocyanins (antioxidants) and fibre to assist the liver. Duck provides B vitamins for energy.',
                tags: ['Antioxidant-Rich', 'B Vitamins', 'High Fibre', '550 Calories'],
            },
            {
                name: 'Chickpea and Cauliflower Tacos with Radish Slaw',
                reason: 'Radishes and cauliflower provide double cruciferous support for the liver during the hormonal peak.',
                tags: ['Cruciferous', 'Liver Support', 'Vegan', '420 Calories'],
            },
            {
                name: 'Venison Steak with Roasted Mediterranean Vegetables',
                reason: 'Venison is a very lean red meat that provides iron and zinc to support the health of the upcoming corpus luteum.',
                tags: ['Zinc-Rich', 'Iron', 'Lean Protein', '460 Calories'],
            },
            {
                name: 'Mackerel Fillets with Fennel and Grapefruit Salad',
                reason: 'Fennel aids digestion and reduces bloating, while the Vitamin C in grapefruit enhances the absorption of essential minerals.',
                tags: ['Omega-3', 'Digestion', 'Vitamin C', '440 Calories'],
            },
            {
                name: 'Buckwheat Crepes with Spinach, Mushrooms and Goat’s Cheese',
                reason: 'Buckwheat is a low-glycaemic seed that provides sustained energy. Spinach offers folate for healthy cell division.',
                tags: ['Folate', 'Low GI', 'Vegetarian', '390 Calories'],
            },
            {
                name: 'Sesame-Crusted Tuna Steaks with Seaweed and Cucumber',
                reason: 'Seaweed provides trace minerals like iodine. Tuna is a dense protein source that matches the high energy of this phase.',
                tags: ['High Protein', 'Iodine', 'Mineral-Rich', '410 Calories'],
            },
            {
                name: 'Turkey and Black Bean Chilli with Fresh Avocado',
                reason: 'The fibre in black beans and healthy fats in avocado help keep blood sugar stable as testosterone peaks.',
                tags: ['Steady Energy', 'High Fibre', 'Healthy Fats', '480 Calories'],
            },
            {
                name: 'Lemony Broad Bean and Pea Pasta with Whole-Wheat Linguine',
                reason: 'Broad beans are high in folate and fibre. Whole-wheat pasta provides the B vitamins needed for hormone metabolism.',
                tags: ['Folate', 'B Vitamins', 'High Fibre', '460 Calories'],
            },
            {
                name: 'Grilled Sardines with a Tomato and Caper Salsa',
                reason: 'Sardines provide calcium and Omega-3s. Tomatoes are rich in lycopene, a powerful antioxidant for cellular protection.',
                tags: ['Antioxidant', 'Calcium', 'Omega-3', '380 Calories'],
            },
            {
                name: 'Miso-Glazed Aubergine with Edamame and Brown Rice',
                reason: 'Edamame provides phytoestrogens to help smooth the transition as oestrogen begins to drop post-ovulation.',
                tags: ['Phytoestrogens', 'Probiotic', 'Vegan', '430 Calories'],
            },
        ],
        snacks: [
            {
                name: 'Sliced Watermelon with Fresh Mint',
                reason: 'Hydration is key at ovulation as body temperature rises. Watermelon is approximately 92% water and rich in lycopene.',
                tags: ['Hydrating', 'Antioxidants', 'Quick', 'Vegan', '80 Calories'],
            },
            {
                name: 'Carrot & Celery Sticks with Hummus',
                reason: 'Raw vegetables support digestive fibre intake, which helps maintain healthy oestrogen clearance during the peak window.',
                tags: ['High Fibre', 'Oestrogen-Clearing', 'Vegan', '150 Calories'],
            },
            {
                name: 'Fresh Pineapple Chunks with Lime Zest',
                reason: 'Pineapple contains bromelain, an enzyme that acts as a natural anti-inflammatory to manage ovulation-related tenderness.',
                tags: ['Anti-inflammatory', 'Enzymes', 'Vegan', '90 Calories'],
            },
            {
                name: 'Handful of Toasted Pistachios',
                reason: 'Pistachios are high in lutein and zeaxanthin, powerful antioxidants that support eye and cellular health during hormonal peaks.',
                tags: ['Antioxidant-Rich', 'Healthy Fats', 'Vegan', '160 Calories'],
            },
            {
                name: 'Kefir Drink with Fresh Blueberries',
                reason: 'Probiotics in kefir support the oestrobolome, while blueberries provide anthocyanins to neutralise oxidative stress.',
                tags: ['Probiotic', 'Antioxidant', 'Gut Health', '140 Calories'],
            },
            {
                name: 'Pumpkin Seeds (Pepitas) and Goji Berries',
                reason: 'Pumpkin seeds provide the zinc necessary for healthy cell division and follicular maturation.',
                tags: ['Zinc-Rich', 'Antioxidant', 'Vegan', '180 Calories'],
            },
            {
                name: 'Cucumber Slices with Whipped Feta & Dill',
                reason: 'Cucumber is highly hydrating as basal body temperature rises during ovulation, helping to manage fluid balance.',
                tags: ['Hydrating', 'Quick', 'Vegetarian', '120 Calories'],
            },
            {
                name: 'Sliced Pear with a Teaspoon of Almond Butter',
                reason: 'Pears are rich in pectin, a soluble fibre that assists in binding to used hormones for efficient excretion.',
                tags: ['Hormone Clearance', 'High Fibre', 'Steady Energy', '160 Calories'],
            },
            {
                name: 'A Square of Dark Chocolate (85%+) and Walnuts',
                reason: 'Magnesium in cacao helps maintain a calm nervous system during the high-energy testosterone spike of ovulation.',
                tags: ['Magnesium', 'Omega-3', 'Antioxidant', '190 Calories'],
            },
            {
                name: 'Radish Slices with Sea Salt and Chives',
                reason: 'Radishes contain sulfur compounds that support the liver’s Phase II detoxification of peak oestrogen levels.',
                tags: ['Liver Support', 'Low Calorie', 'Vegan', '20 Calories'],
            },
            {
                name: 'Steamed Edamame with Toasted Sesame Seeds',
                reason: 'Provides a light source of phytoestrogens and lignans to help smooth the transition as hormones shift post-ovulation.',
                tags: ['Phytoestrogen', 'High Protein', 'Vegan', '150 Calories'],
            },
            {
                name: 'Chia Seed Pudding with Raspberries',
                reason: 'The high fibre content in chia seeds ensures used oestrogen is moved through the digestive tract rather than reabsorbed.',
                tags: ['Oestrogen-Clearing', 'Omega-3', 'Vegan', '210 Calories'],
            },
            {
                name: 'Red Bell Pepper Strips with Baba Ganoush',
                reason: 'Red peppers are exceptionally high in Vitamin C, which is required for the health of the upcoming corpus luteum.',
                tags: ['Vitamin C', 'Hormone Support', 'Vegan', '140 Calories'],
            },
            {
                name: 'Brazil Nuts and Dried Tart Cherries',
                reason: 'Brazil nuts offer selenium for thyroid support, while tart cherries provide antioxidants and support sleep quality.',
                tags: ['Selenium', 'Antioxidant', 'Vegan', '170 Calories'],
            },
            {
                name: 'Apple Slices with a Sprinkle of Cinnamon',
                reason: 'Apples contain calcium d-glucarate, which assists in the safe detoxification and removal of oestrogen from the body.',
                tags: ['Liver Support', 'Blood Sugar', 'Vegan', '95 Calories'],
            },
            {
                name: 'Roasted Chickpeas with Lemon and Parsley',
                reason: 'Chickpeas provide fibre and folate, while parsley acts as a natural diuretic to reduce mid-cycle bloating.',
                tags: ['Natural Diuretic', 'High Fibre', 'Vegan', '160 Calories'],
            },
            {
                name: 'Small Bowl of Miso Soup with Seaweed',
                reason: 'Provides probiotics for gut health and trace minerals like iodine to support the thyroid during high-activity days.',
                tags: ['Probiotic', 'Iodine', 'Hydrating', '45 Calories'],
            },
            {
                name: 'Sunflower Seeds and Dried Apricots',
                reason: 'Sunflower seeds are rich in Vitamin E, which protects egg quality from oxidative damage during release.',
                tags: ['Vitamin E', 'Antioxidant', 'Vegan', '180 Calories'],
            },
            {
                name: 'Cottage Cheese with Sliced Kiwi',
                reason: 'Kiwi provides a significant Vitamin C boost, while cottage cheese offers lean protein for stable energy.',
                tags: ['Vitamin C', 'High Protein', 'B Vitamins', '160 Calories'],
            },
            {
                name: 'Green Tea (Iced or Warm) with a Slice of Ginger',
                reason: 'The catechins in green tea support metabolism and provide a gentle antioxidant boost during the ovulatory peak.',
                tags: ['Antioxidant', 'Metabolic Support', 'Anti-inflammatory', '5 Calories'],
            },
        ],
    },
 
    LUTEAL: {
        breakfast: [
            {
                name: 'Baked Oats with Stewed Pear, Cinnamon & Tahini',
                reason: 'Oats stabilise blood sugar and serotonin production. Cinnamon helps regulate glucose, reducing cravings common in the luteal phase.',
                tags: ['Slow-Release Carbs', 'Serotonin', 'Comforting', '380 Calories'],
            },
            {
                name: 'Wholegrain Toast with Peanut Butter, Sliced Banana & Hemp Seeds',
                reason: 'This combination provides tryptophan (for serotonin), magnesium, and slow-release energy to combat PMS fatigue and mood dips.',
                tags: ['Magnesium', 'Tryptophan', 'Serotonin', 'Quick', '350 Calories'],
            },
            {
                name: 'Sweet Potato & Spinach Breakfast Hash with Fried Egg',
                reason: 'Sweet potatoes provide complex carbs to stabilise mood and energy. Spinach is high in magnesium to help relax muscles.',
                tags: ['Complex Carbs', 'Magnesium', 'High Protein', '320 Calories'],
            },
            {
                name: 'Buckwheat Porridge with Almond Butter & Dark Chocolate Chips',
                reason: 'Buckwheat is a low-GI grain that prevents blood sugar spikes. Dark chocolate and almonds provide magnesium for PMS relief.',
                tags: ['Low GI', 'Magnesium', 'Comforting', '410 Calories'],
            },
            {
                name: 'Greek Yoghurt with Walnuts, Sliced Dates & Flaxseeds',
                reason: 'Dates provide natural sweetness for cravings, while walnuts offer Omega-3s to combat luteal phase inflammation.',
                tags: ['Healthy Fats', 'Omega-3', 'Probiotic', '340 Calories'],
            },
            {
                name: 'Scrambled Eggs with Avocado & Smoked Paprika on Rye',
                reason: 'Healthy fats from avocado support progesterone production. Rye is a high-fibre grain that helps reduce bloating.',
                tags: ['Hormone Support', 'Fibre-Rich', 'B Vitamins', '420 Calories'],
            },
            {
                name: 'Warm Quinoa Bowl with Sliced Apples, Pecans & Cardamom',
                reason: 'Quinoa is a complete protein that keeps you full. Cardamom and apple assist with digestion and bloating.',
                tags: ['Steady Energy', 'Digestive Support', 'Vegan', '360 Calories'],
            },
            {
                name: 'Tofu Scramble with Nutritional Yeast, Kale & Roasted Squash',
                reason: 'Squash is a "slow carb" that helps with luteal cravings. Nutritional yeast provides B vitamins for energy metabolism.',
                tags: ['B-Complex', 'Slow-Release Carbs', 'Vegan', '290 Calories'],
            },
            {
                name: 'Chia Seed Pudding with Raw Cacao & Raspberries',
                reason: 'Raw cacao is one of the highest food sources of magnesium. Chia seeds provide the fibre needed for regular bowel movements.',
                tags: ['High Magnesium', 'Anti-Cramp', 'Fibre-Rich', '310 Calories'],
            },
            {
                name: 'Cottage Cheese with Sliced Peach & Pumpkin Seeds',
                reason: 'Cottage cheese is high in protein to keep hunger at bay. Pumpkin seeds provide zinc and magnesium for skin and mood.',
                tags: ['High Protein', 'Zinc-Rich', 'Magnesium', '280 Calories'],
            },
            {
                name: 'Whole-Wheat Pancakes with Blueberry Compote & Sunflower Seeds',
                reason: 'Blueberries provide antioxidants for systemic inflammation. Sunflower seeds are rich in Vitamin E to ease breast tenderness.',
                tags: ['Vitamin E', 'Antioxidant', 'Comforting', '390 Calories'],
            },
            {
                name: 'Overnight Oats with Soy Milk, Sliced Banana & Cashews',
                reason: 'Soy milk contains isoflavones that can help balance the drop in oestrogen. Cashews provide magnesium and tryptophan.',
                tags: ['Tryptophan', 'Magnesium', 'Vegan', '370 Calories'],
            },
            {
                name: 'Shakshuka with Chickpeas, Peppers & Wilted Greens',
                reason: 'Chickpeas provide plant-based iron and fibre. The vitamin C in peppers helps with the absorption of iron before menstruation.',
                tags: ['High Iron', 'Fibre-Rich', 'Vegetarian', '330 Calories'],
            },
            {
                name: 'Rye Crispbread with Ricotta, Honey & Crushed Hazelnuts',
                reason: 'Rye fibre helps move excess hormones out of the body. Hazelnuts provide Vitamin E and healthy fats.',
                tags: ['Fibre-Rich', 'Vitamin E', 'Low GI', '260 Calories'],
            },
            {
                name: 'Smoothie with Banana, Spinach, Almond Butter & Ashwagandha',
                reason: 'Ashwagandha is an adaptogen that helps manage the increased cortisol and stress sensitivity of the late luteal phase.',
                tags: ['Adaptogen', 'Stress Relief', 'Vegan', '320 Calories'],
            },
            {
                name: 'Baked Egg in Avocado with a Side of Roasted Carrots',
                reason: 'Rich in healthy fats and Vitamin A. Roasted carrots provide a specific fibre that binds to excess oestrogen.',
                tags: ['Healthy Fats', 'Oestrogen Metabolism', 'Low Carb', '350 Calories'],
            },
            {
                name: 'Amaranth Porridge with Stewed Apricots & Pumpkin Seeds',
                reason: 'Amaranth is rich in minerals. Apricots provide potassium to help regulate the fluid retention common before a period.',
                tags: ['Potassium', 'Mineral-Rich', 'Gluten-Free', '340 Calories'],
            },
            {
                name: 'Mushroom & Thyme Omelette with Wholegrain Bread',
                reason: 'Mushrooms are a source of Vitamin D. Wholegrain bread provides the complex carbs needed for serotonin production.',
                tags: ['Vitamin D', 'Serotonin', 'High Protein', '360 Calories'],
            },
            {
                name: 'Kefir Bowl with Sliced Kiwi, Hemp Seeds & Muesli',
                reason: 'Kefir supports gut health during luteal-phase digestive shifts. Kiwi provides Vitamin C for progesterone support.',
                tags: ['Probiotic', 'Vitamin C', 'Gut Health', '330 Calories'],
            },
            {
                name: 'Black Bean & Sweet Potato Breakfast Burrito',
                reason: 'A perfect combination of fibre and complex carbs to prevent the "energy crash" associated with PMS.',
                tags: ['High Fibre', 'Steady Energy', 'Vegan', '440 Calories'],
            },
            {
                name: 'Turkey & Spinach Breakfast Sausages with Grilled Tomatoes',
                reason: 'Turkey is high in tryptophan. Tomatoes provide lycopene to help with systemic inflammation.',
                tags: ['Tryptophan', 'High Protein', 'Anti-Inflammatory', '290 Calories'],
            },
            {
                name: 'Sprouted Grain Toast with Miso-Tahini & Cucumber',
                reason: 'Sprouted grains are nutrient-dense and easy on a sensitive luteal stomach. Tahini provides calcium for cramp prevention.',
                tags: ['Calcium-Rich', 'Nutrient-Dense', 'Vegan', '270 Calories'],
            },
            {
                name: 'Millet Porridge with Toasted Sesame Seeds & Honey',
                reason: 'Millet is an alkalising grain that is gentle on the gut. Sesame seeds provide calcium and zinc.',
                tags: ['Gentle Digestion', 'Calcium', 'Vegetarian', '310 Calories'],
            },
            {
                name: 'Smoked Mackerel on Rye with Beetroot & Horseradish',
                reason: 'Oily fish provides Vitamin D and Omega-3s for mood support. Beetroot supports circulation.',
                tags: ['Omega-3', 'Vitamin D', 'Mood Support', '380 Calories'],
            },
            {
                name: 'Boiled Eggs with Asparagus Soldiers & Pecorino',
                reason: 'Asparagus acts as a natural diuretic to reduce water retention. Pecorino provides calcium.',
                tags: ['Natural Diuretic', 'High Protein', 'Calcium', '250 Calories'],
            },
            {
                name: 'Smoothie Bowl with Açaí, Maca & Walnut Butter',
                reason: 'Maca helps balance hormones. Walnuts provide the healthy fats needed for late-cycle brain health.',
                tags: ['Adaptogen', 'Healthy Fats', 'Vegan', '390 Calories'],
            },
            {
                name: 'Savoury Oats with Sautéed Mushrooms & Soy Sauce',
                reason: 'A grounding, savoury breakfast. Mushrooms provide B vitamins for energy metabolism.',
                tags: ['Grounding', 'B-Complex', 'Vegan', '310 Calories'],
            },
            {
                name: 'Teff Porridge with Sliced Pear & Ground Flaxseeds',
                reason: 'Teff is high in calcium and iron. Flaxseeds provide lignans to gently balance hormone levels.',
                tags: ['High Iron', 'Calcium', 'Fibre-Rich', '350 Calories'],
            },
            {
                name: 'Baked Apple with Cinnamon, Oat Crumble & Greek Yoghurt',
                reason: 'A comforting breakfast that satisfies sugar cravings while providing the fibre needed for hormone clearance.',
                tags: ['Comforting', 'High Fibre', 'Vegetarian', '320 Calories'],
            },
            {
                name: 'Sardines on Whole-Wheat Toast with Sliced Radish',
                reason: 'Sardines provide calcium and Vitamin D. Radish supports the liver in processing hormones.',
                tags: ['Calcium', 'Vitamin D', 'B12-Rich', '340 Calories'],
            },
            {
                name: 'Protein-Rich Hemp & Berry Smoothie',
                reason: 'Hemp provides a balanced ratio of Omega fats. Berries provide the antioxidants needed as the cycle resets.',
                tags: ['Omega Fats', 'Antioxidant', 'Vegan', '290 Calories'],
            },
            {
                name: 'Lentil Flour Pancakes with Wilted Spinach & Feta',
                reason: 'Lentils are high in iron and fibre. Spinach and feta provide the magnesium and calcium duo for cramp relief.',
                tags: ['High Iron', 'Magnesium', 'Vegetarian', '370 Calories'],
            },
            {
                name: 'Brown Rice Porridge with Coconut Milk & Toasted Almonds',
                reason: 'A very gentle, gluten-free option for those with sensitive luteal digestion. Coconut milk provides healthy fats.',
                tags: ['Gentle Digestion', 'Gluten-Free', 'Healthy Fats', '380 Calories'],
            },
            {
                name: 'Cottage Cheese Pancakes with Sliced Strawberry',
                reason: 'High in protein and calcium. Strawberries provide Vitamin C to assist in mineral absorption.',
                tags: ['High Protein', 'Calcium', 'B Vitamins', '330 Calories'],
            },
            {
                name: 'Scrambled Eggs with Turmeric, Ginger & Black Pepper',
                reason: 'Turmeric and ginger are powerful anti-inflammatories to prepare the body for the menstrual phase.',
                tags: ['Anti-Inflammatory', 'Warming', 'High Protein', '240 Calories'],
            },
            {
                name: 'Spiced Pumpkin Oatmeal with Pumpkin Seeds',
                reason: 'Pumpkin is rich in Vitamin A and fibre. The seeds provide the zinc needed for skin health during luteal breakouts.',
                tags: ['Vitamin A', 'Zinc-Rich', 'Fibre-Rich', '340 Calories'],
            },
            {
                name: 'Whole-Wheat Pitta with Hummus & Sliced Hard-Boiled Egg',
                reason: 'A balanced breakfast of complex carbs, protein, and fibre to keep blood sugar levels steady.',
                tags: ['Steady Energy', 'High Protein', 'B Vitamins', '380 Calories'],
            },
            {
                name: 'Walnut & Date Energising Bliss Balls with a Cup of Mint Tea',
                reason: 'A light breakfast for low-appetite days. Walnuts provide brain fuel, and mint tea helps with luteal bloating.',
                tags: ['Omega-3', 'Reduces Bloating', 'Vegan', '280 Calories'],
            },
            {
                name: 'Roasted Squash with Tahini Drizzle & Pomegranate Seeds',
                reason: 'The slow-release carbs in squash are ideal for preventing late-day sugar binges.',
                tags: ['Slow-Release Carbs', 'Calcium', 'Vegan', '260 Calories'],
            },
            {
                name: 'Smoked Salmon & Cream Cheese on Sourdough with Dill',
                reason: 'Rich in B12 and Omega-3s. Dill is traditionally used to support digestion and reduce gas.',
                tags: ['B12-Rich', 'Healthy Fats', 'Digestive Support', '410 Calories'],
            },
        ],
        lunch: [
            {
                name: 'Sweet Potato & Black Bean Burrito Bowl with Brown Rice',
                reason: 'Sweet potato is high in B6, which supports progesterone production and reduces PMS symptoms. Black beans are rich in magnesium.',
                tags: ['Vitamin B6', 'Magnesium', 'Serotonin', 'Vegan', '520 Calories'],
            },
            {
                name: 'Chicken & Roasted Vegetable Tray Bake',
                reason: 'A hearty, balanced meal providing zinc, B vitamins, and protein to support the higher metabolic demand of the luteal phase.',
                tags: ['High Protein', 'Zinc', 'B Vitamins', 'Meal Prep', '480 Calories'],
            },
            {
                name: 'Baked Salmon with Roasted Squash and Quinoa',
                reason: 'Salmon provides Omega-3s to fight luteal inflammation, while squash offers slow-release carbs to stabilise mood.',
                tags: ['Omega-3', 'Complex Carbs', 'Anti-Inflammatory', '550 Calories'],
            },
            {
                name: 'Red Lentil and Spinach Dahl with Brown Rice',
                reason: 'Lentils are high in fibre and iron. Spinach provides magnesium to help relax the uterus and prevent early cramping.',
                tags: ['High Fibre', 'Magnesium', 'Iron-Rich', '440 Calories'],
            },
            {
                name: 'Turkey and Avocado Wholegrain Wrap',
                reason: 'Turkey contains tryptophan, which the body uses to produce serotonin. Avocado healthy fats support progesterone synthesis.',
                tags: ['Tryptophan', 'Healthy Fats', 'Quick', '410 Calories'],
            },
            {
                name: 'Warm Buckwheat Salad with Roasted Beetroot and Feta',
                reason: 'Buckwheat is a low-GI seed that prevents energy crashes. Beetroot supports circulation and detoxification.',
                tags: ['Low GI', 'Circulation', 'Vegetarian', '390 Calories'],
            },
            {
                name: 'Chickpea and Cauliflower Curry with Steamed Kale',
                reason: 'Chickpeas provide B6 and fibre. Kale helps the liver metabolise the drop in oestrogen effectively.',
                tags: ['Vitamin B6', 'Hormone Balance', 'Vegan', '420 Calories'],
            },
            {
                name: 'Tuna and White Bean Salad with Rocket',
                reason: 'Tuna is rich in Vitamin D and B12. White beans provide the magnesium and fibre needed for digestive regularity.',
                tags: ['Vitamin D', 'Magnesium', 'High Protein', '380 Calories'],
            },
            {
                name: 'Roast Beef and Horseradish on Rye Bread',
                reason: 'Beef provides highly bioavailable iron and zinc. Rye bread is high in fibre to reduce luteal bloating.',
                tags: ['Iron-Rich', 'Zinc', 'Fibre-Rich', '430 Calories'],
            },
            {
                name: 'Roasted Root Vegetable Soup with Toasted Pumpkin Seeds',
                reason: 'A warming, grounding meal. Pumpkin seeds are a top source of magnesium and zinc for skin health.',
                tags: ['Grounding', 'Zinc-Rich', 'Vegan', '310 Calories'],
            },
            {
                name: 'Tempeh Stir-fry with Broccoli and Cashew Nuts',
                reason: 'Cashews and tempeh provide magnesium. Broccoli supports the liver in processing hormonal transitions.',
                tags: ['Magnesium', 'Plant Protein', 'Vegan', '460 Calories'],
            },
            {
                name: 'Shepherd’s Pie with Sweet Potato Mash Top',
                reason: 'Lamb provides iron, and the sweet potato topping ensures a steady release of glucose to prevent "hangry" feelings.',
                tags: ['Iron-Rich', 'Comforting', 'Slow-Release Carbs', '510 Calories'],
            },
            {
                name: 'Falafel Nourish Bowl with Hummus and Tabbouleh',
                reason: 'High in fibre to ensure used hormones are excreted. Parsley in the tabbouleh acts as a natural diuretic.',
                tags: ['Natural Diuretic', 'High Fibre', 'Vegan', '490 Calories'],
            },
            {
                name: 'Mackerel Fillets with Warm New Potatoes and Chives',
                reason: 'Oily fish supports mood regulation. Potatoes provide the "comfort carbs" the body seeks in this phase.',
                tags: ['Omega-3', 'Mood Support', 'Healthy Fats', '530 Calories'],
            },
            {
                name: 'Chicken and Peanut Satay with Brown Rice Noodles',
                reason: 'Peanuts provide healthy fats and Vitamin E, which can help reduce breast tenderness.',
                tags: ['Vitamin E', 'High Protein', 'B Vitamins', '580 Calories'],
            },
            {
                name: 'Stuffed Peppers with Brown Rice, Pine Nuts and Currants',
                reason: 'Pine nuts provide zinc. The natural sugars in currants help satisfy sweet cravings healthily.',
                tags: ['Zinc', 'Complex Carbs', 'Vegetarian', '420 Calories'],
            },
            {
                name: 'Lentil Flour Savoury Pancakes with Avocado and Tomato',
                reason: 'Lentils are high in folate. Avocado fats help manage the increased appetite of the luteal phase.',
                tags: ['High Folate', 'Healthy Fats', 'Vegan', '450 Calories'],
            },
            {
                name: 'Cottage Cheese and Sliced Pear on Whole-Wheat Crackers',
                reason: 'A light but protein-rich lunch that provides calcium to help mitigate PMS symptoms.',
                tags: ['Calcium', 'High Protein', 'Light', '320 Calories'],
            },
            {
                name: 'Lamb and Apricot Tagine with Couscous',
                reason: 'Lamb replenishes iron. Dried apricots provide potassium to manage fluid retention.',
                tags: ['Iron-Rich', 'Potassium', 'Warming', '560 Calories'],
            },
            {
                name: 'Sesame Miso Tofu with Steamed Bok Choy and Soba',
                reason: 'Soba (buckwheat) is excellent for blood sugar. Miso provides probiotics for luteal gut sensitivity.',
                tags: ['Probiotic', 'Low GI', 'Vegan', '410 Calories'],
            },
            {
                name: 'Prawn and Spinach Risotto with Lemon',
                reason: 'Prawns provide iodine for the thyroid. Spinach provides the magnesium needed to prevent pre-period headaches.',
                tags: ['Iodine', 'Magnesium', 'B12-Rich', '470 Calories'],
            },
            {
                name: 'Sardines on Toast with Sliced Radish and Dill',
                reason: 'Sardines offer calcium and Vitamin D, which are scientifically linked to reduced PMS severity.',
                tags: ['Calcium', 'Vitamin D', 'Omega-3', '380 Calories'],
            },
            {
                name: 'Black Bean Soup with Corn Bread',
                reason: 'A fibre powerhouse that helps stabilise the gut during the progesterone-induced slowdown.',
                tags: ['High Fibre', 'Complex Carbs', 'Vegan', '440 Calories'],
            },
            {
                name: 'Chicken Liver Pâté on Rye with Gherkins',
                reason: 'The most nutrient-dense source of B vitamins and iron to prepare the body for blood loss.',
                tags: ['Iron-Rich', 'B-Complex', 'Nutrient-Dense', '390 Calories'],
            },
            {
                name: 'Roasted Cauliflower and Chickpea Salad with Tahini',
                reason: 'Tahini is rich in calcium. Cauliflower supports the liver’s detoxification of used oestrogen.',
                tags: ['Calcium', 'Liver Support', 'Vegan', '410 Calories'],
            },
            {
                name: 'Wild Rice Bowl with Roasted Carrots and Walnuts',
                reason: 'Carrot fibre helps bind to oestrogen. Walnuts provide the Omega-3s essential for neurotransmitter balance.',
                tags: ['Oestrogen Metabolism', 'Omega-3', 'Vegan', '430 Calories'],
            },
            {
                name: 'Egg Salad with Greek Yoghurt and Watercress on Sourdough',
                reason: 'Eggs provide choline for brain health. Watercress is a natural diuretic and high in Vitamin K.',
                tags: ['Choline', 'Natural Diuretic', 'B Vitamins', '400 Calories'],
            },
            {
                name: 'Turkey Mince Chilli with Kidney Beans and Brown Rice',
                reason: 'Turkey and beans provide a double hit of tryptophan and fibre to support serotonin and digestion.',
                tags: ['Serotonin', 'High Fibre', 'High Protein', '520 Calories'],
            },
            {
                name: 'Baked Potato with Ratatouille and Sunflower Seeds',
                reason: 'Potato provides comforting carbs. Sunflower seeds are high in Vitamin E for hormone support.',
                tags: ['Vitamin E', 'Comforting', 'Vegan', '380 Calories'],
            },
            {
                name: 'Smoked Salmon and Ricotta Pasta with Whole-Wheat Penne',
                reason: 'Whole-wheat pasta provides B vitamins. Ricotta adds calcium for muscle relaxation.',
                tags: ['B Vitamins', 'Calcium', 'Omega-3', '540 Calories'],
            },
            {
                name: 'Amaranth and Vegetable Minestrone',
                reason: 'Amaranth is a mineral-rich ancient grain. This soup is hydrating and easy on a bloated stomach.',
                tags: ['Mineral-Rich', 'Hydrating', 'Vegan', '320 Calories'],
            },
            {
                name: 'Venison Burger (no bun) with Sweet Potato Wedges',
                reason: 'Venison is extremely high in iron. Sweet potatoes provide the B6 needed for progesterone support.',
                tags: ['Iron-Rich', 'Vitamin B6', 'High Protein', '480 Calories'],
            },
            {
                name: 'Lentil and Mushroom "Meatloaf" with Steamed Greens',
                reason: 'Mushrooms provide Vitamin D. Lentils ensure high fibre intake to prevent luteal constipation.',
                tags: ['Vitamin D', 'High Fibre', 'Vegan', '420 Calories'],
            },
            {
                name: 'Greek Salad with Extra Feta and Whole-Wheat Pitta',
                reason: 'Feta provides the calcium boost necessary to help reduce pre-period anxiety and cramps.',
                tags: ['Calcium', 'Vegetarian', 'Quick', '450 Calories'],
            },
            {
                name: 'Quinoa Salad with Roasted Pumpkin and Pine Nuts',
                reason: 'Pumpkin is rich in Vitamin A. Pine nuts provide the healthy fats needed for hormone signalling.',
                tags: ['Vitamin A', 'Healthy Fats', 'Gluten-Free', '410 Calories'],
            },
            {
                name: 'Pork Tenderloin with Stewed Apples and Braised Cabbage',
                reason: 'Pork is high in B1 (thiamine), which helps reduce PMS. Apples provide pectin for hormone clearance.',
                tags: ['Thiamine', 'B Vitamins', 'Fibre', '440 Calories'],
            },
            {
                name: 'Soya Bean and Pea Soup with Mint',
                reason: 'Soya provides phytoestrogens to balance the hormone drop. Mint helps soothe luteal indigestion.',
                tags: ['Phytoestrogen', 'Digestive Support', 'Vegan', '330 Calories'],
            },
            {
                name: 'Beef and Broccoli Stir-fry with Cashews',
                reason: 'Beef for iron, broccoli for liver support, and cashews for magnesium. A perfect luteal triad.',
                tags: ['Iron-Rich', 'Magnesium', 'Liver Support', '510 Calories'],
            },
            {
                name: 'Whole-Wheat Couscous with Roasted Squash and Almonds',
                reason: 'Almonds provide Vitamin E and magnesium. Squash provides the complex carbs for mood stability.',
                tags: ['Vitamin E', 'Magnesium', 'Vegan', '460 Calories'],
            },
            {
                name: 'Hummus and Roasted Red Pepper Wrap with Spinach',
                reason: 'Vitamin C from the peppers increases the absorption of iron from the hummus and spinach.',
                tags: ['Iron Absorption', 'High Fibre', 'Vegan', '390 Calories'],
            },
        ],
        dinner: [
            {
                name: 'Prawn & Avocado Pasta with a Light Lemon & Garlic Sauce',
                reason: 'Prawns are high in iodine for thyroid support (which can slow during the luteal phase) and zinc to ease PMS symptoms.',
                tags: ['Iodine', 'Zinc', 'Healthy Fats', '450 Calories'],
            },
            {
                name: 'Comforting Lentil & Spinach Dahl with Basmati Rice',
                reason: 'Provides complex carbohydrates to boost serotonin, plus iron and folate to prepare the body ahead of menstruation.',
                tags: ['Serotonin', 'Iron', 'Folate', 'Vegan', 'Comforting', '420 Calories'],
            },
            {
                name: 'Baked Cod with a Walnut Crust and Roasted Sweet Potato',
                reason: 'Walnuts provide Omega-3s to reduce luteal inflammation. Sweet potato offers B6 and slow-release carbs to stabilise mood.',
                tags: ['Omega-3', 'Vitamin B6', 'Anti-Inflammatory', '480 Calories'],
            },
            {
                name: 'Turkey & Black Bean Chilli with Brown Rice',
                reason: 'Turkey is rich in tryptophan for serotonin support. Black beans provide magnesium to help ease pre-menstrual tension.',
                tags: ['Serotonin', 'Magnesium', 'High Fibre', '410 Calories'],
            },
            {
                name: 'Grilled Salmon with Quinoa and Steamed Asparagus',
                reason: 'Salmon supports progesterone synthesis with healthy fats. Asparagus acts as a diuretic to help with pre-period water retention.',
                tags: ['Healthy Fats', 'Natural Diuretic', 'B Vitamins', '520 Calories'],
            },
            {
                name: 'Beef and Broccoli Stir-fry with Cashews',
                reason: 'Beef provides bioavailable iron. Cashews are a top source of magnesium to help prevent luteal-phase migraines.',
                tags: ['Iron-Rich', 'Magnesium', 'Quick', '460 Calories'],
            },
            {
                name: 'Roasted Squash and Chickpea Curry with Kale',
                reason: 'The slow-release carbohydrates in squash satisfy cravings. Kale helps the liver process the dropping oestrogen levels.',
                tags: ['Slow-Release Carbs', 'Hormone Balance', 'Vegan', '380 Calories'],
            },
            {
                name: 'Tempeh Shepherd’s Pie with a Root Vegetable Mash',
                reason: 'Tempeh provides plant protein and probiotics. Root vegetables offer grounding energy during the late luteal phase.',
                tags: ['Probiotic', 'Grounding', 'Vegan', '440 Calories'],
            },
            {
                name: 'Chicken Thighs with Roasted Carrots and Hummus',
                reason: 'Chicken thighs are higher in iron than breast meat. Raw or lightly roasted carrots help excrete used hormones.',
                tags: ['Iron-Rich', 'Oestrogen-Clearing', 'B Vitamins', '490 Calories'],
            },
            {
                name: 'Wholegrain Pasta with Sardines, Fennel and Pine Nuts',
                reason: 'Sardines provide Vitamin D and calcium, which are shown to reduce PMS severity. Fennel reduces bloating.',
                tags: ['Calcium', 'Vitamin D', 'Omega-3', '470 Calories'],
            },
            {
                name: 'Lamb and Apricot Stew with Pearl Barley',
                reason: 'Lamb replenishes iron stores. Pearl barley is a high-fibre grain that keeps blood sugar steady and reduces cravings.',
                tags: ['High Iron', 'High Fibre', 'Warming', '510 Calories'],
            },
            {
                name: 'Baked Tofu with Peanut Sauce and Brown Rice Noodles',
                reason: 'Peanuts provide Vitamin E, which can alleviate breast tenderness. Brown rice noodles are easy on a sensitive gut.',
                tags: ['Vitamin E', 'Gluten-Free', 'Vegan', '430 Calories'],
            },
            {
                name: 'Venison Steak with Parsnip Purée and Sautéed Spinach',
                reason: 'Venison is extremely high in iron and zinc. Spinach provides the folate needed for the upcoming cycle transition.',
                tags: ['Zinc-Rich', 'Iron-Rich', 'High Protein', '450 Calories'],
            },
            {
                name: 'Stuffed Bell Peppers with Ground Turkey and Brown Rice',
                reason: 'Turkey supports mood stability through tryptophan. Bell peppers add Vitamin C to boost iron absorption.',
                tags: ['Tryptophan', 'Iron Absorption', 'B Vitamins', '360 Calories'],
            },
            {
                name: 'Mackerel Fillets with Warm Beetroot and Potato Salad',
                reason: 'Oily fish supports brain health and mood. Beetroot supports the liver in processing hormonal shifts.',
                tags: ['Omega-3', 'Liver Support', 'Mood Support', '540 Calories'],
            },
            {
                name: 'Red Lentil Pasta with Pumpkin Seed Pesto',
                reason: 'Lentil pasta is high in fibre and iron. Pumpkin seeds are a powerhouse of zinc for skin health during luteal breakouts.',
                tags: ['Zinc-Rich', 'High Iron', 'Vegan', '460 Calories'],
            },
            {
                name: 'Cottage Cheese Pancakes with Sautéed Apples and Cinnamon',
                reason: 'A high-protein savoury-sweet dinner that provides calcium to help reduce pre-period anxiety and cramps.',
                tags: ['Calcium-Rich', 'High Protein', 'Comforting', '390 Calories'],
            },
            {
                name: 'Slow-Cooked Beef Brisket with Mashed Cauliflower',
                reason: 'Slow-cooking makes iron more accessible. Cauliflower provides cruciferous compounds to assist with hormone clearance.',
                tags: ['Haem Iron', 'Cruciferous', 'Nutrient-Dense', '510 Calories'],
            },
            {
                name: 'Buckwheat Crepes with Mushroom, Spinach and Ricotta',
                reason: 'Buckwheat is low-GI for steady energy. Ricotta provides calcium for muscle relaxation.',
                tags: ['Low GI', 'Calcium', 'Vegetarian', '410 Calories'],
            },
            {
                name: 'Pork Tenderloin with Braised Red Cabbage',
                reason: 'Pork is high in Thiamine (B1), which helps reduce PMS. Red cabbage is high in fibre for hormone excretion.',
                tags: ['Thiamine', 'B Vitamins', 'Fibre-Rich', '440 Calories'],
            },
            {
                name: 'Mixed Bean Chilli with Avocado and Cornbread',
                reason: 'A high-fibre meal that prevents the luteal-phase digestive slowdown and provides steady energy.',
                tags: ['High Fibre', 'Steady Energy', 'Vegan', '480 Calories'],
            },
            {
                name: 'Smoked Salmon and Dill Frittata with a Green Salad',
                reason: 'Rich in Omega-3s and B12. Dill is an antispasmodic that may help ease early uterine contractions.',
                tags: ['B12-Rich', 'Omega-3', 'High Protein', '370 Calories'],
            },
            {
                name: 'Lentil Flour Savoury Crêpes with Avocado and Egg',
                reason: 'Lentils provide folate and fibre. Avocado fats are essential for the synthesis of late-cycle hormones.',
                tags: ['Folate', 'Healthy Fats', 'Gluten-Free', '420 Calories'],
            },
            {
                name: 'Roast Chicken with Sweet Potato and Brussels Sprouts',
                reason: 'Brussels sprouts support oestrogen metabolism. Sweet potato helps regulate blood sugar to prevent late-night binging.',
                tags: ['Cruciferous', 'Vitamin B6', 'High Protein', '490 Calories'],
            },
            {
                name: 'White Bean and Kale Soup with Garlic Bread',
                reason: 'A lighter but fibre-dense dinner for when bloating makes heavy meals uncomfortable.',
                tags: ['High Fibre', 'Magnesium', 'Vegan', '350 Calories'],
            },
            {
                name: 'Duck Breast with Cherry Sauce and Wild Rice',
                reason: 'Duck provides B vitamins. Cherries contain melatonin, which can help with the insomnia often felt before a period.',
                tags: ['Sleep Support', 'B Vitamins', 'Iron-Rich', '560 Calories'],
            },
            {
                name: 'Soya Chunk Stir-fry with Snap Peas and Brown Rice',
                reason: 'Soy isoflavones can gently balance the drop in oestrogen. Snap peas provide Vitamin C and fibre.',
                tags: ['Phytoestrogen', 'Vegan', 'High Fibre', '410 Calories'],
            },
            {
                name: 'Shepherd’s Pie with a Parsnip and Potato Mash',
                reason: 'Lamb provides iron. Parsnips add a boost of potassium to help reduce water retention and puffiness.',
                tags: ['Iron-Rich', 'Potassium', 'Comforting', '490 Calories'],
            },
            {
                name: 'Mussel Marinara with Whole-Wheat Spaghetti',
                reason: 'Mussels are incredibly high in iron and B12. Whole-wheat pasta provides the B vitamins for energy.',
                tags: ['Highest Iron', 'B12-Rich', 'High Fibre', '430 Calories'],
            },
            {
                name: 'Baked Aubergine with Miso and Sesame Edamame',
                reason: 'Miso provides probiotics for gut health. Edamame offers plant protein and fibre for hormone clearance.',
                tags: ['Probiotic', 'High Fibre', 'Vegan', '320 Calories'],
            },
            {
                name: 'Chicken and Cashew Nut Korma with Cauliflower Rice',
                reason: 'Cashews provide magnesium. Using cauliflower rice adds a cruciferous boost for liver support.',
                tags: ['Magnesium', 'Cruciferous', 'B Vitamins', '470 Calories'],
            },
            {
                name: 'Tuna Melt on Rye Bread with a Side Salad',
                reason: 'Tuna provides Vitamin D and protein. Rye is high in fibre to help manage luteal-phase constipation.',
                tags: ['Vitamin D', 'High Protein', 'Quick', '450 Calories'],
            },
            {
                name: 'Chickpea and Spinach Burgers with Sweet Potato Fries',
                reason: 'Provides the complex carbs and fibre needed to boost serotonin and maintain digestive regularity.',
                tags: ['Serotonin', 'High Fibre', 'Vegan', '510 Calories'],
            },
            {
                name: 'Roasted Salmon with Beetroot and Horseradish Mash',
                reason: 'Oily fish for mood, beetroot for liver health, and potato for comfort carbs.',
                tags: ['Mood Support', 'Omega-3', 'Healthy Fats', '530 Calories'],
            },
            {
                name: 'Turkey and Cranberry Meatloaf with Steamed Greens',
                reason: 'Turkey provides tryptophan. Greens provide the magnesium needed to relax pre-menstrual muscle tension.',
                tags: ['Tryptophan', 'Magnesium', 'High Protein', '380 Calories'],
            },
            {
                name: 'Lentil and Vegetable Minestrone with Parmesan',
                reason: 'A mineral-rich soup that is easy to digest. Parmesan provides a concentrated source of calcium.',
                tags: ['Mineral-Rich', 'Calcium', 'Easy Digestion', '310 Calories'],
            },
            {
                name: 'Prawn and Mango Curry with Brown Rice',
                reason: 'Prawns provide iodine for the thyroid. Mango provides antioxidants and satisfies sweet cravings.',
                tags: ['Iodine', 'Antioxidant', 'Steady Energy', '440 Calories'],
            },
            {
                name: 'Roasted Cauliflower Steaks with Tahini and Pomegranate',
                reason: 'Cauliflower aids oestrogen metabolism. Tahini provides the calcium and healthy fats needed for hormone balance.',
                tags: ['Liver Support', 'Calcium', 'Vegan', '340 Calories'],
            },
            {
                name: 'Beef and Guinness Stew with Carrots',
                reason: 'A deeply grounding meal rich in iron and B vitamins to prepare the body for the menstrual phase.',
                tags: ['Haem Iron', 'Grounding', 'B Vitamins', '520 Calories'],
            },
            {
                name: 'Sardine and Tomato Bake with a Whole-Wheat Crust',
                reason: 'Provides the essential Vitamin D and calcium duo to significantly reduce the severity of PMS symptoms.',
                tags: ['Calcium', 'Vitamin D', 'Omega-3', '460 Calories'],
            }
        ],
        snacks: [
            {
                name: 'Banana with a Square of Dark Chocolate',
                reason: 'Bananas contain Vitamin B6 and tryptophan. Dark chocolate provides magnesium. Together they help lift mood and ease cravings.',
                tags: ['Magnesium', 'B6', 'Mood-Support', '160 Calories'],
            },
            {
                name: 'A Small Bowl of Warm Edamame with Sea Salt',
                reason: 'Edamame is a source of protein, fibre, and calcium — all of which help stabilise blood sugar and reduce PMS bloating.',
                tags: ['Protein', 'Calcium', 'Fibre-Rich', '120 Calories'],
            },
            {
                name: 'Pumpkin Seeds (Pepitas)',
                reason: 'One of the best sources of magnesium to help relax uterine muscles and reduce pre-period anxiety.',
                tags: ['High Magnesium', 'Zinc', 'Vegan', '150 Calories'],
            },
            {
                name: 'Greek Yoghurt with Sliced Dates and Walnuts',
                reason: 'Dates provide a healthy way to satisfy sugar cravings. Walnuts offer Omega-3s to fight luteal inflammation.',
                tags: ['Omega-3', 'Healthy Fats', 'Probiotic', '210 Calories'],
            },
            {
                name: 'Apple Slices with Almond Butter and Cinnamon',
                reason: 'Cinnamon helps regulate blood sugar. The healthy fats and fibre keep you full during the high-hunger phase.',
                tags: ['Blood Sugar Support', 'Fibre', 'Vegan', '190 Calories'],
            },
            {
                name: 'Hard-Boiled Egg with a Sprinkle of Smoked Paprika',
                reason: 'Eggs provide B vitamins and choline for brain health, helping to clear the "brain fog" often felt before a period.',
                tags: ['B Vitamins', 'Choline', 'High Protein', '75 Calories'],
            },
            {
                name: 'Roasted Chickpeas with Cumin',
                reason: 'A great source of Vitamin B6 and fibre, which are essential for progesterone production and hormone clearance.',
                tags: ['Vitamin B6', 'High Fibre', 'Vegan', '140 Calories'],
            },
            {
                name: 'Cottage Cheese with Pineapple Chunks',
                reason: 'Pineapple contains bromelain to help with digestion and inflammation. Cottage cheese provides calcium for cramp relief.',
                tags: ['Calcium', 'Enzymes', 'High Protein', '130 Calories'],
            },
            {
                name: 'Raw Carrot Sticks with Hummus',
                reason: 'Carrot fibre helps the body excrete excess oestrogen to prevent a hormonal imbalance during the progesterone rise.',
                tags: ['Oestrogen Metabolism', 'Fibre-Rich', 'Vegan', '110 Calories'],
            },
            {
                name: 'Brazil Nuts (2-3 per day)',
                reason: 'Incredibly rich in selenium, which supports the thyroid and liver during the metabolic shift of the luteal phase.',
                tags: ['Selenium', 'Thyroid Support', 'Vegan', '90 Calories'],
            },
            {
                name: 'Oatcakes with Mashed Avocado and Chilli',
                reason: 'Complex carbohydrates and healthy fats provide steady energy to prevent luteal-phase fatigue.',
                tags: ['Slow-Release Carbs', 'Healthy Fats', 'Vegan', '180 Calories'],
            },
            {
                name: 'Dried Apricots and Cashews',
                reason: 'Apricots provide potassium to reduce bloating. Cashews are rich in tryptophan to support serotonin levels.',
                tags: ['Potassium', 'Tryptophan', 'Magnesium', '170 Calories'],
            },
            {
                name: 'Sunflower Seeds',
                reason: 'High in Vitamin E, which is clinically shown to help reduce breast tenderness and luteal skin sensitivity.',
                tags: ['Vitamin E', 'Hormone Support', 'Vegan', '160 Calories'],
            },
            {
                name: 'Small Bowl of Brown Rice Pudding with Nutmeg',
                reason: 'A grounding, comforting snack that provides the complex carbs the brain needs for mood regulation.',
                tags: ['Serotonin', 'Comforting', 'Vegan', '150 Calories'],
            },
            {
                name: 'Kefir Drink with Raspberries',
                reason: 'Supports gut health to manage luteal-phase constipation or digestive upset caused by rising progesterone.',
                tags: ['Probiotic', 'Gut Health', 'Antioxidant', '110 Calories'],
            },
            {
                name: 'Rice Cakes with Tahini and Sliced Banana',
                reason: 'Tahini is a significant source of calcium. Banana provides Vitamin B6 to help mitigate PMS symptoms.',
                tags: ['Calcium-Rich', 'Vitamin B6', 'Vegan', '170 Calories'],
            },
            {
                name: 'Roasted Broad Beans',
                reason: 'High in folate and fibre to support the body as it prepares for the upcoming menstrual transition.',
                tags: ['Folate', 'High Fibre', 'Vegan', '100 Calories'],
            },
            {
                name: 'Pear Slices with Pecans',
                reason: 'Pears are rich in pectin, helping the liver clear used hormones. Pecans provide healthy anti-inflammatory fats.',
                tags: ['Hormone Clearing', 'Omega-6', 'Vegan', '160 Calories'],
            },
            {
                name: 'Chia Jam on Wholegrain Crackers',
                reason: 'Chia seeds provide Omega-3s and high fibre to ensure digestive regularity during the cycle slowdown.',
                tags: ['Omega-3', 'Digestive Support', 'Vegan', '130 Calories'],
            },
            {
                name: 'Goji Berries and Dark Chocolate Nibs',
                reason: 'A dense hit of antioxidants and magnesium to protect cells and relax the nervous system.',
                tags: ['Antioxidant', 'Magnesium', 'Vegan', '140 Calories'],
            },
            {
                name: 'Steamed Asparagus Spears with Lemon',
                reason: 'A natural diuretic to help flush excess water and reduce the "heaviness" felt in the late luteal phase.',
                tags: ['Natural Diuretic', 'Low Calorie', 'Vegan', '40 Calories'],
            },
            {
                name: 'Roasted Pumpkin Chunks with Cinnamon',
                reason: 'Grounding "slow carbs" that satisfy the urge for starchy foods while providing Vitamin A for skin health.',
                tags: ['Vitamin A', 'Grounding', 'Vegan', '90 Calories'],
            },
            {
                name: 'Smoothie with Spinach, Mango, and Flaxseeds',
                reason: 'Magnesium from spinach and lignans from flaxseeds help gently balance dropping hormone levels.',
                tags: ['Magnesium', 'Hormone Balance', 'Vegan', '180 Calories'],
            },
            {
                name: 'A Cup of Miso Soup with Diced Tofu',
                reason: 'Warm and salty to satisfy cravings while providing probiotics and light protein.',
                tags: ['Probiotic', 'Warm', 'Vegan', '60 Calories'],
            },
            {
                name: 'Turkey Slices rolled with Spinach',
                reason: 'Tryptophan in turkey helps the body produce melatonin and serotonin, aiding both mood and luteal sleep.',
                tags: ['Tryptophan', 'High Protein', 'Sleep Support', '95 Calories'],
            },
            {
                name: 'Baked Kale Chips with Nutritional Yeast',
                reason: 'Nutritional yeast provides B vitamins for energy, and kale offers Vitamin K for healthy blood flow.',
                tags: ['B Vitamins', 'Vitamin K', 'Vegan', '80 Calories'],
            },
            {
                name: 'Pomegranate Seeds and Pistachios',
                reason: 'Polyphenols and healthy fats support vascular health and manage the mild inflammation of the late cycle.',
                tags: ['Polyphenols', 'Antioxidant', 'Vegan', '150 Calories'],
            },
            {
                name: 'Small Potato baked with a Teaspoon of Butter',
                reason: 'Provides the exact type of carbohydrate required to boost brain serotonin when mood dips occur.',
                tags: ['Serotonin', 'Comforting', 'Vegetarian', '140 Calories'],
            },
            {
                name: 'Walnut Halves stuffed into Prunes',
                reason: 'Prunes provide iron and help with constipation. Walnuts support cognitive function and mood.',
                tags: ['Iron', 'Brain Health', 'Vegan', '160 Calories'],
            },
            {
                name: 'Cherry Tomatoes with Mini Mozzarella Balls',
                reason: 'The calcium in mozzarella helps reduce the severity of pre-menstrual muscle tension and cramps.',
                tags: ['Calcium', 'High Protein', 'Vegetarian', '120 Calories'],
            },
            {
                name: 'Warm Buckwheat Bowl with Honey',
                reason: 'Buckwheat is an alkalising seed that is gentle on a bloated stomach while being very nutrient-dense.',
                tags: ['Gentle Digestion', 'Mineral-Rich', 'Vegan', '170 Calories'],
            },
            {
                name: 'Peanut Butter on Celery Sticks',
                reason: 'A hydrating snack with healthy fats and Vitamin E to soothe breast tenderness.',
                tags: ['Hydrating', 'Vitamin E', 'Vegan', '155 Calories'],
            },
            {
                name: 'Fresh Fig with a Drizzle of Honey',
                reason: 'Figs provide iron and calcium, helping to build up mineral stores before menstruation begins.',
                tags: ['Calcium', 'Iron-Rich', 'Vegan', '85 Calories'],
            },
            {
                name: 'Hemp Hearts on Sliced Peach',
                reason: 'Hemp provides a perfect 3:1 ratio of Omega fatty acids for hormone synthesis.',
                tags: ['Essential Fats', 'Hormone Support', 'Vegan', '135 Calories'],
            },
            {
                name: 'Roasted Beetroot Wedges',
                reason: 'Supports the liver in the complex task of processing used hormones as oestrogen and progesterone drop.',
                tags: ['Liver Support', 'Blood Flow', 'Vegan', '95 Calories'],
            },
            {
                name: 'A Handful of Soya Nuts',
                reason: 'Contains isoflavones that can mimic oestrogen gently as levels naturally decline.',
                tags: ['Phytoestrogen', 'High Protein', 'Vegan', '150 Calories'],
            },
            {
                name: 'Matcha Latte (Unsweetened) with Almond Milk',
                reason: 'The L-theanine in matcha provides focused energy without the caffeine crash, which can worsen PMS anxiety.',
                tags: ['Calm Energy', 'Antioxidant', 'Vegan', '60 Calories'],
            },
            {
                name: 'Slice of Sprouted Grain Bread with Ghee',
                reason: 'Easy to digest and grounding. Ghee provides fat-soluble vitamins (A, D, E, K) for hormone health.',
                tags: ['Grounding', 'Fat-Soluble Vitamins', 'Vegetarian', '165 Calories'],
            },
            {
                name: 'Dried Mulberries',
                reason: 'A surprising source of iron and Vitamin C to support the immune system during the luteal dip.',
                tags: ['Iron-Rich', 'Vitamin C', 'Vegan', '110 Calories'],
            },
            {
                name: 'Yoghurt with Bee Pollen',
                reason: 'Bee pollen is rich in B vitamins and minerals to help combat the fatigue associated with the late luteal phase.',
                tags: ['Energising', 'B Vitamins', 'Vegetarian', '145 Calories'],
            },
        ],
    },
};
 
// ─────────────────────────────────────────────
// 3. MOOD & HORMONE LOGIC
// ─────────────────────────────────────────────
const moodLogic = {
    Happy: {
        Menstrual: 'Hormones are low, but your body is clearing out the old to make way for the new. Enjoy the quiet sense of relief that often comes with Day 1.',
        Follicular: 'Oestrogen is rising, boosting your feel-good chemicals like dopamine and serotonin. Enjoy this high-energy window!',
        Ovulatory: 'You are at your hormonal peak. Testosterone is also slightly elevated, increasing confidence and social energy.',
        Luteal: 'Progesterone is dominant, which can have a lovely sedative, grounding effect. Savour this "nesting" energy.',
        Default: 'Your hormones are likely well balanced today. A great day to tackle something you\'ve been putting off!',
    },
    Sad: {
        Menstrual: 'Day 1-3 often see the lowest hormone levels of your entire cycle, which can feel like an emotional "empty tank." Prioritise comfort.',
        Follicular: 'If you\'re feeling low while oestrogen rises, it might be a sensitivity to the shift. Keep movement light and focus on hydration.',
        Ovulatory: 'A sudden dip in oestrogen right after ovulation can cause a temporary "mood crash." It is brief—hang in there.',
        Luteal: 'The drop in oestrogen and progesterone pulls serotonin down. Be gentle with yourself; reach for vitamin B6-rich foods like bananas.',
        Default: 'Low sunlight or a dip in vitamin D can often mimic hormonal blues. Try a nourishing, warm meal.',
    },
    Anxious: {
        Menstrual: 'Low hormones can sometimes make you feel "unfiltered" or vulnerable. Focus on grounding foods like root vegetables.',
        Follicular: 'Oestrogen is rising rapidly. For some, this "surge" can feel like jittery energy. A long walk can help burn off the excess.',
        Ovulatory: 'High oestrogen can occasionally over-stimulate the nervous system. Deep breathing can help regulate your heart rate.',
        Luteal: 'Progesterone is dropping, affecting GABA receptors in the brain and lowering calm. Try magnesium supplements.',
        Default: 'This could be a cortisol spike. Ensure you\'re limiting caffeine and practicing a short wind-down routine.',
    },
    Tired: {
        Menstrual: 'Low oestrogen and iron loss are likely responsible. Your body is working hard — prioritise 8+ hours of sleep.',
        Follicular: 'If you are tired now, your body may be recovering from your period. Increase your protein intake to support follicle development.',
        Ovulatory: 'The energy required for ovulation can cause a midday slump. Ensure you\'re eating enough complex carbs for fuel.',
        Luteal: 'Your basal body temperature is higher, which can disrupt deep sleep. Try a cooler bedroom environment.',
        Default: 'A dip in blood sugar might be the cause. Pair a protein source with a healthy fat for your next meal.',
    },
    Irritable: {
        Menstrual: 'Prostaglandins (which cause cramps) can also make you feel physically on edge. Heat therapy can help soothe the physical tension.',
        Follicular: 'As energy rises, frustration can peak if you feel "blocked." Use this drive to finish a specific, small task.',
        Ovulatory: 'The oestrogen peak can occasionally cause irritability. Focus on eating cruciferous veggies to help clear excess hormones.',
        Luteal: 'The classic PMS window. Serotonin is dipping as hormones crash. Eat complex carbs like sweet potatoes to boost your mood.',
        Default: 'Hormonal shifts are likely affecting your blood sugar stability. Eat regularly and avoid skipping meals.',
    },
};