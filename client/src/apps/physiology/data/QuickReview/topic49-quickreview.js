const topic49QuickReview = {
  topicId: 'topic-49',
  topicNumber: 49,
  learningObjectives: {
    'lo-1': {
      title: 'Contrast the significance of the renal regulation of extracellular volume and blood volume and the baroreceptor reflex in the regulation of arterial blood pressure',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Time Scale Differences',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Baroreceptor Reflex',
            items: [
              'Acts in seconds to minutes',
              'Moment-to-moment adjustments',
              'Rapid neural response',
              'Resets within 1-2 days',
              'Short-term effectiveness only'
            ]
          },
          right: {
            title: 'Renal Regulation',
            items: [
              'Acts over hours to days',
              'Sustained blood pressure control',
              'Hormonal mechanisms',
              'Does not reset',
              'Long-term effectiveness'
            ]
          }
        },
        {
          type: 'header',
          text: 'Mechanism and Focus',
          critical: false
        },
        {
          type: 'list',
          intro: 'Baroreceptor reflex mechanism:',
          items: [
            'High-pressure receptors in carotid sinus and aortic arch',
            'Modulates heart rate, cardiac output, and vascular resistance',
            'Via autonomic nervous system',
            'Focuses on arterial pressure itself without affecting total blood volume'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Renal regulation mechanism:',
          items: [
            'Controls blood volume and extracellular fluid volume',
            'Pressure diuresis and natriuresis',
            'RAAS activation, aldosterone, and ADH regulation',
            'Blood volume directly influences cardiac output via Frank-Starling mechanism'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'These systems are interdependent: adequate blood volume is necessary for effective baroreceptor reflex function, while stable arterial pressure ensures effective renal perfusion for long-term regulation.',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Clinical significance: Renal mechanisms are crucial in chronic hypertension management; baroreceptor reflexes handle acute challenges like postural changes and hemorrhage.'
        }
      ]
    },

    'lo-2': {
      title: 'Describe the concept of pressure diuresis',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Pressure diuresis is a physiological mechanism by which the kidneys regulate arterial blood pressure through increased urine output in response to elevated arterial pressure.',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Mechanism of pressure diuresis (sequential events):',
          items: [
            'Increased arterial pressure elevates renal perfusion pressure, increasing GFR',
            'Higher peritubular capillary pressure reduces capillary oncotic pressure and increases interstitial hydrostatic pressure',
            'Reduced sodium and water reabsorption in renal tubules (especially proximal tubule)',
            'Sodium excretion increases proportionally with arterial pressure (pressure natriuresis)',
            'Water follows sodium osmotically, leading to increased urine output',
            'Reduced plasma and ECF volume decreases blood volume',
            'Lower cardiac output restores arterial pressure to normal'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Pressure diuresis is critical for long-term blood pressure regulation by maintaining the balance between sodium intake and excretion.',
          critical: false
        },
        {
          type: 'header',
          text: 'RAAS Interaction',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'High Arterial Pressure',
            items: [
              'Decreased RAAS activity',
              'Reduced aldosterone levels',
              'Promotes sodium excretion',
              'Reinforces pressure diuresis'
            ]
          },
          right: {
            title: 'Low Arterial Pressure',
            items: [
              'Increased RAAS activity',
              'Elevated aldosterone levels',
              'Enhances sodium/water retention',
              'Opposes pressure diuresis'
            ]
          }
        },
        {
          type: 'list',
          intro: 'Factors modulating pressure diuresis:',
          items: [
            'Aldosterone (increases sodium reabsorption, opposes diuresis)',
            'ADH (promotes water reabsorption, reduces diuresis)',
            'Sympathetic activation (decreases diuresis by promoting sodium reabsorption and reducing renal blood flow)'
          ],
          critical: false
        }
      ]
    },

    'lo-3': {
      title: 'Explain the neurohumoral reflex mediated by cardiopulmonary (volume) receptors that occur after an acute increase or decrease in arterial blood pressure',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Cardiopulmonary receptors are low-pressure mechanoreceptors located in atrial walls and pulmonary vasculature that sense changes in blood volume and regulate arterial blood pressure via neurohumoral reflexes.',
          critical: false
        },
        {
          type: 'header',
          text: 'Response to Acute Increase in Blood Pressure',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Sequential pathway after acute blood pressure increase:',
          items: [
            'Receptor response: Increased venous return stretches atria and pulmonary vessels, activating volume receptors',
            'Afferent pathway: Signals transmitted via vagus nerve (CN X) to nucleus tractus solitarius (NTS) in medulla',
            'CNS integration (medullary): NTS inhibits sympathetic activity and stimulates parasympathetic activity',
            'CNS integration (hypothalamic): Paraventricular nucleus (PVN) inhibition reduces ADH release and reduces thirst',
            'Kidney effects: Reduced ADH → decreased water reabsorption (increased diuresis); increased ANP from atrial stretch → natriuresis and diuresis; decreased RAAS activity → reduced aldosterone',
            'Heart effects: Reduced heart rate (negative chronotropy) via increased vagal tone',
            'Vascular effects: Vasodilation via reduced sympathetic outflow'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Response to Acute Decrease in Blood Pressure',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Sequential pathway after acute blood pressure decrease:',
          items: [
            'Receptor response: Decreased venous return and reduced atrial stretch deactivate volume receptors',
            'Afferent pathway: Decreased vagal afferent activity to NTS',
            'CNS integration (medullary): Decreased NTS activity reduces inhibition of RVLM → increased sympathetic outflow and reduced parasympathetic activity',
            'CNS integration (hypothalamic): Increased PVN activation → elevated ADH secretion and stimulated thirst',
            'Kidney effects: Increased ADH → water reabsorption (reduced diuresis); increased RAAS activity → elevated angiotensin II and aldosterone → enhanced sodium and water retention',
            'Heart effects: Increased heart rate and contractility via elevated sympathetic tone',
            'Vascular effects: Vasoconstriction via sympathetic activation'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Volume receptors provide crucial feedback linking blood volume changes to autonomic, hormonal, and renal responses for blood pressure homeostasis.',
          critical: false
        }
      ]
    },

    'lo-4': {
      title: 'Describe the effects of angiotensin II, vasopressin, and atrial natriuretic hormone on arterial blood pressure: direct vascular and indirect renal mechanisms. Give the respective receptors and signal transduction mechanisms.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Angiotensin II Effects',
          critical: true
        },
        {
          type: 'list',
          intro: 'Direct vascular effects (vasoconstriction):',
          items: [
            'Receptor: AT1 receptor (Gq-coupled GPCR) on vascular smooth muscle',
            'Signal transduction: AT1 activation → Gq activation → PLC activation → ↑ IP3 and DAG → Ca²⁺ release from stores → smooth muscle contraction',
            'Effect: Increased total peripheral resistance (TPR) → increased MABP'
          ],
          critical: true
        },
        {
          type: 'list',
          intro: 'Indirect renal effects (sodium and water retention):',
          items: [
            'Stimulates aldosterone release from adrenal cortex (via AT1) → enhanced sodium reabsorption in distal nephron/collecting ducts',
            'Increases proximal tubule sodium reabsorption directly',
            'Constricts efferent arterioles, maintaining GFR despite reduced renal perfusion',
            'Net effect: Water retention → increased blood volume → increased MABP'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Vasopressin (ADH) Effects',
          critical: true
        },
        {
          type: 'list',
          intro: 'Direct vascular effects (vasoconstriction):',
          items: [
            'Receptor: V1 receptor (Gq-coupled) on vascular smooth muscle',
            'Signal transduction: V1 activation → Gq activation → PLC activation → ↑ IP3 and DAG → Ca²⁺ release → smooth muscle contraction',
            'Effect: Increased TPR → increased MABP (especially under hypovolemic conditions)'
          ],
          critical: true
        },
        {
          type: 'list',
          intro: 'Indirect renal effects (water reabsorption):',
          items: [
            'Receptor: V2 receptor (Gs-coupled) in collecting ducts',
            'Signal transduction: V2 activation → Gs activation → ↑ cAMP → PKA activation → insertion of aquaporin-2 channels in apical membrane',
            'Effect: Increased water reabsorption → increased blood volume → increased MABP'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Atrial Natriuretic Peptide (ANP) Effects',
          critical: true
        },
        {
          type: 'list',
          intro: 'Direct vascular effects (vasodilation):',
          items: [
            'Receptor: NPR-A (natriuretic peptide receptor A, guanylyl cyclase-linked receptor)',
            'Signal transduction: NPR-A activation → ↑ cGMP → PKG activation → vascular smooth muscle relaxation',
            'Effect: Decreased TPR → decreased MABP'
          ],
          critical: true
        },
        {
          type: 'list',
          intro: 'Indirect renal effects (natriuresis and diuresis):',
          items: [
            'Inhibits sodium reabsorption in collecting ducts (NPR-A receptor, same cGMP-PKG pathway)',
            'Increases GFR by dilating afferent arterioles and constricting efferent arterioles',
            'Reduces renin release, inhibiting RAAS system',
            'Net effect: Promotes sodium and water excretion → decreased blood volume → decreased MABP'
          ],
          critical: true
        },
        {
          type: 'table',
          headers: ['Hormone', 'Vascular Receptor', 'Vascular Effect', 'Renal Receptor', 'Renal Effect', 'Net MABP'],
          rows: [
            ['Angiotensin II', 'AT1 (Gq)', 'Vasoconstriction', 'AT1 (Gq)', 'Na⁺/H₂O retention', '↑'],
            ['Vasopressin', 'V1 (Gq)', 'Vasoconstriction', 'V2 (Gs)', 'H₂O retention', '↑'],
            ['ANP', 'NPR-A (GC)', 'Vasodilation', 'NPR-A (GC)', 'Na⁺/H₂O excretion', '↓']
          ]
        },
        {
          type: 'keypoint',
          text: 'Angiotensin II and vasopressin increase blood pressure through vasoconstriction and fluid retention; ANP decreases blood pressure through vasodilation and fluid excretion.',
          critical: true
        }
      ]
    }
  }
};

export default topic49QuickReview;
