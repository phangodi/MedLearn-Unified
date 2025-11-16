const topic21 =   {
    id: 'topic-21',
    number: 21,
    category: 'neurophysiology',
    mcqs: ['mcq-1'],
    title: 'The peripheral nervous system: motor neurons, neuromuscular junction',
    subtitle: 'Structure and function of motor neurons and the neuromuscular junction mediating voluntary muscle contraction through cholinergic transmission.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: true,
        title: '>>Make a schematic figure of a motor neuron, and indicate the following parts: dendrite, axon, axon hillock, cell body. Give the anatomical locations of the cell bodies (ventral horn of the spinal cord gray matter, motor nuclei of cranial nerves), and classify the motor axons found in peripheral nerves according to the Erlanger-Gasser classification (Aα and Aγ fibers).<<',
        keyPoints: [
          'Motor neuron parts: Dendrites (receive signals), cell body/soma (metabolic center with nucleus), axon hillock (action potential initiation site), axon (transmits impulses to muscle)',
          'Cell body locations - spinal: Ventral (anterior) horn of spinal cord gray matter for lower motor neurons (LMNs) controlling limb and trunk muscles',
          'Cell body locations - cranial: Motor nuclei in brainstem (medulla, pons, midbrain) for face, head, neck muscles; examples include oculomotor and facial nuclei',
          'Aα fibers (alpha motor neurons): Large diameter, heavily myelinated, high conduction velocity (~100 m/s); innervate extrafusal muscle fibers for force generation and voluntary movement',
          'Aγ fibers (gamma motor neurons): Smaller diameter, moderately myelinated, moderate conduction velocity (~20 m/s); innervate intrafusal fibers in muscle spindles for muscle tone and stretch reflex sensitivity',
          'Upper motor neurons: Cell bodies in primary motor cortex; axons descend via corticospinal/corticobulbar tracts to modulate LMNs',
          'Lower motor neurons: Final common pathway from CNS to skeletal muscles; damage causes flaccid paralysis with muscle atrophy'
        ],
        officialDefinitions: [
          'Dendrites: Branching projections that receive signals from other neurons. They are located around the cell body.',
          'Cell Body (Soma): The main body of the neuron, containing the nucleus and organelles. It serves as the metabolic center and is where dendrites are attached.',
          'Axon Hillock: A specialized region at the junction between the cell body and the axon. This is where action potentials are initiated.',
          'Axon: A long projection that extends from the axon hillock. It transmits electrical impulses away from the cell body to other neurons or muscles.',
          'The ventral (anterior) horn of the spinal cord is where the cell bodies of lower motor neurons (LMNs) are located. These neurons send their axons out through the ventral root to innervate skeletal muscles, controlling limb and trunk movements.',
          'Motor Nuclei of Cranial Nerves: Location: Found in the brainstem (medulla, pons, and midbrain). Function: These motor nuclei contain the cell bodies of LMNs that innervate muscles of the face, head, and neck. Examples include the oculomotor nucleus (eye muscles) and facial nucleus (facial expressions).',
          'Aα Fibers: Characteristics: Large diameter, high conduction velocity, heavily myelinated. Function: Innervate extrafusal muscle fibers, responsible for generating force and voluntary movement.',
          'Aγ Fibers: Characteristics: Smaller diameter compared to Aα fibers, moderately myelinated. Function: Innervate intrafusal muscle fibers (within muscle spindles), which play a role in regulating muscle tone and the sensitivity of stretch reflexes.',
          'Upper Motor Neurons (UMNs): Cell bodies are located in the primary motor cortex (precentral gyrus), as well as in the premotor and supplementary motor areas. Pathway: Axons of UMNs travel down through the brainstem and spinal cord, forming pathways such as the corticospinal tract and corticobulbar tract. They initiate, plan, and regulate voluntary movements. They modulate LMNs, either directly through monosynaptic connections or indirectly via interneurons.',
          'Lower Motor Neurons (LMNs): Cell bodies are found in the ventral horn of the spinal cord gray matter for spinal nerves and in the motor nuclei of cranial nerves for cranial nerves. LMNs directly control skeletal muscle contractions. They act as the final common pathway for transmitting signals from the central nervous system to the muscles. Damage to LMNs leads to flaccid paralysis, characterized by muscle atrophy and decreased muscle tone.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: '>>Motor neuron schematic parts:<<',
              critical: true,
              items: [
                'Dendrites: Branching projections receiving signals around the cell body',
                'Cell body (soma): Contains nucleus and serves as metabolic center',
                'Axon hillock: Specialized junction between cell body and axon where action potentials are initiated',
                'Axon: Long projection transmitting electrical impulses to muscles'
              ]
            },
            {
              type: 'list',
              intro: '>>Anatomical locations of cell bodies:<<',
              critical: true,
              items: [
                'Spinal nerves: Ventral (anterior) horn of spinal cord gray matter for limb and trunk movements, containing both alpha and gamma motor neurons',
                'Cranial nerves: Motor nuclei in brainstem (medulla, pons, midbrain) innervating face, head, and neck muscles like oculomotor nucleus for eye muscles and facial nucleus for facial expressions'
              ]
            },
            {
              type: 'list',
              intro: '>>Erlanger-Gasser classification of motor axons:<<',
              critical: true,
              items: [
                'Aα fibers (alpha motor neurons): Large diameter, heavily myelinated with high conduction velocity ~100 m/s, innervating extrafusal muscle fibers for force generation and voluntary movement',
                'Aγ fibers (gamma motor neurons): Smaller diameter, moderately myelinated with moderate conduction velocity ~20 m/s, innervating intrafusal muscle fibers within muscle spindles to regulate muscle tone and stretch reflex sensitivity'
              ]
            }
          ],
          raw: '>>A motor neuron schematic shows dendrites as branching projections receiving signals around the cell body or soma, which contains the nucleus and serves as the metabolic center. The axon hillock is the specialized junction between cell body and axon where action potentials are initiated. The axon is a long projection transmitting electrical impulses to muscles.<< Motor neuron cell bodies are located in the ventral or anterior horn of spinal cord gray matter for spinal nerves controlling limb and trunk movements, containing both alpha and gamma motor neurons. For cranial nerves, cell bodies are in motor nuclei of the brainstem including medulla, pons, and midbrain, innervating face, head, and neck muscles like the oculomotor nucleus for eye muscles and facial nucleus for facial expressions. >>Motor axons are classified by Erlanger-Gasser as A-alpha fibers and A-gamma fibers.<< A-alpha fibers from alpha motor neurons are large diameter, heavily myelinated with high conduction velocity around one hundred meters per second, innervating extrafusal muscle fibers responsible for force generation and voluntary movement. A-gamma fibers from gamma motor neurons are smaller diameter, moderately myelinated with moderate conduction velocity around twenty meters per second, innervating intrafusal muscle fibers within muscle spindles to regulate muscle tone and stretch reflex sensitivity.'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Using the schematic figure, indicate the sites of the generation of IPSP, EPSP, the action potential and the release of neurotransmitter.',
        keyPoints: [
          'IPSP generation: Inhibitory postsynaptic potentials occur in dendrites and soma (cell body); hyperpolarization via Cl- influx or K+ efflux',
          'EPSP generation: Excitatory postsynaptic potentials occur in dendrites, soma, and axon hillock; depolarization via Na+ or Ca2+ influx',
          'Action potential initiation: Generated at axon hillock when summated EPSPs reach threshold; propagates down axon',
          'Neurotransmitter release: Occurs at axon terminal (presynaptic terminal at neuromuscular junction); acetylcholine released into synaptic cleft',
          'Summation: EPSPs and IPSPs summate at axon hillock; if net depolarization reaches threshold, action potential fires',
          'Electrotonic spread: Local graded potentials spread electrotonically from dendrites/soma to axon hillock'
        ],
        officialDefinitions: [
          'Sites of the generation of IPSP (inhibitory postsynaptic potential) – in the dendrites and soma',
          'Sites of the generation of EPSP (excitatory postsynaptic potential) – in the axon hillock and soma',
          'Sites where the neurotransmitter is released – in the axon terminal.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'IPSP generation: Inhibitory postsynaptic potentials are generated in the dendrites and cell body (soma) through hyperpolarization when inhibitory neurotransmitters like GABA or glycine open chloride channels allowing chloride influx or potassium channels allowing potassium efflux.' },
            { type: 'paragraph', content: 'EPSP generation: Excitatory postsynaptic potentials are generated in the dendrites, soma, and axon hillock through depolarization when excitatory neurotransmitters like glutamate or acetylcholine open sodium or calcium channels.' },
            { type: 'paragraph', content: 'Action potential initiation: These graded potentials spread electrotonically to the axon hillock where they summate. The action potential is initiated when the summated excitatory and inhibitory inputs cause net depolarization that reaches threshold (typically around -55 millivolts).' },
            { type: 'paragraph', content: 'Neurotransmitter release: Occurs at the axon terminal where the action potential triggers voltage-gated calcium channel opening, calcium influx causes vesicle fusion, and acetylcholine is released into the synaptic cleft at the neuromuscular junction.' }
          ],
          raw: 'Using the motor neuron schematic, inhibitory postsynaptic potentials or IPSPs are generated in the dendrites and cell body or soma through hyperpolarization when inhibitory neurotransmitters like GABA or glycine open chloride channels allowing chloride influx or potassium channels allowing potassium efflux. Excitatory postsynaptic potentials or EPSPs are generated in the dendrites, soma, and axon hillock through depolarization when excitatory neurotransmitters like glutamate or acetylcholine open sodium or calcium channels. These graded potentials spread electrotonically to the axon hillock where they summate. The action potential is initiated at the axon hillock when the summated excitatory and inhibitory inputs cause net depolarization that reaches threshold, typically around negative fifty-five millivolts. Once generated, the action potential propagates down the axon to the presynaptic terminal. Neurotransmitter release occurs at the axon terminal where the action potential triggers voltage-gated calcium channel opening, calcium influx causes vesicle fusion, and acetylcholine is released into the synaptic cleft at the neuromuscular junction.'
        }
      },
      {
        id: 'lo-3',
        isCritical: true,
        title: '>>Make a schematic figure of the neuromuscular junction found in striated muscles, and indicate the consecutive steps of neuromuscular transmission.<<',
        keyPoints: [
          'Step 1 - Action potential arrival: Travels down motor axon to presynaptic terminal, depolarizes membrane, activates voltage-gated Ca2+ channels',
          'Step 2 - Ca2+ influx: Calcium flows into presynaptic terminal down electrochemical gradient, triggers vesicle movement',
          'Step 3 - ACh release: Synaptic vesicles fuse with membrane via exocytosis, acetylcholine released into synaptic cleft',
          'Step 4 - ACh binding: Acetylcholine diffuses across cleft, binds nicotinic receptors (nAChR) on motor end plate',
          'Step 5 - Ion channel opening: Ligand-gated Na+/K+ channels open; Na+ influx exceeds K+ efflux causing depolarization',
          'Step 6 - End plate potential (EPP): Local depolarization at motor end plate; if reaches threshold triggers muscle action potential',
          'Step 7 - ACh breakdown: Acetylcholinesterase (AChE) in synaptic cleft rapidly breaks ACh into acetate and choline',
          'Step 8 - Choline reuptake: Choline transported back to presynaptic terminal via sodium-dependent choline transporter for ACh resynthesis'
        ],
        officialDefinitions: [
          'The action potential travels down the axon of the motor neuron and reaches the presynaptic terminal (axon terminal) at the neuromuscular junction. This depolarizes the presynaptic membrane and activates voltage-gated calcium channels.',
          'The depolarization at the presynaptic terminal causes the voltage-gated calcium (Ca²⁺) channels to open. The concentration of calcium is higher outside the cell, so Ca²⁺ ions flow into the presynaptic terminal due to the electrochemical gradient.',
          'Calcium ions entering the terminal triggers the synaptic vesicles containing the neurotransmitter acetylcholine (ACh) to move towards the presynaptic membrane. The vesicles fuse with the membrane in a process called exocytosis, releasing ACh into the synaptic cleft.',
          'The acetylcholine (ACh) molecules are released into the synaptic cleft, the small space between the presynaptic terminal and the muscle fiber\'s motor end plate.',
          'ACh diffuses across the synaptic cleft and binds to nicotinic acetylcholine receptors (nAChR) on the motor end plate of the muscle fiber.',
          'Binding of ACh to its receptors causes the ligand-gated Na⁺/K⁺ channels to open. Sodium ions (Na⁺) flow into the muscle cell, and potassium ions (K⁺) flow out of the muscle cell through these channels.',
          'The influx of Na⁺ ions causes a local depolarization at the motor end plate known as the end plate potential (EPP). The EPP is not an action potential itself, but if it is strong enough, it will cause the muscle cell membrane to depolarize to the threshold and trigger an action potential in the muscle fiber.',
          'If the EPP reaches the threshold level, it will open voltage-gated Na⁺ channels in the surrounding muscle membrane, leading to the generation of an action potential. This action potential then propagates along the muscle membrane (sarcolemma) and into the T-tubules, ultimately leading to muscle contraction.',
          'The enzyme acetylcholinesterase (AChE), located in the synaptic cleft, breaks down acetylcholine into acetate and choline. This degradation stops the signal, ensuring that ACh does not continuously stimulate the muscle.',
          'Choline is transported back into the presynaptic terminal by a sodium-dependent choline transporter. Inside the presynaptic terminal, choline is used to resynthesize ACh for the next round of neurotransmission.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'steps',
              intro: '>>Consecutive steps of neuromuscular transmission:<<',
              items: [
                'Action potential travels down motor neuron axon and reaches presynaptic terminal, depolarizing membrane and activating voltage-gated calcium channels',
                'Calcium ions flow into presynaptic terminal down electrochemical gradient, triggering synaptic vesicles containing acetylcholine to move toward membrane',
                'Vesicles fuse with presynaptic membrane through exocytosis, releasing acetylcholine into synaptic cleft',
                'Acetylcholine molecules diffuse across cleft and bind to nicotinic acetylcholine receptors on motor end plate of muscle fiber',
                'Binding causes ligand-gated sodium-potassium channels to open; sodium influx exceeds potassium efflux producing depolarization',
                'Creates end plate potential (EPP); if reaches threshold (~-55 mV), triggers action potential that propagates along sarcolemma and into T-tubules, causing muscle contraction',
                'Acetylcholinesterase enzyme in synaptic cleft rapidly breaks down acetylcholine into acetate and choline, stopping the signal',
                'Choline transported back into presynaptic terminal by sodium-dependent choline transporter for acetylcholine resynthesis'
              ]
            }
          ],
          raw: '>>The neuromuscular junction transmission occurs in consecutive steps: First, the action potential travels down the motor neuron axon and reaches the presynaptic terminal, depolarizing the membrane and activating voltage-gated calcium channels.<< Second, calcium ions flow into the presynaptic terminal down their electrochemical gradient, triggering synaptic vesicles containing acetylcholine to move toward the membrane. Third, vesicles fuse with the presynaptic membrane through exocytosis, releasing acetylcholine into the synaptic cleft. Fourth, acetylcholine molecules diffuse across the cleft and bind to nicotinic acetylcholine receptors on the motor end plate of the muscle fiber. Fifth, binding causes ligand-gated sodium-potassium channels to open; sodium influx exceeds potassium efflux producing depolarization. Sixth, this creates the end plate potential or EPP; if it reaches threshold around negative fifty-five millivolts, it triggers an action potential that propagates along the sarcolemma and into T-tubules, ultimately causing muscle contraction. Seventh, acetylcholinesterase enzyme in the synaptic cleft rapidly breaks down acetylcholine into acetate and choline, stopping the signal. Eighth, choline is transported back into the presynaptic terminal by a sodium-dependent choline transporter for acetylcholine resynthesis.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Compare the differences between the end plate potential (EPP) and the muscle fiber\'s action potential.',
        keyPoints: [
          'EPP characteristics: Graded local depolarization at motor end plate; amplitude depends on ACh amount and receptor number',
          'EPP mechanism: Caused by ACh binding nicotinic receptors opening ligand-gated Na+/K+ channels; not propagated, fades with distance',
          'EPP threshold: Does not always reach threshold but if it does (usually does), triggers muscle action potential',
          'Muscle action potential: All-or-none electrical response when EPP reaches threshold (~-55 mV); begins at motor end plate',
          'Muscle AP propagation: Propagates along entire sarcolemma and into T-tubules via voltage-gated Na+ and K+ channels',
          'Muscle AP characteristics: Depolarization via Na+ influx, repolarization via K+ efflux; leads to Ca2+ release from sarcoplasmic reticulum',
          'Functional outcome: EPP is local trigger; muscle AP is propagated signal initiating excitation-contraction coupling'
        ],
        officialDefinitions: [
          'The EPP is a graded, local depolarization that occurs at the motor end plate (the postsynaptic membrane of the neuromuscular junction). It is caused by the release of the neurotransmitter acetylcholine (ACh) from the motor neuron. ACh binds to nicotinic receptors (ligand-gated ion channels) on the muscle membrane, allowing Na⁺ to enter and K⁺ to exit. The EPP is not propagated along the membrane — it is local and fades with distance. The EPP does not always reach threshold, but if it does, it will trigger an action potential in the muscle fiber.',
          'A muscle fiber action potential is an all-or-none electrical response that occurs when the EPP reaches the threshold voltage (~–55 mV). It begins at the motor end plate and propagates along the entire sarcolemma and into the T-tubules. This propagation involves the opening of voltage-gated Na⁺ channels (for depolarization) and K⁺ channels (for repolarization). The muscle action potential leads to calcium release from the sarcoplasmic reticulum and initiates muscle contraction.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'End Plate Potential (EPP) characteristics:',
              items: [
                'Graded, local depolarization at motor end plate (postsynaptic membrane)',
                'Caused by acetylcholine binding to nicotinic receptors (ligand-gated Na+/K+ channels)',
                'Not propagated along membrane; fades with distance from motor end plate',
                'Amplitude depends on ACh amount and receptor number; does not always reach threshold'
              ]
            },
            {
              type: 'list',
              intro: 'Muscle Fiber Action Potential characteristics:',
              items: [
                'All-or-none electrical response when EPP reaches threshold (~-55 mV)',
                'Begins at motor end plate and propagates along entire sarcolemma and into T-tubules',
                'Uses voltage-gated sodium channels for depolarization and potassium channels for repolarization',
                'Leads to calcium release from sarcoplasmic reticulum, initiating muscle contraction'
              ]
            },
            { type: 'paragraph', content: 'The EPP serves as the local trigger, while the muscle action potential is the propagated response that initiates excitation-contraction coupling.' }
          ],
          raw: 'The end plate potential or EPP differs from the muscle fiber action potential in several key ways. The EPP is a graded, local depolarization that occurs at the motor end plate, the postsynaptic membrane of the neuromuscular junction. It is caused by acetylcholine released from the motor neuron binding to nicotinic receptors, which are ligand-gated ion channels allowing sodium to enter and potassium to exit. The EPP is not propagated along the membrane and fades with distance from the motor end plate. The amplitude of the EPP is graded, meaning it depends on the amount of acetylcholine released and the number of receptors activated, and it does not always reach threshold. In contrast, the muscle fiber action potential is an all-or-none electrical response that occurs when the EPP reaches the threshold voltage of approximately negative fifty-five millivolts. It begins at the motor end plate and propagates along the entire sarcolemma and into the T-tubules. This propagation involves voltage-gated sodium channels for depolarization and potassium channels for repolarization. The muscle action potential leads to calcium release from the sarcoplasmic reticulum, initiating muscle contraction, whereas the EPP serves only as the local trigger for this propagated response.'
        }
      },
      {
        id: 'lo-5',
        isCritical: false,
        title: 'List the inhibitors of the neuromuscular junction (curare, succinylcholine, botulinum toxin), give their targets and mechanisms of actions.',
        keyPoints: [
          'Curare: Targets nicotinic ACh receptors (nAChRs) at motor end plate; competitive antagonist competes with ACh',
          'Curare mechanism: Blocks ACh binding, decreases EPP size below threshold, prevents muscle action potential, causes paralysis',
          'Succinylcholine: Targets nicotinic ACh receptors at motor end plate; acts as depolarizing blocker',
          'Succinylcholine mechanism: Binds nAChRs causing continuous depolarization → prolonged opening → desensitization → muscle relaxation and paralysis',
          'Botulinum toxin: Targets presynaptic terminals of motor neurons; blocks neurotransmitter release machinery',
          'Botulinum mechanism: Cleaves SNARE proteins (synaptobrevin, SNAP-25, syntaxin) preventing vesicle fusion, blocks ACh release, causes paralysis',
          'Clinical use: Curare and succinylcholine used as muscle relaxants in surgery; botulinum toxin for therapeutic muscle relaxation'
        ],
        officialDefinitions: [
          'Curare: Target: Nicotinic acetylcholine receptors (nAChRs) at the motor end plate. Mechanism of Action: Competes with acetylcholine (ACh) at the nAChRs, decreasing the size of the end plate potential (EPP) and causing paralysis.',
          'Succinylcholine: Target: Nicotinic acetylcholine receptors (nAChRs) at the motor end plate. Mechanism of Action: Acts as a depolarizing neuromuscular blocker by binding to nAChRs and causing continuous depolarization, which leads to muscle relaxation and paralysis.',
          'Botulinum Toxin: Target: Presynaptic terminals of motor neurons. Mechanism of Action: Blocks the release of ACh from presynaptic terminals by cleaving SNARE proteins, preventing vesicle fusion, and causing paralysis.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Three main neuromuscular junction inhibitors:',
              items: [
                'Curare: Targets nicotinic acetylcholine receptors (nAChRs) at motor end plate, acting as competitive antagonist that competes with ACh for receptor binding. Blocks ACh binding, decreases EPP size below threshold, prevents muscle action potential generation causing paralysis',
                'Succinylcholine: Targets nicotinic acetylcholine receptors at motor end plate, acts as depolarizing neuromuscular blocker. Binds nAChRs causing continuous depolarization, prolonged channel opening followed by receptor desensitization, resulting in muscle relaxation and paralysis',
                'Botulinum toxin: Targets presynaptic terminals of motor neurons. Cleaves SNARE proteins (synaptobrevin, SNAP-25, syntaxin) essential for synaptic vesicle fusion, preventing vesicle fusion and blocking ACh release, causing paralysis'
              ]
            },
            { type: 'paragraph', content: 'Clinical uses: Curare and succinylcholine as muscle relaxants during surgical procedures, botulinum toxin for therapeutic muscle relaxation in conditions like dystonia or cosmetic applications.' }
          ],
          raw: 'The neuromuscular junction has three main inhibitors with distinct targets and mechanisms. Curare targets nicotinic acetylcholine receptors or nAChRs at the motor end plate, acting as a competitive antagonist that competes with acetylcholine for receptor binding. By blocking acetylcholine binding, curare decreases the size of the end plate potential below threshold, preventing muscle action potential generation and causing paralysis. Succinylcholine also targets nicotinic acetylcholine receptors at the motor end plate but acts as a depolarizing neuromuscular blocker. It binds to nAChRs and causes continuous depolarization, which leads to prolonged channel opening followed by receptor desensitization, resulting in muscle relaxation and paralysis. Botulinum toxin targets the presynaptic terminals of motor neurons rather than the postsynaptic receptors. Its mechanism involves cleaving SNARE proteins including synaptobrevin, SNAP-25, and syntaxin, which are essential for synaptic vesicle fusion with the presynaptic membrane. By preventing vesicle fusion, botulinum toxin blocks acetylcholine release from presynaptic terminals, causing paralysis. All three inhibitors are used clinically: curare and succinylcholine as muscle relaxants during surgical procedures, and botulinum toxin for therapeutic muscle relaxation in conditions like dystonia or cosmetic applications.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Define the term motor unit. Describe motor recruitment during various levels of muscle activity.<<',
        keyPoints: [
          'Motor unit definition: Single motor neuron and all muscle fibers it innervates; basic functional unit of motor control',
          'Motor unit variability: Few fibers for fine control (eye, facial muscles) to thousands for gross control (large limb muscles)',
          'Size principle: Motor units recruited from smallest to largest based on motor neuron size and threshold',
          'Small motor units: Low-threshold motor neurons, few muscle fibers, recruited first for fine control and minimal force (writing, holding light objects)',
          'Large motor units: High-threshold motor neurons, many muscle fibers, recruited for increased force requirements (lifting, running)',
          'Motor recruitment progression: Orderly activation - small units → medium units → large units as force demand increases',
          'Maximal activity: All motor units (small, medium, large) recruited simultaneously for maximum force output (sprinting, jumping)'
        ],
        officialDefinitions: [
          'A motor unit is defined as a single motoneuron and all the muscle fibers that it innervates. The number of muscle fibers innervated by a single motor neuron can vary greatly depending on the function of the muscle and the level of control required.',
          'Motor units can range from those that innervate a few muscle fibers (e.g., for fine motor control in muscles responsible for eye movement or facial expressions) to those that innervate thousands of muscle fibers (e.g., for gross motor control in large muscles used for running or jumping).',
          'Motor recruitment refers to the process of activating additional motor units to increase the strength of a muscle contraction. It follows the size principle, which states that motor units are recruited in the order of their size, from smallest to largest.',
          'Small Motor Units: These motor units contain smaller, low-threshold motoneurons that innervate fewer muscle fibers. They are recruited first during activities that require fine control and minimal force, such as writing or holding a light object. Because they innervate fewer muscle fibers, they generate smaller amounts of force.',
          'Large Motor Units: These units contain larger motoneurons with higher thresholds, which innervate a larger number of muscle fibers. They are recruited as the force requirement increases, such as during activities that require more strength or endurance (e.g., lifting heavy weights or running). They generate greater amounts of force.',
          'Maximal Muscle Activity: When a muscle needs to produce its maximum force output, all motor units (small, medium, and large) are recruited. This results in a significant increase in muscle tension, enabling powerful contractions necessary for activities like sprinting or jumping.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>A motor unit is defined as a single motor neuron and all the muscle fibers that it innervates.<<', critical: true },
            { type: 'paragraph', content: 'The number of muscle fibers innervated by one motor neuron varies greatly depending on muscle function and level of control required, ranging from a few muscle fibers for fine motor control (eye movement, facial expressions) to thousands of muscle fibers for gross motor control (large muscles for running or jumping).' },
            { type: 'paragraph', content: '>>Motor recruitment describes the process of activating additional motor units to increase muscle contraction strength, following the size principle which states that motor units are recruited in order of their size, from smallest to largest.<<', critical: true },
            {
              type: 'list',
              intro: 'Motor unit recruitment progression:',
              items: [
                'Small motor units: Low-threshold motor neurons innervating fewer muscle fibers, recruited first for fine control and minimal force (writing, holding light objects), generating smaller amounts of force',
                'Large motor units: High-threshold motor neurons innervating more muscle fibers, recruited as force requirements increase for strength/endurance activities (lifting heavy weights, running), generating greater amounts of force',
                'Maximal activity: All motor units (small, medium, large) recruited simultaneously for maximum force output, enabling powerful contractions for activities like sprinting or jumping'
              ]
            }
          ],
          raw: '>>A motor unit is defined as a single motor neuron and all the muscle fibers that it innervates.<< The number of muscle fibers innervated by one motor neuron varies greatly depending on muscle function and level of control required, ranging from a few muscle fibers for fine motor control in muscles responsible for eye movement or facial expressions, to thousands of muscle fibers for gross motor control in large muscles used for running or jumping. >>Motor recruitment describes the process of activating additional motor units to increase muscle contraction strength, following the size principle which states that motor units are recruited in order of their size, from smallest to largest.<< Small motor units contain smaller, low-threshold motor neurons innervating fewer muscle fibers; they are recruited first during activities requiring fine control and minimal force such as writing or holding a light object, generating smaller amounts of force. Large motor units contain larger motor neurons with higher thresholds innervating more muscle fibers; they are recruited as force requirements increase during activities requiring more strength or endurance like lifting heavy weights or running, generating greater amounts of force. During maximal muscle activity when maximum force output is needed, all motor units including small, medium, and large are recruited simultaneously, resulting in significant muscle tension enabling powerful contractions necessary for activities like sprinting or jumping.'
        }
      }
    ]
  };

export default topic21;
