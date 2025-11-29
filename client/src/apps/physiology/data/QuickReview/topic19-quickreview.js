const topic19QuickReview = {
  topicId: 'topic-19',
  topicNumber: 19,
  learningObjectives: {
    'lo-1': {
      title: 'Characterize the structural organization of the parasympathetic nervous system: give the location of the cell bodies and axons of preganglionic neurons, also of the cell bodies and axons of ganglion cells.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Craniosacral Outflow Pattern'
        },
        {
          type: 'keypoint',
          content: 'The parasympathetic system has a craniosacral outflow with preganglionic neurons located in brainstem nuclei (CN III, VII, IX, X) and sacral spinal cord (S2-S4).'
        },
        {
          type: 'comparison',
          leftLabel: 'Preganglionic',
          rightLabel: 'Postganglionic',
          rows: [
            {
              left: 'Cell bodies in brainstem nuclei (Edinger-Westphal, superior/inferior salivatory, dorsal motor vagus) and S2-S4',
              right: 'Cell bodies in peripheral ganglia near or within effector organs'
            },
            {
              left: 'LONG axons project to ganglia near/within target organs',
              right: 'SHORT axons from ganglia to nearby target tissues'
            },
            {
              left: 'Release ACh at nicotinic receptors on ganglion cells',
              right: 'Release ACh at muscarinic receptors on target organs'
            }
          ]
        },
        {
          type: 'list',
          title: 'Key Parasympathetic Ganglia',
          items: [
            'Ciliary ganglion - innervates eye structures',
            'Pterygopalatine ganglion - innervates lacrimal glands and nasal mucosa',
            'Submandibular and otic ganglia - innervate salivary glands',
            'Terminal ganglia - innervate vagal targets (heart, lungs, GI tract)'
          ]
        },
        {
          type: 'keypoint',
          content: 'Contrast with sympathetic: Parasympathetic has LONG preganglionic and SHORT postganglionic fibers; sympathetic has the opposite pattern.'
        }
      ]
    },
    'lo-2': {
      title: 'Classify the axons of the autonomic nervous system found in peripheral nerves according to the Erlanger-Gasser classification (B and C fibers).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Erlanger-Gasser Classification in ANS'
        },
        {
          type: 'keypoint',
          content: 'Autonomic axons are classified as B fibers (preganglionic) and C fibers (postganglionic) based on diameter, myelination, and conduction velocity.'
        },
        {
          type: 'comparison',
          leftLabel: 'B Fibers (Preganglionic)',
          rightLabel: 'C Fibers (Postganglionic)',
          rows: [
            {
              left: 'Lightly myelinated',
              right: 'Unmyelinated'
            },
            {
              left: 'Diameter: 1-3 μm',
              right: 'Diameter: 0.3-1.3 μm'
            },
            {
              left: 'Conduction velocity: 3-15 m/s',
              right: 'Conduction velocity: 0.7-2.3 m/s'
            },
            {
              left: 'Function: Transmit signals from CNS to autonomic ganglia',
              right: 'Function: Carry impulses from ganglia to target organs'
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'This classification applies to BOTH sympathetic and parasympathetic divisions of the autonomic nervous system.'
        },
        {
          type: 'paragraph',
          content: 'The myelination difference explains why preganglionic transmission is faster than postganglionic transmission, affecting the temporal dynamics of autonomic responses.'
        }
      ]
    },
    'lo-3': {
      title: 'Characterize the synaptic connection between the preganglionic axon and the ganglion cell.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Autonomic Ganglionic Synapse'
        },
        {
          type: 'keypoint',
          content: 'The autonomic ganglionic synapse connects preganglionic axons to ganglion cells in both sympathetic and parasympathetic divisions, featuring cholinergic transmission with complex modulation.'
        },
        {
          type: 'steps',
          title: 'Synaptic Structure and Function',
          items: [
            'Multiple preganglionic boutons (containing ACh-filled vesicles) contact ganglion cell dendrites and soma',
            'Narrow synaptic cleft (20-50 nm) allows rapid neurotransmitter diffusion',
            'ACh released from preganglionic terminal binds to nicotinic receptors (N2 subtype) on postganglionic neuron',
            'Nicotinic receptors are ionotropic (ligand-gated Na+/K+ channels)',
            'ACh binding opens channels → Na+ influx and K+ efflux → rapid depolarization',
            'Fast EPSP generated; if threshold reached, action potential fires in postganglionic neuron'
          ]
        },
        {
          type: 'keypoint',
          content: 'Primary transmission is via NICOTINIC receptors producing fast EPSPs. Muscarinic receptors provide slower, longer-lasting modulation of excitability.'
        },
        {
          type: 'paragraph',
          content: 'Unlike the all-or-none responses at neuromuscular junctions, ganglionic synapses can produce graded responses due to modulation by neuropeptides, nitric oxide, and other neurotransmitters, allowing fine-tuned control of autonomic functions.'
        }
      ]
    },
    'lo-4': {
      title: 'Define the term autonomic ground plexus. Describe the structure and function of axon varicosities.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Autonomic Ground Plexus'
        },
        {
          type: 'keypoint',
          content: 'Autonomic ground plexus is the dense network of autonomic nerve fibers and terminal branches within or near target tissue - a functional meshwork, not a distinct anatomical structure.'
        },
        {
          type: 'paragraph',
          content: 'This plexus is found in smooth muscle, glands, and heart, containing both sympathetic and parasympathetic postganglionic fibers that locally influence effector cells.'
        },
        {
          type: 'header',
          content: 'Axon Varicosities'
        },
        {
          type: 'keypoint',
          content: 'Varicosities are bead-like swellings along autonomic axons serving as sites for neurotransmitter release without traditional synapses.'
        },
        {
          type: 'list',
          title: 'Varicosity Structure',
          items: [
            'Small synaptic vesicles containing ACh or norepinephrine',
            'Large dense-core vesicles containing neuropeptides (e.g., VIP)',
            'Mitochondria for energy production',
            'NO defined synaptic cleft - neurotransmitters released into extracellular space'
          ]
        },
        {
          type: 'keypoint',
          content: 'Function: Volume transmission - neurotransmitters diffuse to influence MULTIPLE target cells simultaneously over a broader area, enabling widespread innervation and fine-tuned autonomic control through co-release of multiple transmitters.'
        }
      ]
    },
    'lo-5': {
      title: 'Describe the biosynthesis, synaptic release, and elimination of acetylcholine. Describe the effects of acetylcholine on the receptors of target cells. Give examples of parasympathetic effects mediated by cholinergic receptors.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Acetylcholine Metabolism'
        },
        {
          type: 'steps',
          title: 'Biosynthesis',
          items: [
            'Choline taken from extracellular fluid via CHT1 transporter',
            'Acetyl-CoA produced in mitochondria from pyruvate',
            'Enzyme choline acetyltransferase (ChAT) combines choline + acetyl-CoA → ACh',
            'ACh packaged into synaptic vesicles by VAChT (vesicular ACh transporter)'
          ]
        },
        {
          type: 'steps',
          title: 'Synaptic Release',
          items: [
            'Action potential arrives at terminal',
            'Voltage-gated Ca2+ channels open',
            'Ca2+ influx triggers vesicle exocytosis',
            'ACh released into synaptic cleft'
          ]
        },
        {
          type: 'keypoint',
          content: 'Elimination: Acetylcholinesterase (AChE) in synaptic cleft rapidly breaks ACh → choline + acetate. Choline is recycled via CHT1 transporter.'
        },
        {
          type: 'comparison',
          leftLabel: 'Nicotinic Receptors (nAChRs)',
          rightLabel: 'Muscarinic Receptors (mAChRs)',
          rows: [
            {
              left: 'Ionotropic (ligand-gated ion channels)',
              right: 'Metabotropic (G-protein-coupled)'
            },
            {
              left: 'Location: Autonomic ganglia',
              right: 'Location: Parasympathetic target organs'
            },
            {
              left: 'Function: Fast ganglionic transmission',
              right: 'Function: Mediate parasympathetic effects'
            }
          ]
        },
        {
          type: 'list',
          title: 'Parasympathetic Effects via Muscarinic Receptors',
          items: [
            'M2 in heart → decreased heart rate and contractility',
            'M3 in bronchi → bronchoconstriction',
            'M3 in GI tract → increased motility and secretions',
            'M3 in bladder → detrusor contraction (urination)',
            'M1 in stomach → increased gastric acid secretion',
            'M3 in salivary/lacrimal glands → increased secretions'
          ]
        }
      ]
    },
    'lo-6': {
      title: 'Give further neurotransmitters released by parasympathetic nerves, and give examples of parasympathetic effects mediated by such neurotransmitters.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Parasympathetic Co-transmitters'
        },
        {
          type: 'keypoint',
          content: 'Beyond acetylcholine, parasympathetic nerves release multiple co-transmitters that modulate ACh effects and mediate additional physiological responses.'
        },
        {
          type: 'table',
          headers: ['Co-transmitter', 'Location', 'Effects'],
          rows: [
            {
              cols: ['Vasoactive Intestinal Peptide (VIP)', 'GI tract, glands', 'Vasodilation, increased blood flow, promotes fluid/electrolyte secretion']
            },
            {
              cols: ['Nitric Oxide (NO)', 'GI tract, male genitalia', 'Potent vasodilation, smooth muscle relaxation via increased cGMP']
            },
            {
              cols: ['Substance P', 'Various parasympathetic fibers', 'Pain signal transmission, blood flow regulation']
            },
            {
              cols: ['Enkephalins', 'Some parasympathetic nerves', 'Neuromodulation of pain and smooth muscle activity']
            },
            {
              cols: ['ATP', 'Nerve endings', 'Rapid smooth muscle depolarization and contraction via purinergic receptors']
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Co-transmitters are typically released during high-frequency stimulation alongside ACh, providing prolonged modulatory effects for fine-tuned autonomic control.'
        },
        {
          type: 'clinical',
          content: 'Clinical relevance: NO-mediated vasodilation is the basis for erectile function; VIP dysfunction contributes to secretory disorders in the GI tract and exocrine glands.'
        }
      ]
    },
    'lo-7': {
      title: 'Define the term autonomic tone.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Autonomic Tone'
        },
        {
          type: 'keypoint',
          content: 'Autonomic tone refers to the baseline level of autonomic nervous system activity in a target tissue or organ at rest, even in the absence of external stimulation.'
        },
        {
          type: 'paragraph',
          content: 'Both sympathetic and parasympathetic divisions maintain continuous low-level activity. This ongoing activity maintains homeostasis and allows for rapid adjustments by increasing or decreasing from the baseline.'
        },
        {
          type: 'keypoint',
          content: 'Dominant tone: One autonomic branch often dominates in specific organs, called the dominant tone for that organ.'
        },
        {
          type: 'table',
          headers: ['Organ/Tissue', 'Dominant Tone', 'Effects of Tone Changes'],
          rows: [
            {
              cols: ['Heart', 'Parasympathetic (vagal)', 'Decreased tone during inspiration → heart rate increases; denervation → resting heart rate increases']
            },
            {
              cols: ['GI tract', 'Parasympathetic', 'Maintains motility; decreased tone during stress/starvation/elderly → constipation']
            },
            {
              cols: ['Skin & skeletal muscle vessels', 'Sympathetic', 'Maintains vasoconstriction; loss during spinal shock → blood pooling in lower extremities']
            }
          ]
        },
        {
          type: 'clinical',
          content: 'Clinical significance: Understanding autonomic tone explains why vagal maneuvers (increased parasympathetic tone) can slow heart rate, why stress causes GI dysfunction, and why spinal cord injury causes initial hypotension.'
        }
      ]
    }
  }
};

export default topic19QuickReview;
