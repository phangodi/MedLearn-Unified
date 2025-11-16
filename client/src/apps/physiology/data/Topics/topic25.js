const topic25 = {
  id: 'topic-25',
  mcqs: ['mcq-2'],
  number: 25,
  title: 'Respiratory mechanics 1: Static mechanics of the lung and the chest',
  subtitle: 'Comprehensive study of lung volumes, compliance, pressure-volume relationships, surface tension, and surfactant function in respiratory mechanics.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: '>>Draw a normal spirogram, indicating the various lung volumes.  Explain how the different lung capacities are determined by the summation of lung volumes.  Explain which lung volumes and capacities CANNOT be determined directly with a spirometer.<<',
      keyPoints: [
        'Tidal Volume (TV): Volume of air inhaled or exhaled during quiet breathing, 500 ml in both males and females',
        'Inspiratory Reserve Volume (IRV): Additional air inhaled after normal inspiration, 3100 ml males, 1900 ml females',
        'Expiratory Reserve Volume (ERV): Extra air exhaled after normal expiration, 1200 ml males, 800 ml females',
        'Residual Volume (RV): Air remaining in lungs after maximal exhalation, 1200 ml males, 1000 ml females',
        'Lung capacities are summations: Inspiratory Capacity (IC) = TV + IRV, Functional Residual Capacity (FRC) = ERV + RV, Vital Capacity (VC) = TV + IRV + ERV, Total Lung Capacity (TLC) = TV + IRV + ERV + RV',
        'Volumes containing RV cannot be measured by spirometry: RV, FRC, and TLC require helium dilution or body plethysmography methods',
        'Spirometer measures only volumes that can be inhaled or exhaled, not air trapped in lungs after maximal expiration'
      ],
      officialDefinitions: [
        'Tidal Volume (TV): the amount of air inhaled or exhaled during quiet breathing, approximately 500 ml in both males and females.',
        'Inspiratory Reserve Volume (IRV): the additional air that can be inhaled after a normal inspiration, about 3100 ml in males and 1900 ml in females.',
        'Expiratory Reserve Volume (ERV): the extra air that can be exhaled after a normal expiration, around 1200 ml in males and 800 ml in females.',
        'Residual Volume (RV): the volume of air remaining in the lungs after a maximal exhalation, approximately 1200 ml in males and 1000 ml in females.',
        'Inspiratory Capacity (IC): the maximum air inhaled after a normal expiration and equals 3600 ml in males and 2400 ml in females.',
        'Functional Residual Capacity (FRC): the volume of air remaining in the lungs after a normal exhalation. It is the sum of Expiratory Reserve Volume (ERV) and Residual Volume (RV).',
        'Vital Capacity (VC): the maximum air exhaled after a full inspiration, around 4800 ml in males and 3200 ml in females.',
        'Total Lung Capacity (TLC): the total volume of the lungs after maximal inspiration, which is about 6000 ml in males and 4200 ml in females. It is the sum of all lung volumes (TLC = Tidal Volume (TV) + Inspiratory Reserve Volume (IRV) + Expiratory Reserve Volume (ERV) + Residual Volume (RV)).',
        'Capacity determination: capacity= volume₁+volume₂+volume₃+...',
        'Spirometry limitations: Spirometry is a powerful tool for assessing many lung volumes and capacities, but it has limitations. Specifically, spirometry cannot measure any lung volumes or capacities that include the residual volume (RV), which is the amount of air left in the lungs after a maximal exhalation. Since the residual volume is air that remains in the lungs and cannot be expelled, it cannot be directly measured by spirometry.',
        'Residual Volume (RV): Why It Can\'t Be Measured by Spirometry: Spirometry measures air that is inhaled or exhaled, so any volume remaining in the lungs cannot be directly assessed.',
        'Functional Residual Capacity (FRC): Why It Can\'t Be Measured by Spirometry: Since FRC includes RV, and RV cannot be measured directly, FRC also cannot be measured directly by spirometry.',
        'Total Lung Capacity (TLC): Why It Can\'t Be Measured by Spirometry: TLC includes RV, which cannot be measured directly with a spirometer, so TLC also cannot be determined directly.',
        'Helium dilution method for measuring RV: RV= V₀ x (Cₐ-Cₑ)/Cₑ. V₀= spirometer volume. Cₐ and Cₑ helium concentration at beginning and after equilibrium.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: '>>A normal spirogram displays four primary lung volumes:<<',
            critical: true,
            items: [
              'Tidal volume is 500 milliliters in both males and females, inhaled or exhaled during quiet breathing.',
              'Inspiratory reserve volume is 3100 milliliters in males and 1900 milliliters in females, inhaled after normal inspiration.',
              'Expiratory reserve volume is 1200 milliliters in males and 800 milliliters in females, exhaled after normal expiration.',
              'Residual volume is 1200 milliliters in males and 1000 milliliters in females, remaining after maximal exhalation.'
            ]
          },
          {
            type: 'list',
            intro: '>>Lung capacities are determined by summation of volumes:<<',
            critical: true,
            items: [
              'Inspiratory capacity equals tidal volume plus inspiratory reserve volume: 3600 milliliters in males, 2400 milliliters in females.',
              'Functional residual capacity equals expiratory reserve volume plus residual volume: 2400 milliliters in males, 1800 milliliters in females.',
              'Vital capacity equals tidal volume plus inspiratory reserve volume plus expiratory reserve volume: 4800 milliliters in males, 3200 milliliters in females.',
              'Total lung capacity equals all four volumes: 6000 milliliters in males, 4200 milliliters in females.'
            ]
          },
          { type: 'paragraph', content: '>>Spirometry cannot directly measure any volume or capacity containing residual volume, because residual volume cannot be expelled. Therefore, residual volume, functional residual capacity, and total lung capacity require alternative methods such as helium dilution or body plethysmography.<<', critical: true }
        ],
        raw: '>>A normal spirogram displays four primary lung volumes. Tidal volume is 500 milliliters in both males and females, inhaled or exhaled during quiet breathing. Inspiratory reserve volume is 3100 milliliters in males and 1900 milliliters in females, inhaled after normal inspiration. Expiratory reserve volume is 1200 milliliters in males and 800 milliliters in females, exhaled after normal expiration. Residual volume is 1200 milliliters in males and 1000 milliliters in females, remaining after maximal exhalation. Lung capacities are determined by summation of volumes. Inspiratory capacity equals tidal volume plus inspiratory reserve volume: 3600 milliliters in males, 2400 milliliters in females. Functional residual capacity equals expiratory reserve volume plus residual volume: 2400 milliliters in males, 1800 milliliters in females. Vital capacity equals tidal volume plus inspiratory reserve volume plus expiratory reserve volume: 4800 milliliters in males, 3200 milliliters in females. Total lung capacity equals all four volumes: 6000 milliliters in males, 4200 milliliters in females. Spirometry cannot directly measure any volume or capacity containing residual volume, because residual volume cannot be expelled. Therefore, residual volume, functional residual capacity, and total lung capacity require alternative methods such as helium dilution or body plethysmography.<<'
      },
      audioUrl: '/Audio/Topic-025/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: false,
      title: 'Draw the static transpulmonary pressure - lung volume curve both during inflation from the residual volume to total lung capacity, and during deflation.',
      keyPoints: [
        'Transpulmonary pressure: Difference between alveolar pressure and pleural pressure, measures elastic recoil forces',
        'Inflation curve: Starts at residual volume with high pressure needed initially, then requires progressively more pressure as lung expands toward total lung capacity',
        'Deflation curve: Follows different path than inflation, requires less pressure at same volume due to surfactant effects',
        'Hysteresis: Deflation curve lies to left of inflation curve, demonstrating lung tissue viscoelasticity and surfactant function',
        'Curve shape reflects: Elastic properties of lung tissue from elastin and collagen fibers, plus surface tension effects at air-liquid interface',
        'At any given volume during deflation, transpulmonary pressure is lower than during inflation',
        'Hysteresis width indicates surfactant effectiveness in reducing surface tension during deflation'
      ],
      officialDefinitions: [
        'Transpulmonary pressure: the difference between the alveolar pressure and the pleural pressure. It is the pressure difference between that in the alveoli and on the outer surfaces of the lungs. It is a measure of the elastic forces in the lungs that tend to collapse the lungs at each instant of respiration; called recoil pressure.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The static transpulmonary pressure-lung volume curve displays hysteresis. Transpulmonary pressure is the difference between alveolar and pleural pressure, measuring elastic recoil forces.' },
          { type: 'paragraph', content: 'During inflation from residual volume to total lung capacity, initially high transpulmonary pressure overcomes surface tension to expand collapsed alveoli. As lung volume increases, progressively more pressure stretches elastic tissue toward total lung capacity.' },
          { type: 'paragraph', content: 'The deflation curve lies left of the inflation curve. At any given lung volume during deflation, required transpulmonary pressure is lower than during inflation. This occurs due to viscoelastic properties of lung tissue allowing easier deflation after stretch, and surfactant becoming more concentrated in smaller alveoli during deflation, more effectively reducing surface tension.' }
        ],
        raw: 'The static transpulmonary pressure-lung volume curve displays hysteresis. Transpulmonary pressure is the difference between alveolar and pleural pressure, measuring elastic recoil forces. During inflation from residual volume to total lung capacity, initially high transpulmonary pressure overcomes surface tension to expand collapsed alveoli. As lung volume increases, progressively more pressure stretches elastic tissue toward total lung capacity. The deflation curve lies left of the inflation curve. At any given lung volume during deflation, required transpulmonary pressure is lower than during inflation. This occurs due to viscoelastic properties of lung tissue allowing easier deflation after stretch, and surfactant becoming more concentrated in smaller alveoli during deflation, more effectively reducing surface tension.'
      },
      audioUrl: '/Audio/Topic-025/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: true,
      title: '>>Define lung compliance,<< and give two examples of lung pathologies where lung compliance is smaller or higher than the normal value, respectively',
      keyPoints: [
        'Lung compliance: Change in lung volume per unit change in transpulmonary pressure, expressed as C = ΔV / ΔP',
        'Normal value: 0.2 liters per centimeter water transpulmonary pressure for both lungs together',
        'High compliance means lungs expand easily, low compliance indicates stiff lungs resisting expansion',
        'Decreased compliance example - Pulmonary fibrosis: Scar tissue buildup makes lungs stiff, requires higher pressure for same volume expansion',
        'Decreased compliance example - ARDS: Inflammation and reduced surfactant increase surface tension and lung stiffness',
        'Increased compliance example - Emphysema: Destruction of alveolar walls and elastic fibers, lungs inflate easily but cannot recoil effectively',
        'Compliance determined by: Elastic forces of lung tissue from elastin and collagen fibers, plus surface tension forces at air-liquid interface'
      ],
      officialDefinitions: [
        'Lung compliance: the extent to which the lungs will expand for each unit increase in transpulmonary pressure and is mathematically expressed as the change in lung volume per unit change in transpulmonary pressure (C = ΔV / ΔP). High compliance means the lungs expand easily, while low compliance indicates stiff lungs that resist expansion.',
        'Normal compliance value: The total compliance of both lungs together in the normal adult human being averages about 200 milliliters of air per centimeter of water transpulmonary pressure. That is, every time the transpulmonary pressure increased 1 centimeter of water, the lung volume will expand by 200 milliliters.',
        'Lung compliance determinants: The lung compliance is determined by elastic forces of the lung tissue - determined mainly by elastin fibers and collagen fibers, and elastic forces caused by surface tension of the fluid that lines the inside wall.',
        'Decreased Lung Compliance (lungs become stiffer and harder to expand): Pulmonary Fibrosis: A chronic disease where scar tissue builds up in the lung interstitium. The fibrotic tissue reduces the elasticity of the lungs, making them stiff and limiting their ability to expand. As a result, more effort and higher pressures are needed to inhale the same volume of air.',
        'Decreased Lung Compliance: Acute Respiratory Distress Syndrome (ARDS): In ARDS, inflammation and fluid leak into the alveoli, reducing surfactant effectiveness and increasing surface tension. This makes the lungs stiffer, requiring more work to breathe.',
        'Increased Lung Compliance (lungs expand easily but do not recoil well): Emphysema (a form of COPD): Characterized by destruction of alveolar walls and loss of elastic fibers. The lungs become too compliant, inflating easily but failing to recoil effectively during expiration, leading to air trapping and hyperinflation.',
        'Increased Lung Compliance: Normal aging: With age, the lung tissue gradually loses its elastic recoil. This increases compliance, but it impairs effective ventilation and contributes to reduced expiratory flow.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Lung compliance is the extent to which lungs expand for each unit increase in transpulmonary pressure: C equals delta V divided by delta P.<<', critical: true },
          { type: 'paragraph', content: 'Normal value for both lungs is 0.2 liters per centimeter of water. High compliance means lungs expand easily; low compliance indicates stiff lungs resisting expansion. Compliance is determined by elastic forces from elastin and collagen fibers, plus surface tension at the air-liquid interface.' },
          {
            type: 'list',
            intro: 'Decreased compliance examples:',
            items: [
              'Pulmonary fibrosis, where scar tissue makes lungs stiff requiring higher pressures for expansion',
              'Acute respiratory distress syndrome, where inflammation and reduced surfactant increase surface tension and stiffness'
            ]
          },
          {
            type: 'list',
            intro: 'Increased compliance examples:',
            items: [
              'Emphysema, where destruction of alveolar walls and elastic fibers causes lungs to inflate easily but fail to recoil effectively',
              'Normal aging, where lung tissue gradually loses elastic recoil'
            ]
          }
        ],
        raw: '>>Lung compliance is the extent to which lungs expand for each unit increase in transpulmonary pressure: C equals delta V divided by delta P.<< Normal value for both lungs is 0.2 liters per centimeter of water. High compliance means lungs expand easily; low compliance indicates stiff lungs resisting expansion. Compliance is determined by elastic forces from elastin and collagen fibers, plus surface tension at the air-liquid interface. Decreased compliance examples: pulmonary fibrosis, where scar tissue makes lungs stiff requiring higher pressures for expansion; and acute respiratory distress syndrome, where inflammation and reduced surfactant increase surface tension and stiffness. Increased compliance examples: emphysema, where destruction of alveolar walls and elastic fibers causes lungs to inflate easily but fail to recoil effectively; and normal aging, where lung tissue gradually loses elastic recoil.'
      },
      audioUrl: '/Audio/Topic-025/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: false,
      title: 'Draw the transmural pressure - volume (compliance diagram) of the lung, the chest wall, and the combined respiratory system (lung+chest) plotted in the same graph. Show and explain the significance of the equilibrium points of the diagram.',
      keyPoints: [
        'Lung curve: Starts at zero volume (complete exhalation), always shows positive transmural pressure for inflation due to inward elastic recoil',
        'Chest wall curve: Starts at negative pressure at low volumes showing outward recoil tendency, becomes positive at high volumes',
        'Combined system curve: Represents sum of lung and chest wall properties, crosses zero at functional residual capacity',
        'FRC equilibrium point: Where combined curve crosses zero transmural pressure, inward lung recoil balances outward chest wall recoil',
        'TLC determination: Point where inspiratory muscle strength can no longer overcome combined elastic recoil of respiratory system',
        'RV determination: Point where expiratory muscle strength balances outward chest wall recoil and airway closure',
        'Compliance of combined system: 0.1 liters per centimeter water, lower than lung alone due to chest wall adding resistance'
      ],
      officialDefinitions: [
        'Lung Curve (Inward Elastic Recoil): Starts at 0 volume and increases with positive transmural pressure. Shows that lungs require positive pressure to inflate. The lung always tends to collapse inward at rest due to its elastic properties. Starts at zero because it represents complete exhalation. The lung tends to collapse inward due to its elastic properties.',
        'Chest Wall Curve (Outward Elastic Recoil): At very low volumes, the chest wall is compressed and exerts outward recoil - so transmural pressure is negative. As volume increases, the chest wall recoil decreases. At higher volumes, the chest wall becomes stiff and wants to recoil inward, so transmural pressure turns positive. Starts at a negative pressure because, at rest, it tends to expand outward. This reflects the chest\'s natural outward recoil due to its structure.',
        'Combined Lung + Chest Wall Curve (Total Respiratory System): Represents the sum of the lung and chest wall properties. The curve crosses zero transmural pressure (no net force) at a specific volume - this is the Functional Residual Capacity (FRC). Shows how the lung and chest wall interact during breathing. It starts at the equilibrium point (FRC), where the inward force of the lungs matches the outward force of the chest wall. This balance allows for efficient breathing.',
        'Why Different Starting Points: Negative for Chest Wall: Indicates the sub-atmospheric pleural pressure needed to keep the lungs expanded at rest. Zero for Lungs: Reflects complete exhalation (residual volume).',
        'Why Chest Expands, Lungs Collapse: Chest Wall: Naturally expands due to elastic recoil. Lungs: Naturally collapse due to their own elasticity and surface tension.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The transmural pressure-volume diagram displays three curves.' },
          { type: 'paragraph', content: 'The lung curve starts at zero volume and always requires positive transmural pressure to inflate because lungs tend to collapse inward due to elastic properties and surface tension.' },
          { type: 'paragraph', content: 'The chest wall curve starts at negative pressure at low volumes showing outward recoil tendency. As volume increases, chest wall recoil decreases, and at higher volumes the chest wall becomes stiff and recoils inward, making pressure positive.' },
          { type: 'paragraph', content: 'The combined respiratory system curve represents the sum of lung and chest wall properties. The critical equilibrium point where the combined curve crosses zero transmural pressure is functional residual capacity, where inward lung recoil balances outward chest wall recoil. Combined system compliance is 0.1 liters per centimeter water.' }
        ],
        raw: 'The transmural pressure-volume diagram displays three curves. The lung curve starts at zero volume and always requires positive transmural pressure to inflate because lungs tend to collapse inward due to elastic properties and surface tension. The chest wall curve starts at negative pressure at low volumes showing outward recoil tendency. As volume increases, chest wall recoil decreases, and at higher volumes the chest wall becomes stiff and recoils inward, making pressure positive. The combined respiratory system curve represents the sum of lung and chest wall properties. The critical equilibrium point where the combined curve crosses zero transmural pressure is functional residual capacity, where inward lung recoil balances outward chest wall recoil. Combined system compliance is 0.1 liters per centimeter water.'
      },
      audioUrl: '/Audio/Topic-025/LO-04.mp3'
    },
    {
      id: 'lo-5',
      isCritical: false,
      title: 'Enlist the factors determining total lung capacity, functional residual capacity and residual volume.',
      keyPoints: [
        'TLC factors: Lung compliance (stretchability), chest wall compliance, strength of inspiratory muscles (diaphragm and intercostals), age and physical condition, posture',
        'TLC increased by: High lung compliance (emphysema), strong respiratory muscles, upright posture',
        'TLC decreased by: Low lung compliance (fibrosis), rigid chest wall (scoliosis), weak muscles (muscular dystrophy)',
        'FRC factors: Balance between lung inward recoil and chest wall outward recoil, body position, respiratory muscle tone, airway resistance',
        'FRC decreased by: Supine position (abdominal contents push diaphragm up), increased lung elastic recoil',
        'RV factors: Airway closure point, lung elastic recoil strength, age, diaphragmatic and expiratory muscle strength',
        'RV increased by: Early airway closure (emphysema, aging), reduced elastic recoil, weak expiratory muscles'
      ],
      officialDefinitions: [
        'Total Lung Capacity (TLC): TLC is the maximum amount of air that the lungs can hold after a full inhalation. It is the sum of all lung volumes (TLC = Tidal Volume (TV) + Inspiratory Reserve Volume (IRV) + Expiratory Reserve Volume (ERV) + Residual Volume (RV)). Determinants: Lung Compliance: This refers to the stretchability of the lung tissues. High compliance means the lungs can expand easily, allowing for a larger TLC. Conditions like emphysema increase compliance, whereas fibrosis decreases it. Chest Wall Compliance: The chest wall\'s flexibility contributes to the ability to expand the thoracic cavity. If the chest wall is rigid (e.g., due to scoliosis or severe kyphosis), TLC is reduced. Strength of Respiratory Muscles: The inspiratory muscles, particularly the diaphragm and intercostal muscles, play a major role in lung expansion. Weaker muscles (due to diseases like muscular dystrophy) reduce TLC. Age and Physical Condition: As we age, lung compliance changes, and muscle strength typically declines, leading to a decrease in TLC. Posture: TLC is generally higher when in an upright position compared to lying down, as gravity aids lung expansion.',
        'Functional Residual Capacity (FRC): FRC is the volume of air remaining in the lungs after a normal exhalation. It is the sum of Expiratory Reserve Volume (ERV) and Residual Volume (RV). Determinants: Lung and Chest Wall Compliance: FRC represents the balance between the inward recoil of the lungs and the outward recoil of the chest wall. Any changes in compliance of either the lung or chest wall will alter FRC. Position of the Body: FRC decreases when lying down as abdominal contents push up against the diaphragm, reducing the chest cavity space. Diaphragm and Respiratory Muscle Tone: The resting tone of the diaphragm and other respiratory muscles can affect FRC by influencing lung expansion at rest. Airway Resistance: Higher resistance can trap air and increase FRC, as seen in chronic obstructive pulmonary disease (COPD).',
        'Residual Volume (RV): RV is the volume of air remaining in the lungs after a maximal exhalation. It ensures that the alveoli remain open and do not collapse completely. Determinants: Airway Closure: RV depends on the point at which small airways close and trap air. In healthy lungs, this occurs at low lung volumes, but it can happen earlier in diseases like emphysema or with aging. Lung Elastic Recoil: Stronger lung recoil expels more air during exhalation, decreasing RV. In contrast, reduced elastic recoil, as in conditions like emphysema, increases RV. Age: With age, there is increased airway closure and reduced lung elastic recoil, leading to an increase in RV. Diaphragmatic Strength: The ability of the diaphragm and expiratory muscles to force air out influences RV. Weak muscles can lead to a higher RV as the lungs cannot be fully emptied.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Total lung capacity is determined by lung compliance, chest wall compliance, respiratory muscle strength especially diaphragm and intercostals, age and physical condition, and posture. High compliance as in emphysema or strong muscles increase TLC; low compliance as in fibrosis, rigid chest wall from scoliosis, or weak muscles from muscular dystrophy decrease TLC.' },
          { type: 'paragraph', content: 'Functional residual capacity is determined by balance between inward lung recoil and outward chest wall recoil, body position as FRC decreases when supine due to abdominal contents pushing diaphragm upward, respiratory muscle tone, and airway resistance which can trap air.' },
          { type: 'paragraph', content: 'Residual volume is determined by airway closure point occurring earlier in emphysema or with aging, lung elastic recoil strength, age, and diaphragmatic and expiratory muscle strength as weak muscles increase RV.' }
        ],
        raw: 'Total lung capacity is determined by lung compliance, chest wall compliance, respiratory muscle strength especially diaphragm and intercostals, age and physical condition, and posture. High compliance as in emphysema or strong muscles increase TLC; low compliance as in fibrosis, rigid chest wall from scoliosis, or weak muscles from muscular dystrophy decrease TLC. Functional residual capacity is determined by balance between inward lung recoil and outward chest wall recoil, body position as FRC decreases when supine due to abdominal contents pushing diaphragm upward, respiratory muscle tone, and airway resistance which can trap air. Residual volume is determined by airway closure point occurring earlier in emphysema or with aging, lung elastic recoil strength, age, and diaphragmatic and expiratory muscle strength as weak muscles increase RV.'
      },
      audioUrl: '/Audio/Topic-025/LO-05.mp3'
    },
    {
      id: 'lo-6',
      isCritical: false,
      title: 'Describe the forces responsible for the development of negative pleural pressure (elastic recoil of the lung, and expansion tendency of the chest wall). Describe the consequence of pneumothorax (air getting into the pleural space).',
      keyPoints: [
        'Elastic recoil of lungs: Inward collapsing force due to elastin fibers and surface tension, creates negative pressure by pulling away from chest wall',
        'Chest wall expansion tendency: Outward force from bony and muscular structure trying to expand in resting state',
        'Negative pleural pressure: Created by opposing forces, typically -5 centimeters water at end expiration, -8 centimeters water at end inspiration',
        'Pneumothorax definition: Air enters pleural space, disrupting negative pressure that normally keeps lungs inflated',
        'Pneumothorax consequences: Loss of negative pressure, affected lung collapses due to unopposed elastic recoil, chest wall may expand outward',
        'Clinical effects: Impaired gas exchange, hypoxemia, sudden chest pain, difficulty breathing, rapid heart rate, cyanosis',
        'Tension pneumothorax: Severe form where air enters but cannot escape, increasing pressure compresses mediastinum and opposite lung'
      ],
      officialDefinitions: [
        'Forces responsible for negative pleural pressure: The negative pleural pressure in the pleural cavity is essential for normal lung function and is created by the interplay of two main opposing forces: Elastic Recoil of the Lungs: Inward Force: The lungs have a natural tendency to collapse due to their elastic recoil properties. This is because the lung tissue contains elastin fibers that want to contract after being stretched during inhalation. Consequence: This inward pull of the lungs creates a negative pressure within the pleural space as the lungs try to pull away from the chest wall. Expansion Tendency of the Chest Wall: Outward Force: The chest wall has an inherent tendency to expand due to its bony and muscular structure. The ribs and the associated musculature are structured in such a way that, in their resting state, they tend to push outward. Consequence: This outward force also contributes to the creation of negative pressure in the pleural space by pulling the pleural membranes apart.',
        'Result of opposing forces: These two opposing forces (the inward pull of the lung\'s elastic recoil and the outward expansion force of the chest wall) create a subatmospheric or negative pressure within the pleural space. This negative pressure is what keeps the lungs inflated against the chest wall, allowing normal breathing to occur.',
        'Pneumothorax: a condition in which air enters the pleural space, disrupting the negative pressure that normally exists. Loss of Negative Pleural Pressure: When air enters the pleural space, the negative pressure is lost, and the pressure within the pleural cavity becomes equal to or greater than the atmospheric pressure. This disrupts the delicate balance between the lung\'s elastic recoil and the chest wall\'s outward force. Lung Collapse: Due to the loss of negative pressure, the lung on the affected side collapses as a result of the unopposed elastic recoil of the lung tissue. The collapse can be partial or complete, depending on the amount of air that enters the pleural space. Chest Wall Expansion: Without the counteracting negative pressure from the pleural cavity, the chest wall on the affected side may expand outward slightly because it is no longer being pulled inward by the lung. Impaired Gas Exchange: With the collapse of the lung, the ability of the affected lung to participate in gas exchange is reduced or eliminated, leading to hypoxemia (low blood oxygen levels). Clinical Consequences: Patients may experience sudden sharp chest pain, difficulty breathing, rapid heart rate, and cyanosis (bluish tint to the skin due to lack of oxygen).'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Negative pleural pressure is created by two opposing forces. Lung elastic recoil provides inward collapsing force from elastin fibers and surface tension, creating negative pressure as lungs pull away from the chest wall. Chest wall expansion tendency provides outward force from bony and muscular structure, contributing to negative pressure by pulling pleural membranes apart. This creates subatmospheric pressure within the pleural space: typically negative five centimeters of water at end expiration and negative eight centimeters of water at end inspiration.' },
          { type: 'paragraph', content: 'Pneumothorax occurs when air enters the pleural space, disrupting negative pressure. Pressure becomes equal to or greater than atmospheric. The affected lung collapses from unopposed elastic recoil, and the chest wall may expand outward. Gas exchange is reduced, causing hypoxemia with chest pain, difficulty breathing, rapid heart rate, and cyanosis.' }
        ],
        raw: 'Negative pleural pressure is created by two opposing forces. Lung elastic recoil provides inward collapsing force from elastin fibers and surface tension, creating negative pressure as lungs pull away from the chest wall. Chest wall expansion tendency provides outward force from bony and muscular structure, contributing to negative pressure by pulling pleural membranes apart. This creates subatmospheric pressure within the pleural space: typically negative five centimeters of water at end expiration and negative eight centimeters of water at end inspiration. Pneumothorax occurs when air enters the pleural space, disrupting negative pressure. Pressure becomes equal to or greater than atmospheric. The affected lung collapses from unopposed elastic recoil, and the chest wall may expand outward. Gas exchange is reduced, causing hypoxemia with chest pain, difficulty breathing, rapid heart rate, and cyanosis.'
      },
      audioUrl: '/Audio/Topic-025/LO-06.mp3'
    },
    {
      id: 'lo-7',
      isCritical: true,
      title: '>>Define surface tension, and describe its effect on pulmonary mechanics,<< including the effect on alveolar size and the role of surfactant. Define the term atelectasis, and the role of surfactant in its prevention. What does the term mean: alveolar interdependence?',
      keyPoints: [
        'Surface tension: Cohesive intermolecular force between water molecules at air-liquid interface, creates inward net force',
        'Effect on mechanics: Increases pressure required for lung inflation, creates collapsing pressure according to Laplace law P = 2T/R',
        'Alveolar size effect: Smaller alveoli have higher collapsing pressure, would empty into larger alveoli without surfactant',
        'Surfactant role: Reduces surface tension especially in small alveoli, prevents unequal ventilation and alveolar collapse',
        'Atelectasis: Partial or complete collapse of lung or lung section when alveoli become deflated or fluid-filled',
        'Surfactant prevents atelectasis: By lowering surface tension, keeps alveoli open during expiration, maintains lung stability',
        'Alveolar interdependence: Structural support adjacent alveoli provide each other through elastic fiber network, helps prevent isolated collapse'
      ],
      officialDefinitions: [
        'Surface tension: a cohesive intermolecular force interaction between water molecules on the surface. Instead of interacting with air, they interact with themselves with hydrogen bond. Because of this, they have force with inward net vector.',
        'Surface tension in alveoli: There are two layers that we have: Air layer (N₂, O₂, CO₂, etc.) and Water layer. Water on the surface doesn\'t want to interact with gas above them. Therefore, net vector is inward → water dive down to the closest alveolar cells. This creates tension in alveoli.',
        'Effects caused by surface tension: Collapsing of the alveoli. Creates unequal ventilation (air flow) to alveoli. Pull water into the alveoli that collapse → pulmonary edema → respiratory membrane getting thicker → reduced gas exchange.',
        'Laplace\'s law of sphere: P = 2T/R. Collapsing pressure of alveoli: Pressure that causes the actual collapsing of the alveoli. Pushing the air from alveoli to outside. Surface tension: Caused by water-air interaction. Can be altered by the presence of surfactant. Alveolar radius.',
        'Changes in surface tension: If ↑ surface tension (T) due to air-water interaction→ ↑ collapsing pressure of alveoli (P). Because water molecules dive to the bottom layer due to no interaction with gas molecules above them→ water layer becomes thinner. This creates surface tension. If ↓ surface tension → ↓ collapsing pressure of alveoli.',
        'Changes in radius: If ↑ radius (R) → ↓ collapsing pressure of alveoli. If ↓ radius → ↑ collapsing pressure of alveoli. Causes air from this alveolus to flow outside.',
        'Surfactant role: ↓ Surface tension by ↓ cohesiveness of water molecules. By pulling the water molecules upward. Allows alveoli to expand → ↓ collapsing pressure of alveoli.',
        'Surfactant decreases surface tension better in small alveoli → pressure differences tend to equalize.',
        'Alveolar interdependence: refers to the structural support that adjacent alveoli provide to each other. Each alveolus is connected to surrounding alveoli by a network of elastic fibers. If one alveolus starts to collapse, the surrounding alveoli exert a "pulling" force on it, helping to reopen it. This mutual support system helps prevent isolated alveoli from collapsing (atelectasis) and maintains stability across the lung tissue, facilitating uniform lung expansion during breathing. This interdependence, along with surfactant, is crucial for the functional integrity of the lung.',
        'Alveolar pores (pores of Kohn): In between of two alveoli, there are pores that connect each other. Some excessive air from hyperventilated alveolus flows to hypoventilated alveolus → no collapsing of the alveoli.',
        'Atelectasis: refers to the partial or complete collapse of the lung or a section (lobe) of the lung. This collapse can occur when the alveoli become deflated or filled with fluid, preventing adequate gas exchange. Atelectasis can result from various conditions, such as airway obstruction, injury, or lack of lung surfactant.',
        'Role of Surfactant in Preventing Atelectasis: Surfactant, a lipoprotein complex produced by alveolar type II cells, reduces surface tension in the alveoli. By lowering surface tension, surfactant helps keep the alveoli open and prevents their collapse during expiration. This is essential for maintaining lung stability and preventing atelectasis. Without adequate surfactant, particularly in premature infants (as seen in neonatal respiratory distress syndrome), the alveoli are prone to collapse, leading to difficulty in breathing and reduced oxygen exchange.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Surface tension is a cohesive intermolecular force between water molecules at the air-liquid interface, creating an inward net force. Surface tension affects pulmonary mechanics by increasing pressure required for lung inflation and creating collapsing pressure on alveoli according to Laplace law: pressure equals two times surface tension divided by radius.<<', critical: true },
          { type: 'paragraph', content: '>>Smaller alveoli have higher collapsing pressure and would empty into larger alveoli without surfactant. Surfactant reduces surface tension, especially in smaller alveoli where it becomes more concentrated, preventing unequal ventilation and stabilizing alveoli of different sizes. Surfactant also reduces work of breathing by decreasing pressure needed for inflation.<<', critical: true },
          { type: 'paragraph', content: 'Atelectasis is partial or complete collapse of the lung or lung section when alveoli become deflated or filled with fluid, preventing adequate gas exchange. It can result from airway obstruction, injury, or lack of surfactant. Surfactant prevents atelectasis by reducing surface tension in alveoli, keeping them open during expiration and maintaining lung stability. Without adequate surfactant, particularly in premature infants, alveoli collapse causing breathing difficulty and reduced oxygen exchange.' },
          { type: 'paragraph', content: 'Alveolar interdependence refers to structural support adjacent alveoli provide each other through elastic fiber networks. If one alveolus starts to collapse, surrounding alveoli exert a pulling force helping reopen it, preventing isolated collapse.' }
        ],
        raw: '>>Surface tension is a cohesive intermolecular force between water molecules at the air-liquid interface, creating an inward net force. Surface tension affects pulmonary mechanics by increasing pressure required for lung inflation and creating collapsing pressure on alveoli according to Laplace law: pressure equals two times surface tension divided by radius. Smaller alveoli have higher collapsing pressure and would empty into larger alveoli without surfactant. Surfactant reduces surface tension, especially in smaller alveoli where it becomes more concentrated, preventing unequal ventilation and stabilizing alveoli of different sizes. Surfactant also reduces work of breathing by decreasing pressure needed for inflation.<< Atelectasis is partial or complete collapse of the lung or lung section when alveoli become deflated or filled with fluid, preventing adequate gas exchange. It can result from airway obstruction, injury, or lack of surfactant. Surfactant prevents atelectasis by reducing surface tension in alveoli, keeping them open during expiration and maintaining lung stability. Without adequate surfactant, particularly in premature infants, alveoli collapse causing breathing difficulty and reduced oxygen exchange. Alveolar interdependence refers to structural support adjacent alveoli provide each other through elastic fiber networks. If one alveolus starts to collapse, surrounding alveoli exert a pulling force helping reopen it, preventing isolated collapse.'
      },
      audioUrl: '/Audio/Topic-025/LO-07.mp3'
    },
    {
      id: 'lo-8',
      isCritical: true,
      title: '>>Describe the source and the composition of surfactant. Explain the regulation of surfactant secretion.<<',
      keyPoints: [
        'Source: Produced and secreted by type II alveolar cells (pneumocytes), stored in lamellar bodies within cells',
        'Composition: 90% lipid (mainly dipalmitoylphosphatidylcholine), 10% protein (including albumin, IgA, apoproteins SP-A, SP-B, SP-C, SP-D)',
        'Secretion mechanism: Exocytosis of lamellar bodies stimulated by lung distension, forms thin film reducing surface tension to one-tenth',
        'Neural regulation: Sympathetic nervous system via beta-2 adrenergic receptors enhances secretion through cAMP pathway',
        'Hormonal regulation: Glucocorticoids (cortisol) stimulate production especially during fetal development, thyroid hormones support maturation',
        'Mechanical regulation: Stretch and deep breathing enhance secretion via mechanoreceptors, positive end-expiratory pressure stimulates release',
        'Production timeline: Begins sixth to seventh intrauterine month, increases at 34-35 weeks gestation, premature birth causes respiratory distress syndrome'
      ],
      officialDefinitions: [
        'Surfactant source: Produced by type II alveolar cells.',
        'Surfactant storage and secretion: They\'re stored inside of large globules inside of alveolar cells → lamellar bodies. Exocytosis of surfactant from type II alveolar cells in the form of lamellar bodies → comes out from cell in the tubular-like fashion → tubular myelin. A tubular myelin consists of several surfactant molecules.',
        'Stimulus for exocytosis: distension of the lung.',
        'Surfactant composition: Consists of 90% lipid and 10% protein. Dipalmitoyl group (hydrophobic): 16 carbons fatty acid tail → palmitoyl group. When two of them combined → dipalmitoyl. Phosphatidylcholine (hydrophilic): Phosphatidyl group + choline group → phosphatidylcholine. Albumin. IgA: For innate immunity. Apoproteins: Consists of 4 parts. SP-A & SP-D: Hydrophilic. For opsonization. SP-B & SP-C: Hydrophobic. Controls the rate of spreading of surfactant.',
        'Surfactant effect: surface tension drops to 1/10. Formes a thin film.',
        'Surfactant removal: removed by phagocitosis (recycling!).',
        'Surfactant production timeline: produced from the 6.-7. intrauterine month. 24th week of gestation → fetus starts producing surfactant (slow process). 34th to 35th week of gestation → surfactant production increases. Closer to 34th week, the mother starts producing a hormone within the zona fasciculata → cortisol. One of the glucocorticoid hormones. Surfactant production starts increasing in fetus.',
        'Premature babies: Prematurely born babies (< 34th week [e.g., 31st week]) aren\'t able to produce enough surfactant → infant respiratory distress syndrome (IRDS) / neonatal respiratory distress syndrome. Hard for baby to expand the alveoli due to ↑ surface tension. Collapsing of the alveoli creates unequal alveoli. Have to put the baby on a mechanical ventilator to push air into the baby.',
        'Regulation of surfactant secretion - Neural Control: Sympathetic Nervous System: Activation of the sympathetic nervous system, specifically through beta-2 adrenergic receptors (β₂ receptors), enhances surfactant secretion. The binding of catecholamines like epinephrine to these β₂ receptors stimulates the secretion of surfactant through second messenger pathways involving cyclic AMP (cAMP). Parasympathetic Nervous System: Although less influential, parasympathetic stimulation via acetylcholine can have minor effects on surfactant secretion through the activation of muscarinic receptors (specifically M₃ receptors).',
        'Regulation of surfactant secretion - Hormonal Regulation: Cortisol and Glucocorticoids: Cortisol and other glucocorticoids play a significant role in surfactant production, particularly during fetal development. Increased levels of cortisol stimulate the synthesis of surfactant, preparing the lungs for breathing at birth. Glycocorticoids stimulate. Thyroid Hormones: These hormones also support the maturation of type II pneumocytes and the production of surfactant, particularly during late fetal development. Insulin: High levels of insulin, especially in diabetic pregnancies, can inhibit surfactant synthesis, increasing the risk of neonatal respiratory distress syndrome (RDS).',
        'Regulation of surfactant secretion - Mechanical Stimulation: Stretch and Breathing Movements: The mechanical stretching of the alveoli during deep inhalation or regular breathing enhances surfactant secretion. This stimulation is mediated by mechanoreceptors in the alveoli, which, when activated, trigger the type II pneumocytes to release stored surfactant. Positive End-Expiratory Pressure (PEEP): Mechanical ventilation that includes PEEP can stimulate surfactant release by maintaining alveolar expansion, promoting secretion.',
        'Regulation of surfactant secretion - Chemical and Molecular Signals: Cyclic AMP (cAMP): Surfactant secretion is enhanced by pathways that increase intracellular cAMP levels. Beta-adrenergic receptor activation and other stimuli that increase cAMP promote the exocytosis of surfactant from lamellar bodies in type II pneumocytes. Calcium Ions (Ca²⁺): Intracellular calcium plays a role in the exocytosis of surfactant. Increased calcium levels within the cells can trigger the release of surfactant by promoting vesicle fusion with the cell membrane.',
        'Regulation of surfactant secretion - Pulmonary Conditions: Hypoxia: Low oxygen levels can reduce the secretion of surfactant, impairing lung function and contributing to the risk of alveolar collapse. Infections and Inflammation: Conditions such as pneumonia and other inflammatory states can alter surfactant production and functionality by damaging type II pneumocytes or disrupting the regulatory mechanisms.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Surfactant is produced and secreted by type II alveolar cells, also called type II pneumocytes, and stored in lamellar bodies within these cells.<<', critical: true },
          { type: 'paragraph', content: '>>Composition consists of approximately 90% lipid and 10% protein. The main lipid is dipalmitoylphosphatidylcholine, a phospholipid with hydrophilic phosphatidylcholine head and hydrophobic dipalmitoyl fatty acid tails. Protein components include albumin, immunoglobulin A for innate immunity, and four apoproteins: SP-A and SP-D are hydrophilic and function in opsonization; SP-B and SP-C are hydrophobic and control surfactant spreading rate.<<', critical: true },
          { type: 'paragraph', content: '>>Surfactant is secreted through exocytosis of lamellar bodies forming tubular myelin structures that spread to create a thin film at the air-liquid interface, reducing surface tension to one-tenth normal value.<<', critical: true },
          {
            type: 'list',
            intro: '>>Regulation of surfactant secretion involves multiple mechanisms:<<',
            critical: true,
            items: [
              'Neural control occurs through sympathetic nervous system activation of beta-2 adrenergic receptors by catecholamines like epinephrine, stimulating secretion through cyclic AMP pathways.',
              'Hormonal regulation includes glucocorticoids, especially cortisol, stimulating surfactant production particularly during fetal development, and thyroid hormones supporting type II pneumocyte maturation. High insulin levels can inhibit synthesis.',
              'Mechanical stimulation enhances secretion as alveolar stretching during deep breathing activates mechanoreceptors triggering release. Positive end-expiratory pressure during mechanical ventilation stimulates release by maintaining alveolar expansion.'
            ]
          },
          { type: 'paragraph', content: '>>Surfactant production begins during the sixth to seventh intrauterine month and increases significantly at 34 to 35 weeks gestation when maternal cortisol production rises. Premature babies born before 34 weeks lack adequate surfactant, resulting in infant respiratory distress syndrome.<<', critical: true }
        ],
        raw: '>>Surfactant is produced and secreted by type II alveolar cells, also called type II pneumocytes, and stored in lamellar bodies within these cells. Composition consists of approximately 90% lipid and 10% protein. The main lipid is dipalmitoylphosphatidylcholine, a phospholipid with hydrophilic phosphatidylcholine head and hydrophobic dipalmitoyl fatty acid tails. Protein components include albumin, immunoglobulin A for innate immunity, and four apoproteins: SP-A and SP-D are hydrophilic and function in opsonization; SP-B and SP-C are hydrophobic and control surfactant spreading rate. Surfactant is secreted through exocytosis of lamellar bodies forming tubular myelin structures that spread to create a thin film at the air-liquid interface, reducing surface tension to one-tenth normal value. Regulation of surfactant secretion involves multiple mechanisms. Neural control occurs through sympathetic nervous system activation of beta-2 adrenergic receptors by catecholamines like epinephrine, stimulating secretion through cyclic AMP pathways. Hormonal regulation includes glucocorticoids, especially cortisol, stimulating surfactant production particularly during fetal development, and thyroid hormones supporting type II pneumocyte maturation. High insulin levels can inhibit synthesis. Mechanical stimulation enhances secretion as alveolar stretching during deep breathing activates mechanoreceptors triggering release. Positive end-expiratory pressure during mechanical ventilation stimulates release by maintaining alveolar expansion. Surfactant production begins during the sixth to seventh intrauterine month and increases significantly at 34 to 35 weeks gestation when maternal cortisol production rises. Premature babies born before 34 weeks lack adequate surfactant, resulting in infant respiratory distress syndrome.<<'
      },
      audioUrl: '/Audio/Topic-025/LO-08.mp3'
    }
  ],
  referenceValues: [
    {
      parameter: 'Tidal Volume (TV) male/female',
      value: '500/500 ml',
      isCritical: true
    },
    {
      parameter: 'Inspiratory Reserve Volume (IRV) male/female',
      value: '3100/1900 ml',
      isCritical: false
    },
    {
      parameter: 'Expiratory Reserve Volume (ERV) male/female',
      value: '1200/800 ml',
      isCritical: false
    },
    {
      parameter: 'Residual Volume (RV) male/female',
      value: '1200/1000 ml',
      isCritical: true
    },
    {
      parameter: 'Functional Residual Capacity (FRC) male/female',
      value: '2400/1800 ml',
      isCritical: true
    },
    {
      parameter: 'Vital Capacity (VC) male/female',
      value: '4800/3200 ml',
      isCritical: true
    },
    {
      parameter: 'Total Lung Capacity (TLC) male/female',
      value: '6000/4200 ml',
      isCritical: true
    },
    {
      parameter: 'Lung compliance',
      value: '0.2 l/cmH2O',
      isCritical: true
    },
    {
      parameter: 'Chest+lung compliance',
      value: '0.1 l/cmH2O',
      isCritical: true
    }
  ]
};

export default topic25;
