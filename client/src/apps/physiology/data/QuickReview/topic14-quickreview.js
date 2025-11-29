const topic14QuickReview = {
  topicId: 'topic-14',
  topicNumber: 14,
  learningObjectives: {
    'lo-1': {
      title: 'What is the difference between hemostasis and blood coagulation? Compare the white and the red thrombus.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Hemostasis vs Blood Coagulation'
        },
        {
          type: 'paragraph',
          text: 'Hemostasis is the complete process stopping bleeding after vascular injury through vasoconstriction, platelet plug formation, and blood coagulation. Blood coagulation (secondary hemostasis) is a specific phase within hemostasis where clotting factors form a fibrin mesh to stabilize the platelet plug.'
        },
        {
          type: 'comparison',
          headers: ['White Thrombus', 'Red Thrombus'],
          rows: [
            { label: 'Timing', col1: 'Primary hemostasis', col2: 'Secondary hemostasis' },
            { label: 'Composition', col1: 'Mainly platelets + fibrin, few RBCs', col2: 'Fibrin mesh trapping many RBCs' },
            { label: 'Appearance', col1: 'Pale/white (high platelet content)', col2: 'Dark red (rich RBC content)' },
            { label: 'Formation', col1: 'Platelets adhere to collagen and aggregate', col2: 'Coagulation cascade produces fibrin' },
            { label: 'Blood Flow', col1: 'Fast flow, little RBC trapping', col2: 'Slower flow, efficient RBC trapping' }
          ]
        },
        {
          type: 'keypoint',
          text: 'Both thrombi serve hemostatic balance, defense against infection, and tissue repair.'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the basic steps of thrombopoiesis.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Thrombopoiesis: Platelet Formation Process'
        },
        {
          type: 'paragraph',
          text: 'Thrombopoiesis is the process of platelet formation from megakaryocytes in bone marrow, regulated by thrombopoietin feedback mechanisms.'
        },
        {
          type: 'steps',
          title: 'Six Steps of Thrombopoiesis',
          steps: [
            {
              title: 'HSC Differentiation',
              description: 'Pluripotent hematopoietic stem cells differentiate into CFU-Me (Colony Forming Unit-Megakaryocyte)'
            },
            {
              title: 'Megakaryoblast Development',
              description: 'CFU-Me differentiates into megakaryoblasts, the earliest committed precursors in platelet production'
            },
            {
              title: 'Megakaryocyte Formation',
              description: 'Megakaryoblasts mature into large multinucleated megakaryocytes via endomitosis (DNA replication without cytokinesis)'
            },
            {
              title: 'Thrombopoietin Regulation',
              description: 'Glycoprotein hormone from liver/kidney binds receptors on megakaryocytes, regulating proliferation and maturation'
            },
            {
              title: 'Platelet Release',
              description: 'Megakaryocytes extend proplatelets into bone marrow blood vessels; proplatelets fragment releasing individual platelets (anucleate cell fragments)'
            },
            {
              title: 'Circulation and Feedback',
              description: 'Platelets circulate 7-10 days. Low platelet count increases free thrombopoietin, stimulating megakaryocyte production'
            }
          ]
        },
        {
          type: 'keypoint',
          text: 'Thrombopoietin feedback: When platelet count drops, more free thrombopoietin is available to stimulate megakaryocyte proliferation.'
        }
      ]
    },
    'lo-3': {
      title: 'What is the normal value of thrombocyte count?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Normal Platelet Count'
        },
        {
          type: 'formula',
          expression: 'Normal platelet count = 150,000 - 300,000 / μL blood'
        },
        {
          type: 'comparison',
          headers: ['Condition', 'Definition'],
          rows: [
            { label: 'Normal', col1: '150,000-300,000/μL', col2: 'Adequate hemostatic function' },
            { label: 'Thrombocytopenia', col1: '< 150,000/μL', col2: 'Increased bleeding risk' },
            { label: 'Thrombocytosis', col1: '> 300,000/μL', col2: 'Increased clotting risk' }
          ]
        },
        {
          type: 'keypoint',
          text: 'This is a critical reference value for exam. Remember: 150,000-300,000/μL.'
        }
      ]
    },
    'lo-4': {
      title: 'Describe the most important morphological features of the thrombocytes, size, types of granules.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Platelet Morphology and Structure'
        },
        {
          type: 'list',
          title: 'Basic Characteristics',
          items: [
            'Size: 1-3 μm in diameter',
            'Lifespan: 5-8 days in circulation',
            'Structure: Anucleate (no nucleus), but contains multiple cytoplasmic organelles',
            'Surface: Glycoproteins (integrins) for adhesion',
            'Cytoskeleton: Actin-myosin for shape change and contraction',
            'Open Canalicular System (OCS): Allows granule content release'
          ]
        },
        {
          type: 'table',
          headers: ['Granule Type', 'Contents', 'Function'],
          rows: [
            {
              cells: [
                'Dense Granules',
                'ADP, serotonin, adrenaline, Ca²⁺',
                'Platelet activation and aggregation'
              ]
            },
            {
              cells: [
                'Alpha Granules',
                'Factor V, vWF, PDGF, fibronectin, fibrinogen',
                'Clotting and wound healing'
              ]
            },
            {
              cells: [
                'Lysosomes',
                'Degradative enzymes',
                'Break down foreign particles'
              ]
            }
          ]
        },
        {
          type: 'keypoint',
          text: 'Additional components: Mitochondria provide energy; glycogen serves as energy source for platelet metabolism.'
        }
      ]
    },
    'lo-5': {
      title: 'Elaborate the role of primary hemostasis, enlist its major processes.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Primary Hemostasis: Initial Response to Vascular Injury'
        },
        {
          type: 'paragraph',
          text: 'Primary hemostasis is the rapid initial response to vascular injury that prevents blood loss through formation of a temporary platelet plug (white thrombus), providing foundation for secondary hemostasis stabilization.'
        },
        {
          type: 'steps',
          title: 'Four Major Processes',
          steps: [
            {
              title: 'Vasoconstriction',
              description: 'Immediate vessel constriction reduces blood flow. Mechanisms: local myogenic spasm, endothelin release, thromboxane A2 and serotonin from platelets, nervous reflexes. Duration: minutes to hours.'
            },
            {
              title: 'Platelet Adhesion',
              description: 'Platelets bind to exposed subendothelial collagen. Direct (low shear): GPIa/IIa and GPVI receptors bind collagen. Indirect (high shear): GPIb/IX/V receptors bind von Willebrand factor attached to collagen.'
            },
            {
              title: 'Platelet Activation',
              description: 'Morphological changes (pseudopod formation), degranulation (α-granules release clotting factors/growth factors; dense granules release ADP/Ca²⁺/serotonin), synthesis of thromboxane A2.'
            },
            {
              title: 'Platelet Aggregation',
              description: 'Platelets link via fibrinogen bridges binding GPIIb/IIIa receptors on adjacent platelets, forming stable platelet plug. Amplified by ADP and thromboxane A2.'
            }
          ]
        },
        {
          type: 'keypoint',
          text: 'Additional roles: Wound healing (PDGF release) and defense against infection (trapping pathogens).'
        }
      ]
    },
    'lo-6': {
      title: '>>Explain the adhesion, aggregation and activation of thrombocytes.<< Give some of the molecular mechanisms of these process (von Villebrand factor, the glycoproteins involved in platelet adhesion/aggregation, the mediators, receptors and signal transduction pathways involved in platelet activation).',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Platelet Adhesion, Activation, and Aggregation: Molecular Mechanisms'
        },
        {
          type: 'list',
          title: 'ADHESION: Platelet Binding to Injured Vessel',
          items: [
            'Direct (low shear stress - veins): GPIa/IIa (integrin α2β1) and GPVI receptors bind directly to exposed collagen',
            'Indirect (high shear stress - arteries): GPIb/IX/V receptors bind von Willebrand factor (vWF), which is attached to collagen',
            'vWF role: Secreted by endothelial cells, bridges collagen and platelets under high shear conditions'
          ]
        },
        {
          type: 'list',
          title: 'ACTIVATION: Mediators and Signal Transduction',
          items: [
            'Mediators: ADP (binds P2Y1, P2Y12), thromboxane A2 (binds TXA2 receptors), thrombin (binds PAR-1, PAR-4), collagen (activates GPIa/IIa, GPVI)',
            'GPCR pathway: Gq and Gi proteins activate → PLC-β hydrolyzes PIP2 → IP3 + DAG',
            'IP3 → Releases Ca²⁺ from internal stores → Increased intracellular Ca²⁺',
            'DAG → Activates protein kinase C (PKC)',
            'High Ca²⁺ triggers: GPIIb/IIIa exposure, shape change (pseudopods), granule secretion',
            'Thromboxane A2 synthesis: Arachidonic acid → cyclooxygenase → TXA2 (aspirin inhibits this step)'
          ]
        },
        {
          type: 'list',
          title: 'AGGREGATION: Platelet-to-Platelet Binding',
          items: [
            'Activated GPIIb/IIIa (integrin αIIbβ3) undergoes conformational change',
            'Fibrinogen and vWF bind GPIIb/IIIa, creating bridges between adjacent platelets',
            'ADP and thromboxane A2 amplify aggregation by recruiting more platelets',
            'Forms stable platelet plug (white thrombus)'
          ]
        },
        {
          type: 'clinical',
          context: 'Aspirin irreversibly inhibits cyclooxygenase, preventing thromboxane A2 synthesis. This reduces platelet activation and aggregation, making aspirin an effective antiplatelet therapy for cardiovascular disease prevention.'
        }
      ]
    },
    'lo-7': {
      title: 'What is the role of the endothelial cells in the regulation of hemostasis?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Endothelial Regulation: Balancing Pro- and Anti-Thrombotic Factors'
        },
        {
          type: 'paragraph',
          text: 'Endothelial cells maintain hemostatic balance by producing anti-thrombotic factors when intact and pro-thrombotic factors when damaged.'
        },
        {
          type: 'table',
          headers: ['Factor', 'Mechanism', 'Effect'],
          rows: [
            {
              cells: [
                'Prostacyclin (PGI2)',
                'Increases platelet cAMP → Decreases Ca²⁺',
                'Inhibits platelet activation/aggregation'
              ]
            },
            {
              cells: [
                'Nitric Oxide (NO)',
                'Increases cGMP → Vasodilation',
                'Inhibits platelet adhesion/aggregation'
              ]
            },
            {
              cells: [
                'Heparan Sulfate',
                'Binds and enhances antithrombin III',
                'Inhibits thrombin and factor Xa'
              ]
            },
            {
              cells: [
                'Thrombomodulin',
                'Binds thrombin → Activates protein C',
                'Protein C degrades factors Va/VIIIa'
              ]
            },
            {
              cells: [
                'Glycocalyx',
                'Surface carbohydrate layer',
                'Prevents excessive platelet adhesion'
              ]
            }
          ]
        },
        {
          type: 'list',
          title: 'Pro-Thrombotic Activities (When Damaged)',
          items: [
            'Release von Willebrand factor from Weibel-Palade bodies → facilitates platelet adhesion via GPIb/IX/V',
            'Express P-selectin → recruits platelets and leukocytes to injury site',
            'Release endothelin → potent vasoconstriction reduces blood flow, limiting blood loss'
          ]
        },
        {
          type: 'keypoint',
          text: 'Thrombomodulin-Protein C system: Thrombin changes function when bound to thrombomodulin. The complex activates protein C, which (with protein S) degrades factors Va and VIIIa, limiting coagulation.'
        }
      ]
    }
  }
};

export default topic14QuickReview;
