/**
 * Quick Review content for Topic 17 - Neurotransmission
 * Auto-generated - ALL 8 Learning Objectives
 */
const topic17QuickReview = {
  topicId: 'topic-17',
  topicNumber: 17,
  learningObjectives: {
    'lo-1': {
      title: 'Characterize electric synapses including the description of the molecular structure of gap junction operating in these synapses. Compare transmission between electric and chemical synapses (direction of information, speed of transmission).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Electric Synapses: Gap Junction Structure',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Electric synapses provide direct cytoplasmic connections between cells through gap junctions formed by connexin proteins. Six connexins form a connexon hemichannel; two connexons from adjacent cells dock to create a continuous pore.'
        },
        {
          type: 'keypoint',
          text: 'Gap junctions allow bidirectional passage of ions, small molecules up to 1000 Da, and second messengers like cAMP',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Electric Synapses',
            items: [
              'Direct ion passage via gap junctions',
              'Bidirectional transmission',
              'Minimal synaptic delay (fast)',
              'Found in cardiac/smooth muscle',
              'Enables synchronization'
            ]
          },
          right: {
            title: 'Chemical Synapses',
            items: [
              'Neurotransmitter-mediated',
              'Unidirectional (pre→post)',
              'Synaptic delay (1-1.5 ms)',
              'Most common in nervous system',
              'Allows signal modulation'
            ]
          },
          critical: true
        },
        {
          type: 'table',
          headers: ['Feature', 'Electric', 'Chemical'],
          rows: [
            ['Structure', 'Connexon pore (6 connexins)', 'Synaptic cleft + receptors'],
            ['Direction', 'Bidirectional', 'Unidirectional'],
            ['Speed', 'Instantaneous', '1-1.5 ms delay'],
            ['Function', 'Synchronization', 'Signal processing']
          ],
          critical: true
        },
        {
          type: 'clinical',
          text: 'Gap junctions in cardiac muscle enable synchronized contraction of the heart. Dysfunction can lead to arrhythmias.'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the consecutive events of chemical neurotransmission (starting with the depolarization of presynaptic membrane ending with the development of the graded electric response of the postsynaptic membrane (postsynaptic potential, PSP). Describe the ion currents involved in the development of the following local potentials: excitatory postsynaptic potential (EPSP), inhibitory postsynaptic potential (IPSP), end plate potential (EPP), and receptor potential.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Chemical Neurotransmission: Sequential Events',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Seven-step cascade from action potential to postsynaptic response:',
          items: [
            'Action potential depolarizes presynaptic membrane',
            'Voltage-gated Ca²⁺ channels open → Ca²⁺ influx',
            'Elevated intracellular Ca²⁺ triggers SNARE protein-mediated vesicle fusion',
            'Neurotransmitter released into synaptic cleft via exocytosis',
            'Neurotransmitter diffuses across cleft (~20 nm gap)',
            'Neurotransmitter binds postsynaptic receptors → ion channels open or second messengers activated',
            'Postsynaptic potential (PSP) develops as graded electrical response'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Ion Currents in Local Potentials'
        },
        {
          type: 'table',
          headers: ['Potential Type', 'Neurotransmitter', 'Ion Current', 'Effect'],
          rows: [
            ['EPSP', 'Glutamate, ACh', 'Na⁺ or Ca²⁺ influx', 'Depolarization'],
            ['IPSP', 'GABA, Glycine', 'Cl⁻ influx or K⁺ efflux', 'Hyperpolarization'],
            ['EPP', 'Acetylcholine (ACh)', 'Na⁺ influx (nicotinic)', 'Muscle depolarization'],
            ['Receptor Potential', 'Sensory stimulus', 'Na⁺/Ca²⁺ entry', 'Sensory depolarization']
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'EPSP brings membrane closer to threshold; IPSP moves it further away. Both are graded potentials whose amplitude depends on neurotransmitter amount.',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'EPP at neuromuscular junction: ACh opens nicotinic receptors causing Na⁺ influx, leading to muscle contraction if threshold reached.'
        },
        {
          type: 'clinical',
          text: 'Myasthenia gravis: Autoantibodies block nicotinic ACh receptors at neuromuscular junction, reducing EPP amplitude and causing muscle weakness.'
        }
      ]
    },
    'lo-3': {
      title: 'Describe the temporal and spatial summation of postsynaptic potentials (EPSPs and IPSPs), and their role to trigger an action potential',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Summation: Integrating Synaptic Inputs'
        },
        {
          type: 'comparison',
          left: {
            title: 'Temporal Summation',
            items: [
              'Rapid successive inputs',
              'Same presynaptic neuron',
              'Potentials overlap in time',
              'Cumulative effect builds'
            ]
          },
          right: {
            title: 'Spatial Summation',
            items: [
              'Simultaneous inputs',
              'Multiple presynaptic neurons',
              'Different dendritic locations',
              'Summed at axon hillock'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Axon hillock is the integration site with high density of voltage-gated Na⁺ channels. If summed potential reaches threshold (~-55 mV), action potential fires.'
        },
        {
          type: 'list',
          intro: 'Three summation scenarios:',
          items: [
            'Multiple EPSPs → Greater depolarization → Increased AP likelihood',
            'Multiple IPSPs → Greater hyperpolarization → Decreased AP likelihood',
            'EPSPs + IPSPs → Algebraic summation → Can cancel each other'
          ]
        },
        {
          type: 'paragraph',
          text: 'Integration allows neurons to perform complex computations, weighing excitatory and inhibitory inputs to determine firing patterns. This is fundamental to neural information processing.'
        },
        {
          type: 'clinical',
          text: 'Epileptic seizures result from excessive excitatory summation overwhelming inhibitory inputs, causing synchronized neuronal firing.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the common features of classical neurotransmitters.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Five Defining Features of Classical Neurotransmitters',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Requirements for classification as a classical neurotransmitter:',
          items: [
            'Synthesized and stored in the presynaptic terminal',
            'Released from presynaptic terminal in response to action potential (Ca²⁺-dependent)',
            'Exogenous application mimics the effect of presynaptic stimulation',
            'Specific receptors present on postsynaptic membrane',
            'Mechanism for inactivation/removal from synaptic cleft exists'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Universal Elimination Mechanism'
        },
        {
          type: 'list',
          intro: 'Two-step reuptake and recycling:',
          items: [
            'Presynaptic reuptake: Na⁺-associated secondary active symport from cleft',
            'Vesicular uptake: H⁺-associated secondary active antiport into vesicles',
            'Alternative: Enzymatic degradation (e.g., acetylcholinesterase for ACh)'
          ]
        },
        {
          type: 'keypoint',
          text: 'Dale\'s principle: Each neuron releases the same neurotransmitter from all axon terminals',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Co-transmitters (often peptides) may be released alongside classical transmitters after high-frequency stimulation, producing prolonged EPSPs.'
        },
        {
          type: 'clinical',
          text: 'Many psychiatric medications target neurotransmitter reuptake transporters (e.g., SSRIs block serotonin reuptake).'
        }
      ]
    },
    'lo-5': {
      title: 'Group the classical and non-classical neurotransmitters based on their chemical structure: 1. acetylcholine, 2. amino acids (glutamate, glycine, GABA), 3. biogenic amines (dopamine, noradrenaline, adrenaline, histamine, serotonin), 4. gases (NO, CO), 5. lipids (endocannabinoids, 6. peptides (endophins, encephalins, dynorphins, substance P, CGRP, VIP).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Neurotransmitter Classification by Structure'
        },
        {
          type: 'table',
          headers: ['Category', 'Examples', 'Classical/Non-classical'],
          rows: [
            ['Acetylcholine', 'ACh (acetic acid + choline)', 'Classical'],
            ['Amino acids', 'Glutamate, GABA, Glycine', 'Classical'],
            ['Biogenic amines', 'Dopamine, Noradrenaline, Serotonin, Histamine', 'Classical'],
            ['Gases', 'Nitric oxide (NO), Carbon monoxide (CO)', 'Non-classical'],
            ['Lipids', 'Endocannabinoids (anandamide, 2-AG)', 'Non-classical'],
            ['Peptides', 'Endorphins, Enkephalins, Substance P, VIP', 'Non-classical']
          ]
        },
        {
          type: 'list',
          intro: 'Amino acid neurotransmitters:',
          items: [
            'Glutamate: Most abundant excitatory transmitter in CNS',
            'GABA: Derived from glutamate via glutamate decarboxylase (GAD) + vitamin B6',
            'Glycine: Main inhibitory transmitter in spinal cord and brainstem'
          ]
        },
        {
          type: 'list',
          intro: 'Biogenic amines subdivisions:',
          items: [
            'Catecholamines: Dopamine, noradrenaline, adrenaline (share synthesis pathway)',
            'Others: Histamine (from histidine), Serotonin (from tryptophan)'
          ]
        },
        {
          type: 'keypoint',
          text: 'Non-classical transmitters (gases, lipids, peptides) do not follow all five classical features. Gases diffuse freely; lipids synthesized on demand; peptides require cell body synthesis.'
        },
        {
          type: 'clinical',
          text: 'GABA deficiency is implicated in epilepsy and anxiety disorders. Benzodiazepines enhance GABA-A receptor function to reduce seizures and anxiety.'
        }
      ]
    },
    'lo-6': {
      title: 'Characterize the neurotransmitters in bold based on their synthesis, inactivation, receptors and signal transduction mechanisms. Define the terms ionotropic and metabotropic neurotransmitter receptors.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Acetylcholine (ACh)',
          critical: true
        },
        {
          type: 'list',
          intro: 'ACh characteristics:',
          items: [
            'Synthesis: Choline + Acetyl-CoA → ACh (via choline acetyltransferase)',
            'Inactivation: Acetylcholinesterase → Choline + Acetate; Choline reuptake',
            'Receptors: Ionotropic nicotinic (nAChR), Metabotropic muscarinic (M1-M5)'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Glutamate',
          critical: true
        },
        {
          type: 'list',
          intro: 'Glutamate characteristics:',
          items: [
            'Synthesis: From glutamine via glutaminase in presynaptic terminals',
            'Inactivation: Astrocyte uptake via EAATs → conversion back to glutamine',
            'Receptors: Ionotropic NMDA/AMPA/kainate, Metabotropic mGluR1-8'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'GABA (Gamma-aminobutyric acid)',
          critical: true
        },
        {
          type: 'list',
          intro: 'GABA characteristics:',
          items: [
            'Synthesis: From glutamate via glutamate decarboxylase (GAD) + vitamin B6',
            'Inactivation: GABA transporters (GAT), GABA transaminase degradation',
            'Receptors: Ionotropic GABA-A/C (Cl⁻ channels), Metabotropic GABA-B (K⁺/Ca²⁺)'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Receptor Types: Ionotropic vs Metabotropic'
        },
        {
          type: 'comparison',
          left: {
            title: 'Ionotropic Receptors',
            items: [
              'Ligand-gated ion channels',
              'Direct ion flow when activated',
              'Fast synaptic transmission',
              'Rapid onset, short duration',
              'Examples: nAChR, NMDA, GABA-A'
            ]
          },
          right: {
            title: 'Metabotropic Receptors',
            items: [
              'G-protein coupled receptors',
              'Activate second messenger cascades',
              'Slow synaptic transmission',
              'Delayed onset, prolonged effects',
              'Examples: Muscarinic, mGluR, GABA-B'
            ]
          },
          critical: true
        },
        {
          type: 'clinical',
          text: 'Glutamate excitotoxicity: Excessive glutamate release during stroke causes Ca²⁺ overload via NMDA receptors, leading to neuronal death.'
        }
      ]
    },
    'lo-7': {
      title: 'Describe the role of intraneuronal (axonal) transport mechanisms in the maintenance of interneuronal communication.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Axonal Transport: Maintaining Synaptic Function'
        },
        {
          type: 'paragraph',
          text: 'Neurons with long axons require bidirectional transport to move proteins, organelles, and neurotransmitters between cell body (soma) and distant synaptic terminals.'
        },
        {
          type: 'comparison',
          left: {
            title: 'Anterograde Transport (Kinesin)',
            items: [
              'Soma → Terminals',
              'Motor protein: Kinesin',
              'Cargo: Synaptic vesicles',
              'Peptide transmitters',
              'Enzymes, membrane components',
              'Cytoskeleton elements'
            ]
          },
          right: {
            title: 'Retrograde Transport (Dynein)',
            items: [
              'Terminals → Soma',
              'Motor protein: Dynein',
              'Cargo: Degradation products',
              'Neurotrophic signals (NGF)',
              'Endocytosed materials',
              'Neuroinvasive viruses (HSV)'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Both systems move along microtubules stabilized by tau protein. Microtubule-associated protein dysfunction leads to neurodegeneration (e.g., Alzheimer\'s).'
        },
        {
          type: 'list',
          intro: 'Functional significance:',
          items: [
            'Ensures terminals receive materials for neurotransmitter synthesis and release',
            'Returns trophic signals to soma regulating neuronal survival and gene expression',
            'Recycles degraded components for metabolic efficiency'
          ]
        },
        {
          type: 'clinical',
          text: 'Axonal transport dysfunction is implicated in neurodegenerative diseases. Herpes simplex virus exploits retrograde transport to reach neuronal cell bodies.'
        }
      ]
    },
    'lo-8': {
      title: 'Nonsynaptic neurotransmission. Volume transmission.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Beyond the Synapse: Nonsynaptic Communication'
        },
        {
          type: 'paragraph',
          text: 'Nonsynaptic neurotransmission occurs when neurotransmitters diffuse through extracellular fluid to act on receptors not directly opposite the release site, without requiring traditional synaptic clefts.'
        },
        {
          type: 'keypoint',
          text: 'Volume transmission is a subtype where neurotransmitters diffuse over larger areas through brain extracellular fluid to activate distant extrasynaptic receptors.'
        },
        {
          type: 'list',
          intro: 'Common neurotransmitters in nonsynaptic transmission:',
          items: [
            'Biogenic amines: Dopamine, serotonin, noradrenaline',
            'Gases: Nitric oxide (NO), carbon monoxide (CO) - freely diffuse through membranes',
            'Lipids: Endocannabinoids - synthesized on demand, diffuse locally'
          ]
        },
        {
          type: 'comparison',
          left: {
            title: 'Synaptic Transmission',
            items: [
              'Point-to-point communication',
              'Synaptic cleft (~20 nm)',
              'Fast, precise signaling',
              'Local effects'
            ]
          },
          right: {
            title: 'Volume Transmission',
            items: [
              'Broadcast communication',
              'Diffusion over large areas',
              'Slow, sustained signaling',
              'Widespread network modulation'
            ]
          }
        },
        {
          type: 'paragraph',
          text: 'Functional significance: Allows temporal and spatial integration of signals regulating complex processes like mood, arousal, and cognitive functions. Produces slower, more sustained changes in neuronal excitability compared to synaptic transmission.'
        },
        {
          type: 'clinical',
          text: 'Example: Dopamine volume transmission in prefrontal cortex links higher cognition with motivation and attention. Dysfunction contributes to ADHD and schizophrenia.'
        }
      ]
    }
  }
};

export default topic17QuickReview;
