const topic82 = {
  id: 'topic-82',
  mcqs: ['mcq-5'],
  number: 82,
  title: 'Acid-Base Balance',
  subtitle: 'Regulation of blood pH through buffer systems, respiratory control of CO₂, and renal control of bicarbonate; diagnosis and compensation of acid-base disturbances.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: false,
      title: 'Identify the normal range of pH values. Describe the role of buffers in maintaining pH, including the roles of the lungs and kidneys.',
      keyPoints: [
        'Normal arterial blood pH: 7.37-7.43 (acidosis < 7.37; alkalosis > 7.43)',
        'Buffer: Weak acid/base pair that resists pH change by absorbing or releasing H+; acts within seconds',
        'Five major blood buffers: (1) HCO₃⁻/H₂CO₃ (extracellular, most important), (2) Hemoglobin (HbO₂⁻/HHb), (3) Plasma proteins, (4) Phosphate (HPO₄²⁻/H₂PO₄⁻), (5) NH₃/NH₄⁺ (renal)',
        'Buffer base (BB): 44-49 mmol/L; Base excess (BE): +2.5 to −2.5 mmol/L - reflect total buffer capacity',
        'Lungs regulate H₂CO₃ (via CO₂ elimination): hyperventilation → pH↑; hypoventilation → pH↓. Response in minutes',
        'Kidneys regulate HCO₃⁻ level by reabsorption/excretion and new HCO₃⁻ generation. Response in hours to days'
      ],
      officialDefinitions: [
        'Normal pH ranges: Arterial blood: pH = 7.37-7.43. Venous blood & interstitial fluid: pH = 7.35. Intracellular Fluid (ICF): pH = 6.0-7.4. Urine: pH = 4.5-8.0. Gastric HCl: pH = −0.8.',
        'Role of buffers: Buffers act immediately to resist pH changes by binding or releasing H⁺ ions. They do not eliminate H⁺ but keep them bound until they can be excreted.',
        'Major buffer systems: (1) Bicarbonate (HCO₃⁻/CO₂) system - most important in ECF. (2) Phosphate buffer system - important in ICF and renal tubules. (3) Protein buffer system (e.g., hemoglobin, albumin). BB = 48 mmol/l.',
        'Role of the lungs: The second line of defense after buffers. Acts within minutes by adjusting CO₂ elimination. Hyperventilation → ↓ CO₂ → ↓ H⁺ → pH increases (alkalosis). Hypoventilation → ↑ CO₂ → ↑ H⁺ → pH decreases (acidosis). Breathing influences H₂CO₃ level.',
        'Role of the kidneys: Third and most powerful regulatory system. Acts over hours to days to correct pH by: excreting H⁺ ions (via ammonium or phosphate buffer), reabsorbing and generating new HCO₃⁻. In acidosis: H⁺ secretion, HCO₃⁻ reabsorption. In alkalosis: H⁺ reabsorption, HCO₃⁻ secretion. Kidneys influence HCO₃⁻ level.',
        'pH regulation overview: (1) Buffers. (2) Respiration. (3) Kidneys.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Normal arterial blood pH is 7.37-7.43. Buffers are weak acid-conjugate base pairs that resist pH change by absorbing excess H⁺ in acidosis or releasing them in alkalosis, acting within seconds.'
          },
          {
            type: 'list',
            intro: 'Major blood buffers:',
            items: [
              'HCO₃⁻/H₂CO₃ system (extracellular, most important)',
              'Hemoglobin (inside red blood cells)',
              'Plasma proteins',
              'Phosphate system (HPO₄²⁻/H₂PO₄⁻)',
              'Renal ammonia system (NH₃/NH₄⁺)'
            ]
          },
          {
            type: 'list',
            items: [
              'Lungs — regulate pH by controlling CO₂: hyperventilation removes CO₂ → decreases H₂CO₃ → raises pH; hypoventilation retains CO₂ → lowers pH. Acts within minutes',
              'Kidneys — regulate HCO₃⁻ concentration by reabsorbing or excreting it and generating new HCO₃⁻. Acts over hours to days, providing the most complete correction'
            ]
          }
        ],
        raw: 'Normal arterial blood pH is 7.37 to 7.43. Buffers are weak acid-conjugate base pairs that resist pH change by absorbing excess hydrogen ions in acidosis or releasing them in alkalosis, acting within seconds. The major blood buffers are the bicarbonate-carbonic acid system in plasma, hemoglobin inside red blood cells, plasma proteins, the phosphate system, and the renal ammonia system. The lungs regulate pH by controlling carbon dioxide - hyperventilation removes carbon dioxide, decreasing carbonic acid and raising pH; hypoventilation retains carbon dioxide and lowers pH, acting within minutes. The kidneys regulate bicarbonate concentration by reabsorbing or excreting it and by generating new bicarbonate, acting over hours to days and providing the most complete correction of pH disturbances.'
      }
    },
    {
      id: 'lo-2',
      isCritical: true,
      title: '>>Describe the respiratory and renal regulation of the CO₂/HCO₃⁻ buffer system, which allows a buffer with a pK of 6.1 to be physiologically important in the maintenance of the normal plasma pH of 7.4<<',
      keyPoints: [
        'Henderson-Hasselbalch equation: pH = 6.1 + log([HCO₃⁻] / 0.03 × pCO₂)',
        'At normal pH 7.4: ratio HCO₃⁻ / H₂CO₃ = 20:1 (24 mmol/L : 1.2 mmol/L). pK 6.1 is 1.3 units away from pH 7.4 - ordinarily poor buffering',
        'Respiratory regulation (CO₂/H₂CO₃ side): lungs continuously adjust ventilation to control pCO₂ (40 mmHg normal). Open system - CO₂ is volatile and eliminated. Hyperventilation lowers pCO₂ → raises pH; hypoventilation raises pCO₂ → lowers pH',
        'Renal regulation (HCO₃⁻ side): kidneys precisely control plasma [HCO₃⁻] (normal 24 mmol/L) via H⁺ secretion and HCO₃⁻ reabsorption/generation. Slow but powerful',
        'Open system principle: because BOTH components are independently regulated, the ratio [HCO₃⁻]/[H₂CO₃] can be maintained at 20:1, making the system far more effective than its pK of 6.1 would suggest',
        'Clinical significance: most important extracellular buffer - quantitatively largest, physiologically regulated on both sides'
      ],
      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            critical: true,
            content: 'The CO₂/HCO₃⁻ buffer system is physiologically important despite a pK of 6.1 (1.3 pH units below normal plasma pH of 7.4) because it is an open system with independent regulation of both components. The Henderson-Hasselbalch equation: pH = 6.1 + log([HCO₃⁻] / 0.03 × pCO₂). At pH 7.4, the HCO₃⁻-to-H₂CO₃ ratio is 20:1.'
          },
          {
            type: 'list',
            critical: true,
            items: [
              'Respiratory regulation (CO₂/H₂CO₃ side) — hyperventilation blows off CO₂, raises the ratio, and increases pH; hypoventilation retains CO₂, lowers the ratio, and decreases pH — acts within minutes',
              'Renal regulation (HCO₃⁻ side) — kidneys control H⁺ secretion and HCO₃⁻ reabsorption, adjusting plasma HCO₃⁻ over hours to days'
            ]
          },
          {
            type: 'paragraph',
            critical: true,
            content: 'Because both components are independently regulated, the 20:1 ratio is actively maintained, making this buffer effective despite its unfavorable pK.'
          }
        ],
        raw: '>>The carbon dioxide/bicarbonate buffer system is physiologically important despite a pK of 6.1 - 1.3 pH units below normal plasma pH of 7.4 - because it is an open system with independent regulation of both components. The Henderson-Hasselbalch equation describes this: pH equals 6.1 plus the log of bicarbonate divided by 0.03 times the partial pressure of carbon dioxide. At pH 7.4, the bicarbonate-to-carbonic acid ratio is 20 to 1. The respiratory system regulates the carbon dioxide and therefore carbonic acid side: hyperventilation blows off carbon dioxide, raises the ratio, and increases pH; hypoventilation retains carbon dioxide, lowers the ratio, and decreases pH - this occurs within minutes. The kidneys regulate the bicarbonate side by controlling hydrogen ion secretion and bicarbonate reabsorption, adjusting plasma bicarbonate over hours to days. Because both components are independently regulated, the 20 to 1 ratio is actively maintained, making this buffer effective despite its unfavorable pK.<<'
      }
    },
    {
      id: 'lo-3',
      isCritical: false,
      title: 'Distinguish between CO₂-derived (volatile acid) and nonvolatile acid, the amounts produced each day through dietary intake / cellular metabolism, and the normal routes of loss from the body.',
      keyPoints: [
        'Volatile acid (CO₂-derived): CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Produced: ~10,000 mmol/day from aerobic metabolism. Eliminated exclusively by the lungs as CO₂ gas',
        'Nonvolatile (fixed) acids: Organic acids (lactic acid, ketoacids) + inorganic acids (H₂SO₄ from protein sulfur, H₃PO₄ from phospholipids). Produced: 50-100 mmol/day from dietary intake and cellular metabolism',
        'Nonvolatile acid sources: sulfur-containing amino acids (methionine, cysteine) → H₂SO₄; phospholipid/nucleic acid catabolism → H₃PO₄; anaerobic glycolysis → lactic acid; fatty acid oxidation (incomplete) → ketoacids',
        'Routes of nonvolatile acid elimination: buffered in blood → liver metabolism of organic acids; kidneys excrete H⁺ as titratable acid and NH₄⁺, regenerating new HCO₃⁻ (50-100 mmol/day)',
        'Critical distinction: volatile acid can be rapidly cleared by breathing; nonvolatile acids require renal excretion and liver metabolism - slower process'
      ],
      officialDefinitions: [
        'Volatile acid (CO₂-derived): Volatile acid production = ~10,000 mmol/day. The major volatile acid is carbonic acid (H₂CO₃), formed from CO₂ + H₂O (catalyzed by carbonic anhydrase) → H₂CO₃ → H⁺ + HCO₃⁻. Since CO₂ is a gas, it can diffuse into the blood, react with water to form carbonic acid, and be expelled by the lungs during respiration. Elimination route: lungs (exhalation).',
        'Nonvolatile acids: Nonvolatile acid production = 50-100 mmol/day. Organic acids (e.g., lactic acid), SO₄, PO₄. Types include: sulfuric acid (H₂SO₄) - from metabolism of sulfur-containing amino acids (cysteine, methionine); phosphoric acid (H₃PO₄) - from phospholipid and nucleotide metabolism; lactic acid - formed during anaerobic glycolysis; keto acids (beta-hydroxybutyric acid, acetoacetic acid) - generated during fatty acid metabolism (e.g., in diabetes or fasting). Elimination route: liver, kidney.',
        'Routes of elimination: CO₂/volatile acid → eliminated by lungs. Nonvolatile acids cannot be excreted via the lungs and must be eliminated by the kidneys through: (1) renal excretion of H⁺, (2) reabsorption and regeneration of bicarbonate (HCO₃⁻) to buffer acids.',
        'Regulation of CO₂: CO₂ levels rise (hypoventilation) → more H₂CO₃ forms → increasing H⁺ concentration → respiratory acidosis. CO₂ levels decrease (hyperventilation) → H₂CO₃ dissociates → reducing H⁺ concentration → respiratory alkalosis.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'CO₂ is the volatile acid: aerobic metabolism generates ~10,000 mmol/day of CO₂, which combines with water to form H₂CO₃ that dissociates to H⁺ and HCO₃⁻. It is eliminated exclusively by the lungs through ventilation.'
          },
          {
            type: 'list',
            intro: 'Nonvolatile (fixed) acids cannot be excreted by the lungs and are produced at 50-100 mmol/day. Sources:',
            items: [
              'Sulfur-containing amino acids (methionine, cysteine) → H₂SO₄',
              'Phospholipid and nucleic acid catabolism → H₃PO₄',
              'Anaerobic glycolysis → lactic acid',
              'Incomplete fatty acid oxidation → ketoacids'
            ]
          },
          {
            type: 'paragraph',
            content: 'Organic acids are metabolized by the liver. The kidneys are ultimately responsible for eliminating the nonvolatile acid load by secreting H⁺ as titratable acid and NH₄⁺, simultaneously generating new HCO₃⁻.'
          }
        ],
        raw: 'Carbon dioxide is the volatile acid: aerobic metabolism generates approximately 10,000 millimoles of carbon dioxide per day, which combines with water to form carbonic acid that dissociates to hydrogen ions and bicarbonate. It is eliminated exclusively by the lungs through ventilation. Nonvolatile or fixed acids cannot be excreted by the lungs and are produced at 50 to 100 millimoles per day. Sources include sulfur-containing amino acids such as methionine and cysteine yielding sulfuric acid, phospholipid and nucleic acid catabolism yielding phosphoric acid, anaerobic glycolysis producing lactic acid, and incomplete fatty acid oxidation generating ketoacids. Organic acids are metabolized by the liver. The kidneys are ultimately responsible for eliminating the nonvolatile acid load by secreting hydrogen ions as titratable acid and ammonium, simultaneously generating new bicarbonate.'
      }
    },
    {
      id: 'lo-4',
      isCritical: true,
      title: '>>Identify the major sites of HCO₃⁻ reabsorption (and secretion) along the nephron, emphasizing the importance of H⁺ secretory mechanisms in this process. Describe the cellular mechanisms responsible for net transepithelial movement of HCO₃⁻<<',
      keyPoints: [
        'Major reabsorption sites: Proximal tubule: ~80% of filtered HCO₃⁻; Thick ascending limb of Henle: ~10%; Distal tubule and cortical collecting duct: ~5-9%; Total: ~4,300 mmol/day filtered and "reabsorbed"',
        'Mechanism in proximal tubule: luminal H⁺ secretion via Na⁺/H⁺ exchanger (NHE3, secondary active) → H⁺ + filtered HCO₃⁻ → H₂CO₃ → CO₂ + H₂O (catalyzed by luminal carbonic anhydrase IV). CO₂ diffuses into cell → carbonic anhydrase II regenerates H⁺ + HCO₃⁻ → HCO₃⁻ exits basolaterally via NBC (Na⁺/HCO₃⁻ cotransporter) into blood',
        'Collecting duct H⁺ secretion: alpha-intercalated cells secrete H⁺ via luminal H⁺-ATPase and H⁺/K⁺-ATPase → generates new HCO₃⁻ which exits basolaterally via Cl⁻/HCO₃⁻ exchanger (AE1)',
        'HCO₃⁻ secretion: beta-intercalated cells in cortical collecting duct - luminal Cl⁻/HCO₃⁻ exchanger (pendrin) secretes HCO₃⁻ into lumen (in alkalosis)',
        'Key principle: HCO₃⁻ is NOT directly transported across the luminal membrane - it is reclaimed indirectly by H⁺ secretion neutralizing luminal HCO₃⁻, with CO₂ entering the cell and new HCO₃⁻ generated intracellularly'
      ],
      officialDefinitions: [
        'Sites of HCO₃⁻ reabsorption: Proximal tubule reabsorbs ~80-90% of filtered HCO₃⁻. Thick ascending limb of the loop of Henle reabsorbs ~10% of filtered HCO₃⁻ (mechanisms similar to proximal tubule but with less carbonic anhydrase activity; uses Na⁺/H⁺ antiporter for H⁺ secretion and HCO₃⁻ reabsorption). Distal tubule and collecting ducts reabsorb the remaining 4-9% of filtered HCO₃⁻, fine-tuning acid-base balance through intercalated cells.',
        'Proximal tubule cellular mechanism: (1) Na⁺/H⁺ Antiporter (NHE3): Na⁺ is reabsorbed into the tubular cells in exchange for H⁺; H⁺ is secreted into the lumen. (2) Formation of carbonic acid: secreted H⁺ reacts with filtered HCO₃⁻ → H⁺ + HCO₃⁻ → H₂CO₃; carbonic anhydrase (CA) on the brush border catalyzes the breakdown of H₂CO₃ into CO₂ and H₂O. (3) Reabsorption of CO₂: CO₂ easily diffuses into the proximal tubular cells. (4) Intracellular HCO₃⁻ generation: inside the tubular cells, CO₂ recombines with H₂O (via intracellular carbonic anhydrase) → H₂CO₃ → H⁺ + HCO₃⁻. (5) HCO₃⁻ transport into blood: via Na⁺/HCO₃⁻ cotransporter (NBC1) and Cl⁻/HCO₃⁻ exchanger (AE2) across the basolateral membrane into peritubular capillaries.',
        'Collecting duct intercalated cells: Type A intercalated cells (acidosis response): secrete H⁺ into the lumen via H⁺-ATPase (proton pump) and H⁺/K⁺-ATPase (exchanges H⁺ for K⁺); reabsorb HCO₃⁻ into the blood. Type B intercalated cells (alkalosis response): secrete HCO₃⁻ into the lumen via Cl⁻/HCO₃⁻ exchanger (pendrin); reabsorb H⁺ to acidify the blood.',
        'Importance of H⁺ secretion: Each H⁺ secreted into the lumen leads to reabsorption of one HCO₃⁻, preventing excessive loss of bicarbonate in the urine. In acidosis, the kidneys increase H⁺ secretion, promoting more HCO₃⁻ reabsorption. In alkalosis, the kidneys reduce H⁺ secretion and promote HCO₃⁻ excretion via Type B intercalated cells.',
        'HCO₃⁻ secretion: Occurs via Type B intercalated cells. HCO₃⁻ is secreted into the lumen by the Cl⁻/HCO₃⁻ exchanger. H⁺ is reabsorbed via H⁺-ATPase.',
        'Factors affecting H⁺ secretion: pH ↓ (H⁺ ↑) → H⁺ secretion ↑ (Na⁺/H⁺ exchanger activity ↑, H⁺-ATPase activity ↑, ammonia synthesis ↑). Arterial pCO₂ ↑ → H⁺ formation from H₂CO₃ → H⁺ secretion ↑. Hypokalemia → H⁺ secretion ↑ (H⁺/K⁺-ATPase activity ↑, ammonia synthesis ↑). Na⁺ reabsorption ↑ → H⁺ secretion ↑. ECF volume ↓ → H⁺ secretion ↑ (ECF volume ↓ → Na⁺ reabsorption ↑ → H⁺ secretion ↑). H⁺ ↑, HCO₃⁻ ↓, pCO₂ ↑, ECF volume ↓, Angiotensin II ↑, Aldosterone ↑, K⁺ ↓ → H⁺ secretion ↑, HCO₃⁻ reabsorption ↑.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            critical: true,
            content: '~4,300 mmol of HCO₃⁻ are filtered daily and must be reclaimed. The proximal tubule reabsorbs ~80% via NHE3 on the luminal membrane:'
          },
          {
            type: 'steps',
            critical: true,
            items: [
              'H⁺ secreted into the lumen combines with filtered HCO₃⁻ → H₂CO₃',
              'Luminal carbonic anhydrase IV splits H₂CO₃ into CO₂ + H₂O',
              'CO₂ enters the tubular cell → intracellular carbonic anhydrase II regenerates H⁺ + HCO₃⁻',
              'H⁺ is recycled back to the lumen; new HCO₃⁻ exits basolaterally via the Na⁺-HCO₃⁻ cotransporter (NBC) into the blood'
            ]
          },
          {
            type: 'paragraph',
            critical: true,
            content: 'The thick ascending limb reabsorbs ~10%, and the collecting duct the remainder.'
          },
          {
            type: 'list',
            critical: true,
            intro: 'Collecting duct cell types:',
            items: [
              'α-intercalated cells — secrete H⁺ via luminal H⁺-ATPase and H⁺-K⁺-ATPase, generating new HCO₃⁻ that exits via the basolateral Cl⁻/HCO₃⁻ exchanger (AE1)',
              'β-intercalated cells — secrete HCO₃⁻ into the lumen via the pendrin exchanger during alkalosis'
            ]
          },
          {
            type: 'paragraph',
            critical: true,
            content: 'Critically, HCO₃⁻ is not directly transported across the luminal membrane — all net transepithelial HCO₃⁻ movement depends on H⁺ secretion.'
          }
        ],
        raw: '>>Approximately 4,300 millimoles of bicarbonate are filtered daily and must be reclaimed. The proximal tubule reabsorbs about 80% via the sodium-hydrogen exchanger NHE3 on the luminal membrane - hydrogen ions secreted into the lumen combine with filtered bicarbonate to form carbonic acid, which is split by luminal carbonic anhydrase IV into carbon dioxide and water. Carbon dioxide enters the tubular cell, where intracellular carbonic anhydrase II regenerates hydrogen ions and bicarbonate. Hydrogen ions are recycled back to the lumen and the newly formed bicarbonate exits the basolateral side via the sodium-bicarbonate cotransporter into the blood. The thick ascending limb reabsorbs about 10%, and the collecting duct the remainder. In the collecting duct, alpha-intercalated cells secrete hydrogen ions via a luminal hydrogen-ATPase and hydrogen-potassium-ATPase, generating new bicarbonate that exits via the basolateral chloride-bicarbonate exchanger. Beta-intercalated cells can secrete bicarbonate into the lumen via the pendrin exchanger during alkalosis. Critically, bicarbonate is not directly transported across the luminal membrane - all net transepithelial bicarbonate movement depends on hydrogen ion secretion.<<'
      }
    },
    {
      id: 'lo-5',
      isCritical: false,
      title: 'Describe the adjustments in HCO₃⁻ reabsorption (H⁺ secretion) by alterations in systemic acid-base balance.',
      keyPoints: [
        'Acidosis (pH↓, H⁺↑, HCO₃⁻↓): ↑ H⁺ secretion via increased NHE3 activity and H⁺-ATPase activity; ↑ ammoniagenesis; ↑ HCO₃⁻ reabsorption → urine acidified, new HCO₃⁻ generated',
        'Alkalosis (pH↑, H⁺↓, HCO₃⁻↑): ↓ H⁺ secretion; ↓ HCO₃⁻ reabsorption → excess HCO₃⁻ spills into urine (bicarbonaturia); beta-intercalated cells actively secrete HCO₃⁻',
        'pCO₂ effect: ↑ pCO₂ → ↑ intracellular H⁺ and H₂CO₃ → ↑ H⁺ secretion and ↑ HCO₃⁻ reabsorption',
        'Factors increasing H⁺ secretion (and HCO₃⁻ reabsorption): ↑ H⁺, ↓ HCO₃⁻, ↑ pCO₂, ↓ ECF volume, ↑ angiotensin II, ↑ aldosterone, ↓ K⁺',
        'Factors decreasing H⁺ secretion: ↓ H⁺, ↑ HCO₃⁻, ↓ pCO₂, ↑ ECF volume, ↓ angiotensin II, ↓ aldosterone, ↑ K⁺',
        'Hypokalemia → ↑ H⁺ secretion (H⁺/K⁺-ATPase activated); hyperkalemia → ↓ H⁺ secretion. Acidosis ↔ hyperkalemia are inversely coupled'
      ],
      officialDefinitions: [
        'In acidosis (↓ pH) goal - conserve HCO₃⁻ and eliminate excess H⁺: (1) ↑ H⁺ secretion (mainly in proximal tubule and Type A intercalated cells) - enhances H⁺ excretion as titratable acid (H₂PO₄⁻) and ammonium (NH₄⁺). (2) ↑ HCO₃⁻ reabsorption - nearly all filtered bicarbonate is reclaimed; new HCO₃⁻ is generated with each excreted H⁺ (net gain). (3) ↑ Glutamine metabolism in proximal tubule - increases NH₄⁺ excretion and new HCO₃⁻ production. Net effect: plasma HCO₃⁻ increases; plasma pH gradually returns toward normal.',
        'In alkalosis (↑ pH) goal - excrete excess HCO₃⁻ and retain H⁺: (1) ↓ H⁺ secretion - reduces bicarbonate reabsorption. (2) ↑ HCO₃⁻ excretion - especially in Type B intercalated cells; HCO₃⁻ secreted via pendrin (Cl⁻/HCO₃⁻ exchanger) in apical membrane; H⁺ pumped into blood. (3) ↓ Ammonium production - less new HCO₃⁻ is generated. Net effect: plasma HCO₃⁻ decreases.',
        'Regulation summary: H⁺ ↑, HCO₃⁻ ↓, pCO₂ ↑, ECF volume ↓, Angiotensin II ↑, Aldosterone ↑, K⁺ ↓ → H⁺ secretion ↑, HCO₃⁻ reabsorption ↑. H⁺ ↓, HCO₃⁻ ↑, pCO₂ ↓, ECF volume ↑, Angiotensin II ↓, Aldosterone ↓, K⁺ ↑ → H⁺ secretion ↓, HCO₃⁻ reabsorption ↓. HCO₃⁻ production/reabsorption is also regulated by pCO₂ (chronic regulation of proximal tubule bicarbonate reabsorption by pCO₂).'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            items: [
              'Acidosis — kidneys increase H⁺ secretion (NHE3 and H⁺-ATPase become more active), HCO₃⁻ reabsorption increases, and ammonia synthesis is upregulated to provide additional urinary buffers, generating new HCO₃⁻ to replenish plasma stores',
              'Alkalosis — H⁺ secretion decreases, HCO₃⁻ reabsorption falls and excess HCO₃⁻ spills into urine (bicarbonaturia); β-intercalated cells actively secrete HCO₃⁻ via the pendrin exchanger'
            ]
          },
          {
            type: 'list',
            intro: 'Factors modulating H⁺ secretion and HCO₃⁻ reabsorption:',
            items: [
              'Increase H⁺ secretion: ↑ pCO₂, ↓ ECF volume, ↑ angiotensin II, ↑ aldosterone, ↓ K⁺',
              'Decrease H⁺ secretion: ↓ pCO₂, ↑ ECF volume, ↓ angiotensin II, ↓ aldosterone, ↑ K⁺'
            ]
          },
          {
            type: 'paragraph',
            content: 'Acidosis is associated with hyperkalemia, and hypokalemia drives increased H⁺ secretion via the H⁺-K⁺-ATPase.'
          }
        ],
        raw: 'In systemic acidosis, the kidneys respond by increasing hydrogen ion secretion - the sodium-hydrogen exchanger in the proximal tubule and the hydrogen-ATPase in the collecting duct become more active, tubular bicarbonate reabsorption increases, and ammonia synthesis is upregulated to provide additional urinary buffers, generating new bicarbonate to replenish plasma stores. In systemic alkalosis, hydrogen ion secretion decreases, bicarbonate reabsorption falls and excess bicarbonate spills into the urine, while beta-intercalated cells actively secrete bicarbonate via the pendrin exchanger. Several factors modulate this system: raised partial pressure of carbon dioxide, lowered ECF volume, angiotensin II, aldosterone, and hypokalemia all increase hydrogen ion secretion and bicarbonate reabsorption; the opposite conditions decrease them. Acidosis is associated with hyperkalemia, and hypokalemia drives increased hydrogen ion secretion via the hydrogen-potassium-ATPase.'
      }
    },
    {
      id: 'lo-6',
      isCritical: true,
      title: '>>Describe net acid excretion by the kidneys, titratable acid, the importance of urinary buffers, and the production and excretion of ammonium.<< Distinguish between the reclamation of filtered bicarbonate and the formation of new bicarbonate.',
      keyPoints: [
        'Net acid excretion (NAE) = U(NH₄⁺)V + U(TA)V − U(HCO₃⁻)V. Normal: 50-100 mmol/day, matching nonvolatile acid production',
        'Titratable acid (TA): H⁺ secreted into urine bound to filtered buffers, mainly HPO₄²⁻ → H₂PO₄⁻ (pK 6.8); also creatinine, urate. Measured as mmol of NaOH needed to return urine to pH 7.4. Limited by buffer availability (~30-40 mmol/day)',
        'Urinary buffers importance: without buffers, minimum urine pH of 4.5 would be reached almost immediately, halting H⁺ secretion. Phosphate and ammonia allow continued H⁺ excretion',
        'Ammonium (NH₄⁺): glutamine → glutaminase → NH₄⁺ + new HCO₃⁻ in proximal tubule cells. NH₃ diffuses into lumen and is trapped as NH₄⁺ (pK 8.9 → nearly all ionized at urine pH). Excreted: ~50-70 mmol/day normally; can increase 10-fold in chronic acidosis',
        'Reclamation of filtered HCO₃⁻: ~4,300 mmol/day; H⁺ secreted neutralizes luminal HCO₃⁻ → CO₂ enters cell → new HCO₃⁻ enters blood. This does NOT generate new HCO₃⁻ - it only recovers what was filtered',
        'New HCO₃⁻ generation: ~50-100 mmol/day; occurs when H⁺ is secreted and excreted with titratable acid or NH₄⁺ (NOT neutralizing filtered HCO₃⁻) → a new HCO₃⁻ molecule enters the blood for each H⁺ excreted. This is true net acid excretion'
      ],
      officialDefinitions: [
        'Net acid excretion formula: Net acid excretion = U(NH₄)V + U(TA)V − U(HCO₃⁻)V. The kidneys play two major roles: (1) reabsorption of filtered HCO₃⁻ so this important extracellular buffer is not excreted in urine, and (2) excretion of fixed H⁺ produced from protein and phospholipid catabolism.',
        'Titratable acid: Titratable acid refers to the amount of H⁺ excreted in the urine that is buffered by phosphate (HPO₄²⁻), creatinine, and other organic acids. Mechanism: H⁺ is secreted into the tubular lumen via Na⁺/H⁺ exchange or active transport; the secreted H⁺ binds to HPO₄²⁻ forming H₂PO₄⁻, which is then excreted. Reaction: HPO₄²⁻ + H⁺ → H₂PO₄⁻.',
        'Importance of urinary buffers: Phosphate (HPO₄²⁻) is the major urinary buffer for titratable acid. Without urinary buffers, the urine pH would fall to its minimum (~4.5) very quickly, limiting H⁺ excretion. Urinary buffers allow the kidneys to excrete large amounts of H⁺ without extreme urine acidification.',
        'Production and excretion of ammonium (NH₄⁺): Glutamine → glutamate (via glutaminase) → 2-oxoglutarate (via glutamate dehydrogenase) → 2NH₄⁺. 2H⁺ → glucose/H₂O. 2HCO₃⁻ generated (via carbonic anhydrase → 2CO₂). In the proximal tubule, NH₄⁺ is secreted by the Na⁺/NH₄⁺ antiporter. In the collecting duct, NH₃ combines with secreted H⁺ to form NH₄⁺, which is then trapped in the lumen and excreted. Reaction: NH₃ + H⁺ → NH₄⁺.',
        'Reclamation of filtered bicarbonate: The kidneys reabsorb bicarbonate (HCO₃⁻) in the proximal tubule, preventing bicarbonate loss. Mechanism: H⁺ is secreted into the lumen → reacts with HCO₃⁻ to form carbonic acid (H₂CO₃) → converted into CO₂ and H₂O by carbonic anhydrase → CO₂ diffuses into the tubule cell → recombines with H₂O to form HCO₃⁻, which is transported back into the blood. This process reclaims bicarbonate that would otherwise be lost in the urine. ~4,300 mmol/day of HCO₃⁻ is reabsorbed (tubular bicarbonate "reabsorption").',
        'Formation of new bicarbonate: When H⁺ is excreted bound to a urinary buffer (e.g., phosphate or ammonium), for every H⁺ excreted, one new HCO₃⁻ is added to the blood. Reactions: H⁺ + NH₃ → NH₄⁺; H⁺ + HPO₄²⁻ → H₂PO₄⁻. Excretion of H⁺ by either mechanism is accompanied by synthesis and reabsorption of new HCO₃⁻ to replenish the HCO₃⁻ stores that were used in buffering fixed H⁺. New bicarbonate production: 50-100 mmol/day.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            critical: true,
            content: 'Net acid excretion (NAE) = U(NH₄⁺)V + U(TA)V − U(HCO₃⁻)V, normally 50-100 mmol/day, matching nonvolatile acid production.'
          },
          {
            type: 'list',
            critical: true,
            items: [
              'Titratable acid (TA) — formed when secreted H⁺ binds filtered urinary buffers, primarily HPO₄²⁻ → H₂PO₄⁻ (pK 6.8, ideal for buffering near physiological pH). Limited by filtered phosphate availability (~30-40 mmol/day)',
              'Ammonium (NH₄⁺) — produced in the proximal tubule from glutamine via glutaminase, yielding NH₄⁺ and generating new HCO₃⁻ simultaneously. NH₃ diffuses into the lumen and is protonated to NH₄⁺ and trapped (pK 8.9 → virtually all ionized at urine pH). Normally ~50-70 mmol/day; can increase 10-fold in chronic acidosis',
              'Urinary buffers are essential — without them urine pH would quickly reach the minimum of 4.5, stopping H⁺ secretion'
            ]
          },
          {
            type: 'list',
            items: [
              'Reclamation of filtered HCO₃⁻ — recovering the ~4,300 mmol filtered daily through H⁺ secretion; each H⁺ neutralizes one luminal HCO₃⁻ and a new HCO₃⁻ enters the blood. Prevents HCO₃⁻ loss but generates no net new HCO₃⁻',
              'New HCO₃⁻ formation — occurs only when H⁺ is excreted combined with titratable acid or NH₄⁺, producing 1 new HCO₃⁻ in the blood per H⁺ excreted'
            ]
          }
        ],
        raw: '>>Net acid excretion equals urinary ammonium excretion plus titratable acid excretion minus bicarbonate lost in urine, normally 50 to 100 millimoles per day, matching nonvolatile acid production. Titratable acid is formed when secreted hydrogen ions bind filtered urinary buffers, primarily dibasic phosphate converting to monobasic phosphate - with a pK of 6.8 it is ideal for buffering near physiological pH. Titratable acid is limited by filtered phosphate availability, contributing about 30 to 40 millimoles per day. Ammonium is produced in the proximal tubule from glutamine via glutaminase, yielding ammonium and generating new bicarbonate simultaneously. Ammonia diffuses freely into the tubular lumen where it is protonated to ammonium and trapped - because the pK is 8.9, virtually all is ionized at urine pH. Ammonium excretion normally provides 50 to 70 millimoles per day and can increase ten-fold during chronic acidosis. Urinary buffers are essential because without them urine pH would quickly reach the minimum of 4.5, stopping hydrogen ion secretion.<< Reclamation of filtered bicarbonate means recovering the 4,300 millimoles filtered daily through hydrogen ion secretion - each hydrogen ion neutralizes one luminal bicarbonate, and a new bicarbonate enters the blood. This prevents bicarbonate loss but generates no net new bicarbonate. New bicarbonate formation occurs only when hydrogen ions are excreted combined with titratable acid or ammonium, producing one new bicarbonate in the blood per hydrogen ion excreted.'
      }
    },
    {
      id: 'lo-7',
      isCritical: false,
      title: 'Given a sudden increase or decrease in pH, identify the magnitude and the time course of the compensations that act to minimize change in pH of the body fluids, including a) buffers, b) respiratory adjustments, and c) renal adjustments.',
      keyPoints: [
        'a) Buffers - Time: seconds. Magnitude: small (limits but does not correct pH change). Mechanism: chemical equilibrium shift; H⁺ absorbed or released by HCO₃⁻, Hb, proteins, phosphate instantly',
        'b) Respiratory adjustments - Time: minutes to hours; full effect in hours. Magnitude: moderate (compensates ~50-75% of pH change). Mechanism: chemoreceptors detect pH/CO₂ change → alter ventilation. Acidosis → hyperventilation → ↓ pCO₂ → pH↑; Alkalosis → hypoventilation → ↑ pCO₂ → pH↓',
        'c) Renal adjustments - Time: begins within hours; maximal effect in 2-3 days. Magnitude: large (can fully restore pH). Mechanism: adjust H⁺ secretion, HCO₃⁻ reabsorption, NH₄⁺ excretion, and new HCO₃⁻ generation',
        'Order of defense: Buffers (seconds) → Respiratory (minutes-hours) → Renal (hours-days)',
        'Renal compensation for respiratory acidosis: HCO₃⁻ rises ~3.5-4 mmol/L per 10 mmHg rise in pCO₂ (chronic); for acute: only ~1 mmol/L per 10 mmHg (buffer only)',
        'Renal compensation for respiratory alkalosis: HCO₃⁻ falls ~4-5 mmol/L per 10 mmHg fall in pCO₂ (chronic); acute: ~2 mmol/L per 10 mmHg'
      ],
      officialDefinitions: [
        'Buffer systems (immediate response: seconds to minutes): Magnitude: small (only limits, but does not fully correct, pH changes). Time course: rapid (acts within seconds). Buffers are the first line of defense - they do not eliminate acids or bases from the body but temporarily neutralize them. Major systems: (1) Bicarbonate/carbonic acid buffer (extracellular) - most important due to regulation by lungs and kidneys. (2) Protein buffer system - proteins (e.g., hemoglobin, albumin) contain ionizable groups; Hb binds H⁺ and functions as a buffer. (3) Phosphate buffer system - works in kidneys and inside cells; HPO₄²⁻ + H⁺ ⇌ H₂PO₄⁻; important in urine acidification. (4) Ammonia (NH₃/NH₄⁺) buffer system (renal) - NH₃ + H⁺ ⇌ NH₄⁺. Key role: act immediately to minimize drastic pH changes but cannot completely restore pH.',
        'Respiratory adjustments (intermediate response: minutes to hours): Magnitude: moderate (compensates for 50-75% of pH changes). Time course: starts within minutes, reaches full effect in hours. Mechanism: acidosis (↑ H⁺, ↑ CO₂) → hyperventilation → faster, deeper breathing removes CO₂ reducing carbonic acid levels and increasing pH. Alkalosis (↓ H⁺, ↓ CO₂) → hypoventilation → slower breathing retains CO₂ and lowers pH. Compensation of acidosis: hyperventilation. Compensation of alkalosis: hypoventilation. Limitations: does not fully restore pH; less effective if lung function is impaired; does not eliminate non-volatile acids.',
        'Renal adjustments (slow but most effective response: hours to days): Magnitude: large (complete pH restoration possible). Time course: begins within hours, maximal effect in 2-3 days. Mechanism in acidosis: ↑ H⁺ secretion (via Na⁺/H⁺ exchanger and H⁺-ATPase), ↑ HCO₃⁻ reabsorption in proximal tubule, ↑ ammonium (NH₄⁺) excretion (glutamine metabolism generates NH₄⁺ and new HCO₃⁻), ↑ phosphate buffer excretion. Mechanism in alkalosis: ↓ H⁺ secretion → HCO₃⁻ excretion in urine, ↓ ammonium and phosphate buffer system activity. Key features: most powerful and complete compensation; long-lasting effects; slowest to act.',
        'Compensation overview: Respiratory acidosis/alkalosis → compensated by kidneys. Nonrespiratory (metabolic) acidosis/alkalosis → compensated by respiration (and kidneys). pH regulation hierarchy: (1) Buffers → (2) Respiration → (3) Kidneys.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: '3 mechanisms defend against sudden pH changes in sequence:',
            items: [
              'Chemical buffers (seconds) — HCO₃⁻, hemoglobin, proteins, and phosphate immediately absorb or release H⁺, limiting but not fully correcting the pH change. Magnitude: small',
              'Respiratory adjustments (minutes to hours) — chemoreceptors detect pH/CO₂ change and alter ventilation: acidosis → hyperventilation → ↓ pCO₂ → pH↑; alkalosis → hypoventilation → ↑ pCO₂ → pH↓. Compensates ~50-75% of the pH change',
              'Renal adjustments (hours to days, maximal at 2-3 days) — most powerful, can fully restore pH by adjusting H⁺ secretion, HCO₃⁻ reabsorption, NH₄⁺ production, and new HCO₃⁻ generation'
            ]
          },
          {
            type: 'paragraph',
            content: 'In chronic respiratory acidosis, each 10 mmHg rise in pCO₂ raises plasma HCO₃⁻ by 3.5-4 mmol/L through renal compensation. In chronic respiratory alkalosis, each 10 mmHg fall lowers HCO₃⁻ by 4-5 mmol/L.'
          }
        ],
        raw: 'Three mechanisms defend against sudden pH changes in sequence. First, chemical buffers act within seconds: bicarbonate, hemoglobin, proteins, and phosphate immediately absorb or release hydrogen ions, limiting but not fully correcting the pH change. Second, respiratory adjustments begin within minutes and reach full effect within hours. Peripheral and central chemoreceptors detect the pH or carbon dioxide change and alter ventilation: in acidosis hyperventilation blows off carbon dioxide, reducing carbonic acid and raising pH; in alkalosis hypoventilation retains carbon dioxide and lowers pH. Respiratory compensation moderates approximately 50 to 75 percent of the pH change. Third, renal adjustments begin within hours and are maximal after 2 to 3 days. The kidneys are most powerful and can fully restore pH by adjusting hydrogen ion secretion, bicarbonate reabsorption, ammonium production, and new bicarbonate generation. In chronic respiratory acidosis, each 10 millimeter mercury rise in partial pressure of carbon dioxide raises plasma bicarbonate by 3.5 to 4 millimoles per liter through renal compensation. In chronic respiratory alkalosis, each 10 millimeter mercury fall lowers bicarbonate by 4 to 5 millimoles per liter.'
      }
    },
    {
      id: 'lo-8',
      isCritical: false,
      title: 'From blood values, identify simple and mixed metabolic and respiratory acid-base disturbances. Distinguish between increased and normal anion gap metabolic acidosis.',
      keyPoints: [
        'Step 1: pH - acidosis (< 7.37) or alkalosis (> 7.43). Step 2: pCO₂ - respiratory component (normal 35-45 mmHg). Step 3: HCO₃⁻ - metabolic component (normal 22-26 mmol/L). Step 4: Identify primary disturbance',
        'Respiratory acidosis: ↑ pCO₂ → ↓ pH. Respiratory alkalosis: ↓ pCO₂ → ↑ pH. Primary change is pCO₂; pH and pCO₂ move in opposite directions',
        'Metabolic acidosis: ↓ HCO₃⁻ → ↓ pH. Metabolic alkalosis: ↑ HCO₃⁻ → ↑ pH. Primary change is HCO₃⁻; pH and HCO₃⁻ move in same direction',
        'Anion gap (AG) = [Na⁺] − ([Cl⁻] + [HCO₃⁻]). Normal: 8-12 mmol/L (unmeasured anions: albumin, phosphate, sulfate)',
        'Increased AG metabolic acidosis (> 12 mmol/L): accumulation of unmeasured anions. Causes: diabetic ketoacidosis, lactic acidosis (shock, sepsis), renal failure (sulfate/phosphate retention), toxins (methanol, ethylene glycol, salicylates)',
        'Normal AG metabolic acidosis (hyperchloremic, 8-12 mmol/L): HCO₃⁻ replaced by Cl⁻. Causes: diarrhea (HCO₃⁻ loss in stool), renal tubular acidosis, carbonic anhydrase inhibitors, Addison\'s disease'
      ],
      examAnswer: {
        formatted: [
          {
            type: 'steps',
            intro: 'Diagnostic approach from blood values:',
            items: [
              'Assess pH: <7.37 = acidosis; >7.43 = alkalosis',
              'Check pCO₂: if pH and pCO₂ move in opposite directions → respiratory disorder (respiratory acidosis: ↑ pCO₂, ↓ pH; respiratory alkalosis: ↓ pCO₂, ↑ pH)',
              'Check HCO₃⁻: if pH and HCO₃⁻ move in the same direction → metabolic disorder (metabolic acidosis: both ↓; metabolic alkalosis: both ↑)',
              'Mixed disturbances involve 2 primary disorders simultaneously'
            ]
          },
          {
            type: 'list',
            intro: 'Anion gap (AG) = [Na⁺] − ([Cl⁻] + [HCO₃⁻]); normal: 8-12 mmol/L:',
            items: [
              'Increased AG (>12 mmol/L) — unmeasured anions accumulated: diabetic ketoacidosis, lactic acidosis, renal failure, toxic ingestions (methanol, aspirin)',
              'Normal AG (hyperchloremic) — HCO₃⁻ replaced by Cl⁻: diarrhea, renal tubular acidosis, carbonic anhydrase inhibitors'
            ]
          }
        ],
        raw: 'To identify an acid-base disturbance from blood values, assess pH first: below 7.37 is acidosis, above 7.43 is alkalosis. Then check the partial pressure of carbon dioxide - if pH and partial pressure of carbon dioxide move in opposite directions, the primary disorder is respiratory: in respiratory acidosis it rises and pH falls; in respiratory alkalosis it falls and pH rises. Then check bicarbonate - if pH and bicarbonate move in the same direction, the disorder is metabolic: in metabolic acidosis both fall, in metabolic alkalosis both rise. Mixed disturbances involve two primary disorders simultaneously. To distinguish metabolic acidosis subtypes, calculate the anion gap as sodium minus the sum of chloride and bicarbonate - normal is 8 to 12 millimoles per liter. An increased anion gap above 12 means unmeasured anions have accumulated: causes include diabetic ketoacidosis, lactic acidosis, renal failure, and toxic ingestions such as methanol or aspirin. A normal anion gap metabolic acidosis means bicarbonate has been replaced by chloride: causes include diarrhea, renal tubular acidosis, and carbonic anhydrase inhibitors.'
      }
    },
    {
      id: 'lo-9',
      isCritical: false,
      title: 'Describe the renal and respiratory compensations of acid-base disturbances.',
      keyPoints: [
        'Metabolic acidosis: Respiratory compensation - hyperventilation (Kussmaul breathing) ↓ pCO₂; begins within minutes. Renal: ↑ H⁺ secretion, ↑ NH₄⁺ and TA excretion, ↑ new HCO₃⁻ generation; maximal in 2-3 days',
        'Metabolic alkalosis: Respiratory compensation - hypoventilation → ↑ pCO₂ to lower pH; limited by hypoxia (pCO₂ rarely exceeds 55 mmHg). Renal: ↓ H⁺ secretion, ↓ HCO₃⁻ reabsorption → bicarbonaturia; depends on volume and K⁺ status',
        'Respiratory acidosis: NO respiratory compensation (lungs are the cause). Renal compensation: ↑ H⁺ secretion, ↑ NH₄⁺ excretion, ↑ HCO₃⁻ reabsorption → new HCO₃⁻ generated. Acute: HCO₃⁻ ↑ ~1 mmol/L per 10 mmHg pCO₂ rise (buffers only); Chronic (3-5 days): HCO₃⁻ ↑ ~3.5-4 mmol/L per 10 mmHg pCO₂ rise',
        'Respiratory alkalosis: NO respiratory compensation (lungs are the cause). Renal compensation: ↓ H⁺ secretion, ↓ HCO₃⁻ reabsorption, ↑ bicarbonate excretion. Acute: HCO₃⁻ ↓ ~2 mmol/L per 10 mmHg pCO₂ fall; Chronic: ↓ ~4-5 mmol/L per 10 mmHg pCO₂ fall',
        'Key rule: compensation never fully corrects pH back to 7.40 - it only limits the deviation. Full correction requires treatment of the primary cause',
        'Nonrespiratory (metabolic) disorders: compensated by respiratory system (fast) + kidneys (slow). Respiratory disorders: compensated by kidneys only (no secondary respiratory compensation possible)'
      ],
      officialDefinitions: [
        'Metabolic acidosis (↓ HCO₃⁻ → ↓ pH): Cause: loss of HCO₃⁻ (e.g., diarrhea, renal failure) or accumulation of acids (e.g., lactic acidosis, ketoacidosis). Respiratory compensation (immediate): hyperventilation (Kussmaul breathing) → ↓ paCO₂ to reduce acidity. Follows Winter\'s formula: expected paCO₂ = (1.5 × HCO₃⁻) + 8 ± 2. Renal compensation (takes days): ↑ H⁺ secretion (proximal and distal tubules), ↑ NH₄⁺ and titratable acid excretion, new HCO₃⁻ generation; goal: restore HCO₃⁻ and eliminate excess acid.',
        'Metabolic alkalosis (↑ HCO₃⁻ → ↑ pH): Cause: excessive HCO₃⁻ (e.g., prolonged vomiting, diuretics) or loss of H⁺ (e.g., hypokalemia). Respiratory compensation (immediate): hypoventilation → ↑ paCO₂; goal: retain CO₂ to lower pH; limited by hypoxia - paCO₂ rarely exceeds 55 mmHg. Renal compensation (delayed): ↓ H⁺ secretion, ↓ HCO₃⁻ reabsorption → ↑ urinary bicarbonate loss; depends on volume status (hypovolemia promotes HCO₃⁻ reabsorption) and electrolytes (hypokalemia and aldosterone promote HCO₃⁻ retention).',
        'Respiratory acidosis (↑ paCO₂ → ↓ pH): Acute phase: immediate buffering by intracellular proteins and HCO₃⁻; small ↑ in [HCO₃⁻] (~1 mEq per 10 mmHg ↑ paCO₂). Renal compensation (after 3-5 days): ↑ H⁺ secretion, ↑ NH₃ and titratable acid excretion, ↑ new HCO₃⁻ generation; larger ↑ in [HCO₃⁻] (~3.5-4 mEq/L per 10 mmHg ↑ paCO₂). Respiratory compensation: none - lungs are the origin of the problem.',
        'Respiratory alkalosis (↓ paCO₂ → ↑ pH): Cause: hyperventilation (e.g., anxiety, high altitude, fever) → excessive CO₂ loss → increasing pH. Acute phase: immediate buffering; small ↓ in plasma HCO₃⁻ (~2 mEq/L per 10 mmHg ↓ paCO₂). Renal compensation (after 2-3 days): ↓ H⁺ secretion, ↓ HCO₃⁻ reabsorption → ↑ bicarbonate loss in urine; plasma HCO₃⁻ drops ~4-5 mEq/L per 10 mmHg ↓ paCO₂. Respiratory compensation: none - lungs cause the disorder.',
        'Compensation overview: Respiratory disorder → compensated by kidneys. Nonrespiratory disorder → compensated by respiration (and kidneys). Buffers act first → respiration adjusts → kidneys provide final correction.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            items: [
              'Metabolic acidosis — respiratory: hyperventilation (Kussmaul breathing) ↓ pCO₂ immediately. Renal: ↑ H⁺ secretion, ↑ NH₄⁺ and TA excretion, ↑ new HCO₃⁻ generation over 2-3 days',
              'Metabolic alkalosis — respiratory: hypoventilation ↑ pCO₂ to oppose alkalosis (limited by hypoxia; pCO₂ rarely exceeds 55 mmHg). Renal: ↓ H⁺ secretion → HCO₃⁻ spills into urine',
              'Respiratory acidosis — no respiratory compensation (lungs are the cause). Renal: over 3-5 days, ↑ H⁺ secretion and new HCO₃⁻ generation; chronic: HCO₃⁻ ↑ 3.5-4 mmol/L per 10 mmHg pCO₂ rise',
              'Respiratory alkalosis — no respiratory compensation. Renal: ↓ H⁺ secretion, ↓ HCO₃⁻ reabsorption; chronic: HCO₃⁻ ↓ 4-5 mmol/L per 10 mmHg pCO₂ fall'
            ]
          },
          {
            type: 'paragraph',
            content: 'Compensation always reduces but never fully corrects the pH abnormality.'
          }
        ],
        raw: 'In metabolic acidosis, the respiratory system compensates immediately by hyperventilation - Kussmaul breathing lowers the partial pressure of carbon dioxide to reduce carbonic acid and raise pH. The kidneys compensate over 2 to 3 days by increasing hydrogen ion secretion, ammonium and titratable acid excretion, and generating new bicarbonate. In metabolic alkalosis, the respiratory compensation is hypoventilation retaining carbon dioxide to oppose the alkalosis - but this is limited by hypoxia so the partial pressure of carbon dioxide rarely exceeds 55 millimeters mercury. Renal compensation decreases hydrogen ion secretion, allowing bicarbonate to spill into urine. In respiratory acidosis, the lungs are the problem so there is no respiratory compensation - the kidneys respond over 3 to 5 days by increasing hydrogen ion secretion and generating new bicarbonate, raising plasma bicarbonate by 3.5 to 4 millimoles per liter for each 10 millimeter mercury rise in partial pressure of carbon dioxide. In respiratory alkalosis, the kidneys decrease hydrogen ion secretion and bicarbonate reabsorption, lowering plasma bicarbonate by 4 to 5 millimoles per liter per 10 millimeter mercury fall chronically. Compensation always reduces but never fully corrects the pH abnormality.'
      }
    }
  ],
  referenceValues: [
    {
      parameter: 'Arterial blood pH',
      value: '7.37-7.43',
      isCritical: true
    },
    {
      parameter: 'Standard bicarbonate',
      value: '24 mmol/L',
      isCritical: true
    },
    {
      parameter: 'Buffer base (BB)',
      value: '44-49 mmol/L',
      isCritical: true
    },
    {
      parameter: 'Base excess (BE)',
      value: '+2.5 to −2.5 mmol/L',
      isCritical: true
    },
    {
      parameter: 'Anion gap',
      value: '8-12 mmol/L',
      isCritical: false
    },
    {
      parameter: 'Nonvolatile acid production',
      value: '50-100 mmol/day',
      isCritical: false
    },
    {
      parameter: 'Urine pH',
      value: '4.0-8.0',
      isCritical: false
    },
    {
      parameter: 'Tubular bicarbonate "reabsorption"',
      value: '4300 mmol/day',
      isCritical: false
    },
    {
      parameter: 'New bicarbonate production',
      value: '50-100 mmol/day',
      isCritical: false
    }
  ]
};

export default topic82;
// end of topic82
