const topic20QuickReview = {
  topicId: 'topic-20',
  topicNumber: 20,
  learningObjectives: {
    'lo-1': {
      title: 'Characterize the structural organization of the sympathethic nervous system: give the location of the cell bodies and axons of preganglionic neurons, also of the cell bodies and axons of ganglion cells.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Thoracolumbar Division Structure'
        },
        {
          type: 'keypoint',
          content: 'Preganglionic cell bodies are located in the intermediolateral column (lateral horn) of spinal cord segments T1 to L3, forming the thoracolumbar division.'
        },
        {
          type: 'steps',
          title: 'Preganglionic Axon Pathway',
          steps: [
            'Exit spinal cord via ventral roots',
            'Enter white rami communicantes',
            'Travel to paravertebral ganglia (may synapse at same level, ascend/descend, or pass through)',
            'Or travel to prevertebral ganglia (celiac, superior/inferior mesenteric) near aorta'
          ]
        },
        {
          type: 'comparison',
          title: 'Ganglion Types',
          items: [
            {
              label: 'Paravertebral Ganglia',
              description: 'Sympathetic chain along both sides of vertebral column; preganglionic fibers may synapse, ascend, descend, or pass through'
            },
            {
              label: 'Prevertebral Ganglia',
              description: 'Anterior to vertebral column near aorta (celiac, superior mesenteric, inferior mesenteric); receive fibers that pass through chain'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Postganglionic cell bodies are in paravertebral or prevertebral ganglia close to the spinal cord. Their axons are long, traveling via gray rami communicantes to distant target organs, releasing norepinephrine (except sweat glands which release ACh).'
        },
        {
          type: 'table',
          title: 'Neurotransmitter Summary',
          headers: ['Location', 'Transmitter', 'Receptor'],
          rows: [
            ['Preganglionic → Ganglion', 'Acetylcholine', 'Nicotinic'],
            ['Postganglionic → Target (most)', 'Norepinephrine', 'Adrenergic (α, β)'],
            ['Postganglionic → Sweat glands', 'Acetylcholine', 'Muscarinic']
          ]
        }
      ]
    },
    'lo-2': {
      title: 'The sympathetic adrenergic system: describe the biosynthesis of noradrenaline and adrenaline, the synaptic release and elimination of noradrenaline.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Catecholamine Biosynthesis'
        },
        {
          type: 'steps',
          title: 'Noradrenaline Synthesis Pathway',
          steps: [
            'Tyrosine → DOPA (tyrosine hydroxylase, rate-limiting step)',
            'DOPA → Dopamine (DOPA decarboxylase in cytoplasm)',
            'Dopamine transported into vesicles by VMAT',
            'Dopamine → Noradrenaline (dopamine β-hydroxylase in vesicles)'
          ]
        },
        {
          type: 'keypoint',
          content: 'Adrenaline synthesis occurs only in adrenal medulla: Noradrenaline → Adrenaline via PNMT (phenylethanolamine N-methyltransferase), which is induced by cortisol from the adrenal cortex.'
        },
        {
          type: 'steps',
          title: 'Synaptic Release Mechanism',
          steps: [
            'Action potential arrives at presynaptic terminal',
            'Voltage-gated Ca²⁺ channels open',
            'Ca²⁺ influx triggers vesicle fusion',
            'Noradrenaline released into synaptic cleft via exocytosis',
            'Binds to adrenergic receptors on postsynaptic membrane'
          ]
        },
        {
          type: 'list',
          title: 'Noradrenaline Elimination Mechanisms',
          items: [
            'Primary reuptake: Norepinephrine transporter (NET) takes NE back into presynaptic neuron for repackaging or metabolism',
            'Mitochondrial metabolism: Monoamine oxidase (MAO) degrades NE to DHPG',
            'Non-neuronal metabolism: COMT (catechol-O-methyltransferase) in tissues produces normetanephrine',
            'Final metabolic product: Vanillylmandelic acid (VMA) excreted in urine',
            'Autoreceptor feedback: NE binds presynaptic α₂-adrenergic receptors to inhibit further release'
          ]
        }
      ]
    },
    'lo-3': {
      title: 'List the adrenergic receptor types found on target cells along with the respective signal transduction pathways. Give examples of adrenergic effects mediated by each receptor type.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Adrenergic Receptor Types and Functions'
        },
        {
          type: 'table',
          title: 'Alpha Receptors',
          headers: ['Receptor', 'G-Protein', 'Pathway', 'Key Effects'],
          rows: [
            ['α₁', 'Gq', 'PLC → IP₃/DAG → ↑Ca²⁺, PKC', 'Vasoconstriction, GI/bladder sphincter contraction, pupil dilation'],
            ['α₂', 'Gi', 'Inhibits adenylyl cyclase → ↓cAMP', 'Presynaptic NE release inhibition, ↓insulin, platelet aggregation']
          ]
        },
        {
          type: 'table',
          title: 'Beta Receptors',
          headers: ['Receptor', 'G-Protein', 'Pathway', 'Key Effects'],
          rows: [
            ['β₁', 'Gs', 'Adenylyl cyclase → ↑cAMP → ↑PKA', '↑Heart rate/contractility, renin release, lipolysis'],
            ['β₂', 'Gs', 'Adenylyl cyclase → ↑cAMP → ↑PKA', 'Bronchodilation, vasodilation (skeletal muscle), uterine relaxation, glycogenolysis'],
            ['β₃', 'Gs', 'Adenylyl cyclase → ↑cAMP → ↑PKA', 'Lipolysis, thermogenesis, bladder detrusor relaxation']
          ]
        },
        {
          type: 'keypoint',
          content: 'β₁ receptors have equal affinity for epinephrine and norepinephrine, while β₂ receptors have higher affinity for epinephrine.'
        },
        {
          type: 'comparison',
          title: 'Signal Transduction Pathways',
          items: [
            {
              label: 'Gq Pathway (α₁)',
              description: 'Activates PLC → IP₃ (releases Ca²⁺ from stores) + DAG (activates PKC) → smooth muscle contraction'
            },
            {
              label: 'Gi Pathway (α₂)',
              description: 'Inhibits adenylyl cyclase → decreased cAMP → reduced PKA activity → inhibition of cellular processes'
            },
            {
              label: 'Gs Pathway (β₁, β₂, β₃)',
              description: 'Activates adenylyl cyclase → increased cAMP → PKA activation → diverse effects depending on tissue'
            }
          ]
        }
      ]
    },
    'lo-4': {
      title: 'Describe the anatomical structure of the adrenal medulla and the regulation of hormone release.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Adrenal Medulla Structure and Function'
        },
        {
          type: 'keypoint',
          content: 'The adrenal medulla is the inner portion of the adrenal glands (atop kidneys), composed of chromaffin cells derived from neural crest cells that function as modified postganglionic sympathetic neurons.'
        },
        {
          type: 'list',
          title: 'Chromaffin Cell Characteristics',
          items: [
            'Large polyhedral cells arranged in clusters or cords',
            'Granular cytoplasm with secretory vesicles containing catecholamines',
            'Lack typical neuronal axons and dendrites',
            'Act as modified postganglionic sympathetic neurons',
            'Secrete hormones directly into bloodstream'
          ]
        },
        {
          type: 'keypoint',
          content: 'Unique innervation: The adrenal medulla is innervated by preganglionic sympathetic fibers (exception to the two-neuron sympathetic structure). These fibers release ACh on nicotinic receptors.'
        },
        {
          type: 'steps',
          title: 'Hormone Release Mechanism',
          steps: [
            'Sympathetic activation during stress/exercise/hypoglycemia',
            'Preganglionic fibers release ACh (co-transmitters: NPY, PACAP)',
            'ACh binds nicotinic receptors on chromaffin cells',
            'Ca²⁺ influx into chromaffin cells',
            'Exocytosis of vesicles → catecholamines into bloodstream',
            'Release ratio: ~80% epinephrine, ~20% norepinephrine'
          ]
        },
        {
          type: 'clinical',
          title: 'Cortisol-Epinephrine Connection',
          content: 'PNMT (the enzyme converting norepinephrine to epinephrine) is induced by cortisol from the adjacent adrenal cortex. This anatomical proximity ensures adequate epinephrine production during stress responses.'
        }
      ]
    },
    'lo-5': {
      title: 'Describe the transport of catecholamines in the circulation, their metabolism and excretion.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Catecholamine Transport and Elimination'
        },
        {
          type: 'keypoint',
          content: 'Catecholamines are water-soluble and circulate primarily free/unbound in blood, with a small fraction loosely bound to albumin. They have a short plasma half-life of approximately 2 minutes due to rapid uptake and metabolism.'
        },
        {
          type: 'comparison',
          title: 'Two Primary Metabolic Pathways',
          items: [
            {
              label: 'MAO (Monoamine Oxidase)',
              description: 'Located in mitochondria of nerve terminals, liver, kidneys. Deaminates catecholamines to DHPG and DOMA. MAO-A acts on NE/epinephrine/serotonin; MAO-B acts on dopamine.'
            },
            {
              label: 'COMT (Catechol-O-Methyltransferase)',
              description: 'Present in liver, kidneys, non-neuronal tissues. Methylates catecholamines: NE → normetanephrine, epinephrine → metanephrine.'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Final metabolic product: Vanillylmandelic acid (VMA) is the major end product of both norepinephrine and epinephrine metabolism.'
        },
        {
          type: 'list',
          title: 'Urinary Excretion Markers',
          items: [
            'Vanillylmandelic acid (VMA) - major end product',
            'Metanephrine (from epinephrine)',
            'Normetanephrine (from norepinephrine)',
            'MHPG (3-methoxy-4-hydroxyphenylglycol) - from NE in brain/periphery'
          ]
        },
        {
          type: 'clinical',
          title: 'Clinical Significance',
          content: 'Urinary VMA and metanephrines are used clinically to assess catecholamine activity and diagnose disorders like pheochromocytoma (catecholamine-secreting tumor).'
        }
      ]
    },
    'lo-6': {
      title: 'Give examples of sympathetic cholinergic effects, and also of non-adrenergic–non-cholinergic (NANC) sympathetic effects.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Atypical Sympathetic Neurotransmission'
        },
        {
          type: 'list',
          title: 'Sympathetic Cholinergic Effects (ACh from Sympathetic Neurons)',
          items: [
            'Eccrine sweat glands: ACh on muscarinic M₃ receptors → watery sweat secretion for evaporative cooling and thermoregulation',
            'Skeletal muscle vasodilation: ACh on endothelial muscarinic receptors → NO release → vasodilation → increased blood flow during exercise',
            'Thermoregulatory vasodilation: ACh causes skin blood vessel dilation via muscarinic receptors → heat dissipation'
          ]
        },
        {
          type: 'paragraph',
          content: 'These effects are unusual because sympathetic postganglionic neurons typically release norepinephrine, not acetylcholine.'
        },
        {
          type: 'list',
          title: 'Non-Adrenergic, Non-Cholinergic (NANC) Effects',
          items: [
            'GI tract inhibition: Nitric oxide (NO) and VIP → smooth muscle relaxation → decreased motility/peristalsis during fight-or-flight',
            'Vascular regulation: NO or ATP → direct vascular smooth muscle relaxation in GI and urogenital vascular beds',
            'Airway maintenance: NO → bronchial smooth muscle relaxation → maintained airway patency and reduced respiratory resistance'
          ]
        },
        {
          type: 'keypoint',
          content: 'NANC neurotransmitters like NO, VIP (vasoactive intestinal peptide), and neuropeptide Y serve as co-transmitters alongside primary neurotransmitters, providing fine-tuning of sympathetic responses.'
        }
      ]
    }
  }
};

export default topic20QuickReview;
