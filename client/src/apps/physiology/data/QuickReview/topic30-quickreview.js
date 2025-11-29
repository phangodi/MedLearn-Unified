const topic30QuickReview = {
  topicId: 'topic-30',
  topicNumber: 30,
  learningObjectives: {
    'lo-1': {
      title: 'List the muscles used in quiet breathing, and the additional muscles involved in forced respiration.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Quiet Breathing Muscles'
        },
        {
          type: 'keypoint',
          content: 'Diaphragm contracts and flattens, increasing vertical thoracic dimension (primary inspiratory muscle)'
        },
        {
          type: 'keypoint',
          content: 'External intercostal muscles elevate ribs, increasing lateral and anteroposterior dimensions'
        },
        {
          type: 'header',
          content: 'Forced Inspiration Accessory Muscles'
        },
        {
          type: 'list',
          items: [
            'Sternocleidomastoid - elevates sternum',
            'Scalene muscles - elevate first and second ribs',
            'Pectoralis minor - lifts ribs',
            'Serratus anterior - elevates ribs'
          ]
        },
        {
          type: 'header',
          content: 'Forced Expiration Muscles'
        },
        {
          type: 'keypoint',
          content: 'Internal intercostal muscles pull ribs downward and inward, decreasing thoracic volume'
        },
        {
          type: 'list',
          intro: 'Abdominal muscles compress abdominal cavity, pushing diaphragm upward:',
          items: [
            'Rectus abdominis',
            'External obliques',
            'Internal obliques',
            'Transversus abdominis'
          ]
        },
        {
          type: 'clinical',
          content: 'Quiet breathing: inspiration is active (muscle contraction), expiration is passive (elastic recoil). Forced breathing: both phases involve active muscle contraction.'
        }
      ]
    },
    'lo-2': {
      title: 'Give the anatomical localization of the motoneurons involved in the breathing effort (C3-5, Th1-11).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Spinal Motoneuron Localization'
        },
        {
          type: 'keypoint',
          content: 'C3-C5 (cervical spinal cord): Motoneurons give rise to phrenic nerve → innervates diaphragm (primary muscle for inspiration)'
        },
        {
          type: 'keypoint',
          content: 'Th1-Th11 (thoracic spinal cord): Motoneurons give rise to intercostal nerves → innervate intercostal muscles'
        },
        {
          type: 'comparison',
          leftLabel: 'External Intercostals',
          leftContent: 'Used for inspiration',
          rightLabel: 'Internal Intercostals',
          rightContent: 'Used for forced expiration'
        },
        {
          type: 'clinical',
          content: 'Motoneurons located in anterior (ventral) grey horn of spinal cord. Descending signals from DRG and VRG in medulla activate these spinal motoneurons to coordinate breathing.'
        }
      ]
    },
    'lo-3': {
      title: 'Describe the phases of motoneuron activity during the respiratory cycle (inspiratory, postinspiratory, exspiratory).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Three Phases of Motoneuron Activity'
        },
        {
          type: 'steps',
          intro: 'Respiratory cycle phases:',
          steps: [
            'Inspiratory Phase: Phrenic and external intercostal motoneurons show bursting discharge in ramp-like pattern (gradually increasing). Controlled by DRG and pre-Bötzinger complex. Effect: Diaphragm and external intercostals contract → thoracic volume increases → air flows in.',
            'Postinspiratory Phase (early expiration): Laryngeal and pharyngeal motoneurons active, phrenic activity decreases. Controlled by Bötzinger complex and PRG (pneumotaxic center). Effect: Controls glottal opening and airway resistance for smooth transition. Prominent during sighing and speaking.',
            'Expiratory Phase (active expiration): Internal intercostal and abdominal motoneurons active during forced expiration. Controlled by expiratory neurons in VRG. Typically silent during quiet breathing. Active during speech, exercise, coughing.'
          ]
        },
        {
          type: 'clinical',
          content: 'During quiet breathing, only inspiratory phase involves active muscle contraction. Expiration is passive. During forced breathing, all three phases may involve coordinated muscle activity.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the brainstem regions involved in the rhythmogenesis and regulation of breathing movements: DRG, VRG, pre-Bötzinger complex and its importance, PRG (medial parabrachial and Kölliker-Fuse nucleus).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Brainstem Respiratory Centers'
        },
        {
          type: 'keypoint',
          content: 'DRG (Dorsal Respiratory Group): Located in medulla within nucleus tractus solitarius (NTS). Generates basic breathing rhythm during quiet breathing (eupnea). Controls inspiratory muscles (diaphragm, external intercostals). Receives input from peripheral chemoreceptors, lung stretch receptors, mechanoreceptors.'
        },
        {
          type: 'keypoint',
          content: 'VRG (Ventral Respiratory Group): Located ventrally in medulla. Contains both inspiratory and expiratory neurons. Primarily involved in forced respiration (exercise, talking, coughing).'
        },
        {
          type: 'table',
          headers: ['VRG Subdivision', 'Location', 'Function'],
          rows: [
            ['Rostral VRG (Bötzinger)', 'Rostral', 'Expiratory neurons inhibit inspiration'],
            ['Intermediate VRG (Pre-Bötzinger)', 'Middle', 'Pacemaker neurons generate rhythm'],
            ['Caudal VRG', 'Caudal', 'Expiratory neurons for internal intercostals & abdominals']
          ]
        },
        {
          type: 'keypoint',
          content: 'Pre-Bötzinger Complex: PRIMARY PACEMAKER SITE for breathing. Located in intermediate VRG. Generates rhythmic bursts of action potentials that initiate inspiration. Exhibits spontaneous rhythmic firing due to leaky cation channels. Sets normal respiratory rate at 12-16 breaths/min.'
        },
        {
          type: 'keypoint',
          content: 'PRG (Pontine Respiratory Group): Located in pons. Consists of parabrachial nucleus and Kölliker-Fuse nucleus (pneumotaxic center). Modulates respiratory rhythm and transitions between inspiration and expiration.'
        },
        {
          type: 'comparison',
          leftLabel: 'Parabrachial Nucleus',
          leftContent: 'Modulates depth and rate of breathing by sending inhibitory signals to medullary centers. Prevents lung over-inflation by shortening inspiration. Fine-tunes breathing for speech and emotional responses.',
          rightLabel: 'Kölliker-Fuse Nucleus',
          rightContent: 'Works with parabrachial nucleus for smooth transitions between inspiration and expiration. Refines inspiratory depth and duration. Prevents apneustic (prolonged inspiratory) breathing.'
        }
      ]
    },
    'lo-5': {
      title: 'List and characterize three reflexes originating from pulmonary receptors controlling tidal volume and respiratory rate. Describe the respective reflex arches. (1. Hering-Breuer reflex, 2. reflexes elicited by irritant receptors, 3. chemoreflexes elicited by J-receptors)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: '1. Hering-Breuer Inflation Reflex'
        },
        {
          type: 'keypoint',
          content: 'Function: Prevents lung over-inflation during deep inspiration (activated when tidal volume exceeds 800 ml)'
        },
        {
          type: 'keypoint',
          content: 'Receptors: Slowly Adapting stretch Receptors (SARs) in smooth muscle of airways, bronchi, bronchioles'
        },
        {
          type: 'steps',
          intro: 'Reflex arc:',
          steps: [
            'Afferent: Vagal myelinated fibers from stretch receptors',
            'Integration: Brainstem medulla (DRG)',
            'Efferent: Inhibition of inspiratory motor neurons (phrenic nerve)',
            'Effect: Inhibits inspiration, promotes expiration'
          ]
        },
        {
          type: 'header',
          content: '2. Irritant Receptor Reflex'
        },
        {
          type: 'keypoint',
          content: 'Function: Protects airways from harmful substances and promotes airway clearance'
        },
        {
          type: 'keypoint',
          content: 'Receptors: Rapidly Adapting Receptors (RARs) in tracheal and bronchial epithelium'
        },
        {
          type: 'keypoint',
          content: 'Stimuli: Dust, smoke, cold air, histamine, mechanical stimulation'
        },
        {
          type: 'steps',
          intro: 'Reflex arc:',
          steps: [
            'Afferent: Vagal fibers from RARs',
            'Integration: Brainstem (medulla and pons)',
            'Efferent: Respiratory motor neurons and autonomic efferents',
            'Effects: Bronchoconstriction, coughing, mucus secretion, tachypnea (rapid shallow breathing)'
          ]
        },
        {
          type: 'header',
          content: '3. J-Receptor Chemoreflex'
        },
        {
          type: 'keypoint',
          content: 'Receptors: J-receptors (Juxtapulmonary-Capillary receptors) in alveolar walls near capillaries'
        },
        {
          type: 'keypoint',
          content: 'Stimuli: Increased interstitial fluid (pulmonary edema), pulmonary capillary engorgement, inflammatory mediators (lung infections)'
        },
        {
          type: 'steps',
          intro: 'Reflex arc:',
          steps: [
            'Afferent: Vagus nerve (C-fibers) from J-receptors',
            'Integration: Medulla and pons',
            'Efferent responses: Rapid shallow breathing, bronchoconstriction, bradycardia, hypotension'
          ]
        },
        {
          type: 'clinical',
          content: 'J-receptor reflex seen in pulmonary edema, ARDS, congestive heart failure. Implicated in sensation of dyspnea (shortness of breath).'
        }
      ]
    },
    'lo-6': {
      title: 'Define the following terms: eupnoe, hypopnoe, hyperpnoe, dyspnoe.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Respiratory Pattern Terminology'
        },
        {
          type: 'table',
          headers: ['Term', 'Definition', 'Key Features'],
          rows: [
            ['Eupnoea', 'Normal, unlabored breathing', 'Rhythmic, steady, meets metabolic needs without discomfort. Rate: 12-16 breaths/min'],
            ['Hypopnoea', 'Abnormally shallow or slow breathing', 'Reduces ventilation, decreases O₂ intake and CO₂ removal. Associated with sleep apnea'],
            ['Hyperpnoea', 'Increased depth and rate of breathing', 'Exceeds basic metabolic requirements. Normal response to exercise. Differs from hyperventilation'],
            ['Dyspnoea', 'Difficult or labored breathing (shortness of breath)', 'Subjective sensation. Associated with respiratory/cardiovascular conditions, exertion, anxiety']
          ]
        },
        {
          type: 'clinical',
          content: 'Hyperpnoea is appropriate increased breathing during exercise (matches metabolic demand). Hyperventilation is excessive breathing beyond metabolic needs (can lead to respiratory alkalosis).'
        }
      ]
    },
    'lo-7': {
      title: 'Define the following breathing patterns: Kussmaul breathing, Cheyne-Stokes breathing, apneusia, gasping.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Abnormal Breathing Patterns'
        },
        {
          type: 'keypoint',
          content: 'Kussmaul Breathing: Deep, labored, and rapid breathing pattern. Associated with metabolic acidosis, particularly diabetic ketoacidosis. Mechanism: Body compensates by increasing rate and depth to expel more CO₂ and reduce blood acidity (hyperventilation). Indicates severe metabolic imbalance.'
        },
        {
          type: 'keypoint',
          content: 'Cheyne-Stokes Breathing: Cyclical pattern with gradual increase in depth and rate, followed by gradual decrease, resulting in temporary apnea. Each cycle lasts 30 seconds to 2 minutes. Seen in congestive heart failure, stroke, traumatic brain injuries, and during sleep in elderly. Related to delayed CNS feedback to blood CO₂ and O₂ changes.'
        },
        {
          type: 'keypoint',
          content: 'Apneustic Breathing (Apneusia): Prolonged inspiratory phase followed by inadequate or insufficient expiratory phase. Leads to gasping or pauses at full inspiration before exhalation. Associated with damage to pons or upper brainstem (stroke, trauma, neurological damage). Caused by loss of pneumotaxic center inhibition.'
        },
        {
          type: 'keypoint',
          content: 'Gasping: Sudden, forceful, and irregular inspiration with intense need for air. Labored and jerky breathing, often noisy. Seen in severe oxygen deprivation or agonal state before death/cardiac arrest. Reflex response when body is severely hypoxic and struggling for oxygen.'
        },
        {
          type: 'table',
          headers: ['Pattern', 'Key Feature', 'Clinical Association'],
          rows: [
            ['Kussmaul', 'Deep, rapid, labored', 'Diabetic ketoacidosis, metabolic acidosis'],
            ['Cheyne-Stokes', 'Cyclical crescendo-decrescendo with apnea', 'Heart failure, stroke, brain injury'],
            ['Apneusia', 'Prolonged inspiration, inadequate expiration', 'Pontine/brainstem damage'],
            ['Gasping', 'Sudden, forceful, irregular', 'Severe hypoxia, agonal state, cardiac arrest']
          ]
        },
        {
          type: 'clinical',
          content: 'These abnormal breathing patterns are important diagnostic indicators. Kussmaul breathing requires immediate metabolic correction. Cheyne-Stokes suggests cardiac or neurological pathology. Apneusia indicates brainstem lesion. Gasping is a pre-terminal sign requiring immediate resuscitation.'
        }
      ]
    }
  }
};

export default topic30QuickReview;
