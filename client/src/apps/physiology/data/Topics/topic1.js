const topic1 =   {
    id: 'topic-1',
    number: 1,
    category: 'fundamentals',
    mcqs: ['mcq-1'],
    title: 'Principles of Control Theory',
    subtitle: 'Fundamental concepts of physiological regulation including homeostasis, feedback mechanisms, and control system principles essential for understanding how the body maintains stable internal conditions.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: false,
        title: 'Define the term of internal environment (milieu intérieur) and explain the importance of its control',
        keyPoints: [
          'Milieu intérieur (Claude Bernard, 1865): Extracellular fluid (ECF) that surrounds and bathes all cells',
          'ECF comprises ~1/3 of total body water; contains high Na+, Cl-, HCO3-',
          'Serves as medium for nutrient/ion/waste transport between cells and blood',
          'Cells function only when surrounding conditions remain stable',
          'Must control: chemical composition (O2, glucose, ions, pH), temperature, osmolarity, volume',
          'Stability achieved through homeostasis and feedback mechanisms'
        ],
        officialDefinitions: [
          'Internal environment – milieu intérieur (Claude Bernard, 1865)',
          'Most cells are NOT exposed to the extrnal environment but to the extracellular fluid',
          'Total body water: 60% of the body mass intracellular: 40% of body mass extracellular: 20% of body mass',
          'Blood plasma (part of EC space) laboratory parameters refer to the composition of the internal environment!'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The internal environment, or milieu intérieur, termed by Claude Bernard, refers to the extracellular fluid compartment that directly surrounds all body cells.' },
            { type: 'paragraph', content: 'This comprises plasma and interstitial fluid containing high sodium, chloride, and bicarbonate concentrations.' },
            { type: 'paragraph', content: 'Control is essential because cellular functions including enzyme activity, membrane transport, and protein synthesis are highly sensitive to changes in temperature, pH, osmolarity, and ion concentrations.' },
            { type: 'paragraph', content: 'Without precise control mechanisms maintaining stable chemical composition, constant temperature, and optimal osmolarity, cellular dysfunction and death would occur rapidly.' },
            { type: 'paragraph', content: 'Homeostasis maintains this stability through coordinated nervous and endocrine system responses.' }
          ],
          raw: 'The internal environment, or milieu intérieur, termed by Claude Bernard, refers to the extracellular fluid compartment that directly surrounds all body cells. This comprises plasma and interstitial fluid containing high sodium, chloride, and bicarbonate concentrations. Control is essential because cellular functions including enzyme activity, membrane transport, and protein synthesis are highly sensitive to changes in temperature, pH, osmolarity, and ion concentrations. Without precise control mechanisms maintaining stable chemical composition, constant temperature, and optimal osmolarity, cellular dysfunction and death would occur rapidly. Homeostasis maintains this stability through coordinated nervous and endocrine system responses.'
        }
      },
      {
        id: 'lo-2',
        isCritical: true,
        title: '>>Define the terms homeostasis and homeostatic parameters. List at least 5 controlled functions and/or parameters in human.<<',
        keyPoints: [
          'Homeostasis: Process maintaining stable internal environment despite external/internal changes',
          'Coined by Walter Cannon (1926); from Greek homoios (similar) + stasis (standing still)',
          'Homeostatic parameters: Specific regulated physiological variables',
          'Five controlled parameters: (1) Body temperature (~37°C), (2) Blood glucose (4.5-5.5 mM), (3) Arterial blood pressure (120/80 mmHg), (4) Blood pH (7.35-7.45), (5) Plasma osmolality (290 mosm/kgH2O)',
          'Additional: O2/CO2 levels, electrolytes (Na+, K+, Ca2+), water balance, hormone levels',
          'Control achieved via nervous and endocrine systems using primarily negative feedback'
        ],
        officialDefinitions: [
          'Homeostasis – staying the same ὅμοιος homoios, „similar" és στάσις stasis, „standing still„ (Walter Cannon, 1926).',
          'Homeostasis is the process by which the body maintains a stable internal environment despite external or internal changes. It involves regulation of physiological parameters within narrow limits to ensure optimal conditions for cellular function. Coined from Greek: homoios (similar) + stasis (standing still). Controlled by nervous and endocrine systems via feedback mechanisms (mostly negative feedback).',
          'Homeostatic parameters are the specific variables or conditions within the internal environment that are regulated to maintain homeostasis. These parameters include, but are not limited to and they are range of value rather than at fixed values.',
          'Body Temperature: optimal temperature of around 37°C.',
          'pH Levels: Blood range of 7.35 to 7.45.',
          'Blood Sugar Levels: (typically 70-110 mg/dL)or 3.5 - 5.6 mmol/l.',
          'Electrolyte Concentrations (e.g., Na+, K+, Ca++, Cl−).',
          'Blood Pressure.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Homeostasis is the process by which the body maintains a stable internal environment despite external or internal changes through regulation of physiological parameters within narrow limits.<<', critical: true },
            { type: 'paragraph', content: '>>Homeostatic parameters are the specific regulated variables.<<', critical: true },
            { 
              type: 'list',
              intro: '>>Five examples:<<',
              critical: true,
              items: [
                'Body temperature maintained around 37°C',
                'Blood glucose between 4.5-5.5 millimolar',
                'Arterial blood pressure around 120 over 80 millimeters mercury',
                'Blood pH between 7.35 and 7.45',
                'Plasma osmolality at 290 milliosmoles per kilogram water'
              ]
            },
            {
              type: 'list',
              intro: 'Additional controlled parameters include:',
              items: [
                'Oxygen and carbon dioxide levels',
                'Electrolyte concentrations particularly sodium, potassium, and calcium',
                'Water balance',
                'Hormone levels'
              ]
            },
            { type: 'paragraph', content: 'Control is achieved via nervous and endocrine systems using primarily negative feedback mechanisms.' }
          ],
          raw: '>>Homeostasis is the process by which the body maintains a stable internal environment despite external or internal changes through regulation of physiological parameters within narrow limits. Homeostatic parameters are the specific regulated variables. Five examples: body temperature maintained around 37°C, blood glucose between 4.5-5.5 millimolar, arterial blood pressure around 120 over 80 millimeters mercury, blood pH between 7.35 and 7.45, and plasma osmolality at 290 milliosmoles per kilogram water.<< Additional controlled parameters include oxygen and carbon dioxide levels, electrolyte concentrations particularly sodium, potassium, and calcium, water balance, and hormone levels. Control is achieved via nervous and endocrine systems using primarily negative feedback mechanisms.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Distinguish between guidance and control',
        keyPoints: [
          'Guidance: Open-loop system with no feedback from output',
          'Central command sends instructions without monitoring results; no error detection or correction',
          'Example: Hormonal stress response (adrenaline release) - predetermined response',
          'Control: Closed-loop system with continuous feedback monitoring',
          'Output constantly monitored; errors detected and corrected in real-time',
          'Set point regulation with adjustments based on deviations',
          'Example: Blood glucose regulation with insulin/glucagon adjustments'
        ],
        officialDefinitions: [
          'Guidance vs. control • Open system • No feed back • No acting back • Only predicted errors can be controlled • Stable • Have to know all factors to operate properly',
          'control • Closed system • Feed back • Acting back • (Most) unforeseen errors can be controlled • Can be a bit unstable • No need for knowing all the factors to operate properly'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Guidance is an open-loop system where a central command sends instructions without receiving feedback about the system status.' },
            { type: 'paragraph', content: 'There is no feedback loop, so the system cannot detect or correct errors in real-time. Limited error correction occurs because only predicted errors can be controlled.' },
            { type: 'paragraph', content: 'Example: hormonal release during stress response operates as guidance.' },
            { type: 'paragraph', content: 'Control is a closed-loop system where feedback is continuously monitored and adjustments are made to maintain a desired state or setpoint.' },
            { type: 'paragraph', content: 'The control system detects deviations from the setpoint and adjusts to correct both predicted and unpredicted errors.' },
            { type: 'paragraph', content: 'Example: blood glucose regulation is control, where glucose levels are constantly monitored and insulin or glucagon adjusted accordingly.' }
          ],
          raw: 'Guidance is an open-loop system where a central command sends instructions without receiving feedback about the system status. There is no feedback loop, so the system cannot detect or correct errors in real-time. Limited error correction occurs because only predicted errors can be controlled. Example: hormonal release during stress response operates as guidance. Control is a closed-loop system where feedback is continuously monitored and adjustments are made to maintain a desired state or setpoint. The control system detects deviations from the setpoint and adjusts to correct both predicted and unpredicted errors. Example: blood glucose regulation is control, where glucose levels are constantly monitored and insulin or glucagon adjusted accordingly.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Describe the major forms of physiological controlling circuits (humoral, neuronal)',
        keyPoints: [
          'Neuronal control: Uses action potentials in nerve fibers',
          'Fast (milliseconds to seconds), precise, localized signaling; higher energy consumption',
          'Example: Baroreceptor reflex for blood pressure regulation',
          'Humoral control: Uses chemical mediators (hormones, cytokines) transported in blood',
          'Slower (seconds to hours), widespread distribution; lower energy cost, longer-lasting effects',
          'Example: Insulin regulation of blood glucose',
          'Both systems often integrated in coordinated physiological responses'
        ],
        officialDefinitions: [
          'Two main types of control circuits Nervous: very fast, short latency, well localized Humoral: slower, longer latency time, more diffuse …and their combination'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Neuronal controlling circuits use action potentials transmitted through nerve fibers for rapid, precise signaling occurring in milliseconds to seconds.' },
            { type: 'paragraph', content: 'Effects are localized and short-lasting but consume more energy.' },
            { type: 'paragraph', content: 'Example: the baroreceptor reflex rapidly adjusts blood pressure.' },
            { type: 'paragraph', content: 'Humoral controlling circuits use chemical mediators such as hormones and cytokines transported through the bloodstream.' },
            { type: 'paragraph', content: 'Signaling is slower, taking seconds to hours, with widespread distribution throughout the body and longer-lasting effects.' },
            { type: 'paragraph', content: 'Example: insulin regulates blood glucose systemically.' },
            { type: 'paragraph', content: 'Both systems frequently work together in integrated physiological responses, combining the speed of neural control with the sustained effects of humoral control.' }
          ],
          raw: 'Neuronal controlling circuits use action potentials transmitted through nerve fibers for rapid, precise signaling occurring in milliseconds to seconds. Effects are localized and short-lasting but consume more energy. Example: the baroreceptor reflex rapidly adjusts blood pressure. Humoral controlling circuits use chemical mediators such as hormones and cytokines transported through the bloodstream. Signaling is slower, taking seconds to hours, with widespread distribution throughout the body and longer-lasting effects. Example: insulin regulates blood glucose systemically. Both systems frequently work together in integrated physiological responses, combining the speed of neural control with the sustained effects of humoral control.'
        }
      },
      {
        id: 'lo-5',
        isCritical: true,
        title: '>>Describe the parts of the neuronal reflex arch and explain their respective functions in control<< (receptor, afferent branch/pathway, center, set point, efferent branch/pathway, effector)',
        keyPoints: [
          'Receptor: Specialized sensor detects change in controlled variable; converts to neural signal',
          'Afferent pathway: Sensory nerve transmits signal to CNS',
          'Integration center: CNS location (spinal cord, brainstem, higher centers) processes signal',
          'Set point: Desired/target value of controlled variable for comparison',
          'Efferent pathway: Motor nerve transmits command from CNS to periphery',
          'Effector: Organ/tissue (muscle, gland) executes response to correct deviation',
          'Example: Baroreceptor reflex regulating arterial blood pressure'
        ],
        officialDefinitions: [
          'Receptor is a specialized cell or group of nerve endings that respond to specific stimuli (e.g., heat, pressure, light) in the environment. It converts the stimulus into an electrical signal known as a nerve impulse. Detects the presence of a stimulus and initiates the transmission of information to the nervous system. Acts as the starting point for the reflex arc by sensing changes in the external or internal environment.',
          'Afferent Pathway / Sensory Neuron: carries nerve impulses from the receptor to the central nervous system (CNS). It transmits the signal through its axon to the spinal cord or brain, where the information is processed. The cell body of the sensory neuron is located in the dorsal root ganglion of the spinal cord.',
          'Contarol Center / Integration Center (CNS) located in the brain or spinal cord, processes the sensory information received from the afferent pathway. It determines whether a response is required and, if necessary, generates a motor command. Serves as the decision-making center for reflex actions. Integrates sensory input and compares it with a reference set point to determine the appropriate response.',
          'Set Point: desired value or condition of a physiological parameter that the reflex arc aims to maintain (e.g., muscle tension, blood pressure). It acts as a reference against which the sensory input is compared. Helps the control center decide whether the current state deviates from the desired condition. If the sensory input indicates that the parameter deviates from the set point, corrective actions are initiated.',
          'Efferent Pathway / Motor Neuron: transmits impulses from the CNS to the effector organ (muscle, gland, or blood vessel). It carries out the motor command generated by the control center. Delivers instructions to the effector organ on how to respond to the stimulus. The response can involve muscle contraction, glandular secretion, or changes in blood vessel diameter.',
          'Effector is the organ or cell that responds to the motor neuron\'s signals and produces the actual reflex response. It could be a muscle (for contraction), a gland (for secretion), or a blood vessel (for dilation or constriction). Executes the final response that restores the physiological condition to the desired state. For example, in a knee-jerk reflex, the effector is the quadriceps muscle, which contracts to produce the reflex action.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>The neuronal reflex arc consists of six components:<<', critical: true },
            {
              type: 'steps',
              critical: true,
              items: [
                '>>The receptor is a specialized sensor that detects changes in the controlled variable and converts them to neural signals<<',
                '>>The afferent pathway is the sensory nerve transmitting signals to the central nervous system<<',
                '>>The integration center, located in the spinal cord, brainstem, or higher centers, processes the incoming signal<<',
                '>>The set point is the desired target value for the controlled variable against which the signal is compared<<',
                '>>The efferent pathway is the motor nerve transmitting commands from the CNS to the periphery<<',
                '>>The effector is the organ or tissue, such as muscle or gland, that executes the response to correct any deviation<<'
              ]
            },
            { type: 'paragraph', content: 'Example: in the baroreceptor reflex, baroreceptors detect blood pressure changes, signals travel via glossopharyngeal and vagus nerves to the medulla, which compares to the set point and sends commands via autonomic nerves to the heart and blood vessels.' }
          ],
          raw: '>>The neuronal reflex arc consists of six components. The receptor is a specialized sensor that detects changes in the controlled variable and converts them to neural signals. The afferent pathway is the sensory nerve transmitting signals to the central nervous system. The integration center, located in the spinal cord, brainstem, or higher centers, processes the incoming signal and compares it to the set point, which is the desired target value for the controlled variable. The efferent pathway is the motor nerve transmitting commands from the CNS to the periphery. The effector is the organ or tissue, such as muscle or gland, that executes the response to correct any deviation.<< Example: in the baroreceptor reflex, baroreceptors detect blood pressure changes, signals travel via glossopharyngeal and vagus nerves to the medulla, which compares to the set point and sends commands via autonomic nerves to the heart and blood vessels.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Define negative and positive feedback control.<< Give examples for processes controlled by negative feedback, positive feedback. Explain feed-forward control',
        keyPoints: [
          'Negative feedback: Response opposes initial change; returns parameter toward set point; stabilizing',
          'Most common control mechanism; Example: High blood glucose → insulin → glucose uptake ↑ → glucose ↓',
          'Positive feedback: Response amplifies initial change; moves parameter further from set point',
          'Destabilizing but useful for rapid process completion; must have termination mechanism',
          'Example: Blood clotting cascade - activated factors activate more factors',
          'Feed-forward control: Anticipatory response before variable changes; based on learned patterns',
          'Example: Cephalic phase - sight/smell of food triggers gastric secretion before eating'
        ],
        officialDefinitions: [
          'Homeostatic control circuits operate with NEGATIVE feedback loops controlling center sensor disturbing signal "set point" controlled parameter setting value actual value controlling value effector system',
          'Positive feedback regulatory circuits • No steady state, but escalating often irreversible changes develop • Physiological in many events: development, reproduction, blood clotting, depolarization often embedded in negative feedback loops • Pathophysiology – vicious circles',
          'Feed forward control • Such a system predicts (anticipates) the incipient disturbance BEFORE it happens and starts the correction! • Example 1 Some gastrointestinal hormones (GIP, GLP1) signal the sugar content of the meal in the gut BEFORE the absorbed sugar would start to elevate blood sugar level (insulin-secreting hormones, incretins) • Example 2 Respiraory rate and heart rate of the athlete starts to elevate BEFORE the exercise would start to increase the oxygen and metabolite consumption.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Negative feedback control occurs when the response opposes the initial change, returning the parameter toward its set point, thereby stabilizing the system.<<', critical: true },
            { type: 'paragraph', content: '>>This is the most common control mechanism.<<', critical: true },
            { type: 'paragraph', content: 'Example: elevated blood glucose triggers insulin secretion, which promotes glucose uptake by cells, decreasing blood glucose back toward normal.' },
            { type: 'paragraph', content: '>>Positive feedback control occurs when the response amplifies the initial change, moving the parameter further from the set point.<<', critical: true },
            { type: 'paragraph', content: '>>While destabilizing, it is useful for rapid completion of specific processes and must have a termination mechanism.<<', critical: true },
            { type: 'paragraph', content: 'Example: blood clotting cascade where activated clotting factors activate additional factors in an amplifying cascade.' },
            { type: 'paragraph', content: 'Feed-forward control is an anticipatory response based on learned patterns, occurring before the variable actually changes.' },
            { type: 'paragraph', content: 'Example: the cephalic phase of digestion where the sight and smell of food triggers saliva and gastric secretion before eating, preventing deviation rather than correcting it.' }
          ],
          raw: '>>Negative feedback control occurs when the response opposes the initial change, returning the parameter toward its set point, thereby stabilizing the system. This is the most common control mechanism. Example: elevated blood glucose triggers insulin secretion, which promotes glucose uptake by cells, decreasing blood glucose back toward normal. Positive feedback control occurs when the response amplifies the initial change, moving the parameter further from the set point. While destabilizing, it is useful for rapid completion of specific processes and must have a termination mechanism. Example: blood clotting cascade where activated clotting factors activate additional factors in an amplifying cascade.<< Feed-forward control is an anticipatory response based on learned patterns, occurring before the variable actually changes. Example: the cephalic phase of digestion where the sight and smell of food triggers saliva and gastric secretion before eating, preventing deviation rather than correcting it.'
        }
      },
      {
        id: 'lo-7',
        isCritical: false,
        title: 'Characterize endocrine, paracrine and autocrine humoral control based on the release site of the mediators and their path to the target cells',
        keyPoints: [
          'Endocrine: Hormone secreted into bloodstream; travels systemically to distant target cells',
          'Long-distance signaling; slower but prolonged effects; Example: Thyroid hormone affecting metabolism',
          'Paracrine: Mediator released into local extracellular fluid; affects neighboring cells',
          'Short diffusion distance; rapid but localized and short-lived effects; Example: Histamine from mast cells',
          'Autocrine: Cell releases mediator that acts on itself via own receptors; self-regulation',
          'Example: IL-2 from T lymphocytes stimulating their own proliferation'
        ],
        officialDefinitions: [
          'Humoral regulatory mechanisms Endocrine effect: humoral signal reaches target cell with blood Paracrine effect: humoral signal reaches target cell through diffusion in the EC space Autocrine effect: humoral signal source and target is the same cell'
        ],        
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Endocrine humoral control involves hormones secreted by endocrine glands into the bloodstream, traveling systemically to reach distant target cells possessing specific receptors.' },
            { type: 'paragraph', content: 'Effects are slower but prolonged.' },
            { type: 'paragraph', content: 'Example: thyroid hormone regulates metabolism throughout the body.' },
            { type: 'paragraph', content: 'Paracrine humoral control involves mediators released into local extracellular fluid, affecting neighboring cells through short diffusion distances.' },
            { type: 'paragraph', content: 'Effects are rapid but localized and short-lived.' },
            { type: 'paragraph', content: 'Example: histamine released from mast cells causes local vasodilation in surrounding blood vessels.' },
            { type: 'paragraph', content: 'Autocrine humoral control involves a cell releasing mediators that act on itself through its own receptors, providing self-regulation.' },
            { type: 'paragraph', content: 'Example: interleukin-2 released by T lymphocytes stimulates their own proliferation during immune responses.' }
          ],
          raw: 'Endocrine humoral control involves hormones secreted by endocrine glands into the bloodstream, traveling systemically to reach distant target cells possessing specific receptors. Effects are slower but prolonged. Example: thyroid hormone regulates metabolism throughout the body. Paracrine humoral control involves mediators released into local extracellular fluid, affecting neighboring cells through short diffusion distances. Effects are rapid but localized and short-lived. Example: histamine released from mast cells causes local vasodilation in surrounding blood vessels. Autocrine humoral control involves a cell releasing mediators that act on itself through its own receptors, providing self-regulation. Example: interleukin-2 released by T lymphocytes stimulates their own proliferation during immune responses.'
        }
      },
      {
        id: 'lo-8',
        isCritical: false,
        title: 'Define "behavioural control" and explain its importance/necessity. Give examples!',
        keyPoints: [
          'Behavioral control: Voluntary, conscious actions to maintain homeostasis',
          'Used when physiological mechanisms insufficient or to minimize their activation',
          'Importance: Extends homeostatic range, conserves energy, provides anticipatory responses',
          'Examples: (1) Thermoregulation - seeking shade/wearing clothes, (2) Thirst behavior - drinking before severe dehydration',
          '(3) Hunger - eating to prevent energy depletion, (4) Pain avoidance - removing hand from hot object',
          'Essential for survival; complements autonomic mechanisms'
        ],
        officialDefinitions: [
          'Behavioural Control • Typically feedforward, serves the adaptation to the external environment • May be driven by homeostasis "homeostatic drives" serving thermoregulation, feeding, drinking • May be driven by reproductive drives (mate selection, aggression, Lehet reproduktív eredetű "drive" (mate selection, aggression brood care'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Behavioral control refers to voluntary, conscious actions an organism performs to maintain homeostasis, ensure survival, adapt to environmental changes, and manage stress.' },
            { type: 'paragraph', content: 'It is necessary when physiological mechanisms alone are insufficient or to minimize their activation, thereby conserving energy.' },
            { type: 'paragraph', content: 'Importance includes extending the homeostatic range beyond what automatic systems can achieve and providing anticipatory responses.' },
            {
              type: 'list',
              intro: 'Examples include:',
              items: [
                'Thermoregulation through seeking shade when hot or wearing appropriate clothing when cold',
                'Thirst-driven drinking behavior before severe dehydration occurs',
                'Hunger-driven eating to prevent energy depletion',
                'Pain avoidance behaviors such as immediately removing a hand from a hot object'
              ]
            },
            { type: 'paragraph', content: 'Behavioral control is essential for survival as it complements and reduces the burden on autonomic physiological mechanisms.' }
          ],
          raw: 'Behavioral control refers to voluntary, conscious actions an organism performs to maintain homeostasis, ensure survival, adapt to environmental changes, and manage stress. It is necessary when physiological mechanisms alone are insufficient or to minimize their activation, thereby conserving energy. Importance includes extending the homeostatic range beyond what automatic systems can achieve and providing anticipatory responses. Examples include thermoregulation through seeking shade when hot or wearing appropriate clothing when cold, thirst-driven drinking behavior before severe dehydration occurs, hunger-driven eating to prevent energy depletion, and pain avoidance behaviors such as immediately removing a hand from a hot object. Behavioral control is essential for survival as it complements and reduces the burden on autonomic physiological mechanisms.'
        }
      },
      {
        id: 'lo-9',
        isCritical: true,
        title: 'How can the efficiency of control systems be expressed quantitatively? >>Define gain!<<',
        keyPoints: [
          'Gain: Quantitative measure of control system effectiveness',
          'Formula: Gain = (Correction achieved) / (Remaining error)',
          'Or: Gain = (Error without control - Error with control) / (Error with control)',
          'Higher gain = more effective control; Infinite gain = perfect control (no remaining error)',
          'Example: BP drops 40 mmHg without control, 8 mmHg with control → Gain = (40-8)/8 = 4',
          'Allows comparison between different control systems and prediction of behavior'
        ],
        officialDefinitions: [
          'The Effectivity of Control Systems (Gain) gain= correction / residual error'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The efficiency of control systems is expressed quantitatively using gain, which measures how effectively a control system maintains constant conditions when faced with a disturbance.' },
            { type: 'paragraph', content: '>>The formula is: Gain equals correction achieved divided by remaining error, or equivalently, error without control minus error with control, divided by error with control.<<', critical: true },
            { type: 'paragraph', content: '>>Higher gain indicates more effective control.<<', critical: true },
            { type: 'paragraph', content: 'For example, if blood pressure drops 40 millimeters mercury without baroreceptor control but only 8 millimeters mercury with the reflex active, the gain equals 40 minus 8, divided by 8, which equals 4.' },
            { type: 'paragraph', content: 'Infinite gain would represent perfect control where no error remains after correction.' },
            { type: 'paragraph', content: 'Gain allows comparison of different control systems and prediction of their behavior under various disturbances.' }
          ],
          raw: 'The efficiency of control systems is expressed quantitatively using gain, which measures how effectively a control system maintains constant conditions when faced with a disturbance. >>The formula is: Gain equals correction achieved divided by remaining error, or equivalently, error without control minus error with control, divided by error with control. Higher gain indicates more effective control.<< For example, if blood pressure drops 40 millimeters mercury without baroreceptor control but only 8 millimeters mercury with the reflex active, the gain equals 40 minus 8, divided by 8, which equals 4. Infinite gain would represent perfect control where no error remains after correction. Gain allows comparison of different control systems and prediction of their behavior under various disturbances.'
        }
      },
      {
        id: 'lo-10',
        isCritical: false,
        title: 'Define the term servo-control mechanism',
        keyPoints: [
          'Servo-control: System where set point can be changed based on external/internal conditions',
          'System adapts set point in response to environmental or physiological changes',
          'Allows flexible regulation beyond fixed homeostatic values',
          'Example: Body temperature regulation during infection - normal set point 37°C, raised to 38-39°C (fever)',
          'Thermoregulatory system adjusts to maintain new elevated set point; helps immune system fight pathogens',
          'After infection resolves, set point returns to 37°C'
        ],
        officialDefinitions: [
          'A servo-control mechanism is a system in which the set point (the target value for regulation) of a control system can be changed based on external or internal conditions. The system adapts the set point in response to environmental or physiological changes.',
          'Servo mechanisms: the set point value changes → the control system gets activated and a NEW steady state develops e.g.: hyperthermia vs. fever.',
          'When the body is infected by a bacterium, the set point of body temperature is raised. This occurs because higher body temperatures can help the immune system fight off infections, as many bacteria are sensitive to elevated temperatures. In this case, the body\'s temperature control system adjusts to this new set point (fever), which is part of the immune response.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'A servo-control mechanism is a control system in which the set point, or target value for regulation, can be changed based on external or internal conditions.' },
            { type: 'paragraph', content: 'The system adapts the set point in response to environmental or physiological changes, allowing flexible regulation beyond fixed homeostatic values.' },
            { type: 'paragraph', content: 'Classic example: body temperature regulation during infection.' },
            {
              type: 'steps',
              items: [
                'Normally, the set point is 37 degrees Celsius',
                'When bacteria invade the body, pyrogens cause the hypothalamic thermoregulatory center to raise the set point to 38 or 39 degrees Celsius, producing fever',
                'The body temperature control system then maintains this new elevated temperature, which helps the immune system fight pathogens more effectively',
                'Once the infection resolves, the set point returns to normal 37 degrees Celsius'
              ]
            }
          ],
          raw: 'A servo-control mechanism is a control system in which the set point, or target value for regulation, can be changed based on external or internal conditions. The system adapts the set point in response to environmental or physiological changes, allowing flexible regulation beyond fixed homeostatic values. Classic example: body temperature regulation during infection. Normally, the set point is 37 degrees Celsius. When bacteria invade the body, pyrogens cause the hypothalamic thermoregulatory center to raise the set point to 38 or 39 degrees Celsius, producing fever. The body temperature control system then maintains this new elevated temperature, which helps the immune system fight pathogens more effectively. Once the infection resolves, the set point returns to normal 37 degrees Celsius.'
        }
      }
    ]
  };

export default topic1;
