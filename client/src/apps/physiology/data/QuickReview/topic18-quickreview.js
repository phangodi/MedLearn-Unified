const topic18QuickReview = {
  topicId: 'topic-18',
  topicNumber: 18,
  learningObjectives: {
    'lo-1': {
      title: 'Make a schematic figure of a primary sensory neuron and indicate its major parts: peripheral axon, central axon, cell body. Give the anatomical location of primary sensory neurons (spinal dorsal root ganglia, and the sensory ganglia of cranial nerves).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Primary Sensory Neuron Structure'
        },
        {
          type: 'keypoint',
          content: 'Primary sensory neurons are pseudo-unipolar cells with two axon branches appearing as a single process, featuring peripheral axon, central axon, and cell body.'
        },
        {
          type: 'list',
          title: 'Three Major Parts',
          items: [
            'Peripheral axon (dendron): Extends from cell body to receptor cells in peripheral sensory organs; receives sensory information (touch, pain, temperature)',
            'Central axon: Extends from cell body to dorsal horn of spinal cord; forms synapses with second-order neurons',
            'Cell body (soma): Contains nucleus and organelles; located outside CNS in ganglia'
          ]
        },
        {
          type: 'list',
          title: 'Anatomical Locations',
          items: [
            'Spinal dorsal root ganglia: Contains cell bodies of primary sensory neurons transmitting information from body to spinal cord',
            'Cranial nerve sensory ganglia: Trigeminal (CN V), facial (CN VII), glossopharyngeal (CN IX), vagus (CN X) - transmit sensory info from face, head, and neck to brain'
          ]
        }
      ]
    },
    'lo-2': {
      title: 'On the schematic figure of the primary sensory neuron indicate the most likely sites of the generation of the receptor potential, the propagation of the action potential and the release of neurotransmitters.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Signal Flow in Primary Sensory Neurons'
        },
        {
          type: 'comparison',
          title: 'Three Critical Sites',
          items: [
            {
              label: 'Receptor Potential Generation',
              value: 'Peripheral axon terminals where sensory receptors are located - stimulus opens mechanosensitive/chemosensitive channels → Na+ influx → local depolarization'
            },
            {
              label: 'Action Potential Initiation',
              value: 'First node of Ranvier in peripheral axon when receptor potential reaches threshold - then propagates along both axons via saltatory conduction, bypassing soma'
            },
            {
              label: 'Neurotransmitter Release',
              value: 'Central axon terminals in dorsal horn of spinal cord/brainstem - AP → Ca2+ channels open → Ca2+ influx → vesicle fusion → glutamate release'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'The action potential bypasses the soma, traveling directly from peripheral to central axon through saltatory conduction in myelinated fibers.'
        }
      ]
    },
    'lo-3': {
      title: 'Define the terms: receptor sensitivity (activation threshold), receptor specificity (modality), and receptive field.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Receptor Properties: Sensitivity, Specificity, and Field'
        },
        {
          type: 'comparison',
          title: 'Three Key Definitions',
          items: [
            {
              label: 'Receptor Sensitivity (Activation Threshold)',
              value: 'Minimum stimulus intensity required to generate detectable receptor potential change - lower threshold = higher sensitivity'
            },
            {
              label: 'Receptor Specificity (Modality)',
              value: 'Type of stimulus to which receptor is particularly responsive - each receptor activated by specific energy form (light, heat, mechanical pressure)'
            },
            {
              label: 'Receptive Field',
              value: 'Area or region of body that when stimulated causes change in firing rate of specific sensory neuron'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Labeled line principle: Despite all nerves transmitting only impulses, sensation type is determined by the CNS termination point of the tract.'
        },
        {
          type: 'paragraph',
          content: 'Receptive fields can be excitatory (increasing firing rate) or inhibitory (decreasing firing rate). Smaller receptive fields (like fingertips) enable precise stimulus localization with high spatial resolution.'
        }
      ]
    },
    'lo-4': {
      title: 'Group the somatosensory receptors based on the origin of the sensory stimulus (extero-, intero-, and proprioceptors) and on their modality (mechano-, thermo, uni- and polimodal nociceptors).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Somatosensory Receptor Classification'
        },
        {
          type: 'comparison',
          title: 'By Stimulus Origin',
          items: [
            {
              label: 'Exteroceptors',
              value: 'Receive stimuli from outside body - skin mechanoreceptors, retinal photoreceptors, thermoreceptors'
            },
            {
              label: 'Interoceptors',
              value: 'Receive stimuli from within body, primarily internal organs - chemoreceptors in blood vessels, visceral nociceptors'
            },
            {
              label: 'Proprioceptors',
              value: 'Provide body position, movement, equilibrium - muscle spindles, Golgi tendon organs in joints'
            }
          ]
        },
        {
          type: 'comparison',
          title: 'By Modality',
          items: [
            {
              label: 'Mechanoreceptors',
              value: 'Detect mechanical compression/stretch in skin, joints, muscles - Pacinian corpuscles, Meissner corpuscles, Merkel cells'
            },
            {
              label: 'Thermoreceptors',
              value: 'Detect temperature changes - cold receptors (below 36°C via TRPM8), warm receptors (above 36°C via TRPV channels)'
            },
            {
              label: 'Unimodal Nociceptors',
              value: 'Detect specific harmful stimuli - TRPV1 for heat/capsaicin, supplied by A-delta fibers for sharp pain'
            },
            {
              label: 'Polymodal Nociceptors',
              value: 'Respond to multiple harmful stimuli (mechanical, thermal, chemical) - supplied by unmyelinated C fibers for slow pain'
            }
          ]
        },
        {
          type: 'clinical',
          content: 'Above 45°C or at extreme cold temperatures, thermoreceptors become inactive and polymodal nociceptors activate, signaling pain instead of temperature.'
        }
      ]
    },
    'lo-5': {
      title: 'Describe the steps of sensory signal transduction processes in mechanoreceptors, thermoreceptors and nociceptors, and how the action potential is generated. Give the important neurotransmitters released by primary sensory neurons.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Sensory Signal Transduction Pathways'
        },
        {
          type: 'steps',
          title: 'Mechanoreceptor Transduction',
          items: [
            'Mechanical stimulus deforms receptor membrane',
            'Opens mechanosensitive Na+ channels',
            'Na+ influx generates graded receptor potential',
            'If threshold reached, action potential initiates at axon hillock',
            'Action potential propagates to CNS',
            'Glutamate released at terminals, activating postsynaptic neurons'
          ]
        },
        {
          type: 'steps',
          title: 'Thermoreceptor Transduction',
          items: [
            'Temperature change detected by thermoreceptors',
            'Opens TRP channels (TRPV for warmth, TRPM8 for cold)',
            'Na+/Ca2+ influx generates receptor potential',
            'If large enough, action potential initiated',
            'Travels to CNS where neurotransmitters relay temperature information'
          ]
        },
        {
          type: 'steps',
          title: 'Nociceptor Transduction',
          items: [
            'Noxious stimuli (mechanical, thermal, chemical) detected',
            'Activates TRPV1 (heat), TRPM8 (cold), or other mechanically-activated channels',
            'Ion entry generates receptor potential',
            'Action potential initiated, traveling along A-delta or C fibers',
            'Reaches CNS where neurotransmitters activate second-order neurons'
          ]
        },
        {
          type: 'list',
          title: 'Important Neurotransmitters',
          items: [
            'Glutamate: Primary excitatory transmitter from most sensory neurons - mediates fast transmission for touch, proprioception, temperature, pain',
            'Substance P: Released by nociceptors - transmits pain signals from periphery to dorsal horn',
            'CGRP (Calcitonin Gene-Related Peptide): Co-released with Substance P - modulates pain transmission, causes vasodilation and neurogenic inflammation',
            'Others: Somatostatin (inhibitory modulation), aspartate, nitric oxide, various peptides'
          ]
        }
      ]
    },
    'lo-6': {
      title: 'Define the terms slow-adapting and fast-adapting receptors.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Receptor Adaptation: Slow vs Fast'
        },
        {
          type: 'paragraph',
          content: 'Adaptation occurs when a constant stimulus is applied for a period of time. Initially, action potential frequency is high, but as time passes, this frequency declines even though the stimulus continues.'
        },
        {
          type: 'comparison',
          title: 'Two Types of Adaptation',
          items: [
            {
              label: 'Slow-Adapting (Tonic) Receptors',
              value: 'Continue transmitting impulses as long as stimulus present - provide information on stimulus duration and intensity - encode steady-state signals - Example: Merkel cells detect sustained pressure and texture'
            },
            {
              label: 'Fast-Adapting (Phasic) Receptors',
              value: 'Respond rapidly to stimulus changes - activated by onset and offset but not constant stimulus - detect rapid changes and filter out constant background - Example: Pacinian corpuscles detect vibrations and rapid changes'
            }
          ]
        },
        {
          type: 'clinical',
          content: 'Fast-adapting receptors stop firing after initial stimulus even if it continues, allowing you to "forget" constant sensations like clothing on your skin while remaining sensitive to new touches.'
        }
      ]
    },
    'lo-7': {
      title: 'Explain how the axonal diameter and myelinisation determines the action potential propagation in sensory axons. Group the sensory axons according to the Lloyd-Hunt (Ia, Ib, II, III and IV)-, and the Erlanger-Gasser classification (Aα, Aβ, Aδ, and C).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Axonal Conduction and Fiber Classification'
        },
        {
          type: 'keypoint',
          content: 'Larger diameter decreases internal resistance (inversely proportional to cross-sectional area), increasing length constant and allowing faster action potential propagation.'
        },
        {
          type: 'keypoint',
          content: 'Myelination increases membrane resistance (forcing current through axon) and decreases capacitance (faster threshold reach), enabling saltatory conduction where action potentials jump between nodes of Ranvier.'
        },
        {
          type: 'table',
          title: 'Lloyd-Hunt Classification',
          headers: ['Group', 'Diameter', 'Speed', 'Function'],
          rows: [
            ['Ia', 'Large', 'Fast', 'Muscle spindle primary endings (proprioception)'],
            ['Ib', 'Large', 'Fast', 'Golgi tendon organs (proprioception)'],
            ['II', 'Medium', 'Medium', 'Muscle spindle secondary endings (proprioception/mechanoreception)'],
            ['III', 'Small', 'Slower', 'Touch, pressure, some nociception'],
            ['IV', 'Very small', 'Slowest', 'Unmyelinated - pain and temperature']
          ]
        },
        {
          type: 'table',
          title: 'Erlanger-Gasser Classification',
          headers: ['Fiber Type', 'Diameter (μm)', 'Myelination', 'Speed (m/s)', 'Function'],
          rows: [
            ['Aα', '10-20', 'Heavily myelinated', '50-120', 'Proprioception'],
            ['Aβ', '4-12', 'Myelinated', '25-70', 'Touch and pressure'],
            ['Aδ', '1-5', 'Lightly myelinated', '12-30', 'Sharp pain and temperature'],
            ['C', '<1', 'Unmyelinated', '<2', 'Slow pain and temperature']
          ]
        }
      ]
    },
    'lo-8': {
      title: 'Define the term secondary sensory cell, and describe its connection to the primary sensory neuron. Give at least one example.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Secondary Sensory Cells'
        },
        {
          type: 'keypoint',
          content: 'A secondary sensory cell is a non-neuronal receptor cell that detects a specific stimulus (light, sound, taste) and transduces it into a chemical signal, then communicates with a primary sensory neuron by releasing neurotransmitter.'
        },
        {
          type: 'list',
          title: 'Key Features',
          items: [
            'Not a neuron itself',
            'Generates a receptor potential but does NOT fire an action potential',
            'Releases neurotransmitters to activate an adjacent primary sensory neuron'
          ]
        },
        {
          type: 'steps',
          title: 'Connection Mechanism',
          items: [
            'Stimulus activates the secondary sensory cell',
            'Creates a graded receptor potential in the cell',
            'If strong enough, releases neurotransmitter (e.g., glutamate, serotonin)',
            'Neurotransmitter binds to receptors on primary sensory neuron, depolarizing it',
            'If depolarization reaches threshold, primary neuron fires action potential'
          ]
        },
        {
          type: 'clinical',
          content: 'Example: Hair cells in the cochlea (hearing) - inner hair cells detect sound-induced vibrations and release glutamate onto primary afferent neurons of the auditory nerve (CN VIII), which carry signals to brainstem auditory centers. Other examples include taste receptor cells and retinal photoreceptors (rods and cones).'
        }
      ]
    }
  }
};

export default topic18QuickReview;
