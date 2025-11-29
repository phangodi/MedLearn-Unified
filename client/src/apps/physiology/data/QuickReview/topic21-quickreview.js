const topic21QuickReview = {
  topicId: 'topic-21',
  topicNumber: 21,
  learningObjectives: {
    'lo-1': {
      title: 'Motor neuron structure, locations, and fiber classification',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Motor Neuron Anatomy'
        },
        {
          type: 'list',
          title: 'Four Key Parts',
          items: [
            'Dendrites: Branching projections receiving signals around cell body',
            'Cell body (soma): Contains nucleus, metabolic center',
            'Axon hillock: Junction where action potentials are initiated',
            'Axon: Long projection transmitting impulses to muscle'
          ]
        },
        {
          type: 'comparison',
          title: 'Cell Body Locations',
          items: [
            {
              label: 'Spinal Nerves',
              description: 'Ventral (anterior) horn of spinal cord gray matter → controls limb/trunk muscles'
            },
            {
              label: 'Cranial Nerves',
              description: 'Motor nuclei in brainstem (medulla, pons, midbrain) → controls face/head/neck muscles (e.g., oculomotor, facial nuclei)'
            }
          ]
        },
        {
          type: 'comparison',
          title: 'Erlanger-Gasser Motor Fiber Classification',
          items: [
            {
              label: 'Aα Fibers (Alpha Motor Neurons)',
              description: 'Large diameter, heavily myelinated | ~100 m/s conduction | Innervate extrafusal fibers for voluntary movement and force generation'
            },
            {
              label: 'Aγ Fibers (Gamma Motor Neurons)',
              description: 'Smaller diameter, moderately myelinated | ~20 m/s conduction | Innervate intrafusal fibers in muscle spindles for tone and stretch reflex regulation'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Lower motor neurons (LMNs) are the final common pathway from CNS to muscle. Damage causes flaccid paralysis with muscle atrophy.'
        }
      ]
    },
    'lo-2': {
      title: 'Sites of IPSP, EPSP, action potential, and neurotransmitter release',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Electrical Events in Motor Neurons'
        },
        {
          type: 'table',
          headers: ['Event', 'Location', 'Mechanism'],
          rows: [
            ['IPSP', 'Dendrites & soma', 'Hyperpolarization via Cl⁻ influx or K⁺ efflux (GABA, glycine)'],
            ['EPSP', 'Dendrites, soma, axon hillock', 'Depolarization via Na⁺ or Ca²⁺ influx (glutamate, ACh)'],
            ['Action Potential', 'Axon hillock (initiated)', 'When summated EPSPs reach threshold (~-55 mV)'],
            ['Neurotransmitter Release', 'Axon terminal', 'ACh released into synaptic cleft after Ca²⁺ influx']
          ]
        },
        {
          type: 'paragraph',
          content: 'Graded potentials (IPSPs and EPSPs) spread electrotonically from dendrites and soma to the axon hillock, where they summate. If net depolarization reaches threshold, an action potential fires and propagates down the axon.'
        },
        {
          type: 'keypoint',
          content: 'The axon hillock is the integration zone where all inputs are summed to determine if an action potential will be generated.'
        }
      ]
    },
    'lo-3': {
      title: 'Neuromuscular junction structure and transmission steps',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Neuromuscular Transmission Sequence'
        },
        {
          type: 'steps',
          title: '8-Step Process',
          items: [
            'Action potential arrives at presynaptic terminal → depolarizes membrane → opens voltage-gated Ca²⁺ channels',
            'Ca²⁺ influx down electrochemical gradient → triggers vesicle movement',
            'Synaptic vesicles fuse with membrane (exocytosis) → ACh released into synaptic cleft',
            'ACh diffuses across cleft → binds nicotinic receptors (nAChR) on motor end plate',
            'Ligand-gated Na⁺/K⁺ channels open → Na⁺ influx exceeds K⁺ efflux → depolarization',
            'End plate potential (EPP) generated → if reaches threshold, triggers muscle action potential',
            'Acetylcholinesterase (AChE) breaks down ACh → acetate + choline',
            'Choline reuptake via Na⁺-dependent transporter → ACh resynthesis in presynaptic terminal'
          ]
        },
        {
          type: 'keypoint',
          content: 'Critical trigger: Calcium influx is the essential signal linking electrical (action potential) to chemical (neurotransmitter release) events.'
        },
        {
          type: 'clinical',
          content: 'The neuromuscular junction is the target of various toxins and drugs. Understanding transmission steps is essential for treating myasthenia gravis and using muscle relaxants in surgery.'
        }
      ]
    },
    'lo-4': {
      title: 'Differences between EPP and muscle action potential',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'EPP vs. Muscle Action Potential'
        },
        {
          type: 'comparison',
          title: 'Key Distinctions',
          items: [
            {
              label: 'End Plate Potential (EPP)',
              description: 'Graded, local depolarization at motor end plate | Caused by ACh binding nicotinic receptors (ligand-gated Na⁺/K⁺ channels) | Not propagated, fades with distance | Amplitude varies with ACh amount | May or may not reach threshold'
            },
            {
              label: 'Muscle Action Potential',
              description: 'All-or-none response triggered when EPP reaches ~-55 mV | Propagates along entire sarcolemma and into T-tubules | Uses voltage-gated Na⁺ (depolarization) and K⁺ (repolarization) channels | Leads to Ca²⁺ release from sarcoplasmic reticulum → contraction'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Functional relationship: EPP is the local trigger → Muscle action potential is the propagated signal → Excitation-contraction coupling initiates muscle contraction.'
        }
      ]
    },
    'lo-5': {
      title: 'Neuromuscular junction inhibitors: curare, succinylcholine, botulinum toxin',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'NMJ Inhibitors: Targets and Mechanisms'
        },
        {
          type: 'table',
          headers: ['Drug', 'Target', 'Mechanism', 'Clinical Use'],
          rows: [
            ['Curare', 'nAChRs (motor end plate)', 'Competitive antagonist: blocks ACh binding → EPP below threshold → paralysis', 'Muscle relaxant in surgery'],
            ['Succinylcholine', 'nAChRs (motor end plate)', 'Depolarizing blocker: continuous depolarization → receptor desensitization → paralysis', 'Muscle relaxant in surgery'],
            ['Botulinum Toxin', 'Presynaptic terminal', 'Cleaves SNARE proteins → blocks vesicle fusion → no ACh release → paralysis', 'Therapeutic muscle relaxation, cosmetic']
          ]
        },
        {
          type: 'keypoint',
          content: 'Curare and succinylcholine target the postsynaptic side (receptors), while botulinum toxin targets the presynaptic side (neurotransmitter release machinery).'
        },
        {
          type: 'clinical',
          content: 'Botulinum toxin cleaves SNARE proteins (synaptobrevin, SNAP-25, syntaxin), which are essential for synaptic vesicle fusion. This mechanism is exploited therapeutically for dystonia and cosmetically for wrinkle reduction.'
        }
      ]
    },
    'lo-6': {
      title: 'Motor unit definition and motor recruitment',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Motor Units and Recruitment'
        },
        {
          type: 'keypoint',
          content: 'Motor Unit Definition: A single motor neuron + all muscle fibers it innervates = basic functional unit of motor control.'
        },
        {
          type: 'paragraph',
          content: 'Motor unit size varies greatly: few fibers for fine control (eye, facial muscles) to thousands of fibers for gross control (large limb muscles for running, jumping).'
        },
        {
          type: 'keypoint',
          content: 'Size Principle: Motor units are recruited from smallest to largest based on motor neuron size and activation threshold.'
        },
        {
          type: 'steps',
          title: 'Motor Recruitment Progression',
          items: [
            'Low force (fine control): Small motor units recruited first → low-threshold neurons, few fibers → minimal force (writing, holding light objects)',
            'Moderate force: Medium motor units added → intermediate neurons → increased force generation',
            'High force: Large motor units recruited → high-threshold neurons, many fibers → strong contractions (lifting heavy weights, running)',
            'Maximal force: ALL motor units (small + medium + large) recruited simultaneously → maximum force output (sprinting, jumping)'
          ]
        },
        {
          type: 'clinical',
          content: 'The orderly recruitment pattern (size principle) ensures smooth force gradation and prevents fatigue of large motor units during low-intensity activities. This principle is fundamental to understanding muscle control in both health and disease.'
        }
      ]
    }
  }
};

export default topic21QuickReview;
