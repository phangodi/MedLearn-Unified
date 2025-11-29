/**
 * Quick Review Content for Topic 7: Receptors, Signal Transduction Mechanisms
 *
 * This file contains condensed, exam-focused review blocks for rapid studying.
 * Each learning objective is broken down into digestible blocks optimized for quick recall.
 */

const topic7QuickReview = {
  topicId: 'topic-7',
  topicNumber: 7,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the main types of signaling molecules (mediators): autocrine and paracrine signaling molecules, hormones, neurotransmitters, neurohormones.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Signaling Molecules Classification'
        },
        {
          type: 'comparison',
          content: {
            title: 'Local vs. Systemic Signaling',
            items: [
              {
                label: 'Local Signaling',
                points: [
                  'Autocrine: Cell targets itself (e.g., IL-2 from T cells)',
                  'Paracrine: Acts on nearby cells, no bloodstream (e.g., histamine, NO, prostaglandins)',
                  'Neurotransmitters: Synaptic release, very fast (e.g., ACh, dopamine, serotonin)'
                ]
              },
              {
                label: 'Systemic Signaling',
                points: [
                  'Hormones: Endocrine glands → bloodstream → distant targets (e.g., insulin, cortisol, thyroxine)',
                  'Neurohormones: Neurons → bloodstream → distant targets (e.g., ADH, oxytocin from hypothalamus/posterior pituitary)'
                ]
              }
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Key distinction: Neurotransmitters act locally at synapses, while neurohormones (also from neurons) enter the blood to act on distant targets.'
        }
      ]
    },

    'lo-2': {
      title: 'Define the terms: receptor, ligand, agonist, antagonist (competitive, non-competitive).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Receptor Terminology'
        },
        {
          type: 'list',
          items: [
            'Receptor: Specialized protein that binds signaling molecules and initiates physiological response',
            'Ligand: Any molecule that binds specifically to a receptor (neurotransmitter, hormone, drug)',
            'Agonist: Ligand that activates the receptor, mimicking natural ligand and initiating response',
            'Antagonist: Binds to receptor but does NOT activate physiological response'
          ]
        },
        {
          type: 'comparison',
          content: {
            title: 'Antagonist Types',
            items: [
              {
                label: 'Competitive Antagonist',
                points: [
                  'Binds to same site as agonist',
                  'Blocks agonist binding',
                  'Can be overcome by increasing agonist concentration'
                ]
              },
              {
                label: 'Non-Competitive Antagonist',
                points: [
                  'Binds to allosteric site (different from agonist)',
                  'Prevents receptor activation',
                  'Cannot be overcome by increasing agonist'
                ]
              }
            ]
          }
        }
      ]
    },

    'lo-3': {
      title: '>>Classification of receptors: 1. based on localization<< (cell membrane receptors, cytosolic receptors, nuclear receptors, intracellular membrane receptors (IP3, ryanodin), >>2. based on function<< (ionotropic receptors, metabotropic receptors, receptor enzymes, and enzyme-linked receptors). Ionotropic receptors: selective and non-selective receptors, cation and anion channels. Give 1-1 examples.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Receptor Classifications (CRITICAL)'
        },
        {
          type: 'comparison',
          content: {
            title: '1. Classification by Localization',
            items: [
              {
                label: 'Membrane Receptors',
                points: ['On cell surface', 'Bind extracellular ligands']
              },
              {
                label: 'Cytosolic Receptors',
                points: ['In cytoplasm', 'Bind lipophilic ligands']
              },
              {
                label: 'Nuclear Receptors',
                points: ['In nucleus', 'Function as transcription factors']
              },
              {
                label: 'Intracellular Membrane Receptors',
                points: ['On ER/organelles', 'Examples: IP3, ryanodine receptors']
              }
            ]
          }
        },
        {
          type: 'comparison',
          content: {
            title: '2. Classification by Function',
            items: [
              {
                label: 'Ionotropic',
                points: ['Ligand-gated ion channels', 'Fast synaptic transmission']
              },
              {
                label: 'Metabotropic',
                points: ['G-protein coupled', 'Activate second messengers']
              },
              {
                label: 'Receptor Enzymes',
                points: ['Intrinsic enzymatic activity', 'Example: RTKs']
              },
              {
                label: 'Enzyme-Linked',
                points: ['Associated with enzyme', 'Example: JAK-STAT pathway']
              }
            ]
          }
        },
        {
          type: 'table',
          content: {
            title: 'Ionotropic Receptor Examples',
            headers: ['Type', 'Example', 'Ion', 'Effect'],
            rows: [
              ['Selective Cation', 'Nicotinic ACh Receptor (nAChR)', 'Na⁺, K⁺', 'Depolarization'],
              ['Selective Anion', 'GABA-A Receptor', 'Cl⁻', 'Hyperpolarization (inhibition)'],
              ['Non-Selective', 'AMPA Receptor', 'Na⁺, K⁺, Ca²⁺', 'Depolarization (excitation)']
            ]
          }
        }
      ]
    },

    'lo-4': {
      title: 'Metabotropic receptors: types (G-protein coupled receptors, tyrosin-kinase receptors etc).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Metabotropic Receptor Types'
        },
        {
          type: 'keypoint',
          content: 'Metabotropic receptors do NOT form ion channels. They initiate intracellular signaling cascades via second messengers.'
        },
        {
          type: 'comparison',
          content: {
            title: 'Main Types',
            items: [
              {
                label: 'G-Protein Coupled Receptors (GPCRs)',
                points: [
                  'Structure: 7 transmembrane alpha-helices',
                  'Extracellular ligand-binding site',
                  'Intracellular G-protein binding site',
                  'Example: Muscarinic ACh receptor'
                ]
              },
              {
                label: 'Tyrosine Kinase Receptors (RTKs)',
                points: [
                  'Extracellular ligand-binding domain',
                  'Single transmembrane domain',
                  'Intracellular domain with kinase activity',
                  'Example: Insulin receptor, growth factor receptors'
                ]
              }
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'GPCR Activation Mechanism',
            steps: [
              'Ligand binds to extracellular domain',
              'Conformational change occurs',
              'G-protein activated by GDP → GTP exchange',
              'Downstream signaling cascades initiated'
            ]
          }
        }
      ]
    },

    'lo-5': {
      title: 'Heterotrimer G-proteins, types (Gs/Gi/Gq), functions.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Heterotrimeric G-Proteins'
        },
        {
          type: 'paragraph',
          content: 'G-proteins consist of three subunits (α, β, γ) and are named for their ability to bind guanosine nucleotides.'
        },
        {
          type: 'steps',
          content: {
            title: 'G-Protein Activation Cycle',
            steps: [
              'Inactive state: α subunit binds GDP, associated with β-γ subunits',
              'Receptor binding causes GDP → GTP exchange on α subunit',
              'α subunit dissociates from β-γ and activates effectors',
              'α subunit hydrolyzes GTP → GDP and reassociates with β-γ (termination)'
            ]
          }
        },
        {
          type: 'table',
          content: {
            title: 'G-Protein Types and Functions',
            headers: ['Type', 'Effector', 'Second Messenger', 'Effect'],
            rows: [
              ['Gs (Stimulatory)', 'Activates adenylyl cyclase', '↑ cAMP', '↑ PKA activity'],
              ['Gi (Inhibitory)', 'Inhibits adenylyl cyclase', '↓ cAMP', '↓ PKA activity'],
              ['Gq', 'Activates phospholipase C', 'IP₃ + DAG', 'Ca²⁺ release + PKC activation']
            ]
          }
        }
      ]
    },

    'lo-6': {
      title: '>>Define the term second messengers, describe the most important members<< (cAMP, cGMP, calcium, IP3/DAG).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Second Messengers (CRITICAL)'
        },
        {
          type: 'keypoint',
          content: 'Second messengers are intracellular signaling molecules released in response to first messengers (hormones/neurotransmitters) binding to receptors. They amplify the signal within the cell.'
        },
        {
          type: 'table',
          content: {
            title: 'Major Second Messengers',
            headers: ['Messenger', 'Produced By', 'Degraded By', 'Activates', 'Function'],
            rows: [
              ['cAMP', 'Adenylyl cyclase', 'Phosphodiesterase', 'PKA', 'Gs/Gi pathways, metabolism'],
              ['cGMP', 'Guanylyl cyclase', 'Phosphodiesterase', 'PKG', 'NO signaling, vasodilation'],
              ['Ca²⁺', 'IP₃ receptors, Ca²⁺ channels', 'Ca²⁺-ATPase', 'Calmodulin', 'Muscle contraction, secretion'],
              ['IP₃', 'Phospholipase C', 'Phosphatases', 'IP₃ receptors', 'Releases Ca²⁺ from ER'],
              ['DAG', 'Phospholipase C', 'Lipases', 'PKC', 'Growth, differentiation, metabolism']
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Gq pathway: PLC hydrolyzes PIP₂ → IP₃ + DAG. IP₃ releases Ca²⁺ from ER, DAG activates PKC in membrane.'
        }
      ]
    },

    'lo-7': {
      title: 'Explain the importance of posttranslational modification (eg. phosphorylation) to control the activity of cellular proteins.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Posttranslational Modifications (PTMs)'
        },
        {
          type: 'keypoint',
          content: 'PTMs are chemical changes to proteins after synthesis that regulate function, location, and stability WITHOUT requiring new protein synthesis.'
        },
        {
          type: 'comparison',
          content: {
            title: 'Phosphorylation (Most Important PTM)',
            items: [
              {
                label: 'Mechanism',
                points: [
                  'Kinases add phosphate group to Ser/Thr/Tyr',
                  'Phosphatases remove phosphate group',
                  'Reversible and dynamic control'
                ]
              },
              {
                label: 'Effects',
                points: [
                  'Activates or inactivates enzymes',
                  'Alters protein shape/conformation',
                  'Modulates protein-protein interactions',
                  'Rapid cellular responses (insulin, MAPK cascade)'
                ]
              }
            ]
          }
        },
        {
          type: 'list',
          items: [
            'Ubiquitination: Targets protein for degradation',
            'Acetylation: Regulates gene expression (histone modification)',
            'Methylation: Regulates gene expression',
            'Glycosylation: Membrane targeting, protein folding',
            'Lipidation: Membrane anchoring'
          ]
        }
      ]
    },

    'lo-8': {
      title: '>>Explain the function of receptor enzymes and enzyme-linked receptors through 1-1 example.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Receptor Enzymes vs. Enzyme-Linked Receptors (CRITICAL)'
        },
        {
          type: 'comparison',
          content: {
            title: 'Key Distinction',
            items: [
              {
                label: 'Receptor Enzymes',
                points: [
                  'Have INTRINSIC enzymatic activity',
                  'Ligand binding activates enzyme within receptor itself',
                  'Example: Receptor Tyrosine Kinases (RTKs)'
                ]
              },
              {
                label: 'Enzyme-Linked Receptors',
                points: [
                  'ASSOCIATED with enzyme (not intrinsic)',
                  'Ligand binding activates associated enzyme',
                  'Example: Cytokine receptors (JAK-STAT)'
                ]
              }
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'RTK Example: Insulin Receptor',
            steps: [
              'Insulin binds to extracellular domain',
              'Receptor undergoes dimerization',
              'Trans-autophosphorylation of tyrosine residues on intracellular domain',
              'Phosphorylated tyrosines serve as docking sites for signaling proteins (SH2/PTB domains)',
              'Downstream pathways activated (glucose uptake in muscle/fat)'
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'Enzyme-Linked Example: JAK-STAT Pathway',
            steps: [
              'Cytokine binds to receptor',
              'Associated JAK enzymes are activated',
              'JAKs phosphorylate tyrosine residues on receptor',
              'STAT proteins bind to phosphorylated tyrosines',
              'STATs are phosphorylated, dimerize, and translocate to nucleus',
              'STATs act as transcription factors to regulate gene expression'
            ]
          }
        }
      ]
    },

    'lo-9': {
      title: 'Signal transduction via intracellular receptors: the general structure and function of cytosolic and nuclear receptors explained through 1-1 example.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Intracellular Receptors'
        },
        {
          type: 'keypoint',
          content: 'Intracellular receptors bind lipid-soluble ligands (steroid hormones, thyroid hormones) that cross the cell membrane. They function as transcription factors.'
        },
        {
          type: 'comparison',
          content: {
            title: 'Cytosolic vs. Nuclear Receptors',
            items: [
              {
                label: 'Cytosolic Receptors',
                points: [
                  'Located in cytoplasm',
                  'Inactive when bound to chaperones (HSP90)',
                  'Ligand binding → dissociate → translocate to nucleus',
                  'Example: Glucocorticoid receptor (GR)'
                ]
              },
              {
                label: 'Nuclear Receptors',
                points: [
                  'Already in nucleus',
                  'Bound to DNA even without ligand',
                  'Ligand binding → conformational change → transcription',
                  'Example: Thyroid hormone receptor (TR)'
                ]
              }
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'Glucocorticoid Receptor Mechanism',
            steps: [
              'Cortisol crosses cell membrane',
              'Binds to GR in cytoplasm',
              'GR dissociates from HSP90 chaperone',
              'GR dimerizes and translocates to nucleus',
              'Binds to glucocorticoid response elements (GREs) in DNA',
              'Regulates genes for inflammation, metabolism, stress response'
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'Thyroid Hormone Receptor Mechanism',
            steps: [
              'Without ligand: TR bound to DNA with co-repressors (repressing transcription)',
              'T3/T4 binds to TR',
              'Conformational change occurs',
              'Co-repressors released, co-activators recruited',
              'Transcription initiated (metabolism, growth, development genes)'
            ]
          }
        }
      ]
    },

    'lo-10': {
      title: 'Describe the following terms related to membrane receptors: activation, inactivation, internalization, up-regulation, down-regulation, sensitization, desensitization.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Receptor Regulation Terminology'
        },
        {
          type: 'table',
          content: {
            title: 'Receptor Regulation Mechanisms',
            headers: ['Term', 'Definition', 'Effect on Sensitivity'],
            rows: [
              ['Activation', 'Ligand binding triggers conformational change → signaling cascade', 'Response initiated'],
              ['Inactivation', 'Receptor unable to respond (phosphorylation, modification)', 'Response stopped'],
              ['Internalization', 'Endocytosis removes receptors from membrane', '↓ Sensitivity'],
              ['Up-regulation', 'Increase receptor number (low ligand exposure)', '↑ Sensitivity'],
              ['Down-regulation', 'Decrease receptor number (prolonged high ligand)', '↓ Sensitivity'],
              ['Sensitization', 'Cell more responsive (↑ receptor density or affinity)', '↑ Sensitivity'],
              ['Desensitization', 'Decreased activity (continuous ligand exposure)', '↓ Sensitivity']
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Up/down-regulation controls receptor NUMBER. Sensitization/desensitization controls receptor RESPONSIVENESS.'
        },
        {
          type: 'clinical',
          content: 'Clinical relevance: Desensitization explains drug tolerance. Down-regulation explains why chronic receptor agonist use requires increasing doses over time.'
        }
      ]
    }
  }
};

export default topic7QuickReview;
