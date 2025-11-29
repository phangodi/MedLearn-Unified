const topic24QuickReview = {
  topicId: 'topic-24',
  topicNumber: 24,
  learningObjectives: {
    'lo-1': {
      title: 'Define the terms and compare single-unit and multi-unit smooth muscles',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Single-Unit (Visceral) Smooth Muscle'
        },
        {
          type: 'keypoint',
          points: [
            'Cells electrically coupled via gap junctions forming functional syncytium',
            'Found in GI tract, bladder, uterus, ureter, blood vessels',
            'Spontaneous pacemaker activity with rhythmic contractions (peristalsis)',
            'Action potentials spread through gap junctions → coordinated contraction'
          ]
        },
        {
          type: 'header',
          content: 'Multi-Unit Smooth Muscle'
        },
        {
          type: 'keypoint',
          points: [
            'Cells function independently without electrical coupling',
            'Found in iris, ciliary muscle, vas deferens, piloerector muscles',
            'No spontaneous activity - requires autonomic innervation',
            'Each motor unit contracts individually without spreading'
          ]
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Single-Unit',
              description: 'Gap junctions, spontaneous activity, myogenic tone'
            },
            {
              label: 'Multi-Unit',
              description: 'Independent cells, neural control only, no spontaneous activity'
            }
          ]
        }
      ]
    },

    'lo-2': {
      title: 'Describe the intracellular pathways that control contraction and relaxation in smooth muscle',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Contraction Pathway'
        },
        {
          type: 'steps',
          items: [
            'Initiation: Depolarization, hormones/neurotransmitters, or mechanical stretch',
            'Ca²⁺ entry: From ECF via voltage-gated/ligand-gated channels + SR via IP₃-gated channels',
            'Ca²⁺-calmodulin complex formation activates MLCK',
            'MLCK phosphorylates myosin light chains → ↑ myosin ATPase activity',
            'Cross-bridge cycling and tension development'
          ]
        },
        {
          type: 'header',
          content: 'Relaxation Pathway'
        },
        {
          type: 'steps',
          items: [
            'Ca²⁺ removal: SERCA pumps into SR, plasma membrane Ca²⁺-ATPase/Na⁺-Ca²⁺ exchanger',
            'MLCP dephosphorylates myosin light chains',
            'Inhibition of cross-bridge cycling → relaxation'
          ]
        },
        {
          type: 'keypoint',
          points: [
            'IP₃ pathway: Phospholipase C → IP₃ → SR Ca²⁺ release',
            'MLCK = contraction switch, MLCP = relaxation switch'
          ]
        }
      ]
    },

    'lo-3': {
      title: 'Distinguish between electromechanical coupling and pharmacomechanical coupling',
      isCritical: false,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              label: 'Electromechanical',
              description: 'Membrane depolarization → voltage-gated Ca²⁺ channels → Ca²⁺ influx → Ca²⁺-induced Ca²⁺ release (CICR) from SR via ryanodine receptors. Depends on membrane potential changes.'
            },
            {
              label: 'Pharmacomechanical',
              description: 'Ligand (hormone/NT) binds GPCR → phospholipase C → IP₃ → SR Ca²⁺ release. Independent of membrane potential changes.'
            }
          ]
        },
        {
          type: 'clinical',
          condition: 'Example: Norepinephrine Effects',
          details: 'α₁-receptor binding → pharmacomechanical coupling (IP₃ pathway) → contraction. β₂-receptor binding → cAMP pathway → relaxation (desensitization).'
        },
        {
          type: 'keypoint',
          points: [
            'Electromechanical = voltage-dependent Ca²⁺ entry',
            'Pharmacomechanical = receptor-mediated Ca²⁺ release',
            'Both can occur simultaneously in smooth muscle'
          ]
        }
      ]
    },

    'lo-4': {
      title: 'Describe the differences in actomyosin regulation of smooth and skeletal muscle and structural similarities',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Regulation Mechanisms'
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Skeletal Muscle',
              description: 'Ca²⁺ binds troponin C → troponin-tropomyosin shifts → exposes myosin-binding sites on actin. Regulated on THIN filaments.'
            },
            {
              label: 'Smooth Muscle',
              description: 'Ca²⁺ binds calmodulin → activates MLCK → phosphorylates myosin light chains → enables actin binding. NO TROPONIN. Regulated on THICK filaments.'
            }
          ]
        },
        {
          type: 'header',
          content: 'Ca²⁺ Sources'
        },
        {
          type: 'list',
          items: [
            'Skeletal: Primarily SR via DHP and ryanodine receptors',
            'Smooth: Both ECF (membrane channels) AND SR (IP₃ + RyR receptors)'
          ]
        },
        {
          type: 'header',
          content: 'Structural Features'
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Skeletal',
              description: 'Organized sarcomeres, striated, Z-lines, A-bands, I-bands'
            },
            {
              label: 'Smooth',
              description: 'No sarcomeres, non-striated, crisscross actin-myosin, dense bodies (α-actinin)'
            }
          ]
        },
        {
          type: 'keypoint',
          points: [
            'SIMILARITY: Both use actin-myosin sliding filament mechanism requiring ATP',
            'Key difference: Troponin vs calmodulin regulation'
          ]
        }
      ]
    },

    'lo-5': {
      title: 'Explain the sources, movements and roles of Ca²⁺ in smooth muscle during contraction and relaxation',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Ca²⁺ Sources for Contraction'
        },
        {
          type: 'list',
          items: [
            'Extracellular fluid: Via voltage-gated and ligand-gated Ca²⁺ channels',
            'Sarcoplasmic reticulum: Via IP₃-gated channels and ryanodine receptors (CICR)'
          ]
        },
        {
          type: 'header',
          content: 'Contraction Role'
        },
        {
          type: 'steps',
          items: [
            'Depolarization or receptor activation → Ca²⁺ influx from ECF',
            'Hormones/NTs activate PLC → IP₃ → SR Ca²⁺ release',
            'Ca²⁺-induced Ca²⁺ release (CICR): Entering Ca²⁺ triggers RyR → amplifies signal',
            'Ca²⁺ + calmodulin → activates MLCK',
            'MLCK phosphorylates myosin light chains → cross-bridge formation'
          ]
        },
        {
          type: 'header',
          content: 'Relaxation Role'
        },
        {
          type: 'steps',
          items: [
            'SERCA pumps: Actively transport Ca²⁺ back into SR (ATP-dependent)',
            'Plasma membrane: Ca²⁺-ATPase and Na⁺-Ca²⁺ exchanger extrude Ca²⁺ from cell',
            '↓ Cytoplasmic Ca²⁺ → Ca²⁺ dissociates from calmodulin → MLCK inactivated',
            'MLCP dephosphorylates myosin light chains → stops contraction'
          ]
        },
        {
          type: 'keypoint',
          points: [
            'Dual Ca²⁺ sources: ECF + SR (unlike skeletal which uses mainly SR)',
            'Contraction = Ca²⁺ IN, Relaxation = Ca²⁺ OUT'
          ]
        }
      ]
    },

    'lo-6': {
      title: 'Describe the mechanisms responsible for myofilament Ca²⁺ sensitization and desensitization',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Ca²⁺ Sensitization (↑ Force at Same Ca²⁺)'
        },
        {
          type: 'keypoint',
          points: [
            'Mechanism: RhoA/Rho-kinase or PKC pathways INHIBIT MLCP',
            'Effect: Prevents myosin dephosphorylation → sustained phosphorylation',
            'Result: Enhanced contraction without ↑ intracellular Ca²⁺',
            'Outcome: ↑ Actin-myosin interaction at baseline Ca²⁺ levels'
          ]
        },
        {
          type: 'header',
          content: 'Ca²⁺ Desensitization (↓ Force at Same Ca²⁺)'
        },
        {
          type: 'keypoint',
          points: [
            'Mechanism: cAMP/PKA or cGMP/PKG pathways ENHANCE MLCP activity',
            'Effect: ↑ Myosin light chain dephosphorylation',
            'Result: Reduced contraction despite unchanged Ca²⁺',
            'Outcome: ↓ Actin-myosin interaction'
          ]
        },
        {
          type: 'clinical',
          condition: 'Clinical Example: Bronchodilation',
          details: 'β₂-adrenergic agonists (e.g., albuterol) → ↑ cAMP → PKA activation → desensitization → airway smooth muscle relaxation. Nitric oxide (NO) → ↑ cGMP → PKG activation → vascular smooth muscle relaxation.'
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Sensitization',
              description: 'RhoA/PKC → ↓ MLCP → ↑ phosphorylation → ↑ contraction'
            },
            {
              label: 'Desensitization',
              description: 'cAMP/cGMP → ↑ MLCP → ↓ phosphorylation → ↓ contraction'
            }
          ]
        }
      ]
    },

    'lo-7': {
      title: 'Explain why smooth muscles can develop and maintain force with much lower ATP hydrolysis than skeletal muscle',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Energy Efficiency Mechanisms'
        },
        {
          type: 'keypoint',
          points: [
            'Latch mechanism: Dephosphorylated myosin remains attached to actin in low-energy state',
            'Slower cross-bridge cycling: Significantly slower than skeletal muscle',
            'Lower myosin ATPase activity: Intrinsically lower ATP hydrolysis rate',
            'Result: Only 1/10 to 1/300 ATP required vs skeletal muscle for same tension'
          ]
        },
        {
          type: 'header',
          content: 'The Latch State'
        },
        {
          type: 'paragraph',
          content: 'Dephosphorylated myosin heads remain attached to actin without continuous ATP consumption. This allows sustained tonic contraction with minimal energy expenditure - ideal for prolonged contractions like vascular tone and GI motility.'
        },
        {
          type: 'clinical',
          condition: 'Functional Significance',
          details: 'Despite fewer myosin filaments and slower cycling, smooth muscle generates 4-6 kg/cm² force (vs 3-4 kg/cm² for skeletal) due to prolonged cross-bridge attachment. Enables hours-long contractions without fatigue.'
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Skeletal Muscle',
              description: 'Fast cycling, high ATP use, rapid fatigue, short contractions'
            },
            {
              label: 'Smooth Muscle',
              description: 'Slow cycling + latch, low ATP use, no fatigue, sustained contractions'
            }
          ]
        }
      ]
    },

    'lo-8': {
      title: 'Distinguish between muscle relaxation from contracted state and stress relaxation',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Active Muscle Relaxation'
        },
        {
          type: 'paragraph',
          content: 'Active return to resting state after contraction. Involves cessation of cross-bridge cycling directly dependent on Ca²⁺ removal from cytoplasm.'
        },
        {
          type: 'list',
          items: [
            'Skeletal: Ca²⁺ pumped into SR → dissociates from troponin → tropomyosin blocks sites',
            'Smooth: MLCP dephosphorylates myosin + Ca²⁺ removed by SERCA and membrane pumps',
            'Example: Intestinal smooth muscle relaxes after peristaltic wave to reset for next contraction'
          ]
        },
        {
          type: 'header',
          content: 'Stress Relaxation (Unique to Smooth Muscle)'
        },
        {
          type: 'paragraph',
          content: 'Tension gradually decreases over time despite maintained stretch, independent of Ca²⁺ changes. Allows hollow organs to accommodate volume without proportional pressure increase.'
        },
        {
          type: 'steps',
          items: [
            'Initial stretch → immediate ↑ tension',
            'Over seconds to minutes: Cross-bridges slowly detach/recycle',
            'Cytoskeleton reorganizes and adapts to new length',
            'Tension resets to lower level (new steady state)'
          ]
        },
        {
          type: 'clinical',
          condition: 'Clinical Example: Bladder Filling',
          details: 'As bladder fills, smooth muscle wall initially increases tension. Stress relaxation allows pressure to stabilize at lower level despite continued filling, enabling volume accommodation (up to 500+ mL) without excessive pressure or urgency.'
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Active Relaxation',
              description: 'Ca²⁺-dependent, active process, returns to baseline after contraction'
            },
            {
              label: 'Stress Relaxation',
              description: 'Ca²⁺-independent, passive adaptation, accommodates sustained stretch'
            }
          ]
        }
      ]
    }
  }
};

export default topic24QuickReview;
