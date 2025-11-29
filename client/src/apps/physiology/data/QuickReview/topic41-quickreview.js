/**
 * Quick Review content for Topic 41 - Hemodynamics: the functional categorization of blood vessels
 * Auto-generated - ALL 8 Learning Objectives
 */
const topic41QuickReview = {
  topicId: 'topic-41',
  topicNumber: 41,
  learningObjectives: {
    'lo-1': {
      title: 'Explain the concept of transmural pressure of blood vessels.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Transmural Pressure Basics',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Transmural pressure is the pressure difference across the vessel wall, determining the distending force. When positive (Pinside > Poutside), vessels distend and maintain flow. When negative (Poutside > Pinside), vessels collapse, reducing or halting flow.',
          critical: false
        },
        {
          type: 'formula',
          formula: 'Ptm = Pinside - Poutside',
          explanation: 'Transmural pressure equals intraluminal pressure minus extravascular tissue pressure',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Veins are highly sensitive to transmural pressure changes, greatly affecting venous return and capacitance',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Elevated intracranial pressure can reduce transmural pressure and compromise cerebral perfusion'
        }
      ]
    },
    'lo-2': {
      title: '>>Explain the concept of vascular compliance, give the formula for its determination<< (C=∆V/∆P).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Vascular Compliance Definition',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Vascular compliance measures a vessel\'s ability to expand and increase volume in response to increased pressure. It quantifies vessel distensibility.',
          critical: true
        },
        {
          type: 'formula',
          formula: 'C = ΔV / ΔP',
          explanation: 'Compliance equals change in volume (mL) divided by change in pressure (mmHg or kPa)',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'High Compliance (Veins)',
            items: [
              'Hold large volume with small pressure increase',
              'Act as capacitance vessels',
              'Store most blood volume at low pressures',
              'Compliance ~24x that of arteries'
            ]
          },
          right: {
            title: 'Low Compliance (Arteries)',
            items: [
              'Resist expansion',
              'Small volume increase = large pressure increase',
              'Designed to withstand high pressures',
              'Thick elastic walls and smooth muscle'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Venous compliance is approximately 24 times that of corresponding arteries',
          critical: true
        }
      ]
    },
    'lo-3': {
      title: 'Which two main factors determine vascular compliance (starting volume and distensibility)?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Two Main Determinants of Compliance',
          critical: false
        },
        {
          type: 'list',
          intro: 'Compliance depends on:',
          items: [
            'Starting volume (baseline volume): Initial blood volume affects ability to expand further',
            'Distensibility (elastic properties): Intrinsic elasticity of vessel wall determining ease of stretching'
          ],
          critical: false
        },
        {
          type: 'formula',
          formula: 'Compliance = Distensibility × Initial volume',
          explanation: 'Relationship between compliance and its two determinants',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Low Baseline Volume',
            items: [
              'More compliant',
              'More room for expansion',
              'Easier to stretch'
            ]
          },
          right: {
            title: 'High Baseline Volume',
            items: [
              'Less compliant',
              'Approaching elastic limit',
              'Harder to stretch further'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Venous distensibility is approximately 8 times that of the arterial system, contributing to their 24x higher compliance',
          critical: false
        }
      ]
    },
    'lo-4': {
      title: 'Characterize the different vascular segments based on their compliance.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Vascular Segments by Compliance',
          critical: false
        },
        {
          type: 'table',
          headers: ['Segment', 'Compliance Level', 'Key Characteristics'],
          rows: [
            ['Arteries', 'Low', 'Thick elastic walls, resist expansion, designed for high pressure'],
            ['Arterioles', 'Very Low', 'Lowest compliance, resistance regulation, negligible volume changes'],
            ['Capillaries', 'Minimal', 'Essentially non-compliant, designed for exchange not storage'],
            ['Veins', 'High', 'Capacitance vessels, store 60-70% of blood volume at low pressures']
          ]
        },
        {
          type: 'keypoint',
          text: 'Veins are capacitance vessels with compliance ~24 times higher than arteries, storing 60-70% of total blood volume',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Compliance is inversely related to pressure in arteries. At higher pressures, arteries become less compliant.',
          critical: false
        },
        {
          type: 'clinical',
          text: 'With aging, arterial walls become stiffer and less compliant, leading to increased arterial pressure (isolated systolic hypertension)'
        }
      ]
    },
    'lo-5': {
      title: 'Explain the concept of critical closing pressure.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Critical Closing Pressure (CCP)',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Critical closing pressure is the lowest perfusion pressure at which a vessel remains open and blood flow is maintained. Below this threshold, the vessel collapses.',
          critical: false
        },
        {
          type: 'list',
          intro: 'CCP is a positive value determined by:',
          items: [
            'Vascular smooth muscle tone: Exerts compressive force on lumen',
            'Extravascular pressure: Surrounding tissue pressure contributes to closure',
            'Sympathetic activation: Increases smooth muscle contraction, raising CCP'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'When arterial pressure falls below CCP, vessels collapse due to combined effects of smooth muscle tension and external pressure',
          critical: false
        },
        {
          type: 'clinical',
          text: 'In arteries, CCP is higher than average circulatory filling pressure after death (~7 mmHg), so arteries collapse and fill with air during autopsy. In veins with lower pressures, CCP is more clinically significant and can lead to collapse under low flow conditions.'
        }
      ]
    },
    'lo-6': {
      title: 'Describe the relationship among wall tension, transmural pressure, vessel radius and wall thickness using the equation of Laplace\'s law. Based on the relationship, in which vessel segment is the rupture of the vessel due to high wall tension most likely?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Laplace\'s Law for Blood Vessels',
          critical: false
        },
        {
          type: 'formula',
          formula: 'T = (Pt × r) / h',
          explanation: 'Wall tension equals transmural pressure times radius divided by wall thickness',
          critical: false
        },
        {
          type: 'list',
          intro: 'Wall tension is:',
          items: [
            'Directly proportional to transmural pressure (Pt)',
            'Directly proportional to vessel radius (r)',
            'Inversely proportional to wall thickness (h)'
          ],
          critical: false
        },
        {
          type: 'table',
          headers: ['Vessel Type', 'Rupture Risk', 'Reasoning'],
          rows: [
            ['Veins', 'Low', 'Low pressure, large radius'],
            ['Capillaries', 'Low', 'Low pressure, small radius'],
            ['Arterioles', 'Low', 'High pressure, but small radius and thick wall'],
            ['Muscular arteries', 'Low', 'High pressure, but medium radius and thick wall'],
            ['Aorta / Elastic arteries', 'HIGH', 'High pressure + large radius + relatively thin wall']
          ]
        },
        {
          type: 'keypoint',
          text: 'Vessel rupture is most likely in the aorta and large elastic arteries due to highest wall tension',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Wall weakening can initiate a vicious cycle of aneurysm formation. Aneurysms further increase radius, dramatically raising wall tension and rupture risk according to Laplace\'s law.'
        }
      ]
    },
    'lo-7': {
      title: 'Give the definitions of hydraulic resistance and conductance. Explain the effects of adding resistance in series vs. in parallel on total resistance.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Hydraulic Resistance and Conductance',
          critical: false
        },
        {
          type: 'formula',
          formula: 'R = ΔP / Q',
          explanation: 'Resistance equals pressure difference divided by flow rate. Units: mmHg·min/L',
          critical: false
        },
        {
          type: 'formula',
          formula: 'G = 1 / R = Q / ΔP',
          explanation: 'Conductance is the reciprocal of resistance. Units: L/min/mmHg',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Resistances in Series',
            items: [
              'Rtotal = R₁ + R₂ + R₃...',
              'Increases total resistance',
              'Reduces overall flow',
              'Example: Arteries → Arterioles → Capillaries → Veins'
            ]
          },
          right: {
            title: 'Resistances in Parallel',
            items: [
              '1/Rtotal = 1/R₁ + 1/R₂ + 1/R₃...',
              'Decreases total resistance',
              'Increases overall flow',
              'Example: Capillary beds with many vessels'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Resistance is inversely proportional to the fourth power of radius (r⁴) by Poiseuille\'s law',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Different vessel types are connected in series, but within each type, vessels are connected in parallel. Organs of systemic circulation are connected in parallel.',
          critical: false
        }
      ]
    },
    'lo-8': {
      title: '>>Characterize the contribution of arteries, arterioles, capillaries, venules, and veins to peripheral vascular resistance. Contrast blood pressure, cross sectional area, flow velocity, and blood volume in these vascular segments.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Hemodynamics Across Vascular Segments',
          critical: true
        },
        {
          type: 'table',
          headers: ['Segment', 'PVR Contribution', 'Pressure (mmHg)', 'Cross-Sectional Area', 'Flow Velocity', 'Blood Volume'],
          rows: [
            ['Arteries', 'Minimal', '120/80 (aorta)', 'Small (aorta: 4 cm²)', 'Highest (22.5 cm/s)', '10-15%'],
            ['Arterioles', '50-70% of PVR', '80 → 30 (Δ60)', 'Greater than arteries', 'Decreases', 'Very small'],
            ['Capillaries', 'Moderate (parallel ↓R)', '30 → 10', 'Largest (3000 cm²)', 'Lowest (0.03 cm/s)', '~5%'],
            ['Venules', 'Low', '~10', 'Decreases vs capillaries', 'Increases', 'Moderate'],
            ['Veins', 'Minimal', 'Near 0', 'Small vs capillaries', 'Moderate, increasing', '60-70%']
          ]
        },
        {
          type: 'keypoint',
          text: 'Arterioles are the primary site of vascular resistance, accounting for 50-70% of total PVR, with the largest pressure drop (60 mmHg)',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Capillaries have the largest cross-sectional area (3000 cm², ~600-800x aorta) and lowest flow velocity (0.03 cm/s), allowing time for exchange',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Veins contain 60-70% of total blood volume due to high compliance, acting as the largest blood volume reservoir',
          critical: true
        },
        {
          type: 'formula',
          formula: 'v = Q / A',
          explanation: 'Flow velocity is inversely proportional to cross-sectional area',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Control of arterial blood pressure occurs primarily at the arterioles. Total peripheral resistance (TPR) is determined mainly by arteriolar resistance, which can be dynamically adjusted through vasoconstriction and vasodilation.'
        }
      ]
    }
  }
};

export default topic41QuickReview;
