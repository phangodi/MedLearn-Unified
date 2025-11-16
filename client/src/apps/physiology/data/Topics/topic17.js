const topic17 =   {
    id: 'topic-17',
    number: 17,
    category: 'neurophysiology',
    mcqs: ['mcq-1'],
    title: 'Neurotransmission',
    subtitle: 'Mechanisms of signal transmission between neurons including electric and chemical synapses, neurotransmitter systems, and specialized transport mechanisms',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: true,
        title: 'Characterize electric synapses including the description of the molecular structure of gap junction operating in these synapses. >>Compare transmission between electric and chemical synapses<< (direction of information, speed of transmission).',
        keyPoints: [
          'Electric synapses: Direct ion passage between cells through gap junctions formed by connexin proteins',
          'Gap junction structure: Six connexin proteins form connexon (hemichannel); two connexons dock to create continuous pore',
          'Electric synapse properties: Bidirectional transmission, minimal synaptic delay, found in cardiac and smooth muscle for synchronization',
          'Chemical synapses: Neurotransmitter-mediated signal across synaptic cleft; unidirectional from presynaptic to postsynaptic',
          'Transmission speed comparison: Electric synapses are fast with no delay; chemical synapses have 1 to 1.5 millisecond synaptic delay',
          'Direction comparison: Electric synapses allow bidirectional current flow; chemical synapses permit only one-way information flow',
          'Gap junctions pass ions, small molecules (up to 1000 Da), and second messengers like cAMP between cells'
        ],
        officialDefinitions: [
          'Electrical Synapses: are specialized connections between cells where ions pass directly from one cell to another through channels known as gap junctions. Gap junctions are formed by connexin proteins that create pores connecting adjacent cells. These connexins form hexameric structures called connexons, which dock to connexons of neighboring cells, forming a continuous channel for ion flow.',
          'Properties: Bidirectional: Allow current to flow in both directions depending on the concentration gradient. Rapid Transmission: The direct passage of ions enables fast synaptic transmission without delay. Locations: Found in tissues requiring synchronized activity, such as the cardiac muscle and some smooth muscles. Function: Allow cells to rapidly exchange ions and small signaling molecules and Enable synchronous contraction, which is crucial in cardiac and smooth muscle tissues.',
          'Chemical Synapses: use neurotransmitters to transmit signals from the presynaptic neuron to the postsynaptic neuron or effector cell across a synaptic cleft. Synaptic cleft: The gap between the presynaptic and postsynaptic membranes. Presynaptic terminal: Contains vesicles filled with neurotransmitters. Postsynaptic membrane: Contains receptors specific to the neurotransmitters.',
          'Transmission: An action potential triggers the release of neurotransmitters from the presynaptic terminal into the synaptic cleft. Neurotransmitters bind to receptors on the postsynaptic membrane, leading to ion channel opening or secondary messenger activation. Properties: Unidirectional: Information flows in one direction, from presynaptic to postsynaptic cell. Slower Transmission: Due to the multiple steps involved, there is a synaptic delay. Locations: Most common in the nervous system, at neuromuscular junctions, and between neurons.',
          'ELECTRIC: Connexon pore (6 connexins), Bidirectional diffusion of small molecules, Fast: minimal synaptic delay, Synchronization of neuronal groups, Glial networks, Passing second messengers (cAMP). CHEMICAL: No pore in the membrane (transmitter and receptor needed), Synaptic delay (1-1.5 ms), One-way (pre → postsynaptic).'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Electric synapses use gap junctions formed by connexin proteins creating direct cytoplasmic bridges between cells. Six connexins form a connexon hemichannel; two connexons from adjacent cells dock to form a continuous pore allowing bidirectional ion flow based on concentration gradients. This enables rapid synchronized activity in cardiac and smooth muscle.' },
            { type: 'paragraph', content: 'Chemical synapses use neurotransmitters to cross the synaptic cleft unidirectionally from presynaptic to postsynaptic membrane.' },
            { type: 'paragraph', content: '>>Electric synapses allow bidirectional transmission with minimal delay, while chemical synapses permit unidirectional transmission with synaptic delay.<<', critical: true },
            { type: 'paragraph', content: '>>Electric transmission is nearly instantaneous, while chemical transmission involves a synaptic delay of one to one point five milliseconds due to multiple steps including calcium influx, vesicle fusion, neurotransmitter diffusion, and receptor binding.<<', critical: true }
          ],
          raw: '>>Electric synapses allow bidirectional transmission with minimal delay, while chemical synapses permit unidirectional transmission with synaptic delay.<< Electric synapses use gap junctions formed by connexin proteins creating direct cytoplasmic bridges between cells. Six connexins form a connexon hemichannel; two connexons from adjacent cells dock to form a continuous pore allowing bidirectional ion flow based on concentration gradients. This enables rapid synchronized activity in cardiac and smooth muscle. Chemical synapses use neurotransmitters to cross the synaptic cleft unidirectionally from presynaptic to postsynaptic membrane. Electric transmission is nearly instantaneous, while chemical transmission involves a synaptic delay of one to one point five milliseconds due to multiple steps including calcium influx, vesicle fusion, neurotransmitter diffusion, and receptor binding.'
        }
      },
      {
        id: 'lo-2',
        isCritical: true,
        title: '>>Describe the consecutive events of chemical neurotransmission (starting with the depolarization of presynaptic membrane ending with the development of the graded electric response of the postsynaptic membrane (postsynaptic potential, PSP). Describe the ion currents involved in the development of the following local potentials: excitatory postsynaptic potential (EPSP), inhibitory postsynaptic potential (IPSP), end plate potential (EPP), and receptor potential.<<',
        keyPoints: [
          'Step 1-2: Action potential depolarizes presynaptic membrane → voltage-gated Ca2+ channels open → Ca2+ influx',
          'Step 3-4: Elevated Ca2+ triggers SNARE protein-mediated vesicle fusion with presynaptic membrane → neurotransmitter exocytosis into cleft',
          'Step 5-6: Neurotransmitter diffuses across cleft → binds postsynaptic receptors → ion channels open or second messengers activated',
          'Step 7: Postsynaptic potential (PSP) develops as graded electrical response; EPSPs or IPSPs summed at axon hillock',
          'EPSP ion currents: Na+ or Ca2+ influx through ligand-gated channels causes depolarization (glutamate, acetylcholine)',
          'IPSP ion currents: Cl- influx through GABA-A/glycine receptors or K+ efflux causes hyperpolarization',
          'EPP ion currents: Acetylcholine opens nicotinic receptors → Na+ influx at neuromuscular junction; Receptor potential: stimulus-activated channels (Na+, Ca2+) in sensory receptors'
        ],
        officialDefinitions: [
          'Chemical neurotransmission involves several key steps, which ensure the efficient transfer of signals from the presynaptic neuron to the postsynaptic cell. The process starts with the depolarization of the presynaptic membrane and concludes with the development of the postsynaptic potential (PSP).',
          '1. Depolarization of the Presynaptic Membrane: An action potential reaches the axon terminal of the presynaptic neuron. This depolarization causes voltage-gated Ca²⁺ channels in the presynaptic membrane to open. 2. Calcium Influx: Ca²⁺ ions enter the presynaptic terminal due to the electrochemical gradient. The increase in intracellular calcium is crucial for triggering neurotransmitter release.',
          '3. Vesicle Fusion and Neurotransmitter Release: The rise in Ca²⁺ causes synaptic vesicles (containing neurotransmitters) to move toward and fuse with the presynaptic membrane via SNARE proteins. This results in exocytosis, releasing neurotransmitters into the synaptic cleft. 4. Neurotransmitter Diffusion: Neurotransmitters diffuse across the synaptic cleft (a ~20 nm gap) and bind to specific receptors on the postsynaptic membrane.',
          '5. Activation of Postsynaptic Receptors: Ionotropic receptors (ligand-gated ion channels): Neurotransmitter binding directly opens the ion channel (e.g., glutamate opens Na⁺ channels, GABA opens Cl⁻ channels). Metabotropic receptors (G-protein coupled): Binding activates second messenger cascades that may indirectly influence ion channels.',
          '6. Generation of Postsynaptic Potential (PSP): Depending on the ion flow: Excitatory Postsynaptic Potential (EPSP): Depolarization due to Na⁺ or Ca²⁺ influx. Inhibitory Postsynaptic Potential (IPSP): Hyperpolarization due to Cl⁻ influx or K⁺ efflux. PSPs are graded potentials, meaning their amplitude depends on the amount of neurotransmitter and the number of receptors activated.',
          'Excitatory Postsynaptic Potential (EPSP): is a local depolarization of the postsynaptic membrane, bringing it closer to the threshold for firing an action potential. Ion Currents: Na⁺ Influx: Opening of ligand-gated Na⁺ channels causes Na⁺ ions to enter the postsynaptic cell. K⁺ Channels: Concurrent opening of some K⁺ channels contributes to the excitatory state.',
          'Inhibitory Postsynaptic Potential (IPSP): is a local hyperpolarization of the postsynaptic membrane, taking the membrane potential further away from the threshold and making it less likely to fire an action potential. Ion Currents: Cl⁻ Influx: Opening of ligand-gated Cl⁻ channels allows Cl⁻ ions to enter the cell, making the membrane more negative (hyperpolarization). K⁺ Efflux: Opening of some K⁺ channels can also contribute by allowing K⁺ ions to exit, further hyperpolarizing the cell.',
          'End Plate Potential (EPP): is a local depolarization at the neuromuscular junction between a motor neuron and a muscle fiber. Ion Currents: Na⁺ Influx: Acetylcholine (Ach) released from the motor neuron binds to receptors on the muscle fiber, causing the opening of Na⁺ channels and subsequent Na⁺ influx. This depolarization leads to muscle contraction if the threshold is reached. Neurotransmitter: Acetylcholine.',
          'Receptor Potential: The potential produced by activation of a sensory receptor in response to a stimulus. Ion Currents: Depending on the sensory receptor type, different ion channels (e.g., Na⁺, Ca²⁺) are activated, leading to depolarization or hyperpolarization. The change in potential can lead to the initiation of an action potential in a sensory neuron if the threshold is reached.',
          'Chemical neurotransmission: 1. Transmitter stored in vesicles, 2. Action potential at the presynaptic terminal, 3. Opening of voltage-gated calcium channels, 4. Influx of calcium, 5. Calcium induces vesicle fusion, 6. Transmitter released into the cleft, 7. Transmitter binds to postsynaptic receptors, 8. Opening of postsynaptic ion channel/activation of second messengers, 9. Generation of inhibitory or excitatory postsynaptic potentials (IPSP/EPSP), 10. Transmitter elimination/inactivation (glial uptake, presynaptic reuptake, enzymatic degradation), 11. Vesicle retrieval from presynaptic membrane (recirculation).'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'steps',
              intro: '>>Chemical neurotransmission consecutive events:<<',
              items: [
                'Action potential depolarizes presynaptic membrane',
                'Voltage-gated calcium channels open causing calcium influx',
                'Elevated intracellular calcium triggers SNARE protein-mediated vesicle fusion',
                'Neurotransmitter released into synaptic cleft via exocytosis',
                'Neurotransmitter diffuses across cleft and binds postsynaptic receptors',
                'Ion channels open or second messengers activated',
                'Postsynaptic potentials develop as graded electrical responses'
              ]
            },
            { type: 'paragraph', content: '>>For EPSP, glutamate or acetylcholine opens channels allowing sodium or calcium influx causing depolarization.<<', critical: true },
            { type: 'paragraph', content: '>>For IPSP, GABA or glycine opens chloride channels allowing chloride influx or potassium channels allowing potassium efflux causing hyperpolarization.<<', critical: true },
            { type: 'paragraph', content: '>>End plate potential occurs at neuromuscular junction when acetylcholine opens nicotinic receptors causing sodium influx.<<', critical: true },
            { type: 'paragraph', content: '>>Receptor potential develops when sensory stimuli activate channels allowing sodium or calcium entry in sensory receptors, potentially triggering action potentials if threshold reached.<<', critical: true }
          ],
          raw: '>>Chemical neurotransmission begins with presynaptic membrane depolarization by action potential, opens voltage-gated calcium channels causing calcium influx. Elevated intracellular calcium triggers SNARE protein-mediated vesicle fusion releasing neurotransmitter into synaptic cleft. Neurotransmitter diffuses across cleft and binds postsynaptic receptors activating ion channels or second messengers. This generates postsynaptic potentials as graded electrical responses.<< For EPSP, glutamate or acetylcholine opens channels allowing sodium or calcium influx causing depolarization. For IPSP, GABA or glycine opens chloride channels allowing chloride influx or potassium channels allowing potassium efflux causing hyperpolarization. End plate potential occurs at neuromuscular junction when acetylcholine opens nicotinic receptors causing sodium influx. Receptor potential develops when sensory stimuli activate channels allowing sodium or calcium entry in sensory receptors, potentially triggering action potentials if threshold reached.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Describe the temporal and spatial summation of postsynaptic potentials (EPSPs and IPSPs), and their role to trigger an action potential',
        keyPoints: [
          'Temporal summation: Rapid succession of inputs from same presynaptic neuron overlap in time → cumulative effect on membrane potential',
          'Spatial summation: Simultaneous inputs from multiple presynaptic neurons at different locations → summed at axon hillock',
          'Integration site: Axon hillock with high density of voltage-gated Na+ channels determines if threshold reached',
          'EPSP summation: Multiple excitatory inputs add together → greater depolarization → increased likelihood of action potential',
          'IPSP summation: Multiple inhibitory inputs add together → greater hyperpolarization → decreased likelihood of action potential',
          'Mixed summation: EPSPs and IPSPs can cancel each other depending on relative strengths and timing',
          'Action potential generation: If summed potential at axon hillock reaches threshold (approximately minus 55 millivolts), action potential initiated and propagated'
        ],
        officialDefinitions: [
          'Spatial summation: Simultaneous EPSPs of many dendrites (EPSP 1-3) spreading to the cell body and summed at the axon hillock → reaching the threshold, axon action potential (APA)',
          'Temporal summation: EPSPs following each other in time are summed → reaching the threshold, axon action potential (APA)',
          'Temporal Summation occurs when two or more presynaptic inputs arrive at the postsynaptic neuron in rapid succession. The inputs overlap in time, leading to a cumulative effect on the postsynaptic membrane potential.',
          'Spatial Summation occurs when two or more presynaptic inputs arrive at the postsynaptic neuron simultaneously from different locations. The EPSPs or IPSPs are produced simultaneously and then summed at the axon hillock of the postsynaptic cell.',
          'Role in Triggering an Action Potential: Action potentials are typically triggered at the axon hillock of the neuron, where there is a high density of voltage-gated sodium channels. If the sum of EPSPs and IPSPs at the axon hillock reaches the threshold, an action potential will be initiated and propagated along the axon. Temporal and spatial summation play critical roles in integrating synaptic inputs from multiple presynaptic neurons and determining whether or not the postsynaptic neuron will fire an action potential.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Temporal summation occurs when presynaptic inputs arrive in rapid succession overlapping in time, creating cumulative effects on postsynaptic membrane potential.' },
            { type: 'paragraph', content: 'Spatial summation occurs when multiple presynaptic neurons fire simultaneously from different locations, with potentials summed at the axon hillock.' },
            { type: 'paragraph', content: 'Multiple EPSPs add together producing greater depolarization, bringing membrane closer to threshold for action potential generation.' },
            { type: 'paragraph', content: 'Multiple IPSPs summate causing increased hyperpolarization, moving membrane further from threshold.' },
            { type: 'paragraph', content: 'When EPSPs and IPSPs occur together, they can cancel each other depending on relative strengths.' },
            { type: 'paragraph', content: 'The axon hillock contains high density of voltage-gated sodium channels where summation determines if threshold is reached. If the summed potential reaches approximately minus 55 millivolts, an action potential is triggered and propagates down the axon.' }
          ],
          raw: 'Temporal summation occurs when presynaptic inputs arrive in rapid succession overlapping in time, creating cumulative effects on postsynaptic membrane potential. Spatial summation occurs when multiple presynaptic neurons fire simultaneously from different locations, with potentials summed at the axon hillock. Multiple EPSPs add together producing greater depolarization, bringing membrane closer to threshold for action potential generation. Multiple IPSPs summate causing increased hyperpolarization, moving membrane further from threshold. When EPSPs and IPSPs occur together, they can cancel each other depending on relative strengths. The axon hillock contains high density of voltage-gated sodium channels where summation determines if threshold is reached. If the summed potential reaches approximately minus 55 millivolts, an action potential is triggered and propagates down the axon.'
        }
      },
      {
        id: 'lo-4',
        isCritical: true,
        title: '>>Describe the common features of classical neurotransmitters.<<',
        keyPoints: [
          'Synthesis in presynaptic neuron: Classical neurotransmitters synthesized and stored in presynaptic terminal',
          'Calcium-dependent release: Released from presynaptic terminal in response to action potential; requires Ca2+ influx',
          'Exogenous application mimics effect: When applied externally, produces same postsynaptic effect as presynaptic stimulation',
          'Specific receptor binding: Must have specific receptors on postsynaptic membrane where binding produces physiological effect',
          'Inactivation mechanism: Must have mechanism for removal from synaptic cleft (enzymatic degradation, reuptake, or diffusion)',
          'Universal elimination: Presynaptic Na+-associated symport reuptake; vesicular H+-associated antiport uptake'
        ],
        officialDefinitions: [
          '1. Synthesis in the Presynaptic Neuron: Classical neurotransmitters are synthesized and stored in the presynaptic terminal of neurons.',
          '2. Release upon Stimulation: The neurotransmitter must be released from the presynaptic terminal in response to an action potential or neuronal stimulation. This release is typically calcium-dependent.',
          '3. Mimic the Effect of Presynaptic Stimulation: When the neurotransmitter is applied exogenously (outside the body), it should produce the same effect on the postsynaptic membrane as presynaptic stimulation does.',
          '4. Specific Receptors: The neurotransmitter must have specific receptors located on the postsynaptic membrane, where it can bind and produce its effect.',
          '5. Mechanism for Inactivation: There must be a mechanism for the inactivation or removal of the neurotransmitter from the synaptic cleft.',
          'The features of classic neurotransmitters: Present in the presynaptic terminal, Released following depolarization and calcium-influx, Receptors are present in the postsynaptic membrane, Action is terminated by reuptake transporter in the presynaptic membrane, enzyme, glial uptake, Dale-principle: each axon terminal of a neuron releases the same transmitter, Co-transmitter: peptides released after high-frequency stimulation - prolonged EPSP.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Classical neurotransmitters share five common features:<<', critical: true },
            {
              type: 'steps',
              items: [
                'They are synthesized and stored in the presynaptic terminal',
                'They are released from the presynaptic terminal in response to action potential stimulation in a calcium-dependent manner',
                'When applied exogenously, they mimic the effect of presynaptic stimulation on the postsynaptic membrane',
                'They have specific receptors on the postsynaptic membrane where binding produces their physiological effect',
                'They must have a mechanism for inactivation or removal from the synaptic cleft, including enzymatic degradation, presynaptic reuptake via sodium-associated symport, or diffusion away'
              ]
            },
            { type: 'paragraph', content: 'The universal elimination involves presynaptic sodium-associated secondary active symport and uptake into vesicles via proton-associated secondary active antiport.' }
          ],
          raw: '>>Classical neurotransmitters share five common features.<< First, they are synthesized and stored in the presynaptic terminal. Second, they are released from the presynaptic terminal in response to action potential stimulation in a calcium-dependent manner. Third, when applied exogenously, they mimic the effect of presynaptic stimulation on the postsynaptic membrane. Fourth, they have specific receptors on the postsynaptic membrane where binding produces their physiological effect. Fifth, they must have a mechanism for inactivation or removal from the synaptic cleft, including enzymatic degradation, presynaptic reuptake via sodium-associated symport, or diffusion away. The universal elimination involves presynaptic sodium-associated secondary active symport and uptake into vesicles via proton-associated secondary active antiport.'
        }
      },
      {
        id: 'lo-5',
        isCritical: false,
        title: 'Group the classical and non-classical neurotransmitters based on their chemical structure: 1. acetylcholine, 2. amino acids (glutamate, glycine, GABA), 3. biogenic amines (dopamine, noradrenaline, adrenaline, histamine, serotonin), 4. gases (NO, CO), 5. lipids (endocannabinoids, 6. peptides (endophins, encephalins, dynorphins, substance P, CGRP, VIP).',
        keyPoints: [
          'Acetylcholine: Classical neurotransmitter; ester of acetic acid and choline',
          'Amino acids: Glutamate (excitatory), GABA (inhibitory from glutamate via GAD), Glycine (inhibitory in spinal cord/brainstem)',
          'Biogenic amines: Catecholamines (dopamine, noradrenaline, adrenaline); others (histamine, serotonin)',
          'Gases (non-classical): Nitric oxide (NO) from arginine via NOS; Carbon monoxide (CO); freely diffuse through membranes',
          'Lipids (non-classical): Endocannabinoids (anandamide, 2-AG) synthesized on demand from membrane phospholipids',
          'Peptides (non-classical): Opioids (endorphins, enkephalins, dynorphins); others (substance P, CGRP, VIP); synthesized in cell body, require high-frequency release'
        ],
        officialDefinitions: [
          'Acetylcholine: Location of cell body: N. basalis Meynerti, Striatum, Autonomic neurons, Motor endplate; Receptors: Ionotropic: nicotinic, Metabotropic: muscarinic (M1-M4); Function: Attention, memory, Sympathetic preganglionic, Parasympathetic pre-/postganglionic',
          'Glutamate: Location of cell body: Neocortex pyramidal cells (most abundant neurotransmitter); Receptors: Ionotropic: NMDA, AMPA, kainate, Metabotropic: mGluR1-R8; Function: General excitatory transmitter, Learning, plasticity, Neurodegeneration',
          'GABA (gamma-amino-butiric-acid): Location of cell body: Neocortex interneurons, Purkinje-cells (cerebellum), Striatum; Receptors: Ionotropic: GABA-A/C, Metabotropic: GABA-B; Function: General inhibitory transmitter, Cortical oscillation, Anxiety, vigilance',
          'Glycine: Location of cell body: Spinal cord, Brainstem; Receptors: Ionotropic: GlyR; Function: Inhibitory transmitter',
          'Glucose → glutamine ⇄ glutamate ⇄ GABA; Glutamate decarboxylase (GAD) + vitamin B6',
          'GABA → succinate, gamma-hydroxybutirate',
          'The universal mechanism of re-uptake elimination of conventional transmitters: Presynaptic: Na+-associated secondary active symport; Uptake into the vesicles: H+-associated secondary active antiport'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Neurotransmitters grouped by chemical structure:',
              items: [
                'Acetylcholine is a classical neurotransmitter composed of acetic acid esterified to choline',
                'Amino acids include glutamate as the main excitatory transmitter, GABA as the main inhibitory transmitter derived from glutamate by glutamate decarboxylase, and glycine as an inhibitory transmitter',
                'Biogenic amines include catecholamines dopamine, noradrenaline, and adrenaline, plus histamine and serotonin',
                'Gases are non-classical transmitters including nitric oxide synthesized from arginine by neuronal NO synthase and carbon monoxide',
                'Lipids include endocannabinoids like anandamide and 2-arachidonoylglycerol synthesized on demand from membrane phospholipids',
                'Peptides are non-classical transmitters including endogenous opioids endorphins, enkephalins, and dynorphins, plus substance P, CGRP, and VIP, synthesized in cell body and transported to terminals'
              ]
            }
          ],
          raw: 'Neurotransmitters are grouped by chemical structure. Acetylcholine is a classical neurotransmitter composed of acetic acid esterified to choline. Amino acids include glutamate as the main excitatory transmitter, GABA as the main inhibitory transmitter derived from glutamate by glutamate decarboxylase, and glycine as an inhibitory transmitter. Biogenic amines include catecholamines dopamine, noradrenaline, and adrenaline, plus histamine and serotonin. Gases are non-classical transmitters including nitric oxide synthesized from arginine by neuronal NO synthase and carbon monoxide. Lipids include endocannabinoids like anandamide and 2-arachidonoylglycerol synthesized on demand from membrane phospholipids. Peptides are non-classical transmitters including endogenous opioids endorphins, enkephalins, and dynorphins, plus substance P, CGRP, and VIP, synthesized in cell body and transported to terminals.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Characterize the neurotransmitters in bold based on their synthesis, inactivation, receptors and signal transduction mechanisms. Define the terms ionotropic and metabotropic neurotransmitter receptors.<<',
        keyPoints: [
          'Acetylcholine synthesis: Choline + Acetyl-CoA via choline acetyltransferase; Inactivation: acetylcholinesterase breaks to choline + acetate; choline reuptake',
          'ACh receptors: Ionotropic nicotinic (ligand-gated cation channel); Metabotropic muscarinic M1-M5 (GPCRs with G-protein cascades)',
          'Glutamate synthesis: From glutamine via glutaminase; Inactivation: astrocyte uptake via EAATs, conversion to glutamine',
          'Glutamate receptors: Ionotropic NMDA/AMPA/kainate (cation channels); Metabotropic mGluR1-8 (G-protein coupled)',
          'GABA synthesis: From glutamate via glutamate decarboxylase + vitamin B6; Inactivation: GABA transporters, GABA transaminase degradation',
          'GABA receptors: Ionotropic GABA-A/C (Cl- channels); Metabotropic GABA-B (modulates K+/Ca2+ channels)',
          'Ionotropic receptors: Ligand-gated ion channels; fast synaptic transmission; Metabotropic receptors: G-protein coupled; slower, prolonged effects via second messengers'
        ],
        officialDefinitions: [
          'Acetylcholine: Synthesis: Formed in the presynaptic terminal by the enzyme choline acetyltransferase, which catalyzes the transfer of an acetyl group from acetyl-CoA to choline. Choline is transported into the neuron terminal from the extracellular space by a high-affinity choline transporter (CHT). Inactivation: Degraded in the synaptic cleft by the enzyme acetylcholinesterase (AChE) into choline and acetate. Choline is taken back up into the presynaptic terminal for reuse. Receptors: Ionotropic: Nicotinic receptors (nAChR) – ligand-gated ion channels that mediate fast synaptic transmission. Metabotropic: Muscarinic receptors (M1-M5) – G-protein-coupled receptors (GPCRs) that modulate various physiological functions through secondary messenger pathways.',
          'Glutamate: Synthesis: Produced from glutamine via the enzyme glutaminase in presynaptic terminals. Receptors: Ionotropic: NMDA, AMPA, and kainate receptors, all of which allow cation influx (e.g., Na+, K+, Ca2+). Metabotropic: mGluR (mGlu1 to mGlu8) receptors linked to G-protein signaling pathways. Functions: Major excitatory neurotransmitter in the CNS, involved in synaptic plasticity, learning, memory, and excitotoxicity in conditions like stroke. Elimination: Uptake into astrocytes via excitatory amino acid transporters (EAATs) and conversion back to glutamine.',
          'GABA (Gamma-aminobutyric acid): Synthesis: Derived from glutamate by the enzyme glutamate decarboxylase (GAD) with pyridoxal phosphate (vitamin B6) as a cofactor. Receptors: GABA-A: Ionotropic receptor, ligand-gated Cl- channel that mediates fast inhibitory transmission. GABA-B: Metabotropic receptor that modulates K+ and Ca2+ channels. Functions: Inhibitory neurotransmitter that reduces neuronal excitability, regulates muscle tone, and modulates anxiety and seizure thresholds. Elimination: Reuptake by GABA transporters (GAT) and degradation by GABA transaminase.',
          'Ionotropic receptors: Ligand-gated ion channels. When a neurotransmitter binds to an ionotropic receptor, it causes the receptor to change conformation, opening an ion channel that permits the flow of specific ions (e.g., Na+, K+, Cl-). Mediate fast synaptic transmission with rapid onset and short duration.',
          'Metabotropic Receptors: G-protein coupled receptors. When a neurotransmitter binds to a metabotropic receptor, it activates an associated G-protein, which then modulates various intracellular signaling pathways (e.g., adenylate cyclase, phospholipase C). Mediate slower responses with a more prolonged effect.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Acetylcholine is synthesized from choline and acetyl-CoA by choline acetyltransferase, inactivated by acetylcholinesterase into choline and acetate with choline reuptake. Receptors include ionotropic nicotinic and metabotropic muscarinic M1 to M5.<<', critical: true },
            { type: 'paragraph', content: '>>Glutamate is produced from glutamine via glutaminase, eliminated by astrocyte uptake and conversion to glutamine. Receptors include ionotropic NMDA, AMPA, kainate and metabotropic mGluR1 to 8.<<', critical: true },
            { type: 'paragraph', content: '>>GABA is synthesized from glutamate by glutamate decarboxylase with vitamin B6 cofactor, degraded by GABA transaminase. Receptors include ionotropic GABA-A and C chloride channels and metabotropic GABA-B.<<', critical: true },
            { type: 'paragraph', content: 'Ionotropic receptors are ligand-gated ion channels that mediate fast synaptic transmission with rapid onset and short duration.' },
            { type: 'paragraph', content: 'Metabotropic receptors are G-protein coupled receptors that activate intracellular signaling cascades producing slower responses with prolonged effects through second messenger systems.' }
          ],
          raw: '>>Acetylcholine is synthesized from choline and acetyl-CoA by choline acetyltransferase, inactivated by acetylcholinesterase into choline and acetate with choline reuptake. Receptors include ionotropic nicotinic and metabotropic muscarinic M1 to M5. Glutamate is produced from glutamine via glutaminase, eliminated by astrocyte uptake and conversion to glutamine. Receptors include ionotropic NMDA, AMPA, kainate and metabotropic mGluR1 to 8. GABA is synthesized from glutamate by glutamate decarboxylase with vitamin B6 cofactor, degraded by GABA transaminase. Receptors include ionotropic GABA-A and C chloride channels and metabotropic GABA-B.<< Ionotropic receptors are ligand-gated ion channels that mediate fast synaptic transmission with rapid onset and short duration. Metabotropic receptors are G-protein coupled receptors that activate intracellular signaling cascades producing slower responses with prolonged effects through second messenger systems.'
        }
      },
      {
        id: 'lo-7',
        isCritical: false,
        title: 'Describe the role of intraneuronal (axonal) transport mechanisms in the maintenance of interneuronal communication.',
        keyPoints: [
          'Axonal transport: Movement of proteins, organelles, neurotransmitters between cell body and axon terminal in long axons',
          'Anterograde transport: Kinesin motor protein moves materials from soma toward synaptic terminal',
          'Anterograde cargo: Synaptic vesicles, peptide transmitters, enzymes, membrane components, cytoskeleton elements',
          'Retrograde transport: Dynein motor protein carries materials from terminal back to cell body',
          'Retrograde cargo: Degradation products, neurotrophic signals (NGF), endocytosed materials, neuroinvasive viruses (herpes simplex)',
          'Microtubule-associated proteins: Tau protein stabilizes microtubules; dysfunction leads to neurodegeneration (Alzheimers)',
          'Maintenance function: Ensures synaptic terminals receive necessary materials for neurotransmission and cell body receives signaling molecules'
        ],
        officialDefinitions: [
          'KINESIN: anterograde transport: Synaptic elements (e.g. vesicles), Peptide transmitters, Cytoskeleton',
          'DYNEIN: retrograde transport: Degradation products, Neurotrophic signals, Neuroinvasive viruses (e.g. herpes simplex)',
          'Microtubule-associated proteins (e.g. tau) – neurodegeneration (e.g. Alzheimers)',
          'Axonal transport is the cellular process by which materials (proteins, organelles, neurotransmitters, etc.) are moved along the axon of a neuron between the cell body (soma) and the axon terminal. Because axons can be very long, neurons rely on efficient transport systems to deliver substances to distant parts of the cell and to return waste or signaling molecules to the soma.',
          'Anterograde Transport: Movement of molecules and organelles from the neuronal cell body towards the synaptic terminal. Motor Protein Involved: Kinesin. Functions: Supplies materials necessary for synaptic function, such as neurotransmitter-filled vesicles, enzymes, and membrane components.',
          'Retrograde Transport: Movement of molecules and organelles from the synaptic terminal back to the cell body. Motor Protein Involved: Dynein. Functions: Carries signaling molecules, endocytosed materials, and organelles for degradation or recycling in the cell body.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Intraneuronal axonal transport maintains interneuronal communication by moving materials along long axons between cell body and synaptic terminals.' },
            { type: 'paragraph', content: 'Anterograde transport uses kinesin motor proteins to move synaptic elements including neurotransmitter-filled vesicles, peptide transmitters, enzymes, membrane components and cytoskeleton from soma toward terminals. This supplies materials necessary for synaptic function.' },
            { type: 'paragraph', content: 'Retrograde transport uses dynein motor proteins to carry degradation products, neurotrophic signaling molecules like nerve growth factor, and endocytosed materials from terminals back to cell body for recycling or signaling.' },
            { type: 'paragraph', content: 'Both transport systems move along microtubules stabilized by associated proteins like tau. Disruption of axonal transport or microtubule-associated proteins causes neurodegeneration as in Alzheimers disease.' },
            { type: 'paragraph', content: 'This bidirectional transport ensures synaptic terminals maintain neurotransmission capacity while cell body receives trophic signals regulating neuronal survival and plasticity.' }
          ],
          raw: 'Intraneuronal axonal transport maintains interneuronal communication by moving materials along long axons between cell body and synaptic terminals. Anterograde transport uses kinesin motor proteins to move synaptic elements including neurotransmitter-filled vesicles, peptide transmitters, enzymes, membrane components and cytoskeleton from soma toward terminals. This supplies materials necessary for synaptic function. Retrograde transport uses dynein motor proteins to carry degradation products, neurotrophic signaling molecules like nerve growth factor, and endocytosed materials from terminals back to cell body for recycling or signaling. Both transport systems move along microtubules stabilized by associated proteins like tau. Disruption of axonal transport or microtubule-associated proteins causes neurodegeneration as in Alzheimers disease. This bidirectional transport ensures synaptic terminals maintain neurotransmission capacity while cell body receives trophic signals regulating neuronal survival and plasticity.'
        }
      },
      {
        id: 'lo-8',
        isCritical: false,
        title: 'Nonsynaptic neurotransmission. Volume transmission.',
        keyPoints: [
          'Nonsynaptic neurotransmission: Neurotransmitter diffusion through extracellular fluid acting outside traditional synapses',
          'No synaptic cleft requirement: Neurotransmitters interact with receptors not directly opposite release site',
          'Common neurotransmitters: Biogenic amines (dopamine, serotonin, noradrenaline), gases (NO, CO)',
          'Volume transmission: Subtype where neurotransmitters diffuse over larger areas to extrasynaptic receptors distant from release',
          'Mechanism: Neurotransmitter released at point diffuses through brain extracellular fluid to activate distant extrasynaptic receptors',
          'Functional significance: Enables temporal and spatial integration regulating mood, arousal, cognition; slower, more sustained effects than synaptic',
          'Example: Dopamine in prefrontal cortex links higher cognition with motivation and attention via volume transmission'
        ],
        officialDefinitions: [
          'Nonsynaptic neurotransmission refers to the diffusion of neurotransmitters through the extracellular fluid, acting outside of traditional synapses. This type of signaling does not rely on synaptic clefts but instead involves the interaction of neurotransmitters with receptors that are not directly opposite the release site.',
          'Neurotransmitter A and B diffuse to distant targets outside the synapse (1), and act on their receptors (2); Extrasynaptic receptors, medication effects; Example: dopamine (DA) in the prefrontal cortex (link between higher cognition and motivation/attention)',
          'Volume transmission is a subtype of nonsynaptic neurotransmission where neurotransmitters diffuse over a larger area, interacting with extrasynaptic receptors located far from the release site. This mechanism allows for widespread modulation of neural networks and is important for long-range communication within the brain.',
          'Functional Significance: Temporal and Spatial Integration: Nonsynaptic neurotransmission allows for the temporal and spatial integration of signals that regulate complex processes like mood, arousal, and cognitive functions. Slow and Sustained Effects: Compared to traditional synaptic transmission, nonsynaptic and volume transmission can produce slower and more sustained changes in neuronal excitability and synaptic strength.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Nonsynaptic neurotransmission occurs when neurotransmitters diffuse through extracellular fluid acting outside traditional synapses without requiring synaptic clefts. Neurotransmitters interact with receptors not directly opposite the release site.' },
            { type: 'paragraph', content: 'Common neurotransmitters include biogenic amines like dopamine, serotonin, and noradrenaline, plus gases like nitric oxide and carbon monoxide that freely diffuse through membranes.' },
            { type: 'paragraph', content: 'Volume transmission is a subtype where neurotransmitters diffuse over larger areas through brain extracellular fluid from release point to activate extrasynaptic receptors located far from release site. This enables widespread modulation of neural networks for long-range communication.' },
            { type: 'paragraph', content: 'Functional significance includes temporal and spatial integration of signals regulating complex processes like mood, arousal, and cognitive functions. Compared to traditional synaptic transmission, volume transmission produces slower and more sustained changes in neuronal excitability.' },
            { type: 'paragraph', content: 'Example includes dopamine volume transmission in prefrontal cortex linking higher cognition with motivation and attention.' }
          ],
          raw: 'Nonsynaptic neurotransmission occurs when neurotransmitters diffuse through extracellular fluid acting outside traditional synapses without requiring synaptic clefts. Neurotransmitters interact with receptors not directly opposite the release site. Common neurotransmitters include biogenic amines like dopamine, serotonin, and noradrenaline, plus gases like nitric oxide and carbon monoxide that freely diffuse through membranes. Volume transmission is a subtype where neurotransmitters diffuse over larger areas through brain extracellular fluid from release point to activate extrasynaptic receptors located far from release site. This enables widespread modulation of neural networks for long-range communication. Functional significance includes temporal and spatial integration of signals regulating complex processes like mood, arousal, and cognitive functions. Compared to traditional synaptic transmission, volume transmission produces slower and more sustained changes in neuronal excitability. Example includes dopamine volume transmission in prefrontal cortex linking higher cognition with motivation and attention.'
        }
      }
    ],
    referenceValues: [
      {
        parameter: 'Synaptic delay',
        value: '1-1.5 ms',
        isCritical: false
      }
    ]
  };

export default topic17;
