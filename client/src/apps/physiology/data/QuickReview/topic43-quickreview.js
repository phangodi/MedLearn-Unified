/**
 * Quick Review content for Topic 43 - The microcirculation: capillary solute exchange and fluid dynamics
 * Auto-generated - ALL 7 Learning Objectives
 */
const topic43QuickReview = {
  topicId: 'topic-43',
  topicNumber: 43,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the vascular elements of the microcirculation (arterioles, mertarterioles, precapillary spincters, capillaries, venules)',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Vascular Elements of the Microcirculation',
          critical: false
        },
        {
          type: 'list',
          intro: 'Resistance vessels (regulate flow and pressure):',
          items: [
            'Arterioles: 30-100 µm diameter, contain smooth muscle, regulate systemic vascular resistance and blood flow distribution',
            'Metarterioles: 10-20 µm transitional vessels, intermittent smooth muscle, serve as bypass channels',
            'Precapillary sphincters: 5-10 µm rings of smooth muscle at capillary entrances, gate blood flow based on local metabolic needs'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Exchange and collection vessels:',
          items: [
            'Capillaries: 5-10 µm smallest vessels, single endothelial layer + basement membrane, primary site for gas/nutrient/waste exchange',
            'Venules: 10-200 µm collecting vessels, sites for leukocyte migration during inflammation, sensitive to histamine'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Approximately 10 billion perfused capillaries at rest provide 300 m² surface area for exchange',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Postcapillary venules produce adhesion molecules during inflammation, promoting white blood cell migration and causing increased permeability leading to edema'
        }
      ]
    },

    'lo-2': {
      title: '>>Describe the main types of true capillaries: continuous, fenestrated, discontinuous and barrier endothelium.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Four Types of True Capillaries',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Continuous Capillaries',
            items: [
              'Continuous unbroken endothelial lining',
              'Tight junctions, few intercellular clefts',
              'Complete basement membrane',
              'Least permeable type',
              'Location: skeletal muscle, myocardium, skin, lungs'
            ]
          },
          right: {
            title: 'Fenestrated Capillaries',
            items: [
              'Contain fenestrations (pores) in endothelium',
              'Pores may/may not have diaphragm',
              'Intact basement membrane',
              'Moderate permeability',
              'Location: kidneys, GI tract, endocrine glands'
            ]
          }
        },
        {
          type: 'comparison',
          left: {
            title: 'Discontinuous (Sinusoids)',
            items: [
              'Discontinuous endothelium with large gaps',
              'Incomplete/absent basement membrane',
              'Wide lumen, slow flow',
              'Most permeable - allows cell passage',
              'Location: liver, spleen, bone marrow'
            ]
          },
          right: {
            title: 'Barrier Endothelium',
            items: [
              'Subtype of continuous capillaries',
              'Extremely tight junctions',
              'Specialized transport mechanisms',
              'Highly selective permeability',
              'Location: blood-brain, blood-retinal, blood-testis barriers'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Permeability order: Continuous (σ≈1 for proteins) < Fenestrated (moderate) < Discontinuous (σ lower, allows proteins)',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Continuous capillaries use transcellular pathway for gases, paracellular pathway for water-soluble solutes (Fick\'s law)',
          critical: true
        }
      ]
    },

    'lo-3': {
      title: 'Describe the diffusion across the capillary wall using Fick\'s law.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Fick\'s Law of Diffusion Across Capillaries',
          critical: false
        },
        {
          type: 'formula',
          formula: 'J = -D × A × ΔC / Δx',
          explanation: 'J = diffusion rate; negative sign = down concentration gradient',
          critical: false
        },
        {
          type: 'table',
          headers: ['Parameter', 'Description', 'Clinical Impact'],
          rows: [
            ['D (diffusion coefficient)', 'Depends on molecular size & permeability', 'O₂, CO₂ diffuse faster (small, lipophilic)'],
            ['A (surface area)', 'Capillaries: ~300 m²', 'Reduced capillary density (ischemia) ↓ diffusion'],
            ['ΔC (concentration gradient)', 'Driving force for diffusion', 'O₂: blood→tissue; CO₂: tissue→blood'],
            ['Δx (wall thickness)', 'Capillaries: ~1 µm', 'Wall thickening (fibrosis) impairs diffusion']
          ]
        },
        {
          type: 'list',
          intro: 'Diffusion pathways in capillaries:',
          items: [
            'Transcellular: Respiratory gases (O₂, CO₂) - lipid-soluble',
            'Paracellular: Water-soluble solutes (glucose, ions) - through intercellular clefts',
            'Reflection coefficient for small molecules: σ ≈ 0 (freely permeable)'
          ],
          critical: false
        }
      ]
    },

    'lo-4': {
      title: 'Contrast capillary permeability of small molecule solutes and proteins based on their respective reflection coefficients (σ).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Reflection Coefficient (σ) and Capillary Permeability',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Reflection coefficient (σ) measures how much a substance is prevented from crossing the capillary wall, ranging from 0 (freely permeable) to 1 (completely restricted)',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Small Molecule Solutes',
            items: [
              'Examples: O₂, CO₂, glucose, ions',
              'σ ≈ 0 to 0.1 (high permeability)',
              'Lipid-soluble: diffuse through membrane',
              'Water-soluble: diffuse through clefts/fenestrations',
              'Particularly high in fenestrated capillaries'
            ]
          },
          right: {
            title: 'Plasma Proteins',
            items: [
              'Examples: albumin, globulins, fibrinogen',
              'σ ≈ 1 (very low permeability)',
              'Almost completely restricted in continuous capillaries',
              'Require vesicular transport/transcytosis',
              'Lower σ in discontinuous capillaries (gaps allow passage)'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Large protein concentration gradient: plasma 60-80 g/L vs interstitial fluid 15-20 g/L',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Capillary wall is effectively impermeable for proteins (σ=1), creating the oncotic pressure gradient essential for fluid balance'
        }
      ]
    },

    'lo-5': {
      title: 'Define oncotic (colloidosmotic) and hydrostatic pressures, and give the reference values of these (the Starling forces) in both the capillary blood and the interstitial fluid compartments.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Starling Forces: Hydrostatic and Oncotic Pressures',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Hydrostatic pressure: Force exerted by fluid against capillary walls, drives filtration (fluid OUT). Oncotic pressure: Osmotic pressure from plasma proteins (mainly albumin), drives reabsorption (fluid IN)',
          critical: false
        },
        {
          type: 'table',
          headers: ['Starling Force', 'Systemic Capillaries', 'Pulmonary Capillaries', 'Effect'],
          rows: [
            ['Capillary hydrostatic (Pc)', '17.3 mmHg average (35→10)', '10-11 mmHg', 'Drives fluid OUT'],
            ['Interstitial hydrostatic (Pi)', '-3 mmHg', '-3 mmHg', 'Enhances filtration (negative)'],
            ['Plasma oncotic (πc)', '28 mmHg', '25 mmHg', 'Pulls fluid IN'],
            ['Interstitial oncotic (πi)', '8 mmHg', '5 mmHg', 'Opposes reabsorption']
          ]
        },
        {
          type: 'keypoint',
          text: 'Plasma oncotic pressure (28 mmHg) is the primary force driving fluid reabsorption back into capillaries',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Pulmonary capillary hydrostatic pressure is much lower (10-11 mmHg vs 17.3 mmHg systemic) to prevent pulmonary edema'
        }
      ]
    },

    'lo-6': {
      title: '>>Define the Starling equation and discuss how each component influences fluid movement across the capillary wall.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Starling Equation for Fluid Movement',
          critical: true
        },
        {
          type: 'formula',
          formula: 'Jv = Kf × [(Pc - Pi) - σ(πc - πi)]',
          explanation: 'Quantifies net fluid movement across capillary wall',
          critical: true
        },
        {
          type: 'table',
          headers: ['Component', 'Description', 'Clinical Impact'],
          rows: [
            ['Jv', 'Net fluid movement (mL/min): + = filtration, - = reabsorption', 'Normal: ~2 mL/min filtration'],
            ['Kf', 'Filtration coefficient (permeability × surface area)', '↑Kf in inflammation/sepsis → edema'],
            ['Pc', 'Capillary hydrostatic pressure (35→10 mmHg)', '↑Pc in heart failure → edema'],
            ['Pi', 'Interstitial hydrostatic (-3 mmHg)', 'Impaired lymphatics → ↑Pi → ↓filtration'],
            ['πc', 'Capillary oncotic (28 mmHg)', '↓πc in hypoalbuminemia → edema'],
            ['πi', 'Interstitial oncotic (8 mmHg)', '↑πi in inflammation → ↑filtration'],
            ['σ', 'Reflection coefficient (0-1)', 'σ=1: proteins retained; ↓σ in inflammation → leak']
          ]
        },
        {
          type: 'keypoint',
          text: 'Net filtration ~2 mL/min produces 3-4 L/day, returned to circulation via lymph flow',
          critical: true
        },
        {
          type: 'steps',
          intro: 'How components interact:',
          items: [
            'Hydrostatic gradient (Pc - Pi) drives filtration OUT of capillaries',
            'Oncotic gradient (πc - πi) drives reabsorption INTO capillaries',
            'σ determines effectiveness of oncotic pressure (σ=1 for proteins maximizes pull)',
            'Kf scales the overall rate of fluid movement',
            'Balance determines net filtration vs reabsorption'
          ],
          critical: true
        }
      ]
    },

    'lo-7': {
      title: 'Using the components of the Starling equation, explain why fluid does not usually accumulate in the interstitium of the lungs. (the low hydrostatic pressure protects from pulmonary edema)',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Protection Against Pulmonary Edema',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'The lungs are protected from fluid accumulation through multiple mechanisms that minimize filtration and maximize reabsorption',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Protective mechanisms preventing pulmonary edema:',
          items: [
            'LOW pulmonary Pc (10-11 mmHg) vs systemic (17.3 mmHg) minimizes filtration force',
            'NEGATIVE interstitial Pi (~-3 mmHg) facilitates fluid return to capillaries and lymphatics',
            'HIGH oncotic pressure πc (25 mmHg) creates strong reabsorption pull',
            'LOW capillary permeability restricts fluid leakage even with pressure changes',
            'EXTENSIVE lymphatic drainage continuously removes any excess fluid and proteins'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'The critically low hydrostatic pressure (10-11 mmHg) is the primary protective factor against pulmonary edema',
          critical: false
        },
        {
          type: 'clinical',
          text: 'In left heart failure, Pc rises above oncotic pressure (>25 mmHg), overwhelming these protective mechanisms and causing pulmonary edema'
        },
        {
          type: 'paragraph',
          text: 'These factors combine: low Pc reduces filtration, negative Pi and high πc promote reabsorption, low permeability and efficient lymphatics prevent accumulation, maintaining dry alveoli for optimal gas exchange',
          critical: false
        }
      ]
    }
  }
};

export default topic43QuickReview;
