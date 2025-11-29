const topic11QuickReview = {
  topicId: 'topic-11',
  topicNumber: 11,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the fate of old erythrocytes, release of hemoglobin, binding proteins of hem and hemoglobin, and the uptake into the macrophages.',
      isCritical: false,
      blocks: [
        {
          type: 'keypoint',
          text: 'Old erythrocytes live 100-120 days and are removed primarily by splenic macrophages, with help from liver Kupffer cells and bone marrow macrophages',
          critical: false
        },
        {
          type: 'list',
          intro: 'Three protective binding proteins prevent hemoglobin toxicity in blood:',
          items: [
            'Haptoglobin binds free hemoglobin → macrophage uptake via CD163 receptor → prevents kidney damage',
            'Hemopexin binds free heme → liver uptake via CD91 receptor → prevents oxidative damage',
            'Transferrin binds released iron → transports to bone marrow for new RBC synthesis'
          ],
          critical: false
        },
        {
          type: 'steps',
          intro: 'Macrophage processing of old RBCs:',
          items: [
            'Macrophages recognize aged RBCs by altered surface markers',
            'Phagocytosis engulfs the old erythrocyte',
            'Phagosome fuses with lysosomes',
            'Enzymatic breakdown of hemoglobin begins'
          ],
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Describe the steps of the degradation of hemoglobin, the fate of iron, globin chains, and the porphyrin ring.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Hemoglobin Degradation Pathway',
          critical: false
        },
        {
          type: 'steps',
          intro: 'Inside macrophages, hemoglobin undergoes systematic breakdown:',
          items: [
            'Hemoglobin separates into globin chains (protein) and heme (porphyrin ring + iron)',
            'Globin chains → degraded by lysosomal proteases → amino acids recycled for new proteins',
            'Heme oxygenase cleaves porphyrin ring → produces biliverdin (green) + CO + Fe²⁺',
            'Biliverdin reductase converts biliverdin → bilirubin (yellow, water-insoluble)',
            'Iron either stored (as ferritin/hemosiderin) or binds transferrin for transport',
            'Bilirubin released from macrophage, binds albumin for transport to liver'
          ],
          critical: false
        },
        {
          type: 'comparison',
          left: {
            title: 'Iron Fate',
            items: [
              'Stored as ferritin in macrophages (short-term)',
              'Stored as hemosiderin (long-term)',
              'Binds transferrin → bloodstream',
              'Delivered to bone marrow',
              'Reused in new hemoglobin'
            ]
          },
          right: {
            title: 'Bilirubin Fate',
            items: [
              'Water-insoluble form',
              'Must bind albumin',
              'Transported to liver',
              'Requires conjugation',
              'Excreted via bile'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Iron recycling is highly efficient - most iron is reused for new RBC production rather than lost from the body',
          critical: false
        }
      ]
    },
    'lo-3': {
      title: 'The release of bilirubin from macrophages, transport in blood, uptake in liver, conjugation and secretion into the bile.',
      isCritical: true,
      blocks: [
        {
          type: 'steps',
          intro: 'Bilirubin processing from macrophage to bile:',
          items: [
            'Unconjugated bilirubin (indirect) released from macrophages into bloodstream',
            'Binds albumin for safe transport (water-insoluble form)',
            'Bilirubin-albumin complex reaches liver hepatocytes',
            'Bilirubin enters hepatocytes via OATP1B1/3 transporters',
            'UDP-glucuronosyltransferase (UGT1A1) conjugates bilirubin with glucuronic acid',
            'Conjugated bilirubin (direct, water-soluble) transported into bile canaliculi via MRP2/ABCC2',
            'Bile flows through ducts → stored in gallbladder → released into duodenum'
          ],
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Unconjugated (Indirect)',
            items: [
              'Water-insoluble',
              'Bound to albumin',
              'From macrophages',
              'Before liver processing',
              'Cannot be excreted'
            ]
          },
          right: {
            title: 'Conjugated (Direct)',
            items: [
              'Water-soluble',
              'Free in bile',
              'After liver processing',
              'Glucuronic acid attached',
              'Ready for excretion'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'The liver conjugation step is essential - it transforms toxic, water-insoluble bilirubin into a harmless, water-soluble form that can be excreted in bile',
          critical: true
        }
      ]
    },
    'lo-4': {
      title: 'Provide the definition of direct and indirect bilirubin.',
      isCritical: true,
      blocks: [
        {
          type: 'table',
          headers: ['Feature', 'Indirect (Unconjugated)', 'Direct (Conjugated)'],
          rows: [
            ['Solubility', 'Water-insoluble', 'Water-soluble'],
            ['Location', 'Before liver processing', 'After liver processing'],
            ['Transport', 'Bound to albumin', 'Free in bile/blood'],
            ['Measurement', 'Requires chemical reaction', 'Directly measurable'],
            ['Name origin', 'Indirect lab test needed', 'Direct lab test possible'],
            ['Conjugation', 'None', 'Glucuronic acid attached']
          ]
        },
        {
          type: 'list',
          intro: 'Clinical significance of elevated indirect bilirubin:',
          items: [
            'Hemolytic anemia (excessive RBC breakdown)',
            'Ineffective erythropoiesis',
            'Impaired hepatic uptake',
            'Gilbert syndrome (reduced UGT1A1 activity)'
          ],
          critical: true
        },
        {
          type: 'list',
          intro: 'Clinical significance of elevated direct bilirubin:',
          items: [
            'Biliary obstruction (gallstones, tumors)',
            'Hepatitis (viral, alcoholic, autoimmune)',
            'Cirrhosis with impaired bile excretion',
            'Drug-induced cholestasis'
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'The direct/indirect distinction helps localize the problem: indirect ↑ = pre-hepatic or hepatic uptake issue; direct ↑ = hepatic excretion or post-hepatic obstruction',
          critical: true
        }
      ]
    },
    'lo-5': {
      title: 'The fate of bilirubin in the intestines, the enterohepatic circulation and secretion. Urobilinogen (UBG), and the significance of its detection in the urine.',
      isCritical: true,
      blocks: [
        {
          type: 'steps',
          intro: 'Intestinal metabolism of conjugated bilirubin:',
          items: [
            'Conjugated bilirubin arrives in duodenum via bile',
            'Intestinal bacteria deconjugate bilirubin → urobilinogen',
            'Most urobilinogen → further metabolized to stercobilin (brown, excreted in feces)',
            'Some urobilinogen reabsorbed → portal circulation',
            'Reabsorbed urobilinogen returns to liver (enterohepatic circulation)',
            'Small amount enters systemic circulation → filtered by kidneys',
            'Urobilinogen in urine oxidized to urobilin (yellow color)'
          ],
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Stercobilin Path (Major)',
            items: [
              'Most urobilinogen',
              'Metabolized by bacteria',
              'Excreted in feces',
              'Gives stool brown color',
              'Normal elimination route'
            ]
          },
          right: {
            title: 'Urobilin Path (Minor)',
            items: [
              'Small amount urobilinogen',
              'Reabsorbed → bloodstream',
              'Filtered by kidneys',
              'Gives urine yellow color',
              'Diagnostic marker'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Urobilinogen Level', 'Interpretation', 'Possible Causes'],
          rows: [
            ['Normal (small amount)', 'Healthy liver & bile flow', 'Normal physiology'],
            ['Elevated', 'Liver dysfunction or hemolysis', 'Hepatitis, cirrhosis, hemolytic anemia'],
            ['Absent/Low', 'Bile not reaching intestines', 'Biliary obstruction, severe liver damage']
          ]
        },
        {
          type: 'keypoint',
          text: 'Urobilinogen detection in urine is a simple but powerful diagnostic tool: its presence confirms bile is reaching the intestines, while its absence suggests obstruction',
          critical: true
        },
        {
          type: 'clinical',
          text: 'In complete biliary obstruction, urine becomes dark (conjugated bilirubin present) but has NO urobilinogen, while stools become pale (no stercobilin). This combination is pathognomonic for obstruction.'
        }
      ]
    },
    'lo-6': {
      title: 'The definition of icterus (jaundice) and some of its main forms.',
      isCritical: false,
      blocks: [
        {
          type: 'paragraph',
          text: 'Icterus (jaundice) is the yellowish discoloration of skin, mucous membranes, and sclera (whites of eyes) caused by elevated bilirubin levels in blood (>34-50 μmol/L clinically visible)',
          critical: false
        },
        {
          type: 'table',
          headers: ['Type', 'Mechanism', 'Bilirubin Type', 'Urine', 'Stool'],
          rows: [
            ['Hemolytic (Prehepatic)', 'Excessive RBC breakdown', 'Indirect ↑↑', 'Normal color', 'Dark'],
            ['Hepatic (Hepatocellular)', 'Liver cell dysfunction', 'Both ↑', 'Dark (may have bili)', 'Light/normal'],
            ['Obstructive (Posthepatic)', 'Bile duct blockage', 'Direct ↑↑', 'Very dark', 'Pale/clay-colored']
          ]
        },
        {
          type: 'list',
          intro: 'Hemolytic jaundice characteristics:',
          items: [
            'Causes: Hemolytic anemias (sickle cell, thalassemia), malaria, autoimmune hemolysis',
            'Unconjugated bilirubin exceeds liver processing capacity',
            'Normal urine color (unconjugated not water-soluble)',
            'Increased urobilinogen in feces (dark stools)',
            'No bilirubin in urine'
          ],
          critical: false
        },
        {
          type: 'list',
          intro: 'Obstructive jaundice characteristics:',
          items: [
            'Causes: Gallstones, pancreatic/bile duct tumors, biliary strictures',
            'Conjugated bilirubin backs up into blood',
            'Dark urine (conjugated bilirubin is water-soluble, appears in urine)',
            'Pale stools (no stercobilin reaches intestines)',
            'Pruritus (itching from bile salt accumulation in skin)',
            'Absent urobilinogen in urine (bile not reaching intestines)'
          ],
          critical: false
        },
        {
          type: 'clinical',
          text: 'The "color triad" quickly differentiates obstruction from hemolysis: Obstructive = dark urine + pale stool + itching; Hemolytic = normal urine + dark stool + no itching'
        }
      ]
    }
  }
};

export default topic11QuickReview;
