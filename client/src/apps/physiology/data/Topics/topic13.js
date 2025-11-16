const topic13 = {
  id: 'topic-13',
  mcqs: ['mcq-2'],
  number: 13,
  title: 'The AB0 and Rh blood groups',
  subtitle: 'Blood group systems based on red blood cell surface antigens, their inheritance patterns, clinical significance in transfusion medicine, and prevention of hemolytic disease.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: '>>Describe the antigens and the circulating antibodies of the ABO blood group (Landsteiner-rules).<<',
      keyPoints: [
        'Landsteiner\'s first rule: If an antigen (agglutinogen) is present on RBCs, the corresponding antibody (agglutinin) must be absent in plasma',
        'Landsteiner\'s second rule: If an antigen is absent on RBCs, the corresponding antibody must be present in plasma (applies only to ABO, not Rh)',
        'Type A: A antigens on RBCs, anti-B antibodies in plasma',
        'Type B: B antigens on RBCs, anti-A antibodies in plasma',
        'Type AB (universal recipient): Both A and B antigens on RBCs, no anti-A or anti-B antibodies in plasma',
        'Type O (universal donor): No A or B antigens on RBCs, both anti-A and anti-B antibodies in plasma',
        'Antibodies are IgM class (pentameric structure), develop naturally at 3-6 months of age through environmental exposure'
      ],
      officialDefinitions: [
        'Landsteiner rules: If an antigen is present on the surface of the red blood cell, the corresponding antibody is never found in the plasma. If an antigen is absent from the red blood cell surface, the corresponding antibody must be present in the plasma. The first rule applies to all blood group systems. The second rule applies only to the AB0 blood group system. In other blood group systems (e.g., Rh), antibodies do not occur naturally but develop as a result of immunization.',
        'ABO Blood Group Antigens: The antigens (agglutinogens) A and B are found on the surface of RBCs. Type A: Has A antigens on RBCs and anti-B antibodies in the plasma. Type B: Has B antigens on RBCs and anti-A antibodies in the plasma. Type AB: Has both A and B antigens on RBCs and no anti-A or anti-B antibodies in the plasma. This type is known as the universal recipient for transfusions. Type O: Has no A or B antigens on RBCs but has both anti-A and anti-B antibodies in the plasma. This type is known as the universal donor.',
        'Circulating Antibodies (Agglutinins): Antibodies in the plasma react specifically with the antigens that are not present on the individual\'s RBCs. Type A individuals have anti-B antibodies. Type B individuals have anti-A antibodies. Type O individuals have both anti-A and anti-B antibodies. Type AB individuals have no anti-A or anti-B antibodies.',
        'Agglutinogen (antigen): Surface antigen on RBC\'s membrane. Proteins, carbohydrates. Agglutinin (antibody): Antibody against agglutinogen. Immunoglobulins. Agglutination: The reaction between an agglutinogen and an agglutinin, which leads to the clumping (agglutination) of cells. Hemagglutination (RBC agglutination). Clinical consequence: The agglutinated cells can block the small blood vessels.',
        'Antigens: A, B, and H. Genes: H (chr.19) and AB0 (chr.9). H gene: fukosil-transferase (H-antigen). AB0 gene: monosacharid-transferase (attaches sugars to the H-antigen). The A/B allele: attaches an A- or B-type sugar side chain to the H antigen structure. The 0 allele: produces an enzymatically inactive protein (the H antigen remains unchanged). Thus, it is not the antigens themselves that are inherited, but the enzymes that create them! The presence or absence of the two antigens (A and B) determines the four blood groups: A, B, AB, and O.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>The ABO blood group system consists of antigens A and B on red blood cell surfaces and corresponding antibodies in plasma, following Landsteiner\'s rules.<<', critical: true },
          {
            type: 'list',
            intro: '>>Landsteiner\'s rules:<<',
            critical: true,
            items: [
              'The first rule states that if an antigen is present on RBCs, the corresponding antibody must be absent in plasma, applying to all blood group systems.',
              'The second rule states that if an antigen is absent on RBCs, the corresponding antibody must be present in plasma, applying only to the ABO system.'
            ]
          },
          {
            type: 'list',
            intro: '>>The four blood types are:<<',
            critical: true,
            items: [
              'Type A has A antigens and anti-B antibodies.',
              'Type B has B antigens and anti-A antibodies.',
              'Type AB has both A and B antigens with no anti-A or anti-B antibodies, making it the universal recipient.',
              'Type O has no A or B antigens but both anti-A and anti-B antibodies, making it the universal donor.'
            ]
          },
          { type: 'paragraph', content: '>>These antibodies are naturally occurring IgM class antibodies that develop around 3 to 6 months of age due to exposure to similar antigens in food and bacteria.<<', critical: true }
        ],
        raw: '>>The ABO blood group system consists of antigens A and B on red blood cell surfaces and corresponding antibodies in plasma, following Landsteiner\'s rules. The first rule states that if an antigen is present on RBCs, the corresponding antibody must be absent in plasma, applying to all blood group systems. The second rule states that if an antigen is absent on RBCs, the corresponding antibody must be present in plasma, applying only to the ABO system. The four blood types are: Type A has A antigens and anti-B antibodies; Type B has B antigens and anti-A antibodies; Type AB has both A and B antigens with no anti-A or anti-B antibodies, making it the universal recipient; and Type O has no A or B antigens but both anti-A and anti-B antibodies, making it the universal donor. These antibodies are naturally occurring IgM class antibodies that develop around 3 to 6 months of age due to exposure to similar antigens in food and bacteria.<<'
      },
      audioUrl: '/Audio/Topic-013/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: false,
      title: 'Describe the pattern of inheritance of the ABO blood group. What kind of proteins are coded by the genes responsible? What is the cause of the development of antibodies?',
      keyPoints: [
        'ABO gene: Located on chromosome 9 with three alleles: IA (A allele), IB (B allele), i (O allele)',
        'IA and IB are codominant: both expressed if inherited together (AB blood type)',
        'i allele is recessive: requires two i alleles (ii) for type O expression',
        'Genotypes: AA or AO = Type A, BB or BO = Type B, AB = Type AB, OO = Type O',
        'Glycosyltransferase enzymes: IA adds N-acetylgalactosamine to H antigen forming A antigen, IB adds D-galactose forming B antigen, i produces inactive enzyme leaving H antigen unmodified',
        'Antibody development: Natural antibodies develop at 3-6 months due to exposure to similar antigens in foods, bacteria, and environment',
        'Immune system recognizes absent antigens as foreign, producing corresponding antibodies'
      ],
      officialDefinitions: [
        'The ABO blood group is determined by a single gene called the ABO gene, located on chromosome 9. This gene has three main allelic forms: IA (A allele), IB (B allele), and i (O allele). IA and IB alleles are codominant, meaning that if an individual inherits both, they will express both antigens on the surface of their red blood cells (resulting in blood type AB). The i allele is recessive, meaning that a person must inherit two i alleles (ii) to have blood type O, which expresses no A or B antigens.',
        'Genotype-Phenotype Relationship: AA or AO: Blood type A, where A antigens are expressed. BB or BO: Blood type B, with B antigens expressed. AB: Blood type AB, expressing both A and B antigens due to codominance. OO: Blood type O, which lacks A and B antigens on red blood cells.',
        'Proteins Coded by the Genes: The IA and IB alleles code for specific glycosyltransferase enzymes that modify the H antigen on the red blood cell surface: IA allele produces an enzyme that adds N-acetylgalactosamine to the H antigen, forming the A antigen. IB allele produces an enzyme that adds D-galactose to the H antigen, forming the B antigen. The i allele does not code for an active enzyme, so the H antigen remains unmodified, resulting in blood type O. These enzymes are crucial for determining which antigens are present on the surface of the red blood cells and thus the blood type.',
        'Development of Antibodies: Antibodies against A and B antigens develop naturally early in life (around 6 months of age), likely due to exposure to similar antigens present in foods, bacteria, and the environment. Individuals with blood type A have anti-B antibodies because their immune system recognizes B antigens as foreign. Individuals with blood type B have anti-A antibodies for the same reason. Individuals with blood type AB do not produce anti-A or anti-B antibodies because their blood cells express both antigens, leading to immune tolerance. Individuals with blood type O produce both anti-A and anti-B antibodies as their red blood cells do not express any antigens, leading the immune system to treat both A and B antigens as foreign.',
        'The anti-A and anti-B antibodies belong to the IgM class (pentameric structure, they do not cross the placenta, and are capable of direct agglutination). The A and B antigens appear as early as the 5th-6th embryonic week. Anti-A and anti-B antibodies, however, only appear at 3-6 months of age. Unlike the antigens, they are not present at birth. After birth, following the initiation of feeding, they develop under the influence of the gut microbiome (bacterial carbohydrate antigens show strong similarity to blood group antigens). They are regular antibodies, occurring naturally in the serum.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The ABO blood group is determined by a gene on chromosome 9 with three alleles: IA for A, IB for B, and i for O. IA and IB are codominant, so inheriting both produces type AB. The i allele is recessive, requiring two i alleles for type O.' },
          {
            type: 'list',
            intro: 'Genotypes:',
            items: [
              'AA or AO produces type A.',
              'BB or BO produces type B.',
              'AB produces type AB.',
              'OO produces type O.'
            ]
          },
          { type: 'paragraph', content: 'These genes code for glycosyltransferase enzymes that modify the H antigen on red blood cell surfaces. The IA allele produces an enzyme adding N-acetylgalactosamine to form A antigen, the IB allele produces an enzyme adding D-galactose to form B antigen, and the i allele produces an inactive enzyme leaving H antigen unmodified.' },
          { type: 'paragraph', content: 'Antibodies against A and B antigens develop naturally at 3 to 6 months of age through exposure to similar antigens in foods, bacteria, and environment. The immune system recognizes antigens absent from the individual\'s RBCs as foreign and produces corresponding antibodies: Type A develops anti-B, Type B develops anti-A, Type O develops both, and Type AB develops neither due to immune tolerance.' }
        ],
        raw: 'The ABO blood group is determined by a gene on chromosome 9 with three alleles: IA for A, IB for B, and i for O. IA and IB are codominant, so inheriting both produces type AB. The i allele is recessive, requiring two i alleles for type O. Genotypes are: AA or AO produces type A, BB or BO produces type B, AB produces type AB, and OO produces type O. These genes code for glycosyltransferase enzymes that modify the H antigen on red blood cell surfaces. The IA allele produces an enzyme adding N-acetylgalactosamine to form A antigen, the IB allele produces an enzyme adding D-galactose to form B antigen, and the i allele produces an inactive enzyme leaving H antigen unmodified. Antibodies against A and B antigens develop naturally at 3 to 6 months of age through exposure to similar antigens in foods, bacteria, and environment. The immune system recognizes antigens absent from the individual\'s RBCs as foreign and produces corresponding antibodies: Type A develops anti-B, Type B develops anti-A, Type O develops both, and Type AB develops neither due to immune tolerance.'
      },
      audioUrl: '/Audio/Topic-013/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: true,
      title: '>>Describe the antigens of the Rh blood group.<<',
      keyPoints: [
        'Five major Rh antigens: D, C, c, E, and e located on red blood cell surface',
        'D antigen: Most immunogenic and clinically significant antigen determining Rh status',
        'Rh-positive (Rh+): D antigen present on RBC surface (approximately 85% of population)',
        'Rh-negative (Rh-): D antigen absent from RBC surface (approximately 15% of population)',
        'Anti-D antibodies: Not naturally present in Rh- individuals, only develop after sensitization through transfusion or pregnancy',
        'D antigen variants: Normal D (13,000-24,000 antigens per RBC), Weak D (100-4,000 antigens), Partial D (missing epitopes)',
        'Clinical significance: Can cause hemolytic disease of newborn and transfusion reactions'
      ],
      officialDefinitions: [
        'The Rh (Rhesus) blood group system is the second most clinically significant blood group system after ABO. It is based on the presence or absence of specific protein antigens on the surface of red blood cells, most importantly the D antigen. A system of 56 antigens, among which D, C, E, c, and e are the most common. Clinical relevance is primarily due to the D antigen. Detectable as early as 5-6 weeks of embryonic development. Integral membrane proteins, important for maintaining RBC shape; their absence severely disrupts RBC structure and function.',
        'Main Rh Antigens: There are five major Rh antigens, denoted as: D, C, c, E, and e. Among these, the D antigen is the most immunogenic and clinically relevant. Rh-positive (Rh⁺): If the D antigen is present on the red blood cell surface. Rh-negative (Rh⁻): If the D antigen is absent.',
        'RhD and RhCE proteins are associated with the RhAG protein. RHAG gene: chr.6. RhAG protein: stabilizing function and transporter protein. Required for the incorporation of RhD/RhCE into the membrane. Functions as an ammonium transporter. Defect → Rh-null phenotype, hemolytic anemia. RhD and RhCE proteins: 12 TM regions and 6 extracellular (EC) loops.',
        'D-antigen variants: D-antigen: Normal D-antigen 13.000-24.000 antigen/rbc. Weak D variant: Quantitative variant. Fewer, but intact D-antigen (has all epitopes) 100-4.000 antigen/rbc. Generally, none antibody. Weak reaction, do not react with all type of reagents. Partial D variant: Qualitative variant. One or more epitopes are missing or modified. Various number. After immunization, anti-D antibodies are produced. Only react with certain reagents.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>The Rh blood group system is the second most clinically significant after ABO, based on specific protein antigens on red blood cell surfaces. There are five major Rh antigens: D, C, c, E, and e. The D antigen is the most immunogenic and clinically relevant.<<', critical: true },
          { type: 'paragraph', content: '>>Rh-positive individuals have the D antigen present, while Rh-negative individuals lack it. Approximately 85% of populations are Rh-positive and 15% are Rh-negative.<<', critical: true },
          { type: 'paragraph', content: '>>Unlike the ABO system, Rh-negative individuals do not naturally produce anti-D antibodies; these only develop after sensitization through transfusion or pregnancy with Rh-positive blood.<<', critical: true },
          {
            type: 'list',
            intro: '>>D antigen variants exist:<<',
            critical: true,
            items: [
              'Normal D with 13,000 to 24,000 antigens per red blood cell.',
              'Weak D with 100 to 4,000 antigens.',
              'Partial D where one or more epitopes are missing.'
            ]
          },
          { type: 'paragraph', content: '>>Clinical significance includes hemolytic disease of the newborn when an Rh-negative mother develops anti-D antibodies during pregnancy with an Rh-positive fetus, with antibodies crossing the placenta in subsequent pregnancies causing fetal red blood cell destruction, and transfusion reactions.<<', critical: true }
        ],
        raw: '>>The Rh blood group system is the second most clinically significant after ABO, based on specific protein antigens on red blood cell surfaces. There are five major Rh antigens: D, C, c, E, and e. The D antigen is the most immunogenic and clinically relevant. Rh-positive individuals have the D antigen present, while Rh-negative individuals lack it. Approximately 85% of populations are Rh-positive and 15% are Rh-negative. Unlike the ABO system, Rh-negative individuals do not naturally produce anti-D antibodies; these only develop after sensitization through transfusion or pregnancy with Rh-positive blood. D antigen variants exist: normal D with 13,000 to 24,000 antigens per red blood cell, Weak D with 100 to 4,000 antigens, and Partial D where one or more epitopes are missing. Clinical significance includes hemolytic disease of the newborn when an Rh-negative mother develops anti-D antibodies during pregnancy with an Rh-positive fetus, with antibodies crossing the placenta in subsequent pregnancies causing fetal red blood cell destruction, and transfusion reactions.<<'
      },
      audioUrl: '/Audio/Topic-013/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: false,
      title: 'Describe the pattern of inheritance of the Rh blood group. What kind of proteins are coded by the genes responsible? Why does the Rh blood group NOT follow the Landsteiner-rule?',
      keyPoints: [
        'Two main genes on chromosome 1: RHD gene (codes for D antigen) and RHCE gene (codes for C, c, E, e antigens)',
        'RHD gene: Dominant inheritance; presence leads to Rh+ status, absence leads to Rh- status',
        'Genotypes: DD or Dd = Rh+, dd = Rh- (both parents must be Rh- or carry d allele for Rh- child)',
        'Proteins coded: RHD encodes D protein (integral membrane protein maintaining RBC structural integrity), RHCE encodes C, c, E, e proteins (membrane proteins)',
        'Does NOT follow Landsteiner\'s second rule: Rh- individuals lack D antigen but do not naturally have anti-D antibodies in plasma',
        'Anti-D antibodies only develop after sensitization: Through pregnancy with Rh+ fetus or transfusion of Rh+ blood',
        'Anti-D antibodies are IgG class: Cross placenta and can cause severe hemolytic disease of newborn'
      ],
      officialDefinitions: [
        'The inheritance pattern of the Rh blood group is determined by two main genes: RHD and RHCE, both located on chromosome 1. RHD gene encodes D antigen. D allele → D antigen → Rh+. d allele → no antigen → Rh-. variants: weak D, partial D. Dominant-recessive inheritance. RHCE gene variants (CE, Ce, cE, ce) encodes a C, c és E, e antigens. Intermedier inheritance (expressed in both homozygous and heterozygous forms).',
        'RHD Gene: Responsible for the expression of the D antigen. The presence of this gene leads to Rh-positive status, meaning the individual expresses the D antigen. If the RHD gene is absent, the person is Rh-negative, lacking the D antigen. RHCE Gene: Encodes the antigens C, c, E, and e. Variants of this gene contribute to different combinations of these antigens.',
        'Dominance and Expression: The RHD gene is dominant, meaning that if an individual inherits the RHD gene from one parent, they will be Rh-positive. If both parents are Rh-negative (lacking the RHD gene), their child will also be Rh-negative. A person who is Rh-positive can have one or two copies of the RHD gene (homozygous or heterozygous for RHD).',
        'Proteins Coded by the Genes: The RHD gene encodes the D protein, which is an integral membrane protein expressed on the surface of red blood cells (RBCs). This protein plays a crucial role in maintaining the structural integrity of RBCs. The RHCE gene encodes proteins that contribute to the expression of C, c, E, and e antigens. These proteins are also membrane proteins, embedded within the RBC membrane and involved in maintaining the cell\'s shape and structural stability.',
        'Why the Rh Blood Group Does NOT Follow the Landsteiner Rule: According to Landsteiner\'s rule, if a specific antigen is absent on the RBC surface, the corresponding antibody should be present in the plasma. This rule holds true for the ABO blood group system but not for the Rh system. Rh-negative individuals do not naturally have anti-D antibodies in their plasma unless they have been sensitized to Rh-positive blood. Sensitization can occur through: Pregnancy: An Rh-negative mother carrying an Rh-positive fetus can be exposed to the D antigen during childbirth, potentially leading to the production of anti-D antibodies. Blood Transfusion: Exposure to Rh-positive blood in an Rh-negative individual can also lead to the formation of anti-D antibodies. The absence of spontaneous anti-D antibodies in Rh-negative individuals without prior exposure is the main reason why the Rh system does not adhere to Landsteiner\'s rule. This is different from the ABO system, where individuals naturally develop anti-A or anti-B antibodies if they lack the respective antigens on their RBCs.',
        'Anti-D antibody of the Rh blood group system: Landsteiner\'s second rule does not apply to anti-D antibodies. Normally absent in the plasma of Rh-negative individuals. Anti-D antibodies are produced in Rh-negative individuals following immunization with Rh-positive RBCs (e.g., transfusion, pregnancy). Anti-D antibodies are IgG type → they cross the placenta → can cause severe hemolytic disease of the newborn (HDN), also called erythroblastosis fetalis.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The Rh blood group inheritance is determined by two genes on chromosome 1: RHD encoding the D antigen and RHCE encoding C, c, E, and e antigens. The RHD gene is dominant; its presence produces Rh-positive status, its absence produces Rh-negative. For an Rh-negative child, both parents must be Rh-negative or carry the recessive allele. Genotypes are DD or Dd for Rh-positive and dd for Rh-negative.' },
          { type: 'paragraph', content: 'The RHD gene encodes the D protein, an integral membrane protein maintaining red blood cell structural integrity. The RHCE gene encodes membrane proteins for C, c, E, and e antigen expression.' },
          { type: 'paragraph', content: 'The Rh system does not follow Landsteiner\'s second rule, which states that if an antigen is absent on RBCs, the corresponding antibody must be present in plasma. This applies to ABO but not Rh. Rh-negative individuals do not naturally have anti-D antibodies unless sensitized through exposure to Rh-positive blood.' },
          { type: 'paragraph', content: 'Sensitization occurs through pregnancy when an Rh-negative mother carries an Rh-positive fetus and is exposed to D antigen during childbirth, or through Rh-positive blood transfusion. The absence of spontaneous anti-D antibodies in unsensitized Rh-negative individuals explains why Rh does not follow Landsteiner\'s second rule. When produced after sensitization, anti-D antibodies are IgG class and can cross the placenta.' }
        ],
        raw: 'The Rh blood group inheritance is determined by two genes on chromosome 1: RHD encoding the D antigen and RHCE encoding C, c, E, and e antigens. The RHD gene is dominant; its presence produces Rh-positive status, its absence produces Rh-negative. For an Rh-negative child, both parents must be Rh-negative or carry the recessive allele. Genotypes are DD or Dd for Rh-positive and dd for Rh-negative. The RHD gene encodes the D protein, an integral membrane protein maintaining red blood cell structural integrity. The RHCE gene encodes membrane proteins for C, c, E, and e antigen expression. The Rh system does not follow Landsteiner\'s second rule, which states that if an antigen is absent on RBCs, the corresponding antibody must be present in plasma. This applies to ABO but not Rh. Rh-negative individuals do not naturally have anti-D antibodies unless sensitized through exposure to Rh-positive blood. Sensitization occurs through pregnancy when an Rh-negative mother carries an Rh-positive fetus and is exposed to D antigen during childbirth, or through Rh-positive blood transfusion. The absence of spontaneous anti-D antibodies in unsensitized Rh-negative individuals explains why Rh does not follow Landsteiner\'s second rule. When produced after sensitization, anti-D antibodies are IgG class and can cross the placenta.'
      },
      audioUrl: '/Audio/Topic-013/LO-04.mp3'
    },
    {
      id: 'lo-5',
      isCritical: false,
      title: 'What is the prevalence of AB0 and Rh phenotypes?',
      keyPoints: [
        'ABO worldwide: Type O most common (approximately 45-49%), Type A (30-40% in Europe, 19-33% globally), Type B (10-25%, higher in Asia), Type AB rarest (less than 5%)',
        'Regional ABO variations: Type O nearly 100% in Central/South America, Type B more common in India and Central Asia (20-30%)',
        'Rh worldwide: Rh-positive approximately 85% of most populations, Rh-negative approximately 15%',
        'Rh regional variations: European populations about 15% Rh-, African populations about 4-8% Rh-, Asian populations less than 1-2% Rh-',
        'Hungary-specific prevalence: O 45%, A1 33%, A2 8%, B 10%, A1B 3%, A2B 1%, Rh+ 85%, Rh- 15%',
        'Type O- universal donor: Can donate to all blood types, Type AB+ universal recipient: Can receive from all blood types'
      ],
      officialDefinitions: [
        'Prevalence of AB0 and Rh phenotypes: Phenotype Africa, Asia, Europe: 0: 49%, 43%, 45%. A1: 19%, 27%, 33%. A2: 8%, Rare, 8%. B: 19%, 25%, 10%. A1B: 3%, 5%, 3%. A2B: 1%, Rare, 1%. Rh+: 72%, 95%, 85%. Rh-: 28%, 5%, 15%.',
        'ABO Phenotypes: Blood Group O: The most common blood type worldwide. It is particularly prevalent in Central and South America, where nearly 100% of the population may have blood type O. Blood Group A: Common in Europe, North America, and Australia, with about 30-40% of the population having this type. Blood Group B: More common in Asia, especially in India and parts of Central Asia, where around 20-30% of the population may have blood type B. Blood Group AB: The rarest of the four main types, typically found in less than 5% of the population worldwide. It is slightly more common in certain parts of Asia.',
        'Rh Phenotypes: Rh-positive (D-positive): The majority of the world population is Rh-positive. Approximately 85% of people in most populations carry the RhD antigen. Rh-negative (D-negative): Less common, with prevalence varying significantly by ethnicity and region.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'ABO and Rh blood group prevalence varies significantly by geographic region and ethnicity.' },
          {
            type: 'list',
            intro: 'ABO worldwide distribution:',
            items: [
              'Type O is most common at 45-49%, particularly in Central and South America approaching 100%.',
              'Type A is 30-40% in Europe, North America, and Australia, and 19-33% globally.',
              'Type B is more common in Asia, especially India and Central Asia at 20-30%, but only 10% in Europe.',
              'Type AB is the rarest at less than 5% worldwide, slightly higher in parts of Asia.'
            ]
          },
          { type: 'paragraph', content: 'For Rh phenotypes, approximately 85% of populations are Rh-positive carrying the RhD antigen. Rh-negative prevalence varies significantly: European populations about 15%, African populations 4-8%, and Asian populations 1-2% or less.' },
          { type: 'paragraph', content: 'In Hungary specifically, the distribution is O 45%, A1 33%, A2 8%, B 10%, A1B 3%, A2B 1%, with 85% Rh-positive and 15% Rh-negative. Type O-negative is the universal donor, compatible with all blood types, while Type AB-positive is the universal recipient, able to receive all blood types.' }
        ],
        raw: 'ABO and Rh blood group prevalence varies significantly by geographic region and ethnicity. Worldwide, Type O is most common at 45-49%, particularly in Central and South America approaching 100%. Type A is 30-40% in Europe, North America, and Australia, and 19-33% globally. Type B is more common in Asia, especially India and Central Asia at 20-30%, but only 10% in Europe. Type AB is the rarest at less than 5% worldwide, slightly higher in parts of Asia. For Rh phenotypes, approximately 85% of populations are Rh-positive carrying the RhD antigen. Rh-negative prevalence varies significantly: European populations about 15%, African populations 4-8%, and Asian populations 1-2% or less. In Hungary specifically, the distribution is O 45%, A1 33%, A2 8%, B 10%, A1B 3%, A2B 1%, with 85% Rh-positive and 15% Rh-negative. Type O-negative is the universal donor, compatible with all blood types, while Type AB-positive is the universal recipient, able to receive all blood types.'
      },
      audioUrl: '/Audio/Topic-013/LO-05.mp3'
    },
    {
      id: 'lo-6',
      isCritical: true,
      title: '>>Describe the process of the blood group determinations.<< Compatibility tests before blood transfusion (major and minor test, biological test).',
      keyPoints: [
        'Blood group determination: Uses Serafol bedside card with anti-A, anti-B, and anti-D sera; blood sample placed in each field and observed for agglutination',
        'Agglutination interpretation: Anti-A field = Type A, anti-B field = Type B, both fields = Type AB, neither field = Type O; anti-D field = Rh+, no anti-D = Rh-',
        'Major compatibility test: Donor RBCs mixed with recipient serum at 38-42°C; checks if recipient has antibodies against donor RBC antigens',
        'Minor compatibility test: Recipient RBCs mixed with donor plasma; checks if donor plasma has antibodies against recipient RBC antigens',
        'Control test: Recipient RBCs mixed with recipient serum to detect autoantibodies',
        'Biological test: Final in vivo check; 25 mL blood infused rapidly over 3-5 minutes, patient observed for reactions; repeated until 75 mL infused',
        'If biological test negative (no symptoms): Transfusion continues at normal rate (60-100 drops per minute); if positive: stop immediately and treat reaction'
      ],
      officialDefinitions: [
        'Blood Group Determination Using Serafol Bedside Card: Preparation: A blood sample from the individual is placed onto a card that contains anti-A, anti-B, and anti-D sera. Application: A drop of blood is placed in the respective areas on the card containing anti-A, anti-B, and anti-D sera. Observation for Agglutination: The card is gently rocked or left to stand for a few minutes. The presence or absence of agglutination (clumping) is observed in each section.',
        'The antigens present on the surface of RBCs are detected based on whether agglutination occurs with specific immobilized antibodies. AB0 blood group: Agglutination in the anti-A field → A. Agglutination in the anti-B field → B. Agglutination in both anti-A & anti-B fields → AB. No agglutination in either field → 0. RhD status: Agglutination in the anti-D field → Rh⁺. No agglutination in the anti-D field → Rh⁻.',
        'Tests before transfusion: 1. Confirming the result of previous blood typing with a Serafol bedside card. 2. Cross agglutination test (38-42 °C): Major test: donor RBC + recipient serum. Minor test: recipient RBC + donor plasma. Control: recipient RBC + recipient serum. 3. Biological test: This is the last chance to detect incompatibility. A volume of 25 ml of blood is infused to a patient at a high speed, the patient is observed for 3-5 minutes. The infusion at high speed followed by observation is repeated until 75 ml of blood is infused. If pathological symptoms are not observed the test is negative; the transfusion can be continued at a normal speed (60-100 drops/minute).',
        'Major Compatibility Test: Purpose: To check if the recipient\'s serum contains antibodies that could react with the donor\'s red blood cells (RBCs). Procedure: The donor\'s RBCs are mixed with the recipient\'s serum. This mixture is incubated and observed for agglutination or hemolysis. Interpretation: If agglutination or hemolysis occurs, it indicates that the recipient has antibodies against the donor\'s RBC antigens, meaning the blood is incompatible. If no reaction is observed, the blood is considered compatible.',
        'Minor Compatibility Test: Purpose: To check if the donor\'s plasma contains antibodies that could react with the recipient\'s RBCs. Procedure: The recipient\'s RBCs are mixed with the donor\'s plasma. This mixture is observed for any signs of agglutination or hemolysis. Interpretation: Agglutination or hemolysis indicates incompatibility. No reaction means the blood is likely safe for transfusion.',
        'Biological Test: Purpose: To act as a final check during the actual blood transfusion process to detect any potential transfusion reaction that might not have been detected during the crossmatching tests. Procedure: A small volume (typically 25 mL) of blood is slowly infused into the recipient over 3-5 minutes. The patient is closely monitored for any signs of a reaction, such as fever, chills, changes in blood pressure, or other symptoms. If no adverse reactions occur, the transfusion can continue at a normal rate. This process may be repeated with additional small infusions up to a total of 75 mL before continuing at the full transfusion rate. Interpretation: If any adverse reaction occurs during the biological test, the transfusion is stopped immediately, and the patient is treated for the reaction. If no symptoms appear, the transfusion is continued at the prescribed rate.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Blood group determination uses a Serafol bedside card containing anti-A, anti-B, and anti-D sera. A drop of patient blood is placed in each field and observed for agglutination.<<', critical: true },
          {
            type: 'list',
            intro: '>>Interpretation:<<',
            critical: true,
            items: [
              'Agglutination in anti-A field indicates Type A.',
              'Agglutination in anti-B field indicates Type B.',
              'Agglutination in both indicates Type AB.',
              'No agglutination indicates Type O.',
              'For Rh status, agglutination in anti-D field indicates Rh-positive while absence indicates Rh-negative.'
            ]
          },
          { type: 'paragraph', content: 'Before transfusion, compatibility tests prevent serious reactions.' },
          {
            type: 'list',
            intro: 'Compatibility tests:',
            items: [
              'Major compatibility test mixes donor red blood cells with recipient serum at 38 to 42 degrees Celsius to detect if recipient has antibodies against donor RBC antigens.',
              'Minor compatibility test mixes recipient red blood cells with donor plasma to detect if donor plasma contains antibodies against recipient RBC antigens.',
              'Control test mixes recipient RBCs with recipient serum to detect autoantibodies.'
            ]
          },
          { type: 'paragraph', content: 'The biological test is the final in vivo check. A volume of 25 milliliters is infused rapidly over 3 to 5 minutes while monitoring for fever, chills, blood pressure changes, or other symptoms. This is repeated until 75 milliliters total is infused. If no adverse reactions occur, transfusion continues at normal rate of 60 to 100 drops per minute. If any reaction occurs, transfusion stops immediately.' }
        ],
        raw: '>>Blood group determination uses a Serafol bedside card containing anti-A, anti-B, and anti-D sera. A drop of patient blood is placed in each field and observed for agglutination. Agglutination in anti-A field indicates Type A, in anti-B indicates Type B, in both indicates Type AB, and no agglutination indicates Type O. For Rh status, agglutination in anti-D field indicates Rh-positive while absence indicates Rh-negative.<< Before transfusion, compatibility tests prevent serious reactions. The major compatibility test mixes donor red blood cells with recipient serum at 38 to 42 degrees Celsius to detect if recipient has antibodies against donor RBC antigens. The minor compatibility test mixes recipient red blood cells with donor plasma to detect if donor plasma contains antibodies against recipient RBC antigens. A control test mixes recipient RBCs with recipient serum to detect autoantibodies. The biological test is the final in vivo check. A volume of 25 milliliters is infused rapidly over 3 to 5 minutes while monitoring for fever, chills, blood pressure changes, or other symptoms. This is repeated until 75 milliliters total is infused. If no adverse reactions occur, transfusion continues at normal rate of 60 to 100 drops per minute. If any reaction occurs, transfusion stops immediately.'
      },
      audioUrl: '/Audio/Topic-013/LO-06.mp3'
    },
    {
      id: 'lo-7',
      isCritical: false,
      title: 'Expound the process of Rh-sensitization (anti-D prophylaxis, erythroblastosis foetalis).',
      keyPoints: [
        'Initial exposure: Rh- mother exposed to Rh+ fetal blood during delivery, miscarriage, trauma, or placental leaks',
        'Immune response: Maternal immune system produces IgG anti-D antibodies recognizing Rh+ RBCs as foreign',
        'Subsequent pregnancies: Pre-formed maternal anti-D antibodies cross placenta and attack Rh+ fetal RBCs causing hemolysis',
        'Erythroblastosis fetalis (hemolytic disease of newborn): Fetal RBC destruction causes anemia, immature RBCs in circulation (erythroblastosis), hyperbilirubinemia, jaundice, hepatosplenomegaly',
        'Severe consequences: Hydrops fetalis (severe edema, heart failure), potential fetal death without intervention',
        'Anti-D prophylaxis purpose: Prevent Rh-sensitization in Rh- mothers by neutralizing Rh+ fetal RBCs before maternal immune response',
        'Prophylaxis timing: Anti-D immunoglobulin (Rho(D)) given at 28 weeks gestation and within 72 hours post-delivery if newborn Rh+; also after amniocentesis, miscarriage, or trauma'
      ],
      officialDefinitions: [
        'Rh-sensitization occurs when an Rh-negative individual is exposed to Rh-positive red blood cells (RBCs), leading to the formation of anti-D antibodies. This process can have significant consequences, particularly during pregnancy if an Rh-negative mother carries an Rh-positive fetus.',
        'Process of Rh-Sensitization: Initial Exposure: An Rh-negative person (lacking the D antigen) may be exposed to Rh-positive blood through blood transfusion, miscarriage, trauma during pregnancy, or childbirth. In pregnancy, an Rh-negative mother can be exposed to Rh-positive fetal blood during delivery or due to placental leaks. Immune Response: The maternal immune system recognizes the Rh-positive RBCs as foreign and produces anti-D antibodies in response. These antibodies are typically of the IgG class and have the ability to cross the placenta. Subsequent Pregnancies: In future pregnancies with an Rh-positive fetus, the pre-formed maternal anti-D antibodies can cross the placenta and attack the fetal Rh-positive RBCs. This leads to hemolysis (destruction of fetal RBCs), causing hemolytic disease of the newborn (HDN), also known as erythroblastosis fetalis.',
        'Erythroblastosis Fetalis (Hemolytic Disease of the Newborn): This is a condition where maternal anti-D antibodies destroy fetal Rh⁺ red blood cells, leading to: Hemolysis → fetal anemia. Erythroblastosis → immature RBCs released into fetal circulation. Hyperbilirubinemia → jaundice. Hydrops fetalis → severe anemia, heart failure, fetal death.',
        'Consequences of Erythroblastosis Fetalis: The destruction of fetal RBCs results in anemia, increased bilirubin production, and various severe conditions, including jaundice, hepatosplenomegaly, and in severe cases, hydrops fetalis (severe edema in the fetus). Without intervention, this condition can lead to fetal death.',
        'Anti-D Prophylaxis: Purpose: To prevent Rh-sensitization in Rh-negative mothers. Mechanism: Prophylactic administration of anti-D immunoglobulin (Rho(D) immune globulin) is given to the mother to neutralize any Rh-positive fetal RBCs that may have entered her circulation before her immune system can react. This prevents the development of maternal anti-D antibodies. Timing: Anti-D immunoglobulin is typically administered around the 28th week of pregnancy and within 72 hours after delivery if the newborn is Rh-positive. It may also be given after events that could lead to fetal-maternal blood mixing, such as amniocentesis, miscarriage, or abdominal trauma.',
        'Hemolytic disease of the newborn (erythroblastosis foetalis): Even a small number of fetal RBCs is sufficient to immunize the mother. In cases of Rh incompatibility, the standard practice is Rh prophylaxis. After delivery, the mother is given anti-D antibodies intravenously within 72 hours. This prevents the mother\'s immune system from producing anti-D antibodies, despite exposure to Rh-positive fetal RBCs during childbirth.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Rh-sensitization occurs when an Rh-negative individual is exposed to Rh-positive red blood cells, forming anti-D antibodies. In pregnancy, an Rh-negative mother is exposed to Rh-positive fetal blood during delivery, miscarriage, trauma, or placental leaks. The maternal immune system produces IgG anti-D antibodies that cross the placenta.' },
          { type: 'paragraph', content: 'In subsequent pregnancies with an Rh-positive fetus, pre-formed maternal antibodies cross the placenta and attack fetal RBCs causing hemolysis. This leads to erythroblastosis fetalis, or hemolytic disease of the newborn. Fetal RBC destruction causes anemia, immature red blood cells called erythroblasts released into circulation, hyperbilirubinemia leading to jaundice, and hepatosplenomegaly. Severe cases develop hydrops fetalis with severe edema and heart failure, potentially fatal without intervention.' },
          { type: 'paragraph', content: 'Anti-D prophylaxis prevents Rh-sensitization by administering anti-D immunoglobulin, or Rho(D) immune globulin, to the mother. This neutralizes Rh-positive fetal RBCs entering maternal circulation before immune response occurs, preventing maternal anti-D antibody development.' },
          { type: 'paragraph', content: 'Timing is critical: administration occurs at 28 weeks gestation and within 72 hours after delivery if newborn is Rh-positive. It is also given after events causing fetal-maternal blood mixing including amniocentesis, miscarriage, or abdominal trauma. Even small numbers of fetal RBCs can immunize the mother, making prophylaxis essential.' }
        ],
        raw: 'Rh-sensitization occurs when an Rh-negative individual is exposed to Rh-positive red blood cells, forming anti-D antibodies. In pregnancy, an Rh-negative mother is exposed to Rh-positive fetal blood during delivery, miscarriage, trauma, or placental leaks. The maternal immune system produces IgG anti-D antibodies that cross the placenta. In subsequent pregnancies with an Rh-positive fetus, pre-formed maternal antibodies cross the placenta and attack fetal RBCs causing hemolysis. This leads to erythroblastosis fetalis, or hemolytic disease of the newborn. Fetal RBC destruction causes anemia, immature red blood cells called erythroblasts released into circulation, hyperbilirubinemia leading to jaundice, and hepatosplenomegaly. Severe cases develop hydrops fetalis with severe edema and heart failure, potentially fatal without intervention. Anti-D prophylaxis prevents Rh-sensitization by administering anti-D immunoglobulin, or Rho(D) immune globulin, to the mother. This neutralizes Rh-positive fetal RBCs entering maternal circulation before immune response occurs, preventing maternal anti-D antibody development. Timing is critical: administration occurs at 28 weeks gestation and within 72 hours after delivery if newborn is Rh-positive. It is also given after events causing fetal-maternal blood mixing including amniocentesis, miscarriage, or abdominal trauma. Even small numbers of fetal RBCs can immunize the mother, making prophylaxis essential.'
      },
      audioUrl: '/Audio/Topic-013/LO-07.mp3'
    },
    {
      id: 'lo-8',
      isCritical: false,
      title: 'What are the definitions of agglutination and hemolysis? What is the consequence of hemolysis?',
      keyPoints: [
        'Agglutination: Clumping of red blood cells when specific antibodies bind to antigens on their surfaces, forming visible clumps indicating immune response',
        'Clinical consequence of agglutination: Agglutinated cells can block small blood vessels causing circulatory problems',
        'Hemolysis: Breakdown or destruction of red blood cells releasing hemoglobin and cellular contents into bloodstream',
        'Intravascular hemolysis: RBC destruction within blood vessels via complement activation (immediate, severe)',
        'Extravascular hemolysis: RBC destruction in spleen by macrophages (delayed, less severe)',
        'Consequences: (1) Release of hemoglobin causing hemoglobinemia and hemoglobinuria (dark red urine), (2) Decreased oxygen carrying capacity causing anemia, (3) Bilirubin increase overwhelming liver causing jaundice, (4) Kidney damage from free hemoglobin causing acute kidney injury or renal failure, (5) Hypotension, circulatory collapse, shock, disseminated intravascular coagulation, potentially fatal if not managed'
      ],
      officialDefinitions: [
        'Agglutination: is the clumping together of red blood cells (RBCs) or other particles when specific antibodies bind to antigens present on their surfaces. This reaction typically occurs when an antigen-antibody interaction leads to the formation of visible clumps, indicating an immune response, such as during blood typing or incompatible blood transfusion.',
        'Hemolysis: is the breakdown or destruction of red blood cells, leading to the release of hemoglobin and other cellular contents into the bloodstream or surrounding fluid. Hemolysis can occur as a result of various factors, including immune reactions (e.g., transfusion of incompatible blood), physical damage to RBCs, or exposure to certain toxins.',
        'Consequence of Hemolysis: 1. Release of Hemoglobin: Hemolysis releases hemoglobin into the bloodstream, which can lead to hemoglobinemia and, subsequently, hemoglobinuria (hemoglobin in the urine), giving the urine a reddish or dark color. 2. Decreased Oxygen Carrying Capacity: The destruction of RBCs reduces the number of functional cells available to transport oxygen, potentially causing anemia. 3. Bilirubin Increase: The breakdown of hemoglobin results in the formation of bilirubin. If hemolysis is extensive, it can overwhelm the liver\'s ability to process bilirubin, leading to jaundice. 4. Kidney Damage: Free hemoglobin in large amounts can damage the kidneys, potentially leading to acute kidney injury or renal failure. 5. Hypotension and Shock: Severe hemolysis, particularly due to a transfusion reaction, can lead to hypotension, circulatory collapse, and shock, which can be life-threatening if not promptly managed.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Agglutination is the clumping of red blood cells when specific antibodies bind to surface antigens, forming visible clumps indicating immune response during blood typing or incompatible transfusion. Agglutinated cells can block small blood vessels causing circulatory problems.' },
          { type: 'paragraph', content: 'Hemolysis is the destruction of red blood cells releasing hemoglobin and cellular contents into the bloodstream. It occurs due to immune reactions such as incompatible blood transfusion, physical RBC damage, or toxin exposure. Intravascular hemolysis is RBC destruction within blood vessels via complement activation, causing immediate severe reactions. Extravascular hemolysis is RBC destruction in the spleen by macrophages, causing delayed less severe reactions.' },
          {
            type: 'list',
            intro: 'Hemolysis consequences include:',
            items: [
              'Hemoglobin release into bloodstream causing hemoglobinemia and hemoglobinuria, giving urine a reddish or dark color.',
              'Decreased oxygen carrying capacity as RBC destruction reduces functional cells available for oxygen transport, potentially causing anemia.',
              'Bilirubin increase from hemoglobin breakdown; extensive hemolysis overwhelms the liver\'s processing ability, leading to jaundice.',
              'Kidney damage as free hemoglobin in large amounts can damage kidneys, potentially causing acute kidney injury or renal failure.',
              'Severe hemolysis, particularly from transfusion reactions, can cause hypotension, circulatory collapse, shock, and disseminated intravascular coagulation, which is life-threatening without prompt management.'
            ]
          }
        ],
        raw: 'Agglutination is the clumping of red blood cells when specific antibodies bind to surface antigens, forming visible clumps indicating immune response during blood typing or incompatible transfusion. Agglutinated cells can block small blood vessels causing circulatory problems. Hemolysis is the destruction of red blood cells releasing hemoglobin and cellular contents into the bloodstream. It occurs due to immune reactions such as incompatible blood transfusion, physical RBC damage, or toxin exposure. Intravascular hemolysis is RBC destruction within blood vessels via complement activation, causing immediate severe reactions. Extravascular hemolysis is RBC destruction in the spleen by macrophages, causing delayed less severe reactions. Hemolysis consequences include: First, hemoglobin release into bloodstream causing hemoglobinemia and hemoglobinuria, giving urine a reddish or dark color. Second, decreased oxygen carrying capacity as RBC destruction reduces functional cells available for oxygen transport, potentially causing anemia. Third, bilirubin increase from hemoglobin breakdown; extensive hemolysis overwhelms the liver\'s processing ability, leading to jaundice. Fourth, kidney damage as free hemoglobin in large amounts can damage kidneys, potentially causing acute kidney injury or renal failure. Fifth, severe hemolysis, particularly from transfusion reactions, can cause hypotension, circulatory collapse, shock, and disseminated intravascular coagulation, which is life-threatening without prompt management.'
      },
      audioUrl: '/Audio/Topic-013/LO-08.mp3'
    }
  ]
};

export default topic13;
