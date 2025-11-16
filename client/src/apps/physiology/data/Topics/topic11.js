const topic11 =   {
  id: 'topic-11',
  number: 11,
  mcqs: ['mcq-2'],
  title: 'Hemoglobin degradation, bilirubin metabolism',
  subtitle: 'The breakdown pathway of hemoglobin from old erythrocytes through bilirubin formation, hepatic processing, intestinal metabolism, and excretion, including the pathophysiology of jaundice.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: false,
      title: 'Describe the fate of old erythrocytes, release of hemoglobin, binding proteins of hem and hemoglobin, and the uptake into the macrophages.',
      keyPoints: [
        'Erythrocyte lifespan: 100-120 days; aged RBCs undergo surface changes signaling removal',
        'Primary sites: Spleen (main site), liver Kupffer cells, and bone marrow macrophages phagocytose old RBCs',
        'Haptoglobin: Binds free hemoglobin in circulation; complex taken up by macrophages via CD163 receptor; prevents kidney damage',
        'Hemopexin: Binds free heme in blood; protects from oxidative damage; complex taken up by liver via CD91 receptor',
        'Transferrin: Binds released iron; transports to bone marrow for new RBC synthesis',
        'Phagocytosis: Macrophages engulf aged RBCs → phagosome fuses with lysosomes → enzymatic breakdown of hemoglobin begins'
      ],
      officialDefinitions: [
        'Old erythrocytes: extraction from blood by macrophages (liver, spleen).',
        'Lifespan of RBCs: 100-120 days.',
        'Sites of destruction: sinusoidal capillaries found in spleen, liver, and red bone marrow.',
        'Recognition and phagocytosis: aged or damaged erythrocytes display altered surface markers that macrophages recognize. This recognition triggers phagocytosis, where the macrophages engulf the old RBCs.',
        'Haptoglobin: transiently binds hemoglobin in circulation. Binds to free hemoglobin released during intravascular hemolysis (rupture of RBCs within blood vessels) to prevent it from being filtered through the kidneys, which could cause damage and loss of valuable iron. The haptoglobin-hemoglobin complex is recognized by macrophages, primarily through the CD163 receptor, and is taken up for safe degradation.',
        'Hemopexin: heme-binding protein in blood. Binds to free heme released from broken-down hemoglobin, protecting the body from its potentially toxic effects and oxidative damage. The hemopexin-heme complex is taken up by the liver via the CD91 receptor, where it is processed and degraded.',
        'Kupffer cell: liver macrophages. After leaving the bloodstream, monocytes differentiate in tissues into macrophages with tissue-specific phenotypes.',
        'Transferrin: binds to iron released from heme breakdown and transports it through the bloodstream to tissues, especially to the bone marrow, for the synthesis of new RBCs. Prevents free iron from catalyzing harmful oxidative reactions.'
      ],
      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Old erythrocytes have a lifespan of approximately 100 to 120 days. The primary clearance site is the spleen, though liver Kupffer cells and bone marrow macrophages also remove aged RBCs through phagocytosis.' },
          {
            type: 'list',
            intro: 'When RBCs rupture in circulation during intravascular hemolysis, several binding proteins protect the body:',
            items: [
              'Free hemoglobin binds to haptoglobin, and this complex is recognized by macrophages through the CD163 receptor for safe clearance, preventing kidney damage.',
              'Free heme from broken hemoglobin binds to hemopexin, protecting tissues from oxidative effects, and this complex is taken up by the liver via the CD91 receptor.',
              'Iron released from heme breakdown binds to transferrin for transport to bone marrow for new RBC synthesis.'
            ]
          },
          { type: 'paragraph', content: 'Macrophages engulf aged erythrocytes, creating a phagosome that fuses with lysosomes where enzymatic breakdown of hemoglobin begins.' }
        ],
        raw: 'Old erythrocytes have a lifespan of approximately 100 to 120 days. The primary clearance site is the spleen, though liver Kupffer cells and bone marrow macrophages also remove aged RBCs through phagocytosis. When RBCs rupture in circulation during intravascular hemolysis, free hemoglobin binds to haptoglobin, and this complex is recognized by macrophages through the CD163 receptor for safe clearance, preventing kidney damage. Free heme from broken hemoglobin binds to hemopexin, protecting tissues from oxidative effects, and this complex is taken up by the liver via the CD91 receptor. Iron released from heme breakdown binds to transferrin for transport to bone marrow for new RBC synthesis. Macrophages engulf aged erythrocytes, creating a phagosome that fuses with lysosomes where enzymatic breakdown of hemoglobin begins.'
      },
      audioUrl: '/Audio/Topic-011/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: false,
      title: 'Describe the steps of the degradation of hemoglobin, the fate of iron, globin chains, and the porphyrin ring.',
      keyPoints: [
        'Hemoglobin separation: Disassembled into globin (protein) and heme (iron-containing porphyrin ring)',
        'Globin chains: Degraded by lysosomal proteases → amino acids recycled for new protein synthesis',
        'Heme breakdown: Heme oxygenase cleaves porphyrin ring → biliverdin (green) + CO + Fe²⁺',
        'Biliverdin reduction: Biliverdin reductase → bilirubin (yellow, water-insoluble)',
        'Iron fate: Stored as ferritin or hemosiderin in macrophages, or binds transferrin for transport to bone marrow',
        'Bilirubin transport: Released from macrophages, binds albumin in blood → liver for conjugation'
      ],
      officialDefinitions: [
        'Old erythrocytes: extraction from blood by macrophages (liver, spleen).',
        'Haptoglobin: transiently binds hemoglobin in circulation (hemopexin: heme-binding protein in blood).',
        'Fe2+ dissociation: (used again or stored) & proteolysis of β-globin.',
        'Porphyrin degradation: CO + biliverdin (green), then bilirubin (yellow).',
        'Hemoglobin breakdown: inside the macrophages, hemoglobin from the engulfed erythrocytes is released and decomposed into its components: Heme (separated from the globin chains and subjected to further breakdown) and Globin (broken down into amino acids that are recycled for new protein synthesis).',
        'Fate of globin chains: the globin chains are degraded by lysosomal proteases into their constituent amino acids. These amino acids are released from the macrophage into the bloodstream and become part of the body\'s amino acid pool. They are reused in the synthesis of new proteins, contributing to various metabolic processes.',
        'Fate of the porphyrin ring (heme): Heme breakdown by heme oxygenase. The enzyme heme oxygenase cleaves the heme molecule, opening the ring structure and producing biliverdin, a green pigment. Iron is released during this enzymatic reaction and must be safely managed to prevent toxicity.',
        'Conversion of biliverdin to bilirubin: biliverdin is quickly reduced to bilirubin, a yellow pigment, by the enzyme biliverdin reductase. Bilirubin is water-insoluble, so it binds to albumin in the bloodstream for transport to the liver.',
        'Fate of iron: iron released during the breakdown of heme is stored in the macrophages as ferritin or hemosiderin. Iron is carefully regulated and released into the bloodstream bound to transferrin, a plasma protein that ensures safe iron transport. Transferrin delivers iron to the bone marrow, where it is taken up by developing erythrocytes for incorporation into new hemoglobin molecules. This recycling process is efficient, ensuring that most of the body\'s iron is reused for new RBC production.',
        'Iron storage: liver, spleen, bone marrow\'s macrophages in the form of hemosiderin.'
     ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Inside macrophages, hemoglobin is disassembled into globin chains and heme.' },
          {
            type: 'list',
            intro: 'The components undergo the following fates:',
            items: [
              'Globin chains are degraded by lysosomal proteases into constituent amino acids, recycled for synthesis of new proteins.',
              'Heme undergoes breakdown by heme oxygenase, which cleaves the porphyrin ring structure, producing biliverdin, a green pigment, carbon monoxide, and ferrous iron.',
              'Iron is either stored within the macrophage as ferritin or hemosiderin, or binds to transferrin for safe transport through the bloodstream to the bone marrow where it is reused for new hemoglobin synthesis in developing erythrocytes.',
              'Biliverdin is rapidly reduced to bilirubin, a yellow pigment, by biliverdin reductase.'
            ]
          },
          { type: 'paragraph', content: 'Because bilirubin is water-insoluble, it is released from the macrophage and binds to albumin in the bloodstream for transport to the liver for further processing.' }
        ],
        raw: 'Inside macrophages, hemoglobin is disassembled into globin chains and heme. Globin chains are degraded by lysosomal proteases into constituent amino acids, recycled for synthesis of new proteins. Heme undergoes breakdown by heme oxygenase, which cleaves the porphyrin ring structure, producing biliverdin, a green pigment, carbon monoxide, and ferrous iron. Iron is either stored within the macrophage as ferritin or hemosiderin, or binds to transferrin for safe transport through the bloodstream to the bone marrow where it is reused for new hemoglobin synthesis in developing erythrocytes. Biliverdin is rapidly reduced to bilirubin, a yellow pigment, by biliverdin reductase. Because bilirubin is water-insoluble, it is released from the macrophage and binds to albumin in the bloodstream for transport to the liver for further processing.'
      },
      audioUrl: '/Audio/Topic-011/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: true,
      title: '>>The release of bilirubin from macrophages, transport in blood, uptake in liver, conjugation and secretion into the bile.<<',
      keyPoints: [
        'Release from macrophages: Unconjugated bilirubin (indirect, water-insoluble) released into bloodstream',
        'Blood transport: Binds albumin for safe transport to liver; protects tissues from toxic effects',
        'Hepatocyte uptake: Bilirubin-albumin complex binds hepatocyte receptors; bilirubin enters via OATP1B1/3 transporters',
        'Conjugation: UDP-glucuronosyltransferase (UGT1A1) conjugates bilirubin with glucuronic acid → conjugated bilirubin (direct, water-soluble)',
        'Secretion into bile: MRP2/ABCC2 transporters actively transport conjugated bilirubin into bile canaliculi → bile ducts → gallbladder',
        'Intestinal release: Bile containing conjugated bilirubin released into duodenum during digestion'
      ],
      officialDefinitions: [
        'Release of bilirubin from macrophages: when old erythrocytes are phagocytosed by macrophages (primarily in the spleen, liver, and bone marrow), hemoglobin is broken down. The heme component is converted to biliverdin and then reduced to bilirubin by the enzyme biliverdin reductase. The newly formed unconjugated bilirubin (indirect bilirubin), which is water-insoluble, is released into the bloodstream.',
        'Transport in blood: to travel in the aqueous environment of the blood, unconjugated bilirubin binds to albumin. This binding protects tissues from the toxic effects of bilirubin and allows for its safe transport to the liver. The bilirubin-albumin complex circulates in the blood until it reaches the liver. Circulation: bilirubin binds to albumin – indirect bilirubin.',
        'Uptake in the liver: the complex binds to specific receptors on the surface of hepatocytes (liver cells). Once bound, bilirubin dissociates from albumin and enters the liver cells through facilitated diffusion or receptor-mediated endocytosis. The UCB-albumin complex arrives at the liver, and UCB is taken up by hepatocytes through transporters like OATP1B1/3 (organic anion-transporting polypeptides). Inside the hepatocyte, bilirubin is bound to cytosolic proteins to prevent it from diffusing back into the bloodstream. Inside the hepatocyte, UCB binds to proteins such as ligandin (also known as glutathione-S-transferase), which prevents it from diffusing out of the cell and aids in directing it to the endoplasmic reticulum for conjugation.',
        'Conjugation: the enzyme UDP-glucuronosyltransferase catalyzes the conjugation of bilirubin with glucuronic acid, forming conjugated bilirubin (direct bilirubin). This reaction renders bilirubin water-soluble. UCB is conjugated to glucuronic acid by the enzyme UDP-glucuronosyltransferase (UGT1A1), forming bilirubin glucuronides (BG). This reaction makes bilirubin water-soluble and suitable for excretion. 80% of the free bilirubin is conjugated with glucuronic acid to form bilirubin glucuronide. 10% of the free bilirubin is conjugated with sulfate, to form bilirubin sulfate. The remaining 10% gets conjugated with many other substances. Liver takes up bilirubin and conjugates that with glucuronide – direct bilirubin.',
        'Secretion into the bile: conjugated bilirubin is actively transported across the hepatocyte membrane into the bile canaliculi via transport proteins (e.g., MRP2, multidrug resistance-associated protein 2). Conjugated bilirubin (BG) is transported from the hepatocyte into the bile canaliculi by specific transport proteins, primarily MRP2/ABCC2. The bile, containing conjugated bilirubin, flows through the bile ducts and is stored in the gallbladder until it is released into the small intestine during digestion.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Unconjugated bilirubin, also called indirect bilirubin, is released from macrophages into the bloodstream. Being water-insoluble, it binds to albumin for safe transport to the liver, protecting tissues from toxic effects.<<', critical: true },
          { type: 'paragraph', content: '>>At the liver, the bilirubin-albumin complex binds hepatocyte receptors; bilirubin dissociates and enters liver cells through OATP1B1/3 transporters.<<', critical: true },
          { type: 'paragraph', content: '>>Inside the hepatocyte, bilirubin is conjugated with glucuronic acid by UDP-glucuronosyltransferase, forming conjugated bilirubin, also called direct bilirubin, which is water-soluble.<<', critical: true },
          { type: 'paragraph', content: '>>Conjugated bilirubin is then actively transported across the hepatocyte membrane into bile canaliculi by MRP2 or ABCC2 transport proteins. The bile, containing conjugated bilirubin, flows through bile ducts, is stored in the gallbladder, and is released into the duodenum during digestion.<<', critical: true }
        ],
        raw: '>>Unconjugated bilirubin, also called indirect bilirubin, is released from macrophages into the bloodstream. Being water-insoluble, it binds to albumin for safe transport to the liver, protecting tissues from toxic effects. At the liver, the bilirubin-albumin complex binds hepatocyte receptors; bilirubin dissociates and enters liver cells through OATP1B1/3 transporters. Inside the hepatocyte, bilirubin is conjugated with glucuronic acid by UDP-glucuronosyltransferase, forming conjugated bilirubin, also called direct bilirubin, which is water-soluble. Conjugated bilirubin is then actively transported across the hepatocyte membrane into bile canaliculi by MRP2 or ABCC2 transport proteins. The bile, containing conjugated bilirubin, flows through bile ducts, is stored in the gallbladder, and is released into the duodenum during digestion.<<'
      },
      audioUrl: '/Audio/Topic-011/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: true,
      title: '>>Provide the definition of direct and indirect bilirubin.<<',
      keyPoints: [
        'Indirect bilirubin (unconjugated): Water-insoluble form produced from heme breakdown; not yet processed by liver',
        'Indirect characteristics: Bound to albumin for transport; not directly measurable without chemical reaction; represents initial form before hepatic processing',
        'Direct bilirubin (conjugated): Water-soluble form conjugated with glucuronic acid by UDP-glucuronosyltransferase in liver',
        'Direct characteristics: Can be measured directly in blood tests; ready for excretion in bile; non-toxic',
        'Clinical significance indirect: Elevated in hemolytic anemia, ineffective erythropoiesis, impaired hepatic uptake',
        'Clinical significance direct: Elevated in biliary obstruction, hepatitis, liver disease with impaired excretion'
      ],
      officialDefinitions: [
         'Indirect bilirubin (unconjugated bilirubin): the form of bilirubin that is produced from the breakdown of heme in hemoglobin and has not yet been processed by the liver. It is water-insoluble and requires transport in the bloodstream bound to albumin. It is termed "indirect" because it is not directly measurable in blood tests without a reaction that breaks the bond with albumin. It represents the initial form of bilirubin before hepatic uptake and conjugation. Elevated levels of indirect bilirubin can indicate conditions such as hemolytic anemia, ineffective erythropoiesis, or impaired liver function affecting bilirubin uptake or conjugation.',
         'Direct bilirubin (conjugated bilirubin): the form of bilirubin that has been processed in the liver where it is conjugated with glucuronic acid by the enzyme UDP-glucuronosyltransferase, making it water-soluble. It is termed "direct" because it can be measured directly in blood tests without the need for chemical reactions to break its bonds. This form of bilirubin can be excreted in bile and eliminated from the body. Elevated levels of direct bilirubin may indicate issues such as biliary obstruction, hepatitis, or liver disease, where the excretion of bilirubin from the liver is impaired.'
      ],
      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: '>>Indirect bilirubin, also called unconjugated bilirubin:<<',
            critical: true,
            items: [
              'Bilirubin produced from heme breakdown in hemoglobin that has not yet been processed by the liver.',
              'Water-insoluble and requires transport bound to albumin.',
              'Termed indirect because it is not directly measurable in blood tests without a chemical reaction that breaks the bond with albumin.',
              'Represents the initial form before hepatic uptake and conjugation.',
              'Elevated levels indicate hemolytic anemia, ineffective erythropoiesis, or impaired liver function affecting bilirubin uptake or conjugation.'
            ]
          },
          {
            type: 'list',
            intro: '>>Direct bilirubin, also called conjugated bilirubin:<<',
            critical: true,
            items: [
              'Bilirubin processed in the liver where it is conjugated with glucuronic acid by UDP-glucuronosyltransferase, making it water-soluble.',
              'Termed direct because it can be measured directly in blood tests without chemical reactions.',
              'This form can be excreted in bile and eliminated from the body.',
              'Elevated levels indicate biliary obstruction, hepatitis, or liver disease where bilirubin excretion from the liver is impaired.'
            ]
          }
        ],
        raw: '>>Indirect bilirubin, also called unconjugated bilirubin, is bilirubin produced from heme breakdown in hemoglobin that has not yet been processed by the liver. It is water-insoluble and requires transport bound to albumin. Termed indirect because it is not directly measurable in blood tests without a chemical reaction that breaks the bond with albumin. It represents the initial form before hepatic uptake and conjugation. Elevated levels indicate hemolytic anemia, ineffective erythropoiesis, or impaired liver function affecting bilirubin uptake or conjugation. Direct bilirubin, also called conjugated bilirubin, is bilirubin processed in the liver where it is conjugated with glucuronic acid by UDP-glucuronosyltransferase, making it water-soluble. Termed direct because it can be measured directly in blood tests without chemical reactions. This form can be excreted in bile and eliminated from the body. Elevated levels indicate biliary obstruction, hepatitis, or liver disease where bilirubin excretion from the liver is impaired.<<'
      },
      audioUrl: '/Audio/Topic-011/LO-04.mp3'
    },
    {
      id: 'lo-5',
      isCritical: true,
      title: '>>The fate of bilirubin in the intestines, the enterohepatic circulation and secretion. Urobilinogen (UBG), and the significance of its detection in the urine.<<',
      keyPoints: [
        'Intestinal conversion: Conjugated bilirubin deconjugated by intestinal bacteria → urobilinogen',
        'Stercobilin formation: Most urobilinogen further metabolized by bacteria → stercobilin (excreted in feces, gives brown color)',
        'Enterohepatic circulation: Some urobilinogen reabsorbed from intestines into portal circulation → returns to liver for reconjugation or enters systemic circulation',
        'Urinary excretion: Urobilinogen entering bloodstream filtered by kidneys → urobilin in urine (gives yellow color)',
        'Normal UBG detection: Small amount normal; indicates healthy liver function and regular bilirubin breakdown',
        'Elevated UBG significance: Liver disease (hepatitis, cirrhosis) or hemolytic anemia with increased RBC breakdown; Low/absent UBG significance: Biliary obstruction (bilirubin cannot reach intestines) or severe liver damage'
      ],
      officialDefinitions: [
        'Secretion into the intestines: after its formation in the liver, conjugated bilirubin (bilirubin glucuronide) is secreted into bile through MRP2/ABCC2 transporters and released into the duodenum. Conjugated bilirubin travels with bile and helps in emulsifying dietary fats. From liver to gut with bile where further transformation occurs (urobilinogen - urobilin, stercobilinogen - stercobilin; oxidoreductive process mediated by bacteria).',
        'Urobilinogen formation: in the intestines, conjugated bilirubin is deconjugated by intestinal bacteria, forming urobilinogen. A significant portion of urobilinogen is further metabolized by intestinal bacteria to stercobilin, which is excreted in the feces, giving it a brown color.',
        'Enterohepatic circulation: some urobilinogen is reabsorbed from the intestines into the portal circulation and transported back to the liver, where it may be reconjugated and secreted back into bile or enter the systemic circulation. The portion of urobilinogen that returns to the liver contributes to the enterohepatic circulation of bilirubin, a process that recycles bilirubin and helps maintain bilirubin levels within the body. Some of them are reabsorbed to liver with bile acids via the portal vein: enterohepatic circulation.',
        'Urobilinogen in urine: urobilinogen that enters the bloodstream can be filtered by the kidneys and excreted in the urine as urobilin, giving urine its characteristic yellow color. Small amounts of urobilinogen is absorbed across GIT and into blood where it is taken to kidneys and added into urine. This is called urobilin. Causes yellow coloration of the urine. Secretion with feces (gives its color) and urine.',
        'Significance of urobilinogen detection in urine: the presence of a small amount of urobilinogen in urine is considered normal, indicating healthy liver function and regular bilirubin breakdown. Increased urobilinogen levels in urine can suggest liver dysfunction, such as hepatitis or cirrhosis, where the liver\'s ability to process bilirubin is compromised. Higher than normal levels may also indicate increased breakdown of RBCs, as seen in hemolytic anemia, leading to more bilirubin production and urobilinogen formation. Urobilinogen in urine: ↑degradation of red blood cells, hepatic disease with icterus. The absence or low levels of urobilinogen in urine can indicate biliary obstruction, where bilirubin cannot reach the intestines for conversion to urobilinogen. It may also suggest severe liver damage, where bilirubin conjugation and bile secretion are impaired.'
      ],
      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Conjugated bilirubin secreted in bile into the duodenum is deconjugated by intestinal bacteria, forming urobilinogen.<<', critical: true },
          {
            type: 'list',
            intro: '>>Urobilinogen undergoes several fates:<<',
            critical: true,
            items: [
              'Most urobilinogen is further metabolized by intestinal bacteria to stercobilin, excreted in feces, giving stool its characteristic brown color.',
              'Some urobilinogen is reabsorbed from the intestines into the portal circulation and transported back to the liver, contributing to enterohepatic circulation where it may be reconjugated and secreted back into bile, or enter systemic circulation.',
              'Urobilinogen entering the bloodstream is filtered by the kidneys and excreted in urine as urobilin, giving urine its characteristic yellow color.'
            ]
          },
          { type: 'paragraph', content: '>>Small amounts of urobilinogen in urine are normal, indicating healthy liver function and regular bilirubin breakdown.<<', critical: true },
          {
            type: 'list',
            intro: '>>Abnormal urobilinogen levels indicate:<<',
            critical: true,
            items: [
              'Elevated levels suggest liver dysfunction such as hepatitis or cirrhosis where the liver\'s ability to process bilirubin is compromised, or hemolytic anemia where increased red blood cell breakdown leads to more bilirubin production and urobilinogen formation.',
              'Low or absent urobilinogen indicates biliary obstruction where bilirubin cannot reach the intestines for conversion to urobilinogen, or severe liver damage where bilirubin conjugation and bile secretion are impaired.'
            ]
          }
        ],
        raw: '>>Conjugated bilirubin secreted in bile into the duodenum is deconjugated by intestinal bacteria, forming urobilinogen. Most urobilinogen is further metabolized by intestinal bacteria to stercobilin, excreted in feces, giving stool its characteristic brown color. Some urobilinogen is reabsorbed from the intestines into the portal circulation and transported back to the liver, contributing to enterohepatic circulation where it may be reconjugated and secreted back into bile, or enter systemic circulation. Urobilinogen entering the bloodstream is filtered by the kidneys and excreted in urine as urobilin, giving urine its characteristic yellow color. Small amounts of urobilinogen in urine are normal, indicating healthy liver function and regular bilirubin breakdown. Elevated urobilinogen levels in urine suggest liver dysfunction such as hepatitis or cirrhosis where the liver\'s ability to process bilirubin is compromised, or hemolytic anemia where increased red blood cell breakdown leads to more bilirubin production and urobilinogen formation. Low or absent urobilinogen in urine indicates biliary obstruction where bilirubin cannot reach the intestines for conversion to urobilinogen, or severe liver damage where bilirubin conjugation and bile secretion are impaired.<<'
      },
      audioUrl: '/Audio/Topic-011/LO-05.mp3'
    },
    {
      id: 'lo-6',
      isCritical: false,
      title: 'The definition of icterus (jaundice) and some of its main forms.',
      keyPoints: [
        'Icterus (jaundice): Yellowish discoloration of skin, mucous membranes, and whites of eyes caused by elevated bilirubin in blood',
        'Hemolytic jaundice (prehepatic): Excessive RBC breakdown → unconjugated bilirubin exceeds liver capacity; normal-colored urine, dark stools; examples: hemolytic anemias, malaria, autoimmune hemolysis',
        'Hepatic jaundice (hepatocellular): Liver cell dysfunction → impaired uptake, conjugation, or secretion; both unconjugated and conjugated bilirubin elevated; examples: hepatitis, cirrhosis, drug-induced liver injury',
        'Obstructive jaundice (posthepatic): Bile duct blockage → conjugated bilirubin accumulates; dark urine, pale stools, pruritus; examples: gallstones, tumors, biliary strictures',
        'Hemolytic characteristics: Elevated indirect bilirubin, normal urine color (unconjugated not water-soluble), increased urobilinogen in feces',
        'Obstructive characteristics: Elevated direct bilirubin, dark urine (conjugated is water-soluble), pale stools (no stercobilin), pruritus from bile salts'
      ],
      officialDefinitions: [
        'Icterus (jaundice): the yellowish discoloration of the skin, mucous membranes, and the whites of the eyes, caused by elevated levels of bilirubin in the blood.',
        'Hemolytic jaundice (prehepatic jaundice): occurs due to excessive breakdown of red blood cells (hemolysis), which leads to an overproduction of unconjugated (indirect) bilirubin that exceeds the liver\'s capacity to process and excrete it. The rate of red blood cell destruction is so high that the liver cannot keep up with conjugating the excess bilirubin. As a result, unconjugated bilirubin accumulates in the blood. Characteristics: elevated unconjugated bilirubin (high levels of indirect bilirubin in the blood), normal or dark stools (due to increased excretion of urobilinogen), normal-colored urine (since unconjugated bilirubin is not water-soluble, it does not appear in the urine). Common causes: hemolytic anemias (conditions like sickle cell anemia, thalassemia, or spherocytosis), infections (such as malaria, where red blood cells are destroyed), autoimmune hemolysis (where the body\'s immune system attacks its own red blood cells).',
        'Hepatic (hepatocellular) jaundice: liver cell dysfunction (damage or disease of hepatocytes). Mechanism: impaired uptake, conjugation, or secretion of bilirubin due to damaged liver cells. Both unconjugated and conjugated bilirubin may accumulate. Alterations in serum bilirubin levels: total bilirubin ↑ (>17 µmol/L), direct bilirubin ↑↑ (>50% of total bilirubin), indirect bilirubin ↑, serum UBG N / decreased, UBG in urine N / slightly ↑, bilirubin in urine + / ↑ (due to direct bilirubin leakage), stercobilin & urobilin N / ↓ (lighter stools due to reduced bilirubin reaching intestines). Bilirubin and urobilinogen may be present in urine. Examples: hepatitis (viral, alcoholic, autoimmune), cirrhosis, drug-induced liver injury.',
        'Obstructive jaundice (posthepatic jaundice): occurs when there is a blockage in the bile ducts that prevents bile (and bilirubin) from being transported from the liver to the intestines. This blockage results in the accumulation of conjugated (direct) bilirubin in the blood. The conjugated bilirubin is formed as normal, but due to the obstruction, it cannot be excreted into the intestines. This leads to a backflow of conjugated bilirubin into the bloodstream. Conjugated bilirubin is water-soluble and appears in the urine, causing dark-colored urine. The lack of bile reaching the intestines results in pale stools because the stercobilin that normally gives stool its color is absent. Characteristics: elevated conjugated bilirubin (high levels of direct bilirubin in the blood), dark urine (due to the excretion of conjugated bilirubin through the kidneys), pale stools (caused by the absence of stercobilin in the feces), itching (pruritus) can occur due to bile salts accumulating in the blood. Common causes: gallstones (blocking the bile duct), tumors (in the bile ducts or pancreas), biliary strictures (narrowing of the bile ducts due to scarring or inflammation), biliary atresia (congenital condition where bile ducts are absent or malformed).'
      ],
      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Icterus or jaundice is the yellowish discoloration of skin, mucous membranes, and the whites of the eyes, caused by elevated bilirubin in blood.' },
          {
            type: 'list',
            intro: 'Main forms of jaundice:',
            items: [
              'Hemolytic jaundice (prehepatic): Occurs from excessive red blood cell breakdown, leading to overproduction of unconjugated bilirubin exceeding the liver\'s capacity to process it. Results in elevated unconjugated bilirubin in blood, normal-colored urine since unconjugated bilirubin is not water-soluble, and normal or dark stools from increased urobilinogen excretion. Common causes include hemolytic anemias like sickle cell anemia or thalassemia, infections such as malaria, and autoimmune hemolysis.',
              'Hepatic jaundice (hepatocellular): Caused by liver cell dysfunction from conditions like hepatitis, cirrhosis, or drug-induced liver injury. This impairs uptake, conjugation, or secretion of bilirubin, causing both unconjugated and conjugated bilirubin to accumulate in blood. Bilirubin may appear in urine from direct bilirubin leakage.',
              'Obstructive jaundice (posthepatic): Occurs when bile duct blockage prevents bile from reaching the intestines. This causes conjugated bilirubin to accumulate in blood and appear in urine, causing dark urine, while stools become pale from absence of stercobilin. Pruritus can occur from bile salts accumulating in blood. Common causes include gallstones, tumors, and biliary strictures.'
            ]
          }
        ],
        raw: 'Icterus or jaundice is the yellowish discoloration of skin, mucous membranes, and the whites of the eyes, caused by elevated bilirubin in blood. Hemolytic jaundice, also called prehepatic jaundice, occurs from excessive red blood cell breakdown, leading to overproduction of unconjugated bilirubin exceeding the liver\'s capacity to process it. This results in elevated unconjugated bilirubin in blood, normal-colored urine since unconjugated bilirubin is not water-soluble, and normal or dark stools from increased urobilinogen excretion. Common causes include hemolytic anemias like sickle cell anemia or thalassemia, infections such as malaria, and autoimmune hemolysis. Hepatic or hepatocellular jaundice is caused by liver cell dysfunction from conditions like hepatitis, cirrhosis, or drug-induced liver injury. This impairs uptake, conjugation, or secretion of bilirubin, causing both unconjugated and conjugated bilirubin to accumulate in blood. Bilirubin may appear in urine from direct bilirubin leakage. Obstructive or posthepatic jaundice occurs when bile duct blockage prevents bile from reaching the intestines. This causes conjugated bilirubin to accumulate in blood and appear in urine, causing dark urine, while stools become pale from absence of stercobilin. Pruritus can occur from bile salts accumulating in blood. Common causes include gallstones, tumors, and biliary strictures.'
      },
      audioUrl: '/Audio/Topic-011/LO-06.mp3'
    }
  ],
  referenceValues: [
    {
      parameter: 'Plasma bilirubin',
      value: '5.0-17.0 μM',
      isCritical: true
    }
  ]
};

export default topic11;