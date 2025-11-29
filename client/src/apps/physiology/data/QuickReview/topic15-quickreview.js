const topic15QuickReview = {
  topicId: 'topic-15',
  topicNumber: 15,
  learningObjectives: {
    'lo-1': {
      title: 'Define the coagulation factors, their nomenclature, site of synthesis, and the mechanism of their action.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Coagulation Factor Overview'
        },
        {
          type: 'paragraph',
          content: 'Coagulation factors are plasma proteins that form a cascade leading to fibrin clot formation. They are numbered with Roman numerals I-XIII, with activated forms denoted by "a" (e.g., Factor IIa).'
        },
        {
          type: 'keypoint',
          content: 'Four vitamin K-dependent factors require γ-carboxylation in the liver: II (prothrombin), VII (proconvertin), IX (Christmas factor), and X (Stuart-Prower factor).'
        },
        {
          type: 'table',
          headers: ['Factor', 'Name', 'Type', 'Role'],
          rows: [
            ['I', 'Fibrinogen', 'Substrate', 'Converted to fibrin by thrombin'],
            ['II', 'Prothrombin', 'Serine protease', 'Converted to thrombin; activates I, V, VIII, XI, XIII'],
            ['VII', 'Proconvertin', 'Serine protease', 'Initiates extrinsic pathway with tissue factor'],
            ['VIII', 'Antihemophilic factor', 'Cofactor', 'With IXa forms tenase complex; deficiency = Hemophilia A'],
            ['IX', 'Christmas factor', 'Serine protease', 'With VIIIa activates X; deficiency = Hemophilia B'],
            ['X', 'Stuart-Prower factor', 'Serine protease', 'Forms prothrombinase complex with Va'],
            ['XIII', 'Fibrin stabilizing factor', 'Transglutaminase', 'Cross-links fibrin strands for clot stability']
          ]
        },
        {
          type: 'clinical',
          content: 'Hemophilia A (Factor VIII deficiency) and Hemophilia B (Factor IX deficiency) are X-linked bleeding disorders causing prolonged clotting times and spontaneous bleeding episodes.'
        }
      ]
    },
    'lo-2': {
      title: 'Describe the extrinsic pathway. Describe the intrinsic pathway and the contact phase.',
      isCritical: true,
      blocks: [
        {
          type: 'comparison',
          title: 'Extrinsic vs Intrinsic Pathways',
          left: {
            header: 'Extrinsic Pathway',
            items: [
              'Speed: Rapid (30 seconds)',
              'Trigger: External trauma and tissue damage',
              'Initiator: Tissue factor (Factor III) from damaged cells',
              'Lab test: PT (prothrombin time)'
            ]
          },
          right: {
            header: 'Intrinsic Pathway',
            items: [
              'Speed: Slower (4-6 minutes)',
              'Trigger: Endothelial damage or negatively charged surfaces',
              'Initiator: Factor XII activation (contact phase)',
              'Lab test: aPTT (activated partial thromboplastin time)'
            ]
          }
        },
        {
          type: 'steps',
          title: 'Extrinsic Pathway Steps',
          items: [
            'Tissue Factor (III) exposed from subendothelial cells upon vessel injury',
            'Factor VII binds Tissue Factor forming TF-VII complex',
            'With Ca²⁺, complex activates VII to VIIa (TF-VIIa)',
            'TF-VIIa activates Factor X to Xa',
            'Converges with intrinsic pathway at Factor X'
          ]
        },
        {
          type: 'steps',
          title: 'Intrinsic Pathway Steps',
          items: [
            'Contact phase: Factor XII contacts negatively charged surfaces (collagen, glass)',
            'HMWK and prekallikrein facilitate XIIa formation',
            'XIIa activates Factor XI to XIa',
            'XIa activates Factor IX to IXa (requires Ca²⁺)',
            'IXa + VIIIa + Ca²⁺ + phospholipids form intrinsic tenase complex',
            'Tenase complex activates Factor X to Xa'
          ]
        },
        {
          type: 'keypoint',
          content: 'The contact phase (Factor XII, HMWK, prekallikrein) is important in vitro for lab tests but plays a minor role in vivo for physiological hemostasis.'
        }
      ]
    },
    'lo-3': {
      title: 'Expound the common phase of blood coagulation (convergence of extrinsic and intrinsic pathways) and the formation of the stable fibrin mesh.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Common Pathway: Final Clot Formation'
        },
        {
          type: 'paragraph',
          content: 'The common pathway is where both extrinsic and intrinsic pathways converge at Factor X activation, leading to thrombin generation and stable fibrin mesh formation.'
        },
        {
          type: 'steps',
          title: 'Common Pathway Sequence',
          items: [
            'Factor Xa (from either pathway) binds Va, Ca²⁺, and phospholipids on platelet surface',
            'This forms the prothrombinase complex',
            'Prothrombinase converts prothrombin (II) to thrombin (IIa)',
            'Thrombin converts fibrinogen (I) to fibrin monomers',
            'Fibrin monomers spontaneously polymerize into fibrin network',
            'Thrombin activates Factor XIII to XIIIa',
            'XIIIa cross-links fibrin strands via covalent bonds',
            'Stable, insoluble fibrin mesh formed'
          ]
        },
        {
          type: 'keypoint',
          content: 'Thrombin is the central amplifying enzyme: it converts fibrinogen to fibrin, activates XIII for cross-linking, and provides positive feedback by activating V, VIII, and XI to promote further coagulation.'
        },
        {
          type: 'paragraph',
          content: 'The stabilized fibrin mesh traps platelets and red blood cells, seals the injury site, and provides structural integrity to withstand mechanical stress from blood flow.'
        }
      ]
    },
    'lo-4': {
      title: 'Explain the role of vitamin K in the synthesis of the so-called vitamin K-dependent coagulation factors.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          content: 'Vitamin K and Coagulation Factor Synthesis'
        },
        {
          type: 'paragraph',
          content: 'Vitamin K is essential for post-translational modification of factors II, VII, IX, X, and anticoagulant proteins C and S. It serves as a cofactor for γ-carboxylation of glutamic acid residues.'
        },
        {
          type: 'steps',
          title: 'Vitamin K Cycle',
          items: [
            'γ-Glutamyl carboxylase in liver adds carboxyl groups to glutamic acid residues',
            'Requires reduced vitamin K (hydroquinone) as cofactor',
            'Glutamic acid converted to γ-carboxyglutamic acid (Gla residues)',
            'During reaction, vitamin K oxidized to vitamin K epoxide',
            'Vitamin K epoxide reductase (VKOR) regenerates active reduced vitamin K',
            'Recycled vitamin K reused for continuous carboxylation'
          ]
        },
        {
          type: 'keypoint',
          content: 'Gla residues enable coagulation factors to bind Ca²⁺ ions effectively. This calcium binding allows factors to anchor to phospholipid surfaces of platelets and endothelial cells, necessary for cascade activation.'
        },
        {
          type: 'clinical',
          content: 'Warfarin inhibits VKOR, preventing vitamin K regeneration and reducing functional factor synthesis. This anticoagulant effect is used therapeutically to prevent thrombotic events like DVT, PE, and stroke.'
        },
        {
          type: 'clinical',
          content: 'Vitamin K deficiency produces non-functional proteins unable to bind calcium, manifesting as increased bleeding tendency (coagulopathy). Newborns receive vitamin K prophylaxis to prevent hemorrhagic disease.'
        }
      ]
    },
    'lo-5': {
      title: 'What is the "placenta sanguis"? Define the process of clot retraction, define the term serum and compare its composition with the blood plasma.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'Post-Clot Formation Processes'
        },
        {
          type: 'list',
          title: 'Key Definitions',
          items: [
            'Placenta sanguis: Historical term for initial blood mass formed after injury before retraction into solid clot',
            'Clot retraction: Post-formation process where clot contracts, becoming denser and smaller',
            'Serum: Liquid remaining after blood clots, with fibrinogen and clotting factors removed'
          ]
        },
        {
          type: 'paragraph',
          content: 'During clot retraction, platelets contract via actin-myosin components (similar to muscle cells), pulling fibrin threads tight. This reduces clot size, draws wound edges together, expels liquid, and stabilizes the clot against mechanical forces.'
        },
        {
          type: 'comparison',
          title: 'Plasma vs Serum',
          left: {
            header: 'Blood Plasma',
            items: [
              'Collected with anticoagulant',
              'Contains clotting factors (fibrinogen)',
              'Water + electrolytes + proteins + hormones',
              'All coagulation factors present',
              'Yellow liquid component of unclotted blood'
            ]
          },
          right: {
            header: 'Serum',
            items: [
              'Obtained after clotting + centrifugation',
              'No fibrinogen or clotting factors',
              'Water + electrolytes + antibodies + hormones',
              'Clotting factors consumed during clotting',
              'Clear liquid after clot formation'
            ]
          }
        },
        {
          type: 'formula',
          content: 'Serum + Coagulation Factors = Plasma'
        }
      ]
    },
    'lo-6': {
      title: 'Compare prothrombin time and coagulation time.',
      isCritical: false,
      blocks: [
        {
          type: 'comparison',
          title: 'PT vs Coagulation Time',
          left: {
            header: 'Prothrombin Time (PT)',
            items: [
              'Measures clotting after adding tissue factor + Ca²⁺',
              'Evaluates extrinsic + common pathways',
              'Normal: 18-20 seconds',
              'Monitors warfarin therapy',
              'Specific and commonly used',
              'Fast results (seconds)'
            ]
          },
          right: {
            header: 'Coagulation Time (Lee-White)',
            items: [
              'Measures whole blood clotting without additives',
              'Evaluates intrinsic + common pathways',
              'Normal: 5-8 minutes',
              'General clotting assessment',
              'Less specific, rarely used',
              'Slower results (minutes)'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Test', 'Pathway', 'Factors Assessed', 'Clinical Use'],
          rows: [
            ['PT', 'Extrinsic + Common', 'VII, V, X, II, I', 'Warfarin monitoring, extrinsic pathway deficiencies'],
            ['Coagulation Time', 'Intrinsic + Common', 'XII, XI, IX, VIII, V, X, II, I', 'General clotting ability assessment']
          ]
        },
        {
          type: 'keypoint',
          content: 'PT is more specific and widely used in modern practice, particularly for anticoagulation monitoring. Coagulation time provides a general assessment but lacks the specificity needed for targeted diagnosis.'
        }
      ]
    },
    'lo-7': {
      title: 'Define INR, its calculation and significance.',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          content: 'International Normalized Ratio (INR)'
        },
        {
          type: 'paragraph',
          content: 'INR is a standardized measure of blood clotting tendency used to monitor oral anticoagulant therapy (warfarin). It ensures consistency across different laboratories regardless of the thromboplastin reagent used.'
        },
        {
          type: 'formula',
          content: 'INR = (PT patient / PT normal control)^ISI\n\nWhere ISI = International Sensitivity Index (from reagent manufacturer)'
        },
        {
          type: 'list',
          title: 'INR Reference Ranges',
          items: [
            'Normal range: 0.8-1.2',
            'Therapeutic range for warfarin: 2.0-3.0',
            'High-risk conditions (mechanical heart valves): 2.5-3.5'
          ]
        },
        {
          type: 'comparison',
          title: 'INR Interpretation',
          left: {
            header: 'High INR (>3.0)',
            items: [
              'Blood clots too slowly',
              'Increased bleeding risk',
              'Warfarin dose too high',
              'May need dose reduction',
              'Risk of hemorrhage'
            ]
          },
          right: {
            header: 'Low INR (<2.0)',
            items: [
              'Blood clots too quickly',
              'Increased thrombosis risk',
              'Warfarin dose too low',
              'May need dose increase',
              'Risk of stroke, DVT, PE'
            ]
          }
        },
        {
          type: 'keypoint',
          content: 'INR standardization allows consistent global patient monitoring regardless of laboratory reagent type. It is the gold standard for warfarin monitoring, ensuring safe and effective anticoagulation therapy.'
        }
      ]
    }
  }
};

export default topic15QuickReview;
