const topic55 = {
  id: 'topic-55',
  mcqs: ['mcq-3'],
  number: 55,
  title: 'Tubular reabsorption and secretion. Renal clearance.',
  subtitle: 'This topic covers the fundamental tubular processes of reabsorption and secretion, along with the clearance principle used to characterize kidney function and determine GFR, RPF, and RBF.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: '>>Define tubular reabsorption and secretion<<',
      keyPoints: [
        'Tubular reabsorption: Transport of substances from tubular filtrate back into blood in peritubular capillaries/vasa recta',
        'Reabsorption mechanisms: Passive (diffusion, osmosis) and active (Na-K-ATPase, SGLT cotransporters)',
        'Reabsorption sites: PCT (bulk ~65-70%), loop of Henle (~25%), DCT/collecting duct (fine-tuning ~5-10%)',
        'Tubular secretion: Transfer of substances from peritubular blood into tubular filtrate',
        'Secretion purpose: Elimination of waste products, toxins, H+, K+, NH4+ for pH and electrolyte regulation',
        'Secretion sites: Primarily DCT and collecting ducts; also proximal tubule for organic acids/bases, PAH'
      ],
      officialDefinitions: [
        'Tubular Reabsorption: the process by which substances are transported from the filtrate in the renal tubules back into the blood in the peritubular capillaries or vasa recta. Purpose: ensures the recovery of essential substances such as water, glucose, amino acids, and ions (e.g., sodium, potassium, and chloride) that are needed to maintain homeostasis. Mechanisms: passive transport (diffusion and osmosis) and active transport (sodium-potassium ATPase pumps, co-transporters such as sodium-glucose co-transporter). Site: occurs throughout the nephron but predominantly in the proximal convoluted tubule (bulk reabsorption), the loop of Henle, and the distal convoluted tubule/collecting duct for fine-tuning.',
        'Tubular Secretion: the transfer of substances from the blood in the peritubular capillaries or vasa recta into the filtrate in the renal tubules. Purpose: helps in the elimination of waste products, toxins, and excess ions (e.g., hydrogen, potassium, and ammonium) to regulate pH and maintain electrolyte balance. Mechanisms: active transport (e.g., secretion of hydrogen ions) and passive diffusion. Site: primarily occurs in the distal convoluted tubule and collecting ducts, though some secretion occurs in the proximal tubule.',
        'About 99% of filtered water and more than 90% of the filtered substances will be resorbed. Additionally some substances will be secreted.',
        'Absorption: transport from some lumenal compartment back into blood. The fluid transported is either isotonic, or hypertonic to plasma. Secretion: transport from blood into a given lumenal compartment.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Definitions:',
            critical: true,
            items: [
              'Tubular reabsorption: transport of substances from filtrate in renal tubules back into blood in peritubular capillaries or vasa recta',
              'Tubular secretion: transfer of substances from blood in peritubular capillaries or vasa recta into filtrate in renal tubules'
            ]
          },
          {
            type: 'paragraph',
            content: 'Reabsorption ensures recovery of essential substances including water, glucose, amino acids, and ions such as sodium, potassium, and chloride. About 99 percent of filtered water and over 90 percent of filtered substances are reabsorbed. Reabsorption occurs by passive transport including diffusion and osmosis, and active transport using sodium-potassium ATPase and cotransporters. The primary site is the proximal tubule for bulk reabsorption, followed by loop of Henle and distal tubule for fine-tuning.'
          },
          {
            type: 'paragraph',
            content: 'Secretion eliminates waste products, toxins, and excess ions including hydrogen, potassium, and ammonium for pH and electrolyte regulation. Secretion occurs primarily in the distal tubule and collecting ducts.'
          }
        ],
        raw: '>>Tubular reabsorption is the process by which substances are transported from the filtrate in renal tubules back into blood in peritubular capillaries or vasa recta. Tubular secretion is the transfer of substances from blood in peritubular capillaries or vasa recta into the filtrate in renal tubules.<< Reabsorption ensures recovery of essential substances including water, glucose, amino acids, and ions such as sodium, potassium, and chloride. About 99 percent of filtered water and over 90 percent of filtered substances are reabsorbed. Reabsorption occurs by passive transport including diffusion and osmosis, and active transport using sodium-potassium ATPase and cotransporters. The primary site is the proximal tubule for bulk reabsorption, followed by loop of Henle and distal tubule for fine-tuning. Secretion eliminates waste products, toxins, and excess ions including hydrogen, potassium, and ammonium for pH and electrolyte regulation. Secretion occurs primarily in the distal tubule and collecting ducts.'
      },
        audioUrl: '/Audio/Topic-055/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: false,
      title: 'Calculate the filtered load, the excretion rate, and the net tubular reabsorption or the net tubular secretion of a freely filtrated X substance, given its plasma and urine concentrations, the GFR and the urine flow rate (minute diuresis)',
      keyPoints: [
        'Filtered Load (FL): FL = GFR × Plasma Concentration (Px); amount filtered per minute into Bowman\'s space',
        'Excretion Rate (ER): ER = Urine Concentration (Ux) × Urine Flow Rate (V); amount excreted per minute',
        'Net tubular transport: FL - ER determines net reabsorption or secretion',
        'Interpretation: If FL > ER → net tubular reabsorption; If FL < ER → net tubular secretion',
        'Example: Given Px = 3 mg/mL, Ux = 10 mg/mL, GFR = 125 mL/min, V = 2 mL/min',
        'Calculation: FL = 375 mg/min, ER = 20 mg/min, Net = 355 mg/min reabsorption'
      ],
      officialDefinitions: [
        'Filtered Load (FL): the amount of a substance filtered into the Bowman\'s space per minute. Formula: Filtered Load (FL) = GFR × Plasma Concentration (Px). Where FL is in mg/min or mmol/min, GFR is glomerular filtration rate in mL/min, and Px is plasma concentration of substance in mg/mL or mmol/mL.',
        'Excretion Rate (ER): the amount of a substance excreted in the urine per minute. Formula: Excretion Rate (ER) = Urine Concentration (Ux) × Urine Flow Rate (V). Where ER is in mg/min or mmol/min, Ux is urine concentration of substance in mg/mL or mmol/mL, and V is urine flow rate in mL/min.',
        'Net Tubular Reabsorption or Secretion: Formula: Net Reabsorption or Secretion = FL - ER. Interpretation: If FL > ER, net tubular reabsorption is occurring. If FL < ER, net tubular secretion is occurring.',
        'Example: Given plasma concentration = 3 mg/mL, urine concentration = 10 mg/mL, GFR = 125 mL/min, urine flow rate = 2 mL/min. Filtered Load = 125 × 3 = 375 mg/min. Excretion Rate = 10 × 2 = 20 mg/min. Net Reabsorption = 375 - 20 = 355 mg/min.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Formulas and calculations:',
            items: [
              'Filtered load = GFR × plasma concentration. Example: 125 mL/min × 3 mg/mL = 375 mg/min',
              'Excretion rate = urine concentration × urine flow rate. Example: 10 mg/mL × 2 mL/min = 20 mg/min',
              'Net tubular transport = filtered load − excretion rate. Example: 375 − 20 = 355 mg/min net reabsorption'
            ]
          },
          {
            type: 'list',
            intro: 'Interpretation:',
            items: [
              'If filtered load exceeds excretion rate → net tubular reabsorption',
              'If excretion rate exceeds filtered load → net tubular secretion'
            ]
          }
        ],
        raw: 'The filtered load equals GFR multiplied by plasma concentration of substance X. With GFR of 125 milliliters per minute and plasma concentration of 3 milligrams per milliliter, filtered load is 375 milligrams per minute. Excretion rate equals urine concentration multiplied by urine flow rate. With urine concentration of 10 milligrams per milliliter and flow rate of 2 milliliters per minute, excretion rate is 20 milligrams per minute. Net tubular transport equals filtered load minus excretion rate. Here, 375 minus 20 equals 355 milligrams per minute net reabsorption. If filtered load exceeds excretion rate, net tubular reabsorption occurs. If excretion rate exceeds filtered load, net tubular secretion occurs.'
      },
        audioUrl: '/Audio/Topic-055/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: true,
      title: '>>Explain the clearance principle.<< Use the clearance equation and appropriate compounds (inulin/creatinine, PAH) to determine the glomerular filtration rate, renal plasma flow, and renal blood flow.',
      keyPoints: [
        'Clearance principle: Volume of plasma completely cleared of a substance per minute; virtual plasma volume',
        'Clearance equation: C = (Ux × V) / Px; where Ux = urine concentration, V = urine flow rate, Px = plasma concentration',
        'Inulin clearance = GFR: Inulin is freely filtered, not reabsorbed, not secreted, not metabolized (gold standard)',
        'Creatinine clearance ≈ GFR: Endogenous marker, freely filtered, minimally secreted (clinical alternative)',
        'PAH clearance = RPF: PAH is freely filtered AND almost completely secreted; ~600-660 mL/min',
        'RBF calculation: RBF = RPF / (1 - Hematocrit); approximately 1320 mL/min'
      ],
      officialDefinitions: [
        'Clearance principle: Clearance is the amount of plasma that is cleared of a substance during one minute (or one sec). It is a virtual plasma volume characteristic to a substance in question.',
        'Clearance Equation: C = U × V / P. Where C is clearance (mL/min), U is urine concentration of substance, V is urine flow rate (mL/min), P is plasma concentration of substance.',
        'Significance of Clearance: characterization of kidney function, estimation of characteristic parameters of the kidney, characterization of the fate of particular substances in the kidney.',
        'GFR (Glomerular Filtration Rate): the amount of plasma filtered by the glomeruli per minute. Use substances that are freely filtered at the glomerulus and are neither reabsorbed nor secreted by the tubules. Inulin: the gold standard for measuring GFR because it is filtered but not reabsorbed, secreted, or metabolized. Creatinine: commonly used in clinical practice as an estimate of GFR, freely filtered and only minimally secreted. Formula: GFR = (Urine concentration of inulin × Urine flow rate) ÷ Plasma concentration of inulin.',
        'RPF (Renal Plasma Flow): the amount of plasma flowing through the kidneys per minute. PAH (para-aminohippuric acid): freely filtered and almost entirely secreted by the renal tubules, meaning virtually all PAH entering the kidneys is excreted in the urine. PAH-Clearance equals the renal plasma flow (RPF). Formula: RPF = (Urine concentration of PAH × Urine flow rate) ÷ Plasma concentration of PAH.',
        'RBF (Renal Blood Flow): the total blood flow through the kidneys, including both plasma and red blood cells. Formula: RBF = RPF / (1 - Hematocrit). Thus the RBF is about 1320 ml/min.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Clearance is the volume of plasma completely cleared of a substance per minute. It is a virtual plasma volume characteristic to a substance. The clearance equation is C equals U times V divided by P, where U is urine concentration, V is urine flow rate, and P is plasma concentration.',
            critical: true
          },
          {
            type: 'list',
            intro: 'Using clearance to determine renal parameters:',
            items: [
              'GFR: use inulin (gold standard - freely filtered, not reabsorbed/secreted/metabolized) or creatinine (endogenous, convenient). Inulin clearance = GFR ≈ 120-130 mL/min',
              'RPF: use PAH (freely filtered and almost completely secreted). PAH clearance = RPF ≈ 600-660 mL/min',
              'RBF: calculated as RPF ÷ (1 − hematocrit) ≈ 1320 mL/min'
            ]
          }
        ],
        raw: '>>Clearance is the volume of plasma completely cleared of a substance per minute. It is a virtual plasma volume characteristic to a substance.<< The clearance equation is C equals U times V divided by P, where U is urine concentration, V is urine flow rate, and P is plasma concentration. Clearance characterizes kidney function and the fate of substances in the kidney. For GFR, we use inulin or creatinine. Inulin is the gold standard because it is freely filtered and neither reabsorbed, secreted, nor metabolized. Inulin clearance equals GFR, approximately 120 to 130 milliliters per minute. Creatinine is used clinically because it is endogenous, requiring only blood and urine samples. For renal plasma flow, we use para-aminohippuric acid. PAH is freely filtered and almost completely secreted, so nearly all PAH entering the kidney is extracted. PAH clearance equals RPF, approximately 600 to 660 milliliters per minute. Renal blood flow equals RPF divided by one minus hematocrit, approximately 1320 milliliters per minute.'
      },
        audioUrl: '/Audio/Topic-055/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: true,
      title: '>>Give the reference values of the clearance for inulin, creatinine, PAH, and glucose.<< Distinguish between the use of inulin and creatinine clearances as measures of the glomerular filtration rate.',
      keyPoints: [
        'Inulin clearance: 120-130 mL/min (equivalent to GFR); gold standard measurement',
        'Creatinine clearance: 90-150 mL/min (approximation of GFR); clinical standard',
        'PAH clearance: 600-660 mL/min (equivalent to effective RPF)',
        'Glucose clearance: 0 mL/min under normal conditions (completely reabsorbed)',
        'Inulin advantages: Neither reabsorbed, secreted, nor metabolized; most accurate GFR measure',
        'Inulin disadvantage: Requires IV infusion; impractical for routine clinical use',
        'Creatinine advantage: Endogenously produced; convenient clinical measurement',
        'Creatinine disadvantage: Slightly overestimates GFR (10-20% error) due to tubular secretion'
      ],
      officialDefinitions: [
        'Inulin Clearance: Reference Value: 120-130 mL/min (equivalent to GFR). The clearance of inulin is the most accurate measure of GFR because inulin is freely filtered at the glomerulus and is neither reabsorbed nor secreted by the renal tubules. Advantages: the gold standard for measuring GFR because it is neither reabsorbed, secreted, nor metabolized. Disadvantages: requires intravenous infusion of inulin, making it impractical for routine clinical use.',
        'Creatinine Clearance: Reference Value: 90-150 mL/min (approximation of GFR). Creatinine clearance is widely used clinically to estimate GFR. Although creatinine is freely filtered, a small amount is secreted by the renal tubules, leading to a slight overestimation of GFR. Advantages: endogenously produced by muscle metabolism, making it convenient and widely used in clinical settings; requires only blood and urine samples to calculate GFR. Disadvantages: slightly overestimates GFR because creatinine is secreted by the renal tubules (up to 10-20% error); plasma creatinine levels can be affected by factors like muscle mass, diet, and age.',
        'PAH Clearance: Reference Value: 600-700 mL/min (equivalent to effective RPF). PAH is freely filtered and completely secreted into the tubules, meaning that almost all PAH entering the kidney is excreted. PAH-Clearance = RPF.',
        'Glucose Clearance: Reference Value: 0 mL/min (normal physiological condition). Under normal conditions, glucose is completely reabsorbed in the proximal tubule, so no glucose appears in the urine, resulting in zero clearance.',
        'Reference values from learning objectives: inulin clearance = GFR, plasma creatinine: 50-150 μM, endogenous creatinine clearance: 90-150 ml/min, PAH-clearance = RPF.',
        'Normal values: GFR = 100-130 ml/min, RPF = 660 ml/min (480-800 ml/min), RBF = 1300 ml/min (870-1540 ml/min).'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Reference clearance values:',
            critical: true,
            items: [
              'Inulin clearance = GFR: 120-130 mL/min',
              'Creatinine clearance: 90-150 mL/min',
              'PAH clearance = RPF: 600-660 mL/min',
              'Glucose clearance: 0 mL/min (completely reabsorbed in proximal tubule)'
            ]
          },
          {
            type: 'list',
            intro: 'Inulin vs creatinine for measuring GFR:',
            items: [
              'Inulin: gold standard (freely filtered, not reabsorbed/secreted/metabolized), but requires IV infusion making it impractical for routine clinical use',
              'Creatinine: clinically convenient (endogenously produced, requires only blood and urine samples), but slightly secreted by tubules causing 10-20% GFR overestimation; affected by muscle mass, diet, and age'
            ]
          }
        ],
        raw: '>>Inulin clearance equals GFR at 120 to 130 milliliters per minute. Creatinine clearance is 90 to 150 milliliters per minute. PAH clearance equals RPF at 600 to 660 milliliters per minute. Glucose clearance is zero under normal conditions<< because glucose is completely reabsorbed in the proximal tubule. Regarding inulin versus creatinine for measuring GFR: Inulin clearance is the gold standard because inulin is freely filtered and neither reabsorbed, secreted, nor metabolized. However, it requires intravenous infusion, making it impractical for routine clinical use. Creatinine clearance is clinically convenient because creatinine is endogenously produced by muscle metabolism, requiring only blood and urine samples. The disadvantage is that creatinine is slightly secreted by tubules, causing 10 to 20 percent overestimation of GFR. Additionally, plasma creatinine levels are affected by muscle mass, diet, and age.'
      },
        audioUrl: '/Audio/Topic-055/LO-04.mp3'
    },
    {
      id: 'lo-5',
      isCritical: false,
      title: 'Describe the effect of GFR reduction on plasma creatinine concentration and plot the function.',
      keyPoints: [
        'Inverse relationship: Plasma creatinine concentration is inversely related to GFR',
        'Normal values: GFR ~100 mL/min corresponds to plasma creatinine ~1 mg/dL (or 50-150 μM)',
        'GFR-creatinine balance: Creatinine production (muscle metabolism) equals excretion at steady state',
        'Mild GFR reduction: GFR 100→50 mL/min causes plasma creatinine to double (~2 mg/dL)',
        'Severe GFR reduction: GFR <20 mL/min causes exponential increase in plasma creatinine',
        'Function shape: Hyperbolic curve; Pcreatinine = k/GFR (rectangular hyperbola)'
      ],
      officialDefinitions: [
        'Inverse Relationship Between GFR and Plasma Creatinine: Plasma creatinine concentration is inversely related to the glomerular filtration rate (GFR). As GFR decreases, the kidneys filter less creatinine, causing its accumulation in the blood, leading to a rise in plasma creatinine levels.',
        'Normal GFR and Plasma Creatinine Levels: Under normal conditions: GFR = ~100 mL/min, plasma creatinine concentration = ~1 mg/dL. The balance between creatinine production (by muscle metabolism) and excretion maintains steady plasma levels.',
        'GFR Reduction and Plasma Creatinine: Mild GFR reduction: when GFR decreases slightly (e.g., from 100 to 50 mL/min), plasma creatinine doubles (~2 mg/dL). This demonstrates how sensitive plasma creatinine is to small changes in GFR. Severe GFR reduction: in advanced kidney dysfunction (e.g., GFR <20 mL/min), plasma creatinine increases exponentially due to a drastic reduction in creatinine clearance.',
        'The function shows a hyperbolic relationship: at normal GFR (~100 mL/min), creatinine is ~1 mg/dL; at 50% GFR reduction, creatinine doubles; at severe GFR reduction (<20 mL/min), creatinine rises exponentially.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'paragraph',
            content: 'Plasma creatinine concentration is inversely related to GFR. Normally, GFR is approximately 100 milliliters per minute and plasma creatinine is approximately 1 milligram per deciliter or 50 to 150 micromolar. Balance between creatinine production by muscle metabolism and excretion maintains steady plasma levels.'
          },
          {
            type: 'list',
            intro: 'Effect of GFR reduction on plasma creatinine:',
            items: [
              'As GFR decreases, kidneys filter less creatinine, causing accumulation and rising plasma levels',
              'Mild GFR reduction (100→50 mL/min): plasma creatinine doubles to ~2 mg/dL, demonstrating sensitivity to GFR changes',
              'Severe GFR reduction (<20 mL/min): plasma creatinine increases exponentially'
            ]
          },
          {
            type: 'paragraph',
            content: 'The plotted function shows a rectangular hyperbola where plasma creatinine equals a constant divided by GFR. The curve is steep at low GFR values and flattens at higher values.'
          }
        ],
        raw: 'Plasma creatinine concentration is inversely related to GFR. Normally, GFR is approximately 100 milliliters per minute and plasma creatinine is approximately 1 milligram per deciliter or 50 to 150 micromolar. Balance between creatinine production by muscle metabolism and excretion maintains steady plasma levels. As GFR decreases, kidneys filter less creatinine, causing accumulation and rising plasma levels. With mild GFR reduction from 100 to 50 milliliters per minute, plasma creatinine doubles to about 2 milligrams per deciliter, demonstrating sensitivity to GFR changes. With severe GFR reduction below 20 milliliters per minute, plasma creatinine increases exponentially. The plotted function shows a rectangular hyperbola where plasma creatinine equals a constant divided by GFR. The curve is steep at low GFR values and flattens at higher values.'
      },
        audioUrl: '/Audio/Topic-055/LO-05.mp3'
    },
    {
      id: 'lo-6',
      isCritical: true,
      title: '>>How much is the clearance of a freely filtrated X substance if 1. it is fully reabsorbed (glucose type reabsorption), 2. only partly reabsorbed, 3. there is a net tubular secretion (PAH type transport).<< (Answers: 1.: Cl=0; 2. 0<Cl<GFR; 3. GFR<Cl≤RPF). Give one-one example for such substances.',
      keyPoints: [
        'Fully reabsorbed (glucose type): Clearance = 0; none appears in urine; Example: glucose',
        'Partly reabsorbed: 0 < Clearance < GFR; partial excretion; Example: urea (~50% reabsorbed)',
        'Net tubular secretion (PAH type): GFR < Clearance ≤ RPF; secretion adds to excretion; Example: PAH',
        'Clearance range: 0 to 660 mL/min (0 to RPF)',
        'Inulin: Clearance = GFR (filtered only, no reabsorption or secretion)',
        'Clinical significance: Clearance characterizes how kidneys handle specific substances'
      ],
      officialDefinitions: [
        'Clearance range: C = 0 - 660 ml/min. 0 < C < GFR: filtered and partially reabsorbed. GFR < C < RPF: filtered and partially secreted.',
        'Fully Reabsorbed Substance (Glucose-type reabsorption): Clearance = 0, because the kidneys do not excrete the substance. When a substance is freely filtered at the glomerulus and completely reabsorbed in the tubules, none of it appears in the urine. Example: Glucose (under normal conditions, all filtered glucose is reabsorbed in the proximal tubule).',
        'Partially Reabsorbed Substance: Clearance = 0 < Cl < GFR, because the partial reabsorption reduces its clearance below the glomerular filtration rate (GFR). If a substance is only partly reabsorbed after filtration, some of it is excreted in the urine. Example: Urea (approximately 50% of filtered urea is reabsorbed, so its clearance is about 50% of GFR).',
        'Net Tubular Secretion (PAH-type transport): Clearance = GFR < Cl ≤ RPF, because secretion adds to the amount excreted in the urine. If a substance is freely filtered and also secreted by the tubules, its clearance exceeds GFR. When secretion is maximal, clearance approaches renal plasma flow (RPF). Example: Para-aminohippuric acid (PAH) - PAH is freely filtered and almost completely secreted, so its clearance reflects RPF.',
        'Inulin clearance = GFR (120-130 ml/min).',
        'Plasma creatinine: 50-150 μM.',
        'Endogenous creatinine clearance: 90-150 ml/min.',
        'PAH-clearance = RPF (600-660 ml/min).',
        'Glucose clearance: 0 ml/min (normal conditions).'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Clearance of freely filtered substance X depends on tubular handling:',
            critical: true,
            items: [
              'Fully reabsorbed (glucose type): Clearance = 0. Completely reabsorbed, none in urine. Example: glucose',
              'Partly reabsorbed: 0 < Clearance < GFR. Partial reabsorption reduces clearance below GFR. Example: urea (~50% reabsorbed, clearance about half GFR)',
              'Net tubular secretion (PAH type): GFR < Clearance ≤ RPF. Secretion adds to excretion; when maximal, clearance approaches RPF. Example: PAH (freely filtered and almost completely secreted)'
            ]
          },
          {
            type: 'paragraph',
            content: 'The overall clearance range is 0 to 660 milliliters per minute, from fully reabsorbed to maximally secreted substances.'
          }
        ],
        raw: '>>For a freely filtered X substance: First, if fully reabsorbed with glucose type reabsorption, clearance equals zero because the substance is completely reabsorbed and none appears in urine. Example: glucose, completely reabsorbed in proximal tubule. Second, if partly reabsorbed, clearance is greater than zero but less than GFR because partial reabsorption reduces clearance below GFR. Example: urea, approximately 50 percent reabsorbed, so clearance is about half of GFR. Third, if there is net tubular secretion with PAH type transport, clearance is greater than GFR but less than or equal to RPF because secretion adds to excretion.<< When secretion is maximal, clearance approaches RPF. Example: para-aminohippuric acid, freely filtered and almost completely secreted, so clearance reflects renal plasma flow. The overall clearance range is 0 to 660 milliliters per minute, from fully reabsorbed to maximally secreted substances.'
      },
        audioUrl: '/Audio/Topic-055/LO-06.mp3'
    }
  ],
  referenceValues: [
    {
      parameter: 'Inulin clearance',
      value: '= GFR (120-130 mL/min)',
      isCritical: true
    },
    {
      parameter: 'Plasma creatinine',
      value: '50-150 μM',
      isCritical: true
    },
    {
      parameter: 'Endogenous creatinine clearance',
      value: '90-150 mL/min',
      isCritical: false
    },
    {
      parameter: 'PAH clearance',
      value: '= RPF (600-660 mL/min)',
      isCritical: true
    }
  ]
};

export default topic55;
// end of topic55
