const topic4 =   {
    id: 'topic-4',
    number: 4,
    category: 'neurophysiology',
    mcqs: ['mcq-1'],
    title: 'The resting membrane potential',
    subtitle: 'Understanding the electrical potential across cell membranes at rest, the ionic basis of membrane potential, and the role of ion gradients and pumps in maintaining cellular function and excitability.',
    learningObjectives: [
      {
        id: 'lo-1',
        isCritical: false,
        title: 'Explain the origin of the resting membrane potential, the electric and chemical forces that determine the diffusion of ions.',
        keyPoints: [
          'Resting membrane potential (RMP): Electrical potential difference across membrane at rest; typically -70 to -90 mV (inside negative)',
          'Ion concentration gradients: Na+ high outside (138-151 mM), K+ high inside (155 mM); maintained by Na-K-ATPase',
          'Selective membrane permeability: Membrane much more permeable to K+ than Na+ at rest; K+ diffuses out down gradient',
          'Chemical force: Concentration gradient drives K+ outward; leaves behind negative charges (anionic proteins)',
          'Electrical force: Negative charges inside create electrical gradient pulling K+ back in; equilibrium when forces balance',
          'Na-K-ATPase contribution: Pumps 3 Na+ out, 2 K+ in per ATP; direct contribution 2-4 mV; maintains concentration gradients',
          'Stable RMP requires metabolic energy: Up to 70% of total ATP consumption in neurons; unstable RMP creates pacemaker cells'
        ],
        officialDefinitions: [
          'The resting membrane potential (RMP) is the electrical potential difference across the cell membrane when the cell is at rest. It is crucial for the proper functioning of excitable cells like neurons and muscle cells. The RMP is typically in the range of -70 to -90 mV depending on the type of cell. It represents the voltage difference between the intracellular and extracellular environments, with the inside of the cell being more negative relative to the outside.',
          'Ion concentration gradients: Na+ is found in higher concentrations outside the cell, while K+ is higher inside the cell. These concentration gradients are maintained by the action of ion pumps like the Na+/K+ ATPase.',
          'Selective permeability of the cell membrane: The cell membrane is selectively permeable to various ions through specific ion channels. At rest, the membrane is much more permeable to K+ than to Na+ or Cl-, allowing K+ ions to diffuse out of the cell more readily. This selective permeability contributes significantly to the establishment of the RMP.',
          'Chemical (Concentration) Gradient: Ions diffuse from areas of higher concentration to areas of lower concentration. For example, K+ tends to move out of the cell, following its concentration gradient.',
          'Electrical Gradient: The membrane potential creates an electrical force that influences ion movement. Positive ions (cations) are attracted to the negative interior of the cell, while negative ions (anions) are repelled.',
          'The Na+/K+ ATPase actively pumps 3 Na+ ions out and 2 K+ ions in for each ATP molecule hydrolyzed. This activity creates a net negative charge inside the cell, contributing directly (2-4 mV) and indirectly (by maintaining Na+ and K+ gradients) to the RMP. The pump maintains a high intracellular concentration of K+ and a high extracellular concentration of Na+, which are crucial for maintaining the RMP.',
          'In majority of the cells its value is stable maintenance of constant RMP requires metabolic energy giant axon of the squid (up to 70% of the total ATP consumption of the cells!!). Cells with unstable E0 might act as pacemaker cells (generation of rhythmic activity- APs; e.g.: cells of the nodal tissues of the heart; interstitial cells of Cajal – GI tract).'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The resting membrane potential originates from ion concentration gradients and selective membrane permeability.' },
            { type: 'paragraph', content: 'Sodium is concentrated outside the cell at 138 to 151 millimolar while potassium is concentrated inside at 155 millimolar, gradients maintained by the Na-K-ATPase pump.' },
            { type: 'paragraph', content: 'At rest, the membrane is much more permeable to potassium than sodium. Potassium diffuses out down its concentration gradient driven by chemical force, leaving behind negative charges from anionic proteins inside.' },
            { type: 'paragraph', content: 'This creates an electrical force pulling potassium back in. The resting membrane potential of negative 70 to negative 90 millivolts represents the balance between these chemical and electrical forces.' },
            { type: 'paragraph', content: 'The Na-K-ATPase contributes directly by pumping three sodium out and two potassium in per ATP, creating a small net negative charge, and indirectly by maintaining the concentration gradients essential for the potential.' }
          ],
          raw: 'The resting membrane potential originates from ion concentration gradients and selective membrane permeability. Sodium is concentrated outside the cell at 138 to 151 millimolar while potassium is concentrated inside at 155 millimolar, gradients maintained by the Na-K-ATPase pump. At rest, the membrane is much more permeable to potassium than sodium. Potassium diffuses out down its concentration gradient driven by chemical force, leaving behind negative charges from anionic proteins inside. This creates an electrical force pulling potassium back in. The resting membrane potential of negative 70 to negative 90 millivolts represents the balance between these chemical and electrical forces. The Na-K-ATPase contributes directly by pumping three sodium out and two potassium in per ATP, creating a small net negative charge, and indirectly by maintaining the concentration gradients essential for the potential.'
        }
      },
      {
        id: 'lo-2',
        isCritical: true,
        title: '>>State the Nernst equation used to determine the equilibrium potential of ions,<< and apply the equation to determine the equilibrium potential for K+ in the cell membrane (EK+).',
        keyPoints: [
          'Nernst equation: Ex = (RT/ZF) × ln([ion]o/[ion]i); calculates equilibrium potential for single ion',
          'Variables: R = gas constant (8.31 J/mol·K), T = temperature (310 K at 37°C), F = Faraday constant (96,485 C/mol), Z = ion valence',
          'Simplified form at 37°C: Ex = 61.5/Z × log([ion]o/[ion]i) in millivolts',
          'K+ equilibrium calculation: Using K+ outside 5 mM, inside 150 mM, Z = +1',
          'EK+ = 61.5 × log(5/150) = 61.5 × log(0.0333) = 61.5 × (-1.477) = -90.9 mV',
          'Interpretation: At -90.9 mV, chemical and electrical forces on K+ are balanced; no net K+ movement',
          'Physical meaning: K+ would make membrane -90 mV if membrane were 100% permeable to K+ alone'
        ],
        officialDefinitions: [
          'The Nernst equation is a mathematical formula used to calculate the equilibrium potential of an ion across a membrane, based on its concentration gradient. The equation is defined as: Ex = (RT/ZF) × ln([Ion]o/[Ion]i)',
          'Where: Ex= Equilibrium potential (mV) for ion, R= Gas constant (8.31 J/mol·K), T= Absolute temperature (in Kelvin, typically 310 K for 37°C), F= Faraday constant (96,485 C/mol), Z= Valence of the ion (e.g., +1 for Na+, +2 for Ca2+, -1 for Cl-), (Ion)i= Intracellular concentration of the ion, (Ion)o= Extracellular concentration of the ion',
          'At body temperature (37°C), the equation simplifies to: Ex = 61.5/Z × log([Ion]o/[Ion]i)',
          'K+ equilibrium calculation: Ci Intracellular concentration of K+ = 150 mmol/L, Co Extracellular concentration of K+ = 5 mmol/l, Z Valence of K+ = +1',
          'EK+ = 61.5 × log(5/150) = 61.5 × log(0.0333) = -96.8 mV',
          'The equilibrium potential for K+ is approximately -96.8 mV. This indicates that the inside of the cell would be negative relative to the outside if K+ were the only ion permeable to the membrane.',
          'Physical meaning: At this potential, the chemical (concentration) gradient pushing ions in one direction is exactly balanced by the electrical gradient pulling them in the opposite direction.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>The Nernst equation is Ex equals RT over ZF times the natural logarithm of the extracellular ion concentration divided by the intracellular ion concentration.<<', critical: true },
            { type: 'paragraph', content: '>>For ions, R is the gas constant, T is absolute temperature, F is the Faraday constant, and Z is the ion valence.<<', critical: true },
            { type: 'paragraph', content: '>>At body temperature of 37 degrees Celsius, the equation simplifies to Ex equals 61.5 divided by Z times the base-ten logarithm of the concentration ratio.<<', critical: true },
            { type: 'paragraph', content: 'To determine the equilibrium potential for potassium, using extracellular K+ of 5 millimolar and intracellular K+ of 150 millimolar with valence plus one: EK+ equals 61.5 times logarithm of 5 over 150, which equals 61.5 times negative 1.477, giving approximately negative 90.9 millivolts.' },
            { type: 'paragraph', content: 'This represents the voltage at which chemical and electrical forces on potassium are balanced with no net movement.' }
          ],
          raw: '>>The Nernst equation is Ex equals RT over ZF times the natural logarithm of the extracellular ion concentration divided by the intracellular ion concentration. For ions, R is the gas constant, T is absolute temperature, F is the Faraday constant, and Z is the ion valence. At body temperature of 37 degrees Celsius, the equation simplifies to Ex equals 61.5 divided by Z times the base-ten logarithm of the concentration ratio.<< To determine the equilibrium potential for potassium, using extracellular K+ of 5 millimolar and intracellular K+ of 150 millimolar with valence plus one: EK+ equals 61.5 times logarithm of 5 over 150, which equals 61.5 times negative 1.477, giving approximately negative 90.9 millivolts. This represents the voltage at which chemical and electrical forces on potassium are balanced with no net movement.'
        }
      },
      {
        id: 'lo-3',
        isCritical: false,
        title: 'Using the Nernst-equation predict the direction of net ion movement, if the membrane potential is a) equal, b) lower, c) higher than the ion\'s equilibrium potential. Give the typical equilibrium potential values for Na+, K+, Cl-, and Ca2+.',
        keyPoints: [
          'Em = Ex (equal): No net ion movement; membrane potential at equilibrium for that ion',
          'Em < Ex (more negative): Cations enter cell or anions leave cell to bring Em toward Ex',
          'Em > Ex (more positive): Cations leave cell or anions enter cell to bring Em toward Ex',
          'Typical equilibrium potentials: ENa+ = +60 mV, EK+ = -90 mV, ECl- = -80 mV, ECa2+ = +130 mV',
          'Example at Em = -70 mV: Na+ enters (Em more negative than +60 mV), K+ exits (Em more positive than -90 mV)',
          'Driving force: Difference between Em and Ex determines magnitude of net ion movement',
          'Clinical relevance: Understanding ion movement predicts cellular responses to voltage changes and channel opening'
        ],
        officialDefinitions: [
          'If Em=Ex: There is no net movement of the ion because the membrane potential is at equilibrium for that specific ion.',
          'If Em is more negative than Ex: The ion (cation) will enter the cell, or an anion will leave the cell to bring Em closer to Ex.',
          'If Em is more positive than Ex: The ion (cation) will leave the cell, or an anion will enter the cell to bring Em closer to Ex.',
          'Typical Equilibrium Potentials for Key Ions: ENa+ = 60 mV (or +60 to +65 mV), EK+ = -90 mV (or -90 to -96.8 mV), ECl- = -80 mV, ECa2+ = +130 mV',
          'Example at Em = -70 mV: Na+ enters (Em more negative than +60 mV), K+ exits (Em more positive than -90 mV)',
          'Driving force: Difference between Em and Ex determines magnitude of net ion movement',
          'Clinical relevance: Understanding ion movement predicts cellular responses to voltage changes and channel opening'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'The Nernst equation predicts ion movement direction by comparing membrane potential Em to equilibrium potential Ex.' },
            {
              type: 'list',
              intro: 'Three scenarios:',
              items: [
                'When Em equals Ex, there is no net ion movement because the membrane potential is at equilibrium for that ion',
                'When Em is more negative than Ex, meaning lower, cations will enter the cell or anions will leave to bring Em closer to Ex',
                'When Em is more positive than Ex, meaning higher, cations will leave the cell or anions will enter to bring Em toward Ex'
              ]
            },
            {
              type: 'list',
              intro: 'The typical equilibrium potential values are:',
              items: [
                'Sodium plus 60 millivolts',
                'Potassium negative 90 millivolts',
                'Chloride negative 80 millivolts',
                'Calcium plus 130 millivolts'
              ]
            },
            { type: 'paragraph', content: 'For example, at resting membrane potential of negative 70 millivolts, sodium has a driving force to enter because negative 70 is more negative than plus 60, while potassium has a driving force to exit because negative 70 is more positive than negative 90.' }
          ],
          raw: 'The Nernst equation predicts ion movement direction by comparing membrane potential Em to equilibrium potential Ex. When Em equals Ex, there is no net ion movement because the membrane potential is at equilibrium for that ion. When Em is more negative than Ex, meaning lower, cations will enter the cell or anions will leave to bring Em closer to Ex. When Em is more positive than Ex, meaning higher, cations will leave the cell or anions will enter to bring Em toward Ex. The typical equilibrium potential values are: sodium plus 60 millivolts, potassium negative 90 millivolts, chloride negative 80 millivolts, and calcium plus 130 millivolts. For example, at resting membrane potential of negative 70 millivolts, sodium has a driving force to enter because negative 70 is more negative than plus 60, while potassium has a driving force to exit because negative 70 is more positive than negative 90.'
        }
      },
      {
        id: 'lo-4',
        isCritical: false,
        title: 'Using the Nernst-equation calculate EK+ if the extracellular K+-concentration increases by 5 mmol/l, and ENa+ if the extracellular Na+-concentration increases by 5 mmol/l.',
        keyPoints: [
          'K+ calculation setup: Standard extracellular K+ = 4 mM; increase by 5 mM gives new [K+]o = 9 mM; intracellular [K+]i = 150 mM',
          'New EK+: 61.5 × log(9/150) = 61.5 × log(0.06) = 61.5 × (-1.222) = -75.2 mV',
          'Change in EK+: From -90.9 mV to -75.2 mV; depolarization of approximately 15.7 mV',
          'Na+ calculation setup: Standard extracellular Na+ = 140 mM; increase by 5 mM gives new [Na+]o = 145 mM; intracellular [Na+]i = 15 mM',
          'New ENa+: 61.5 × log(145/15) = 61.5 × log(9.67) = 61.5 × (0.985) = +60.6 mV',
          'Change in ENa+: From +60 mV to +60.6 mV; minimal change of only 0.6 mV',
          'Clinical significance: Hyperkalemia significantly depolarizes cells (reduced excitability); hypernatremia has minimal direct effect on Em'
        ],
        officialDefinitions: [
          'K+ calculation setup: Standard intracellular K+ concentration = 150 mmol/L, Standard extracellular K+ concentration = 4 mmol/L, Increase in extracellular K+ concentration by 5 mmol/L',
          'New extracellular K+ concentration: Ce = 4 + 5 = 9 mmol/L',
          'New EK+: 61.5 × log(9/150) = 61.5 × log(0.06) = 61 × log(0.0643) = 61 × (-1.192) = -72.7 mV',
          'Change in EK+: From approximately -90 mV to -72.7 mV; depolarization',
          'Na+ calculation setup: Standard intracellular Na+ concentration = 15 mmol/L, Standard extracellular Na+ concentration = 140 mmol/L, Increase in extracellular Na+ concentration by 5 mmol/L',
          'New extracellular Na+ concentration: Ce = 140 + 5 = 145 mmol/L',
          'New ENa+: 61.5 × log(145/15) = 61 × log(9.67) = 61 × (0.985) = +60.1 mV (or approximately +60.6 mV)',
          'Change in ENa+: From +60 mV to +60.6 mV; minimal change of only 0.6 mV',
          'Clinical significance: Hyperkalemia significantly depolarizes cells (reduced excitability); hypernatremia has minimal direct effect on Em'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'To calculate the new potassium equilibrium potential when extracellular potassium increases by 5 millimolar:' },
            {
              type: 'steps',
              items: [
                'Starting from standard extracellular K+ of 4 millimolar, the new concentration is 9 millimolar, while intracellular remains 150 millimolar',
                'Using the Nernst equation: EK+ equals 61.5 times logarithm of 9 over 150, which equals 61.5 times negative 1.222, giving negative 75.2 millivolts',
                'This represents a depolarization of approximately 16 millivolts from the original negative 90.9 millivolts'
              ]
            },
            { type: 'paragraph', content: 'For sodium:' },
            {
              type: 'steps',
              items: [
                'Starting from standard extracellular Na+ of 140 millimolar, the new concentration is 145 millimolar, while intracellular remains 15 millimolar',
                'ENa+ equals 61.5 times logarithm of 145 over 15, which equals 61.5 times 0.985, giving approximately positive 60.6 millivolts',
                'This represents only a 0.6 millivolt change'
              ]
            },
            { type: 'paragraph', content: 'This demonstrates that hyperkalemia has a much greater effect on membrane potential than hypernatremia.' }
          ],
          raw: 'To calculate the new potassium equilibrium potential when extracellular potassium increases by 5 millimolar: starting from standard extracellular K+ of 4 millimolar, the new concentration is 9 millimolar, while intracellular remains 150 millimolar. Using the Nernst equation: EK+ equals 61.5 times logarithm of 9 over 150, which equals 61.5 times negative 1.222, giving negative 75.2 millivolts. This represents a depolarization of approximately 16 millivolts from the original negative 90.9 millivolts. For sodium, starting from standard extracellular Na+ of 140 millimolar, the new concentration is 145 millimolar, while intracellular remains 15 millimolar. ENa+ equals 61.5 times logarithm of 145 over 15, which equals 61.5 times 0.985, giving approximately positive 60.6 millivolts. This represents only a 0.6 millivolt change, demonstrating that hyperkalemia has a much greater effect on membrane potential than hypernatremia.'
        }
      },
      {
        id: 'lo-5',
        isCritical: true,
        title: '>>Determine the resting membrane potential (for instance in striated muscle fibers) using the Goldman-Hodgkin-Katz-equation.<< Explain how the membrane potential is affected if the membrane permeability to Na+, K+, and Cl- decreases.',
        keyPoints: [
          'Goldman-Hodgkin-Katz equation: Em = 61.5 × log[(PK[K+]o + PNa[Na+]o + PCl[Cl-]i)/(PK[K+]i + PNa[Na+]i + PCl[Cl-]o)]',
          'Three factors considered: (1) Ion charge polarity, (2) Membrane permeability to each ion, (3) Ion concentrations inside and outside',
          'Chloride term flipped: [Cl-]i in numerator, [Cl-]o in denominator because Cl- is negatively charged',
          'Application to muscle: RMP typically -70 to -90 mV; reflects relative permeabilities PK >> PNa > PCl at rest',
          'Decreased PNa effect: Membrane potential shifts more negative (closer to EK+); reduced depolarizing influence',
          'Decreased PK effect: Membrane potential shifts more positive (less negative); reduced hyperpolarizing influence; most significant change',
          'Decreased PCl effect: Generally minimal impact in most cells; may cause slight depolarization if Cl- permeability was significant'
        ],
        officialDefinitions: [
          'The Goldman-Hodgkin-Katz (GHK) equation is used to calculate the membrane potential when a membrane is permeable to several different ions. It considers three main factors: 1. Polarity of the electrical charge of each ion. 2. Permeability of the membrane to each ion. 3. Concentration of the ions on the inside and outside of the membrane.',
          'The Goldman equation is expressed as: Em = (RT/F) × ln[(PK[K+]o + PNa[Na+]o + PCl[Cl-]i)/(PK[K+]i + PNa[Na+]i + PCl[Cl-]o)]. Where: C is the concentration of ions (Na+, K+, Cl-) inside and outside the cell. P is the permeability of each ion through the membrane.',
          'Note that the chloride term is flipped because Cl- is negatively charged, and flipping the ratio ensures its contribution to the membrane potential has the correct sign.',
          'Application of GHK Equation to Muscle Fibers: The GHK equation is particularly useful for determining the resting membrane potential of cells, such as striated muscle fibers. In these cells, the resting membrane potential is typically between -70 mV to -90 mV. This potential is largely influenced by the relative permeabilities of Na+, K+, and Cl-.',
          'Decreased Permeability to Na+: If the permeability of Na+ decreases, the influence of Na+ on the membrane potential will decrease. As a result, the membrane potential will shift closer to the equilibrium potential of K+ (more negative).',
          'Decreased Permeability to K+: Decreased permeability to K+ will reduce its contribution to the membrane potential, causing the membrane potential to become more positive (less negative).',
          'Decreased Permeability to Cl-: Changes in Cl- permeability generally have less impact on the resting membrane potential in most cells, but if Cl- permeability decreases significantly, it can lead to depolarization (a more positive membrane potential).'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: '>>The Goldman-Hodgkin-Katz equation determines resting membrane potential when the membrane is permeable to multiple ions.<<', critical: true },
            { type: 'paragraph', content: '>>The equation is Em equals 61.5 times the logarithm of the sum of permeability times concentration products in the numerator divided by the denominator.<<', critical: true },
            { type: 'paragraph', content: '>>Specifically, the numerator contains PK times extracellular potassium plus PNa times extracellular sodium plus PCl times intracellular chloride. The denominator contains PK times intracellular potassium plus PNa times intracellular sodium plus PCl times extracellular chloride.<<', critical: true },
            { type: 'paragraph', content: '>>Note that chloride terms are inverted because chloride is negatively charged. In striated muscle fibers, the resting membrane potential is typically negative 70 to negative 90 millivolts.<<', critical: true },
            {
              type: 'list',
              intro: 'Effects of decreased permeability:',
              items: [
                'If sodium permeability decreases, the membrane potential becomes more negative, approaching the potassium equilibrium potential',
                'If potassium permeability decreases, the membrane potential becomes more positive or less negative',
                'If chloride permeability decreases, there is generally minimal impact though slight depolarization may occur'
              ]
            }
          ],
          raw: '>>The Goldman-Hodgkin-Katz equation determines resting membrane potential when the membrane is permeable to multiple ions. The equation is Em equals 61.5 times the logarithm of the sum of permeability times concentration products in the numerator divided by the denominator. Specifically, the numerator contains PK times extracellular potassium plus PNa times extracellular sodium plus PCl times intracellular chloride. The denominator contains PK times intracellular potassium plus PNa times intracellular sodium plus PCl times extracellular chloride. Note that chloride terms are inverted because chloride is negatively charged. In striated muscle fibers, the resting membrane potential is typically negative 70 to negative 90 millivolts.<< If sodium permeability decreases, the membrane potential becomes more negative, approaching the potassium equilibrium potential. If potassium permeability decreases, the membrane potential becomes more positive or less negative. If chloride permeability decreases, there is generally minimal impact though slight depolarization may occur.'
        }
      },
      {
        id: 'lo-6',
        isCritical: true,
        title: 'Characterize the dynamic equilibrium („steady state") in the resting membrane. Explain the importance of the simultaneous passive ion currents (eg. Na+, K+) and active ion pumping (Na+-K+-ATPase) in determining the membrane potential and cellular volume. >>Explain the consequence of the inhibition of the Na+-K+-ATPase.<<',
        keyPoints: [
          'Dynamic equilibrium (steady state): Continuous ion movement but zero net flux; intracellular and extracellular concentrations remain constant over time',
          'Passive ion currents: Continuous Na+ influx and K+ efflux through leak channels down concentration gradients',
          'Active Na-K-ATPase: Pumps 3 Na+ out, 2 K+ in per ATP; counteracts passive leak currents',
          'Maintaining membrane potential: Na-K-ATPase maintains concentration gradients that establish K+ equilibrium potential near resting potential',
          'Volume regulation: Without active pumping, Na+ and Cl- accumulate inside; osmotic pressure increases causing cell swelling and lysis',
          'Na-K-ATPase inhibition consequences: (1) Na+ accumulates inside, (2) K+ depletes inside, (3) Membrane depolarizes, (4) Cell swells due to osmotic imbalance, (5) Loss of excitability, (6) Eventually cell death',
          'Clinical example: Cardiac glycosides (digoxin) partially inhibit Na-K-ATPase; increase intracellular Na+ leads to increased Ca2+ via Na-Ca exchanger; positive inotropic effect'
        ],
        officialDefinitions: [
          'Dynamic equilibrium or steady state in the resting membrane potential refers to the balance between the passive ion currents and active ion pumping, which collectively maintain the resting membrane potential at a stable level. While ions like Na+ and K+ are continuously moving across the membrane, their net flux is zero, preventing changes in intracellular and extracellular concentrations over time. This steady state is crucial for maintaining the cell\'s membrane potential and cellular volume.',
          'Passive Ion Currents through Leaky Channels: Leaky ion channels allow ions to diffuse down their concentration gradients, leading to passive ion currents. In the resting state, there is a continuous passive influx of Na+ and a passive efflux of K+. The permeability of the membrane to K+ is significantly higher compared to Na+, making K+ the major contributor to the resting membrane potential.',
          'Active Ion Pumping via Na+-K+-ATPase: The Na+-K+-ATPase pump actively transports 3 Na+ ions out of the cell and 2 K+ ions into the cell for each ATP molecule hydrolyzed. This active transport maintains high Na+ concentration outside the cell and high K+ concentration inside the cell, crucial for maintaining the membrane potential and cell volume. The Na+-K+-ATPase contributes directly to the resting membrane potential by creating a small net negative charge inside the cell (electrogenic contribution).',
          'Establishment of Membrane Potential: The resting membrane potential is primarily determined by the equilibrium potential of K+ due to its high permeability. The Na+-K+-ATPase pump ensures that the intracellular K+ concentration remains high and the Na+ concentration low, which is necessary to sustain the K+ equilibrium potential close to the resting membrane potential.',
          'Regulation of Cellular Volume: Without active Na+-K+ pumping, the passive influx of Na+ and efflux of K+ would eventually lead to an accumulation of Na+ and Cl- inside the cell, resulting in osmotic swelling and potentially cell lysis. The Na+-K+-ATPase counteracts these passive ion currents and maintains a constant cell volume by preventing the build-up of osmotic pressure.',
          'If the Na+-K+-ATPase is inhibited, Na+ accumulates inside the cell, leading to depolarization of the cell membrane. This depolarization can lead to inappropriate activation of voltage-gated channels, disturbing the cell\'s electrical excitability, which is crucial in neurons and muscle cells.',
          'Consequence of the inhibition of the Na+-K+-ATPase: 1. Disruption of Ion Concentration Gradients: When the pump is inhibited, the intracellular Na+ concentration increases and the intracellular K+ concentration decreases. This disruption affects secondary active transport mechanisms that rely on the Na+ gradient (e.g., Na+/glucose cotransporter), thereby hindering the uptake of glucose and other nutrients. 2. Changes in Membrane Potential: The Na+-K+ pump has a small but significant electrogenic contribution to the resting membrane potential due to its 3 Na+/2 K+ exchange ratio. Inhibition of the pump leads to depolarization of the cell, making the interior of the cell less negative, which could impact cellular excitability. 3. Effect on Cellular Volume and Osmolarity: Na+-K+-ATPase helps regulate cellular osmolarity by controlling Na+ and K+ movements, which, in turn, regulate water balance. Inhibition results in an increased intracellular Na+ concentration, leading to osmotic influx of water and potential cell swelling or even lysis. 4. Impact on Secondary Active Transport: Secondary active transporters use the Na+ gradient created by Na+-K+-ATPase for the import of glucose, amino acids, and other solutes. Inhibition disrupts these transporters, leading to a decrease in nutrient absorption and a build-up of intracellular solutes. 5. Effect on Action Potentials and Muscle Contraction: Na+-K+-ATPase is crucial for restoring ion gradients after action potentials in excitable tissues like neurons and muscle fibers. Inhibition impairs action potential recovery, potentially leading to muscle weakness and altered neuronal firing patterns. 6. General Cellular Homeostasis: Long-term inhibition of Na+-K+-ATPase disrupts overall ion homeostasis, which can impact many cellular processes, including signal transduction, energy metabolism, and cell survival.'
        ],
        examAnswer: {
          formatted: [
            { type: 'paragraph', content: 'Dynamic equilibrium or steady state in the resting membrane refers to the balance between passive ion currents and active ion pumping where ions continuously move but net flux is zero, maintaining constant concentrations.' },
            { type: 'paragraph', content: 'Passive ion currents include continuous sodium influx and potassium efflux through leak channels down their concentration gradients.' },
            { type: 'paragraph', content: 'The Na-K-ATPase actively pumps three sodium out and two potassium in per ATP, counteracting these passive currents.' },
            { type: 'paragraph', content: 'This simultaneous activity is critical for maintaining both membrane potential and cellular volume. The pump maintains the concentration gradients that establish the potassium equilibrium potential close to the resting potential.' },
            { type: 'paragraph', content: 'Without active pumping, sodium and chloride would accumulate inside causing osmotic swelling and cell lysis.' },
            {
              type: 'list',
              intro: '>>Inhibition of the Na-K-ATPase has severe consequences:<<',
              critical: true,
              items: [
                'Sodium accumulates inside the cell',
                'Potassium depletes from inside',
                'The membrane depolarizes',
                'The cell swells from osmotic imbalance',
                'Excitability is lost',
                'Ultimately the cell dies'
              ]
            },
            { type: 'paragraph', content: 'This demonstrates that the resting membrane potential is an energy-dependent steady state requiring continuous ATP consumption.' }
          ],
          raw: 'Dynamic equilibrium or steady state in the resting membrane refers to the balance between passive ion currents and active ion pumping where ions continuously move but net flux is zero, maintaining constant concentrations. Passive ion currents include continuous sodium influx and potassium efflux through leak channels down their concentration gradients. The Na-K-ATPase actively pumps three sodium out and two potassium in per ATP, counteracting these passive currents. This simultaneous activity is critical for maintaining both membrane potential and cellular volume. The pump maintains the concentration gradients that establish the potassium equilibrium potential close to the resting potential. Without active pumping, sodium and chloride would accumulate inside causing osmotic swelling and cell lysis. >>Inhibition of the Na-K-ATPase has severe consequences: sodium accumulates inside the cell, potassium depletes from inside, the membrane depolarizes, the cell swells from osmotic imbalance, excitability is lost, and ultimately the cell dies.<< This demonstrates that the resting membrane potential is an energy-dependent steady state requiring continuous ATP consumption.'
        }
      }
    ],
    referenceValues: [
      {
        parameter: 'Extracellular Na+',
        value: '138-151 mM',
        isCritical: false
      },
      {
        parameter: 'Extracellular K+',
        value: '3.4-5.2 mM',
        isCritical: false
      },
      {
        parameter: 'Extracellular HCO3-',
        value: '21-28.5 mM',
        isCritical: false
      },
      {
        parameter: 'Extracellular Cl-',
        value: '101-111 mM',
        isCritical: false
      },
      {
        parameter: 'Extracellular Ca2+ (ionized)',
        value: '1.5 mM',
        isCritical: false
      },
      {
        parameter: 'Intracellular Na+',
        value: '12 mM',
        isCritical: false
      },
      {
        parameter: 'Intracellular K+',
        value: '155 mM',
        isCritical: false
      },
      {
        parameter: 'Intracellular HCO3-',
        value: '8 mM',
        isCritical: false
      },
      {
        parameter: 'Intracellular Cl-',
        value: '4 mM',
        isCritical: false
      },
      {
        parameter: 'Intracellular Ca2+',
        value: '10⁻⁵ - 10⁻⁴ mM',
        isCritical: false
      }
    ]
  };

export default topic4;
