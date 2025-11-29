const topic47QuickReview = {
  topicId: 'topic-47',
  topicNumber: 47,
  learningObjectives: {
    'lo-1': {
      title: 'Understand the principles underlying cardiac output measurements using the Fick principle, dye dilution, and thermodilution methods',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Fick Principle',
          critical: true
        },
        {
          type: 'formula',
          formula: 'CO = VO₂ / (CaO₂ - CvO₂)',
          explanation: 'Cardiac output calculated from oxygen consumption divided by arteriovenous oxygen content difference',
          critical: true
        },
        {
          type: 'list',
          intro: 'Fick principle components:',
          items: [
            'VO₂ measured by spirometry',
            'CaO₂ from arterial blood sampling',
            'CvO₂ from pulmonary artery catheter (mixed venous blood)'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Dye Dilution Method',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Dye dilution procedure:',
          items: [
            'Inject known quantity of dye (indocyanine green) into central vein',
            'Measure concentration downstream in peripheral artery using photodetector',
            'Calculate CO from dose divided by area under concentration-time curve'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Dye concentration is inversely proportional to cardiac output',
          critical: false
        },
        {
          type: 'header',
          text: 'Thermodilution Method',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Thermodilution procedure:',
          items: [
            'Inject cold saline into right atrium via pulmonary artery catheter',
            'Measure temperature changes in pulmonary artery',
            'Specialized algorithm calculates CO from temperature difference and injection volume'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Temperature change is inversely proportional to cardiac output',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Fick most accurate but invasive; thermodilution most common bedside method; dye dilution useful but less common'
        }
      ]
    },
    'lo-2': {
      title: 'Know how cardiac function (output) curves are generated and how factors which cause changes in contractility in the heart can alter the shape of cardiac function curves',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Cardiac function curves (Starling curves) plot cardiac output against right atrial pressure to show how the heart responds to varying preload',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Generating the curve:',
          items: [
            'Measure cardiac output at different levels of right atrial pressure',
            'RAP indicates ventricular preload',
            'Plot CO on y-axis, RAP on x-axis',
            'Curve ascends steeply at lower RAPs, plateaus at higher pressures'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Plateau indicates maximum pumping capacity - heart cannot increase stroke volume despite further preload increases',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Increased Contractility',
            items: [
              'Curve shifts upward and leftward',
              'Higher CO at any given RAP',
              'Caused by sympathetic stimulation',
              'Caused by inotropic drugs',
              'More forceful contractions'
            ]
          },
          right: {
            title: 'Decreased Contractility',
            items: [
              'Curve shifts downward and rightward',
              'Lower CO at any given RAP',
              'Seen in heart failure',
              'Weaker contractions',
              'Reduced stroke volume'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Frank-Starling mechanism: increased preload increases end-diastolic volume and stroke volume',
          critical: false
        }
      ]
    },
    'lo-3': {
      title: 'Understand the concept of "mean vascular filling pressure", its normal value, and how various factors can alter its value',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Mean vascular filling pressure is the pressure throughout the vasculature if the heart stopped and blood redistributed evenly - it reflects static filling pressure',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Normal MVFP = 7 mmHg',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'MVFP is determined by blood volume and vascular compliance, with veins containing 70-80% of blood volume',
          critical: false
        },
        {
          type: 'list',
          intro: 'Factors increasing MVFP:',
          items: [
            'Increased blood volume (transfusion, fluid overload)',
            'Venoconstriction from sympathetic activation (reduces venous compliance)',
            'Lying down (restores venous return from lower limbs)'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Factors decreasing MVFP:',
          items: [
            'Decreased blood volume (hemorrhage, dehydration)',
            'Venodilation (increases venous compliance)',
            'Standing (increases hydrostatic pressure in lower limbs)'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'MVFP represents driving force for venous return - venous return proportional to gradient between MVFP and central venous pressure',
          critical: false
        }
      ]
    },
    'lo-4': {
      title: 'Define venous return. Understand the concept of "resistance to venous return" and know what factors determine its value theoretically, what factors are most important in practice, and how various interventions would change the resistance to venous return',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Venous return is the volume of blood flowing back to the right atrium per unit time from systemic circulation - essential for maintaining cardiac output',
          critical: false
        },
        {
          type: 'formula',
          formula: 'VR = (MVFP - CVP) / RVR',
          explanation: 'Venous return driven by pressure gradient divided by resistance to venous return',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Resistance to venous return opposes blood flow back to the heart, influenced by vessel diameter, tone, and compliance',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Theoretical Factors',
            items: [
              'Venous tone and compliance',
              'Blood viscosity',
              'Venous length',
              'Vascular obstructions'
            ]
          },
          right: {
            title: 'Practical Factors',
            items: [
              'Large venules and small veins (most resistance)',
              'Sympathetic nervous system',
              'Blood volume and MVFP',
              'Posture and gravity',
              'Muscle pump and respiratory pump'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Intervention', 'Effect on RVR', 'Effect on Venous Return'],
          rows: [
            ['Venoconstriction (sympathetic/alpha-agonists)', 'Decreased', 'Increased'],
            ['Venodilation (nitrates)', 'Increased', 'Decreased'],
            ['Volume expansion (fluids)', 'Overcome resistance', 'Increased'],
            ['Hemorrhage/dehydration', 'Reduced driving force', 'Decreased'],
            ['External compression (stockings)', 'Decreased', 'Increased'],
            ['Thrombosis/obstruction', 'Increased', 'Decreased']
          ]
        }
      ]
    },
    'lo-5': {
      title: 'Construct a vascular function curve. Predict how changes in total peripheral resistance, blood volume, and venous compliance influence this curve',
      isCritical: true,
      blocks: [
        {
          type: 'paragraph',
          text: 'Vascular function curve plots venous return (y-axis) against central venous pressure (x-axis) with negative slope',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'As CVP increases, pressure gradient (MVFP - CVP) decreases, reducing venous return to zero at MVFP',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'X-intercept = Mean Vascular Filling Pressure (7 mmHg) where venous return is zero',
          critical: true
        },
        {
          type: 'table',
          headers: ['Change', 'Curve Shift', 'Mechanism'],
          rows: [
            ['Increased blood volume', 'Rightward', 'Raises MVFP, higher VR at any CVP'],
            ['Decreased blood volume (hemorrhage)', 'Leftward', 'Lowers MVFP, reduced VR at any CVP'],
            ['Decreased venous compliance (venoconstriction)', 'Rightward', 'Mobilizes blood, increases MVFP and VR'],
            ['Increased venous compliance (venodilation)', 'Leftward', 'Sequesters blood, decreases MVFP and VR'],
            ['Increased total peripheral resistance', 'Flattens (decreased slope)', 'Makes VR less sensitive to CVP changes']
          ]
        },
        {
          type: 'clinical',
          text: 'Understanding curve shifts predicts cardiovascular responses to hemorrhage, fluid resuscitation, and autonomic interventions'
        }
      ]
    },
    'lo-6': {
      title: 'Explain why the intersection point of the cardiac function and vascular function curves represents the steady-state cardiac output and central venous pressure under the conditions represented in the graph',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'The intersection point represents cardiovascular equilibrium where cardiac output equals venous return',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'The heart can only pump what it receives - steady state requires VR = CO',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Cardiac Function Curve',
            items: [
              'Shows heart pumping based on preload (CVP)',
              'CO increases with CVP via Frank-Starling',
              'Positive slope'
            ]
          },
          right: {
            title: 'Vascular Function Curve',
            items: [
              'Shows venous return based on pressure gradient',
              'VR decreases as CVP rises',
              'Negative slope'
            ]
          }
        },
        {
          type: 'steps',
          intro: 'Self-correction mechanism maintains equilibrium:',
          items: [
            'If CO > VR: CVP decreases → reduces CO until equilibrium restored',
            'If VR > CO: CVP increases → enhances preload → increases CO until equilibrium restored'
          ],
          critical: false
        },
        {
          type: 'paragraph',
          text: 'The CVP at intersection is where the heart receives and pumps blood at the same rate as venous return',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Changes in contractility, blood volume, or venous tone shift curves creating new intersection points and new steady-state conditions',
          critical: false
        }
      ]
    },
    'lo-7': {
      title: 'Use the intersection point of the cardiac function curve and vascular function curve to predict how interventions such as hemorrhage, heart failure, autonomic stimulation, and exercise will affect cardiac output and right atrial pressure. Predict how physiological compensatory changes would alter acute changes',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Hemorrhage',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Acute: Blood volume loss decreases MVFP → vascular curve shifts leftward → reduced VR, CO, and RAP',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Compensation: Sympathetic activation causes venoconstriction and increased HR → partially restores CO and RAP toward normal',
          critical: false
        },
        {
          type: 'header',
          text: 'Heart Failure',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Acute: Decreased contractility → cardiac curve shifts downward → reduced CO and increased RAP (blood backs up)',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Compensation: Neurohormonal activation (sympathetic, RAAS) increases blood volume and venous tone → vascular curve shifts rightward → supports CO but elevates RAP',
          critical: false
        },
        {
          type: 'header',
          text: 'Sympathetic Stimulation',
          critical: false
        },
        {
          type: 'list',
          intro: 'Dual effects:',
          items: [
            'Enhanced contractility and HR → cardiac curve shifts upward',
            'Venoconstriction → vascular curve shifts rightward',
            'Result: Increased CO with minimal RAP change'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Exercise',
          critical: false
        },
        {
          type: 'list',
          intro: 'Multiple coordinated changes:',
          items: [
            'Increased metabolic demand elevates sympathetic activity',
            'Cardiac curve shifts upward (enhanced contractility and HR)',
            'Vascular curve shifts rightward (venoconstriction)',
            'Active muscle vasodilation decreases systemic vascular resistance',
            'Result: Markedly increased CO with minimal RAP changes, efficient oxygen delivery to working tissues'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'These Guyton diagram predictions help clinicians understand hemodynamic responses to pathology and therapy - critical for managing shock, heart failure, and fluid resuscitation'
        }
      ]
    }
  }
};

export default topic47QuickReview;
