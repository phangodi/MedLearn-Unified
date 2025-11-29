const topic29QuickReview = {
  topicId: 'topic-29',
  topicNumber: 29,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the CO2 transport mechanisms in blood and the percentage contribution of these mechanisms to transport: (1. physically dissolved, 2. chemically dissolved as bicarbonate anions, and 3. hemoglobin-bound with carbamino bonds)',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Three Mechanisms of CO₂ Transport'
        },
        {
          type: 'comparison',
          content: {
            title: 'CO₂ Transport Mechanisms',
            items: [
              {
                label: 'Physically Dissolved (5-10%)',
                description: 'CO₂ dissolved directly in plasma proportional to partial pressure; maintains CO₂ gradient between tissues and blood'
              },
              {
                label: 'Bicarbonate Anions (60-70%)',
                description: 'CO₂ converted to HCO₃⁻ via carbonic anhydrase in RBCs; H₂CO₃ dissociates to HCO₃⁻ + H⁺; most significant method'
              },
              {
                label: 'Carbaminohemoglobin (20-30%)',
                description: 'CO₂ binds directly to terminal amino groups of hemoglobin globin chains (not heme); forms more readily when Hb is deoxygenated'
              }
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'CO₂ has 20× higher solubility in blood than oxygen, allowing effective transport even as dissolved gas'
        },
        {
          type: 'comparison',
          content: {
            title: 'Reaction Speeds',
            items: [
              {
                label: 'Fast Processes',
                description: 'Physically dissolved (immediate diffusion), carbaminohemoglobin formation (rapid, no enzyme needed)'
              },
              {
                label: 'Slow Without Enzyme',
                description: 'Bicarbonate formation is slow in plasma without carbonic anhydrase, but fast inside RBCs with enzyme'
              }
            ]
          }
        },
        {
          type: 'clinical',
          content: 'All mechanisms are fully reversible in the lungs where CO₂ is released and expelled during exhalation. Bicarbonate method serves as the primary blood buffer system.'
        }
      ]
    },
    'lo-2': {
      title: 'Name the critical enzyme required for CO2-transport, and its cellular location.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Carbonic Anhydrase: The Critical Enzyme'
        },
        {
          type: 'keypoint',
          content: 'Carbonic anhydrase is the critical enzyme required for CO₂ transport'
        },
        {
          type: 'list',
          content: {
            title: 'Cellular Locations',
            items: [
              'Primary location: Red blood cells (RBCs) - facilitates fast bicarbonate formation',
              'Also found in: Renal tubules and various epithelial cells for pH regulation'
            ]
          }
        },
        {
          type: 'paragraph',
          content: 'Function: Catalyzes rapid conversion of CO₂ + H₂O → H₂CO₃, which dissociates to HCO₃⁻ + H⁺. Speeds up the reaction approximately 10,000-fold compared to uncatalyzed reaction.'
        },
        {
          type: 'keypoint',
          content: 'Reversible action: In lungs, catalyzes reverse reaction converting bicarbonate back to CO₂ for expiration'
        },
        {
          type: 'clinical',
          content: 'Without carbonic anhydrase, bicarbonate formation would be too slow to effectively transport CO₂'
        }
      ]
    },
    'lo-3': {
      title: 'Explain the importance of chloride-shift (Hamburger-shift) in the blood CO2-transport.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Chloride Shift (Hamburger Shift)'
        },
        {
          type: 'paragraph',
          content: 'The chloride shift maintains electrical neutrality and enables continuous CO₂ transport by exchanging HCO₃⁻ and Cl⁻ across the RBC membrane via Band 3 transporter (electroneutral facilitated diffusion).'
        },
        {
          type: 'steps',
          content: {
            title: 'In Tissues (CO₂ Uptake)',
            items: [
              'CO₂ enters RBCs and is converted to HCO₃⁻ via carbonic anhydrase',
              'HCO₃⁻ exits RBCs into plasma (removing products, allowing continuous CO₂ uptake)',
              'Cl⁻ enters RBCs from plasma to maintain electrical neutrality',
              'Approximately 70% of CO₂ is transported as bicarbonate thanks to this shift'
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'In Lungs (CO₂ Release)',
            items: [
              'Process reverses: HCO₃⁻ re-enters RBCs in exchange for Cl⁻ moving out',
              'HCO₃⁻ is converted back to CO₂ inside RBCs',
              'CO₂ is released from RBCs and exhaled'
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Additional roles: Maintains osmotic balance between RBCs and plasma; regulates blood pH by controlling bicarbonate (primary buffer) movement'
        }
      ]
    },
    'lo-4': {
      title: 'Give the reference values for the dissolved CO2 concentration as well as the plasma bicarbonate levels both in arterial and in mixed venous blood.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'CO₂ and Bicarbonate Reference Values'
        },
        {
          type: 'table',
          content: {
            title: 'CO₂ Concentration',
            headers: ['Blood Type', 'CO₂ (ml/L)'],
            rows: [
              ['Arterial blood', '480'],
              ['Mixed venous blood', '520'],
              ['Arteriovenous difference (AVDCO₂)', '-40 (negative indicates tissue → lungs)']
            ]
          }
        },
        {
          type: 'table',
          content: {
            title: 'Plasma Bicarbonate Concentration',
            headers: ['Blood Type', 'HCO₃⁻ (mM)'],
            rows: [
              ['Arterial blood', '24'],
              ['Mixed venous blood', '27']
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'CO₂ production at rest: 210 ml/min'
        },
        {
          type: 'clinical',
          content: 'Venous blood has higher CO₂ (520 vs 480 ml/L) and bicarbonate (27 vs 24 mM) concentrations due to CO₂ uptake from metabolizing tissues'
        }
      ]
    },
    'lo-5': {
      title: 'Explain the effect of hemoglobin oxygen dissociation on the uptake of CO2 (the Haldane effect).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'The Haldane Effect'
        },
        {
          type: 'paragraph',
          content: 'The Haldane effect describes how oxygenation of hemoglobin influences its ability to bind CO₂ and H⁺. Deoxygenated hemoglobin has higher affinity for CO₂ and H⁺ than oxygenated hemoglobin.'
        },
        {
          type: 'comparison',
          content: {
            title: 'Haldane Effect in Tissues vs Lungs',
            items: [
              {
                label: 'In Tissues (O₂ Released)',
                description: 'Deoxygenated Hb has increased affinity for CO₂ and H⁺ → more readily binds CO₂ (forming carbaminohemoglobin) and buffers H⁺ → promotes CO₂ uptake'
              },
              {
                label: 'In Lungs (O₂ Bound)',
                description: 'Oxygenated Hb undergoes conformational change → decreased affinity for CO₂ and H⁺ → promotes CO₂ release into alveoli and H⁺ release'
              }
            ]
          }
        },
        {
          type: 'steps',
          content: {
            title: 'Mechanism in Lungs',
            items: [
              'Hemoglobin binds O₂ → conformational change',
              'Decreased affinity for CO₂ → CO₂ released from carbaminohemoglobin',
              'Decreased affinity for H⁺ → H⁺ released',
              'Released H⁺ helps convert HCO₃⁻ back to CO₂',
              'CO₂ expelled during breathing'
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'The Haldane effect enhances CO₂ transport efficiency by facilitating CO₂ uptake in tissues and CO₂ release in lungs'
        },
        {
          type: 'clinical',
          content: 'Summary: CO₂ unloaded + O₂ loaded = Haldane effect. Hemoglobin affinity for CO₂, H⁺, and 2,3-BPG decreases in lungs, while O₂ affinity increases (positive cooperativity).'
        }
      ]
    }
  }
};

export default topic29QuickReview;
