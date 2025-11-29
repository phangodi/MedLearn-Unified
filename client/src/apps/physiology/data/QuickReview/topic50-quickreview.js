const topic50QuickReview = {
  topicId: 'topic-50',
  topicNumber: 50,
  learningObjectives: {
    'lo-1': {
      title: 'Compare the pulmonary circulation with the systemic circulation: blood pressure values, vascular resistance, response to hypoxia.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Pressure and Resistance Comparison',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Pulmonary',
            items: [
              'Mean arterial pressure: 14 mmHg',
              'Vascular resistance: 1.5 mmHg×min/L',
              'Pressure gradient: 6 mmHg',
              'Thin-walled, compliant vessels'
            ]
          },
          right: {
            title: 'Systemic',
            items: [
              'Mean arterial pressure: 93 mmHg',
              'Vascular resistance: 16.5 mmHg×min/L',
              'Pressure gradient: 92 mmHg',
              'Thick-walled, muscular vessels'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Pulmonary vascular resistance is one-tenth of systemic resistance despite equal cardiac output',
          critical: true
        },
        {
          type: 'table',
          headers: ['Parameter', 'Pulmonary', 'Systemic'],
          rows: [
            ['Systolic/Diastolic', '24/9 mmHg', '120/80 mmHg'],
            ['Mean Pressure', '14 mmHg', '93 mmHg'],
            ['Pulse Pressure', '15 mmHg', '40 mmHg']
          ]
        },
        {
          type: 'comparison',
          left: {
            title: 'Pulmonary Response to Hypoxia',
            items: [
              'Vasoconstriction',
              'Redirects blood to well-ventilated areas',
              'Optimizes V/Q matching'
            ]
          },
          right: {
            title: 'Systemic Response to Hypoxia',
            items: [
              'Vasodilation',
              'Increases oxygen delivery',
              'Enhances tissue perfusion'
            ]
          }
        },
        {
          type: 'paragraph',
          text: 'Pulmonary vessels handle increased cardiac output during exercise with minimal pressure increase due to high compliance',
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Describe the regional distribution of pulmonary blood flow in a standing human subject. Explain the differences among zones I, II, III in terms of pulmonary vascular pressures and intraalveolar pressures.',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          text: 'Gravity causes uneven blood flow distribution: highest at base, lowest at apex',
          critical: true
        },
        {
          type: 'header',
          text: 'West Zones Classification',
          critical: false
        },
        {
          type: 'table',
          headers: ['Zone', 'Location', 'Pressure Relationship', 'Blood Flow'],
          rows: [
            ['I', 'Apex', 'PA > Pa > Pv', 'Minimal/Absent'],
            ['II', 'Mid-lung', 'Pa > PA > Pv', 'Moderate'],
            ['III', 'Base', 'Pa > Pv > PA', 'Maximum']
          ]
        },
        {
          type: 'list',
          intro: 'Zone I (Apex) - PA > Pa > Pv:',
          items: [
            'Alveolar pressure compresses capillaries',
            'Blood flow prevented or minimal',
            'Physiologically absent in healthy individuals',
            'May occur with hypotension or positive pressure ventilation'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Zone II (Mid-lung) - Pa > PA > Pv:',
          items: [
            'Flow determined by Pa - PA difference',
            'Venous pressure does not influence flow',
            'Moderate blood flow',
            'Arterial pressure exceeds alveolar pressure'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Zone III (Base) - Pa > Pv > PA:',
          items: [
            'Flow determined by Pa - Pv difference',
            'Capillaries fully perfused',
            'Maximum blood flow',
            'Both arterial and venous pressures exceed alveolar pressure'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Exercise increases pulmonary arterial pressure, converting Zone I to Zone II/III. Hypovolemia enlarges Zone I. Positive pressure ventilation can convert Zones II/III into Zone I.'
        }
      ]
    },
    'lo-3': {
      title: 'Describe how the pulmonary vascular resistance changes with the change in cardiac output and pulmonary arterial blood pressure. Explain the changes with the mechanisms of vascular distension and capillary recruitment.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'Pulmonary vascular resistance is inversely related to cardiac output and pulmonary arterial pressure',
          critical: true
        },
        {
          type: 'header',
          text: 'Two Mechanisms Reduce PVR',
          critical: false
        },
        {
          type: 'list',
          intro: 'Capillary Recruitment:',
          items: [
            'At rest, many capillaries are collapsed or minimally perfused',
            'Increased CO or pressure opens previously unperfused capillaries',
            'Primarily occurs in mid and upper lung regions',
            'Increases total cross-sectional area of vascular bed',
            'Significantly reduces overall resistance'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Vascular Distension:',
          items: [
            'Pulmonary capillaries are highly compliant',
            'Expand in response to increased pressure',
            'Reduces resistance in already perfused capillaries',
            'Particularly important at higher blood flows'
          ],
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Low Cardiac Output',
            items: [
              'Few capillaries open',
              'Minimal distension',
              'High PVR'
            ]
          },
          right: {
            title: 'High Cardiac Output',
            items: [
              'Recruitment of capillaries',
              'Increased distension',
              'Low PVR'
            ]
          }
        },
        {
          type: 'clinical',
          text: 'During exercise, cardiac output can increase 4-6 fold with minimal pulmonary arterial pressure increase, protecting the right heart from excessive workload and preventing capillary damage.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe how pulmonary vascular resistance changes with lung volume. Explain the phenomenon with the changes occurring in extraalveolar and alveolar blood vessels.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'PVR has a U-shaped relationship with lung volume: lowest at FRC, high at both extremes',
          critical: true
        },
        {
          type: 'header',
          text: 'Two Vessel Types',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Alveolar Vessels',
            items: [
              'Small capillaries in alveolar walls',
              'Compressed at high lung volumes',
              'More open at low volumes',
              'Resistance ↑ with expansion'
            ]
          },
          right: {
            title: 'Extraalveolar Vessels',
            items: [
              'Larger arteries/veins outside alveoli',
              'Surrounded by lung parenchyma',
              'Collapse at low volumes (no traction)',
              'Dilate at high volumes (radial traction)'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Lung Volume', 'Alveolar Vessels', 'Extraalveolar Vessels', 'Net PVR'],
          rows: [
            ['Low', 'Less compressed (↓ R)', 'Collapsed (↑ R)', 'High'],
            ['FRC', 'Moderate compression', 'Moderate dilation', 'Minimum'],
            ['High', 'Compressed (↑ R)', 'Dilated (↓ R)', 'High']
          ]
        },
        {
          type: 'paragraph',
          text: 'At low lung volumes, alveolar vessels have decreased resistance but extraalveolar vessels collapse due to lack of radial traction, resulting in high overall PVR',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'At high lung volumes, alveolar expansion compresses capillaries increasing their resistance, while parenchymal stretch provides radial traction dilating extraalveolar vessels',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'At FRC, opposing effects on both vessel types balance out, producing minimal overall resistance',
          critical: false
        }
      ]
    },
    'lo-5': {
      title: 'Describe the pulmonary hypoxic vasoconstriction, and its role in the regulation of blood flow distribution in the lungs (Euler-Liljestrand reflex).',
      isCritical: true,
      blocks: [
        {
          type: 'keypoint',
          text: 'Pulmonary hypoxic vasoconstriction (Euler-Liljestrand reflex): arterioles constrict in response to low alveolar PaO₂, redirecting blood to well-ventilated regions',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Trigger threshold: alveolar oxygen partial pressure below 70 mmHg initiates vasoconstriction in surrounding pulmonary arterioles',
          critical: false
        },
        {
          type: 'header',
          text: 'Molecular Mechanism',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Sequential events in HPV:',
          items: [
            'Hypoxia inhibits oxygen-sensitive K⁺ channels in smooth muscle cells',
            'Reduced K⁺ efflux causes membrane depolarization',
            'Depolarization opens voltage-gated Ca²⁺ channels',
            'Ca²⁺ influx triggers smooth muscle contraction',
            'Vasoconstriction reduces blood flow to hypoxic region'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Physiological Role',
          critical: false
        },
        {
          type: 'list',
          intro: 'Primary function - Optimizes ventilation-perfusion (V/Q) matching:',
          items: [
            'Redirects blood away from poorly ventilated hypoxic regions',
            'Increases perfusion to well-oxygenated areas',
            'Improves overall gas exchange efficiency',
            'Minimizes wasted perfusion to non-functional alveoli'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'Localized hypoxia (pneumonia, airway obstruction): HPV limits perfusion to affected regions, preserving overall gas exchange. This is a beneficial protective mechanism.'
        },
        {
          type: 'clinical',
          text: 'Generalized hypoxia (COPD, high altitude, severe asthma): widespread HPV causes pulmonary hypertension. At high altitudes, excessive HPV can cause high-altitude pulmonary edema (HAPE).'
        }
      ]
    },
    'lo-6': {
      title: 'Describe the effect of inhaled NO on hypoxic vasoconstriction and pulmonary vascular resistance.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Mechanism of Inhaled NO',
          critical: false
        },
        {
          type: 'steps',
          intro: 'NO pathway in pulmonary vasculature:',
          items: [
            'Inhaled NO diffuses across alveolar-capillary membrane',
            'Acts on pulmonary vascular smooth muscle cells near ventilated alveoli',
            'Activates soluble guanylate cyclase (sGC)',
            'Increases intracellular cyclic GMP (cGMP)',
            'Elevated cGMP causes smooth muscle relaxation → vasodilation'
          ],
          critical: false
        },
        {
          type: 'keypoint',
          text: 'NO is rapidly inactivated by hemoglobin, limiting effects to pulmonary circulation and minimizing systemic vasodilation',
          critical: true
        },
        {
          type: 'header',
          text: 'Effect on Hypoxic Vasoconstriction',
          critical: false
        },
        {
          type: 'list',
          intro: 'Inhaled NO selectively counteracts HPV:',
          items: [
            'Dilates pulmonary vessels in well-ventilated regions',
            'Enhances blood flow to areas receiving NO',
            'Improves ventilation-perfusion matching',
            'Reduces intrapulmonary shunting',
            'Improves arterial oxygenation'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Effect on Pulmonary Vascular Resistance',
          critical: false
        },
        {
          type: 'paragraph',
          text: 'NO decreases PVR in well-ventilated lung areas by relaxing pulmonary arterioles, which can alleviate pulmonary hypertension caused by increased PVR',
          critical: false
        },
        {
          type: 'keypoint',
          text: 'Selective action: NO does not affect poorly ventilated alveoli (cannot diffuse there), preserving beneficial HPV in directing blood away from hypoxic regions',
          critical: false
        },
        {
          type: 'clinical',
          text: 'Therapeutic use: Inhaled NO is used to treat pulmonary hypertension and improve oxygenation in critically ill patients with lung disease.'
        }
      ]
    },
    'lo-7': {
      title: 'Characterize the bronchial circulation.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'Bronchial circulation is part of systemic circulation that supplies oxygenated blood to airways and supporting structures (not for gas exchange)',
          critical: true
        },
        {
          type: 'header',
          text: 'Anatomical Characteristics',
          critical: false
        },
        {
          type: 'list',
          intro: 'Origin and distribution:',
          items: [
            'Bronchial arteries arise from descending thoracic aorta',
            'Occasionally from intercostal or subclavian arteries',
            'Supplies conducting airways down to terminal bronchioles',
            'Provides blood to visceral pleura, large pulmonary vessels, hilar lymph nodes'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Venous drainage (two systems):',
          items: [
            'Bronchial veins → azygos/hemiazygos systems → superior vena cava',
            'Some bronchial venous blood shunts into pulmonary veins (contributes to normal physiological shunt)'
          ],
          critical: false
        },
        {
          type: 'header',
          text: 'Hemodynamic Characteristics',
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Flow',
            items: [
              'Low flow (~1% of cardiac output)',
              'Minimal compared to pulmonary circulation'
            ]
          },
          right: {
            title: 'Pressure',
            items: [
              'High pressure (systemic levels)',
              'Operates under systemic circulation pressures'
            ]
          }
        },
        {
          type: 'paragraph',
          text: 'Anastomoses between bronchial and pulmonary circulations ensure perfusion even if one circulation is compromised',
          critical: false
        },
        {
          type: 'header',
          text: 'Functions',
          critical: false
        },
        {
          type: 'list',
          intro: 'Five major roles of bronchial circulation:',
          items: [
            'Nutritional supply: provides O₂ and nutrients to conducting airways, connective tissue, pleura',
            'Thermoregulation: warms inspired air',
            'Humidification: moistens air passing through airways',
            'Defense mechanism: delivers immune cells and mediators to airways',
            'Collateral circulation: maintains perfusion during pulmonary artery obstruction (e.g., pulmonary embolism), preventing ischemia'
          ],
          critical: false
        }
      ]
    }
  }
};

export default topic50QuickReview;
