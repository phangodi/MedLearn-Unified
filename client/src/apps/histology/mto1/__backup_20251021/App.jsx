import React, { useState, Component } from 'react';
import { BookOpen, Layers, Zap, Network, Target, ChevronLeft, ChevronRight, Search } from 'lucide-react';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ERROR CAUGHT:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border-4 border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ Error in {this.props.version} format</h2>
          <div className="bg-white p-4 rounded mb-4">
            <p className="font-mono text-sm text-red-800 mb-2">
              <strong>Error:</strong> {this.state.error?.toString()}
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600">Show stack trace</summary>
              <pre className="text-xs overflow-auto max-h-64 mt-2 bg-gray-100 p-2 rounded">
                {this.state.error?.stack}
              </pre>
            </details>
          </div>
          <button 
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ============================================================================
// HOW TO USE THIS TEMPLATE:
// 1. Generate slide data using the prompt: "Generate Slide XX"
// 2. Copy the JavaScript object output from Claude
// 3. Paste it into the SLIDE_DATA constant below
// 4. Repeat for multiple slides to build your study app
// ============================================================================

// PASTE YOUR GENERATED SLIDE DATA HERE
const SLIDE_DATA_70 = {
  slideNumber: "70",
  name: "Peripheral Nerve - Cross Section (HE)",
  section: "cross section",
  stain: "HE",
  
  // EXAM ESSENTIALS - From official school list (nested structure)
  examEssentialStructures: {
    grouped: [
      {
        parent: "bundle of nerve fibers",
        description: "The fundamental unit inside each fascicle",
        children: [
          "axon",
          "negative image of myelin sheath (the lipid was dissolved during the histological preparation)",
          "Schwann cells"
        ]
      }
    ],
    layers: [
      "endoneurium",
      "perineurium",
      "epineurium"
    ],
    additional: [
      "fibrocytes",
      "adipocytes"
    ]
  },
  
  bigPicture: "Peripheral nerve = axons wrapped in 3 protective CT layers (like CNS meninges!)",
  
  hierarchy: [
    "Axon → Fascicle → Whole Nerve",
    "↓ ENDO → PERI → EPI",
    "↓ (Pia) → (Arachnoid) → (Dura)"
  ],
  
  insideTheFascicles: [
    {
      structure: "Axon",
      description: "Tiny pink dot in center of myelin ring; carries electrical impulses along nerve fiber"
    },
    {
      structure: "Myelin sheath (negative image)",
      description: "White circular space around axon; lipid dissolved during processing creating characteristic honeycomb pattern"
    },
    {
      structure: "Schwann cell nucleus",
      description: "Elongated blue/purple nucleus at periphery of myelin ring; produces and maintains myelin sheath"
    },
    {
      structure: "Endoneurium",
      description: "Delicate pink connective tissue between individual fibers; contains capillaries and supports nerve fibers"
    },
    {
      structure: "Fibroblast nuclei",
      description: "Scattered elongated blue nuclei within endoneurium; maintain connective tissue matrix"
    }
  ],
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains basophilic structures (nuclei, ribosomes, rough ER) blue/purple. Eosin stains acidophilic structures (cytoplasm, collagen, extracellular matrix) pink/red.",
    whatItStainsInThisSlide: [
      "Schwann cell nuclei → Blue/purple (elongated at periphery of myelin rings)",
      "Fibroblast nuclei (in endoneurium, perineurium, epineurium) → Blue/purple",
      "Endothelial cell nuclei (in blood vessels) → Blue/purple",
      "Connective tissue (endoneurium, perineurium, epineurium) → Pink (varying intensities)",
      "Axon cytoplasm → Pale pink (tiny dot in center of myelin ring when visible)",
      "Myelin sheath → WHITE SPACE (negative image - lipids dissolved during tissue processing)",
      "Adipocytes → WHITE SPACE (lipids removed, leaving empty cellular outlines)",
      "Perineurium → Distinct pink rim around each fascicle"
    ],
    keyEmphasis: "HE emphasizes the three-layered connective tissue organization and cellular nuclei throughout the nerve. The characteristic honeycomb pattern created by myelin spaces (white circles with pink central dots) within fascicles is the diagnostic signature feature of peripheral nerve in cross section. Lipid dissolution during histological preparation creates negative images of both myelin sheaths and adipocytes - the key is distinguishing them by size and location."
  },

  layers: [
    {
      name: "Endoneurium",
      level: "Innermost layer (Level 1)",
      wraps: "Individual nerve fiber (single axon + myelin sheath + Schwann cell)",
      composition: "Delicate loose connective tissue with reticular fibers (Type III collagen), scattered fibroblasts, capillaries (endoneurial capillaries), and extracellular fluid that bathes nerve fibers",
      appearance: "Very thin pink tissue barely visible between individual nerve fibers within a fascicle. Seen as delicate pink strands separating the white myelin spaces in the honeycomb pattern. Often difficult to visualize due to thinness.",
      contains: "Endoneurial capillaries (part of blood-nerve barrier), fibroblasts producing collagen, reticular fibers forming delicate scaffolding, tissue fluid maintaining ionic balance for nerve conduction",
      cnsEquivalent: "Pia mater (direct transition at CNS-PNS junction at nerve roots)",
      function: "Provides immediate microenvironment for individual nerve fibers, supports axon nutrition through capillary network and metabolic exchange, maintains optimal ionic balance for action potential propagation, cushions individual fibers from mechanical stress",
      quickID: "Thinnest pink layer, barely visible between individual nerve fibers inside bundles"
    },
    {
      name: "Perineurium",
      level: "Middle layer (Level 2)",
      wraps: "Fascicle (bundle of multiple nerve fibers grouped together)",
      composition: "2-6 concentric layers of specialized epithelioid perineural cells (modified fibroblasts with epithelial characteristics) connected by tight junctions (zonulae occludentes), each layer surrounded by its own basement membrane composed of Type IV collagen and laminin",
      appearance: "Distinct pink rim encircling each fascicle, appearing as a smooth, continuous boundary. More prominent and easily visible than endoneurium, creates clear fascicle borders. Appears as a condensed pink line that sharply demarcates fascicle boundaries.",
      contains: "Epithelioid perineural cells with tight junctions forming selective barrier, basement membranes surrounding each cellular layer, occasional fibroblasts between layers, perineurial space containing small amount of fluid",
      cnsEquivalent: "Arachnoid mater (transition at nerve roots)",
      function: "Forms the critical blood-nerve barrier by controlling diffusion of substances into and out of fascicles through tight junctions, maintains stable microenvironment essential for proper nerve conduction, protects against mechanical stress and prevents spread of infection between fascicles, regulates ionic composition within fascicle",
      quickID: "Distinct pink rim surrounding each honeycomb bundle - the fascicle border you can actually see"
    },
    {
      name: "Epineurium",
      level: "Outermost layer (Level 3)",
      wraps: "Entire nerve (multiple fascicles bundled together into complete nerve trunk)",
      composition: "Dense irregular connective tissue with thick collagen bundles (Type I collagen) arranged in various directions, abundant adipose tissue filling spaces between fascicles, numerous fibroblasts, blood vessels (vasa nervorum providing nerve's blood supply), lymphatic vessels for drainage, and occasional nerve fibers (nervi nervorum innervating the nerve sheaths)",
      appearance: "Thick pink connective tissue surrounding and separating fascicles throughout the nerve. Contains conspicuous large white adipocytes (much larger than myelin spaces) and visible blood vessels. Forms the outermost coat of the entire nerve and fills interfascicular spaces.",
      contains: "Vasa nervorum (blood vessels nourishing the nerve), lymphatic vessels for waste removal and immune surveillance, adipose tissue providing cushioning and energy storage, dense collagen fibers for mechanical protection, nervi nervorum (small nerves that innervate the larger nerve sheaths), fibroblasts maintaining the extracellular matrix",
      cnsEquivalent: "Dura mater (continuous transition at nerve roots where nerves enter/exit CNS)",
      function: "Provides mechanical protection against compression and stretching forces, supplies vascular support through vasa nervorum network, allows nerve mobility and flexibility through adipose tissue cushioning, binds fascicles together into unified nerve trunk, protects against infection spread from surrounding tissues",
      quickID: "Thickest layer with large white adipocytes, surrounds entire nerve and fills spaces between fascicles"
    }
  ],

  essentialStructures: [
    {
      structure: "Axon (nerve fiber center)",
      identificationTips: [
        "Appears as tiny pink dot (often just a few micrometers) in the center of each white myelin ring",
        "Contains axoplasm that stains pale pink with eosin when visible",
        "Size varies: large myelinated fibers have visible axons, small fibers may show axon as just a pinpoint",
        "Round to oval cross-sectional profile within the myelin space",
        "In high-quality sections, you may see neurofilaments within the axoplasm"
      ],
      commonMistakes: [
        {
          mistake: "Confusing the axon with the Schwann cell nucleus",
          why: "Both appear as dark structures within or near the myelin ring",
          avoid: "Axon is in the CENTER (small pink dot), Schwann nucleus is at the PERIPHERY (elongated blue structure at the edge). Schwann nucleus is larger and darker blue."
        },
        {
          mistake: "Thinking the white space is the axon",
          why: "Students expect axons to be prominent structures",
          avoid: "The white space is the MYELIN SHEATH (lipid removed), not the axon. The axon is the tiny pink dot IN THE CENTER of the white space."
        }
      ]
    },
    {
      structure: "Myelin sheath (negative image)",
      identificationTips: [
        "Appears as white circular or oval spaces arranged in honeycomb pattern within fascicles",
        "Creates the diagnostic honeycomb appearance - this is the hallmark of peripheral nerve in cross section",
        "Uniform size within a given nerve (5-15 μm diameter typically)",
        "Each white ring should have a tiny pink dot (axon) in center and often a blue nucleus (Schwann cell) at periphery",
        "The WHITE color is due to lipid dissolution during tissue processing - remember this is a NEGATIVE IMAGE",
        "In high-power magnification, you may see a thin pink line (neurolemma/Schwann cell cytoplasm) surrounding the white space"
      ],
      commonMistakes: [
        {
          mistake: "Expecting to see black or pink myelin in HE sections",
          why: "Students confuse HE staining with osmium tetroxide (OsO₄) staining",
          avoid: "In HE, myelin appears WHITE (negative image, lipids dissolved). In OsO₄ stain (Slide 72), myelin appears BLACK. Never expect pink myelin in any stain - it's either white (HE) or black (OsO₄)."
        },
        {
          mistake: "Confusing myelin spaces with adipocytes",
          why: "Both appear as white spaces in HE sections",
          avoid: "MYELIN: small (5-15 μm), uniform, INSIDE fascicles, honeycomb pattern, has central axon dot. ADIPOCYTES: large (50-150 μm, 3× bigger), variable sizes, OUTSIDE fascicles in epineurium, no central structure."
        },
        {
          mistake: "Missing the honeycomb pattern entirely",
          why: "Scanning at low power without focusing on fascicle interiors",
          avoid: "Always examine INSIDE the fascicles (areas bounded by pink perineurial rims). The honeycomb is the diagnostic feature!"
        }
      ]
    },
    {
      structure: "Schwann cell nucleus",
      identificationTips: [
        "Elongated, flattened blue/purple nucleus located at the PERIPHERY of each myelin ring",
        "Appears as a dark crescent or cigar-shaped structure pressed against the inner edge of the Schwann cell",
        "Each myelinated fiber has ONE Schwann cell in any given cross-section (though multiple Schwann cells wrap the fiber along its length)",
        "Heterochromatic (dark-staining) nucleus with condensed chromatin",
        "May not be visible in every myelin ring in a single section (depends on plane of section)"
      ],
      commonMistakes: [
        {
          mistake: "Thinking every myelin ring must show a Schwann nucleus",
          why: "The nucleus is 3D and may not be in the plane of this particular section",
          avoid: "It's normal to see some myelin rings without visible nuclei. Look for nuclei at the periphery of SOME rings to confirm Schwann cells."
        },
        {
          mistake: "Confusing Schwann nuclei with fibroblast nuclei in endoneurium",
          why: "Both are elongated and basophilic",
          avoid: "Schwann nuclei are specifically at the PERIPHERY of myelin rings. Fibroblast nuclei are scattered between nerve fibers in the endoneurium, not associated with specific myelin rings."
        }
      ]
    },
    {
      structure: "Fascicle (nerve fiber bundle)",
      identificationTips: [
        "Distinct bundle of nerve fibers surrounded by pink perineurial rim",
        "Contains the diagnostic honeycomb pattern of myelin spaces",
        "Variable sizes - nerves typically contain multiple fascicles of different sizes",
        "Each fascicle is a self-contained unit with its own perineurial barrier",
        "The interior shows densely packed myelinated fibers creating the characteristic honeycomb appearance"
      ],
      commonMistakes: [
        {
          mistake: "Thinking the entire nerve is one fascicle",
          why: "Students miss the individual perineurial boundaries",
          avoid: "Look for multiple pink rims (perineurium) dividing the nerve into separate fascicles. Each pink rim = one fascicle boundary."
        },
        {
          mistake: "Confusing a single fascicle with the whole nerve",
          why: "In some sections, only one fascicle may be prominent",
          avoid: "The whole nerve = epineurium + all fascicles. One fascicle = perineurium + nerve fibers. Look at low power to see the big picture."
        }
      ]
    },
    {
      structure: "Perineurium (pink rim)",
      identificationTips: [
        "Distinct, smooth pink rim that completely encircles each fascicle",
        "More prominent than endoneurium - this is your anchor structure for identification",
        "Appears as a condensed pink line clearly demarcating fascicle boundaries",
        "Multiple concentric layers may be visible in high-power views (2-6 layers)",
        "Continuous around entire fascicle with no gaps"
      ],
      commonMistakes: [
        {
          mistake: "Confusing perineurium with epineurium",
          why: "Both are pink connective tissue",
          avoid: "PERINEURIUM = thin, distinct RIM around each fascicle. EPINEURIUM = thick, loose tissue BETWEEN fascicles with adipocytes. Perineurium is organized and regular; epineurium is bulky and irregular."
        },
        {
          mistake: "Missing the blood-nerve barrier function",
          why: "It looks like simple connective tissue",
          avoid: "Remember: perineurium has TIGHT JUNCTIONS between specialized epithelioid cells - it's a functional BARRIER, not just structural support! This is high-yield for exams."
        }
      ]
    },
    {
      structure: "Epineurium",
      identificationTips: [
        "Thick pink connective tissue filling spaces between fascicles and surrounding the entire nerve",
        "Contains large white adipocytes (much larger than myelin spaces)",
        "Contains visible blood vessels (vasa nervorum) with red blood cells",
        "Loose, irregular arrangement compared to the organized perineurium",
        "Forms the outermost coat of the nerve visible at low magnification"
      ],
      commonMistakes: [
        {
          mistake: "Thinking adipocytes in epineurium are enlarged myelin sheaths",
          why: "Both appear as white spaces",
          avoid: "LOCATION: adipocytes are OUTSIDE fascicles (in epineurium), myelin is INSIDE fascicles. SIZE: adipocytes are 3× larger (50-150 μm) vs myelin (5-15 μm). PATTERN: adipocytes are scattered irregularly, myelin forms honeycomb."
        },
        {
          mistake: "Confusing blood vessels in epineurium with nerve structures",
          why: "Both contain circular profiles",
          avoid: "Blood vessels have red blood cells inside and an endothelial lining. Nerve fascicles have honeycomb pattern inside and perineurial rim."
        }
      ]
    },
    {
      structure: "Adipocytes (fat cells)",
      identificationTips: [
        "Large white circular spaces located in EPINEURIUM (between fascicles)",
        "Much larger than myelin spaces (50-150 μm vs 5-15 μm = 3× or more difference)",
        "Variable sizes (unlike uniform myelin)",
        "May have flattened nucleus pushed to periphery (signet-ring appearance)",
        "Located OUTSIDE the perineurial boundary, never inside fascicles"
      ],
      commonMistakes: [
        {
          mistake: "Confusing large adipocytes with myelin sheaths",
          why: "Both appear as white spaces in HE",
          avoid: "SIZE: Adipocytes much larger. LOCATION: Adipocytes OUTSIDE fascicles (epineurium), myelin INSIDE fascicles. PATTERN: Adipocytes scattered, myelin organized in honeycomb. Ask: 'Is it inside or outside the pink rim?' If outside = adipocyte."
        },
        {
          mistake: "Thinking adipocytes are pathological",
          why: "They're conspicuous and may seem like artifacts",
          avoid: "Adipocytes are NORMAL components of epineurium! They provide cushioning and energy storage for the nerve."
        }
      ]
    },
    {
      structure: "Blood vessels (vasa nervorum)",
      identificationTips: [
        "Small arterioles, capillaries, and venules visible in epineurium",
        "May show red blood cells (pink/orange circular profiles) in lumen",
        "Endothelial cell nuclei visible as flattened blue nuclei lining vessel wall",
        "Usually accompanied by small amounts of connective tissue",
        "Found in epineurium, not inside fascicles (which have only capillaries in endoneurium)"
      ],
      commonMistakes: [
        {
          mistake: "Confusing blood vessels with nerve fascicles",
          why: "Both are circular structures",
          avoid: "Blood vessels have RED BLOOD CELLS and endothelial lining. Fascicles have HONEYCOMB PATTERN and perineurial rim. Blood vessels are smaller and lack the internal honeycomb structure."
        }
      ]
    }
  ],

  criticalRelationships: [
    {
      title: "CNS-PNS Transition Zone (HIGH-YIELD EXAM TOPIC!)",
      content: "At the nerve roots where peripheral nerves enter or exit the CNS, the three connective tissue layers transition directly to the three meningeal layers. This transition zone is clinically significant and frequently tested.",
      details: [
        "Endoneurium → Pia mater (innermost, delicate vascular layer adhering to neural tissue)",
        "Perineurium → Arachnoid mater (middle, avascular barrier layer with tight junctions)",
        "Epineurium → Dura mater (outermost, tough fibrous protective layer)",
        "Transition occurs at CNS-PNS junction at nerve root entry/exit zones",
        "Blood-nerve barrier (perineurium with tight junctions) is continuous with blood-brain barrier at this transition",
        "Schwann cells in PNS are replaced by oligodendrocytes in CNS at this junction",
        "This anatomical continuity explains why infections can spread from peripheral nerves to CNS",
        "Understanding this transition is essential for comprehending pathologies like Guillain-Barré syndrome which affects nerve roots at this junction"
      ],
      emphasis: "This parallel 3-layer protective system is ESSENTIAL to understand for medical exams. The continuity ensures protected nerve roots and explains bidirectional pathology spread. Exams love testing the CNS equivalents and barrier continuity!"
    },
    {
      title: "Blood-Nerve Barrier: Perineurium's Critical Role (EXAM FAVORITE!)",
      content: "The perineurium forms the blood-nerve barrier through its specialized epithelioid cells connected by tight junctions. This selective permeability barrier is analogous to the blood-brain barrier and is clinically significant.",
      details: [
        "Formed by 2-6 concentric layers of epithelioid perineural cells (modified fibroblasts with epithelial characteristics)",
        "Tight junctions (zonulae occludentes) between perineural cells create impermeable seal controlling molecular diffusion",
        "Each cellular layer surrounded by basement membrane providing additional filtration",
        "Regulates ionic composition (Na⁺, K⁺, Ca²⁺) essential for action potential propagation",
        "Protects nerve fibers from toxins, pathogens, and large molecules in bloodstream",
        "Maintains stable osmotic environment within fascicles for optimal nerve conduction",
        "Analogous to blood-brain barrier (BBB) in CNS - both use tight junctions for selective permeability",
        "Clinical importance: disruption causes neuropathies; some drugs can't penetrate it (therapeutic challenge); inflammation can compromise barrier leading to nerve edema"
      ],
      emphasis: "The blood-nerve barrier is HIGH-YIELD for exams! Know its structure (tight junctions in perineurium), function (selective barrier), and clinical relevance (diabetic neuropathy, drug delivery challenges, Guillain-Barré pathophysiology)."
    },
    {
      title: "Size Comparison: Myelin vs Adipocytes (CRITICAL DISTINCTION - MOST COMMON CONFUSION!)",
      content: "Both myelin sheaths and adipocytes appear as white spaces in HE sections because lipids are dissolved during tissue processing. However, they are easily distinguished by three key features: SIZE, LOCATION, and ASSOCIATED STRUCTURES.",
      details: [
        "SIZE: Myelin small (5-15 μm diameter), uniform; Adipocytes large (50-150 μm, 3-10× bigger), variable",
        "LOCATION: Myelin INSIDE fascicles (within perineurial boundary); Adipocytes OUTSIDE fascicles in EPINEURIUM",
        "PATTERN: Myelin creates uniform honeycomb pattern; Adipocytes scattered irregularly with variable spacing",
        "MYELIN has: central pink axon dot + peripheral Schwann nucleus (dark crescent at edge)",
        "ADIPOCYTES have: flattened nucleus at periphery (signet-ring), NO central structure, larger empty space",
        "MYELIN surrounded by thin endoneurium; ADIPOCYTES surrounded by thick irregular collagen in epineurium",
        "If confused, ask two questions: (1) Is it inside or outside the pink perineurial rim? (2) What's the relative size?",
        "Remember: Myelin = honeycomb INSIDE, Adipocytes = scattered OUTSIDE"
      ],
      emphasis: "This is THE MOST COMMON MISTAKE on exams! SIZE and LOCATION are the two critical discriminating features. If you can't tell, ask yourself: 'Is it inside or outside the fascicle?' This simple question solves 90% of confusion. Memorize: Small + Inside = Myelin, Large + Outside = Adipocyte."
    },
    {
      title: "Hierarchical Organization: Three-Level Wrapping Pattern (HIGH-YIELD!)",
      content: "Understanding the hierarchical wrapping pattern is essential for nerve identification and injury classification. Each level provides progressively stronger protection and has distinct CNS equivalents.",
      details: [
        "Level 1 (Innermost): Single axon + myelin + Schwann cell wrapped by ENDONEURIUM (delicate loose CT) = Pia mater equivalent",
        "Level 2 (Middle): Bundle of nerve fibers (fascicle) wrapped by PERINEURIUM (epithelioid cells with tight junctions) = Arachnoid mater equivalent",
        "Level 3 (Outermost): Bundle of fascicles (whole nerve) wrapped by EPINEURIUM (dense irregular CT with adipose) = Dura mater equivalent",
        "Each successively outer layer provides stronger mechanical protection",
        "Analogy: Wire (axon) → insulated wire (fiber with endoneurium) → cable (fascicle with perineurium) → bundled cables with protective jacket (nerve with epineurium)",
        "Nerve injury classification based on this hierarchy: Neuropraxia (myelin only), Axonotmesis (axon + endoneurium), Neurotmesis (all layers)",
        "The hierarchical pattern allows nerves to stretch and bend without damage - layers slide over each other",
        "Blood supply also follows hierarchy: Vasa nervorum in epineurium → branches to perineurium → capillaries in endoneurium"
      ],
      emphasis: "This hierarchical wrapping pattern is your complete roadmap for nerve identification and injury classification! Understanding the 3-level organization is ESSENTIAL for both identifying peripheral nerves on slides and understanding clinical nerve injury patterns. Exams love asking about CNS equivalents and injury classifications based on this hierarchy."
    }
  ],

  relationshipsSummary: [
    {
      title: "CNS-PNS Continuity (HIGH-YIELD!)",
      summary: "At nerve roots, the 3 nerve layers directly transition to meninges: Endo→Pia, Peri→Arachnoid, Epi→Dura, maintaining protective barrier continuity.",
      keyPoints: [
        "Direct 1:1 layer transition at CNS-PNS junction",
        "Blood-nerve barrier continuous with blood-brain barrier",
        "Explains infection spread between PNS and CNS",
        "Key for Guillain-Barré pathophysiology"
      ]
    },
    {
      title: "Blood-Nerve Barrier Function (HIGH-YIELD!)",
      summary: "Perineurium forms selective barrier via tight junctions between epithelioid cells, protecting fascicles like BBB protects brain.",
      keyPoints: [
        "Tight junctions in perineurium control molecular passage",
        "Maintains ionic environment for action potentials",
        "Disruption causes neuropathies and nerve edema",
        "Analogous to blood-brain barrier"
      ]
    },
    {
      title: "Myelin vs Adipocyte Distinction (EXAM FAVORITE!)",
      summary: "Both white in HE (lipids removed), but differ critically: Myelin small/inside fascicles/honeycomb; Adipocytes large/outside/scattered.",
      keyPoints: [
        "SIZE: Myelin 5-15μm vs Adipocytes 50-150μm (3× larger)",
        "LOCATION: Myelin inside fascicles, Adipocytes in epineurium",
        "PATTERN: Myelin uniform honeycomb, Adipocytes irregular",
        "Ask: Inside or outside pink rim? Solves confusion!"
      ]
    },
    {
      title: "Three-Level Hierarchy (HIGH-YIELD!)",
      summary: "Wrapping pattern: Endo wraps axon (Level 1) → Peri wraps fascicle (Level 2) → Epi wraps nerve (Level 3). Basis for injury classification.",
      keyPoints: [
        "Each level = progressively stronger protection",
        "Analogy: Wire → Cable → Bundled cables",
        "Nerve injury severity based on which layers damaged",
        "CNS equivalents: Pia → Arachnoid → Dura"
      ]
    }
  ],

  keyIdentifyingFeatures: [
    "**Honeycomb pattern** - The pathognomonic feature! White circular spaces (myelin sheaths) with pink centers (axons) arranged in uniform honeycomb pattern INSIDE fascicles bounded by pink perineurial rims",
    "**Three distinct connective tissue layers** - From inside out: (1) Endoneurium (barely visible thin pink between fibers), (2) Perineurium (distinct pink rim around each fascicle), (3) Epineurium (thick pink tissue with adipocytes between fascicles)",
    "**Pink perineurial rims** - Smooth, continuous pink boundaries clearly demarcating each fascicle. This is your anchor structure - once you find these rims, everything else falls into place",
    "**White spaces in TWO locations** - Small uniform white circles (myelin) INSIDE fascicles creating honeycomb + large variable white spaces (adipocytes) OUTSIDE fascicles in epineurium",
    "**Schwann cell nuclei** - Dark blue elongated nuclei at the periphery of some myelin rings, appearing as crescents pressed against the inner edge",
    "**Cross-sectional circular profiles** - Everything appears round: axons (tiny pink dots), myelin rings (white circles), fascicles (large circular bundles), adipocytes (large white circles)",
    "**Size hierarchy visible** - Tiny axon dots (few μm) inside small myelin rings (5-15 μm) inside larger fascicles (hundreds of μm) inside entire nerve (mm scale), with large adipocytes (50-150 μm) in between"
  ],

  comparisonWithOtherStains: [
    {
      stain: "OsO₄ (Osmium tetroxide)",
      differences: [
        "In OsO₄, myelin appears BLACK (stains lipids) vs WHITE in HE (lipids dissolved)",
        "In OsO₄, axon appears as white/pale space (unstained) vs tiny pink dot in HE",
        "OsO₄ creates 'negative' of HE image: dark rings with white centers (OsO₄) vs white rings with pink centers (HE)",
        "Both show honeycomb pattern, but colors reversed",
        "OsO₄ better for visualizing myelin integrity; HE better for overall nerve architecture and nuclei",
        "In longitudinal OsO₄ sections, Nodes of Ranvier visible as gaps in black myelin (not visible in HE longitudinal)"
      ],
      when: "Slides 72-73 use OsO₄ - compare to see the reversal of myelin appearance"
    },
    {
      stain: "Silver stain (Ag)",
      differences: [
        "Silver stain shows nerve fibers/neurofibrils as BLACK structures",
        "Used for demonstrating nerve endings and fine axonal processes",
        "Better for showing nerve fiber distribution in tissues (e.g., Meissner's corpuscle in Slide 75)",
        "HE better for showing connective tissue organization and general architecture"
      ],
      when: "Slide 75 (Meissner's corpuscle) uses silver stain to show nerve endings"
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing myelin spaces with adipocytes (THE MOST COMMON ERROR!)",
      why: "Both appear as white spaces in HE sections due to lipid dissolution during tissue processing. Students often identify all white spaces as one type of structure without considering size, location, and context.",
      avoid: "Use the 'SIZE + LOCATION' rule: (1) SIZE: Myelin small (5-15 μm), uniform; Adipocytes large (50-150 μm), variable (3-10× bigger). (2) LOCATION: Myelin INSIDE fascicles (within pink perineurial rim); Adipocytes OUTSIDE fascicles in epineurium. (3) PATTERN: Myelin organized honeycomb; Adipocytes scattered. Simple test: Ask 'Is it inside or outside the pink rim?' Inside = myelin, Outside = adipocyte. This solves 90% of confusion!"
    },
    {
      mistake: "Identifying the white space as the axon instead of myelin",
      why: "Students expect axons to be the most prominent structures since they carry nerve impulses. The white spaces are eye-catching, leading to misidentification.",
      avoid: "The white space is the MYELIN SHEATH (negative image from lipid removal), NOT the axon! The axon is the tiny PINK DOT in the CENTER of the white ring. Remember: HE dissolves lipids → myelin appears as white space. The axon cytoplasm (pale pink) is preserved and visible as a small central dot."
    },
    {
      mistake: "Confusing Schwann cell nuclei with axons",
      why: "Both appear as dark structures within or near the myelin ring. Students see a dark structure and assume it's the nerve fiber.",
      avoid: "AXON = tiny PINK dot in CENTER of white ring. SCHWANN NUCLEUS = larger BLUE crescent at PERIPHERY of white ring. Key differences: (1) Location: center vs periphery, (2) Color: pink vs blue/purple, (3) Size: very small vs larger, (4) Shape: round dot vs elongated crescent."
    },
    {
      mistake: "Confusing perineurium with epineurium (mixing up the layers)",
      why: "Both are pink connective tissue, and students don't carefully observe the structural differences and locations.",
      avoid: "PERINEURIUM = thin, DISTINCT RIM that ENCIRCLES each fascicle (looks like a pink border or frame). EPINEURIUM = thick, LOOSE tissue that FILLS SPACES BETWEEN fascicles and contains adipocytes + blood vessels. Mnemonic: 'Peri' = 'perimeter' = rim around fascicle. 'Epi' = 'epidural' = loose filling tissue. The perineurium is organized and precise; epineurium is bulky and irregular."
    },
    {
      mistake: "Expecting to see pink or black myelin in HE stain",
      why: "Students confuse different staining protocols or expect myelin to take up standard stains like other structures.",
      avoid: "In HE, myelin ALWAYS appears WHITE (negative image) because LIPIDS ARE DISSOLVED during processing. Myelin only appears black in OsO₄ (osmium tetroxide) stain (Slides 72-73). Never expect pink myelin - it doesn't happen in any stain! Remember: HE = white myelin, OsO₄ = black myelin."
    },
    {
      mistake: "Missing the honeycomb pattern entirely",
      why: "Students scan at low power or focus on the outer layers without examining fascicle interiors closely.",
      avoid: "The honeycomb pattern is THE DIAGNOSTIC FEATURE of peripheral nerve! You MUST look INSIDE the fascicles (areas bounded by pink perineurial rims) at higher magnification. Don't just identify pink layers - look for the characteristic white circles with pink centers arranged in honeycomb pattern. No honeycomb = might not be peripheral nerve or wrong region of slide!"
    },
    {
      mistake: "Thinking the entire nerve is one fascicle",
      why: "Students see one prominent bundle and call it 'the nerve' without recognizing the individual fascicles within.",
      avoid: "Look for MULTIPLE pink rims (perineurium) dividing the nerve into SEPARATE FASCICLES. Each pink rim = one fascicle boundary. The WHOLE NERVE = epineurium + ALL fascicles together. Most peripheral nerves contain multiple fascicles of varying sizes. Scan at low power first to appreciate the multi-fascicular architecture."
    },
    {
      mistake: "Confusing blood vessels in epineurium with nerve fascicles",
      why: "Both are circular structures when cut in cross-section.",
      avoid: "BLOOD VESSELS have: (1) RED BLOOD CELLS inside (pink/orange circular profiles), (2) endothelial cell nuclei lining the wall, (3) NO honeycomb pattern. FASCICLES have: (1) honeycomb pattern of myelin inside, (2) pink perineurial rim around border, (3) NO red blood cells. Blood vessels are also much smaller than typical fascicles."
    },
    {
      mistake: "Forgetting the CNS equivalents (Pia-Arachnoid-Dura)",
      why: "Students memorize the three layers but don't connect them to CNS meninges.",
      avoid: "ALWAYS remember: Endoneurium ↔ Pia mater, Perineurium ↔ Arachnoid mater, Epineurium ↔ Dura mater. This parallel is HIGH-YIELD for exams! The layers transition directly at nerve roots. Mnemonic: 'EPA connects to PAD' (Endo-Peri-Epi = Pia-Arachnoid-Dura, inner to outer)."
    },
    {
      mistake: "Not recognizing that perineurium forms the blood-nerve barrier",
      why: "It looks like simple connective tissue, and students miss the functional significance.",
      avoid: "The perineurium is NOT just structural support - it's a FUNCTIONAL BARRIER! It contains specialized epithelioid cells with TIGHT JUNCTIONS that create the blood-nerve barrier (analogous to blood-brain barrier). This is clinically important and HIGH-YIELD for exams. Always mention barrier function when discussing perineurium!"
    }
  ],

  clinicalCorrelations: [
    {
      condition: "Diabetic Neuropathy",
      relevance: "Chronic hyperglycemia damages the blood-nerve barrier (perineurium) and endoneurial capillaries, leading to disrupted ionic balance, oxidative stress, and nerve fiber degeneration. Advanced glycation end-products (AGEs) accumulate in nerve tissue. Results in peripheral sensory loss (glove-and-stocking distribution), pain, and motor weakness. The endoneurium is particularly vulnerable due to its rich capillary network."
    },
    {
      condition: "Guillain-Barré Syndrome (GBS)",
      relevance: "Autoimmune demyelination targeting peripheral nerves, often triggered by infection. Immune cells cross the compromised blood-nerve barrier (perineurium) and attack myelin sheaths produced by Schwann cells. The damage occurs particularly at nerve roots where PNS layers transition to CNS meninges. Results in ascending paralysis, areflexia, and potential respiratory failure. Understanding the three-layer structure and CNS transition zone is essential for comprehending GBS pathophysiology."
    },
    {
      condition: "Nerve Injury Classification (Seddon & Sunderland)",
      relevance: "Based on the hierarchical three-layer structure: (1) **Neuropraxia**: Myelin damage only, Schwann cells intact, endoneurium preserved → excellent recovery. (2) **Axonotmesis**: Axon disrupted, endoneurium may be damaged, but perineurium and epineurium intact → good recovery with Wallerian degeneration. (3) **Neurotmesis**: Complete nerve transection, all three layers disrupted → poor recovery, requires surgical intervention. Understanding the anatomical hierarchy is essential for predicting outcomes."
    },
    {
      condition: "Carpal Tunnel Syndrome",
      relevance: "Chronic compression of median nerve at wrist causes venous congestion in vasa nervorum (blood vessels in epineurium), leading to endoneurial edema. The blood-nerve barrier (perineurium) may become compromised. Over time, myelin sheaths degenerate and axons become damaged. Results in sensory deficits and weakness in median nerve distribution. The three-layer structure normally provides protection, but chronic compression overwhelms these defenses."
    },
    {
      condition: "Leprosy (Hansen's Disease)",
      relevance: "*Mycobacterium leprae* specifically infects Schwann cells in peripheral nerves, causing progressive demyelination and nerve fiber loss. The bacteria preferentially invade Schwann cells in cooler body regions (extremities, ears, nose). Destruction of Schwann cells leads to loss of myelin sheaths and sensory nerve damage. Results in anesthetic skin patches, nerve thickening, and deformities. Understanding Schwann cell structure and location is key to understanding leprosy pathogenesis."
    },
    {
      condition: "Charcot-Marie-Tooth Disease (CMT)",
      relevance: "Hereditary peripheral neuropathy affecting myelin (CMT1) or axons (CMT2). In demyelinating forms (CMT1), mutations in myelin genes (PMP22, MPZ) cause abnormal Schwann cell function and myelin production. Results in progressive muscle weakness, sensory loss, and foot deformities. Nerve biopsies show 'onion bulb' formations (concentric Schwann cell proliferation). Understanding normal Schwann cell-myelin-axon relationships is essential for comprehending CMT pathology."
    },
    {
      condition: "Nerve Blocks and Local Anesthesia",
      relevance: "Local anesthetics must penetrate through the three connective tissue layers (especially epineurium and perineurium) to reach nerve fibers within fascicles. The blood-nerve barrier (perineurium with tight junctions) restricts drug penetration. Larger nerves with thick epineurium require more anesthetic or longer onset time. Understanding the barrier properties of perineurium explains why some nerve blocks require higher concentrations or specific injection techniques."
    }
  ],

  functionalContext: "Peripheral nerves serve as the communication highways between the central nervous system and all body tissues. The three-layer connective tissue organization provides mechanical protection during movement and stretching, vascular supply through the vasa nervorum network, and selective barrier function to maintain optimal ionic environment for action potential propagation. The hierarchical structure allows flexibility while protecting delicate axons - layers slide over each other during limb movement. Myelination by Schwann cells enables saltatory conduction, dramatically increasing conduction velocity (up to 120 m/s in large myelinated fibers vs. 0.5-2 m/s in unmyelinated fibers). Mixed peripheral nerves contain motor fibers (from anterior horn cells), sensory fibers (from dorsal root ganglia), and autonomic fibers (from autonomic ganglia), all organized within the same three-layer protective framework.",

  identificationTips: [
    "**START with fascicles**: At low power, identify the pink perineurial rims that clearly demarcate individual fascicles. These distinct pink boundaries are your anchor structures.",
    "**LOOK for honeycomb**: Within each fascicle, look for the diagnostic honeycomb pattern of white circular spaces (myelin) with tiny pink dots (axons) at higher magnification. No honeycomb = not nerve!",
    "**Identify the THREE layers** systematically from inside out: (1) Endoneurium (barely visible thin pink between fibers inside fascicles), (2) Perineurium (distinct pink rim around each fascicle), (3) Epineurium (thick pink tissue with adipocytes between fascicles and surrounding entire nerve).",
    "**Distinguish white spaces** by location and size: White circles INSIDE fascicles = myelin (small, 5-15 μm, uniform, honeycomb pattern). White spaces OUTSIDE fascicles = adipocytes (large, 50-150 μm, variable, scattered in epineurium).",
    "**Use the 'inside or outside' rule**: If confused about a white space, ask: 'Is it inside or outside the pink perineurial rim?' Inside = myelin, Outside = adipocyte. This simple question solves most confusion!",
    "**Remember the EPA mnemonic** for outer to inner layers: **E**pineurium (thickest, adipocytes, surrounds everything) → **P**erineurium (pink rim, blood-nerve barrier) → **A**xons with endoneurium (inside bundles). Or remember 'PAD' for CNS: **P**ia → **A**rachnoid → **D**ura corresponds to Endo → Peri → Epi.",
    "**Cross section vs longitudinal**: This is CROSS section - everything appears circular/round (axons, myelin rings, fascicles). In longitudinal sections (Slide 71), structures appear elongated and wavy, and Nodes of Ranvier may be visible.",
    "**Compare with OsO₄ stain**: If you see BLACK circular structures instead of white spaces inside fascicles, you're looking at OsO₄ stain (Slide 72), not HE! HE = white myelin, OsO₄ = black myelin.",
    "**The honeycomb + pink rim combination is pathognomonic**: Honeycomb pattern (white circles with pink centers) inside bundles + distinct pink rims around bundles + thick outer coat with adipocytes = peripheral nerve in cross section with HE stain. This combination is diagnostic!",
    "**Don't forget functional correlations**: The perineurium (pink rim) is the blood-nerve barrier. The three layers correspond to CNS meninges (Pia-Arachnoid-Dura). Mentioning these relationships demonstrates complete understanding!"
  ],

  examTips: [
    "**Most commonly tested**: (1) CNS equivalents (Endo=Pia, Peri=Arachnoid, Epi=Dura), (2) Blood-nerve barrier location (perineurium with tight junctions), (3) Distinguishing myelin from adipocytes (size + location rule), (4) What appears WHITE in HE (myelin + adipocytes, lipids dissolved).",
    "**High-yield relationships**: Always connect peripheral nerve layers to CNS meninges - exams love this parallel! The transition occurs at nerve roots. Blood-nerve barrier (perineurium) is continuous with blood-brain barrier.",
    "**Common exam questions**: 'Why does myelin appear white in HE?' (lipids dissolved during processing). 'What forms the blood-nerve barrier?' (perineurium with tight junctions). 'What's the difference between myelin and adipocytes?' (size, location, pattern). Be ready for these!",
    "**Know the hierarchical organization**: Level 1: Endoneurium wraps axon. Level 2: Perineurium wraps fascicle. Level 3: Epineurium wraps nerve. This hierarchy forms the basis for nerve injury classification (neuropraxia, axonotmesis, neurotmesis).",
    "**Stain comparison is tested**: Know how myelin appears in different stains: HE = WHITE (lipids dissolved), OsO₄ = BLACK (lipids stained). This creates 'negative images' of each other.",
    "**Clinical correlations are high-yield**: Diabetic neuropathy (blood-nerve barrier damage), Guillain-Barré (demyelination), nerve injury classification (based on layer damage), carpal tunnel (compression). Connecting histology to pathology shows deep understanding.",
    "**Schwann cells vs Schwann nuclei vs axons**: Exams test this! Schwann CELL = entire cell that wraps axon. Schwann NUCLEUS = blue crescent at periphery of myelin ring. AXON = tiny pink dot in center of myelin ring. Don't confuse these!",
    "**Blood supply pattern**: Vasa nervorum in epineurium → branches through perineurium → capillaries in endoneurium. Understanding this explains why nerve compression causes ischemia.",
    "**Honeycomb is THE diagnostic feature**: If asked to identify peripheral nerve, always mention the honeycomb pattern! It's the single most important identifying feature. White circles with pink centers in uniform arrangement inside fascicles = peripheral nerve.",
    "**Function follows form**: Endoneurium provides microenvironment (function: metabolic support). Perineurium has tight junctions (function: blood-nerve barrier). Epineurium has adipose (function: cushioning, vascular supply). Connecting structure to function earns extra points!",
    "**Cross-sectional view specifics**: Everything appears round/circular (axons, myelin, fascicles). In longitudinal view, structures are elongated and wavy. Nodes of Ranvier only visible in longitudinal sections.",
    "**Size matters**: Know approximate sizes - Axon: few μm, Myelin: 5-15 μm, Adipocyte: 50-150 μm (3-10× larger than myelin). Fascicle: hundreds of μm to mm. Being able to estimate sizes helps distinguish structures."
  ],

  ultraMinimalFacts: {
    staining: "HE: Myelin = WHITE (lipids dissolved), not pink. Honeycomb = key!",
    layers: [
      "• ENDO = wraps 1 fiber (Pia)",
      "• PERI = wraps bundle (Arachnoid) - barrier!",
      "• EPI = wraps nerve (Dura)"
    ],
    visualID: [
      "• Honeycomb inside fascicles = myelin (white circles)",
      "• Dark nuclei at edge of rings = Schwann cells",
      "• Pink rim around bundles = perineurium",
      "• Large white outside fascicles = adipocytes"
    ],
    cnsConnection: "Endo → Peri → Epi = Pia → Arachnoid → Dura (at nerve roots)",
    dontConfuse: [
      "• Myelin (small, inside) ≠ Adipocyte (large, outside)",
      "• Schwann nucleus (edge) ≠ Axon (center dot)",
      "• HE myelin (white) ≠ OsO₄ myelin (black)"
    ]
  }
};

