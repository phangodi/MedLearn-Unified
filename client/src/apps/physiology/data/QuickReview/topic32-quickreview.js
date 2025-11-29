const topic32QuickReview = {
  topicId: 'topic-32',
  topicNumber: 32,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the function of the nasal turbines. Characterize the sneezing and the coughing reflex.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Nasal Turbinates (Conchae)'
        },
        {
          type: 'list',
          intro: 'Four essential functions of nasal turbinates:',
          items: [
            'Air filtration - Mucus and cilia trap dust, allergens, pathogens',
            'Air humidification - Moistens inspired air to protect lower airways',
            'Air warming - Rich blood supply warms air to near body temperature',
            'Airflow regulation - Curved shape creates turbulence for better air conditioning'
          ]
        },
        {
          type: 'comparison',
          intro: 'Protective airway reflexes:',
          items: [
            {
              label: 'Sneezing Reflex',
              content: 'Clears upper airways (nasal cavity). Triggered by nasal mucosa irritation. Pathway: Trigeminal nerve (CN V) → medulla sneeze center → deep inhalation → glottis closure → explosive expulsion through nose/mouth at ~100 mph'
            },
            {
              label: 'Coughing Reflex',
              content: 'Clears lower airways (larynx, trachea, bronchi). Triggered by respiratory epithelium irritation. Pathway: Vagus nerve (CN X) → medulla cough center → deep breath → glottis closure → expiratory muscle contraction → sudden glottis opening → explosive exhalation'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Both reflexes are protective mechanisms that expel irritants from different regions of the respiratory tract'
        }
      ]
    },
    'lo-2': {
      title: 'Define the term mucociliary clearance.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Mucociliary Clearance Definition'
        },
        {
          type: 'keypoint',
          content: 'Mucociliary clearance is the essential defense mechanism of the respiratory tract involving coordinated mucus production and ciliary movement to remove inhaled particles, pathogens, and debris from the airways',
          isCritical: true
        },
        {
          type: 'steps',
          intro: 'Mechanism of mucociliary clearance:',
          items: [
            'Mucus layer produced by goblet cells and submucosal glands traps particles and microorganisms',
            'Cilia (hair-like projections) on epithelial cells beat at 10 Hz in coordinated wave-like manner',
            'Mucus with trapped particles moves upward toward pharynx at ~1 mm/min',
            'Trapped material reaches throat where it can be swallowed or expelled'
          ]
        },
        {
          type: 'table',
          intro: 'Fate of particles based on size:',
          headers: ['Particle Size', 'Location Deposited'],
          rows: [
            ['> 5 μm', 'Trapped in upper airways'],
            ['5-2 μm', 'Reach bronchioles'],
            ['< 2 μm', 'Reach alveoli']
          ]
        },
        {
          type: 'clinical',
          content: 'Factors impairing mucociliary clearance: vagus nerve stimulation, temperature extremes, smoking, dehydration, dry air, anesthesia, drugs. Consequences: atelectasis, infections, hypoxia'
        }
      ]
    },
    'lo-3': {
      title: 'Protection of the lung and the airways: describe functions alveolar macrophages, Clara-cells, tissue mast cells.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Cellular Defense Systems'
        },
        {
          type: 'comparison',
          intro: 'Three key protective cell types:',
          items: [
            {
              label: 'Alveolar Macrophages',
              content: 'Immune cells in alveolar spaces that phagocytize inhaled particles (dust, smoke, silicium, asbestos). Digestible particles broken down and released to lymphatics. Non-digestible particles encapsulated in giant cell capsule until potentially dissolved'
            },
            {
              label: 'Clara Cells (Club Cells)',
              content: 'Located in bronchiolar epithelium. Functions: (1) Secrete surfactant-like material reducing surface tension, (2) Detoxify harmful substances via enzymatic properties, (3) Act as progenitor stem cells for epithelial regeneration'
            },
            {
              label: 'Tissue Mast Cells',
              content: 'Located in lung connective tissue. Release histamine → bronchoconstriction, mucus production, airway inflammation. Release leukotrienes → prolonged allergic response. Excessive activation contributes to airway obstruction in asthma'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'These three cell types provide complementary defense: macrophages clear particles, Clara cells protect bronchioles and regenerate tissue, mast cells mediate immune responses'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the control of airway diameter and secretory activity: Define the term bronchomotor tone. Adrenergic effects. Describe the effects mediated by adrenergic receptors. Describe the effect of inflammatory mediators (histamine, prostanoids, leucotrienes).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Bronchomotor Tone and Control'
        },
        {
          type: 'keypoint',
          content: 'Bronchomotor tone is the baseline level of smooth muscle tension in bronchial walls that determines airway diameter, constantly regulated by autonomic nervous system input',
          isCritical: true
        },
        {
          type: 'paragraph',
          content: 'Parasympathetic control via vagus nerve maintains resting baseline constriction with diurnal rhythm, causing early morning asthma exacerbations'
        },
        {
          type: 'comparison',
          intro: 'Adrenergic receptor effects:',
          items: [
            {
              label: 'β₂-Adrenergic (Predominant)',
              content: 'Location: Bronchial smooth muscle and glandular epithelium. Effects: (1) Bronchodilation by relaxing smooth muscle, (2) Inhibits mucus secretion, (3) Inhibits mast cell degranulation (anti-inflammatory). Clinical: β₂-agonists (salbutamol) for asthma/COPD'
            },
            {
              label: 'α-Adrenergic (Minor)',
              content: 'Location: Nasal mucosa and submucosal vessels. Effect: Vasoconstriction in nasal passages (decongestants). Minor role in lower airways'
            }
          ]
        },
        {
          type: 'table',
          intro: 'Inflammatory mediators affecting airways:',
          headers: ['Mediator', 'Source', 'Effects'],
          rows: [
            ['Histamine', 'Mast cells, basophils', 'Bronchoconstriction (H₁ receptors), ↑ vascular permeability → edema, ↑ mucus secretion'],
            ['Prostanoids', 'Arachidonic acid metabolism', 'Variable: PGD₂ → constriction; PGE₂ → dilation or constriction (receptor-dependent)'],
            ['Leukotrienes (LTC₄, LTD₄)', 'Mast cells, eosinophils', 'Potent/prolonged constriction, ↑ mucus production, airway edema']
          ]
        },
        {
          type: 'clinical',
          content: 'Leukotriene receptor antagonists (montelukast) are used in asthma therapy to block the potent bronchoconstrictor effects of leukotrienes'
        }
      ]
    },
    'lo-5': {
      title: 'Describe the clearance of vasoactive substances by the pulmonary circulation. Give examples for substances that are virtually fully "cleared" (local mediators: leucotrienes, prostanoids, bradykinin, VIP, endothelin, serotonin, and also for substances that pass effectively unchanged (the vasoactive hormones: adrenaline, vasopressin).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Pulmonary Clearance of Vasoactive Substances'
        },
        {
          type: 'paragraph',
          content: 'The pulmonary endothelium filters and metabolizes vasoactive substances entering lungs with venous blood. Pulmonary capillaries (diameter ~7 μm) provide both physical filtering and metabolic processing'
        },
        {
          type: 'comparison',
          intro: 'Substances cleared vs. passing unchanged:',
          items: [
            {
              label: 'Virtually Fully Cleared (Local Mediators)',
              content: 'Leukotrienes - inactivated; Prostanoids (e.g., PGF₂α) - metabolized; Bradykinin - rapidly degraded by ACE; VIP (vasoactive intestinal peptide) - inactivated; Serotonin - ~80% taken up by endothelium and platelets; Endothelin - partially removed (potent vasoconstrictor)'
            },
            {
              label: 'Pass Effectively Unchanged (Vasoactive Hormones)',
              content: 'Adrenaline (epinephrine) - systemic hormone, passes unchanged; Vasopressin (ADH) - systemic hormone, passes unchanged'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Special case: Angiotensin I is converted to Angiotensin II by ACE (activation, not clearance)'
        },
        {
          type: 'paragraph',
          content: 'The lung also plays a role in hemostasis by producing plasminogen activators, heparin, and thromboplastin affecting blood clotting'
        }
      ]
    },
    'lo-6': {
      title: 'Describe the importance of pulmonary vascular endothelium in the production of angiotensin II (ACE expression).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Pulmonary ACE and Angiotensin II Production'
        },
        {
          type: 'keypoint',
          content: 'The pulmonary endothelium is one of the most significant sites for ACE expression in the body, ensuring efficient conversion as blood flows through lung capillaries'
        },
        {
          type: 'steps',
          intro: 'Angiotensin conversion process:',
          items: [
            'Angiotensin I (inactive decapeptide) enters pulmonary circulation with venous blood',
            'ACE on pulmonary endothelial cell surfaces catalyzes conversion',
            'Angiotensin II (active octapeptide) is produced',
            '~70-80% of circulating Angiotensin I converted in single pass through lungs'
          ]
        },
        {
          type: 'list',
          intro: 'Functions of Angiotensin II:',
          items: [
            'Potent vasoconstriction → increases systemic vascular resistance and blood pressure',
            'Stimulates aldosterone secretion from adrenal cortex',
            'Promotes sodium and water retention in kidneys',
            'Maintains fluid and electrolyte balance'
          ]
        },
        {
          type: 'clinical',
          content: 'ACE inhibitors block this conversion and are commonly used to treat hypertension. The pulmonary endothelium is essential for blood pressure regulation, especially during dehydration or blood loss'
        },
        {
          type: 'keypoint',
          content: 'This system is part of the renin-angiotensin-aldosterone system (RAAS), crucial for long-term blood pressure and fluid balance regulation'
        }
      ]
    }
  }
};

export default topic32QuickReview;
