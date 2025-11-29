const topic46QuickReview = {
  topicId: 'topic-46',
  topicNumber: 46,
  learningObjectives: {
    'lo-1': {
      title: 'Define the autoregulation of blood flow. Distinguish between short-term and long-term autoregulatory responses.',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          text: 'Autoregulation: Intrinsic ability of organs/tissues to maintain constant blood flow despite perfusion pressure changes (MAP 60-160 mmHg)',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Short-Term (Seconds-Minutes)',
            items: [
              'Myogenic response: stretch → Ca²⁺ influx → contraction',
              'Metabolic regulation: ↓O₂ → vasodilators (adenosine, CO₂, H⁺, K⁺)',
              'Shear stress → NO release → vasodilation'
            ]
          },
          right: {
            title: 'Long-Term (Days-Weeks)',
            items: [
              'Angiogenesis: new capillary formation',
              'Vascular remodeling: structural diameter changes',
              'Mediated by VEGF, FGF, chronic hypoxia'
            ]
          }
        },
        {
          type: 'paragraph',
          text: 'Most critical in brain, heart, and kidney where constant perfusion is essential for function, operating independently of nervous or hormonal control.',
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Describe the contribution of myogenic tone to local regulation of blood flow. Describe the Bayliss effect.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Myogenic Tone Mechanism',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Pressure-sensing cascade:',
          items: [
            'Increased intravascular pressure stretches arteriolar wall',
            'Stretch-activated ion channels open → Ca²⁺ influx',
            'Ca²⁺ activates myosin light chain kinase (MLCK)',
            'Smooth muscle contracts → vasoconstriction',
            'Increased resistance stabilizes blood flow'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Bayliss Effect: Arterioles constrict with increased pressure/stretch and dilate with decreased pressure/stretch, preventing overperfusion and maintaining flow during hypotension',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Especially important in cerebral and renal circulation for maintaining stable perfusion despite blood pressure fluctuations'
        }
      ]
    },
    'lo-3': {
      title: 'Enlist the vasoactive mediators released from vascular endothelium. Describe the biosynthesis of nitric oxide and its actions on the vascular smooth muscle.',
      isCritical: true,
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Vasodilators',
            items: [
              'Nitric oxide (NO)',
              'Prostacyclin (PGI₂)',
              'EDHF',
              'Bradykinin',
              'Adenosine'
            ]
          },
          right: {
            title: 'Vasoconstrictors',
            items: [
              'Endothelin-1 (ET-1)',
              'Thromboxane A₂ (TXA₂)',
              'Angiotensin II',
              'Reactive oxygen species (ROS)'
            ]
          }
        },
        {
          type: 'header',
          text: 'Nitric Oxide Biosynthesis',
          critical: true
        },
        {
          type: 'list',
          intro: 'NO synthesis requirements:',
          items: [
            'Enzyme: endothelial nitric oxide synthase (eNOS)',
            'Substrate: L-arginine',
            'Cofactors: Ca²⁺, calmodulin, tetrahydrobiopterin (BH4)',
            'Stimuli: shear stress, acetylcholine, bradykinin, histamine'
          ],
          critical: true
        },
        {
          type: 'steps',
          intro: 'NO mechanism of action on smooth muscle:',
          items: [
            'NO diffuses from endothelium to smooth muscle',
            'Activates soluble guanylyl cyclase (sGC)',
            'Increases cyclic GMP (cGMP)',
            'cGMP activates protein kinase G (PKG)',
            'PKG decreases intracellular Ca²⁺',
            'Smooth muscle relaxes → vasodilation'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'NO effects: Vasodilation (↓resistance, ↓BP), anti-platelet aggregation, anti-inflammatory (↓leukocyte adhesion)',
          critical: true
        }
      ]
    },
    'lo-4': {
      title: 'Describe how the theory of metabolic regulation of blood flow accounts for active hyperemia and reactive hyperemia. Identify the role of PO2, PCO2, pH, adenosine, PGE2, and K+-ions in the control of local blood flow.',
      isCritical: false,
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Active Hyperemia',
            items: [
              'During increased activity (exercise)',
              'Metabolic by-products accumulate',
              'Vasodilation matches increased demand',
              'Example: muscle blood flow during exercise'
            ]
          },
          right: {
            title: 'Reactive Hyperemia',
            items: [
              'After ischemia/occlusion',
              'Metabolites accumulate during blockage',
              'Release → transient flow exceeds baseline',
              'Example: limb after tourniquet release'
            ]
          }
        },
        {
          type: 'header',
          text: 'Metabolic Regulators',
          critical: false
        },
        {
          type: 'table',
          headers: ['Metabolite', 'Mechanism', 'Effect'],
          rows: [
            ['PO₂ (low O₂)', 'Stimulates adenosine, NO release', 'Vasodilation restores O₂ delivery'],
            ['PCO₂ (high CO₂)', 'Lowers pH, direct smooth muscle relaxation', 'Vasodilation (cerebral circulation)'],
            ['pH (acidosis)', 'H⁺ relaxes smooth muscle, enhances vasodilators', 'Vasodilation to buffer acid'],
            ['Adenosine', 'ATP breakdown → binds A2 receptors → ↑cAMP', 'Vasodilation (coronary flow)'],
            ['PGE₂', 'Arachidonic acid → COX → EP receptors → ↑cAMP', 'Vasodilation in inflammation'],
            ['K⁺ ions', 'Extracellular accumulation → hyperpolarization', 'Vasodilation via ↓Ca²⁺ influx']
          ],
          critical: false
        }
      ]
    },
    'lo-5': {
      title: 'Starting at the post capillary venule, describe the process of angiogenesis, including the stimulus that initiates new vessel growth. Describe the role of angiogenesis in providing a long-term match of tissue blood flow and metabolic need.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'Angiogenesis: Formation of new blood vessels from pre-existing vessels (post-capillary venules), primarily stimulated by hypoxia via HIF-1 → VEGF',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Angiogenesis process:',
          items: [
            'Activation: Hypoxia → HIF-1 → VEGF release → VEGFR-2 activation (PI3K-Akt, MAPK pathways)',
            'Degradation: MMPs break down basement membrane and ECM',
            'Migration: Tip cells extend filopodia toward VEGF gradient',
            'Proliferation: Stalk cells follow tip cells, forming vessel body',
            'Anastomosis: Sprouting vessels fuse forming continuous loops',
            'Maturation: Pericytes/SMC recruitment (Ang-1, PDGF), lumen formation, basement membrane re-deposition'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Long-term metabolic matching roles:',
          items: [
            'Tissue growth: vessels proliferate with expanding tissues',
            'Exercise adaptation: increases capillary density in skeletal muscle',
            'Wound healing: restores blood supply for repair',
            'Chronic hypoxia: increases vascular density (high altitude)',
            'Pathological: tumor angiogenesis (VEGF overexpression)'
          ],
          critical: false
        }
      ]
    },
    'lo-6': {
      title: 'Describe how histamine released from mast cells, bradykinin, prostanoids, and neuropeptides (SP, CGRP) released from polymodal nociceptors contribute to the inflammatory hyperemia. Describe the triple response of the skin, and the contribution of the axon reflex to it.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Inflammatory Hyperemia Mediators',
          critical: false
        },
        {
          type: 'table',
          headers: ['Mediator', 'Source', 'Mechanism', 'Effect'],
          rows: [
            ['Histamine', 'Mast cells', 'H1 receptors → NO release, endothelial gaps', 'Vasodilation + ↑permeability'],
            ['Bradykinin', 'Kininogen (kallikrein)', 'B2 receptors → NO, PGI₂, neuropeptides', 'Potent vasodilation + pain'],
            ['PGE₂/PGI₂', 'Arachidonic acid (COX)', 'EP/IP receptors → ↑cAMP', 'Sustained vasodilation'],
            ['Substance P', 'Nociceptors', 'NK1 receptors → ↑permeability, mast cell activation', 'Neurogenic inflammation'],
            ['CGRP', 'Nociceptors', 'CGRP receptors', 'Direct vasodilation']
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Triple Response of the Skin',
          critical: true
        },
        {
          type: 'list',
          intro: 'Three sequential phases:',
          items: [
            'Red Line (local erythema): Immediate, direct capillary vasodilation from histamine + axon reflex at stimulus site',
            'Flare (diffuse redness): Spreads beyond injury via axon reflex releasing SP and CGRP causing widespread vasodilation',
            'Wheal (localized swelling): Forms within minutes from histamine-induced ↑permeability, plasma/proteins leak into interstitium'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Axon Reflex: Local neurogenic response (no CNS involvement) where nociceptor stimulation → antidromic impulses along adjacent axon branches → neuropeptide release (SP, CGRP) → flare (vasodilation) + wheal (plasma extravasation)',
          critical: true
        },
        {
          type: 'clinical',
          text: 'Triple response demonstrates neurogenic inflammation: the nervous system directly contributes to local vascular responses through peripheral neuropeptide release'
        }
      ]
    }
  }
};

export default topic46QuickReview;
