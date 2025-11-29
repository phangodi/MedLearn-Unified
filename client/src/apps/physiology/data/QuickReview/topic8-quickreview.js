const topic8QuickReview = {
  topicId: 'topic-8',
  topicNumber: 8,
  learningObjectives: {
    'lo-1': {
      title: 'Define the terms extracellular and intracellular fluid. List the compartments of extracellular fluid.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Body Fluid Distribution'
        },
        {
          type: 'keypoint',
          content: 'Total body water is ~60% of body weight, divided into intracellular (40%) and extracellular (20%) compartments.'
        },
        {
          type: 'comparison',
          headers: ['Compartment', 'Volume', 'Key Ions/Components'],
          rows: [
            ['Intracellular Fluid (ICF)', '40% body weight', 'K⁺, PO₄³⁻, proteins'],
            ['Extracellular Fluid (ECF)', '20% body weight', 'Na⁺, Cl⁻, HCO₃⁻']
          ]
        },
        {
          type: 'list',
          title: 'ECF Compartments',
          items: [
            'Interstitial fluid (75% of ECF): Bathes cells, facilitates ion/molecule exchange',
            'Plasma (25% of ECF): Intravascular component, liquid portion of blood',
            'Transcellular fluid: CSF, synovial, aqueous humor, pleural/pericardial/peritoneal fluids',
            'Lymph: Interstitial fluid collected into lymphatic system'
          ]
        },
        {
          type: 'clinical',
          content: 'Fluid balance is maintained by osmotic and hydrostatic pressures, regulated by ADH (antidiuretic hormone), aldosterone, and ANP (atrial natriuretic peptide).'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the indicator dilution technique and its use to determine plasma volume, blood volume, extracellular fluid volume, and total body water.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Indicator Dilution Technique'
        },
        {
          type: 'paragraph',
          content: 'A known amount of indicator substance is injected into a fluid compartment, allowed to distribute evenly, and then measured after equilibrium.'
        },
        {
          type: 'formula',
          expression: 'Volume = Amount of Indicator / Concentration',
          explanation: 'Basic principle for calculating compartment volume from indicator dilution.'
        },
        {
          type: 'table',
          headers: ['Compartment', 'Indicator Used', 'Normal Value'],
          rows: [
            ['Plasma Volume', 'Evans-blue dye or ¹³¹I-albumin', '~3 L'],
            ['ECF Volume', 'Inulin or mannitol', '~14 L (20% body weight)'],
            ['Total Body Water', 'Tritiated water or antipyrine', '~42 L (60% body weight)'],
            ['Blood Volume', 'Calculated from plasma volume', '5-6 L (80 ml/kg)']
          ]
        },
        {
          type: 'formula',
          expression: 'Blood Volume = Plasma Volume / (1 - Hematocrit)',
          explanation: 'Calculates total blood volume from measured plasma volume and hematocrit.'
        },
        {
          type: 'clinical',
          content: 'Used clinically to assess dehydration, fluid overload, edema, heart failure, and overall hydration status.'
        }
      ]
    },
    'lo-3': {
      title: 'Describe the fractions obtained by centrifugation (cells, plasma).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Blood Centrifugation Fractions'
        },
        {
          type: 'paragraph',
          content: 'Centrifugation separates blood into cellular and plasma fractions based on density differences.'
        },
        {
          type: 'comparison',
          headers: ['Fraction', 'Volume %', 'Components'],
          rows: [
            ['Cellular (bottom)', '45%', 'RBCs (majority) + buffy coat (WBCs, platelets <1%)'],
            ['Plasma (top)', '55%', '90-92% water + proteins + electrolytes + nutrients']
          ]
        },
        {
          type: 'list',
          title: 'Plasma Components',
          items: [
            'Water (90-92%): Transport medium',
            'Proteins: Albumin (oncotic pressure), globulins (immune), fibrinogen (clotting)',
            'Electrolytes: Na⁺, K⁺, Ca²⁺, Cl⁻',
            'Nutrients: Glucose, amino acids',
            'Waste products: Urea, creatinine, bilirubin',
            'Hormones and enzymes'
          ]
        },
        {
          type: 'keypoint',
          content: 'Plasma is light yellow due to bilirubin. Serum is plasma without fibrinogen (collected after clotting).'
        }
      ]
    },
    'lo-4': {
      title: 'Define the term hematocrit.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Hematocrit Definition'
        },
        {
          type: 'keypoint',
          content: 'Hematocrit is the percentage of total blood volume occupied by red blood cells.'
        },
        {
          type: 'table',
          headers: ['Gender', 'Normal Range', 'As Decimal'],
          rows: [
            ['Males', '44-46%', '0.44-0.46'],
            ['Females', '41-43%', '0.41-0.43']
          ]
        },
        {
          type: 'comparison',
          headers: ['Condition', 'Hematocrit', 'Causes'],
          rows: [
            ['High Hematocrit', 'Above normal', 'Dehydration, polycythemia vera, chronic hypoxia'],
            ['Low Hematocrit', 'Below normal', 'Anemia, blood loss, fluid overload']
          ]
        },
        {
          type: 'clinical',
          content: 'Hematocrit is essential for diagnosing blood disorders and calculating blood volume. Measured by centrifugation or automated analyzers.'
        }
      ]
    },
    'lo-5': {
      title: 'List the anorganic and organic constituents of the blood plasma. Give the reference values.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Plasma Constituents'
        },
        {
          type: 'table',
          headers: ['Electrolyte', 'Reference Value'],
          rows: [
            ['Sodium (Na⁺)', '138-151 mM'],
            ['Potassium (K⁺)', '3.4-5.2 mM'],
            ['Calcium (Ca²⁺) total', '2.4-2.8 mM'],
            ['Calcium (Ca²⁺) free', '1.5 mM'],
            ['Chloride (Cl⁻)', '101-111 mM'],
            ['Bicarbonate (HCO₃⁻)', '21-28.5 mM']
          ]
        },
        {
          type: 'table',
          headers: ['Protein Constituent', 'Reference Value'],
          rows: [
            ['Total plasma proteins', '60-80 g/L'],
            ['Albumin', '34-45 g/L'],
            ['Globulins', 'α₁, α₂, β, γ fractions'],
            ['Fibrinogen', 'Essential for clotting']
          ]
        },
        {
          type: 'table',
          headers: ['Other Organic Constituents', 'Reference Value'],
          rows: [
            ['Glucose', '4.2-5.9 mM'],
            ['Urea', '2.5-10.3 mM'],
            ['Bilirubin', '5.0-17.0 μmol/L'],
            ['Total lipids', '4.5-10 g/L'],
            ['Cholesterol', '<5.17 mM']
          ]
        },
        {
          type: 'list',
          title: 'Additional Organic Components',
          items: [
            'Amino acids (various concentrations)',
            'Organic acids: lactate, pyruvate, citrate',
            'Hormones: insulin, cortisol',
            'Vitamins: water-soluble and fat-soluble',
            'Enzymes for metabolic processes'
          ]
        }
      ]
    },
    'lo-6': {
      title: 'Identify the protein fractions of blood plasma, explain the method (electrophoresis) used for their measurement. Give 1-1 example from each fraction.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Plasma Protein Electrophoresis'
        },
        {
          type: 'steps',
          title: 'Electrophoresis Method',
          steps: [
            'Sample placed on agarose gel or cellulose acetate',
            'Electric field applied across medium',
            'Proteins migrate based on charge and size toward anode (positive electrode)',
            'Gel stained to visualize protein bands',
            'Densitometry quantifies bands by optical density'
          ]
        },
        {
          type: 'paragraph',
          content: 'Albumin migrates farthest (high negative charge, small size). Globulins follow as α₁, α₂, β, γ based on charge/size.'
        },
        {
          type: 'table',
          headers: ['Fraction', 'Example', 'Function', 'Clinical Significance'],
          rows: [
            ['Albumin', 'Albumin', 'Oncotic pressure, transport', 'Low levels: liver/kidney disease, malnutrition'],
            ['α₁-globulin', 'α₁-antitrypsin', 'Protects tissues from proteases', 'Deficiency: emphysema, COPD'],
            ['α₂-globulin', 'Haptoglobin', 'Binds free hemoglobin', 'High: inflammation; Low: hemolytic anemia'],
            ['β-globulin', 'Transferrin', 'Iron transport', 'Low: liver disease; High: iron deficiency'],
            ['γ-globulin', 'IgG (antibodies)', 'Long-term immunity', 'Abnormal: immune deficiencies, infections']
          ]
        },
        {
          type: 'clinical',
          content: 'Protein electrophoresis is crucial for diagnosing liver disease, immune disorders, multiple myeloma, and monitoring nutritional status.'
        }
      ]
    },
    'lo-7': {
      title: 'Identify and characterize the lipoproteins found in the blood plasma.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Plasma Lipoproteins'
        },
        {
          type: 'paragraph',
          content: 'Lipoproteins transport hydrophobic lipids (triglycerides, cholesterol) through aqueous blood. They have a hydrophobic core (triglycerides, cholesterol esters) and hydrophilic periphery (phospholipids, apolipoproteins).'
        },
        {
          type: 'table',
          headers: ['Lipoprotein', 'Origin', 'Primary Function', 'Characteristics'],
          rows: [
            ['Chylomicrons', 'Intestines', 'Transport dietary lipids', 'Largest, least dense, rich in TG'],
            ['VLDL', 'Liver', 'Transport endogenous TG', 'More TG than cholesterol'],
            ['IDL', 'VLDL catabolism', 'Transitional form', 'Intermediate size/density'],
            ['LDL', 'IDL metabolism', 'Cholesterol to tissues', '"Bad cholesterol", high cholesterol content'],
            ['HDL', 'Liver/intestines', 'Reverse cholesterol transport', '"Good cholesterol", smallest, most dense']
          ]
        },
        {
          type: 'keypoint',
          content: 'Order of increasing density and protein content: Chylomicrons < VLDL < IDL < LDL < HDL'
        },
        {
          type: 'comparison',
          headers: ['Type', 'Cardiovascular Risk'],
          rows: [
            ['LDL (Low-Density)', 'High levels increase atherosclerosis risk'],
            ['HDL (High-Density)', 'High levels reduce cardiovascular disease risk']
          ]
        },
        {
          type: 'clinical',
          content: 'HDL performs reverse cholesterol transport, removing excess cholesterol from tissues and returning it to the liver for excretion or recycling.'
        }
      ]
    }
  }
};

export default topic8QuickReview;
