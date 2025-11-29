/**
 * Quick Review content for Topic 9 - Red Blood Cells
 * Auto-generated - ALL 8 Learning Objectives
 */
const topic9QuickReview = {
  topicId: 'topic-9',
  topicNumber: 9,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the following parameters of the red blood cells: count, size, shape, life span.',
      blocks: [
        { type: 'header', text: 'Red Blood Cell Parameters' },
        { type: 'list', intro: 'Essential RBC measurements:', items: [
          'Count: 4.3-5.2 million/µL (males ~5.2M, females ~4.7M)',
          'Diameter: 7-8 µm; thickness 2.5 µm at edge, 1 µm at center',
          'Volume: 90-95 cubic µm average',
          'Life span: ~120 days before spleen breakdown'
        ]},
        { type: 'keypoint', text: 'Shape is biconcave disc - maximizes surface area for gas exchange and allows flexibility through capillaries' },
        { type: 'clinical', text: 'Size variations diagnose anemias: microcytic (iron deficiency) vs macrocytic (B12/folate deficiency)' }
      ]
    },
    'lo-2': {
      title: 'What is the fate of the cell organelles in mature red blood cells?',
      blocks: [
        { type: 'header', text: 'Organelle Loss in Mature RBCs' },
        { type: 'paragraph', text: 'Mature RBCs lose ALL organelles: nucleus, mitochondria, ER, Golgi, ribosomes.' },
        { type: 'list', intro: 'Three reasons for organelle loss:', items: [
          'Maximize space for hemoglobin → more oxygen carrying capacity',
          'Increase flexibility → squeeze through tiny capillaries',
          'No mitochondria = no oxygen consumption → all O₂ delivered to tissues'
        ]},
        { type: 'keypoint', text: 'Energy comes from anaerobic glycolysis (glucose → ATP without oxygen)' }
      ]
    },
    'lo-3': {
      title: 'Define the following terms and give the formula of their calculation: MCH, MCHC, MCV.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'RBC Indices: MCH, MCHC, MCV', critical: true },
        { type: 'comparison',
          left: {
            title: 'MCH (Mean Corpuscular Hb)',
            items: [
              'Average Hb per RBC',
              'Normal: 29 pg',
              'Formula: Hb(g/dL) × 10 ÷ RBC count'
            ]
          },
          right: {
            title: 'MCHC (Mean Corpuscular Hb Conc)',
            items: [
              'Hb concentration in packed RBCs',
              'Normal: 333 g/L',
              'Formula: Hb(g/dL) × 100 ÷ Hct'
            ]
          }
        },
        { type: 'formula', formula: 'MCV = Hct(%) × 10 ÷ RBC count', explanation: 'Mean Corpuscular Volume - average RBC size (normal: 94 fL)' },
        { type: 'table',
          headers: ['Index', 'Low Value Indicates', 'High Value Indicates'],
          rows: [
            ['MCH', 'Iron deficiency anemia', 'Macrocytic anemia'],
            ['MCHC', 'Hypochromic states', 'Hereditary spherocytosis'],
            ['MCV', 'Microcytic anemia', 'Macrocytic anemia']
          ]
        }
      ]
    },
    'lo-4': {
      title: 'Describe the Price-Jones curve.',
      blocks: [
        { type: 'header', text: 'Price-Jones Curve' },
        { type: 'paragraph', text: 'Graphical representation of RBC diameter distribution in a blood sample.' },
        { type: 'comparison',
          left: {
            title: 'Normal Curve',
            items: [
              'Bell-shaped distribution',
              'Peak at 7-8 µm diameter',
              'Indicates mean cell size'
            ]
          },
          right: {
            title: 'Abnormal Shifts',
            items: [
              'Left shift → microcytic (iron deficiency)',
              'Right shift → macrocytic (B12/folate)',
              'Broader curve → anisocytosis'
            ]
          }
        },
        { type: 'clinical', text: 'Helps identify anisocytosis (RBC size variation) and differentiate anemia types' }
      ]
    },
    'lo-5': {
      title: 'Enlist and describe the types of anemias and explain their mechanism.',
      blocks: [
        { type: 'header', text: 'Types of Anemia by MCV' },
        { type: 'paragraph', text: 'Anemia = deficiency in RBCs or hemoglobin → reduced O₂ transport to tissues.' },
        { type: 'table',
          headers: ['Type', 'MCV', 'Mechanism', 'Causes'],
          rows: [
            ['Microcytic', '<80 fL', 'Impaired Hb synthesis', 'Iron deficiency, thalassemia'],
            ['Normocytic', '80-100 fL', '↓ production or ↑ destruction', 'Chronic disease, hemolysis, blood loss'],
            ['Macrocytic', '>100 fL', 'Defective DNA synthesis', 'B12 deficiency, folate deficiency']
          ]
        },
        { type: 'keypoint', text: 'Iron deficiency is the most common cause of microcytic anemia worldwide' },
        { type: 'clinical', text: 'B12 deficiency (pernicious anemia) and folate deficiency cause megaloblastic changes in bone marrow' }
      ]
    },
    'lo-6': {
      title: 'Characterize the osmotic resistance of the red blood cells.',
      blocks: [
        { type: 'header', text: 'Osmotic Resistance of RBCs' },
        { type: 'paragraph', text: 'Ability of RBCs to withstand hemolysis in hypotonic (low salt) solutions.' },
        { type: 'steps', intro: 'Mechanism in hypotonic solution:', items: [
          'Water enters RBC by osmosis',
          'Cell swells → spheroid shape',
          'If too hypotonic → membrane ruptures → hemolysis'
        ]},
        { type: 'comparison',
          left: {
            title: 'Minimal Resistance',
            items: [
              'Initial hemolysis begins',
              '0.44-0.45% NaCl solution'
            ]
          },
          right: {
            title: 'Maximal Resistance',
            items: [
              'Complete hemolysis',
              '0.30% NaCl solution'
            ]
          }
        },
        { type: 'keypoint', text: 'Key proteins maintaining integrity: Spectrin, Ankyrin, Band 3' },
        { type: 'clinical', text: 'Decreased resistance in: anemia, old RBCs, membrane diseases (hereditary spherocytosis)' }
      ]
    },
    'lo-7': {
      title: 'Describe the mechanism of blood sedimentation, the method of its measurement, significance and normal value.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Erythrocyte Sedimentation Rate (ESR)', critical: true },
        { type: 'paragraph', text: 'Measures how quickly RBCs settle in a vertical tube over 1 hour.', critical: true },
        { type: 'list', intro: 'Mechanism - Rouleaux Formation:', critical: true, items: [
          'Plasma proteins (fibrinogen) coat RBCs',
          'Reduced negative surface charge (zeta potential)',
          'RBCs aggregate into rouleaux stacks',
          'Aggregated cells = heavier = settle faster'
        ]},
        { type: 'keypoint', text: 'Westergren Method: Blood + anticoagulant (sodium citrate) in marked vertical tube; measure distance fallen in 1 hour', critical: true },
        { type: 'formula', formula: 'Normal: 3-10 mm/hour (higher in women)', explanation: 'Values <20 mm/hour generally considered normal', critical: true },
        { type: 'clinical', text: 'Increased ESR: inflammation, infection, tumors, pregnancy, anemia. Used to monitor chronic inflammatory diseases.' }
      ]
    },
    'lo-8': {
      title: 'Describe the membrane of the red blood cells. Enlist three important membrane proteins.',
      blocks: [
        { type: 'header', text: 'RBC Membrane Structure & Proteins' },
        { type: 'list', intro: 'Membrane Components:', items: [
          'Phospholipid bilayer with cholesterol → flexibility & selective barrier',
          'Cytoskeleton beneath: spectrin, actin, ankyrin → mechanical strength',
          'Glycocalyx (carbohydrate chains) → negative charge prevents aggregation'
        ]},
        { type: 'table',
          headers: ['Protein', 'Function'],
          rows: [
            ['Band 3 (Cl⁻/HCO₃⁻ exchanger)', 'CO₂ transport & pH regulation'],
            ['GLUT1', 'Glucose transport for glycolysis'],
            ['Glycophorin C', 'Structural stability & negative charge']
          ]
        },
        { type: 'keypoint', text: 'Negative surface charge from sialic acid on glycoproteins creates electrostatic repulsion → prevents RBC clumping' }
      ]
    }
  }
};

export default topic9QuickReview;
