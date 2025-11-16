const topic3 =   {
    id: 'topic-3',
    number: 3,
    category: 'cell-biology',
    mcqs: ['mcq-1'],
    title: 'Active Transport Mechanisms of the Cell Membrane',
    subtitle: 'This topic covers energy-dependent membrane transport mechanisms essential for maintaining cellular ionic gradients, nutrient uptake, and cellular homeostasis.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: true,
        title: '>>Define primary and secondary active transport.<< Define transport maximum, saturation, competitive and non-competitive inhibition.',
        keyPoints: [
          'Primary active transport: Direct ATP hydrolysis powers uphill ion/solute movement against electrochemical gradient',
          'Secondary active transport: Existing ion gradient (from primary transport) drives another solute uphill; no direct ATP use',
          'Transport maximum (Tm): Maximum transport rate when all carrier proteins are saturated',
          'Saturation: Transport rate plateaus at high substrate concentration; all carriers occupied',
          'Competitive inhibition: Inhibitor and substrate compete for same binding site; overcome by increasing substrate',
          'Non-competitive inhibition: Inhibitor binds allosteric site; reduces Tm; not overcome by more substrate'
        ],
        officialDefinitions: [
          'Primary Active Transport is a process in which solutes are moved across a biological membrane against their concentration or electrochemical gradient using energy directly derived from the hydrolysis of adenosine triphosphate (ATP).',
          'Secondary Active Transport is a process where the transport of a molecule against its concentration gradient is coupled to the movement of another molecule down its electrochemical gradient. The energy used for this transport is derived indirectly from the ATP hydrolysis used in primary active transport, which establishes the concentration gradient of the driving ion (usually Na⁺).',
          'Active transport- transport toward space of higher concentrations Energy demand of the transport can be covered in three different ways ATPhydrolysis Energy of the light Ionic gradients Secondary active transport Primary active transport',
          'Transport Maximum (Tm) This is the maximum rate at which a transporter can move a substance across the membrane. It occurs when all carrier proteins are fully saturated (working at full capacity).',
          'Saturation Saturation means that as the concentration of the transported substance increases, the rate of transport increases only up to a point. Beyond that, adding more substrate doesn\'t increase transport rate because all transporters are occupied. This is a key feature of facilitated diffusion and active transport, but not simple diffusion.',
          'Competitive Inhibition Occurs when another molecule competes with the normal substrate for binding to the same transporter. This reduces the transport rate of the normal substrate. Can be overcome by increasing the concentration of the normal substrate.',
          'Non-Competitive Inhibition Inhibitor binds to a different site (not the substrate binding site) on the transporter. This changes the shape or function of the transporter, reducing its activity. Cannot be overcome by increasing substrate concentration.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Primary active transport directly uses ATP hydrolysis to move ions or molecules against their electrochemical gradient, exemplified by Na-K-ATPase pumping three sodium out and two potassium in per ATP.<<', critical: true },
            { type: 'paragraph', content: '>>Secondary active transport uses an existing ion gradient, established by primary active transport, to drive another solute uphill without direct ATP use, like sodium-glucose cotransport.<<', critical: true },
            { type: 'paragraph', content: 'Transport maximum is the maximal rate when all carriers are saturated.' },
            { type: 'paragraph', content: 'Saturation occurs when increasing substrate concentration no longer increases transport rate.' },
            { type: 'paragraph', content: 'Competitive inhibition involves competition for the same binding site, overcome by more substrate.' },
            { type: 'paragraph', content: 'Non-competitive inhibition involves binding at an allosteric site, reducing maximum capacity regardless of substrate concentration.' }
          ],
          raw: '>>Primary active transport directly uses ATP hydrolysis to move ions or molecules against their electrochemical gradient, exemplified by Na-K-ATPase pumping three sodium out and two potassium in per ATP. Secondary active transport uses an existing ion gradient, established by primary active transport, to drive another solute uphill without direct ATP use, like sodium-glucose cotransport.<< Transport maximum is the maximal rate when all carriers are saturated. Saturation occurs when increasing substrate concentration no longer increases transport rate. Competitive inhibition involves competition for the same binding site, overcome by more substrate. Non-competitive inhibition involves binding at an allosteric site, reducing maximum capacity regardless of substrate concentration.'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Describe how energy from ATP hydrolysis is used to transport ions such as Na+, K+, Ca2+ and H+ against their electrochemical differences via examples',
        keyPoints: [
          'Na-K-ATPase (P-type ATPase): 3 Na+ out, 2 K+ in per ATP; maintains gradients for excitability and cell volume',
          'Ca-ATPase: PMCA (plasma membrane) and SERCA (sarcoplasmic reticulum) pump Ca2+ out of cytoplasm',
          'Low cytoplasmic Ca2+ (10⁻⁷ to 10⁻⁴ mM) essential for muscle relaxation and signal termination',
          'H-K-ATPase: Gastric parietal cells exchange H+ out for K+ in; creates stomach acid (pH ~1-2)',
          'Mechanism: ATP binds → phosphorylates pump → conformational change → ion translocation → dephosphorylation resets'
        ],
        officialDefinitions: [
          'The Na⁺/K⁺ ATPase pump is a P-type ATPase found in the plasma membranes of all cells. It maintains the concentration gradients of sodium and potassium ions across the cell membrane by pumping 3 Na⁺ ions out of the cell and 2 K⁺ ions into the cell for each ATP molecule hydrolyzed.',
          'When ATP is hydrolyzed, the energy released is used to phosphorylate the pump, causing a conformational change that allows the binding and release of Na⁺ and K⁺.',
          'The Ca²⁺ ATPase, found in the plasma membrane (PMCA) and sarcoplasmic/endoplasmic reticulum membrane (SERCA), pumps Ca²⁺ ions out of the cytoplasm to maintain low intracellular calcium concentrations.',
          'The H⁺/K⁺ ATPase is found in the parietal cells of the stomach and α-intercalated cells of the renal collecting duct.It pumps H⁺ ions into the stomach lumen and K⁺ ions into the cell, maintaining the acidic environment of the stomach.',
          'When the terminal phosphate is released, it is transferred to the transport protein, initiating a cycle of phosphorylation and dephosphorylation. When ATP is directly coupled to the transport process it\'s called primary active transport.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'ATP hydrolysis directly powers primary active transport by phosphorylating pump proteins, causing conformational changes that move ions against electrochemical gradients.' },
            {
              type: 'list',
              intro: 'Examples:',
              items: [
                'Na-K-ATPase hydrolyzes one ATP to pump three sodium out and two potassium in, maintaining membrane potential and preventing cell swelling',
                'Ca-ATPase pumps calcium from cytoplasm into sarcoplasmic reticulum or extracellular space, maintaining low cytoplasmic calcium essential for muscle relaxation',
                'H-K-ATPase in gastric parietal cells pumps hydrogen into stomach lumen in exchange for potassium, creating gastric acid for digestion'
              ]
            },
            { type: 'paragraph', content: 'All use phosphorylation-dephosphorylation cycles.' }
          ],
          raw: 'ATP hydrolysis directly powers primary active transport by phosphorylating pump proteins, causing conformational changes that move ions against electrochemical gradients. Na-K-ATPase hydrolyzes one ATP to pump three sodium out and two potassium in, maintaining membrane potential and preventing cell swelling. Ca-ATPase pumps calcium from cytoplasm into sarcoplasmic reticulum or extracellular space, maintaining low cytoplasmic calcium essential for muscle relaxation. H-K-ATPase in gastric parietal cells pumps hydrogen into stomach lumen in exchange for potassium, creating gastric acid for digestion. All use phosphorylation-dephosphorylation cycles.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Explain how energy from Na+ and K+ electrochemical gradients can drive uphill transport of other solutes (Na+/glucose cotransport; Na+/Ca2+-exchange)',
        keyPoints: [
          'Na-K-ATPase establishes steep Na+ gradient: high extracellular (138-151 mM), low intracellular (12 mM)',
          'Na-glucose cotransporter (SGLT): Symport; Na+ down its gradient pulls glucose up against its gradient',
          'Located in intestinal epithelium and renal proximal tubules; absorbs glucose from lumen into cells',
          'Na-Ca exchanger (NCX): Antiport; 3 Na+ in (down gradient) drives 1 Ca2+ out (against gradient)',
          'NCX maintains low intracellular Ca2+; critical in cardiac and skeletal muscle for relaxation',
          'Both mechanisms indirectly depend on ATP via the primary Na-K pump maintaining gradients'
        ],
        officialDefinitions: [
          'The Na⁺ and K⁺ electrochemical gradients created by the Na⁺/K⁺ ATPase pump are essential energy sources for driving the secondary active transport of various solutes against their own concentration gradients. This process does not directly utilize ATP but depends on the energy stored in the electrochemical gradients established by primary active transport.',
          'Secondary active transport • The active transport of a molecule (or molecules) is driven by the energy of an already existing electrochemical gradient of other molecule. • In animal cells usually the sodium gradient is used. • The sodium gradient is held up by the Na+- K+ pump. (e.g. amino acid, glucose uptake from the gut.) • Secondary active transport can be symport or antiport.',
          'Na⁺/Glucose Cotransport (SGLT1) is an example of a symport mechanism where glucose is transported into the cell along with Na⁺ ions. The energy required for this process comes from the electrochemical gradient of Na⁺, which is maintained by the Na⁺/K⁺ ATPase.',
          'The Na⁺/Ca²⁺ exchanger (NCX) is an example of counter-transport where Na⁺ and Ca²⁺ ions move in opposite directions. The energy for this process is derived from the Na⁺ gradient created by the Na⁺/K⁺ ATPase. The Na⁺/Ca²⁺ exchanger uses this gradient to move 3 Na⁺ ions into the cell down their electrochemical gradient while moving 1 Ca²⁺ ion out of the cell against its gradient.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The Na-K-ATPase creates a steep sodium gradient with high extracellular and low intracellular sodium. This stored energy drives secondary active transport.' },
            { type: 'paragraph', content: 'The sodium-glucose cotransporter uses sodium moving down its gradient into the cell to simultaneously transport glucose uphill against its concentration gradient, essential for glucose absorption in intestines and kidneys.' },
            { type: 'paragraph', content: 'The sodium-calcium exchanger moves three sodium ions inward down their gradient to pump one calcium ion outward against its gradient, maintaining low intracellular calcium crucial for muscle relaxation and signal termination.' },
            { type: 'paragraph', content: 'Both indirectly require ATP through the primary sodium-potassium pump.' }
          ],
          raw: 'The Na-K-ATPase creates a steep sodium gradient with high extracellular and low intracellular sodium. This stored energy drives secondary active transport. The sodium-glucose cotransporter uses sodium moving down its gradient into the cell to simultaneously transport glucose uphill against its concentration gradient, essential for glucose absorption in intestines and kidneys. The sodium-calcium exchanger moves three sodium ions inward down their gradient to pump one calcium ion outward against its gradient, maintaining low intracellular calcium crucial for muscle relaxation and signal termination. Both indirectly require ATP through the primary sodium-potassium pump.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Explain the role and significance of ATP-binding cassette (ABC) transporters via examples',
        keyPoints: [
          'Structure: Two nucleotide-binding domains (ATP-binding cassettes) + two transmembrane domains',
          'Mechanism: ATP binding → conformational change → substrate translocation → ATP hydrolysis to ADP resets transporter',
          'Bile secretion: Hepatocytes use ABC transporters to secrete bile salts and bilirubin into bile canaliculi',
          'Multidrug resistance: Cancer cells overexpress ABC transporters (MDR1/P-glycoprotein) pumping out chemotherapy drugs',
          'CFTR: Unique ABC transporter functioning as regulated chloride channel; mutations cause cystic fibrosis with thick mucus',
          'Also transport lipids, cholesterol, and xenobiotics; essential for cellular detoxification'
        ],
        officialDefinitions: [
          'ABC transporters ATP Binding Casette sequence motiv Structure: Double nucleotide binding domains Function: • Bile secretion of hepatocytes • Multidrog resistence: drug elimination • Gain of function in canceric cells: removal of antitumor drugs',
          'ABC transporters contain two ATP-binding domains (also called nucleotide-binding domains or cassettes) and two transmembrane domains. Transmembrane Domains: These domains are responsible for recognizing and translocating specific substrates across the membrane.',
          'Mechanism: ATP binds to the nucleotide-binding domains, causing a conformational change in the transporter. This conformational change drives the substrate translocation across the membrane. ATP is then hydrolyzed to ADP, resetting the transporter to its original state.',
          'Cystic Fibrosis Transmembrane Conductance Regulator (CFTR):CFTR is a unique ABC transporter that functions as a chloride ion channel rather than a typical transporter.Mutations in the CFTR gene lead to cystic fibrosis, a condition characterized by thick mucus production and impaired lung function.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'ABC transporters contain two ATP-binding cassette domains and two transmembrane domains.' },
            { type: 'paragraph', content: 'ATP binding causes conformational changes that translocate substrates across membranes, then ATP hydrolysis resets the transporter.' },
            {
              type: 'list',
              intro: 'Functions:',
              items: [
                'Secrete bile in hepatocytes',
                'Eliminate drugs and toxins',
                'Cause multidrug resistance in cancer by pumping out chemotherapy agents'
              ]
            },
            { type: 'paragraph', content: 'CFTR is a unique ABC transporter functioning as a chloride channel; mutations impair chloride secretion causing cystic fibrosis with thick mucus in lungs and pancreas.' },
            { type: 'paragraph', content: 'ABC transporters are critical for detoxification, lipid transport, and drug elimination.' }
          ],
          raw: 'ABC transporters contain two ATP-binding cassette domains and two transmembrane domains. ATP binding causes conformational changes that translocate substrates across membranes, then ATP hydrolysis resets the transporter. They secrete bile in hepatocytes, eliminate drugs and toxins, and cause multidrug resistance in cancer by pumping out chemotherapy agents. CFTR is a unique ABC transporter functioning as a chloride channel; mutations impair chloride secretion causing cystic fibrosis with thick mucus in lungs and pancreas. ABC transporters are critical for detoxification, lipid transport, and drug elimination.'
        }
      },
      {
        id: 'lo-5',
        isCritical: true,
        title: '>>Define vesicular transport:<< endocytosis, exocytosis, transcytosis. Give examples for specific and aspecific vesicular transport processes.',
        keyPoints: [
          'Endocytosis: Plasma membrane invaginates forming vesicle that brings material into cell; requires ATP',
          'Three types: Phagocytosis (large particles, bacteria), pinocytosis (fluid, small solutes), receptor-mediated (specific molecules)',
          'Exocytosis: Intracellular vesicle fuses with plasma membrane releasing contents to extracellular space; requires ATP and Ca2+',
          'Transcytosis: Material transported completely across cell: endocytosis → intracellular transport → exocytosis on opposite side',
          'Specific examples: Receptor-mediated LDL uptake via clathrin-coated pits; neurotransmitter release at synapses; IgA transcytosis across intestinal epithelium',
          'Aspecific examples: Fluid-phase pinocytosis (nonselective fluid uptake); macrophage phagocytosis of bacteria (triggered by general pathogen signals); bulk exocytosis of pancreatic enzymes'
        ],
        officialDefinitions: [
          'Vesicular transport refers to the movement of substances into, out of, or within a cell via small, membrane-bound sacs called vesicles. This process is used for transporting large molecules (e.g., proteins, lipids, polysaccharides) and particles that cannot pass through the plasma membrane by simple diffusion or active transport mechanisms. <<',
          '>> 1. Endocytosis – "Entering the cell" The cell membrane folds inward to form a vesicle that brings substances into the cell. Energy-dependent process (requires ATP). Subtypes: Phagocytosis – "Cell eating": large particles (e.g., bacteria) are engulfed by immune cells. Pinocytosis – "Cell drinking": fluid and small molecules are taken in. Receptor-mediated endocytosis – specific uptake of molecules (e.g., LDL, hormones) via receptors. <<',
          '>> 2. Exocytosis – "Exiting the cell" Vesicles inside the cell fuse with the plasma membrane to release their contents outside the cell. Used to: Secrete hormones, neurotransmitters, enzymes. Insert membrane proteins or lipids into the plasma membrane. Also requires ATP and often calcium for vesicle fusion. <<',
          '>> 3.transcytosis : is a process where molecules are transported across the interior of a cell. It involves endocytosis (the uptake of molecules into the cell), transport through the cell, and exocytosis (release of molecules on the opposite side of the cell). This allows substances to move from one side of a cell to the other without being altered or degraded. Important for transferring the antibodies through the epithelium. <<',
          'Specific Vesicular Transport: These involve receptors or specific molecules to guide the process. Receptor-Mediated Endocytosis: Example: LDL (Low-Density Lipoprotein) uptake. LDL binds to LDL receptors on the cell surface, leading to its internalization through clathrin-coated vesicles. Transcytosis: Example: IgA antibodies transported across the epithelial cells of the intestines, using specific receptors to move from the apical to the basolateral side.',
          'Aspecific Vesicular Transport: These do not rely on specific receptors or selective processes. Pinocytosis: Example: Fluid-phase endocytosis where cells nonspecifically engulf extracellular fluid and dissolved solutes into small vesicles without the involvement of specific receptors. Phagocytosis:Example: Macrophages engulfing bacteria or dead cells. The process is triggered by general signals (like the presence of foreign particles) rather than specific receptor-ligand interactions.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Endocytosis is plasma membrane invagination forming vesicles that internalize material.<<', critical: true },
            {
              type: 'list',
              intro: '>>Three types:<<',
              critical: true,
              items: [
                'Phagocytosis engulfs large particles like bacteria in immune cells',
                'Pinocytosis takes in fluid and small molecules',
                'Receptor-mediated endocytosis specifically internalizes molecules like LDL through clathrin-coated vesicles'
              ]
            },
            { type: 'paragraph', content: '>>Exocytosis is vesicle fusion with plasma membrane releasing contents outside, like neurotransmitter and hormone secretion.<<', critical: true },
            { type: 'paragraph', content: '>>Transcytosis transports molecules across cells by combining endocytosis, intracellular transport, and exocytosis, exemplified by IgA antibody transfer across intestinal epithelium.<<', critical: true },
            { type: 'paragraph', content: 'Specific transport uses receptors for selectivity; aspecific transport nonselectively engulfs material. All require ATP.' }
          ],
          raw: '>>Endocytosis is plasma membrane invagination forming vesicles that internalize material. Three types: phagocytosis engulfs large particles like bacteria in immune cells, pinocytosis takes in fluid and small molecules, and receptor-mediated endocytosis specifically internalizes molecules like LDL through clathrin-coated vesicles. Exocytosis is vesicle fusion with plasma membrane releasing contents outside, like neurotransmitter and hormone secretion. Transcytosis transports molecules across cells by combining endocytosis, intracellular transport, and exocytosis, exemplified by IgA antibody transfer across intestinal epithelium.<< Specific transport uses receptors for selectivity; aspecific transport nonselectively engulfs material. All require ATP.'
        }
      }
    ]
  };

export default topic3;
