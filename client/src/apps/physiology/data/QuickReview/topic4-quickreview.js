const topic4QuickReview = {
  topicId: 'topic-4',
  topicNumber: 4,
  learningObjectives: {
    'lo-1': {
      title: 'Explain the origin of the resting membrane potential, the electric and chemical forces that determine the diffusion of ions.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Origin of Resting Membrane Potential'
        },
        {
          type: 'paragraph',
          content: 'The resting membrane potential (RMP) is the electrical potential difference across the cell membrane at rest, typically -70 to -90 mV (inside negative). It originates from ion concentration gradients and selective membrane permeability.'
        },
        {
          type: 'keypoint',
          title: 'Ion Concentration Gradients',
          content: 'Na+ is high outside (138-151 mM), K+ is high inside (155 mM). These gradients are maintained by the Na-K-ATPase pump, which consumes ATP to pump 3 Na+ out and 2 K+ in.'
        },
        {
          type: 'comparison',
          title: 'Chemical vs. Electrical Forces',
          items: [
            {
              label: 'Chemical Force',
              description: 'Concentration gradient drives K+ outward, leaving behind negative charges (anionic proteins inside)'
            },
            {
              label: 'Electrical Force',
              description: 'Negative charges inside create electrical gradient pulling K+ back in; equilibrium when forces balance'
            }
          ]
        },
        {
          type: 'keypoint',
          title: 'Selective Permeability',
          content: 'At rest, the membrane is much more permeable to K+ than Na+. K+ diffuses out down its concentration gradient, creating the negative RMP.'
        },
        {
          type: 'clinical',
          title: 'Energy Requirement',
          content: 'Maintaining stable RMP requires metabolic energy - up to 70% of total ATP consumption in neurons. Cells with unstable RMP can act as pacemaker cells (e.g., cardiac nodal tissue).'
        }
      ]
    },
    'lo-2': {
      title: 'State the Nernst equation used to determine the equilibrium potential of ions, and apply the equation to determine the equilibrium potential for K+ in the cell membrane (EK+).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Nernst Equation (CRITICAL)'
        },
        {
          type: 'formula',
          title: 'Nernst Equation',
          formula: 'Ex = (RT/ZF) × ln([ion]ₒ/[ion]ᵢ)',
          variables: [
            'Ex = Equilibrium potential for the ion (mV)',
            'R = Gas constant (8.31 J/mol·K)',
            'T = Absolute temperature (310 K at 37°C)',
            'F = Faraday constant (96,485 C/mol)',
            'Z = Ion valence (+1 for K+, +1 for Na+, -1 for Cl-, +2 for Ca2+)',
            '[ion]ₒ = Extracellular concentration',
            '[ion]ᵢ = Intracellular concentration'
          ]
        },
        {
          type: 'formula',
          title: 'Simplified Form at 37°C',
          formula: 'Ex = 61.5/Z × log([ion]ₒ/[ion]ᵢ)',
          variables: [
            'Uses base-10 logarithm (log) instead of natural log (ln)',
            'Valid at body temperature (37°C)',
            'Result in millivolts (mV)'
          ]
        },
        {
          type: 'steps',
          title: 'Calculating EK+',
          items: [
            'Given: [K+]ₒ = 5 mM, [K+]ᵢ = 150 mM, Z = +1',
            'Apply formula: EK+ = 61.5 × log(5/150)',
            'Calculate ratio: 5/150 = 0.0333',
            'Take logarithm: log(0.0333) = -1.477',
            'Multiply: 61.5 × (-1.477) = -90.9 mV'
          ]
        },
        {
          type: 'keypoint',
          title: 'Physical Meaning',
          content: 'EK+ = -90.9 mV represents the voltage at which chemical and electrical forces on K+ are balanced. At this potential, there is no net K+ movement across the membrane.'
        }
      ]
    },
    'lo-3': {
      title: 'Using the Nernst-equation predict the direction of net ion movement, if the membrane potential is a) equal, b) lower, c) higher than the ion\'s equilibrium potential. Give the typical equilibrium potential values for Na+, K+, Cl-, and Ca2+.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Predicting Ion Movement Direction'
        },
        {
          type: 'comparison',
          title: 'Em vs Ex: Three Scenarios',
          items: [
            {
              label: 'Em = Ex (Equal)',
              description: 'No net ion movement - membrane potential is at equilibrium for that ion'
            },
            {
              label: 'Em < Ex (More negative)',
              description: 'Cations enter cell (or anions leave) to bring Em toward Ex'
            },
            {
              label: 'Em > Ex (More positive)',
              description: 'Cations leave cell (or anions enter) to bring Em toward Ex'
            }
          ]
        },
        {
          type: 'table',
          title: 'Typical Equilibrium Potentials',
          headers: ['Ion', 'Equilibrium Potential'],
          rows: [
            ['Na+', '+60 mV'],
            ['K+', '-90 mV'],
            ['Cl-', '-80 mV'],
            ['Ca2+', '+130 mV']
          ]
        },
        {
          type: 'clinical',
          title: 'Example at Em = -70 mV',
          content: 'At resting potential of -70 mV: Na+ has driving force to enter (Em more negative than +60 mV), while K+ has driving force to exit (Em more positive than -90 mV). The difference between Em and Ex is the driving force magnitude.'
        },
        {
          type: 'keypoint',
          title: 'Driving Force',
          content: 'Driving force = Em - Ex. This determines the magnitude of net ion movement when channels open. Understanding this predicts cellular responses to voltage changes and channel opening.'
        }
      ]
    },
    'lo-4': {
      title: 'Using the Nernst-equation calculate EK+ if the extracellular K+-concentration increases by 5 mmol/l, and ENa+ if the extracellular Na+-concentration increases by 5 mmol/l.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Effect of Extracellular Concentration Changes'
        },
        {
          type: 'steps',
          title: 'K+ Calculation (Hyperkalemia)',
          items: [
            'Standard: [K+]ₒ = 4 mM → New: [K+]ₒ = 9 mM (increase by 5 mM)',
            'Intracellular remains: [K+]ᵢ = 150 mM',
            'New EK+ = 61.5 × log(9/150) = 61.5 × log(0.06)',
            'New EK+ = 61.5 × (-1.222) = -75.2 mV',
            'Change: From -90.9 mV to -75.2 mV (depolarization of ~16 mV)'
          ]
        },
        {
          type: 'steps',
          title: 'Na+ Calculation (Hypernatremia)',
          items: [
            'Standard: [Na+]ₒ = 140 mM → New: [Na+]ₒ = 145 mM (increase by 5 mM)',
            'Intracellular remains: [Na+]ᵢ = 15 mM',
            'New ENa+ = 61.5 × log(145/15) = 61.5 × log(9.67)',
            'New ENa+ = 61.5 × (0.985) = +60.6 mV',
            'Change: From +60 mV to +60.6 mV (minimal change of 0.6 mV)'
          ]
        },
        {
          type: 'comparison',
          title: 'Clinical Significance',
          items: [
            {
              label: 'Hyperkalemia (↑ K+)',
              description: 'Significant depolarization (~16 mV) - reduces excitability, can cause cardiac arrhythmias and muscle weakness'
            },
            {
              label: 'Hypernatremia (↑ Na+)',
              description: 'Minimal effect on Em (0.6 mV) - direct impact on membrane potential is negligible'
            }
          ]
        },
        {
          type: 'clinical',
          title: 'Why the Difference?',
          content: 'K+ has a small extracellular concentration, so a 5 mM increase is proportionally large. Na+ has a large extracellular concentration, so a 5 mM increase is proportionally small. This demonstrates why hyperkalemia is far more dangerous than hypernatremia for cardiac and neuronal function.'
        }
      ]
    },
    'lo-5': {
      title: 'Determine the resting membrane potential (for instance in striated muscle fibers) using the Goldman-Hodgkin-Katz-equation. Explain how the membrane potential is affected if the membrane permeability to Na+, K+, and Cl- decreases.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Goldman-Hodgkin-Katz Equation (CRITICAL)'
        },
        {
          type: 'paragraph',
          content: 'The GHK equation calculates membrane potential when the membrane is permeable to multiple ions simultaneously. It considers three factors: ion charge polarity, membrane permeability to each ion, and ion concentrations inside and outside.'
        },
        {
          type: 'formula',
          title: 'Goldman-Hodgkin-Katz Equation',
          formula: 'Em = 61.5 × log[(PK[K+]ₒ + PNa[Na+]ₒ + PCl[Cl-]ᵢ) / (PK[K+]ᵢ + PNa[Na+]ᵢ + PCl[Cl-]ₒ)]',
          variables: [
            'Em = Membrane potential (mV)',
            'PK, PNa, PCl = Permeabilities for K+, Na+, Cl-',
            '[ion]ₒ = Extracellular concentration',
            '[ion]ᵢ = Intracellular concentration',
            'Note: Cl- terms are inverted (ᵢ in numerator, ₒ in denominator) because Cl- is negatively charged'
          ]
        },
        {
          type: 'keypoint',
          title: 'Application to Muscle Fibers',
          content: 'In striated muscle fibers, RMP is typically -70 to -90 mV. This reflects relative permeabilities where PK >> PNa > PCl at rest, making K+ the dominant contributor to RMP.'
        },
        {
          type: 'comparison',
          title: 'Effects of Decreased Permeability',
          items: [
            {
              label: 'Decreased PNa',
              description: 'Membrane potential shifts more negative (closer to EK+ = -90 mV) - reduced depolarizing influence of Na+'
            },
            {
              label: 'Decreased PK',
              description: 'Membrane potential shifts more positive (less negative) - most significant change since K+ is the primary determinant of RMP'
            },
            {
              label: 'Decreased PCl',
              description: 'Generally minimal impact in most cells; may cause slight depolarization if Cl- permeability was significant'
            }
          ]
        },
        {
          type: 'clinical',
          title: 'Why This Matters',
          content: 'Drugs and toxins that alter ion channel permeabilities can dramatically affect membrane potential. For example, local anesthetics block Na+ channels (decrease PNa), while certain K+ channel blockers can cause dangerous depolarization.'
        }
      ]
    },
    'lo-6': {
      title: 'Characterize the dynamic equilibrium („steady state") in the resting membrane. Explain the importance of the simultaneous passive ion currents (eg. Na+, K+) and active ion pumping (Na+-K+-ATPase) in determining the membrane potential and cellular volume. Explain the consequence of the inhibition of the Na+-K+-ATPase.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Dynamic Equilibrium & Na-K-ATPase (CRITICAL)'
        },
        {
          type: 'paragraph',
          content: 'Dynamic equilibrium (steady state) means ions continuously move across the membrane, but net flux is zero - intracellular and extracellular concentrations remain constant over time. This requires continuous energy expenditure.'
        },
        {
          type: 'comparison',
          title: 'Passive vs. Active Transport',
          items: [
            {
              label: 'Passive Ion Currents',
              description: 'Continuous Na+ influx and K+ efflux through leak channels down concentration gradients - no ATP required, but disrupts gradients'
            },
            {
              label: 'Active Na-K-ATPase',
              description: 'Pumps 3 Na+ out and 2 K+ in per ATP - counteracts passive leak, maintains concentration gradients, contributes 2-4 mV directly'
            }
          ]
        },
        {
          type: 'list',
          title: 'Dual Role of Na-K-ATPase',
          items: [
            'Maintains membrane potential: Preserves concentration gradients that establish K+ equilibrium potential near RMP',
            'Regulates cellular volume: Prevents Na+ and Cl- accumulation that would cause osmotic swelling and cell lysis',
            'Enables excitability: Maintains gradients necessary for action potentials in neurons and muscle',
            'Powers secondary transport: Creates Na+ gradient used by glucose, amino acid, and other transporters'
          ]
        },
        {
          type: 'steps',
          title: 'Consequences of Na-K-ATPase Inhibition',
          items: [
            'Na+ accumulates inside the cell',
            'K+ depletes from inside the cell',
            'Membrane depolarizes (becomes less negative)',
            'Cell swells from osmotic imbalance (Na+ and Cl- draw water in)',
            'Loss of excitability (can\'t generate action potentials)',
            'Secondary transporters fail (no Na+ gradient)',
            'Eventually leads to cell death'
          ]
        },
        {
          type: 'clinical',
          title: 'Clinical Example: Cardiac Glycosides',
          content: 'Digoxin partially inhibits Na-K-ATPase in cardiac cells. Increased intracellular Na+ reduces Ca2+ extrusion via Na-Ca exchanger, leading to increased intracellular Ca2+ and stronger heart contractions (positive inotropic effect). However, excessive inhibition causes dangerous arrhythmias.'
        }
      ]
    }
  }
};

export default topic4QuickReview;
