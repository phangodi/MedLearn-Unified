const topic31QuickReview = {
  topicId: 'topic-31',
  topicNumber: 31,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the anatomical locations of chemoreceptors monitoring the blood pO2, pCO2, and pH levels, explain their respective importance for detecting the changes in blood gases.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Peripheral Chemoreceptors'
        },
        {
          type: 'keypoint',
          content: 'Carotid bodies: Located at bifurcation of common carotid arteries; detect pO2, pCO2, and pH; innervated by CN IX (glossopharyngeal nerve)'
        },
        {
          type: 'keypoint',
          content: 'Aortic bodies: Located above and below aortic arch; detect pO2 ONLY (not pH); innervated by CN X (vagus nerve)'
        },
        {
          type: 'header',
          content: 'Central Chemoreceptors'
        },
        {
          type: 'keypoint',
          content: 'Located on ventral surface of medulla near exit of CN IX and CN X, close to dorsal respiratory group (DRG)'
        },
        {
          type: 'header',
          content: 'Importance for Blood Gas Detection'
        },
        {
          type: 'comparison',
          rows: [
            {
              parameter: 'pO2 Detection',
              value1: 'Peripheral chemoreceptors',
              value2: 'Strong driver when pO2 < 60 mmHg (hypoxemia)'
            },
            {
              parameter: 'pCO2 Detection',
              value1: 'Central (70%)',
              value2: 'Detect indirectly via CSF pH changes'
            },
            {
              parameter: '',
              value1: 'Peripheral (30%)',
              value2: 'Detect directly in blood'
            },
            {
              parameter: 'pH Detection',
              value1: 'Carotid bodies only',
              value2: 'Metabolic pH changes (not CO2-related)'
            }
          ]
        }
      ]
    },
    'lo-2': {
      title: 'Describe the structure and function of peripheral chemoreceptors.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Cellular Structure'
        },
        {
          type: 'list',
          items: [
            'Type I cells (glomus cells): Chemosensitive elements containing dopamine vesicles and O2-sensitive K+ channels',
            'Type II cells (sustentacular cells): Provide structural support'
          ]
        },
        {
          type: 'header',
          content: 'Signal Transduction Pathway'
        },
        {
          type: 'steps',
          items: [
            'Stimulus (hypoxia < 60 mmHg, increased H+, or increased pCO2) inhibits K+ channels',
            'K+ channel inhibition → K+ accumulates → cell depolarization',
            'Depolarization opens voltage-gated Ca2+ channels',
            'Ca2+ influx triggers dopamine vesicle fusion and release',
            'Dopamine activates afferent nerve terminals (CN IX or CN X)',
            'Signal transmitted to DRG → increased ventilation'
          ]
        },
        {
          type: 'keypoint',
          content: 'Metabolic acid detection: Carotid bodies respond to ketone bodies (starvation, diabetes), lactic acid, and bicarbonate changes, triggering Kussmaul breathing'
        }
      ]
    },
    'lo-3': {
      title: 'Describe the function of central chemoreceptors.',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          content: 'Location: Ventral surface of medulla in close proximity to cerebrospinal fluid (CSF)'
        },
        {
          type: 'keypoint',
          content: 'Primary stimulus: CSF pH changes (decreased pH → hyperventilation; increased pH → hypoventilation)'
        },
        {
          type: 'header',
          content: 'Indirect CO2 Detection Mechanism'
        },
        {
          type: 'steps',
          items: [
            'CO2 freely crosses blood-brain barrier (H+ and HCO3- cannot cross)',
            'Blood CO2 → Brain extracellular fluid CO2 → CSF CO2',
            'In CSF: CO2 + H2O → H2CO3 → H+ + HCO3-',
            'Increased H+ (decreased pH) detected by central chemoreceptors',
            'Signal to DRG → VRG → increased phrenic/intercostal nerve activity',
            'Increased ventilation → more CO2 expired → pCO2 normalized'
          ]
        },
        {
          type: 'clinical',
          content: 'Most important system for minute-to-minute breathing control. Exquisitely sensitive: 2-5 mmHg increase in pCO2 causes significant ventilation increase.'
        }
      ]
    },
    'lo-4': {
      title: 'Explain how alveolar ventilation is changed by changes in pO2, pCO2, or by combined changes. When does CO2 narcosis develop?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'pCO2 Changes (Primary Driver)'
        },
        {
          type: 'keypoint',
          content: 'Increased pCO2 (hypercapnia): Central chemoreceptors detect H+ → hyperventilation → CO2 expelled → normalized pCO2'
        },
        {
          type: 'keypoint',
          content: 'Decreased pCO2 (hypocapnia): Hypoventilation allows CO2 accumulation, preventing alkalosis'
        },
        {
          type: 'keypoint',
          content: 'Sensitivity: Linear relationship; even 2-5 mmHg increase causes significant ventilation increase'
        },
        {
          type: 'header',
          content: 'pO2 Changes'
        },
        {
          type: 'keypoint',
          content: 'Decreased pO2 (hypoxemia): Only becomes strong driver when pO2 < 60 mmHg (not linear relationship)'
        },
        {
          type: 'header',
          content: 'Combined Changes'
        },
        {
          type: 'comparison',
          rows: [
            {
              parameter: 'Low pO2 + High pCO2',
              value1: 'Synergistic effect',
              value2: 'Strongest ventilatory response'
            },
            {
              parameter: 'Low pO2 + Low pCO2',
              value1: 'Blunted response',
              value2: 'Hypoventilatory effect of low pCO2 dominates'
            }
          ]
        },
        {
          type: 'clinical',
          content: 'CO2 Narcosis: Develops when pCO2 > 70-80 mmHg. CO2 crosses blood-brain barrier → CNS depression → headache, confusion, drowsiness, lethargy, potentially coma. Common in COPD with impaired ventilation.'
        }
      ]
    },
    'lo-5': {
      title: 'Describe the respiratory drive following the adaptation of central chemoreceptors. Explain the consequence if oxygen is given to this patient.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Central Chemoreceptor Adaptation in COPD'
        },
        {
          type: 'steps',
          items: [
            'Normal: Breathing driven by central chemoreceptors responding to elevated CO2',
            'Chronic hypercapnia: Central chemoreceptors adapt (become less sensitive)',
            'Shift to hypoxic drive: Body relies on peripheral chemoreceptors responding to low O2'
          ]
        },
        {
          type: 'clinical',
          content: 'In chronic CO2 retainers (COPD, sleeping pill poisoning), the driving force for respiration becomes O2 receptors, not CO2.'
        },
        {
          type: 'header',
          content: 'Consequence of Supplemental Oxygen'
        },
        {
          type: 'steps',
          items: [
            'High O2 administered → PaO2 rises',
            'Peripheral chemoreceptor activity decreases',
            'Reduced respiratory drive → hypoventilation',
            'Further CO2 retention (worsening hypercapnia)',
            'Respiratory acidosis develops',
            'Severe cases: Loss of consciousness or respiratory arrest'
          ]
        },
        {
          type: 'keypoint',
          content: 'Clinical management: Oxygen therapy must be carefully controlled (low-flow) in chronic CO2 retainers to maintain adequate oxygenation while preserving hypoxic respiratory drive'
        }
      ]
    },
    'lo-6': {
      title: 'Describe the changes in alveolar ventilation 1. immediately after traveling to high elevation, 2. after 2 weeks of acclimation at this high elevation, and 3. immediately after returning to sea level.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: '1. Immediate High Altitude Response'
        },
        {
          type: 'keypoint',
          content: 'Lower atmospheric pressure → decreased alveolar pO2 → peripheral chemoreceptors stimulated → hyperventilation'
        },
        {
          type: 'keypoint',
          content: 'Effects: Improved O2 uptake BUT more CO2 expelled → decreased PaCO2 → respiratory alkalosis'
        },
        {
          type: 'header',
          content: '2. After 2 Weeks Acclimation'
        },
        {
          type: 'list',
          items: [
            'Continued hyperventilation with compensatory mechanisms',
            'Renal compensation: Increased HCO3- excretion normalizes blood pH',
            'Erythropoiesis: Increased RBC production (via EPO) enhances O2-carrying capacity',
            'Increased 2,3-BPG: Right shift of oxyhemoglobin curve → facilitates O2 release to tissues',
            'Peripheral chemoreceptors become more sensitive to low O2',
            'Ventilation drive maintained despite pH normalization'
          ]
        },
        {
          type: 'header',
          content: '3. Immediate Return to Sea Level'
        },
        {
          type: 'keypoint',
          content: 'Increased atmospheric pressure → higher pO2 → reduced peripheral chemoreceptor stimulation → decreased ventilation'
        },
        {
          type: 'keypoint',
          content: 'Readjustment: Ventilation returns to baseline; temporary mild hyperoxia; PaCO2 may temporarily increase until chemoreceptors adjust'
        }
      ]
    },
    'lo-7': {
      title: 'Describe the importance of feed-forward control of ventilation during physical exercise, and its effect on arterial pCO2, pO2, and pH values.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Feed-Forward Control Mechanism'
        },
        {
          type: 'keypoint',
          content: 'Anticipatory mechanism: Increases ventilation BEFORE blood gas changes occur (unlike feedback control which responds AFTER changes)'
        },
        {
          type: 'keypoint',
          content: 'Signals from motor cortex and proprioceptors (tendons, muscle spindles, Golgi tendon organs, joints) trigger respiratory centers at exercise onset'
        },
        {
          type: 'header',
          content: 'Importance'
        },
        {
          type: 'list',
          items: [
            'Rapid adjustment matches ventilation to metabolic demand',
            'Prevents significant blood gas changes',
            'Maintains homeostasis by preventing hypoxia and hypercapnia',
            'Prepares respiratory system for increased O2 demand and CO2 production'
          ]
        },
        {
          type: 'header',
          content: 'Effects on Blood Gases'
        },
        {
          type: 'table',
          headers: ['Parameter', 'Steady-State Exercise', 'Intense Exercise'],
          rows: [
            ['pCO2', 'Maintained or slightly reduced', 'May slightly decrease (hyperventilation)'],
            ['pO2', 'Stable despite ↑ muscle O2 consumption', 'Stable (adequate O2 delivery ensured)'],
            ['pH', 'Stable', 'Slight decrease (lactate → metabolic acidosis, compensated by ↑ CO2 removal)']
          ]
        },
        {
          type: 'keypoint',
          content: 'Pathway: Proprioceptors → dorsal root ganglion → medial lemnisci → DRG → VRG → phrenic/intercostal nerves → increased respiration rate and depth'
        }
      ]
    }
  }
};

export default topic31QuickReview;
