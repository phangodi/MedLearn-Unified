const topic16 = {
  id: 'topic-16',
  mcqs: ['mcq-2'],
  number: 16,
  title: 'Fibrinolysis. Inhibition of clotting in vitro and in vivo',
  subtitle: 'Mechanisms of clot breakdown through fibrinolysis and natural anticoagulant systems, along with substances used to prevent coagulation in laboratory and clinical settings.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: '>>Expound the activation and regulation of the plasmin system.<<',
      keyPoints: [
        'Plasminogen: Inactive precursor produced by liver, circulates in blood and incorporates into clots',
        'Plasmin: Active enzyme that degrades fibrin, fibrinogen, Factor V and Factor VIII',
        'tPA (tissue plasminogen activator): Released from endothelial cells, binds fibrin in clot, converts plasminogen to plasmin',
        'Additional activators: uPA (urokinase), Factor XIIa via kallikrein, streptokinase (bacterial enzyme)',
        'Fibrin degradation products (FDPs): Include D-dimer, serve as markers of fibrinolysis',
        'Inhibitors of activation: PAI-1 (plasminogen activator inhibitor-1) from endothelial cells blocks tPA and uPA',
        'Inhibitor of plasmin: α2-antiplasmin binds free plasmin preventing fibrin breakdown outside clots; TAFI (thrombin-activatable fibrinolysis inhibitor) modifies fibrin making it resistant to plasmin'
      ],
      officialDefinitions: [
        'Plasminogen: an inactive precursor protein produced by the liver and found circulating in the blood and incorporated into blood clots.',
        'Plasmin: the active form of plasminogen, an enzyme responsible for degrading fibrin and dissolving clots.',
        'Tissue Plasminogen Activator (tPA): enzyme released from endothelial cells and binds to fibrin within the clot. It catalyzes the conversion of plasminogen to plasmin.',
        'Urokinase-type Plasminogen Activator (uPA): also plays a role in activating plasminogen but is more involved in tissue remodeling and cell migration.',
        'Factor XIIa (Hageman factor): part of the intrinsic coagulation pathway, it can contribute to plasminogen activation through the generation of kallikrein.',
        'Streptokinase: a bacterial enzyme that can activate plasminogen, used clinically to dissolve clots.',
        'Function of Plasmin: plasmin digests fibrin, fibrinogen, and other clotting factors (like Factor V and Factor VIII), leading to the breakdown of clots. It produces fibrin degradation products (FDPs), which serve as markers for fibrinolysis and are sometimes measured to assess clot breakdown.',
        'Plasminogen Activator Inhibitors (PAIs): these inhibit tPA and uPA, reducing the activation of plasminogen. The most notable is PAI-1, produced by endothelial cells.',
        'α2-Antiplasmin: the main inhibitor of plasmin in the blood. It binds to free plasmin and prevents it from breaking down fibrin outside the clot.',
        'Thrombin-Activatable Fibrinolysis Inhibitor (TAFI): activated by thrombin and works by modifying fibrin so that it is less susceptible to degradation by plasmin.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>The plasmin system is activated when plasminogen, an inactive precursor from the liver, converts to plasmin.<<', critical: true },
          {
            type: 'list',
            intro: '>>Activation occurs through:<<',
            critical: true,
            items: [
              'Tissue plasminogen activator or tPA released from endothelial cells that binds fibrin within clots (primary activator)',
              'Urokinase or uPA',
              'Factor twelve a through kallikrein',
              'Streptokinase used clinically'
            ]
          },
          { type: 'paragraph', content: '>>Plasmin degrades fibrin and fibrinogen, also breaking down Factor five and Factor eight, producing fibrin degradation products including D-dimer as markers.<<', critical: true },
          {
            type: 'list',
            intro: '>>Regulation occurs through multiple inhibitors:<<',
            critical: true,
            items: [
              'Plasminogen activator inhibitor-1 or PAI-1 from endothelial cells inhibits tPA and uPA.',
              'Alpha-2-antiplasmin is the main plasmin inhibitor, binding free plasmin to prevent fibrin breakdown outside clots.',
              'Thrombin-activatable fibrinolysis inhibitor or TAFI, activated by thrombin, modifies fibrin making it resistant to plasmin degradation, limiting fibrinolysis.'
            ]
          }
        ],
        raw: '>>The plasmin system is activated when plasminogen, an inactive precursor from the liver, converts to plasmin. Activation occurs primarily through tissue plasminogen activator or tPA released from endothelial cells that binds fibrin within clots. Additional activators include urokinase or uPA, Factor twelve a through kallikrein, and streptokinase used clinically. Plasmin degrades fibrin and fibrinogen, also breaking down Factor five and Factor eight, producing fibrin degradation products including D-dimer as markers. Regulation occurs through multiple inhibitors. Plasminogen activator inhibitor-1 or PAI-1 from endothelial cells inhibits tPA and uPA. Alpha-2-antiplasmin is the main plasmin inhibitor, binding free plasmin to prevent fibrin breakdown outside clots. Thrombin-activatable fibrinolysis inhibitor or TAFI, activated by thrombin, modifies fibrin making it resistant to plasmin degradation, limiting fibrinolysis.<<'
      },
      audioUrl: '/Audio/Topic-016/LO-01.mp3'
    },
    {
      id: 'lo-2',
      isCritical: true,
      title: '>>Describe the following systems and their regulation: thrombomodulin/protein C/protein S; heparin/antithrombin.<<',
      keyPoints: [
        'Thrombomodulin: Transmembrane protein on endothelial cells that binds thrombin, converting it from procoagulant to anticoagulant',
        'Protein C: Vitamin K-dependent zymogen from liver; activated by thrombin-thrombomodulin complex to form activated protein C or APC',
        'Protein S: Vitamin K-dependent cofactor for APC; only free form is active',
        'APC mechanism: Inactivates Factor Va and Factor VIIIa, reducing prothrombinase and tenase complexes, limiting thrombin generation',
        'Antithrombin (AT or ATIII): Serine protease inhibitor from liver that inhibits thrombin (Factor IIa) and Factor Xa, also IXa, XIa, XIIa',
        'Heparin: Glycosaminoglycan from mast cells and basophils; binds antithrombin inducing conformational change',
        'Heparin effect: Enhances antithrombin activity up to one thousand-fold, rapidly inactivating thrombin and Factor Xa'
      ],
      officialDefinitions: [
        'Thrombomodulin: a transmembrane protein expressed on the surface of endothelial cells. It binds to thrombin to alter its function from a procoagulant to an anticoagulant enzyme.',
        'Protein C: a vitamin K-dependent zymogen produced in the liver that circulates in an inactive form.',
        'Activated Protein C (APC): the active form of protein C, which functions as an anticoagulant by inactivating specific clotting factors.',
        'Protein S: a vitamin K-dependent glycoprotein that serves as a cofactor for activated protein C, enhancing its anticoagulant function.',
        'Mechanism of Thrombomodulin/Protein C/Protein S System: thrombin binds to thrombomodulin on the endothelial cell surface, altering its activity. The thrombin-thrombomodulin complex activates protein C to form activated protein C (APC). APC, with protein S as a cofactor, inactivates Factor Va and Factor VIIIa, reducing the formation of prothrombinase and tenase complexes, respectively. This inactivation decreases the generation of thrombin and subsequently limits clot formation.',
        'Regulation of Thrombomodulin/Protein C/Protein S System: vitamin K is necessary for the synthesis of both protein C and protein S. A deficiency in vitamin K can reduce their production and impair the anticoagulant pathway. Protein S exists in both free and bound forms in the plasma. Only the free form is active and can serve as a cofactor for APC. The system is regulated by the presence of adequate levels of thrombin and the expression of thrombomodulin on endothelial cells.',
        'Antithrombin (AT): a serine protease inhibitor produced by the liver that circulates in the plasma and inhibits clotting factors.',
        'Heparin: a glycosaminoglycan naturally produced by mast cells and basophils. It is also used therapeutically in an exogenous form as an anticoagulant.',
        'Mechanism of Heparin/Antithrombin System: antithrombin inhibits various activated clotting factors, most notably thrombin (Factor IIa) and Factor Xa. It can also inhibit other serine proteases such as Factor IXa, XIa, and XIIa, but less efficiently. Heparin binds to antithrombin and induces a conformational change that significantly enhances its inhibitory activity (up to 1,000-fold). The heparin-antithrombin complex rapidly inactivates thrombin and Factor Xa, preventing the conversion of fibrinogen to fibrin and thus stopping clot formation.',
        'Regulation of Heparin/Antithrombin System: heparin\'s effect is immediate when administered exogenously due to its rapid action in binding and activating antithrombin. Antithrombin levels can be influenced by liver function, as it is synthesized in the liver. Reduced levels of antithrombin can lead to an increased risk of thrombosis. Heparan sulfate, a similar compound to heparin found on endothelial cells, provides a constant regulation of thrombin and other clotting factors under normal physiological conditions.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>The thrombomodulin-protein C-protein S system: Thrombomodulin is a transmembrane protein on endothelial surfaces that binds thrombin, converting it from procoagulant to anticoagulant. The thrombin-thrombomodulin complex activates protein C, a vitamin K-dependent zymogen from the liver, forming activated protein C or APC. Protein S, also vitamin K-dependent, serves as cofactor for APC; only free form is active. APC with protein S inactivates Factor Va and Factor VIIIa, reducing prothrombinase and tenase complex formation, decreasing thrombin generation and limiting clot formation. Regulation depends on vitamin K availability for synthesis, thrombin levels, and thrombomodulin expression.<<', critical: true },
          { type: 'paragraph', content: '>>The heparin-antithrombin system: Antithrombin or AT is a serine protease inhibitor from the liver that inhibits thrombin or Factor two a and Factor ten a most notably, and to lesser extent Factor nine a, eleven a, and twelve a. Heparin, a glycosaminoglycan from mast cells and basophils, binds antithrombin inducing conformational change that enhances its inhibitory activity up to one thousand-fold. The heparin-antithrombin complex rapidly inactivates thrombin and Factor ten a, preventing fibrinogen to fibrin conversion and stopping clot formation. Regulation depends on heparin\'s immediate action when administered and liver function for antithrombin synthesis.<<', critical: true }
        ],
        raw: '>>The thrombomodulin-protein C-protein S system: Thrombomodulin is a transmembrane protein on endothelial surfaces that binds thrombin, converting it from procoagulant to anticoagulant. The thrombin-thrombomodulin complex activates protein C, a vitamin K-dependent zymogen from the liver, forming activated protein C or APC. Protein S, also vitamin K-dependent, serves as cofactor for APC; only free form is active. APC with protein S inactivates Factor Va and Factor VIIIa, reducing prothrombinase and tenase complex formation, decreasing thrombin generation and limiting clot formation. Regulation depends on vitamin K availability for synthesis, thrombin levels, and thrombomodulin expression. The heparin-antithrombin system: Antithrombin or AT is a serine protease inhibitor from the liver that inhibits thrombin or Factor two a and Factor ten a most notably, and to lesser extent Factor nine a, eleven a, and twelve a. Heparin, a glycosaminoglycan from mast cells and basophils, binds antithrombin inducing conformational change that enhances its inhibitory activity up to one thousand-fold. The heparin-antithrombin complex rapidly inactivates thrombin and Factor ten a, preventing fibrinogen to fibrin conversion and stopping clot formation. Regulation depends on heparin\'s immediate action when administered and liver function for antithrombin synthesis.<<'
      },
      audioUrl: '/Audio/Topic-016/LO-02.mp3'
    },
    {
      id: 'lo-3',
      isCritical: true,
      title: '>>Enlist substances that can be used to inhibit blood coagulation in vitro (EDTA, citrate) and define their mechanism of action.<<',
      keyPoints: [
        'EDTA (ethylenediaminetetraacetic acid): Chelates calcium ions, rendering them unavailable for coagulation cascade',
        'Calcium role: Essential cofactor for multiple coagulation steps including Factor II, VII, IX, X activation',
        'Citrate: Binds calcium forming soluble calcium-citrate complexes, reducing free calcium concentration',
        'Citrate reversibility: Can be reversed by adding calcium back, useful for coagulation tests (PT, aPTT)',
        'Oxalates: Precipitate calcium as insoluble calcium oxalate, removing free calcium from plasma',
        'Heparin in vitro: Can be used in vitro by enhancing antithrombin activity to prevent clotting in samples'
      ],
      officialDefinitions: [
        'EDTA (Ethylenediaminetetraacetic acid): Mechanism of Action: EDTA works as an anticoagulant by binding to calcium ions (Ca²⁺) in the blood. Calcium is an essential cofactor for several steps in the coagulation cascade, including the activation of clotting factors like Factor II (prothrombin), Factor VII, Factor IX, and Factor X. By chelating calcium and rendering it unavailable, EDTA effectively prevents blood coagulation. Application: EDTA is commonly used in blood collection tubes for laboratory tests where it is important to prevent blood clotting (e.g., complete blood count).',
        'Citrate: Mechanism of Action: citrate functions as an anticoagulant by binding to calcium ions, similar to EDTA. It forms soluble calcium-citrate complexes, thereby reducing the free calcium ion concentration in the blood. This inhibition disrupts the coagulation cascade and prevents clot formation. Application: citrate is commonly used in blood banks and for coagulation tests like prothrombin time (PT) and activated partial thromboplastin time (aPTT) because it can be reversed by adding calcium back to the blood sample when needed for testing.',
        'Oxalates: Mechanism of Action: oxalates act by precipitating calcium as insoluble calcium oxalate, thus removing free calcium from the plasma. This prevents the formation of the calcium-dependent clotting factors. Application: potassium oxalate is sometimes used as an anticoagulant in blood collection tubes for specific laboratory tests.',
        'Heparin (in vitro use): Mechanism of Action: heparin enhances the activity of antithrombin, a natural inhibitor of thrombin and Factor Xa. By binding to antithrombin and increasing its affinity for clotting factors, heparin prevents the conversion of fibrinogen to fibrin, thus inhibiting coagulation. Application: while commonly used in vivo for anticoagulation therapy, heparin can also be used in vitro to prevent clotting in blood samples that need to remain liquid for specific laboratory analyses.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Substances that inhibit blood coagulation in vitro include EDTA and citrate.<<', critical: true },
          {
            type: 'list',
            intro: '>>Their mechanisms of action:<<',
            critical: true,
            items: [
              'EDTA or ethylenediaminetetraacetic acid chelates calcium ions, making them unavailable for coagulation. Calcium is essential for activation of clotting factors two or prothrombin, seven, nine, and ten. By chelating calcium, EDTA prevents coagulation and is used in blood collection tubes for tests like complete blood count.',
              'Citrate binds calcium forming soluble calcium-citrate complexes, reducing free calcium concentration and disrupting the coagulation cascade. Citrate is used in blood banks and for coagulation tests like prothrombin time and activated partial thromboplastin time because it can be reversed by adding calcium back for testing.',
              'Additionally, oxalates precipitate calcium as insoluble calcium oxalate, removing free calcium from plasma, and are used in specific laboratory tubes.',
              'Heparin can also be used in vitro by enhancing antithrombin activity to prevent clotting in blood samples.'
            ]
          }
        ],
        raw: '>>Substances that inhibit blood coagulation in vitro include EDTA and citrate. EDTA or ethylenediaminetetraacetic acid chelates calcium ions, making them unavailable for coagulation. Calcium is essential for activation of clotting factors two or prothrombin, seven, nine, and ten. By chelating calcium, EDTA prevents coagulation and is used in blood collection tubes for tests like complete blood count. Citrate binds calcium forming soluble calcium-citrate complexes, reducing free calcium concentration and disrupting the coagulation cascade. Citrate is used in blood banks and for coagulation tests like prothrombin time and activated partial thromboplastin time because it can be reversed by adding calcium back for testing. Additionally, oxalates precipitate calcium as insoluble calcium oxalate, removing free calcium from plasma, and are used in specific laboratory tubes. Heparin can also be used in vitro by enhancing antithrombin activity to prevent clotting in blood samples.<<'
      },
      audioUrl: '/Audio/Topic-016/LO-03.mp3'
    },
    {
      id: 'lo-4',
      isCritical: true,
      title: '>>Enlist substances and drugs that can be used in vivo to inhibit thrombocyte activation and blood coagulation or to facilitate fibrinolysis<< (inhibitors of cyclooxygenase, heparin, vitamin K antagonists, plasminogen activators).',
      keyPoints: [
        'Cyclooxygenase (COX) inhibitors: Aspirin irreversibly acetylates COX, preventing thromboxane A2 (TXA2) formation',
        'TXA2 role: Promotes vasoconstriction and platelet aggregation; its inhibition reduces platelet aggregation',
        'Heparin in vivo: Binds antithrombin three, enhancing inhibition of thrombin (Factor IIa) and Factor Xa; immediate effect for thromboembolic prevention',
        'Vitamin K antagonists: Warfarin and acenocoumarol inhibit vitamin K epoxide reductase enzyme',
        'VKA mechanism: Reduces synthesis of vitamin K-dependent factors (II, VII, IX, X) and proteins C and S; used long-term for atrial fibrillation and thromboembolism',
        'Plasminogen activators: tPA (tissue plasminogen activator) and urokinase convert plasminogen to plasmin',
        'Fibrinolytic drugs: Alteplase and streptokinase facilitate clot breakdown; used acutely in myocardial infarction, ischemic stroke, pulmonary embolism'
      ],
      officialDefinitions: [
        'Cyclooxygenase (COX) Enzyme: this enzyme is responsible for converting arachidonic acid to prostaglandins and thromboxane (TXA2).',
        'Thromboxane (TXA2): promotes vasoconstriction and platelet aggregation.',
        'Prostaglandins (e.g., PGI2): have an opposing effect to thromboxane, leading to vasodilation and inhibition of platelet aggregation.',
        'Aspirin: a common COX inhibitor that irreversibly acetylates the enzyme, preventing the formation of thromboxane and, consequently, inhibiting platelet aggregation.',
        'Heparin: Mechanism of Action: heparin binds to antithrombin III, a plasma protein that inhibits thrombin and Factor Xa, preventing the conversion of fibrinogen to fibrin and thus inhibiting clot formation. Effect: enhances the natural anticoagulant effects of antithrombin III, leading to the inhibition of Factors IIa (thrombin) and Xa. Usage: widely used as an anticoagulant for immediate effects in preventing and treating thromboembolic events.',
        'Vitamin K Antagonists: Examples: Warfarin, Acenocoumarol. Mechanism: these drugs inhibit the enzyme vitamin K epoxide reductase, which is required for the post-translational carboxylation of glutamate residues on vitamin K-dependent clotting factors (Factors II, VII, IX, X, and proteins C and S). Effect: reduces the synthesis and activation of these clotting factors, acting as a potent anticoagulant. Clinical Use: used for long-term management in conditions requiring anticoagulation, such as atrial fibrillation and prevention of venous thromboembolism.',
        'Plasminogen Activators: Examples: Tissue plasminogen activator (tPA), Urokinase. Mechanism: these substances convert plasminogen to plasmin, which is an enzyme responsible for degrading fibrin clots. Effect: facilitates fibrinolysis, aiding in the breakdown of blood clots. Clinical Use: employed in acute settings such as myocardial infarction, ischemic stroke, and pulmonary embolism to dissolve clots.',
        'Fibrinolytic Agents: plasminogen activators such as Alteplase and Streptokinase.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: '>>Substances and drugs used in vivo include cyclooxygenase inhibitors, heparin, vitamin K antagonists, and plasminogen activators.<<', critical: true },
          {
            type: 'list',
            intro: '>>These substances work through the following mechanisms:<<',
            critical: true,
            items: [
              'Cyclooxygenase or COX enzyme converts arachidonic acid to prostaglandins and thromboxane A2 or TXA2, which promotes vasoconstriction and platelet aggregation. Aspirin is a common COX inhibitor that irreversibly acetylates the enzyme, preventing thromboxane formation and inhibiting platelet aggregation as an antithrombotic agent.',
              'Heparin binds to antithrombin three, enhancing its natural anticoagulant effects. This binding inhibits Factor two a or thrombin and Factor ten a, preventing fibrinogen conversion to fibrin. Heparin provides immediate anticoagulation for preventing and treating thromboembolic events.',
              'Vitamin K antagonists, including warfarin and acenocoumarol, inhibit vitamin K epoxide reductase, which is required for carboxylation of vitamin K-dependent clotting factors. This reduces synthesis of factors two, seven, nine, and ten, as well as proteins C and S, acting as potent anticoagulants for long-term management in conditions like atrial fibrillation and venous thromboembolism prevention.',
              'Plasminogen activators, such as tissue plasminogen activator or tPA and urokinase, convert plasminogen to plasmin, the enzyme degrading fibrin clots, thus facilitating fibrinolysis. Specific agents like alteplase and streptokinase are employed in acute settings such as myocardial infarction, ischemic stroke, and pulmonary embolism to rapidly dissolve clots.'
            ]
          }
        ],
        raw: '>>Substances and drugs used in vivo include cyclooxygenase inhibitors, heparin, vitamin K antagonists, and plasminogen activators. Cyclooxygenase or COX enzyme converts arachidonic acid to prostaglandins and thromboxane A2 or TXA2, which promotes vasoconstriction and platelet aggregation. Aspirin is a common COX inhibitor that irreversibly acetylates the enzyme, preventing thromboxane formation and inhibiting platelet aggregation as an antithrombotic agent. Heparin binds to antithrombin three, enhancing its natural anticoagulant effects. This binding inhibits Factor two a or thrombin and Factor ten a, preventing fibrinogen conversion to fibrin. Heparin provides immediate anticoagulation for preventing and treating thromboembolic events. Vitamin K antagonists, including warfarin and acenocoumarol, inhibit vitamin K epoxide reductase, which is required for carboxylation of vitamin K-dependent clotting factors. This reduces synthesis of factors two, seven, nine, and ten, as well as proteins C and S, acting as potent anticoagulants for long-term management in conditions like atrial fibrillation and venous thromboembolism prevention. Plasminogen activators, such as tissue plasminogen activator or tPA and urokinase, convert plasminogen to plasmin, the enzyme degrading fibrin clots, thus facilitating fibrinolysis. Specific agents like alteplase and streptokinase are employed in acute settings such as myocardial infarction, ischemic stroke, and pulmonary embolism to rapidly dissolve clots.<<'
      },
      audioUrl: '/Audio/Topic-016/LO-04.mp3'
    }
  ]
};

export default topic16;
