/**
 * Quick Review content for Topic 34 - Hemorheology
 * Auto-generated - ALL 6 Learning Objectives
 */
const topic34QuickReview = {
  topicId: 'topic-34',
  topicNumber: 34,
  learningObjectives: {
    'lo-1': {
      title: 'Explain and give the units of the followings: shear stress, shear rate, viscosity. Give Newton\'s law of viscosity, and define Newtonian and non-Newtonian fluids.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Fundamental Rheological Concepts',
          critical: true
        },
        {
          type: 'table',
          headers: ['Term', 'Definition', 'Formula', 'Units'],
          rows: [
            ['Shear stress (τ)', 'Tangential force making fluid layers glide per unit area', 'τ = F/A', 'N/m² or Pa'],
            ['Shear rate (γ)', 'Velocity gradient across fluid layers', 'γ = dv/dx', '1/s or s⁻¹'],
            ['Viscosity (η)', 'Fluid resistance to flow under shear stress', 'η = τ/γ', 'Pa·s (SI) or Poise (CGS)']
          ],
          critical: true
        },
        {
          type: 'formula',
          formula: 'τ = η · γ',
          explanation: 'Newton\'s law of viscosity: shear stress is directly proportional to shear rate',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Newtonian Fluids',
            items: [
              'Constant viscosity regardless of shear rate',
              'Linear relationship: τ ∝ γ',
              'Examples: water, air, simple oils'
            ]
          },
          right: {
            title: 'Non-Newtonian Fluids',
            items: [
              'Viscosity changes with shear rate',
              'Non-linear relationship between τ and γ',
              'Examples: blood (shear-thinning), ketchup'
            ]
          },
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Viscosity is inversely proportional to temperature: higher temperature decreases viscosity',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Blood is a non-Newtonian fluid with variable viscosity',
          critical: true
        }
      ]
    },
    'lo-2': {
      title: 'The anomalous viscosity of blood: which factors affect blood viscosity? (hematocrit, shear thinning and the Fåhræus-Lindqvist effect)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Factors Affecting Blood Viscosity',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Blood is a non-Newtonian fluid: viscosity changes with shear rate and vessel geometry (anomalous viscosity)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Three main factors affect blood viscosity:',
          items: [
            'Hematocrit: ↑ hematocrit → ↑ viscosity (more RBCs)',
            'Shear thinning: ↑ shear rate → ↓ viscosity (dispersed RBCs)',
            'Fåhræus-Lindqvist effect: ↓ vessel diameter (<300 μm) → ↓ apparent viscosity'
          ],
          critical: true
        },
        {
          type: 'clinical',
          text: 'Polycythemia (high hematocrit) increases viscosity, raising vascular resistance and cardiac workload'
        },
        {
          type: 'clinical',
          text: 'Anemia (low hematocrit) reduces viscosity, facilitating blood flow but reducing oxygen-carrying capacity'
        },
        {
          type: 'keypoint',
          text: 'RBC membrane deformability (non-elastic fluidity) explains blood\'s unique rheological features',
          critical: true
        }
      ]
    },
    'lo-3': {
      title: 'Describe the mechanisms of shear thinning (dispersion of red blood cell aggregates, and red blood cell adaptations).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Shear Thinning Mechanisms'
        },
        {
          type: 'paragraph',
          text: 'Shear thinning: blood viscosity decreases with increasing shear rate, ensuring efficient flow through vessels of all sizes.'
        },
        {
          type: 'steps',
          intro: 'Mechanism 1: Dispersion of RBC aggregates',
          items: [
            'Low shear (venous flow): RBCs form rouleaux (money roll structures) mediated by fibrinogen',
            'Rouleaux increase internal friction and viscosity',
            'High shear (arterioles): plasma flow forces disrupt rouleaux',
            'Individual RBCs disperse, reducing friction and viscosity'
          ]
        },
        {
          type: 'steps',
          intro: 'Mechanism 2: RBC adaptations',
          items: [
            'Axial migration: RBCs move to vessel center, leaving cell-free plasma layer near walls (lubricant effect)',
            'Deformability: RBCs elongate and align with flow direction at high shear',
            'Capillary flow: RBCs squeeze through in single file with perfect paraboloid velocity profile',
            'Shape change: flexible biconcave shape and spectrin cytoskeleton allow adaptation'
          ]
        },
        {
          type: 'keypoint',
          text: 'Shear thinning maintains flow at high velocities while reducing energy expenditure'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the dependence of the structural viscosity (red blood cell aggregation, money roll formation) on the composition (ratio) of plasma albumine and globuline fractions.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Structural Viscosity and Plasma Proteins'
        },
        {
          type: 'paragraph',
          text: 'Structural viscosity: viscosity due to RBC interactions and rouleaux formation, depends on plasma protein ratio.'
        },
        {
          type: 'comparison',
          left: {
            title: 'Globulins & Fibrinogen',
            items: [
              'Promote RBC aggregation',
              'Bridge adjacent RBCs',
              'Create attractive forces',
              '↑ concentration → ↑ rouleaux → ↑ viscosity'
            ]
          },
          right: {
            title: 'Albumin',
            items: [
              'Has anti-aggregatory effect',
              'Coats RBC surfaces',
              'Reduces RBC interactions',
              '↑ concentration → ↓ rouleaux → ↓ viscosity'
            ]
          }
        },
        {
          type: 'list',
          intro: 'Albumin-to-Globulin (A/G) ratio effects:',
          items: [
            'High A/G ratio: albumin predominates → reduced aggregation → lower viscosity → better flow',
            'Low A/G ratio: globulins dominate → increased aggregation → higher viscosity (especially at low shear)'
          ]
        },
        {
          type: 'clinical',
          text: 'Reversible RBC aggregation is the basis of erythrocyte sedimentation rate (ESR), which increases when A/G ratio decreases'
        }
      ]
    },
    'lo-5': {
      title: 'Characterize the flow adaptations of red blood cells. (axial migration, orientation, shape changes)',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'RBC Flow Adaptations'
        },
        {
          type: 'list',
          intro: 'Three dynamic adaptations optimize circulation:',
          items: [
            'Axial migration: RBCs move toward vessel center',
            'Orientation: RBCs align parallel to flow direction',
            'Shape changes: RBCs deform to fit varying vessel diameters'
          ]
        },
        {
          type: 'steps',
          intro: 'Axial Migration mechanism:',
          items: [
            'Shear gradients create lateral forces in laminar flow',
            'Higher shear stress near walls pushes RBCs centrally',
            'Cell-free plasma layer forms near vessel walls',
            'Plasma layer acts as lubricant, reducing friction and viscosity',
            'Most important in small arterioles and capillaries'
          ]
        },
        {
          type: 'steps',
          intro: 'Orientation mechanism:',
          items: [
            'In high-shear environments (arteries), RBCs rotate',
            'Biconcave shape aligns parallel to flow direction',
            'Minimizes flow resistance and turbulence',
            'Reduces cardiac energy expenditure',
            'Ensures smooth laminar flow'
          ]
        },
        {
          type: 'steps',
          intro: 'Shape Change mechanism:',
          items: [
            'Flexible biconcave shape + spectrin cytoskeleton',
            'In capillaries (<7-8 μm): RBCs deform into elongated shapes',
            'Ensures continuous flow and oxygen delivery',
            'Impaired in sickle cell disease and spherocytosis'
          ]
        },
        {
          type: 'clinical',
          text: 'Reduced RBC deformability (sickle cell disease, spherocytosis) impairs microcirculation and oxygen delivery'
        }
      ]
    },
    'lo-6': {
      title: 'How will the apparent blood viscosity change in microvessels? Describe the Fåhræus-Lindqvist-effect and its mechanisms.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Fåhræus-Lindqvist Effect'
        },
        {
          type: 'keypoint',
          text: 'In microvessels (<300 μm diameter), apparent blood viscosity DECREASES as vessel diameter decreases'
        },
        {
          type: 'paragraph',
          text: 'Fåhræus-Lindqvist effect: reduction of apparent viscosity in vessels 10-300 μm diameter, discovered by Robert Fåhræus and Johan Lindqvist in 1931.'
        },
        {
          type: 'steps',
          intro: 'Three mechanisms explain this effect:',
          items: [
            'Mechanism 1: Axial migration + plasma skimming (30-300 μm vessels)',
            '→ RBCs migrate to vessel center (higher velocity, lower shear stress)',
            '→ Cell-free plasma layer forms near walls (lower velocity)',
            '→ Effective hematocrit decreases → viscosity decreases',
            'Mechanism 2: Reduced hematocrit (Fåhræus effect)',
            '→ Lower RBC concentration in small vessels',
            '→ Further reduces viscosity',
            'Mechanism 3: RBC deformability + alignment',
            '→ RBCs deform to pass through vessels <7-8 μm',
            '→ Single-file flow in capillaries with paraboloid velocity profile',
            '→ Reduces flow resistance'
          ]
        },
        {
          type: 'keypoint',
          text: 'At 7-10 μm diameter, blood viscosity approaches plasma viscosity'
        },
        {
          type: 'paragraph',
          text: 'Limit: In capillaries <10 μm, viscosity may slightly increase due to energy required for RBC deformation and rigid WBCs.'
        },
        {
          type: 'clinical',
          text: 'This effect minimizes resistance ensuring efficient perfusion and oxygen delivery. Impaired in sickle cell anemia → increased viscosity → poor microcirculation.'
        }
      ]
    }
  }
};

export default topic34QuickReview;
