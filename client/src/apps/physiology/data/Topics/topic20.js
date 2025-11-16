const topic20 =   {
    id: 'topic-20',
    number: 20,
    category: 'neurophysiology',
    mcqs: ['mcq-1'],
    title: 'The sympathetic division of the autonomic nervous system. The adrenal medulla',
    subtitle: 'Organization and function of the thoracolumbar outflow system mediating fight-or-flight responses through adrenergic mechanisms and hormonal catecholamine release.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: true,
        title: '>>Characterize the structural organization of the sympathethic nervous system: give the location of the cell bodies and axons of preganglionic neurons, also of the cell bodies and axons of ganglion cells.<<',
        keyPoints: [
          'Thoracolumbar division: Preganglionic cell bodies in intermediolateral column (lateral horn) of spinal cord segments T1 to L3',
          'Preganglionic axons: Exit via ventral roots and white rami communicantes to paravertebral or prevertebral ganglia',
          'Paravertebral ganglia (sympathetic chain): Bilateral ganglia along vertebral column; preganglionic fibers may synapse at same level, ascend/descend, or pass through',
          'Prevertebral ganglia: Located anterior to vertebral column near aorta (celiac, superior mesenteric, inferior mesenteric); receive fibers that pass through chain',
          'Postganglionic cell bodies: In paravertebral or prevertebral ganglia close to spinal cord',
          'Postganglionic axons: Long fibers via gray rami communicantes to distant target organs; release norepinephrine (except sweat glands release ACh)',
          'Neurotransmitters: Preganglionic release ACh on nicotinic receptors; postganglionic release norepinephrine on adrenergic receptors'
        ],
        officialDefinitions: [
          'The sympathetic nervous system is a part of the autonomic nervous system responsible for the "fight or flight" response, mobilizing the body during stress. The cell bodies of sympathetic preganglionic neurons are located in the intermediolateral column (lateral horn) of the spinal cord from segments T1 to L3. This region is referred to as the thoracolumbar division of the sympathetic nervous system.',
          'The axons of these neurons leave the spinal cord through the ventral roots and enter the white rami communicantes, where they travel to one of two places: a) Paravertebral Ganglia (Sympathetic Chain Ganglia): They can synapse in the sympathetic chain ganglia at the same level, ascend or descend to other levels before synapsing, or pass through without synapsing. b) Prevertebral Ganglia (Collateral Ganglia): They pass through the sympathetic chain without synapsing and then synapse in prevertebral ganglia such as the celiac, superior mesenteric, or inferior mesenteric ganglia.',
          'The cell bodies of postganglionic sympathetic neurons are found in two types of ganglia: a) Paravertebral Ganglia: These are located along both sides of the vertebral column, forming the sympathetic chain (or trunk). b) Prevertebral Ganglia: Located anterior to the vertebral column, near large arteries like the aorta, and include the celiac, superior mesenteric, and inferior mesenteric ganglia.',
          'The axons of these neurons travel through the gray rami communicantes to reach the target organs. These axons are usually long because the sympathetic ganglia are located close to the spinal cord, and the target organs (smooth muscle, cardiac muscle, and glands) are relatively far away. They innervate various effector organs such as blood vessels, sweat glands, and the adrenal medulla, where they typically release norepinephrine (except for sweat glands, which release acetylcholine).',
          'The paravertebral ganglia form a chain on either side of the vertebral column, while the prevertebral ganglia are located in the abdominal cavity. Preganglionic neurons release acetylcholine (ACh), which acts on nicotinic receptors. Postganglionic neurons predominantly release norepinephrine (NE), which acts on adrenergic receptors. An exception is seen in sweat glands, where postganglionic neurons release ACh, acting on muscarinic receptors.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>The sympathetic nervous system has a thoracolumbar division with preganglionic neuron cell bodies located in the intermediolateral column or lateral horn of spinal cord segments T1 to L3.<<', critical: true },
            { type: 'paragraph', content: '>>Preganglionic axons exit via ventral roots and enter white rami communicantes, then travel to either paravertebral ganglia forming the sympathetic chain along both sides of the vertebral column, where they may synapse at the same level, ascend or descend before synapsing, or pass through without synapsing, or to prevertebral ganglia located anterior to the vertebral column near the aorta including celiac, superior mesenteric, and inferior mesenteric ganglia.<<', critical: true },
            { type: 'paragraph', content: '>>Postganglionic neuron cell bodies are located in these paravertebral or prevertebral ganglia close to the spinal cord.<<', critical: true },
            { type: 'paragraph', content: '>>Postganglionic axons are long, traveling via gray rami communicantes to reach distant target organs like blood vessels, cardiac muscle, and glands, typically releasing norepinephrine on adrenergic receptors, except sweat glands where they release acetylcholine on muscarinic receptors.<<', critical: true }
          ],
          raw: '>>The sympathetic nervous system has a thoracolumbar division with preganglionic neuron cell bodies located in the intermediolateral column or lateral horn of spinal cord segments T1 to L3.<< Preganglionic axons exit via ventral roots and enter white rami communicantes, then travel to either paravertebral ganglia forming the sympathetic chain along both sides of the vertebral column, where they may synapse at the same level, ascend or descend before synapsing, or pass through without synapsing, or to prevertebral ganglia located anterior to the vertebral column near the aorta including celiac, superior mesenteric, and inferior mesenteric ganglia. >>Postganglionic neuron cell bodies are located in these paravertebral or prevertebral ganglia close to the spinal cord.<< Postganglionic axons are long, traveling via gray rami communicantes to reach distant target organs like blood vessels, cardiac muscle, and glands, typically releasing norepinephrine on adrenergic receptors, except sweat glands where they release acetylcholine on muscarinic receptors.'
        }
      },
      {
        id: 'lo-2',
        isCritical: true,
        title: '>>The sympathetic adrenergic system: describe the biosynthesis of noradrenaline and adrenaline, the synaptic release and elimination of noradrenaline.<<',
        keyPoints: [
          'Biosynthesis pathway: Tyrosine → DOPA (tyrosine hydroxylase, rate-limiting) → Dopamine (DOPA decarboxylase) → Noradrenaline (dopamine β-hydroxylase in vesicles)',
          'Adrenaline synthesis: Noradrenaline → Adrenaline (phenylethanolamine N-methyltransferase/PNMT in adrenal medulla, induced by cortisol)',
          'Storage: Noradrenaline stored in synaptic vesicles via vesicular monoamine transporter (VMAT)',
          'Synaptic release: Action potential → voltage-gated Ca2+ channels open → Ca2+ influx → vesicle fusion and exocytosis → noradrenaline released into cleft',
          'Elimination - reuptake: Primary mechanism via norepinephrine transporter (NET) into presynaptic neuron for repackaging or metabolism',
          'Elimination - metabolism: MAO in mitochondria produces DHPG; COMT in non-neuronal tissues produces normetanephrine; final product vanillylmandelic acid (VMA)',
          'Autoreceptor inhibition: Noradrenaline binds presynaptic α2-adrenergic receptors providing negative feedback to reduce further release'
        ],
        officialDefinitions: [
          'The biosynthesis of noradrenaline and adrenaline occurs through a multi-step enzymatic pathway, starting from the amino acid tyrosine: 1. Tyrosine → Dihydroxyphenylalanine (DOPA): The enzyme tyrosine hydroxylase converts tyrosine into DOPA. This is the rate-limiting step in the synthesis of catecholamines and requires tetrahydrobiopterin as a cofactor.',
          '2. DOPA → Dopamine: DOPA is decarboxylated to form dopamine by the enzyme DOPA decarboxylase (also known as aromatic L-amino acid decarboxylase). This step occurs in the cytoplasm of neurons. 3. Dopamine → Noradrenaline (Norepinephrine): Dopamine is transported into synaptic vesicles via the vesicular monoamine transporter (VMAT) and then converted to noradrenaline by the enzyme dopamine β-hydroxylase.',
          '4. Noradrenaline → Adrenaline (Epinephrine): In the adrenal medulla, noradrenaline is converted to adrenaline by the enzyme phenylethanolamine N-methyltransferase (PNMT). PNMT is present only in the adrenal medulla and is induced by cortisol, which is released from the adrenal cortex.',
          'Synaptic Release of Noradrenaline: Storage in Vesicles: Noradrenaline is stored in synaptic vesicles in the nerve terminals of sympathetic postganglionic neurons. Action Potential and Calcium Influx: When an action potential arrives at the nerve terminal, it triggers the opening of voltage-gated calcium channels, allowing Ca²⁺ ions to enter the neuron. Fusion of Vesicles with the Membrane: The increase in intracellular Ca²⁺ concentration causes vesicles containing noradrenaline to fuse with the presynaptic membrane, releasing noradrenaline into the synaptic cleft. Binding to Adrenergic Receptors: Released noradrenaline diffuses across the synaptic cleft and binds to adrenergic receptors (α and β receptors) on the postsynaptic membrane of the effector organ, eliciting various physiological responses, such as vasoconstriction, increased heart rate, and bronchodilation.',
          'Elimination of Noradrenaline: Catechol-O-Methyltransferase (COMT): COMT is present in non-neuronal tissues and degrades noradrenaline to normetanephrine. The final products of noradrenaline metabolism are vanillylmandelic acid (VMA), which is excreted in the urine and used as a marker for catecholamine activity. Autoreceptor-Mediated Inhibition: Noradrenaline can bind to presynaptic α₂-adrenergic receptors, inhibiting further release of noradrenaline through negative feedback.',
          'NOREPINEPHRINE, EPINEPHRINE (co-transmitter: neuropeptid Y, somatostatin). Release: postganglionic terminals (norepinephrine - transmitter), adrenal medulla (mainly epinephrine – hormone). Elimination: presynaptic reuptake – monoamine-transporter (Na+-symport), metabolism: 1. mitochondria MAO (Monoamine Oxidase) A – norepinephrine, epinephrine, serotonin B – dopamine, 2. cortex: COMT (Catechol-O-Methyl-Transferase) endproduct: 3-methoxy-4-hydroxy-phenil-ethylglikol/mandelic acid.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'steps',
              intro: '>>Noradrenaline and adrenaline biosynthesis pathway:<<',
              items: [
                'Tyrosine is converted to DOPA by tyrosine hydroxylase (rate-limiting step)',
                'DOPA is decarboxylated to dopamine by DOPA decarboxylase',
                'Dopamine is transported into vesicles by VMAT',
                'Dopamine is converted to noradrenaline by dopamine beta-hydroxylase in vesicles',
                'In adrenal medulla only: noradrenaline is converted to adrenaline by phenylethanolamine N-methyltransferase (PNMT), which is induced by cortisol'
              ]
            },
            {
              type: 'steps',
              intro: '>>Synaptic release mechanism:<<',
              items: [
                'Action potential arrives at terminal',
                'Voltage-gated calcium channels open',
                'Calcium influx occurs',
                'Vesicles fuse with presynaptic membrane',
                'Noradrenaline released into synaptic cleft',
                'Binds to adrenergic receptors on target cells'
              ]
            },
            {
              type: 'list',
              intro: '>>Elimination mechanisms:<<',
              critical: true,
              items: [
                'Primary reuptake: Norepinephrine transporter (NET) takes noradrenaline back into presynaptic neuron for repackaging or metabolism',
                'Mitochondrial metabolism: Monoamine oxidase (MAO) breaks down noradrenaline',
                'Non-neuronal metabolism: Catechol-O-methyltransferase (COMT) in tissues produces normetanephrine',
                'Final product: Vanillylmandelic acid (VMA) excreted in urine',
                'Autoreceptor inhibition: Noradrenaline binds presynaptic alpha-2 receptors providing negative feedback'
              ]
            }
          ],
          raw: '>>Noradrenaline and adrenaline biosynthesis occurs through a multi-step pathway: tyrosine is converted to DOPA by tyrosine hydroxylase, the rate-limiting step; DOPA is decarboxylated to dopamine by DOPA decarboxylase; dopamine is transported into vesicles by VMAT and converted to noradrenaline by dopamine beta-hydroxylase.<< In the adrenal medulla only, noradrenaline is converted to adrenaline by phenylethanolamine N-methyltransferase or PNMT, which is induced by cortisol from the adrenal cortex. >>Synaptic release begins when an action potential triggers voltage-gated calcium channel opening, calcium influx causes vesicle fusion with the presynaptic membrane, and noradrenaline is released into the synaptic cleft to bind adrenergic receptors.<< Elimination occurs primarily through reuptake into the presynaptic neuron via the norepinephrine transporter NET, where it can be repackaged or metabolized by monoamine oxidase in mitochondria. Additional metabolism occurs via catechol-O-methyltransferase or COMT in non-neuronal tissues, with the final metabolic product being vanillylmandelic acid or VMA. Autoreceptor-mediated inhibition occurs when noradrenaline binds presynaptic alpha-two receptors, providing negative feedback.'
        }
      },
      {
        id: 'lo-3',
        isCritical: true,
        title: '>>List the adrenergic receptor types found on target cells along with the respective signal transduction pathways. Give examples of adrenergic effects mediated by each receptor type.<<',
        keyPoints: [
          'Alpha-1 receptors: Gq-coupled → PLC activation → IP3/DAG → increased Ca2+ and PKC; effects include vasoconstriction, GI/bladder sphincter contraction, pupillary dilation',
          'Alpha-2 receptors: Gi-coupled → inhibits adenylyl cyclase → decreased cAMP → decreased PKA; presynaptic autoreceptor inhibits NE release, decreases insulin secretion, platelet aggregation',
          'Beta-1 receptors: Gs-coupled → activates adenylyl cyclase → increased cAMP → increased PKA; effects include increased heart rate and contractility, renin release, lipolysis',
          'Beta-2 receptors: Gs-coupled → increased cAMP → increased PKA; effects include bronchodilation, vasodilation in skeletal muscle, uterine relaxation, hepatic glycogenolysis',
          'Beta-3 receptors: Gs-coupled → increased cAMP → increased PKA; effects include lipolysis in adipose tissue, thermogenesis, bladder detrusor relaxation',
          'Equal affinity: Beta-1 has equal affinity for epinephrine and norepinephrine; beta-2 has higher affinity for epinephrine'
        ],
        officialDefinitions: [
          'α₁-Adrenergic Receptors: Coupled to the Gq protein, which activates phospholipase C (PLC). PLC converts phosphatidylinositol bisphosphate (PIP₂) into inositol trisphosphate (IP₃) and diacylglycerol (DAG). IP₃ causes release of Ca²⁺ from intracellular stores, increasing intracellular Ca²⁺ concentration. DAG activates protein kinase C (PKC), leading to phosphorylation of various proteins. Physiological Effects: Vasoconstriction of blood vessels. Contraction of smooth muscles (e.g., sphincters in the gastrointestinal tract and bladder). Pupillary dilation (mydriasis) through contraction of the radial muscle in the iris.',
          'α₂-Adrenergic Receptors: Coupled to the Gi protein, which inhibits adenylyl cyclase. Inhibition of adenylyl cyclase decreases the formation of cyclic AMP (cAMP). This leads to decreased activity of protein kinase A (PKA) and inhibition of neurotransmitter release. Physiological Effects: Inhibition of norepinephrine release from presynaptic neurons (negative feedback mechanism). Decreased insulin release from pancreatic β-cells. Platelet aggregation.',
          'β₁-Adrenergic Receptors: Coupled to the Gs protein, which activates adenylyl cyclase. Activation of adenylyl cyclase increases cAMP levels. Increased cAMP activates protein kinase A (PKA), which phosphorylates proteins involved in cardiac muscle contraction and other physiological responses. Physiological Effects: Increased heart rate (chronotropy) and increased force of contraction (inotropy). Increased release of renin from juxtaglomerular cells in the kidneys. Lipolysis in adipose tissue, leading to increased fatty acid release.',
          'β₂-Adrenergic Receptors: Coupled to the Gs protein, which activates adenylyl cyclase. Activation of adenylyl cyclase increases cAMP levels. cAMP activates PKA, leading to phosphorylation and relaxation of smooth muscle cells. Physiological Effects: Bronchodilation (relaxation of bronchial smooth muscle). Vasodilation of blood vessels supplying skeletal muscle. Relaxation of uterine smooth muscle. Increased glycogenolysis in the liver.',
          'β₃-Adrenergic Receptors: Coupled to the Gs protein, which activates adenylyl cyclase. This leads to increased cAMP and activation of PKA. Physiological Effects: Lipolysis in adipose tissue, leading to breakdown of triglycerides and release of fatty acids. Relaxation of the detrusor muscle in the bladder.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: '>>Adrenergic receptor types and signal transduction pathways:<<',
              critical: true,
              items: [
                'Alpha-1 receptors: Gq-coupled, activating phospholipase C to produce IP3 and DAG, causing calcium release and protein kinase C activation; effects include vasoconstriction, contraction of GI and bladder sphincters, and pupillary dilation',
                'Alpha-2 receptors: Gi-coupled, inhibiting adenylyl cyclase and decreasing cAMP; function as presynaptic autoreceptors inhibiting norepinephrine release, also decrease insulin secretion and promote platelet aggregation',
                'Beta-1 receptors: Gs-coupled, activating adenylyl cyclase to increase cAMP and protein kinase A; effects include increased heart rate and contractility, renin release from kidneys, and lipolysis',
                'Beta-2 receptors: Gs-coupled with increased cAMP; effects include bronchodilation, vasodilation in skeletal muscle blood vessels, uterine relaxation, and hepatic glycogenolysis; higher affinity for epinephrine than norepinephrine',
                'Beta-3 receptors: Gs-coupled mediating lipolysis in adipose tissue, thermogenesis, and bladder detrusor muscle relaxation'
              ]
            }
          ],
          raw: '>>Adrenergic receptors include alpha-1, alpha-2, beta-1, beta-2, and beta-3 subtypes, each with distinct signal transduction pathways.<< Alpha-1 receptors are Gq-coupled, activating phospholipase C to produce IP3 and DAG, causing calcium release and protein kinase C activation; effects include vasoconstriction, contraction of GI and bladder sphincters, and pupillary dilation. Alpha-2 receptors are Gi-coupled, inhibiting adenylyl cyclase and decreasing cAMP; they function as presynaptic autoreceptors inhibiting norepinephrine release, and also decrease insulin secretion and promote platelet aggregation. Beta-1 receptors are Gs-coupled, activating adenylyl cyclase to increase cAMP and protein kinase A; effects include increased heart rate and contractility, renin release from kidneys, and lipolysis. Beta-2 receptors are also Gs-coupled with increased cAMP; effects include bronchodilation, vasodilation in skeletal muscle blood vessels, uterine relaxation, and hepatic glycogenolysis; beta-2 has higher affinity for epinephrine than norepinephrine. Beta-3 receptors are Gs-coupled and mediate lipolysis in adipose tissue, thermogenesis, and bladder detrusor muscle relaxation.'
        }
      },
      {
        id: 'lo-4',
        isCritical: true,
        title: '>>Describe the anatomical structure of the adrenal medulla and the regulation of hormone release.<<',
        keyPoints: [
          'Location and structure: Inner part of adrenal glands atop kidneys; composed of chromaffin cells (modified postganglionic sympathetic neurons from neural crest)',
          'Chromaffin cells: Large polyhedral cells in clusters/cords; granular cytoplasm with secretory vesicles containing catecholamines; no axons/dendrites',
          'Innervation: Preganglionic sympathetic fibers (exception to two-neuron sympathetic structure) release acetylcholine on nicotinic receptors',
          'Hormone release ratio: Approximately 80% epinephrine (adrenaline), 20% norepinephrine; ratio altered by stress',
          'Release mechanism: ACh binding → nicotinic receptor activation → Ca2+ influx → exocytosis of vesicles → catecholamines into bloodstream',
          'Regulation triggers: Sympathetic activation during stress, exercise, hypoglycemia, physical work, pain, blood pressure drop (alarm reaction)',
          'Co-transmitters: Neuropeptide Y and PACAP (pituitary adenylate cyclase-activating polypeptide) co-released with preganglionic ACh'
        ],
        officialDefinitions: [
          'The adrenal medulla is the inner part of the adrenal glands, located on top of the kidneys. It is composed primarily of chromaffin cells, which are derived from the neural crest cells and act as modified postganglionic sympathetic neurons. These cells are responsible for synthesizing and secreting catecholamines—mainly adrenaline (epinephrine) and to a lesser extent, noradrenaline (norepinephrine).',
          'Chromaffin Cells: Large, polyhedral cells arranged in clusters or cords. Granular cytoplasm due to the presence of secretory vesicles containing catecholamines. No axons or dendrites as typical neurons would have, but they respond to neuronal stimuli. Postganglionic neurons.',
          'Sympathetic Innervation: The adrenal medulla is innervated by preganglionic sympathetic fibers, which release acetylcholine. Acetylcholine binds to nicotinic receptors on the chromaffin cells, stimulating catecholamine release.',
          'Regulation of Hormone Release: 1. Sympathetic Nervous System Activation: When the sympathetic nervous system is activated (e.g., during stress, exercise, or hypoglycemia), preganglionic sympathetic fibers release acetylcholine, which binds to nicotinic receptors on chromaffin cells. 2. Stimulation of Catecholamine Synthesis and Release: The binding of acetylcholine triggers the influx of calcium ions (Ca²⁺) into the chromaffin cells. This rise in intracellular calcium stimulates the exocytosis of secretory vesicles containing adrenaline and noradrenaline into the bloodstream. 3. Hormonal Release: About 80% of the hormone released is adrenaline, and 20% is noradrenaline. The ratio of adrenaline to noradrenaline can be altered by various factors like stress, which increases the proportion of adrenaline release.',
          'Part of the sympathetic nervous system: modified ganglion + endocrine gland. Chromaffin cells: Pericapillary cells in medulla, paraganglionic region, Receiving cholinergic preganglionic fibers (co-transmitter: PACAP), Synthesis, storage, and release of epinephrine (co-transmitter: neuropeptid Y). Alarm reaction (Cannon): physical work, stress, pain, drop in blood pressure, hypoglycemia.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>The adrenal medulla is the inner part of the adrenal glands located atop the kidneys, composed primarily of chromaffin cells derived from neural crest cells that act as modified postganglionic sympathetic neurons.<<', critical: true },
            { type: 'paragraph', content: 'These are large polyhedral cells arranged in clusters or cords with granular cytoplasm containing secretory vesicles filled with catecholamines; they lack typical neuronal axons and dendrites.' },
            { type: 'paragraph', content: '>>The adrenal medulla is innervated by preganglionic sympathetic fibers, which is an exception to the usual two-neuron sympathetic structure.<<', critical: true },
            { type: 'paragraph', content: 'These preganglionic fibers release acetylcholine that binds to nicotinic receptors on chromaffin cells. When the sympathetic nervous system is activated during stress, exercise, or hypoglycemia, acetylcholine binding triggers calcium influx into chromaffin cells, stimulating exocytosis of secretory vesicles containing catecholamines into the bloodstream.' },
            { type: 'paragraph', content: 'About eighty percent of the hormone released is epinephrine or adrenaline and twenty percent is norepinephrine; this ratio can be altered by various factors like stress. The enzyme PNMT responsible for converting norepinephrine to epinephrine is induced by cortisol from the adjacent adrenal cortex.' }
          ],
          raw: '>>The adrenal medulla is the inner part of the adrenal glands located atop the kidneys, composed primarily of chromaffin cells derived from neural crest cells that act as modified postganglionic sympathetic neurons.<< These are large polyhedral cells arranged in clusters or cords with granular cytoplasm containing secretory vesicles filled with catecholamines; they lack typical neuronal axons and dendrites. >>The adrenal medulla is innervated by preganglionic sympathetic fibers, which is an exception to the usual two-neuron sympathetic structure.<< These preganglionic fibers release acetylcholine that binds to nicotinic receptors on chromaffin cells. When the sympathetic nervous system is activated during stress, exercise, or hypoglycemia, acetylcholine binding triggers calcium influx into chromaffin cells, stimulating exocytosis of secretory vesicles containing catecholamines into the bloodstream. About eighty percent of the hormone released is epinephrine or adrenaline and twenty percent is norepinephrine; this ratio can be altered by various factors like stress. The enzyme PNMT responsible for converting norepinephrine to epinephrine is induced by cortisol from the adjacent adrenal cortex.'
        }
      },
      {
        id: 'lo-5',
        isCritical: false,
        title: 'Describe the transport of catecholamines in the circulation, their metabolism and excretion.',
        keyPoints: [
          'Transport: Water-soluble catecholamines circulate primarily free/unbound in blood; small fraction loosely bound to albumin or plasma proteins',
          'Short half-life: Approximately 2 minutes in plasma due to rapid uptake and metabolism',
          'MAO pathway: Monoamine oxidase in mitochondria (nerve terminals, liver, kidneys) produces DHPG and DOMA; MAO-A deaminates NE/epinephrine/serotonin, MAO-B deaminates dopamine',
          'COMT pathway: Catechol-O-methyltransferase in liver, kidneys, synaptic cleft methylates catecholamines; NE → normetanephrine, epinephrine → metanephrine',
          'Final product: Vanillylmandelic acid (VMA) is major end product of both NE and epinephrine metabolism',
          'Excretion: Primary route through urine; VMA, metanephrine, normetanephrine, and MHPG (3-methoxy-4-hydroxyphenylglycol) measured as markers',
          'Clinical significance: Urinary VMA and metanephrines used to assess catecholamine activity and diagnose disorders'
        ],
        officialDefinitions: [
          'Catecholamines are hydrophilic and do not easily cross cell membranes; thus, they are transported in the blood primarily in their free, unbound form. A small fraction of circulating catecholamines can also be loosely bound to plasma proteins such as albumin.',
          'The half-life of catecholamines in the plasma is relatively short, usually around 2 minutes, due to rapid uptake and metabolism.',
          'MAO is found in the mitochondria of presynaptic nerve terminals and other tissues, including the liver and kidneys. MAO deaminates catecholamines to produce the metabolites 3,4-dihydroxyphenylglycol (DHPG) and dihydroxymandelic acid (DOMA). There are two isoforms of MAO: MAO-A and MAO-B. MAO-A primarily deaminates norepinephrine, epinephrine, and serotonin, while MAO-B mainly deaminates dopamine.',
          'COMT is present in non-neuronal tissues, such as the liver, kidneys, and other tissues, including the synaptic cleft. COMT methylates catecholamines, converting norepinephrine and epinephrine into normetanephrine and metanephrine, respectively.',
          'The final metabolic product of both norepinephrine and epinephrine is vanillylmandelic acid (VMA).',
          'The primary route of excretion for catecholamines and their metabolites is through the urine. The key excreted metabolites include: Vanillylmandelic Acid (VMA): The major end product of both norepinephrine and epinephrine metabolism. Metanephrine and Normetanephrine: Intermediate metabolites that can be measured in the urine and plasma to assess catecholamine activity. 3-Methoxy-4-hydroxyphenylglycol (MHPG): A major metabolite of norepinephrine in the brain and peripheral tissues.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Catecholamines are water-soluble and transported in blood primarily in free, unbound form, with a small fraction loosely bound to plasma proteins like albumin. They have a short half-life of approximately 2 minutes due to rapid uptake and metabolism.' },
            {
              type: 'list',
              intro: 'Metabolism occurs through two primary enzymatic pathways:',
              items: [
                'Monoamine oxidase (MAO): Found in mitochondria of nerve terminals, liver, and kidneys, deaminates catecholamines to produce metabolites like DHPG and DOMA. MAO-A primarily acts on norepinephrine, epinephrine, and serotonin, while MAO-B acts on dopamine',
                'Catechol-O-methyltransferase (COMT): Present in liver, kidneys, and non-neuronal tissues, methylates catecholamines, converting norepinephrine to normetanephrine and epinephrine to metanephrine'
              ]
            },
            { type: 'paragraph', content: 'The final metabolic product of both norepinephrine and epinephrine is vanillylmandelic acid (VMA).' },
            { type: 'paragraph', content: 'Excretion occurs primarily through urine, with key metabolites including VMA, metanephrine, normetanephrine, and MHPG (3-methoxy-4-hydroxyphenylglycol) measured as markers of catecholamine activity.' }
          ],
          raw: 'Catecholamines are water-soluble and transported in blood primarily in free, unbound form, with a small fraction loosely bound to plasma proteins like albumin. They have a short half-life of approximately two minutes due to rapid uptake and metabolism. Metabolism occurs through two primary enzymatic pathways: monoamine oxidase or MAO, found in mitochondria of nerve terminals, liver, and kidneys, deaminates catecholamines to produce metabolites like DHPG and DOMA, with MAO-A primarily acting on norepinephrine, epinephrine, and serotonin, while MAO-B acts on dopamine. Catechol-O-methyltransferase or COMT, present in liver, kidneys, and non-neuronal tissues, methylates catecholamines, converting norepinephrine to normetanephrine and epinephrine to metanephrine. The final metabolic product of both norepinephrine and epinephrine is vanillylmandelic acid or VMA. Excretion occurs primarily through urine, with key metabolites including VMA, metanephrine, normetanephrine, and MHPG or 3-methoxy-4-hydroxyphenylglycol measured as markers of catecholamine activity.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: '>>Give examples of sympathetic cholinergic effects,<< and also of non-adrenergic–non-cholinergic (NANC) sympathetic effects.',
        keyPoints: [
          'Sympathetic cholinergic - sweat glands: Eccrine sweat gland stimulation via ACh on muscarinic M3 receptors causes watery sweat secretion for thermoregulation',
          'Sympathetic cholinergic - vasodilation: ACh on muscarinic receptors in skeletal muscle vessels causes NO release → vasodilation; aids blood flow during exercise',
          'Sympathetic cholinergic - thermoregulation: ACh causes skin vessel dilation via muscarinic receptors → increased blood flow → heat dissipation',
          'NANC - GI tract: Nitric oxide (NO) and VIP cause GI smooth muscle relaxation → decreased motility/peristalsis during fight-or-flight',
          'NANC - vasodilation: NO or ATP causes direct vascular smooth muscle relaxation in GI and urogenital vascular beds',
          'NANC - airway: NO causes bronchial smooth muscle relaxation → maintains airway patency and reduces respiratory resistance',
          'Co-transmitter role: VIP and neuropeptide Y co-released with primary transmitters for modulation'
        ],
        officialDefinitions: [
          'Sweat Glands (Eccrine Sweat Glands): Stimulation of eccrine sweat glands leads to the secretion of watery sweat. Muscarinic receptors (M₃ subtype) are activated by ACh released from postganglionic sympathetic neurons. Sweating helps regulate body temperature through evaporative cooling.',
          'Vasodilation in Skeletal Muscle: Cholinergic sympathetic fibers can cause vasodilation in some blood vessels within skeletal muscle. Muscarinic receptors on endothelial cells cause the release of nitric oxide, leading to vasodilation. Although this is a minor effect compared to adrenergic vasodilation, it helps increase blood flow to active muscles during exercise or stress.',
          'Thermoregulatory Vasodilation: ACh release causes vasodilation of blood vessels in the skin. Muscarinic receptors in blood vessels of the skin. Physiological Function: Assists in heat dissipation by increasing blood flow to the skin and facilitating heat loss.',
          'Gastrointestinal Tract (Inhibitory Effect): Nitric Oxide (NO) and Vasoactive Intestinal Peptide (VIP). Relaxation of gastrointestinal smooth muscle, leading to decreased motility and peristalsis. Helps prevent unnecessary gastrointestinal activity during the "fight or flight" response, diverting energy and blood flow to more critical areas like skeletal muscles.',
          'Vasodilation in Certain Blood Vessels: Nitric Oxide (NO) or Adenosine Triphosphate (ATP). Direct relaxation of vascular smooth muscle. Modulates blood flow and pressure in specific vascular beds, particularly in the gastrointestinal and urogenital systems.',
          'Airway Relaxation: Nitric Oxide (NO). Relaxation of bronchial smooth muscle. Helps maintain airway patency and reduces resistance in the respiratory tract.'
        ],
        examAnswer: {
          formatted: [
            {
              type: 'list',
              intro: '>>Sympathetic cholinergic effects (ACh release from sympathetic neurons):<<',
              critical: true,
              items: [
                'Eccrine sweat glands: ACh acts on muscarinic M3 receptors to produce watery sweat for evaporative cooling and thermoregulation',
                'Skeletal muscle vasodilation: Cholinergic sympathetic fibers cause muscarinic receptor activation on endothelial cells leading to nitric oxide release and vasodilation to increase blood flow during exercise',
                'Thermoregulatory vasodilation: ACh causes dilation of skin blood vessels via muscarinic receptors to facilitate heat dissipation'
              ]
            },
            {
              type: 'list',
              intro: 'Non-adrenergic non-cholinergic (NANC) sympathetic effects:',
              items: [
                'Gastrointestinal tract inhibition: Nitric oxide and vasoactive intestinal peptide (VIP) cause relaxation of GI smooth muscle, decreasing motility and peristalsis during fight-or-flight response',
                'Vasodilation in certain blood vessels: Nitric oxide or ATP directly relaxes vascular smooth muscle to modulate blood flow in GI and urogenital systems',
                'Airway relaxation: Nitric oxide causes bronchial smooth muscle relaxation, helping maintain airway patency and reduce respiratory resistance'
              ]
            }
          ],
          raw: '>>Sympathetic cholinergic effects occur when sympathetic postganglionic neurons release acetylcholine instead of norepinephrine.<< Examples include eccrine sweat gland stimulation where acetylcholine acts on muscarinic M3 receptors to produce watery sweat for evaporative cooling and thermoregulation; vasodilation in skeletal muscle where cholinergic sympathetic fibers cause muscarinic receptor activation on endothelial cells leading to nitric oxide release and vasodilation to increase blood flow during exercise; and thermoregulatory vasodilation where acetylcholine causes dilation of skin blood vessels via muscarinic receptors to facilitate heat dissipation. Non-adrenergic non-cholinergic or NANC sympathetic effects involve neurotransmitters other than norepinephrine or acetylcholine. Examples include gastrointestinal tract inhibition where nitric oxide and vasoactive intestinal peptide or VIP cause relaxation of GI smooth muscle, decreasing motility and peristalsis during fight-or-flight response; vasodilation in certain blood vessels where nitric oxide or ATP directly relaxes vascular smooth muscle to modulate blood flow in GI and urogenital systems; and airway relaxation where nitric oxide causes bronchial smooth muscle relaxation, helping maintain airway patency and reduce respiratory resistance.'
        }
      }
    ]
  };

export default topic20;
