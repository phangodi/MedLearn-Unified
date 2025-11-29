/**
 * Quick Review content for Topic 34 - Hemorheology
 * Auto-generated - ALL 6 Learning Objectives
 */
const topic34QuickReview = {
  topicId: 'topic-34',
  topicNumber: 34,
  learningObjectives: {
    'lo-1': {
      title: 'Explain and give the units of the followings: shear stress, shear rate, viscosity. Give Newton\'s law of viscosity, and >>define Newtonian<< and non-Newtonian >>fluids.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Fundamental Hemorheology Concepts',
          critical: true
        },
        {
          type: 'table',
          headers: ['Term', 'Definition', 'Units'],
          rows: [
            ['Shear stress (τ)', 'Tangential force making layers glide', 'N/m² or Pa'],
            ['Shear rate (γ)', 'Velocity gradient: dv/dx', '1/s or s⁻¹'],
            ['Viscosity (η)', 'Resistance to flow: η = τ/γ', 'Pa·s or Poise']
          ],
          critical: true
        },
        {
          type: 'formula',
          formula: 'τ = η × γ',
          explanation: 'Newton\'s law of viscosity: Shear stress is proportional to shear rate, with viscosity as the coefficient',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Newtonian Fluids',
            items: [
              'Constant viscosity',
              'Linear τ vs γ relationship',
              'Examples: water, air, oils',
              'Viscosity independent of shear'
            ]
          },
          right: {
            title: 'Non-Newtonian Fluids',
            items: [
              'Viscosity changes with shear',
              'Non-linear τ vs γ relationship',
              'Examples: blood, ketchup',
              'Blood is shear-thinning'
            ]
          },
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Blood is non-Newtonian: viscosity decreases with increasing shear rate. Conversion: 1 Pa·s = 0.1 Poise',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Viscosity is inversely proportional to temperature - hypothermia increases blood viscosity'
        }
      ]
    },
    'lo-2': {
      title: 'The anomalous viscosity of blood: >>which factors affect blood viscosity?<< (hematocrit, shear thinning and the Fåhræus-Lindqvist effect)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Anomalous Viscosity of Blood',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Blood is non-Newtonian with anomalous viscosity: viscosity changes with shear rate and vessel geometry. Plasma is Newtonian (protein-dependent), but whole blood exhibits unique rheological features.'
        },
        {
          type: 'list',
          intro: 'Three main factors affect blood viscosity:',
          items: [
            'Hematocrit - cell concentration',
            'Shear thinning - rate-dependent behavior',
            'Fåhræus-Lindqvist effect - vessel size influence'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Factor 1: Hematocrit',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Increasing hematocrit increases viscosity due to more red blood cells. Higher hematocrit means more cells creating friction.'
        },
        {
          type: 'comparison',
          left: {
            title: 'Polycythemia (↑ Hct)',
            items: [
              'Elevated RBC count',
              'Increased viscosity',
              'Higher vascular resistance',
              'Increased cardiac workload'
            ]
          },
          right: {
            title: 'Anemia (↓ Hct)',
            items: [
              'Reduced RBC count',
              'Decreased viscosity',
              'Lower vascular resistance',
              'Easier blood flow'
            ]
          },
          critical: true
        },
        {
          type: 'header',
          text: 'Factor 2: Shear Thinning',
          critical: true
        },
        {
          type: 'steps',
          intro: 'How shear rate affects viscosity:',
          items: [
            'Low shear rates → RBCs form rouleaux aggregates',
            'Aggregates increase internal friction',
            'High viscosity in slow flow',
            'High shear rates → aggregates disperse',
            'Cells align with flow direction',
            'Reduced viscosity in fast flow'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Factor 3: Fåhræus-Lindqvist Effect',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Decreasing vessel diameter below 300 μm reduces apparent viscosity. RBCs migrate centrally, creating cell-free plasma layer near walls that acts as lubricant.',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'These anomalous features are explained by RBC membrane\'s non-elastic deformability (fluidity)',
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
          text: 'Shear Thinning: Blood\'s Unique Property'
        },
        {
          type: 'paragraph',
          text: 'Shear thinning: apparent viscosity decreases with increasing shear rate, ensuring efficient flow through vessels of all sizes'
        },
        {
          type: 'list',
          intro: 'Two mechanisms explain shear thinning:',
          items: [
            'Dispersion of RBC aggregates - breaking up rouleaux',
            'Red blood cell adaptations - deformation and alignment'
          ]
        },
        {
          type: 'header',
          text: 'Mechanism 1: Dispersion of RBC Aggregates'
        },
        {
          type: 'steps',
          intro: 'At low shear rates (stasis/venous flow):',
          items: [
            'RBCs form rouleaux (money roll structures)',
            'Aggregation mediated by fibrinogen and globulins',
            'Aggregates create internal friction',
            'Blood viscosity increases significantly'
          ]
        },
        {
          type: 'steps',
          intro: 'At high shear rates (arterial/capillary flow):',
          items: [
            'Plasma flow forces disrupt rouleaux',
            'Individual RBCs separate and disperse',
            'Intercellular friction decreases',
            'Blood viscosity drops significantly'
          ]
        },
        {
          type: 'header',
          text: 'Mechanism 2: Red Blood Cell Adaptations'
        },
        {
          type: 'list',
          intro: 'RBCs adapt through three processes:',
          items: [
            'Axial migration: RBCs move to vessel center at higher shear, leaving cell-free plasma layer near walls as lubricant',
            'Deformability: Flexible biconcave shape allows elongation and alignment with flow at high shear rates',
            'Capillary adaptation: In narrow capillaries, cells squeeze through in single file with perfect paraboloid velocity profile'
          ]
        },
        {
          type: 'keypoint',
          text: 'Shear thinning helps maintain flow at high velocities and reduces cardiac energy expenditure'
        },
        {
          type: 'clinical',
          text: 'Reduced RBC deformability (sickle cell, spherocytosis) impairs shear thinning and microcirculation'
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
          text: 'Structural viscosity: Blood viscosity arising from RBC interactions and rouleaux formation, heavily influenced by plasma protein composition'
        },
        {
          type: 'comparison',
          left: {
            title: 'Globulins & Fibrinogen (Pro-aggregation)',
            items: [
              'Promote RBC aggregation',
              'Bridge adjacent RBCs',
              'Create attractive forces',
              'Increase rouleaux formation',
              'Raise structural viscosity'
            ]
          },
          right: {
            title: 'Albumin (Anti-aggregation)',
            items: [
              'Prevent RBC aggregation',
              'Coat RBC surfaces',
              'Reduce cell interactions',
              'Decrease rouleaux formation',
              'Lower structural viscosity'
            ]
          }
        },
        {
          type: 'table',
          headers: ['A/G Ratio', 'Effect on Aggregation', 'Viscosity'],
          rows: [
            ['High A/G', 'Albumin predominates → less aggregation', 'Lower viscosity'],
            ['Low A/G', 'Globulins dominate → more aggregation', 'Higher viscosity']
          ]
        },
        {
          type: 'keypoint',
          text: 'The albumin-to-globulin ratio is the key determinant of structural viscosity, especially at low shear rates'
        },
        {
          type: 'clinical',
          text: 'RBC sedimentation rate (ESR) increases when plasma A/G ratio decreases - this reversible aggregation is the basis of ESR testing'
        }
      ]
    },
    'lo-5': {
      title: 'Characterize the flow adaptations of red blood cells. (axial migration, orientation, shape changes)',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'RBC Flow Adaptations: Dynamic Optimization'
        },
        {
          type: 'paragraph',
          text: 'RBCs dynamically adapt to blood flow conditions, optimizing circulation efficiency and minimizing resistance in both large vessels and microcirculation'
        },
        {
          type: 'list',
          intro: 'Three key adaptations:',
          items: [
            'Axial migration - central positioning',
            'Orientation - alignment with flow',
            'Shape changes - deformation for passage'
          ]
        },
        {
          type: 'header',
          text: 'Adaptation 1: Axial Migration'
        },
        {
          type: 'steps',
          intro: 'How RBCs position themselves:',
          items: [
            'Lateral forces from shear gradients in laminar flow',
            'Higher shear stress near vessel walls',
            'RBCs pushed toward vessel center',
            'Cell-free plasma layer forms near walls',
            'Plasma layer acts as lubricant'
          ]
        },
        {
          type: 'keypoint',
          text: 'Axial migration reduces friction between RBCs and vessel walls, lowering blood viscosity and improving flow efficiency'
        },
        {
          type: 'header',
          text: 'Adaptation 2: Orientation'
        },
        {
          type: 'paragraph',
          text: 'In high-shear environments (arteries, arterioles), RBCs rotate and align their biconcave shape parallel to flow direction'
        },
        {
          type: 'list',
          intro: 'Benefits of alignment:',
          items: [
            'Minimizes flow resistance and turbulence',
            'Reduces energy expenditure by heart',
            'Ensures smooth laminar flow',
            'Disrupted orientation increases vascular resistance'
          ]
        },
        {
          type: 'header',
          text: 'Adaptation 3: Shape Changes'
        },
        {
          type: 'paragraph',
          text: 'RBCs are highly deformable due to biconcave shape and spectrin cytoskeleton (lipid bilayer structure)'
        },
        {
          type: 'steps',
          intro: 'Deformability in action:',
          items: [
            'Capillaries smaller than RBC diameter (7-8 μm)',
            'RBCs elongate into paraboloid shapes',
            'Cells pass through in single file',
            'Perfect fluid droplet adaptation',
            'Ensures continuous oxygen delivery'
          ]
        },
        {
          type: 'clinical',
          text: 'Reduced deformability in sickle cell disease or spherocytosis impairs microcirculation, causing tissue ischemia and pain crises'
        }
      ]
    },
    'lo-6': {
      title: 'How will the apparent blood viscosity change in microvessels? Describe the Fåhræus-Lindqvist-effect and its mechanisms.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'The Fåhræus-Lindqvist Effect'
        },
        {
          type: 'paragraph',
          text: 'In microvessels below 300 μm diameter, apparent blood viscosity DECREASES as vessel diameter decreases - counterintuitive but physiologically crucial'
        },
        {
          type: 'keypoint',
          text: 'Fåhræus-Lindqvist effect: Reduction of apparent blood viscosity in vessels 10-300 μm diameter. Discovered 1931 by Swedish researchers.'
        },
        {
          type: 'table',
          headers: ['Vessel Diameter', 'Viscosity Effect'],
          rows: [
            ['> 300 μm', 'Normal whole blood viscosity'],
            ['10-300 μm', 'Progressive viscosity decrease'],
            ['7-10 μm', 'Approaches plasma viscosity'],
            ['< 10 μm', 'May slightly increase (deformation energy)']
          ]
        },
        {
          type: 'list',
          intro: 'Three mechanisms explain this effect:',
          items: [
            'Axial migration and plasma skimming',
            'Reduced hematocrit (Fåhræus effect)',
            'RBC deformability and alignment'
          ]
        },
        {
          type: 'header',
          text: 'Mechanism 1: Axial Migration & Plasma Skimming'
        },
        {
          type: 'steps',
          intro: 'More important in larger microvessels (30-300 μm):',
          items: [
            'RBCs migrate to vessel center (high velocity, low shear)',
            'Cell-free plasma layer forms at walls (low velocity)',
            'Effective hematocrit decreases locally',
            'Plasma layer acts as lubricant',
            'Overall viscosity decreases'
          ]
        },
        {
          type: 'header',
          text: 'Mechanism 2: Reduced Hematocrit'
        },
        {
          type: 'paragraph',
          text: 'The Fåhræus effect: Hematocrit in small vessels is lower than in large vessels due to cell-free plasma layers. Lower RBC concentration further reduces viscosity.'
        },
        {
          type: 'header',
          text: 'Mechanism 3: RBC Deformability & Alignment'
        },
        {
          type: 'steps',
          intro: 'Critical in smallest vessels:',
          items: [
            'RBCs highly flexible (biconcave shape)',
            'Deform to pass vessels < 7-8 μm diameter',
            'Align in single-file streams',
            'Perfect paraboloid velocity profile',
            'Minimizes cell-to-cell interactions',
            'Reduces flow resistance'
          ]
        },
        {
          type: 'keypoint',
          text: 'Effect minimizes resistance in microcirculation, ensuring efficient tissue perfusion and oxygen delivery'
        },
        {
          type: 'clinical',
          text: 'Impairment in sickle cell anemia: rigid cells cannot deform, leading to increased microvessel viscosity, vascular occlusion, and tissue damage'
        }
      ]
    }
  }
};

export default topic34QuickReview;
