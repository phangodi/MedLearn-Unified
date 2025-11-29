const topic5QuickReview = {
  topicId: 'topic-5',
  topicNumber: 5,
  learningObjectives: {
    'lo-1': {
      title: 'Define the following terms regarding ion channels: selectivity, gating, activation, inactivation.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Ion Channel Properties'
        },
        {
          type: 'keypoint',
          content: 'Selectivity: Ion channels permit specific ions based on channel size and charge lining. Negative charges allow cations; positive charges allow anions.'
        },
        {
          type: 'keypoint',
          content: 'Gating: Process by which channels open or close in response to stimuli.'
        },
        {
          type: 'list',
          title: 'Three Gate Types',
          items: [
            'Voltage-gated: Respond to membrane potential changes',
            'Second messenger-gated: Respond to cAMP, IP3',
            'Ligand-gated: Respond to hormones, neurotransmitters'
          ]
        },
        {
          type: 'comparison',
          title: 'Activation vs Inactivation',
          items: [
            {
              label: 'Activation',
              content: 'Closed → Open (conductive). Triggered by voltage, ligands, or other stimuli.'
            },
            {
              label: 'Inactivation',
              content: 'Open → Non-conductive. Occurs even if stimulus persists. Prevents continuous ion flow (e.g., Na+ channel ball-and-chain mechanism).'
            }
          ]
        }
      ]
    },
    'lo-2': {
      title: 'Compare the gating mechanisms of intra- and extracellular ligand-gated, voltage-gated, and mechanical-gated ion channels.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Ion Channel Gating Mechanisms'
        },
        {
          type: 'table',
          title: 'Channel Types and Mechanisms',
          headers: ['Channel Type', 'Sensor Location', 'Stimulus', 'Example'],
          rows: [
            ['Extracellular Ligand-Gated', 'Extracellular side', 'Hormones, neurotransmitters', 'Nicotinic ACh receptor (Na+/K+)'],
            ['Intracellular Ligand-Gated', 'Intracellular side', 'cAMP, IP3', 'Cardiac SA node Na+ channels'],
            ['Voltage-Gated (Plasma)', 'S4 segment in membrane', 'Membrane potential changes', 'Neuronal Na+ channels'],
            ['Voltage-Gated (Organelle)', 'Organelle membrane', 'Internal voltage', 'Mitochondrial Ca2+ uniporter'],
            ['Mechanically-Gated (Extracellular)', 'Cell surface', 'Membrane stretch, ECM tension', 'Stretch receptors'],
            ['Mechanically-Gated (Intracellular)', 'Internal membranes', 'Cytoskeletal tension', 'Nuclear envelope Ca2+ channels']
          ]
        },
        {
          type: 'keypoint',
          content: 'Voltage-gated channels: S4 segment with positive charges moves during depolarization, causing conformational change and gate opening.'
        }
      ]
    },
    'lo-3': {
      title: 'Explain the importance of the voltage clamp technique to study ion channel function.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Voltage Clamp Technique'
        },
        {
          type: 'paragraph',
          content: 'Holds membrane potential at a set level while measuring the current needed to maintain that voltage, revealing ion channel behavior.'
        },
        {
          type: 'steps',
          title: 'How It Works',
          items: [
            'Two electrodes inserted: one measures Vm, other injects current',
            'Membrane potential is clamped at a command voltage',
            'When channels open, ions flow and try to change voltage',
            'Amplifier injects counter-current to prevent voltage change',
            'Injected current equals and opposes ionic current, revealing channel activity'
          ]
        },
        {
          type: 'list',
          title: 'Key Measurements',
          items: [
            'Time course of Na+ or K+ currents',
            'Voltage threshold for channel opening',
            'Inactivation dynamics',
            'Current-voltage (I-V) relationships'
          ]
        },
        {
          type: 'clinical',
          content: 'Historical Impact: Hodgkin and Huxley used voltage clamp on squid giant axon (1950s) to describe Na+/K+ channel kinetics and ionic basis of action potentials. Their gating equations are still used in computational modeling today.'
        }
      ]
    },
    'lo-4': {
      title: 'Define and compare the electrotonic (local, graded) potentials with the action potential (direction of potential change, graded or not, propagation velocity, change in the amplitude of the potential change during grading). Describe the regions of the neuronal membrane where these potentials typically occur.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Electrotonic vs Action Potentials'
        },
        {
          type: 'comparison',
          title: 'Key Differences',
          items: [
            {
              label: 'Electrotonic (Graded) Potentials',
              content: 'Small, localized changes proportional to stimulus strength. Can be depolarizing or hyperpolarizing. Amplitude varies with stimulus. Slow passive spread. Amplitude decays with distance (decremental).'
            },
            {
              label: 'Action Potentials',
              content: 'Rapid, large, all-or-none changes when threshold reached. Always depolarizing then repolarizing. Fixed amplitude once threshold reached. High velocity active propagation. Amplitude unchanged during propagation (regenerative).'
            }
          ]
        },
        {
          type: 'table',
          title: 'Comparison Summary',
          headers: ['Feature', 'Electrotonic Potential', 'Action Potential'],
          rows: [
            ['Direction', 'Depolarizing or hyperpolarizing', 'Depolarizing → Repolarizing'],
            ['Graded?', 'Yes, varies with stimulus', 'No, all-or-none'],
            ['Propagation', 'Passive, slow', 'Active, fast'],
            ['Amplitude Change', 'Decreases with distance', 'Constant (regenerated)']
          ]
        },
        {
          type: 'list',
          title: 'Electrotonic Potential Locations',
          items: [
            'Dendrites: Receive synaptic inputs',
            'Cell body (soma): Integrate multiple inputs',
            'Axon hillock: High Na+ channel density for summation'
          ]
        },
        {
          type: 'list',
          title: 'Action Potential Locations',
          items: [
            'Axon hillock/initial segment: Initiation site',
            'Axon: Propagation pathway',
            'Nodes of Ranvier: In myelinated axons',
            'Axon terminals: Trigger neurotransmitter release'
          ]
        }
      ]
    },
    'lo-5': {
      title: 'Make a schematic drawing of the membrane potential changes during an action potential recorded in the giant squid axon. Using the drawing, identify the phases of the action potential. Explain the terms threshold and the "all or none" principle. Define the terms rheobase and chronaxia.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Action Potential Phases and Principles'
        },
        {
          type: 'steps',
          title: 'Action Potential Phases (Giant Squid Axon)',
          items: [
            'Resting: ~-70 mV',
            'Phase 1: Rapid depolarization (rising phase)',
            'Phase 2: Peak/overshoot (~+40 mV, becomes positive)',
            'Phase 3: Repolarization (falling phase)',
            'Phase 4a: Afterhyperpolarization (undershoot, ~-80 to -90 mV)',
            'Phase 4b: Return to resting potential'
          ]
        },
        {
          type: 'keypoint',
          content: 'Duration: Entire action potential lasts approximately 1 millisecond in giant squid axon.'
        },
        {
          type: 'paragraph',
          content: 'Threshold Potential: The membrane potential at which action potential occurrence becomes inevitable. Less negative than resting potential, requiring inward current (positive charge flow into cell) to depolarize to threshold.'
        },
        {
          type: 'keypoint',
          content: 'All-or-None Principle: Action potential either occurs completely or not at all. If threshold is reached, full action potential is inevitable. If not reached, no action potential occurs.'
        },
        {
          type: 'comparison',
          title: 'Stimulus Intensity Measures',
          items: [
            {
              label: 'Rheobase',
              content: 'Minimum constant current intensity to elicit action potential when applied for infinitely long duration (~300 ms). Lowest stimulus strength if held long enough.'
            },
            {
              label: 'Chronaxie',
              content: 'Minimum duration stimulus must be applied at 2× rheobase strength to trigger action potential. Time to excite using strong stimulus.'
            }
          ]
        }
      ]
    },
    'lo-6': {
      title: 'Characterize the voltage-gated Na+-, K+- and Ca2+-channels functionally (gating, activation, inactivation). Describe the role of voltage-gated Na+-, K+- and Ca2+-channels in the phases of the neuronal action potential (depolarisation, overshoot, repolarisation, afterhyperpolarization). Define and explain the terms absolute and relative refractory periods.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Voltage-Gated Channels and Action Potential'
        },
        {
          type: 'table',
          title: 'Voltage-Gated Channel Characteristics',
          headers: ['Channel', 'Gates', 'Opens at', 'Key Feature'],
          rows: [
            ['Na+', 'Activation (outer) + Inactivation (inner)', '-55 mV (threshold)', 'Opens fast, inactivates via ball-and-chain'],
            ['K+', 'Single gate', '+30 mV', 'Opens slowly, closes slowly'],
            ['Ca2+', 'Voltage-dependent', '+30 mV (terminals)', 'Triggers neurotransmitter release']
          ]
        },
        {
          type: 'steps',
          title: 'Na+ Channel States During Action Potential',
          items: [
            'Resting (~-90 mV): Activation gate closed, inactivation gate open',
            'Active (~-55 mV): Both gates open, massive Na+ influx',
            'Inactivated: Activation gate open, inactivation gate closed (ball-and-chain)',
            'Reset: When repolarized, gates return to resting configuration'
          ]
        },
        {
          type: 'table',
          title: 'Channel Roles in Action Potential Phases',
          headers: ['Phase', 'Na+ Channels', 'K+ Channels', 'Result'],
          rows: [
            ['Depolarization', 'Open rapidly, massive influx', 'Closed', 'Steep upward slope toward ENa (+60 mV)'],
            ['Overshoot', 'Still open, beginning to inactivate', 'Starting to open', 'Membrane becomes positive (+40 to +60 mV)'],
            ['Repolarization', 'Inactivated, no influx', 'Fully open, K+ efflux', 'Downward slope toward EK (-90 mV)'],
            ['Afterhyperpolarization', 'Inactivated', 'Some remain open', 'Drops below resting, approaches EK']
          ]
        },
        {
          type: 'keypoint',
          content: 'Ca2+ channels open at +30 mV at axon terminals. Ca2+ influx triggers synaptic vesicle fusion and neurotransmitter exocytosis.'
        },
        {
          type: 'comparison',
          title: 'Refractory Periods',
          items: [
            {
              label: 'Absolute Refractory Period',
              content: 'From peak until resting potential reached. Na+ channels inactivated. No new action potential possible regardless of stimulus strength.'
            },
            {
              label: 'Relative Refractory Period',
              content: 'From afterhyperpolarization until resting potential reclaimed. New action potential possible but requires stronger-than-normal stimulus to overcome hyperpolarized state.'
            }
          ]
        }
      ]
    }
  }
};

export default topic5QuickReview;
