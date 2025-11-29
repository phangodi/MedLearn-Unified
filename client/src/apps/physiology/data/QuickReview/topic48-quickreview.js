const topic48QuickReview = {
  topicId: 'topic-48',
  topicNumber: 48,
  learningObjectives: {
    'lo-1': {
      title: 'Define the resting, neurogenic, basal and myogenic tone of resistance vessels.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Four Types of Vascular Tone',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Resting tone = Basal tone + Neurogenic tone',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Intrinsic Mechanisms',
            items: [
              'Basal tone: Spontaneous contractile activity',
              'Independent of nerves or hormones',
              'Intrinsic smooth muscle property',
              'Sets baseline vascular resistance'
            ]
          },
          right: {
            title: 'External Control',
            items: [
              'Neurogenic tone: ANS-mediated contraction',
              'Primarily sympathetic activity',
              'Norepinephrine → α-adrenergic receptors',
              'Allows dynamic blood flow regulation'
            ]
          }
        },
        {
          type: 'list',
          intro: 'Myogenic tone (Bayliss effect):',
          items: [
            'Response to transmural pressure changes',
            'Vessel stretch → stretch-sensitive ion channels open',
            'Calcium influx → depolarization → vasoconstriction',
            'Enables autoregulation of blood flow'
          ],
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Describe the sympathetic vasomotor tone: its origin, the neurotransmitter and receptor responsible for the effect. What is the physiological significance of the sympathetic tone? Give examples to organ circulations where the sympathetic vasomotor tone is significant (skin, skeletal muscle splanchnic circulation) and where is negligible (coronary circulation, brain, kidney)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Sympathetic Vasomotor Tone Pathway',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Origin and pathway:',
          items: [
            'Origin: Vasomotor center in medulla oblongata',
            'Input integration: Hypothalamus, cortex, baroreceptors, chemoreceptors',
            'Preganglionic neurons: Thoracolumbar spinal cord',
            'Synapse: Paravertebral sympathetic chain ganglia',
            'Postganglionic neurons: Release neurotransmitter to vessels'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Neurotransmitter: Norepinephrine (NE) from postganglionic terminals + Epinephrine from adrenal medulla',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Receptor: α1-adrenergic receptors on vascular smooth muscle → Gq protein pathway → PLC → ↑ intracellular Ca²⁺ → vasoconstriction',
          critical: true
        },
        {
          type: 'list',
          intro: 'Physiological significance:',
          items: [
            'Maintains baseline systemic vascular resistance (SVR)',
            'Maintains resting blood pressure',
            'Enables blood flow redistribution during stress/exercise/hemorrhage',
            'Rapid adaptation to changing metabolic demands'
          ],
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Significant Sympathetic Tone',
            items: [
              'Skin: Thermoregulation control',
              'Skeletal muscle: Maintains rest resistance',
              'Splanchnic: Blood reservoir function'
            ]
          },
          right: {
            title: 'Negligible Sympathetic Tone',
            items: [
              'Coronary: Metabolic autoregulation (O₂, adenosine)',
              'Brain: CO₂ and pH regulation',
              'Kidney: Autoregulation maintains GFR'
            ]
          }
        }
      ]
    },
    'lo-3': {
      title: 'Characterize the reflex circuit elements of the high pressure baroreceptor reflex: 1. activity of the baroreceptors of the carotid sinus and the aortic arch along with their afferent nerves, 2. the connections of the medullary neuronal groups playing a role in the central integration of the reflex, 3. the activity of the sympathetic and the parasympathetic efferents, 4. the effects on the target organs (heart, arterioles, veins)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Baroreceptor Reflex Circuit (4 Elements)',
          critical: true
        },
        {
          type: 'list',
          intro: '1. Baroreceptors and afferent pathways:',
          items: [
            'Location: Carotid sinus (carotid bifurcation) + Aortic arch',
            'Type: Spray-type mechanoreceptors detecting arterial stretch',
            'Carotid sinus: 50-180 mmHg (max sensitivity at 100 mmHg)',
            'Aortic arch: Activated ~30 mmHg higher than carotid',
            'Afferents: Carotid → CN IX (glossopharyngeal), Aortic → CN X (vagus)',
            'Destination: Both converge on nucleus tractus solitarius (NTS)'
          ],
          critical: true
        },
        {
          type: 'steps',
          intro: '2. Central integration (medullary connections):',
          items: [
            'NTS receives baroreceptor input',
            'NTS → inhibitory signals to RVLM → ↓ sympathetic outflow',
            'NTS → excitatory signals to dorsal motor nucleus of vagus + nucleus ambiguus → ↑ parasympathetic activity',
            'RVLM = generator of sympathetic tone',
            'CVLM provides inhibition of RVLM'
          ],
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: '3. Efferent Activity (High BP)',
            items: [
              'Sympathetic: Inhibited',
              '↓ Stimulation of heart, arterioles, veins',
              'Parasympathetic: Activated',
              'Vagus → ↓ HR (negative chronotropy)'
            ]
          },
          right: {
            title: '3. Efferent Activity (Low BP)',
            items: [
              'Sympathetic: Activated',
              '↑ Stimulation of heart, vessels',
              'Parasympathetic: Inhibited',
              'Reduced vagal tone'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Target Organ', 'Effect When BP High', 'Mechanism'],
          rows: [
            ['Heart', '↓ HR and contractility', '↑ Parasympathetic + ↓ Sympathetic'],
            ['Arterioles', 'Vasodilation → ↓ TPR', '↓ Sympathetic tone'],
            ['Veins', 'Venodilation → ↓ preload', '↓ Sympathetic tone']
          ]
        }
      ]
    },
    'lo-4': {
      title: 'Describe the significance of the high pressure baroreceptor reflex.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'Primary role: Short-term regulation of arterial blood pressure (seconds to minutes)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Key characteristics:',
          items: [
            'Rapid negative feedback mechanism',
            'Stabilizes BP in response to sudden changes',
            'Adjusts HR, CO, and vascular tone within seconds',
            'Active in normal BP range (60-180 mmHg)',
            'Carotid sinus more sensitive than aortic arch'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Critical function: Maintains constant perfusion of vital organs (especially brain and heart)',
          critical: true
        },
        {
          type: 'list',
          intro: 'Clinical importance - prevents:',
          items: [
            'Syncope (fainting) during BP fluctuations',
            'Cerebral hypoperfusion (especially during orthostasis)',
            'Excessive cardiac afterload from BP spikes',
            'Tissue ischemia from rapid BP drops'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Limitation: Baroreceptors ADAPT to chronic BP changes - this reflex cannot correct long-term hypertension. It only buffers acute oscillations.'
        }
      ]
    },
    'lo-5': {
      title: 'Explain the function of the baroreceptor reflex during postural changes (lying down, standing up).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Orthostasis: Lying → Standing',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Sequence of events:',
          items: [
            'Gravity → blood pooling in lower extremities (~500 ml)',
            '↓ Venous return → ↓ stroke volume (Frank-Starling)',
            'Transient ↓ BP (especially upper body/brain)',
            '↓ Baroreceptor stretch → ↓ firing rate',
            'Reflex activation: ↑ Sympathetic, ↓ Parasympathetic'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Compensatory responses:',
          items: [
            'Heart: ↑ HR (chronotropy) + ↑ contractility (inotropy)',
            'Arterioles: Vasoconstriction → ↑ TPR',
            'Veins: Venoconstriction → ↓ pooling, ↑ venous return',
            'Result: Maintains MAP, prevents orthostatic hypotension'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Without this reflex: Standing causes dizziness/fainting (syncope) from cerebral hypoperfusion'
        },
        {
          type: 'header',
          text: 'Standing → Lying Down',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Reverse sequence:',
          items: [
            'Horizontal position eliminates gravitational pooling',
            '↑ Venous return → ↑ CO (Frank-Starling)',
            'Transient ↑ BP',
            '↑ Baroreceptor firing',
            'Reflex: ↓ Sympathetic, ↑ Parasympathetic'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Compensatory responses:',
          items: [
            'Heart: ↓ HR → ↓ CO',
            'Arterioles: Vasodilation → ↓ TPR',
            'Veins: ↓ Sympathetic tone',
            'Result: Prevents excessive BP rise'
          ],
          critical: false
        }
      ]
    },
    'lo-6': {
      title: 'Blood pressure regulation during emergency situations: 1. describe the circulatory reflexes evoked by hypoxia and/or hypercapnia, and 2. characterize the CNS ischemic pressor response (Cushing reflex).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Part 1: Chemoreceptor Reflexes',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Peripheral Chemoreceptors',
            items: [
              'Location: Carotid bodies + Aortic bodies',
              'Detect: ↓ PO₂, ↑ PCO₂, ↓ pH',
              'Afferents: CN IX + CN X → NTS'
            ]
          },
          right: {
            title: 'Central Chemoreceptors',
            items: [
              'Location: Medulla oblongata',
              'Detect: ↑ PCO₂ in CSF, ↓ CSF pH',
              'Mechanism: CO₂ → carbonic acid'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Stimulus', 'Cardiovascular Response', 'Respiratory Response'],
          rows: [
            ['Hypoxia', '↑ HR (sympathetic), Peripheral vasoconstriction (except brain/heart)', 'Hyperventilation (↑ O₂ uptake)'],
            ['Hypercapnia', '↑ Sympathetic → vasoconstriction, Modest tachycardia', 'Hyperventilation (↑ CO₂ elimination)']
          ]
        },
        {
          type: 'keypoint',
          text: 'Important: Major function is stimulating BREATHING. Only severe hypotension (<60-80 mmHg) triggers significant vasoconstriction.',
          critical: true
        },
        {
          type: 'header',
          text: 'Part 2: CNS Ischemic Pressor Response (Cushing Reflex)',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Emergency reflex activated by severe cerebral ischemia from elevated intracranial pressure (ICP)',
          critical: true
        },
        {
          type: 'formula',
          formula: 'CPP = MAP - ICP',
          explanation: 'Cerebral Perfusion Pressure = Mean Arterial Pressure - Intracranial Pressure. If ICP approaches MAP, cerebral perfusion ceases.',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Mechanism:',
          items: [
            '↑ ICP compresses cerebral vessels',
            'Cerebral ischemia → hypoxia/hypercapnia in medulla',
            'Severe ischemia activates sympathetic nervous system',
            'Massive sympathetic discharge attempts to restore CPP'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Cushing triad (classic signs):',
          items: [
            'Systemic vasoconstriction → ↑↑ MAP (maintain cerebral flow)',
            'Paradoxical bradycardia (baroreceptor reflex responds to ↑ MAP)',
            'Respiratory irregularities (Cheyne-Stokes, apnea from medullary ischemia)'
          ],
          critical: false
        },
        {
          type: 'steps',
          intro: 'Progression stages:',
          items: [
            'Initial compensation: ↑ Sympathetic temporarily restores CPP',
            'Progressive ICP rise: Further brain compression',
            'Failure: ICP exceeds MAP → perfusion ceases → brainstem herniation → death'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Clinical context: Seen in traumatic brain injury, intracranial hemorrhage, brain tumors. Cushing triad indicates impending herniation - neurosurgical emergency!'
        }
      ]
    }
  }
};

export default topic48QuickReview;
