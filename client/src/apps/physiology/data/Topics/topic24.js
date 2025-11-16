const topic24 =   {
    id: 'topic-24',
    number: 24,
    mcqs: ['mcq-1'],
    title: 'Smooth muscle physiology',
    subtitle: 'Characteristics, regulation, and mechanisms of smooth muscle contraction and relaxation in single-unit and multi-unit types',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: true,
        title: '>>Define the terms and compare single-unit and multi-unit smooth muscles.<<',
        keyPoints: [
          'Single-unit (unitary/visceral) smooth muscle: Cells electrically coupled via gap junctions forming functional syncytium; found in GI tract, bladder, uterus, ureter',
          'Single-unit characteristics: Spontaneous pacemaker activity, rhythmic contractions (peristalsis), action potentials spread through gap junctions causing coordinated contraction',
          'Multi-unit smooth muscle: Cells function independently without electrical coupling; found in iris, ciliary muscle, vas deferens, piloerector muscles',
          'Multi-unit characteristics: No spontaneous activity; requires individual autonomic innervation for each motor unit; contraction does not spread between cells',
          'Functional difference: Single-unit shows myogenic tone and slow waves; multi-unit requires external neural stimulation for activation',
          'Both types innervated by autonomic nervous system with modulation by neurotransmitters, hormones, and mechanical stretch'
        ],
        officialDefinitions: [
          'SINGLE-UNIT (VISCERAL) SMOOTH MUSCLE: gap junctions – functional syntitium, "pacemaker cells", Myogenic tone - stretch may increase the activity - transmitters of the autonomic nervous system modulate the activity',
          'MULTI-UNIT SMOOTH MUSCLE: Spontaneously not active smooth muscle. Autonomic nervous system innervates the muscle (BOTH stimulatory and inhibitory transmitters). Mechanical stretch induces muscle relaxation (storage in the urinary bladder, gallbladder). "stress relaxation"',
          'Single-Unit (Unitary) Smooth Muscle: are composed of muscle fibers that work as a single entity due to their electrical coupling through gap junctions. Found in organs such as the gastrointestinal tract, bladder, uterus, and ureter.',
          'Multi-Unit Smooth Muscle: consist of cells that function independently and are not electrically coupled. Each muscle fiber behaves as a separate motor unit. Found in structures like the iris, ciliary muscles of the lens, and vas deferens.',
          'SINGLE-UNIT (VISCERAL) SMOOTH MUSCLE: blood vessels, airways, gut, uterus',
          'MULTI-UNIT SMOOTH MUSCLE: ciliary muscle, piloerector muscle'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: '>>Single-unit smooth muscle:<<',
              critical: true,
              items: [
                'Structure: Consists of cells electrically coupled through gap junctions forming a functional syncytium',
                'Location: Found in organs like the gastrointestinal tract, bladder, uterus, and ureter',
                'Function: Display spontaneous pacemaker activity producing rhythmic contractions such as peristalsis, with action potentials spreading rapidly through gap junctions causing coordinated simultaneous contraction'
              ]
            },
            {
              type: 'list',
              intro: '>>Multi-unit smooth muscle:<<',
              critical: true,
              items: [
                'Structure: Consists of independently functioning cells without electrical coupling',
                'Location: Found in structures like the iris, ciliary muscles, and vas deferens',
                'Function: Not spontaneously active and requires autonomic nervous system innervation for each individual cell or motor unit, with contraction not spreading from cell to cell'
              ]
            }
          ],
          raw: '>>Single-unit smooth muscle consists of cells electrically coupled through gap junctions forming a functional syncytium, found in organs like the gastrointestinal tract, bladder, uterus, and ureter. These muscles display spontaneous pacemaker activity producing rhythmic contractions such as peristalsis, with action potentials spreading rapidly through gap junctions causing coordinated simultaneous contraction. Multi-unit smooth muscle consists of independently functioning cells without electrical coupling, found in structures like the iris, ciliary muscles, and vas deferens. Multi-unit smooth muscle is not spontaneously active and requires autonomic nervous system innervation for each individual cell or motor unit, with contraction not spreading from cell to cell.<<'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Describe the intracellular pathways that control contraction and relaxation in smooth muscle.',
        keyPoints: [
          'Contraction initiation: Depolarization opens voltage-gated Ca2+ channels; hormones/neurotransmitters activate G-protein coupled receptors; mechanical stretch triggers stretch-sensitive channels',
          'Ca2+ entry: From extracellular fluid via voltage-gated and ligand-gated Ca2+ channels; from sarcoplasmic reticulum via IP3-gated channels when phospholipase C produces IP3',
          'Ca2+-calmodulin complex formation: Increased intracellular Ca2+ binds calmodulin, activating myosin light chain kinase (MLCK)',
          'MLCK phosphorylates myosin light chains: Increases myosin ATPase activity enabling actin-myosin cross-bridge cycling and tension development',
          'Relaxation pathway: Ca2+ decreased by SERCA pumps into SR and plasma membrane Ca2+-ATPase/Na+-Ca2+ exchanger removing Ca2+ from cytoplasm',
          'Myosin light chain phosphatase (MLCP) activation: Dephosphorylates myosin light chains, inhibiting cross-bridge cycling and causing muscle relaxation'
        ],
        officialDefinitions: [
          'Formation of Ca²⁺-Calmodulin Complex: Ca²⁺ binds to a regulatory protein called calmodulin in the cytosol, forming a Ca²⁺-calmodulin complex.',
          'Activation of Myosin Light Chain Kinase (MLCK): The Ca²⁺-calmodulin complex activates myosin light chain kinase (MLCK). MLCK phosphorylates the regulatory light chains on the myosin heads, increasing the ATPase activity of myosin.',
          'Phosphorylation of Myosin and Cross-Bridge Cycling: When myosin light chains are phosphorylated, the conformation of myosin changes, allowing it to bind to actin filaments.',
          'IP₃-gated Ca²⁺ release channels: Hormones and neurotransmitters can activate phospholipase C (PLC), which catalyzes the formation of inositol 1,4,5-trisphosphate (IP₃). IP₃ then binds to receptors on the sarcoplasmic reticulum (SR), releasing stored Ca²⁺ into the cytoplasm.',
          'Reduction in Intracellular Ca²⁺ Concentration: Relaxation begins when the stimulus for contraction ceases, leading to a decrease in intracellular Ca²⁺ concentration. Ca²⁺ is removed from the cytoplasm by: Pumping Ca²⁺ back into the SR: This is achieved by the SR Ca²⁺ ATPase (SERCA). Efflux of Ca²⁺ out of the cell: Ca²⁺ is pumped out of the cell through plasma membrane Ca²⁺ ATPase or exchanged with Na⁺ ions via the Na⁺/Ca²⁺ exchanger.',
          'Activation of Myosin Light Chain Phosphatase (MLCP): Myosin light chain phosphatase (MLCP) is activated when Ca²⁺ levels are low. MLCP dephosphorylates the myosin light chains, effectively stopping the cross-bridge cycling between myosin and actin.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'steps',
              intro: 'Smooth muscle contraction pathway:',
              items: [
                'Initiation: Depolarization opening voltage-gated calcium channels, hormonal or neurotransmitter activation of G-protein coupled receptors, or mechanical stretch',
                'Calcium entry: Calcium enters from extracellular fluid and is released from sarcoplasmic reticulum via IP3-gated channels when phospholipase C produces inositol trisphosphate',
                'Ca2+-calmodulin complex: Increased intracellular calcium binds to calmodulin forming a calcium-calmodulin complex that activates myosin light chain kinase',
                'Phosphorylation: MLCK phosphorylates myosin light chains increasing myosin ATPase activity, enabling actin-myosin cross-bridge cycling and contraction'
              ]
            },
            {
              type: 'steps',
              intro: 'Smooth muscle relaxation pathway:',
              items: [
                'Calcium removal: Calcium is removed from cytoplasm by SERCA pumps into the sarcoplasmic reticulum and by plasma membrane calcium ATPase',
                'Dephosphorylation: Myosin light chain phosphatase is activated, dephosphorylating myosin light chains and stopping cross-bridge cycling, causing muscle relaxation'
              ]
            }
          ],
          raw: 'Smooth muscle contraction is initiated by depolarization opening voltage-gated calcium channels, hormonal or neurotransmitter activation of G-protein coupled receptors, or mechanical stretch. Calcium enters from extracellular fluid and is released from sarcoplasmic reticulum via IP3-gated channels when phospholipase C produces inositol trisphosphate. Increased intracellular calcium binds to calmodulin forming a calcium-calmodulin complex that activates myosin light chain kinase. MLCK phosphorylates myosin light chains increasing myosin ATPase activity, enabling actin-myosin cross-bridge cycling and contraction. Relaxation occurs when calcium is removed from cytoplasm by SERCA pumps into the sarcoplasmic reticulum and by plasma membrane calcium ATPase. Myosin light chain phosphatase is activated, dephosphorylating myosin light chains and stopping cross-bridge cycling, causing muscle relaxation.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Distinguish between electromechanical coupling and pharmacomechanical coupling.',
        keyPoints: [
          'Electromechanical coupling: Membrane depolarization (action potential) opens voltage-gated Ca2+ channels; Ca2+ influx from extracellular fluid triggers contraction',
          'Electromechanical mechanism: Depolarization activates voltage-gated Ca2+ channels on sarcolemma; Ca2+ enters cell directly causing Ca2+-induced Ca2+ release from SR via ryanodine receptors',
          'Pharmacomechanical coupling: Ligand binding to receptors (hormones, neurotransmitters) activates intracellular signaling without membrane potential change',
          'Pharmacomechanical mechanism: Ligand binds G-protein coupled receptor (e.g., α1-adrenergic); activates phospholipase C producing IP3; IP3 opens Ca2+ channels on SR releasing stored Ca2+',
          'Key distinction: Electromechanical depends on membrane potential changes; pharmacomechanical is independent of membrane potential and relies on chemical signals',
          'Example: Catecholamines at α1-receptors cause pharmacomechanical coupling via IP3 pathway; β2-receptors cause relaxation by decreasing Ca2+ or activating MLCP'
        ],
        officialDefinitions: [
          'Electromechanical coupling: Action potential, Voltage-gated Ca2+-channel',
          'Pharmacomechanical coupling: Ligand-gated Ca2+-channel, catecholamines α1-receptor',
          'Ca2+-induced Ca2+ release + Mechanomechanical coupling: stretch-sensitive Ca2+ channels on the sarcolemma RyR: Ryanodine Receptor'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Electromechanical coupling:',
              items: [
                'Mechanism: Membrane depolarization via action potentials opens voltage-gated calcium channels in the sarcolemma, allowing calcium influx from extracellular fluid that triggers calcium-induced calcium release from sarcoplasmic reticulum through ryanodine receptors',
                'Dependency: This mechanism depends on changes in membrane potential'
              ]
            },
            {
              type: 'list',
              intro: 'Pharmacomechanical coupling:',
              items: [
                'Mechanism: Hormones or neurotransmitters bind to G-protein coupled receptors on the cell membrane, activating phospholipase C which produces inositol trisphosphate. IP3 then binds to receptors on the sarcoplasmic reticulum releasing stored calcium into the cytoplasm',
                'Dependency: This mechanism is independent of membrane potential changes and relies on chemical signals',
                'Example: Norepinephrine binding to alpha-one adrenergic receptors causes pharmacomechanical coupling through the IP3 pathway'
              ]
            }
          ],
          raw: 'Electromechanical coupling occurs when membrane depolarization via action potentials opens voltage-gated calcium channels in the sarcolemma, allowing calcium influx from extracellular fluid that triggers calcium-induced calcium release from sarcoplasmic reticulum through ryanodine receptors. This mechanism depends on changes in membrane potential. Pharmacomechanical coupling occurs when hormones or neurotransmitters bind to G-protein coupled receptors on the cell membrane, activating phospholipase C which produces inositol trisphosphate. IP3 then binds to receptors on the sarcoplasmic reticulum releasing stored calcium into the cytoplasm. This mechanism is independent of membrane potential changes and relies on chemical signals. For example, norepinephrine binding to alpha-one adrenergic receptors causes pharmacomechanical coupling through the IP3 pathway.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Describe the differences in actomyosin regulation of, respectively, smooth and skeletal muscle and indicate the structural similarities in their respective contractile units.',
        keyPoints: [
          'Skeletal muscle regulation: Ca2+ binds troponin C on thin filaments; troponin-tropomyosin complex shifts exposing myosin-binding sites on actin; no troponin in smooth muscle',
          'Smooth muscle regulation: Ca2+ binds calmodulin; Ca2+-calmodulin activates MLCK which phosphorylates myosin light chains enabling actin binding; regulated on thick filaments',
          'Skeletal muscle Ca2+ source: Primarily from sarcoplasmic reticulum internal storage via voltage-sensitive DHP and RyR receptors',
          'Smooth muscle Ca2+ source: From both extracellular fluid via membrane channels and from sarcoplasmic reticulum via IP3 and RyR receptors',
          'Structural similarity: Both use actin-myosin sliding filament mechanism requiring ATP for cross-bridge cycling and force generation',
          'Skeletal structure: Organized sarcomeres with striated pattern, Z-lines, A-bands, I-bands; Smooth structure: No sarcomeres, actin-myosin in crisscross pattern anchored to dense bodies containing α-actinin'
        ],
        officialDefinitions: [
          'Skeletal Muscle: When calcium (Ca²⁺) is released from the sarcoplasmic reticulum (SR), it binds to a protein called troponin C on the thin filaments (actin). This binding causes a shift in the troponin-tropomyosin complex, which exposes the myosin-binding sites on actin, allowing myosin to bind to actin and initiate contraction.',
          'Smooth Muscle: When calcium enters the cell from the extracellular fluid or is released from the SR, it binds to a protein called calmodulin. The calcium-calmodulin complex activates an enzyme called myosin light chain kinase (MLCK), which then phosphorylates the myosin light chain, enabling myosin to bind to actin and initiate contraction.',
          'Skeletal Muscle: Most of the calcium used for contraction comes from the sarcoplasmic reticulum (internal storage).',
          'Smooth Muscle: Calcium can enter the cell from both the sarcoplasmic reticulum and the extracellular fluid through channels in the cell membrane.',
          'Skeletal Muscle: The muscle fibers are organized into sarcomeres with a regular, striated appearance. Sarcomeres have clearly defined zones, such as the A-band, I-band, and Z-line.',
          'Smooth Muscle: There are no sarcomeres. Instead, actin and myosin filaments are arranged in a crisscross pattern, anchored to dense bodies and dense plaques, giving smooth muscle a smooth, non-striated appearance.',
          'It does not contain troponin!',
          'Calmodulin is a Ca2+-bindig cytoplasmic protein',
          'Actin + Tropomiozin, Caldesmon, Calponin NO Troponin',
          'Dense bodies: Made up of alpha actinin, Scattered throughout the smooth muscle cell, Anchored to the plasma membrane by attachment plaques'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Skeletal muscle regulation:',
              items: [
                'Calcium mechanism: Calcium released from sarcoplasmic reticulum binds to troponin C on thin filaments, causing the troponin-tropomyosin complex to shift and expose myosin-binding sites on actin, initiating contraction',
                'Relaxation: Occurs when calcium is pumped back into the SR, calcium dissociates from troponin, and tropomyosin blocks myosin-binding sites'
              ]
            },
            {
              type: 'list',
              intro: 'Smooth muscle regulation:',
              items: [
                'Calcium mechanism: Calcium binds to calmodulin instead of troponin, and the calcium-calmodulin complex activates myosin light chain kinase which phosphorylates myosin light chains, enabling myosin to bind actin. Smooth muscle lacks troponin',
                'Relaxation: Occurs through myosin light chain phosphatase dephosphorylating myosin'
              ]
            },
            {
              type: 'list',
              intro: 'Structural differences:',
              items: [
                'Skeletal muscle: Has organized sarcomeres with striated appearance',
                'Smooth muscle: Lacks sarcomeres with actin-myosin arranged in crisscross patterns anchored to dense bodies'
              ]
            },
            { type: 'paragraph', content: 'Both share the fundamental similarity of actin-myosin interaction requiring ATP for cross-bridge cycling.' }
          ],
          raw: 'In skeletal muscle, calcium released from sarcoplasmic reticulum binds to troponin C on thin filaments, causing the troponin-tropomyosin complex to shift and expose myosin-binding sites on actin, initiating contraction. Relaxation occurs when calcium is pumped back into the SR, calcium dissociates from troponin, and tropomyosin blocks myosin-binding sites. In smooth muscle, calcium binds to calmodulin instead of troponin, and the calcium-calmodulin complex activates myosin light chain kinase which phosphorylates myosin light chains, enabling myosin to bind actin. Smooth muscle lacks troponin. Relaxation occurs through myosin light chain phosphatase dephosphorylating myosin. Structurally, skeletal muscle has organized sarcomeres with striated appearance, while smooth muscle lacks sarcomeres with actin-myosin arranged in crisscross patterns anchored to dense bodies. Both share the fundamental similarity of actin-myosin interaction requiring ATP for cross-bridge cycling.'
        }
      },
      {
        id: 'lo-5',
        isCritical: true,
        title: '>>Explain the sources, movements and roles of Ca2+ in smooth muscle during contraction and relaxation.<<',
        keyPoints: [
          'Ca2+ sources for contraction: (1) Extracellular fluid via voltage-gated and ligand-gated Ca2+ channels; (2) Sarcoplasmic reticulum via IP3-gated and ryanodine receptors',
          'Ca2+ entry mechanisms: Voltage-gated channels open with depolarization; ligand-gated channels activated by neurotransmitters/hormones; IP3 from phospholipase C opens SR channels',
          'Ca2+-induced Ca2+ release (CICR): Ca2+ entering through voltage-gated channels triggers additional Ca2+ release from SR via ryanodine receptors, amplifying signal',
          'Contraction role: Ca2+ binds calmodulin forming Ca2+-calmodulin complex that activates MLCK; MLCK phosphorylates myosin light chains enabling cross-bridge formation',
          'Ca2+ removal for relaxation: SERCA pumps actively transport Ca2+ back into SR using ATP; plasma membrane Ca2+-ATPase and Na+-Ca2+ exchanger extrude Ca2+ from cell',
          'Relaxation role: Decreased cytoplasmic Ca2+ causes dissociation from calmodulin, inactivating MLCK; MLCP dephosphorylates myosin light chains stopping contraction'
        ],
        officialDefinitions: [
          'Ca²⁺ Entry into the Cell: Depolarization or receptor activation results in the opening of voltage-gated Ca²⁺ channels in the cell membrane, allowing Ca²⁺ to enter the cell from the extracellular fluid (ECF). Ligand-gated Ca²⁺ channels: Certain neurotransmitters and hormones bind to receptors on the cell membrane, leading to the opening of these channels and subsequent Ca²⁺ influx.',
          'IP₃-gated Ca²⁺ release channels: Hormones and neurotransmitters can activate phospholipase C (PLC), which catalyzes the formation of inositol 1,4,5-trisphosphate (IP₃). IP₃ then binds to receptors on the sarcoplasmic reticulum (SR), releasing stored Ca²⁺ into the cytoplasm.',
          'Ca²⁺-induced Ca²⁺ release: Ca²⁺ entering through voltage-gated channels can trigger additional release of Ca²⁺ from the SR.',
          'Formation of Ca²⁺-Calmodulin Complex: Ca²⁺ binds to a regulatory protein called calmodulin in the cytosol, forming a Ca²⁺-calmodulin complex.',
          'Activation of Myosin Light Chain Kinase (MLCK): The Ca²⁺-calmodulin complex activates myosin light chain kinase (MLCK). MLCK phosphorylates the regulatory light chains on the myosin heads, increasing the ATPase activity of myosin.',
          'Ca²⁺ is removed from the cytoplasm by: Pumping Ca²⁺ back into the SR: This is achieved by the SR Ca²⁺ ATPase (SERCA). Efflux of Ca²⁺ out of the cell: Ca²⁺ is pumped out of the cell through plasma membrane Ca²⁺ ATPase or exchanged with Na⁺ ions via the Na⁺/Ca²⁺ exchanger.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Calcium in smooth muscle comes from two sources: extracellular fluid through voltage-gated and ligand-gated calcium channels in the plasma membrane, and from sarcoplasmic reticulum through IP3-gated channels and ryanodine receptors.<<', critical: true },
            {
              type: 'steps',
              intro: '>>During contraction:<<',
              items: [
                'Membrane depolarization or receptor activation causes calcium influx from extracellular fluid',
                'Hormones and neurotransmitters activate phospholipase C producing IP3 which releases calcium from sarcoplasmic reticulum stores',
                'Calcium-induced calcium release amplifies the signal when entering calcium triggers ryanodine receptors to release more calcium from SR',
                'Calcium binds to calmodulin forming a calcium-calmodulin complex that activates myosin light chain kinase, which phosphorylates myosin light chains enabling cross-bridge cycling'
              ]
            },
            {
              type: 'steps',
              intro: '>>During relaxation:<<',
              items: [
                'Calcium is removed from cytoplasm by SERCA pumps that actively transport calcium back into the sarcoplasmic reticulum, and by plasma membrane calcium ATPase and sodium-calcium exchangers that extrude calcium from the cell',
                'As calcium decreases, it dissociates from calmodulin, inactivating MLCK, and myosin light chain phosphatase dephosphorylates myosin stopping contraction'
              ]
            }
          ],
          raw: '>>Calcium in smooth muscle comes from two sources: extracellular fluid through voltage-gated and ligand-gated calcium channels in the plasma membrane, and from sarcoplasmic reticulum through IP3-gated channels and ryanodine receptors. During contraction, membrane depolarization or receptor activation causes calcium influx from extracellular fluid. Hormones and neurotransmitters activate phospholipase C producing IP3 which releases calcium from sarcoplasmic reticulum stores. Calcium-induced calcium release amplifies the signal when entering calcium triggers ryanodine receptors to release more calcium from SR. Calcium binds to calmodulin forming a calcium-calmodulin complex that activates myosin light chain kinase, which phosphorylates myosin light chains enabling cross-bridge cycling. During relaxation, calcium is removed from cytoplasm by SERCA pumps that actively transport calcium back into the sarcoplasmic reticulum, and by plasma membrane calcium ATPase and sodium-calcium exchangers that extrude calcium from the cell. As calcium decreases, it dissociates from calmodulin, inactivating MLCK, and myosin light chain phosphatase dephosphorylates myosin stopping contraction.<<'
        }
      },
      {
        id: 'lo-6',
        isCritical: false,
        title: 'Describe the mechanisms responsible for myofilament Ca2+ sensitization and desensitization.',
        keyPoints: [
          'Ca2+ sensitization: Increases contractile force at same Ca2+ concentration by maintaining myosin phosphorylation; mediated by RhoA/Rho-kinase and PKC pathways',
          'Sensitization mechanism: RhoA/Rho-kinase or protein kinase C inhibits myosin light chain phosphatase (MLCP), preventing myosin dephosphorylation; myosin stays phosphorylated and active',
          'Sensitization outcome: Enhanced and prolonged contraction without increasing intracellular Ca2+ levels; increased actin-myosin interaction at baseline Ca2+',
          'Ca2+ desensitization: Decreases contractile force at same Ca2+ concentration; mediated by cAMP/PKA and cGMP/PKG pathways',
          'Desensitization mechanism: Protein kinase A or protein kinase G enhances MLCP activity, increasing myosin light chain dephosphorylation; reduces actin-myosin interaction',
          'Clinical relevance: Catecholamines at β2-receptors activate cAMP pathway causing desensitization and smooth muscle relaxation (e.g., bronchodilation); nitric oxide activates cGMP pathway'
        ],
        officialDefinitions: [
          'Ca2+-sensitization: Phosphorylation of Myosin light chain ↑ tension ↑',
          'Ca2+-desensitization: Phosphorylation of Myosin light chain ↓ tension ↓',
          '↑ Myosin light chain kinase',
          '↓ Myosin light chain phosphatase',
          'Ca²⁺ Sensitization: Increases the contractile response of smooth muscle without the need to increase intracellular Ca²⁺ concentration. Mechanism: Activation of RhoA/Rho-Kinase pathway or Protein Kinase C (PKC) pathway. These pathways inhibit myosin light chain phosphatase (MLCP), preventing dephosphorylation of myosin light chains. This maintains myosin in its phosphorylated, active state, leading to increased actin-myosin interaction and enhanced contraction.',
          'Ca²⁺ Desensitization: Decreases the contractile response of smooth muscle despite unchanged intracellular Ca²⁺ concentration. Mechanism: Activation of pathways that enhance MLCP activity, such as the cAMP/Protein Kinase A (PKA) or cGMP/Protein Kinase G (PKG) pathways. This results in dephosphorylation of myosin light chains, reducing actin-myosin interaction.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Calcium sensitization:',
              items: [
                'Effect: Increases the contractile response of smooth muscle without increasing intracellular calcium concentration',
                'Mechanism: Occurs through activation of RhoA-Rho-kinase pathway or protein kinase C pathway, which inhibit myosin light chain phosphatase, preventing dephosphorylation of myosin light chains',
                'Result: Maintains myosin in its phosphorylated active state, leading to increased actin-myosin interaction and enhanced contraction even at baseline calcium levels'
              ]
            },
            {
              type: 'list',
              intro: 'Calcium desensitization:',
              items: [
                'Effect: Decreases the contractile response despite unchanged intracellular calcium concentration',
                'Mechanism: Occurs through activation of cAMP-protein kinase A or cGMP-protein kinase G pathways, which enhance myosin light chain phosphatase activity, resulting in dephosphorylation of myosin light chains and reduced actin-myosin interaction',
                'Example: Catecholamines binding to beta-two adrenergic receptors activate the cAMP pathway causing desensitization and smooth muscle relaxation, such as bronchodilation'
              ]
            }
          ],
          raw: 'Calcium sensitization increases the contractile response of smooth muscle without increasing intracellular calcium concentration. This occurs through activation of RhoA-Rho-kinase pathway or protein kinase C pathway, which inhibit myosin light chain phosphatase, preventing dephosphorylation of myosin light chains. This maintains myosin in its phosphorylated active state, leading to increased actin-myosin interaction and enhanced contraction even at baseline calcium levels. Calcium desensitization decreases the contractile response despite unchanged intracellular calcium concentration. This occurs through activation of cAMP-protein kinase A or cGMP-protein kinase G pathways, which enhance myosin light chain phosphatase activity, resulting in dephosphorylation of myosin light chains and reduced actin-myosin interaction. For example, catecholamines binding to beta-two adrenergic receptors activate the cAMP pathway causing desensitization and smooth muscle relaxation, such as bronchodilation.'
        }
      },
      {
        id: 'lo-7',
        isCritical: false,
        title: 'Explain why smooth muscles can develop and maintain force with a much lower rate of ATP hydrolysis than skeletal muscle.',
        keyPoints: [
          'Latch mechanism: Dephosphorylated myosin heads remain attached to actin in low-energy state without continuous ATP consumption; sustained contraction with minimal energy',
          'Slower cross-bridge cycling: Rate of attachment-detachment cycles significantly slower than skeletal muscle; fewer cycles require less ATP per unit time',
          'Lower myosin ATPase activity: Smooth muscle myosin has intrinsically lower ATPase activity controlling ATP hydrolysis speed during cross-bridge formation',
          'Energy efficiency: Only one-tenth to one-three-hundredth as much ATP required to sustain same tension compared to skeletal muscle',
          'Sustained tonic contraction: Designed for prolonged contractions (vascular tone, GI motility); latch state enables tension maintenance for long periods without fatigue',
          'Maximum force: Despite fewer myosin filaments and slow cycling, smooth muscle generates 4-6 kg/cm² compared to 3-4 kg/cm² for skeletal muscle due to prolonged cross-bridge attachment'
        ],
        officialDefinitions: [
          'Smooth muscle has low energy-requirement for contraction. Latch mechanism. Sustained contraction with little energy expenditure!',
          'Latch Mechanism: Smooth muscle has a unique mechanism called the "latch state" or latch-bridge mechanism. In this state, myosin heads remain attached to actin filaments even after the dephosphorylation of myosin light chains, which means cross-bridges can stay engaged without continuous ATP consumption. This latch state allows smooth muscle to maintain tension and force for prolonged periods with minimal ATP use, making it very energy-efficient.',
          'Slower Cross-Bridge Cycling: The rate of cross-bridge cycling in smooth muscle is significantly slower than in skeletal muscle. This slower cycling rate results in a reduced need for ATP because fewer cross-bridge cycles occur over a given period. Slower cycling does not significantly impact the force generated but reduces the energy cost of maintaining contraction.',
          'Lower Myosin ATPase Activity: The myosin ATPase activity in smooth muscle is lower compared to skeletal muscle. This enzyme controls the speed of ATP hydrolysis during cross-bridge formation. Lower ATPase activity means that less ATP is required for each contraction cycle, making smooth muscle more economical in its energy usage.',
          'Only 1/10 to 1/300 as much energy is required to sustain the same tension of contraction in smooth muscle as in skeletal muscle. This, too, is believed to result from the slow attachment and detachment cy-cling of the cross-­ bridges, and because only one molecule of ATP is required for each cycle, regardless of its duration.',
          'Maximum Force of Contraction Is Often Greater in Smooth Muscle Than in Skeletal Muscle. Despite the relatively few myosin filaments in smooth muscle, and despite the slow cycling time of the cross-­ bridges, the maximum force of contraction of smooth muscle is often greater than that of skeletal muscle, as much as 4 to 6 kg/cm2 cross-sectional area for smooth muscle in comparison with 3 to 4 kilograms for skeletal muscle.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Smooth muscles maintain force with much lower ATP hydrolysis than skeletal muscle through several mechanisms:',
              items: [
                'Latch mechanism: Allows dephosphorylated myosin heads to remain attached to actin filaments in a low-energy state without continuous ATP consumption, enabling sustained contraction with minimal energy expenditure',
                'Slower cross-bridge cycling: The rate of cross-bridge cycling in smooth muscle is significantly slower than skeletal muscle, resulting in fewer cycles per unit time and reduced ATP requirements',
                'Lower myosin ATPase activity: Smooth muscle myosin has intrinsically lower ATPase activity, meaning less ATP is hydrolyzed during each contraction cycle'
              ]
            },
            { type: 'paragraph', content: 'These adaptations make smooth muscle extremely energy-efficient, requiring only one-tenth to one-three-hundredth as much ATP to sustain the same tension as skeletal muscle. This efficiency is ideal for sustained tonic contractions such as maintaining vascular tone or gastrointestinal motility, allowing smooth muscle to maintain tension for prolonged periods without fatigue.' }
          ],
          raw: 'Smooth muscles maintain force with much lower ATP hydrolysis than skeletal muscle through several mechanisms. The latch mechanism allows dephosphorylated myosin heads to remain attached to actin filaments in a low-energy state without continuous ATP consumption, enabling sustained contraction with minimal energy expenditure. The rate of cross-bridge cycling in smooth muscle is significantly slower than skeletal muscle, resulting in fewer cycles per unit time and reduced ATP requirements. Smooth muscle myosin has intrinsically lower ATPase activity, meaning less ATP is hydrolyzed during each contraction cycle. These adaptations make smooth muscle extremely energy-efficient, requiring only one-tenth to one-three-hundredth as much ATP to sustain the same tension as skeletal muscle. This efficiency is ideal for sustained tonic contractions such as maintaining vascular tone or gastrointestinal motility, allowing smooth muscle to maintain tension for prolonged periods without fatigue.'
        }
      },
      {
        id: 'lo-8',
        isCritical: false,
        title: 'Distinguish between muscle relaxation from the contracted state and the phenomenon of stress relaxation and give examples of each process.',
        keyPoints: [
          'Muscle relaxation: Active return to resting state after contraction; involves cessation of cross-bridge cycling dependent on Ca2+ removal from cytoplasm',
          'Skeletal muscle relaxation: Ca2+ pumped back into SR via SERCA; Ca2+ dissociates from troponin; tropomyosin blocks myosin-binding sites on actin',
          'Smooth muscle relaxation: MLCP dephosphorylates myosin light chains; Ca2+ removed by SERCA and plasma membrane pumps; cross-bridge formation decreases',
          'Relaxation example: Intestinal smooth muscle relaxes after peristaltic contraction to prepare for next wave; requires active Ca2+ removal and myosin dephosphorylation',
          'Stress relaxation: Unique to smooth muscle; tension gradually decreases over time despite maintained stretch without proportional Ca2+ change; allows hollow organ volume accommodation',
          'Stress relaxation mechanism: Initial stretch increases tension; over seconds to minutes, cross-bridges slowly detach or recycle; cytoskeleton reorganizes adapting to new length; tension resets to lower level',
          'Stress relaxation example: Urinary bladder filling initially increases wall tension, then pressure stabilizes at lower level despite continued filling, allowing volume accommodation without excessive pressure'
        ],
        officialDefinitions: [
          'Muscle Relaxation from the Contracted State: occurs when a muscle returns to its resting state after it has been actively contracted. It involves the cessation of cross-bridge cycling between actin and myosin filaments and is directly influenced by the removal of calcium ions (Ca²⁺) from the intracellular space.',
          'Skeletal Muscle: Relaxation occurs when calcium is pumped back into the SR, causing calcium to dissociate from troponin and allowing tropomyosin to block the myosin-binding sites on actin.',
          'Smooth Muscle: Relaxation occurs when myosin light chain phosphatase (MLCP) dephosphorylates the myosin light chain, inhibiting myosin\'s interaction with actin.',
          'Stress Relaxation: is a property unique to smooth muscle where the muscle adjusts its tension over time in response to a sustained stretch or contraction, even if the stretch is maintained. This allows hollow organs to accommodate large volumes without a proportional increase in pressure.',
          'Mechanical stretch induces muscle relaxation (storage in the urinary bladder, gallbladder). "stress relaxation"',
          'Initial Stretch: When smooth muscle is suddenly stretched, passive and active tension in the muscle increases immediately. Tension Declines Over Time: Even if the length is held constant, the internal tension gradually decreases. Why? Cross-bridges slowly detach or recycle at a slower rate. The cytoskeleton and contractile apparatus reorganize to adapt to the new length. Myofilaments slide and realign → reduces strain. New Tension Set Point: After a few seconds to minutes, the muscle settles into a new "steady" state of lower tension — even though the stretch was never released.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Muscle relaxation from the contracted state:',
              items: [
                'Definition: Active process by which muscle returns to its resting state after contraction, involving cessation of cross-bridge cycling directly dependent on removal of calcium from the intracellular space',
                'Skeletal muscle: Calcium is pumped back into the sarcoplasmic reticulum, dissociates from troponin, allowing tropomyosin to block myosin-binding sites',
                'Smooth muscle: Myosin light chain phosphatase dephosphorylates myosin light chains while calcium is removed by SERCA pumps and plasma membrane exchangers',
                'Example: Intestinal smooth muscle actively relaxes after pushing food through to prepare for the next peristaltic wave'
              ]
            },
            {
              type: 'list',
              intro: 'Stress relaxation:',
              items: [
                'Definition: Unique property of smooth muscle where tension gradually decreases over time in response to sustained stretch even though the stretch is maintained, independent of calcium changes',
                'Mechanism: When smooth muscle is suddenly stretched, tension initially increases but then gradually declines as cross-bridges slowly detach and the cytoskeleton reorganizes',
                'Example: When the urinary bladder fills, the smooth muscle wall initially increases tension, but pressure stabilizes at a lower level despite continued filling, allowing volume accommodation'
              ]
            }
          ],
          raw: 'Muscle relaxation from the contracted state is the active process by which muscle returns to its resting state after contraction, involving cessation of cross-bridge cycling directly dependent on removal of calcium from the intracellular space. In skeletal muscle, calcium is pumped back into the sarcoplasmic reticulum, dissociates from troponin, allowing tropomyosin to block myosin-binding sites. In smooth muscle, myosin light chain phosphatase dephosphorylates myosin light chains while calcium is removed by SERCA pumps and plasma membrane exchangers. For example, intestinal smooth muscle actively relaxes after pushing food through to prepare for the next peristaltic wave. Stress relaxation is a unique property of smooth muscle where tension gradually decreases over time in response to sustained stretch even though the stretch is maintained, independent of calcium changes. When smooth muscle is suddenly stretched, tension initially increases but then gradually declines as cross-bridges slowly detach and the cytoskeleton reorganizes. For example, when the urinary bladder fills, the smooth muscle wall initially increases tension, but pressure stabilizes at a lower level despite continued filling, allowing volume accommodation.'
        }
      }
    ]
  };

export default topic24;
