const topic5 =   {
    id: 'topic-5',
    number: 5,
    category: 'neurophysiology',
    mcqs: ['mcq-1'],
    title: 'The electric properties of neuronal membranes',
    subtitle: 'Understanding ion channel properties, gating mechanisms, graded versus action potentials, and the ionic basis of electrical signaling in neurons through voltage-gated channels.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: false,
        title: 'Define the following terms regarding ion channels: selectivity, gating, activation, inactivation.',
        keyPoints: [
          'Selectivity: Ion channels allow specific ions based on size and charge lining; negative charges permit cations, positive charges permit anions',
          'Size discrimination: Narrow channels (Na+ selective) vs. broader channels (nicotinic receptor permits Na+ and K+)',
          'Gating: Process by which ion channels open or close in response to specific stimuli',
          'Three gate types: (1) Voltage-gated (respond to membrane potential changes), (2) Second messenger-gated (cAMP, IP3), (3) Ligand-gated (hormones, neurotransmitters)',
          'Activation: Transition from closed non-conductive state to open conductive state; triggered by voltage, ligand binding, or other stimuli',
          'Inactivation: Transition from open to non-conductive inactivated state even if stimulus persists; regulatory mechanism preventing continuous flow',
          'Example: Voltage-gated Na+ channels inactivate shortly after opening during action potential via ball-and-chain mechanism'
        ],
        officialDefinitions: [
          'Selectivity: ion channels are selective and allow ions with specific characteristics to move through them. This selectivity is based on both the size of the channel and the charges lining it. For example, channels lined with negative charges typically permit the passage of cations but exclude anions; channels lined with positive charges permit the passage of anions but exclude cations. Channels also discriminate on the basis of size. For example, a cation-selective channel lined with negative charges might permit the passage of Na+ but exclude K+; another cation-selective channel (e.g., nicotinic receptor on the motor end plate) might have less selectivity and permit the passage of several different small cations.',
          'Gating describes the process by which ion channels open or close in response to specific stimuli. The gates on ion channels are controlled by three types of sensors. One type of gate has sensors that respond to changes in membrane potential (i.e., voltage-gated channels); a second type of gate responds to changes in signaling molecules (i.e., second messenger–gated channels); and a third type of gate responds to changes in ligands such as hormones or neurotransmitters (i.e., ligand-gated channels). Ion channels are controlled by gates, and, depending on the position of the gates, the channels may be open or closed. When a channel is open, the ions for which it is selective can flow through it by passive diffusion, down the existing electrochemical gradient. In the open state, there is a continuous path between ECF and ICF, through which ions can flow. When the channel is closed, the ions cannot flow through it, no matter what the size of the electrochemical gradient.',
          'Activation: is the process through which an ion channel transitions from a closed (non-conductive) state to an open (conductive) state, permitting the flow of ions across the membrane. Activation usually occurs in response to specific triggers such as changes in voltage, ligand binding, or other stimuli. For example, a voltage-gated sodium channel is activated when the membrane potential becomes less negative, leading to the opening of the channel.',
          'Inactivation: is the process by which an open ion channel transitions to a non-conductive state (inactvated), even if the initial activating stimulus is still present. Inactivation serves as a regulatory mechanism to prevent continuous ion flow, thus contributing to the timing and termination of signals, such as in neuronal action potentials. For instance, voltage-gated sodium channels inactivate shortly after opening, ensuring the rapid termination of sodium influx during an action potential.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Selectivity refers to how ion channels allow only specific ions to pass based on channel size and charges lining the pore. Channels with negative charges permit cations while those with positive charges permit anions. Size also discriminates, allowing sodium through narrow channels while excluding potassium.' },
            { type: 'paragraph', content: 'Gating describes the process by which channels open or close in response to stimuli.' },
            {
              type: 'list',
              intro: 'Three types of gates exist:',
              items: [
                'Voltage-gated responding to membrane potential changes',
                'Second messenger-gated responding to intracellular signaling molecules like cAMP or IP3',
                'Ligand-gated responding to hormones or neurotransmitters'
              ]
            },
            { type: 'paragraph', content: 'Activation is the transition from closed non-conductive state to open conductive state, triggered by voltage changes, ligand binding, or other stimuli.' },
            { type: 'paragraph', content: 'Inactivation is the transition from open to non-conductive inactivated state even if the activating stimulus persists. This regulatory mechanism prevents continuous ion flow and times signal termination.' },
            { type: 'paragraph', content: 'For example, voltage-gated sodium channels inactivate shortly after opening during action potentials through the ball-and-chain inactivation mechanism.' }
          ],
          raw: 'Selectivity refers to how ion channels allow only specific ions to pass based on channel size and charges lining the pore. Channels with negative charges permit cations while those with positive charges permit anions. Size also discriminates, allowing sodium through narrow channels while excluding potassium. Gating describes the process by which channels open or close in response to stimuli. Three types of gates exist: voltage-gated responding to membrane potential changes, second messenger-gated responding to intracellular signaling molecules like cAMP or IP3, and ligand-gated responding to hormones or neurotransmitters. Activation is the transition from closed non-conductive state to open conductive state, triggered by voltage changes, ligand binding, or other stimuli. Inactivation is the transition from open to non-conductive inactivated state even if the activating stimulus persists. This regulatory mechanism prevents continuous ion flow and times signal termination. For example, voltage-gated sodium channels inactivate shortly after opening during action potentials through the ball-and-chain inactivation mechanism.'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Compare the gating mechanisms of intra- and extracellular ligand-gated, voltage-gated, and mechanical-gated ion channels.',
        keyPoints: [
          'Extracellular ligand-gated: Sensors on extracellular side; controlled by hormones and neurotransmitters (e.g., nicotinic ACh receptor permeable to Na+ and K+)',
          'Intracellular ligand-gated (second messenger-gated): Sensors on intracellular side; controlled by cAMP, IP3 (e.g., cardiac sinoatrial Na+ channels opened by increased cAMP)',
          'Voltage-gated plasma membrane: Voltage-sensing S4 segment moves with depolarization; positive charges shift causing gate opening (e.g., neuronal Na+ channels during action potential)',
          'Voltage-gated organelle membrane: Respond to voltage across intracellular membranes (e.g., mitochondrial Ca2+ uniporter, sarcoplasmic reticulum ryanodine receptor)',
          'Extracellular mechanosensors: Gated by membrane stretch or extracellular matrix tension; deformation opens channel',
          'Intracellular mechanosensors: Sensitive to cytoskeletal tension or organelle deformation; respond to internal pressure (e.g., stretch-activated Ca2+ channels in nuclear envelope, ER)',
          'Common feature: All provide pathway for ion flow when open; differ in stimulus type and sensor location'
        ],
        officialDefinitions: [
          'Extracellular Ligand-gated channels have gates that are controlled by hormones and neurotransmitters. The sensors for these gates are located on the extracellular side of the ion channel. For example, the nicotinic receptor on the motor end plate is actually an ion channel that opens when acetylcholine (ACh) binds to it; when open, it is permeable to Na+ and K+ ions.',
          'Second messenger–gated channels (Intracellular Ligand-Gated Channels) have gates that are controlled by changes in levels of intracellular signaling molecules such as cyclic adenosine mono- phosphate (cAMP) or inositol 1,4,5-triphosphate (IP3). Thus the sensors for these gates are on the intracellular side of the ion channel. For example, the gates on Na+ channels in cardiac sinoatrial node are opened by increased intracellular cAMP.',
          'Voltage-Gated Ion Channels: These channels respond to changes in membrane potential. Extracellular Sensing Domain (Plasma Membrane) The voltage-sensing domain is located within the membrane, but its response is triggered by voltage changes across the extracellular membrane. Positive charges in the S4 segment move in response to depolarization, causing the gate to open or close. Example: Neuronal voltage-gated Na⁺ channels open during an action potential.',
          'Intracellular/Organelle Voltage-Sensitive Channel: Some organelle membranes (e.g., mitochondria, ER) also have voltage differences. Channels here are gated by voltage across intracellular membranes, responding to changes in membrane potential within the cell. Example: The mitochondrial Ca²⁺ uniporter and ryanodine receptor (RyR) in the sarcoplasmic reticulum are activated by internal voltage or Ca²⁺ changes.',
          'Mechanically-Gated Ion Channels (Mechanosensitive Channels): These channels respond to mechanical forces, such as pressure or stretch. Extracellular Mechanosensors: Some channels are gated by forces applied to the cell surface, such as membrane stretch or extracellular matrix tension. These forces deform the membrane or linked proteins, opening the channel.',
          'Intracellular Mechanosensors: Others are sensitive to cytoskeletal tension or organelle deformation, such as from internal pressure or structural changes. Channels located on internal membranes (e.g., nuclear envelope, ER) may respond to mechanical forces inside the cell. Example: Stretch-activated Ca²⁺ channels in the nuclear envelope or ER.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Ligand-gated channels open in response to chemical binding.' },
            { type: 'paragraph', content: 'Extracellular ligand-gated channels have sensors on the extracellular side controlled by hormones and neurotransmitters, such as the nicotinic acetylcholine receptor which opens when ACh binds and becomes permeable to sodium and potassium.' },
            { type: 'paragraph', content: 'Intracellular ligand-gated or second messenger-gated channels have sensors on the intracellular side controlled by signaling molecules like cyclic AMP or IP3, such as sodium channels in cardiac sinoatrial node opened by increased intracellular cAMP.' },
            { type: 'paragraph', content: 'Voltage-gated channels respond to membrane potential changes. In plasma membrane channels, the voltage-sensing S4 segment with positive charges moves during depolarization causing gates to open, as in neuronal sodium channels during action potentials.' },
            { type: 'paragraph', content: 'Some organelle membranes also have voltage-sensitive channels responding to voltage across intracellular membranes.' },
            { type: 'paragraph', content: 'Mechanically-gated channels respond to physical forces. Extracellular mechanosensors are gated by membrane stretch or extracellular matrix tension.' },
            { type: 'paragraph', content: 'Intracellular mechanosensors respond to cytoskeletal tension or organelle deformation from internal pressure, such as stretch-activated calcium channels in the nuclear envelope or endoplasmic reticulum.' }
          ],
          raw: 'Ligand-gated channels open in response to chemical binding. Extracellular ligand-gated channels have sensors on the extracellular side controlled by hormones and neurotransmitters, such as the nicotinic acetylcholine receptor which opens when ACh binds and becomes permeable to sodium and potassium. Intracellular ligand-gated or second messenger-gated channels have sensors on the intracellular side controlled by signaling molecules like cyclic AMP or IP3, such as sodium channels in cardiac sinoatrial node opened by increased intracellular cAMP. Voltage-gated channels respond to membrane potential changes. In plasma membrane channels, the voltage-sensing S4 segment with positive charges moves during depolarization causing gates to open, as in neuronal sodium channels during action potentials. Some organelle membranes also have voltage-sensitive channels responding to voltage across intracellular membranes. Mechanically-gated channels respond to physical forces. Extracellular mechanosensors are gated by membrane stretch or extracellular matrix tension. Intracellular mechanosensors respond to cytoskeletal tension or organelle deformation from internal pressure, such as stretch-activated calcium channels in the nuclear envelope or endoplasmic reticulum.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Explain the importance of the „voltage clamp" technique to study ion channel function.',
        keyPoints: [
          'Voltage clamp: Experimental technique holding membrane potential at set level while measuring current needed to maintain that voltage',
          'Two electrodes: One measures membrane potential, other injects current to keep voltage at command value',
          'Principle: When channels open, ions flow trying to change voltage; amplifier injects counter-current preventing voltage change',
          'Measured current: Injected current equals and opposes ionic current; directly reveals ion channel activity',
          'Key measurements: Time course of Na+ or K+ currents, voltage threshold for opening, inactivation dynamics, current-voltage relationships',
          'Historical importance: Hodgkin and Huxley used on squid giant axon (1950s); described Na+ and K+ channel kinetics and ionic basis of action potential',
          'Applications: Understanding voltage-dependence of activation and inactivation; separating Na+ and K+ currents; modeling channel gating variables'
        ],
        officialDefinitions: [
          'The voltage clamp is an experimental technique used to study how voltage-gated ion channels (like Na⁺ or K⁺ channels) open and close in response to changes in membrane potential. It allows scientists to: Control the membrane potential, Measure the ionic currents flowing across the membrane, Understand the voltage-dependence of channel activation and inactivation.',
          'Basic Principle: The voltage clamp holds ("clamps") the membrane potential at a set level, while measuring how much current is needed to maintain that voltage.',
          'How It Works (Step-by-Step): 1. Two electrodes are inserted into a cell: One measures membrane potential (Vm). The other injects current to keep Vm at a desired value. 2. The experimenter sets the membrane potential to a specific value (the "command voltage"). 3. If any ion channels open, ions try to flow in/out, which would change Vm. 4. The amplifier injects a counter-current to prevent any change in Vm. 5. The amount of injected current is equal and opposite to the ionic current across the membrane → this current is recorded.',
          'What Can Be Measured? The time course of Na⁺ or K⁺ currents. The voltage threshold for channel opening. Inactivation dynamics (e.g., when Na⁺ channels shut during sustained depolarization). Current–voltage (I–V) relationships.',
          'Key Discoveries Using Voltage Clamp: First used by Hodgkin and Huxley on the squid giant axon (1950s). Allowed them to describe: Na⁺ and K⁺ channel kinetics, The ionic basis of the action potential, The gating variables and conductance equations still used in modeling today'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The voltage clamp technique is critically important for studying ion channel function by controlling membrane potential while measuring resulting ionic currents.' },
            {
              type: 'steps',
              intro: 'How it works:',
              items: [
                'Two electrodes are inserted into a cell: one measures membrane potential while the other injects current to hold voltage at a desired command value',
                'When ion channels open, ions attempt to flow changing the voltage',
                'The amplifier injects a counter-current preventing any voltage change',
                'The amount of injected current equals and opposes the ionic current across the membrane, allowing direct measurement of channel activity'
              ]
            },
            { type: 'paragraph', content: 'This reveals the time course of sodium or potassium currents, voltage thresholds for channel opening, inactivation dynamics, and current-voltage relationships.' },
            { type: 'paragraph', content: 'Hodgkin and Huxley first used voltage clamp on the squid giant axon in the 1950s, allowing them to describe sodium and potassium channel kinetics and the ionic basis of the action potential.' },
            { type: 'paragraph', content: 'The technique enabled development of gating variable equations still used in computational modeling today, making it fundamental to understanding how voltage-gated channels generate electrical signals in excitable cells.' }
          ],
          raw: 'The voltage clamp technique is critically important for studying ion channel function by controlling membrane potential while measuring resulting ionic currents. The technique uses two electrodes inserted into a cell: one measures membrane potential while the other injects current to hold voltage at a desired command value. When ion channels open, ions attempt to flow changing the voltage, but the amplifier injects a counter-current preventing any voltage change. The amount of injected current equals and opposes the ionic current across the membrane, allowing direct measurement of channel activity. This reveals the time course of sodium or potassium currents, voltage thresholds for channel opening, inactivation dynamics, and current-voltage relationships. Hodgkin and Huxley first used voltage clamp on the squid giant axon in the 1950s, allowing them to describe sodium and potassium channel kinetics and the ionic basis of the action potential. The technique enabled development of gating variable equations still used in computational modeling today, making it fundamental to understanding how voltage-gated channels generate electrical signals in excitable cells.'
        }
      },
      {
        id: 'lo-4',
        isCritical: true,
        title: '>>Define and compare the electrotonic (local, graded) potentials with the action potential<< (direction of potential change, graded or not, propagation velocity, change in the amplitude of the potential change during grading). Describe the regions of the neuronal membrane where these potentials typically occur.',
        keyPoints: [
          'Electrotonic potentials: Small localized changes proportional to stimulus strength; also called graded or local potentials',
          'Electrotonic characteristics: (1) Can be depolarizing or hyperpolarizing, (2) Graded amplitude varies with stimulus, (3) Slow passive spread, (4) Amplitude decays with distance (decremental)',
          'Action potential: Rapid large transient change when threshold reached; all-or-none response',
          'Action potential characteristics: (1) Always depolarizing initially then repolarizing, (2) Not graded - fixed amplitude once threshold reached, (3) High velocity active propagation, (4) Amplitude unchanged during propagation (regenerative)',
          'Electrotonic potential locations: Dendrites (receive synaptic inputs), cell body/soma (integrate inputs), axon hillock (high Na+ channel density for summation)',
          'Action potential locations: Axon hillock/initial segment (initiation site with high Na+ channel density), axon (propagation), nodes of Ranvier in myelinated axons, axon terminals (trigger neurotransmitter release)',
          'Functional integration: Electrotonic potentials summate at axon hillock; if threshold reached, action potential initiated and propagates along axon'
        ],
        officialDefinitions: [
          'Electrotonic (Local, Graded) Potentials also known as graded potentials or local potentials, are small, localized changes in membrane potential in response to a stimulus, such as synaptic input or sensory receptor activation. These potentials are proportional to the strength of the stimulus and decay with distance from the site of origin due to the passive properties of the membrane.',
          'Electrotonic Potential Characteristics: Direction of Potential Change: Can be either depolarizing (making the inside of the cell less negative) or hyperpolarizing (making the inside of the cell more negative). Graded or Not: Graded, meaning their amplitude varies in direct proportion to the strength and duration of the stimulus. Propagation Velocity: Low and passive; they spread by the local current flow without active regeneration, resulting in a slower spread and limited distance. Change in Amplitude During Propagation: Amplitude decreases (decays) as the potential travels away from the site of origin due to loss of current across the membrane (decremental spread).',
          'Action Potentials: is a rapid, large, and transient change in membrane potential that occurs when a cell\'s membrane potential reaches a certain threshold. All-or-none response. An action potential either occurs or does not occur. If an excitable cell is depolarized to threshold in a normal manner, then the occurrence of an action potential is inevitable. On the other hand, if the membrane is not depolarized to threshold, no action potential can occur.',
          'Action Potential Characteristics: Direction of Potential Change: Always depolarizing initially, followed by repolarization and a possible hyperpolarization phase. Graded or Not: Not graded; action potentials have a fixed amplitude and duration once the threshold is reached, regardless of the strength of the stimulus (as long as it reaches or exceeds the threshold). Propagation Velocity: High and active; action potentials propagate rapidly along the axon or muscle membrane through the sequential opening of voltage-gated ion channels, maintaining their amplitude. Change in Amplitude During Propagation: Amplitude does not change during propagation; action potentials are actively regenerated along the membrane and maintain a constant amplitude over distance.',
          'Electrotonic potentials occur in regions specialized for receiving and integrating signals. These areas include: 1. Dendrites: Dendrites are the primary regions for receiving synaptic inputs from other neurons. 2. Cell Body (Soma): The cell body integrates multiple incoming electrotonic potentials from the dendrites. These graded potentials can summate (spatially and temporally) at the soma, influencing whether the neuron will reach the threshold to initiate an action potential. 3. Axon Hillock: The axon hillock, also known as the initial segment, is the site where the cell body meets the axon. It is a critical region for integrating graded potentials due to its high density of voltage-gated sodium channels.',
          'Action potentials occur in regions that are specialized for propagating signals over long distances. These areas include: Axon Initial Segment (Axon Hillock): The axon hillock is where the action potential is initiated due to its high density of voltage-gated sodium channels. This region is the "decision point" where the neuron decides whether to fire an action potential based on the summation of incoming graded potentials. Axon: The axon is the primary site for the propagation of action potentials. Nodes of Ranvier (in Myelinated Axons): In myelinated axons, action potentials occur at the Nodes of Ranvier, which are gaps in the myelin sheath that expose the axon membrane. Axon Terminals (Synaptic Boutons): Action potentials reach the axon terminals, where they trigger the release of neurotransmitters into the synaptic cleft.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Electrotonic or local graded potentials are small localized membrane potential changes proportional to stimulus strength.<<', critical: true },
            {
              type: 'list',
              intro: '>>Characteristics:<<',
              critical: true,
              items: [
                'Can be either depolarizing or hyperpolarizing',
                'Amplitude is graded varying directly with stimulus intensity',
                'Spread passively at low velocity',
                'Amplitude decays with distance from the origin due to decremental spread'
              ]
            },
            { type: 'paragraph', content: '>>Action potentials are rapid large transient changes occurring when threshold is reached.<<', critical: true },
            {
              type: 'list',
              intro: '>>Characteristics:<<',
              critical: true,
              items: [
                'Always depolarize initially followed by repolarization',
                'Not graded having fixed amplitude once threshold is reached regardless of stimulus strength beyond threshold',
                'Propagate actively at high velocity through sequential opening of voltage-gated channels',
                'Amplitude does not change during propagation being actively regenerated along the membrane'
              ]
            },
            { type: 'paragraph', content: 'Electrotonic potentials typically occur in dendrites which receive synaptic inputs, the cell body or soma which integrates multiple incoming potentials, and the axon hillock with high sodium channel density where potentials summate spatially and temporally.' },
            { type: 'paragraph', content: 'Action potentials occur in the axon hillock or initial segment where they are initiated due to high voltage-gated sodium channel density, along the axon where they propagate, at nodes of Ranvier in myelinated axons, and at axon terminals where they trigger neurotransmitter release.' }
          ],
          raw: '>>Electrotonic or local graded potentials are small localized membrane potential changes proportional to stimulus strength. They can be either depolarizing or hyperpolarizing, their amplitude is graded varying directly with stimulus intensity, they spread passively at low velocity, and their amplitude decays with distance from the origin due to decremental spread. Action potentials are rapid large transient changes occurring when threshold is reached. They always depolarize initially followed by repolarization, they are not graded having fixed amplitude once threshold is reached regardless of stimulus strength beyond threshold, they propagate actively at high velocity through sequential opening of voltage-gated channels, and their amplitude does not change during propagation being actively regenerated along the membrane.<< Electrotonic potentials typically occur in dendrites which receive synaptic inputs, the cell body or soma which integrates multiple incoming potentials, and the axon hillock with high sodium channel density where potentials summate spatially and temporally. Action potentials occur in the axon hillock or initial segment where they are initiated due to high voltage-gated sodium channel density, along the axon where they propagate, at nodes of Ranvier in myelinated axons, and at axon terminals where they trigger neurotransmitter release.'
        }
      },
      {
        id: 'lo-5',
        isCritical: true,
        title: '>>Make a schematic drawing of the membrane potential changes during an action potential recorded in the giant squid axon. Using the drawing, identify the phases of the action potential.<< Explain the terms threshold and the "all or none" principle. Define the terms rheobase and chronaxia.',
        keyPoints: [
          'Action potential phases: (1) Rapid depolarization rising phase, (2) Peak or overshoot (positive voltage approximately +40 mV), (3) Repolarization falling phase, (4a) Afterhyperpolarization undershoot (more negative than resting), (4b) Return to resting potential',
          'Threshold potential: Membrane potential at which action potential occurrence becomes inevitable; less negative than resting potential requiring inward current for depolarization',
          'All-or-none principle: Action potential either occurs completely or does not occur at all; if threshold reached, full action potential inevitable; if not reached, no action potential',
          'Stimulus during refractory period: Either no action potential occurs or action potential lacks stereotypical size and shape',
          'Rheobase: Minimum constant current intensity required to elicit action potential when applied for infinitely long duration (approximately 300 ms); lowest stimulus strength if held long enough',
          'Chronaxie: Minimum duration stimulus must be applied at twice rheobase strength to trigger action potential; time to excite cell using strong stimulus (2× rheobase)',
          'Duration of action potential: Approximately 1 millisecond in giant squid axon'
        ],
        officialDefinitions: [
          'Action potential phases in giant squid axon: 1. rapid depolarization (rising phase), 2. peak (overshoot), 3. repolarization (falling phase), Afterpotentials (cell specific): 4a. hyperpolarizing, 4b. depolarizing',
          'The entire action potential duration in the giant squid axon is approximately 1 millisecond',
          'Threshold potential is the membrane potential at which occurrence of the action potential is inevitable. Because the threshold potential is less negative than the resting membrane potential, an inward current (flow of positive charge into cell) is required to depolarize the membrane potential to threshold. At threshold potential, net inward current becomes larger than net outward current (flow of positive charge out of cell).',
          'All-or-none response. An action potential either occurs or does not occur. If an excitable cell is depolarized to threshold in a normal manner, then the occurrence of an action potential is inevitable. On the other hand, if the membrane is not depolarized to threshold, no action potential can occur. Indeed, if the stimulus is applied during the refractory period, then either no action potential occurs, or the action potential will occur but not have the stereotypical size and shape.',
          'Rheobase is the minimum constant current intensity required to elicit an action potential in a neuron or muscle cell when the current is applied for an infinitely long duration (about 300ms) Think of it as: The lowest possible strength of stimulus that can activate the cell — if you hold it long enough.',
          'Chronaxie: is the minimum duration a stimulus must be applied at twice the rheobase strength to trigger an action potential. Think of it as: The time it takes to excite the cell using a strong stimulus (2× rheobase).'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>A schematic drawing of the action potential in giant squid axon shows membrane potential starting at resting level around negative 70 millivolts:<<', critical: true },
            {
              type: 'steps',
              intro: '>>Phases:<<',
              items: [
                'Phase one is rapid depolarization, the rising phase where voltage quickly becomes less negative',
                'Phase two is the peak or overshoot where membrane potential reaches approximately positive 40 millivolts, becoming positive',
                'Phase three is repolarization, the falling phase where voltage returns toward negative',
                'Phase four-a is afterhyperpolarization or undershoot where potential becomes more negative than resting, approaching negative 80 to 90 millivolts',
                'Phase four-b is return to resting potential'
              ]
            },
            { type: 'paragraph', content: '>>The entire event lasts approximately 1 millisecond.<<', critical: true },
            { type: 'paragraph', content: 'Threshold potential is the membrane potential at which occurrence of action potential becomes inevitable. Because threshold is less negative than resting potential, inward current or flow of positive charge into the cell is required to depolarize to threshold.' },
            { type: 'paragraph', content: 'The all-or-none principle means an action potential either occurs completely or does not occur at all. If the membrane is depolarized to threshold normally, action potential is inevitable. If not depolarized to threshold, no action potential can occur.' },
            { type: 'paragraph', content: 'Rheobase is the minimum constant current intensity required to elicit action potential when applied for infinitely long duration, about 300 milliseconds.' },
            { type: 'paragraph', content: 'Chronaxie is the minimum duration a stimulus at twice rheobase strength must be applied to trigger an action potential.' }
          ],
          raw: '>>A schematic drawing of the action potential in giant squid axon shows membrane potential starting at resting level around negative 70 millivolts. Phase one is rapid depolarization, the rising phase where voltage quickly becomes less negative. Phase two is the peak or overshoot where membrane potential reaches approximately positive 40 millivolts, becoming positive. Phase three is repolarization, the falling phase where voltage returns toward negative. Phase four-a is afterhyperpolarization or undershoot where potential becomes more negative than resting, approaching negative 80 to 90 millivolts. Phase four-b is return to resting potential. The entire event lasts approximately 1 millisecond.<< Threshold potential is the membrane potential at which occurrence of action potential becomes inevitable. Because threshold is less negative than resting potential, inward current or flow of positive charge into the cell is required to depolarize to threshold. The all-or-none principle means an action potential either occurs completely or does not occur at all. If the membrane is depolarized to threshold normally, action potential is inevitable. If not depolarized to threshold, no action potential can occur. Rheobase is the minimum constant current intensity required to elicit action potential when applied for infinitely long duration, about 300 milliseconds. Chronaxie is the minimum duration a stimulus at twice rheobase strength must be applied to trigger an action potential.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Characterize the voltage-gated Na+-,<< K+- and Ca2+->>channels functionally<< (gating, activation, inactivation). Describe the role of voltage-gated Na+-, K+- and Ca2+-channels in the phases of the neuronal action potential (depolarisation, „overshoot", repolarisation, afterhyperpolarization). Define and explain the terms absolute and relative refractory periods.',
        keyPoints: [
          'Na+ channel structure: Two gates - activation gate (outer, opens quickly with depolarization) and inactivation gate (inner, closes slowly after delay via ball-and-chain mechanism)',
          'Na+ channel states: Resting (activation closed, inactivation open at -90 mV), Active (both gates open at threshold -55 mV allowing massive Na+ influx), Inactivated (activation open, inactivation closed), Reset (return to resting when repolarized)',
          'K+ channel: Opens at +30 mV; slower to open and close than Na+ channels; allows K+ efflux until resting potential; delayed closing causes afterhyperpolarization overshoot',
          'Ca2+ channel: Opens at +30 mV at axon terminals; Ca2+ influx triggers synaptic vesicle fusion and neurotransmitter release; inactivated when membrane repolarizes',
          'Depolarization phase: Na+ channels open rapidly at threshold; massive Na+ influx drives membrane toward ENa (+60 mV); steep upward slope',
          'Overshoot phase: Membrane becomes positive (+40 to +60 mV); Na+ channels still open but beginning to inactivate; K+ channels start opening',
          'Repolarization phase: Na+ channels inactivated stopping influx; K+ channels fully open causing K+ efflux; membrane returns toward EK (-90 mV); downward slope',
          'Afterhyperpolarization: Some K+ channels remain open; membrane drops below resting toward EK; helps reset and prevents immediate Na+ channel reactivation',
          'Absolute refractory period: From peak until resting potential reached; Na+ channels inactivated; no new action potential possible regardless of stimulus strength',
          'Relative refractory period: From afterhyperpolarization until resting potential reclaimed; new action potential possible but requires stronger-than-normal stimulus'
        ],
        officialDefinitions: [
          'Gating Mechanism: The Na⁺ channel has two types of gates: activation gates and inactivation gates. Activation gates open quickly in response to depolarization. Inactivation gates close in response to depolarization, but more slowly, after a time delay.',
          'The sodium voltage-gated channel has two gates: Activation gate – found at the outer part of the channel. Inactivation gate – found at the inner part of the channel.',
          'In resting state – the membrane potential is at approximately at -90mV. The activation gate is closed – preventing the entry of sodium (Na+1) ions into the cell.',
          'In depolarization – when the membrane potential starts becoming less negative (starts going towards 0), as it reaches a certain voltage, (typically found between -70mV to -50mV), the voltage itself will cause a conformational change in the channel\'s activation gate – flipping it all the way to an open position. This increases the permeability of the cell to sodium (by 500 to 5000 folds), allowing more and more sodium ions to enter the cell. This is the active state of the sodium voltage-gated channel. Note – as the voltage is increasing and the activation gates are opening, the inactivation gates start closing.',
          'In repolarization – after opening the sodium channels for some while (activated), the inactivation gates close. The inactivation gate doesn\'t reopen until the membrane potential gets close to the normal resting membrane potential. Thus, it\'s not possible for the sodium channels to open again without first repolarizing the nerve fiber.',
          'Voltage-gated potassium channel: The potassium voltage-gated channel has only one gate (either closer or opened). At rest (membrane potential at -90mV) – the gate is of the potassium channel is closed, preventing passage of potassium ions to the exterior of the cell. When the membrane potential rises (from -90mV towards 0) – this voltage change causes a conformational change in the gate and opens it, increasing the outflow of potassium ions from the inside of the cell to the exterior of the cell. However, the potassium channels open after some delay (they open just when the sodium channels beginning to close because of the inactivation). As a result, at this time sodium entry to the cell starts decreasing and potassium exit from the cell starts increasing, making the cell only lose positive charges leading to fast repolarization.',
          'The voltage gated Calcium channels: Open due to depolarization of the membrane potential slowly, the flow of Ca2+ into the cell contributes to depolarization',
          '1. Depolarization Phase: Role of Voltage-Gated Na⁺ Channels: Depolarization is initiated when the membrane potential becomes more positive, typically due to an excitatory stimulus that brings the membrane potential to a threshold (around -55 mV). At this threshold, voltage-gated Na⁺ channels rapidly open, allowing a massive influx of Na⁺ ions into the cell due to the electrochemical gradient (Na⁺ concentration is higher outside the cell). This Na⁺ influx further depolarizes the membrane, making it more positive and rapidly driving the membrane potential toward the equilibrium potential of Na⁺ (around +60 mV). The rapid opening of Na⁺ channels and the consequent Na⁺ influx is responsible for the rising phase of the action potential. Effect on Membrane Potential: The membrane potential rapidly shifts from the resting state (-70 mV) toward more positive values, resulting in the steep upward slope of the action potential. During depolarization, leaky K⁺ channels allow a small, constant outward flow of K⁺ to stabilize the membrane potential, while voltage-gated K⁺ channels remain closed and play no significant role until repolarization begins.',
          'Overshoot" Phase: Role of Voltage-Gated Na⁺ Channels: The "overshoot" phase refers to the point where the membrane potential becomes positive, often exceeding 0 mV and approaching the Na⁺ equilibrium potential (+40 to +60 mV). During this phase, Na⁺ channels are still open, but they begin to inactivate as the membrane potential continues to depolarize. Role of Voltage-Gated K⁺ Channels: remain mostly closed during the initial stages of the overshoot phase. They begin to open as the membrane reaches higher positive potentials and the Na⁺ channels start to inactivate. Effect on Membrane Potential: The membrane potential remains highly positive, reaching its peak during the overshoot phase. The Na⁺ influx continues to dominate until the Na⁺ channels begin to inactivate.',
          'Repolarization Phase: Role of Voltage-Gated Na⁺ Channels: During repolarization, voltage-gated Na⁺ channels become inactivated. Inactivation gates (the "ball-and-chain" mechanism) close the channels, preventing further Na⁺ influx despite continued depolarization. This cessation of Na⁺ entry stops the further depolarization of the membrane potential. Role of Voltage-Gated K⁺ Channels: Voltage-gated K⁺ channels now fully open, allowing the efflux of K⁺ ions out of the cell. The outward flow of K⁺, driven by its electrochemical gradient (higher K⁺ concentration inside the cell), repolarizes the membrane back toward the K⁺ equilibrium potential (around -90 mV). K⁺ efflux is responsible for the downward slope of the action potential, bringing the membrane potential back toward the resting state. Effect on Membrane Potential: The membrane potential shifts from a positive value back to a negative value as the K⁺ efflux dominates the ion flow. This phase is marked by a rapid decrease in membrane potential.',
          'Afterhyperpolarization Phase: Role of Voltage-Gated K⁺ Channels: After the repolarization phase, some voltage-gated K⁺ channels remain open, causing the membrane potential to become even more negative than the resting membrane potential. This phase is known as the after hyperpolarization or the "undershoot" phase. The continued K⁺ efflux causes the membrane potential to drop below the resting potential, approaching the K⁺ equilibrium potential (-90 mV). The after hyperpolarization phase helps to reset the membrane potential and prevent immediate reactivation of Na⁺ channels, contributing to the refractory period.',
          'Refractory period is a period during which another normal action potential cannot be elicited in an excitable cell. Refractory periods can be absolute or relative. (In cardiac muscle cells, there is an addi- tional category called effective refractory period.)',
          'The absolute refractory period is the time immediately following an action potential during which no new action potential can be generated, regardless of the strength of the stimulus. This period occurs because the voltage-gated Na⁺ channels are inactivated during the repolarization phase of the action potential.',
          'The relative refractory period is the time following the absolute refractory period during which a new action potential can be generated, but only by a stronger-than-normal stimulus.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Voltage-gated sodium channels have two gates: an activation gate at the outer part opening quickly with depolarization, and an inactivation gate at the inner part closing slowly after a time delay through the ball-and-chain mechanism.<<', critical: true },
            {
              type: 'steps',
              intro: '>>Sodium channel states:<<',
              items: [
                'At resting potential around negative 90 millivolts, the activation gate is closed',
                'When depolarized to threshold around negative 55 millivolts, the activation gate opens allowing massive sodium influx',
                'After a brief delay, the inactivation gate closes even though membrane is still depolarized',
                'When repolarized, inactivation gates reopen and activation gates reclose, resetting the channel'
              ]
            },
            { type: 'paragraph', content: '>>Voltage-gated potassium channels open at positive 30 millivolts allowing potassium efflux. They are slower to close, allowing potassium to trickle out past resting potential causing brief hyperpolarization.<<', critical: true },
            { type: 'paragraph', content: '>>Voltage-gated calcium channels open at positive 30 millivolts at axon terminals; calcium influx triggers vesicle fusion and neurotransmitter exocytosis.<<', critical: true },
            { type: 'paragraph', content: 'During depolarization, sodium channel rapid opening causes massive sodium influx driving membrane toward sodium equilibrium potential of positive 60 millivolts with steep upward slope.' },
            { type: 'paragraph', content: 'During overshoot, membrane potential becomes positive reaching plus 40 to plus 60 millivolts; sodium channels begin inactivating while potassium channels start opening.' },
            { type: 'paragraph', content: 'During repolarization, sodium channels are inactivated stopping influx while potassium channels fully open causing potassium efflux; membrane returns toward potassium equilibrium potential with downward slope.' },
            { type: 'paragraph', content: 'During afterhyperpolarization, some potassium channels remain open causing membrane to drop below resting potential approaching negative 90 millivolts.' },
            { type: 'paragraph', content: 'Absolute refractory period is from peak depolarization until resting potential is reached when sodium channels are inactivated; cell cannot be re-stimulated regardless of stimulus strength.' },
            { type: 'paragraph', content: 'Relative refractory period is from afterhyperpolarization until resting potential is reclaimed; cell can be re-stimulated but only with stronger-than-normal stimulus to reach threshold from the hyperpolarized state.' }
          ],
          raw: '>>Voltage-gated sodium channels have two gates: an activation gate at the outer part opening quickly with depolarization, and an inactivation gate at the inner part closing slowly after a time delay through the ball-and-chain mechanism. At resting potential around negative 90 millivolts, the activation gate is closed. When depolarized to threshold around negative 55 millivolts, the activation gate opens allowing massive sodium influx. After a brief delay, the inactivation gate closes even though membrane is still depolarized. When repolarized, inactivation gates reopen and activation gates reclose, resetting the channel. Voltage-gated potassium channels open at positive 30 millivolts allowing potassium efflux. They are slower to close, allowing potassium to trickle out past resting potential causing brief hyperpolarization. Voltage-gated calcium channels open at positive 30 millivolts at axon terminals; calcium influx triggers vesicle fusion and neurotransmitter exocytosis.<< During depolarization, sodium channel rapid opening causes massive sodium influx driving membrane toward sodium equilibrium potential of positive 60 millivolts with steep upward slope. During overshoot, membrane potential becomes positive reaching plus 40 to plus 60 millivolts; sodium channels begin inactivating while potassium channels start opening. During repolarization, sodium channels are inactivated stopping influx while potassium channels fully open causing potassium efflux; membrane returns toward potassium equilibrium potential with downward slope. During afterhyperpolarization, some potassium channels remain open causing membrane to drop below resting potential approaching negative 90 millivolts. Absolute refractory period is from peak depolarization until resting potential is reached when sodium channels are inactivated; cell cannot be re-stimulated regardless of stimulus strength. Relative refractory period is from afterhyperpolarization until resting potential is reclaimed; cell can be re-stimulated but only with stronger-than-normal stimulus to reach threshold from the hyperpolarized state.'
        }
      }
    ],
    referenceValues: []
  };

export default topic5;
