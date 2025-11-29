const topic27QuickReview = {
  topicId: 'topic-27',
  topicNumber: 27,
  learningObjectives: {
    'lo-1': {
      title: 'Explain the concept of partial pressure of gases',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Partial Pressure Fundamentals'
        },
        {
          type: 'paragraph',
          content: 'Partial pressure is the pressure a single gas in a mixture would exert if it alone occupied the total volume. According to Dalton\'s Law, total pressure equals the sum of all individual partial pressures.'
        },
        {
          type: 'formula',
          content: 'Pgas = Ptotal × Fgas',
          explanation: 'Partial pressure = Total pressure × Fractional concentration',
          example: 'At sea level (760 mmHg), oxygen (21% of air): PO2 = 760 × 0.21 = 160 mmHg'
        },
        {
          type: 'keypoint',
          content: 'Henry-Dalton\'s Law: Cgas = α × Pgas',
          explanation: 'Gas concentration in fluid depends on partial pressure and solubility coefficient. Net diffusion stops when partial pressures equilibrate, NOT when concentrations are equal (because gases have different solubilities).'
        },
        {
          type: 'clinical',
          content: 'Partial pressures (gas tensions) measured in mmHg or kPa are crucial for understanding gas exchange. Gases diffuse from higher to lower partial pressure until equilibrium is reached.'
        }
      ]
    },
    'lo-2': {
      title: 'Give the reference values of partial pressures for oxygen and carbon dioxide',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Partial Pressure Reference Values'
        },
        {
          type: 'table',
          headers: ['Location', 'pO2 (mmHg)', 'pCO2 (mmHg)'],
          rows: [
            ['Inspired air', '149', '0.3'],
            ['Alveolar air', '100-104', '40'],
            ['Arterial blood', '95-98', '40'],
            ['Mixed venous blood', '40', '46']
          ]
        },
        {
          type: 'keypoint',
          content: 'Perfect CO2 equilibration',
          explanation: 'Alveolar and arterial pCO2 both equal 40 mmHg, showing complete equilibration across the alveolocapillary membrane.'
        },
        {
          type: 'keypoint',
          content: 'Small O2 gradient',
          explanation: 'Oxygen drops slightly from alveolar (100-104) to arterial (95-98 mmHg) due to V/Q mismatch and right-to-left shunt.'
        },
        {
          type: 'clinical',
          content: 'Water vapor partial pressure in alveolar air is 47 mmHg. The large pO2 gradient between alveolar air (100 mmHg) and mixed venous blood (40 mmHg) drives oxygen diffusion into pulmonary capillaries.'
        }
      ]
    },
    'lo-3': {
      title: 'Factors determining diffusion between alveolar gas and capillary blood, Fick\'s law',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Seven Factors Determining Gas Diffusion'
        },
        {
          type: 'list',
          items: [
            'Partial pressure gradient (ΔP) - drives diffusion',
            'Surface area (A) - larger area increases diffusion',
            'Membrane thickness (T) - thinner improves efficiency',
            'Diffusion coefficient (d) - depends on solubility and molecular weight',
            'V/Q ratio - ventilation-perfusion matching',
            'Gas solubility - CO2 diffuses 20× faster than O2',
            'Capillary blood flow - affects equilibration speed'
          ]
        },
        {
          type: 'formula',
          content: 'V̇ = ΔP × D',
          explanation: 'Fick\'s Law for gas transport: Diffusion rate = Partial pressure difference × Diffusing capacity',
          example: 'D combines gas quality, barrier thickness, and surface area'
        },
        {
          type: 'comparison',
          leftTitle: 'Diffusion-Limited',
          leftContent: 'Transfer rate limited by membrane properties. Example: Carbon monoxide binds tightly to hemoglobin, maintaining low blood pCO. Clinical: Pulmonary fibrosis, interstitial lung disease.',
          rightTitle: 'Perfusion-Limited',
          rightContent: 'Transfer rate limited by blood flow. Example: Oxygen equilibrates quickly under normal conditions. Clinical: Exercise increases cardiac output, shortening capillary transit time.'
        }
      ]
    },
    'lo-4': {
      title: 'Define the term diffusion capacity',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Diffusion Capacity (DL)'
        },
        {
          type: 'paragraph',
          content: 'Diffusion capacity is the volume of gas diffusing through the alveolocapillary membrane per minute per unit pressure difference between alveolar gas and blood.'
        },
        {
          type: 'formula',
          content: 'DL = V̇ / ΔP',
          explanation: 'Units: ml/min/mmHg',
          example: 'D is NOT constant - increases during exercise as diffusion surface increases'
        },
        {
          type: 'keypoint',
          content: 'DLCO - Clinical Gold Standard',
          explanation: 'Diffusing capacity for carbon monoxide is commonly measured because CO binds strongly to hemoglobin and is diffusion-limited, making it a reliable indicator of alveolocapillary membrane function.'
        },
        {
          type: 'list',
          items: [
            'Surface area (A) - increases with recruitment',
            'Membrane thickness (T) - increases in fibrosis/edema',
            'Partial pressure gradient - depends on alveolar ventilation',
            'Properties of the gas - solubility and molecular weight'
          ]
        }
      ]
    },
    'lo-5': {
      title: 'Ventilation equations and factors affecting alveolar pO2 and pCO2',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Alveolar Ventilation Equations'
        },
        {
          type: 'formula',
          content: 'PAO2 = PiO2 - (VO2/VA) × 863',
          explanation: 'Alveolar O2 partial pressure equation',
          example: '863 converts STPD to BTPS conditions'
        },
        {
          type: 'formula',
          content: 'PACO2 = (VCO2/VA) × 863',
          explanation: 'Alveolar CO2 partial pressure equation'
        },
        {
          type: 'comparison',
          leftTitle: 'Factors Affecting PAO2',
          leftContent: '↑ PiO2 (inspired O2) → ↑ PAO2\n↑ VO2 (metabolism) → ↓ PAO2\n↑ VA (ventilation) → ↑ PAO2',
          rightTitle: 'Factors Affecting PACO2',
          rightContent: '↑ VCO2 (production) → ↑ PACO2\n↑ VA (ventilation) → ↓ PACO2'
        },
        {
          type: 'comparison',
          leftTitle: 'Hypoventilation',
          leftContent: 'Decreased alveolar ventilation not meeting metabolic demand. Effects: ↓ PAO2 (hypoxemia), ↑ PACO2 (hypercapnia), respiratory acidosis. Symptoms: drowsiness, fatigue, confusion.',
          rightTitle: 'Hyperventilation',
          rightContent: 'Increased ventilation beyond metabolic needs. Effects: ↑ PAO2, ↓ PACO2 (hypocapnia), respiratory alkalosis. Symptoms: lightheadedness, tingling, muscle cramps.'
        }
      ]
    },
    'lo-6': {
      title: 'Dynamics of oxygen transport from alveolus to capillary blood',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Four Steps of Oxygen Transport'
        },
        {
          type: 'steps',
          items: [
            'Alveolar ventilation: Fresh air raises PAO2 to ~100 mmHg. Deoxygenated blood enters with PvO2 ~40 mmHg. Strong 60 mmHg gradient drives diffusion.',
            'Diffusion across membrane: O2 rapidly crosses extremely thin barrier (~0.5 μm) with large surface area (~70 m²). Governed by Fick\'s law.',
            'Hemoglobin uptake: O2 binds to Hb (up to 4 O2 per Hb molecule). This reduces free dissolved O2, maintaining the diffusion gradient.',
            'Equilibration and transit: RBCs spend ~0.75 seconds in pulmonary capillaries. O2 equilibrates within first 0.25 seconds.'
          ]
        },
        {
          type: 'keypoint',
          content: 'Capillary Reserve = 0.5 seconds',
          explanation: 'The remaining time after equilibration where RBCs remain in capillaries with no further net gas diffusion. This ensures complete oxygenation during exercise, impaired diffusion, or high altitude.'
        },
        {
          type: 'clinical',
          content: 'In healthy lungs, gas transport is always perfusion-limited (limited by cardiovascular function). Lung diseases affecting diffusion cause no symptoms at rest initially - problems arise during exercise when capillary transit time shortens.'
        }
      ]
    },
    'lo-7': {
      title: 'Normal V/Q quotient and vertical distribution of ventilation and perfusion',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Ventilation/Perfusion (V/Q) Quotient'
        },
        {
          type: 'keypoint',
          content: 'Normal total V/Q = 0.9-1.1',
          explanation: 'Represents the ratio of alveolar ventilation to pulmonary blood flow in healthy lungs'
        },
        {
          type: 'table',
          headers: ['Region', 'V/Q Ratio', 'Ventilation', 'Perfusion', 'Gas Exchange'],
          rows: [
            ['Apex', '2-3 (high)', 'Lower', 'Lowest', 'Wasted ventilation'],
            ['Middle', '~1 (ideal)', 'Moderate', 'Moderate', 'Optimal'],
            ['Base', '0.7 (low)', 'Highest', 'Highest', 'Most effective']
          ]
        },
        {
          type: 'paragraph',
          content: 'Gravity affects both ventilation and perfusion. At the apex, alveoli are already expanded making them less compliant with lower ventilation, and perfusion is decreased by gravity. At the base, compliant alveoli ventilate efficiently, and gravity facilitates blood flow.'
        },
        {
          type: 'comparison',
          leftTitle: 'Apex (V/Q = 2-3)',
          leftContent: 'Relatively under-perfused. High V/Q = over-ventilated compared to blood flow. Results in wasted ventilation with less efficient gas exchange.',
          rightTitle: 'Base (V/Q = 0.7)',
          rightContent: 'Relatively under-ventilated. Low V/Q = more perfusion than ventilation. Most effective gas exchange due to highest blood flow.'
        },
        {
          type: 'clinical',
          content: 'This V/Q mismatch causes arterial pO2 to fall from the ideal alveolar value of 104 mmHg to 95-98 mmHg. The unique upright posture of humans creates regional differences - four-legged animals do not have this problem. Lung diseases greatly increase V/Q mismatch.'
        }
      ]
    }
  }
};

export default topic27QuickReview;