const SLIDE_DATA_71 = {
  slideNumber: "71",
  name: "Peripheral Nerve (HE)",
  section: "longitudinal section",
  stain: "HE",
  
  bigPicture: "Peripheral nerve = axons wrapped in 3 protective CT layers (like CNS meninges!)",
  
  hierarchy: [
    "Axon → Fascicle → Whole Nerve",
    "↓ ENDO → PERI → EPI",
    "↓ (Pia) → (Arachnoid) → (Dura)"
  ],
  
  insideTheFascicles: [
    {
      structure: "Axon",
      description: "Tiny pink wavy line running longitudinally; carries electrical impulses along nerve fiber"
    },
    {
      structure: "Myelin sheath (negative image)",
      description: "White elongated space flanking axon; lipid dissolved during processing creating white streaks"
    },
    {
      structure: "Schwann cell nuclei",
      description: "Dark oval nuclei at edge of myelin spaces; produce and maintain myelin in PNS"
    },
    {
      structure: "Fibrocyte nuclei",
      description: "Elongated dark nuclei scattered in endoneurium between fibers; maintain CT matrix"
    }
  ],
  
  stainingInfo: {
    technique: "HE (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple (basophilic), eosin stains cytoplasm and collagen pink/red (acidophilic)",
    whatItStainsInThisSlide: [
      "Axons → pale pink wavy lines running longitudinally",
      "Myelin sheath → WHITE SPACE (negative image - lipids dissolved)",
      "Schwann cell nuclei → dark purple/blue at edge of white streaks",
      "Fibrocyte nuclei → elongated dark purple/blue in endoneurium",
      "Endoneurium → delicate pink CT between fibers",
      "Perineurium → distinct pink rim around fascicles (5-10 layers of cells)",
      "Epineurium → thick pink CT surrounding entire nerve",
      "Adipocytes → LARGE white circles (much bigger than myelin) in epineurium"
    ],
    keyEmphasis: "HE preparation dissolves lipids during processing, so myelin sheaths appear as characteristic WHITE SPACES flanking the axons rather than staining pink. This creates a distinctive pattern of white longitudinal streaks that is diagnostic for peripheral nerves in HE sections. The longitudinal orientation reveals the continuous nature of myelin along nerve fibers, unlike the honeycomb pattern seen in cross sections."
  },
  
  examEssentialStructures: {
    grouped: [
      {
        parent: "bundle of nerve fibers",
        children: ["axon", "negative image of myelin sheath", "Schwann cells"]
      }
    ],
    layers: ["endoneurium", "perineurium", "epineurium"],
    additional: ["fibrocytes", "adipocytes"]
  },
  
  layers: [
    {
      name: "Endoneurium",
      level: "Innermost layer (Level 1)",
      wraps: "Individual nerve fiber (axon + myelin + Schwann cell)",
      composition: "Delicate loose CT with reticular fibers, type III collagen, fibroblasts, capillaries",
      appearance: "Very thin pink CT between individual fibers; barely visible in longitudinal section as delicate pink background between white myelin streaks",
      contains: "Schwann cells, capillaries, fibrocytes, mast cells, individual nerve fibers separated by reticular CT",
      cnsEquivalent: "Pia mater",
      function: "Provides metabolic support and vascular supply to individual nerve fibers; maintains microenvironment for nerve conduction",
      quickID: "Thinnest pink CT layer separating individual longitudinal fibers - look for delicate pink between white streaks"
    },
    {
      name: "Perineurium",
      level: "Middle layer (Level 2)",
      wraps: "Fascicle (bundle of nerve fibers)",
      composition: "5-10 concentric layers of flattened perineurial cells (epithelioid myofibroblasts) connected by tight junctions; each layer covered by basal lamina",
      appearance: "Distinct pink rim encircling each fascicle; appears as continuous pink boundary running longitudinally along bundle edge",
      contains: "Multiple layers of perineurial cells with tight junctions forming blood-nerve barrier; no blood vessels penetrate this layer",
      cnsEquivalent: "Arachnoid mater",
      function: "Forms blood-nerve barrier via tight junctions between perineurial cells; regulates ionic environment within fascicle; protects nerve fibers from toxic substances",
      quickID: "Smooth pink rim running along fascicle edge - blood-nerve barrier location!"
    },
    {
      name: "Epineurium",
      level: "Outermost layer (Level 3)",
      wraps: "Entire nerve (all fascicles together)",
      composition: "Dense irregular CT with thick collagen bundles, fibroblasts, adipocytes, blood vessels, lymphatics",
      appearance: "Thick pink CT surrounding entire nerve and filling spaces between fascicles; contains large white adipocytes",
      contains: "Blood vessels (vasa nervorum), lymphatics, adipose tissue, adipocytes, nerve fibers to nerve sheaths (nervi nervorum), thick collagen bundles",
      cnsEquivalent: "Dura mater",
      function: "Protects nerve from mechanical stress; allows nerve to glide during joint movement; provides cushioning via adipose tissue; supplies blood via vasa nervorum",
      quickID: "Thickest pink layer with LARGE white adipocytes - outside all fascicles"
    }
  ],
  
  criticalRelationships: [
    {
      title: "CNS-PNS Meningeal Transition (HIGH-YIELD!)",
      content: "The three CT layers of peripheral nerves are direct continuations of the three meningeal layers of the CNS, with transition occurring at nerve root exit points from brain/spinal cord.",
      details: [
        "Endoneurium = Pia mater continuation (innermost, vascular layer)",
        "Perineurium = Arachnoid mater continuation (middle, barrier layer)",
        "Epineurium = Dura mater continuation (outermost, protective layer)",
        "Transition zone at CNS-PNS junction where oligodendrocytes → Schwann cells",
        "This anatomical continuity explains why CNS infections can track along peripheral nerves",
        "Exam loves asking: 'Which peripheral nerve layer corresponds to arachnoid?' Answer: PERINEURIUM"
      ],
      emphasis: "Board exams frequently test knowledge of CNS-PNS layer equivalents - know these cold!"
    },
    {
      title: "Blood-Nerve Barrier Location (EXAM FAVORITE!)",
      content: "The blood-nerve barrier is formed exclusively by the PERINEURIUM via tight junctions between perineurial cells, protecting the endoneurial microenvironment.",
      details: [
        "Perineurium = ONLY site of blood-nerve barrier (tight junctions between cells)",
        "Prevents large molecules and toxins from entering fascicle interior",
        "Similar function to blood-brain barrier but different cellular composition",
        "Endoneurium is highly vascular BUT protected by perineurial barrier",
        "Barrier disruption in diabetic neuropathy allows toxic molecule entry",
        "Clinical correlation: Chemotherapy agents that cross barrier → peripheral neuropathy"
      ],
      emphasis: "High-yield exam question: 'Where is the blood-nerve barrier located?' Answer: PERINEURIUM with tight junctions!"
    },
    {
      title: "Myelin Appearance in HE vs OsO₄ (HIGH-YIELD!)",
      content: "Myelin appears completely opposite in HE versus osmium tetroxide staining due to lipid solubility differences during tissue processing.",
      details: [
        "HE staining: Myelin = WHITE (negative image) - lipids dissolved in processing",
        "OsO₄ staining: Myelin = BLACK - osmium binds and preserves lipids",
        "HE longitudinal: White streaks flanking pink axons run along fiber length",
        "OsO₄ longitudinal: Black tubes with white centers (axons), nodes of Ranvier visible",
        "Cross section HE: White circles (honeycomb) with pink dot centers",
        "Cross section OsO₄: Black rings with white/pale centers",
        "Exam trick: Shows HE slide, asks 'Why is myelin not stained pink?' - lipids removed!"
      ],
      emphasis: "Boards love contrasting HE (myelin white) vs OsO₄ (myelin black) - memorize this reversal!"
    },
    {
      title: "Longitudinal vs Cross Section Identification (EXAM FAVORITE!)",
      content: "Longitudinal sections show continuous white myelin streaks running parallel to fiber direction, whereas cross sections show honeycomb pattern of white circles.",
      details: [
        "Longitudinal: Wavy pink axon lines flanked by white myelin streaks running lengthwise",
        "Cross section: Honeycomb pattern with white circles (myelin) containing pink dots (axons)",
        "Longitudinal: Schwann nuclei appear as dark ovals spaced along white streaks",
        "Cross section: Schwann nuclei at periphery of white circles (myelin rings)",
        "Longitudinal: Perineurium = continuous pink rim running along fascicle edge",
        "Cross section: Perineurium = circular pink rim encircling entire fascicle",
        "Key difference: Direction of fiber visualization - parallel vs perpendicular cut"
      ],
      emphasis: "Exams show both orientations - must recognize longitudinal (streaks) vs cross (honeycomb) instantly!"
    }
  ],
  
  relationshipsSummary: [
    {
      title: "CNS-PNS Transitions (HIGH-YIELD!)",
      summary: "Peripheral nerve CT layers = direct CNS meningeal continuations at nerve roots",
      keyPoints: [
        "Endoneurium = Pia mater (innermost)",
        "Perineurium = Arachnoid mater (barrier)",
        "Epineurium = Dura mater (protective)"
      ]
    },
    {
      title: "Blood-Nerve Barrier (HIGH-YIELD!)",
      summary: "Perineurium forms barrier via tight junctions; protects endoneurial environment",
      keyPoints: [
        "ONLY in perineurium (not endoneurium/epineurium)",
        "Tight junctions between perineurial cells",
        "Prevents toxins entering fascicle interior"
      ]
    },
    {
      title: "HE vs OsO₄ Myelin (HIGH-YIELD!)",
      summary: "Myelin WHITE in HE (lipids dissolved), BLACK in OsO₄ (lipids preserved)",
      keyPoints: [
        "HE: white streaks = negative myelin image",
        "OsO₄: black tubes = positive myelin staining",
        "Opposite appearances in same structure!"
      ]
    },
    {
      title: "Orientation Recognition (HIGH-YIELD!)",
      summary: "Longitudinal = white myelin streaks; Cross = honeycomb white circles",
      keyPoints: [
        "Long: Parallel wavy fibers with white streaks",
        "Cross: Circular honeycomb pattern",
        "Both show same 3-layer CT organization"
      ]
    }
  ],
  
  keyIdentifyingFeatures: [
    "White longitudinal streaks flanking pale pink wavy axon lines (myelin negative image)",
    "Dark oval Schwann cell nuclei spaced along white myelin streaks at regular intervals",
    "Distinct pink rim (perineurium) running continuously along fascicle boundary",
    "Large white circles (adipocytes 3-10× bigger than myelin) in thick pink epineurium OUTSIDE fascicles",
    "Wavy parallel orientation of all nerve fibers running in same longitudinal direction",
    "Delicate pink endoneurium barely visible as background between individual fiber white streaks"
  ],
  
  comparisonWithOtherStains: {
    osO4: {
      name: "Osmium Tetroxide (OsO₄)",
      difference: "OsO₄ preserves and stains lipids BLACK, so myelin appears as prominent black tubes surrounding unstained pale axons. Longitudinal OsO₄ sections also reveal nodes of Ranvier (gaps in myelin sheath) as unstained interruptions in black myelin tubes. In HE, myelin is white (lipids dissolved), making OsO₄ superior for studying myelin structure and nodes of Ranvier.",
      advantage: "OsO₄ best for visualizing myelin sheath continuity, thickness variations, and nodes of Ranvier; provides positive staining of myelin structure"
    },
    silverStain: {
      name: "Silver Stain (Ag)",
      difference: "Silver stains selectively visualize axons and neurofibrils in BLACK while leaving myelin and CT relatively unstained. Longitudinal silver sections show continuous black axonal threads clearly separated from surroundings. In HE, axons appear as faint pink lines that can be difficult to distinguish from surrounding CT.",
      advantage: "Silver stain best for tracing individual axon pathways and studying axoplasmic structure; superior axonal detail"
    }
  },
  
  commonMistakes: [
    {
      mistake: "Confusing white myelin spaces with adipocytes in epineurium",
      correction: "SIZE is key! Myelin = small white streaks INSIDE fascicles (10-15 μm). Adipocytes = LARGE white circles OUTSIDE fascicles in epineurium (50-150 μm, 3-10× bigger). Location matters: myelin is surrounded by perineurial rim, adipocytes are beyond it.",
      why: "Both appear white in HE, but size and location are completely different - myelin microscopic inside, adipocytes massive outside"
    },
    {
      mistake: "Thinking myelin should stain pink with eosin since it's a cellular structure",
      correction: "Myelin is 70% LIPID (phospholipids and cholesterol), and lipids are dissolved during standard HE processing with alcohol and xylene, leaving empty white spaces. Only proteins and nucleic acids remain to take up eosin stain. This is why myelin appears WHITE (negative image) in HE.",
      why: "Students forget that tissue processing removes lipids - this is a fundamental principle of HE staining"
    },
    {
      mistake: "Identifying Schwann cell nuclei as axons or confusing their location",
      correction: "Schwann cell nuclei are DARK purple/blue heterochromatic nuclei located at the EDGE of white myelin streaks, not in the center. The pale pink structure in the CENTER of white myelin space is the axon. Schwann cells wrap around axons, so their nuclei are peripheral.",
      why: "Nuclear position is critical - Schwann nuclei peripheral, axons central within myelin space"
    },
    {
      mistake: "Stating that perineurium prevents all substances from entering fascicles",
      correction: "Perineurium is selectively permeable via tight junctions - it allows nutrients, oxygen, and small molecules to pass while blocking large molecules, toxins, and immune cells. It's a BARRIER but not a complete seal. Small molecules and gases cross via regulated transport.",
      why: "Blood-nerve barrier is selective, not absolute - nerve fibers need metabolic support from blood"
    },
    {
      mistake: "Not recognizing this as longitudinal section vs cross section",
      correction: "Longitudinal sections show PARALLEL wavy nerve fibers running in the same direction with WHITE STREAKS (myelin) flanking pink axon lines lengthwise. Cross sections show CIRCULAR honeycomb pattern with white circles and pink dots. Orientation is obvious from fiber direction.",
      why: "Section plane dramatically changes appearance - must identify orientation before detailed analysis"
    }
  ],
  
  clinicalCorrelations: [
    {
      condition: "Guillain-Barré Syndrome (GBS)",
      relevance: "Autoimmune demyelination of peripheral nerves where immune system attacks myelin sheaths produced by Schwann cells. Loss of myelin (visible as white spaces in HE) causes severe motor weakness and paralysis. The perineurial blood-nerve barrier is compromised, allowing antibodies and immune cells to enter fascicles and destroy myelin.",
      histologicalChange: "Reduced or absent white myelin spaces, Schwann cell proliferation, lymphocyte infiltration within fascicles, axons preserved initially"
    },
    {
      condition: "Diabetic Peripheral Neuropathy",
      relevance: "Chronic hyperglycemia damages perineurial blood-nerve barrier and endoneurial capillaries, leading to nerve fiber degeneration. Thickened perineurium and reduced endoneurial blood flow cause axonal damage and loss of sensation (especially in feet). The structured nerve architecture seen in normal histology deteriorates.",
      histologicalChange: "Perineurial thickening, endoneurial fibrosis, loss of large myelinated fibers (fewer white spaces), axonal atrophy"
    },
    {
      condition: "Peripheral Nerve Injury and Wallerian Degeneration",
      relevance: "After nerve transection, the distal axon segment undergoes Wallerian degeneration where axons and myelin break down. Schwann cells proliferate and form bands of Büngner to guide regenerating axons. The three CT layers (especially endoneurium) provide scaffolding for axon regrowth from proximal stump.",
      histologicalChange: "Distal to injury: fragmented axons, myelin breakdown (debris), Schwann cell proliferation forming bands, preserved endoneurial tubes guide regeneration"
    },
    {
      condition: "Charcot-Marie-Tooth Disease (Hereditary Neuropathy)",
      relevance: "Genetic mutations affect Schwann cell function or axonal transport, causing progressive demyelination and axonal loss in peripheral nerves. Schwann cells undergo repeated cycles of demyelination and remyelination, creating characteristic 'onion bulbs' - concentric Schwann cell processes around axons. Nerve conduction severely slowed.",
      histologicalChange: "Onion bulb formations (concentric Schwann processes), reduced myelin thickness, axonal loss, epineurial fibrosis"
    }
  ],
  
  functionalContext: {
    normalFunction: "Peripheral nerves transmit electrical signals bidirectionally between CNS and periphery. Motor axons carry commands from spinal cord to muscles. Sensory axons carry information from receptors to CNS. Autonomic axons regulate involuntary functions. Myelin sheaths enable saltatory conduction for rapid signal transmission (up to 120 m/s in large myelinated fibers). The three CT layers protect axons, maintain ionic environment, and allow nerve flexibility during movement.",
    physiologicalImportance: "Myelination increases conduction velocity 10-100× compared to unmyelinated fibers, essential for rapid reflexes and coordinated movement. Blood-nerve barrier in perineurium maintains stable ionic composition for action potential generation. Endoneurial capillaries provide oxygen and glucose for high metabolic demands of axoplasmic transport. Epineurial adipose cushioning prevents nerve compression during joint movement."
  },
  
  sizeReference: {
    myelinSheath: "Small white longitudinal streaks, 5-15 μm width depending on fiber size",
    axon: "Very small pale pink wavy line in center of myelin, 1-20 μm diameter",
    schwannNucleus: "Dark oval nucleus 5-8 μm length, positioned at edge of myelin streak",
    adipocyte: "LARGE white circles 50-150 μm diameter (3-10× bigger than myelin spaces)",
    fascicle: "Variable, typically 0.1-1.5 mm diameter containing dozens to hundreds of nerve fibers",
    comparison: "CRITICAL SIZE DIFFERENCE: Myelin (small, inside fascicles) vs Adipocytes (large, outside fascicles) - this is the #1 way to distinguish them! Myelin 10-15 μm, Adipocytes 50-150 μm."
  },
  
  identificationTips: [
    "ORIENTATION FIRST: Longitudinal section shows PARALLEL wavy fibers with white STREAKS (not circles)",
    "Look for white elongated spaces flanking pale pink wavy lines - this is the diagnostic pattern of myelin (white) surrounding axons (pink) in longitudinal view",
    "Find the distinct pink rim running along fascicle edge - this is perineurium (blood-nerve barrier)",
    "Identify dark oval Schwann nuclei positioned at the EDGE of white myelin streaks, not in center",
    "Look for LARGE white circles in thick pink CT OUTSIDE the perineurial rim - these are adipocytes in epineurium",
    "Compare sizes: myelin spaces are SMALL white streaks inside fascicles; adipocytes are LARGE white circles outside fascicles (3-10× bigger)",
    "Trace continuous nerve fibers running parallel - all should run in same longitudinal direction",
    "Distinguish fibrocyte nuclei (elongated, scattered in endoneurium) from Schwann nuclei (at myelin edge)"
  ],
  
  examTips: [
    "Boards love asking 'Why does myelin appear white in HE?' - Answer: Lipids dissolved during processing!",
    "Know the CNS equivalents COLD: Endo=Pia, Peri=Arachnoid, Epi=Dura (transition at nerve roots)",
    "Blood-nerve barrier question = Always answer PERINEURIUM with tight junctions (most tested relationship)",
    "Can identify longitudinal vs cross by asking: Do I see parallel streaks OR circular honeycomb?",
    "Size comparison is key exam point: Myelin SMALL & INSIDE vs Adipocytes LARGE & OUTSIDE fascicles",
    "Expect comparison question: 'How would this appear in OsO₄?' - Answer: Myelin would be BLACK not white",
    "Schwann cell location trick: Their nuclei are at EDGE of myelin rings/streaks, not in center (axon is center)",
    "Clinical correlation favorite: Guillain-Barré = demyelination, showing importance of Schwann cells and myelin",
    "Remember: HE shows negative myelin image (white) because lipids extracted; this is intentional processing artifact",
    "Know that longitudinal sections better reveal fiber continuity and CT layer organization along length"
  ],
  
  ultraMinimalFacts: {
    staining: "HE: Myelin = WHITE (lipids dissolved!), not pink. White streaks = diagnostic",
    layers: [
      "• ENDO = wraps 1 fiber (Pia)",
      "• PERI = wraps bundle (Arachnoid) - barrier!",
      "• EPI = wraps nerve (Dura)"
    ],
    visualID: [
      "• White streaks flanking pink axons = myelin (long.)",
      "• Dark nuclei at edge of streaks = Schwann cells",
      "• Pink rim along bundle edge = perineurium",
      "• LARGE white circles outside = adipocytes"
    ],
    cnsConnection: "Endo→Peri→Epi = Pia→Arachnoid→Dura (transition at nerve roots)",
    dontConfuse: [
      "• Myelin (small, inside) ≠ Adipocyte (large, outside)",
      "• Schwann nucleus (edge) ≠ Axon (center pink line)",
      "• Long. (white streaks) ≠ Cross (honeycomb circles)"
    ]
  }
};
const SLIDE_DATA_72 = {
  slideNumber: "72",
  name: "Peripheral Nerve - Cross Section (OsO₄)",
  section: "cross section",
  stain: "OsO₄",
  
  bigPicture: "OsO₄ stains lipid-rich myelin BLACK - opposite of HE's white rings!",
  
  hierarchy: [
    "Axon → Fascicle → Whole Nerve",
    "↓ ENDO → PERI → EPI",
    "↓ (Pia) → (Arachnoid) → (Dura)"
  ],
  
  stainingInfo: {
    technique: "Osmium Tetroxide (OsO₄)",
    mechanism: "Osmium tetroxide is a heavy metal stain that binds to and oxidizes lipids, particularly the phospholipid bilayers in myelin sheaths. The reduced osmium deposits create an electron-dense black precipitate. Unlike HE where lipids are dissolved during processing, osmium preserves and stains lipids black, making it the gold standard for myelin visualization.",
    whatItStainsInThisSlide: [
      "Myelin sheaths: Dense BLACK rings around axons (lipid-rich structure)",
      "Axons: Appear UNSTAINED (white/pale gray) in center of myelin rings",
      "Schwann cell nuclei: May appear lightly stained",
      "Connective tissue layers (endoneurium, perineurium, epineurium): Lightly stained tan/brown",
      "Blood vessels: Lightly stained walls",
      "Adipocytes: BLACK (lipid-filled), similar appearance to myelin but much larger"
    ],
    keyEmphasis: "CRITICAL REVERSAL from HE staining: In OsO₄, myelin is BLACK (lipids stained) while axons are WHITE (unstained). In HE, myelin is WHITE (lipids dissolved) while axons are PINK (stained). This creates opposite appearances: OsO₄ shows black rings with white centers (black myelin, white axon) vs HE's white rings with pink centers (white myelin space, pink axon). Both adipocytes and myelin appear black in OsO₄, but adipocytes are 5-10× larger and located OUTSIDE fascicles in the epineurium."
  },
  
  examEssentialStructures: {
    grouped: [
      {
        parent: "Bundle of nerve fibers (inside fascicles)",
        children: [
          "Axons",
          "Myelin sheaths (BLACK rings)",
          "Schwann cells"
        ]
      },
      {
        parent: "Supporting cells",
        children: [
          "Fibrocytes (in endoneurium)"
        ]
      }
    ],
    layers: [
      "Endoneurium",
      "Perineurium",
      "Epineurium"
    ],
    additional: [
      "Blood vessels (vasa nervorum)",
      "Adipocytes (in epineurium)"
    ]
  },
  
  insideTheFascicles: [
    {
      structure: "Axon",
      description: "Unstained white/pale center dot within black myelin ring; carries electrical nerve impulses along its length"
    },
    {
      structure: "Myelin sheath (BLACK ring)",
      description: "Dense BLACK circular ring surrounding axon; lipid-rich insulation stained by osmium, appears as solid black circle creating distinctive pattern"
    },
    {
      structure: "Schwann cell nucleus",
      description: "Small elongated nucleus at periphery of myelin ring; produces and maintains the myelin sheath wrapping around the axon"
    },
    {
      structure: "Endoneurium",
      description: "Delicate tan/lightly stained connective tissue filling spaces between nerve fibers; provides structural support and contains capillaries for metabolic support"
    },
    {
      structure: "Fibrocytes",
      description: "Scattered elongated nuclei within endoneurium; maintain the connective tissue matrix between individual nerve fibers"
    }
  ],
  
  layers: [
    {
      name: "Endoneurium",
      level: "Innermost layer (Level 1)",
      wraps: "Individual nerve fiber (single axon + myelin sheath + Schwann cell)",
      composition: "Delicate loose connective tissue composed of reticular fibers (type III collagen), scattered fibroblasts (fibrocytes), and a rich capillary network for metabolic support of nerve fibers",
      appearance: "Very thin lightly stained tan connective tissue barely visible between individual black myelin rings inside fascicles. Much more subtle than in HE due to lighter staining by osmium.",
      contains: "Capillaries providing oxygen and nutrients, fibroblasts maintaining the extracellular matrix, reticular fibers creating delicate support network, tissue fluid bathing nerve fibers",
      cnsEquivalent: "Pia mater (innermost meningeal layer; direct continuous transition occurs at nerve roots where PNS meets CNS)",
      function: "Provides immediate structural support and microenvironment for individual nerve fibers, supplies nutrients via rich capillary network, maintains optimal ionic environment for nerve conduction, allows flexibility of individual fibers during nerve movement",
      quickID: "Thinnest barely visible tan tissue between black myelin rings inside fascicles"
    },
    {
      name: "Perineurium",
      level: "Middle layer (Level 2)",
      wraps: "Fascicle (bundle of multiple myelinated nerve fibers)",
      composition: "Specialized epithelioid perineural cells arranged in concentric layers (2-6 lamellae) connected by tight junctions, each layer surrounded by basement membrane, creating a cellular barrier unique to peripheral nerves",
      appearance: "Distinct smooth rim encircling each fascicle, appears as lightly stained tan/brown border clearly demarcating fascicle boundaries. More prominent than endoneurium, creates clear fascicle borders visible even with osmium staining.",
      contains: "Multiple concentric layers of flattened perineural cells with extensive tight junctions forming the blood-nerve barrier, basement membranes surrounding each cellular layer, occasional fibroblasts, small perineurial space between layers",
      cnsEquivalent: "Arachnoid mater (middle meningeal layer; transition occurs at nerve root entry/exit zones at CNS-PNS junction)",
      function: "Forms the critical blood-nerve barrier by controlling diffusion of substances into and out of fascicles through tight junctions between perineural cells, maintains stable microenvironment essential for proper nerve conduction by regulating ionic composition, protects nerve fibers from mechanical stress and pressure, prevents spread of infection from surrounding tissues into fascicles",
      quickID: "Smooth tan rim border surrounding each fascicle bundle - the definitive fascicle boundary"
    },
    {
      name: "Epineurium",
      level: "Outermost layer (Level 3)",
      wraps: "Entire nerve (multiple fascicles bundled together)",
      composition: "Dense irregular connective tissue with thick collagen bundles (type I collagen), abundant adipose tissue providing cushioning, extensive vascular network (vasa nervorum), lymphatic vessels, and nerve fibers (nervi nervorum) innervating the nerve sheaths",
      appearance: "Thick lightly stained tan/brown connective tissue surrounding and separating fascicles. Contains conspicuous LARGE BLACK circles (adipocytes much bigger than myelin) and visible blood vessel profiles. Forms the outermost protective coat and fills interfascicular spaces.",
      contains: "Larger blood vessels (vasa nervorum) supplying the nerve, lymphatic vessels for fluid drainage, abundant adipocytes (3-10× larger than myelin sheaths) providing cushioning and energy storage, nervi nervorum (small nerve fibers innervating the connective tissue sheaths), thick collagen fiber bundles",
      cnsEquivalent: "Dura mater (outermost tough meningeal layer; continuous direct transition at spinal nerve roots)",
      function: "Provides robust mechanical protection for the entire nerve during movement and pressure, supplies vascular support through vasa nervorum network, allows nerve gliding and movement within surrounding tissues via loose adipose cushioning, binds multiple fascicles together into functional nerve trunk, stores energy in adipocytes",
      quickID: "Thickest layer with large BLACK adipocytes between fascicles, surrounds entire nerve"
    }
  ],
  
  criticalRelationships: [
    {
      title: "OsO₄ vs HE: The Great Myelin Reversal (EXAM FAVORITE!)",
      content: "Understanding how the same structure appears opposite in different stains is CRITICAL for slide identification and a favorite exam question. This tests your understanding of staining mechanisms.",
      details: [
        "HE STAINING: Myelin = WHITE (lipids dissolved during processing, leaving empty space), Axon = PINK (protein stained by eosin)",
        "OsO₄ STAINING: Myelin = BLACK (lipids preserved and stained by osmium), Axon = WHITE (unstained protein)",
        "Visual pattern reversal: HE shows white rings with pink centers | OsO₄ shows black rings with white centers",
        "Both create 'honeycomb' pattern but with inverted colors",
        "Myelin thickness appears IDENTICAL in both stains (same biological structure), only the color changes",
        "OsO₄ is the GOLD STANDARD for myelin visualization because it actually stains the lipids rather than showing empty space"
      ],
      emphasis: "This is a HIGH-YIELD comparison question on exams! You MUST be able to identify which stain you're viewing based on myelin appearance: WHITE myelin = HE, BLACK myelin = OsO₄. Remember: 'Black is back' - OsO₄ brings back the lipids in black!"
    },
    {
      title: "Critical Size Distinction: Myelin vs Adipocytes in OsO₄ (HIGH-YIELD!)",
      content: "Both myelin sheaths and adipocytes appear BLACK in OsO₄ because both are lipid-rich structures. Distinguishing them is ESSENTIAL and frequently tested!",
      details: [
        "MYELIN (BLACK rings): Small uniform circles (5-20 μm diameter), located INSIDE fascicles within perineurial rim, create regular honeycomb pattern, have white axon in center, Schwann nucleus at periphery",
        "ADIPOCYTES (BLACK circles): LARGE variable circles (50-200 μm diameter, 5-10× bigger than myelin), located OUTSIDE fascicles in EPINEURIUM, irregular scattered pattern, nucleus pushed to periphery, no central axon",
        "LOCATION is the #1 distinguishing feature: Inside perineurial rim = myelin | Outside/between fascicles = adipocytes",
        "SIZE is the #2 feature: Small regular rings = myelin | Large irregular circles = adipocytes",
        "PATTERN: Organized honeycomb = myelin | Scattered irregular = adipocytes",
        "Both are diagnostic features: myelin confirms nerve tissue, adipocytes confirm epineurium layer"
      ],
      emphasis: "EXAM TIP: If you see BLACK circles in OsO₄, immediately check TWO things: (1) Are they inside or outside the fascicle boundary? (2) Are they small and uniform or large and variable? These two questions will never fail you!"
    },
    {
      title: "CNS-PNS Meningeal Transition (HIGH-YIELD EXAM TOPIC!)",
      content: "At spinal nerve roots where peripheral nerves enter/exit the spinal cord, the three peripheral nerve layers transition directly and continuously to the three CNS meningeal layers. This creates a continuous protective system.",
      details: [
        "Endoneurium (Level 1, innermost) → Pia mater (innermost meningeal layer, highly vascular)",
        "Perineurium (Level 2, middle) → Arachnoid mater (middle meningeal layer, CSF-filled subarachnoid space below)",
        "Epineurium (Level 3, outermost) → Dura mater (outermost tough meningeal layer)",
        "Transition zone occurs at nerve root entry/exit points at spinal cord",
        "Blood-nerve barrier (perineurium tight junctions) is continuous with blood-brain barrier (BBB) system",
        "This parallel structure ensures continuous protection from PNS through CNS",
        "Clinical relevance: Infections can track along this path; understanding transition helps explain nerve root pathology"
      ],
      emphasis: "This 3-layer parallel is ESSENTIAL for exams! Mnemonic: 'EPA to PAD' - Epineurium→Perineurium→Axons becomes Pial→Arachnoid→Dural going from outside to inside at nerve roots. The transition ensures uninterrupted protection!"
    },
    {
      title: "Hierarchical Organization: Wire→Cable→Bundled Cables (EXAM FAVORITE!)",
      content: "Understanding the nested wrapping pattern is critical for identifying nerve structures and explaining nerve organization. This hierarchical system appears repeatedly on practical exams.",
      details: [
        "LEVEL 1 (Single Wire): Individual axon with myelin sheath wrapped by ENDONEURIUM - the basic functional unit",
        "LEVEL 2 (Cable): Multiple myelinated axons bundled into a fascicle wrapped by PERINEURIUM - creates the characteristic fascicular pattern",
        "LEVEL 3 (Bundled Cables): Multiple fascicles grouped together wrapped by EPINEURIUM - forms the complete peripheral nerve trunk",
        "Each level provides progressively stronger protection: delicate support → selective barrier → mechanical cushioning",
        "This nesting pattern is visible in cross-section as: black rings (myelin) inside tan rim (perineurium) within thick coat (epineurium)",
        "Analogy helps: Think electrical wiring system: insulated wire → shielded cable → cable bundle with jacket",
        "Understanding this hierarchy explains nerve organization from microscopic to macroscopic scale"
      ],
      emphasis: "This hierarchical pattern is your ROADMAP for nerve identification! On exams, start by identifying fascicle boundaries (perineurium), then work inward (endoneurium, myelin) and outward (epineurium). This systematic approach prevents confusion!"
    }
  ],
  
  relationshipsSummary: [
    {
      title: "OsO₄ vs HE Reversal (HIGH-YIELD!)",
      summary: "HE: myelin=WHITE (dissolved), axon=PINK | OsO₄: myelin=BLACK (stained), axon=WHITE. Same structure, opposite appearance!",
      keyPoints: [
        "WHITE myelin rings = HE stain | BLACK myelin rings = OsO₄ stain",
        "Color reversal but same honeycomb pattern",
        "OsO₄ = gold standard for myelin visualization",
        "Exam favorite: identify stain by myelin color"
      ]
    },
    {
      title: "Myelin vs Adipocyte Distinction (HIGH-YIELD!)",
      summary: "Both BLACK in OsO₄ (both lipid-rich). Key: myelin=small, inside fascicles | adipocytes=large (5-10×), outside fascicles",
      keyPoints: [
        "LOCATION: Inside rim = myelin | Outside/between = adipocytes",
        "SIZE: Small uniform rings = myelin | Large variable = adipocytes",
        "Honeycomb pattern = myelin | Scattered = adipocytes",
        "Check location first, then size"
      ]
    },
    {
      title: "CNS-PNS Transition (HIGH-YIELD!)",
      summary: "Endo→Peri→Epi = Pia→Arachnoid→Dura at nerve roots. Blood-nerve barrier ↔ BBB. Continuous protection PNS↔CNS.",
      keyPoints: [
        "Direct layer-to-layer transition at nerve roots",
        "Perineurium tight junctions → Blood-nerve barrier",
        "Mnemonic: 'EPA to PAD' (outside→in at roots)",
        "Essential for understanding nerve root pathology"
      ]
    },
    {
      title: "Hierarchical Nesting (EXAM FAVORITE!)",
      summary: "Level 1: Axon+Endo | Level 2: Fascicle+Peri | Level 3: Nerve+Epi. Wire→Cable→Bundle analogy.",
      keyPoints: [
        "Each level = progressively stronger protection",
        "Identify fascicle boundary (peri) first, work in/out",
        "Visible as nested rings in cross-section",
        "Systematic approach prevents confusion"
      ]
    }
  ],
  
  keyIdentifyingFeatures: [
    "BLACK MYELIN RINGS (pathognomonic): Dense black circular rings surrounding unstained white axons - the OPPOSITE of HE's white rings. This reversed appearance is the definitive feature of OsO₄ staining and distinguishes it immediately from HE sections.",
    "HONEYCOMB PATTERN with inverted colors: Regular array of black rings with white centers inside fascicles creates honeycomb pattern similar to HE but with colors reversed (black rings vs white rings). The pattern organization is identical, only the color contrast is opposite.",
    "DISTINCT FASCICLES: Multiple well-defined nerve bundles separated by lightly stained tan epineurium containing large black adipocytes. Each fascicle is bordered by perineurial rim and packed with black myelin rings.",
    "VARIABLE MYELIN THICKNESS: Black myelin rings show varying thickness (diameter differences) while white axon centers remain relatively constant in size, indicating variation in myelination degree among different fiber types (heavily vs lightly myelinated).",
    "LARGE BLACK ADIPOCYTES in epineurium: Conspicuous large black circles (5-10× bigger than myelin rings) scattered OUTSIDE fascicles in interfascicular epineurium, providing clear size comparison to distinguish from myelin.",
    "WHITE AXONAL CENTERS: Unstained pale white/gray dots in the center of each black myelin ring, representing the axoplasm which does not stain with osmium (in contrast to HE where axons are pink)."
  ],
  
  comparisonWithOtherStains: {
    "HE (Hematoxylin & Eosin) - Slides 70, 71": {
      differences: [
        "MYELIN: HE = white empty space (lipids dissolved) | OsO₄ = dense black rings (lipids stained)",
        "AXON: HE = pink dot (eosin stains protein) | OsO₄ = white unstained dot",
        "APPEARANCE: HE = white rings with pink centers | OsO₄ = black rings with white centers",
        "ADIPOCYTES: HE = white empty spaces | OsO₄ = black filled circles (both appear similar but in OsO₄ adipocytes are more prominent)",
        "CONNECTIVE TISSUE: HE = distinct pink layers | OsO₄ = lighter tan/brown staining",
        "NUCLEI: HE = dark blue/purple (hematoxylin) | OsO₄ = less prominent, lighter"
      ],
      whenToUseEach: "Use HE for general nerve architecture, identifying connective tissue layers clearly (especially perineurium and epineurium), and seeing cellular nuclei prominently. Use OsO₄ specifically for MYELIN VISUALIZATION - it's the gold standard because it preserves and stains the actual lipid structure rather than showing empty space. OsO₄ is essential for assessing myelination quality, myelin thickness, and diagnosing demyelinating conditions. HE is better for overall tissue architecture; OsO₄ is superior for myelin-specific studies."
    },
    "Silver Stain (Ag)": "Silver stain specifically highlights nerve fibers and axons (stains BLACK) but does NOT stain myelin. In Ag stain, axons appear as black threads/lines while myelin sheaths are unstained. This is opposite to OsO₄ where myelin is black. Silver is used to trace nerve fiber distribution and dendritic patterns, while OsO₄ is used specifically for myelin assessment."
  },
  
  commonMistakes: [
    {
      mistake: "Confusing OsO₄ peripheral nerve with HE peripheral nerve",
      why: "Both show honeycomb pattern and similar organization, leading to confusion if you don't notice the color reversal",
      correction: "ALWAYS check myelin color first: WHITE rings = HE (lipids dissolved), BLACK rings = OsO₄ (lipids stained). This single feature immediately identifies the stain. Remember: 'Black back' - OsO₄ brings back the lipids in black. Don't be fooled by similar patterns - COLOR is the diagnostic key!"
    },
    {
      mistake: "Misidentifying large BLACK adipocytes as myelin sheaths in OsO₄",
      why: "Both adipocytes and myelin appear black in OsO₄ because both are lipid-rich, and students focus on color rather than size and location",
      correction: "Use the '2-Question Rule': (1) Is it INSIDE or OUTSIDE the fascicle? Inside = myelin, Outside = adipocyte. (2) Is it SMALL (5-20 μm) or LARGE (50-200 μm)? Small uniform = myelin, Large variable = adipocyte. Check LOCATION first (most reliable), then SIZE. Adipocytes are 5-10× bigger and never inside fascicles. Also look for honeycomb pattern (myelin) vs scattered irregular pattern (adipocytes)."
    },
    {
      mistake: "Thinking the white centers in OsO₄ are myelin because they look like HE myelin",
      why: "In HE, myelin appears white, so students incorrectly assume white = myelin in all stains",
      correction: "The white centers in OsO₄ are AXONS (unstained axoplasm), NOT myelin! The BLACK RINGS surrounding them are the myelin. OsO₄ completely reverses the HE appearance: OsO₄ black ring = HE white ring (both are myelin, just stained differently). White in OsO₄ = axon protein (not stained by osmium). Remember the reversal: HE shows 'white myelin, pink axon' while OsO₄ shows 'black myelin, white axon'."
    },
    {
      mistake: "Forgetting that OsO₄ is the gold standard for myelin and trying to assess myelin with HE",
      why: "Students don't understand the clinical/research applications and when each stain is appropriate",
      correction: "OsO₄ is the GOLD STANDARD for myelin studies because it actually STAINS the lipids (preserves and visualizes the real structure) rather than showing negative space. Use OsO₄ when you need to: (1) assess myelin thickness accurately, (2) diagnose demyelinating diseases, (3) study myelination during development, (4) evaluate myelin integrity in nerve injury. HE is better for general architecture but cannot accurately assess myelin itself since the lipids are dissolved. For myelin = use OsO₄!"
    },
    {
      mistake: "Not recognizing this is the same nerve structure as HE, just stained differently",
      why: "The dramatic color reversal makes it look like a completely different tissue",
      correction: "OsO₄ and HE peripheral nerve slides show THE EXACT SAME anatomical structures - just with different staining. Both show: (1) fascicles bounded by perineurium, (2) myelin rings around axons in honeycomb pattern, (3) three CT layers (endo, peri, epi), (4) adipocytes in epineurium, (5) blood vessels. The ONLY difference is HOW the structures are visualized: lipid preservation (OsO₄) vs lipid dissolution (HE). Learn to mentally 'flip' the colors: HE white→OsO₄ black (myelin), HE pink→OsO₄ white (axon)."
    }
  ],
  
  clinicalCorrelations: [
    {
      condition: "Demyelinating Diseases (Multiple Sclerosis, Guillain-Barré Syndrome)",
      relevance: "OsO₄ staining is ESSENTIAL for diagnosing and studying demyelinating diseases because it allows direct visualization of myelin loss or damage. In demyelinating conditions, OsO₄ sections would show: (1) reduced or absent black myelin rings, (2) 'naked' axons (white centers without black rings), (3) irregular myelin thickness, (4) myelin debris (fragmented black material). The ability to actually SEE myelin (rather than empty space in HE) makes OsO₄ the gold standard for demyelination studies. MS affects CNS myelin while GBS affects PNS myelin - both would show characteristic myelin loss patterns in osmium-stained sections."
    },
    {
      condition: "Peripheral Neuropathy",
      relevance: "OsO₄ is critical for diagnosing peripheral neuropathies by revealing myelin abnormalities and axonal changes. Different neuropathy types show specific patterns: (1) Axonal neuropathy: loss of white axonal centers with preserved black myelin rings initially, (2) Demyelinating neuropathy: loss/thinning of black myelin rings with preserved white axons, (3) Mixed neuropathy: both features present. OsO₄ allows distinction between primarily axonal vs demyelinating pathology, which has important treatment implications. Nerve biopsy with osmium staining can diagnose hereditary neuropathies (like Charcot-Marie-Tooth), diabetic neuropathy, and toxic neuropathies by showing characteristic myelin and axonal patterns."
    },
    {
      condition: "Wallerian Degeneration (nerve injury distal to cut)",
      relevance: "After nerve injury, the distal segment undergoes Wallerian degeneration where myelin breaks down. OsO₄ is ideal for studying this process because it shows: (1) Progressive fragmentation of black myelin rings over days, (2) Formation of myelin ovoids (disconnected black segments), (3) Macrophage infiltration removing myelin debris, (4) Eventual clearing of black myelin staining in degenerated regions. This process must occur before nerve regeneration can begin. Understanding the timeline and appearance of Wallerian degeneration on osmium staining helps predict recovery potential after nerve injury and guides surgical timing for nerve repair."
    },
    {
      condition: "Nerve Biopsy Interpretation",
      relevance: "Clinical nerve biopsies are routinely processed with OsO₄ because it provides superior diagnostic information about myelin integrity. Pathologists use osmium-stained sections to diagnose: (1) Myelin thickness abnormalities (hypermyelination vs hypomyelination), (2) Remyelination patterns (thin irregular myelin after nerve recovery), (3) Onion bulb formations (concentric Schwann cell proliferation in chronic demyelination), (4) Segmental demyelination patterns. The ability to see actual myelin structure (not just negative space) allows accurate assessment of myelination quality and identification of specific pathological patterns that guide diagnosis and prognosis."
    }
  ],
  
  functionalContext: {
    roleInNerve: "OsO₄ staining reveals the functional organization of peripheral nerves by clearly visualizing the myelin sheaths that are essential for rapid saltatory conduction. The black myelin rings show which axons are myelinated (capable of fast conduction) versus unmyelinated (slower conduction). Variable myelin thickness visible in OsO₄ sections indicates different fiber types: thick myelin = large diameter motor fibers (fast α-motor neurons), medium myelin = sensory fibers (Aβ touch/pressure), thin myelin = smaller sensory/autonomic fibers. This allows correlation between structure and function: heavily myelinated fibers = rapid conduction velocity, lightly myelinated = slower conduction. The preservation of myelin also allows study of Nodes of Ranvier (visible in longitudinal OsO₄ sections as gaps in black myelin) which are critical for saltatory conduction.",
    physiologicalNote: "Myelin provides both electrical insulation (increases membrane resistance) and reduces capacitance, allowing the action potential to 'jump' between Nodes of Ranvier in saltatory conduction - increasing conduction velocity up to 100×. The thickness of myelin sheath (visible as width of black ring in OsO₄) directly correlates with conduction velocity: thicker myelin = faster conduction. Demyelination (loss of black rings in OsO₄) causes dramatic slowing or complete conduction block, explaining symptoms in MS and GBS. The three connective tissue layers visible in OsO₄ provide: (1) Endoneurium - ionic homeostasis for conduction, (2) Perineurium - blood-nerve barrier maintaining optimal extracellular environment, (3) Epineurium - mechanical protection during limb movement. Understanding this structure-function relationship is essential for interpreting nerve conduction studies and clinical deficits."
  },
  
  identificationTips: [
    "STEP 1 - Identify the stain FIRST by checking myelin color: If you see BLACK rings, it's OsO₄. If you see WHITE rings, it's HE. This is your first and most important step - don't proceed until you've identified the stain!",
    "STEP 2 - Find fascicles by looking for clusters of black rings (myelin) organized in honeycomb patterns, each cluster bounded by a lightly stained rim (perineurium)",
    "STEP 3 - Identify the three layers working inside-out: (1) Endoneurium = barely visible tan tissue between black rings inside fascicles, (2) Perineurium = smooth tan rim surrounding each fascicle, (3) Epineurium = thick tan tissue between fascicles containing large black adipocytes",
    "STEP 4 - Distinguish myelin from adipocytes using the 2-Question Rule: (1) Location - inside fascicle = myelin, outside/between = adipocytes; (2) Size - small uniform = myelin (5-20 μm), large variable = adipocytes (50-200 μm, 5-10× bigger)",
    "Look for white unstained centers within black rings - these are axons. The black ring surrounding them is myelin. This is OPPOSITE of HE!",
    "Use the 'Black Back' memory aid: 'OsO₄ brings black back' - the lipids that were dissolved (white) in HE are brought back and stained black in OsO₄",
    "If asked to compare with HE, explain the reversal: Same structures, opposite appearance. HE white rings = OsO₄ black rings (both myelin). HE pink centers = OsO₄ white centers (both axons).",
    "Remember that OsO₄ is the GOLD STANDARD for myelin visualization - mention this if asked about clinical applications or research uses",
    "The overall nerve architecture (fascicles, layers, organization) is IDENTICAL to HE - only the staining colors differ. Don't be fooled by the dramatic color change!",
    "Variable black ring thickness (myelin) with relatively constant white center size (axon) indicates different nerve fiber types with different myelination levels - this is normal!"
  ],
  
  examTips: [
    "HIGHEST YIELD: Know the HE vs OsO₄ reversal cold! 'WHITE myelin in HE = BLACK myelin in OsO₄' and 'PINK axon in HE = WHITE axon in OsO₄'. This comparison question appears on nearly every practical exam.",
    "If shown an OsO₄ image on exam, immediately state: 'This is osmium tetroxide staining, which stains lipid-rich myelin sheaths black, making it the gold standard for myelin visualization.' This shows you understand both the technique and its clinical significance.",
    "For structure identification, always use the systematic inside-out approach: (1) Identify black rings = myelin inside fascicles, (2) Find tan rim = perineurium boundary, (3) Note large black circles outside = adipocytes in epineurium. This method works 100% of the time.",
    "Be prepared to explain WHY myelin appears opposite in OsO₄ vs HE: 'In HE, lipids are dissolved during processing leaving white space. In OsO₄, osmium preserves and stains lipids black, showing the actual myelin structure.' This demonstrates understanding of staining mechanisms.",
    "Know the '2-Question Rule' for myelin vs adipocytes: (1) Location? (2) Size? Practice applying this because it's a favorite exam question: 'What are the large black circles in the epineurium?'",
    "Memorize CNS equivalents and be ready to explain the transition: 'Endoneurium→Pia, Perineurium→Arachnoid, Epineurium→Dura, with direct continuous transition at nerve roots forming blood-nerve barrier to BBB continuity.'",
    "For clinical correlation questions, mention demyelinating diseases: 'OsO₄ is essential for diagnosing MS, GBS, and peripheral neuropathies because it allows direct visualization of myelin loss or abnormalities.'",
    "If asked about fiber types, explain: 'Variable black ring thickness indicates different nerve fiber types: thick myelin = large motor fibers, thin myelin = small sensory/autonomic fibers. This correlates with conduction velocity.'",
    "Practice mental color flipping: When viewing OsO₄, mentally convert to HE appearance (and vice versa) to solidify understanding that it's the same structure viewed differently.",
    "Remember the mnemonic 'Black Back' for OsO₄ - it brings the lipids back in black (vs dissolved in HE).",
    "Be ready to explain why OsO₄ is the gold standard: 'It preserves and stains actual myelin structure rather than showing negative space, allowing accurate assessment of myelin thickness, integrity, and pathology.'",
    "For practical exams, don't rush! Take 2 seconds to identify the stain (black vs white myelin), then systematically identify structures. Rushing leads to confusing HE with OsO₄."
  ],
  
  ultraMinimalFacts: {
    staining: "OsO₄: Stains LIPIDS black. Myelin = BLACK rings (opposite of HE white!)",
    layers: [
      "• ENDO = wraps 1 fiber (Pia)",
      "• PERI = wraps bundle (Arachnoid) - blood-nerve barrier",
      "• EPI = wraps nerve (Dura)"
    ],
    visualID: [
      "• BLACK rings inside fascicles = myelin (reversed from HE!)",
      "• White centers of rings = axons (unstained)",
      "• Tan rim around bundles = perineurium",
      "• LARGE black circles outside = adipocytes (5-10× bigger)"
    ],
    cnsConnection: "Endo→Peri→Epi = Pia→Arachnoid→Dura at nerve roots",
    dontConfuse: [
      "• OsO₄ myelin (black rings) ≠ HE myelin (white rings) - same structure!",
      "• Myelin (small, inside) ≠ Adipocytes (large, outside)",
      "• White centers (axons in OsO₄) ≠ White rings (myelin in HE)"
    ]
  }
}
const SLIDE_DATA_73 = {
  slideNumber: "73",
  name: "Peripheral Nerve - Longitudinal Section (OsO₄)",
  section: "longitudinal section",
  stain: "OsO₄",
  
  examEssentialStructures: {
    grouped: [
      {
        parent: "bundle of nerve fibers",
        where: "Inside each fascicle, running longitudinally as parallel black strands with periodic interruptions",
        appearance: "Continuous black tubular structures (myelin sheaths) with unstained white central cores (axons) and periodic gaps (nodes of Ranvier)",
        function: "Conduct electrical impulses along nerve pathways; myelin enables saltatory conduction for rapid signal transmission up to 120 m/s",
        quickID: "Look for parallel black strands with regular white gaps = nodes of Ranvier diagnostic for longitudinal nerve",
        children: [
          {
            name: "negative image of axon (unstained)",
            description: "White/pale central core running through black myelin tubes; appears as continuous white strand where lipids do not accumulate",
            level: 1
          },
          {
            name: "myelin sheath",
            description: "Dense black tubular coating surrounding axons; osmium tetroxide binds to phospholipids creating intense black staining",
            level: 1,
            children: [
              {
                name: "node of Ranvier",
                description: "Periodic white gaps in black myelin sheath where axon membrane is exposed; sites of action potential regeneration for saltatory conduction",
                level: 2,
                relationship: "GAP in myelin sheath",
                clinicalNote: "Disrupted in demyelinating diseases (MS, Guillain-Barré)"
              }
            ]
          }
        ]
      }
    ],
    layers: [
      "endoneurium",
      "perineurium",
      "epineurium"
    ],
    additional: [
      "adipocytes"
    ]
  },
  
  bigPicture: "OsO₄ stains myelin BLACK revealing nodes of Ranvier in longitudinal nerve sections",
  
  hierarchy: [
    "Axon → Fascicle → Whole Nerve",
    "↓ ENDO → PERI → EPI",
    "↓ (Pia) → (Arachnoid) → (Dura)"
  ],
  
  insideTheFascicles: [
    {
      structure: "Negative image of axon (unstained)",
      description: "White/pale central core running through black myelin tubes; appears as continuous white strand where lipids do not accumulate"
    },
    {
      structure: "Myelin sheath (black)",
      description: "Dense black tubular coating surrounding axons; osmium tetroxide binds to phospholipids creating intense black staining"
    },
    {
      structure: "Node of Ranvier",
      description: "Periodic white gaps in black myelin sheath where axon membrane is exposed; sites of action potential regeneration for saltatory conduction"
    },
    {
      structure: "Schwann cell nucleus",
      description: "Elongated dark nuclei adjacent to myelin sheaths; each Schwann cell myelinates one internode between adjacent nodes"
    }
  ],
  
  aroundOrOutside: [
    {
      structure: "Adipocytes",
      description: "Large round white cells with black rim in epineurium; much larger than myelin profiles and located outside fascicles in loose connective tissue"
    },
    {
      structure: "Blood vessels",
      description: "Circular or tubular profiles in connective tissue layers; may contain red blood cells"
    },
    {
      structure: "Fibrocytes",
      description: "Elongated cells with dark nuclei scattered in connective tissue layers; produce collagen for structural support"
    }
  ],
  
  stainingInfo: {
    technique: "OsO₄ (Osmium Tetroxide) - Lipid-specific heavy metal stain",
    description: "Osmium tetroxide is a powerful oxidizing agent that binds irreversibly to carbon-carbon double bonds in unsaturated fatty acids, particularly abundant in myelin phospholipids. The reduced osmium (OsO₂) deposits as black metallic precipitate, making this the gold standard for visualizing myelin.",
    whatItStainsInThisSlide: [
      "Myelin sheaths → Intense black (phospholipid bilayers rich in unsaturated fatty acids)",
      "Axons → Unstained/white (negative image; lacks lipid content stainable by osmium)",
      "Nodes of Ranvier → White gaps (myelin-free regions where axolemma is exposed)",
      "Adipocytes → Black rim with white center (lipid-rich cell membranes stain black; dissolved lipid droplet appears white)",
      "Schwann cell nuclei → Dark (chromatin staining)",
      "Connective tissue → Pale tan/brown (minimal osmium binding to collagen)"
    ],
    keyEmphasis: "OsO₄ uniquely preserves and intensely stains myelin sheaths BLACK in this longitudinal section, making nodes of Ranvier dramatically visible as regular white gaps interrupting the black myelin tubes. This contrasts sharply with HE staining where myelin appears as white space (negative image) due to lipid dissolution during processing. The longitudinal orientation specifically reveals the segmental nature of myelination and saltatory conduction sites."
  },
  
  layers: [
    {
      name: "Endoneurium",
      level: "Innermost layer (Level 1)",
      wraps: "Individual myelinated nerve fibers (axon + myelin sheath + Schwann cell)",
      composition: "Delicate loose connective tissue with reticular fibers (Type III collagen), fibroblasts, and capillaries",
      appearance: "Thin pale tan strands between individual black myelin sheaths; barely visible as fine wispy material separating nerve fibers",
      contains: "Capillaries (providing blood-nerve barrier with perineurium), fibroblasts, occasional mast cells, and extracellular matrix",
      cnsEquivalent: "Pia mater",
      function: "Provides microenvironment for individual nerve fibers; allows nutrient diffusion from capillaries; maintains ionic environment for impulse conduction; cushions individual axons during nerve movement",
      quickID: "Thinnest pale layer immediately adjacent to black myelin sheaths within fascicles"
    },
    {
      name: "Perineurium",
      level: "Middle layer (Level 2)",
      wraps: "Entire fascicle (bundle of multiple nerve fibers)",
      composition: "5-15 concentric layers of specialized flattened epithelioid cells (modified fibroblasts) with extensive tight junctions, surrounded by collagen",
      appearance: "Distinct tan-brown rim encircling each fascicle; appears as darker band separating fascicles from epineurium",
      contains: "Specialized perineurial cells with tight junctions, basement membrane, longitudinally oriented collagen fibers",
      cnsEquivalent: "Arachnoid mater",
      function: "Forms blood-nerve barrier through tight junctions preventing large molecules and pathogens from entering fascicle; maintains osmotic environment; provides tensile strength; defines fascicular compartments essential for nerve regeneration",
      quickID: "Obvious dark rim around each fascicle bundle = diagnostic of perineurium's multilayered structure"
    },
    {
      name: "Epineurium",
      level: "Outermost layer (Level 3)",
      wraps: "Entire peripheral nerve (all fascicles together)",
      composition: "Dense irregular connective tissue with Type I collagen, elastic fibers, adipose tissue, blood vessels (vasa nervorum), and lymphatics",
      appearance: "Thick pale tan tissue surrounding all fascicles; contains conspicuous large white adipocytes with black rims and blood vessel profiles",
      contains: "Large adipocytes (lipid cushioning), vasa nervorum (arterial and venous networks), lymphatic vessels, fibrocytes, scattered mast cells",
      cnsEquivalent: "Dura mater",
      function: "Protects entire nerve from mechanical stress and compression; contains vasa nervorum providing arterial supply; allows nerve gliding during joint movement; adipose tissue cushions against external pressure; binds nerve to surrounding tissues",
      quickID: "Thick outer layer with prominent large white adipocytes and blood vessels outside all fascicles"
    }
  ],
  
  criticalRelationships: [
    {
      title: "OsO₄ vs HE Staining: Opposite Myelin Appearance (HIGH-YIELD!)",
      content: "The same peripheral nerve structure appears dramatically different with OsO₄ versus HE staining due to how each technique handles lipids. This is the #1 exam question for peripheral nerve identification.",
      details: [
        "HE staining: Myelin appears WHITE (negative image) because lipids dissolve during alcohol dehydration and xylene clearing, leaving empty space",
        "OsO₄ staining: Myelin appears BLACK because osmium binds to unsaturated fatty acids in phospholipids, preserved during special processing",
        "Axon appearance: PINK in HE (eosinophilic cytoplasm), WHITE/UNSTAINED in OsO₄ (lacks lipids)",
        "Node of Ranvier visibility: Difficult to see in HE (white gaps in white space), OBVIOUS in OsO₄ (white gaps in black myelin)",
        "Exam tip: If myelin is black → it's OsO₄. If myelin is white space → it's HE. This distinction is tested repeatedly."
      ],
      emphasis: "Why critical: Examiners commonly show both HE and OsO₄ nerve sections and ask students to identify which stain was used. Knowing that myelin appears black in OsO₄ (lipid-preserved) versus white in HE (lipid-dissolved) is essential for correct identification and understanding tissue processing artifacts versus real structures."
    },
    {
      title: "Node of Ranvier: Saltatory Conduction Sites (EXAM FAVORITE!)",
      content: "Nodes of Ranvier are periodic gaps in myelin visible only in longitudinal sections with OsO₄ staining. These represent the functional sites for rapid nerve conduction and are frequently tested in anatomy practical exams.",
      details: [
        "Appearance: Regular white gaps interrupting continuous black myelin tubes, occurring every 0.2-2mm depending on axon diameter",
        "Structure: Unmyelinated segments where axolemma is directly exposed to extracellular fluid; flanked by paranodal regions with tight myelin-axon contact",
        "Function: Sites of action potential regeneration allowing saltatory (jumping) conduction at speeds up to 120 m/s versus 1 m/s in unmyelinated axons",
        "Clinical correlation: Demyelinating diseases (MS, Guillain-Barré) disrupt nodes, slowing/blocking conduction causing weakness and sensory loss",
        "Why visible in OsO₄: Black myelin creates high contrast with white unmyelinated node; in HE both appear white making nodes nearly invisible",
        "Exam identification: If you see regular white gaps in parallel black strands → it's longitudinal peripheral nerve with OsO₄"
      ],
      emphasis: "Why critical: Nodes of Ranvier represent the convergence of structural anatomy (myelin gaps), physiology (saltatory conduction), and pathology (demyelinating diseases). Examiners frequently ask students to identify nodes in longitudinal sections and explain their functional significance. This is also a favorite topic for integrating histology with neurophysiology in board-style questions."
    },
    {
      title: "Longitudinal vs Cross Section: Orientation Recognition (HIGH-YIELD!)",
      content: "The same nerve structure appears completely different in longitudinal versus cross sections, requiring different identification strategies. Orientation recognition is essential for practical exams.",
      details: [
        "Longitudinal section features: Parallel black strands (myelin tubes), periodic white gaps (nodes of Ranvier), wavy appearance (nerve relaxation), elongated Schwann nuclei",
        "Cross section features: Circular black rings (myelin profiles), central white dots (axon cores), honeycomb pattern, no nodes visible, round fascicle bundles",
        "Nerve fiber appearance: Continuous tubes in longitudinal vs discrete circular profiles in cross section",
        "Fascicle identification: Oval bundles with parallel fibers in longitudinal vs round bundles with honeycomb pattern in cross section",
        "Exam tip: Nodes of Ranvier are the diagnostic feature proving longitudinal orientation of peripheral nerve with OsO₄"
      ],
      emphasis: "Why critical: Practical exams frequently test whether students can identify tissue orientation. Seeing nodes of Ranvier immediately tells you it's longitudinal section, while honeycomb pattern indicates cross section. This orientation recognition skill applies to all tubular structures (blood vessels, ducts, nerves) throughout histology."
    },
    {
      title: "Three-Layer Wrapping: CNS Meningeal Equivalents (HIGH-YIELD!)",
      content: "The three connective tissue layers of peripheral nerves (endoneurium, perineurium, epineurium) are functionally equivalent to the three meninges of the CNS (pia, arachnoid, dura), reflecting the embryonic transition from neural tube to peripheral nerves.",
      details: [
        "Endoneurium = Pia mater: Both are innermost delicate layers intimately associated with neural tissue (individual fibers vs brain surface)",
        "Perineurium = Arachnoid mater: Both form diffusion barriers (blood-nerve barrier vs blood-CSF barrier) through specialized cells with tight junctions",
        "Epineurium = Dura mater: Both are outermost tough protective layers containing adipose tissue and major blood vessels",
        "Transition zone: At CNS-PNS junction (nerve roots entering/exiting spinal cord), the three meninges directly transform into the three nerve layers",
        "Clinical correlation: Meningitis can spread along nerve roots where meningeal layers are continuous with nerve sheaths",
        "Exam memory trick: Remember ENDO-PERI-EPI matches PIA-ARACHNOID-DURA from inner to outer"
      ],
      emphasis: "Why critical: This relationship is one of the highest-yield concepts in neuroanatomy, frequently appearing on board exams. Understanding that peripheral nerve layers are homologous to CNS meninges helps explain clinical conditions like nerve root inflammation spreading from meningitis, and provides a memory tool for remembering layer functions and positions. Examiners love asking about CNS-PNS transitions and structural equivalents."
    },
    {
      title: "Adipocytes vs Myelin: Size Comparison Critical (EXAM FAVORITE!)",
      content: "Distinguishing adipocytes from myelin sheaths in OsO₄-stained sections is a common exam challenge because both appear as black rings around white centers. Size and location are the key differentiating factors.",
      details: [
        "Myelin size: Small profiles (5-15 μm diameter), tightly packed within fascicles, relatively uniform black rim thickness",
        "Adipocyte size: Large cells (50-150 μm diameter), located in epineurium outside fascicles, thin black membrane around huge white lipid droplet",
        "Location: Myelin always inside fascicles creating honeycomb pattern; adipocytes always outside fascicles in loose epineurium",
        "Black staining: Both have black rims because OsO₄ stains lipids, but myelin has thick black rings while adipocytes have thin black membranes",
        "Size ratio: Adipocytes are typically 10-30× larger than myelin sheaths making them easy to distinguish once you know what to look for",
        "Exam trap: Students often mistake large adipocytes for myelin sheaths in low magnification images; always check location relative to fascicle boundaries"
      ],
      emphasis: "Why critical: This is the #1 identification error students make on peripheral nerve OsO₄ sections. Examiners specifically test this by showing low magnification images where both structures are visible and asking students to differentiate them. Knowing that adipocytes are much larger and located outside fascicles while myelin is smaller and inside fascicles is essential for passing practical exams. This distinction also helps understand why compression injuries damage nerves - adipocytes cushion but can also compress fascicles if they proliferate excessively."
    }
  ],
  
  relationshipsSummary: [
    {
      title: "OsO₄ Shows Black Myelin (HIGH-YIELD!)",
      summary: "Osmium stains myelin sheaths black (lipid preservation) vs HE showing white myelin (lipid dissolution) - opposite appearances for same structure",
      keyPoints: [
        "Myelin: black in OsO₄, white space in HE",
        "Axon: white/unstained in OsO₄, pink in HE",
        "Nodes visible only with OsO₄ longitudinal sections",
        "Exam: identify stain type by myelin color"
      ]
    },
    {
      title: "Nodes = Saltatory Conduction (HIGH-YIELD!)",
      summary: "White gaps in black myelin tubes = nodes of Ranvier where action potentials regenerate enabling rapid 120 m/s conduction",
      keyPoints: [
        "Regular white gaps every 0.2-2mm along axons",
        "Only visible in longitudinal OsO₄ sections",
        "Sites of action potential regeneration",
        "Disrupted in demyelinating diseases (MS)"
      ]
    },
    {
      title: "3 Layers = CNS Meninges (HIGH-YIELD!)",
      summary: "Endoneurium (Pia) → Perineurium (Arachnoid) → Epineurium (Dura) showing CNS-PNS structural homology at nerve root transition",
      keyPoints: [
        "ENDO (inner) = Pia mater (CNS)",
        "PERI (middle barrier) = Arachnoid (CNS)",
        "EPI (outer tough) = Dura mater (CNS)",
        "Continuous at spinal nerve roots"
      ]
    },
    {
      title: "Adipocytes vs Myelin Size (EXAM FAVORITE!)",
      summary: "Large adipocytes (50-150μm) outside fascicles vs small myelin (5-15μm) inside fascicles - both black-rimmed but 10-30× size difference",
      keyPoints: [
        "Myelin: small, inside fascicles, honeycomb",
        "Adipocyte: large, in epineurium, scattered",
        "Both black-rimmed (OsO₄ stains lipids)",
        "Location and size are key identifiers"
      ]
    }
  ],
  
  keyIdentifyingFeatures: [
    "Parallel black strands running longitudinally with periodic white gaps = myelin sheaths with nodes of Ranvier (pathognomonic for longitudinal peripheral nerve with OsO₄)",
    "Regular white interruptions every 0.2-2mm in black myelin tubes = nodes of Ranvier, diagnostic for longitudinal orientation",
    "Wavy appearance of nerve fibers = characteristic of relaxed longitudinal nerve sections allowing flexibility during movement",
    "Unstained white/pale central cores within black tubes = axons appearing as negative image due to lack of lipid content",
    "Elongated dark nuclei adjacent to myelin sheaths = Schwann cell nuclei, each myelinating one internode between adjacent nodes",
    "Distinct darker rims around fascicle bundles = perineurium forming blood-nerve barrier with multilayered structure",
    "Large white cells with thin black rims in surrounding tissue = adipocytes in epineurium, much larger than myelin profiles"
  ],
  
  comparisonWithOtherStains: [
    {
      stainType: "HE (Slides 70-71)",
      differences: "In HE, myelin appears as WHITE SPACE (negative image) because lipids dissolve during processing, while in OsO₄ myelin is intensely BLACK. Axons appear PINK in HE versus WHITE/unstained in OsO₄. Nodes of Ranvier are nearly invisible in HE (white gaps in white space) but dramatically obvious in OsO₄ (white gaps in black myelin). HE better shows nuclear detail of Schwann cells and connective tissue organization, while OsO₄ excels at demonstrating myelin integrity and segmental myelination patterns.",
      whenToUse: "Use HE for general nerve architecture, nuclear detail, and connective tissue layer identification. Use OsO₄ specifically for assessing myelin integrity, visualizing nodes of Ranvier, studying demyelinating diseases, and confirming presence of myelin in questioned nerve fibers. OsO₄ is the gold standard for myelin pathology."
    },
    {
      stainType: "Silver stain (Ag)",
      differences: "Silver stains specifically visualize AXONS and neurofibrils as black/brown structures, opposite to OsO₄ which stains MYELIN black while leaving axons unstained. In silver-stained sections, the axoplasm and axonal neurofilaments appear dark while myelin is pale or unstained. This makes silver stains excellent for studying axonal pathology, distribution, and dendritic arborizations, while OsO₄ focuses on myelin pathology. Silver also reveals axonal branching patterns invisible with OsO₄.",
      whenToUse: "Use silver staining for studying axonal distribution, nerve fiber architecture, demonstrating axonal degeneration or regeneration, and visualizing neurofibrillary tangles in neurodegenerative diseases. Use OsO₄ for myelin pathology and myelination patterns. The two stains are complementary - silver for axons, osmium for myelin."
    }
  ],
  
  commonMistakes: [
    {
      mistake: "Confusing adipocytes in epineurium with myelin sheaths because both appear as black rings around white centers",
      why: "Both structures contain lipids that stain black with OsO₄, creating superficially similar appearance",
      howToAvoid: "Check size and location: adipocytes are 10-30× LARGER (50-150μm vs 5-15μm) and always located OUTSIDE fascicles in epineurium, while myelin is smaller and packed inside fascicles. At low magnification, adipocytes appear as scattered large white spaces with thin black rims in surrounding tissue, while myelin creates regular honeycomb pattern within fascicle boundaries."
    },
    {
      mistake: "Thinking white axons are 'unstained' or 'empty space' rather than recognizing them as negative image of lipid-free cytoplasm",
      why: "Students expect OsO₄ to stain everything dark and misinterpret white structures as processing artifacts",
      howToAvoid: "Remember OsO₄ is lipid-specific - it ONLY stains structures with high lipid content black. Axons contain primarily cytoskeleton proteins, mitochondria, and transport vesicles but lack significant lipids, so they appear white/pale as negative image. This is normal and diagnostic, not an artifact. The white axon core within black myelin tube is the expected appearance."
    },
    {
      mistake: "Identifying this as cross section instead of longitudinal section because they see circular fascicle profiles in low-power view",
      why: "Overall tissue orientation can mislead if focusing on fascicle shape rather than nerve fiber direction",
      howToAvoid: "Focus on individual nerve fiber appearance and nodes of Ranvier: if you see continuous parallel black strands with periodic white gaps (nodes), it's longitudinal regardless of fascicle shape. Nodes of Ranvier are ONLY visible in longitudinal sections and are pathognomonic. In true cross sections, each nerve fiber appears as a discrete black ring (myelin) around white dot (axon) with no continuity or nodes."
    },
    {
      mistake: "Calling nodes of Ranvier 'gaps' or 'spaces' in the tissue rather than specialized unmyelinated regions of axon",
      why: "The white appearance makes them look like empty space or tissue processing artifacts",
      howToAvoid: "Nodes of Ranvier are functional structures - unmyelinated segments of axolemma where voltage-gated Na+ channels are concentrated for action potential regeneration. They appear white because myelin is absent, not because tissue is missing. Note the regular spacing (0.2-2mm) which would not occur with random processing artifacts. Each node is where one Schwann cell's myelin ends and the next begins."
    },
    {
      mistake: "Confusing Schwann cell nuclei with other cell types (fibroblasts, endothelial cells) in the connective tissue",
      why: "Multiple cell types with dark nuclei are present in nerve cross-sections",
      howToAvoid: "Schwann cell nuclei are elongated and positioned immediately adjacent to or wrapping around myelin sheaths. In longitudinal sections, they appear as elongated dark ovals aligned parallel to nerve fibers. Fibroblast nuclei are more scattered in connective tissue layers and not directly associated with myelin. Endothelial nuclei are within blood vessel walls. Location relative to myelin is diagnostic."
    },
    {
      mistake: "Stating that myelin appears black in OsO₄ because it's 'more concentrated' or 'thicker' rather than understanding lipid chemistry",
      why: "Students memorize black appearance without understanding the staining mechanism",
      howToAvoid: "Understand the chemistry: OsO₄ is a strong oxidizing agent that reacts specifically with carbon-carbon double bonds in unsaturated fatty acids abundant in myelin phospholipids. The reaction reduces OsO₄ to metallic osmium (OsO₂) which deposits as black precipitate. Axons don't stain because they lack significant lipid content - it's about lipid presence, not thickness or concentration. This knowledge helps explain why adipocyte membranes also stain black."
    }
  ],
  
  clinicalCorrelations: [
    {
      condition: "Multiple Sclerosis (MS) and Demyelinating Diseases",
      relevance: "OsO₄ staining reveals myelin pathology that would be invisible with routine HE staining. In MS, autoimmune destruction of myelin sheaths creates visible gaps in the normally continuous black myelin tubes. Nodes of Ranvier become irregularly spaced or absent as myelin segments are destroyed, dramatically slowing or blocking action potential propagation. This manifests as progressive weakness, sensory loss, vision problems, and coordination difficulties. OsO₄ longitudinal sections showing abnormal nodal spacing or myelin discontinuity are diagnostic for demyelinating neuropathies and help distinguish them from axonal neuropathies.",
      examRelevance: "HIGH-YIELD: Examiners frequently present clinical vignettes of patients with progressive neurological symptoms and show OsO₄-stained nerve sections with irregular myelin or node spacing, asking students to diagnose demyelinating disease. Understanding that myelin destruction slows/blocks saltatory conduction is essential for connecting histology to pathophysiology. Board questions often integrate nerve histology with MS pathogenesis."
    },
    {
      condition: "Guillain-Barré Syndrome (Acute Inflammatory Demyelinating Polyneuropathy)",
      relevance: "This post-infectious autoimmune disorder causes acute demyelination of peripheral nerves, often triggered by Campylobacter infection or vaccinations. OsO₄ sections from affected patients show myelin sheath destruction, macrophage infiltration removing myelin debris, and disrupted nodes of Ranvier. The ascending paralysis characteristic of Guillain-Barré results from progressive demyelination starting in distal nerves and moving proximally, causing conduction failure. Unlike MS (CNS demyelination), this affects peripheral nerves which have regeneration capacity - patients often recover as Schwann cells remyelinate axons.",
      examRelevance: "EXAM FAVORITE: Clinical case of rapid ascending weakness following infection is classic Guillain-Barré presentation. Examiners may show OsO₄ nerve sections with myelin disruption and ask about mechanism of symptoms or difference from MS (peripheral vs central demyelination). This connects infectious disease, immunology, and histology."
    },
    {
      condition: "Diabetic Neuropathy - Peripheral Nerve Damage",
      relevance: "Chronic hyperglycemia damages both myelin sheaths and axons through advanced glycation end products (AGEs), oxidative stress, and microvascular ischemia. OsO₄ staining reveals myelin thinning, irregular nodal spacing, and eventual myelin loss in diabetic patients with neuropathy. The 'dying-back' pattern shows worse damage distally (feet/hands) progressing proximally, correlating with classic 'stocking-glove' distribution of numbness, tingling, and pain. Endoneurial capillary thickening and fibrosis reduce nerve blood supply, worsening damage. This is the most common peripheral neuropathy, affecting 50% of diabetics.",
      examRelevance: "HIGH-YIELD: Diabetic neuropathy is extremely common in clinical practice and board exams. Questions often present a diabetic patient with peripheral neuropathy symptoms and ask about pathophysiology. Understanding that both myelin and axons are affected (mixed demyelinating and axonal neuropathy) explains why diabetic neuropathy causes both sensory loss (demyelination) and weakness (axonal loss). OsO₄ sections showing myelin irregularity help visualize this pathology."
    },
    {
      condition: "Charcot-Marie-Tooth Disease (Hereditary Motor and Sensory Neuropathy)",
      relevance: "This genetic disorder affects myelin formation (Type 1 CMT - demyelinating) or axonal structure (Type 2 CMT - axonal). In Type 1 CMT, mutations in myelin genes (PMP22, MPZ) cause progressive demyelination and attempted remyelination, creating 'onion bulb' formations visible in nerve biopsies. OsO₄ staining shows abnormally thin myelin sheaths and irregular nodal spacing from birth, progressively worsening with age. This causes slowly progressive distal muscle weakness and atrophy, foot deformities (high arches, hammer toes), and sensory loss starting in childhood. Unlike acquired neuropathies, symptoms are symmetric and chronic from early age.",
      examRelevance: "Moderate yield: Genetic neuropathies are tested less frequently than acquired types but are important for differential diagnosis. Examiners may present a patient with childhood-onset progressive weakness and foot deformities, showing OsO₄ nerve sections with thin myelin or 'onion bulbs' (concentric Schwann cell processes around axons). This tests understanding of inherited versus acquired nerve pathology and myelin formation."
    }
  ],
  
  functionalContext: {
    physiologicalRole: "This longitudinal section dramatically demonstrates the structural basis for saltatory conduction - the fastest form of neural signal transmission in vertebrates. Myelin sheaths act as electrical insulators, forcing action potentials to 'jump' between nodes of Ranvier where voltage-gated sodium channels are concentrated. This saltatory conduction achieves speeds up to 120 m/s in large myelinated fibers (Aα motor neurons) compared to only 0.5-2 m/s in unmyelinated C fibers conducting pain. The regular spacing of nodes (0.2-2mm depending on axon diameter, with larger axons having longer internodes) represents an evolutionary optimization balancing conduction velocity against metabolic cost of myelin production. Each internode is precisely myelinated by a single Schwann cell, with paranodal regions flanking nodes showing specialized axon-glia junctions that cluster ion channels at nodes.",
    tissueInteraction: "The three-layer connective tissue organization (endoneurium, perineurium, epineurium) protects peripheral nerves during the constant mechanical stress of body movement. The endoneurium's loose connective tissue allows individual nerve fibers to slide past each other during nerve elongation and compression, preventing axonal damage. The perineurium's tight junction barrier maintains a specialized ionic microenvironment within fascicles, essential for action potential propagation - disruption of this barrier (trauma, inflammation) causes conduction failure even if axons are intact. The epineurium's adipose tissue cushions the entire nerve during external compression and contains the vasa nervorum (blood vessel network) that supplies metabolic demands of maintaining myelin and axonal transport. This layered architecture explains why peripheral nerves can stretch up to 20% without damage and why nerve compression syndromes (carpal tunnel) initially cause reversible conduction slowing before permanent damage."
  },
  
  identificationTips: [
    "If you see regular white gaps interrupting continuous black tubes running parallel → it's longitudinal peripheral nerve with OsO₄ showing nodes of Ranvier (pathognomonic)",
    "Nodes appear every 0.2-2mm along black myelin strands with remarkable regularity - this periodic spacing rules out processing artifacts",
    "The wavy appearance of nerve fibers is normal in longitudinal sections, representing the relaxed state allowing flexibility during movement",
    "White unstained central cores within black myelin tubes = axons (negative image); this is expected with OsO₄ lipid-specific staining",
    "Large white cells with thin black rims scattered in surrounding tissue = adipocytes in epineurium; note they're 10-30× larger than myelin profiles inside fascicles",
    "Elongated dark nuclei closely associated with black myelin sheaths = Schwann cell nuclei; each one myelinates a single internode",
    "Distinct darker rim encircling entire fascicle bundle = perineurium forming blood-nerve barrier; this is more obvious than individual endoneurial strands",
    "Compare to cross section: same nerve in cross section would show honeycomb pattern of circular black rings with no nodes visible",
    "Remember: Myelin BLACK in OsO₄ (lipid preserved) vs myelin WHITE in HE (lipid dissolved) - opposite appearances for same structure"
  ],
  
  examTips: [
    "If question asks to identify stain type: Look at myelin - if BLACK then it's OsO₄; if WHITE SPACE then it's HE. This single feature identifies the stain.",
    "Nodes of Ranvier are diagnostic for longitudinal orientation - if you see them, you know it's longitudinal section regardless of other features",
    "Examiners love asking students to distinguish adipocytes from myelin: Both have black rims in OsO₄, but adipocytes are much LARGER and OUTSIDE fascicles",
    "Be prepared to explain saltatory conduction: Nodes are where action potentials regenerate, allowing signal to 'jump' between nodes at 120 m/s",
    "Know the CNS equivalents: Endoneurium=Pia, Perineurium=Arachnoid, Epineurium=Dura. This is frequently tested.",
    "If comparing HE vs OsO₄ sections: Remember in HE axons are PINK and myelin is WHITE; in OsO₄ axons are WHITE and myelin is BLACK - opposite!",
    "Clinical correlation questions often present demyelinating disease (MS, Guillain-Barré) - understand that myelin loss disrupts nodes and slows conduction",
    "For practical exams: If you see parallel black strands with white gaps → immediately identify as 'Peripheral nerve, longitudinal section, OsO₄ stain'",
    "Size distinction is critical: Myelin sheaths are small (5-15μm) inside fascicles; adipocytes are large (50-150μm) outside fascicles in epineurium",
    "Remember processing: OsO₄ requires special fixation to preserve lipids before osmium treatment - this is why routine HE dissolves lipids but OsO₄ preserves them"
  ],
  
  ultraMinimalFacts: {
    staining: "OsO₄: Myelin = BLACK (lipids preserved), Axon = WHITE (no lipids). Nodes visible!",
    layers: [
      "• ENDO = wraps 1 fiber (Pia)",
      "• PERI = wraps bundle (Arachnoid) - barrier!",
      "• EPI = wraps nerve (Dura) - adipose cushion"
    ],
    visualID: [
      "• Parallel black strands + white gaps = nodes of Ranvier",
      "• Wavy black tubes = longitudinal myelin sheaths",
      "• White cores in black tubes = unstained axons",
      "• Large white circles outside = adipocytes (not myelin!)"
    ],
    cnsConnection: "Endo → Peri → Epi = Pia → Arachnoid → Dura (continuous at nerve roots)",
    dontConfuse: [
      "• HE myelin (white space) ≠ OsO₄ myelin (black) - opposite!",
      "• Small myelin (inside fascicles) ≠ Large adipocyte (in epineurium)",
      "• Longitudinal (nodes visible) ≠ Cross section (honeycomb, no nodes)"
    ]
  }
};
const SLIDE_DATA_74 = {
  slideNumber: 74,
  name: "Sensory Ganglion",
  stain: "HE",
  
  examEssentialStructures: {
    grouped: [
      {
        parent: "pseudounipolar neurons",
        where: "In clusters within ganglion parenchyma, surrounded by satellite cells",
        appearance: "Round to oval cell bodies with pale euchromatic nucleus and prominent nucleolus; two size populations (large pale vs small dark)",
        function: "Relay sensory signals from periphery to CNS without synapse; no dendrites visible (pseudounipolar morphology)",
        quickID: "Look for two neuron populations: large pale cells + small dark cells in organized clusters",
        children: [
          {
            name: "perikaryon",
            description: "Cell body containing nucleus, organelles, and Nissl bodies for protein synthesis",
            level: 1,
            children: [
              {
                name: "euchromatic nucleus",
                description: "Pale, open nucleus with dispersed chromatin and prominent nucleolus; indicates active transcription",
                level: 2,
                relationship: "INSIDE perikaryon",
                children: [
                  {
                    name: "nucleolus",
                    description: "Prominent dark-staining body within nucleus; site of ribosomal RNA synthesis",
                    level: 3,
                    relationship: "INSIDE nucleus"
                  }
                ]
              },
              {
                name: "Nissl bodies/tigroid granules",
                description: "Basophilic granular material in cytoplasm representing rough ER and free ribosomes; indicates high protein synthesis",
                level: 2,
                relationship: "INSIDE perikaryon"
              }
            ]
          }
        ]
      }
    ],
    layers: [],
    additional: [
      "satellite cells",
      "nerve fibers"
    ]
  },

  bigPicture: "Sensory ganglia = relay stations containing pseudounipolar neurons that transmit sensory signals from periphery to CNS, wrapped in satellite cells",

  hierarchy: [
    "Neuron perikaryon → Satellite cells → Connective tissue capsule",
    "↓ PSEUDOUNIPOLAR (1 process bifurcates)",
    "↓ Peripheral process (dendrite to receptors) + Central process (axon to CNS)"
  ],

  stainingInfo: {
    technique: "HE (Hematoxylin and Eosin)",
    description: "Hematoxylin stains acidic structures (nuclei, Nissl bodies) blue/purple; Eosin stains basic structures (cytoplasm, collagen) pink/red",
    whatItStainsInThisSlide: [
      "Nuclei (neuronal and satellite cell) → Blue/purple (basophilic chromatin)",
      "Nissl bodies → Blue/purple (rough ER and ribosomes)",
      "Cytoplasm → Pink (eosinophilic proteins)",
      "Connective tissue → Pink (collagen fibers)",
      "Myelin sheaths → WHITE SPACE (negative image - lipids dissolved)"
    ],
    keyEmphasis: "HE reveals two distinct neuron populations (large pale vs small dark) and prominent Nissl bodies in cytoplasm. Myelin appears as WHITE SPACE (negative image) because lipids dissolve during tissue processing - creates characteristic white halos around nerve fibers."
  },

  neuronTypes: [
    {
      type: "Large, Pale Neurons (L cells / A cells)",
      appearance: "Large cell bodies with pale, lightly stained cytoplasm",
      size: "40-100 μm in diameter",
      nucleus: "Large, pale, euchromatic nucleus with prominent nucleolus",
      nissl: "Abundant Nissl bodies visible as basophilic clumps",
      fibers: "Give rise to heavily myelinated (thick myelin) axons",
      function: "Fast-conducting sensory pathways",
      sensoryModality: [
        "Epicritic sensibility (fine touch, precise localization)",
        "Temperature discrimination",
        "Proprioception (position sense)",
        "Vibration sense"
      ],
      neurotransmitter: "Glutamate",
      fiberType: "A-alpha, A-beta fibers (large, heavily myelinated)",
      quickID: "BIG + PALE = FAST sensations (touch, position)"
    },
    {
      type: "Small, Dark Neurons (SD cells / B cells)",
      appearance: "Smaller cell bodies with dark, densely stained cytoplasm",
      size: "20-40 μm in diameter",
      nucleus: "Smaller, darker, more condensed chromatin",
      nissl: "Less abundant Nissl bodies, harder to visualize",
      fibers: "Give rise to unmyelinated or thinly myelinated axons",
      function: "Slow-conducting sensory pathways",
      sensoryModality: [
        "Protopathic sensibility (crude touch)",
        "Pain (nociception)",
        "Temperature (hot/cold)",
        "Itch"
      ],
      neurotransmitter: "Substance P (pain transmission)",
      fiberType: "C fibers (unmyelinated), A-delta fibers (thinly myelinated)",
      quickID: "SMALL + DARK = SLOW sensations (pain, crude touch)"
    }
  ],

  components: [
    {
      name: "Pseudounipolar Neuron Cell Body (Perikaryon)",
      definition: "The neuronal cell body containing the nucleus, organelles, and Nissl bodies; appears in two size variants (L and SD)",
      location: "Scattered throughout the ganglion, organized in clusters separated by nerve fiber bundles",
      appearance: "Round to oval pink cell bodies with prominent nuclei; appear in two distinct populations (large pale vs small dark)",
      characteristics: [
        "Large, pale, euchromatic nucleus with prominent nucleolus",
        "Abundant Nissl bodies (basophilic granules) = rough ER for protein synthesis",
        "Nucleolus very prominent (active protein synthesis)",
        "NO dendrites visible (characteristic of pseudounipolar neurons)",
        "Single process bifurcates into peripheral and central branches"
      ],
      function: "Trophic center of neuron; synthesizes proteins and neurotransmitters; receives and processes sensory signals",
      quickID: "Large pink cell bodies with prominent dark nucleus and granular cytoplasm (Nissl bodies)"
    },
    {
      name: "Satellite Cells (Capsule Cells)",
      definition: "Small glial cells forming a protective sheath around each neuronal cell body in sensory ganglia",
      location: "Tightly surrounding each neuron cell body like a thin capsule",
      appearance: "Small, flattened cells with dark, elongated nuclei forming a rim around neurons",
      characteristics: [
        "Small, dark, elongated nuclei pressed against neuron surface",
        "Thin cytoplasm barely visible in HE (appears as thin pink rim)",
        "Form continuous layer around each perikaryon",
        "Connected by gap junctions to each other",
        "Similar function to astrocytes in CNS"
      ],
      function: [
        "Protection and insulation of neuron cell bodies",
        "Structural support",
        "Nutritional support (regulate microenvironment)",
        "Maintain blood-nerve barrier at ganglion level",
        "K+ buffering (regulate potassium concentration)",
        "Remove excess neurotransmitters"
      ],
      quickID: "Small dark nuclei forming thin rim/halo around neuron cell bodies"
    },
    {
      name: "Nerve Fibers (Axons with Myelin)",
      definition: "Bundles of myelinated axons passing through or exiting the ganglion",
      location: "Between clusters of neuron cell bodies; entering and exiting the ganglion",
      appearance: "Pink wavy bundles with white circular spaces (myelin) and occasional Schwann cell nuclei",
      characteristics: [
        "Axons: Tiny pink dots in center (not always visible)",
        "Myelin sheath: WHITE SPACE (negative image) - lipid dissolved",
        "Schwann cell nuclei: Elongated dark nuclei at periphery of fibers",
        "Organized in bundles separated by connective tissue",
        "May see longitudinal sections (wavy pink lines) or cross sections (honeycomb)"
      ],
      function: "Conduct sensory impulses from periphery to CNS; insulated by myelin for fast conduction",
      quickID: "Pink bundles with white spaces (myelin) and scattered dark Schwann nuclei"
    },
    {
      name: "Connective Tissue Capsule and Septa",
      definition: "Dense irregular connective tissue surrounding the ganglion and extending inward as septa",
      location: "Outer capsule around entire ganglion; internal septa dividing neuron clusters",
      appearance: "Pink fibrous tissue with fibroblast nuclei and collagen fibers",
      characteristics: [
        "Dense irregular connective tissue",
        "Contains fibroblasts (elongated nuclei)",
        "Collagen fibers (pink, wavy)",
        "Blood vessels within septa",
        "Continuous with epineurium of associated nerves"
      ],
      function: "Structural support; protection; vascular supply pathway; organizes neurons into clusters",
      quickID: "Pink fibrous tissue separating neuron clusters and surrounding entire ganglion"
    },
    {
      name: "Blood Vessels",
      definition: "Small arterioles, capillaries, and venules supplying the ganglion",
      location: "Within connective tissue septa between neuron clusters",
      appearance: "Circular or oval spaces lined by endothelium, often containing red blood cells",
      function: "Provide oxygen, nutrients, and remove metabolic waste; maintain blood-nerve barrier",
      quickID: "Small circular spaces with thin pink walls in connective tissue areas"
    }
  ],

  essentialStructures: [
    {
      name: "Pseudounipolar Neuron",
      definition: "Sensory neuron with single process that bifurcates into peripheral (dendrite) and central (axon) branches",
      location: "Cell bodies (perikarya) clustered within ganglion, surrounded by satellite cells",
      appearance: "Round to oval cell body (perikaryon) with large pale nucleus, prominent nucleolus, and basophilic Nissl bodies in cytoplasm; appears in two size variants (large pale vs small dark)",
      function: "Relay sensory information from peripheral receptors to CNS; no synapses occur in ganglion (signal passes through without modification)",
      identificationTips: [
        "Look for TWO populations: large pale cells + small dark cells",
        "Large, round, pale nucleus with very prominent nucleolus",
        "Granular cytoplasm (Nissl bodies) staining purple/blue with hematoxylin",
        "NO visible dendrites (unlike multipolar neurons in autonomic ganglia)",
        "Surrounded by thin rim of satellite cell nuclei",
        "Organized in clusters separated by nerve fiber bundles"
      ],
      commonMistakes: [
        {
          mistake: "Confusing with multipolar neurons (autonomic ganglia)",
          why: "Both are ganglia with neurons",
          avoid: "Sensory = pseudounipolar (NO dendrites visible), Autonomic = multipolar (dendrites visible with silver stain)"
        },
        {
          mistake: "Missing the two neuron populations (L and SD)",
          why: "Not looking carefully at size and staining intensity",
          avoid: "Scan entire ganglion - you should see BOTH large pale neurons AND small dark neurons"
        },
        {
          mistake: "Confusing satellite cells with Schwann cells",
          why: "Both are glial cells in PNS",
          avoid: "Satellite cells = around CELL BODIES; Schwann cells = around AXONS in nerve fibers"
        }
      ]
    },
    {
      name: "Satellite Cells",
      definition: "Small glial cells forming protective capsule around each sensory neuron cell body",
      location: "Directly surrounding each neuron perikaryon as thin layer",
      appearance: "Small, flattened cells with dark, elongated nuclei pressed against neuron surface; barely visible cytoplasm",
      function: "Support, protect, and regulate microenvironment of sensory neurons; similar to astrocytes in CNS",
      identificationTips: [
        "Small DARK nuclei forming rim/halo around each neuron",
        "Elongated or flattened shape conforming to neuron surface",
        "Multiple satellite cells per neuron create continuous capsule",
        "Located BETWEEN neuron cell body and connective tissue",
        "Much smaller than neuron nuclei"
      ],
      commonMistakes: [
        {
          mistake: "Not seeing satellite cells at all",
          why: "They are small and can blend with background",
          avoid: "Look for dark nuclei forming a rim RIGHT NEXT TO large pale neuron nuclei"
        },
        {
          mistake: "Confusing with fibroblasts",
          why: "Both have elongated dark nuclei",
          avoid: "Satellite cells are RIGHT AGAINST neurons; fibroblasts are in connective tissue BETWEEN neuron clusters"
        }
      ]
    },
    {
      name: "Nissl Bodies (Tigroid Granules)",
      definition: "Basophilic granular material in neuronal cytoplasm representing rough endoplasmic reticulum and ribosomes",
      location: "Throughout neuronal cytoplasm, especially abundant in large pale neurons",
      appearance: "Dark blue/purple granules scattered throughout pink cytoplasm, giving speckled appearance",
      function: "Protein synthesis for neurotransmitters, structural proteins, and enzymes; maintains neuronal function",
      identificationTips: [
        "Basophilic (blue/purple) granules in cytoplasm",
        "More prominent in large pale neurons (L cells)",
        "Absent from axon hillock and axon",
        "Create characteristic 'tigroid' or spotted appearance",
        "Reflect high metabolic activity of sensory neurons"
      ],
      commonMistakes: [
        {
          mistake: "Not recognizing Nissl substance",
          why: "Expecting them to be more prominent",
          avoid: "Look for SUBTLE blue-purple speckling in neuron cytoplasm - they're not always bold"
        }
      ]
    }
  ],

  relatedStructures: [
    {
      name: "Nerve Fiber Bundles",
      description: "Myelinated axons traveling through ganglion; appear as pink bundles with white spaces (dissolved myelin) and Schwann cell nuclei"
    },
    {
      name: "Connective Tissue Capsule",
      description: "Dense irregular connective tissue surrounding ganglion and extending as septa between neuron clusters"
    },
    {
      name: "Blood Vessels",
      description: "Capillaries and small vessels within connective tissue septa providing vascular supply"
    }
  ],

  criticalRelationships: [
    {
      title: "Sensory vs Autonomic Ganglia (HIGH-YIELD EXAM COMPARISON!)",
      content: "The two main types of peripheral ganglia have distinct neuron types, functions, and appearances that are frequently tested:",
      details: [
        "SENSORY: Pseudounipolar neurons (1 process bifurcates) - NO dendrites visible",
        "AUTONOMIC: Multipolar neurons (many dendrites) - dendrites visible with silver stain",
        "SENSORY: Function = relay sensory signals (NO synapses in ganglion)",
        "AUTONOMIC: Function = motor control (synapses DO occur in ganglion)",
        "SENSORY: Large organized clusters with prominent satellite cells",
        "AUTONOMIC: Scattered neurons with less prominent satellite cells",
        "SENSORY: Two neuron populations (Large pale + Small dark)",
        "AUTONOMIC: More uniform neuron population"
      ],
      emphasis: "KEY EXAM DISTINCTION: If you can see dendrites (especially with silver stain) → autonomic. If neurons look like 'eggs in a basket' with no dendrites → sensory!"
    },
    {
      title: "Location Types: Spinal (Dorsal Root) vs Cranial Ganglia (CLINICAL IMPORTANCE!)",
      content: "Sensory ganglia are found in two main locations with slightly different functions:",
      details: [
        "SPINAL GANGLIA (Dorsal Root Ganglia): Located along dorsal roots of spinal nerves, relay body sensation",
        "CRANIAL GANGLIA: Located along sensory cranial nerves (CN V, VII, VIII, IX, X)",
        "CN V (Trigeminal): Largest cranial ganglion - face sensation",
        "CN VII (Geniculate): Taste from anterior 2/3 tongue",
        "CN VIII (Spiral & Vestibular): Hearing and balance (ONLY bipolar neurons, not pseudounipolar!)",
        "CN IX (Superior & Inferior/Petrosal): Taste from posterior 1/3 tongue, carotid body sensation",
        "CN X (Superior/Jugular & Inferior/Nodose): Visceral sensation from thorax/abdomen",
        "Clinical correlation: Herpes zoster (shingles) = virus dormant in dorsal root ganglia"
      ],
      emphasis: "CLINICAL PEARL: CN VIII ganglia are unique - they contain BIPOLAR neurons (not pseudounipolar). All other sensory ganglia = pseudounipolar. This is testable!"
    },
    {
      title: "Two Neuron Populations: Large Pale vs Small Dark (FUNCTIONAL SIGNIFICANCE!)",
      content: "Sensory ganglia contain two distinct neuron types with different sensory modalities and conduction speeds:",
      details: [
        "LARGE PALE (L cells): 40-100 μm, heavily myelinated → FAST conduction (A-alpha, A-beta fibers)",
        "LARGE PALE functions: Fine touch, proprioception, vibration, temperature discrimination",
        "LARGE PALE neurotransmitter: Glutamate (excitatory)",
        "SMALL DARK (SD cells): 20-40 μm, unmyelinated/thinly myelinated → SLOW conduction (C fibers, A-delta)",
        "SMALL DARK functions: Pain, crude touch, temperature, itch",
        "SMALL DARK neurotransmitter: Substance P (pain transmission)",
        "Size correlates with function: LARGE = FAST, precise; SMALL = SLOW, crude",
        "Myelination correlates with speed: MORE myelin = FASTER conduction"
      ],
      emphasis: "EXAM FAVORITE: Large pale neurons = 'FAST and precise' (touch, position). Small dark neurons = 'SLOW and crude' (pain, itch). Remember: BIG neurons for BIG jobs (proprioception)!"
    },
    {
      title: "Satellite Cells vs Schwann Cells (GLIAL SUPPORT IN PNS!)",
      content: "Both are PNS glial cells but have different locations and functions:",
      details: [
        "SATELLITE CELLS: Surround neuron CELL BODIES in ganglia",
        "SCHWANN CELLS: Wrap around AXONS to form myelin sheaths",
        "SATELLITE function: K+ buffering, neurotransmitter removal, nutritional support, blood-nerve barrier",
        "SCHWANN function: Myelination, saltatory conduction, nerve regeneration guidance",
        "Both derived from neural crest cells",
        "SATELLITE = functional equivalent of astrocytes (CNS)",
        "SCHWANN = functional equivalent of oligodendrocytes (CNS)",
        "Clinical: Schwann cells guide axon regeneration after PNS injury (CNS doesn't regenerate as well)"
      ],
      emphasis: "LOCATION is key: Satellite = around CELL BODIES (in ganglia), Schwann = around AXONS (in nerves). Both are essential PNS support cells!"
    },
    {
      title: "Pseudounipolar Neuron Structure (UNIQUE DEVELOPMENTAL ANATOMY!)",
      content: "Pseudounipolar neurons have a unique morphology where one process bifurcates into two functionally distinct branches:",
      details: [
        "'Pseudo' = FAKE unipolar - looks like 1 process but actually bifurcates into 2",
        "Single process emerges from cell body then SPLITS (T-junction)",
        "PERIPHERAL branch: Anatomically AND functionally a DENDRITE (receives sensory input from receptors)",
        "CENTRAL branch: Anatomically AND functionally an AXON (transmits signal to CNS)",
        "Both branches are myelinated (unlike typical dendrites)",
        "Signal passes DIRECTLY through cell body without synaptic delay → FAST transmission",
        "NO synapses in sensory ganglia - neurons just relay signals without modification",
        "Developmental origin: Start as bipolar, two processes fuse during development"
      ],
      emphasis: "EXAM CONCEPT: Pseudounipolar = 'express lane' for sensory signals. No synapses = no delay = faster response time. The bifurcation is NOT visible in histology but is critical to understand functionally!"
    }
  ],

  relationshipsSummary: {
    ganglia: "Sensory (pseudounipolar, no dendrites visible, relay station) vs Autonomic (multipolar, dendrites visible, synapse site)",
    location: "Dorsal root ganglia (spinal nerves - body) vs Cranial ganglia (CN V, VII, VIII, IX, X - head/viscera)",
    neurons: "Large pale (fast, fine touch/proprioception, glutamate) vs Small dark (slow, pain/crude touch, substance P)",
    glial: "Satellite cells (around cell bodies in ganglia) vs Schwann cells (around axons in nerves)"
  },

  clinicalCorrelations: [
    {
      condition: "Herpes Zoster (Shingles)",
      mechanism: "Varicella-zoster virus remains dormant in dorsal root ganglia after chickenpox infection, can reactivate along sensory dermatome",
      histologicalFeature: "Viral infection of sensory ganglion neurons",
      significance: "Explains dermatomal distribution of shingles rash and pain; why antiviral therapy is important"
    },
    {
      condition: "Diabetic Neuropathy",
      mechanism: "Chronic hyperglycemia damages small dark neurons (C fibers and A-delta fibers) preferentially, affecting pain and temperature sensation first",
      histologicalFeature: "Loss of small dark neurons in sensory ganglia",
      significance: "Explains 'glove and stocking' distribution of diabetic neuropathy; loss of protective pain sensation"
    },
    {
      condition: "Guillain-Barré Syndrome (GBS)",
      mechanism: "Autoimmune attack on myelin sheaths and Schwann cells in peripheral nerves",
      histologicalFeature: "Demyelination of nerve fibers passing through ganglia",
      significance: "Ascending paralysis due to loss of motor neuron myelination; sensory involvement can occur"
    },
    {
      condition: "Acoustic Neuroma (Vestibular Schwannoma)",
      mechanism: "Benign tumor arising from Schwann cells of CN VIII (vestibulocochlear nerve)",
      histologicalFeature: "Schwann cell proliferation",
      significance: "Can compress CN VIII ganglia → hearing loss, tinnitus, balance problems; remember CN VIII is unique (bipolar neurons)"
    },
    {
      condition: "Tabes Dorsalis (Tertiary Syphilis)",
      mechanism: "Treponema pallidum infection causes degeneration of dorsal root ganglia and posterior columns",
      histologicalFeature: "Loss of large pale neurons (proprioceptive pathway)",
      significance: "Loss of proprioception → ataxia, positive Romberg sign, 'lightning' pains"
    }
  ],

  quickCards: {
    whatYouSee: [
      "Large pink cell bodies with prominent dark nuclei",
      "Two populations: BIG pale neurons + SMALL dark neurons",
      "Small dark nuclei forming rims around neurons (satellite cells)",
      "Blue-purple specks in cytoplasm (Nissl bodies)",
      "Pink bundles of nerve fibers with white spaces (myelin)",
      "Pink connective tissue separating neuron clusters"
    ],
    keyIdentifiers: [
      "Pseudounipolar neurons (NO visible dendrites)",
      "TWO size populations (L and SD)",
      "Satellite cell capsules around every neuron",
      "Nissl bodies (basophilic granules) in cytoplasm",
      "White myelin spaces in nerve bundles",
      "Connective tissue capsule and septa"
    ],
    staining: "HE: Nuclei + Nissl = BLUE; Cytoplasm = PINK; Myelin = WHITE (dissolved)",
    layers: [
      "Connective tissue capsule → Surrounds entire ganglion",
      "Septa → Divide ganglion into neuron clusters",
      "Satellite cells → Immediately around each neuron",
      "Perikaryon → Neuron cell body itself"
    ],
    visualID: [
      "Look for 'eggs in a basket' appearance - round neurons in connective tissue",
      "Scan for TWO neuron sizes - large pale AND small dark",
      "Find satellite cell rims - dark nuclei around neurons",
      "Spot nerve fiber bundles - pink with white myelin spaces",
      "Identify Nissl bodies - purple speckling in cytoplasm"
    ],
    cnsConnection: "Satellite cells in ganglia = Astrocytes in CNS (similar support functions); Schwann cells in nerves = Oligodendrocytes in CNS (both myelinate)",
    dontConfuse: [
      "Sensory ganglion (pseudounipolar, no dendrites) vs Autonomic ganglion (multipolar, dendrites visible)",
      "Satellite cells (around cell bodies in ganglia) vs Schwann cells (around axons in nerves)",
      "Large pale neurons (fast, fine touch) vs Small dark neurons (slow, pain) - BOTH in same ganglion"
    ]
  },

  minimalFormat: {
    essentials: [
      "Pseudounipolar neurons (2 sizes: L pale + SD dark)",
      "Satellite cells (dark nuclei rim around neurons)",
      "Nissl bodies (blue granules in cytoplasm)",
      "Nerve fibers (white myelin spaces)",
      "Connective tissue capsule"
    ],
    fastFacts: {
      what: "Sensory relay stations with pseudounipolar neurons",
      where: "Dorsal root ganglia (spinal) or cranial nerve ganglia",
      function: "Transmit sensory signals from periphery → CNS (NO synapses)",
      neurons: "2 types: Large pale (fast/fine) + Small dark (slow/pain)",
      stain: "HE shows blue nuclei, pink cytoplasm, white myelin"
    },
    examFavorite: "Sensory (pseudounipolar, NO dendrites) vs Autonomic (multipolar, HAS dendrites) - #1 ganglion comparison question!",
    oneLine: "Sensory ganglia contain pseudounipolar neurons in two populations (large pale for fast/fine sensation, small dark for slow/pain) surrounded by satellite cells"
  },

  commonMistakes: [
    {
      mistake: "Confusing sensory ganglion with autonomic ganglion",
      why: "Both are ganglia with neurons and supporting cells",
      howToAvoid: "SENSORY = pseudounipolar (NO dendrites visible), organized clusters, prominent satellite cells. AUTONOMIC = multipolar (dendrites visible with Ag stain), scattered neurons. If you can't see dendrites → sensory!"
    },
    {
      mistake: "Missing the two neuron populations (large pale vs small dark)",
      why: "Not scanning the entire ganglion or focusing only on one area",
      howToAvoid: "Always scan multiple areas - you should see BOTH large pale neurons AND small dark neurons in same section. This is a key feature tested on exams!"
    },
    {
      mistake: "Confusing satellite cells with Schwann cells",
      why: "Both are glial cells in PNS with similar names",
      howToAvoid: "LOCATION: Satellite = around CELL BODIES (in ganglia), Schwann = around AXONS (in nerve fibers). Different locations, different functions!"
    },
    {
      mistake: "Not identifying Nissl bodies",
      why: "Expecting them to be more prominent or distinct",
      howToAvoid: "Look for SUBTLE blue-purple granular appearance in neuron cytoplasm - they're basophilic (blue) specks, not bold structures. More prominent in large pale neurons."
    },
    {
      mistake: "Thinking synapses occur in sensory ganglia",
      why: "Assuming ganglia function like CNS relay stations",
      howToAvoid: "NO synapses in sensory ganglia! Pseudounipolar neurons just RELAY signals without modification. Signal goes: peripheral receptor → neuron → CNS. No synaptic delay = faster transmission!"
    },
    {
      mistake: "Confusing myelin spaces with adipocytes",
      why: "Both appear as white spaces in HE sections",
      howToAvoid: "MYELIN: Small (5-15 μm), uniform, in organized bundles (nerve fibers), has Schwann nuclei. ADIPOCYTES: Large (50-150 μm), variable sizes, in connective tissue septa, has peripheral nucleus. If in nerve bundle → myelin!"
    },
    {
      mistake: "Forgetting CN VIII is unique (bipolar, not pseudounipolar)",
      why: "Assuming all sensory ganglia have same neuron type",
      howToAvoid: "ALL sensory ganglia = pseudounipolar EXCEPT CN VIII (spiral & vestibular ganglia) = bipolar! This is a favorite exam exception question!"
    }
  ],

  examStrategy: {
    identifyFirst: [
      "Scan for organized clusters of large round neurons - ganglion architecture",
      "Look for TWO neuron sizes - large pale AND small dark (key feature)",
      "Find satellite cell rims - small dark nuclei around neurons",
      "Spot nerve fiber bundles with white myelin spaces"
    ],
    commonQuestions: [
      "What type of neurons are present? (Answer: Pseudounipolar)",
      "How does this differ from autonomic ganglion? (Answer: No visible dendrites, organized clusters, two neuron populations)",
      "What are the two neuron types and their functions? (Answer: Large pale = fast/fine touch, Small dark = slow/pain)",
      "What cells surround the neuron cell bodies? (Answer: Satellite cells)",
      "Do synapses occur here? (Answer: NO - sensory ganglia are relay stations without synapses)",
      "Which cranial nerve ganglion is different? (Answer: CN VIII - has bipolar neurons, not pseudounipolar)"
    ],
    mustKnow: [
      "Pseudounipolar neuron structure (1 process bifurcates into peripheral dendrite + central axon)",
      "Two populations: Large pale (fast, myelinated, fine touch/proprioception) vs Small dark (slow, unmyelinated, pain/crude touch)",
      "Satellite cells function (support, nutrition, blood-nerve barrier)",
      "Sensory vs autonomic ganglion differences (pseudounipolar vs multipolar, no synapses vs synapses)",
      "Clinical correlation: Herpes zoster dormant in dorsal root ganglia"
    ]
  },

  // Arrays for UI format compatibility
  insideTheFascicles: [
    {
      structure: "Pseudounipolar Neurons (Large Pale L cells)",
      description: "Large cell bodies (40-100 μm) with pale euchromatic nucleus, prominent nucleolus, and abundant Nissl bodies; heavily myelinated axons for fast conduction",
      keyFeature: "BIG + PALE = FAST sensations (fine touch, proprioception, vibration)",
      function: "Relay fast-conducting sensory signals (A-alpha, A-beta fibers) for precise localization and position sense",
      spotIt: "Look for large pale neurons with very prominent nucleolus and granular cytoplasm in organized clusters"
    },
    {
      structure: "Pseudounipolar Neurons (Small Dark SD cells)",
      description: "Smaller cell bodies (20-40 μm) with darker, more condensed chromatin and less visible Nissl bodies; thinly myelinated or unmyelinated axons for slow conduction",
      keyFeature: "SMALL + DARK = SLOW sensations (pain, crude touch, temperature)",
      function: "Relay slow-conducting sensory signals (C fibers, A-delta) for pain, temperature, and crude touch",
      spotIt: "Look for small dark neurons scattered among the large pale neurons"
    },
    {
      structure: "Satellite Cells (Capsule Cells)",
      description: "Small glial cells with dark, elongated nuclei forming thin protective rim around each neuron cell body",
      keyFeature: "Small dark nuclei forming continuous capsule directly against neuron surface",
      function: "Support and protect neurons; regulate microenvironment; maintain blood-nerve barrier; similar to CNS astrocytes",
      spotIt: "Small dark nuclei forming halo/rim RIGHT NEXT TO large pale neuron nuclei"
    },
    {
      structure: "Nissl Bodies (Tigroid Granules)",
      description: "Basophilic granules in neuronal cytoplasm representing rough ER and ribosomes; gives speckled appearance to cytoplasm",
      keyFeature: "Dark blue/purple granules scattered throughout pink cytoplasm",
      function: "Protein synthesis for neurotransmitters, structural proteins, and enzymes",
      spotIt: "Granular/speckled appearance in neuron cytoplasm, most prominent in large pale neurons"
    }
  ],

  layers: [],  // Sensory ganglia don't have endo/peri/epineurium layers like peripheral nerves

  aroundOrOutside: [
    {
      structure: "Connective Tissue Capsule and Septa",
      description: "Dense irregular connective tissue surrounding entire ganglion and extending inward as septa to separate neuron clusters; contains fibroblasts and collagen fibers",
      keyFeature: "Pink fibrous tissue dividing ganglion into organized compartments",
      function: "Structural support, protection, and vascular pathway; organizes neurons into clusters",
      spotIt: "Pink wavy fibrous tissue separating clusters of neurons and forming outer capsule"
    },
    {
      structure: "Blood Vessels",
      description: "Small arterioles, capillaries, and venules within connective tissue septa providing vascular supply to ganglion",
      keyFeature: "Circular or oval spaces with thin pink walls, often containing red blood cells",
      function: "Provide oxygen and nutrients; remove metabolic waste; maintain blood-nerve barrier",
      spotIt: "Small circular spaces with endothelial lining in connective tissue between neuron clusters"
    },
    {
      structure: "Nerve Fiber Bundles",
      description: "Myelinated axons entering and exiting the ganglion; appear as pink bundles with white spaces (dissolved myelin) and Schwann cell nuclei",
      keyFeature: "Pink bundles with white circular spaces (myelin negative image) between neuron clusters",
      function: "Conduct sensory impulses from ganglion to CNS and from periphery to ganglion",
      spotIt: "Look for wavy pink bundles with white spaces running between neuron clusters"
    }
  ]
};

