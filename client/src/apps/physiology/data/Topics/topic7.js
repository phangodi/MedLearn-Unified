const topic7 =   {
    id: 'topic-7',
    number: 7,
    category: 'cell-biology',
    mcqs: ['mcq-1'],
    title: 'Receptors, signal transduction mechanisms.',
    subtitle: 'Chemical signaling molecules, receptor types, signal transduction pathways, and mechanisms of cellular communication through membrane and intracellular receptors.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: false,
        title: 'Describe the main types of signaling molecules (mediators): autocrine and paracrine signaling molecules, hormones, neurotransmitters, neurohormones.',
        keyPoints: [
          'Autocrine signaling: Molecules act on the same cell that secreted them; cell targets itself (example: IL-2 from T cells)',
          'Paracrine signaling: Molecules act on nearby cells through local signaling without entering bloodstream (examples: histamine, nitric oxide, prostaglandins)',
          'Hormones: Released by endocrine glands into bloodstream; travel long distances to target cells (examples: insulin, cortisol, thyroxine)',
          'Neurotransmitters: Released by neurons into synapses; act on adjacent target cells; very fast localized action (examples: acetylcholine, dopamine, serotonin)',
          'Neurohormones: Released by neurosecretory cells into bloodstream; act like hormones on distant targets (examples: ADH, oxytocin from hypothalamus/posterior pituitary)',
          'Key distinction: Based on distance traveled and release mechanism; autocrine/paracrine are local, hormones/neurohormones systemic',
          'Neurotransmitters vs neurohormones: Both from neurons, but neurotransmitters act locally at synapses while neurohormones enter blood'
        ],
        officialDefinitions: [
          'Autocrine Signaling Molecules: Act on the same cell that secreted them which mean The cell targets itself. Example: IL-2 (interleukin-2) released by T cells to stimulate their own growth.',
          'Paracrine Signaling Molecules: Act on nearby cells (local signaling).Do not enter the bloodstream. Example: Histamine, nitric oxide, prostaglandins.',
          'Hormones: chemical messenger that is Released by endocrine glands into the bloodstream.Travel long distances to target cells throughout the body. Example: Insulin (pancreas), cortisol (adrenal cortex), thyroxine (thyroid).',
          'Neurotransmitters: chemical messenger that is Released by neurons into synapses. Act on adjacent target cells (neurons, muscle, or glands). Very fast, localized action. Example: Acetylcholine, dopamine, serotonin.',
          'Neurohormones: chemical messenger that is Released by neurosecretory cells (neurons) into the bloodstream. Act like hormones on distant targets. Example: ADH (vasopressin), oxytocin from the hypothalamus/posterior pituitary.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: 'Main types of signaling molecules:',
              items: [
                'Autocrine signaling molecules act on the same cell that secreted them, where the cell targets itself, for example interleukin-2 released by T cells',
                'Paracrine signaling molecules act on nearby cells through local signaling without entering the bloodstream, such as histamine, nitric oxide, and prostaglandins',
                'Hormones are chemical messengers released by endocrine glands into the bloodstream that travel long distances to target cells throughout the body, including insulin from the pancreas, cortisol from the adrenal cortex, and thyroxine from the thyroid',
                'Neurotransmitters are released by neurons into synapses and act on adjacent target cells with very fast localized action, examples include acetylcholine, dopamine, and serotonin',
                'Neurohormones are released by neurosecretory cells into the bloodstream and act like hormones on distant targets, such as ADH and oxytocin from the hypothalamus and posterior pituitary'
              ]
            }
          ],
          raw: 'Autocrine signaling molecules act on the same cell that secreted them, where the cell targets itself, for example interleukin-2 released by T cells. Paracrine signaling molecules act on nearby cells through local signaling without entering the bloodstream, such as histamine, nitric oxide, and prostaglandins. Hormones are chemical messengers released by endocrine glands into the bloodstream that travel long distances to target cells throughout the body, including insulin from the pancreas, cortisol from the adrenal cortex, and thyroxine from the thyroid. Neurotransmitters are released by neurons into synapses and act on adjacent target cells with very fast localized action, examples include acetylcholine, dopamine, and serotonin. Neurohormones are released by neurosecretory cells into the bloodstream and act like hormones on distant targets, such as ADH and oxytocin from the hypothalamus and posterior pituitary.'
        }
      },
      {
        id: 'lo-2',
        isCritical: false,
        title: 'Define the terms: receptor, ligand, agonist, antagonist (competitive, non-competitive).',
        keyPoints: [
          'Receptor: Specialized protein on cell membrane or within cell that binds specific signaling molecules and initiates physiological response',
          'Receptor consequences: Changes in membrane potential (ionotropic/metabotropic) or activation of second messenger systems',
          'Ligand: Any molecule that binds specifically to a receptor (neurotransmitter, hormone, drug, or other molecule)',
          'Agonist: Ligand that activates the receptor upon binding; mimics natural ligand and initiates cellular response',
          'Competitive antagonist: Binds to same site as agonist and blocks agonist binding, preventing receptor activation',
          'Non-competitive antagonist: Binds to allosteric site (different from agonist site) and prevents receptor activation',
          'Antagonist function: Binds to receptor but does not activate physiological response of natural ligand'
        ],
        officialDefinitions: [
          'A receptor is a specialized protein on the cell membrane or within the cell that binds to specific signaling molecules (ligands) such as neurotransmitters or hormones, and initiates a physiological response by altering cell function. Consequences of activation receptors: 1) changes in the membrane potential (Ionotropic or metabotropic receptors) 2)Activation of 2nd messenger system (intracellular transduction)',
          'A ligand is any molecule that binds specifically to a receptor. It can be a neurotransmitter, hormone, drug, or any other molecule.Ligands can be classified as agonists, antagonists, or partial agonists based on the type of effect they produce when binding to a receptor.Binding of a ligand to a receptor can either activate or inhibit the receptor\'s function, depending on its type.',
          'An agonist is a specific type of ligand that activates the receptor upon binding.It mimics the natural ligand of the receptor and initiates a cellular response, thereby producing a physiological effect.Agonists increase the activity of the receptor, leading to an increase in the receptor\'s associated physiological response.',
          'Antagonist: (A type of receptor-ligand). A molecule that binds to a receptor, however it does not activate the physiological response induced bu naturally occurring physiological ligand of the receptors.',
          'Competitive Antagonist: the antagonist binds to the same site as the agonist and blocks the agonist from being connected to the receptor thus blocking its action.',
          'The antagonist is not competing with the ligand/agonist on the same site, but the antagonist is bound to an allosteric (non-agonist) site on the receptor to prevent the activation of the receptor.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'A receptor is a specialized protein on the cell membrane or within the cell that binds to specific signaling molecules such as neurotransmitters or hormones and initiates a physiological response by altering cell function.' },
            { type: 'paragraph', content: 'A ligand is any molecule that binds specifically to a receptor, including neurotransmitters, hormones, drugs, or other molecules.' },
            { type: 'paragraph', content: 'An agonist is a specific type of ligand that activates the receptor upon binding, mimicking the natural ligand and initiating a cellular response to produce a physiological effect.' },
            { type: 'paragraph', content: 'An antagonist is a molecule that binds to a receptor but does not activate the physiological response induced by the naturally occurring ligand.' },
            { type: 'paragraph', content: 'A competitive antagonist binds to the same site as the agonist and blocks the agonist from connecting to the receptor.' },
            { type: 'paragraph', content: 'A non-competitive antagonist binds to an allosteric site, different from the agonist binding site, preventing receptor activation.' }
          ],
          raw: 'A receptor is a specialized protein on the cell membrane or within the cell that binds to specific signaling molecules such as neurotransmitters or hormones and initiates a physiological response by altering cell function. A ligand is any molecule that binds specifically to a receptor, including neurotransmitters, hormones, drugs, or other molecules. An agonist is a specific type of ligand that activates the receptor upon binding, mimicking the natural ligand and initiating a cellular response to produce a physiological effect. An antagonist is a molecule that binds to a receptor but does not activate the physiological response induced by the naturally occurring ligand. A competitive antagonist binds to the same site as the agonist and blocks the agonist from connecting to the receptor. A non-competitive antagonist binds to an allosteric site, different from the agonist binding site, preventing receptor activation.'
        }
      },
      {
        id: 'lo-3',
        isCritical: true,
        title: '>>Classification of receptors: 1. based on localization<< (cell membrane receptors, cytosolic receptors, nuclear receptors, intracellular membrane receptors (IP3, ryanodin), >>2. based on function<< (ionotropic receptors, metabotropic receptors, receptor enzymes, and enzyme-linked receptors). Ionotropic receptors: selective and non-selective receptors, cation and anion channels. Give 1-1 examples.',
        keyPoints: [
          'Localization classification: Membrane receptors (on cell surface), cytosolic receptors (in cytoplasm), nuclear receptors (in nucleus), intracellular membrane receptors (IP3, ryanodine on ER)',
          'Function classification: Ionotropic (ion channels), metabotropic (G-protein coupled), receptor enzymes (intrinsic activity), enzyme-linked (associated enzyme)',
          'Ionotropic receptors: Ligand-gated ion channels; ligand binding opens pore allowing ion flow; fast synaptic transmission',
          'Selective cation channel example: Nicotinic acetylcholine receptor (nAChR) - selective for Na+ and K+; causes depolarization',
          'Selective anion channel example: GABA-A receptor - selective for Cl- ions; causes hyperpolarization and inhibition',
          'Non-selective receptors: Allow passage of multiple ion types through the channel',
          'Structure: Ionotropic receptors have ligand-binding domain and ion pore-forming domain in single protein complex'
        ],
        officialDefinitions: [
          'Classification of Receptors Based on Location: 1. Membrane Receptors: Located on the cell membrane. Bind to extracellular ligands and initiate signal transduction pathways. Examples: G-protein coupled receptors (GPCRs), Ionotropic receptors. 2. Cytosolic Receptors: Located within the cytosol of the cell. Often bind to lipophilic ligands (e.g., steroid hormones) that can diffuse across the cell membrane. Once activated, they often translocate to the nucleus to modulate gene expression. 3. Nuclear Receptors: A subclass of cytosolic receptors, but they are primarily located within the nucleus. Upon ligand binding, they function as transcription factors to regulate gene expression. Examples: Steroid hormone receptors (e.g., estrogen receptor, glucocorticoid receptor). 4. Intracellular Receptors: Found inside the cell, including in the endoplasmic reticulum or other organelles. Respond to intracellular signals such as Ca2+. Examples: Inositol trisphosphate (IP3) receptors, Ryanodine receptors.',
          'Classification of Receptors Based on Function: 1. Ionotropic Receptors: Also known as ligand-gated ion channels. Composed of a pore-forming subunit that opens or closes in response to ligand binding, allowing ions to flow through. Responsible for fast synaptic transmission. Structure: Consist of two functional domains—one for ligand binding and another for forming the ion pore. Example: Nicotinic acetylcholine receptor (nAChR). 2. Metabotropic Receptors: Indirectly linked to ion channels through a signal transduction mechanism involving G-proteins. Do not form ion channels but initiate a cascade of intracellular events upon ligand binding. Structure: Have an extracellular binding site for neurotransmitters and an intracellular binding site for G-proteins. Example: Muscarinic acetylcholine receptor (mAChR). 3. Receptor Enzymes: The receptor itself has intrinsic enzymatic activity. Ligand binding activates the receptor\'s enzymatic function, often leading to phosphorylation of intracellular proteins. Example: Receptor tyrosine kinases (RTKs).',
          'Ionotropic receptors are a type of ligand-gated ion channel that, upon ligand binding, directly regulate the flow of specific ions across the cell membrane. Depending on the type of ion that they permit, these receptors can be classified as cationic or anionic channels. They are also divided into selective and non-selective receptors based on the types of ions they allow to pass.',
          'Selective Receptors: These ionotropic receptors allow the passage of only one type of ion (either cation or anion) through the channel. Cation Channel (Selective): Example: Nicotinic Acetylcholine Receptor (nAChR): This receptor is selective for cations such as Na+ and K+. It is found at the neuromuscular junction and in the autonomic ganglia. When acetylcholine (ACh) binds to nAChR, it causes the channel to open, allowing the influx of Na+ and the efflux of K+, leading to depolarization.',
          'Anion Channel (Selective): Example: GABA_A Receptor.: This receptor is selective for Cl⁻ ions. When γ-aminobutyric acid (GABA) binds to GABA_A receptors, it opens the channel, allowing Cl⁻ ions to enter the neuron, which typically results in hyperpolarization and an inhibitory response.',
          'Non-Selective Receptors: These ionotropic receptors allow the passage of multiple types of ions through the channel. Cation Channel (Non-Selective): Example: AMPA Receptor (α-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid receptor): This receptor, when activated by the neurotransmitter glutamate, allows the flow of Na⁺ and K⁺ and, in some cases, Ca²⁺ ions. This causes depolarization and excitation in the postsynaptic neuron.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Receptors are classified based on localization into membrane receptors on the cell surface, cytosolic receptors in the cytoplasm, nuclear receptors in the nucleus, and intracellular membrane receptors such as IP3 and ryanodine receptors on the endoplasmic reticulum.<<', critical: true },
            { type: 'paragraph', content: '>>Based on function, receptors are classified into ionotropic receptors which are ligand-gated ion channels, metabotropic receptors which are G-protein coupled, receptor enzymes with intrinsic enzymatic activity, and enzyme-linked receptors associated with enzymes.<<', critical: true },
            { type: 'paragraph', content: 'Ionotropic receptors are divided into selective and non-selective types.' },
            { type: 'paragraph', content: 'Selective cation channels allow passage of specific cations, for example the nicotinic acetylcholine receptor which is selective for sodium and potassium ions causing depolarization.' },
            { type: 'paragraph', content: 'Selective anion channels allow specific anions, for example the GABA-A receptor which is selective for chloride ions causing hyperpolarization and inhibitory response.' },
            { type: 'paragraph', content: 'Non-selective receptors allow passage of multiple ion types through the channel.' }
          ],
          raw: '>>Receptors are classified based on localization into membrane receptors on the cell surface, cytosolic receptors in the cytoplasm, nuclear receptors in the nucleus, and intracellular membrane receptors such as IP3 and ryanodine receptors on the endoplasmic reticulum. Based on function, receptors are classified into ionotropic receptors which are ligand-gated ion channels, metabotropic receptors which are G-protein coupled, receptor enzymes with intrinsic enzymatic activity, and enzyme-linked receptors associated with enzymes.<< Ionotropic receptors are divided into selective and non-selective types. Selective cation channels allow passage of specific cations, for example the nicotinic acetylcholine receptor which is selective for sodium and potassium ions causing depolarization. Selective anion channels allow specific anions, for example the GABA-A receptor which is selective for chloride ions causing hyperpolarization and inhibitory response. Non-selective receptors allow passage of multiple ion types through the channel.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Metabotropic receptors: types (G-protein coupled receptors, tyrosin-kinase receptors etc).',
        keyPoints: [
          'Metabotropic receptors: Do not form ion channels; initiate intracellular signaling cascades upon ligand binding',
          'G-protein coupled receptors (GPCRs): Seven transmembrane alpha-helices; extracellular ligand-binding site; intracellular G-protein binding site',
          'GPCR mechanism: Ligand binding causes conformational change → activates G-protein by GDP/GTP exchange on alpha subunit',
          'Tyrosine kinase receptors: Can be receptor tyrosine kinases (RTKs) with intrinsic kinase activity',
          'Structure: Extracellular ligand-binding domain, single transmembrane domain, intracellular catalytic or signaling domain',
          'Examples: Muscarinic acetylcholine receptors (GPCRs), receptor tyrosine kinases for growth factors',
          'Function: Activate second messenger systems, modulate various cellular processes through signal amplification'
        ],
        officialDefinitions: [
          'Metabotropic receptors are a type of receptor that, unlike ionotropic receptors, do not form ion channels themselves but rather activate intracellular signaling pathways through second messengers. These pathways often involve a G-protein as an intermediary between the receptor and its downstream effectors. There are several types of metabotropic receptors, each classified by their structure and mechanism of action:',
          'G-Protein Coupled Receptors (GPCRs) characterized by their structure, consisting of seven transmembrane alpha-helices that span the cell membrane. They have an extracellular N-terminus and an intracellular C-terminus. When a ligand (e.g., neurotransmitter, hormone) binds to the extracellular domain, it induces a conformational change in the receptor.This conformational change facilitates the activation of the associated G-protein by promoting the exchange of GDP for GTP on the alpha subunit of the G-protein.',
          'Tyrosine-Kinase Receptors (RTKs): have an extracellular ligand-binding domain, a single transmembrane domain, and an intracellular domain with intrinsic tyrosine kinase activity. Ligand binding (e.g., growth factors like EGF, insulin) causes receptor dimerization. This dimerization leads to autophosphorylation of specific tyrosine residues in the intracellular domain. Phosphorylated tyrosines serve as docking sites for various intracellular signaling proteins that have SH2 (Src homology 2) or PTB (phosphotyrosine-binding) domains. The recruited proteins initiate downstream signaling cascades, such as the Ras-MAPK pathway, PI3K-Akt pathway, and others, which regulate cellular processes like proliferation, differentiation, and survival. Functions: RTKs are critical in mediating responses to extracellular signals such as growth factors, cytokines, and hormones. Dysregulation or mutations in RTKs can lead to uncontrolled cell growth and cancer development.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Metabotropic receptors do not form ion channels but initiate cascades of intracellular events upon ligand binding. The main types include G-protein coupled receptors and tyrosine kinase receptors.' },
            { type: 'paragraph', content: 'G-protein coupled receptors have seven transmembrane alpha-helices spanning the cell membrane with an extracellular binding site for ligands and an intracellular binding site for G-proteins.' },
            { type: 'paragraph', content: 'When a ligand such as a neurotransmitter or hormone binds to the extracellular domain, it induces a conformational change that activates the associated G-protein by promoting exchange of GDP for GTP on the alpha subunit. An example is the muscarinic acetylcholine receptor.' },
            { type: 'paragraph', content: 'Tyrosine kinase receptors include receptor tyrosine kinases with intrinsic kinase activity. These receptors have an extracellular ligand-binding domain, single transmembrane domain, and intracellular domain with catalytic activity that phosphorylates target proteins upon activation.' }
          ],
          raw: 'Metabotropic receptors do not form ion channels but initiate cascades of intracellular events upon ligand binding. The main types include G-protein coupled receptors and tyrosine kinase receptors. G-protein coupled receptors have seven transmembrane alpha-helices spanning the cell membrane with an extracellular binding site for ligands and an intracellular binding site for G-proteins. When a ligand such as a neurotransmitter or hormone binds to the extracellular domain, it induces a conformational change that activates the associated G-protein by promoting exchange of GDP for GTP on the alpha subunit. An example is the muscarinic acetylcholine receptor. Tyrosine kinase receptors include receptor tyrosine kinases with intrinsic kinase activity. These receptors have an extracellular ligand-binding domain, single transmembrane domain, and intracellular domain with catalytic activity that phosphorylates target proteins upon activation.'
        }
      },
      {
        id: 'lo-5',
        isCritical: false,
        title: 'Heterotrimer G-proteins, types (Gs/Gi/Gq), functions.',
        keyPoints: [
          'Heterotrimeric G-proteins: Consist of three subunits - alpha, beta, and gamma; named for guanosine nucleotide binding',
          'Inactive state: G-protein complex binds GDP on alpha subunit; alpha subunit associated with beta-gamma subunits',
          'Activation: Receptor binding causes GDP-GTP exchange; alpha subunit dissociates and activates effectors',
          'Gs (stimulatory): Activates adenylyl cyclase → increases cAMP → activates PKA → phosphorylates target proteins',
          'Gi (inhibitory): Inhibits adenylyl cyclase → decreases cAMP → reduces PKA activity → modulates ion channels and neurotransmitter release',
          'Gq: Activates phospholipase C (PLC) → hydrolyzes PIP2 into IP3 and DAG → IP3 releases Ca2+ from ER, DAG activates PKC',
          'Signal termination: Alpha subunit hydrolyzes GTP to GDP and reassociates with beta-gamma subunits'
        ],
        officialDefinitions: [
          'G proteins are named for their ability to bind guanosine nucleotides and consist of three subunits: α, β, and γ (heterotrimeric structure). In their inactive state, the G protein complex binds guanosine diphosphate (GDP) on the α subunit.',
          'When a hormone (ligand) binds to the extracellular part of the receptor, a conformational change occurs, activating the receptor and causing it to interact with the G protein complex. This interaction induces the exchange of GDP for guanosine triphosphate (GTP) on the α subunit. Binding of GTP to the α subunit causes it to dissociate from the β and γ subunits, and the activated α subunit then associates with other intracellular signaling proteins.',
          'Gs (Stimulatory G-protein): Function: Activates adenylate cyclase, which increases the conversion of ATP to cAMP. Effect: Elevated levels of cAMP activate protein kinase A (PKA), which phosphorylates target proteins to regulate various cellular processes, including gene transcription and metabolic pathways.',
          'Gi (Inhibitory G-protein): Function: Inhibits adenylate cyclase, reducing cAMP production. Effect: Decreased cAMP levels lead to reduced PKA activity, modulating cell functions such as ion channel activity and neurotransmitter release.',
          'Gq: Function: Activates phospholipase C (PLC), which catalyzes the hydrolysis of PIP_2 into inositol triphosphate (IP_3) and diacylglycerol (DAG). Effect: IP_3 stimulates the release of calcium ions from the endoplasmic reticulum, increasing intracellular calcium concentration and promoting various calcium-dependent processes. DAG activates protein kinase C (PKC), which phosphorylates target proteins involved in cell proliferation, differentiation, and other functions.',
          'The signaling event is terminated when the hormone is removed, and the α subunit inactivates itself by converting its bound GTP back to GDP. This conversion causes the α subunit to re-associate with the β and γ subunits, forming an inactive, membrane-bound trimeric G protein complex once again.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Heterotrimeric G-proteins consist of three subunits - alpha, beta, and gamma - and are named for their ability to bind guanosine nucleotides.' },
            { type: 'paragraph', content: 'In the inactive state, the G-protein complex binds GDP on the alpha subunit. When a hormone or neurotransmitter binds to the receptor, this interaction induces exchange of GDP for GTP on the alpha subunit, causing it to dissociate from beta and gamma subunits.' },
            {
              type: 'list',
              intro: 'The three main types have different functions:',
              items: [
                'Gs or stimulatory G-protein activates adenylyl cyclase which increases conversion of ATP to cAMP, and elevated cAMP activates protein kinase A which phosphorylates target proteins',
                'Gi or inhibitory G-protein inhibits adenylyl cyclase reducing cAMP production, and decreased cAMP leads to reduced PKA activity modulating ion channel activity and neurotransmitter release',
                'Gq activates phospholipase C which catalyzes hydrolysis of PIP2 into IP3 and DAG. IP3 releases calcium from endoplasmic reticulum and DAG activates protein kinase C'
              ]
            }
          ],
          raw: 'Heterotrimeric G-proteins consist of three subunits - alpha, beta, and gamma - and are named for their ability to bind guanosine nucleotides. In the inactive state, the G-protein complex binds GDP on the alpha subunit. When a hormone or neurotransmitter binds to the receptor, this interaction induces exchange of GDP for GTP on the alpha subunit, causing it to dissociate from beta and gamma subunits. The three main types have different functions. Gs or stimulatory G-protein activates adenylyl cyclase which increases conversion of ATP to cAMP, and elevated cAMP activates protein kinase A which phosphorylates target proteins. Gi or inhibitory G-protein inhibits adenylyl cyclase reducing cAMP production, and decreased cAMP leads to reduced PKA activity modulating ion channel activity and neurotransmitter release. Gq activates phospholipase C which catalyzes hydrolysis of PIP2 into IP3 and DAG. IP3 releases calcium from endoplasmic reticulum and DAG activates protein kinase C.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Define the term second messengers, describe the most important members<< (cAMP, cGMP, calcium, IP3/DAG).',
        keyPoints: [
          'Second messengers: Intracellular signaling molecules released in response to first messengers (hormones/neurotransmitters) binding to receptors',
          'Function: Amplify signal strength within cell and facilitate various cellular processes',
          'cAMP (cyclic AMP): Derived from ATP by adenylyl cyclase (Gs activation); degraded by phosphodiesterase; activates PKA',
          'cGMP (cyclic GMP): Derived from GTP by guanylyl cyclase; activates PKG; causes vasodilation and smooth muscle relaxation (NO signaling)',
          'Calcium (Ca2+): Released by IP3 from ER or via calcium channels; binds calmodulin; activates calcium-dependent enzymes',
          'IP3 (inositol triphosphate): Binds ER receptors to release Ca2+ into cytoplasm; activates calcium-dependent pathways',
          'DAG (diacylglycerol): Remains in membrane; activates protein kinase C (PKC); modulates proteins in growth, differentiation, metabolism'
        ],
        officialDefinitions: [
          'Second messengers are intracellular signaling molecules that are released in response to extracellular signaling molecules (first messengers, such as hormones or neurotransmitters) binding to cell surface receptors. They help amplify the strength of the signal within the cell and facilitate a variety of cellular processes.',
          'cAMP (Cyclic Adenosine Monophosphate) is a hydrophilic molecule derived from ATP by the action of the enzyme adenylate cyclase. (Gs;Gi) Produced by: Adenylyl cyclase, which is activated by Gs-protein–coupled receptors. Degraded by: Phosphodiesterase (PDE). Function: Activates Protein Kinase A (PKA) → phosphorylates target proteins. Example: Epinephrine stimulating glycogen breakdown in muscle.',
          'cGMP (Cyclic Guanosine Monophosphate) A cyclic nucleotide derived from GTP by the enzyme guanylate cyclase. Produced by: Guanylyl cyclase (can be membrane-bound or soluble). Function: Activates Protein Kinase G (PKG) → vasodilation, relaxation of smooth muscle. Example: Nitric oxide (NO) signaling in blood vessels.',
          'Calcium (Ca2+) Released by: IP₃ or via calcium channels. Binds to calmodulin and activates calcium-dependent enzymes (e.g., myosin light-chain kinase).',
          'IP3/DAG (Inositol Triphosphate / Diacylglycerol) : Produced from the hydrolysis of PIP2 (phosphatidylinositol 4,5-bisphosphate) by phospholipase C (PLC). IP3 (Inositol Triphosphate): Binds to receptors on the endoplasmic reticulum to release stored calcium into the cytoplasm, which then activates various calcium-dependent pathways. DAG (Diacylglycerol): Remains in the cell membrane and activates Protein Kinase C (PKC), which modulates numerous proteins involved in growth, differentiation, and metabolism.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Second messengers are intracellular signaling molecules released in response to extracellular signaling molecules called first messengers, such as hormones or neurotransmitters, binding to cell surface receptors. They amplify the strength of the signal within the cell and facilitate various cellular processes.<<', critical: true },
            {
              type: 'list',
              intro: '>>The most important members are:<<',
              critical: true,
              items: [
                'cAMP or cyclic adenosine monophosphate is derived from ATP by adenylyl cyclase and activates protein kinase A',
                'cGMP or cyclic guanosine monophosphate is derived from GTP by guanylyl cyclase and activates protein kinase G for vasodilation and smooth muscle relaxation',
                'Calcium is released by IP3 or calcium channels and binds to calmodulin activating calcium-dependent enzymes',
                'IP3 and DAG are produced from PIP2 hydrolysis by phospholipase C. IP3 binds endoplasmic reticulum receptors releasing calcium, while DAG remains in the membrane activating protein kinase C'
              ]
            }
          ],
          raw: '>>Second messengers are intracellular signaling molecules released in response to extracellular signaling molecules called first messengers, such as hormones or neurotransmitters, binding to cell surface receptors. They amplify the strength of the signal within the cell and facilitate various cellular processes. The most important members are cAMP, cGMP, calcium, and IP3/DAG. cAMP or cyclic adenosine monophosphate is derived from ATP by adenylyl cyclase and activates protein kinase A. cGMP or cyclic guanosine monophosphate is derived from GTP by guanylyl cyclase and activates protein kinase G for vasodilation and smooth muscle relaxation. Calcium is released by IP3 or calcium channels and binds to calmodulin activating calcium-dependent enzymes. IP3 and DAG are produced from PIP2 hydrolysis by phospholipase C. IP3 binds endoplasmic reticulum receptors releasing calcium, while DAG remains in the membrane activating protein kinase C.<<'
        }
      },
      {
        id: 'lo-7',
        isCritical: false,
        title: 'Explain the importance of posttranslational modification (eg. phosphorylation) to control the activity of cellular proteins.',
        keyPoints: [
          'Posttranslational modification (PTM): Chemical changes to proteins after synthesis; regulates function, location, stability',
          'Phosphorylation: Reversible addition of phosphate group to serine, threonine, or tyrosine by kinases',
          'Effects: Can activate or inactivate enzymes, alter protein shape, modulate molecular interactions',
          'Reversibility: Phosphatases remove phosphate groups allowing dynamic tight control',
          'Importance: Enables rapid cellular responses without new protein synthesis (insulin signaling, MAPK cascade)',
          'Other PTMs: Ubiquitination (degradation), acetylation (gene expression), methylation, glycosylation (membrane targeting), lipidation',
          'Overall function: Allows cells to respond quickly and precisely to changing internal and external conditions'
        ],
        officialDefinitions: [
          'Posttranslational modification (PTM) refers to chemical changes made to proteins after they are synthesized, and it plays a critical role in regulating protein function, location, and stability. One of the most important types of PTM is phosphorylation, the reversible addition of a phosphate group to specific amino acids (serine, threonine, or tyrosine) by enzymes called kinases. This modification can activate or inactivate enzymes, alter protein shape, and modulate interactions with other molecules. Phosphorylation is essential in many signaling pathways—for example, insulin signaling and the MAPK cascade—where it triggers rapid cellular responses without the need for new protein synthesis. Phosphatases can reverse phosphorylation, allowing tight, dynamic control. Other PTMs, such as ubiquitination, acetylation, methylation, glycosylation, and lipidation, also help fine-tune protein behavior by regulating degradation, gene expression, membrane targeting, or protein folding. Overall, PTMs enable cells to respond quickly and precisely to changing internal and external conditions.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Posttranslational modification refers to chemical changes made to proteins after they are synthesized and plays a critical role in regulating protein function, location, and stability.' },
            { type: 'paragraph', content: 'One of the most important types is phosphorylation, the reversible addition of a phosphate group to specific amino acids serine, threonine, or tyrosine by enzymes called kinases. This modification can activate or inactivate enzymes, alter protein shape, and modulate interactions with other molecules.' },
            { type: 'paragraph', content: 'Phosphorylation is essential in many signaling pathways such as insulin signaling and the MAPK cascade where it triggers rapid cellular responses without the need for new protein synthesis. Phosphatases can reverse phosphorylation allowing tight dynamic control.' },
            { type: 'paragraph', content: 'Other posttranslational modifications include ubiquitination for protein degradation, acetylation for gene expression, methylation, glycosylation for membrane targeting, and lipidation.' },
            { type: 'paragraph', content: 'Overall, posttranslational modifications enable cells to respond quickly and precisely to changing internal and external conditions.' }
          ],
          raw: 'Posttranslational modification refers to chemical changes made to proteins after they are synthesized and plays a critical role in regulating protein function, location, and stability. One of the most important types is phosphorylation, the reversible addition of a phosphate group to specific amino acids serine, threonine, or tyrosine by enzymes called kinases. This modification can activate or inactivate enzymes, alter protein shape, and modulate interactions with other molecules. Phosphorylation is essential in many signaling pathways such as insulin signaling and the MAPK cascade where it triggers rapid cellular responses without the need for new protein synthesis. Phosphatases can reverse phosphorylation allowing tight dynamic control. Other posttranslational modifications include ubiquitination for protein degradation, acetylation for gene expression, methylation, glycosylation for membrane targeting, and lipidation. Overall, posttranslational modifications enable cells to respond quickly and precisely to changing internal and external conditions.'
        }
      },
      {
        id: 'lo-8',
        isCritical: true,
        title: '>>Explain the function of receptor enzymes and enzyme-linked receptors through 1-1 example.<<',
        keyPoints: [
          'Receptor enzymes: Have intrinsic enzymatic activity; ligand binding activates enzymatic function within receptor itself',
          'Receptor tyrosine kinase (RTK) example: Insulin receptor; single transmembrane domain with extracellular ligand-binding and intracellular catalytic domain',
          'RTK mechanism: Ligand binding → dimerization → trans-autophosphorylation of tyrosine residues → docking sites for signaling proteins (SH2/PTB domains)',
          'Enzyme-linked receptors: Associated with enzyme (not intrinsic); ligand binding activates associated enzyme',
          'JAK-STAT example: Cytokine receptors; ligand binding activates associated Janus kinase (JAK) enzymes',
          'JAK-STAT mechanism: JAKs phosphorylate receptor tyrosines → STAT proteins bind → STATs phosphorylated → dimerize → translocate to nucleus → act as transcription factors',
          'Functions: RTKs regulate cell growth, differentiation, metabolism; JAK-STAT regulates gene expression for immune responses and development'
        ],
        officialDefinitions: [
          'Receptor enzymes have an intrinsic enzymatic activity or are directly associated with enzymes. When a ligand (e.g., a hormone or growth factor) binds to these receptors, it triggers an enzymatic reaction within the receptor itself.',
          'Structure: Receptor enzymes usually have a single transmembrane domain with an extracellular ligand-binding region and an intracellular catalytic domain. The catalytic domain is capable of carrying out phosphorylation or dephosphorylation reactions when activated by ligand binding. One common type is the receptor tyrosine kinase (RTK), which has intrinsic kinase activity.',
          'Example: Receptor Tyrosine Kinases (RTKs) Function: RTKs are high-affinity cell surface receptors for various polypeptide growth factors, cytokines, and hormones. When activated, they undergo dimerization and transautophosphorylation of tyrosine residues on the intracellular domain. This phosphorylation triggers downstream signaling pathways involved in cell growth, differentiation, and metabolism.',
          'Enzyme-linked receptors do not have intrinsic enzymatic activity but are closely associated with enzymes (often kinases) that are activated upon ligand binding. These receptors can activate intracellular enzymes, such as kinases, indirectly through conformational changes.',
          'Structure: Enzyme-linked receptors often have a single transmembrane domain with an extracellular ligand-binding site and an intracellular region that is non-catalytic. Upon ligand binding, they activate associated enzymes such as tyrosine kinases, serine/threonine kinases, or guanylate cyclase.',
          'Example: Cytokine Receptors (JAK-STAT Pathway) Cytokine receptors activate the associated Janus kinase (JAK) enzymes when a cytokine binds. Activated JAKs phosphorylate specific tyrosine residues on the receptor, creating docking sites for Signal Transducer and Activator of Transcription (STAT) proteins. The phosphorylated STATs then dimerize and translocate to the nucleus, where they act as transcription factors to regulate gene expression.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>Receptor enzymes have intrinsic enzymatic activity where ligand binding activates the enzymatic function within the receptor itself.<<', critical: true },
            { type: 'paragraph', content: '>>An example is receptor tyrosine kinases such as the insulin receptor. The insulin receptor has an extracellular ligand-binding region and intracellular catalytic domain with tyrosine kinase activity.<<', critical: true },
            { type: 'paragraph', content: '>>When insulin binds, the receptor undergoes dimerization and trans-autophosphorylation of tyrosine residues on the intracellular domain. These phosphorylated tyrosines serve as docking sites for signaling proteins with SH2 or PTB domains, triggering downstream pathways regulating glucose uptake in muscle and fat cells.<<', critical: true },
            { type: 'paragraph', content: '>>Enzyme-linked receptors are associated with an enzyme that is activated upon ligand binding.<<', critical: true },
            { type: 'paragraph', content: '>>An example is cytokine receptors using the JAK-STAT pathway. When a cytokine binds, the receptor activates associated Janus kinase enzymes.<<', critical: true },
            { type: 'paragraph', content: '>>Activated JAKs phosphorylate tyrosine residues on the receptor creating docking sites for STAT proteins. Phosphorylated STATs dimerize and translocate to the nucleus where they act as transcription factors regulating gene expression.<<', critical: true }
          ],
          raw: '>>Receptor enzymes have intrinsic enzymatic activity where ligand binding activates the enzymatic function within the receptor itself. An example is receptor tyrosine kinases such as the insulin receptor. The insulin receptor has an extracellular ligand-binding region and intracellular catalytic domain with tyrosine kinase activity. When insulin binds, the receptor undergoes dimerization and trans-autophosphorylation of tyrosine residues on the intracellular domain. These phosphorylated tyrosines serve as docking sites for signaling proteins with SH2 or PTB domains, triggering downstream pathways regulating glucose uptake in muscle and fat cells. Enzyme-linked receptors are associated with an enzyme that is activated upon ligand binding. An example is cytokine receptors using the JAK-STAT pathway. When a cytokine binds, the receptor activates associated Janus kinase enzymes. Activated JAKs phosphorylate tyrosine residues on the receptor creating docking sites for STAT proteins. Phosphorylated STATs dimerize and translocate to the nucleus where they act as transcription factors regulating gene expression.<<'
        }
      },
      {
        id: 'lo-9',
        isCritical: false,
        title: 'Signal transduction via intracellular receptors: the general structure and function of cytosolic and nuclear receptors explained through 1-1 example.',
        keyPoints: [
          'Intracellular receptors: Located in cytosol or nucleus; bind lipid-soluble ligands (steroid hormones, thyroid hormones) that cross membrane',
          'Function: Act as transcription factors to regulate gene expression upon ligand binding',
          'Cytosolic receptors: Located in cytoplasm; inactive when bound to chaperone proteins (HSP90)',
          'Glucocorticoid receptor example: Cortisol binds → receptor dissociates from HSP90 → dimerizes → translocates to nucleus → binds GREs → regulates inflammation/metabolism genes',
          'Nuclear receptors: Already in nucleus even without ligand; have DNA-binding domain (DBD) and ligand-binding domain (LBD)',
          'Thyroid hormone receptor example: Without T3/T4, TR bound to DNA with co-repressors; ligand binding causes conformational change → releases co-repressors → recruits co-activators → initiates transcription',
          'Overall mechanism: Ligand binding → conformational change → DNA binding or altered transcription → gene expression changes'
        ],
        officialDefinitions: [
          'Intracellular receptors are located either in the cytosol or within the nucleus. These receptors typically bind to lipid-soluble ligands such as steroid hormones, thyroid hormones, or vitamin D, which can easily cross the cell membrane. Upon binding to their ligands, these receptors regulate gene expression by acting as transcription factors. The intracellular receptors can be broadly categorized into cytosolic receptors and nuclear receptors.',
          'Cytosolic Receptors: are located in the cytoplasm and often remain inactive by association with chaperone proteins, such as heat shock proteins (HSPs), until a ligand binds.',
          'Upon ligand binding, the receptor undergoes a conformational change, dissociates from its chaperone, and translocates to the nucleus. In the nucleus, it binds to specific DNA sequences called hormone response elements (HREs), influencing the transcription of target genes.',
          'Example: Glucocorticoid Receptor (GR) Ligand: Cortisol (a glucocorticoid hormone). Function: In the absence of cortisol, GR is bound to HSP90 in the cytoplasm. When cortisol binds, GR dissociates from HSP90, dimerizes, and translocates to the nucleus, where it binds to glucocorticoid response elements (GREs) in the DNA. This binding activates or represses transcription of genes involved in inflammation, metabolism, and stress response.',
          'Nuclear Receptors: are already present in the nucleus, even in the absence of a ligand. They usually have a DNA-binding domain (DBD) and a ligand-binding domain (LBD). Upon ligand binding, they undergo a conformational change, which either activates or represses transcription.',
          'Once activated by ligand binding, nuclear receptors can interact with co-activators or co-repressors to regulate transcription of target genes.',
          'Example: Thyroid Hormone Receptor (TR) Ligand: Thyroid hormones (T3 and T4). Function: In the absence of a ligand, TR is bound to DNA and associated with co-repressors, repressing gene transcription. Upon binding T3 or T4, the receptor undergoes a conformational change, dissociates from the co-repressors, recruits co-activators, and initiates transcription of genes involved in metabolism, growth, and development.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Intracellular receptors are located in the cytosol or nucleus and bind lipid-soluble ligands such as steroid hormones or thyroid hormones that can cross the cell membrane. Upon ligand binding, these receptors regulate gene expression by acting as transcription factors.' },
            { type: 'paragraph', content: 'Cytosolic receptors are located in the cytoplasm and remain inactive by association with chaperone proteins such as heat shock proteins.' },
            { type: 'paragraph', content: 'An example is the glucocorticoid receptor. In the absence of cortisol, the receptor is bound to HSP90 in the cytoplasm. When cortisol binds, the receptor dissociates from HSP90, dimerizes, and translocates to the nucleus where it binds to glucocorticoid response elements in DNA, activating or repressing transcription of genes involved in inflammation, metabolism, and stress response.' },
            { type: 'paragraph', content: 'Nuclear receptors are already present in the nucleus even without ligand.' },
            { type: 'paragraph', content: 'An example is the thyroid hormone receptor. Without T3 or T4, the receptor is bound to DNA associated with co-repressors repressing gene transcription. Upon binding thyroid hormone, the receptor undergoes conformational change, dissociates from co-repressors, recruits co-activators, and initiates transcription.' }
          ],
          raw: 'Intracellular receptors are located in the cytosol or nucleus and bind lipid-soluble ligands such as steroid hormones or thyroid hormones that can cross the cell membrane. Upon ligand binding, these receptors regulate gene expression by acting as transcription factors. Cytosolic receptors are located in the cytoplasm and remain inactive by association with chaperone proteins such as heat shock proteins. An example is the glucocorticoid receptor. In the absence of cortisol, the receptor is bound to HSP90 in the cytoplasm. When cortisol binds, the receptor dissociates from HSP90, dimerizes, and translocates to the nucleus where it binds to glucocorticoid response elements in DNA, activating or repressing transcription of genes involved in inflammation, metabolism, and stress response. Nuclear receptors are already present in the nucleus even without ligand. An example is the thyroid hormone receptor. Without T3 or T4, the receptor is bound to DNA associated with co-repressors repressing gene transcription. Upon binding thyroid hormone, the receptor undergoes conformational change, dissociates from co-repressors, recruits co-activators, and initiates transcription.'
        }
      },
      {
        id: 'lo-10',
        isCritical: false,
        title: 'Describe the following terms related to membrane receptors: activation, inactivation, internalization, up-regulation, down-regulation, sensitization, desensitization.',
        keyPoints: [
          'Activation: Receptor triggered by ligand binding causing conformational change that initiates intracellular signaling cascade',
          'Inactivation: Receptor becomes unable to respond to ligand; can occur via phosphorylation, modification, or inhibitory molecule binding',
          'Internalization: Cell surface receptors removed from membrane via endocytosis; reduces active receptor number and decreases ligand sensitivity',
          'Up-regulation: Increase in receptor number on cell surface in response to decreased ligand availability; increases cell sensitivity',
          'Down-regulation: Decrease in receptor number due to prolonged high ligand exposure; prevents overstimulation',
          'Sensitization: Cell becomes more responsive to ligand; due to increased receptor density or enhanced binding affinity',
          'Desensitization: Decreased receptor activity from continuous/repeated ligand exposure; involves phosphorylation, internalization, or uncoupling from signaling proteins'
        ],
        officialDefinitions: [
          'Activation: refers to the process by which a receptor is triggered by binding to its specific ligand (e.g., a hormone, neurotransmitter, or drug), causing a conformational change that initiates an intracellular signaling cascade.',
          'Inactivation: is the process through which a receptor becomes unable to respond to its ligand, either temporarily or permanently. This can happen due to receptor modification, internalization, or binding of inhibitory molecules.',
          'Internalization: is the process by which cell surface receptors are removed from the membrane and brought into the cell via endocytosis. This process reduces the number of active receptors on the cell surface and decreases sensitivity to the ligand.',
          'Up-Regulation: refers to the increase in the number of receptors on the cell surface in response to decreased ligand availability or other stimuli, making the cell more sensitive to the ligand.',
          'Down-Regulation: is the decrease in the number of receptors on the cell surface due to prolonged exposure to high levels of a ligand. This process prevents overstimulation and protects the cell from excessive activity.',
          'Sensitization: is the process by which a cell becomes more responsive to a ligand, often due to an increase in receptor density or changes in receptor conformation that increase binding affinity.',
          'Desensitization: refers to a decrease in receptor activity in response to continuous or repeated exposure to a ligand. This process prevents overstimulation and can involve receptor phosphorylation, internalization, or uncoupling from signaling proteins.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Activation refers to the process by which a receptor is triggered by binding to its specific ligand causing a conformational change that initiates an intracellular signaling cascade.' },
            { type: 'paragraph', content: 'Inactivation is the process through which a receptor becomes unable to respond to its ligand, happening through receptor modification, internalization, or binding of inhibitory molecules.' },
            { type: 'paragraph', content: 'Internalization is the process by which cell surface receptors are removed from the membrane and brought into the cell via endocytosis, reducing the number of active receptors and decreasing sensitivity to the ligand.' },
            { type: 'paragraph', content: 'Up-regulation refers to the increase in receptor number on the cell surface in response to decreased ligand availability, making the cell more sensitive to the ligand.' },
            { type: 'paragraph', content: 'Down-regulation is the decrease in receptor number on the cell surface due to prolonged exposure to high ligand levels, preventing overstimulation.' },
            { type: 'paragraph', content: 'Sensitization is the process by which a cell becomes more responsive to a ligand due to increased receptor density or changes in receptor conformation increasing binding affinity.' },
            { type: 'paragraph', content: 'Desensitization refers to decreased receptor activity in response to continuous or repeated ligand exposure, involving receptor phosphorylation, internalization, or uncoupling from signaling proteins.' }
          ],
          raw: 'Activation refers to the process by which a receptor is triggered by binding to its specific ligand causing a conformational change that initiates an intracellular signaling cascade. Inactivation is the process through which a receptor becomes unable to respond to its ligand, happening through receptor modification, internalization, or binding of inhibitory molecules. Internalization is the process by which cell surface receptors are removed from the membrane and brought into the cell via endocytosis, reducing the number of active receptors and decreasing sensitivity to the ligand. Up-regulation refers to the increase in receptor number on the cell surface in response to decreased ligand availability, making the cell more sensitive to the ligand. Down-regulation is the decrease in receptor number on the cell surface due to prolonged exposure to high ligand levels, preventing overstimulation. Sensitization is the process by which a cell becomes more responsive to a ligand due to increased receptor density or changes in receptor conformation increasing binding affinity. Desensitization refers to decreased receptor activity in response to continuous or repeated ligand exposure, involving receptor phosphorylation, internalization, or uncoupling from signaling proteins.'
        }
      }
    ]
  };

export default topic7;
