const topic80 = {
  id: 'topic-80',
  mcqs: ['mcq-5'],
  number: 80,
  title: 'The regulation of K⁺ metabolism',
  subtitle:
    'Potassium homeostasis involves tight regulation of intake, distribution between intracellular and extracellular compartments, and renal excretion - with aldosterone as the vital regulator of collecting duct secretion.',

  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: false,
      title:
        'Identify the normal range of dietary K⁺ intake and major routes of K⁺ loss from the body',
      keyPoints: [
        'Daily K⁺ intake/loss: 50-100 mmol/day - both input and output must balance',
        'Dietary sources: food and drinks containing potassium (bananas, potatoes, citrus fruits, beans, dairy)',
        'Urine: primary route of excretion - 45-90 mmol/day; controlled by aldosterone-driven renal regulation',
        'Stool and sweat: secondary routes - approximately 10 mmol/day combined; NOT tightly regulated',
        'GI absorption: passive paracellular transport in small intestine; nearly all ingested K⁺ is absorbed - absorption is NOT controlled',
        'K⁺ metabolism is controlled through regulation of EXCRETION, not absorption',
      ],
      officialDefinitions: [
        'K⁺ intake (dietary): Food/drinks: 50-100 mmol/day. Total intake: 50-100 mmol/day.',
        'K⁺ excretion (routes of loss): Urine: 45-90 mmol/day. Stool, sweat: ~10 mmol/day. Total excretion: 50-100 mmol/day.',
        'K⁺ absorption: Absorption from the gastrointestinal system (GIS) is NOT controlled. Absorbed K⁺ will be taken up into the intracellular (IC) space, from where it is continuously replenishing the extracellular (EC) K⁺ reduced by urine excretion.',
        'K⁺ metabolism control: K⁺ metabolism is controlled through the regulation of EXCRETION.',
        'Normal serum K⁺: normal serum K⁺ = 4 mmol/L (3.5-5.2 mmol/L). Hyperkalemia >5.5 mmol/L (>6.5 mmol/L). Hypokalemia <3.5 mmol/L.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'The normal range of dietary K⁺ intake is 50-100 mmol/day. Almost all ingested K⁺ is absorbed from the gastrointestinal tract, and this absorption is not regulated.'
          },
          {
            type: 'list',
            intro: 'Major routes of K⁺ loss:',
            items: [
              'Urine — ~45-90 mmol/day, regulated primarily through aldosterone-driven tubular secretion',
              'Stool and sweat — ~10 mmol/day combined, not controlled'
            ]
          }
        ],
        raw: 'The normal range of dietary potassium intake is 50 to 100 millimoles per day. Almost all ingested potassium is absorbed from the gastrointestinal tract, and this absorption is not regulated. The major route of potassium loss is the urine, accounting for approximately 45 to 90 millimoles per day, regulated primarily through aldosterone-driven tubular secretion. An additional approximately 10 millimoles per day is lost via the stool and sweat, but these routes are not controlled.'
      },
    },

    {
      id: 'lo-2',
      isCritical: false,
      title:
        'Define the role of extracellular K⁺ in maintaining normal nerve, heart muscle and skeletal muscle function',
      keyPoints: [
        'Resting membrane potential (RMP): EC K⁺ concentration is the primary determinant of RMP in excitable tissues via the Nernst equation for K⁺',
        'Hyperkalemia (EC K⁺ > 5.5 mmol/L): reduces K⁺ equilibrium potential (E_K+) → membrane depolarization → increased excitability initially, then prolonged Na⁺ channel inactivation → arrhythmias, weakness, paralysis',
        'Hypokalemia (EC K⁺ < 3.5 mmol/L): elevates K⁺ permeability or lowers E_K+ → membrane hyperpolarization → decreased excitability → arrhythmias, fatigue, muscle weakness, cramps',
        'Cardiac muscle: K⁺ regulates pacemaker activity and repolarization; both hypo- and hyperkalemia cause life-threatening arrhythmias',
        'Skeletal muscle: K⁺ imbalance causes weakness, cramps, paralysis; constipation and numbness/tingling also seen',
        'Symptoms of hypo- and hyperkalemia can be SIMILAR: life-threatening arrhythmias, fatigue, muscle weakness, cramps, constipation, numbness/tingling',
      ],
      officialDefinitions: [
        'Extracellular K⁺ and resting membrane potential (RMP): Changes in EC K⁺ concentration elicit symptoms that can be explained due to altered resting membrane potential (RMP). Affects chiefly EXCITABLE tissues.',
        'Hyperkalemia effect: Hyperkalemia reduces E_K⁺. Both hyperkalemia and hypokalemia induce DEPOLARIZATION (hyperkalemia reduces K⁺ equilibrium potential; hypokalemia reduces K⁺- and/or elevates Na⁺ permeability).',
        'Symptoms of hypo/hyperkalemia: Symptoms of hypo/hyperkalemia can be similar: life-threatening ARRHYTHMIAS, fatigue, muscle weakness, cramps, constipation, numbness/tingling.',
        'Nernst equation relevance: E_K⁺ = −61 · log(K⁺_i / K⁺_o) mV. The resting membrane potential (RMP) of cardiac muscle fiber is directly dependent on the K⁺ gradient.',
        'Tissue specificity: Changes in EC K⁺ concentration primarily affect excitable tissues: nerve cells (essential for neurotransmission), skeletal muscles (for contraction), and cardiac muscles (for coordinated heartbeats). The Na⁺/K⁺ ATPase pump actively transports 3 Na⁺ out and 2 K⁺ in, maintaining a high intracellular K⁺ concentration and a negative RMP.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'EC K⁺ concentration is the primary determinant of the resting membrane potential in all excitable tissues — nerves, cardiac muscle, and skeletal muscle — as described by the Nernst equation. Normal EC K⁺ is 3.5-5.2 mmol/L.'
          },
          {
            type: 'list',
            items: [
              'Hyperkalemia (>5.5 mmol/L): reduces K⁺ equilibrium potential toward zero, depolarizing the membrane → arrhythmias, muscle weakness, and paralysis',
              'Hypokalemia (<3.5 mmol/L): hyperpolarizes the membrane, reducing excitability → arrhythmias, fatigue, muscle weakness, cramps, and constipation'
            ]
          },
          {
            type: 'paragraph',
            content: 'Importantly, symptoms of both hypo- and hyperkalemia can be similar and life-threatening.'
          }
        ],
        raw: 'Extracellular potassium concentration is the primary determinant of the resting membrane potential in all excitable tissues - nerves, cardiac muscle, and skeletal muscle - as described by the Nernst equation. Normal extracellular potassium is 3.5 to 5.2 millimoles per liter. Hyperkalemia, defined as above 5.5 millimoles per liter, reduces the potassium equilibrium potential toward zero, depolarizing the membrane and causing arrhythmias, muscle weakness, and paralysis. Hypokalemia, below 3.5 millimoles per liter, hyperpolarizes the membrane, reducing excitability, and also causes arrhythmias, fatigue, muscle weakness, cramps, and constipation. Importantly, symptoms of both hypo- and hyperkalemia can be similar and life-threatening.'
      },
    },

    {
      id: 'lo-3',
      isCritical: false,
      title:
        'Describe K⁺ distribution within the body, extrarenal K⁺ homeostasis, and the role insulin, epinephrine, and aldosterone play in the movement of K⁺ between intracellular and extracellular pools. Describe the K⁺ shift caused by acidosis',
      keyPoints: [
        'Total body K⁺: approximately 6.1 mol (240 g); 98% is INTRACELLULAR (mainly muscle, liver, red blood cells); only 2% extracellular',
        'Extracellular K⁺: approximately 80 mmol = 4 mmol/L × 20 L; normal serum K⁺ = 3.5-5.2 mmol/L',
        'Insulin: stimulates Na⁺/K⁺-ATPase in target cells → K⁺ uptake into cells → prevents postprandial hyperkalemia; triggered by K⁺ absorbed from gut',
        'Epinephrine: activates β₂-adrenergic receptors → increases Na⁺/K⁺-ATPase activity → K⁺ uptake into cells; prevents hyperkalemia during exercise/stress; β-blockers impair this effect',
        'Aldosterone: primarily a RENAL hormone - increases K⁺ excretion; extrarenal effect is modest compared to insulin/epinephrine',
        'Thyroid hormones (T3/T4): also promote K⁺ cellular uptake via Na⁺/K⁺-ATPase stimulation',
        'Acidosis K⁺ shift: H⁺ enters cells (to be buffered) in exchange for K⁺ leaving cells → EC K⁺ rises (hyperkalemia); also inhibits Na⁺/K⁺-ATPase; alkalosis causes the reverse - K⁺ shifts INTO cells → hypokalemia',
      ],
      officialDefinitions: [
        'Total body K⁺ content and distribution: The body contains approximately 6.1 mol = 240 g K⁺. 98% of K⁺ are found INTRACELLULAR. Extracellular K⁺: 80 mmol = (4 mmol/L) × 20 L.',
        'K⁺ absorption and IC uptake: K⁺ absorption occurs in the small intestine mainly by passive paracellular transport. Absorbed K⁺ stimulates INSULIN secretion; insulin in turn stimulates K⁺ uptake of target cells. In addition to insulin, T4/T3 and β-adrenergic agonists possess similar effects.',
        'Role of insulin: Insulin stimulates K⁺ uptake into cells after a meal by increasing Na⁺-K⁺ ATPase activity. This prevents dangerous postprandial hyperkalemia.',
        'Role of epinephrine (β-adrenergic agonists): β-adrenergic agonists stimulate K⁺ uptake into cells by activating β2-adrenergic receptors, which increase Na⁺-K⁺ ATPase activity. During exercise or stress, epinephrine prevents hyperkalemia by shifting K⁺ into cells.',
        'Role of aldosterone: Aldosterone increases K⁺ excretion by stimulating Na⁺ reabsorption and K⁺ secretion in the distal nephron. Aldosterone controls gene expression (Na/K pump, ENaC, ROMK) by binding to the mineralocorticoid receptor (MR). Specificity is ensured by a unique pre-receptor mechanism, as the enzyme 11β-BHSDH inactivates cortisol. Total aldosterone deficiency causes lethal hyperkalemia.',
        'K⁺ shift caused by acidosis: EC pH and K⁺ are inversely coupled to each other: acidosis ↔ hyperkalemia, alkalosis ↔ hypokalemia. Causes: EC-IC K⁺ shift (H⁺ enters cells in exchange for K⁺, leading to increased extracellular K⁺; H⁺ also inhibits Na⁺-K⁺ ATPase, further reducing K⁺ uptake into cells), and in the collecting duct H⁺ secretion is coupled to K⁺ reabsorption.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Total body K⁺ is ~6.1 mol, of which 98% is intracellular — mainly in skeletal muscle, liver, and red blood cells — and only 2% is extracellular (~80 mmol), giving a plasma concentration of 3.5-5.2 mmol/L.'
          },
          {
            type: 'list',
            intro: 'Extrarenal K⁺ homeostasis is maintained by hormones that shift K⁺ between compartments:',
            items: [
              'Insulin — secreted after a meal in response to absorbed K⁺, stimulates the Na⁺-K⁺-ATPase in muscle and liver cells, driving K⁺ into cells and preventing dangerous postprandial hyperkalemia',
              'Epinephrine — acts through β₂-adrenergic receptors to similarly increase Na⁺-K⁺-ATPase activity, shifting K⁺ into cells during exercise and stress',
              'Aldosterone — primarily acts on the kidney to increase renal K⁺ excretion'
            ]
          },
          {
            type: 'paragraph',
            content: 'In acidosis, H⁺ enters cells to be buffered intracellularly, and in exchange K⁺ exits the cells, raising EC K⁺ and causing hyperkalemia. Alkalosis causes the reverse shift, with K⁺ moving into cells and producing hypokalemia.'
          }
        ],
        raw: 'The total body potassium content is approximately 6.1 moles, of which 98% is intracellular - found mainly in skeletal muscle, liver, and red blood cells - and only 2% is extracellular, approximately 80 millimoles, giving a plasma concentration of 3.5 to 5.2 millimoles per liter. Extrarenal potassium homeostasis is maintained by hormones that shift potassium between compartments. Insulin, secreted after a meal in response to absorbed potassium, stimulates the sodium-potassium-ATPase in muscle and liver cells, driving potassium into cells and preventing dangerous postprandial hyperkalemia. Epinephrine acts through beta-2 adrenergic receptors to similarly increase sodium-potassium-ATPase activity, shifting potassium into cells during exercise and stress. Aldosterone primarily acts on the kidney to increase renal potassium excretion. In acidosis, hydrogen ions enter cells to be buffered intracellularly, and in exchange potassium ions exit the cells, raising extracellular potassium and causing hyperkalemia. Alkalosis causes the reverse shift, with potassium moving into cells and producing hypokalemia.'
      },
    },

    {
      id: 'lo-4',
      isCritical: false,
      title:
        'Calculate the normal filtered load of K⁺. Identify the tubular sites of K⁺ reabsorption and secretion',
      keyPoints: [
        'Filtered load of K⁺ = GFR × plasma K⁺ = 180 L/day × 4 mmol/L = 720 mmol/day',
        'Proximal tubule (PCT): reabsorbs ~65% of filtered K⁺ - passive transport driven by Na⁺ and water reabsorption',
        'Thick ascending limb (TAL): reabsorbs ~25% of filtered K⁺ - via Na⁺/K⁺/2Cl⁻ cotransporter (NKCC2); minimal secretion to lumen',
        'Together PCT + TAL: ~90% (approximately 650 mmol/day) is automatically reabsorbed before the distal nephron',
        'Cortical collecting duct (CCD) - PRINCIPAL CELLS: K⁺ SECRETION - primary active uptake via basolateral Na⁺/K⁺-ATPase, passive diffusion into lumen via ROMK K⁺ channels (controlled by aldosterone)',
        'Cortical collecting duct - A-TYPE INTERCALATED CELLS: K⁺ REABSORPTION - active transport via luminal H⁺/K⁺-ATPase, passive diffusion through basolateral K⁺ channels; activated when dietary K⁺ is low',
        'Excreted amount: can vary between 3-200% of filtered amount (approximately 20-1400 mmol/day) - large safety margin against hyperkalemia',
      ],
      officialDefinitions: [
        'Filtered load of K⁺ calculation: K⁺ is freely filtered. Filtered amount = GFR × P_K = 180 L/day × 4 mmol/L = 720 mmol/day.',
        'Proximal convoluted tubule (PCT): Reabsorbs ~65% of filtered K⁺. Passive transport, driven by Na⁺ and water reabsorption. Minimal secretion to lumen.',
        'Thick ascending limb (TAL): Reabsorbs ~25% of the filtered amount. Na⁺-K⁺-2Cl⁻ cotransporter (NKCC2) mediates active K⁺ reabsorption.',
        'Collecting duct (outer medullary segment): 90% of filtered amount (~650 mmol/day) is automatically reabsorbed until the distal nephron (65% PCT, 25% TAL). In the collecting duct segment of the outer medulla, tubular secretion of K⁺ greatly exceeding the filtered amount is possible, BUT further net absorption is also a possibility. Excreted amount can vary between 3-200% of filtered amount (~20-1400 mmol/day), ensuring a large safety margin to prevent hyperkalemia.',
        'K⁺ secretion in principal cells of collecting duct: Primary active transport through the basolateral Na⁺/K⁺ pump, passive diffusion through luminal ROMK K⁺-channels (controlled by aldosterone).',
        'K⁺ reabsorption in A-type intercalated cells of collecting duct: Primary active transport through luminal H⁺/K⁺ pump, passive diffusion through basolateral K⁺-channels (controlled directly by EC K⁺).'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Filtered load of K⁺ = GFR × plasma K⁺ = 180 L/day × 4 mmol/L = 720 mmol/day.'
          },
          {
            type: 'list',
            intro: '~90% (~650 mmol/day) is automatically reabsorbed before the distal nephron:',
            items: [
              '~65% in the proximal convoluted tubule — passive transport coupled to Na⁺ and water reabsorption',
              '~25% in the thick ascending limb — via the Na⁺-K⁺-2Cl⁻ cotransporter NKCC2'
            ]
          },
          {
            type: 'list',
            intro: 'In the cortical collecting duct, 2 cell types control fine regulation:',
            items: [
              'Principal cells — K⁺ secretion via the basolateral Na⁺-K⁺-ATPase and passive diffusion through luminal ROMK K⁺ channels, controlled by aldosterone',
              'α-type intercalated cells — K⁺ reabsorption through a luminal H⁺-K⁺-ATPase, activated during K⁺ depletion'
            ]
          },
          {
            type: 'paragraph',
            content: 'The excreted amount can range from 3-200% of the filtered load, providing a large safety margin to prevent hyperkalemia.'
          }
        ],
        raw: 'The normal filtered load of potassium is calculated as GFR multiplied by plasma potassium: 180 liters per day times 4 millimoles per liter equals 720 millimoles per day. Approximately 90% of this - around 650 millimoles per day - is automatically reabsorbed before the distal nephron, with 65% in the proximal convoluted tubule by passive transport coupled to sodium and water reabsorption, and 25% in the thick ascending limb via the sodium-potassium-2-chloride cotransporter NKCC2. In the cortical collecting duct, two cell types control fine regulation: principal cells perform potassium secretion via the basolateral sodium-potassium-ATPase and passive diffusion through luminal ROMK potassium channels, controlled by aldosterone. In conditions of potassium depletion, alpha-type intercalated cells reabsorb potassium through a luminal hydrogen-potassium-ATPase. The excreted amount can range from 3 to 200% of the filtered load, providing a large safety margin to prevent hyperkalemia.'
      },
    },

    {
      id: 'lo-5',
      isCritical: true,
      title:
        '>>Describe the factors that regulate K⁺ secretion in the collecting duct<< (i.e., aldosterone, plasma K⁺) >>and distinguish these from factors that alter secretion at this site<< (i.e., luminal fluid flow rate, acid-base disturbances, anion delivery)',
      keyPoints: [
        'PRIMARY REGULATORS (directly control the secretory capacity):',
        'Aldosterone: binds mineralocorticoid receptor (MR) in principal cells → increases gene expression of Na⁺/K⁺-ATPase, ENaC, and ROMK channels → increases K⁺ secretion; specificity ensured by 11β-hydroxysteroid dehydrogenase (11BHSDH) which inactivates cortisol before it can activate MR; total aldosterone deficiency causes lethal hyperkalemia',
        'Plasma K⁺: directly stimulates K⁺ secretion by (1) stimulating Na⁺/K⁺-ATPase, (2) increasing K⁺ gradient, (3) increasing synthesis of ROMK K⁺ channels, (4) stimulating aldosterone secretion from adrenal cortex zona glomerulosa',
        'MODIFYING FACTORS (alter secretion without changing the intrinsic secretory machinery):',
        'Luminal fluid flow rate: high flow (e.g., from diuretics acting before collecting duct - furosemide, thiazides) flushes out secreted K⁺ preventing concentration buildup → increases K⁺ secretion; also activates BK (large-conductance) channels; causes hypokalemia → these diuretics require dietary K⁺ supplementation; K⁺-sparing diuretics (amiloride, spironolactone) act on the collecting duct and do NOT increase flow-dependent K⁺ loss',
        'Acid-base disturbances: alkalosis increases K⁺ secretion (H⁺ exits cells → K⁺ enters cells, lowering EC K⁺, but also direct tubular effect); acidosis decreases K⁺ secretion and couples H⁺ secretion to K⁺ reabsorption in intercalated cells (H⁺/K⁺-ATPase); acidosis ↔ hyperkalemia, alkalosis ↔ hypokalemia',
        'Luminal anion delivery: large non-reabsorbable anions (e.g., HCO₃⁻, sulfate) in the lumen increase electronegativity of tubular lumen → increased electrochemical driving force for K⁺ secretion',
      ],
      officialDefinitions: [
        'Principal cells - mechanism of K⁺ secretion: The cells in the collecting duct that secrete K⁺ are called principal cells. The secretion process is a two-step process: (1) Uptake of K⁺ from interstitium by Na⁺/K⁺ ATPase pump. (2) Passive diffusion into the tubular lumen by ROMK and BK channels.',
        'REGULATOR - Aldosterone: Aldosterone controls gene expression (Na/K pump, ENaC, ROMK) by binding to the mineralocorticoid receptor (MR). Specificity is ensured by the unique pre-receptor mechanism - the enzyme 11β-BHSDH inactivates cortisol. Aldosterone stimulates Na⁺/K⁺ ATPase and increases the number of K⁺ channels, increasing permeability. Total aldosterone deficiency causes lethal hyperkalemia.',
        'REGULATOR - Plasma K⁺ concentration: Increased ECF K⁺ concentration stimulates K⁺ secretion via: (1) Na⁺/K⁺ ATPase stimulation, (2) increased K⁺ gradient, (3) synthesis of K⁺ channels, (4) stimulation of aldosterone secretion. K⁺ reabsorption in A-type intercalated cells is controlled directly by EC K⁺ (via luminal H⁺/K⁺ pump).',
        'ALTERING FACTOR - Luminal fluid flow rate: Diuretics acting BEFORE the collecting duct INCREASE luminal flow in the collecting duct, therefore they also INCREASE K⁺ secretion → hypokalemia develops. These diuretics require dietary potassium supplement. Mechanism: increased flow flushes out secreted K⁺, preventing concentration buildup, and activates BK channels due to high flow, increasing K⁺ conductance. Diuretics acting on the collecting duct (ENaC inhibitor amiloride, and aldosterone-antagonist spironolactone) are, however, "K⁺-sparing" diuretics.',
        'ALTERING FACTOR - Acid-base disturbances: EC pH and K⁺ are inversely coupled to each other: acidosis ↔ hyperkalemia, alkalosis ↔ hypokalemia. Alkalosis increases K⁺ secretion (H⁺ leaves ECF, enters cells → K⁺ leaves cells to maintain electroneutrality). Acidosis decreases K⁺ secretion (H⁺ enters cells from ECF → K⁺ enters ECF to maintain electroneutrality). In the collecting duct, H⁺ secretion is coupled to K⁺ reabsorption.',
        'ALTERING FACTOR - Luminal anion delivery: Large anions (e.g., HCO₃⁻, sulfate) increase lumen electronegativity, enhancing the electrochemical driving force for K⁺ secretion into the tubular lumen.',
        'Intercalated cells - K⁺ reabsorption in K⁺ depletion: In severe K⁺ depletion, Type A intercalated cells reabsorb K⁺ through H⁺/K⁺ ATPase in the luminal membrane (linked to acidosis). In excess K⁺: Type B intercalated cells secrete K⁺ into the tubular lumen.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'The 2 primary regulators of K⁺ secretion in the collecting duct:',
            critical: true,
            items: [
              'Aldosterone — binds the mineralocorticoid receptor in principal cells and increases gene expression of Na⁺-K⁺-ATPase, ENaC, and ROMK K⁺ channels, increasing the capacity for K⁺ secretion. Specificity over cortisol is ensured by 11β-HSD, which inactivates cortisol before it can bind the receptor — total aldosterone deficiency causes lethal hyperkalemia',
              'Plasma K⁺ — directly stimulates K⁺ secretion by stimulating Na⁺-K⁺-ATPase, increasing the K⁺ gradient, upregulating ROMK channel synthesis, and stimulating aldosterone secretion from the adrenal cortex'
            ]
          },
          {
            type: 'list',
            intro: 'Modifying factors that alter secretion without changing the fundamental secretory capacity:',
            critical: true,
            items: [
              'Luminal fluid flow rate — high flow from diuretics acting upstream (furosemide, thiazides) flushes out secreted K⁺ and activates BK channels → increased secretion → hypokalemia; K⁺-sparing diuretics (amiloride, spironolactone) act on the collecting duct itself and do not increase flow-dependent K⁺ loss',
              'Acid-base disturbances — alkalosis increases K⁺ secretion, while acidosis decreases it by coupling H⁺ secretion to K⁺ reabsorption via the H⁺-K⁺-ATPase in intercalated cells',
              'Non-reabsorbable anion delivery — anions such as HCO₃⁻ or sulfate increase lumen electronegativity, enhancing the electrochemical driving force for K⁺ secretion'
            ]
          }
        ],
        raw: '>>The two primary regulators of potassium secretion in the collecting duct are aldosterone and plasma potassium concentration. Aldosterone binds to the mineralocorticoid receptor in principal cells and increases gene expression of the sodium-potassium-ATPase, ENaC sodium channels, and ROMK potassium channels, thereby increasing the capacity for potassium secretion. Specificity for aldosterone over cortisol is ensured by the enzyme 11-beta-hydroxysteroid dehydrogenase, which inactivates cortisol in the target cells before it can bind the receptor - total aldosterone deficiency causes lethal hyperkalemia. High plasma potassium directly stimulates potassium secretion by stimulating the sodium-potassium-ATPase, increasing the potassium gradient, upregulating ROMK channel synthesis, and stimulating aldosterone secretion from the adrenal cortex.<< >>Modifying factors that alter secretion at this site without changing the fundamental secretory capacity include: luminal fluid flow rate - high flow from diuretics acting upstream of the collecting duct, such as furosemide or thiazides, flushes out secreted potassium and activates BK channels, increasing secretion and causing hypokalemia; potassium-sparing diuretics like amiloride and spironolactone act on the collecting duct itself and do not increase flow-dependent potassium loss. Acid-base disturbances also modulate secretion - alkalosis increases potassium secretion, while acidosis decreases it by coupling hydrogen ion secretion to potassium reabsorption via the hydrogen-potassium-ATPase in intercalated cells. Delivery of non-reabsorbable anions such as bicarbonate or sulfate increases lumen electronegativity, enhancing the electrochemical driving force for potassium secretion.<<'
      },
    },
  ],

  referenceValues: [
    {
      parameter: 'K⁺ intake/loss',
      value: '50-100 mmol/day',
      isCritical: true,
    },
  ],
};

export default topic80;
// end of topic80
