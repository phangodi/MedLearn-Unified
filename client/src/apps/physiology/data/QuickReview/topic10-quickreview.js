/**
 * Quick Review content for Topic 10 - Erythropoiesis
 * The process of red blood cell formation in bone marrow
 */
const topic10QuickReview = {
  topicId: 'topic-10',
  topicNumber: 10,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the red bone marrow and enlist the main progenitors of red blood cells. Provide the definition of reticulocyte, its staining and the significance of reticulocyte count.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Red Bone Marrow & RBC Progenitors', critical: true },
        { type: 'paragraph', text: 'Red bone marrow is hematopoietic tissue found in skull, sternum, pelvis, and epiphyses of long bones - the primary site of blood cell production.' },
        { type: 'list', intro: 'Main progenitor sequence:', items: [
          'Hematopoietic stem cells (HSCs) - multipotent, self-renewing',
          'Common myeloid progenitors (CMPs)',
          'Colony-forming unit-erythroid (CFU-E) - responds to EPO',
          'Proerythroblast → Basophilic → Polychromatic → Orthochromatic erythroblast',
          'Reticulocyte → Mature Erythrocyte'
        ]},
        { type: 'keypoint', text: 'Yellow marrow can convert back to red marrow under chronic hypoxia' },
        { type: 'header', text: 'Reticulocyte Definition & Significance', critical: true },
        { type: 'paragraph', text: 'Reticulocyte = immature RBC lacking nucleus but containing residual ribosomal RNA and organelle remnants (mitochondria, Golgi).' },
        { type: 'comparison',
          left: {
            title: 'Staining',
            items: [
              'Supravital stains used',
              'New methylene blue or brilliant cresyl blue',
              'RNA precipitates as blue-purplish reticulum'
            ]
          },
          right: {
            title: 'Count Significance',
            items: [
              'Normal: 0.4-1.5% of RBCs',
              'Reflects bone marrow activity',
              'Matures in 1-2 days after release'
            ]
          }
        },
        { type: 'table',
          headers: ['Count', 'Indicates', 'Causes'],
          rows: [
            ['High', 'Increased RBC production', 'Hemolytic anemia, blood loss, treatment response'],
            ['Low', 'Decreased RBC production', 'Bone marrow failure, CKD, nutritional deficiency']
          ]
        }
      ]
    },
    'lo-2': {
      title: 'Describe the main stages and mechanisms of iron metabolism: absorption (ferroportin), transport (transferrin), storage (ferritin, hemosiderin), regulation (hepcidin).',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Iron Metabolism - Four Main Stages', critical: true },
        { type: 'keypoint', text: 'Daily uptake: 1-2 mg (total need: 10-15 mg/day) - absorption site: duodenum & proximal jejunum' },
        { type: 'list', intro: '1. ABSORPTION - The Journey In:', items: [
          'Dcytb (duodenal cytochrome B) reduces Fe³⁺ → Fe²⁺ at apical surface',
          'DMT1 transports Fe²⁺ into enterocytes',
          'FERROPORTIN - only known iron exporter on basolateral membrane',
          'Hephaestin oxidizes Fe²⁺ → Fe³⁺ for transferrin binding'
        ]},
        { type: 'paragraph', text: '2. TRANSPORT: Transferrin carries Fe³⁺ in blood to tissues (especially bone marrow for erythropoiesis). Uses receptor-mediated endocytosis via transferrin receptors (TfR).' },
        { type: 'comparison',
          left: {
            title: '3. STORAGE - Ferritin',
            items: [
              'Primary storage protein',
              'Soluble, non-toxic form',
              'Location: liver, spleen, bone marrow'
            ]
          },
          right: {
            title: '3. STORAGE - Hemosiderin',
            items: [
              'Less readily mobilized',
              'Ferritin breakdown product',
              'Stored in macrophages'
            ]
          }
        },
        { type: 'header', text: '4. REGULATION - Hepcidin', critical: true },
        { type: 'paragraph', text: 'Hepcidin = peptide hormone from liver. Binds ferroportin → internalization & degradation → decreases iron export.' },
        { type: 'table',
          headers: ['Condition', 'Hepcidin Level', 'Result'],
          rows: [
            ['High iron', '↑ Increased', 'Reduced absorption & release'],
            ['Low iron', '↓ Suppressed', 'Enhanced absorption & mobilization'],
            ['Inflammation', '↑ Increased', 'Anemia of chronic disease']
          ]
        },
        { type: 'clinical', text: 'Iron recycling: Splenic/hepatic macrophages recycle iron from senescent RBCs via ferroportin → transferrin → bone marrow' }
      ]
    },
    'lo-3': {
      title: 'The role of vitamin B12 and folic acid in the formation of red blood cells.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'B12 & Folic Acid - DNA Synthesis Partners', critical: true },
        { type: 'keypoint', text: 'Both essential for DNA synthesis (thymidine triphosphate) and proper nuclear maturation in erythroblasts' },
        { type: 'comparison',
          left: {
            title: 'Vitamin B12 (Cobalamin)',
            items: [
              'RDA: 1-2 µg/day',
              'Binds R-protein in saliva',
              'Then binds intrinsic factor (parietal cells)',
              'Absorbed in ileum (receptor-mediated)',
              'Transport: transcobalamin I & II'
            ]
          },
          right: {
            title: 'Folic Acid (B9)',
            items: [
              'RDA: 200 µg/day',
              'Absorbed in jejunum & duodenum',
              'Converted to tetrahydrofolate (THF)',
              'THF = active form for DNA synthesis',
              'Plant sources: leafy greens'
            ]
          }
        },
        { type: 'header', text: 'Critical Interrelationship' },
        { type: 'paragraph', text: 'Methionine synthase: B12 acts as cofactor to convert homocysteine → methionine. This reaction regenerates active THF from methyl-THF.' },
        { type: 'keypoint', text: 'Without B12, folate becomes "trapped" as inactive methyl-THF → functional folate deficiency even with adequate intake!' },
        { type: 'header', text: 'Megaloblastic Anemia (Deficiency Result)' },
        { type: 'list', intro: 'Impaired DNA synthesis leads to:', items: [
          'Megaloblasts - large, immature RBC precursors',
          'Macrocytes - larger than normal RBCs in circulation',
          'Fragile membranes, irregular shape',
          'Shortened lifespan → reduced oxygen transport',
          'Symptoms: fatigue, weakness'
        ]},
        { type: 'clinical', text: 'B12 deficiency also causes neurological symptoms (subacute combined degeneration) - folic acid deficiency does not!' }
      ]
    },
    'lo-4': {
      title: 'Erythropoietin: production (kidney), trigger, function.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Erythropoietin (EPO) - The Master Regulator', critical: true },
        { type: 'paragraph', text: 'EPO = glycoprotein hormone that regulates erythropoiesis. Primary source: peritubular interstitial cells of kidneys. Secondary: liver (main source during fetal development).' },
        { type: 'header', text: 'TRIGGER: Hypoxia', critical: true },
        { type: 'list', intro: 'Low blood oxygen causes:', items: [
          'Anemia - reduced RBC count',
          'High altitude - reduced O₂ availability',
          'Chronic lung disease (COPD) - impaired O₂ exchange',
          'Heart failure, circulatory shock',
          'Carbon monoxide poisoning'
        ]},
        { type: 'keypoint', text: 'Mechanism: Hypoxia → decreased HIF degradation → HIF rises → acts as transcription factor → activates EPO gene' },
        { type: 'header', text: 'FUNCTION: Stimulate Erythropoiesis', critical: true },
        { type: 'list', intro: 'EPO actions in bone marrow:', items: [
          'Stimulates proliferation of erythroid progenitors (especially CFU-E)',
          'Promotes differentiation of myeloid stem cells → RBC precursors',
          'Enhances survival and maturation of erythroid precursor cells',
          'Increases mature RBC output'
        ]},
        { type: 'paragraph', text: 'Result: ↑ Hemoglobin levels → ↑ Oxygen transport capacity → Alleviates hypoxia (negative feedback loop)' },
        { type: 'clinical', text: 'Recombinant EPO used therapeutically for anemia in CKD, chemotherapy. Also abused in sports doping ("blood doping").' }
      ]
    },
    'lo-5': {
      title: 'Enlist some important hormonal influences on erythropoiesis (e.g., growth hormone, testosterone).',
      blocks: [
        { type: 'header', text: 'Hormonal Influences on Erythropoiesis' },
        { type: 'table',
          headers: ['Hormone', 'Effect', 'Mechanism'],
          rows: [
            ['Testosterone', 'STIMULATES ↑', 'Stimulates EPO production + erythroid progenitor proliferation'],
            ['Growth Hormone', 'STIMULATES ↑', 'Increases O₂ demand → ↑ EPO; enhances bone marrow growth factors'],
            ['Thyroxine (T4)', 'STIMULATES ↑', 'Increases BMR → ↑ tissue O₂ consumption → ↑ EPO'],
            ['Estrogens', 'INHIBITS ↓', 'Suppresses EPO production']
          ]
        },
        { type: 'keypoint', text: 'Testosterone effect explains higher hematocrit in males vs females' },
        { type: 'comparison',
          left: {
            title: 'Stimulators',
            items: [
              'Testosterone',
              'Growth Hormone',
              'Thyroxine'
            ]
          },
          right: {
            title: 'Inhibitors',
            items: [
              'Estrogens',
              '(Chronic high cortisol)'
            ]
          }
        },
        { type: 'paragraph', text: 'Cortisol: Complex dual role - normal levels support erythropoiesis; chronic high levels (Cushing\'s syndrome) may suppress it.' },
        { type: 'clinical', text: 'Anabolic steroid abuse increases RBC count (polycythemia) - increases blood viscosity and cardiovascular risk' }
      ]
    }
  }
};

export default topic10QuickReview;
