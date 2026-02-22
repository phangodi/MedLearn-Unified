const topic69 = {
  id: 'topic-69',
  mcqs: ['mcq-4'],
  number: 69,
  title: 'Nutrition: Energy Metabolism, the Role of Macronutrients in Energy Intake',
  subtitle: 'Covers energy measurement methods, metabolic rate determinants, and the physiological roles of dietary carbohydrates, proteins, and lipids.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: false,
      title: 'Name the types of macronutrient compounds (carbohydrates, proteins and lipids). Compare the energy content of the macronutrients - biological caloric values',
      keyPoints: [
        'Three macronutrients: carbohydrates, proteins, and lipids - all provide energy via oxidation',
        'Biological caloric values: carbohydrates 17.2 kJ/g (4 kcal/g), proteins 17.2 kJ/g (4 kcal/g), lipids 39 kJ/g (9 kcal/g)',
        'Conversion: 1 kcal = 4.2 kJ',
        'Lipids provide more than twice the energy per gram compared to carbohydrates and proteins - most efficient energy store',
        'Proteins: incomplete oxidation - nitrogen excreted as urea, so physiological fuel value slightly lower than combustion heat',
        'Carbohydrates and lipids: complete oxidation - physiological fuel value approximately equal to caloric (combustion) value'
      ],
      officialDefinitions: [
        'Macronutrients: essential macronutrients for the human body: Carbohydrates. Fats. Proteins.',
        'Isodynamic law: in terms of energy production, individual macronutrients can replace each other (Max Rubner 1878). Limitations: The isodynamic law can not fully apply (need of essential amino acids and essential fatty acids, antiketogenic effects of carbohydrates etc.).',
        'Caloric value (= combustion heat): the heat which is produced during the combustion of 1 g foodstuff in a bomb calorimeter. Unit: kJ/g or kcal/g.',
        'Physiological fuel value: the amount of metabolizable energy that the body actually obtains from a nutrient after digestion, absorption, and metabolic losses. Unit: kJ/g or kcal/g (1 kcal = 4.2 kJ; 1kJ = 0.24 kcal).',
        'Biological caloric values of macronutrients: Carbohydrates: 17.2 kJ/g (4 kcal/g). Proteins: 17.2 kJ/g (4 kcal/g). Lipids (Fats): 39 kJ/g (9 kcal/g). Values for a 70 kg BW adult male, during light physical activity.',
        'Carbohydrates/triglycerides + O2 → CO2 + H2O + ATP + heat (complete oxidation: physiological fuel value is approx. equal to the caloric value). Proteins/AAs + O2 → CO2 + H2O + urea + ATP + heat (incomplete oxidation, energy is lost when N is excreted as urea: physiological fuel value is lower than the caloric value).'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'The three macronutrients are carbohydrates, proteins, and lipids:',
            items: [
              'Carbohydrates yield 17.2 kilojoules per gram, or 4 kilocalories per gram',
              'Proteins yield 17.2 kilojoules per gram, or 4 kilocalories per gram',
              'Lipids yield 39 kilojoules per gram, or 9 kilocalories per gram, more than twice the energy density of the other two'
            ]
          },
          {
            type: 'paragraph',
            content: 'Carbohydrates and lipids are completely oxidized to carbon dioxide and water, so their physiological fuel value equals their combustion heat. Proteins are incompletely oxidized - nitrogen is excreted as urea - so the physiological fuel value of protein is slightly lower than its caloric value. One kilocalorie equals 4.2 kilojoules.'
          }
        ],
        raw: 'The three macronutrients are carbohydrates, proteins, and lipids. Carbohydrates and proteins both yield 17.2 kilojoules per gram, or 4 kilocalories per gram. Lipids yield 39 kilojoules per gram, or 9 kilocalories per gram, more than twice the energy density of the other two. Carbohydrates and lipids are completely oxidized to carbon dioxide and water, so their physiological fuel value equals their combustion heat. Proteins are incompletely oxidized - nitrogen is excreted as urea - so the physiological fuel value of protein is slightly lower than its caloric value. One kilocalorie equals 4.2 kilojoules.'
      },
        audioUrl: '/Audio/Topic-069/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: true,
      title: '>>Explain the strategies for the measurement of the energy production of the body.<< (direct- and indirect calorimetry)',
      keyPoints: [
        'Two strategies: direct calorimetry (measures heat released) and indirect calorimetry (measures gas exchange)',
        'Direct calorimetry: subject placed in insulated calorimetric chamber; heat transferred to water or ice is measured; accurate but expensive, impractical, does not differentiate macronutrient use',
        'Indirect calorimetry: measures O₂ consumption (VO₂) and CO₂ production (VCO₂); non-invasive, practical, can identify substrate being oxidized via RQ',
        'TDEE by indirect calorimetry: caloric equivalent for O₂ × VO₂',
        'VO₂ at rest ≈ 250 ml/min; VO₂ max ≈ 3 L/min',
        'Indirect calorimetry advantage: portable equipment (metabolic cart, Douglas bag) allows clinical and research use'
      ],
      officialDefinitions: [
        'Direct calorimetry: determination of energy expenditure based on the body\'s heat release. The heat generated by the body is transferred to the air and walls of the chamber. Heat then measured via recording the temperature change in the air and water flowing through the chamber. This heat change is a measure of the subject\'s metabolic rate.',
        'Indirect calorimetry: determination of energy expenditure by measuring O2 consumption (VO2) and CO2 production (VCO2) instead of measuring heat production directly. TDEE = caloric equivalent values for O2 x VO2. VO2 average at rest is about 250 ml/min, VO2 max is about 3 l/min.',
        'Indirect calorimetry measurement: measured by ergospirometer. Measurement of cardiorespiratory parameters and O2 consumption/CO2 production. TDEE = caloric equivalent values (kJ/l O2) x VO2 (l/min).',
        'Performance (rate of energy conversion) = transformed energy (Joule) / elapsed time (sec). Used to describe physical work. Unit: 1 J/s = 1 Watt (the SI unit of energy content of nutrients is kJ (1 kJ = 0.24 kcal)).',
        'Efficiency (η) % = external work / energy used x 100. Whole body (mechanical work): 20-25 %. Heart activity: 15-40 %. Petrol engine: 20-30 %.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Direct calorimetry and indirect calorimetry are the two main strategies for measuring energy production:',
            critical: true,
            items: [
              'Direct calorimetry measures heat produced by the body: the subject is placed in an insulated calorimetric chamber, and the heat transferred to water flowing through the chamber walls is measured; this method is highly accurate but expensive, impractical, and cannot differentiate which macronutrient is being oxidized',
              'Indirect calorimetry measures oxygen consumption and carbon dioxide production using equipment such as a metabolic cart or Douglas bag; total daily energy expenditure is calculated as the caloric equivalent for oxygen multiplied by oxygen consumption; at rest, oxygen consumption averages about 250 milliliters per minute, and the maximum is about 3 liters per minute; indirect calorimetry is non-invasive, practical, and can identify the substrate being oxidized via the respiratory quotient'
            ]
          }
        ],
        raw: '>>Direct calorimetry and indirect calorimetry are the two main strategies for measuring energy production. Direct calorimetry measures heat produced by the body: the subject is placed in an insulated calorimetric chamber, and the heat transferred to water flowing through the chamber walls is measured. This method is highly accurate but expensive, impractical, and cannot differentiate which macronutrient is being oxidized. Indirect calorimetry measures oxygen consumption and carbon dioxide production using equipment such as a metabolic cart or Douglas bag. Total daily energy expenditure is calculated as the caloric equivalent for oxygen multiplied by oxygen consumption. At rest, oxygen consumption averages about 250 milliliters per minute, and the maximum is about 3 liters per minute. Indirect calorimetry is non-invasive, practical, and can identify the substrate being oxidized via the respiratory quotient.<<'
      },
        audioUrl: '/Audio/Topic-069/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: false,
      title: 'Define the respiratory quotient (RQ) and the caloric equivalent for oxygen values. Caloric equivalent values of different macronutrient compounds. Respiratory quotient and caloric equivalent values measured after consumption of normal mixed food',
      keyPoints: [
        'RQ (respiratory quotient): ratio of VCO₂ produced to VO₂ consumed per minute - RQ = VCO₂ / VO₂',
        'RQ values: carbohydrates 1.0, proteins 0.8, lipids 0.7, mixed diet 0.82',
        'RQ differs because of chemical composition and amount of O₂ required for complete oxidation of each nutrient',
        'Caloric equivalent for O₂: energy released per liter of O₂ consumed - carbohydrates 21.2 kJ/L, proteins 19.2 kJ/L, lipids 19.7 kJ/L, mixed diet 20.2 kJ/L',
        'After mixed food: RQ ≈ 0.82; caloric equivalent ≈ 20.2 kJ/L O₂',
        'RQ > 1.0 indicates net lipogenesis (carbohydrate converting to fat); RQ < 0.7 indicates ketosis'
      ],
      officialDefinitions: [
        'RQ = VCO2/VO2 (volume of CO2 produced per volume of O2 consumed in one minute). RQ values for different macronutrients: carbohydrates 1, fats 0.7 and proteins 0.8.',
        'Why do RQ values differ? The chemical composition of the nutrients. The amount of oxygen required for complete oxidation. The respiratory quotient (RQ).',
        'Caloric equivalent values of nutrients for O2 = the amount of energy released during the oxidation of a specific nutrient with 1L oxygen. The caloric equivalent values for O2 at 37 °C: carbohydrate: 21.1 kJ/l O2. Fat: 19.6 kJ/l O2. Protein: 18.8 kJ/l O2. Mixed diet: 20.2 kJ/l O2.',
        'Reference values: RQ values of carbohydrates/proteins/lipids/mixed food: 1.0/0.8/0.7/0.82. Caloric equivalent values for oxygen: carbohydrates/proteins/lipids/mixed food: 21.2/19.2/19.7/20.2 kJ/L O2.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'The respiratory quotient, or RQ, is defined as the ratio of the volume of carbon dioxide produced to the volume of oxygen consumed per minute, expressed as RQ equals VCO₂ divided by VO₂.'
          },
          {
            type: 'list',
            intro: 'RQ values differ by macronutrient:',
            items: [
              'Carbohydrates have an RQ of 1.0',
              'Proteins 0.8',
              'Lipids 0.7',
              'After a normal mixed diet, the RQ is approximately 0.82'
            ]
          },
          {
            type: 'paragraph',
            content: 'The caloric equivalent for oxygen represents the amount of energy released per liter of oxygen consumed.'
          },
          {
            type: 'list',
            intro: 'The caloric equivalent values are:',
            items: [
              'Carbohydrates 21.2 kilojoules per liter',
              'Proteins 19.2 kilojoules per liter',
              'Lipids 19.7 kilojoules per liter',
              'Mixed diet 20.2 kilojoules per liter of oxygen'
            ]
          }
        ],
        raw: 'The respiratory quotient, or RQ, is defined as the ratio of the volume of carbon dioxide produced to the volume of oxygen consumed per minute, expressed as RQ equals VCO₂ divided by VO₂. RQ values differ by macronutrient: carbohydrates have an RQ of 1.0, proteins 0.8, and lipids 0.7. After a normal mixed diet, the RQ is approximately 0.82. The caloric equivalent for oxygen represents the amount of energy released per liter of oxygen consumed. The caloric equivalent values are: carbohydrates 21.2 kilojoules per liter, proteins 19.2 kilojoules per liter, lipids 19.7 kilojoules per liter, and for a mixed diet 20.2 kilojoules per liter of oxygen.'
      },
        audioUrl: '/Audio/Topic-069/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: false,
      title: 'Define the basal metabolic rate (BMR). Describe the standard conditions for measurement of the BMR. List the major factors affecting the BMR of individuals (age, gender, endocrine status)',
      keyPoints: [
        'BMR: minimum energy expenditure to maintain vital physiological functions at complete rest - breathing, circulation, cell production',
        'BMR values: adult male ~7100 kJ/day; adult female ~6300 kJ/day',
        'Standard conditions: (1) morning after waking up, (2) physical and mental rest lying down, (3) at least 8-12 hours after last meal, (4) thermoneutral ambient temperature (~20-25°C), (5) normal core temperature, (6) drug-free',
        'Age: BMR highest in infancy/childhood; decreases with age due to reduced muscle mass',
        'Gender: males higher BMR than females due to greater muscle mass; gender difference insignificant when corrected for lean body mass',
        'Endocrine status: thyroid hormones (T3/T4) fundamentally determine BMR - low levels reduce BMR to 60% of normal; high levels increase BMR by 80%; hyperthyroidism raises, hypothyroidism lowers BMR'
      ],
      officialDefinitions: [
        'Basal Metabolic Rate (BMR): energy expenditure determined under standard conditions. 6500 kJ/day (75 W; 1560 kcal) - 7100 kJ/day (100 W; 1700 kcal). Reference values: BMR adult male/female: 7100/6300 kJ/day.',
        'Standard conditions for BMR measurement: 1. In the morning, after waking up. 2. In physical and mental rest (in lying position). 3. At least 8 hours after the last meal. 4. In indifferent ambient temperature. 5. The core temperature must be normal. 6. In a drug-free condition.',
        'Processes supported by basal metabolic rate: Homeostasis. Endocrine and metabolic processes. Functions of the CNS. Resting tone of the skeletal muscles. Respiratory and cardiovascular functions. Renal functions. Thermoregulation.',
        'Body size, age and sex influence BMR: There is a linear relationship between body surface area and metabolic rate. Energy turnover decreases with age in both sexes. BMR is higher in men than in women (adipose tissue, low E consumption). Regarding the lean body mass, the gender difference is insignificant! The average adult body surface area is 1.7 m2.',
        'Thyroid hormones (T3/T4): Fundamentally determine the BMR. Low hormone levels reduce the BMR to the 60% of normal value. High hormone levels increase the BMR by the 80% of normal value. Long-term starvation decreases T3/T4 levels.',
        'Biological rhythms (circadian rhythm) influence BMR: Daily fluctuations of neuro-humoral regulation (e.g.: hypothalamo-hypophyseo-adrenal system: CRH-ACTH-glucocorticoids). Sleep-wake cycle (sleep 8 hours and go to bed early).',
        'Body temperature influences BMR: With fever, every 1°C rise in body temperature results in approximately a 10-13 % increase in metabolic rate. Inflammations, infections: energy demand of the immune system increases (secretion of catecholamins and glucocorticoids, prostaglandin synthesis, cytokine release etc.). Ambient temperature: Metabolism is fully governed by intrinsic factors only within the thermoneutral zone of ambient temperatures. At ambient temperatures outside the thermoneutral zone, a large fraction of total energy is used for thermoregulation (the BMR is strongly influenced by the ambient temperature).'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Basal metabolic rate, or BMR, is defined as the energy expenditure required to maintain all essential physiological functions at complete rest. Normal values are approximately 7100 kilojoules per day for adult males and 6300 kilojoules per day for adult females.'
          },
          {
            type: 'list',
            intro: 'BMR is measured under standard conditions:',
            items: [
              'In the morning after waking up',
              'In physical and mental rest lying down',
              'At least 8 to 12 hours after the last meal',
              'At thermoneutral ambient temperature of about 20 to 25 degrees Celsius',
              'With normal core body temperature',
              'In a drug-free state'
            ]
          },
          {
            type: 'list',
            intro: 'The major factors affecting BMR are age, gender, and endocrine status:',
            items: [
              'BMR is highest in infancy and childhood and decreases with age due to reduced muscle mass',
              'Males have a higher BMR than females due to greater muscle mass, though the gender difference is insignificant when corrected for lean body mass',
              'Thyroid hormones T3 and T4 fundamentally determine BMR: low levels reduce BMR to 60 percent of normal, while high levels increase it by up to 80 percent of normal'
            ]
          }
        ],
        raw: 'Basal metabolic rate, or BMR, is defined as the energy expenditure required to maintain all essential physiological functions at complete rest. Normal values are approximately 7100 kilojoules per day for adult males and 6300 kilojoules per day for adult females. BMR is measured under standard conditions: in the morning after waking up, in physical and mental rest lying down, at least 8 to 12 hours after the last meal, at thermoneutral ambient temperature of about 20 to 25 degrees Celsius, with normal core body temperature, and in a drug-free state. The major factors affecting BMR are age, gender, and endocrine status. BMR is highest in infancy and childhood and decreases with age due to reduced muscle mass. Males have a higher BMR than females due to greater muscle mass, though the gender difference is insignificant when corrected for lean body mass. Thyroid hormones T3 and T4 fundamentally determine BMR: low levels reduce BMR to 60 percent of normal, while high levels increase it by up to 80 percent of normal.'
      },
        audioUrl: '/Audio/Topic-069/LO-04.mp3'
    },
    {
      id: 'lo-5',
      isCritical: true,
      title: '>>Explain the effect of food ingestion on the metabolic rate<< (specific dynamic effect - diet-induced thermogenesis (DIT)). Describe the effect of protein-rich diet on the metabolic rate',
      keyPoints: [
        'DIT (diet-induced thermogenesis): increase in metabolic rate above BMR caused by food ingestion - also called specific dynamic action (SDA) or specific dynamic effect of food',
        'Caused by energy required for digestion, absorption, transport, metabolism, and storage of nutrients; increase occurs several hours after eating',
        'DIT contribution to TDEE: approximately 8-10% (6% for mixed diet)',
        'DIT by macronutrient: proteins 20-30%, carbohydrates 5-10%, lipids 0-5%',
        'Protein-rich diet: highest and most prolonged DIT (~20-30% above BMR); due to amino acid deamination, urea formation (energy-consuming), and gluconeogenesis from excess amino acids',
        'Protein DIT lasts 3-12 hours after food intake; increases satiety and preserves lean body mass'
      ],
      officialDefinitions: [
        'Diet-induced thermogenesis (DIT): increase in heat production and energy expenditure, occurs several hours after eating. Caused by increased energy demand of the GI system. Can be influenced by meal composition, meal timing, age, and overall metabolic health. In a mixed diet, the increase in EE is approx. 6%. Protein induces the highest and most prolonged increase (approx. 15-30 %). DIT is also known as specific dynamic action of food.',
        'Total Daily Energy Expenditure = BMR + DIT + EEE + NEAT.',
        'Effect of macronutrients on DIT: Protein: approx. 15-30%. Carbohydrates: 5-10%. Fats: 0-5%.',
        'Effect of protein-rich diet on metabolic rate: Protein has the highest DIT because of the energy required to: break peptide bonds, deaminate amino acids, convert excess amino acids to glucose or fat. A high-protein meal can significantly raise metabolic rate, promote satiety, and preserve lean body mass.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Food ingestion increases metabolic rate above basal levels - this is called diet-induced thermogenesis, or DIT, also known as the specific dynamic effect of food. DIT represents the energy expenditure caused by digestion, absorption, transport, metabolism, and storage of nutrients. The thermogenic increase occurs several hours after eating. DIT contributes approximately 8 to 10 percent to total daily energy expenditure, or about 6 percent for a mixed diet.',
            critical: true
          },
          {
            type: 'list',
            intro: 'The thermogenic effect varies by macronutrient:',
            items: [
              'Proteins produce the highest DIT of 20 to 30 percent',
              'Carbohydrates 5 to 10 percent',
              'Lipids only 0 to 5 percent'
            ]
          },
          {
            type: 'paragraph',
            content: 'A protein-rich diet produces the highest and most prolonged metabolic rate increase because amino acid deamination in the liver produces urea - an energy-consuming process - and excess amino acids are used for gluconeogenesis, further increasing ATP demand. The thermogenic effect lasts 3 to 12 hours after food intake, and a protein-rich diet also promotes satiety and preserves lean body mass.'
          }
        ],
        raw: '>>Food ingestion increases metabolic rate above basal levels - this is called diet-induced thermogenesis, or DIT, also known as the specific dynamic effect of food. DIT represents the energy expenditure caused by digestion, absorption, transport, metabolism, and storage of nutrients. The thermogenic increase occurs several hours after eating. DIT contributes approximately 8 to 10 percent to total daily energy expenditure, or about 6 percent for a mixed diet.<< The thermogenic effect varies by macronutrient: proteins produce the highest DIT of 20 to 30 percent, carbohydrates 5 to 10 percent, and lipids only 0 to 5 percent. A protein-rich diet produces the highest and most prolonged metabolic rate increase because amino acid deamination in the liver produces urea - an energy-consuming process - and excess amino acids are used for gluconeogenesis, further increasing ATP demand. The thermogenic effect lasts 3 to 12 hours after food intake, and a protein-rich diet also promotes satiety and preserves lean body mass.'
      },
        audioUrl: '/Audio/Topic-069/LO-05.mp3'
    },
    {
      id: 'lo-6',
      isCritical: false,
      title: 'List the factors determining the daily energy expenditure (BMR+DIT+physical activity). Describe the effect of physical activity on the metabolic rate, leisure rate, limits of maximal energy expenditure',
      keyPoints: [
        'Total daily energy expenditure (TDEE) = BMR + DIT + physical activity (EEE + NEAT)',
        'Contributions: BMR 60-70%, DIT 8-10%, physical activity 15-30%',
        'Physical activity components: EEE (exercise energy expenditure) + NEAT (non-exercise activity thermogenesis)',
        'Physical activity: most variable component of TDEE; exercise can increase metabolic rate 5-20 times above resting levels',
        'Leisure rate: energy expenditure during light physical activity; adult male ~9600 kJ/day (115 W); adult female ~8400 kJ/day (100 W)',
        'Maximal energy expenditure: limited by cardiovascular capacity and heat dissipation; extreme activity can increase expenditure up to 50 times resting rate briefly'
      ],
      officialDefinitions: [
        'Total Daily Energy Expenditure (TDEE): BMR + DIT (= diet induced thermogenesis) + physical activity: EEE (exercise energy expenditure) + NEAT (non-exercise activity thermogenesis). Contributions to TDEE: BMR - 60-70%, DIT - 8-10%, physical activity - 15-30%. At physical and mental rest TDEE = BMR and most of the energy produced during cellular metabolism is converted to heat.',
        'Physical activity (EEE + NEAT) is the most variable component of TDEE. During exercise, metabolic rate can increase 5-20 times above resting levels, depending on intensity. Both aerobic and resistance training significantly elevate energy expenditure.',
        'NEAT includes everyday, spontaneous, and low-intensity movements that is not sleeping, eating or structured exercise e.g.: standing, fidgeting or posture maintenance; walking; household chores; cooking, shopping; mental activity.',
        'Energy expenditure values by activity: Sleeping: 280 kJ/h. Awake lying still: 320 kJ/h. Sitting at rest: 400 kJ/h. Standing relaxed: 420 kJ/h. "Light exercise": 800 kJ/h. Swimming: 2000 kJ/h. Running (10 km/h): 2300 kJ/h (~55 g fat). Walking up stairs: 4400 kJ/h (~120 g fat).',
        'Leisure rate: Reference values: leisure rate of adult male/female 9600/8400 kJ/day corresponds to 115-100 W.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Total daily energy expenditure is determined by three components:',
            items: [
              'Basal metabolic rate contributes 60 to 70 percent',
              'Diet-induced thermogenesis approximately 8 to 10 percent',
              'Physical activity 15 to 30 percent, consisting of exercise energy expenditure and non-exercise activity thermogenesis, or NEAT'
            ]
          },
          {
            type: 'paragraph',
            content: 'Physical activity is the most variable component, and during exercise metabolic rate can increase 5 to 20 times above resting levels. The leisure rate refers to energy expenditure during light daily physical activities: approximately 9600 kilojoules per day, corresponding to 115 watts, for adult males, and 8400 kilojoules per day, corresponding to 100 watts, for adult females. Extreme physical activity can transiently increase energy expenditure up to 50 times the resting rate, limited by cardiovascular oxygen delivery capacity and the ability to dissipate heat.'
          }
        ],
        raw: 'Total daily energy expenditure is determined by three components: basal metabolic rate, diet-induced thermogenesis, and physical activity. BMR contributes 60 to 70 percent, DIT approximately 8 to 10 percent, and physical activity 15 to 30 percent. Physical activity consists of exercise energy expenditure and non-exercise activity thermogenesis, or NEAT. Physical activity is the most variable component, and during exercise metabolic rate can increase 5 to 20 times above resting levels. The leisure rate refers to energy expenditure during light daily physical activities: approximately 9600 kilojoules per day, corresponding to 115 watts, for adult males, and 8400 kilojoules per day, corresponding to 100 watts, for adult females. Extreme physical activity can transiently increase energy expenditure up to 50 times the resting rate, limited by cardiovascular oxygen delivery capacity and the ability to dissipate heat.'
      },
        audioUrl: '/Audio/Topic-069/LO-06.mp3'
    },
    {
      id: 'lo-7',
      isCritical: false,
      title: 'Introduce the concept of energy balance of the body',
      keyPoints: [
        'Energy balance: relationship between energy intake and energy expenditure',
        'Equation: Energy Intake = Energy Expended (heat + work) + Energy Stored',
        'Positive energy balance: intake > expenditure → excess stored as triglycerides in adipose tissue → weight gain',
        'Negative energy balance: intake < expenditure → stored energy mobilized → weight loss',
        'All energy from food is eventually converted to heat (via ATP production, mechanical work, or direct dissipation)',
        'Long-term energy balance determines body weight and composition'
      ],
      officialDefinitions: [
        'Energy balance: Energy Intake (Food) = Energy Expended (Heat + Work) + Energy Stored. Energy intake: comes from the food and beverages consumed. Energy expended: used for heat production, work, and metabolism. Energy stored: excess energy is stored as fat in adipose tissue.',
        'Cellular metabolism: CO2 + H2O + ATP + heat. Metabolism = catabolism + anabolism. Catabolism (breakdown): monosaccharides, fatty acids, amino acids. Anabolism (synthesis): structural/functional macromolecules, energy stores.',
        'Example for calculating TDEE: A young male doctor works for 8 hours with an energy intake of 2500 kcal (10500 kJ/day) and then swims for an hour: BMR = 7100 kJ/day, DIT = 1050 kJ, NEAT = 2100 kJ, EEE = 2000 kJ. TDEE = 12250 kJ/day. 1750 kJ negative energy balance ~ 45 g fat ~ loss of 60 g adipose tissue.',
        'Requirements of a mixed, balanced diet: The energy content of the nutrient should cover the daily energy requirement. It should contain at least the necessary minimum amounts of protein, carbohydrates and fats. The vitamin, mineral and trace element content should also reach or exceed the minimum intake values. The toxic limit values (e.g. toxins, heavy metals, pesticides) should not be exceeded.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Energy balance refers to the relationship between energy intake from food and total energy expenditure. The equation is: energy intake equals energy expended as heat and mechanical work, plus energy stored.'
          },
          {
            type: 'list',
            items: [
              'When energy intake exceeds expenditure, a positive energy balance exists and the excess is stored as triglycerides in adipose tissue, leading to weight gain',
              'When expenditure exceeds intake, a negative energy balance exists and stored energy is mobilized, leading to weight loss'
            ]
          },
          {
            type: 'paragraph',
            content: 'Long-term energy balance is the fundamental determinant of body weight and composition.'
          }
        ],
        raw: 'Energy balance refers to the relationship between energy intake from food and total energy expenditure. The equation is: energy intake equals energy expended as heat and mechanical work, plus energy stored. When energy intake exceeds expenditure, a positive energy balance exists and the excess is stored as triglycerides in adipose tissue, leading to weight gain. When expenditure exceeds intake, a negative energy balance exists and stored energy is mobilized, leading to weight loss. Long-term energy balance is the fundamental determinant of body weight and composition.'
      },
        audioUrl: '/Audio/Topic-069/LO-07.mp3'
    },
    {
      id: 'lo-8',
      isCritical: true,
      title: 'Dietary proteins: >>Describe sources and minimal daily allowance of proteins,<< importance of the essential amino acids, biological value (grade) of the dietary proteins. Compare the protein content and quality of food of animal and plant origin',
      keyPoints: [
        'Protein sources: animal (meat, fish, dairy, eggs) and plant (legumes, grains, nuts, soy); optimal: 50% animal + 50% plant',
        'Recommended daily allowance: 60-80 g/day; minimum ~30 g/day; WHO optimal: 1-1.5 g/kg body weight/day',
        'Essential amino acids (8+1): tryptophan, threonine, valine, isoleucine, lysine, methionine, leucine, phenylalanine; semi-essential: histidine - cannot be synthesized de novo, must be obtained from diet',
        'Biological value (BV): efficiency with which absorbed dietary protein is incorporated into body proteins; depends on essential amino acid content and proportions',
        'Animal proteins (eggs BV=100, milk ~88-95, meat ~88-92): complete proteins - contain all essential amino acids in optimal proportions; high BV',
        'Plant proteins (wheat flour ~53, legumes ~56-72, potato ~73, soy ~74-80): generally lower BV - often lack one or more essential amino acids; can be improved by combining sources (complementation)'
      ],
      officialDefinitions: [
        'Proteins in the diet - Physiological properties: Metabolic and regulatory function: enzymes, hormones, immunoglobulins, other plasma proteins, neurotransmitters. Use and storage: Replacement of AAs (for protein synthesis). The excess is used in gluconeogenesis (sugar and fat storage).',
        'Essential amino acids: the human body does not synthesize them de novo: tryptophan, threonine, valine, isoleucine, lysine, methionine, leucine, phenylalanine (semi-essential: histidine).',
        'Biological value of proteins: depends on the essential amino acid content (composition) of proteins. Animal origin: complete proteins (they contain all essential amino acids in close to optimal proportions) e.g. meats, milk/dairy products, egg. Plant origin: generally low biological value e.g. wheat flour (gliadin, glutenin; 52%), legumes, potatoes. Completion! Protein sources optimally should be 50% plant and 50% animal origin.',
        'Biological value data of common dietary proteins: Breast milk, whole egg: 100. Cow milk: 88-95. Beef: 88-92. Fish: 80-92. Edam cheese: 85. Pork: 84. Chicken: 82. Soy: 74-80. Potato: 73. Bean, pea, lentil: 56-72. Rice: 63-67. 83% wheat flour: 53. Corn flour: 49.',
        'Optimal relative proportions of macronutrients: Proteins (1 g/kg BW; ~60-80 g). Fats ~50-100 g (1/3 unsaturated essential fatty acids, saturated max. 10%). Carbohydrates ~300 g; min. 10% (sucrose max. 10%). Recommended daily allowance of proteins/carbohydrates/lipids: 60-80/300/50-150 g/day. WHO recommendation for optimal protein intake: 1-1.5 g/kg b.w./day.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'The sources of dietary protein are:',
            critical: true,
            items: [
              'Animal foods - including meat, fish, dairy products, and eggs',
              'Plant foods, including legumes, grains, nuts, and soy products'
            ]
          },
          {
            type: 'paragraph',
            content: 'The recommended daily allowance is 60 to 80 grams per day, with a minimum of approximately 30 grams per day. The WHO recommends an optimal intake of 1 to 1.5 grams per kilogram of body weight per day.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'Essential amino acids cannot be synthesized de novo by the body and must be obtained from the diet. They are tryptophan, threonine, valine, isoleucine, lysine, methionine, leucine, and phenylalanine, with histidine being semi-essential. Biological value measures how efficiently absorbed protein is incorporated into body proteins, and it depends on the essential amino acid content and proportions.'
          },
          {
            type: 'list',
            items: [
              'Animal proteins are complete proteins, containing all essential amino acids in close to optimal proportions, with high biological values: whole egg 100, cow\'s milk 88 to 95, and beef 88 to 92',
              'Plant proteins generally have lower biological value because they lack one or more essential amino acids: wheat flour has a biological value of about 53, legumes 56 to 72, and soy 74 to 80'
            ]
          },
          {
            type: 'paragraph',
            content: 'Combining plant sources - such as legumes with grains - provides a complete amino acid profile through complementation. The optimal protein intake is 50 percent animal and 50 percent plant sources.'
          }
        ],
        raw: '>>The sources of dietary protein are animal foods - including meat, fish, dairy products, and eggs - and plant foods, including legumes, grains, nuts, and soy products. The recommended daily allowance is 60 to 80 grams per day, with a minimum of approximately 30 grams per day. The WHO recommends an optimal intake of 1 to 1.5 grams per kilogram of body weight per day.<< Essential amino acids cannot be synthesized de novo by the body and must be obtained from the diet. They are tryptophan, threonine, valine, isoleucine, lysine, methionine, leucine, and phenylalanine, with histidine being semi-essential. Biological value measures how efficiently absorbed protein is incorporated into body proteins, and it depends on the essential amino acid content and proportions. Animal proteins are complete proteins, containing all essential amino acids in close to optimal proportions, with high biological values: whole egg 100, cow\'s milk 88 to 95, and beef 88 to 92. Plant proteins generally have lower biological value because they lack one or more essential amino acids: wheat flour has a biological value of about 53, legumes 56 to 72, and soy 74 to 80. Combining plant sources - such as legumes with grains - provides a complete amino acid profile through complementation. The optimal protein intake is 50 percent animal and 50 percent plant sources.'
      },
        audioUrl: '/Audio/Topic-069/LO-08.mp3'
    },
    {
      id: 'lo-9',
      isCritical: false,
      title: 'Dietary carbohydrates: Describe types of carbohydrates (sources), biological importance, their anti-ketogenic effect, their contribution to the energy production of the body',
      keyPoints: [
        'Monosaccharides: glucose (blood, neurons, RBCs), fructose (fruits, juices), galactose (dairy)',
        'Disaccharides: sucrose (sweets, drinks - <10% of daily energy ≈50 g/day), lactose (dairy), maltose (germinating seeds)',
        'Polysaccharides: starch and cellulose (cereals, potatoes, corn, rice, beans), glycogen (animal storage); also sugar alcohols (xylitol, sorbitol - slow glucose rise, diabetic use)',
        'Biological importance: primary energy source (17.2 kJ/g); structural role in glycoproteins/glycolipids; fiber for colonic function and microbiome',
        'Storage: excess CHO → insulin → glycogen in liver and skeletal muscle; if glycogen saturated → triglycerides (non-alcoholic fatty liver)',
        'Anti-ketogenic effect: glucose provides oxaloacetate for TCA cycle to fully oxidize acetyl-CoA from fats; without adequate CHO → incomplete fat oxidation → ketone body accumulation (ketoacidosis); recommended intake 300 g/day'
      ],
      officialDefinitions: [
        'Carbohydrates in the diet - Physiological properties: Major energy source (RBC\'s are glucose dependent cells). Its fiber component is a roughage in the colon and prebiotics for the microbiom.',
        'Carbohydrate use and storage: CHs → insulin → glucose oxidation in cells. Excess is stored in liver and skeletal muscle (glycogen). If the glycogen stores are saturated, triglycerides, lipoproteins and fatty acids are formed in the liver (non-alcoholic fatty liver).',
        'Carbohydrate components of food: Monosaccharides: glucose, fructose (fruits, fruit juices). Disaccharides: sucrose ("refined carbohydrates"; sweets, drinks - should be less than 10% of daily energy requirement (approx. 50 g)), lactose (breast milk, dairy products). Polysaccharides: starch and cellulose (cereals, potatoes, corn, rice, beans), glycogen (animal origin). Sugar alcohols: hydrogen-reduced forms of monosaccharides. Slowly raise the blood glucose level, can be induced in the diet of diabetics (xylitol, mannitol, sorbitol). They are not metabolized (osmotic diarrhoea).',
        'Anti-ketogenic effect of carbohydrates: When carbohydrates are sufficient, glucose provides oxaloacetate, a compound necessary for the TCA cycle to function fully and oxidize acetyl-CoA derived from fats. Without enough glucose, fats are incompletely oxidized, leading to the accumulation of ketone bodies (ketosis). Thus, carbohydrates prevent excessive ketone production, especially during fasting or low-carb diets.',
        'Isodynamic law limitations: The isodynamic law can not fully apply (need of essential amino acids and essential fatty acids, antiketogenic effects of carbohydrates etc.).',
        'Glycemic index (GI): a number between 0 and 100 that indicates how fast the CHs in a given food is absorbed. GI = 100 - absorption rate of glucose. GI = 0 - absorption rate of food without CHs. Low GI value (slow CHs): small and steady increase in blood glucose level; less insulin; less glucose and fat are stored. High GI value (fast CHs): high and fast increase in blood glucose level; more insulin; hunger because of the fast decrease in blood glucose; more glucose and fat are stored.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Dietary carbohydrates are classified into monosaccharides, disaccharides, and polysaccharides:',
            items: [
              'Monosaccharides include glucose, fructose from fruits and juices, and galactose from dairy products',
              'Disaccharides include sucrose from sweets and drinks, lactose from dairy, and maltose from germinating seeds',
              'Polysaccharides include starch and cellulose from cereals, potatoes, corn, rice, and beans, and glycogen from animal tissues'
            ]
          },
          {
            type: 'list',
            items: [
              'Carbohydrates are the body\'s primary energy source, yielding 17.2 kilojoules per gram',
              'They also serve as structural components of glycoproteins and glycolipids',
              'The fiber component supports colonic motility and the intestinal microbiome'
            ]
          },
          {
            type: 'paragraph',
            content: 'Excess carbohydrate is stored as glycogen in the liver and skeletal muscle; when glycogen stores are saturated, excess glucose is converted to triglycerides. The anti-ketogenic effect of carbohydrates arises because glucose provides oxaloacetate necessary for the tricarboxylic acid cycle to fully oxidize acetyl-CoA from fat metabolism. Without adequate carbohydrate intake, fats are incompletely oxidized, leading to accumulation of ketone bodies and potentially ketoacidosis. The recommended daily carbohydrate intake is 300 grams per day.'
          }
        ],
        raw: 'Dietary carbohydrates are classified into monosaccharides, disaccharides, and polysaccharides. Monosaccharides include glucose, fructose from fruits and juices, and galactose from dairy products. Disaccharides include sucrose from sweets and drinks, lactose from dairy, and maltose from germinating seeds. Polysaccharides include starch and cellulose from cereals, potatoes, corn, rice, and beans, and glycogen from animal tissues. Carbohydrates are the body\'s primary energy source, yielding 17.2 kilojoules per gram. They also serve as structural components of glycoproteins and glycolipids, and the fiber component supports colonic motility and the intestinal microbiome. Excess carbohydrate is stored as glycogen in the liver and skeletal muscle; when glycogen stores are saturated, excess glucose is converted to triglycerides. The anti-ketogenic effect of carbohydrates arises because glucose provides oxaloacetate necessary for the tricarboxylic acid cycle to fully oxidize acetyl-CoA from fat metabolism. Without adequate carbohydrate intake, fats are incompletely oxidized, leading to accumulation of ketone bodies and potentially ketoacidosis. The recommended daily carbohydrate intake is 300 grams per day.'
      },
        audioUrl: '/Audio/Topic-069/LO-09.mp3'
    },
    {
      id: 'lo-10',
      isCritical: false,
      title: 'Dietary lipids: Describe the sources of lipids, essential fatty acids, their biological importance, their contribution to energy production of the body',
      keyPoints: [
        'Sources: animal fats (meat, fish, dairy, eggs, butter) and vegetable oils (nuts, seeds, avocados, olive, sunflower, soybean oil); recommended 50-150 g/day',
        'Main dietary lipid types: triglycerides (main energy storage), phospholipids (cell membranes), cholesterol (membranes, steroid hormones)',
        'Essential fatty acids (EFAs): cannot be synthesized by the human body; must come from diet - linoleic acid (LA, ω-6) and alpha-linolenic acid (ALA, ω-3)',
        'Biological importance of EFAs: precursors for eicosanoids (prostaglandins, thromboxanes, leukotrienes) - regulate inflammation, blood clotting, immunity; structural role in cell membranes and myelin; DHA/EPA important for brain development and cardiovascular health',
        'Lipid functions: thermoregulation (brown adipose tissue), absorption of fat-soluble vitamins (A, D, E, K), steroid hormone synthesis, lipoprotein structure',
        'Energy contribution: highest yield - 39 kJ/g; catabolized via β-oxidation → acetyl-CoA → TCA cycle → ATP; stored as triglycerides in adipose - primary long-term energy reserve'
      ],
      officialDefinitions: [
        'Fats in the diet - Physiological properties: thermoregulation (brown adipose tissue - heat production (newborns!)). Absorption of fat soluble vitamins. Steroid hormone synthesis. Cell constituents (phospholipids, myelin). Lipoproteins. Use and storage: the excess is not oxidized, but is stored as triglycerides in the adipose tissue.',
        'Fatty acid types: Saturated - should not exceed 10% of total daily calories (approx. 25 g) (U.S. Food and Drug Administration; FDA). (Harmful: trans fatty acids - artificially hydrogenated vegetable oils, fats e.g.: margarine, palm oil). Mostly of animal origin (BUT! Coconut oil). Unsaturated - many of them are essential. Mostly of plant origin: rich in essential fatty acids.',
        'Monounsaturated fatty acids (MUFAs): one double bond in their carbon chain. Omega-9, most common example is the oleic acid. Abundant in olive oil, avocado, almonds.',
        'Polyunsaturated fatty acids (PUFAs): two or more double bonds in their carbon chain. Omega-3: Alpha-linolenic acid (ALA) - grains, sea fish, plant oils and green plants; Eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) - wild and sea fish, seafood; anti-inflammatory fatty acids! Omega-6, linoleic acid (LA), arachidonic acid: abundant in vegetable oils like sunflower, corn, soybean, meats and seeds.',
        'Essential fatty acids: fatty acids that cannot be synthesized by the human body and must be obtained from the diet. ALA (Omega-3) and LA (Omega-6).',
        'Contribution of lipids to energy production: Lipids provide the highest energy yield of all macronutrients, producing 39 kJ/g (9 kcal/g). Fat metabolism occurs via β-oxidation in the mitochondria, where fatty acids are broken down into acetyl-CoA, which enters the citric acid cycle (Krebs cycle) to produce ATP. Lipids are stored in adipose tissue and used as a long-term energy reserve, especially during fasting or prolonged physical activity.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            items: [
              'Dietary lipids come from animal sources including meat, fish, dairy, eggs, and butter, and plant sources including nuts, seeds, avocados, and oils such as olive, sunflower, and soybean oil; the recommended daily intake is 50 to 150 grams per day',
              'The main dietary lipid types are triglycerides - the primary energy storage form - phospholipids for cell membranes, and cholesterol for membrane integrity and steroid hormone synthesis'
            ]
          },
          {
            type: 'paragraph',
            content: 'Essential fatty acids cannot be synthesized de novo and must be obtained from the diet. These are linoleic acid, an omega-6 fatty acid, and alpha-linolenic acid, an omega-3 fatty acid. Essential fatty acids serve as precursors for eicosanoids - prostaglandins, thromboxanes, and leukotrienes - regulating inflammation, blood clotting, and immune responses. Omega-3 fatty acids, including DHA and EPA, are particularly important for brain development and cardiovascular health.'
          },
          {
            type: 'list',
            items: [
              'Thermoregulation via brown adipose tissue',
              'Absorption of fat-soluble vitamins A, D, E, and K'
            ]
          },
          {
            type: 'paragraph',
            content: 'Lipids provide the highest energy yield at 39 kilojoules per gram and are catabolized via beta-oxidation in the mitochondria, producing acetyl-CoA that enters the TCA cycle. Adipose tissue serves as the primary long-term energy reserve.'
          }
        ],
        raw: 'Dietary lipids come from animal sources including meat, fish, dairy, eggs, and butter, and plant sources including nuts, seeds, avocados, and oils such as olive, sunflower, and soybean oil. The recommended daily intake is 50 to 150 grams per day. The main dietary lipid types are triglycerides - the primary energy storage form - phospholipids for cell membranes, and cholesterol for membrane integrity and steroid hormone synthesis. Essential fatty acids cannot be synthesized de novo and must be obtained from the diet. These are linoleic acid, an omega-6 fatty acid, and alpha-linolenic acid, an omega-3 fatty acid. Essential fatty acids serve as precursors for eicosanoids - prostaglandins, thromboxanes, and leukotrienes - regulating inflammation, blood clotting, and immune responses. Omega-3 fatty acids, including DHA and EPA, are particularly important for brain development and cardiovascular health. Additional biological roles include thermoregulation via brown adipose tissue and absorption of fat-soluble vitamins A, D, E, and K. Lipids provide the highest energy yield at 39 kilojoules per gram and are catabolized via beta-oxidation in the mitochondria, producing acetyl-CoA that enters the TCA cycle. Adipose tissue serves as the primary long-term energy reserve.'
      },
        audioUrl: '/Audio/Topic-069/LO-10.mp3'
    }
  ],
  referenceValues: [
    {
      parameter: 'Conversion: 1 Cal/kcal to Joules',
      value: '1 kcal = 4.2 kJ',
      isCritical: false
    },
    {
      parameter: 'Biological caloric value - carbohydrates',
      value: '17.2 kJ/g',
      isCritical: false
    },
    {
      parameter: 'Biological caloric value - proteins',
      value: '17.2 kJ/g',
      isCritical: false
    },
    {
      parameter: 'Biological caloric value - lipids',
      value: '39 kJ/g',
      isCritical: false
    },
    {
      parameter: 'RQ - carbohydrates',
      value: '1.0',
      isCritical: true
    },
    {
      parameter: 'RQ - proteins',
      value: '0.8',
      isCritical: true
    },
    {
      parameter: 'RQ - lipids',
      value: '0.7',
      isCritical: true
    },
    {
      parameter: 'RQ - mixed food',
      value: '0.82',
      isCritical: true
    },
    {
      parameter: 'Caloric equivalent for O₂ - carbohydrates',
      value: '21.2 kJ/L O₂',
      isCritical: true
    },
    {
      parameter: 'Caloric equivalent for O₂ - proteins',
      value: '19.2 kJ/L O₂',
      isCritical: true
    },
    {
      parameter: 'Caloric equivalent for O₂ - lipids',
      value: '19.7 kJ/L O₂',
      isCritical: true
    },
    {
      parameter: 'Caloric equivalent for O₂ - mixed food',
      value: '20.2 kJ/L O₂',
      isCritical: true
    },
    {
      parameter: 'BMR - adult male',
      value: '7100 kJ/day',
      isCritical: true
    },
    {
      parameter: 'BMR - adult female',
      value: '6300 kJ/day',
      isCritical: true
    },
    {
      parameter: 'Leisure rate - adult male',
      value: '9600 kJ/day (115 W)',
      isCritical: false
    },
    {
      parameter: 'Leisure rate - adult female',
      value: '8400 kJ/day (100 W)',
      isCritical: false
    },
    {
      parameter: 'Recommended daily allowance - proteins',
      value: '60-80 g/day',
      isCritical: false
    },
    {
      parameter: 'Recommended daily allowance - carbohydrates',
      value: '300 g/day',
      isCritical: false
    },
    {
      parameter: 'Recommended daily allowance - lipids',
      value: '50-150 g/day',
      isCritical: false
    },
    {
      parameter: 'WHO optimal protein intake',
      value: '1-1.5 g/kg body weight/day',
      isCritical: false
    }
  ]
};

export default topic69;
// end of topic69
