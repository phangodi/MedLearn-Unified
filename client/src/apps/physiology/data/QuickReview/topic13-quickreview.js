const topic13QuickReview = {
  topicId: 'topic-13',
  topicNumber: 13,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the antigens and the circulating antibodies of the ABO blood group (Landsteiner-rules).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Landsteiner\'s Rules',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Two fundamental principles governing ABO blood groups:',
          items: [
            'First Rule (universal): If an antigen is present on RBCs, the corresponding antibody must be absent in plasma',
            'Second Rule (ABO only): If an antigen is absent on RBCs, the corresponding antibody must be present in plasma'
          ],
          critical: true
        },
        {
          type: 'table',
          headers: ['Blood Type', 'RBC Antigens', 'Plasma Antibodies', 'Special Role'],
          rows: [
            ['Type A', 'A antigens', 'Anti-B antibodies', '—'],
            ['Type B', 'B antigens', 'Anti-A antibodies', '—'],
            ['Type AB', 'A and B antigens', 'None', 'Universal recipient'],
            ['Type O', 'None', 'Anti-A and anti-B', 'Universal donor']
          ],
          critical: true
        },
        {
          type: 'keypoint',
          text: 'ABO antibodies are naturally occurring IgM class (pentameric), develop at 3-6 months through environmental exposure',
          critical: true
        }
      ]
    },
    'lo-2': {
      title: 'Describe the pattern of inheritance of the ABO blood group. What kind of proteins are coded by the genes responsible? What is the cause of the development of antibodies?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'ABO Inheritance'
        },
        {
          type: 'paragraph',
          text: 'ABO gene on chromosome 9 has three alleles: IA (A allele), IB (B allele), and i (O allele). IA and IB are codominant; i is recessive.'
        },
        {
          type: 'comparison',
          left: {
            title: 'Genotypes',
            items: [
              'AA or AO → Type A',
              'BB or BO → Type B',
              'AB → Type AB',
              'OO → Type O'
            ]
          },
          right: {
            title: 'Enzymes Produced',
            items: [
              'IA → adds N-acetylgalactosamine',
              'IB → adds D-galactose',
              'i → inactive enzyme',
              'All modify H antigen'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'Antibody Development: Natural antibodies develop at 3-6 months via exposure to similar antigens in food/bacteria. Immune system recognizes absent antigens as foreign and produces corresponding antibodies.'
        }
      ]
    },
    'lo-3': {
      title: 'Describe the antigens of the Rh blood group.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Rh Blood Group System',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Second most clinically significant blood group after ABO. Based on protein antigens on RBC surfaces, with 56 total antigens identified.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Five major Rh antigens:',
          items: [
            'D antigen: Most immunogenic and clinically significant',
            'C, c, E, e antigens: Less clinically important',
            'D antigen determines Rh status: Rh+ (present) or Rh- (absent)',
            'Approximately 85% Rh+, 15% Rh- in most populations'
          ],
          critical: true
        },
        {
          type: 'table',
          headers: ['D Variant', 'Characteristics', 'Antigen Count/RBC'],
          rows: [
            ['Normal D', 'Complete D antigen structure', '13,000-24,000'],
            ['Weak D', 'Quantitative variant, fewer but intact antigens', '100-4,000'],
            ['Partial D', 'Qualitative variant, missing epitopes', 'Variable']
          ],
          critical: true
        },
        {
          type: 'clinical',
          text: 'Unlike ABO, anti-D antibodies are NOT naturally present. They only develop after sensitization (transfusion or pregnancy).'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the pattern of inheritance of the Rh blood group. What kind of proteins are coded by the genes responsible? Why does the Rh blood group NOT follow the Landsteiner-rule?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Rh Inheritance and Genetics'
        },
        {
          type: 'paragraph',
          text: 'Two genes on chromosome 1: RHD (codes for D antigen) and RHCE (codes for C, c, E, e antigens). RHD is dominant: presence = Rh+, absence = Rh-.'
        },
        {
          type: 'list',
          intro: 'Proteins encoded:',
          items: [
            'RHD gene → D protein (integral membrane protein)',
            'RHCE gene → C, c, E, e proteins (membrane proteins)',
            'Both maintain RBC structural integrity',
            'Associated with RhAG protein for stability'
          ]
        },
        {
          type: 'keypoint',
          text: 'Violation of Landsteiner\'s Second Rule: Rh- individuals (lacking D antigen) do NOT naturally have anti-D antibodies in plasma. Anti-D only develops after sensitization.'
        },
        {
          type: 'comparison',
          left: {
            title: 'ABO System',
            items: [
              'Antibodies naturally present',
              'Develop at 3-6 months',
              'IgM class',
              'Environmental exposure'
            ]
          },
          right: {
            title: 'Rh System',
            items: [
              'No natural antibodies',
              'Require sensitization',
              'IgG class (cross placenta)',
              'Transfusion/pregnancy exposure'
            ]
          }
        }
      ]
    },
    'lo-5': {
      title: 'What is the prevalence of AB0 and Rh phenotypes?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Global ABO Distribution'
        },
        {
          type: 'list',
          intro: 'Worldwide prevalence (varies by region):',
          items: [
            'Type O: 45-49% (most common, nearly 100% in Central/South America)',
            'Type A: 30-40% in Europe/North America, 19-33% globally',
            'Type B: 10-25% (higher in Asia: 20-30% in India/Central Asia)',
            'Type AB: <5% (rarest worldwide, slightly higher in parts of Asia)'
          ]
        },
        {
          type: 'table',
          headers: ['Phenotype', 'Hungary', 'Europe', 'Africa', 'Asia'],
          rows: [
            ['O', '45%', '45%', '49%', '43%'],
            ['A1', '33%', '33%', '19%', '27%'],
            ['B', '10%', '10%', '19%', '25%'],
            ['AB', '4%', '4%', '4%', '5%'],
            ['Rh+', '85%', '85%', '72%', '95%'],
            ['Rh-', '15%', '15%', '28%', '5%']
          ]
        },
        {
          type: 'keypoint',
          text: 'Universal Compatibility: O- is universal donor (compatible with all). AB+ is universal recipient (can receive all types).'
        }
      ]
    },
    'lo-6': {
      title: 'Describe the process of the blood group determinations. Compatibility tests before blood transfusion (major and minor test, biological test).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Blood Group Determination',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Using Serafol Bedside Card:',
          items: [
            'Place blood sample in fields containing anti-A, anti-B, and anti-D sera',
            'Observe for agglutination (clumping) in each field',
            'Agglutination in anti-A = Type A; anti-B = Type B; both = Type AB; neither = Type O',
            'Agglutination in anti-D field = Rh+; no agglutination = Rh-'
          ],
          critical: true
        },
        {
          type: 'header',
          text: 'Pre-Transfusion Compatibility Tests',
          critical: true
        },
        {
          type: 'table',
          headers: ['Test', 'Components Mixed', 'Purpose'],
          rows: [
            ['Major Test', 'Donor RBCs + Recipient serum', 'Detect recipient antibodies against donor RBC antigens'],
            ['Minor Test', 'Recipient RBCs + Donor plasma', 'Detect donor antibodies against recipient RBC antigens'],
            ['Control', 'Recipient RBCs + Recipient serum', 'Detect autoantibodies']
          ],
          critical: true
        },
        {
          type: 'steps',
          intro: 'Biological Test (final in vivo check):',
          items: [
            'Infuse 25 mL blood rapidly over 3-5 minutes',
            'Observe patient for fever, chills, BP changes, other symptoms',
            'Repeat until 75 mL total infused',
            'If negative (no symptoms): Continue at normal rate (60-100 drops/min)',
            'If positive (any reaction): Stop immediately and treat'
          ],
          critical: true
        }
      ]
    },
    'lo-7': {
      title: 'Expound the process of Rh-sensitization (anti-D prophylaxis, erythroblastosis foetalis).',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Rh-Sensitization Process'
        },
        {
          type: 'steps',
          intro: 'Mechanism of sensitization:',
          items: [
            'Initial exposure: Rh- mother exposed to Rh+ fetal blood (delivery, miscarriage, trauma, placental leaks)',
            'Maternal immune response: IgG anti-D antibodies produced against Rh+ RBCs',
            'Subsequent pregnancies: Pre-formed anti-D crosses placenta',
            'Fetal hemolysis: Maternal antibodies attack Rh+ fetal RBCs'
          ]
        },
        {
          type: 'clinical',
          text: 'Erythroblastosis Fetalis (Hemolytic Disease of Newborn): Fetal RBC destruction → anemia, immature RBCs (erythroblasts) in circulation, hyperbilirubinemia, jaundice, hepatosplenomegaly. Severe cases → hydrops fetalis (edema, heart failure), potential fetal death.'
        },
        {
          type: 'keypoint',
          text: 'Anti-D Prophylaxis: Prevents sensitization by neutralizing Rh+ fetal RBCs before maternal immune response develops.'
        },
        {
          type: 'list',
          intro: 'Prophylaxis Timing (Anti-D immunoglobulin/Rho(D)):',
          items: [
            'At 28 weeks gestation (routine prophylaxis)',
            'Within 72 hours post-delivery (if newborn Rh+)',
            'After amniocentesis, miscarriage, or abdominal trauma',
            'Even small numbers of fetal RBCs can immunize mother'
          ]
        }
      ]
    },
    'lo-8': {
      title: 'What are the definitions of agglutination and hemolysis? What is the consequence of hemolysis?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Agglutination vs Hemolysis'
        },
        {
          type: 'comparison',
          left: {
            title: 'Agglutination',
            items: [
              'Clumping of RBCs',
              'Antibodies bind surface antigens',
              'Visible clumps form',
              'Blocks small blood vessels',
              'Indicates immune response'
            ]
          },
          right: {
            title: 'Hemolysis',
            items: [
              'Destruction of RBCs',
              'Releases hemoglobin/contents',
              'Intravascular (complement)',
              'Extravascular (macrophages)',
              'Multiple severe consequences'
            ]
          }
        },
        {
          type: 'list',
          intro: 'Consequences of Hemolysis:',
          items: [
            'Hemoglobin release → hemoglobinemia and hemoglobinuria (dark red urine)',
            'Decreased oxygen capacity → anemia (fewer functional RBCs)',
            'Bilirubin overload → jaundice (liver overwhelmed)',
            'Kidney damage → acute kidney injury/renal failure (from free hemoglobin)',
            'Severe reactions → hypotension, circulatory collapse, shock, DIC (life-threatening)'
          ]
        },
        {
          type: 'clinical',
          text: 'Transfusion reactions combine both agglutination (vessel blockage) and hemolysis (RBC destruction), requiring immediate intervention to prevent fatal outcomes.'
        }
      ]
    }
  }
};

export default topic13QuickReview;
