const topic12QuickReview = {
  topicId: 'topic-12',
  topicNumber: 12,
  learningObjectives: {
    'lo-1': {
      title: 'Give the normal value of leukocyte count, and the sites where white blood cells are produced.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'Normal leukocyte count: 4,000–10,000 cells/μL',
          critical: false
        },
        {
          type: 'list',
          intro: 'White blood cell production sites:',
          items: [
            'Bone marrow: Primary site for leukopoiesis (neutrophils, eosinophils, basophils, monocytes, lymphocytes)',
            'Thymus: T-lymphocyte maturation',
            'Lymph nodes and spleen: Secondary lymphoid organs for lymphocyte development and proliferation'
          ],
          critical: false
        },
        {
          type: 'paragraph',
          text: 'All granulocytes and monocytes are produced exclusively in bone marrow. Hematopoietic stem cells differentiate into all WBC types.',
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Describe the differential leucocyte count, starting with the method of staining. Describe the morphological features of white blood cell types and enlist the reference values of the differential white blood cell count (%).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Pappenheim Staining Method',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Staining procedure:',
          items: [
            'Apply May-Grunwald solution (methyl blue + eosin in methanol) for 3 minutes',
            'Wash with equal volume neutral distilled water',
            'Apply diluted Giemsa solution (1:20) for 15 minutes',
            'Wash thoroughly with distilled water',
            'Count 200 WBCs under microscope to determine differential percentages'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'WBC Morphological Features',
          critical: true
        },
        {
          type: 'table',
          headers: ['Cell Type', 'Nucleus', 'Cytoplasm', 'Diameter', 'Granules'],
          rows: [
            ['Neutrophils', 'Multi-lobed', 'Pink', '10-14 μm', 'Fine violet (collagenase, lysozyme, myeloperoxidase)'],
            ['Lymphocytes', 'Round, chromatin-rich', 'Narrow pale blue', '7-8 μm', 'None visible'],
            ['Monocytes', 'Kidney-shaped', 'Pale blue-grey', '15-20 μm (largest)', 'None visible (lysosomes inside)'],
            ['Eosinophils', 'Bi-lobed', 'Pink', '10-12 μm', 'Large red-orange (ribonuclease, peroxidase)'],
            ['Basophils', 'U or J-shaped', 'Pink', '12-15 μm', 'Large dark blue (histamine, heparin)']
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Reference Values: Neutrophils 60-80%, Lymphocytes 20-30%, Monocytes 2-6%, Eosinophils 1-5%, Basophils 0-1%',
          critical: true
        }
      ]
    },
    'lo-3': {
      title: 'Describe the main functions of white blood cell types',
      isCritical: false,
      blocks: [
        {
          type: 'list',
          intro: 'Main functions of WBC types:',
          items: [
            'Neutrophils: Primary bacterial/fungal responders via phagocytosis, enzyme release (myeloperoxidase), rapid site accumulation (lifespan 8-10h circulation)',
            'Lymphocytes: T-cells (cell-mediated immunity), B-cells (antibody production), NK cells (kill tumors/infected cells without sensitization)',
            'Monocytes: Differentiate into macrophages/dendritic cells, phagocytosis, antigen presentation (MHC II), cytokine secretion (lifespan 24-48h)',
            'Eosinophils: Combat parasites with toxic enzymes, modulate allergic responses (lifespan min. 6 days)',
            'Basophils: Release histamine (vasodilation) and heparin (anticoagulation), mediate allergic/inflammatory responses (lifespan 3-10d)'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'T-helper cells coordinate immune responses via cytokines. Cytotoxic T-cells kill infected/cancer cells. Memory cells provide long-term immunity.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe phagocytosis: the roles of the monocyte/macrophage system and the neutrophil granulocytes.',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Phagocytosis is non-specific innate defense where phagocytes (neutrophils, macrophages, dendritic cells) engulf and digest pathogens using pattern recognition receptors (PRRs) or opsonization.',
          critical: false
        },
        {
          type: 'header',
          text: 'Monocyte/Macrophage System',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Macrophage phagocytosis process:',
          items: [
            'Recognition via PRRs (Toll-like receptors) detecting PAMPs or opsonins (antibodies, C3b)',
            'Engulfment forming phagosome',
            'Fusion with lysosome → phagolysosome (hydrolytic enzymes, acidic pH)',
            'Pathogen degradation',
            'Antigen presentation via MHC class II to helper T-cells',
            'Cytokine secretion recruiting immune cells'
          ],
          critical: false
        },
        {
          type: 'paragraph',
          text: 'Monocytes circulate 24-48h, then migrate to tissues becoming macrophages (lifespan: months-years). Tissue types: alveolar (lung), Kupffer (liver), Langerhans (skin), microglia (CNS), osteoclasts (bone).',
          critical: false
        },
        {
          type: 'header',
          text: 'Neutrophil Granulocytes',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Extravasation (neutrophil migration to infection site):',
          items: [
            'Rolling: Slow down along endothelial cells',
            'Tight binding: Adhere via integrins and selectins',
            'Diapedesis: Pass through endothelial layer',
            'Migration: Follow chemotactic signals to infection'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Neutrophil killing mechanisms:',
          items: [
            'Degranulation: Release defensins and myeloperoxidase',
            'Respiratory burst: NADPH oxidase produces reactive oxygen species (ROS)',
            'Neutrophil extracellular traps (NETs): Trap pathogens with chromatin fibers',
            'Phagocytosis: Lysosomal digestion in phagolysosomes'
          ],
          critical: false
        }
      ]
    },
    'lo-5': {
      title: 'Describe the types of lymphocytes and their major functions. Define the concept of antigen and delineate the process of antigen presentation. Describe the role and structure of immunoglobulins and their subtypes and functions. Expound the main elements and the functions of the complement system.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Lymphocyte Types',
          critical: true
        },
        {
          type: 'list',
          intro: 'Three major lymphocyte types:',
          items: [
            'T-lymphocytes (70-90%): Differentiate in thymus, cell-mediated immunity. Helper T (CD4+): coordinate via cytokines. Cytotoxic T (CD8+): kill infected/cancer cells. Regulatory T: maintain tolerance. Memory T: long-term immunity.',
            'B-lymphocytes (5-15%): Differentiate in bone marrow, humoral immunity. Transform into plasma cells producing antibodies.',
            'NK cells (1-3%): Innate immunity, kill tumors/infected cells via perforin and granzymes without prior sensitization.'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Antigen & Presentation',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Antigen: Any substance recognized by immune system eliciting response (typically proteins/polysaccharides on pathogen surfaces). Epitope: specific recognition site on antigen.',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Antigen presentation process:',
          items: [
            'APCs (dendritic cells, macrophages, B-cells) ingest pathogens via phagocytosis/endocytosis',
            'Pathogen broken into peptide fragments inside APC',
            'Peptides associate with MHC molecules: MHC I (endogenous antigens → CD8+ T-cells), MHC II (exogenous antigens → CD4+ T-cells)',
            'Peptide-MHC complex displayed on cell surface',
            'T-cell receptor (TCR) recognizes complex → immunological synapse → activation'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Immunoglobulin Structure',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Y-shaped glycoproteins: 2 heavy chains + 2 light chains (disulfide bonds). Fab region: variable domains (CDRs) for antigen binding. Fc region: constant region determining class and effector functions (receptor binding, complement activation). Hinge region: flexible segment allowing Fab movement.',
          critical: true
        },
        {
          type: 'table',
          headers: ['Type', 'Structure', 'Function', '%/Location'],
          rows: [
            ['IgG', 'Monomer', 'Long-term immunity, crosses placenta, complement activation, opsonization, ADCC', '75-80% serum'],
            ['IgA', 'Dimer (J-chain + secretory component)', 'Mucosal immunity in saliva, tears, milk, GI/respiratory secretions', 'Most abundant in body'],
            ['IgM', 'Pentamer (J-chain)', 'First antibody in acute response, agglutination, complement activation', 'Largest antibody'],
            ['IgE', 'Monomer', 'Binds mast cells/basophils, allergic reactions, parasitic infections', 'Degranulation trigger'],
            ['IgD', 'Monomer', 'B-cell surface receptor, aids activation/maturation', 'Naive B-cells']
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Complement System',
          critical: true
        },
        {
          type: 'paragraph',
          text: '~30 plasma proteins in cascade-like enzymatic reactions. Part of innate immunity, modulates adaptive response.',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Activation Pathways',
            items: [
              'Classical: Antibody-antigen complexes (IgG, IgM) → C1 binds Fc region',
              'Lectin: Mannose-binding lectin (MBL) on pathogen surface → MASPs',
              'Alternative: Direct pathogen binding (C3b) without antibodies',
              '→ All converge at C3 cleavage: C3a (anaphylatoxin) + C3b (opsonin)'
            ]
          },
          right: {
            title: 'Main Functions',
            items: [
              'Opsonization: C3b marks pathogens → enhanced phagocytosis',
              'Chemotaxis/Inflammation: C3a, C5a recruit leukocytes, stimulate mediator release',
              'Lysis: C5b-C9 form MAC (membrane attack complex) → pores → osmotic lysis',
              'Immune complex clearance: C3b facilitates transport to liver/spleen'
            ]
          },
          critical: true
        },
        {
          type: 'keypoint',
          text: 'MAC formation: C5b→C6→C7→C8→C9 creates membrane pores in Gram-negative bacteria causing cell death.',
          critical: true
        }
      ]
    }
  }
};

export default topic12QuickReview;
