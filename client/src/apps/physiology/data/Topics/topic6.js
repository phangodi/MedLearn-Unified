const topic6 =   {
    id: 'topic-6',
    number: 6,
    category: 'neurophysiology',
    mcqs: ['mcq-1'],
    title: 'The axonal propagation of the action potential. Axon classification.',
    subtitle: 'Mechanisms of action potential propagation in different axon types, cable properties of neural membranes, and classification of peripheral nerve fibers based on conduction velocity.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: true,
        title: '>>Describe the propagation of the action potential in myelinated and unmyelinated axons.<< Explain saltatory conduction.',
        keyPoints: [
          'Myelinated axons: Saltatory conduction where action potential jumps from one node of Ranvier to the next',
          'Nodes of Ranvier: Gaps in myelin sheath where voltage-gated Na+ channels are concentrated; only sites of action potential regeneration',
          'Mechanism: Na+ influx at one node triggers depolarization → current spreads rapidly through insulated internode → opens Na+ channels at next node',
          'Unmyelinated axons: Continuous conduction requiring action potential regeneration at every point along membrane',
          'Continuous process: Voltage-gated Na+ channels open sequentially → depolarization spreads locally → adjacent Na+ channels open → K+ channels open for repolarization',
          'Conduction velocity: Saltatory conduction much faster than continuous conduction due to rapid electrotonic spread through internodes',
          'Energy efficiency: Saltatory conduction requires less Na-K-ATPase activity as ions only exchange at nodes'
        ],
        officialDefinitions: [
          'In myelinated axons, action potential propagation is known as saltatory conduction, where the impulse "jumps" from one node of Ranvier to the next. Myelin serves as an insulator, preventing ion flow across the membrane except at the nodes of Ranvier, which are gaps in the myelin sheath. This allows for rapid conduction of the action potential with the following characteristics: Nodes of Ranvier: These are the only points along the axon where ions are exchanged, making them the primary sites for the generation of action potentials. High Conduction Velocity: Due to the myelin sheath\'s insulation, the current travels rapidly through the internodes (the segments covered by myelin) with minimal loss of signal strength, thereby increasing the speed of action potential propagation. Depolarization at the Nodes: When the action potential reaches a node of Ranvier, it triggers depolarization by opening voltage-gated sodium (Na⁺) channels. This leads to a local influx of Na⁺, regenerating the action potential at each node.',
          'Mechanism of Saltatory Conduction: As the action potential reaches each node of Ranvier, the influx of Na⁺ ions causes depolarization, which then triggers the opening of voltage-gated Na⁺ channels at the next node. This process continues down the length of the axon, with the current traveling quickly through the insulated internodal regions and regenerating the action potential at each node.',
          'Propagation of the Action Potential in Unmyelinated Axons: In unmyelinated axons, the action potential is propagated through continuous conduction along the entire length of the axon. The absence of myelin means that the action potential must be regenerated at every point along the membrane, resulting in a slower conduction velocity compared to myelinated axons.',
          'Continuous Depolarization and Repolarization: When the action potential begins, it triggers an increase in permeability of voltage-gated Na⁺ channels, causing them to open and allowing Na⁺ to flow into the cell, leading to depolarization. As the action potential is generated at one segment of the membrane, it spreads locally to adjacent regions, causing the adjacent voltage-gated Na⁺ channels to open and propagate the depolarization along the axon.',
          'Involvement of Potassium (K⁺) Ions: As depolarization occurs, voltage-gated K⁺ channels open, allowing K⁺ ions to flow out, initiating repolarization and restoring the membrane potential to its resting state. This depolarization-repolarization cycle is repeated along the entire length of the axon.',
          'Slower Conduction Velocity: Due to the need to regenerate the action potential continuously along the entire length of the axon, conduction is much slower compared to saltatory conduction in myelinated axons.',
          'If the entire nerve were coated with the lipid myelin sheath, however, no action potentials could occur because there would be no low resistance breaks in the membrane across which depolarizing current could flow.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>In myelinated axons, propagation occurs through saltatory conduction where the impulse jumps from node of Ranvier to node.<<', critical: true },
            { type: 'paragraph', content: '>>Myelin insulates the axon so ions only flow at nodes where voltage-gated sodium channels concentrate.<<', critical: true },
            { type: 'paragraph', content: '>>When action potential reaches a node, sodium influx causes depolarization and current travels rapidly through the insulated internode triggering the next node.<<', critical: true },
            { type: 'paragraph', content: '>>In unmyelinated axons, propagation is continuous along the entire length. The action potential regenerates at every point as voltage-gated sodium channels open sequentially followed by potassium channels for repolarization.<<', critical: true },
            { type: 'paragraph', content: 'This continuous cycle is much slower than saltatory conduction.' },
            { type: 'paragraph', content: 'Saltatory conduction explains why myelinated fibers conduct faster, from one node of Ranvier triggers depolarization at the next node through rapid current spread in the internodal segments.' }
          ],
          raw: '>>In myelinated axons, propagation occurs through saltatory conduction where the impulse jumps from node of Ranvier to node. Myelin insulates the axon so ions only flow at nodes where voltage-gated sodium channels concentrate. When action potential reaches a node, sodium influx causes depolarization and current travels rapidly through the insulated internode triggering the next node. In unmyelinated axons, propagation is continuous along the entire length.<< The action potential regenerates at every point as voltage-gated sodium channels open sequentially followed by potassium channels for repolarization. This continuous cycle is much slower than saltatory conduction. Saltatory conduction explains why myelinated fibers conduct faster, from one node of Ranvier triggers depolarization at the next node through rapid current spread in the internodal segments.'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Define the terms membrane space constant and time constant.',
        keyPoints: [
          'Time constant (τ): Time for membrane potential to change 63% of its final value after current injection; τ = Rm × Cm',
          'High membrane resistance (Rm): Increases time constant as current flows less readily across membrane',
          'High membrane capacitance (Cm): Increases time constant as injected current must first discharge the membrane capacitor',
          'Space constant (λ): Also called length constant; measures how far electrical impulse travels before decaying significantly',
          'Formula: λ = √(Rm/Ri) where Rm is membrane resistance and Ri is internal resistance',
          'Large diameter: Decreases internal resistance (Ri ∝ 1/πr²), increases length constant, improves signal spread',
          'High membrane resistance: Increases length constant; current flows along path of least resistance through axon cytoplasm'
        ],
        officialDefinitions: [
          'The time constant (τ) is the amount of time it takes following the injection of current for the potential to change to 63% of its final value. In other words, the time constant indicates how quickly a cell membrane depolarizes in response to an inward current or how quickly it hyperpolarizes in response to an outward current.',
          'Two factors affect the time constant: The first factor is membrane resistance (Rm). When Rm is high, current does not readily flow across the cell membrane, which makes it difficult to change the membrane potential, thus increasing the time constant. The second factor, membrane capacitance (Cm), is the ability of the cell membrane to store charge. When Cm is high, the time constant is increased because injected current first must discharge the membrane capacitor before it can depolarize the membrane. Thus the time constant is greatest (i.e., takes longest) when Rm and Cm are high.',
          'Membrane space constant: an index of how well a subthreshold potential will spread along an axon as a function of distance. also known as the length constant, is a measure of how far an electrical impulse can travel along a neuron before it decays significantly.',
          'Again, Rm represents membrane resistance. Internal resistance, Ri, is inversely related to the ease of current flow in the cytoplasm of the nerve fiber. Therefore the length constant will be greatest (i.e., current will travel the farthest) when the diameter of the nerve is large, when membrane resistance is high, and when internal resistance is low. In other words, current flows along the path of least resistance.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The time constant is the time required for membrane potential to change 63 percent of its final value after current injection. It indicates how quickly the membrane responds to current and equals membrane resistance times membrane capacitance.' },
            { type: 'paragraph', content: 'High membrane resistance increases time constant because current crosses the membrane less readily. High capacitance also increases it because current must first discharge the membrane capacitor.' },
            { type: 'paragraph', content: 'The membrane space constant or length constant measures how far an electrical impulse travels along an axon before significant decay. It equals the square root of membrane resistance divided by internal resistance.' },
            { type: 'paragraph', content: 'Larger axon diameter decreases internal resistance increasing the length constant. High membrane resistance also increases it.' },
            { type: 'paragraph', content: 'Current travels farthest when diameter is large, membrane resistance is high, and internal resistance is low.' }
          ],
          raw: 'The time constant is the time required for membrane potential to change 63 percent of its final value after current injection. It indicates how quickly the membrane responds to current and equals membrane resistance times membrane capacitance. High membrane resistance increases time constant because current crosses the membrane less readily. High capacitance also increases it because current must first discharge the membrane capacitor. The membrane space constant or length constant measures how far an electrical impulse travels along an axon before significant decay. It equals the square root of membrane resistance divided by internal resistance. Larger axon diameter decreases internal resistance increasing the length constant. High membrane resistance also increases it. Current travels farthest when diameter is large, membrane resistance is high, and internal resistance is low.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Define membrane capacity. Explain how membrane capacity affects the propagation of the action potential in myelinated and unmyelinated axons.',
        keyPoints: [
          'Membrane capacitance (Cm): Ability of cell membrane to store electrical charge; lipid bilayer acts as capacitor',
          'Voltage relationship: Membrane potential U = Q/C where Q is charge and C is capacitance',
          'Typical value: Approximately 1 microfarad per square centimeter membrane area',
          'Unmyelinated axons: High capacitance leads to slower propagation as depolarization occurs continuously along entire axon length',
          'Time requirement: More time needed to change membrane potential continuously due to charging the membrane capacitor',
          'Myelinated axons: Lower capacitance due to myelin insulation leads to faster propagation',
          'Saltatory advantage: Action potential jumps between nodes requiring less charge to depolarize membrane over long distances'
        ],
        officialDefinitions: [
          'The electric charges (free ions, bound charges), which maintain the transmembrane potential are stored close to the inner and outer surfaces of the plasma membrane: Plasma membrane acts as a capacitor (lipid bilayer acts as an insulator). Placing different amounts of charge on the two sides of the plasma membrane, membrane potentials are generated, which depend upon the charge and the capacitance of the lipid bilayer. U=Q/C (charge/capacitance)',
          'Example: capacitance per unit area is around 1 µF/ cm²',
          'Unmyelinated Axons: High capacitance leads to slower action potential propagation, as depolarization occurs continuously and requires more time to change the membrane potential along the entire length of the axon.',
          'Myelinated Axons: Lower capacitance due to myelination leads to faster propagation because the action potential "jumps" between nodes, requiring less charge to depolarize the membrane over long distances.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Membrane capacitance is the ability of the cell membrane to store electrical charge with the lipid bilayer acting as a capacitor. Charges are stored on the inner and outer membrane surfaces.' },
            { type: 'paragraph', content: 'In unmyelinated axons, high membrane capacitance slows action potential propagation because depolarization must occur continuously along the entire length.' },
            { type: 'paragraph', content: 'More time is needed to change membrane potential as current must first charge the capacitor at each point before depolarization occurs.' },
            { type: 'paragraph', content: 'In myelinated axons, myelin reduces membrane capacitance leading to faster propagation.' },
            { type: 'paragraph', content: 'The action potential jumps between nodes of Ranvier through saltatory conduction requiring less charge to depolarize the membrane over long distances because internodal regions with low capacitance do not require full depolarization.' }
          ],
          raw: 'Membrane capacitance is the ability of the cell membrane to store electrical charge with the lipid bilayer acting as a capacitor. Charges are stored on the inner and outer membrane surfaces. In unmyelinated axons, high membrane capacitance slows action potential propagation because depolarization must occur continuously along the entire length. More time is needed to change membrane potential as current must first charge the capacitor at each point before depolarization occurs. In myelinated axons, myelin reduces membrane capacitance leading to faster propagation. The action potential jumps between nodes of Ranvier through saltatory conduction requiring less charge to depolarize the membrane over long distances because internodal regions with low capacitance do not require full depolarization.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Action potential propagation in mixed peripheral nerves: The compound (extracellular recorded) action potential.',
        keyPoints: [
          'Compound action potential (CAP): Summation of multiple action potentials from different fiber types in mixed nerve',
          'Recording method: Extracellular recording using suction or surface electrodes on peripheral nerve',
          'Multiple peaks: Each peak reflects action potentials from fiber group with similar conduction velocity',
          'A-alpha fibers: Largest myelinated fibers, fastest conduction, lowest threshold, produce initial peak',
          'A-beta fibers: Myelinated but smaller, slower conduction, produce second peak',
          'A-delta fibers: Small myelinated fibers with slower conduction, produce third peak',
          'C fibers: Unmyelinated, slowest conduction, highest threshold, contribute to final peak',
          'Clinical utility: Analysis of peak timing and amplitude determines conduction velocity and threshold properties; detects nerve damage'
        ],
        officialDefinitions: [
          'When a mixed peripheral nerve is stimulated and recorded extracellularly, the result is a compound action potential. Unlike a single axon action potential (all-or-none), the CAP is a summation of multiple action potentials from different fiber types.',
          'Characteristics of the CAP: Recorded Extracellularly (e.g., from a suction electrode or surface electrode on the nerve). Multiple Peaks or Phases: Each peak reflects action potentials from a group of fibers with similar conduction velocity.',
          'In mixed peripheral nerves like the saphenous nerve, different types of nerve fibers (Aα, Aβ, Aδ, and C fibers) have varying conduction velocities. To analyze these properties, electrodes are placed on the nerve and it is stimulated: Stimulation and Recording: Electrodes are used to stimulate the saphenous nerve. The electrical activity (compound action potential) is recorded as the signal travels through the nerve.',
          'Response of Different Fibers: Aα fibers are the largest and myelinated, resulting in the fastest conduction velocities and lowest threshold for activation. They produce the initial peak in the recorded action potential. Aβ fibers, also myelinated but smaller, conduct more slowly and produce the second peak. Aδ fibers are small myelinated fibers with slower conduction, resulting in a third peak. C fibers, which are unmyelinated, conduct action potentials very slowly and have the highest threshold, contributing to the last peak in the compound action potential.',
          'Analysis: By examining the time and amplitude of each peak, the conduction velocity and threshold properties of each fiber type can be determined. This method helps to understand nerve health and function, as changes in conduction velocity can indicate nerve damage or disease.'
        ],
        examAnswer: 'In mixed peripheral nerves, extracellular recording produces a compound action potential which is the summation of multiple action potentials from different fiber types. Unlike single axon potentials which are all-or-none, the compound action potential shows multiple peaks. Each peak represents fibers with similar conduction velocities. A-alpha fibers are largest and myelinated with fastest conduction and lowest threshold producing the first peak. A-beta fibers are smaller myelinated fibers producing the second peak. A-delta fibers are small myelinated fibers with slower conduction producing a third peak. C fibers are unmyelinated conducting slowest with highest threshold contributing the final peak. Analyzing the timing and amplitude of each peak determines conduction velocity and threshold properties of different fiber types, useful for detecting nerve damage or disease.'
      },
      {
        id: 'lo-5',
        isCritical: true,
        title: 'Explain how axonal diameter and myelinisation determines the action propagation velocity of different axons in the same peripheral nerve. >>Describe the various axon classes based on the Erlanger-Gasser-classification.<<',
        keyPoints: [
          'Axonal diameter: Larger diameter decreases internal resistance (Ri ∝ 1/πr²), increases length constant, faster propagation',
          'Myelination effects: Increases membrane resistance (Rm), decreases membrane capacitance (Cm), reduces time constant',
          'Combined effect: Both factors increase conduction velocity by improving cable properties of the axon',
          'Erlanger-Gasser classification: Groups axons by diameter, myelination, and conduction velocity',
          'A-alpha (Aα): 100 meters per second, large myelinated, motor neurons and muscle spindle afferents',
          'A-beta (Aβ): 50 meters per second, myelinated, touch and pressure receptors',
          'A-gamma (Aγ): 20 meters per second, myelinated, gamma motor neurons',
          'A-delta (Aδ): 15 meters per second, small myelinated, pain and temperature',
          'B fibers: 7 meters per second, small myelinated, preganglionic autonomic',
          'C fibers: 1 meter per second, unmyelinated, postganglionic autonomic and pain'
        ],
        officialDefinitions: [
          'The conduction velocity of action potentials in peripheral nerves is influenced by two main factors: axonal diameter and myelination. These factors affect the cable properties of the axon, specifically the time constant and length constant, which ultimately determine the speed of action potential propagation.',
          'Axonal Diameter: Increasing Axonal Diameter: Internal Resistance (Ri): The internal resistance of an axon is inversely proportional to its cross-sectional area (A = πr²). As the diameter of the axon increases, the internal resistance decreases. Effect on Conduction Velocity: Decreased internal resistance (Ri) allows current to spread more easily through the axon, increasing the length constant (λ). A larger length constant means that current can spread further along the axon, allowing the action potential to propagate more quickly. Limitations: While increasing axonal diameter is effective in speeding up conduction, there are anatomical constraints that limit how large axons can grow. Therefore, additional mechanisms like myelination are employed to enhance conduction velocity.',
          'Myelination: Myelin Sheath: Myelin acts as an insulating layer around the axon. It increases the membrane resistance (Rm) and decreases the membrane capacitance (Cm). Increased Membrane Resistance: Higher membrane resistance forces the current to flow through the axon rather than leak out across the membrane, ensuring efficient propagation of the action potential. Decreased Membrane Capacitance: Lower membrane capacitance reduces the time constant, allowing the membrane to reach the threshold potential more quickly in response to incoming current.',
          'Saltatory Conduction: In myelinated axons, action potentials "jump" from one node of Ranvier to the next, a process known as saltatory conduction. Nodes of Ranvier are gaps in the myelin sheath where ion channels are concentrated, allowing for rapid depolarization at these points. This mechanism greatly increases conduction velocity as the action potential does not need to propagate continuously along the entire axon but instead leaps from node to node.',
          'The Erlanger-Gasser classification categorizes nerve fibers based on diameter, myelination, and conduction velocity: Aα (A-alpha): Large-diameter, heavily myelinated fibers with the fastest conduction velocity. These fibers are responsible for proprioception (e.g., muscle spindles, Golgi tendon organs). Aβ (A-beta): Medium-diameter, myelinated fibers with fast conduction velocity. These fibers carry information related to touch and pressure. Aγ (A-gamma): Medium-diameter, myelinated fibers. Carries motor signals to muscle spindles (efferent fibers involved in muscle tone regulation). Aδ (A-delta): Small-diameter, lightly myelinated fibers with moderate conduction velocity. They carry information related to pain and temperature. B: Smaller-diameter, lightly myelinated fibers. Primarily autonomic fibers that transmit autonomic signals (e.g., preganglionic sympathetic fibers). C: Smallest-diameter, unmyelinated fibers with the slowest conduction velocity. They carry information related to pain, temperature, and autonomic functions.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Larger axonal diameter decreases internal resistance because resistance is inversely proportional to cross-sectional area. This increases the length constant allowing current to spread further and faster propagation.' },
            { type: 'paragraph', content: 'Myelination increases membrane resistance forcing current through the axon and decreases capacitance reducing time constant for faster threshold achievement.' },
            {
              type: 'list',
              intro: '>>The Erlanger-Gasser classification groups axons by conduction velocity:<<',
              critical: true,
              items: [
                'A-alpha fibers conduct at 100 meters per second and are large myelinated fibers for motor neurons and proprioceptors',
                'A-beta fibers conduct at 50 meters per second for touch and pressure',
                'A-gamma fibers conduct at 20 meters per second to gamma motor neurons',
                'A-delta fibers conduct at 15 meters per second as small myelinated fibers for pain and temperature',
                'B fibers conduct at 7 meters per second as preganglionic autonomic fibers',
                'C fibers conduct at 1 meter per second as unmyelinated postganglionic autonomic and pain fibers'
              ]
            }
          ],
          raw: 'Larger axonal diameter decreases internal resistance because resistance is inversely proportional to cross-sectional area. This increases the length constant allowing current to spread further and faster propagation. Myelination increases membrane resistance forcing current through the axon and decreases capacitance reducing time constant for faster threshold achievement. >>The Erlanger-Gasser classification groups axons by conduction velocity. A-alpha fibers conduct at 100 meters per second and are large myelinated fibers for motor neurons and proprioceptors. A-beta fibers conduct at 50 meters per second for touch and pressure. A-gamma fibers conduct at 20 meters per second to gamma motor neurons. A-delta fibers conduct at 15 meters per second as small myelinated fibers for pain and temperature. B fibers conduct at 7 meters per second as preganglionic autonomic fibers. C fibers conduct at 1 meter per second as unmyelinated postganglionic autonomic and pain fibers.<<'
        }
      }
    ],
    referenceValues: [
      {
        parameter: 'Action potential duration in nerves',
        value: '1 ms',
        isCritical: false
      },
      {
        parameter: 'Aα fiber conduction velocity',
        value: '100 m/s',
        isCritical: false
      },
      {
        parameter: 'Aβ fiber conduction velocity',
        value: '50 m/s',
        isCritical: false
      },
      {
        parameter: 'Aγ fiber conduction velocity',
        value: '20 m/s',
        isCritical: false
      },
      {
        parameter: 'Aδ fiber conduction velocity',
        value: '15 m/s',
        isCritical: false
      },
      {
        parameter: 'B fiber conduction velocity',
        value: '7 m/s',
        isCritical: false
      },
      {
        parameter: 'C fiber conduction velocity',
        value: '1 m/s',
        isCritical: false
      }
    ]
  };

export default topic6;
