const topic2QuickReview = {
  topicId: 'topic-2',
  topicNumber: 2,
  learningObjectives: {
    'lo-1': {
      title: 'Describe and make a schematic drawing of the molecular structure of the plasma membrane (fluid mosaic model). Explain how the distribution of phospholipids and proteins influences the membrane permeability of ions, hydrophylic and hydrophobic compounds. Describe lateral diffusion in the membrane.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Fluid Mosaic Model Structure'
        },
        {
          type: 'paragraph',
          content: 'The plasma membrane is a phospholipid bilayer with hydrophilic (water-attracting) heads facing aqueous environments and hydrophobic (water-repelling) tails forming the nonpolar core. Proteins, cholesterol, and carbohydrates are embedded or attached, creating a dynamic, selectively permeable structure.'
        },
        {
          type: 'keypoint',
          content: 'Integral (transmembrane) proteins span the bilayer as channels, carriers, and receptors. Peripheral proteins attach to surfaces for signaling and structural support.'
        },
        {
          type: 'comparison',
          title: 'Membrane Permeability Patterns',
          items: [
            {
              label: 'HIGH Permeability',
              content: 'Hydrophobic compounds: O2, CO2, steroid hormones, small nonpolar molecules pass through lipid core rapidly'
            },
            {
              label: 'LOW Permeability',
              content: 'Ions (Na+, K+, Ca2+, Cl-) and hydrophilic compounds (glucose, amino acids) require protein channels or carriers'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Lateral diffusion: Sideways movement of phospholipids and proteins within the same membrane layer driven by thermal (Brownian) motion. No ATP required. Enables rapid membrane reorganization for signal transduction, repair, and immune recognition.'
        },
        {
          type: 'clinical',
          content: 'Cholesterol regulates membrane fluidity: at higher temperatures, it attenuates fluidity by immobilizing fatty acid chains; at lower temperatures, it increases fluidity by inhibiting fatty acid interactions.'
        }
      ]
    },
    'lo-2': {
      title: 'Contrast the following units used to describe concentration: mM, mEq/l, mosm/kgH2O.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Three Concentration Units'
        },
        {
          type: 'comparison',
          title: 'Unit Comparison',
          items: [
            {
              label: 'mM (millimolar)',
              content: 'Counts molecules: moles of solute per liter of solution. Example: 1 mM glucose = 1 mmol/L'
            },
            {
              label: 'mEq/L (milliequivalents/L)',
              content: 'Counts charges: ion concentration based on electrical charge. Formula: mEq/L = mM × valence. Example: 1 mM Ca2+ = 2 mEq/L (valence 2); 1 mM Na+ = 1 mEq/L (valence 1)'
            },
            {
              label: 'mosm/kgH2O',
              content: 'Counts osmotic particles: osmotically active particles per kilogram solvent. Example: 1 mM NaCl = 2 mosm/kgH2O (dissociates); 1 mM glucose = 1 mosm/kgH2O (intact)'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Key difference: mM counts molecules, mEq/L counts charges, mosm counts osmotic particles.'
        },
        {
          type: 'clinical',
          content: 'Clinical significance: mosm/kgH2O predicts water movement (osmosis); mEq/L accounts for ionic charge in electrolyte balance; mM measures molecular concentration for dosing.'
        }
      ]
    },
    'lo-3': {
      title: 'Define simple diffusion and explain how changes in the driving forces (chemical and electrical gradient, in steady state situation) and membrane properties will influence the transport rate. State Fick\'s law of diffusion.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Simple Diffusion'
        },
        {
          type: 'paragraph',
          content: 'Passive movement of molecules through membrane from high to low concentration without carrier proteins, driven solely by thermal kinetic energy.'
        },
        {
          type: 'list',
          title: 'Driving Forces',
          items: [
            'Chemical gradient: Concentration difference. Larger difference = faster rate.',
            'Electrical gradient: Charge difference. Ions move toward opposite charge.',
            'Electrochemical gradient: Combines both effects, determines net movement for charged molecules (Na+, K+).',
            'Steady state: Driving forces remain constant, allowing continuous transport.'
          ]
        },
        {
          type: 'list',
          title: 'Membrane Properties Affecting Rate',
          items: [
            'Permeability: Depends on lipid solubility (lipid-soluble molecules like O2, CO2 pass easily)',
            'Pore size and number: More/larger pores = faster passage',
            'Membrane thickness: Thicker = slower (more resistance)',
            'Temperature: Higher temperature = increased kinetic energy'
          ]
        },
        {
          type: 'formula',
          title: 'Fick\'s Law of Diffusion',
          content: 'Vx = (D × A × ΔP) / ΔX',
          variables: [
            'Vx = rate of diffusion',
            'D = diffusion coefficient (gas-specific: molecular weight, solubility)',
            'A = surface area',
            'ΔP = partial pressure difference (NOT concentration)',
            'ΔX = membrane thickness'
          ]
        },
        {
          type: 'keypoint',
          content: 'Rate is directly proportional to driving force (ΔP), diffusion coefficient (D), and surface area (A). Inversely proportional to membrane thickness (ΔX).'
        },
        {
          type: 'clinical',
          content: 'CO2 diffusion coefficient is 20× higher than O2, so CO2 diffuses 20× faster for a given partial pressure difference.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the role of water channels (aquaporins) in the water permeabiliy of the cell membrane.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Aquaporins - Water Channel Proteins'
        },
        {
          type: 'paragraph',
          content: 'Integral membrane channel proteins that facilitate rapid water transport across cell membranes. Tetrameric structure where each monomer forms a water-selective pore (~3 Angstrom diameter).'
        },
        {
          type: 'keypoint',
          content: 'Function: Dramatically increase membrane water permeability, allowing up to 3 billion water molecules per second per channel - much faster than simple diffusion through lipid bilayer.'
        },
        {
          type: 'list',
          title: 'Key Features',
          items: [
            'Selectivity: Triple filter (size, electrostatic, positively charged dipoles) excludes ions (including H+) and other solutes',
            'Mechanism: Passive transport - water moves down osmotic gradient without ATP',
            'Distribution: High expression in kidney collecting duct, red blood cells, brain, lungs'
          ]
        },
        {
          type: 'table',
          title: 'Major Aquaporin Types',
          headers: ['Type', 'Location', 'Regulation'],
          rows: [
            ['AQP1', 'Red blood cells', 'Constitutive (always present)'],
            ['AQP2', 'Kidney collecting duct', 'ADH/vasopressin-regulated translocation'],
            ['AQP3-8', 'Various tissues', 'Tissue-specific regulation']
          ]
        },
        {
          type: 'clinical',
          content: 'Regulation example: Antidiuretic hormone (ADH/vasopressin) regulates AQP2 insertion into kidney collecting duct membrane to control water reabsorption and urine concentration.'
        }
      ]
    },
    'lo-5': {
      title: 'Define: osmosis, osmol, osmolarity, osmolality and tonicity, and reflection coefficient. Explain how the different permeability of the cell membrane to water and solutes will generate an osmotic pressure.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Osmotic Concepts'
        },
        {
          type: 'comparison',
          title: 'Core Definitions',
          items: [
            {
              label: 'Osmosis',
              content: 'Passive water movement across semipermeable membrane from low solute (high water) to high solute (low water) concentration'
            },
            {
              label: 'Osmol',
              content: 'Unit expressing total moles of osmotically active particles; 1 osmol = 1 mole of osmotic particles'
            },
            {
              label: 'Osmolarity',
              content: 'Osmotic particles per liter of solution (osm/L); varies with temperature/pressure'
            },
            {
              label: 'Osmolality',
              content: 'Osmotic particles per kilogram of solvent (osm/kg); independent of temperature/pressure; used clinically'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Blood plasma osmolality: 290 mosm/kgH2O (reference value)'
        },
        {
          type: 'comparison',
          title: 'Tonicity - Effect on Cells',
          items: [
            {
              label: 'Hypertonic',
              content: 'Higher solute outside → water leaves cell → cell shrinks'
            },
            {
              label: 'Isotonic',
              content: 'Equal solute concentration → no net water movement → cell unchanged'
            },
            {
              label: 'Hypotonic',
              content: 'Lower solute outside → water enters cell → cell swells'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Reflection coefficient (σ): Measures membrane permeability to solute (0 to 1). σ = 1: impermeable (max osmotic pressure); σ = 0: freely permeable (no osmotic pressure).'
        },
        {
          type: 'paragraph',
          content: 'Osmotic pressure generation: Selective membrane permeability (water passes, solutes blocked) creates concentration imbalance. Water moves to dilute higher solute concentration. Osmotic pressure is the pressure required to stop net water movement, calculated by van\'t Hoff equation: Π = n × c × R × T.'
        }
      ]
    },
    'lo-6': {
      title: 'Characterize facilitated diffusion. Define the types of the carriers: (uniporter, symporter, antiporter).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Facilitated Diffusion'
        },
        {
          type: 'paragraph',
          content: 'Passive transport of solutes across membrane down their concentration gradient mediated by specific carrier proteins or channels. No energy (ATP) required.'
        },
        {
          type: 'list',
          title: 'Key Characteristics',
          items: [
            'Specificity: Carriers bind specific solutes (e.g., GLUT transporters for glucose)',
            'Saturation: Limited carriers → transport rate plateaus at high concentrations (Vmax)',
            'Competition: Similar molecules compete for same carrier',
            'Faster than simple diffusion for polar molecules'
          ]
        },
        {
          type: 'keypoint',
          content: 'Mechanism: Conformational change in carrier protein (ping-pong mechanism) where binding sites alternately appear on opposite membrane sides, allowing solute to cross.'
        },
        {
          type: 'keypoint',
          content: 'Differs from simple diffusion: Requires protein, shows saturation kinetics (Michaelis-Menten), can be inhibited competitively or non-competitively.'
        },
        {
          type: 'comparison',
          title: 'Carrier Types',
          items: [
            {
              label: 'Uniporter',
              content: 'Transports single substrate (charged or uncharged) across membrane. May use facilitated diffusion (down gradient) or active transport (against gradient).'
            },
            {
              label: 'Symporter (Cotransporter)',
              content: 'Transports multiple substrates in SAME direction across membrane simultaneously.'
            },
            {
              label: 'Antiporter (Exchanger)',
              content: 'Transports two or more molecules in OPPOSITE directions: one out, one in.'
            }
          ]
        }
      ]
    },
    'lo-7': {
      title: 'Define the terms: transport maximum, saturation, competitive and non-competitive inhibition.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Carrier Transport Kinetics'
        },
        {
          type: 'comparison',
          title: 'Core Concepts',
          items: [
            {
              label: 'Transport Maximum (Tm)',
              content: 'Maximum rate at which transporter can move substance across membrane. Occurs when all carrier proteins are fully saturated (working at full capacity).'
            },
            {
              label: 'Saturation',
              content: 'As substrate concentration increases, transport rate increases only up to a point. Beyond that, adding more substrate doesn\'t increase rate because all transporters are occupied. Key feature of facilitated diffusion and active transport, NOT simple diffusion.'
            }
          ]
        },
        {
          type: 'clinical',
          content: 'Kidney glucose reabsorption has a Tm. If blood glucose exceeds this (e.g., diabetes), glucose spills into urine (glucosuria above 160-180 mg/dL). This is mediated by SGLT transporters in proximal tubule.'
        },
        {
          type: 'comparison',
          title: 'Inhibition Types',
          items: [
            {
              label: 'Competitive Inhibition',
              content: 'Another molecule competes with normal substrate for binding to the SAME site on transporter. Reduces transport rate. CAN be overcome by increasing substrate concentration. Example: glucose and galactose compete for same intestinal transporter.'
            },
            {
              label: 'Non-Competitive Inhibition',
              content: 'Inhibitor binds to DIFFERENT site (not substrate binding site) on transporter. Changes shape/function, reducing activity. CANNOT be overcome by increasing substrate concentration. Example: toxins or drugs inhibiting ion pumps.'
            }
          ]
        }
      ]
    }
  }
};

export default topic2QuickReview;
