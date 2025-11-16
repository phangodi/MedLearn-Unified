const topic12 = {
  id: 'topic-12',
  number: 12,
  mcqs: ['mcq-2'],
  title: 'The physiology of white blood cell',
  subtitle: 'White blood cells are the mobile defense units of the immune system, including granulocytes and agranulocytes that protect against infection through phagocytosis, antibody production, and immune responses.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: false,
      title: 'Give the normal value of leukocyte count, and the sites where white blood cells are produced.',
      keyPoints: [
        'Normal leukocyte count: 4000-10000 cells per microliter',
        'Bone marrow: Primary site of leukopoiesis where hematopoietic stem cells differentiate into neutrophils, eosinophils, basophils, monocytes, and lymphocytes',
        'Thymus: Site of T-lymphocyte maturation',
        'Lymph nodes and spleen: Secondary lymphoid organs where lymphocytes further develop and proliferate in response to antigens',
        'All granulocytes and monocytes produced exclusively in bone marrow'
      ],
      officialDefinitions: [
        'Normal Value of Leukocyte Count: The normal reference range for leukocytes is 4,000–10,000 cells/μL.',
        'Bone Marrow: The primary site for the production of white blood cells (leukopoiesis). Hematopoietic stem cells in the bone marrow differentiate into various types of white blood cells, including neutrophils, eosinophils, basophils, monocytes, and lymphocytes.',
        'Lymphoid Organs: Thymus: Site of T-lymphocyte maturation. Lymph Nodes and Spleen: Sites where white blood cells, particularly lymphocytes, further develop and proliferate in response to antigens.'
      ],
      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The normal leukocyte count is four thousand to ten thousand cells per microliter.' },
          {
            type: 'list',
            intro: 'White blood cells are produced in several sites:',
            items: [
              'Bone marrow is the primary site where hematopoietic stem cells differentiate into all types including neutrophils, eosinophils, basophils, monocytes, and lymphocytes.',
              'Thymus is the site for T-lymphocyte maturation.',
              'Lymph nodes and spleen serve as secondary lymphoid organs where lymphocytes further develop and proliferate in response to antigens.'
            ]
          }
        ],
        raw: 'The normal leukocyte count is four thousand to ten thousand cells per microliter. White blood cells are produced primarily in the bone marrow where hematopoietic stem cells differentiate into all types including neutrophils, eosinophils, basophils, monocytes, and lymphocytes. The thymus is the site for T-lymphocyte maturation. Lymph nodes and spleen serve as secondary lymphoid organs where lymphocytes further develop and proliferate in response to antigens.'
      },
      audioUrl: '/Audio/Topic-012/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: true,
      title: '>>Describe the differential leucocyte count, starting with the method of staining. Describe the morphological features of white blood cell types and enlist the reference values of the differential white blood cell count (%).<<',
      keyPoints: [
        'Pappenheim staining method: Combines May-Grunwald and Giemsa solutions for differential leukocyte count',
        'Procedure: Apply May-Grunwald solution (methyl blue and eosin in methanol) for 3 minutes, wash with neutral distilled water, then apply diluted Giemsa solution (1:20) for 15 minutes',
        'Count 200 WBCs under microscope to determine differential percentages',
        'Neutrophils (60-80%): Segmented multi-lobed nucleus, diameter 10-14 micrometers, pink cytoplasm with fine violet granules containing collagenase, phospholipase, lysozyme, and myeloperoxidase',
        'Lymphocytes (20-30%): Large chromatin-rich round nucleus with narrow pale blue cytoplasmic border, weeks to years lifespan, includes T-cells, B-cells, and NK cells',
        'Monocytes (2-6%): Largest WBC at 15-20 micrometers, kidney-shaped nucleus, pale blue-grey cytoplasm with lysosomes and phagosomes, precursors to macrophages',
        'Eosinophils (1-5%): Bi-lobed nucleus, diameter 10-12 micrometers, large red-orange granules containing ribonuclease, phospholipase, peroxidase, and neurotoxins',
        'Basophils (0-1%): U or J-shaped segmented nucleus, diameter 12-15 micrometers, large dark blue granules containing histamine, heparin, and proteases that may obscure nucleus'
      ],
      officialDefinitions: [
        'Pappenheim\'s Staining Method: The method of staining in differential leukocyte counts is essential for identifying and distinguishing between different types of white blood cells. The Pappenheim staining method combines the May-Grunwald and Giemsa staining solutions to provide a detailed visualization of WBC morphology. A cell can be identified by evaluating its size, the nucleus\'s shape, and the cytoplasmic granule staining (if present).',
        'May-Grunwald Solution: Composed of concentrated methyl blue and eosin dissolved in methanol and glycerin. The dried blood smear is covered with the May-Grunwald solution, which fixes and strengthens the cells.',
        'Neutral Distilled Water: After applying the May-Grunwald solution for 3 minutes, the smear is washed with neutral distilled water of equal volume, allowing eosin to work effectively when diluted.',
        'Giemsa Solution: After the May-Grunwald solution and washing, a freshly diluted Giemsa solution (1 ml Giemsa solution mixed with 20 ml distilled water) is added to the smear. This solution stains the smear for 15 minutes, enhancing the visualization of cell structures.',
        'Final Steps: After staining with the Giemsa solution, the slide is thoroughly washed with distilled water to remove excess dye. The smear is examined under a microscope, where 200 WBCs are typically identified and counted to determine their differential percentages.',
        'Neutrophils (60-80%): Nucleus: Horseshoe, rod-shaped, or segmented (multi-lobed). Cytoplasm: Pink with irregularly distributed fine red or violet granules. Diameter: 10-12 µm. Lifespan: 8-10 hours in circulation, ~ 3 days in tissues. In specific granules: collagenase, phospholipase, lysozyme, phagocytic enzymes. In azurophilic granules: myeloperoxidase, lysosomal enzymes. Phagocytes (mostly of purulent bacteria and fungi). Increased number of early forms (S, J) is an indicator of acute inflammation and ongoing infection.',
        'Eosinophils (1-5%): Nucleus: Bi-lobed, blue-violet. Cytoplasm: Pink with large, irregularly distributed red-orange granules. Diameter: 10-12 µm. Lifespan: min. 6 days (only few hours in circulation). In granules: ribonucleases, phospholipases, peroxidase, proteases and neurotoxins (attack worm\'s nervous system). Type: proinflammatory cells (produce cytokines and lipid mediators). Function: defense against viral infections and parasites.',
        'Basophils (0-1%): Nucleus: segmented, U- or J-shaped. Cytoplasm: Pink with large dark blue or purple granules that obscure the nucleus. Diameter: 12-15 µm. Lifespan: 3-10 days. In large granules: histamine, heparin, proteases. Function: participate in inflammatory reactions (allergic, anaphylactic). Inhibit rapid blood clotting (heparin). Promote vasodilation and vascular permeability (histamine → NOS → NO). Induce bronchoconstriction (via H1 receptors). Produce proinflammatory cytokines and lipid mediators. Cell surface: IgE receptor.',
        'Monocytes (2-6%): Nucleus: Large, bean-shaped or lobular, purple/violet (kidney-shaped, reniform). Cytoplasm: Pale blue-grey without visible granules. Diameter: 15-20 µm (the biggest WBC type). Lifespan: 24-48 hours in circulation. Lysosomes and phagosomes in the cytoplasma. Entering the tissues they are transformed into macrophages (lifespan: months-years). Function: defense against bacterial infections, phagocytosis of dead or aged cells, antigen presentation. Precursors of the Mononuclear Phagocyte System.',
        'Lymphocytes (20-30%): Nucleus: Large, chromatin-rich, round with a narrow pale-blue cytoplasmic border (large, non-lobed, eccentric). Diameter: 7-8 µm. Lifespan: weeks-years (weeks to months). Function: cells of adaptive immunity.',
        'T-lymphocytes (70-90% of lymphocytes): Differentiate in the red bone marrow and then in the thymus (T). Become immunocompetent in the thymus (T). Naive cells from the thymus migrate to the secondary lymphoid organs via blood and lymph circulation (activation). Responsible for adaptive cell-mediated immune responses (adaptive cellular immune response). T helper, T killer, T regulator, T memory.',
        'B-lymphocytes (5-15% of lymphocytes): Differentiate in the red bone marrow (equivalent to Bursa Fabricius of birds). Become immunocompetent in the bone marrow (Bursa equivalent). Naive cells from the red bone marrow migrate to the secondary lymphoid organs via blood and lymph circulation (activation). Differentiate into plasma cells in the lymphoid organs. Responsible for adaptive humoral immune responses and immunoglobulin production (adaptive humoral immune response). Immunoglobulin (γ) production (plasma cells).',
        'Natural Killer (NK) cells (1-3% of lymphocytes): Differentiate in the thymus. Circulating sentinels. Circulate between blood, lymphatic system, and tissues. Serve as a first line of defense. Kill tumor cells and infected own cells by "cell-cell contact" (perforin, granzyme). Kill virus-infected and tumor cells (via perforin and granzymes). Cytokine and chemokine production (activate dendritic cells). Produce cytokines and chemokines to mediate inflammation and activate dendritic cells. Cytotoxic function is similar to T killer cells (but their response is immediate). Effector cells of antibody-dependent cell-mediated cytotoxicity (adaptive immune response): antigen-antibody complex binds to the NK cell\'s Fc binding fragment to activate its cytotoxic function (lysis).',
        'Reference Values of Differential WBC Count (%): Neutrophils: 60-80%. Lymphocytes: 20-30%. Monocytes: 2-6%. Eosinophils: 1-5%. Basophils: 0-1%.',
        'Differences Between Granulocytes and Agranulocytes: Granulocytes contain visible granules in their cytoplasm and have lobed nuclei. They are involved in immediate responses to infection and inflammation. Agranulocytes lack visible cytoplasmic granules and typically have non-lobed nuclei. They play roles in long-term immunity, phagocytosis, and antigen presentation.'
      ],
      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>The differential leucocyte count uses Pappenheim staining combining May-Grunwald and Giemsa solutions.<<', critical: true },
          {
            type: 'steps',
            intro: '>>Staining procedure:<<',
            items: [
              'May-Grunwald solution composed of methyl blue and eosin in methanol is applied for three minutes.',
              'The smear is washed with equal volume neutral distilled water.',
              'Freshly diluted Giemsa solution at one to twenty ratio is applied for fifteen minutes.',
              'The slide is thoroughly washed with distilled water.',
              'The smear is examined under microscope counting two hundred white blood cells to determine differential percentages.'
            ]
          },
          {
            type: 'list',
            intro: '>>Morphological features of white blood cell types:<<',
            critical: true,
            items: [
              'Neutrophils sixty to eighty percent have segmented multi-lobed nucleus, diameter ten to fourteen micrometers, pink cytoplasm with fine violet granules containing collagenase, phospholipase, lysozyme, and myeloperoxidase.',
              'Lymphocytes twenty to thirty percent have large chromatin-rich round nucleus with narrow pale blue cytoplasmic border.',
              'Monocytes two to six percent are the largest at fifteen to twenty micrometers with kidney-shaped nucleus and pale blue-grey cytoplasm.',
              'Eosinophils one to five percent have bi-lobed nucleus with large red-orange granules containing ribonuclease, phospholipase, peroxidase, and neurotoxins.',
              'Basophils zero to one percent have U or J-shaped nucleus with large dark blue granules containing histamine, heparin, and proteases that may obscure the nucleus.'
            ]
          },
          {
            type: 'list',
            intro: '>>Reference values of differential white blood cell count:<<',
            critical: true,
            items: [
              'Neutrophils: sixty to eighty percent',
              'Lymphocytes: twenty to thirty percent',
              'Monocytes: two to six percent',
              'Eosinophils: one to five percent',
              'Basophils: zero to one percent'
            ]
          }
        ],
        raw: '>>The differential leucocyte count uses Pappenheim staining combining May-Grunwald and Giemsa solutions. May-Grunwald solution composed of methyl blue and eosin in methanol is applied for three minutes, then washed with equal volume neutral distilled water. Freshly diluted Giemsa solution at one to twenty ratio is applied for fifteen minutes, followed by thorough washing. The smear is examined under microscope counting two hundred white blood cells to determine differential percentages. Neutrophils sixty to eighty percent have segmented multi-lobed nucleus, diameter ten to fourteen micrometers, pink cytoplasm with fine violet granules containing collagenase, phospholipase, lysozyme, and myeloperoxidase. Lymphocytes twenty to thirty percent have large chromatin-rich round nucleus with narrow pale blue cytoplasmic border. Monocytes two to six percent are the largest at fifteen to twenty micrometers with kidney-shaped nucleus and pale blue-grey cytoplasm. Eosinophils one to five percent have bi-lobed nucleus with large red-orange granules containing ribonuclease, phospholipase, peroxidase, and neurotoxins. Basophils zero to one percent have U or J-shaped nucleus with large dark blue granules containing histamine, heparin, and proteases that may obscure the nucleus. Reference values: neutrophils sixty to eighty percent, lymphocytes twenty to thirty percent, monocytes two to six percent, eosinophils one to five percent, basophils zero to one percent.<<'
      },
      audioUrl: '/Audio/Topic-012/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: false,
      title: 'Describe the main functions of white blood cell types:',
      keyPoints: [
        'Neutrophils: Primary responders to bacterial and fungal infections through phagocytosis, enzyme release (myeloperoxidase), and rapid accumulation at infection sites; lifespan 8-10 hours in circulation',
        'Lymphocytes: T-cells provide cell-mediated immunity (helper, cytotoxic, regulatory, memory), B-cells produce antibodies for humoral immunity, NK cells kill tumor and infected cells without prior sensitization',
        'Monocytes: Differentiate into tissue macrophages and dendritic cells, perform phagocytosis of pathogens and debris, present antigens via MHC class II, secrete cytokines',
        'Eosinophils: Combat parasitic infections with toxic proteins and enzymes, modulate allergic responses, lifespan minimum 6 days',
        'Basophils: Mediate inflammatory and allergic responses by releasing histamine (vasodilation) and heparin (anticoagulant), bind IgE antibodies, lifespan 3-10 days'
      ],
      officialDefinitions: [
        'Neutrophils (60-80% of WBCs): Function: Serve as the primary responders to bacterial and fungal infections. Phagocytosis: Engulf and digest microorganisms and dead cells. Enzyme Release: Secrete enzymes such as myeloperoxidase to kill pathogens. Role in Inflammation: Accumulate rapidly at sites of infection or injury to initiate the inflammatory response.',
        'Lymphocytes (20-30% of WBCs): Subtypes and Functions: T Lymphocytes: Key players in cell-mediated immunity. Cytotoxic T cells kill virus-infected and cancerous cells, while helper T cells coordinate the immune response. B Lymphocytes: Responsible for humoral immunity through the production of antibodies. Transform into plasma cells that secrete antibodies. Natural Killer (NK) Cells: Recognize and kill virus-infected cells and tumors by releasing cytotoxic granules. Overall Role: Central to adaptive immune response, capable of memorizing pathogens for faster response in subsequent encounters.',
        'Monocytes (2-6% of WBCs): Function: Act as precursors to macrophages and dendritic cells in tissues. Phagocytosis: Ingest and break down pathogens, dead cells, and tissue debris. Antigen Presentation: Present antigens on their surface to activate T lymphocytes and initiate adaptive immunity. Inflammatory Response: Release cytokines to recruit other immune cells to the site of infection or injury.',
        'Eosinophils (1-5% of WBCs): Function: Combat parasitic infections and play a role in allergic reactions. Granule Contents: Contain enzymes and toxic proteins, such as peroxidase and major basic protein, which are effective against parasites. Modulation of Inflammation: Help control the intensity of immune responses, particularly in allergic conditions. Allergy Involvement: Contribute to tissue damage in allergic diseases like asthma.',
        'Basophils (0-1% of WBCs): Function: Mediate inflammatory and allergic responses. Granules: Contain histamine (which causes vasodilation) and heparin (which prevents blood clotting) that contribute to inflammation. Allergy Role: Bind to IgE antibodies and release histamine, leading to symptoms of allergies. Support for Other Cells: Aid in the recruitment of eosinophils and other immune cells to sites of infection or inflammation.'
      ],
      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Main functions of white blood cell types:',
            items: [
              'Neutrophils are primary responders to bacterial and fungal infections performing phagocytosis and secreting enzymes like myeloperoxidase to kill pathogens.',
              'Lymphocytes provide adaptive immunity: T-lymphocytes provide cell-mediated immunity with cytotoxic T-cells killing infected and cancer cells while helper T-cells coordinate immune responses, B-lymphocytes transform into plasma cells producing antibodies for humoral immunity, and natural killer cells kill virus-infected and tumor cells without prior antigen exposure.',
              'Monocytes differentiate into tissue macrophages and dendritic cells performing phagocytosis, presenting antigens to activate T-lymphocytes, and releasing cytokines.',
              'Eosinophils combat parasitic infections using toxic enzymes and modulate allergic responses.',
              'Basophils mediate inflammatory and allergic responses by releasing histamine causing vasodilation and heparin preventing clotting.'
            ]
          }
        ],
        raw: 'Neutrophils are primary responders to bacterial and fungal infections performing phagocytosis and secreting enzymes like myeloperoxidase to kill pathogens. Lymphocytes provide adaptive immunity: T-lymphocytes provide cell-mediated immunity with cytotoxic T-cells killing infected and cancer cells while helper T-cells coordinate immune responses, B-lymphocytes transform into plasma cells producing antibodies for humoral immunity, and natural killer cells kill virus-infected and tumor cells without prior antigen exposure. Monocytes differentiate into tissue macrophages and dendritic cells performing phagocytosis, presenting antigens to activate T-lymphocytes, and releasing cytokines. Eosinophils combat parasitic infections using toxic enzymes and modulate allergic responses. Basophils mediate inflammatory and allergic responses by releasing histamine causing vasodilation and heparin preventing clotting.'
      },
      audioUrl: '/Audio/Topic-012/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: false,
      title: 'Describe phagocytosis: the roles of the monocyte/macrophage system and the neutrophil granulocytes.',
      keyPoints: [
        'Phagocytosis: Non-specific innate immune defense where phagocytes engulf and digest pathogens, cellular debris, and foreign particles',
        'Recognition: Via pattern recognition receptors (PRRs) detecting pathogen-associated molecular patterns (PAMPs), or via opsonization with antibodies or C3b complement',
        'Monocyte/macrophage system: Monocytes circulate in blood (24-48 hours) then migrate to tissues and differentiate into long-lived macrophages (months to years)',
        'Macrophage functions: Phagocytosis forming phagolysosome with hydrolytic enzymes and acidic pH, antigen presentation via MHC class II, cytokine secretion coordinating immune response',
        'Neutrophil granulocytes: First responders arriving at infection sites through extravasation (rolling, tight binding, diapedesis, migration)',
        'Neutrophil killing mechanisms: Degranulation releasing antimicrobial proteins (defensins, myeloperoxidase), respiratory burst producing reactive oxygen species via NADPH oxidase, neutrophil extracellular traps (NETs), phagocytosis with lysosomal digestion',
        'Tissue macrophage types: Alveolar macrophages (lung), Kupffer cells (liver), Langerhans cells (skin), microglia (CNS), osteoclasts (bone)'
      ],
      officialDefinitions: [
        'Phagocytosis: a crucial process in the immune system where specific white blood cells (phagocytes) engulf and digest pathogens, cellular debris, and foreign particles. This mechanism is vital for both innate and adaptive immune responses, ensuring the removal of harmful substances from the body. Non-specific (innate) immune defense. Phagocytes: neutrophil granulocytes, dendritic cells, monocytes, and tissue macrophages.',
        'Monocyte/Macrophage System (Mononuclear Phagocyte System): Monocytes: Circulate in the bloodstream as precursors to macrophages. They are large cells with a bean-shaped nucleus and can differentiate into macrophages once they migrate into tissue. Transition to Macrophages: Monocytes circulate in the blood and migrate into tissues where they mature into macrophages.',
        'Role in Phagocytosis: Recognition and Engulfment: Macrophages use pattern recognizing receptors (e.g., Toll-like receptors) to detect Pathogen-associated Molecular Patterns on pathogens. Formation of Phagolysosome: The ingested pathogen is enclosed in a phagosome, which fuses with a lysosome to form a phagolysosome, where enzymes degrade the pathogen. Antigen Presentation: After digesting the pathogen, macrophages present antigen fragments on their surface via MHC class II molecules. This process is crucial for activating T-helper cells and linking innate and adaptive immunity. Cytokine Release: Macrophages secrete cytokines that recruit other immune cells to the infection site and help coordinate the immune response.',
        'Tissue macrophages: Size: can be several times larger than monocytes. Lifespan: months to years. After leaving the bloodstream, monocytes differentiate in tissues into macrophages with tissue-specific phenotypes: Alveolar macrophage – lung. Histiocyte – connective tissue. Kupffer cell – liver. Langerhans cell – skin. Microglia – central nervous system. Osteoclast – bone. Chondroclast – cartilage. Hofbauer cell – placenta.',
        'Neutrophil Granulocytes: First Responders: Neutrophils are among the first immune cells to arrive at the site of infection or tissue damage.',
        'Extravasation (Leukocyte Extravasion): neutrophil migration from blood vessels to the tissue site through: Rolling: Neutrophils slow down and roll along the endothelial cells of blood vessels. Tight Binding: Neutrophils firmly adhere to the endothelial cells using integrins and selectins. Diapedesis: The neutrophils pass through the endothelial layer into the tissue. Migration: The neutrophils move to the site of infection following chemotactic signals.',
        'Killing Mechanisms: Degranulation: Release of granules that contain antimicrobial proteins and enzymes like defensins and myeloperoxidase. Reactive Oxygen Species (ROS) Production: During the respiratory burst, enzymes such as NADPH oxidase produce superoxide radicals and other ROS to kill engulfed pathogens. Neutrophil Extracellular Traps (NETs): Neutrophils release chromatin fibers and granule proteins to trap and neutralize pathogens outside the cell. Phagocytosis and Digestion: Neutrophils engulf pathogens into phagosomes, which then fuse with granules containing lytic enzymes, leading to the destruction of the pathogen.'
      ],
      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Phagocytosis is non-specific innate immune defense where specialized white blood cells engulf and digest pathogens.' },
          { type: 'paragraph', content: 'Monocytes circulate in blood for twenty-four to forty-eight hours then migrate to tissues differentiating into macrophages surviving months to years. Macrophages use pattern recognition receptors to detect pathogen-associated molecular patterns or recognize opsonized pathogens. The pathogen is enclosed in a phagosome which fuses with a lysosome forming a phagolysosome where hydrolytic enzymes, antimicrobial peptides, and acidic pH destroy it. Macrophages then present antigen fragments via MHC class II, and secrete cytokines recruiting additional immune cells.' },
          { type: 'paragraph', content: 'Neutrophil granulocytes are first responders migrating from blood vessels through extravasation:' },
          {
            type: 'steps',
            items: [
              'Rolling: Neutrophils slow down and roll along endothelial cells.',
              'Tight binding: Neutrophils firmly adhere using integrins and selectins.',
              'Diapedesis: Neutrophils pass through the endothelial layer into tissue.',
              'Migration: Neutrophils move to infection site following chemotactic signals.'
            ]
          },
          {
            type: 'list',
            intro: 'Neutrophils employ multiple killing mechanisms:',
            items: [
              'Degranulation releasing antimicrobial proteins like defensins and myeloperoxidase.',
              'Respiratory burst producing reactive oxygen species via NADPH oxidase.',
              'Neutrophil extracellular traps trapping and neutralizing pathogens.',
              'Phagocytosis with lysosomal digestion destroying engulfed pathogens.'
            ]
          }
        ],
        raw: 'Phagocytosis is non-specific innate immune defense where specialized white blood cells engulf and digest pathogens. Monocytes circulate in blood for twenty-four to forty-eight hours then migrate to tissues differentiating into macrophages surviving months to years. Macrophages use pattern recognition receptors to detect pathogen-associated molecular patterns or recognize opsonized pathogens. The pathogen is enclosed in a phagosome which fuses with a lysosome forming a phagolysosome where hydrolytic enzymes, antimicrobial peptides, and acidic pH destroy it. Macrophages then present antigen fragments via MHC class II, and secrete cytokines recruiting additional immune cells. Neutrophil granulocytes are first responders migrating from blood vessels through extravasation involving rolling, tight binding, diapedesis, and chemotactic migration. Neutrophils employ degranulation releasing antimicrobial proteins like defensins and myeloperoxidase, respiratory burst producing reactive oxygen species via NADPH oxidase, neutrophil extracellular traps, and phagocytosis with lysosomal digestion.'
      },
      audioUrl: '/Audio/Topic-012/LO-04.mp3'
    },
    {
      id: 'lo-5',
      isCritical: true,
      title: 'Describe the types of lymphocytes and their major functions. Define the concept of antigen and delineate the process of antigen presentation. >>Describe the role and structure of immunoglobulins and their subtypes and functions.<< Expound the main elements and the functions of the complement system.',
      keyPoints: [
        'T-lymphocytes (70-90%): Differentiate in thymus, provide cell-mediated immunity; subtypes include helper T-cells (CD4+), cytotoxic T-cells (CD8+), regulatory T-cells, memory T-cells',
        'B-lymphocytes (5-15%): Differentiate in bone marrow, provide humoral immunity by producing immunoglobulins as plasma cells',
        'Natural killer cells (1-3%): Innate immunity effectors killing tumor and infected cells via perforin and granzymes without prior sensitization, immediate cytotoxic response',
        'Antigen: Any substance that can be recognized by the immune system and elicit an immune response; typically proteins or polysaccharides on pathogen surfaces',
        'Antigen presentation: APCs (dendritic cells, macrophages, B-cells) ingest pathogens, break them into peptide fragments, associate with MHC molecules (class I for endogenous, class II for exogenous), display peptide-MHC complex on cell surface for T-cell recognition',
        'Immunoglobulin structure: Y-shaped molecule with two heavy chains and two light chains, Fab region contains variable domains for antigen binding, Fc region (constant) mediates effector functions and determines antibody class',
        'IgG (monomer, 75-80% of serum antibodies): Most abundant, crosses placenta providing passive immunity to fetus, activates complement, effective in opsonization and neutralization, long-term immunity',
        'IgA (dimer in secretions with J-chain and secretory component): Provides mucosal immunity in saliva, tears, breast milk, respiratory and GI tract secretions',
        'IgM (pentamer with J-chain): First antibody in acute immune response, most effective at agglutination and complement activation, largest antibody',
        'IgE (monomer): Binds to mast cells and basophils via high-affinity receptors, triggers degranulation in allergic reactions and parasitic infections',
        'IgD (monomer): Acts as receptor on naive B-cell surface, aids B-cell activation and maturation',
        'Complement system: Approximately 30 plasma proteins activating in cascade-like enzymatic reactions, part of innate immunity modulating adaptive response',
        'Three activation pathways: Classical (antibody-antigen complexes), Lectin (mannose-binding lectin), Alternative (direct pathogen surface binding); all converge at C3 cleavage',
        'Complement functions: Opsonization (C3b marks pathogens enhancing phagocytosis), chemotaxis and inflammation (C3a and C5a attract leukocytes), lysis (C5b-C9 forms membrane attack complex creating pores in bacterial membranes), immune complex clearance'
      ],
      officialDefinitions: [
        'T Lymphocytes (T Cells): Types and Functions: Helper T Cells (CD4+ T Cells): Coordinate the immune response by releasing cytokines that activate other immune cells, such as B cells, cytotoxic T cells, and macrophages. They play a crucial role in both humoral and cell-mediated immunity. Cytotoxic T Cells (CD8+ T Cells): Directly kill virus-infected cells, cancer cells, and other abnormal cells by inducing apoptosis. They recognize antigens presented by MHC class I molecules on the surface of infected or abnormal cells. Regulatory T Cells (Treg): Help maintain immune tolerance and prevent autoimmune responses by suppressing overactive immune cells. Memory T Cells: Provide long-term immunity by "remembering" past infections and enabling a quicker response upon re-exposure to the same pathogen. Role: T cells are central to adaptive immunity and are involved in cell-mediated immune responses.',
        'T cell activation: Naive T cells are activated in secondary lymphoid organs. They recognize antigens presented on MHC-I or MHC-II glycoproteins (major histocompatibility complex I and II). HLA complex (human leukocyte antigen). Antigen presentation to T cells: Peptide–MHC complex binds to T-cell receptor (TCR) → immunological synapse. After activation by a specific antigen, T cells undergo clonal expansion and differentiate into T killer and T helper cells. The proliferation signal is provided by IL-2. IL-2 inhibitors, such as cyclosporin, act as effective immunosuppressants (e.g., after organ transplantation).',
        'T killer (cytotoxic) T cells: Destruction of cells recognized as foreign (e.g., infected cells) via apoptosis using perforin and granzymes. T helper cells: Cytokine production, leading to activation of macrophages and B cells. T regulatory cells: Suppress autoimmune reactions, controlling autoreactive lymphocytes. T memory cells: Central memory cells. Effector memory cells.',
        'B Lymphocytes (B Cells): Types and Functions: Plasma Cells: Differentiated B cells that produce and secrete large amounts of antibodies specific to a particular antigen. Memory B Cells: Retain information about previously encountered antigens and enable a faster and more effective antibody response during subsequent infections. Role: B cells are responsible for humoral immunity, where they produce antibodies that neutralize pathogens and mark them for destruction by other immune cells.',
        'B-cell activation: B cells can be: Naive / Activated, differentiating into plasma cells or memory B cells. T-cell-independent B-cell activation: Triggered by non-protein antigens, e.g., bacterial polysaccharides, lipids, nucleic acids. These B cells can secrete IgM only. T-cell-dependent B-cell activation: Occurs in response to protein antigens. Mediated through activation by T helper (Th) cells.',
        'B-cell differentiation and memory: A subset of activated B-cells differentiates into memory B-cells: They circulate in the body for years. They retain the isotype class switching they underwent during the initial activation. Upon re-exposure to the same antigen, they mount a rapid and efficient immune response, producing antibodies quickly.',
        'Natural Killer (NK) Cells: Function: Play a role in the innate immune response by recognizing and killing virus-infected cells and tumor cells without the need for antigen presentation. They can induce apoptosis in target cells through the release of cytotoxic granules containing perforin and granzymes. Role: NK cells help control early phases of infections and cancer by eliminating cells that display stress markers or have downregulated MHC class I molecules.',
        'Concept of Antigen: An antigen is any substance that can be recognized by the immune system and elicit an immune response. Antigens are typically proteins or polysaccharides found on the surface of pathogens (e.g., viruses, bacteria) or abnormal cells. Epitope: A specific part of an antigen that is recognized by an antibody or a receptor on a lymphocyte. One antigen can have multiple epitopes, each capable of binding to a different antibody or receptor.',
        'Process of Antigen Presentation: Antigen Capture and Processing: Dendritic cells, macrophages, and B cells (antigen-presenting cells, APCs) ingest pathogens through phagocytosis or endocytosis. The ingested material is broken down into smaller peptide fragments within the APC.',
        'MHC Molecule Association: MHC Class I: Presents endogenous antigens (from within the cell) to cytotoxic T cells. Found on all nucleated cells. MHC Class II: Presents exogenous antigens (from outside the cell) to helper T cells. Found on professional APCs such as dendritic cells, macrophages, and B cells.',
        'Antigen Presentation to T Cells: The peptide-MHC complex is transported to the cell surface and displayed. Helper T cells (CD4+) recognize antigens presented by MHC class II and become activated, leading to cytokine release and further immune response. Cytotoxic T cells (CD8+) recognize antigens presented by MHC class I and are activated to kill infected or abnormal cells.',
        'Immunoglobulins (Ig): also known as antibodies, are specialized glycoproteins produced by B lymphocytes and plasma cells that play a crucial role in the immune response by recognizing and binding to specific antigens. The structure and function of immunoglobulins are essential for neutralizing pathogens, marking them for destruction, and facilitating various immune mechanisms.',
        'Structure of Immunoglobulins: Basic Structure: Y-shaped molecule composed of four polypeptide chains: two identical heavy chains and two identical light chains (2 light chains and 2 heavy chains). Disulfide bonds link the chains together, forming a stable structure.',
        'Regions: Fab (Fragment antigen-binding) region: The variable region at the tips of the "Y" that binds specifically to antigens. It determines the specificity of the antibody. Variable domains: antigen-binding sites. Complementarity-determining regions (CDRs). Fc (Fragment crystallizable) region: The constant region that interacts with cell surface receptors and complement proteins, mediating effector functions such as opsonization, cell lysis, and phagocytosis. Responsible for receptor binding and complement activation.',
        'Variable and Constant Regions: Variable (V) region: Present in both light and heavy chains; provides the unique antigen-binding sites. Variable domains (VH & VL) at the N-terminus. Constant (C) region: Determines the class or isotype of the antibody and mediates effector functions. Constant domains (CH1, CH2, CH3 & CL) at the C-terminus.',
        'Heavy chain constant domains: Determine the isotype (class): IgM, IgG, IgA, IgD, IgE. This is encoded by the gene for the constant region of the heavy chain. μ (mu) → IgM. γ (gamma) → IgG. α (alpha) → IgA. δ (delta) → IgD. ε (epsilon) → IgE. The antigen-binding (Fab) region can remain the same while the antibody class switches (e.g., IgM → IgG). The antigen specificity does not change, only the effector function is altered.',
        'Hinge Region: A flexible segment that allows movement of the Fab regions to bind antigens at various angles and distances.',
        'IgG: Structure: Monomer (Monomeric antibody). Function: The most abundant antibody in serum (~75-80%) (Most abundant in serum). Provides long-term immunity (Long term antibody). Crosses the placenta to provide passive immunity to the fetus (Provides passive immunity → IgG antibodies from mother crosses placenta → provides immunity to fetus). Activates the classical complement pathway (Activate complement proteins to binding to Fc region which: ↑ opsonization of pathogen. ↑ phagocytosis or complements create MAC which creates holes in pathogen). It is effective in opsonization, neutralization of toxins and pathogens, and ADCC (antibody-dependent cell-mediated cytotoxicity). Neutralizes all the viral protein binding sites which prevents viruses from binding to and infecting cells. Subclasses: IgG1, IgG2, IgG3, and IgG4, each with slightly different functions and properties.',
        'IgA: Structure: Usually found as a dimer in secretions (secretory IgA), with a J-chain and a secretory component for protection against degradation (Monomeric antibody. Dimer: Two monomers connected via a J-protein). Function: Provides mucosal immunity by preventing the attachment of pathogens to mucosal surfaces. Found in secretions such as saliva, tears, breast milk, and respiratory and gastrointestinal tract secretions (Prevents pathogens from binding and releasing proteolytic enzymes onto cells within our mucous membranes and body fluids. Body fluids: Saliva. Urine. Mucus. Lacrimal fluid (tears). Breast milk. Mucous membranes: GIT. Respiratory tract). Subclasses: IgA1 and IgA2. Most abundant in body, low in serum.',
        'IgM: Structure: Pentamer with a J-chain, making it the largest antibody (Pentamer: Circulates in the serum. Monomers: Located on the surface of mature B cells). Function: The first antibody produced during an initial immune response (Acute (short term) antibody. When first infected by a pathogen your plasma cells make IgM antibodies → plasma cells then later switch and make IgG antibodies → this is called delayed formation). It is very effective in forming complexes with antigens and initiating the classical complement pathway. It plays a critical role in agglutination and neutralization of pathogens. These antibodies can activate complement proteins which can ↑ opsonization of pathogen. ↑ phagocytosis or complements create MAC which creates holes in pathogen. Involved in agglutination (clumping) of RBCs: When someone receives a mismatched blood transfusion.',
        'IgE: Structure: Monomer (Monomers). Function: Binds to high-affinity receptors on mast cells and basophils, playing a key role in allergic reactions and parasitic infections. Upon binding to its antigen, it triggers degranulation of these cells, releasing histamine and other mediators that cause inflammation and allergic responses. This antibody can bind to mast cells & basophils. When an allergen binds to the IgE antibodies bound to these cells: Activates the mast cells and basophils. Triggering degranulation of these cells. ↑ Histamine release. → ↑ inflammation: This is involved in allergic reactions. These antibodies also stimulate eosinophils: Releasing cationic peptides and major basic proteins → destroying parasites.',
        'IgD: Structure: Monomer (Monomers). Function: Primarily acts as a receptor on the surface of naïve B cells, aiding in the initiation of B cell activation and maturation. Its role in the serum is less well understood and considered minimal compared to other antibodies. These antibodies primarily our membrane bound receptors on the B-cells. They can recognize an antigen on a foreign pathogen with this antibody: This can activate immune response.',
        'Role of Immunoglobulins: Neutralization: Bind to pathogens and toxins to prevent them from attaching to host cells and causing infection (Antibodies block the binding of bacterial toxins or viruses to their target cells). Opsonization: Coat pathogens, enhancing their recognition and ingestion by phagocytes (e.g., macrophages and neutrophils). IgG antibodies bind to microbial antigens. Neutrophils and macrophages recognize the bound antibody via their Fc receptors, enhancing phagocytosis of the marked pathogens. Complement Activation: Initiate the classical complement pathway, leading to pathogen lysis and opsonization. Antibody-Dependent Cellular Cytotoxicity (ADCC): Bind to infected or abnormal cells, marking them for destruction by natural killer (NK) cells and other immune cells. IgG antibodies bind to antigens on virus-infected cells. NK cells recognize the bound antibodies via their Fc receptors and release cytotoxic molecules (perforin, granzymes) to kill the infected cells. Agglutination and Precipitation: Bind multiple pathogens together, enhancing their removal from the body through phagocytosis.',
        'Complement System: an essential component of the innate immune system, consisting of a series of small proteins found in the blood and produced by the liver. These proteins work in a cascade-like mechanism to enhance the body\'s ability to fight infections, promote inflammation, and clear damaged cells. The complement system acts as a bridge between innate and adaptive immunity and plays a vital role in the host defense against pathogens. Part of innate immunity, but also modulates the effects of the adaptive immune response.',
        'Main Elements of the Complement System: Complement Proteins: There are over 30 proteins and protein fragments, primarily denoted by the letter "C" followed by a number (e.g., C1, C2, C3, C4, etc.). ~30 proteins in the blood plasma and a network of receptors on cell surfaces. These proteins are present in inactive forms in the blood and are activated through specific pathways when the immune response is triggered. Upon activation, cascade-like enzymatic reactions are initiated. Proteins C1–C4 act as proteolytic enzymes.',
        'Complement Pathways: Classical Pathway: Activated by antigen-antibody complexes (primarily IgG and IgM). Initiated by C1 complex binding to the Fc region of the antibody. Antigen-antibody mediated. C1 molecules bind Fc portion of IgG. IgM antibodies made by plasma cells bind microbe antigens → this causes classic complement cascade. C1 activates: C2b→C4b→C3b→C5b→C6→C7→C8→C9.',
        'Lectin Pathway: Activated by mannose-binding lectin (MBL) binding to mannose residues on the pathogen surface. This leads to the activation of MBL-associated serine proteases (MASPs). C4 molecules bind directly to mannose or other sugar residues on bacteria. C1 like complex converts C4 into C4b. This triggers lectin complement cascade. C4b activates → C3b→C5b→C6→C7→C8→C9.',
        'Alternative Pathway: Activated directly on pathogen surfaces without the need for antibodies. It involves spontaneous hydrolysis of C3 and deposition of complement proteins on the surface of pathogens. C3b molecules bind directly to lipopolysaccharides on bacteria → this causes alternative complement cascade. If Bb protein binds with C3b → this activates binding of C5b→C6→C7→C8→C9.',
        'All three pathways lead to C3 cleavage → C3a and C3b formation. C3 is cleaved into: C3b (remains on the membrane, opsonin); C3a (smaller fragment, anaphylatoxin). C5b (and C5–C9), the proteins form the membrane attack complex (MAC). C3 and C5 → break up into C3a & C5a as well as C3b & C5b.',
        'Regulatory Proteins: Include proteins such as factor H, factor I, and CD59, which regulate and prevent the complement system from attacking host cells and causing tissue damage.',
        'Functions of the Complement System: Opsonization: The complement protein C3b binds to the surface of pathogens, marking them for phagocytosis by macrophages and neutrophils. This enhances the efficiency of phagocytosis as the pathogen is more readily recognized by immune cells. Marking an antigen (with antibodies or C3b fragments) to enhance phagocytosis. C3b → this triggers opsonization (makes the pathogen tasty, YUM) → enhances phagocytosis of microbe. C3b tags the pathogen, enhancing phagocytosis. C3b marks pathogens → enhances phagocytosis.',
        'Chemotaxis and Inflammation: The complement fragments C3a and C5a act as anaphylatoxins, which recruit immune cells (e.g., neutrophils, basophils) to the site of infection and stimulate the release of pro-inflammatory cytokines and histamine from mast cells, resulting in inflammation and increased vascular permeability. C5a is also a potent chemoattractant, guiding immune cells to the infection site. Anaphylatoxins: chemotactic and proinflammatory molecules; attract and induce degranulation of mast cells and basophils. C3a & C5a → can be acted by the proteases secreted by mass cells → conversion C3a and C5a into the active form → ↑ Chemotaxis and amplifies inflammatory response. C3a and C5a activate and attract leukocytes.',
        'Lysis of Pathogens: The formation of the membrane attack complex (MAC) occurs when the terminal complement components C5b, C6, C7, C8, and C9 assemble to create a pore in the pathogen\'s cell membrane. This leads to osmotic lysis and destruction of the pathogen by disrupting its cell membrane integrity. MAC proteins: form pores in membranes, leading to lysis of Gram-negative bacteria. C5b-C9 → triggers formation of membrane attack complex (MAC) → this binds into bacteria creating pores → causing lysis of bacterial cell. The C5b–C9 complex forms the membrane attack complex (MAC), leading to cell death. C5b–C9 forms the membrane attack complex (MAC) → cell death.',
        'Clearance of Immune Complexes: The binding of C3b to immune complexes facilitates their binding to red blood cells, which transport them to the liver and spleen for clearance by phagocytes. This helps in the prevention of immune complex deposition in tissues and reduces the risk of inflammatory damage.',
        'Augmentation of B Cell Response: Complement receptor binding enhances the response of B cells to antigens, promoting the production of antibodies and contributing to the adaptive immune response.',
        'Regulation of the Complement System: The complement system is tightly regulated to prevent damage to host tissues. Regulatory proteins such as factor H and factor I inhibit the formation of C3 and C5 convertases, while CD59 prevents the formation of MAC on host cells. Dysregulation of the complement system can lead to autoimmune diseases, chronic inflammation, and tissue damage.',
        'Key functions: Marking and destruction of pathogens. Recruitment of inflammatory cells. Cell lysis. Enhancement of the adaptive immune response.'
      ],
      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Lymphocytes comprise three major types:',
            items: [
              'T-lymphocytes seventy to ninety percent differentiate in the thymus providing cell-mediated immunity through helper T-cells that coordinate responses via cytokines, cytotoxic T-cells that kill infected and cancer cells, regulatory T-cells maintaining tolerance, and memory T-cells providing long-term immunity.',
              'B-lymphocytes five to fifteen percent differentiate in bone marrow providing humoral immunity by transforming into plasma cells producing immunoglobulins.',
              'Natural killer cells one to three percent provide innate immunity killing tumor and infected cells via perforin and granzymes without prior antigen exposure.'
            ]
          },
          { type: 'paragraph', content: 'An antigen is any substance recognized by the immune system eliciting an immune response, typically proteins or polysaccharides on pathogen surfaces with epitopes as specific recognition sites.' },
          { type: 'paragraph', content: 'Antigen presentation involves antigen-presenting cells like dendritic cells, macrophages, and B-cells ingesting pathogens, breaking them into peptide fragments, and associating with MHC molecules where MHC class I presents endogenous antigens to cytotoxic T-cells and MHC class II presents exogenous antigens to helper T-cells for immune activation.' },
          { type: 'paragraph', content: '>>Immunoglobulins are Y-shaped glycoproteins composed of two heavy and two light chains linked by disulfide bonds. The Fab region contains variable domains with complementarity-determining regions providing antigen-binding specificity. The Fc region is the constant region determining antibody class and mediating effector functions through receptor binding and complement activation.<<', critical: true },
          {
            type: 'list',
            intro: '>>Immunoglobulin subtypes and functions:<<',
            critical: true,
            items: [
              'IgG is a monomer comprising seventy-five to eighty percent of serum antibodies, provides long-term immunity, crosses placenta for fetal passive immunity, activates complement, and performs opsonization, neutralization, and antibody-dependent cellular cytotoxicity with four subclasses.',
              'IgA is a dimer in secretions with J-chain and secretory component providing mucosal immunity in saliva, tears, breast milk, and respiratory and gastrointestinal secretions with two subclasses.',
              'IgM is a pentamer with J-chain being the largest antibody, first produced in acute immune response, most effective at agglutination and complement activation.',
              'IgE is a monomer binding high-affinity receptors on mast cells and basophils triggering degranulation in allergic reactions and parasitic infections.',
              'IgD is a monomer acting as naive B-cell surface receptor aiding activation and maturation.'
            ]
          },
          { type: 'paragraph', content: 'The complement system consists of approximately thirty plasma proteins activating in cascade-like reactions forming part of innate immunity.' },
          {
            type: 'list',
            intro: 'Three activation pathways converge at C3 cleavage:',
            items: [
              'Classical pathway activated by IgG and IgM antibody-antigen complexes.',
              'Lectin pathway by mannose-binding lectin on pathogen surfaces.',
              'Alternative pathway by direct pathogen binding without antibodies.'
            ]
          },
          { type: 'paragraph', content: 'C3 cleaves into C3b as membrane opsonin and C3a as anaphylatoxin.' },
          {
            type: 'list',
            intro: 'Main functions of the complement system:',
            items: [
              'Opsonization where C3b marks pathogens enhancing phagocytosis.',
              'Chemotaxis and inflammation where C3a and C5a recruit immune cells and stimulate inflammatory mediator release.',
              'Lysis where C5b through C9 form membrane attack complex creating pathogen membrane pores causing osmotic lysis.',
              'Immune complex clearance facilitating transport to liver and spleen.'
            ]
          }
        ],
        raw: 'Lymphocytes comprise three major types: T-lymphocytes seventy to ninety percent differentiate in the thymus providing cell-mediated immunity through helper T-cells that coordinate responses via cytokines, cytotoxic T-cells that kill infected and cancer cells, regulatory T-cells maintaining tolerance, and memory T-cells providing long-term immunity. B-lymphocytes five to fifteen percent differentiate in bone marrow providing humoral immunity by transforming into plasma cells producing immunoglobulins. Natural killer cells one to three percent provide innate immunity killing tumor and infected cells via perforin and granzymes without prior antigen exposure. An antigen is any substance recognized by the immune system eliciting an immune response, typically proteins or polysaccharides on pathogen surfaces with epitopes as specific recognition sites. Antigen presentation involves antigen-presenting cells like dendritic cells, macrophages, and B-cells ingesting pathogens, breaking them into peptide fragments, and associating with MHC molecules where MHC class I presents endogenous antigens to cytotoxic T-cells and MHC class II presents exogenous antigens to helper T-cells for immune activation. >>Immunoglobulins are Y-shaped glycoproteins composed of two heavy and two light chains linked by disulfide bonds. The Fab region contains variable domains with complementarity-determining regions providing antigen-binding specificity. The Fc region is the constant region determining antibody class and mediating effector functions through receptor binding and complement activation. IgG is a monomer comprising seventy-five to eighty percent of serum antibodies, provides long-term immunity, crosses placenta for fetal passive immunity, activates complement, and performs opsonization, neutralization, and antibody-dependent cellular cytotoxicity with four subclasses. IgA is a dimer in secretions with J-chain and secretory component providing mucosal immunity in saliva, tears, breast milk, and respiratory and gastrointestinal secretions with two subclasses. IgM is a pentamer with J-chain being the largest antibody, first produced in acute immune response, most effective at agglutination and complement activation. IgE is a monomer binding high-affinity receptors on mast cells and basophils triggering degranulation in allergic reactions and parasitic infections. IgD is a monomer acting as naive B-cell surface receptor aiding activation and maturation.<< The complement system consists of approximately thirty plasma proteins activating in cascade-like reactions forming part of innate immunity. Three activation pathways converge at C3 cleavage: classical pathway activated by IgG and IgM antibody-antigen complexes, lectin pathway by mannose-binding lectin on pathogen surfaces, and alternative pathway by direct pathogen binding without antibodies. C3 cleaves into C3b as membrane opsonin and C3a as anaphylatoxin. Main functions include opsonization where C3b marks pathogens enhancing phagocytosis, chemotaxis and inflammation where C3a and C5a recruit immune cells and stimulate inflammatory mediator release, lysis where C5b through C9 form membrane attack complex creating pathogen membrane pores causing osmotic lysis, and immune complex clearance facilitating transport to liver and spleen.'
      },
      audioUrl: '/Audio/Topic-012/LO-05.mp3'
    }
  ],
  referenceValues: [
    {
      parameter: 'White blood cell count',
      value: '4000-10000 cell/μl',
      isCritical: true
    },
    {
      parameter: 'Neutrophils',
      value: '60-80%',
      isCritical: true
    },
    {
      parameter: 'Lymphocytes',
      value: '20-30%',
      isCritical: true
    },
    {
      parameter: 'Monocytes',
      value: '2-6%',
      isCritical: true
    },
    {
      parameter: 'Eosinophils',
      value: '1-5%',
      isCritical: true
    },
    {
      parameter: 'Basophils',
      value: '0-1%',
      isCritical: true
    }
  ]
};

export default topic12;