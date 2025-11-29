const topic3QuickReview = {
  topicId: 'topic-3',
  topicNumber: 3,
  learningObjectives: {
    'lo-1': {
      title: 'Define primary and secondary active transport. Define transport maximum, saturation, competitive and non-competitive inhibition.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Active Transport Types'
        },
        {
          type: 'comparison',
          content: {
            leftTitle: 'Primary Active Transport',
            rightTitle: 'Secondary Active Transport',
            leftItems: [
              'Direct ATP hydrolysis powers transport',
              'Moves ions/solutes against gradient',
              'Example: Na-K-ATPase (3 Na⁺ out, 2 K⁺ in per ATP)'
            ],
            rightItems: [
              'Uses existing ion gradient (no direct ATP)',
              'Ion gradient drives another solute uphill',
              'Example: Na-glucose cotransporter (SGLT)'
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Transport Maximum (Tm): Maximum transport rate when all carrier proteins are saturated. Saturation: Transport plateaus at high substrate concentration—all carriers occupied.'
        },
        {
          type: 'comparison',
          content: {
            leftTitle: 'Competitive Inhibition',
            rightTitle: 'Non-Competitive Inhibition',
            leftItems: [
              'Inhibitor competes for same binding site',
              'Can be overcome by increasing substrate',
              'Does not change Tm (maximum rate)'
            ],
            rightItems: [
              'Inhibitor binds allosteric site',
              'Cannot be overcome by substrate increase',
              'Reduces Tm (lowers maximum capacity)'
            ]
          }
        }
      ]
    },
    'lo-2': {
      title: 'Describe how energy from ATP hydrolysis is used to transport ions such as Na+, K+, Ca2+ and H+ against their electrochemical differences via examples',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          content: 'ATP hydrolysis directly powers primary active transport by phosphorylating pump proteins, triggering conformational changes that move ions against their electrochemical gradients.'
        },
        {
          type: 'header',
          content: 'Major ATP-Powered Ion Pumps'
        },
        {
          type: 'table',
          content: {
            headers: ['Pump', 'Transport Action', 'Location', 'Function'],
            rows: [
              ['Na-K-ATPase', '3 Na⁺ out, 2 K⁺ in per ATP', 'All cell membranes', 'Maintains gradients for excitability, prevents swelling'],
              ['Ca-ATPase (PMCA)', 'Ca²⁺ out of cell', 'Plasma membrane', 'Maintains low cytoplasmic Ca²⁺ (~10⁻⁷ mM)'],
              ['Ca-ATPase (SERCA)', 'Ca²⁺ into SR/ER', 'SR/ER membrane', 'Muscle relaxation, signal termination'],
              ['H-K-ATPase', 'H⁺ out, K⁺ in', 'Gastric parietal cells', 'Stomach acid secretion (pH 1-2)']
            ]
          }
        },
        {
          type: 'steps',
          content: {
            intro: 'Common Mechanism (P-type ATPases):',
            items: [
              'ATP binds to pump',
              'Pump becomes phosphorylated',
              'Conformational change occurs',
              'Ions are translocated across membrane',
              'Dephosphorylation resets pump to original state'
            ]
          }
        }
      ]
    },
    'lo-3': {
      title: 'Explain how energy from Na+ and K+ electrochemical gradients can drive uphill transport of other solutes (Na+/glucose cotransport; Na+/Ca2+-exchange)',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          content: 'Na-K-ATPase establishes steep Na⁺ gradient: high extracellular (138-151 mM) vs. low intracellular (12 mM). This stored energy drives secondary active transport.'
        },
        {
          type: 'header',
          content: 'Na⁺-Driven Secondary Transporters'
        },
        {
          type: 'comparison',
          content: {
            leftTitle: 'Na-Glucose Cotransporter (SGLT)',
            rightTitle: 'Na-Ca Exchanger (NCX)',
            leftItems: [
              'Type: Symport (same direction)',
              'Na⁺ down gradient → Glucose up gradient',
              'Location: Intestines, kidney proximal tubules',
              'Function: Absorbs glucose from lumen'
            ],
            rightItems: [
              'Type: Antiport (opposite directions)',
              '3 Na⁺ in (down) → 1 Ca²⁺ out (against)',
              'Location: Cardiac & skeletal muscle',
              'Function: Maintains low cytoplasmic Ca²⁺, enables relaxation'
            ]
          }
        },
        {
          type: 'clinical',
          content: 'Both mechanisms indirectly depend on ATP: The primary Na-K pump (ATP-powered) maintains the Na⁺ gradient that drives these secondary transporters. Without functional Na-K-ATPase, secondary transport fails.'
        }
      ]
    },
    'lo-4': {
      title: 'Explain the role and significance of ATP-binding cassette (ABC) transporters via examples',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          content: 'ABC transporters are a superfamily of ATP-powered membrane proteins with two nucleotide-binding domains (ATP-binding cassettes) and two transmembrane domains.'
        },
        {
          type: 'steps',
          content: {
            intro: 'Mechanism of ABC Transporters:',
            items: [
              'ATP binds to nucleotide-binding domains',
              'Conformational change in transmembrane domains',
              'Substrate is translocated across membrane',
              'ATP is hydrolyzed to ADP + Pi',
              'Transporter resets to original conformation'
            ]
          }
        },
        {
          type: 'table',
          content: {
            headers: ['ABC Transporter', 'Substrate', 'Function', 'Clinical Significance'],
            rows: [
              ['Bile transporters', 'Bile salts, bilirubin', 'Hepatocyte bile secretion', 'Essential for digestion, bilirubin elimination'],
              ['MDR1/P-glycoprotein', 'Chemotherapy drugs', 'Drug efflux from cells', 'Multidrug resistance in cancer'],
              ['CFTR', 'Cl⁻ ions (channel)', 'Chloride secretion', 'Mutations → Cystic fibrosis (thick mucus)'],
              ['Lipid transporters', 'Cholesterol, phospholipids', 'Lipid trafficking', 'Cellular membrane homeostasis']
            ]
          }
        },
        {
          type: 'clinical',
          content: 'CFTR is unique: Unlike typical ABC transporters, it functions as a regulated chloride channel. Mutations (e.g., ΔF508) cause cystic fibrosis by impairing Cl⁻ and water secretion, leading to thick mucus in lungs and pancreas.'
        },
        {
          type: 'keypoint',
          content: 'ABC transporters are critical for detoxification, drug elimination, bile secretion, and lipid transport. Cancer cells overexpress them to pump out chemotherapy drugs.'
        }
      ]
    },
    'lo-5': {
      title: 'Define vesicular transport: endocytosis, exocytosis, transcytosis. Give examples for specific and aspecific vesicular transport processes.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Three Types of Vesicular Transport'
        },
        {
          type: 'list',
          content: {
            intro: 'Endocytosis (Into the cell): Plasma membrane invaginates, forming vesicle that brings material into cell. Requires ATP.',
            items: [
              'Phagocytosis ("cell eating"): Large particles (e.g., bacteria engulfed by macrophages)',
              'Pinocytosis ("cell drinking"): Fluid and small molecules taken in nonselectively',
              'Receptor-mediated endocytosis: Specific uptake via receptors (e.g., LDL via clathrin-coated pits)'
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Exocytosis (Out of the cell): Intracellular vesicle fuses with plasma membrane, releasing contents to extracellular space. Requires ATP and Ca²⁺. Examples: neurotransmitter release, hormone secretion, enzyme secretion (pancreas).'
        },
        {
          type: 'keypoint',
          content: 'Transcytosis (Across the cell): Material transported completely through cell by combining endocytosis → intracellular transport → exocytosis on opposite side. Example: IgA antibodies transported across intestinal epithelium.'
        },
        {
          type: 'header',
          content: 'Specific vs. Aspecific Transport'
        },
        {
          type: 'comparison',
          content: {
            leftTitle: 'Specific (Receptor-Mediated)',
            rightTitle: 'Aspecific (Non-Selective)',
            leftItems: [
              'Uses receptors for selectivity',
              'Example: LDL uptake via LDL receptors (clathrin-coated vesicles)',
              'Example: IgA transcytosis via specific receptors',
              'Example: Neurotransmitter release triggered by Ca²⁺ at specific sites'
            ],
            rightItems: [
              'No receptor involvement',
              'Example: Fluid-phase pinocytosis (nonselective fluid uptake)',
              'Example: Macrophage phagocytosis of bacteria (general pathogen signals)',
              'Example: Bulk exocytosis of pancreatic enzymes'
            ]
          }
        },
        {
          type: 'clinical',
          content: 'All vesicular transport requires ATP. Disruption of vesicular transport impairs immune function (phagocytosis), nutrient uptake (receptor-mediated endocytosis), and signaling (neurotransmitter exocytosis).'
        }
      ]
    }
  }
};

export default topic3QuickReview;
