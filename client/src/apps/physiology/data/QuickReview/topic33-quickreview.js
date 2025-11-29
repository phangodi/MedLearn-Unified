/**
 * Quick Review content for Topic 33 - Hemodynamics: basic biophysical principles
 * Auto-generated - ALL 7 Learning Objectives
 */
const topic33QuickReview = {
  topicId: 'topic-33',
  topicNumber: 33,
  learningObjectives: {
    'lo-1': {
      title: 'Define and compare flow and velocity of flow in terms of concept and unit. Understand the relationship between flow, velocity, and cross-sectional area.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Flow vs Velocity: Core Concepts',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Flow (Q)',
            items: [
              'Volume per time (L/min)',
              'Measures rate of delivery',
              'Constant in closed system',
              'Cardiac output = 5 L/min'
            ]
          },
          right: {
            title: 'Velocity (v)',
            items: [
              'Speed of particles (cm/s)',
              'How fast blood travels',
              'Varies by vessel size',
              'Aorta: 20-30 cm/s'
            ]
          },
          critical: true
        },
        {
          type: 'formula',
          formula: 'Q = v × A',
          explanation: 'Flow equals velocity times cross-sectional area. Velocity is inversely proportional to area.',
          critical: true
        },
        {
          type: 'table',
          headers: ['Vessel', 'Area (cm²)', 'Velocity (cm/s)'],
          rows: [
            ['Aorta', '~5.3', '20-30'],
            ['Capillaries', '~3500', '0.02-0.1'],
            ['Vena cava', '~10', 'Variable']
          ]
        },
        {
          type: 'keypoint',
          text: 'Same flow throughout circulation, but velocity varies inversely with cross-sectional area',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Slow capillary velocity allows adequate time for oxygen and nutrient exchange despite massive total cross-sectional area'
        }
      ]
    },
    'lo-2': {
      title: 'Know the factors that determine the total energy of the flowing blood (Bernoulli\'s law).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Bernoulli\'s Law: Energy Conservation'
        },
        {
          type: 'paragraph',
          text: 'Total energy in flowing blood remains constant but shifts between three forms as blood moves through vessels'
        },
        {
          type: 'list',
          intro: 'Three energy components:',
          items: [
            'Pressure energy (P): Drives flow, overcomes resistance',
            'Kinetic energy (½ρv²): Energy from blood motion, higher in narrow vessels',
            'Gravitational potential energy (ρgh): Energy from blood position/height'
          ]
        },
        {
          type: 'formula',
          formula: 'P + ½ρv² + ρgh = constant',
          explanation: 'Where ρ = blood density (~1060 kg/m³), v = velocity, g = gravity (9.8 m/s²), h = height'
        },
        {
          type: 'keypoint',
          text: 'Inverse pressure-velocity relationship: When velocity increases in narrow vessels, pressure decreases to maintain constant total energy'
        },
        {
          type: 'clinical',
          text: 'Stenotic heart valves create high velocity and low pressure, producing audible murmurs'
        }
      ]
    },
    'lo-3': {
      title: 'Understand the relationship between pressure gradient, flow, and resistance (Ohm\'s law) and be able to calculate for one variable if the other two are known.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Ohm\'s Law for Circulation',
          critical: true
        },
        {
          type: 'formula',
          formula: 'Q = ΔP / R',
          explanation: 'Flow equals pressure gradient divided by resistance. Analogous to electrical Ohm\'s law.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Three rearrangements for calculations:',
          items: [
            'Q = ΔP / R (calculate flow)',
            'ΔP = Q × R (calculate pressure gradient)',
            'R = ΔP / Q (calculate resistance)'
          ],
          critical: true
        },
        {
          type: 'table',
          headers: ['Variable', 'Definition', 'Units'],
          rows: [
            ['Q', 'Flow (cardiac output)', 'L/min or mL/min'],
            ['ΔP', 'Pressure gradient (Pa - Pv)', 'mmHg'],
            ['R', 'Resistance', 'mmHg·min/L']
          ],
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Example calculation: If CO = 5 L/min and TPR = 16.5 mmHg·min/L, then ΔP = 5 × 16.5 = 82.5 mmHg'
        },
        {
          type: 'keypoint',
          text: 'Resistance is most affected by vessel radius (r⁴ relationship). Doubling radius decreases resistance 16-fold.',
          critical: true
        }
      ]
    },
    'lo-4': {
      title: 'Describe the systemic and the pulmonary circulation as serially connected systems, and use Ohm\'s law to describe the hemodynamics in both.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Serial Connection of Circulatory Systems',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Blood flow pathway:',
          items: [
            'Right ventricle → Pulmonary arteries',
            'Lungs (gas exchange) → Pulmonary veins',
            'Left atrium → Left ventricle',
            'Aorta → Systemic circulation',
            'Veins → Right atrium (loop complete)'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Cardiac output must be equal in both circuits (5-6 L/min at rest) because they are connected in series',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Systemic Circulation',
            items: [
              'High pressure (~92 mmHg)',
              'High resistance (~16.5)',
              'Long, narrow vessels',
              'CO = (Paorta - PRA) / TPR'
            ]
          },
          right: {
            title: 'Pulmonary Circulation',
            items: [
              'Low pressure (~10 mmHg)',
              'Low resistance (~1.5)',
              'Short, wide vessels',
              'CO = (Ppulm - PLA) / PVR'
            ]
          },
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Same flow, different pressures: Systemic pressure gradient is ~10x higher due to ~10x higher resistance',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Pulmonary hypertension increases right ventricular workload, potentially causing right heart failure'
        }
      ]
    },
    'lo-5': {
      title: 'Define resistance and conductance. Understand the effects of adding resistance in series vs in parallel on total resistance and flow.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Resistance vs Conductance'
        },
        {
          type: 'comparison',
          left: {
            title: 'Resistance (R)',
            items: [
              'Opposition to flow',
              'Higher R = less flow',
              'Units: mmHg·min/L',
              'Determined by r, L, η'
            ]
          },
          right: {
            title: 'Conductance (C)',
            items: [
              'Ease of flow',
              'C = 1/R (reciprocal)',
              'Units: L/min·mmHg',
              'Increases with radius'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Configuration', 'Formula', 'Effect on R_total'],
          rows: [
            ['Series', 'R_total = R₁ + R₂ + R₃', 'Increases resistance'],
            ['Parallel', '1/R_total = 1/R₁ + 1/R₂ + 1/R₃', 'Decreases resistance']
          ]
        },
        {
          type: 'list',
          intro: 'Physiological examples:',
          items: [
            'Series: Arteries → arterioles → capillaries within an organ',
            'Parallel: Brain, kidneys, GI tract, muscle circulations side-by-side',
            'Mixed: Different vessel types in series, individual vessels in parallel'
          ]
        },
        {
          type: 'keypoint',
          text: 'Parallel arrangement decreases total resistance and allows independent blood flow control to each organ'
        },
        {
          type: 'clinical',
          text: 'Exercise opens parallel capillary beds in muscles, decreasing total resistance despite increased cardiac output'
        }
      ]
    },
    'lo-6': {
      title: 'Explain the factors determining hydraulic resistance using the Hagen Poiseuille\'s law. Explain the deviations from Hagen Poiseuille\'s law predictions that occur in the circulatory system (blood and blood vessels)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Hagen-Poiseuille\'s Law',
          critical: true
        },
        {
          type: 'formula',
          formula: 'R = 8ηL / πr⁴',
          explanation: 'Where η = viscosity, L = length, r = radius. Radius has the most dramatic effect (fourth power).',
          critical: true
        },
        {
          type: 'list',
          intro: 'Four factors determining resistance:',
          items: [
            'Viscosity (η): Directly proportional to R',
            'Length (L): Directly proportional to R',
            'Radius (r): Inversely proportional to R⁴ (MOST IMPORTANT)',
            'Doubling radius → 16-fold decrease in resistance'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Deviations in Real Circulation'
        },
        {
          type: 'list',
          intro: 'Five major deviations from ideal conditions:',
          items: [
            'Non-Newtonian fluid: Blood viscosity changes with shear rate (RBC aggregation at low shear)',
            'Pulsatile flow: Heart creates rhythmic contractions, not steady flow',
            'Elastic vessels: Arteries expand/contract with pressure changes (compliance)',
            'Complex geometry: Branching vessels with varying diameters cause turbulence',
            'Turbulence: Can occur in large vessels at high velocities (e.g., aorta)'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Despite deviations, the law correctly identifies all important factors affecting resistance',
          critical: true
        }
      ]
    },
    'lo-7': {
      title: 'Explain the terms laminar and turbulent flow. List the factors that shift laminar flow to turbulent flow. Reynolds number. Describe the relationship between turbulent flow with the audible events, such as murmurs and bruits.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Laminar vs Turbulent Flow'
        },
        {
          type: 'comparison',
          left: {
            title: 'Laminar Flow',
            items: [
              'Smooth, layered flow',
              'Parabolic velocity profile',
              'Quiet, energy-efficient',
              'Normal small vessels'
            ]
          },
          right: {
            title: 'Turbulent Flow',
            items: [
              'Chaotic, mixing flow',
              'Eddies and vortices',
              'Noisy, energy loss',
              'Stenosis, bifurcations'
            ]
          }
        },
        {
          type: 'list',
          intro: 'Six factors promoting turbulence:',
          items: [
            'Increased flow velocity',
            'Large vessel diameter',
            'Decreased blood viscosity (anemia)',
            'Irregular vessel geometry (plaques, stenosis)',
            'High pressure gradients (stenotic valves)',
            'Vessel branching and curvature'
          ]
        },
        {
          type: 'formula',
          formula: 'Re = (d × v × ρ) / η',
          explanation: 'Reynolds number predicts flow type. Re < 2000 = laminar, Re > 3000 = turbulent'
        },
        {
          type: 'table',
          headers: ['Audible Event', 'Cause', 'Location'],
          rows: [
            ['Murmur', 'Turbulent flow across heart valves', 'Stenotic/regurgitant valves'],
            ['Bruit', 'Turbulent flow in arteries', 'Carotid, femoral vessels']
          ]
        },
        {
          type: 'clinical',
          text: 'Presence of murmurs or bruits indicates cardiovascular abnormalities. Intensity and quality provide information about severity.'
        }
      ]
    }
  }
};

export default topic33QuickReview;
