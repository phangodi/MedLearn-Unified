const topic28QuickReview = {
  topicId: 'topic-28',
  topicNumber: 28,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the chemical structure of the hemoglobin molecule. Enlist and define special/pathological hemoglobin forms (HbF, methemoglobin, carboxy-hemoglobin) and give their functional characteristics.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Hemoglobin Structure'
        },
        {
          type: 'keypoint',
          content: 'Tetrameric protein with 4 globin chains (2α, 2β in HbA) and 4 heme groups, each heme contains Fe²⁺ that reversibly binds one O₂ molecule'
        },
        {
          type: 'paragraph',
          content: 'Cooperative binding: first O₂ binding increases affinity for subsequent O₂. Two conformational states: T state (deoxygenated, low affinity) and R state (oxygenated, high affinity).'
        },
        {
          type: 'comparison',
          title: 'Special Hemoglobin Forms',
          items: [
            {
              name: 'HbF (Fetal)',
              features: [
                'Structure: α₂γ₂',
                'Higher O₂ affinity than HbA (reduced 2,3-DPG interaction)',
                'Facilitates O₂ extraction from maternal blood',
                'Replaced by HbA within 6-12 months after birth'
              ]
            },
            {
              name: 'Methemoglobin',
              features: [
                'Fe³⁺ state - cannot bind oxygen',
                'Reduced by cytochrome b5 reductase',
                'Excess causes methemoglobinemia and cyanosis',
                'Pathological when >50 g/L'
              ]
            },
            {
              name: 'Carboxyhemoglobin',
              features: [
                'CO binds with 200-250× higher affinity than O₂',
                'Shifts dissociation curve LEFT',
                'Severe tissue hypoxia despite normal pO₂',
                'Treatment: 100% O₂ or hyperbaric oxygen'
              ]
            }
          ]
        }
      ]
    },
    'lo-2': {
      title: 'Draw the hemoglobin oxygen-dissociation curve. Explain the connections between pO2, hemoglobin-saturation. Define P50 and give its normal value.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Oxyhemoglobin Dissociation Curve'
        },
        {
          type: 'keypoint',
          content: 'Sigmoid (S-shaped) curve: X-axis = pO₂ (mmHg), Y-axis = Hb saturation (%)'
        },
        {
          type: 'paragraph',
          content: 'Plateau phase: Above 60 mmHg pO₂, Hb remains nearly fully saturated. Steep portion (10-40 mmHg): Small pO₂ changes cause large saturation changes, facilitating O₂ unloading in tissues.'
        },
        {
          type: 'table',
          headers: ['Blood Type', 'pO₂ (mmHg)', 'Saturation (%)'],
          rows: [
            ['Arterial', '100', '97-98'],
            ['Venous', '40', '75']
          ]
        },
        {
          type: 'keypoint',
          content: 'P50 = pO₂ at which Hb is 50% saturated. Normal P50 = 26 mmHg. Indicates oxygen affinity: lower P50 = higher affinity'
        }
      ]
    },
    'lo-3': {
      title: 'Compare the contribution of hemoglobin-bound and physically dissolved O2 to blood oxygen content.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Oxygen Transport Mechanisms'
        },
        {
          type: 'comparison',
          title: 'Hb-bound vs Dissolved O₂',
          items: [
            {
              name: 'Hemoglobin-bound O₂',
              features: [
                'Primary carrier: 97-98% of total O₂ content',
                'Capacity: 1.34 mL O₂/g Hb (Hüfner number)',
                'Arterial content: ~197 mL/L'
              ]
            },
            {
              name: 'Physically dissolved O₂',
              features: [
                'Only 2-3% of total O₂ content',
                'Solubility: 0.03 mL O₂/L per mmHg',
                'At pO₂ 100 mmHg: 0.3 mL O₂/100 mL blood',
                'Arterial content: ~3 mL/L'
              ]
            }
          ]
        },
        {
          type: 'clinical',
          content: 'Despite small contribution, dissolved O₂ is crucial for establishing pO₂ gradient for tissue diffusion. Total arterial O₂ content ≈ 200 mL/L (197 mL/L bound + 3 mL/L dissolved).'
        }
      ]
    },
    'lo-4': {
      title: 'Give the oxygen binding capacity of hemoglobin (Hüfner-number).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Hüfner Number'
        },
        {
          type: 'keypoint',
          content: 'Hüfner number = 1.34 mL O₂ per gram of hemoglobin when fully saturated'
        },
        {
          type: 'paragraph',
          content: 'Derived from stoichiometry: each Hb molecule binds 4 O₂ molecules (one per heme group). Essential for calculating total oxygen content and oxygen-carrying capacity.'
        },
        {
          type: 'formula',
          name: 'Oxygen Capacity Calculation',
          formula: 'O₂ capacity = 1.34 mL O₂/g Hb × Hb concentration',
          example: 'With 15 g Hb/100 mL blood: 1.34 × 15 ≈ 20.1 mL O₂/100 mL blood when fully saturated'
        }
      ]
    },
    'lo-5': {
      title: 'Describe how the oxyhemoglobin dissociation curve is affected by changes in pCO2 (Bohr-effect), plasma pH and red blood cell 2,3-DPG concentration. Explain the functional significance of these changes.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Oxyhemoglobin Curve Shifts'
        },
        {
          type: 'keypoint',
          content: 'RIGHT SHIFT (↑ P50, ↓ O₂ affinity) → promotes O₂ release to tissues. LEFT SHIFT (↓ P50, ↑ O₂ affinity) → promotes O₂ loading in lungs'
        },
        {
          type: 'list',
          intro: 'RIGHT SHIFT caused by:',
          items: [
            '↑ pCO₂ (Bohr effect)',
            '↓ pH (acidosis)',
            '↑ 2,3-DPG',
            '↑ Temperature'
          ]
        },
        {
          type: 'paragraph',
          content: 'Bohr effect mechanism: CO₂ and H⁺ bind to globin chains, causing conformational change that weakens O₂-Hb bond. 2,3-DPG stabilizes deoxygenated T state.'
        },
        {
          type: 'clinical',
          content: 'Functional significance: RIGHT shifts promote O₂ release in metabolically active tissues (high CO₂, low pH, high temp, high 2,3-DPG). LEFT shifts promote O₂ loading in lungs. Optimizes O₂ delivery based on metabolic demand.'
        },
        {
          type: 'keypoint',
          content: 'Mnemonic "CADET face RIGHT": CO₂, Acidosis, 2,3-DPG, Exercise, Temperature increases → right shift'
        }
      ]
    },
    'lo-6': {
      title: 'Give 5 causes of hypoxia. Types of hypoxia: 1. hypoxic hypoxia (low inspired air pO2, alveolar hypoventilation, disturbed diffusion across the alveolocapillary membrane), 2. transport hypoxia (anemia, methemoglobinemia, carbon-monoxide poisoning), 3. ischemic hypoxia (low cardiac output, vascular occlusion), 4. histotoxic hypoxia (inhibition of mitochondrial respiration).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Hypoxia Classification'
        },
        {
          type: 'list',
          intro: 'Five Example Causes of Hypoxia:',
          items: [
            'High altitude (hypoxic)',
            'Anemia (transport)',
            'Carbon monoxide poisoning (transport)',
            'Heart failure (ischemic)',
            'Cyanide poisoning (histotoxic)'
          ]
        },
        {
          type: 'comparison',
          title: 'Four Types of Hypoxia',
          items: [
            {
              name: 'Hypoxic Hypoxia',
              features: [
                'Arterial pO₂ DECREASED',
                'Causes: Low inspired O₂ (altitude), alveolar hypoventilation, impaired diffusion (edema, fibrosis), V/Q mismatch'
              ]
            },
            {
              name: 'Transport Hypoxia (Anemic)',
              features: [
                'Arterial pO₂ NORMAL',
                'Reduced O₂ content',
                'Causes: Anemia (↓ Hb), methemoglobinemia (Fe³⁺), CO poisoning'
              ]
            },
            {
              name: 'Ischemic Hypoxia (Stagnation)',
              features: [
                'Reduced blood flow',
                'Causes: Low cardiac output (heart failure), vascular occlusion (thrombosis, embolism)'
              ]
            },
            {
              name: 'Histotoxic Hypoxia',
              features: [
                'Normal O₂ delivery',
                'Impaired cellular utilization',
                'Cause: Mitochondrial toxins (cyanide inhibits electron transport chain)'
              ]
            }
          ]
        }
      ]
    },
    'lo-7': {
      title: 'Define the term cyanosis (deoxyhemoglobin > 50 g/l).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Cyanosis'
        },
        {
          type: 'keypoint',
          content: 'Cyanosis = bluish discoloration of skin and mucous membranes due to increased deoxygenated hemoglobin'
        },
        {
          type: 'paragraph',
          content: 'Threshold: Occurs when deoxyhemoglobin exceeds 50 g/L (5 g/dL) in capillary blood. Indicates inadequate oxygenation and typically reflects low arterial oxygen saturation.'
        },
        {
          type: 'clinical',
          content: 'Limitation: May NOT be observed in severe anemia (insufficient total Hb for 5 g to be deoxygenated). Conversely, polycythemia patients frequently develop cyanosis due to abundant available Hb.'
        }
      ]
    },
    'lo-8': {
      title: 'Explain how the oxyhemoglobin dissociation curve, arterial pO2 and oxygen saturation are affected by anemia and carbon-monoxide poisoning, respectively.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Anemia vs CO Poisoning Effects'
        },
        {
          type: 'comparison',
          title: 'Effects on Oxygen Transport',
          items: [
            {
              name: 'Anemia',
              features: [
                'Arterial pO₂: NORMAL',
                'O₂ saturation: NORMAL',
                'Dissociation curve: UNCHANGED position/shape',
                'Total O₂ content: REDUCED (fewer Hb molecules)',
                'Result: Tissue hypoxia despite normal pO₂ and saturation'
              ]
            },
            {
              name: 'CO Poisoning',
              features: [
                'Arterial pO₂: NORMAL',
                'O₂ saturation: DECREASED (CO displaces O₂)',
                'Dissociation curve: LEFT SHIFT (↑ O₂ affinity)',
                'CO binds Hb with 200-250× higher affinity',
                'Result: Severe hypoxia - fewer binding sites + impaired O₂ release'
              ]
            }
          ]
        },
        {
          type: 'clinical',
          content: 'CO poisoning is particularly dangerous because normal pO₂ masks severe tissue hypoxia. LEFT shift impairs oxygen unloading to tissues even from remaining oxyhemoglobin.'
        }
      ]
    }
  }
};

export default topic28QuickReview;
