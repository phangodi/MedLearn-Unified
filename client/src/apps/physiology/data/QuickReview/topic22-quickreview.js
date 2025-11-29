const topic22QuickReview = {
  topicId: 'topic-22',
  topicNumber: 22,
  learningObjectives: {
    'lo-1': {
      title: 'Describe and name the parts of the skeletal muscle at different anatomical levels (bundle of fibers, fibers, myofibrils, myofilaments, sarcomere).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Hierarchical Organization of Skeletal Muscle'
        },
        {
          type: 'list',
          intro: 'Six anatomical levels from organ to molecular unit:',
          items: [
            'Muscle (organ): Entire skeletal muscle surrounded by epimysium, composed of multiple fascicles',
            'Fascicle: Bundle of muscle fibers wrapped in perimysium connective tissue',
            'Muscle fiber: Single multinucleated cell (sarcolemma + endomysium) containing hundreds to thousands of myofibrils',
            'Myofibrils: Cylindrical contractile structures made of repeating sarcomeres',
            'Myofilaments: Thick filaments (myosin) and thin filaments (actin, tropomyosin, troponin) that interdigitate',
            'Sarcomere: Functional contractile unit between two Z-discs (~2 micrometers long)'
          ]
        },
        {
          type: 'table',
          headers: ['Structure', 'Components', 'Key Features'],
          rows: [
            ['Z-disc', 'Actin anchor', 'Defines sarcomere boundaries'],
            ['A-band', 'Myosin region', 'Dark band, constant length during contraction'],
            ['I-band', 'Actin-only region', 'Light band, narrows during contraction'],
            ['H-zone', 'Myosin-only center', 'Central zone, narrows during contraction'],
            ['M-line', 'Myosin anchoring proteins', 'Center of sarcomere'],
            ['Titin', 'Elastic protein', 'Stabilizes myosin, connects to Z-disc']
          ]
        },
        {
          type: 'keypoint',
          content: 'The striated appearance of skeletal muscle comes from the alternating A-bands (dark, myosin-containing) and I-bands (light, actin-only) within myofibrils.'
        }
      ]
    },
    'lo-2': {
      title: 'Characterize the thick and thin filaments and enlist their proteins. Draw a myosin molecule and show its subunits (heavy and light chains), define their functions.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Thick Filaments: Myosin Structure'
        },
        {
          type: 'list',
          intro: 'Myosin is a large protein (~3 million Da) with six polypeptide chains:',
          items: [
            'One pair of heavy chains: Form alpha-helical tail that anchors to thick filament; N-termini create two globular heads',
            'Two pairs of light chains: Regulatory light chains (RLC) can phosphorylate to change activity; essential light chains (ELC) stabilize head and neck',
            'Myosin head functions: Contains actin-binding site for cross-bridge formation and myosin ATPase site that hydrolyzes ATP for energy'
          ]
        },
        {
          type: 'header',
          content: 'Thin Filaments: Three-Protein Complex'
        },
        {
          type: 'table',
          headers: ['Protein', 'Structure', 'Function'],
          rows: [
            ['F-actin', 'Polymerized G-actin in double helix', 'Provides myosin-binding sites'],
            ['Tropomyosin', 'Filamentous protein along actin grooves', 'Blocks myosin-binding sites at rest'],
            ['Troponin C', 'Globular protein (Ca2+-binding)', 'Binds Ca2+ to initiate contraction'],
            ['Troponin I', 'Globular protein (inhibitory)', 'Inhibits actin-myosin interaction at rest'],
            ['Troponin T', 'Globular protein (tropomyosin)', 'Attaches troponin complex to tropomyosin']
          ]
        },
        {
          type: 'keypoint',
          content: 'When Ca2+ binds to troponin C, conformational changes shift tropomyosin away from myosin-binding sites on actin, exposing them and enabling cross-bridge formation for contraction.'
        }
      ]
    },
    'lo-3': {
      title: '>>Describe the steps of the electromechanic coupling in striated muscle.<< Define and explain the function of the following terms: sarcolemma (cell membrane of the muscle cell), T-tubules, sarcoplasmic reticulum (L-tubules), troponin-tropomyosin, and calcium ions.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: '>>Electromechanical Coupling Sequence<<'
        },
        {
          type: 'steps',
          intro: 'From neural signal to calcium release:',
          items: [
            'Motor neuron action potential triggers ACh release at neuromuscular junction',
            'ACh binds nicotinic receptors on sarcolemma, creating end plate potential',
            'Voltage-gated Na+ channels open, generating muscle action potential that propagates along sarcolemma',
            'Action potential spreads rapidly into T-tubules (sarcolemma invaginations) throughout the fiber',
            'T-tubule depolarization causes conformational change in dihydropyridine receptors (DHPR)',
            'DHPR mechanically coupled to ryanodine receptors (RyR) on sarcoplasmic reticulum membrane',
            'DHPR conformational change opens RyR channels, releasing Ca2+ from SR into sarcoplasm',
            'Ca2+ binds to troponin C, causing tropomyosin to move away from myosin-binding sites on actin',
            'Myosin-binding sites exposed, allowing cross-bridge formation and contraction to begin'
          ]
        },
        {
          type: 'table',
          headers: ['Structure', 'Function', 'Key Role'],
          rows: [
            ['Sarcolemma', 'Muscle cell membrane', 'Propagates action potentials, maintains ionic gradients'],
            ['T-tubules', 'Sarcolemma invaginations', 'Rapid signal transmission deep into fiber for synchronized Ca2+ release'],
            ['Sarcoplasmic reticulum', 'Specialized smooth ER', 'Stores Ca2+ (10-3 M bound to calsequestrin) and releases it on signal'],
            ['Troponin-tropomyosin', 'Regulatory proteins on thin filaments', 'Control actin-myosin interaction in Ca2+-dependent manner']
          ]
        },
        {
          type: 'keypoint',
          content: '>>Critical coupling: DHPR (voltage sensor in T-tubules) is mechanically linked to RyR (Ca2+ release channel on SR). T-tubule depolarization physically opens RyR without requiring second messengers, ensuring rapid synchronized Ca2+ release across the entire fiber.<<'
        },
        {
          type: 'comparison',
          intro: 'Calcium concentration changes during excitation-contraction coupling:',
          items: [
            'Sarcoplasmic reticulum (resting): ~10-3 M Ca2+ (stored bound to calsequestrin)',
            'Sarcoplasm (resting): <10-7 M Ca2+ (very low, insufficient for contraction)',
            'Sarcoplasm (during contraction): ~10-5 M Ca2+ (100-fold increase after SR release)'
          ]
        }
      ]
    },
    'lo-4': {
      title: '>>Describe the cycles of actin-myosin bridges and their binding, and explain how it results in muscle contraction (the sliding filament model). Describe the mechanism of relaxation.<<',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: '>>Cross-Bridge Cycle: Four-Step Process<<'
        },
        {
          type: 'steps',
          intro: 'Repeated cycle that generates force:',
          items: [
            'Attachment: Energized myosin head (bound to ADP + Pi) binds to exposed actin site after Ca2+ has moved tropomyosin away, forming cross-bridge',
            'Power stroke: Release of Pi triggers conformational change; myosin head pivots, pulling actin filament toward M-line (sarcomere center); then ADP released',
            'Detachment: New ATP binds to myosin head, reducing its affinity for actin and causing cross-bridge to release from actin',
            'Reactivation: Myosin ATPase hydrolyzes ATP → ADP + Pi, using energy to recock myosin head into high-energy conformation ready for next cycle'
          ]
        },
        {
          type: 'header',
          content: '>>Sliding Filament Model<<'
        },
        {
          type: 'paragraph',
          content: '>>Repeated cross-bridge cycles pull thin filaments (actin) over thick filaments (myosin) toward the sarcomere center (M-line). This brings Z-discs closer together, shortening the sarcomere and generating muscle contraction.<<'
        },
        {
          type: 'comparison',
          intro: 'Sarcomere band changes during contraction:',
          items: [
            'A-band (myosin region): Length remains CONSTANT (thick filaments do not change length)',
            'I-band (actin-only region): NARROWS as actin slides over myosin',
            'H-zone (myosin-only center): NARROWS as actin penetrates deeper into sarcomere',
            'Sarcomere length: SHORTENS as Z-discs move closer together'
          ]
        },
        {
          type: 'keypoint',
          content: '>>Filaments slide past each other without changing their own length. This is why the A-band stays constant while I-band and H-zone narrow during contraction.<<'
        },
        {
          type: 'header',
          content: '>>Relaxation Mechanism<<'
        },
        {
          type: 'steps',
          intro: 'Active process requiring ATP:',
          items: [
            'Neural signal ceases, sarcolemma and T-tubules repolarize',
            'Dihydropyridine receptors (DHPR) and ryanodine receptors (RyR) close, stopping Ca2+ release from SR',
            'SERCA pumps (SR Ca2+-ATPase) actively transport Ca2+ back into SR using ATP hydrolysis',
            'Cytosolic Ca2+ concentration drops from ~10-5 M to <10-7 M',
            'Ca2+ dissociates from troponin C',
            'Troponin-tropomyosin complex returns to resting position, covering myosin-binding sites on actin',
            'Cross-bridge formation prevented; muscle relaxes'
          ]
        },
        {
          type: 'keypoint',
          content: '>>Relaxation is an active, ATP-dependent process. SERCA pumps consume ATP to pump Ca2+ against its concentration gradient back into the SR.<<'
        }
      ]
    },
    'lo-5': {
      title: 'Summarize the role of ATP in muscle contraction and relaxation. What is the mechanism of rigor mortis („stiffness of death")?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Four Critical Roles of ATP in Muscle Function'
        },
        {
          type: 'list',
          intro: 'ATP is essential for both contraction and relaxation:',
          items: [
            'Cross-bridge detachment: ATP binding to myosin head after power stroke reduces actin affinity, allowing myosin-actin dissociation (without ATP, myosin stays locked to actin)',
            'Myosin reactivation: ATP hydrolysis (ATP → ADP + Pi) by myosin ATPase provides energy to recock myosin head into high-energy conformation for next cycle',
            'Calcium reuptake (relaxation): SERCA pumps use ATP to actively transport Ca2+ from sarcoplasm back into SR against concentration gradient',
            'Membrane potential maintenance: Na-K-ATPase pumps use ATP to maintain ionic gradients necessary for action potential generation'
          ]
        },
        {
          type: 'keypoint',
          content: 'ATP is required for BOTH contraction (reactivation) and relaxation (detachment + Ca2+ reuptake). Muscle function is completely ATP-dependent.'
        },
        {
          type: 'header',
          content: 'Rigor Mortis: Postmortem Muscle Stiffening'
        },
        {
          type: 'steps',
          intro: 'Mechanism of rigor mortis after death:',
          items: [
            'Death occurs → ATP production ceases (no oxygen, no metabolism)',
            'Myosin heads complete power strokes but CANNOT detach from actin (no ATP available for detachment)',
            'Sarcoplasmic reticulum degrades and releases Ca2+ into cytosol',
            'Ca2+ binds to troponin C, exposing myosin-binding sites on actin',
            'New cross-bridges can form but cannot cycle (no ATP for detachment or reactivation)',
            'Permanent cross-bridges accumulate between actin and myosin',
            'Muscles remain locked in contracted state → postmortem stiffening ("rigor mortis")'
          ]
        },
        {
          type: 'clinical',
          content: 'Rigor mortis typically begins 2-6 hours after death, peaks at 12 hours, and gradually resolves after 24-48 hours as muscle proteins degrade. It is used in forensic pathology to estimate time of death.'
        },
        {
          type: 'keypoint',
          content: 'Rigor mortis demonstrates that ATP is absolutely required for cross-bridge detachment. Without ATP, muscles cannot relax and remain in a sustained contracted state.'
        }
      ]
    }
  }
};

export default topic22QuickReview;
