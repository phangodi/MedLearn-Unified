const topic51QuickReview = {
  topicId: 'topic-51',
  topicNumber: 51,
  learningObjectives: {
    'lo-1': {
      title: 'Explain the relative importance of systemic neural and local control mechanisms in the skeletal muscle circulation.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Control Shifts Between Rest and Exercise',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Skeletal muscle circulation is regulated by both systemic neural control and local control mechanisms. Their relative importance shifts dramatically between rest and exercise states.',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'At Rest',
            items: [
              'Neural control predominates',
              'Sympathetic vasoconstriction dominates',
              'Norepinephrine → α₁ receptors',
              'Maintains vascular tone and BP',
              'Skeletal muscle: 20-25% of cardiac output'
            ]
          },
          right: {
            title: 'During Exercise',
            items: [
              'Local control predominates',
              'Metabolic vasodilation overrides sympathetic',
              'Metabolites: adenosine, K⁺, H⁺, lactate, CO₂',
              'Functional sympatholysis occurs',
              'Skeletal muscle: 80-90% of cardiac output'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Functional sympatholysis: Local metabolites override sympathetic vasoconstriction in exercising muscles, ensuring adequate perfusion despite global sympathetic activation.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Additional local control mechanisms:',
          items: [
            'Myogenic response: arteriolar smooth muscle responds to pressure changes (increased pressure → vasoconstriction)',
            'Flow-mediated vasodilation: shear stress → endothelial NO release → vasodilation',
            'Active hyperemia: blood flow increases proportionally to metabolic activity'
          ],
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Describe the cardiovascular consequences of exercise on peripheral resistance, cardiac output, A-V oxygen difference, and arterial pressure. Give the contribution of skeletal muscle blood flow to the cardiac output at rest and during exercise.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Cardiovascular Changes During Exercise',
          critical: false
        },
        {
          type: 'table',
          headers: ['Parameter', 'At Rest', 'During Exercise', 'Mechanism'],
          rows: [
            ['Total Peripheral Resistance', 'Normal', 'Decreased', 'Vasodilation in active muscles, vasoconstriction in non-essential tissues'],
            ['Cardiac Output', '5-6 L/min', '20-25 L/min (untrained)\n35-40 L/min (athletes)', '↑HR (parasympathetic withdrawal + sympathetic activation)\n↑SV (venous return + contractility)'],
            ['A-V O₂ Difference', '5 mL O₂/dL', '15-17 mL O₂/dL', 'Capillary recruitment, ↑mitochondrial activity, Bohr effect'],
            ['Systolic BP', '120 mmHg', '180-200 mmHg', 'Increased cardiac output'],
            ['Diastolic BP', '80 mmHg', 'Unchanged or ↓', 'Reduced peripheral resistance']
          ]
        },
        {
          type: 'keypoint',
          text: 'Skeletal muscle blood flow: 20-25% of cardiac output at rest (~1-1.5 L/min) increases to 80-90% during maximal exercise (~20-30 L/min).',
          critical: true
        },
        {
          type: 'formula',
          formula: 'Maximal HR ≈ 220 - age',
          explanation: 'Approximate formula for estimating maximum heart rate during exercise',
          critical: false
        },
        {
          type: 'list',
          intro: 'Mechanisms of enhanced oxygen extraction (increased A-V difference):',
          items: [
            'Increased capillary recruitment in active muscles',
            'Enhanced mitochondrial oxygen consumption',
            'Bohr effect: decreased pH, increased CO₂ and temperature shift hemoglobin saturation curve right'
          ],
          critical: false
        }
      ]
    },
    'lo-3': {
      title: 'Describe the redistribution of cardiac output during exercise to the CNS, coronary, splanchnic, cutaneous, and skeletal muscle vascular beds during sustained exercise (distance running).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Blood Flow Redistribution During Exercise',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'During sustained exercise, cardiac output is redistributed to prioritize active muscles while maintaining vital organ perfusion through selective vasodilation and vasoconstriction.',
          critical: false
        },
        {
          type: 'table',
          headers: ['Vascular Bed', 'Direction', 'Percentage/Flow', 'Key Mechanism'],
          rows: [
            ['Skeletal Muscle', '↑↑↑', '80-90% CO (20-30 L/min)', 'Local metabolic vasodilation, functional sympatholysis'],
            ['Cerebral (CNS)', '→ or ↑', '13-15% CO (~750 mL/min)', 'Autoregulation, hypercapnia-induced vasodilation'],
            ['Coronary', '↑↑', '3-4× baseline', 'Adenosine release, metabolic demand'],
            ['Splanchnic', '↓↓', '3-5% CO (from 25%)', 'Sympathetic vasoconstriction'],
            ['Cutaneous', '↓ then ↑', 'Variable', 'Initial vasoconstriction, then thermoregulation']
          ]
        },
        {
          type: 'list',
          intro: 'Vascular bed responses explained:',
          items: [
            'Skeletal muscle: Massive increase driven by adenosine, K⁺, CO₂, lactate, H⁺, and hypoxia',
            'CNS: Autoregulation maintains constant perfusion across wide BP range; CO₂ enhances vasodilation',
            'Coronary: Flow increases proportionally to myocardial O₂ demand; adenosine is key vasodilator',
            'Splanchnic: Reduced flow prioritizes active muscles over digestion; may cause GI discomfort',
            'Cutaneous: Initially decreases (sympathetic), later increases for heat dissipation via sweat production'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Splanchnic vasoconstriction during prolonged exercise can cause temporary ischemia leading to gastrointestinal discomfort ("runner\'s stomach").'
        }
      ]
    },
    'lo-4': {
      title: 'Contrast the effect of phasic and sustained skeletal muscle contraction on extravascular compression of blood vessels and on central venous pressure. Explain the importance of the muscle pump.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Phasic vs Sustained Muscle Contractions',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Phasic (Intermittent)',
            items: [
              'Examples: walking, running',
              'Pulsatile extravascular compression',
              'Vessels compressed → blood to heart',
              'Veins refill during relaxation',
              'CVP transiently increases',
              'Promotes effective venous return',
              'Enhances preload and cardiac output'
            ]
          },
          right: {
            title: 'Sustained (Isometric)',
            items: [
              'Examples: holding heavy objects',
              'Prolonged extravascular compression',
              'Continuous compression of veins/arteries',
              'Reduced blood flow and venous return',
              'CVP decreases over time',
              'Impedes venous return',
              'Reduced preload and CO if prolonged',
              'Potential tissue ischemia'
            ]
          }
        },
        {
          type: 'header',
          text: 'The Muscle Pump',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Muscle pump: Rhythmic skeletal muscle contraction propelling venous blood toward the heart, critical for maintaining circulation during physical activity.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Importance of the muscle pump:',
          items: [
            'Promotes venous return: Actively pumps blood back to heart, counteracts gravity in upright positions',
            'Prevents venous stasis: Reduces risk of deep vein thrombosis (DVT) by preventing prolonged blood pooling',
            'Enhances cardiac output: Increased venous return → ↑CVP → ↑preload → ↑SV and CO (Frank-Starling mechanism)',
            'Maintains perfusion: Ensures effective venous return during rhythmic exercise'
          ],
          critical: false
        }
      ]
    },
    'lo-5': {
      title: 'Predict the changes in cardiac output and arterial pressure during the initial and the sustained phases of the Valsalva maneuver.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Valsalva Maneuver: Four Phases',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Valsalva maneuver: Forced expiration against closed glottis increasing intrathoracic pressure to ~40 mmHg or more, used clinically to assess cardiovascular system.',
          critical: false
        },
        {
          type: 'steps',
          intro: 'The four phases of the Valsalva maneuver:',
          items: [
            'Phase I (Initial): ↑Intrathoracic pressure compresses thoracic aorta → transient ↑arterial pressure (mechanical); CO unchanged; baroreceptors trigger vagal activation → transient bradycardia',
            'Phase II (Sustained Strain): Sustained ↑intrathoracic pressure compresses veins → ↓venous return → ↓preload → ↓SV and CO (Frank-Starling); arterial pressure falls despite compensatory ↑SVR; baroreceptors trigger ↑sympathetic outflow (vasoconstriction, tachycardia, ↑contractility)',
            'Phase III (Release): Glottis opens, intrathoracic pressure normalizes; arterial pressure transiently drops (aortic compression released, venous return not yet restored); CO begins recovery; brief sympathetic activation and tachycardia',
            'Phase IV (Recovery/Overshoot): Venous return fully restored → ↑preload and SV; CO increases (Frank-Starling); arterial pressure rises above baseline (↑SV + persistent Phase II vasoconstriction); overshoot corrected by vagal stimulation and ↓sympathetic outflow → HR slows, vascular resistance decreases'
          ],
          critical: false
        },
        {
          type: 'table',
          headers: ['Phase', 'Arterial Pressure', 'Cardiac Output', 'Key Mechanism'],
          rows: [
            ['I (Initial)', 'Transient ↑', 'Unchanged', 'Mechanical aortic compression'],
            ['II (Strain)', 'Falls', 'Decreases', '↓Venous return, compensatory sympathetic activation'],
            ['III (Release)', 'Transient ↓', 'Begins recovery', 'Pressure normalization, venous return improving'],
            ['IV (Overshoot)', 'Above baseline', 'Increases', 'Restored preload + persistent vasoconstriction']
          ]
        },
        {
          type: 'clinical',
          text: 'Valsalva maneuver is used clinically to assess autonomic function and cardiovascular reflexes. Abnormal responses may indicate autonomic neuropathy or heart failure.'
        }
      ]
    }
  }
};

export default topic51QuickReview;
