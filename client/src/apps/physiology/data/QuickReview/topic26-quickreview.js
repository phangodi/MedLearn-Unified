/**
 * Quick Review content for Topic 26 - Respiratory mechanics 2: Ventilation
 * Auto-generated - ALL 5 Learning Objectives
 */
const topic26QuickReview = {
  topicId: 'topic-26',
  topicNumber: 26,
  learningObjectives: {
    'lo-1': {
      title: 'Draw a diagram showing how pleural pressure, alveolar pressure, air flow, and lung volume changes during the respiratory cycle. Indicate the beginning and the end of inspiration, and the end of expiration. Describe how the pressure gradient between intrapulmonal and atmospheric pressure drives air movement in and out of the lung.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Respiratory Cycle: Pressure-Volume-Flow Relationships'
        },
        {
          type: 'steps',
          intro: 'Phases of the respiratory cycle:',
          items: [
            'Rest (end expiration): FRC, pleural pressure -5 cmH₂O, alveolar pressure 0 cmH₂O, no flow',
            'Inspiration begins: Diaphragm contracts, pleural pressure -5 to -8 cmH₂O, alveolar pressure drops to -1 cmH₂O',
            'Air flows in: Pressure gradient (atmosphere > alveoli) drives inflow at -0.5 L/s peak rate',
            'End inspiration: Pleural pressure -8 cmH₂O, alveolar pressure returns to 0 cmH₂O, flow stops',
            'Expiration: Elastic recoil raises alveolar pressure to +1 cmH₂O, pleural pressure -8 to -5 cmH₂O',
            'Air flows out: Pressure gradient (alveoli > atmosphere) drives outflow at +0.5 L/s peak rate',
            'Return to FRC: All pressures and volumes return to resting state'
          ]
        },
        {
          type: 'keypoint',
          text: 'Fundamental principle: Air flows from high to low pressure. Inspiration occurs when alveolar pressure < atmospheric; expiration when alveolar pressure > atmospheric.',
          critical: true
        },
        {
          type: 'table',
          headers: ['Phase', 'Pleural P', 'Alveolar P', 'Flow', 'Volume'],
          rows: [
            ['Rest', '-5 cmH₂O', '0 cmH₂O', 'Zero', 'FRC'],
            ['Inspiration', '-8 cmH₂O', '-1 cmH₂O', '-0.5 L/s', 'Increasing'],
            ['End Insp.', '-8 cmH₂O', '0 cmH₂O', 'Zero', 'Maximum'],
            ['Expiration', '-5 cmH₂O', '+1 cmH₂O', '+0.5 L/s', 'Decreasing']
          ]
        },
        {
          type: 'paragraph',
          text: 'The pressure gradient is created by active diaphragm contraction during inspiration (expanding thoracic cavity) and passive elastic recoil during expiration (compressing alveoli).'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the factors constituting dynamic lung resistance against lung volume changes (airway resistance and viscous tissue resistance). Describe based on the segmental differences in individual airway diameters, total cross sectional area of parallel coupled airways, and the occurrence of turbulent as well as laminar flow, WHY the upper airways and the great bronchi contribute principally to airway resistance.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Dynamic Lung Resistance Components',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Airway Resistance',
            items: [
              'Opposition to flow in airways',
              'Friction: air vs walls',
              'Main determinant: diameter',
              'R ∝ 1/r⁴ (Poiseuille law)',
              'Affected by lung volume',
              'Flow type matters'
            ]
          },
          right: {
            title: 'Viscous Tissue Resistance',
            items: [
              'Opposition from tissues',
              'Friction: lungs vs chest wall',
              'Viscoelastic properties',
              'Tissue sliding/stretching',
              'Pleural surface movement',
              'Minor contributor (~20%)'
            ]
          },
          critical: true
        },
        {
          type: 'header',
          text: 'Why Upper Airways Dominate Resistance',
          critical: true
        },
        {
          type: 'list',
          intro: 'Three critical factors make trachea and bronchi the major resistance sites:',
          items: [
            'Low total cross-sectional area: Few large airways concentrate flow (high velocity)',
            'Turbulent flow: High velocity + large diameter → high Reynolds number → turbulence',
            'Limited parallel pathways: Airways cannot distribute flow like distal bronchioles'
          ],
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Upper Airways (High R)',
            items: [
              'Large individual diameter',
              'LOW total area (few tubes)',
              'High flow velocity',
              'Turbulent flow',
              'Irregular surfaces',
              '~80% of total resistance'
            ]
          },
          right: {
            title: 'Small Airways (Low R)',
            items: [
              'Small individual diameter',
              'HUGE total area (millions)',
              'Low flow velocity',
              'Laminar flow',
              'Smooth surfaces',
              '~20% of total resistance'
            ]
          },
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Paradox: Despite narrower individual diameters, bronchioles contribute less resistance due to enormous parallel arrangement and laminar flow',
          critical: true
        }
      ]
    },
    'lo-3': {
      title: 'Define and explain the following terms: anatomic and physiologic dead space, respiratory rate, respiratory minute volume, dead space ventilation, alveolar ventilation.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Ventilation Parameters',
          critical: true
        },
        {
          type: 'list',
          intro: 'Dead space definitions:',
          items: [
            'Anatomic dead space: Conducting airways with no gas exchange (nose, trachea, bronchi) = ~150 mL',
            'Physiologic dead space: Total volume not participating in exchange = anatomic + non-perfused alveoli',
            'In healthy individuals: Physiologic = Anatomic (~150 mL)',
            'In disease (e.g., PE): Physiologic > Anatomic due to ventilated but non-perfused alveoli'
          ],
          critical: true
        },
        {
          type: 'table',
          headers: ['Parameter', 'Definition', 'Formula', 'Normal Value'],
          rows: [
            ['Respiratory Rate', 'Breaths per minute', '—', '14 breaths/min'],
            ['Minute Volume', 'Total air per minute', 'VT × RR', '7 L/min'],
            ['Dead Space Vent.', 'Dead space air per min', 'VD × RR', '2.1 L/min'],
            ['Alveolar Vent.', 'Air reaching alveoli', '(VT - VD) × RR', '5 L/min']
          ],
          critical: true
        },
        {
          type: 'formula',
          formula: 'Alveolar Ventilation = (VT - VD) × RR',
          explanation: 'Most important parameter: reflects actual gas exchange capacity. Minute volume alone is misleading.',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Example: Normal breathing has VT = 500 mL, VD = 150 mL, RR = 14/min. Alveolar ventilation = (500-150) × 14 = 4,900 mL/min ≈ 5 L/min.'
        },
        {
          type: 'clinical',
          text: 'Rapid shallow breathing (high RR, low VT) can maintain normal minute volume but severely reduce alveolar ventilation, causing hypercapnia'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the method to determine physiologic dead space.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Bohr Method for Physiologic Dead Space'
        },
        {
          type: 'formula',
          formula: 'VD/VT = (PaCO₂ - PECO₂) / PaCO₂',
          explanation: 'Ratio of dead space to tidal volume using CO₂ partial pressures',
          critical: true
        },
        {
          type: 'list',
          intro: 'Variables explained:',
          items: [
            'VD = Dead space volume (unknown)',
            'VT = Tidal volume (measured)',
            'PaCO₂ = Arterial CO₂ partial pressure (from blood gas)',
            'PECO₂ = Mixed expired CO₂ (from collected expired air)'
          ]
        },
        {
          type: 'steps',
          intro: 'Measurement procedure:',
          items: [
            'Obtain arterial blood sample via arterial puncture',
            'Analyze blood gas to measure PaCO₂',
            'Collect expired air over several breath cycles',
            'Measure PECO₂ from mixed expired sample',
            'Substitute values into Bohr equation',
            'Calculate VD/VT ratio, then multiply by VT to get VD'
          ]
        },
        {
          type: 'keypoint',
          text: 'Physiological basis: Alveolar CO₂ = Arterial CO₂ (equilibrium), while dead space air has no CO₂. Difference reflects dead space proportion.'
        },
        {
          type: 'paragraph',
          text: 'Normal VD/VT ratio is 0.2-0.35 (20-35%). Increased ratio suggests ventilated but non-perfused regions, seen in pulmonary embolism or emphysema.'
        },
        {
          type: 'clinical',
          text: 'Pulmonary embolism dramatically increases physiologic dead space by blocking perfusion to ventilated alveoli, raising VD/VT ratio'
        }
      ]
    },
    'lo-5': {
      title: 'Draw a spirogram of a forced expiratory effort. Indicate the forced vital capacity (FVC), the forced expiratory volume in 1 second (FEV1). Define the Tiffeneau-index (FEV1/VC). Define peak expiratory flow (PEF), and forced expiratory flow 25-75 (FEF25-75; between 25 and 75% of FVC).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Forced Expiratory Spirogram',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Spirogram maneuver sequence:',
          items: [
            'Patient breathes quietly at rest',
            'Maximal inspiration to total lung capacity (TLC)',
            'Rapid, forceful, complete expiration',
            'Steep descending curve shows volume vs time',
            'FEV₁ marked at 1-second point on curve',
            'Expiration continues to residual volume'
          ],
          critical: true
        },
        {
          type: 'table',
          headers: ['Parameter', 'Definition', 'Normal Value', 'Reflects'],
          rows: [
            ['FVC', 'Total volume expired after max inspiration', '~5 L', 'Overall capacity'],
            ['FEV₁', 'Volume expired in first second', '~4 L', 'Airway patency'],
            ['Tiffeneau', 'FEV₁/VC × 100', '75-80%', 'Obstruction severity'],
            ['PEF', 'Maximum flow rate during expiration', '10 L/s', 'Large airway function'],
            ['FEF₂₅₋₇₅', 'Average flow between 25-75% FVC', 'Variable', 'Small airway function']
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'Tiffeneau-index (FEV₁/VC) is the gold standard for diagnosing airway obstruction. Normal ≥ 70-80%, obstructive < 70%.',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Obstructive Disease',
            items: [
              'Decreased FEV₁',
              'Normal or decreased FVC',
              'Tiffeneau < 70%',
              'Decreased PEF',
              'Decreased FEF₂₅₋₇₅',
              'Examples: Asthma, COPD'
            ]
          },
          right: {
            title: 'Restrictive Disease',
            items: [
              'Decreased FEV₁',
              'Decreased FVC (proportional)',
              'Tiffeneau ≥ 70% (normal)',
              'Normal or low PEF',
              'Normal FEF₂₅₋₇₅',
              'Examples: Fibrosis, chest wall disorders'
            ]
          }
        },
        {
          type: 'clinical',
          text: 'FEF₂₅₋₇₅ is a sensitive early marker of small airway disease, often abnormal before FEV₁ or Tiffeneau-index change'
        }
      ]
    }
  }
};

export default topic26QuickReview;
