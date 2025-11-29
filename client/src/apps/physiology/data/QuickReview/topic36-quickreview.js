/**
 * Quick Review content for Topic 36 - Cardiac cycle. The jugular pulse.
 * Auto-generated - ALL 6 Learning Objectives
 */
const topic36QuickReview = {
  topicId: 'topic-36',
  topicNumber: 36,
  learningObjectives: {
    'lo-1': {
      title: 'Draw, in temporal relationship, the pressure changes in the left atrium, ventricle and in the aorta, the volume changes of the left ventricle, and the valve positions during the mechanical cardiac cycle.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Pressure and Volume Changes in Cardiac Cycle',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Cardiac cycle duration: 0.8 seconds (270 ms systole + 530 ms diastole) at 75 bpm',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Left Atrial Pressure',
            items: [
              'Relatively constant: 6-8 mmHg',
              'a-wave: Atrial contraction',
              'c-wave: Mitral valve bulging',
              'v-wave: Atrial filling during systole'
            ]
          },
          right: {
            title: 'Left Ventricular Pressure',
            items: [
              'Diastole: 6-8 mmHg',
              'Systole peak: 120 mmHg',
              'Rapid rise during contraction',
              'Returns to 6-8 mmHg in relaxation'
            ]
          }
        },
        {
          type: 'list',
          intro: 'Aortic pressure fluctuations:',
          critical: true,
          items: [
            'Systolic pressure: 120 mmHg (during ejection)',
            'Diastolic pressure: 80 mmHg',
            'Gradual decrease during diastole',
            'Pressure gradient drives blood flow'
          ]
        },
        {
          type: 'formula',
          formula: 'Stroke Volume = EDV - ESV = 110-160 mL - 40-80 mL = 70-80 mL',
          explanation: 'Left ventricular volume decreases from end-diastolic volume to end-systolic volume during ejection',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Valve timing is pressure-dependent: Mitral valve opens/closes based on LA vs LV pressure; Aortic valve opens/closes based on LV vs aortic pressure'
        }
      ]
    },
    'lo-2': {
      title: 'Identify the phases of the cardiac cycle on the graph.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Seven Phases of the Cardiac Cycle'
        },
        {
          type: 'steps',
          intro: 'Systole phases (270 ms):',
          items: [
            'Isovolumetric contraction: All valves closed, pressure rises, no volume change',
            'Maximal (rapid) ejection: Aortic valve opens, rapid blood expulsion',
            'Decreased ejection: Ejection slows as repolarization begins'
          ]
        },
        {
          type: 'steps',
          intro: 'Diastole phases (530 ms):',
          items: [
            'Isovolumetric relaxation: All valves closed, pressure drops, no volume change',
            'Rapid filling: Mitral valve opens, 70-80% filling occurs passively',
            'Slow filling (diastasis): Passive filling continues at reduced rate',
            'Atrial contraction: Active atrial systole provides final 20-30% filling'
          ]
        },
        {
          type: 'keypoint',
          text: 'Isovolumetric phases appear as vertical lines on pressure-volume loops (no volume change)'
        },
        {
          type: 'clinical',
          text: 'The characteristic counterclockwise pattern on PV loops helps identify cardiac pathology and contractility changes'
        }
      ]
    },
    'lo-3': {
      title: 'Define stroke volume, cardiac output, cardiac index, and ejection fraction and give their reference values.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Cardiac Performance Parameters',
          critical: true
        },
        {
          type: 'table',
          headers: ['Parameter', 'Formula', 'Reference Value'],
          rows: [
            ['Stroke Volume (SV)', 'EDV - ESV', '70-80 mL (rest), 125 mL (max work)'],
            ['Cardiac Output (CO)', 'SV × HR', '5.5 L/min (rest), 24 L/min (max work)'],
            ['Cardiac Index (CI)', 'CO / BSA', '3.2 L/min/m²'],
            ['Ejection Fraction (EF)', '(SV/EDV) × 100', '50-70%']
          ]
        },
        {
          type: 'keypoint',
          text: 'EDV = 110-160 mL, ESV = 40-80 mL at rest',
          critical: true
        },
        {
          type: 'list',
          intro: 'Key concepts:',
          critical: true,
          items: [
            'SV: Volume ejected per beat',
            'CO: Total blood pumped per minute',
            'CI: CO normalized to body surface area',
            'EF: Percentage of EDV ejected per beat (pumping efficiency)'
          ]
        },
        {
          type: 'clinical',
          text: 'Ejection fraction <40% indicates systolic heart failure; EF is preserved in diastolic dysfunction'
        }
      ]
    },
    'lo-4': {
      title: 'Know the factors that contribute to the formation of cardiac sounds. Describe the timing, causes and location of the 1st and 2nd heart sounds.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Heart Sounds and Their Origins',
          critical: true
        },
        {
          type: 'list',
          intro: 'Factors contributing to cardiac sound formation:',
          critical: true,
          items: [
            'Valve closure causing abrupt blood flow changes',
            'Sudden tensing of chordae tendineae',
            'Elastic recoil of valve leaflets',
            'Deceleration of blood flow creating vibrations',
            'Transmission through myocardium and chest wall'
          ]
        },
        {
          type: 'comparison',
          left: {
            title: 'S1 - "LUB"',
            items: [
              'Timing: Onset of systole',
              'Cause: AV valve closure (mitral + tricuspid)',
              'Location: Apex (5th ICS, MCL)',
              'Low-pitched, longer duration',
              'Marks start of ventricular contraction'
            ]
          },
          right: {
            title: 'S2 - "DUB"',
            items: [
              'Timing: Onset of diastole',
              'Cause: Semilunar valve closure (aortic + pulmonary)',
              'Location: Base (2nd ICS)',
              'High-pitched, shorter duration',
              'A2 (right sternal), P2 (left sternal)'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Auscultation locations: Aortic 2R2, Pulmonary 2L2, Tricuspid 4-5R1, Mitral 5L6-8',
          critical: true
        },
        {
          type: 'clinical',
          text: 'S2 splitting (A2-P2 separation) is physiologic during inspiration; fixed splitting suggests ASD, wide splitting suggests RBBB'
        }
      ]
    },
    'lo-5': {
      title: 'Explain the push-pull characteristic of the cardiac pump and the valve-plane mechanism.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Cardiac Pump Mechanics'
        },
        {
          type: 'comparison',
          left: {
            title: 'Push Phase (Systole)',
            items: [
              'Ventricles contract actively',
              'Blood expelled into arteries',
              'LV → Aorta',
              'RV → Pulmonary artery',
              'High-pressure ejection'
            ]
          },
          right: {
            title: 'Pull Phase (Diastole)',
            items: [
              'Ventricular relaxation',
              'Negative pressure created',
              'Blood drawn from veins → atria',
              'Passive atrial filling',
              'Prepares for next cycle'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Push-pull coordination ensures continuous blood flow: while ventricles expel, atria simultaneously fill'
        },
        {
          type: 'steps',
          intro: 'Valve-plane mechanism:',
          items: [
            'During systole: AV valve plane moves downward toward apex',
            'Creates negative pressure in atria (enhances venous return)',
            'During diastole: Valve plane moves upward',
            'Increases atrial pressure (propels blood into ventricles)',
            'Dynamic movement optimizes filling and ejection efficiency'
          ]
        },
        {
          type: 'clinical',
          text: 'The valve-plane mechanism contributes to the jugular venous pulse waveform and enhances cardiac efficiency'
        }
      ]
    },
    'lo-6': {
      title: 'Explain the pressure changes in the right atrium during the cardiac cycle and how these changes contribute to the jugular pulse.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Right Atrial Pressure and Jugular Pulse'
        },
        {
          type: 'keypoint',
          text: 'Right atrial pressure: 0-2 mmHg with characteristic waveform oscillations transmitted to jugular veins'
        },
        {
          type: 'table',
          headers: ['Wave/Descent', 'Timing', 'Cause'],
          rows: [
            ['a-wave', 'End-diastole', 'Atrial contraction (systole)'],
            ['c-wave', 'Early systole', 'Tricuspid valve bulging during isovolumetric contraction'],
            ['x-descent', 'Systole', 'Atrial relaxation + valve plane moves down'],
            ['v-wave', 'Late systole', 'Atrial filling against closed tricuspid valve'],
            ['y-descent', 'Early diastole', 'Tricuspid valve opens, atrium empties rapidly']
          ]
        },
        {
          type: 'list',
          intro: 'Jugular pulse characteristics:',
          items: [
            'Reflects right atrial pressure oscillations',
            'Visible during increased venous pressure (Valsalva, weight lifting)',
            'Normally physiologically invisible at rest',
            'Transmitted through internal jugular vein',
            'Waveform analysis aids in cardiac diagnosis'
          ]
        },
        {
          type: 'clinical',
          text: 'Abnormal JVP: Giant a-waves (tricuspid stenosis, right heart failure), cannon a-waves (AV dissociation), prominent v-waves (tricuspid regurgitation)'
        }
      ]
    }
  }
};

export default topic36QuickReview;
