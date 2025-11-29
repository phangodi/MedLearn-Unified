const topic1QuickReview = {
  topicId: 'topic-1',
  topicNumber: 1,
  learningObjectives: {
    'lo-1': {
      title: 'Define the term of internal environment (milieu intérieur) and explain the importance of its control',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Internal Environment (Milieu Intérieur)'
        },
        {
          type: 'paragraph',
          content: 'Coined by Claude Bernard in 1865, the internal environment refers to the extracellular fluid (ECF) that surrounds all body cells. This comprises plasma and interstitial fluid, making up approximately 20% of body mass (1/3 of total body water).'
        },
        {
          type: 'keypoint',
          content: 'Most cells are NOT exposed to the external environment but to the ECF, which has high concentrations of Na+, Cl-, and HCO3-.'
        },
        {
          type: 'list',
          title: 'Why Control Is Essential',
          items: [
            'Cellular functions (enzyme activity, membrane transport, protein synthesis) are highly sensitive to ECF conditions',
            'Must maintain stable chemical composition (O2, glucose, ions, pH)',
            'Must maintain constant temperature and optimal osmolarity',
            'Without precise control, cellular dysfunction and death occur rapidly'
          ]
        },
        {
          type: 'clinical',
          content: 'Laboratory blood tests measure parameters of the internal environment, not individual cells. These values reflect the conditions in which all cells must function.'
        }
      ]
    },
    'lo-2': {
      title: 'Define the terms homeostasis and homeostatic parameters. List at least 5 controlled functions and/or parameters in human.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Homeostasis and Homeostatic Parameters'
        },
        {
          type: 'keypoint',
          content: 'Homeostasis (Walter Cannon, 1926): The process by which the body maintains a stable internal environment despite external or internal changes through regulation of physiological parameters within narrow limits. From Greek: homoios (similar) + stasis (standing still).'
        },
        {
          type: 'keypoint',
          content: 'Homeostatic parameters are the specific variables or conditions that are regulated to maintain homeostasis. These are ranges of values rather than fixed values.'
        },
        {
          type: 'list',
          title: 'Five Key Controlled Parameters',
          items: [
            'Body temperature: ~37°C',
            'Blood glucose: 4.5-5.5 mM (70-110 mg/dL or 3.5-5.6 mmol/L)',
            'Arterial blood pressure: 120/80 mmHg',
            'Blood pH: 7.35-7.45',
            'Plasma osmolality: 290 mosm/kgH2O'
          ]
        },
        {
          type: 'list',
          title: 'Additional Parameters',
          items: [
            'O2 and CO2 levels',
            'Electrolyte concentrations (Na+, K+, Ca2+, Cl-)',
            'Water balance',
            'Hormone levels'
          ]
        },
        {
          type: 'paragraph',
          content: 'Control is achieved via nervous and endocrine systems using primarily negative feedback mechanisms.'
        }
      ]
    },
    'lo-3': {
      title: 'Distinguish between guidance and control',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Guidance vs. Control'
        },
        {
          type: 'comparison',
          title: 'Guidance vs. Control',
          leftLabel: 'Guidance (Open-Loop)',
          rightLabel: 'Control (Closed-Loop)',
          items: [
            { left: 'No feedback from output', right: 'Continuous feedback monitoring' },
            { left: 'No error detection or correction', right: 'Real-time error detection and correction' },
            { left: 'Only predicted errors controlled', right: 'Unpredicted errors can be controlled' },
            { left: 'More stable', right: 'Can be slightly unstable' },
            { left: 'Must know all factors to operate', right: 'No need to know all factors' }
          ]
        },
        {
          type: 'clinical',
          content: 'Example of Guidance: Hormonal stress response - adrenaline released in predetermined pattern without monitoring results.'
        },
        {
          type: 'clinical',
          content: 'Example of Control: Blood glucose regulation - continuous monitoring with insulin/glucagon adjustments based on detected deviations from set point.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the major forms of physiological controlling circuits (humoral, neuronal)',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Neuronal vs. Humoral Control Circuits'
        },
        {
          type: 'comparison',
          title: 'Neuronal vs. Humoral Control',
          leftLabel: 'Neuronal Control',
          rightLabel: 'Humoral Control',
          items: [
            { left: 'Uses action potentials in nerve fibers', right: 'Uses chemical mediators (hormones, cytokines)' },
            { left: 'Fast (milliseconds to seconds)', right: 'Slower (seconds to hours)' },
            { left: 'Precise, localized signaling', right: 'Widespread, diffuse distribution' },
            { left: 'Short-lasting effects', right: 'Longer-lasting effects' },
            { left: 'Higher energy consumption', right: 'Lower energy cost' },
            { left: 'Example: Baroreceptor reflex', right: 'Example: Insulin regulation' }
          ]
        },
        {
          type: 'keypoint',
          content: 'Both systems are frequently integrated in coordinated physiological responses, combining the speed of neural control with the sustained effects of humoral control.'
        }
      ]
    },
    'lo-5': {
      title: 'Describe the parts of the neuronal reflex arch and explain their respective functions in control',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Components of the Neuronal Reflex Arc'
        },
        {
          type: 'steps',
          title: 'Six Components of the Reflex Arc',
          items: [
            'Receptor: Specialized sensor detects changes in the controlled variable and converts them to neural signals',
            'Afferent Pathway: Sensory nerve transmits signals from receptor to the central nervous system (CNS)',
            'Integration Center: Located in spinal cord, brainstem, or higher centers; processes incoming signal and compares to set point',
            'Set Point: The desired target value for the controlled variable against which the sensory signal is compared',
            'Efferent Pathway: Motor nerve transmits commands from CNS to the periphery',
            'Effector: Organ or tissue (muscle or gland) that executes the response to correct any deviation'
          ]
        },
        {
          type: 'clinical',
          content: 'Example - Baroreceptor Reflex: Baroreceptors in carotid sinus and aortic arch detect blood pressure changes → signals via glossopharyngeal and vagus nerves → medulla oblongata compares to set point → autonomic nerves send commands → heart rate and blood vessel diameter adjust to restore normal pressure.'
        },
        {
          type: 'keypoint',
          content: 'The reflex arc forms a complete closed-loop control system that can operate automatically without conscious awareness.'
        }
      ]
    },
    'lo-6': {
      title: 'Define negative and positive feedback control. Give examples for processes controlled by negative feedback, positive feedback. Explain feed-forward control',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Feedback Control Mechanisms'
        },
        {
          type: 'keypoint',
          content: 'Negative Feedback: The response opposes the initial change, returning the parameter toward its set point, thereby stabilizing the system. This is the most common control mechanism in physiology.'
        },
        {
          type: 'clinical',
          content: 'Negative Feedback Example: Elevated blood glucose → insulin secretion → glucose uptake by cells increases → blood glucose decreases back toward normal.'
        },
        {
          type: 'keypoint',
          content: 'Positive Feedback: The response amplifies the initial change, moving the parameter further from the set point. While destabilizing, it is useful for rapid completion of specific processes and must have a termination mechanism.'
        },
        {
          type: 'clinical',
          content: 'Positive Feedback Example: Blood clotting cascade - activated clotting factors activate additional factors in an amplifying cascade until clot formation is complete.'
        },
        {
          type: 'paragraph',
          content: 'Feed-Forward Control: An anticipatory response based on learned patterns, occurring before the variable actually changes. This prevents deviation rather than correcting it.'
        },
        {
          type: 'clinical',
          content: 'Feed-Forward Example: Cephalic phase of digestion - sight and smell of food trigger saliva and gastric secretion before eating begins, preparing the digestive system in advance.'
        }
      ]
    },
    'lo-7': {
      title: 'Characterize endocrine, paracrine and autocrine humoral control based on the release site of the mediators and their path to the target cells',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Types of Humoral Control'
        },
        {
          type: 'table',
          headers: ['Type', 'Mediator Path', 'Distance', 'Speed', 'Duration', 'Example'],
          rows: [
            ['Endocrine', 'Bloodstream to distant cells', 'Long-distance', 'Slower', 'Prolonged', 'Thyroid hormone → metabolism'],
            ['Paracrine', 'Diffusion to neighboring cells', 'Short diffusion', 'Rapid', 'Short-lived', 'Histamine → local vasodilation'],
            ['Autocrine', 'Cell acts on itself', 'No distance', 'Rapid', 'Variable', 'IL-2 → T cell proliferation']
          ]
        },
        {
          type: 'keypoint',
          content: 'Endocrine: Hormones secreted into bloodstream reach distant target cells with specific receptors. Systemic, widespread effects.'
        },
        {
          type: 'keypoint',
          content: 'Paracrine: Mediators released into local extracellular fluid affect neighboring cells through short diffusion. Localized, rapid effects.'
        },
        {
          type: 'keypoint',
          content: 'Autocrine: Cell releases mediators that act on itself through its own receptors. Self-regulation mechanism.'
        }
      ]
    },
    'lo-8': {
      title: 'Define "behavioural control" and explain its importance/necessity. Give examples!',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Behavioral Control'
        },
        {
          type: 'paragraph',
          content: 'Behavioral control refers to voluntary, conscious actions an organism performs to maintain homeostasis, ensure survival, and adapt to environmental changes. It is necessary when physiological mechanisms alone are insufficient or to minimize their activation, thereby conserving energy.'
        },
        {
          type: 'list',
          title: 'Importance of Behavioral Control',
          items: [
            'Extends homeostatic range beyond what automatic systems can achieve',
            'Provides anticipatory responses (feed-forward)',
            'Conserves energy by reducing burden on autonomic mechanisms',
            'Allows adaptation to extreme environmental conditions'
          ]
        },
        {
          type: 'list',
          title: 'Examples',
          items: [
            'Thermoregulation: Seeking shade when hot, wearing clothing when cold',
            'Thirst behavior: Drinking before severe dehydration occurs',
            'Hunger: Eating to prevent energy depletion',
            'Pain avoidance: Removing hand from hot object',
            'Reproductive behaviors: Mate selection, brood care'
          ]
        },
        {
          type: 'keypoint',
          content: 'Behavioral control is typically feed-forward and serves adaptation to both the external environment (homeostatic drives) and reproductive success (reproductive drives).'
        }
      ]
    },
    'lo-9': {
      title: 'How can the efficiency of control systems be expressed quantitatively? Define gain!',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Quantifying Control System Efficiency: Gain'
        },
        {
          type: 'keypoint',
          content: 'Gain is a quantitative measure of control system effectiveness. It measures how effectively a control system maintains constant conditions when faced with a disturbance.'
        },
        {
          type: 'formula',
          title: 'Gain Formula',
          formula: 'Gain = Correction Achieved / Remaining Error',
          variables: [
            { symbol: 'Correction Achieved', definition: 'Error without control - Error with control' },
            { symbol: 'Remaining Error', definition: 'Error with control active' }
          ],
          alternativeForm: 'Gain = (Error without control - Error with control) / Error with control'
        },
        {
          type: 'keypoint',
          content: 'Higher gain indicates more effective control. Infinite gain would represent perfect control where no error remains after correction.'
        },
        {
          type: 'clinical',
          content: 'Example: If blood pressure drops 40 mmHg without baroreceptor control but only 8 mmHg with the reflex active, the gain = (40 - 8) / 8 = 32 / 8 = 4. This means the control system is 4 times more effective than no control.'
        },
        {
          type: 'paragraph',
          content: 'Gain allows comparison of different control systems and prediction of their behavior under various disturbances.'
        }
      ]
    },
    'lo-10': {
      title: 'Define the term servo-control mechanism',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Servo-Control Mechanism'
        },
        {
          type: 'keypoint',
          content: 'A servo-control mechanism is a control system in which the set point (target value for regulation) can be changed based on external or internal conditions. The system adapts the set point in response to environmental or physiological changes.'
        },
        {
          type: 'paragraph',
          content: 'This allows flexible regulation beyond fixed homeostatic values, enabling the body to intentionally shift to new steady states when beneficial.'
        },
        {
          type: 'clinical',
          content: 'Classic Example: Fever During Infection'
        },
        {
          type: 'steps',
          title: 'How Fever Demonstrates Servo-Control',
          items: [
            'Normal set point: Body temperature maintained at 37°C',
            'Bacterial invasion: Pyrogens (from bacteria or immune cells) signal the hypothalamus',
            'Set point elevation: Hypothalamic thermoregulatory center raises set point to 38-39°C',
            'New steady state: Temperature control system maintains the elevated temperature (fever)',
            'Beneficial effect: Higher temperature helps immune system fight pathogens (many bacteria are sensitive to heat)',
            'Resolution: Once infection clears, set point returns to normal 37°C'
          ]
        },
        {
          type: 'keypoint',
          content: 'Servo mechanisms allow the control system to be activated and establish a NEW steady state, rather than returning to the original set point. This distinguishes fever (servo-control) from hyperthermia (control system failure).'
        }
      ]
    }
  }
};

export default topic1QuickReview;
