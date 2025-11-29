const topic23QuickReview = {
  topicId: 'topic-23',
  topicNumber: 23,
  learningObjectives: {
    'lo-1': {
      title: 'Define and compare the isometric, isotonic, and auxotonic contractions',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Three Types of Muscle Contractions'
        },
        {
          type: 'comparison',
          headers: ['Type', 'Length Change', 'Tension Change', 'Example'],
          rows: [
            {
              category: 'Isometric',
              items: [
                'No change (constant)',
                'Varies',
                'Holding weight steady, pushing immovable object'
              ]
            },
            {
              category: 'Isotonic',
              items: [
                'Shortens or lengthens',
                'Constant',
                'Lifting/lowering dumbbell'
              ]
            },
            {
              category: 'Auxotonic',
              items: [
                'Changes',
                'Changes',
                'Squeezing rubber ball, most daily movements'
              ]
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Isometric = "same length": muscle develops tension without shortening'
        },
        {
          type: 'keypoint',
          content: 'Isotonic = "same tension": muscle shortens while tension stays constant. Two subtypes: concentric (shortening) and eccentric (lengthening while resisting)'
        },
        {
          type: 'keypoint',
          content: 'Auxotonic = "changing": both tension and length change. Most physiological contractions are auxotonic'
        },
        {
          type: 'clinical',
          content: 'Most real-world activities use auxotonic contractions, not pure isometric or isotonic. Examples: walking, throwing, lifting objects of varying weight.'
        }
      ]
    },
    'lo-2': {
      title: 'Explain the connection between preload, afterload, and total load during isotonic contraction',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Load Concepts in Muscle Contraction'
        },
        {
          type: 'paragraph',
          content: 'Preload is the initial stretching of muscle fibers before contraction, determining the starting length. Afterload is the resistance the muscle must overcome to contract. Total load is the combined demand from both.'
        },
        {
          type: 'steps',
          title: 'Sequence of Isotonic Contraction',
          items: [
            'Muscle is pre-stretched by preload to set initial length',
            'Isometric phase begins: muscle generates tension without changing length',
            'Tension builds until it matches the afterload',
            'Isotonic phase starts: muscle begins shortening while maintaining constant tension',
            'Shortening continues as long as tension can match afterload'
          ]
        },
        {
          type: 'keypoint',
          content: 'Higher total load (preload + afterload) requires more force generation, affecting speed and extent of muscle shortening'
        },
        {
          type: 'clinical',
          content: 'In cardiac muscle, preload relates to ventricular filling (end-diastolic volume), while afterload relates to arterial pressure. Same principles apply to skeletal muscle mechanics.'
        }
      ]
    },
    'lo-3': {
      title: 'Draw the muscle length-tension diagram, describe active, passive and total tension, and their molecular mechanisms',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Length-Tension Relationship'
        },
        {
          type: 'comparison',
          headers: ['Tension Type', 'Source', 'Molecular Mechanism', 'Behavior'],
          rows: [
            {
              category: 'Active',
              items: [
                'Cross-bridge cycling',
                'Myosin heads pull actin via ATP hydrolysis',
                'Bell-shaped curve, peaks at 2.0-2.2 µm sarcomere length'
              ]
            },
            {
              category: 'Passive',
              items: [
                'Elastic elements (titin, sarcolemma)',
                'Structural proteins become taut when stretched',
                'Increases exponentially with stretch'
              ]
            },
            {
              category: 'Total',
              items: [
                'Active + Passive',
                'Sum of both mechanisms',
                'Increases with length due to additive effects'
              ]
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Active tension depends on actin-myosin overlap. Optimal overlap at 2.0-2.2 µm allows maximum cross-bridges'
        },
        {
          type: 'list',
          title: 'Why the bell-shaped curve exists',
          items: [
            'At 1.6 µm (too short): excessive overlap causes filament interference, reducing active tension',
            'At 2.0-2.2 µm (optimal): maximal overlap allows maximum cross-bridge formation',
            'At 3.6 µm (overstretched): minimal overlap produces near-zero active tension'
          ]
        },
        {
          type: 'keypoint',
          content: 'Passive tension is produced by titin, a giant elastic protein that spans from Z-line to M-line in the sarcomere'
        },
        {
          type: 'clinical',
          content: 'The length-tension relationship explains why stretching muscles before exercise can optimize force production and why overstretched muscles generate less force.'
        }
      ]
    },
    'lo-4': {
      title: 'Explain the relationship between force (load) and shortening velocity. Define muscle power',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Force-Velocity Relationship'
        },
        {
          type: 'paragraph',
          content: 'The force-velocity relationship describes an inverse relationship: as the load (afterload) increases, the velocity of muscle shortening decreases. This reflects the speed at which cross-bridges can cycle under different resistances.'
        },
        {
          type: 'list',
          title: 'Key points along the force-velocity curve',
          items: [
            'Zero load: maximum velocity (Vmax) - cross-bridges cycle at maximum rate',
            'Increasing load: velocity decreases progressively as cross-bridge cycling slows',
            'Maximum load: velocity reaches zero - muscle cannot shorten (becomes isometric)'
          ]
        },
        {
          type: 'keypoint',
          content: 'Higher loads slow cross-bridge cycling rate, reducing shortening velocity'
        },
        {
          type: 'formula',
          formula: 'Power = Force × Velocity',
          description: 'Muscle power is the rate at which muscle performs work, calculated as the product of force generated and contraction velocity'
        },
        {
          type: 'clinical',
          content: 'Power output is maximized at intermediate loads, not at maximum force or maximum velocity. This explains why athletes train at specific load ranges for optimal power development.'
        }
      ]
    },
    'lo-5': {
      title: 'Characterize muscle twitch vs tetanus (complete and incomplete), explain contraction summation and frequency-force relationship',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Muscle Twitch and Tetanus'
        },
        {
          type: 'keypoint',
          content: 'Muscle twitch: single contraction from one action potential with 3 phases - latent (Ca²⁺ release), contraction (cross-bridge cycling), relaxation (Ca²⁺ reuptake)'
        },
        {
          type: 'comparison',
          headers: ['Type', 'Stimulation Frequency', 'Relaxation', 'Tension Pattern', 'Force Level'],
          rows: [
            {
              category: 'Single Twitch',
              items: [
                'Single stimulus',
                'Complete',
                'Single peak then return to baseline',
                'Low'
              ]
            },
            {
              category: 'Incomplete Tetanus',
              items: [
                'Moderate frequency',
                'Partial between stimuli',
                'Wavy, fluctuating',
                'Intermediate'
              ]
            },
            {
              category: 'Complete Tetanus',
              items: [
                'High frequency',
                'None',
                'Smooth, sustained',
                'Maximal'
              ]
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Contraction summation: incomplete relaxation between stimuli causes additive force production due to cumulative calcium accumulation'
        },
        {
          type: 'steps',
          title: 'How twitch becomes tetanus with increasing frequency',
          items: [
            'Low frequency: complete Ca²⁺ reuptake between stimuli → individual twitches',
            'Moderate frequency: incomplete Ca²⁺ reuptake → calcium partially elevated → incomplete tetanus',
            'High frequency: no Ca²⁺ reuptake time → calcium continuously high → fused tetanus',
            'Calcium accumulation saturates troponin, maintaining cross-bridge activity continuously'
          ]
        },
        {
          type: 'clinical',
          content: 'Voluntary muscle contractions are typically smooth tetanic contractions (20-30 Hz), not individual twitches. Motor neurons fire at frequencies that produce fused tetanus for coordinated movement.'
        }
      ]
    },
    'lo-6': {
      title: 'Define muscle fatigue and enlist intracellular processes that play a role',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Muscle Fatigue Mechanisms'
        },
        {
          type: 'paragraph',
          content: 'Muscle fatigue is a decline in the ability to generate force or maintain performance during sustained activity, characterized by reduced capacity for maximum voluntary force production.'
        },
        {
          type: 'list',
          title: 'Intracellular processes causing fatigue',
          items: [
            'Accumulation of metabolic byproducts: lactic acid buildup, increased inorganic phosphate (Pi) from ATP breakdown',
            'Depletion of energy stores: decreased ATP levels, glycogen depletion during prolonged exercise',
            'Impaired calcium handling: reduced Ca²⁺ release from SR, altered contractile protein sensitivity to Ca²⁺',
            'Ion imbalances: increased extracellular K⁺, Na⁺/K⁺-ATPase dysfunction affecting membrane excitability',
            'Reactive oxygen species (ROS): oxidative damage to proteins, lipids, and DNA',
            'Impaired neuromuscular transmission: reduced neurotransmitter release at NMJ'
          ]
        },
        {
          type: 'keypoint',
          content: 'Fatigue involves both central mechanisms (reduced neural drive) and peripheral mechanisms (muscle fiber changes)'
        },
        {
          type: 'clinical',
          content: 'Different exercise types cause fatigue through different mechanisms: high-intensity exercise → metabolite accumulation; endurance exercise → glycogen depletion and ion imbalances.'
        }
      ]
    },
    'lo-7': {
      title: 'Compare three types of skeletal muscle fibers: fast-glycolytic, fast-oxidative, slow-oxidative',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Skeletal Muscle Fiber Types'
        },
        {
          type: 'table',
          headers: ['Property', 'Slow-Oxidative (Type I)', 'Fast-Oxidative (Type IIa)', 'Fast-Glycolytic (Type IIb)'],
          rows: [
            ['Mitochondria', 'Many', 'Many', 'Few'],
            ['Capillaries', 'Many', 'Many', 'Few'],
            ['Myoglobin', 'High (red)', 'High', 'Low (white)'],
            ['Myosin ATPase', 'Low', 'High', 'High'],
            ['Contraction Speed', 'Slow', 'Fast', 'Fast'],
            ['Fatigue Rate', 'Slow', 'Intermediate', 'Fast'],
            ['Fiber Diameter', 'Small', 'Intermediate', 'Large'],
            ['Motor Unit Size', 'Small', 'Intermediate', 'Large']
          ]
        },
        {
          type: 'comparison',
          headers: ['Fiber Type', 'Primary Energy Source', 'Function', 'Example Athlete'],
          rows: [
            {
              category: 'Slow-Oxidative (I)',
              items: [
                'Aerobic metabolism: fatty acids + glucose with O₂',
                'Sustained posture, endurance',
                'Marathon runners'
              ]
            },
            {
              category: 'Fast-Oxidative (IIa)',
              items: [
                'Both aerobic and anaerobic pathways',
                'Intermediate activities',
                'Middle-distance runners'
              ]
            },
            {
              category: 'Fast-Glycolytic (IIb)',
              items: [
                'Anaerobic glycolysis → lactate',
                'Rapid, powerful movements',
                'Sprinters'
              ]
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Fiber type is determined by motor neuron innervation. Cross-innervation experiments show fibers can convert types based on neural input'
        },
        {
          type: 'clinical',
          content: 'Training can shift fiber characteristics: endurance training increases oxidative capacity of Type IIa fibers; resistance training increases size of Type II fibers. Pure Type I ↔ Type II conversion is limited.'
        }
      ]
    },
    'lo-8': {
      title: 'Describe energy sources of working muscle, ranked by speed and ATP amount. Compare muscle types',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Energy Systems in Muscle'
        },
        {
          type: 'comparison',
          headers: ['Energy System', 'Speed', 'ATP Amount', 'Duration', 'Mechanism'],
          rows: [
            {
              category: 'Phosphagen (CP)',
              items: [
                'Fastest',
                'Smallest',
                'Up to 10 seconds',
                'CP + ADP → Cr + ATP'
              ]
            },
            {
              category: 'Anaerobic Glycolysis',
              items: [
                'Fast',
                'Moderate',
                '1-2 minutes',
                'Glucose → Lactate (no O₂ needed)'
              ]
            },
            {
              category: 'Aerobic Metabolism',
              items: [
                'Slowest',
                'Greatest',
                'Hours',
                'CHO/Fat + O₂ → CO₂ + H₂O'
              ]
            }
          ]
        },
        {
          type: 'keypoint',
          content: 'Speed ranking: Phosphagen > Anaerobic glycolysis > Aerobic metabolism'
        },
        {
          type: 'keypoint',
          content: 'ATP amount ranking: Aerobic > Anaerobic glycolysis > Phosphagen'
        },
        {
          type: 'list',
          title: 'Energy source preferences by fiber type',
          items: [
            'Slow-oxidative: High myoglobin (stores O₂), many mitochondria → primarily aerobic with fatty acids and glucose',
            'Fast-glycolytic: Low myoglobin, few mitochondria → phosphagen and anaerobic glycolysis',
            'Fast-oxidative: Intermediate → versatile, uses both aerobic and anaerobic pathways'
          ]
        },
        {
          type: 'keypoint',
          content: 'Myoglobin is a monomeric heme protein that stores oxygen intracellularly. During oxygen deprivation, oxymyoglobin releases bound O₂ for metabolism'
        },
        {
          type: 'clinical',
          content: 'Exercise intensity determines energy system dominance: sprint (0-10s) → phosphagen; high-intensity (10s-2min) → anaerobic glycolysis; endurance (>2min) → aerobic metabolism. All systems work together, but one dominates based on demand.'
        }
      ]
    }
  }
};

export default topic23QuickReview;
