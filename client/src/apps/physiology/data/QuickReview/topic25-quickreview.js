const topic25QuickReview = {
  topicId: 'topic-25',
  topicNumber: 25,
  learningObjectives: {
    'lo-1': {
      title: 'Draw a normal spirogram, indicating the various lung volumes. Explain how the different lung capacities are determined by the summation of lung volumes. Explain which lung volumes and capacities CANNOT be determined directly with a spirometer.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Four Primary Lung Volumes'
        },
        {
          type: 'list',
          items: [
            'Tidal Volume (TV): 500 ml in both males and females - air inhaled/exhaled during quiet breathing',
            'Inspiratory Reserve Volume (IRV): 3100 ml (M), 1900 ml (F) - additional air inhaled after normal inspiration',
            'Expiratory Reserve Volume (ERV): 1200 ml (M), 800 ml (F) - extra air exhaled after normal expiration',
            'Residual Volume (RV): 1200 ml (M), 1000 ml (F) - air remaining after maximal exhalation'
          ]
        },
        {
          type: 'header',
          content: 'Lung Capacities (Summations of Volumes)'
        },
        {
          type: 'table',
          headers: ['Capacity', 'Formula', 'Male', 'Female'],
          rows: [
            ['Inspiratory Capacity (IC)', 'TV + IRV', '3600 ml', '2400 ml'],
            ['Functional Residual Capacity (FRC)', 'ERV + RV', '2400 ml', '1800 ml'],
            ['Vital Capacity (VC)', 'TV + IRV + ERV', '4800 ml', '3200 ml'],
            ['Total Lung Capacity (TLC)', 'TV + IRV + ERV + RV', '6000 ml', '4200 ml']
          ]
        },
        {
          type: 'keypoint',
          content: 'Spirometry Limitation: Cannot measure volumes containing RV (residual volume, FRC, TLC) because RV cannot be expelled from lungs. These require helium dilution or body plethysmography methods.'
        },
        {
          type: 'formula',
          title: 'Helium Dilution Method for RV',
          formula: 'RV = V₀ × (Cₐ - Cₑ) / Cₑ',
          variables: [
            'V₀ = spirometer volume',
            'Cₐ = helium concentration at beginning',
            'Cₑ = helium concentration after equilibrium'
          ]
        }
      ]
    },
    'lo-2': {
      title: 'Draw the static transpulmonary pressure - lung volume curve both during inflation from the residual volume to total lung capacity, and during deflation.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          content: 'Transpulmonary pressure = Alveolar pressure - Pleural pressure. Measures elastic recoil forces in the lungs.'
        },
        {
          type: 'header',
          content: 'Hysteresis: Different Inflation vs Deflation Curves'
        },
        {
          type: 'comparison',
          leftTitle: 'Inflation Curve (RV → TLC)',
          rightTitle: 'Deflation Curve (TLC → RV)',
          leftItems: [
            'High pressure needed initially to overcome surface tension',
            'Progressively more pressure required as lung expands',
            'Must stretch elastic tissue toward TLC'
          ],
          rightItems: [
            'Deflation curve lies LEFT of inflation curve',
            'Lower transpulmonary pressure at same volume',
            'Surfactant more concentrated in smaller alveoli',
            'Viscoelastic tissue allows easier deflation'
          ]
        },
        {
          type: 'keypoint',
          content: 'The width of hysteresis indicates surfactant effectiveness. At any given volume during deflation, required transpulmonary pressure is lower than during inflation.'
        }
      ]
    },
    'lo-3': {
      title: 'Define lung compliance, and give two examples of lung pathologies where lung compliance is smaller or higher than the normal value, respectively',
      isCritical: true,
      blocks: [
        {
          type: 'formula',
          title: 'Lung Compliance Definition',
          formula: 'C = ΔV / ΔP',
          variables: [
            'C = compliance (extent lungs expand per unit pressure increase)',
            'ΔV = change in lung volume',
            'ΔP = change in transpulmonary pressure',
            'Normal value: 0.2 L/cmH₂O for both lungs together'
          ]
        },
        {
          type: 'keypoint',
          content: 'High compliance = lungs expand easily. Low compliance = stiff lungs resisting expansion. Determined by elastic forces (elastin/collagen fibers) and surface tension forces.'
        },
        {
          type: 'comparison',
          leftTitle: 'Decreased Compliance (Stiff Lungs)',
          rightTitle: 'Increased Compliance (Over-Compliant)',
          leftItems: [
            'Pulmonary Fibrosis: Scar tissue buildup makes lungs stiff, requires higher pressures for expansion',
            'ARDS: Inflammation and reduced surfactant increase surface tension and lung stiffness'
          ],
          rightItems: [
            'Emphysema: Destruction of alveolar walls and elastic fibers - lungs inflate easily but cannot recoil effectively',
            'Normal Aging: Gradual loss of elastic recoil tissue, impairs effective ventilation'
          ]
        }
      ]
    },
    'lo-4': {
      title: 'Draw the transmural pressure - volume (compliance diagram) of the lung, the chest wall, and the combined respiratory system (lung+chest) plotted in the same graph. Show and explain the significance of the equilibrium points of the diagram.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Three Curves on Compliance Diagram'
        },
        {
          type: 'list',
          items: [
            'Lung Curve: Starts at zero volume, always requires positive transmural pressure to inflate (inward elastic recoil)',
            'Chest Wall Curve: Starts at negative pressure (outward recoil at low volumes), becomes positive at high volumes when chest wall stiffens',
            'Combined System Curve: Sum of lung + chest wall properties'
          ]
        },
        {
          type: 'keypoint',
          content: 'Critical Equilibrium Point: FRC occurs where combined curve crosses zero transmural pressure - inward lung recoil balances outward chest wall recoil.'
        },
        {
          type: 'table',
          headers: ['Point', 'Definition', 'Mechanism'],
          rows: [
            ['FRC', 'Functional Residual Capacity', 'Zero transmural pressure - lung and chest wall forces balance'],
            ['TLC', 'Total Lung Capacity', 'Inspiratory muscles cannot overcome combined elastic recoil'],
            ['RV', 'Residual Volume', 'Expiratory muscle strength balances chest wall recoil + airway closure']
          ]
        },
        {
          type: 'keypoint',
          content: 'Combined system compliance: 0.1 L/cmH₂O - lower than lung alone because chest wall adds resistance.'
        }
      ]
    },
    'lo-5': {
      title: 'Enlist the factors determining total lung capacity, functional residual capacity and residual volume.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Total Lung Capacity (TLC) Determinants'
        },
        {
          type: 'list',
          items: [
            'Lung compliance (stretchability) - high in emphysema increases TLC, low in fibrosis decreases TLC',
            'Chest wall compliance - rigid chest wall (scoliosis) decreases TLC',
            'Respiratory muscle strength - diaphragm and intercostals; weak muscles (muscular dystrophy) decrease TLC',
            'Age and physical condition - TLC generally decreases with age',
            'Posture - TLC higher when upright vs lying down'
          ]
        },
        {
          type: 'header',
          content: 'Functional Residual Capacity (FRC) Determinants'
        },
        {
          type: 'list',
          items: [
            'Balance between inward lung recoil and outward chest wall recoil',
            'Body position - FRC decreases when supine (abdominal contents push diaphragm up)',
            'Respiratory muscle tone at rest',
            'Airway resistance - higher resistance (COPD) can trap air and increase FRC'
          ]
        },
        {
          type: 'header',
          content: 'Residual Volume (RV) Determinants'
        },
        {
          type: 'list',
          items: [
            'Airway closure point - occurs earlier in emphysema or with aging, increasing RV',
            'Lung elastic recoil strength - reduced recoil increases RV',
            'Age - increased airway closure and reduced recoil with aging increase RV',
            'Expiratory muscle strength - weak muscles increase RV (lungs cannot be fully emptied)'
          ]
        }
      ]
    },
    'lo-6': {
      title: 'Describe the forces responsible for the development of negative pleural pressure (elastic recoil of the lung, and expansion tendency of the chest wall). Describe the consequence of pneumothorax (air getting into the pleural space).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Two Opposing Forces Create Negative Pleural Pressure'
        },
        {
          type: 'comparison',
          leftTitle: 'Lung Elastic Recoil (Inward)',
          rightTitle: 'Chest Wall Expansion (Outward)',
          leftItems: [
            'Elastin fibers want to contract after stretching',
            'Surface tension pulls alveoli inward',
            'Creates negative pressure by pulling away from chest wall'
          ],
          rightItems: [
            'Bony and muscular structure tends to expand in resting state',
            'Ribs and muscles push outward',
            'Contributes to negative pressure by pulling pleural membranes apart'
          ]
        },
        {
          type: 'keypoint',
          content: 'Result: Subatmospheric pleural pressure keeps lungs inflated. Typical values: -5 cmH₂O at end expiration, -8 cmH₂O at end inspiration.'
        },
        {
          type: 'header',
          content: 'Pneumothorax: Air Enters Pleural Space'
        },
        {
          type: 'steps',
          title: 'Pathophysiology',
          steps: [
            'Air enters pleural space → negative pressure lost',
            'Pleural pressure becomes equal to or greater than atmospheric',
            'Affected lung collapses from unopposed elastic recoil',
            'Chest wall may expand outward (no longer pulled inward)',
            'Gas exchange impaired → hypoxemia'
          ]
        },
        {
          type: 'clinical',
          title: 'Clinical Consequences',
          content: 'Sudden sharp chest pain, difficulty breathing, rapid heart rate, cyanosis (bluish skin from low oxygen). Tension pneumothorax: air enters but cannot escape, increasing pressure compresses mediastinum and opposite lung - medical emergency.'
        }
      ]
    },
    'lo-7': {
      title: 'Define surface tension, and describe its effect on pulmonary mechanics, including the effect on alveolar size and the role of surfactant. Define the term atelectasis, and the role of surfactant in its prevention. What does the term mean: alveolar interdependence?',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          content: 'Surface Tension: Cohesive intermolecular force between water molecules at air-liquid interface. Water molecules interact with each other via hydrogen bonds rather than with air above, creating inward net force.'
        },
        {
          type: 'formula',
          title: 'Laplace\'s Law: Alveolar Collapsing Pressure',
          formula: 'P = 2T / R',
          variables: [
            'P = collapsing pressure of alveolus',
            'T = surface tension',
            'R = alveolar radius',
            'Smaller alveoli (↓R) → higher collapsing pressure (↑P)',
            'Higher surface tension (↑T) → higher collapsing pressure (↑P)'
          ]
        },
        {
          type: 'keypoint',
          content: 'Problem Without Surfactant: Smaller alveoli have higher collapsing pressure → would empty into larger alveoli → unequal ventilation and alveolar collapse.'
        },
        {
          type: 'header',
          content: 'Surfactant Role in Pulmonary Mechanics'
        },
        {
          type: 'list',
          items: [
            'Reduces surface tension by decreasing cohesiveness of water molecules',
            'More effective in small alveoli (becomes more concentrated as alveoli shrink)',
            'Equalizes pressure differences between alveoli of different sizes',
            'Reduces work of breathing by decreasing pressure needed for inflation',
            'Prevents unequal ventilation and stabilizes alveoli'
          ]
        },
        {
          type: 'keypoint',
          content: 'Atelectasis: Partial or complete collapse of lung or lung section when alveoli become deflated or filled with fluid, preventing adequate gas exchange.'
        },
        {
          type: 'clinical',
          title: 'Surfactant Prevents Atelectasis',
          content: 'By lowering surface tension, surfactant keeps alveoli open during expiration and maintains lung stability. Without adequate surfactant (e.g., premature infants with Neonatal RDS), alveoli collapse causing breathing difficulty and reduced oxygen exchange.'
        },
        {
          type: 'keypoint',
          content: 'Alveolar Interdependence: Structural support adjacent alveoli provide each other through elastic fiber networks. If one alveolus starts to collapse, surrounding alveoli exert a pulling force helping to reopen it, preventing isolated collapse.'
        }
      ]
    },
    'lo-8': {
      title: 'Describe the source and the composition of surfactant. Explain the regulation of surfactant secretion.',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          content: 'Source: Produced and secreted by Type II alveolar cells (Type II pneumocytes). Stored in lamellar bodies within cells, released via exocytosis as tubular myelin structures.'
        },
        {
          type: 'header',
          content: 'Surfactant Composition'
        },
        {
          type: 'table',
          headers: ['Component', 'Percentage', 'Function'],
          rows: [
            ['Lipids (mainly DPPC)', '90%', 'Dipalmitoylphosphatidylcholine - reduces surface tension'],
            ['Proteins', '10%', 'Albumin, IgA, apoproteins SP-A, SP-B, SP-C, SP-D']
          ]
        },
        {
          type: 'list',
          intro: 'Apoproteins:',
          items: [
            'SP-A and SP-D: Hydrophilic - function in opsonization (immune defense)',
            'SP-B and SP-C: Hydrophobic - control rate of surfactant spreading'
          ]
        },
        {
          type: 'keypoint',
          content: 'Effect: Surfactant forms thin film at air-liquid interface, reducing surface tension to one-tenth of normal value.'
        },
        {
          type: 'header',
          content: 'Regulation of Surfactant Secretion'
        },
        {
          type: 'list',
          intro: 'Neural Control:',
          items: [
            'Sympathetic nervous system via β₂-adrenergic receptors',
            'Catecholamines (epinephrine) stimulate secretion through cAMP pathway'
          ]
        },
        {
          type: 'list',
          intro: 'Hormonal Regulation:',
          items: [
            'Glucocorticoids (cortisol): Stimulate production, especially during fetal development',
            'Thyroid hormones: Support Type II pneumocyte maturation',
            'Insulin: High levels INHIBIT synthesis (risk factor in diabetic pregnancies)'
          ]
        },
        {
          type: 'list',
          intro: 'Mechanical Stimulation:',
          items: [
            'Alveolar stretching during deep breathing activates mechanoreceptors → triggers release',
            'Positive End-Expiratory Pressure (PEEP) during mechanical ventilation stimulates release'
          ]
        },
        {
          type: 'clinical',
          title: 'Fetal Development Timeline',
          content: 'Surfactant production begins at 6-7 months intrauterine (24th week gestation). Production increases dramatically at 34-35 weeks when maternal cortisol rises. Premature babies born before 34 weeks lack adequate surfactant → Infant Respiratory Distress Syndrome (IRDS).'
        }
      ]
    }
  }
};

export default topic25QuickReview;
