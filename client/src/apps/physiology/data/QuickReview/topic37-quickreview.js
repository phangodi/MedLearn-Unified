/**
 * Quick Review content for Topic 37 - Preload and afterload, the Frank-Starling law of the heart
 * Auto-generated - ALL 5 Learning Objectives
 */
const topic37QuickReview = {
  topicId: 'topic-37',
  topicNumber: 37,
  learningObjectives: {
    'lo-1': {
      title: 'Draw and describe the length-tension relationship in a single cardiac cell. Correlate the cellular characteristics of length, tension, and velocity of shortening with the intact ventricle characteristics of end diastolic volume, pressure, and dP/dt. Draw the ventricular function curve into the volume-pressure graph.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Length-Tension Relationship: Cell to Ventricle',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Cellular Level',
            items: [
              'Sarcomere length (~2.2 μm optimal)',
              'Active tension (cross-bridges)',
              'Passive tension (titin stretch)',
              'Velocity of shortening'
            ]
          },
          right: {
            title: 'Ventricular Level',
            items: [
              'End-diastolic volume (EDV)',
              'Systolic pressure curve (green)',
              'Diastolic pressure curve (blue)',
              'Rate of ejection (dP/dt max)'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Optimal sarcomere length (~2.2 μm) provides maximum actin-myosin overlap for strongest contraction, correlating with peak systolic pressure at 150-170 mL ventricular volume',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'The ventricular function curve plots pressure against volume with two key curves: the diastolic pressure curve (blue) shows passive tension during filling with steep rise above 150 mL, while the systolic pressure curve (green) shows active tension peaking at optimal volume then declining with overstretching.',
          critical: false
        },
        {
          type: 'clinical',
          text: 'dP/dt max occurs during isovolumic contraction when both valves are closed, indicating contractility and velocity of fiber shortening. Normal left ventricle generates 250-300 mmHg max, while right ventricle generates only 60-80 mmHg due to low-pressure pulmonary circulation.'
        }
      ]
    },
    'lo-2': {
      title: '>>Define preload.<< (the maximal tension of the ventricular wall BEFORE the systole). Why can end-diastolic ventricular pressure, atrial pressure and central venous pressure be used for estimating the preload, and why is the ventricular pressure the most reliable method for the estimation?',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Preload Definition and Measurement',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'PRELOAD: Maximal tension of ventricular wall BEFORE systole - the initial stretching of cardiac muscle fibers at end of diastole, influenced by end-diastolic volume (EDV)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Three pressure measurements can estimate preload:',
          items: [
            'End-diastolic ventricular pressure (EDP): Directly reflects pressure within ventricles when filled at end of diastole',
            'Atrial pressure: Reflects filling pressure that propels blood into ventricles during diastole',
            'Central venous pressure (CVP): Estimates right atrial pressure and indicates volume status affecting right ventricular filling'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'EDP is MOST RELIABLE because it directly measures ventricular conditions with minimal external influences, unlike atrial pressure and CVP which are affected by compliance, respiratory changes, and venous return fluctuations',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Greater preload (increased EDV) increases force of contraction via Frank-Starling mechanism - optimal cross-bridge formation within sarcomeres increases stroke volume proportionally'
        }
      ]
    },
    'lo-3': {
      title: '>>Define afterload.<< (the maximal tension of the ventricular wall DURING the systole). Why can systolic arterial pressure be used for estimating the afterload?',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Afterload Definition and Estimation',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'AFTERLOAD: Maximal tension of ventricular wall DURING systole - the resistance the heart must overcome to eject blood during contraction',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Left Ventricle',
            items: [
              'Must overcome aortic pressure',
              'Systolic arterial pressure ~120 mmHg',
              'High-pressure systemic circulation',
              'Max pressure: 250-300 mmHg'
            ]
          },
          right: {
            title: 'Right Ventricle',
            items: [
              'Must overcome pulmonary artery pressure',
              'Systolic pressure ~25 mmHg',
              'Low-pressure pulmonary circulation',
              'Max pressure: 60-80 mmHg'
            ]
          }
        },
        {
          type: 'paragraph',
          text: 'Systolic arterial pressure estimates afterload because during systole, the ventricle must generate pressure exceeding this aortic pressure to open the aortic valve and initiate blood flow. Higher systolic pressure means greater resistance and increased afterload.',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Increased afterload decreases stroke volume, while decreased afterload increases stroke volume when contractility remains constant. Afterload is also influenced by arterial compliance and vascular resistance.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the Starling heart-lung preparation and use it to demonstrate how a denervated (transplanted) heart can adapt to changes in the preload and afterload. >>Phrase the Frank-Starling law of the heart.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Starling Heart-Lung Preparation',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'The Starling heart-lung preparation isolates the denervated heart and lungs of an animal while maintaining blood flow through an artificial circulation loop. This allows precise control of blood volume (preload) and resistance (afterload) without neural or hormonal input.',
          critical: true
        },
        {
          type: 'steps',
          intro: 'How a denervated heart adapts intrinsically:',
          items: [
            'Preload increase: Greater venous return → increased EDV → ventricular fibers stretch → stronger contraction (optimal actin-myosin overlap) → increased stroke volume',
            'Afterload increase: Added outflow resistance → heart increases contractile force to maintain stroke volume (less pronounced than preload response)'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'FRANK-STARLING LAW: The force of contraction of cardiac muscle is directly proportional to the initial length of muscle fibers (degree of stretch) at end of diastole',
          critical: true
        },
        {
          type: 'clinical',
          text: 'This intrinsic mechanism is crucial for transplanted hearts which lack neural regulation. The heart automatically matches output to venous return, maintaining cardiac output without external control.'
        }
      ]
    },
    'lo-5': {
      title: 'What is the role of the Frank-Starling law of the heart in keeping the cardiac output of the left and right ventricles equal?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Balancing Left and Right Ventricular Output',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'The Frank-Starling law ensures beat-by-beat balance between right and left ventricular output by automatically adjusting stroke volume in response to preload changes',
          critical: false
        },
        {
          type: 'steps',
          intro: 'How automatic balance works:',
          items: [
            'Right ventricle receives blood from systemic circulation and pumps to pulmonary circulation',
            'Left ventricle receives blood from pulmonary circulation and pumps to systemic circulation',
            'If RV pumps more → increased pulmonary return → increased left atrial filling → increased LV end-diastolic volume (preload)',
            'Increased LV preload → Frank-Starling mechanism → stronger LV contraction → increased LV stroke volume to match RV output'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Without this mechanism, blood would accumulate in either pulmonary circulation (causing pulmonary edema) or systemic circulation (causing systemic edema). The ventricles are connected in series, so outputs must remain equal.'
        },
        {
          type: 'paragraph',
          text: 'This intrinsic equilibrium operates continuously with each cardiac cycle without requiring external neural or hormonal control, providing moment-to-moment correction of small output differences.',
          critical: false
        }
      ]
    }
  }
};

export default topic37QuickReview;
