const topic2 =   {
    id: 'topic-2',
    number: 2,
    category: 'cell-biology',
    mcqs: ['mcq-1'],
    title: 'Passive transport mechanisms of the cell membrane',
    subtitle: 'Covers membrane structure, concentration units, diffusion mechanisms (simple and facilitated), water transport via aquaporins, osmotic principles, and carrier transport types essential for cellular function.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: false,
        title: 'Describe and make a schematic drawing of the molecular structure of the plasma membrane (fluid mosaic model). Explain how the distribution of phospholipids and proteins influences the membrane permeability of ions, hydrophylic and hydrophobic compounds. Describe lateral diffusion in the membrane.',
        keyPoints: [
          'Fluid mosaic model: Phospholipid bilayer with embedded proteins, cholesterol, and carbohydrates forming dynamic, selectively permeable structure',
          'Phospholipid structure: Hydrophilic (water-attracting) heads face aqueous environments; hydrophobic (water-repelling) tails form nonpolar core',
          'Membrane proteins: Integral (transmembrane) proteins span bilayer functioning as channels, carriers, receptors; peripheral proteins attach to surfaces for signaling and support',
          'Permeability patterns: HIGH for hydrophobic compounds (O2, CO2, steroid hormones, small nonpolar molecules); LOW for ions (Na+, K+, Ca2+, Cl-) and hydrophilic compounds (glucose, amino acids)',
          'Lateral diffusion: Sideways movement of phospholipids and proteins within same membrane layer driven by thermal (Brownian) motion; no ATP required',
          'Factors affecting lateral diffusion: Membrane fluidity (temperature-dependent); cholesterol regulates fluidity and stability',
          'Functional importance: Maintains membrane uniformity, enables rapid protein reorganization for signal transduction, membrane repair, cell movement, immune recognition'
        ],
        officialDefinitions: [
          'Fluid-Mosaic membrane model (Seymour Jonathan Singer and Garth L. Nicolson , 1972.) A continuous fluid, 2D lipid double layer with mosaic-like embedded proteins',
          'Phospholipids Polar head Hydrophylic region Phosphate group Glycerol Esther or ether bound Apolar chain Hydrophobic region Amphipathic molecules',
          'Effect of choloesterol on membrane fluidity • On higher temperature: attenuates membrane fluidity (immobilizes fatty acid chains close to the head). • On lower temperature: increases fluidity (inhibits fatty acid interactions).',
          'Permeability of the membrane • Every molecule is able to pass through the membrane if there is enough time for the process • The smaller and more apolar a molecule is, the faster it can pass through the membrane'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Plasma membrane consists of phospholipid bilayer with hydrophilic heads facing outward toward aqueous environments and hydrophobic tails forming nonpolar core inward.' },
            { type: 'paragraph', content: 'Integral transmembrane proteins span bilayer functioning as channels, carriers, and receptors. Peripheral proteins attach to membrane surfaces for signaling and structural support.' },
            { type: 'paragraph', content: 'Cholesterol interspersed between phospholipids regulates fluidity and stability. Carbohydrates attached as glycoproteins or glycolipids on extracellular surface function in cell recognition, signaling, and protection.' },
            { type: 'paragraph', content: 'Permeability determined by hydrophobic core: HIGH for hydrophobic compounds like oxygen, carbon dioxide, steroid hormones; LOW for ions and hydrophilic compounds which require protein channels or carriers.' },
            { type: 'paragraph', content: 'Lateral diffusion is sideways movement of molecules within same membrane layer driven by thermal Brownian motion, no ATP required, allowing rapid membrane reorganization for various cellular functions.' }
          ],
          raw: 'Plasma membrane consists of phospholipid bilayer with hydrophilic heads facing outward toward aqueous environments and hydrophobic tails forming nonpolar core inward. Integral transmembrane proteins span bilayer functioning as channels, carriers, and receptors. Peripheral proteins attach to membrane surfaces for signaling and structural support. Cholesterol interspersed between phospholipids regulates fluidity and stability. Carbohydrates attached as glycoproteins or glycolipids on extracellular surface function in cell recognition, signaling, and protection. Permeability determined by hydrophobic core: HIGH for hydrophobic compounds like oxygen, carbon dioxide, steroid hormones; LOW for ions and hydrophilic compounds which require protein channels or carriers. Lateral diffusion is sideways movement of molecules within same membrane layer driven by thermal Brownian motion, no ATP required, allowing rapid membrane reorganization for various cellular functions.'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Contrast the following units used to describe concentration: mM, mEq/l, mosm/kgH2O.',
        keyPoints: [
          'mM (millimolar): Moles of solute per liter of solution; measures molecular concentration; Example: 1 mM glucose equals 1 mmol/L',
          'mEq/L (milliequivalents per liter): Measures ion concentration based on electrical charge; Formula: mEq/L equals mM times valence',
          'Valence examples: 1 mM Ca2+ equals 2 mEq/L (valence 2); 1 mM Na+ equals 1 mEq/L (valence 1)',
          'mEq/L used for electrolytes: Accounts for both amount and charge of ions in bodily fluids (sodium, potassium, calcium)',
          'mosm/kgH2O (milliosmoles per kilogram water): Measures number of osmotically active particles per kilogram solvent',
          'Dissociation matters: 1 mM NaCl equals 2 mosm/kgH2O (splits into Na+ plus Cl-); 1 mM glucose equals 1 mosm/kgH2O (stays intact)',
          'Clinical significance: mosm/kgH2O predicts water movement; mEq/L accounts for ionic charge; mM measures molecular concentration'
        ],
        officialDefinitions: [
          'mM (millimolar): is a unit of concentration based on molarity. Molarity (M) is defined as the number of moles of solute per liter of solution',
          'mEq/l (milliequivalents per liter) measure the concentration of ions based on their ability to react with hydrogen ions. This unit accounts for both the amount of substance and its charge.Equivalent (Eq) is defined as the amount of substance that will react with or supply one mole of hydrogen ions (H*) or electrons.',
          'mosm/kgH2o(milliosmoles per kilogram of water): measures the number of particles of solute per kilogram of solvent.',
          'Osmolarity: proportional with the solute concentration Stands only for highly diluted solutions 1 mol glucose/1 liter of water: 1 osmol/l but ! 1 mol NaCl/1 liter of water:2 osmol/l',
          'Osmolality: considers the solvent mass - osmol/kg; high solvent mass occupies a relevant space in the solvent, (proportional with the change of freezing point)'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Three concentration units serve different purposes:' },
            { type: 'paragraph', content: 'mM or millimolar measures moles of solute per liter of solution, expressing molecular concentration. Example: 1 mM glucose equals 1 mmol per liter. Used commonly for molecules like glucose, salts, or ions.' },
            { type: 'paragraph', content: 'mEq per L or milliequivalents per liter measures ion concentration based on electrical charge. Formula: mEq per L equals mM times valence. Example: 1 mM calcium ion equals 2 mEq per L because valence is 2, while 1 mM sodium ion equals 1 mEq per L because valence is 1. Used for electrolytes since it accounts for both amount and charge.' },
            { type: 'paragraph', content: 'mosm per kg H2O or milliosmoles per kilogram water measures number of osmotically active particles per kilogram solvent. Example: 1 mM NaCl equals 2 mosm per kg H2O because it dissociates into 2 particles, while 1 mM glucose equals 1 mosm per kg H2O because it stays intact. Used to understand osmotic effects and water balance.' },
            { type: 'paragraph', content: 'Key difference: mM counts molecules, mEq per L counts charges, mosm counts osmotic particles.' }
          ],
          raw: 'Three concentration units serve different purposes: mM or millimolar measures moles of solute per liter of solution, expressing molecular concentration. Example: 1 mM glucose equals 1 mmol per liter. Used commonly for molecules like glucose, salts, or ions. mEq per L or milliequivalents per liter measures ion concentration based on electrical charge. Formula: mEq per L equals mM times valence. Example: 1 mM calcium ion equals 2 mEq per L because valence is 2, while 1 mM sodium ion equals 1 mEq per L because valence is 1. Used for electrolytes since it accounts for both amount and charge. mosm per kg H2O or milliosmoles per kilogram water measures number of osmotically active particles per kilogram solvent. Example: 1 mM NaCl equals 2 mosm per kg H2O because it dissociates into 2 particles, while 1 mM glucose equals 1 mosm per kg H2O because it stays intact. Used to understand osmotic effects and water balance. Key difference: mM counts molecules, mEq per L counts charges, mosm counts osmotic particles.'
        }
      },
      {
        id: 'lo-3',
        isCritical: true,
        title: 'Define simple diffusion and explain how changes in the driving forces (chemical and electrical gradient, in steady state situation) and membrane properties will influence the transport rate. >>State Fick\'s law of diffusion.<<',
        keyPoints: [
          'Simple diffusion: Passive movement of molecules through membrane from high to low concentration without carrier proteins; driven by thermal energy',
          'Chemical gradient (concentration difference): Larger concentration difference equals faster diffusion rate; molecules move toward lower concentration until equilibrium',
          'Electrical gradient: Charge difference across membrane; ions move toward opposite charge areas (positive ions toward negative, negative toward positive)',
          'Electrochemical gradient: Combines chemical and electrical effects; determines net movement direction for charged molecules like Na+ and K+',
          'Steady state: Driving forces remain constant over time; diffusion continues indefinitely as gradient maintained',
          'Membrane properties affecting rate: (1) Permeability depends on lipid solubility, (2) Pore size and number (more/larger pores faster), (3) Membrane thickness (thicker slower), (4) Temperature (higher increases kinetic energy)',
          'Fick\'s law for gases: Vx equals (D times A times delta P) divided by delta X; where Vx is rate of diffusion, D is diffusion coefficient, A is surface area, delta P is partial pressure difference (NOT concentration), delta X is membrane thickness'
        ],
        officialDefinitions: [
          'Simple Diffusion-is the passive movement of ions or molecules through a membrane, from an area of higher concentration to an area of lower concentration, without the need for interaction with carrier proteins. This process relies on the natural kinetic energy of the molecules, moving across the membrane through intermolecular spaces or pores.',
          'Chemical Gradient: This refers to the concentration difference of a substance across a membrane. The larger the difference (steeper gradient) between the two sides, the faster the rate of diffusion. Molecules move from areas of high concentration to low concentration until equilibrium is reached.',
          'Electrical Gradient:refers to the charge difference across a membrane. Ions move based on their charge toward areas of opposite charge (e.g., positive ions toward negatively charged areas). The electrochemical gradient combines the effects of both chemical and electrical gradients, influencing the movement of charged molecules such as sodium (Na⁺) and potassium (K⁺).',
          'Steady-State Situation: In a steady state, the driving forces (such as concentration and electrical gradients) remain constant over time. In this condition, diffusion continues indefinitely, as long as the gradient is maintained, allowing for continuous transport of molecules.',
          'Fick\'s law states that the rate of diffusion (Vx) of a gas across a membrane is directly proportional to: Driving Force (ΔP): This is the partial pressure difference of the gas across the membrane, not the concentration difference. The greater the partial pressure difference, the faster the diffusion. Diffusion Coefficient (D): This is a constant for each gas that takes into account factors such as the gas\'s molecular weight and solubility, Gases with a higher diffusion coefficient will diffuse faster Surface Area (A): The larger the surface area available for diffusion, the more gas can diffuse across the membrane at any given time. And inversely proportional to: Thickness of the Membrane (ΔX): A thicker membrane slows down diffusion because the gas molecules have a longer distance to travel. Formula: Vx = (D A ΔP) / ΔX'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Simple diffusion is passive movement of molecules through membrane from high to low concentration without carrier proteins, driven solely by thermal kinetic energy.' },
            { type: 'paragraph', content: 'Driving forces: Chemical gradient is concentration difference; larger difference equals faster rate. Electrical gradient is charge difference; ions move toward opposite charge. Electrochemical gradient combines both effects, determining net movement of charged molecules.' },
            { type: 'paragraph', content: 'In steady state, driving forces remain constant allowing continuous transport.' },
            {
              type: 'list',
              intro: 'Membrane properties influencing rate:',
              items: [
                'Permeability depends on lipid solubility (lipid-soluble molecules like oxygen and carbon dioxide pass easily)',
                'Pore size and number (more or larger pores allow faster passage)',
                'Membrane thickness (thicker membranes provide more resistance, slowing diffusion)'
              ]
            },
            { type: 'paragraph', content: '>>Fick\'s law of diffusion states rate of diffusion Vx of gas across membrane is directly proportional to: driving force delta P which is partial pressure difference of gas (NOT concentration difference), diffusion coefficient D accounting for molecular weight and solubility, and surface area A. Inversely proportional to membrane thickness delta X. Formula: Vx equals D times A times delta P divided by delta X.<<', critical: true },
            { type: 'paragraph', content: 'Note: diffusion coefficient of carbon dioxide is 20 times higher than oxygen, so carbon dioxide diffuses 20 times faster for given partial pressure.' }
          ],
          raw: 'Simple diffusion is passive movement of molecules through membrane from high to low concentration without carrier proteins, driven solely by thermal kinetic energy. Driving forces: Chemical gradient is concentration difference; larger difference equals faster rate. Electrical gradient is charge difference; ions move toward opposite charge. Electrochemical gradient combines both effects, determining net movement of charged molecules. In steady state, driving forces remain constant allowing continuous transport. Membrane properties influencing rate: Permeability depends on lipid solubility (lipid-soluble molecules like oxygen and carbon dioxide pass easily); pore size and number (more or larger pores allow faster passage); membrane thickness (thicker membranes provide more resistance, slowing diffusion). >>Fick\'s law of diffusion states rate of diffusion Vx of gas across membrane is directly proportional to: driving force delta P which is partial pressure difference of gas (NOT concentration difference), diffusion coefficient D accounting for molecular weight and solubility, and surface area A. Inversely proportional to membrane thickness delta X. Formula: Vx equals D times A times delta P divided by delta X.<< Note: diffusion coefficient of carbon dioxide is 20 times higher than oxygen, so carbon dioxide diffuses 20 times faster for given partial pressure.'
        }
      },
      {
        id: 'lo-4',
        isCritical: true,
        title: '>>Describe the role of water channels (aquaporins)<< in the water permeabiliy of the cell membrane.',
        keyPoints: [
          'Aquaporins: Integral membrane proteins forming water-selective pores (~3 Angstrom diameter) in cell membrane',
          'Function: Dramatically increase membrane water permeability (up to 3 billion water molecules per second per channel) compared to simple diffusion through lipid bilayer',
          'Selectivity mechanism: Highly specific for water; exclude ions (including H+) and other solutes due to size restriction and electrostatic properties (triple filter: size, electrostatic, positively charged dipoles)',
          'Mechanism: Passive transport; water moves down osmotic gradient without energy (ATP) input',
          'Distribution: High expression in cells requiring rapid water transport (kidney collecting duct for AQP2, red blood cells for AQP1, brain, lungs)',
          'Regulation: Can be inserted into or removed from membrane; example: antidiuretic hormone (ADH or vasopressin) regulates AQP2 translocation to membrane in kidney collecting duct',
          'Clinical significance: Essential for maintaining water balance within cells and across tissues; AQP1 in red blood cells; AQP2 in kidney (vasopressin-regulated); AQP3-8 in other tissue types'
        ],
        officialDefinitions: [
          'Though water is polar, because of its high concentration its passive diffusion is relevant- still not fast enough: role of aquaporines. 3x109 water molecules/s. Ions can not pass. Triple filter: size, electrosthatic, positively charged dipoles.',
          'Aquaporin1 Peter Agre (Nobel prize 2003), in red blood cells.',
          'Aquaporin 2 In the kidney - translocated to the membrane after vasopressin binding.',
          'Aquaporin 3-8 In other tissue types.',
          'Aquaporins are integral membrane proteins that form pores in the cell membrane, allowing water molecules to move in and out of cells more rapidly than simple diffusion would permit. Due to their specialized structure, they are essential for maintaining water balance within cells and across tissues.',
          'Water, being a small molecule, can pass through the lipid bilayer of the cell membrane via simple diffusion. However, this process is relatively slow due to water\'s polarity, which restricts its ability to pass through the hydrophobic core of the lipid bilayer.',
          'Since water diffuses slowly through the membrane, aquaporins act as channels that facilitate the rapid movement of water molecules. This process does not require energy (ATP) and is known as facilitated diffusion. Aquaporins increase the permeability of the membrane to water by providing a dedicated channel, which allows water molecules to pass through at a significantly higher rate.',
          'Aquaporins enhance the rate of osmotic water movement, making them essential for cells that require rapid and regulated water transport.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Aquaporins are integral membrane channel proteins that facilitate rapid water transport across cell membranes.<<', critical: true },
            { type: 'paragraph', content: '>>Structure: Tetrameric proteins where each monomer forms a water-selective pore approximately 3 Angstrom in diameter.<<', critical: true },
            { type: 'paragraph', content: '>>Function: Dramatically increase membrane water permeability, allowing up to 3 billion water molecules per second per channel, much faster than simple diffusion through lipid bilayer.<<', critical: true },
            { type: 'paragraph', content: 'Selectivity: Highly specific for water molecules; exclude ions including protons and other solutes due to size restriction and electrostatic properties acting as triple filter based on size, electrostatic interactions, and positively charged dipoles.' },
            { type: 'paragraph', content: 'Mechanism: Passive transport where water moves down osmotic gradient without requiring energy input.' },
            { type: 'paragraph', content: 'Distribution: High expression in cells requiring rapid water transport including kidney collecting duct, red blood cells, brain, and lungs.' },
            { type: 'paragraph', content: 'Regulation: Can be dynamically inserted into or removed from membrane; for example, antidiuretic hormone ADH regulates AQP2 insertion in kidney collecting duct to control water reabsorption.' },
            {
              type: 'list',
              intro: 'Clinical significance:',
              items: [
                'Aquaporin 1 in red blood cells',
                'Aquaporin 2 in kidney regulated by vasopressin',
                'Aquaporins 3 through 8 in various other tissue types'
              ]
            }
          ],
          raw: '>>Aquaporins are integral membrane channel proteins that facilitate rapid water transport across cell membranes. Structure: Tetrameric proteins where each monomer forms a water-selective pore approximately 3 Angstrom in diameter. Function: Dramatically increase membrane water permeability, allowing up to 3 billion water molecules per second per channel, much faster than simple diffusion through lipid bilayer.<< Selectivity: Highly specific for water molecules; exclude ions including protons and other solutes due to size restriction and electrostatic properties acting as triple filter based on size, electrostatic interactions, and positively charged dipoles. Mechanism: Passive transport where water moves down osmotic gradient without requiring energy input. Distribution: High expression in cells requiring rapid water transport including kidney collecting duct, red blood cells, brain, and lungs. Regulation: Can be dynamically inserted into or removed from membrane; for example, antidiuretic hormone ADH regulates AQP2 insertion in kidney collecting duct to control water reabsorption. Clinical significance: Aquaporin 1 in red blood cells; Aquaporin 2 in kidney regulated by vasopressin; Aquaporins 3 through 8 in various other tissue types.'
        }
      },
      {
        id: 'lo-5',
        isCritical: false,
        title: 'Define: osmosis, osmol, osmolarity, osmolality and tonicity, and reflection coefficient. Explain how the different permeability of the cell membrane to water and solutes will generate an osmotic pressure.',
        keyPoints: [
          'Osmosis: Passive movement of water across semipermeable membrane from low solute concentration (high water concentration) to high solute concentration (low water concentration)',
          'Osmol: Unit expressing total number of moles of solute particles contributing to osmotic pressure; 1 osmol equals 1 mole of osmotically active particles',
          'Osmolarity: Concentration of osmotically active particles per liter of solution (osm/L); varies with temperature and pressure',
          'Osmolality: Concentration of osmotically active particles per kilogram of solvent (osm/kg); not affected by temperature or pressure; used in clinical settings (>>blood plasma osmolality: 290 mosm/kgH2O<<)',
          'Tonicity: Relative concentration of solutes affecting water movement across semipermeable membrane; determines cell volume changes (hypertonic: cell shrinks; isotonic: no change; hypotonic: cell swells)',
          'Reflection coefficient (σ): Measures membrane permeability to solute (0 to 1 scale); σ equals 1 means impermeable (maximum osmotic pressure), σ equals 0 means freely permeable (no osmotic pressure)',
          'Osmotic pressure generation: Selective membrane permeability (water passes, solutes blocked) creates concentration imbalance; water moves to dilute higher solute concentration; pressure required to stop water movement is osmotic pressure (calculated by van\'t Hoff equation: Π equals n times c times R times T)'
        ],
        officialDefinitions: [
          'Osmosis: is the passive movement of water molecules across a semipermeable membrane from an area of low solute concentration (high water concentration) to an area of high solute concentration (low water concentration). The process continues until equilibrium is reached, where the solute concentration is equal on both sides of the membrane.',
          'Osmol: is the unit used to express the total number of moles of solute particles that contribute to the osmotic pressure of a solution. One osmol is equal to 1 mole of solute particles that can dissociate or remain intact in solution, influencing the movement of water.',
          'Osmolarity: is defined as the concentration of osmotically active particles per liter of solution. It is expressed as osmoles per liter (Osm/L). This measure considers the volume of the solution, which varies with temperature and pressure.',
          'Osmolality: refers to the concentration of osmotically active particles per kilogram of solvent. It is expressed as osmoles per kilogram (Osm/kg). Since it is based on the mass of the solvent, it is not affected by changes in temperature or pressure and is used in clinical settings for accurate osmotic measurements.',
          'Tonicity: describes the relative concentration of solutes dissolved in two solutions separated by a semipermeable membrane. It determines the direction and extent of water movement and its effect on the cell\'s volume.',
          'The reflection coefficient (σ) is a measure of the permeability of a membrane to a solute. It ranges from 0 to 1 and determines how effectively a solute can be retained or blocked by the membrane: σ = 1: The membrane is impermeable to the solute, creating maximum osmotic pressure and causing water to move. σ = 0: The membrane is completely permeable to the solute, allowing free movement without generating osmotic pressure.',
          'Tonicity: influenced by solutes that can cross a semipermeable membrane "ineffective osmoles": e.g. urea and glucose (Membrane) Reflectionskoefficient : 0 < σ < 1 σ = 1: Membrane is fully selective Osmolaity = Tonicity σ = 0: Membrane is fully permeable Osmolaity ≠ Tonicity'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Osmosis is passive movement of water molecules across semipermeable membrane from area of low solute concentration (high water concentration) to high solute concentration (low water concentration) until equilibrium reached.' },
            { type: 'paragraph', content: 'Osmol is unit expressing total number of moles of solute particles contributing to osmotic pressure; 1 osmol equals 1 mole of osmotically active particles.' },
            { type: 'paragraph', content: 'Osmolarity is concentration of osmotically active particles per liter of solution expressed as osmoles per liter; varies with temperature and pressure.' },
            { type: 'paragraph', content: 'Osmolality refers to concentration of osmotically active particles per kilogram of solvent expressed as osmoles per kilogram; not affected by temperature or pressure; used in clinical settings. Blood plasma osmolality is 290 milliosmoles per kilogram H2O.' },
            { type: 'paragraph', content: 'Tonicity describes relative concentration of solutes determining water movement and cell volume effect: hypertonic solution has higher solute concentration outside causing cell shrinkage; isotonic has equal concentration with no net water movement; hypotonic has lower concentration outside causing cell swelling.' },
            { type: 'paragraph', content: 'Reflection coefficient sigma measures membrane permeability to solute ranging from 0 to 1: sigma equals 1 means membrane impermeable creating maximum osmotic pressure; sigma equals 0 means completely permeable with free movement and no osmotic pressure.' },
            { type: 'paragraph', content: 'Osmotic pressure generation: Cell membrane selectively permeable allowing water passage but blocking certain solutes. When solute concentration higher on one side, water moves to dilute that concentration. Osmotic pressure is pressure required to stop net water movement, calculated by van\'t Hoff equation: osmotic pressure equals n times c times R times T.' }
          ],
          raw: 'Osmosis is passive movement of water molecules across semipermeable membrane from area of low solute concentration (high water concentration) to high solute concentration (low water concentration) until equilibrium reached. Osmol is unit expressing total number of moles of solute particles contributing to osmotic pressure; 1 osmol equals 1 mole of osmotically active particles. Osmolarity is concentration of osmotically active particles per liter of solution expressed as osmoles per liter; varies with temperature and pressure. Osmolality refers to concentration of osmotically active particles per kilogram of solvent expressed as osmoles per kilogram; not affected by temperature or pressure; used in clinical settings. >>Blood plasma osmolality is 290 milliosmoles per kilogram H2O.<< Tonicity describes relative concentration of solutes determining water movement and cell volume effect: hypertonic solution has higher solute concentration outside causing cell shrinkage; isotonic has equal concentration with no net water movement; hypotonic has lower concentration outside causing cell swelling. Reflection coefficient sigma measures membrane permeability to solute ranging from 0 to 1: sigma equals 1 means membrane impermeable creating maximum osmotic pressure; sigma equals 0 means completely permeable with free movement and no osmotic pressure. Osmotic pressure generation: Cell membrane selectively permeable allowing water passage but blocking certain solutes. When solute concentration higher on one side, water moves to dilute that concentration. Osmotic pressure is pressure required to stop net water movement, calculated by van\'t Hoff equation: osmotic pressure equals n times c times R times T.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Characterize facilitated diffusion.<< Define the types of the carriers: (uniporter, symporter, antiporter).',
        keyPoints: [
          'Facilitated diffusion: Passive transport of solutes down concentration gradient mediated by specific carrier proteins or channels; no ATP required',
          'Key characteristics: (1) Specificity (carriers bind specific solutes like GLUT for glucose), (2) Saturation (limited carriers means transport plateaus at high concentrations reaching Vmax), (3) Competition (similar molecules compete for same carrier), (4) Faster than simple diffusion for polar molecules',
          'Mechanism: Conformational change in carrier protein (ping-pong mechanism) allows solute to cross membrane; binding sites alternate between membrane sides',
          'Differs from simple diffusion: Requires protein, shows saturation kinetics (Michaelis-Menten), can be inhibited competitively or non-competitively',
          'Uniporter: Transports single substrate (charged or uncharged) across membrane; may use facilitated diffusion down gradient or active transport against gradient',
          'Symporter (cotransporter): Transports multiple substrates in same direction across membrane simultaneously',
          'Antiporter (exchanger): Transports two or more different molecules in opposite directions; one out of cell, one into cell',
          'Examples: GLUT1 glucose transporter in red blood cells; SGLT in kidney proximal tubule (glucose threshold 160-180 mg/dL)'
        ],
        officialDefinitions: [
          'Facilitated diffusion is a type of passive transport in which molecules move across a membrane with the help of specific transport proteins, but without using cellular energy (ATP).',
          'ping-pong mechanism: reversible conformational change, binding sites show up alternately in the two site of the membrane, one or more binding sites, transport to the direction of smaller concentration',
          'Kinetically the transport is similar to the kinetics of enzymatic function: Vmax, saturation, Km (Michaelis-Menten)',
          'Uniporter – a membrane transport protein, transporting a single substrate (may be charged or uncharged) across a cell membrane. It may either use facilitated diffusion (down a concentration gradient), or transport against the concentration gradient via an active transport process.',
          'Symporter – a membrane transport protein, transporting multiple substrates across the cell membrane in the same direction.',
          'Antiporter – a membrane transport protein involved in secondary active transport, of two or more different molecules across the cell membrane; one out of the cell and one into the cell.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Facilitated diffusion is passive transport of solutes across membrane down their concentration gradient mediated by specific carrier proteins or channels. No energy ATP required.<<', critical: true },
            {
              type: 'list',
              intro: '>>Characteristics:<<',
              critical: true,
              items: [
                'Specificity where carriers bind specific solutes, example GLUT transporters for glucose',
                'Saturation where limited number of carriers means transport rate plateaus at high solute concentrations reaching Vmax',
                'Competition where similar molecules compete for same carrier',
                'Faster than simple diffusion for polar molecules'
              ]
            },
            { type: 'paragraph', content: '>>Mechanism: Conformational change in carrier protein called ping-pong mechanism where binding sites show up alternately on two sides of membrane, allowing solute to cross.<<', critical: true },
            { type: 'paragraph', content: '>>Differs from simple diffusion by requiring protein, showing saturation kinetics similar to enzyme Michaelis-Menten kinetics, and can be inhibited.<<', critical: true },
            { type: 'paragraph', content: 'Examples include glucose transport via GLUT carriers and ion movement through channels. Direction determined solely by concentration gradient.' },
            {
              type: 'list',
              intro: 'Three carrier types:',
              items: [
                'Uniporter transports single substrate (charged or uncharged) across membrane; may use facilitated diffusion down gradient or active transport against gradient',
                'Symporter or cotransporter transports multiple substrates in same direction across membrane simultaneously',
                'Antiporter or exchanger transports two or more different molecules in opposite directions across membrane; one out of cell and one into cell'
              ]
            }
          ],
          raw: '>>Facilitated diffusion is passive transport of solutes across membrane down their concentration gradient mediated by specific carrier proteins or channels. No energy ATP required. Characteristics: First, specificity where carriers bind specific solutes, example GLUT transporters for glucose. Second, saturation where limited number of carriers means transport rate plateaus at high solute concentrations reaching Vmax. Third, competition where similar molecules compete for same carrier. Fourth, faster than simple diffusion for polar molecules.<< Mechanism: Conformational change in carrier protein called ping-pong mechanism where binding sites show up alternately on two sides of membrane, allowing solute to cross. Differs from simple diffusion by requiring protein, showing saturation kinetics similar to enzyme Michaelis-Menten kinetics, and can be inhibited. Examples include glucose transport via GLUT carriers and ion movement through channels. Direction determined solely by concentration gradient. Three carrier types: Uniporter transports single substrate (charged or uncharged) across membrane; may use facilitated diffusion down gradient or active transport against gradient. Symporter or cotransporter transports multiple substrates in same direction across membrane simultaneously. Antiporter or exchanger transports two or more different molecules in opposite directions across membrane; one out of cell and one into cell.'
        }
      },
      {
        id: 'lo-7',
        isCritical: false,
        title: 'Define the terms: transport maximum, saturation, competitive and non-competitive inhibition.',
        keyPoints: [
          'Transport maximum (Tm): Maximum rate at which transporter can move substance across membrane; occurs when all carrier proteins fully saturated (working at full capacity)',
          'Clinical example of Tm: Kidney glucose reabsorption has transport maximum; if blood glucose exceeds this (diabetes), glucose spills into urine (glucosuria above 160-180 mg/dL)',
          'Saturation: As transported substance concentration increases, transport rate increases only up to point; beyond this, adding more substrate does not increase rate because all transporters occupied',
          'Saturation kinetics: Key feature of facilitated diffusion and active transport; NOT seen in simple diffusion which shows linear relationship',
          'Competitive inhibition: Another molecule competes with normal substrate for binding to same site on transporter; reduces transport rate of normal substrate',
          'Competitive inhibition characteristics: Can be overcome by increasing concentration of normal substrate; Example: glucose and galactose compete for same intestinal transporter',
          'Non-competitive inhibition: Inhibitor binds to different site (not substrate binding site) on transporter; changes shape or function of transporter, reducing activity',
          'Non-competitive inhibition characteristics: Cannot be overcome by increasing substrate concentration; Example: certain toxins or drugs inhibit ion pumps non-competitively'
        ],
        officialDefinitions: [
          'Transport Maximum (Tm) This is the maximum rate at which a transporter can move a substance across the membrane. It occurs when all carrier proteins are fully saturated (working at full capacity). Example: In the kidneys, glucose reabsorption has a Tm. If blood glucose exceeds this (e.g. in diabetes), glucose spills into the urine.',
          'Saturation Saturation means that as the concentration of the transported substance increases, the rate of transport increases only up to a point. Beyond that, adding more substrate doesn\'t increase transport rate because all transporters are occupied. This is a key feature of facilitated diffusion and active transport, but not simple diffusion.',
          'Competitive Inhibition Occurs when another molecule competes with the normal substrate for binding to the same transporter. This reduces the transport rate of the normal substrate. Can be overcome by increasing the concentration of the normal substrate. Example: Glucose and galactose can compete for the same intestinal transporter.',
          'Non-Competitive Inhibition Inhibitor binds to a different site (not the substrate binding site) on the transporter. This changes the shape or function of the transporter, reducing its activity. Cannot be overcome by increasing substrate concentration. Example: Certain toxins or drugs may inhibit ion pumps non-competitively.',
          'Proximal tube in the kidney, "glukose threshold", SGLT, glucosuria above 160–180 mg/dL (8.9-10 mmol/L) serum glucose concentration'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Transport maximum or Tm is maximum rate at which transporter can move substance across membrane. Occurs when all carrier proteins fully saturated working at full capacity.' },
            { type: 'paragraph', content: 'Example: In kidneys, glucose reabsorption has transport maximum. If blood glucose exceeds this such as in diabetes, glucose spills into urine causing glucosuria above 160 to 180 milligrams per deciliter.' },
            { type: 'paragraph', content: 'Saturation means as concentration of transported substance increases, rate of transport increases only up to a point. Beyond that point, adding more substrate does not increase transport rate because all transporters are occupied. This is key feature of facilitated diffusion and active transport but not simple diffusion.' },
            { type: 'paragraph', content: 'Competitive inhibition occurs when another molecule competes with normal substrate for binding to same site on transporter. This reduces transport rate of normal substrate. Can be overcome by increasing concentration of normal substrate.' },
            { type: 'paragraph', content: 'Example: glucose and galactose can compete for same intestinal transporter.' },
            { type: 'paragraph', content: 'Non-competitive inhibition occurs when inhibitor binds to different site, not the substrate binding site, on transporter. This changes shape or function of transporter, reducing its activity. Cannot be overcome by increasing substrate concentration.' },
            { type: 'paragraph', content: 'Example: certain toxins or drugs may inhibit ion pumps non-competitively.' }
          ],
          raw: 'Transport maximum or Tm is maximum rate at which transporter can move substance across membrane. Occurs when all carrier proteins fully saturated working at full capacity. Example: In kidneys, glucose reabsorption has transport maximum. If blood glucose exceeds this such as in diabetes, glucose spills into urine causing glucosuria above 160 to 180 milligrams per deciliter. Saturation means as concentration of transported substance increases, rate of transport increases only up to a point. Beyond that point, adding more substrate does not increase transport rate because all transporters are occupied. This is key feature of facilitated diffusion and active transport but not simple diffusion. Competitive inhibition occurs when another molecule competes with normal substrate for binding to same site on transporter. This reduces transport rate of normal substrate. Can be overcome by increasing concentration of normal substrate. Example: glucose and galactose can compete for same intestinal transporter. Non-competitive inhibition occurs when inhibitor binds to different site, not the substrate binding site, on transporter. This changes shape or function of transporter, reducing its activity. Cannot be overcome by increasing substrate concentration. Example: certain toxins or drugs may inhibit ion pumps non-competitively.'
        }
      }
    ],
    referenceValues: [
      {
        parameter: 'Blood plasma osmolality',
        value: '290 mosm/kgH2O',
        isCritical: true
      },
      {
        parameter: 'Osmotic pressure',
        value: '660 kPa = 4950 mmHg',
        isCritical: false
      }
    ]
  };

export default topic2;
