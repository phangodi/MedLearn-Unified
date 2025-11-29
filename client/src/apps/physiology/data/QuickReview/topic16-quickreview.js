const topic16QuickReview = {
  topicId: 'topic-16',
  topicNumber: 16,
  title: 'Fibrinolysis. Inhibition of clotting in vitro and in vivo',
  learningObjectives: {
    'lo-1': {
      title: 'Expound the activation and regulation of the plasmin system.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Plasmin System Overview'
        },
        {
          type: 'paragraph',
          content: 'The plasmin system dissolves clots through fibrinolysis. Plasminogen (inactive precursor from liver) converts to plasmin (active enzyme) which degrades fibrin, fibrinogen, Factor V, and Factor VIII, producing fibrin degradation products (FDPs) including D-dimer.'
        },
        {
          type: 'list',
          title: 'Activation Pathways',
          items: [
            'tPA (tissue plasminogen activator): Released from endothelial cells, binds fibrin in clots, converts plasminogen to plasmin - PRIMARY activator',
            'uPA (urokinase): Involved in tissue remodeling and cell migration',
            'Factor XIIa via kallikrein: Intrinsic pathway contribution',
            'Streptokinase: Bacterial enzyme used clinically to dissolve clots'
          ]
        },
        {
          type: 'list',
          title: 'Regulation Mechanisms',
          items: [
            'PAI-1 (plasminogen activator inhibitor-1): From endothelial cells, blocks tPA and uPA, prevents excessive activation',
            'α2-antiplasmin: Main plasmin inhibitor, binds free plasmin to prevent fibrin breakdown OUTSIDE clots',
            'TAFI (thrombin-activatable fibrinolysis inhibitor): Activated by thrombin, modifies fibrin making it resistant to plasmin degradation'
          ]
        },
        {
          type: 'keypoint',
          content: 'Balanced regulation ensures clots dissolve appropriately while preventing excessive fibrinolysis that could cause bleeding.'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the following systems and their regulation: thrombomodulin/protein C/protein S; heparin/antithrombin.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Natural Anticoagulant Systems'
        },
        {
          type: 'comparison',
          title: 'Two Major Anticoagulant Pathways',
          leftColumn: {
            title: 'Thrombomodulin-Protein C-Protein S',
            items: [
              'Thrombomodulin: Transmembrane protein on endothelial cells',
              'Binds thrombin → converts it from procoagulant to anticoagulant',
              'Thrombin-thrombomodulin activates Protein C (vitamin K-dependent zymogen) → APC',
              'Protein S (vitamin K-dependent cofactor) enhances APC activity',
              'APC + Protein S inactivate Factor Va and Factor VIIIa',
              'Result: Reduced thrombin generation, limited clot formation'
            ]
          },
          rightColumn: {
            title: 'Heparin-Antithrombin',
            items: [
              'Antithrombin (AT): Serine protease inhibitor from liver',
              'Inhibits thrombin (IIa) and Factor Xa most notably',
              'Also inhibits IXa, XIa, XIIa less efficiently',
              'Heparin: Glycosaminoglycan from mast cells/basophils',
              'Binds AT → conformational change',
              'Enhances AT activity up to 1000-fold',
              'Result: Rapid inactivation of thrombin and Factor Xa'
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'Both Protein C and Protein S require vitamin K for synthesis. Only free Protein S is active as a cofactor.'
        },
        {
          type: 'clinical',
          content: 'Clinical relevance: Deficiencies in Protein C, Protein S, or antithrombin increase thrombosis risk. Heparin is used therapeutically to enhance antithrombin activity for immediate anticoagulation.'
        }
      ]
    },
    'lo-3': {
      title: 'Enlist substances that can be used to inhibit blood coagulation in vitro (EDTA, citrate) and define their mechanism of action.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'In Vitro Anticoagulants'
        },
        {
          type: 'paragraph',
          content: 'All in vitro anticoagulants work by removing or chelating calcium ions (Ca²⁺), which are essential cofactors for multiple steps in the coagulation cascade, including activation of Factors II, VII, IX, and X.'
        },
        {
          type: 'table',
          title: 'In Vitro Anticoagulant Mechanisms',
          headers: ['Substance', 'Mechanism', 'Application'],
          rows: [
            ['EDTA (ethylenediaminetetraacetic acid)', 'Chelates Ca²⁺, rendering it unavailable for coagulation', 'Complete blood count (CBC) tubes'],
            ['Citrate', 'Forms soluble calcium-citrate complexes, reducing free Ca²⁺', 'Coagulation tests (PT, aPTT), blood banks - REVERSIBLE by adding Ca²⁺ back'],
            ['Oxalates', 'Precipitates Ca²⁺ as insoluble calcium oxalate', 'Specific laboratory tests'],
            ['Heparin', 'Enhances antithrombin activity to prevent clotting', 'Blood samples requiring liquid state for analysis']
          ]
        },
        {
          type: 'keypoint',
          content: 'Citrate is unique among calcium chelators because it can be reversed by adding calcium back, making it ideal for coagulation testing.'
        }
      ]
    },
    'lo-4': {
      title: 'Enlist substances and drugs that can be used in vivo to inhibit thrombocyte activation and blood coagulation or to facilitate fibrinolysis.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'In Vivo Anticoagulants and Fibrinolytics'
        },
        {
          type: 'table',
          title: 'Drug Classes for Hemostasis Control',
          headers: ['Drug Class', 'Examples', 'Mechanism', 'Clinical Use'],
          rows: [
            ['COX Inhibitors', 'Aspirin', 'Irreversibly acetylates cyclooxygenase → prevents TXA2 formation → reduced platelet aggregation', 'Antithrombotic therapy, cardiovascular prevention'],
            ['Heparin', 'Unfractionated heparin, LMWH', 'Binds antithrombin III → enhances inhibition of thrombin (IIa) and Factor Xa', 'Immediate anticoagulation for thromboembolic prevention/treatment'],
            ['Vitamin K Antagonists', 'Warfarin, Acenocoumarol', 'Inhibits vitamin K epoxide reductase → reduces synthesis of Factors II, VII, IX, X, Protein C, Protein S', 'Long-term anticoagulation (atrial fibrillation, VTE prevention)'],
            ['Plasminogen Activators', 'tPA, Alteplase, Urokinase, Streptokinase', 'Convert plasminogen to plasmin → degrades fibrin clots', 'Acute clot dissolution (MI, ischemic stroke, PE)']
          ]
        },
        {
          type: 'keypoint',
          content: 'Thromboxane A2 (TXA2) promotes vasoconstriction and platelet aggregation. Aspirin blocks TXA2 formation by inhibiting COX enzyme.'
        },
        {
          type: 'steps',
          title: 'Vitamin K Antagonist Mechanism',
          steps: [
            'Vitamin K antagonist (e.g., Warfarin) inhibits vitamin K epoxide reductase',
            'Enzyme inhibition prevents carboxylation of glutamate residues on vitamin K-dependent factors',
            'Reduced synthesis of active Factors II, VII, IX, X, Protein C, and Protein S',
            'Result: Potent anticoagulation over several days (delayed onset)'
          ]
        },
        {
          type: 'clinical',
          content: 'Fibrinolytic agents (tPA, streptokinase) are used in acute emergencies to rapidly dissolve clots in myocardial infarction, ischemic stroke, and pulmonary embolism. Timing is critical for effectiveness.'
        }
      ]
    }
  }
};

export default topic16QuickReview;
