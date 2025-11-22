const topic34 = {
  id: 'topic-34',
  mcqs: ['mcq-3'],
  number: 34,
  title: 'Hemorheology',
  subtitle: 'The science of blood as a fluid, examining its unique non-Newtonian properties, viscosity factors, red blood cell adaptations to flow, and the mechanisms that optimize blood flow through vessels of varying diameters.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: 'Explain and give the units of the followings: shear stress, shear rate, viscosity. Give Newton\'s law of viscosity, and >>define Newtonian<< and non-Newtonian >>fluids.<<',
      keyPoints: [
        'Shear stress (τ): Tangential force making fluid layers glide over each other per unit surface area; units: N/m² or Pa (Pascal)',
        'Shear rate (γ): Velocity gradient across fluid layers, formula γ = dv/dx; units: 1/s or s⁻¹',
        'Viscosity (η): Fluid resistance to flow or deformation under shear stress; formula η = τ/γ; units: Pa·s (SI) or Poise (CGS), conversion: 1 Pa·s = 0.1 P',
        'Newton\'s law of viscosity: In simple fluids, shear stress is directly proportional to shear rate, with viscosity as the proportionality coefficient; τ = η·γ',
        'Newtonian fluids: Viscosity remains constant regardless of shear rate, showing linear relationship between shear stress and shear rate; examples: water, air, simple oils',
        'Non-Newtonian fluids: Viscosity changes with shear rate, showing non-linear relationship between shear stress and shear rate; examples: blood (shear-thinning), ketchup',
        'Temperature effect: Viscosity is inversely proportional to temperature; higher temperature decreases viscosity'
      ],
      officialDefinitions: [
        'Shear stress: the tangential force that makes the layers (unit surface area) glide over each other, signed with τ, unit of measurement N/m² (Pa).',
        'Shear rate: the velocity (v), with which the layers in x distance move related to each other, signed γ=dv/dx, unit of measurement 1/s.',
        'Viscosity: Viscosity\'s sign is η=τ/γ, unit of measurement is Pa·s (SI) or P (poise, in CGS). Conversion factor: 1 Pa·s = 0.1 P. Viscosity is inversely proportional to temperature.',
        'Newton\'s law of viscosity states, that in simple (newtonian) fluids there is a simple proportionality between shear stress and shear rate, the proportionality coefficient is called viscosity.',
        'Newtonian fluids: fluids with a constant viscosity, regardless of the shear rate. Linear relationship between shear stress and shear rate.',
        'Non-Newtonian fluids: fluids with a viscosity that changes depending on the shear rate. Non-linear relationship between shear stress and shear rate. Blood is a non-Newtonian fluid.'
      ],

      examAnswer: 'Shear stress is the tangential force that makes fluid layers glide over each other per unit surface area, denoted τ (tau), with units of Newtons per square meter or Pascals. Shear rate is the velocity gradient across fluid layers, denoted γ (gamma), calculated as dv/dx, with units of per second or inverse seconds. Viscosity is a measure of fluid resistance to flow or deformation under shear stress, denoted η (eta), with units of Pascal-seconds in SI or Poise in CGS system, where 1 Pascal-second equals 0.1 Poise. Newton\'s law of viscosity states that in simple Newtonian fluids there is a simple proportionality between shear stress and shear rate, where the proportionality coefficient is called viscosity, expressed as η equals τ divided by γ. >>Newtonian fluids are fluids whose viscosity remains constant regardless of shear rate, showing a linear relationship between shear stress and shear rate, with examples including water, air, and simple oils. Non-Newtonian fluids are fluids whose viscosity changes with shear rate, showing a non-linear relationship between shear stress and shear rate, with examples including blood which exhibits shear-thinning behavior and ketchup.<<'
    },
    {
      id: 'lo-2',
      isCritical: true,
      title: 'The anomalous viscosity of blood: >>which factors affect blood viscosity?<< (hematocrit, shear thinning and the Fåhræus-Lindqvist effect)',
      keyPoints: [
        'Blood is a non-Newtonian fluid: Viscosity changes as function of shear rate and is modified by tube geometry, exhibiting anomalous viscosity',
        'Hematocrit: Increasing hematocrit increases blood viscosity due to increased number of red blood cells; elevated in polycythemia raises vascular resistance and cardiac workload, decreased in anemia reduces viscosity',
        'Shear thinning: Increasing shear rate reduces blood viscosity; at low shear rates RBCs form aggregates (rouleaux) increasing viscosity, at high shear rates aggregates disperse and cells align reducing viscosity',
        'Fåhræus-Lindqvist effect: Decreasing vessel diameter below 300 micrometers reduces apparent viscosity; RBCs migrate centrally creating cell-free plasma layer near walls',
        'Blood plasma is Newtonian: Its viscosity depends on plasma protein concentration, can increase with dehydration',
        'RBC membrane deformability: Non-elastic fluidity of RBC membrane largely explains blood\'s unique rheological features'
      ],
      officialDefinitions: [
        'The blood plasma is a newtonian fluid, its viscosity depends on the concentration of plasma proteins (dehydration!). The blood, however is a non-Newtonian fluid (η≠τ/γ), thus viscosity changes as a function of shear, and modified by tube geometry as well.',
        'Hematocrit: Increasing hematocrit will increase viscosity. Higher hematocrit increases blood viscosity due to the increased number of red blood cells.',
        'Shear thinning: Increasing shear rate will reduce viscosity. Blood exhibits shear-thinning behaviour, meaning its viscosity decreases as shear rate increases.',
        'Fåhraeus-Lindquist effect: Decreasing vessel size below 300 μm will reduce viscosity.',
        'These unique features of the blood are largely explained by the red blood cell membrane\'s non-elastic deformability (fluidity).'
      ],

      examAnswer: '>>Three main factors affect blood viscosity: hematocrit, shear thinning, and the Fåhræus-Lindqvist effect.<< Blood is a non-Newtonian fluid whose viscosity changes as a function of shear rate and is modified by tube geometry. First, hematocrit: increasing hematocrit increases blood viscosity due to the increased number of red blood cells. Higher hematocrit as in polycythemia raises vascular resistance and cardiac workload, while lower hematocrit as in anemia reduces viscosity and facilitates blood flow. Second, shear thinning: blood exhibits shear-thinning behavior meaning its viscosity decreases as shear rate increases. At low shear rates in venous flow or stagnant areas, red blood cells form aggregates called rouleaux resembling stacks of coins, which increases viscosity. At high shear rates in arterioles or capillaries, these aggregates disperse and cells align with flow direction, reducing viscosity. Third, the Fåhræus-Lindqvist effect: decreasing vessel size below 300 micrometers reduces apparent viscosity. Red blood cells migrate toward the vessel center creating a cell-free plasma layer near the vessel wall that acts as a lubricant, reducing friction and decreasing apparent viscosity. These unique features are largely explained by the red blood cell membrane\'s non-elastic deformability or fluidity.'
    },
    {
      id: 'lo-3',
      isCritical: false,
      title: 'Describe the mechanisms of shear thinning (dispersion of red blood cell aggregates, and red blood cell adaptations).',
      keyPoints: [
        'Shear thinning: Blood property where apparent viscosity decreases with increasing shear rate, ensuring efficient flow through vessels of all sizes',
        'Dispersion at low shear: At low flow velocities RBCs aggregate into rouleaux (money roll structures) mediated by plasma proteins like fibrinogen, increasing internal friction and viscosity',
        'Dispersion at high shear: As shear rate increases, plasma flow forces disrupt rouleaux structures, individual RBCs disperse reducing intercellular friction and lowering viscosity',
        'Axial migration: At higher shear rates RBCs migrate to vessel center due to laminar flow dynamics, leaving cell-free plasma layer near walls acting as lubricant',
        'Deformability: RBCs are highly deformable due to flexible biconcave shape and cytoskeletal structure, at high shear rates they elongate and align with flow direction',
        'Capillary adaptation: In narrow capillaries smaller than RBC diameter, cells squeeze and deform to pass through, in capillaries RBCs flow in single file with perfect fluid droplet adaptation assuming paraboloid velocity profile',
        'Clinical relevance: Shear thinning helps maintain flow at high velocities and reduces energy expenditure'
      ],
      officialDefinitions: [
        'Shear thinning: By increasing shear, blood viscosity is reduced because: 1. DISPERSION: during stasis, red blood cells form aggregates (money roll formation, globulin-dependent) that are dispersed by shear. 2. DEFORMATION (shape change) and ORIENTATION of red blood cells (RBCs) in shear.',
        'Dispersion of red blood cell aggregates: At low shear rates (e.g., in venous flow or stagnant areas): RBCs form aggregates (rouleaux), increasing viscosity. At high shear rates (e.g., in arterioles or capillaries): RBC aggregates disperse, aligning with the flow, reducing viscosity.',
        'Red blood cell adaptations - Axial Migration: At higher shear rates, RBCs migrate to the center of the vessel lumen due to laminar flow dynamics. This leaves a cell-free plasma layer near the vessel walls, which acts as a lubricant, reducing resistance and contributing to the decrease in apparent viscosity.',
        'Red blood cell adaptations - Deformability: RBCs are highly deformable due to their flexible biconcave shape and cytoskeletal structure. At high shear rates, RBCs elongate and align with the direction of flow, reducing their resistance to movement. In very narrow capillaries (smaller than the diameter of an RBC), they squeeze and deform to pass through, minimizing the energy required for flow. In the capillaries, red blood cells flow as a single file, their fluid droplet adaptation will become the most perfect, their shape will assume the paraboloid velocity profile.'
      ],

      examAnswer: 'Shear thinning refers to the property of blood where its apparent viscosity decreases with increasing shear rate, occurring due to unique properties of red blood cells and their ability to adapt to varying flow conditions. The two primary mechanisms are dispersion of red blood cell aggregates and red blood cell adaptations. First, dispersion of RBC aggregates: at low shear rates in low flow velocities, red blood cells tend to aggregate into structures called rouleaux resembling stacks of coins. This aggregation is mediated by plasma proteins like fibrinogen which promote intercellular adhesion, and rouleaux formation increases internal friction within blood significantly raising its viscosity. As shear rate increases in arteries or arterioles, the forces exerted by plasma flow disrupt the rouleaux structures, the individual red blood cells disperse reducing intercellular friction and lowering viscosity. Second, red blood cell adaptations: axial migration occurs where at higher shear rates red blood cells migrate to the center of the vessel lumen due to laminar flow dynamics, leaving a cell-free plasma layer near vessel walls which acts as a lubricant reducing resistance. Deformability adaptation involves red blood cells being highly deformable due to their flexible biconcave shape and cytoskeletal structure. At high shear rates they elongate and align with the direction of flow reducing their resistance to movement. In very narrow capillaries smaller than the diameter of a red blood cell, they squeeze and deform to pass through minimizing energy required for flow. In capillaries red blood cells flow in single file and their fluid droplet adaptation becomes most perfect, their shape assumes the paraboloid velocity profile.'
    },
    {
      id: 'lo-4',
      isCritical: false,
      title: 'Describe the dependence of the structural viscosity (red blood cell aggregation, money roll formation) on the composition (ratio) of plasma albumine and globuline fractions.',
      keyPoints: [
        'Structural viscosity: Viscosity of blood due to interactions and arrangements of red blood cells, particularly aggregation into rouleaux (money roll formations)',
        'Rouleaux formation: RBC aggregation due to adhesive forces between surfaces mediated by plasma proteins, reversible process occurring at low shear rates',
        'Globulins and fibrinogen: Primary promoters of RBC aggregation, they bridge adjacent RBCs creating attractive forces, higher concentrations increase aggregation and structural viscosity',
        'Albumin: Has anti-aggregatory effect by coating RBC surface reducing interaction strength between cells, higher albumin reduces rouleaux formation and structural viscosity',
        'High albumin-to-globulin ratio (A/G): Albumin predominates reducing RBC aggregation, blood has lower structural viscosity facilitating flow',
        'Low A/G ratio: Globulins and fibrinogen dominate promoting RBC aggregation and rouleaux formation, blood viscosity increases particularly at low shear rates',
        'Clinical significance: Basis of RBC sedimentation rate; increased when plasma albumin/globulin ratio is decreased'
      ],
      officialDefinitions: [
        'When shear rate is low, the RBCs form aggregates, these "money rolls" increase blood viscosity. The RBC aggregation depends on the blood plasma proteins, globulins increase it.',
        'This reversible aggregation is the basis of RBC sedimentation rate (increased when plasma albumin/globulin ratio is decreased).',
        'RBC aggregation occurs due to the adhesive forces between RBC surfaces, mediated by plasma proteins like fibrinogen and globulins. This aggregation leads to the formation of rouleaux (money-roll structures), increasing blood viscosity, particularly at low shear rates.',
        'Globulins and fibrinogen are the primary promoters of RBC aggregation. They bridge adjacent RBCs, facilitating rouleaux formation by creating attractive forces between cell surfaces. Higher concentrations of globulins or fibrinogen lead to increased aggregation and higher structural viscosity.',
        'Albumin has an anti-aggregatory effect by coating the RBC surface and reducing the strength of interactions between cells. High albumin levels reduce rouleaux formation and, consequently, structural viscosity. Increased albumin concentration decreases structural viscosity by limiting RBC aggregation.',
        'Albumin-to-globulin ratio (A/G Ratio): High A/G Ratio: Albumin predominates, reducing RBC aggregation. Blood has lower structural viscosity, facilitating flow. Low A/G Ratio: Globulins and fibrinogen dominate, promoting RBC aggregation and rouleaux formation. Blood viscosity increases, particularly at low shear rates.'
      ],

      examAnswer: 'Structural viscosity refers to the viscosity of blood due to the interactions and arrangements of red blood cells, particularly their aggregation into rouleaux or money roll formations. These interactions are heavily influenced by the composition and ratio of plasma proteins, primarily albumin and globulin fractions. Red blood cell aggregation occurs due to adhesive forces between RBC surfaces mediated by plasma proteins. Globulins and fibrinogen are the primary promoters of RBC aggregation. They bridge adjacent red blood cells facilitating rouleaux formation by creating attractive forces between cell surfaces. Higher concentrations of globulins or fibrinogen lead to increased aggregation and higher structural viscosity. In contrast, albumin has an anti-aggregatory effect by coating the red blood cell surface and reducing the strength of interactions between cells. High albumin levels reduce rouleaux formation and consequently structural viscosity. The albumin-to-globulin ratio significantly influences red blood cell aggregation and structural viscosity. When the A/G ratio is high, albumin predominates reducing RBC aggregation and blood has lower structural viscosity facilitating flow. When the A/G ratio is low, globulins and fibrinogen dominate promoting red blood cell aggregation and rouleaux formation, and blood viscosity increases particularly at low shear rates. This reversible aggregation is the basis of red blood cell sedimentation rate which increases when plasma albumin-globulin ratio is decreased. At low shear rates the red blood cells form aggregates, these money rolls increase blood viscosity. The RBC aggregation depends on blood plasma proteins with globulins increasing it.'
    },
    {
      id: 'lo-5',
      isCritical: false,
      title: 'Characterize the flow adaptations of red blood cells. (axial migration, orientation, shape changes)',
      keyPoints: [
        'RBC flow adaptations: Dynamic adaptations to blood flow conditions optimizing circulation efficiency and minimizing resistance in large vessels and microcirculation',
        'Axial migration: Movement of RBCs toward vessel center under laminar flow; lateral forces from shear gradients push RBCs centrally, higher shear stress near wall creates cell-free plasma layer',
        'Axial migration significance: Cell-free plasma layer reduces friction between RBCs and vessel wall lowering blood viscosity, improves flow efficiency in small arterioles and capillaries',
        'Orientation: RBCs align biconcave shape parallel to flow direction under high shear conditions (arteries, arterioles), minimizes flow resistance and turbulence',
        'Orientation significance: Reduces energy expenditure by heart, ensures smooth laminar flow, disrupted orientation increases turbulence and vascular resistance',
        'Shape changes: RBCs deform and change shape to adapt to varying vessel diameters; naturally flexible due to biconcave shape and cytoskeletal structure (lipid bilayer and spectrin)',
        'Shape change significance: In narrow capillaries smaller than RBC diameter cells deform into elongated shapes to pass through, ensures continuous oxygen delivery; reduced deformability in sickle cell disease or spherocytosis impairs microcirculation'
      ],
      officialDefinitions: [
        'Axial Migration: refers to the movement of RBCs toward the center of the blood vessel lumen under laminar flow conditions. RBCs experience lateral forces due to shear gradients across the vessel. Higher shear stress near the vessel wall pushes RBCs toward the center, leaving a cell-free plasma layer near the vessel walls. The cell-free plasma layer reduces friction between RBCs and the vessel wall, lowering overall blood viscosity. Axial migration improves flow efficiency, particularly in small arterioles and capillaries.',
        'Orientation: describes how RBCs align with the direction of blood flow under high shear conditions. In high-shear environments (e.g., arteries and arterioles), RBCs rotate and align their biconcave shape parallel to the flow direction. This alignment minimizes flow resistance and turbulence. Proper orientation reduces energy expenditure by the heart and ensures smooth, laminar flow.',
        'Shape Changes: RBCs deform and change their shape to adapt to the varying diameters of blood vessels. RBCs are naturally flexible due to their biconcave shape and cytoskeletal structure. In narrow capillaries (smaller than an RBC\'s diameter), they deform into elongated shapes to pass through. Shape changes are facilitated by the lipid bilayer and the spectrin cytoskeleton of the RBC membrane. Deformability ensures continuous flow in capillaries and small vessels, maintaining oxygen delivery to tissues.'
      ],

      examAnswer: 'Red blood cells adapt dynamically to blood flow conditions optimizing circulation efficiency and minimizing resistance through three main adaptations: axial migration, orientation, and shape changes. First, axial migration refers to the movement of red blood cells toward the center of the blood vessel lumen under laminar flow conditions. Red blood cells experience lateral forces due to shear gradients across the vessel, with higher shear stress near the vessel wall pushing red blood cells toward the center leaving a cell-free plasma layer near the vessel walls. This cell-free plasma layer reduces friction between red blood cells and the vessel wall lowering overall blood viscosity, and axial migration improves flow efficiency particularly in small arterioles and capillaries. Second, orientation describes how red blood cells align with the direction of blood flow under high shear conditions. In high-shear environments such as arteries and arterioles, red blood cells rotate and align their biconcave shape parallel to the flow direction, which minimizes flow resistance and turbulence. Proper orientation reduces energy expenditure by the heart and ensures smooth laminar flow, while disrupted orientation due to pathological changes in red blood cell shape increases turbulence and vascular resistance. Third, shape changes involve red blood cells deforming and changing their shape to adapt to the varying diameters of blood vessels. Red blood cells are naturally flexible due to their biconcave shape and cytoskeletal structure. In narrow capillaries smaller than a red blood cell\'s diameter, they deform into elongated shapes to pass through, with shape changes facilitated by the lipid bilayer and the spectrin cytoskeleton of the red blood cell membrane. Deformability ensures continuous flow in capillaries and small vessels maintaining oxygen delivery to tissues, while reduced deformability as in sickle cell disease or hereditary spherocytosis impairs microcirculation and increases resistance.'
    },
    {
      id: 'lo-6',
      isCritical: false,
      title: 'How will the apparent blood viscosity change in microvessels? Describe the Fåhræus-Lindqvist-effect and its mechanisms.',
      keyPoints: [
        'Microvessel viscosity change: In microvessels (diameter less than 300 micrometers), apparent blood viscosity decreases as vessel diameter decreases',
        'Fåhræus-Lindqvist effect: Reduction of apparent blood viscosity as blood flows through small-diameter vessels (10-300 micrometers), discovered by Swedish hemato-pathologists Robert Fåhræus and Johan Lindqvist (1931)',
        'Mechanism 1 - Axial migration and plasma skimming: RBCs migrate to vessel center where velocity is higher and shear stress is lower, cell-free plasma layer forms at endothelium where velocity is smaller, effective hematocrit decreases reducing viscosity; more important in bigger microvessels (30-300 micrometers)',
        'Mechanism 2 - Reduced hematocrit: Fåhræus effect causes decreased hematocrit in small vessels compared to large vessels, lower RBC concentration further reduces viscosity',
        'Mechanism 3 - RBC deformability and alignment: RBCs highly flexible deforming to pass through vessels smaller than their diameter (7-8 micrometers), reduces flow resistance; in capillaries RBCs flow in single file with perfect fluid droplet adaptation assuming paraboloid velocity profile',
        'Limits of effect: At vessel diameters around 7-10 micrometers blood viscosity approaches plasma viscosity; in capillaries smaller than ~10 micrometers viscosity may slightly increase due to energy required for RBC deformation and rigid white blood cells',
        'Physiological importance: Minimizes resistance ensuring efficient perfusion and oxygen delivery in microcirculation; impairment in sickle cell anemia leads to increased viscosity and poor function'
      ],
      officialDefinitions: [
        'In microvessels (diameter < 300 μm), the apparent blood viscosity decreases as the vessel diameter decreases.',
        'Blood viscosity starts to reduce when vascular diameter becomes less than 300 μm, at ~7-10 μm diameter it approaches plasma viscosity. This is the Fåhraeus-Lindquist effect.',
        'The Fåhraeus-Lindquist effect: mechanisms: 1. Axial migration and 2. plasma skimming: red blood cells flow along the main axis, where velocity is higher and shear stress is lower, at the endothelium there is a cell free plasma layer where velocity is smaller. As a combined effect, the effective hematocrit decreases, decreasing viscosity. This mechanism is more important in bigger microvessels (30-300 μm). 3. In the capillaries, red blood cells flow as a single file, their fluid droplet adaptation will become the most perfect, their shape will assume the paraboloid velocity profile. Capillary blood viscosity is however, increased by more rigid white blood cells.',
        'Mechanisms of the Fåhraeus-Lindqvist Effect: 1. Axial Migration of Red Blood Cells (RBCs): In small vessels, RBCs migrate to the center of the vessel lumen due to laminar flow. This creates a cell-free plasma layer near the vessel wall, which acts as a lubricant and reduces wall friction. 2. Reduction in Hematocrit: The Fåhræus effect causes a decrease in hematocrit in small vessels compared to large vessels. This lower concentration of RBCs further reduces viscosity in microvessels. 3. RBC Deformability: RBCs are highly flexible and can deform to pass through vessels smaller than their diameter (7-8 μm). This deformation reduces flow resistance and helps maintain low apparent viscosity. 4. Alignment and Streamlining: In small vessels, RBCs align in single-file streams, minimizing cell-to-cell interactions and collisions. This alignment reduces the internal friction within blood, further lowering viscosity.',
        'Limits of the Fåhræus-Lindqvist Effect: In capillaries smaller than ~10 μm, viscosity may slightly increase due to the energy required for RBC deformation. The effect does not occur in very large vessels (e.g., aorta), where viscosity remains constant.'
      ],

      examAnswer: 'In microvessels with diameter less than 300 micrometers, the apparent blood viscosity decreases as the vessel diameter decreases. This phenomenon is explained by the Fåhræus-Lindqvist effect which is the reduction of apparent blood viscosity as blood flows through small-diameter vessels between 10 and 300 micrometers, facilitating efficient blood flow in the microcirculation. This effect was discovered by Swedish hemato-pathologists Robert Sanno Fåhræus and Johan Torsten Lindqvist in 1931. The mechanisms include: First, axial migration of red blood cells and plasma skimming: in small vessels red blood cells migrate to the center of the vessel lumen due to laminar flow where velocity is higher and shear stress is lower. This creates a cell-free plasma layer near the vessel wall at the endothelium where velocity is smaller. The cell-free plasma layer acts as a lubricant reducing wall friction. As a combined effect the effective hematocrit decreases which decreases viscosity. This mechanism is more important in bigger microvessels between 30 and 300 micrometers. Second, reduction in hematocrit: the Fåhræus effect causes a decrease in hematocrit in small vessels compared to large vessels, and this lower concentration of red blood cells further reduces viscosity in microvessels. Third, red blood cell deformability and alignment: red blood cells are highly flexible and can deform to pass through vessels smaller than their diameter of 7 to 8 micrometers, this deformation reduces flow resistance and helps maintain low apparent viscosity. In small vessels red blood cells align in single-file streams minimizing cell-to-cell interactions and collisions, reducing internal friction within blood further lowering viscosity. In capillaries red blood cells flow as a single file and their fluid droplet adaptation becomes most perfect, their shape assumes the paraboloid velocity profile. Blood viscosity starts to reduce when vascular diameter becomes less than 300 micrometers, and at around 7 to 10 micrometer diameter it approaches plasma viscosity. However, the effect has limits: in capillaries smaller than approximately 10 micrometers, viscosity may slightly increase due to the energy required for red blood cell deformation and the presence of more rigid white blood cells. The physiological importance is that the Fåhræus-Lindqvist effect minimizes resistance and ensures efficient perfusion in small vessels, allows blood to deliver oxygen and nutrients effectively in capillaries. Impairment of this effect as in sickle cell anemia leads to increased viscosity, higher resistance, and poor microcirculatory function.'
    }
  ]
};

export default topic34;
// end of topic34