// ============================================================================
// TO ADD A NEW SLIDE: Paste generated code (const SLIDE_DATA_XX = {...};) above this line
// Then add the slide number below: XX: SLIDE_DATA_XX,
// ============================================================================

// Collection of all available slides
const SLIDES = {
  70: SLIDE_DATA_70,
  71: SLIDE_DATA_71,
  72: SLIDE_DATA_72,
  73: SLIDE_DATA_73,
  74: SLIDE_DATA_74,
  // Add new slides here: 72: SLIDE_DATA_72,
};

// Version Selector Component
const VersionSelector = ({ currentVersion, onVersionChange, versions }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {versions.map((version) => (
      <button
        key={version.id}
        onClick={() => onVersionChange(version.id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          currentVersion === version.id
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {version.icon}
        <span className="font-medium">{version.name}</span>
      </button>
    ))}
  </div>
);

// ============================================================================
// RECURSIVE STRUCTURE TREE COMPONENT
// Renders nested anatomical structures to arbitrary depth
// Handles both old flat children arrays and new nested object structures
// ============================================================================
const RecursiveStructureTree = ({ item, depth = 0, color = "blue" }) => {
  const indent = depth * 24; // 24px per nesting level
  
  // Helper: Check if this is a nested object structure (new format)
  const isNestedObject = item && typeof item === 'object' && item.name;
  
  // Helper: Extract name from either format
  const getName = () => {
    if (isNestedObject) return item.name;
    if (typeof item === 'string') return item;
    return 'Unknown structure';
  };
  
  // Helper: Check if item has nested children
  const hasNestedChildren = isNestedObject && item.children && Array.isArray(item.children) && item.children.length > 0;
  
  return (
    <div className="mb-2">
      <div 
        className={`flex items-start gap-2`}
        style={{ marginLeft: `${indent}px` }}
      >
        {/* Connector line for children (depth > 0) */}
        {depth > 0 && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="w-3 h-0.5 bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
          </div>
        )}
        
        <div className="flex-1">
          {/* Structure name with relationship badge if present */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className={`font-bold capitalize ${depth === 0 ? 'text-blue-800 text-base' : 'text-blue-700 text-sm'}`}>
              {depth === 0 && '• '}{getName()}
            </div>
            
            {/* Relationship badge (e.g., "GAP in myelin", "INSIDE nucleus") */}
            {isNestedObject && item.relationship && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold border border-yellow-300">
                {item.relationship}
              </span>
            )}
            
            {/* Level indicator for deep nesting */}
            {isNestedObject && depth > 0 && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                Level {depth + 1}
              </span>
            )}
          </div>
          
          {/* Description if present */}
          {isNestedObject && item.description && (
            <div className="text-sm text-gray-700 mt-1 leading-relaxed">
              {item.description}
            </div>
          )}
          
          {/* Clinical note if present */}
          {isNestedObject && item.clinicalNote && (
            <div className="text-xs text-red-600 mt-1 font-semibold flex items-start gap-1">
              <span>⚠️</span>
              <span>{item.clinicalNote}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Recursively render nested children with increased depth */}
      {hasNestedChildren && (
        <div className={`${depth === 0 ? 'ml-0' : 'ml-6'} border-l-2 border-blue-200 pl-3 mt-2`}>
          {item.children.map((child, idx) => (
            <RecursiveStructureTree 
              key={idx} 
              item={child} 
              depth={depth + 1}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// FORMAT 1: HIERARCHICAL
// Best for: Initial learning, comprehensive review
// ============================================================================
const HierarchicalFormat = ({ data }) => (
  <div className="space-y-6">
    <div className="bg-green-50 border-l-4 border-green-500 p-4">
      <p className="text-sm font-semibold text-green-800">📚 HIERARCHICAL: Comprehensive learning format</p>
    </div>

    {/* Staining Info */}
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-5">
      <h3 className="text-xl font-bold text-purple-900 mb-3">🔬 STAINING: {data.stainingInfo.technique}</h3>
      <p className="text-purple-800 mb-3">{data.stainingInfo.description}</p>
      <div className="bg-white rounded p-3 space-y-1 text-sm">
        <div className="font-bold text-purple-900 mb-2">In THIS slide:</div>
        {data.stainingInfo.whatItStainsInThisSlide.map((item, idx) => (
          <div key={idx} className="text-purple-700">• {item}</div>
        ))}
      </div>
      <div className="mt-3 p-3 bg-purple-200 rounded-lg">
        <div className="font-bold text-purple-900">KEY:</div>
        <div className="text-purple-800 text-sm">{data.stainingInfo.keyEmphasis}</div>
      </div>
    </div>

    {/* EXAM ESSENTIALS - Hierarchical View - DYNAMIC */}
    {data.examEssentialStructures && (
      <div className="bg-gradient-to-br from-red-50 to-pink-50 border-4 border-red-400 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">⭐</span>
          <div>
            <h2 className="text-2xl font-black text-red-900">EXAM ESSENTIALS - Hierarchical Organization</h2>
            <p className="text-red-700 text-sm">All structures you must identify on the exam</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Inside Fascicles - Bundle with nested components */}
          {data.examEssentialStructures.grouped && data.examEssentialStructures.grouped.length > 0 && (
            <div className="bg-blue-50 border-l-4 border-blue-600 pl-4 py-3">
              <div className="font-bold text-blue-900 text-lg mb-2">📦 INSIDE FASCICLES</div>
              
              <div className="ml-4 space-y-3">
                {data.examEssentialStructures.grouped.map((group, idx) => {
                  // Check if using new nested format (children are objects) or old format (children are strings)
                  const isNestedFormat = group.children && group.children.length > 0 && typeof group.children[0] === 'object' && group.children[0].name;
                  
                  return (
                    <div key={idx} className="bg-white rounded p-3 border-2 border-blue-300">
                      <div className="font-bold text-blue-800 capitalize text-lg mb-2">• {group.parent}</div>
                      
                      {/* Show additional info if present */}
                      {group.where && (
                        <div className="text-sm text-gray-700 mb-2">
                          <span className="font-semibold text-blue-700">Location:</span> {group.where}
                        </div>
                      )}
                      {group.function && (
                        <div className="text-sm text-gray-700 mb-2">
                          <span className="font-semibold text-blue-700">Function:</span> {group.function}
                        </div>
                      )}
                      
                      {/* Children rendering */}
                      {group.children && group.children.length > 0 && (
                        <div className="mt-3">
                          <div className="font-semibold text-blue-700 text-sm mb-2">Contains:</div>
                          {isNestedFormat ? (
                            // NEW: Use RecursiveStructureTree for nested format
                            <div className="space-y-2">
                              {group.children.map((child, childIdx) => (
                                <RecursiveStructureTree key={childIdx} item={child} depth={0} />
                              ))}
                            </div>
                          ) : (
                            // OLD: Fallback for flat string arrays (backwards compatibility)
                            <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-200 pl-3">
                              {group.children.map((child, childIdx) => (
                                <div key={childIdx}>
                                  <div className="font-semibold text-blue-800 capitalize">└─ {child}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Endoneurium from layers */}
                {data.layers && data.examEssentialStructures.layers?.includes('endoneurium') && (
                  (() => {
                    const endo = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'endoneurium');
                    return endo && (
                      <div className="bg-white rounded p-3 border-2 border-blue-300">
                        <div className="font-bold text-blue-800">• {endo.name}</div>
                        <div className="text-sm text-blue-700 space-y-1 mt-1">
                          {endo.level && <div><strong>Level:</strong> {endo.level}</div>}
                          {endo.wraps && <div><strong>Wraps:</strong> {endo.wraps}</div>}
                          {endo.appearance && <div><strong>Appearance:</strong> {endo.appearance}</div>}
                          {endo.contains && <div><strong>Contains:</strong> {endo.contains}</div>}
                          {endo.cnsEquivalent && <div className="text-blue-600">🧠 <strong>CNS Equivalent:</strong> {endo.cnsEquivalent}</div>}
                        </div>
                      </div>
                    );
                  })()
                )}

                {/* Additional items (fibrocytes, etc) */}
                {data.examEssentialStructures.additional && data.examEssentialStructures.additional.map((item, idx) => {
                  if (item.toLowerCase().includes('fibrocyte')) {
                    return (
                      <div key={idx} className="bg-white rounded p-3 border-2 border-blue-300">
                        <div className="font-bold text-blue-800 capitalize">• {item}</div>
                        <div className="text-sm text-blue-700">Scattered in connective tissue; maintain CT matrix</div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}

          {/* Around Fascicles - Perineurium */}
          {data.layers && data.examEssentialStructures.layers?.includes('perineurium') && (
            (() => {
              const peri = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'perineurium');
              return peri && (
                <div className="bg-orange-50 border-l-4 border-orange-600 pl-4 py-3">
                  <div className="font-bold text-orange-900 text-lg mb-2">🛡️ AROUND FASCICLES</div>
                  <div className="ml-4">
                    <div className="bg-white rounded p-3 border-2 border-orange-300">
                      <div className="font-bold text-orange-800">• {peri.name}</div>
                      <div className="text-sm text-orange-700 space-y-1 mt-1">
                        {peri.level && <div><strong>Level:</strong> {peri.level}</div>}
                        {peri.wraps && <div><strong>Wraps:</strong> {peri.wraps}</div>}
                        {peri.appearance && <div><strong>Appearance:</strong> {peri.appearance}</div>}
                        {peri.contains && <div><strong>Contains:</strong> {peri.contains}</div>}
                        {peri.cnsEquivalent && <div className="text-orange-600">🧠 <strong>CNS Equivalent:</strong> {peri.cnsEquivalent}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()
          )}

          {/* Outside Fascicles - Epineurium + Adipocytes */}
          {(data.layers && data.examEssentialStructures.layers?.includes('epineurium') || data.examEssentialStructures.additional) && (
            <div className="bg-green-50 border-l-4 border-green-600 pl-4 py-3">
              <div className="font-bold text-green-900 text-lg mb-2">🍃 OUTSIDE FASCICLES</div>
              <div className="ml-4 space-y-2">
                {/* Epineurium */}
                {(() => {
                  const epi = data.layers?.find(l => l.name.toLowerCase() === 'epineurium');
                  return epi && (
                    <div className="bg-white rounded p-3 border-2 border-green-300">
                      <div className="font-bold text-green-800">• {epi.name}</div>
                      <div className="text-sm text-green-700 space-y-1 mt-1">
                        {epi.level && <div><strong>Level:</strong> {epi.level}</div>}
                        {epi.wraps && <div><strong>Wraps:</strong> {epi.wraps}</div>}
                        {epi.appearance && <div><strong>Appearance:</strong> {epi.appearance}</div>}
                        {epi.contains && <div><strong>Contains:</strong> {epi.contains}</div>}
                        {epi.cnsEquivalent && <div className="text-green-600">🧠 <strong>CNS Equivalent:</strong> {epi.cnsEquivalent}</div>}
                      </div>
                    </div>
                  );
                })()}

                {/* Adipocytes */}
                {data.examEssentialStructures.additional && data.examEssentialStructures.additional.map((item, idx) => {
                  if (item.toLowerCase().includes('adipocyte')) {
                    return (
                      <div key={idx} className="bg-white rounded p-3 border-2 border-green-300">
                        <div className="font-bold text-green-800 capitalize">• {item}</div>
                        <div className="text-sm text-green-700">LARGE white circles (much bigger than myelin); found in epineurium for cushioning</div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    )}

    {/* Big Picture */}
    {data.bigPicture && (
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-8 h-8" />
          <h2 className="text-2xl font-black">BIG PICTURE</h2>
        </div>
        <p className="text-xl mb-4 font-medium">{data.bigPicture}</p>
        {data.hierarchy && (
          <div className="bg-white text-blue-600 rounded-lg p-4">
            {data.hierarchy.map((line, idx) => (
              <div key={idx} className="font-mono text-base">{line}</div>
            ))}
          </div>
        )}
      </div>
    )}

    {/* Critical Relationships */}
    {data.criticalRelationships && data.criticalRelationships.length > 0 && (
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="font-bold text-yellow-900 mb-3 text-xl">⚡ CRITICAL RELATIONSHIPS</h3>
        <div className="space-y-4">
          {data.criticalRelationships.map((rel, idx) => (
            <div key={idx} className="bg-white rounded p-4">
              <div className="font-bold text-yellow-900 mb-2">{rel.title}</div>
              <div className="text-yellow-800 text-sm mb-2">{rel.content}</div>
              <div className="ml-4 space-y-1 text-sm text-yellow-700">
                {rel.details.map((detail, i) => (
                  <div key={i}>• {detail}</div>
                ))}
              </div>
              {rel.emphasis && (
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm font-semibold text-yellow-900">
                  💡 {rel.emphasis}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ============================================================================
// FORMAT 2: QUICK CARDS
// Best for: Fast review, pattern recognition
// ============================================================================
const QuickCardsFormat = ({ data }) => (
  <div className="space-y-6">
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
      <p className="text-sm font-semibold text-yellow-800">⚡ QUICK CARDS: Flash card style for rapid memorization</p>
    </div>

    {/* Staining Card */}
    {data.stainingInfo && (
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-black">STAINING: {data.stain}</h3>
          <span className="text-4xl">🔬</span>
        </div>
        <div className="bg-white/20 rounded-lg p-4 mb-3">
          <div className="text-lg font-bold mb-2">KEY POINT:</div>
          <div className="text-xl">{data.stainingInfo.keyEmphasis}</div>
        </div>
        <div className="text-sm">{data.stainingInfo.description}</div>
      </div>
    )}

    {/* EXAM ESSENTIALS Cards - DYNAMIC */}
    {data.examEssentialStructures && (
      <>
        <div className="bg-red-50 border-4 border-red-400 rounded-xl p-4 mb-4">
          <h3 className="text-center font-black text-red-900 text-xl mb-2">⭐ EXAM ESSENTIALS - Quick Review Cards</h3>
          <p className="text-center text-red-700 text-sm">Flash card style for essential structures</p>
        </div>

        {/* Bundle Cards - from grouped - FULL DETAIL */}
        {data.examEssentialStructures.grouped && data.examEssentialStructures.grouped
          .filter(group => !group.parent.toLowerCase().includes('supporting'))
          .map((group, idx) => {
            // Smart fallback for FUNCTION field
            let functionText = group.function;
            if (!functionText && data.insideTheFascicles) {
              const bundleItem = data.insideTheFascicles.find(item => 
                item.structure?.toLowerCase().includes('bundle') || 
                item.structure?.toLowerCase().includes('axon')
              );
              if (bundleItem) {
                functionText = bundleItem.description;
              }
            }
            if (!functionText) {
              functionText = 'Conducts electrical nerve impulses; myelin sheaths enable rapid saltatory conduction';
            }
            
            // Smart fallback for QUICK ID field
            let quickIDText = group.quickID;
            if (!quickIDText && data.insideTheFascicles) {
              const bundleItem = data.insideTheFascicles.find(item => 
                item.structure?.toLowerCase().includes('bundle') || 
                item.structure?.toLowerCase().includes('myelin')
              );
              if (bundleItem) {
                quickIDText = bundleItem.description;
              }
            }
            if (!quickIDText) {
              quickIDText = 'Look for honeycomb pattern inside fascicles – organized array of circular structures';
            }
            
            return (
              <div key={idx} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black flex items-center gap-2">
                    <span className="text-yellow-300 text-3xl">⭐</span>
                    {group.parent.toUpperCase()}
                  </h3>
                  <span className="text-4xl">🔹</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">WHERE:</div>
                    <div>{group.where || 'Inside fascicles creating characteristic honeycomb pattern'}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">LOOKS LIKE:</div>
                    <div>{group.appearance || `Honeycomb pattern with ${group.children?.length || 0} components`}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">CONTAINS:</div>
                    {group.children && group.children.length > 0 ? (
                      <div className="ml-3 space-y-2">
                        {group.children.map((child, childIdx) => {
                          // Check if new nested format (object with name) or old format (string)
                          const isNestedFormat = typeof child === 'object' && child.name;
                          
                          if (isNestedFormat) {
                            // NEW: Render nested structure with children
                            return (
                              <div key={childIdx}>
                                <div className="flex items-start gap-2">
                                  <span className="text-yellow-300 font-bold flex-shrink-0">{childIdx + 1}.</span>
                                  <div className="flex-1">
                                    <div className="font-semibold capitalize">{child.name}</div>
                                    {child.description && (
                                      <div className="text-xs mt-0.5 opacity-90">{child.description}</div>
                                    )}
                                    
                                    {/* Nested children (e.g., node of Ranvier inside myelin sheath) */}
                                    {child.children && child.children.length > 0 && (
                                      <div className="ml-4 mt-2 pl-3 border-l-2 border-yellow-300">
                                        {child.children.map((grandchild, gidx) => (
                                          <div key={gidx} className="flex items-center gap-2 mb-1">
                                            <span className="text-yellow-300">→</span>
                                            <div>
                                              <div className="font-semibold flex items-center gap-2">
                                                <span className="capitalize">{grandchild.name}</span>
                                                {grandchild.relationship && (
                                                  <span className="text-xs bg-yellow-300 text-gray-800 px-2 py-0.5 rounded">
                                                    {grandchild.relationship}
                                                  </span>
                                                )}
                                              </div>
                                              {grandchild.description && (
                                                <div className="text-xs mt-0.5 opacity-90">
                                                  {grandchild.description}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          } else {
                            // OLD: Fallback for flat string arrays (backwards compatibility)
                            return (
                              <div key={childIdx} className="capitalize">• {child}</div>
                            );
                          }
                        })}
                      </div>
                    ) : (
                      <div>{group.contains || 'Multiple nerve fiber components'}</div>
                    )}
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">FUNCTION:</div>
                    <div>{functionText}</div>
                  </div>
                  
                  <div className="mt-4 bg-white text-gray-800 rounded-lg p-3 font-bold text-sm">
                    🎯 SPOT IT: {quickIDText}
                  </div>
                </div>
              </div>
            );
          })}

        {/* Additional Items Cards (Fibrocytes, Adipocytes) */}
        {data.examEssentialStructures?.additional && data.examEssentialStructures.additional.map((item, idx) => {
          const isFibrocyte = item.toLowerCase().includes('fibrocyte');
          const isAdipocyte = item.toLowerCase().includes('adipocyte');
          
          if (isFibrocyte) {
            // Get detailed info from insideTheFascicles with smart fallback
            const fibroDetails = data.insideTheFascicles?.find(s => 
              s.structure?.toLowerCase().includes('fibroblast') || 
              s.structure?.toLowerCase().includes('fibrocyte')
            );
            
            // Extract all fields with intelligent fallbacks from data
            const where = fibroDetails?.structure || 'Fibrocytes in endoneurium';
            const looksLike = fibroDetails?.description || 'Elongated nuclei in connective tissue';
            const keyFeature = fibroDetails?.keyFeature || (fibroDetails?.description ? fibroDetails.description.split('.')[0] : 'Connective tissue support cells');
            const functionText = fibroDetails?.function || (fibroDetails?.description ? fibroDetails.description : 'Maintain endoneurial connective tissue');
            const spotIt = fibroDetails?.spotIt || looksLike;
            
            return (
              <div key={idx} className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black flex items-center gap-2">
                    <span className="text-yellow-300 text-3xl">⭐</span>
                    {item.toUpperCase()}
                  </h3>
                  <span className="text-4xl">🧠</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">WHERE:</div>
                    <div>{where}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">LOOKS LIKE:</div>
                    <div>{looksLike}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">KEY FEATURE:</div>
                    <div>{keyFeature}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">FUNCTION:</div>
                    <div>{functionText}</div>
                  </div>
                  
                  <div className="mt-4 bg-white text-gray-800 rounded-lg p-3 font-bold text-sm">
                    🎯 SPOT IT: {spotIt}
                  </div>
                </div>
              </div>
            );
          }
          
          if (isAdipocyte) {
            // Get detailed info from aroundOrOutside with smart fallback
            const adipoDetails = data.aroundOrOutside?.find(s => 
              s.structure?.toLowerCase().includes('adipocyte') || 
              s.structure?.toLowerCase().includes('adipose')
            );
            
            // Extract all fields with intelligent fallbacks from data
            const where = adipoDetails?.structure || 'Adipocytes in epineurium';
            const looksLike = adipoDetails?.description || 'Large white circular spaces in connective tissue';
            const keyFeature = adipoDetails?.keyFeature || (adipoDetails?.description ? adipoDetails.description.split('.')[0] : 'Large lipid-filled cells');
            const functionText = adipoDetails?.function || (adipoDetails?.description ? adipoDetails.description : 'Energy storage and cushioning');
            const spotIt = adipoDetails?.spotIt || looksLike;
            
            return (
              <div key={idx} className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black flex items-center gap-2">
                    <span className="text-yellow-300 text-3xl">⭐</span>
                    {item.toUpperCase()}
                  </h3>
                  <span className="text-4xl">🔴</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">WHERE:</div>
                    <div>{where}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">LOOKS LIKE:</div>
                    <div>{looksLike}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">KEY FEATURE:</div>
                    <div>{keyFeature}</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">FUNCTION:</div>
                    <div>{functionText}</div>
                  </div>
                  
                  <div className="mt-4 bg-white text-gray-800 rounded-lg p-3 font-bold text-sm">
                    🎯 SPOT IT: {spotIt}
                  </div>
                </div>
              </div>
            );
          }
          
          return null;
        })}
      </>
    )}

    {/* Layer Cards */}
    {data.layers && data.layers.length > 0 && (
      <div className="space-y-4">
        {data.layers.map((layer, idx) => {
          const gradients = [
            { from: 'from-pink-500', to: 'to-pink-600', emoji: '🌸' },
            { from: 'from-orange-500', to: 'to-orange-600', emoji: '📦' },
            { from: 'from-green-500', to: 'to-green-600', emoji: '🛡️' }
          ];
          const gradient = gradients[idx % gradients.length];
          
          // Check if exam essential
          const isEssential = data.examEssentialStructures?.layers?.some(essLayer => 
            layer.name.toLowerCase().includes(essLayer.toLowerCase())
          );
          
          return (
            <div key={idx} className={`bg-gradient-to-br ${gradient.from} ${gradient.to} text-white rounded-xl p-6 shadow-lg`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  {isEssential && <span className="text-yellow-300 text-3xl">⭐</span>}
                  {layer.name.toUpperCase()}
                </h3>
                <span className="text-4xl">{gradient.emoji}</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">WRAPS:</div>
                  <div>{layer.wraps}</div>
                </div>
                
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">LOOKS LIKE:</div>
                  <div>{layer.appearance}</div>
                </div>
                
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">KEY FEATURE:</div>
                  <div>{layer.composition}</div>
                </div>
                
                {layer.cnsEquivalent && (
                  <div className="bg-white/30 rounded-lg p-3">
                    <div className="font-bold text-sm mb-1">CNS =</div>
                    <div>{layer.cnsEquivalent}</div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 bg-white text-gray-800 rounded-lg p-3 font-bold text-sm">
                🎯 SPOT IT: {layer.quickID}
              </div>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

// ============================================================================
// FORMAT 3: RELATIONSHIPS - REBUILT SAFE VERSION
// Best for: Understanding connections, spatial reasoning
// ============================================================================
const RelationshipsFormat = ({ data }) => {
  const safe = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (val.name) return String(val.name);
    return String(val);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <p className="text-sm font-semibold text-blue-800">🔗 RELATIONSHIPS [REBUILT SAFE v4.0]</p>
      </div>

    {/* Staining Context */}
    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
      <h3 className="font-bold text-purple-900 mb-2">STAINING CONTEXT</h3>
      <p className="text-purple-800 text-sm">
        <strong>{data?.stain || 'Unknown'} staining:</strong> {data?.stainingInfo?.keyEmphasis || data?.bigPicture || 'No data'}
      </p>
    </div>

    {/* EXAM ESSENTIALS - WHERE & HOW - DYNAMIC */}
    {data.examEssentialStructures && (
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-400 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-black text-center mb-6 text-yellow-900">⭐ EXAM ESSENTIALS - WHERE & HOW THEY RELATE</h2>
        
        <div className="space-y-4">
          {/* Inside Fascicles */}
          {(data.examEssentialStructures?.grouped || data.examEssentialStructures?.layers?.includes('endoneurium') || data.examEssentialStructures?.additional) && (
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">INSIDE FASCICLES:</h3>
              <div className="space-y-2 ml-4">
                {/* Grouped items (bundle with children) */}
                {data.examEssentialStructures.grouped && data.examEssentialStructures.grouped.map((group, idx) => (
                  <div key={idx} className="text-blue-800">
                    <strong className="capitalize">• {safe(group.parent)}</strong>
                    {group.children && group.children.length > 0 && (
                      <div className="ml-6 text-sm space-y-1 mt-1">
                        {group.children.map((child, childIdx) => (
                          <div key={childIdx} className="capitalize">→ {safe(child)}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Endoneurium */}
                {data.examEssentialStructures.layers?.includes('endoneurium') && data.layers && (() => {
                  const endo = data.layers?.find(l => l && l.name && l.name.toLowerCase() === 'endoneurium');
                  return endo && (
                    <div className="text-blue-800 mt-2">
                      <strong>• {endo.name}</strong> {endo.function && `- ${endo.function}`}
                    </div>
                  );
                })()}
                
                {/* Fibrocytes */}
                {data.examEssentialStructures.additional?.filter(item => {
                  const str = typeof item === 'string' ? item : item?.name || String(item);
                  return str.toLowerCase().includes('fibrocyte');
                }).map((item, idx) => {
                  const displayName = typeof item === 'string' ? item : item?.name || String(item);
                  return (
                    <div key={idx} className="text-blue-800 capitalize">
                      <strong>• {displayName}</strong> - maintain connective tissue
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Around Fascicles */}
          {data.examEssentialStructures.layers?.includes('perineurium') && data.layers && (() => {
            const peri = data.layers?.find(l => l && l.name && l.name.toLowerCase() === 'perineurium');
            return peri && (
              <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-4">
                <h3 className="font-bold text-orange-900 mb-2 text-lg">AROUND FASCICLES:</h3>
                <div className="ml-4 text-orange-800">
                  <strong>• {peri.name}</strong> {peri.function && `- ${peri.function}`}
                </div>
              </div>
            );
          })()}

          {/* Outside Fascicles */}
          {(data.examEssentialStructures?.layers?.includes('epineurium') || data.examEssentialStructures?.additional) && (
            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4">
              <h3 className="font-bold text-green-900 mb-2 text-lg">OUTSIDE FASCICLES:</h3>
              <div className="space-y-2 ml-4">
                {/* Epineurium */}
                {data.examEssentialStructures.layers?.includes('epineurium') && data.layers && (() => {
                  const epi = data.layers?.find(l => l && l.name && l.name.toLowerCase() === 'epineurium');
                  return epi && (
                    <div className="text-green-800">
                      <strong>• {epi.name}</strong> {epi.function && `- ${epi.function}`}
                    </div>
                  );
                })()}
                
                {/* Adipocytes */}
                {data.examEssentialStructures.additional?.filter(item => {
                  const str = typeof item === 'string' ? item : item?.name || String(item);
                  return str.toLowerCase().includes('adipocyte');
                }).map((item, idx) => {
                  const displayName = typeof item === 'string' ? item : item?.name || String(item);
                  return (
                    <div key={idx} className="text-green-800 capitalize">
                      <strong>• {displayName}</strong> - cushioning and protection
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Relationship */}
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 text-center">
            <div className="font-bold text-red-900">KEY RELATIONSHIP:</div>
            <div className="text-red-800 text-sm">Organized protection from inside out: fiber → fascicle → whole nerve</div>
          </div>
        </div>
      </div>
    )}

    {/* Nested Structure (Cross-section View) - DYNAMIC */}
    {data.layers && data.layers.length > 0 && (() => {
      const epi = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'epineurium');
      const peri = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'perineurium');
      const endo = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'endoneurium');
      
      return (
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">NESTED STRUCTURE (Cross-section View)</h2>
          <div className="flex justify-center">
            {/* Outermost: Epineurium */}
            {epi && (
              <div className="bg-green-100 border-4 border-green-600 rounded-3xl p-8 w-full max-w-xl">
                <div className="text-center font-bold text-green-800 mb-4">
                  {epi.name.toUpperCase()} {epi.cnsEquivalent && `(${epi.cnsEquivalent})`}
                </div>
                
                {/* Middle: Perineurium */}
                {peri && (
                  <div className="bg-orange-100 border-4 border-orange-500 rounded-2xl p-6">
                    <div className="text-center font-bold text-orange-800 mb-4">
                      {peri.name.toUpperCase()} {peri.cnsEquivalent && `(${peri.cnsEquivalent})`}
                    </div>
                    
                    {/* Inner: Endoneurium */}
                    {endo && (
                      <div className="bg-pink-100 border-4 border-pink-500 rounded-xl p-5">
                        <div className="text-center font-bold text-pink-800 mb-3">
                          {endo.name.toUpperCase()} {endo.cnsEquivalent && `(${endo.cnsEquivalent})`}
                        </div>
                        
                        {/* Innermost: Nerve Fiber */}
                        {data.examEssentialStructures?.grouped && data.examEssentialStructures?.grouped[0] && (
                          <div className="bg-blue-200 border-2 border-blue-600 rounded-lg p-4">
                            <div className="text-center font-bold text-blue-900 mb-2 capitalize">
                              {data.examEssentialStructures.grouped[0].parent.toUpperCase()}
                            </div>
                            {data.examEssentialStructures.grouped[0].children && data.examEssentialStructures.grouped[0].children.length > 0 && (
                              <div className="text-center text-blue-800 text-sm capitalize">
                                {data.examEssentialStructures.grouped[0].children.map(child => 
                                  typeof child === 'string' ? child : child?.name || String(child)
                                ).join(' + ')}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    })()}

    {/* Relationship Matrix */}
    {(data.examEssentialStructures?.grouped || data.layers) && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">RELATIONSHIP MATRIX</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-3 text-left">Structure</th>
                <th className="border border-gray-400 p-3 text-left">Location</th>
                <th className="border border-gray-400 p-3 text-left">Appearance</th>
                {data.layers && data.layers[0]?.cnsEquivalent && (
                  <th className="border border-gray-400 p-3 text-left">CNS Equivalent</th>
                )}
              </tr>
            </thead>
            <tbody>
              {/* Bundle of Nerve Fibers - FIRST */}
              {data.examEssentialStructures?.grouped && data.examEssentialStructures.grouped
                .filter(group => !group.parent.toLowerCase().includes('supporting'))
                .map((group, idx) => {
                  // Get REAL educational content, not generic fallback
                  let appearance = group.appearance;
                  if (!appearance && data.insideTheFascicles) {
                    // Search for bundle/nerve fiber description in insideTheFascicles
                    const bundleItem = data.insideTheFascicles.find(item => 
                      item.structure?.toLowerCase().includes('bundle') || 
                      item.structure?.toLowerCase().includes('nerve fiber')
                    );
                    if (bundleItem) {
                      appearance = bundleItem.description;
                    } else if (group.children && group.children.length > 0) {
                      // Last resort: format children educationally
                      const childNames = group.children.map(child => 
                        typeof child === 'string' ? child : child?.name || String(child)
                      );
                      appearance = `Consists of ${childNames.join(', ')}`;
                    }
                  }
                  
                  return (
                    <tr key={`matrix-grouped-${idx}`} className="bg-blue-50">
                      <td className="border border-gray-400 p-3 font-bold">{group.parent}</td>
                      <td className="border border-gray-400 p-3">{group.where || 'Inside fascicles creating characteristic pattern'}</td>
                      <td className="border border-gray-400 p-3">{appearance || 'Myelinated nerve fibers in organized bundles'}</td>
                      {data.layers && data.layers[0]?.cnsEquivalent && (
                        <td className="border border-gray-400 p-3">N/A (PNS structure)</td>
                      )}
                    </tr>
                  );
                })}
              
              {/* Layers - AFTER bundle */}
              {data.layers && data.layers.map((layer, idx) => {
                const bgColors = ['bg-pink-50', 'bg-orange-50', 'bg-green-50'];
                return (
                  <tr key={`matrix-layer-${idx}`} className={bgColors[idx % bgColors.length]}>
                    <td className="border border-gray-400 p-3 font-bold">{layer.name}</td>
                    <td className="border border-gray-400 p-3">{layer.level}</td>
                    <td className="border border-gray-400 p-3">{layer.appearance}</td>
                    {data.layers[0].cnsEquivalent && (
                      <td className="border border-gray-400 p-3">{layer.cnsEquivalent || 'N/A'}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )}

    {/* Size Comparison - DYNAMIC */}
    {data.examEssentialStructures && (data.examEssentialStructures?.grouped || data.examEssentialStructures?.additional) && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">SIZE COMPARISON (Critical for ID!)</h2>
        <div className="space-y-4">
          {/* Structures from grouped (axon, myelin) */}
          {data.examEssentialStructures?.grouped && data.examEssentialStructures.grouped[0]?.children && (
            data.examEssentialStructures.grouped[0].children.slice(0, 2).map((child, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {idx === 0 ? (
                    <div className="w-3 h-3 rounded-full bg-pink-500 border-2 border-pink-700"></div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border-4 border-blue-500 bg-white"></div>
                  )}
                </div>
                <div className="text-sm capitalize">
                  <span className="font-bold">{child}:</span> {idx === 0 ? 'Tiny pink dot' : 'Tiny white circular halo'}
                </div>
              </div>
            ))
          )}
          
          {/* Adipocyte from additional */}
          {data.examEssentialStructures?.additional?.filter(item => item.toLowerCase().includes('adipocyte')).map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-4 border-yellow-500 bg-yellow-50"></div>
              </div>
              <div className="text-sm capitalize">
                <span className="font-bold">{item}:</span> HUGE (up to many times bigger)
              </div>
            </div>
          ))}
        </div>
        
        {data.examEssentialStructures?.additional?.some(item => item.toLowerCase().includes('adipocyte')) && (
          <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-3">
            <p className="text-red-800 text-sm font-semibold">
              ⚠️ COMMON MISTAKE: Confusing adipocytes with myelin - much larger and in EPINEURIUM, not fascicle!
            </p>
          </div>
        )}
      </div>
    )}

    {/* Relationships Summary - Concise Reworked Version */}
    {data.relationshipsSummary && data.relationshipsSummary.length > 0 && (
      <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-3 text-xl">🔑 CRITICAL RELATIONSHIPS</h3>
        <div className="space-y-3">
          {data.relationshipsSummary.map((rel, idx) => (
            <div key={idx} className="bg-white rounded p-4 shadow">
              <div className="font-bold text-blue-900 mb-2">{rel.title}</div>
              <div className="text-blue-800 text-sm mb-2 italic">{rel.summary}</div>
              {rel.keyPoints && rel.keyPoints.map((point, i) => (
                <div key={i} className="text-blue-700 text-sm ml-4">• {point}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
};

// ============================================================================
// FORMAT 4: ULTRA-MINIMAL
// Best for: Last-minute cramming, time pressure
// ============================================================================
const UltraMinimalFormat = ({ data }) => {
  const umf = data.ultraMinimalFacts || {};
  
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <p className="text-sm font-semibold text-red-800">🎯 ULTRA-MINIMAL: Only must-know facts</p>
      </div>

      {/* Must-Know Facts */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black">⚠️ MUST-KNOW FACTS</h2>
        </div>
        
        <div className="space-y-4">
          {/* 1. STAINING */}
          {umf.staining && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  1
                </span>
                <h3 className="text-xl font-bold">STAINING</h3>
              </div>
              <div className="ml-11 text-lg">{umf.staining}</div>
            </div>
          )}

          {/* 2. THE LAYERS */}
          {umf.layers && umf.layers.length > 0 && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  2
                </span>
                <h3 className="text-xl font-bold">THE LAYERS</h3>
              </div>
              <div className="ml-11 space-y-2">
                {umf.layers.map((layer, idx) => (
                  <div key={idx} className="text-base">{layer}</div>
                ))}
              </div>
            </div>
          )}

          {/* 3. INSIDE FASCICLES (Exam Essential) - DYNAMIC */}
          {data.examEssentialStructures && (data.examEssentialStructures?.grouped || data.examEssentialStructures?.additional) && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  3
                </span>
                <h3 className="text-xl font-bold">⭐ INSIDE FASCICLES (EXAM ESSENTIALS)</h3>
              </div>
              <div className="ml-11 space-y-1 font-mono text-sm">
                {/* Bundle with children */}
                {data.examEssentialStructures?.grouped && data.examEssentialStructures.grouped.map((group, idx) => {
                  const isNestedFormat = group.children && group.children.length > 0 && typeof group.children[0] === 'object' && group.children[0].name;
                  
                  // Recursive function to render nested items with proper indentation
                  const renderNestedItem = (item, depth = 0) => {
                    const indent = depth * 4; // 4 spaces per level for monospace alignment
                    const isObject = typeof item === 'object' && item.name;
                    const name = isObject ? item.name : item;
                    
                    return (
                      <div>
                        <div className="flex items-start gap-2" style={{ marginLeft: `${indent * 4}px` }}>
                          <span className="flex-shrink-0">{depth === 0 ? '•' : '→'}</span>
                          <div className="flex-1">
                            <span className="capitalize">{name}</span>
                            {isObject && item.relationship && (
                              <span className="ml-2 text-xs bg-yellow-300 text-gray-800 px-1 rounded">
                                ({item.relationship})
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Render grandchildren with increased indentation */}
                        {isObject && item.children && item.children.length > 0 && (
                          <div>
                            {item.children.map((child, idx) => (
                              <React.Fragment key={idx}>{renderNestedItem(child, depth + 1)}</React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  };
                  
                  return (
                    <div key={idx}>
                      <div className="text-base"><strong>• {group.parent}</strong></div>
                      {group.children && group.children.length > 0 && (
                        <div className="ml-4">
                          {isNestedFormat ? (
                            // NEW: Recursive rendering for nested format
                            group.children.map((child, childIdx) => (
                              <React.Fragment key={childIdx}>{renderNestedItem(child, 0)}</React.Fragment>
                            ))
                          ) : (
                            // OLD: Flat rendering for backwards compatibility
                            group.children.map((child, childIdx) => (
                              <div key={childIdx} className="text-base capitalize">→ {child}</div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
                {/* Fibrocytes */}
                {data.examEssentialStructures.additional?.filter(item => item.toLowerCase().includes('fibrocyte')).map((item, idx) => (
                  <div key={idx} className="text-base capitalize"><strong>• {item}</strong></div>
                ))}
              </div>
            </div>
          )}

          {/* 4. OUTSIDE FASCICLES (Exam Essential) - DYNAMIC */}
          {data.examEssentialStructures?.additional && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  4
                </span>
                <h3 className="text-xl font-bold">⭐ OUTSIDE FASCICLES (EXAM ESSENTIAL)</h3>
              </div>
              <div className="ml-11 space-y-2">
                {data.examEssentialStructures?.additional?.filter(item => item.toLowerCase().includes('adipocyte')).map((item, idx) => (
                  <div key={idx} className="text-base capitalize"><strong>• {item}:</strong> LARGE white circles in epineurium</div>
                ))}
              </div>
            </div>
          )}

          {/* 5. CNS CONNECTION */}
          {umf.cnsConnection && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  5
                </span>
                <h3 className="text-xl font-bold">CNS CONNECTION</h3>
              </div>
              <div className="ml-11 text-lg">{umf.cnsConnection}</div>
            </div>
          )}

          {/* 6. DON'T CONFUSE */}
          {umf.dontConfuse && umf.dontConfuse.length > 0 && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  6
                </span>
                <h3 className="text-xl font-bold">DON'T CONFUSE</h3>
              </div>
              <div className="ml-11 space-y-2">
                {umf.dontConfuse.map((item, idx) => (
                  <div key={idx} className="text-base">{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    {/* One-Sentence Summaries */}
    {(data.examEssentialStructures?.grouped || data.layers) && (
      <div className="bg-yellow-50 border-4 border-yellow-400 rounded-xl p-6">
        <h3 className="font-black text-yellow-900 mb-4 text-2xl text-center">ONE-SENTENCE SUMMARIES</h3>
        <div className="space-y-3 text-lg">
          {/* Bundle of Nerve Fibers - FIRST (from grouped) */}
          {data.examEssentialStructures?.grouped && data.examEssentialStructures.grouped
            .filter(group => !group.parent.toLowerCase().includes('supporting'))
            .map((group, idx) => {
              // Get REAL educational content, not generic fallback
              let quickSummary = group.quickID;
              if (!quickSummary && data.insideTheFascicles) {
                // Search for bundle/nerve fiber description in insideTheFascicles
                const bundleItem = data.insideTheFascicles.find(item => 
                  item.structure?.toLowerCase().includes('bundle') || 
                  item.structure?.toLowerCase().includes('nerve fiber') ||
                  item.structure?.toLowerCase().includes('myelin')
                );
                if (bundleItem) {
                  quickSummary = bundleItem.description;
                } else if (group.appearance) {
                  quickSummary = group.appearance;
                } else if (group.children && group.children.length > 0) {
                  // Last resort: format educationally
                  const childNames = group.children.map(child => 
                    typeof child === 'string' ? child : child?.name || String(child)
                  );
                  quickSummary = `Consists of ${childNames.join(', ')} creating organized nerve fiber bundles`;
                }
              }
              
              return (
                <div key={`grouped-${idx}`} className="flex gap-3">
                  <span className="font-black text-blue-600 min-w-fit">
                    {group.parent.toUpperCase()}:
                  </span>
                  <span>{quickSummary || 'Organized bundles of myelinated nerve fibers'}</span>
                </div>
              );
            })}
          
          {/* Layers - AFTER bundle (endoneurium, perineurium, epineurium) */}
          {data.layers && data.layers.map((layer, idx) => {
            const colors = ['pink', 'orange', 'green', 'blue'];
            return (
              <div key={`layer-${idx}`} className="flex gap-3">
                <span className={`font-black text-${colors[idx % colors.length]}-600 min-w-fit`}>
                  {layer.name.toUpperCase()}:
                </span>
                <span>{layer.quickID}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* 30-Second Drill */}
    <div className="bg-black text-white rounded-xl p-6">
      <h3 className="font-black mb-4 text-2xl text-center">⏱️ 30-SECOND DRILL</h3>
      <div className="space-y-2 font-mono text-sm">
        {/* Bundle of Nerve Fibers - FIRST */}
        {data.examEssentialStructures?.grouped && data.examEssentialStructures.grouped
          .filter(group => !group.parent.toLowerCase().includes('supporting'))
          .map((group, idx) => {
            // Get REAL educational content, not generic fallback
            let answer = group.function;
            if (!answer && data.insideTheFascicles) {
              // Search for bundle/nerve fiber description
              const bundleItem = data.insideTheFascicles.find(item => 
                item.structure?.toLowerCase().includes('bundle') || 
                item.structure?.toLowerCase().includes('nerve fiber') ||
                item.structure?.toLowerCase().includes('axon')
              );
              if (bundleItem) {
                answer = bundleItem.description;
              } else if (group.children && group.children.length > 0) {
                const childNames = group.children.map(child => 
                  typeof child === 'string' ? child : child?.name || String(child)
                );
                answer = `Consists of ${childNames.join(', ')} working together to conduct nerve impulses`;
              }
            }
            
            return (
              <div key={`drill-grouped-${idx}`}>
                <div>Q: What does {group.parent} do?</div>
                <div className="text-blue-400 ml-4 mb-2">A: {answer || 'Conducts electrical nerve impulses through organized myelinated fibers'}</div>
              </div>
            );
          })}
        
        {/* Layers - AFTER bundle */}
        {data.layers && data.layers.map((layer, idx) => (
          <div key={`drill-layer-${idx}`}>
            <div>Q: What does {layer.name} do?</div>
            <div className="text-blue-400 ml-4 mb-2">A: {layer.function}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
const SlideNavigation = ({ currentSlide, onSlideChange, totalSlides = 100 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const slideNum = parseInt(searchQuery);
    if (slideNum >= 1 && slideNum <= totalSlides) {
      onSlideChange(slideNum);
      setSearchQuery('');
      setShowDropdown(false);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 1) {
      onSlideChange(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      onSlideChange(currentSlide + 1);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentSlide <= 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Previous slide"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          {/* Slide Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold text-sm hover:bg-blue-100 transition-colors whitespace-nowrap"
            >
              Slide {currentSlide}
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-48 max-h-64 overflow-y-auto z-50">
                <div className="p-2 border-b border-gray-100 text-xs text-gray-500 font-semibold">
                  Select Slide (1-{totalSlides})
                </div>
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => {
                      onSlideChange(i + 1);
                      setShowDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      currentSlide === i + 1 ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    Slide {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-1">
            <div className="relative flex-1 max-w-xs">
              <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Go to slide #"
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Go
            </button>
          </form>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentSlide >= totalSlides}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Next slide"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  const [currentVersion, setCurrentVersion] = useState('hierarchical');
  const [currentSlideNumber, setCurrentSlideNumber] = useState(70);
  
  // Get current slide data dynamically based on navigation
  const SLIDE_DATA = SLIDES[currentSlideNumber] || SLIDES[70];

  const versions = [
    { 
      id: 'hierarchical', 
      name: 'Hierarchical', 
      icon: <Layers size={20} />,
      component: HierarchicalFormat 
    },
    { 
      id: 'quick', 
      name: 'Quick Cards', 
      icon: <Zap size={20} />,
      component: QuickCardsFormat 
    },
    { 
      id: 'relationship', 
      name: 'Relationships', 
      icon: <Network size={20} />,
      component: RelationshipsFormat 
    },
    { 
      id: 'minimal', 
      name: 'Ultra-Minimal', 
      icon: <Target size={20} />,
      component: UltraMinimalFormat 
    }
  ];

  const CurrentComponent = versions.find(v => v.id === currentVersion)?.component;

  // Handle slide navigation - dynamically loads slide data from SLIDES object
  const handleSlideChange = (slideNum) => {
    if (SLIDES[slideNum]) {
      setCurrentSlideNumber(slideNum);
      console.log(`Navigated to slide ${slideNum}`);
    } else {
      console.warn(`Slide ${slideNum} not available yet`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Bar */}
      <SlideNavigation 
        currentSlide={currentSlideNumber} 
        onSlideChange={handleSlideChange}
        totalSlides={100}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-4xl font-black text-gray-800 mb-2">
            Lara's Histology Study App
          </h1>
          <p className="text-gray-600 text-lg">
  <strong>Slide {SLIDE_DATA.slideNumber}:</strong> {SLIDE_DATA.name}
  {SLIDE_DATA.section && ` - ${SLIDE_DATA.section}`} ({SLIDE_DATA.stain})
</p>
          <p className="text-sm text-gray-500 mt-2">
            4 study formats for different learning needs
          </p>
        </div>

        {/* Version Selector */}
        <VersionSelector 
          currentVersion={currentVersion}
          onVersionChange={setCurrentVersion}
          versions={versions}
        />

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {CurrentComponent ? (
            <ErrorBoundary version={currentVersion}>
              <CurrentComponent data={SLIDE_DATA} />
            </ErrorBoundary>
          ) : (
            <div className="text-red-500">No component found for {currentVersion}</div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-3">📝 STUDY STRATEGY</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold mb-2">Learning Phase:</div>
              <div>1. Start with Hierarchical</div>
              <div>2. Move to Relationships</div>
              <div>3. Practice with Quick Cards</div>
              <div>4. Final review: Ultra-Minimal</div>
            </div>
            <div>
              <div className="font-bold mb-2">Time Management:</div>
              <div>• First study: Hierarchical (30 min)</div>
              <div>• Quick review: Quick Cards (10 min)</div>
              <div>• Before exam: Ultra-Minimal (5 min)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
