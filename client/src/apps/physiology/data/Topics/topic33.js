const topic33 = {
  id: 'topic-33',
  mcqs: ['mcq-3'],
  number: 33,
  title: 'Hemodynamics: basic biophysical principles',
  subtitle: 'Fundamental physical principles governing blood flow through the cardiovascular system, including the relationships between flow, velocity, pressure, and resistance.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: '>>Define and compare flow and velocity of flow in terms of concept and unit.<< Understand the relationship between flow, velocity, and cross-sectional area.',
      keyPoints: [
        'Flow (Q): Volume of fluid passing a point per unit time; measures rate of delivery; units are liters per minute or cubic meters per second',
        'Velocity (v): Speed at which fluid particles move through a cross-sectional area; measures how quickly particles travel; units are meters per second or centimeters per second',
        'Relationship: Q = v × A, where A is cross-sectional area; flow equals velocity multiplied by cross-sectional area',
        'Continuity equation: Total flow remains constant in a closed system, so narrower vessels have higher velocity and wider vessels have lower velocity',
        'Aorta: High velocity (~20-30 cm/s) due to small cross-sectional area (~5.3 cm²); cardiac output approximately 5 liters per minute at rest',
        'Capillaries: Low velocity (~0.02-0.1 cm/s) despite same flow because massive total cross-sectional area (~3500 cm²) allows effective gas exchange',
        'Flow is the same throughout circulation (cardiac output), but velocity varies inversely with cross-sectional area'
      ],
      officialDefinitions: [
        'Flow: the fluid volume flowing through the cross-section of the tube in a given time period (V/t). Designated as Q, unit of measurement volume/time (eg liter/min). When applied for the whole circulation: the cardiac output (CO).',
        'Flow velocity (v): describes the average linear velocity of the fluid particles (m/s). Attention! flow ≠ flow velocity (v), the latter describes the average linear velocity of the fluid particles (m/s).',
        'Mathematical relationship: Q=A∙v, where A is the cross sectional area of the vessel.',
        'Units: Flow commonly measured in m³/s (SI unit for flow) or L/min (often used in physiology for cardiac output). Velocity measured in m/s (SI unit for velocity) or cm/s (often used in clinical settings).',
        'Continuity equation: (Q= v. A) ensures that the total flow (Q) remains constant throughout a closed system (e.g., the circulatory system). Implications: Narrower vessels (smaller A): Higher velocity. Wider vessels (larger A): Lower velocity. Capillaries: Massive total cross-sectional area leads to slower blood velocity, facilitating exchange.',
        'Cross-sectional area (cm²): Aorta (~5.3 cm²), arteries (20 cm²), capillaries (3500 cm²), veins (100 cm²), vena cavae (10 cm²). Flow velocity (cm/sec): Arteries (18 cm/sec → 5 cm/sec) → capillaries (0.02-0.1 cm/sec). E.g., aorta: (if CO = 5.6 L/min) v = 5600 cm³/min / 5.3 cm² = 93.3 cm³/sec / 5.3 cm² = 17.6 cm/sec.',
        'Physiological relevance: Flow velocity is inversely proportional to cross-sectional area: v = Q / A. Blood velocity varies significantly depending on the type of vessel: Aorta: High velocity (~20-30 cm/s) due to the small cross-sectional area. Capillaries: Low velocity (~0.1 cm/s) due to the large total cross-sectional area of all capillaries combined. Slow velocity in capillaries allows for effective nutrient and gas exchange.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Flow is the volume of fluid passing through a cross-section per unit time, designated as Q with units of liters per minute or cubic meters per second. It describes rate of delivery and equals cardiac output in the cardiovascular system, approximately 5 liters per minute at rest. Velocity is the speed at which fluid particles move through a cross-sectional area, designated as v with units of meters per second or centimeters per second.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'Flow, velocity, and cross-sectional area relate by Q equals v times A, so velocity is inversely proportional to cross-sectional area.'
          },
          {
            type: 'paragraph',
            content: 'In the aorta, high velocity of 20 to 30 centimeters per second occurs due to small cross-sectional area of approximately 5.3 square centimeters. In capillaries, very low velocity of 0.02 to 0.1 centimeters per second occurs because massive combined cross-sectional area of approximately 3500 square centimeters allows adequate time for gas exchange.'
          }
        ],
        raw: '>>Flow is the volume of fluid passing through a cross-section per unit time, designated as Q with units of liters per minute or cubic meters per second. It describes rate of delivery and equals cardiac output in the cardiovascular system, approximately 5 liters per minute at rest. Velocity is the speed at which fluid particles move through a cross-sectional area, designated as v with units of meters per second or centimeters per second.<< Flow, velocity, and cross-sectional area relate by Q equals v times A, so velocity is inversely proportional to cross-sectional area. In the aorta, high velocity of 20 to 30 centimeters per second occurs due to small cross-sectional area of approximately 5.3 square centimeters. In capillaries, very low velocity of 0.02 to 0.1 centimeters per second occurs because massive combined cross-sectional area of approximately 3500 square centimeters allows adequate time for gas exchange.'
      }
    },
    {
      id: 'lo-2',
      isCritical: false,
      title: 'Know the factors that determine the total energy of the flowing blood (Bernoulli\'s law).',
      keyPoints: [
        'Bernoulli\'s law: Conservation of total energy in flowing fluid; total energy remains constant but proportions change',
        'Pressure energy (P): Potential energy stored due to fluid pressure; drives blood flow and overcomes resistance; measured in pascals or millimeters mercury',
        'Kinetic energy: Energy due to blood motion; equals one-half times mass times velocity squared; faster-moving blood in narrow vessels has higher kinetic energy',
        'Gravitational potential energy: Energy due to position in gravitational field; equals mass times gravity times height; blood at higher elevations has more potential energy',
        'Bernoulli equation: P + (1/2)ρv² + ρgh = constant, where ρ is blood density (~1060 kg/m³), g is gravity (~9.8 m/s²), h is height',
        'Inverse pressure-velocity relationship: When velocity increases in narrowed vessels, pressure energy decreases to maintain constant total energy',
        'Clinical applications: Stenotic valves have high velocity and low pressure causing murmurs; gravitational effects on venous return vary with body position'
      ],
      officialDefinitions: [
        'Bernoulli\'s law: describes the conservation of total energy in a flowing fluid, including blood. The total energy consists of three components: pressure energy, kinetic energy, and gravitational potential energy.',
        'Bernoulli\'s Equation: P + (1/2) ρ * v² + ρ * g * h = constant. Where: P = Pressure energy, ρ = Density of blood (~1060 kg/m³), v = Velocity of blood flow, g = Acceleration due to gravity (~9.8 m/s²), h = Height above a reference point.',
        'Pressure Energy (P): Potential energy stored in the fluid due to its pressure. Drives blood flow and overcomes vascular resistance. Higher pressure = higher potential energy. Units: Pascals (Pa) or mmHg.',
        'Kinetic Energy (KE): Energy due to the motion of blood (depends on velocity). Formula: KE = (1/2) * m * v². Faster-moving blood (e.g., in narrow vessels) has higher kinetic energy. Units: Joules (J).',
        'Gravitational Potential Energy (PE): Energy due to the position of blood in a gravitational field. Formula: PE = m * g * h, where h is the height of the blood column above a reference point. Blood at higher elevations (e.g., in the head) has more potential energy. Units: Joules (J).',
        'Inverse relationship between pressure and velocity: When velocity (v) increases (e.g., in narrowed vessels), pressure energy (P) decreases to maintain total energy. Example: Blood flow through a stenotic valve has high velocity and low pressure.',
        'Effect of gravitational potential energy: Blood at higher elevations (e.g., head) has reduced pressure due to increased gravitational potential energy. Blood at lower elevations (e.g., feet) has higher pressure due to reduced gravitational potential energy.',
        'Total energy conservation: Total energy remains constant, but the proportions of P, KE, and PE change as blood moves through vessels with varying diameters and elevations.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Bernoulli\'s law describes conservation of total energy in flowing blood consisting of three components.'
          },
          {
            type: 'list',
            intro: 'The three energy components are:',
            items: [
              'Pressure energy is potential energy stored due to blood pressure, measured in pascals or millimeters mercury, driving blood flow and overcoming vascular resistance.',
              'Kinetic energy is energy due to blood motion, calculated as one-half times mass times velocity squared, with faster-moving blood in narrow vessels having higher kinetic energy.',
              'Gravitational potential energy is energy due to blood position in gravitational field, calculated as mass times gravity times height.'
            ]
          },
          {
            type: 'paragraph',
            content: 'The Bernoulli equation states P plus one-half rho v squared plus rho g h equals constant, where rho is blood density approximately 1060 kilograms per cubic meter, v is velocity, g is gravity approximately 9.8 meters per second squared, h is height.'
          },
          {
            type: 'paragraph',
            content: 'When velocity increases in narrowed vessels, pressure energy decreases to maintain constant total energy. Clinical applications include stenotic valves producing murmurs and gravitational effects on venous return.'
          }
        ],
        raw: 'Bernoulli\'s law describes conservation of total energy in flowing blood consisting of three components. Pressure energy is potential energy stored due to blood pressure, measured in pascals or millimeters mercury, driving blood flow and overcoming vascular resistance. Kinetic energy is energy due to blood motion, calculated as one-half times mass times velocity squared, with faster-moving blood in narrow vessels having higher kinetic energy. Gravitational potential energy is energy due to blood position in gravitational field, calculated as mass times gravity times height. The Bernoulli equation states P plus one-half rho v squared plus rho g h equals constant, where rho is blood density approximately 1060 kilograms per cubic meter, v is velocity, g is gravity approximately 9.8 meters per second squared, h is height. When velocity increases in narrowed vessels, pressure energy decreases to maintain constant total energy. Clinical applications include stenotic valves producing murmurs and gravitational effects on venous return.'
      }
    },
    {
      id: 'lo-3',
      isCritical: true,
      title: '>>Understand the relationship between pressure gradient, flow, and resistance (Ohm\'s law) and be able to calculate for one variable if the other two are known.<<',
      keyPoints: [
        'Ohm\'s law for circulation: Q = ΔP / R, analogous to electrical Ohm\'s law; relates flow, pressure gradient, and resistance',
        'Flow (Q): Volume of blood moving per unit time; measured in milliliters per minute or liters per minute; equals cardiac output for whole circulation',
        'Pressure gradient (ΔP): Difference in pressure between two points; driving force for blood flow; calculated as arterial pressure minus venous pressure; measured in millimeters mercury',
        'Resistance (R): Opposition to flow; determined by vessel radius (most important, resistance proportional to 1/radius⁴), blood viscosity, and vessel length; measured in millimeters mercury times minutes per liter',
        'Three equation forms: Q = ΔP/R for calculating flow, ΔP = Q × R for calculating pressure gradient, R = ΔP/Q for calculating resistance',
        'Rearrangement allows calculation of any variable if other two are known; essential for hemodynamic problem-solving',
        'Resistance is most affected by radius changes due to fourth power relationship; doubling radius decreases resistance by factor of 16'
      ],
      officialDefinitions: [
        'Ohm\'s law: The relationship between pressure gradient, flow, and resistance is similar to Ohm\'s law in electricity: Q = ΔP / R. Where: Q = Flow (e.g., cardiac output or blood flow), measured in mL/min or L/min. ΔP = Pressure gradient (difference in pressure between two points), measured in mmHg. R = Resistance to flow, measured in mmHg·min/L (also called peripheral resistance units, PRU).',
        'Perfusion pressure (pressure gradient): Between two points in the vascular system, flow develops if there is a difference in pressure in the fluid (blood) filling the tube (vessel). This is called perfusion pressure (pressure gradient), designated as ΔP (=P1-P2). In the circulation, the ΔP pressure gradient is developed by the backward sucking-forward pumping activity of the heart.',
        'Pressure gradient (ΔP): This is the driving force for blood flow. It is created by the pumping of the heart and the difference in vascular pressures. Formula: ΔP = P(arterial) - P(venous).',
        'Flow (Q): This is the volume of blood moving through a vessel per unit time.',
        'Resistance (R): This is the opposition to flow, influenced by: Vessel radius (most important, as resistance ∝ 1/radius⁴), Blood viscosity, Vessel length.',
        'The major law of hemodynamics: Flow=Perfusion pressure/hydraulic resistance. Q=ΔP/R (ΔP=Q•R ; R=ΔP/Q). COsystemic circ.=(Paorta-Pright atrium)/TPR. COpulmonary circ.=(Pa.pulm-Pleft atrium)/Rlung. COsystemic circ. =(≥) COpulmonary circ.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Ohm\'s law describes the relationship between pressure gradient, flow, and resistance in the cardiovascular system using the equation Q equals delta P divided by R, where Q is flow in liters per minute or milliliters per minute, delta P is pressure gradient in millimeters mercury, and R is resistance in millimeters mercury times minutes per liter.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'Pressure gradient is the driving force for blood flow, calculated as arterial minus venous pressure. Resistance is opposition to flow, determined primarily by vessel radius to the fourth power, plus blood viscosity and vessel length.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'This equation rearranges three ways: Q equals delta P divided by R to calculate flow, delta P equals Q times R to calculate pressure gradient, and R equals delta P divided by Q to calculate resistance.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'For example, if cardiac output is 5 liters per minute and total peripheral resistance is 16.5 millimeters mercury times minutes per liter, systemic pressure gradient is 82.5 millimeters mercury.'
          }
        ],
        raw: '>>Ohm\'s law describes the relationship between pressure gradient, flow, and resistance in the cardiovascular system using the equation Q equals delta P divided by R, where Q is flow in liters per minute or milliliters per minute, delta P is pressure gradient in millimeters mercury, and R is resistance in millimeters mercury times minutes per liter. Pressure gradient is the driving force for blood flow, calculated as arterial minus venous pressure. Resistance is opposition to flow, determined primarily by vessel radius to the fourth power, plus blood viscosity and vessel length. This equation rearranges three ways: Q equals delta P divided by R to calculate flow, delta P equals Q times R to calculate pressure gradient, and R equals delta P divided by Q to calculate resistance.<< For example, if cardiac output is 5 liters per minute and total peripheral resistance is 16.5 millimeters mercury times minutes per liter, systemic pressure gradient is 82.5 millimeters mercury.'
      }
    },
    {
      id: 'lo-4',
      isCritical: true,
      title: '>>Describe the systemic and the pulmonary circulation as serially connected systems, and use Ohm\'s law to describe the hemodynamics in both.<<',
      keyPoints: [
        'Serial connection: Systemic and pulmonary circulations arranged in sequence; blood flows right ventricle → pulmonary circulation → left atrium → left ventricle → systemic circulation → right atrium',
        'Flow equality: Cardiac output must be equal in both circuits (5-6 L/min at rest) because output of one circuit becomes input of the other; any imbalance would cause blood accumulation',
        'Systemic circulation: Delivers oxygenated blood to body tissues; operates under high pressure; high resistance due to narrow, long vessels; total peripheral resistance approximately 16.5 mmHg·min/L',
        'Systemic Ohm\'s law: CO_systemic = (P_aorta - P_right atrium) / TPR; pressure gradient approximately 92 mmHg at rest',
        'Pulmonary circulation: Transports deoxygenated blood to lungs for gas exchange; operates under low pressure; low resistance due to short, wide vessels; pulmonary vascular resistance approximately 1.5 mmHg·min/L',
        'Pulmonary Ohm\'s law: CO_pulmonary = (P_pulmonary artery - P_left atrium) / R_lung; pressure gradient approximately 10 mmHg (15-5 mmHg)',
        'Different resistances: With same flow in both circuits, systemic pressure gradient is much higher than pulmonary because systemic resistance is approximately 10 times greater'
      ],
      officialDefinitions: [
        'Serially connected systems: In the cardiovascular system, serially connected means that the systemic circulation and pulmonary circulation are arranged in sequence. Blood flows in a single continuous loop, such that the output of one circulation becomes the input of the other.',
        'Pulmonary Circulation → Systemic Circulation: Deoxygenated blood leaves the right ventricle and flows through the pulmonary circulation. After gas exchange in the lungs, oxygenated blood returns to the left atrium.',
        'Systemic Circulation → Pulmonary Circulation: Oxygenated blood is pumped from the left ventricle into the systemic circulation. After delivering oxygen and nutrients to the tissues, deoxygenated blood returns to the right atrium, completing the loop.',
        'Serial connection and flow consistency: Since the systemic and pulmonary circulations are connected in series, blood flow (Q) is identical in both circuits. For a steady state: Any change in flow in one circuit (e.g., due to heart failure) will affect the other circuit because they are serially connected.',
        'Systemic circulation: Function: Delivers oxygenated blood to body tissues and returns deoxygenated blood to the heart. Pathway: Oxygenated blood exits the left ventricle through the aorta. Blood travels through arteries, capillaries, and veins. Deoxygenated blood returns to the right atrium via the superior and inferior vena cava. Pressure and Resistance: Operates under high pressure to pump blood over long distances. Resistance is high due to narrow and long vessels.',
        'Pulmonary circulation: Function: Transports deoxygenated blood to the lungs for oxygenation and returns oxygenated blood to the heart. Pathway: Deoxygenated blood exits the right ventricle via the pulmonary arteries. Blood travels to the lungs for gas exchange. Oxygenated blood returns to the left atrium via the pulmonary veins. Pressure and Resistance: Operates under low pressure because blood travels a short distance. Resistance is low due to short and wide vessels.',
        'Ohm\'s law and serial circuits: The pressure gradients in the systemic and pulmonary circulations are different because: With the same flow in both circuits, the pressure gradient is directly proportional to resistance. Since R systemic is much higher than R pulmonary, the systemic circulation has a much higher pressure gradient.',
        'Application to circulation: Q = ΔP / R. At a given pressure gradient (perfusion pressure, ΔP; mmHg), the flow will be determined by the hydraulic resistance (R; mmHg*min/liter). Flow (Q; ml/min). COsystemic circ. = (Paorta - Pright atrium) / TPR. COpulmonary circ. = (Pa.pulm - Pleft atrium) / PVR(lung). COsystemic circ. = COpulmonary circ.',
        'Reference values: perfusion pressure (pressure gradient) in the systemic / pulmonary circulation: 92/6 mmHg, total peripheral resistance (at rest): 16.5 mmHg × min/l, pulmonary vascular resistance: 1.5 mmHg × min/l.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Systemic and pulmonary circulations are serially connected systems where blood flows from right ventricle through pulmonary circulation to left atrium, then pumped by left ventricle through systemic circulation back to right atrium. Cardiac output must be equal in both circuits, typically 5 to 6 liters per minute at rest.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'Using Ohm\'s law, systemic circulation is described by cardiac output equals aortic pressure minus right atrial pressure divided by total peripheral resistance. Systemic circulation delivers oxygenated blood to body tissues under high pressure with high resistance of approximately 16.5 millimeters mercury times minutes per liter and pressure gradient of approximately 92 millimeters mercury.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'Pulmonary circulation is described by cardiac output equals pulmonary artery pressure minus left atrial pressure divided by pulmonary vascular resistance. Pulmonary circulation transports deoxygenated blood to lungs under low pressure with low resistance of approximately 1.5 millimeters mercury times minutes per liter and pressure gradient of approximately 10 millimeters mercury.',
            critical: true
          }
        ],
        raw: '>>Systemic and pulmonary circulations are serially connected systems where blood flows from right ventricle through pulmonary circulation to left atrium, then pumped by left ventricle through systemic circulation back to right atrium. Cardiac output must be equal in both circuits, typically 5 to 6 liters per minute at rest. Using Ohm\'s law, systemic circulation is described by cardiac output equals aortic pressure minus right atrial pressure divided by total peripheral resistance. Systemic circulation delivers oxygenated blood to body tissues under high pressure with high resistance of approximately 16.5 millimeters mercury times minutes per liter and pressure gradient of approximately 92 millimeters mercury. Pulmonary circulation is described by cardiac output equals pulmonary artery pressure minus left atrial pressure divided by pulmonary vascular resistance. Pulmonary circulation transports deoxygenated blood to lungs under low pressure with low resistance of approximately 1.5 millimeters mercury times minutes per liter and pressure gradient of approximately 10 millimeters mercury.<<'
      }
    },
    {
      id: 'lo-5',
      isCritical: false,
      title: 'Define resistance and conductance. Understand the effects of adding resistance in series vs in parallel on total resistance and flow.',
      keyPoints: [
        'Resistance (R): Opposition to blood flow through vessel; determined by vessel diameter (most important), length, and blood viscosity; units are mmHg·min/L or peripheral resistance units',
        'Conductance (C): Ease with which blood flows through vessel; reciprocal of resistance (C = 1/R); larger vessel diameter significantly increases conductance; units are L/min·mmHg',
        'Resistances in series: Connected end-to-end; blood flows sequentially; total resistance equals sum of individual resistances (R_total = R₁ + R₂ + R₃); increases total resistance, decreases flow',
        'Series example: Arteries → arterioles → capillaries → venules → veins within an organ; total peripheral resistance equals sum of all segmental resistances',
        'Resistances in parallel: Multiple pathways; blood flow splits; total resistance calculated as 1/R_total = 1/R₁ + 1/R₂ + 1/R₃; decreases total resistance, increases flow',
        'Parallel example: Organ circulations (brain, kidneys, gastrointestinal tract, skeletal muscle) connected in parallel; allows independent blood flow control to each organ',
        'Mixed arrangement: Different vessel types connected in series, but individual vessels within each type connected in parallel; systemic circulation uses both arrangements'
      ],
      officialDefinitions: [
        'Resistance: Resistance is the opposition to blood flow through a vessel. Determined by factors such as vessel diameter, length, and blood viscosity. Described by Poiseuille\'s law: R ∝ 1/r⁴ where r is the vessel radius (most significant factor).',
        'Conductance (C): Conductance is the ease with which blood flows through a vessel, the reciprocal of resistance: C = 1/R. A larger vessel diameter increases conductance significantly. Units: L/min·mmHg.',
        'Resistance in series: When resistances are added in series, they are connected end-to-end, so blood flows sequentially through each resistance. Total resistance (R) is the sum of individual resistances: Rtotal = R1 + R2 + R3 + ... Key Effects: Total resistance increases. Flow (Q) decreases because total resistance is higher for a given pressure gradient: Q = ΔP / Rtotal. Physiological Example: Blood flow through arteries, arterioles, and capillaries in the systemic circulation.',
        'Resistance in parallel: When resistances are added in parallel, blood flow splits into multiple pathways, and the total resistance is reduced. Total resistance (R) is calculated using: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ... Key Effects: Total resistance decreases because the overall system offers more pathways for flow. Flow (Q) increases for the same pressure gradient. Physiological Example: Blood flow through parallel organ systems, such as the brain, kidneys, and gastrointestinal tract.',
        'Different vessel types connected in series and parallel: Different vessel types are connected in series relative to each other, but within each type, vessels are connected in parallel. The resistance of a given vessel type is higher when the individual vessels have higher resistance and when the number of vessels in parallel is smaller.',
        'Organs in parallel: The organs of the systemic circulation are connected in parallel. The main distributing arteries are connected in parallel. This also means that the vascular systems of most organs are connected in parallel with those of other organs. For example, the circulation of the brain, heart, kidneys, etc., is arranged in parallel.',
        'TPR calculation: TPR = Raorta + Rarteries + Rarterioles + Rcapillaries + Rveins.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Resistance is opposition to blood flow through a vessel with units of millimeters mercury times minutes per liter or peripheral resistance units. Conductance is ease of blood flow through a vessel, defined as reciprocal of resistance where conductance equals one divided by resistance, with units of liters per minute per millimeter mercury.'
          },
          {
            type: 'paragraph',
            content: 'When resistances are added in series, they connect end-to-end with blood flowing sequentially, and total resistance equals sum of individual resistances, increasing total resistance and decreasing flow. Physiological example is blood flow through arteries to arterioles to capillaries within an organ.'
          },
          {
            type: 'paragraph',
            content: 'When resistances are added in parallel, blood flow splits into multiple pathways, total resistance calculated as one over total resistance equals sum of one over each resistance, decreasing total resistance and increasing flow. Physiological example is organ circulations such as brain, kidneys, and gastrointestinal tract arranged in parallel.'
          }
        ],
        raw: 'Resistance is opposition to blood flow through a vessel with units of millimeters mercury times minutes per liter or peripheral resistance units. Conductance is ease of blood flow through a vessel, defined as reciprocal of resistance where conductance equals one divided by resistance, with units of liters per minute per millimeter mercury. When resistances are added in series, they connect end-to-end with blood flowing sequentially, and total resistance equals sum of individual resistances, increasing total resistance and decreasing flow. Physiological example is blood flow through arteries to arterioles to capillaries within an organ. When resistances are added in parallel, blood flow splits into multiple pathways, total resistance calculated as one over total resistance equals sum of one over each resistance, decreasing total resistance and increasing flow. Physiological example is organ circulations such as brain, kidneys, and gastrointestinal tract arranged in parallel.'
      }
    },
    {
      id: 'lo-6',
      isCritical: true,
      title: '>>Explain the factors determining hydraulic resistance using the Hagen Poiseuille\'s law.<< Explain the deviations from Hagen Poiseuille\'s law predictions that occur in the circulatory system (blood and blood vessels)',
      keyPoints: [
        'Hagen-Poiseuille\'s law: R = (8ηL)/(πr⁴), where R is resistance, η is viscosity, L is vessel length, r is radius, π is approximately 3.14159',
        'Four factors determining resistance: Viscosity (η) directly proportional; length (L) directly proportional; radius (r) inversely proportional to fourth power (most important); doubling radius decreases resistance 16-fold',
        'Deviation 1 - Non-Newtonian fluid: Blood viscosity changes with shear rate; low shear rates cause red cell aggregation increasing viscosity, high shear rates cause alignment decreasing viscosity',
        'Deviation 2 - Pulsatile flow: Heart creates rhythmic contractions causing pressure and velocity variations during systole and diastole, not steady flow assumed by law',
        'Deviation 3 - Vessel elasticity: Blood vessels are elastic and expand or contract with pressure changes, not rigid tubes; arteries store energy during systole and release during diastole',
        'Deviation 4 - Vessel geometry: Circulatory system has branching vessels of varying diameters causing flow pattern changes and localized turbulence, not straight cylindrical tubes',
        'Deviation 5 - Turbulent flow: Can occur in large vessels at high velocities, especially in aorta during systole, increasing resistance beyond laminar flow predictions'
      ],
      officialDefinitions: [
        'Hagen-Poiseuille\'s law: describes laminar flow of an incompressible, Newtonian fluid through a long, straight, rigid cylindrical tube: R = 8ηL / πr⁴. Where: R = Resistance to flow, η = Viscosity of the fluid, L = Length of the tube, r = Radius of the tube, π = Constant (approximately 3.14159).',
        'Factors determining hydraulic resistance: The flowing fluid\'s own material property: viscosity (η). Tube geometry: directly proportional to tube length (L), inversely proportional to the 4th! power of tube radius (r). Q = ΔP × π/8 × r⁴/L × 1/η.',
        'Effects of changing parameters on flow: Doubling pressure doubles flow. Doubling length halves flow. Doubling radius increases flow 16-fold (2⁴). Doubling viscosity halves flow.',
        'Deviations from Hagen-Poiseuille\'s law in the circulatory system: Hagen-Poiseuille\'s law provides a theoretical framework for fluid flow in rigid, cylindrical tubes with steady, laminar flow. However, the circulatory system has unique characteristics that lead to significant deviations from these assumptions.',
        'Blood is a non-Newtonian fluid: Assumption: Hagen-Poiseuille\'s law assumes the fluid has a constant viscosity (Newtonian fluid). Reality: Blood is a non-Newtonian fluid, meaning its viscosity changes depending on flow conditions (shear rate). At low shear rates (e.g., in capillaries or veins), red blood cells tend to aggregate, increasing blood viscosity. At high shear rates (e.g., in large arteries), red blood cells align with flow, reducing viscosity (shear thinning).',
        'Pulsatile flow: Assumption: The law assumes steady, laminar flow. Reality: Blood flow in the circulatory system is pulsatile, reflecting the rhythmic contractions of the heart. The pulsatile nature creates variations in pressure and flow velocity during systole and diastole. Pulsatility leads to complex pressure-flow relationships not accounted for in Hagen-Poiseuille\'s model.',
        'Vessel elasticity: Assumption: Hagen-Poiseuille\'s law assumes vessels are rigid tubes. Reality: Blood vessels, especially arteries, are elastic and can expand or contract depending on pressure. Elasticity allows arteries to store energy during systole (compliance) and release it during diastole, maintaining blood flow.',
        'Branching and geometry of blood vessels: Assumption: The law assumes straight, cylindrical tubes of uniform diameter. Reality: The circulatory system is highly branched, with vessels of varying diameters. Vessel branching changes flow patterns, leading to localized turbulence and increased resistance, especially at bifurcations.',
        'Turbulence: Assumption: Hagen-Poiseuille\'s law assumes laminar flow. Reality: While laminar flow predominates in smaller vessels, turbulence can occur in larger vessels (e.g., the aorta) at high flow velocities or during systole. Turbulence increases resistance, which is not predicted by the law.',
        'Distribution of resistance: Assumption: Resistance is uniform along the vessel. Reality: In the circulatory system, resistance is unevenly distributed. The highest resistance occurs in the arterioles, which act as the primary site for regulating blood flow.',
        'Summary of criteria: Cylindrical, rigid, tubes, no branches vs. Elastic, branching vessels, veins are not cylindrical. Newtonian fluid vs. non-newtonian fluid, the blood. Constant flow vs. Pulsatile flow (arteries). Laminar flow vs. Sometimes turbulent flow. The equation thus cannot be possibly true for the circulation, however, the law identifies all the important factors.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Hagen-Poiseuille\'s law determines hydraulic resistance using formula R equals 8 eta L divided by pi r to the fourth power, where eta is fluid viscosity, L is vessel length, r is vessel radius, and pi is approximately 3.14159. Four factors determine resistance: viscosity is directly proportional to resistance, length is directly proportional to resistance, radius is inversely proportional to resistance to the fourth power and most important, and doubling radius decreases resistance by factor of 16.',
            critical: true
          },
          {
            type: 'paragraph',
            content: 'However, the circulatory system shows significant deviations.'
          },
          {
            type: 'list',
            intro: 'Five deviations from Hagen-Poiseuille\'s law:',
            items: [
              'Blood is non-Newtonian fluid whose viscosity changes with shear rate, with low shear rates causing red cell aggregation and increased viscosity, while high shear rates cause cell alignment and decreased viscosity.',
              'Blood flow is pulsatile due to rhythmic heart contractions, not steady flow.',
              'Blood vessels are elastic and expand or contract with pressure, not rigid tubes.',
              'Vessel geometry is highly branched with varying diameters causing flow pattern changes and localized turbulence, not straight cylinders.',
              'Turbulent flow can occur in larger vessels at high velocities, increasing resistance beyond laminar flow predictions.'
            ]
          }
        ],
        raw: '>>Hagen-Poiseuille\'s law determines hydraulic resistance using formula R equals 8 eta L divided by pi r to the fourth power, where eta is fluid viscosity, L is vessel length, r is vessel radius, and pi is approximately 3.14159. Four factors determine resistance: viscosity is directly proportional to resistance, length is directly proportional to resistance, radius is inversely proportional to resistance to the fourth power and most important, and doubling radius decreases resistance by factor of 16.<< However, the circulatory system shows significant deviations. First, blood is non-Newtonian fluid whose viscosity changes with shear rate, with low shear rates causing red cell aggregation and increased viscosity, while high shear rates cause cell alignment and decreased viscosity. Second, blood flow is pulsatile due to rhythmic heart contractions, not steady flow. Third, blood vessels are elastic and expand or contract with pressure, not rigid tubes. Fourth, vessel geometry is highly branched with varying diameters causing flow pattern changes and localized turbulence, not straight cylinders. Fifth, turbulent flow can occur in larger vessels at high velocities, increasing resistance beyond laminar flow predictions.'
      }
    },
    {
      id: 'lo-7',
      isCritical: false,
      title: 'Explain the terms laminar and turbulent flow. List the factors that shift laminar flow to turbulent flow. Reynolds number. Describe the relationship between turbulent flow with the audible events, such as murmurs and bruits.',
      keyPoints: [
        'Laminar flow: Smooth, orderly, layered flow where each layer moves parallel without mixing; parabolic velocity profile with highest velocity at center decreasing toward walls; quiet and energy-efficient; occurs in small vessels under normal conditions',
        'Turbulent flow: Chaotic, disordered fluid motion with mixing between layers creating eddies and vortices; increased energy loss; associated with vibrations generating sounds; occurs at stenosis, valve defects, or bifurcations',
        'Six factors shifting to turbulence: (1) Increased flow velocity, (2) Large vessel diameter, (3) Decreased blood viscosity as in anemia, (4) Irregular vessel geometry from plaques or stenosis, (5) High pressure gradients across stenotic valves, (6) Vessel branching and curvature',
        'Reynolds number (Re): Dimensionless parameter predicting flow transition; Re = (d × v × ρ)/η where d is diameter, v is velocity, ρ is density, η is viscosity',
        'Reynolds thresholds: Re < 2000 indicates laminar flow; Re > 3000 indicates turbulent flow; Re between 2000-3000 is transitional with instability beginning',
        'Murmurs: Result from turbulent flow in heart across stenotic or regurgitant valves; systolic murmurs occur during ventricular contraction, diastolic murmurs during relaxation',
        'Bruits: Result from turbulent blood flow in arteries due to narrowing or atherosclerotic plaques; heard over carotid, femoral, or other large vessels; indicate cardiovascular abnormalities'
      ],
      officialDefinitions: [
        'Laminar flow: Smooth, orderly, and layered flow of a fluid, where each layer moves parallel to the next without mixing. Characteristics: Flow velocity is highest at the center of the vessel and decreases toward the vessel wall (parabolic velocity profile). Quiet and energy-efficient. Typically occurs in small-diameter vessels and under low flow rates. Examples in Circulation: Normal flow through arteries and veins under physiologic conditions.',
        'Laminar blood flow characteristics: Fluid sheets (laminae) gliding over each other. In tubes the sheets can be considered as concentric circles, the linear velocity of the flowing molecules decreases from center to periphery. A parabola-shaped velocity gradient profile develops.',
        'Turbulent flow: Chaotic, disordered fluid motion with mixing between layers, creating eddies and vortices. Characteristics: Increased energy loss due to chaotic motion. Associated with vibrations that can generate sounds. Occurs when flow velocity is high, vessel geometry is irregular, or blood viscosity is low. Examples in Circulation: Flow at sites of arterial stenosis, valve defects, or bifurcations.',
        'Turbulent flow definition: Irregular flow with whirlpools always presents as increased viscosity increasing resistance. Turbulent flow is promoted by wide tubing, tube irregularities (branching, curving, partial occlusion), high flow velocity, and low viscosity.',
        'Factors that shift laminar flow to turbulent flow: Increased Flow Velocity: High velocities (e.g., in stenotic arteries) disrupt smooth, laminar flow. Large Vessel Diameter: Wider vessels decrease the influence of viscous forces, making turbulence more likely. Decreased Blood Viscosity: Conditions like anemia reduce blood viscosity, increasing the tendency for turbulence. Irregular Vessel Geometry: Plaques, bifurcations, or abnormal narrowing disrupt flow patterns. High Pressure Gradients: Steep pressure differences (e.g., across stenotic valves) accelerate flow, promoting turbulence. Branching and Curvature: Flow through curved or branching vessels can induce instability.',
        'Reynolds number (Re): A dimensionless parameter used to predict the transition between laminar and turbulent flow. Formula: Re=d ∙v ∙ ρ/η, where d is diameter, v is velocity, ρ specific gravity, and η viscosity (measured in cm, cm/s, g/cm³, and Poise, according to the CGS system). Thresholds: Re < 2000: Laminar flow. Re > 3000: Turbulent flow. Between 2000 and 3000: Transitional flow, where instability begins. If the number is greater than 2000, turbulence is likely to occur.',
        'Circulation application: In the circulation, arterial blood flow is most likely to become turbulent (big diameter+big velocity).',
        'Relationship between turbulent flow and audible events - Sound generation: Turbulent flow produces vibrations in blood vessels and surrounding tissues due to chaotic pressure fluctuations. These vibrations propagate as sounds, which can be detected with a stethoscope.',
        'Murmurs: Occur due to turbulent flow in the heart, often across stenotic or regurgitant valves. Classified as: Systolic murmurs: Occur during ventricular contraction (e.g., aortic stenosis, mitral regurgitation). Diastolic murmurs: Occur during ventricular relaxation (e.g., mitral stenosis, aortic regurgitation).',
        'Bruits: Result from turbulent blood flow in arteries, commonly due to narrowing or atherosclerotic plaques. Heard over carotid arteries, femoral arteries, or other large vessels.',
        'Clinical relevance: The presence of murmurs or bruits is a key diagnostic indicator of cardiovascular abnormalities, such as: Valvular heart disease (e.g., stenosis, regurgitation). Arterial stenosis (e.g., carotid artery stenosis). High-output states (e.g., anemia or hyperthyroidism). The intensity and quality of these sounds provide information about the severity of the underlying condition.',
        'Stenosis and Bernoulli\'s law: Narrowed vessels or valves increase blood velocity, reducing pressure in that region. This explains murmurs or bruits caused by turbulent flow.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Laminar flow is smooth, orderly, layered blood flow where layers move parallel without mixing, creating parabolic velocity profile with highest velocity at center, occurring quietly and energy-efficiently in small vessels. Turbulent flow is chaotic, disordered fluid motion with mixing between layers creating eddies and vortices, causing increased energy loss and audible sounds.'
          },
          {
            type: 'list',
            intro: 'Six factors shift laminar to turbulent flow:',
            items: [
              'Increased flow velocity',
              'Large vessel diameter',
              'Decreased blood viscosity as in anemia',
              'Irregular vessel geometry from plaques or stenosis',
              'High pressure gradients across stenotic valves',
              'Vessel branching and curvature'
            ]
          },
          {
            type: 'paragraph',
            content: 'Reynolds number is dimensionless parameter predicting flow transition, calculated as diameter times velocity times density divided by viscosity, with values less than 2000 indicating laminar flow and greater than 3000 indicating turbulent flow.'
          },
          {
            type: 'paragraph',
            content: 'Turbulent flow produces vibrations creating audible sounds detected with stethoscope. Murmurs result from turbulent flow across stenotic or regurgitant heart valves. Bruits result from turbulent flow in arteries due to narrowing or atherosclerotic plaques.'
          }
        ],
        raw: 'Laminar flow is smooth, orderly, layered blood flow where layers move parallel without mixing, creating parabolic velocity profile with highest velocity at center, occurring quietly and energy-efficiently in small vessels. Turbulent flow is chaotic, disordered fluid motion with mixing between layers creating eddies and vortices, causing increased energy loss and audible sounds. Six factors shift laminar to turbulent flow: increased flow velocity, large vessel diameter, decreased blood viscosity as in anemia, irregular vessel geometry from plaques or stenosis, high pressure gradients across stenotic valves, and vessel branching and curvature. Reynolds number is dimensionless parameter predicting flow transition, calculated as diameter times velocity times density divided by viscosity, with values less than 2000 indicating laminar flow and greater than 3000 indicating turbulent flow. Turbulent flow produces vibrations creating audible sounds detected with stethoscope. Murmurs result from turbulent flow across stenotic or regurgitant heart valves. Bruits result from turbulent flow in arteries due to narrowing or atherosclerotic plaques.'
      }
    }
  ]
};

export default topic33;
