const topic6QuickReview = {
  topicId: 'topic-6',
  topicNumber: 6,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the propagation of the action potential in myelinated and unmyelinated axons. Explain saltatory conduction.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Saltatory Conduction in Myelinated Axons'
        },
        {
          type: 'keypoint',
          content: 'Action potential "jumps" from node of Ranvier to node of Ranvier, bypassing the insulated internodal segments.'
        },
        {
          type: 'steps',
          title: 'Mechanism of Saltatory Conduction',
          steps: [
            'Na⁺ influx at one node triggers local depolarization',
            'Current spreads rapidly through insulated internode (no ion flow)',
            'Depolarization reaches next node, opening voltage-gated Na⁺ channels',
            'Action potential regenerates at each node sequentially'
          ]
        },
        {
          type: 'keypoint',
          content: 'Nodes of Ranvier are gaps in myelin where voltage-gated Na⁺ channels concentrate—the ONLY sites of action potential regeneration.'
        },
        {
          type: 'comparison',
          title: 'Myelinated vs Unmyelinated Conduction',
          items: [
            {
              label: 'Myelinated (Saltatory)',
              points: [
                'Jumps between nodes',
                'Fast conduction velocity',
                'Energy efficient (less Na⁺-K⁺-ATPase needed)',
                'Ion exchange only at nodes'
              ]
            },
            {
              label: 'Unmyelinated (Continuous)',
              points: [
                'Regenerates at every point',
                'Slow conduction velocity',
                'High energy cost',
                'Ion exchange along entire length'
              ]
            }
          ]
        },
        {
          type: 'paragraph',
          content: 'In unmyelinated axons, voltage-gated Na⁺ channels open sequentially along the entire membrane, followed by K⁺ channels for repolarization. This continuous depolarization-repolarization cycle propagates the action potential slowly along the axon.'
        }
      ]
    },
    'lo-2': {
      title: 'Define the terms membrane space constant and time constant.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Cable Properties of Axons'
        },
        {
          type: 'keypoint',
          content: 'Time constant (τ): Time for membrane potential to change 63% of its final value after current injection.'
        },
        {
          type: 'formula',
          formula: 'τ = Rₘ × Cₘ',
          variables: [
            'τ = time constant',
            'Rₘ = membrane resistance',
            'Cₘ = membrane capacitance'
          ],
          explanation: 'High resistance or capacitance increases time constant, slowing membrane response.'
        },
        {
          type: 'keypoint',
          content: 'Space constant (λ) or length constant: Distance electrical impulse travels before decaying significantly.'
        },
        {
          type: 'formula',
          formula: 'λ = √(Rₘ/Rᵢ)',
          variables: [
            'λ = length constant',
            'Rₘ = membrane resistance',
            'Rᵢ = internal resistance'
          ],
          explanation: 'Large diameter decreases Rᵢ (Rᵢ ∝ 1/πr²), increasing λ and improving signal spread.'
        },
        {
          type: 'list',
          intro: 'Length constant is maximized when:',
          items: [
            'Axon diameter is large (low internal resistance)',
            'Membrane resistance is high (less current leakage)',
            'Current flows along path of least resistance through cytoplasm'
          ]
        }
      ]
    },
    'lo-3': {
      title: 'Define membrane capacity. Explain how membrane capacity affects the propagation of the action potential in myelinated and unmyelinated axons.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Membrane Capacitance and Propagation'
        },
        {
          type: 'keypoint',
          content: 'Membrane capacitance (Cₘ): Ability of cell membrane to store electrical charge. The lipid bilayer acts as a capacitor with charges stored on inner and outer surfaces.'
        },
        {
          type: 'formula',
          formula: 'U = Q/C',
          variables: [
            'U = membrane potential',
            'Q = charge',
            'C = capacitance (~1 µF/cm²)'
          ],
          explanation: 'Higher capacitance requires more charge to change voltage.'
        },
        {
          type: 'comparison',
          title: 'Effect on Propagation Speed',
          items: [
            {
              label: 'Unmyelinated Axons',
              points: [
                'High membrane capacitance',
                'Slower propagation',
                'Depolarization continuous along entire length',
                'More time needed to charge capacitor at each point'
              ]
            },
            {
              label: 'Myelinated Axons',
              points: [
                'Lower capacitance (myelin insulation)',
                'Faster propagation',
                'Action potential jumps between nodes',
                'Less charge needed over long distances'
              ]
            }
          ]
        },
        {
          type: 'paragraph',
          content: 'Saltatory conduction in myelinated axons requires less charge because internodal regions with low capacitance do not require full depolarization—the current spreads electrotonically without regenerating the action potential.'
        }
      ]
    },
    'lo-4': {
      title: 'Action potential propagation in mixed peripheral nerves: The compound (extracellular recorded) action potential.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Compound Action Potential (CAP)'
        },
        {
          type: 'keypoint',
          content: 'Compound action potential: Summation of multiple action potentials from different fiber types in a mixed nerve, recorded extracellularly.'
        },
        {
          type: 'paragraph',
          content: 'Unlike single axon action potentials (all-or-none), the CAP shows multiple peaks or phases. Each peak reflects fibers with similar conduction velocities firing simultaneously.'
        },
        {
          type: 'table',
          title: 'Fiber Types and CAP Peaks',
          headers: ['Fiber Type', 'Characteristics', 'Peak Order'],
          rows: [
            ['A-α fibers', 'Largest myelinated, fastest conduction, lowest threshold', '1st peak (earliest)'],
            ['A-β fibers', 'Myelinated, smaller than A-α, slower conduction', '2nd peak'],
            ['A-δ fibers', 'Small myelinated, slower conduction', '3rd peak'],
            ['C fibers', 'Unmyelinated, slowest conduction, highest threshold', 'Final peak (latest)']
          ]
        },
        {
          type: 'clinical',
          content: 'Analyzing CAP peak timing and amplitude determines conduction velocity and threshold properties of each fiber type. Changes in conduction velocity indicate nerve damage or disease—useful for clinical nerve conduction studies.'
        }
      ]
    },
    'lo-5': {
      title: 'Explain how axonal diameter and myelinisation determines the action propagation velocity of different axons in the same peripheral nerve. Describe the various axon classes based on the Erlanger-Gasser-classification.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Determinants of Conduction Velocity'
        },
        {
          type: 'keypoint',
          content: 'Larger axonal diameter decreases internal resistance (Rᵢ ∝ 1/πr²), increasing the length constant and allowing faster current spread.'
        },
        {
          type: 'list',
          intro: 'Myelination increases conduction velocity by:',
          items: [
            'Increasing membrane resistance (Rₘ) → forces current through axon',
            'Decreasing membrane capacitance (Cₘ) → reduces time constant',
            'Enabling saltatory conduction → action potential jumps between nodes'
          ]
        },
        {
          type: 'table',
          title: 'Erlanger-Gasser Classification',
          headers: ['Fiber Class', 'Velocity', 'Myelination', 'Function'],
          rows: [
            ['A-α (Aα)', '100 m/s', 'Large, heavily myelinated', 'Motor neurons, proprioception (muscle spindles)'],
            ['A-β (Aβ)', '50 m/s', 'Medium, myelinated', 'Touch, pressure receptors'],
            ['A-γ (Aγ)', '20 m/s', 'Medium, myelinated', 'Gamma motor neurons to muscle spindles'],
            ['A-δ (Aδ)', '15 m/s', 'Small, lightly myelinated', 'Pain, temperature (fast pain)'],
            ['B', '7 m/s', 'Small, lightly myelinated', 'Preganglionic autonomic fibers'],
            ['C', '1 m/s', 'Unmyelinated', 'Postganglionic autonomic, slow pain, temperature']
          ]
        },
        {
          type: 'keypoint',
          content: 'Both diameter and myelination improve cable properties: larger diameter increases length constant, myelination decreases time constant and enables saltatory conduction.'
        },
        {
          type: 'paragraph',
          content: 'Anatomical constraints limit how large axons can grow, so myelination evolved as an efficient mechanism to increase conduction velocity without requiring massive axon diameters.'
        }
      ]
    }
  }
};

export default topic6QuickReview;
