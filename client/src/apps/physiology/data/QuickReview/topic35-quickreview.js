/**
 * Quick Review content for Topic 35 - Cardiac muscle: structural and functional characterization, regulation of contractile force
 * Auto-generated - ALL 5 Learning Objectives
 */
const topic35QuickReview = {
  topicId: 'topic-35',
  topicNumber: 35,
  learningObjectives: {
    'lo-1': {
      title: 'Compare the cardiac and the skeletal muscle with respect to: fiber size, electrical connections between cells, and arrangement of myofilaments. Based on ion permeability and electrical resistance describe the role of gap junctions in creating a functional syncytium.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Cardiac vs Skeletal Muscle: Structural Differences',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Cardiac Muscle',
            items: [
              '10-20 μm diameter',
              '100-150 μm long',
              'Branched fibers',
              'One central nucleus',
              'Connected by intercalated discs',
              'Gap junctions between cells'
            ]
          },
          right: {
            title: 'Skeletal Muscle',
            items: [
              '40-100 μm diameter',
              'Up to 20 cm long',
              'Unbranched fibers',
              'Multiple peripheral nuclei',
              'No direct connections',
              'Electrically isolated cells'
            ]
          }
        },
        {
          type: 'paragraph',
          text: 'Both muscle types have striated appearance due to parallel sarcomeres containing actin and myosin. Cardiac sarcomeres are approximately 2 μm long.',
          critical: false
        },
        {
          type: 'header',
          text: 'Gap Junctions Create Functional Syncytium',
          critical: true
        },
        {
          type: 'list',
          intro: 'Gap junction structure and properties:',
          items: [
            'Connexons: channels made of 6 connexin protein subunits',
            '2 nm space allows passage of ions (Na⁺, Ca²⁺, K⁺)',
            'High ion permeability enables rapid ion movement',
            'Low electrical resistance for fast current flow'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Low resistance gap junctions enable all connected cardiac cells to depolarize almost simultaneously, making entire atrial and ventricular masses contract as unified functional syncytia despite being composed of individual cells.',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Longitudinal conduction through end-to-end gap junctions is very fast, but there are no transversal gap junctions, which creates directional specificity in electrical conduction.'
        }
      ]
    },
    'lo-2': {
      title: 'Contrast the duration of the action potential and the refractory period in a cardiac muscle and skeletal muscle. Sketch the temporal relationship between an action potential and the resulting contraction (twitch) in a cardiac muscle cell and in a skeletal muscle fiber. Based on this graph, explain why cardiac muscle cannot remain in a state of sustained (tetanic) contraction.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Action Potential and Refractory Period Duration',
          critical: true
        },
        {
          type: 'table',
          headers: ['Feature', 'Cardiac Muscle', 'Skeletal Muscle'],
          rows: [
            ['AP Duration', '200-300 ms', '1-2 ms'],
            ['Refractory Period', '200-300 ms', '1-2 ms'],
            ['Plateau Phase', 'Yes (L-type Ca²⁺)', 'No'],
            ['Can Tetanize', 'No', 'Yes']
          ]
        },
        {
          type: 'header',
          text: 'Temporal Relationship: AP vs Contraction',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Cardiac Muscle',
            items: [
              'AP overlaps almost completely with contraction',
              'Refractory period extends through entire contraction',
              'Cell cannot be re-stimulated until relaxation completes',
              'Prevents tetanus'
            ]
          },
          right: {
            title: 'Skeletal Muscle',
            items: [
              'Brief AP precedes longer contraction',
              'Refractory period ends before contraction completes',
              'Can be re-stimulated before relaxation',
              'Allows summation and tetanus'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Cardiac muscle cannot sustain tetanic contraction because the prolonged refractory period overlapping with contraction prevents another action potential until the current contraction-relaxation cycle completes.',
          critical: true
        },
        {
          type: 'clinical',
          text: 'This mechanism is critical for heart function: the heart must contract then relax to fill with blood before the next contraction. If cardiac muscle could tetanize, the heart would remain contracted, preventing blood flow and causing life-threatening consequences.'
        }
      ]
    },
    'lo-3': {
      title: 'State the steps in excitation-contraction coupling in cardiac muscle. Outline the sequence of events that occurs between the initiation of an action potential in a cardiac muscle cell, the resulting contraction and then relaxation of that cell. Provide specific details about the source of intracellular Ca2+ increase and the special role of Ca2+ in the modulation of contraction force and relaxation of cardiac muscle.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Excitation-Contraction Coupling in Cardiac Muscle',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Complete E-C coupling sequence:',
          items: [
            'Action potential spreads across sarcolemma',
            'L-type Ca²⁺ channels open → extracellular Ca²⁺ enters',
            'Ca²⁺ influx triggers ryanodine receptors (RyR) on SR',
            'CICR: Large Ca²⁺ release from SR into cytoplasm',
            'Ca²⁺ binds troponin C on actin filaments',
            'Tropomyosin shifts away from myosin-binding sites',
            'Cross-bridge cycling: myosin binds actin, power stroke',
            'SERCA pumps Ca²⁺ back into SR; NCX extrudes Ca²⁺',
            'Decreased Ca²⁺ → tropomyosin re-blocks sites',
            'Muscle relaxes, ready for next cycle'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Dual Sources of Intracellular Ca²⁺',
          critical: true
        },
        {
          type: 'list',
          intro: 'Calcium sources during contraction:',
          items: [
            'Extracellular: Small trigger amount via L-type channels',
            'Intracellular: Large amplification from SR via CICR',
            'Combined effect significantly increases cytoplasmic [Ca²⁺]'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Extracellular Ca²⁺ entering through L-type channels acts as the trigger that stimulates massive SR calcium release via calcium-induced calcium release (CICR).',
          critical: true
        },
        {
          type: 'header',
          text: 'Special Role of Ca²⁺ in Force Modulation',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Contraction force is directly proportional to intracellular Ca²⁺ concentration. Higher Ca²⁺ means more troponin C binding, exposing more myosin-binding sites, forming more cross-bridges, and generating greater force.',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Sympathetic stimulation enhances Ca²⁺ influx through L-type channels and increases SR release, producing positive inotropy (stronger contraction).',
          critical: true
        },
        {
          type: 'header',
          text: 'Special Role of Ca²⁺ in Relaxation',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'SERCA pump activity is regulated by phospholamban (normally inhibits SERCA). During sympathetic stimulation, phospholamban gets phosphorylated, which removes its inhibition and enhances SERCA activity.',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Phospholamban phosphorylation accelerates Ca²⁺ reuptake into SR, enabling faster relaxation (positive lusitropy) essential for maintaining high heart rates.',
          critical: true
        }
      ]
    },
    'lo-4': {
      title: 'How do the following factors increase the power of contraction (positive inotropy) in the cardiac muscle: increasing the length of muscle fibres (heterometric control), partial inhibition of the Na+-K+-ATPase and increasing the extracellular Ca2+?',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Three Mechanisms of Positive Inotropy',
          critical: true
        },
        {
          type: 'header',
          text: '1. Increasing Muscle Fiber Length (Heterometric Control)',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Frank-Starling Mechanism: Increased end-diastolic volume stretches cardiac fibers, bringing sarcomeres to optimal length (~2.2 μm) where actin-myosin overlap is ideal for maximum cross-bridge formation.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Why stretching increases force:',
          items: [
            'Optimal sarcomere length maximizes cross-bridge number',
            'Increased troponin C sensitivity to Ca²⁺',
            'Stronger contraction at same Ca²⁺ concentration',
            'Improved SR function for Ca²⁺ handling'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Frank-Starling Law: The force of contraction is directly proportional to initial fiber length at end-diastole. The heart matches its output to venous return.',
          critical: true
        },
        {
          type: 'header',
          text: '2. Partial Na⁺-K⁺-ATPase Inhibition',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Mechanism of cardiac glycosides (e.g., digoxin):',
          items: [
            'Na⁺-K⁺-ATPase partially inhibited',
            'Intracellular Na⁺ accumulates',
            'Na⁺/Ca²⁺ exchanger (NCX) activity reduced',
            'Less Ca²⁺ extruded from cell',
            'More Ca²⁺ stored in SR',
            'Subsequent contractions release more Ca²⁺',
            'Greater force of contraction'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Cardiac glycosides are used therapeutically in congestive heart failure to increase contractility by this mechanism.'
        },
        {
          type: 'header',
          text: '3. Increasing Extracellular Ca²⁺',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Higher extracellular Ca²⁺ increases influx through L-type channels during the action potential plateau. Greater Ca²⁺ entry triggers more calcium-induced calcium release from SR.',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'More total intracellular Ca²⁺ means more troponin C binding, more cross-bridges, and greater contractile force. This is homeometric (Ca²⁺-dependent) inotropy.',
          critical: false
        }
      ]
    },
    'lo-5': {
      title: 'Explain the positive lusitropic effect induced by stimulation of the adrenergic receptors?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Positive Lusitropy: Faster Relaxation',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Positive lusitropic effect is increased cardiac muscle relaxation rate, essential for proper diastolic filling and maintaining cardiac output, especially at high heart rates.',
          critical: false
        },
        {
          type: 'steps',
          intro: 'β1-Adrenergic stimulation pathway:',
          items: [
            'Catecholamines (epinephrine/norepinephrine) bind β1 receptors',
            'Adenylyl cyclase activated → ATP to cAMP',
            'cAMP activates protein kinase A (PKA)',
            'PKA phosphorylates phospholamban',
            'Phospholamban inhibition of SERCA reduced',
            'SERCA pumps Ca²⁺ into SR more efficiently',
            'Faster Ca²⁺ reuptake from cytoplasm',
            'Rapid decrease in cytoplasmic [Ca²⁺]',
            'Accelerated muscle relaxation'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Phospholamban normally inhibits SERCA. Phosphorylation by PKA removes this inhibition, allowing SERCA to work faster and pump Ca²⁺ into SR more rapidly.',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Rapid Ca²⁺ reuptake shortens diastole duration, optimizing the time available for the heart to fill with blood between contractions. This enables the heart to maintain higher heart rates and increased cardiac output during stress or exercise.',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Positive lusitropy is crucial during exercise when both heart rate and contractility increase. Faster relaxation ensures adequate filling time despite shortened cardiac cycle duration.'
        }
      ]
    }
  }
};

export default topic35QuickReview;
