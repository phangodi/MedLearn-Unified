/**
 * Quick Review content for Topic 42 - The function of the aorta and the arteries
 * Auto-generated - ALL 6 Learning Objectives
 */
const topic42QuickReview = {
  topicId: 'topic-42',
  topicNumber: 42,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the invasive and non-invasive methods of arterial blood pressure determinations (catheter + pressure transducer, and sphygmomanometry).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Invasive Method: Catheter + Pressure Transducer',
          critical: false
        },
        {
          type: 'list',
          intro: 'Technique and components:',
          items: [
            'Catheter inserted into radial or femoral artery',
            'Connected to fluid-filled tubing system',
            'External pressure transducer converts mechanical pressure to electrical signal',
            'Displays continuous waveform with systolic, diastolic, and mean arterial pressure'
          ],
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Advantages',
            items: [
              'Real-time continuous monitoring',
              'Highly accurate direct measurement',
              'Detailed waveform analysis',
              'Allows arterial blood gas sampling',
              'Ideal for unstable patients in ICU/surgery'
            ]
          },
          right: {
            title: 'Disadvantages',
            items: [
              'Invasive procedure',
              'Risks: infection, bleeding, arterial damage',
              'Requires trained personnel',
              'Specialized equipment needed'
            ]
          }
        },
        {
          type: 'header',
          text: 'Non-Invasive Method: Sphygmomanometry',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Measurement technique:',
          items: [
            'Cuff placed around upper arm over brachial artery',
            'Cuff inflated above systolic pressure to occlude artery',
            'Cuff slowly deflated while detecting Korotkoff sounds',
            'First sound heard = systolic pressure',
            'Sounds disappear = diastolic pressure'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Two methods of detection:',
          items: [
            'Auscultatory: stethoscope detects Korotkoff sounds (manual)',
            'Oscillometric: digital sensor measures pressure oscillations in cuff (automated)'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Non-invasive method is simple, widely available, and safe, but less accurate than invasive methods, especially in arrhythmias or very low pressures.',
          critical: false
        }
      ]
    },

    'lo-2': {
      title: 'Draw the blood pressure curve of the aorta. Give the definitions and reference values of arterial systolic, diastolic, mean, and pulse pressures.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Aortic Pressure Curve Components',
          critical: false
        },
        {
          type: 'steps',
          intro: 'The curve shows these sequential features:',
          items: [
            'Anacrotic limb (upstroke): pressure rises during ventricular ejection',
            'Systolic peak: maximum pressure reached',
            'Dicrotic notch: brief pressure drop when aortic valve closes (brief retrograde flow)',
            'Dicrotic limb (downstroke): pressure decreases during diastole',
            'End diastole: lowest pressure point before next cycle'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Pressure Definitions and Reference Values',
          critical: false
        },
        {
          type: 'table',
          headers: ['Parameter', 'Definition', 'Reference Value', 'Normal Range'],
          rows: [
            ['Systolic Pressure (SBP)', 'Maximum pressure during ventricular contraction', '120 mmHg', '90-140 mmHg'],
            ['Diastolic Pressure (DBP)', 'Minimum pressure during heart relaxation', '80 mmHg', '60-90 mmHg'],
            ['Mean Arterial Pressure (MAP)', 'Average pressure during cardiac cycle', '93 mmHg', '70-100 mmHg'],
            ['Pulse Pressure (PP)', 'Difference between systolic and diastolic', '40 mmHg', '30-50 mmHg']
          ]
        },
        {
          type: 'formula',
          formula: 'MAP = DBP + (1/3 × PP)',
          explanation: 'MAP is closer to diastolic because heart spends more time in diastole than systole',
          critical: false
        },
        {
          type: 'formula',
          formula: 'PP = SBP - DBP',
          explanation: 'Pulse pressure reflects stroke volume and arterial compliance',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Clinical significance: MAP >100 mmHg indicates hypertension; MAP <60 mmHg risks organ ischemia; widened PP >50 mmHg indicates arterial stiffness; narrowed PP <30 mmHg suggests reduced stroke volume'
        }
      ]
    },

    'lo-3': {
      title: 'Describe the Windkessel function of the aorta.',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          text: 'The Windkessel effect explains how the aorta and large elastic arteries convert pulsatile blood flow from the heart into smoother, continuous flow to tissues.',
          critical: true
        },
        {
          type: 'header',
          text: 'Mechanism During Systole (Contraction)',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Energy storage phase:',
          items: [
            'Left ventricle ejects blood into aorta with high pressure',
            'Elastic aortic wall stretches to accommodate blood volume',
            'Stretching stores ejected blood energy as elastic potential energy',
            'Elastic expansion prevents excessive systolic pressure increases',
            'Reduces immediate resistance against the heart'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Mechanism During Diastole (Relaxation)',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Energy release phase:',
          items: [
            'Heart relaxes and aortic valve closes (prevents backflow)',
            'Aortic wall recoils due to elasticity',
            'Recoil releases stored elastic potential energy',
            'Propels blood forward into systemic circulation',
            'Ensures blood flow even when heart not actively pumping'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Key Functions',
          critical: true
        },
        {
          type: 'list',
          intro: 'The Windkessel effect provides:',
          items: [
            'Energy storage during systole and release during diastole',
            'Smoothing of pulsatile cardiac output into continuous flow in capillaries',
            'Pressure regulation preventing extreme fluctuations',
            'Protection of delicate microcirculatory systems'
          ],
          critical: true
        },
        {
          type: 'clinical',
          text: 'With aging, aortic elasticity decreases, reducing Windkessel effect and leading to increased pulse pressure and systolic hypertension'
        }
      ]
    },

    'lo-4': {
      title: 'Describe the effects of changes in a) stroke volume, b) arterial compliance, and c) total peripheral resistance, on arterial systolic, diastolic, mean, and pulse pressure values.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Effects of Stroke Volume Changes',
          critical: false
        },
        {
          type: 'table',
          headers: ['Parameter', 'Increased SV', 'Decreased SV'],
          rows: [
            ['Systolic Pressure', '↑ (more blood ejected)', '↓'],
            ['Diastolic Pressure', '→ or ↑ slightly', '→ or ↓ slightly'],
            ['Mean Arterial Pressure', '↑ (MAP = CO × TPR)', '↓'],
            ['Pulse Pressure', '↑ (SBP rises more than DBP)', '↓']
          ]
        },
        {
          type: 'header',
          text: 'Effects of Arterial Compliance Changes',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Decreased Compliance (aging, arteriosclerosis)',
            items: [
              'Systolic: ↑ (stiffer arteries can\'t absorb pressure)',
              'Diastolic: ↓ (less elastic recoil)',
              'MAP: → or ↑ slightly',
              'Pulse Pressure: ↑↑ markedly (widened, classic in elderly)'
            ]
          },
          right: {
            title: 'Increased Compliance (elastic arteries)',
            items: [
              'Systolic: ↓',
              'Diastolic: ↑',
              'MAP: → (if CO and TPR constant)',
              'Pulse Pressure: ↓'
            ]
          }
        },
        {
          type: 'header',
          text: 'Effects of Total Peripheral Resistance Changes',
          critical: false
        },
        {
          type: 'table',
          headers: ['Parameter', 'Increased TPR (vasoconstriction)', 'Decreased TPR (vasodilation)'],
          rows: [
            ['Systolic Pressure', '↑', '↓ or →'],
            ['Diastolic Pressure', '↑↑ (less runoff during diastole)', '↓'],
            ['Mean Arterial Pressure', '↑', '↓'],
            ['Pulse Pressure', '↓ (DBP affected more)', '↑ (SBP preserved, DBP falls)']
          ]
        },
        {
          type: 'keypoint',
          text: 'Key principle: Increased TPR mainly affects diastolic pressure, while increased stroke volume mainly affects systolic pressure and pulse pressure.',
          critical: false
        }
      ]
    },

    'lo-5': {
      title: 'Describe the propagation of the pressure pulse, the changes in the shape of the pressure waveform from the aorta to the peripheral arteries. Contrast the pressure pulse with the flow pulse.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Pressure Pulse Propagation',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'The pressure pulse is a wave of pressure (not blood movement) that propagates along arterial walls at pulse wave velocity (PWV).',
          critical: false
        },
        {
          type: 'table',
          headers: ['Location', 'Pulse Wave Velocity'],
          rows: [
            ['Aorta', '3-5 m/s (more compliant)'],
            ['Small arteries', '15-30 m/s (stiffer)']
          ]
        },
        {
          type: 'paragraph',
          text: 'PWV is faster in stiffer arteries and slower in compliant arteries. Factors increasing PWV: decreased elasticity, increased wall thickness, decreased vascular radius.',
          critical: false
        },
        {
          type: 'header',
          text: 'Waveform Changes Toward Periphery',
          critical: false
        },
        {
          type: 'list',
          intro: 'From aorta to peripheral arteries:',
          items: [
            'Systolic pressure increases (wave reflection adds to forward wave, reduced compliance)',
            'Diastolic pressure remains similar or slightly lower',
            'Pulse pressure widens (increased PP peripherally)',
            'Dicrotic notch disappears',
            'Diastolic peak appears',
            'Waveform becomes sharper and more peaked',
            'Systolic peak occurs slightly later (travel time delay)'
          ],
          critical: false
        },
        {
          type: 'paragraph',
          text: 'In the aorta, the waveform is smoother and more rounded due to aortic wall compliance. Peripheral waveform distortion results from wave reflection and faster transmission.',
          critical: false
        },
        {
          type: 'header',
          text: 'Pressure Pulse vs Flow Pulse',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Pressure Pulse',
            items: [
              'Wave of pressure traveling along arterial wall',
              'Velocity: 3-30 m/s',
              'Increases toward periphery',
              'Reflects mechanical wave propagation'
            ]
          },
          right: {
            title: 'Flow Pulse',
            items: [
              'Actual movement of blood through arteries',
              'Velocity: 20-30 cm/s in aorta',
              'Decreases toward periphery',
              'Reflects blood flow speed'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Critical difference: Pressure pulse propagates much faster (m/s) than blood flow (cm/s). Pressure increases peripherally while flow decreases.',
          critical: false
        }
      ]
    },

    'lo-6': {
      title: 'Describe the arterial pulse qualities assessed with palpation.',
      isCritical: true,
      blocks: [
        {
          type: 'paragraph',
          text: 'The arterial pulse reflects pressure changes transmitted along arteries, creating a volume pulse palpated by pressing arteries against a hard surface. Pulse depends on both heart function and arterial properties.',
          critical: true
        },
        {
          type: 'header',
          text: '1. Rate (Frequency)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Number of pulses per minute:',
          items: [
            'Normal: 60-100 bpm in adults',
            'Tachycardia (frequens): >100 bpm - indicates fever, anxiety, hyperthyroidism',
            'Bradycardia (rarus): <60 bpm - indicates athlete\'s heart, hypothyroidism'
          ],
          critical: true
        },
        {
          type: 'header',
          text: '2. Rhythm (Rhythmicity)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Regularity of pulse intervals:',
          items: [
            'Regular (regularis): equal intervals between beats, normal sinus rhythm',
            'Irregular (irregularis): unequal intervals',
            'Regularly irregular: predictable irregularity pattern',
            'Irregularly irregular: unpredictable irregularity, indicates atrial fibrillation'
          ],
          critical: true
        },
        {
          type: 'header',
          text: '3. Amplitude/Volume (Pulse Wave Amplitude)',
          critical: true
        },
        {
          type: 'table',
          headers: ['Finding', 'Latin Term', 'Clinical Significance'],
          rows: [
            ['Bounding pulse', 'Altus', 'Strong/forceful - hyperdynamic circulation, aortic regurgitation'],
            ['Weak pulse', 'Parvus', 'Faint/weak - hypovolemia, heart failure'],
            ['Absent pulse', '-', 'Arterial occlusion or shock']
          ]
        },
        {
          type: 'header',
          text: '4. Contour/Character (Steepness)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Wave shape and rise/fall speed:',
          items: [
            'Normal: smooth rounded shape, quick upstroke, gradual downstroke',
            'Rapid rise (celer): hyperdynamic circulation',
            'Slow rise (tardus): aortic stenosis',
            'Bisferiens: two systolic peaks',
            'Dicrotic: palpable secondary diastolic wave'
          ],
          critical: true
        },
        {
          type: 'header',
          text: '5. Pulse Suppression (Hardness)',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Hard (Durus)',
            items: [
              'Difficult to compress',
              'High vascular tone',
              'Stiff arterial walls'
            ]
          },
          right: {
            title: 'Soft (Mollis)',
            items: [
              'Easy to compress',
              'Low vascular tone',
              'In hypovolemia: parvus + frequent + mollis'
            ]
          }
        },
        {
          type: 'header',
          text: '6. Symmetry',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Comparing pulse on both sides of the body. Asymmetry indicates localized arterial obstruction such as atherosclerosis or aortic dissection.',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Classic example - Hypovolemic shock: pulse is parvus (weak), frequens (rapid), and mollis (soft/easy to compress)'
        },
        {
          type: 'keypoint',
          text: 'Pulsus equalis: when fullness, height, speed, and hardness are equal. Absolute arrhythmia (irregularis et inaequalis): different intervals AND different pulse fullness.',
          critical: true
        }
      ]
    }
  }
};

export default topic42QuickReview;
