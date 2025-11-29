const topic45QuickReview = {
  topicId: 'topic-45',
  topicNumber: 45,
  learningObjectives: {
    'lo-1': {
      title: 'Characterize the veins, contrast them to arteries of similar size (number of vessels, wall distensibility). Explain why the volume of the venous system increases significantly with the changes of hydrostatic pressures related to standing up (orthostasis).',
      isCritical: false,
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Veins',
            items: [
              'Thin walls with less smooth muscle and elastic tissue',
              'Large lumen relative to wall thickness',
              'Contain valves to prevent backflow',
              'High compliance (24× arteries)',
              'High distensibility (8× arteries)',
              'Low pressure (2-6 mmHg central)',
              'Hold 60-64% of total blood volume'
            ]
          },
          right: {
            title: 'Arteries',
            items: [
              'Thick walls with abundant smooth muscle and elastic tissue',
              'Smaller lumen relative to wall thickness',
              'No valves (except semilunar)',
              'Low compliance (stressed volume)',
              'Low distensibility (rigid walls)',
              'High pressure (120/80 mmHg)',
              'Hold smaller fraction of blood at high pressure'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Venous compliance is 24× arterial compliance because compliance = distensibility × volume (8× distensibility × 3× volume = 24)',
          critical: false
        },
        {
          type: 'header',
          text: 'Orthostasis and Venous Pooling',
          critical: false
        },
        {
          type: 'steps',
          intro: 'When standing up, gravity causes venous pooling:',
          items: [
            'Gravity increases venous hydrostatic pressure by 0.77 mmHg per cm below the right atrium',
            'Leg vein pressure rises to 90-100 mmHg (vs ~10 mmHg supine)',
            'High venous compliance causes veins to readily expand with small pressure increases',
            '500-800 mL blood pools in lower extremities within seconds',
            'Reduced venous return decreases cardiac preload and stroke volume'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Orthostatic hypotension occurs when compensatory mechanisms (muscle pump, venoconstriction, baroreceptor reflex) fail to maintain venous return during standing, causing dizziness or syncope.'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the factors promoting venous return (heart pumping: "vis a tergo" and "vis a fronte", dynamic muscle pump, venoconstriction, respiratory pump). Explain why the insufficiency of venous valves deteriorates the function of the muscle pump.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Five Factors Promoting Venous Return',
          critical: true
        },
        {
          type: 'list',
          intro: 'Mechanisms that drive blood back to the heart:',
          items: [
            'Vis a tergo (force from behind): Residual pressure from left ventricular contraction provides baseline driving force (~2-6 mmHg gradient)',
            'Vis a fronte (force from the front): Ventricular relaxation during diastole creates negative atrial pressure, pulling blood into the heart',
            'Dynamic muscle pump: Skeletal muscle contractions compress veins and propel blood toward the heart (with one-way flow via valves)',
            'Venoconstriction: Sympathetic α1-adrenergic stimulation reduces venous compliance, mobilizing blood from the venous reservoir (60% of total blood volume)',
            'Respiratory pump: Inspiration increases abdominal pressure and decreases thoracic pressure, pushing blood from abdominal veins into thoracic veins and heart'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'These mechanisms work together: at rest (vis a tergo + respiratory pump), during exercise (all five mechanisms), during orthostasis (muscle pump + valves counteract gravity)',
          critical: true
        },
        {
          type: 'header',
          text: 'Venous Valve Insufficiency',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'When venous valves become incompetent (due to aging, prolonged standing, or venous disease), they fail to close properly, allowing backward blood flow during muscle relaxation.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Consequences of valve insufficiency:',
          items: [
            'Unidirectional flow is disrupted, negating muscle pump efficiency',
            'Blood pools during muscle relaxation instead of moving forward',
            'Increased venous pressure causes further distension',
            'Leads to varicose veins, edema, and venous ulcers'
          ],
          critical: true
        },
        {
          type: 'clinical',
          text: 'Functional venous valves are required for the muscle pump. In dilated varicose veins, valves fail and the muscle pump becomes insufficient, causing chronic venous insufficiency.'
        }
      ]
    },
    'lo-3': {
      title: 'Describe the sympathetic innervation of the veins eliciting vasoconstriction. Define venomotor tone.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Sympathetic Innervation of Veins',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Veins are innervated by sympathetic adrenergic fibers that release norepinephrine (NE), which acts on α1-adrenergic receptors on venous smooth muscle to cause vasoconstriction.',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Mechanism of sympathetic venoconstriction:',
          items: [
            'Sympathetic fibers from the vasomotor center (medulla RVLM) release norepinephrine',
            'NE binds to α1-adrenergic receptors on venous smooth muscle',
            'Activates Gq protein → phospholipase C → increased intracellular Ca²⁺',
            'Calcium causes smooth muscle contraction (venoconstriction)',
            'Venoconstriction reduces venous diameter and compliance'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Venoconstriction mobilizes blood from the venous reservoir (60% of total blood volume), increasing venous return, cardiac preload, and cardiac output',
          critical: true
        },
        {
          type: 'header',
          text: 'Venomotor Tone',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Venomotor tone is the degree of tension or contractility in venous smooth muscle walls, regulated primarily by sympathetic activity. It determines venous compliance and the ability to store or mobilize blood.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Physiological significance of venomotor tone:',
          items: [
            'Higher tone → reduced compliance → mobilized blood → increased venous return',
            'Maintains adequate circulating blood volume and arterial pressure during hemorrhage or dehydration',
            'Enhances cardiac output during exercise by mobilizing venous blood',
            'Regulates blood flow distribution to meet metabolic demands'
          ],
          critical: true
        },
        {
          type: 'clinical',
          text: 'Increased sympathetic activity (exercise, stress, hemorrhage) increases venomotor tone and mobilizes venous blood. Decreased activity (rest, vasovagal syncope) causes venodilation and blood pooling.'
        }
      ]
    }
  }
};

export default topic45QuickReview;
