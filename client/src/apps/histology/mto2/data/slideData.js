const SLIDE_DATA_01 = {
  slideNumber: "01",
  name: "Fingertip / Sensory Nerve Ending (HE)",
  section: null,
  stain: "HE",
  
  examEssentialStructures: {
    grouped: [{
      parent: "epidermis",
      where: "Outermost layer of skin, forming the surface of the fingertip",
      appearance: "Thick stratified squamous keratinized epithelium with prominent wavy dermal-epidermal junction; appears intensely pink/red with darker basophilic basal layer",
      function: "Primary barrier against mechanical injury, pathogens, and water loss; fingerprint ridges enhance grip and tactile sensitivity",
      quickID: "THICK skin = stratum lucidum PRESENT (bright pink layer between granulosum and corneum)",
      children: [{
        name: "stratified squamous keratinized epithelium",
        description: "Multiple cell layers with progressive keratinization from base to surface",
        relationship: "forms entire epidermis",
        children: [{
          name: "stratum basale (germinativum)",
          description: "Single layer of cuboidal/columnar cells attached to basement membrane via hemidesmosomes; contains stem cells and melanocytes",
          relationship: "deepest layer, germinative zone",
          clinicalNote: "Mitotic figures visible; source of epidermal renewal every 2-4 weeks"
        }, {
          name: "stratum spinosum",
          description: "Several layers of polyhedral keratinocytes with prominent intercellular bridges (desmosomes); appears 'spiny' due to fixation artifact",
          relationship: "above basale, thickest in thick skin"
        }, {
          name: "stratum granulosum",
          description: "3-5 layers of flattened cells with dark basophilic keratohyalin granules; marks transition to dead keratinized cells",
          relationship: "above spinosum",
          clinicalNote: "Lipid-rich layer releases waterproofing barrier"
        }, {
          name: "stratum lucidum",
          description: "Thin clear/bright pink homogeneous layer of flattened dead cells; contains eleidin (lipid-rich protein)",
          relationship: "ONLY in THICK skin (palms/soles)",
          clinicalNote: "Diagnostic feature distinguishing thick from thin skin"
        }, {
          name: "stratum corneum",
          description: "15-20 layers of anucleate, flattened, keratin-filled squames; outermost protective layer",
          relationship: "surface layer, thickest in fingertip",
          clinicalNote: "Continuously desquamating; barrier against pathogens"
        }]
      }]
    }, {
      parent: "dermis",
      where: "Middle layer beneath epidermis, providing structural support and housing glands and nerve endings",
      appearance: "Pink fibrous connective tissue with visible blood vessels, nerve endings, and glandular structures; two distinct sublayers",
      function: "Structural support, vascularization, mechanoreception (Meissner's corpuscles in papillae), thermoregulation via sweat glands",
      quickID: "Look for dermal papillae projecting into epidermis + coiled pink sweat glands",
      children: [{
        name: "stratum papillare (papillary dermis)",
        description: "Loose connective tissue forming finger-like projections (dermal papillae) into epidermis",
        relationship: "superficial dermis layer",
        children: [{
          name: "dermal papillae",
          description: "Finger-like projections of loose CT containing capillary loops and encapsulated nerve endings",
          relationship: "interdigitate with epidermal ridges",
          clinicalNote: "Contains Meissner's corpuscles for light touch; pattern creates fingerprints"
        }]
      }, {
        name: "stratum reticulare (reticular dermis)",
        description: "Dense irregular connective tissue with thick collagen bundles; contains most skin appendages",
        relationship: "deep dermis layer, thicker than papillary",
        children: [{
          name: "merocrine sweat glands (eccrine)",
          description: "Simple coiled tubular glands with secretory and excretory portions",
          relationship: "coiled in reticular dermis, duct opens at surface",
          children: [{
            name: "secretory portion",
            description: "Coiled tubule deep in dermis lined by cuboidal/pyramidal cells; contains clear cells (secrete electrolytes/water) and dark cells (secrete macromolecules); surrounded by myoepithelial cells",
            relationship: "produces sweat",
            clinicalNote: "Thermoregulation via cholinergic innervation"
          }, {
            name: "excretory portion (duct)",
            description: "Stratified cuboidal epithelium (2 layers) appearing darker than secretory portion; spirals through epidermis to open at skin surface",
            relationship: "transports and modifies sweat"
          }]
        }]
      }]
    }, {
      parent: "hypodermis (subcutaneous tissue)",
      where: "Deepest layer beneath dermis, composed mainly of adipose tissue",
      appearance: "Pale/white due to abundant adipocytes; contains scattered connective tissue septa with blood vessels, nerves, and distinctive Pacinian corpuscles",
      function: "Energy storage, insulation, mechanical cushioning, houses deep pressure receptors (Pacinian corpuscles)",
      quickID: "Large white fat cells + ONION-LIKE Pacinian corpuscles are diagnostic",
      children: [{
        name: "Vater-Pacinian corpuscle",
        description: "Large (1-4mm) oval encapsulated mechanoreceptor with distinctive onion-like layered appearance; detects deep pressure and high-frequency vibration",
        relationship: "deep pressure/vibration receptor in hypodermis",
        clinicalNote: "Rapidly adapting - responds to stimulus CHANGES, not sustained pressure",
        children: [{
          name: "capsule (fibrocytes)",
          description: "Outer CT layer continuous with surrounding tissue; fibrocytes maintain capsule structure",
          relationship: "outermost layer of corpuscle"
        }, {
          name: "lamellae (modified Schwann cells)",
          description: "30-60 concentric layers of flattened modified Schwann cells with fluid-filled spaces between; gives characteristic onion appearance in HE",
          relationship: "surround central axon",
          clinicalNote: "NOT myelin - function in mechanotransduction by transmitting pressure deformation"
        }, {
          name: "axon",
          description: "Single unmyelinated nerve fiber in center of corpuscle; terminates as sensory ending",
          relationship: "central core, sensory transduction site"
        }]
      }]
    }],
    layers: [],
    additional: ["adipocytes", "peripheral nerves", "vessels"]
  },
  
  layers: [],
  
  insideTheFascicles: [{
    structure: "Peripheral nerves",
    description: "Bundles of nerve fibers visible as pink fascicles with honeycomb pattern in cross-section; supply sensory and autonomic innervation to skin structures",
    function: "Conduct sensory information (touch, pressure, temperature, pain) to CNS; carry autonomic signals to glands and vessels",
    spotIt: "Look for small pink bundles with characteristic honeycomb pattern in hypodermis near vessels"
  }],
  
  aroundOrOutside: [{
    structure: "Adipocytes",
    description: "Large white/clear circular cells (50-150μm) with peripheral flattened nuclei; signet-ring appearance in HE due to lipid dissolution during processing",
    function: "Energy storage, thermal insulation, mechanical cushioning for underlying structures",
    spotIt: "Much LARGER than myelin spaces; scattered throughout hypodermis with peripheral nuclei"
  }, {
    structure: "Vessels",
    description: "Blood vessels of varying caliber visible in dermis and hypodermis; arteries have thick muscular walls, veins have thinner walls with larger lumens",
    function: "Supply nutrients and oxygen to skin; thermoregulation through vasodilation/vasoconstriction; subpapillary plexus supplies dermal papillae",
    spotIt: "Round/oval structures with clear lumens; may contain RBCs; arteries have thicker pink walls"
  }],
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple (basophilic). Eosin stains cytoplasm and extracellular matrix pink/red (eosinophilic).",
    whatItStainsInThisSlide: [
      "Nuclei (keratinocytes, fibroblasts, gland cells) → Blue/purple",
      "Keratin in stratum corneum → Bright pink/eosinophilic",
      "Collagen in dermis → Pink fibers",
      "Stratum lucidum → Bright pink homogeneous band (eleidin)",
      "Keratohyalin granules (str. granulosum) → Dark basophilic dots",
      "Pacinian corpuscle lamellae → Alternating pink layers",
      "Adipocytes → White spaces (lipid dissolved)",
      "Sweat gland secretory cells → Pale pink cytoplasm"
    ],
    keyEmphasis: "HE highlights the 5-layer epidermal organization. Stratum lucidum (bright pink) confirms THICK skin. Pacinian corpuscle lamellae appear as concentric pink rings."
  },
  
  bigPicture: "Fingertip skin = thick keratinized barrier (5 epidermis layers including stratum lucidum) + dermis with sweat glands + hypodermis housing Pacinian corpuscles for deep pressure/vibration detection",
  
  hierarchy: [
    "Surface → Deep: Epidermis (5 layers) → Dermis (papillary + reticular) → Hypodermis",
    "Epidermal layers: Corneum → Lucidum → Granulosum → Spinosum → Basale (remember: 'Come Let's Get Sun Burned')",
    "Mechanoreceptors: Meissner's (light touch, papillary dermis) vs Pacinian (deep pressure, hypodermis)"
  ],
  
  criticalRelationships: [{
    title: "Thick vs Thin Skin (HIGH-YIELD EXAM!)",
    content: "Fingertip has THICK skin characterized by the presence of stratum lucidum and a much thicker stratum corneum compared to thin skin elsewhere",
    details: [
      "THICK skin: Has stratum lucidum (bright pink band) - ONLY in palms/soles",
      "THICK skin: Stratum corneum is 15-20+ layers vs 3-5 in thin skin",
      "THICK skin: NO hair follicles or sebaceous glands present",
      "THICK skin: More prominent dermal papillae (fingerprint ridges)",
      "Merocrine sweat glands present in BOTH thick and thin skin",
      "Clinical: Thick skin adapted for mechanical stress (grip, weight-bearing)"
    ],
    emphasis: "Stratum lucidum is the DIAGNOSTIC feature of thick skin - if you see it, it's palm or sole!"
  }, {
    title: "Pacinian vs Meissner's Corpuscles (EXAM FAVORITE!)",
    content: "Two major encapsulated mechanoreceptors with different locations, structures, and functions - frequently tested comparison",
    details: [
      "LOCATION: Meissner's in dermal papillae (superficial) vs Pacinian in hypodermis (deep)",
      "SIZE: Meissner's ~80-150μm vs Pacinian ~1-4mm (easily distinguished)",
      "STRUCTURE: Meissner's = Schwann cells perpendicular to epidermis vs Pacinian = 30-60 CONCENTRIC lamellae",
      "FUNCTION: Meissner's = light touch/low vibration vs Pacinian = deep pressure/high vibration",
      "ADAPTATION: Both rapidly adapting but Pacinian responds to stimulus CHANGES",
      "STAINING: Meissner's best seen with silver stain; Pacinian obvious in HE as 'onion bulb'"
    ],
    emphasis: "Location + Size + Structure = KEY to identification. Concentric onion = Pacinian!"
  }, {
    title: "Merocrine Sweat Gland Organization (HIGH-YIELD!)",
    content: "Eccrine sweat glands have distinct secretory and excretory portions with different appearances and functions",
    details: [
      "SECRETORY: Coiled portion in deep dermis; clear cells (water/electrolytes) + dark cells (macromolecules)",
      "EXCRETORY: Stratified cuboidal duct (2 layers) appears DARKER than secretory portion",
      "PATHWAY: Coiled secretory → straight duct → spiral through epidermis → pore at surface",
      "MYOEPITHELIAL cells surround secretory portion (contract to expel sweat)",
      "Function: Thermoregulation via cholinergic innervation (not adrenergic like apocrine)",
      "Clinical: Sweat composition is hypotonic - modified by duct cells reabsorbing NaCl"
    ],
    emphasis: "Secretory = PALE with 2 cell types; Excretory = DARKER with stratified cuboidal epithelium"
  }, {
    title: "Epidermal Layer Functions (HIGH-YIELD!)",
    content: "Each epidermis layer has specific characteristics and functions progressing from stem cells to dead protective barrier",
    details: [
      "Str. BASALE: Single layer, stem cells + melanocytes, mitotic activity, hemidesmosomes to BM",
      "Str. SPINOSUM: Multiple layers, 'spiny' from desmosomes, thickest layer in thick skin",
      "Str. GRANULOSUM: 3-5 layers, basophilic keratohyalin granules, waterproofing barrier",
      "Str. LUCIDUM: Clear/pink band, eleidin protein, ONLY in thick skin (DIAGNOSTIC)",
      "Str. CORNEUM: 15-20+ dead squames, keratin-filled, main physical barrier",
      "Malpighian layer = Basale + Spinosum (germinative zone)"
    ],
    emphasis: "Remember order superficial→deep: Corneum-Lucidum-Granulosum-Spinosum-Basale ('Come Let's Get Sun Burned')"
  }, {
    title: "Pacinian Corpuscle Mechanotransduction (HIGH-YIELD!)",
    content: "Understanding how lamellae function in pressure detection helps identify them histologically and understand their physiology",
    details: [
      "30-60 concentric lamellae of MODIFIED SCHWANN CELLS (not regular Schwann cells)",
      "Lamellae are NOT myelin - they don't insulate, they transmit pressure",
      "Fluid-filled spaces between lamellae allow deformation to reach central axon",
      "Rapidly adapting: fires at stimulus onset and removal, not during sustained pressure",
      "Central axon is unmyelinated sensory terminal - site of mechanotransduction",
      "Clinical: Tests vibration sense (tuning fork) to assess Pacinian function"
    ],
    emphasis: "Lamellae = modified Schwann cells for mechanotransduction, NOT myelin for electrical insulation!"
  }],
  
  relationshipsSummary: [{
    title: "Thick vs Thin Skin (HIGH-YIELD!)",
    summary: "Stratum lucidum = DIAGNOSTIC of thick skin (palms/soles only)",
    keyPoints: [
      "Thick: Lucidum present, no hair, thick corneum",
      "Thin: No lucidum, has hair follicles/sebaceous glands",
      "Both have merocrine sweat glands"
    ]
  }, {
    title: "Meissner's vs Pacinian (EXAM FAVORITE!)",
    summary: "Superficial light touch vs Deep pressure/vibration receptors",
    keyPoints: [
      "Meissner's: Dermal papillae, small, perpendicular cells",
      "Pacinian: Hypodermis, large, concentric onion lamellae",
      "Both rapidly adapting mechanoreceptors"
    ]
  }, {
    title: "Sweat Gland Portions (HIGH-YIELD!)",
    summary: "Secretory (pale, coiled) vs Excretory (dark, stratified cuboidal)",
    keyPoints: [
      "Secretory: Clear + dark cells, myoepithelial cells",
      "Excretory: 2-layer cuboidal, modifies sweat composition",
      "Function: Thermoregulation via cholinergic control"
    ]
  }, {
    title: "Epidermal Layers Mnemonic",
    summary: "'Come Let's Get Sun Burned' = Corneum-Lucidum-Granulosum-Spinosum-Basale",
    keyPoints: [
      "Corneum: Dead squames, main barrier",
      "Lucidum: Thick skin only (eleidin)",
      "Granulosum: Keratohyalin granules (basophilic)"
    ]
  }],
  
  keyIdentifyingFeatures: [
    "THICK SKIN: Presence of stratum lucidum (bright pink homogeneous band) confirms fingertip/palm/sole",
    "PACINIAN CORPUSCLE: Large (~1-4mm) oval structure with 30-60 concentric onion-like pink lamellae in hypodermis",
    "FIVE EPIDERMIS LAYERS: Corneum (thick) → Lucidum (pink band) → Granulosum (dark dots) → Spinosum (spiny) → Basale (single)",
    "DERMAL PAPILLAE: Finger-like projections of papillary dermis interdigitating with epidermis (fingerprint pattern)",
    "MEROCRINE SWEAT GLANDS: Coiled pink tubular structures in deep dermis with darker excretory ducts",
    "ADIPOCYTES: Large white circular cells with peripheral nuclei in hypodermis",
    "NO HAIR FOLLICLES: Absence of hair confirms thick skin (glabrous skin)"
  ],
  
  commonMistakes: [{
    mistake: "Confusing Pacinian corpuscle with coiled sweat glands",
    why: "Both appear as circular layered structures in dermis/hypodermis",
    avoid: "SIZE and ORGANIZATION: Pacinian = LARGE (1-4mm) with PERFECT concentric rings like an onion; Sweat glands = SMALLER with IRREGULAR coiled tubules. Pacinian has geometric perfection!"
  }, {
    mistake: "Missing stratum lucidum or calling thin skin 'thick skin'",
    why: "Lucidum is thin and can be subtle; students may not recognize its significance",
    avoid: "Look for bright pink HOMOGENEOUS band between granulosum (dark dots) and corneum (flaky surface). If present = THICK skin. If absent = THIN skin."
  }, {
    mistake: "Confusing secretory and excretory portions of sweat glands",
    why: "Both are tubular and coiled",
    avoid: "Secretory = PALE cytoplasm, wider lumen, in DEEP dermis; Excretory = DARKER, narrower, 2-layer cuboidal epithelium, spirals to surface"
  }, {
    mistake: "Thinking Pacinian lamellae are myelin",
    why: "Both involve Schwann cells and concentric layering",
    avoid: "Lamellae = MODIFIED Schwann cells for mechanotransduction (pressure sensing), NOT myelin wrapping for electrical insulation. Different function entirely!"
  }, {
    mistake: "Confusing adipocytes with artifact spaces",
    why: "Both appear as white/clear circular spaces",
    avoid: "Adipocytes have PERIPHERAL flattened nuclei (signet-ring), are uniformly sized (~50-150μm), and are in hypodermis. Artifacts are irregular and have no nuclei."
  }]
};
const SLIDE_DATA_02 = {
  slideNumber: "2",
  name: "Hairy Skin (HE)",
  section: null,
  stain: "HE",

  examEssentialStructures: {
    grouped: [{
      parent: "epidermis",
      where: "Outermost layer covering the entire skin surface",
      appearance: "Thin pink-purple layer (~0.1mm) with distinct stratified layers; thinner than thick skin with NO stratum lucidum",
      function: "Protective barrier against mechanical damage, pathogens, and water loss; contains keratinocytes for continuous renewal",
      quickID: "THIN epithelium at surface = thin skin; stratum lucidum ABSENT distinguishes from thick skin",
      children: [
        {
          name: "stratified squamous keratinized epithelium",
          description: "Multiple layers of flattened cells becoming progressively keratinized toward the surface",
          relationship: "forms the entire epidermis",
          children: [
            {
              name: "stratum corneum",
              description: "Superficial layer of dead, anucleate, flat keratinized cells (corneocytes)",
              relationship: "outermost protective layer",
              clinicalNote: "Thinner than in thick skin; sheds continuously"
            },
            {
              name: "stratum granulosum",
              description: "2-3 layers of flattened cells with dark basophilic keratohyalin granules",
              relationship: "transition zone where cells begin dying"
            },
            {
              name: "stratum spinosum",
              description: "Several layers of polyhedral cells connected by desmosomes (spiny appearance)",
              relationship: "provides mechanical strength"
            },
            {
              name: "stratum basale",
              description: "Single layer of columnar/cuboidal cells on basement membrane; mitotically active",
              relationship: "germinal layer producing new keratinocytes",
              clinicalNote: "Contains melanocytes and Merkel cells"
            }
          ]
        }
      ]
    }],
    layers: ["dermis", "hypodermis"],
    additional: ["hair follicle", "sebaceous gland", "arrector pili muscle", "merocrine sweat glands", "adipocytes", "peripheral nerves", "vessels", "nerve endings"]
  },

  layers: [{
    name: "Dermis",
    level: "Middle layer beneath epidermis",
    wraps: "Entire body surface, supporting epidermis and containing appendages",
    appearance: "Pink connective tissue with two distinct zones; contains hair follicles, glands, and vessels",
    composition: "Papillary layer (loose CT) and reticular layer (dense irregular CT) with collagen and elastic fibers",
    contains: "Hair follicles, sebaceous glands, arrector pili muscles, sweat glands, blood vessels, nerves",
    function: "Provides structural support, nutrition to epidermis, sensory perception, and houses skin appendages",
    quickID: "Pink CT layer with visible round/oval hair follicle cross-sections and gland profiles",
    cnsEquivalent: null
  }, {
    name: "Hypodermis",
    level: "Deepest layer (subcutaneous tissue)",
    wraps: "Lies beneath dermis, anchoring skin to underlying structures",
    appearance: "Loose connective tissue with abundant large white circular spaces (adipocytes)",
    composition: "Loose CT with adipose tissue, nerves, and vessels",
    contains: "Adipocytes, peripheral nerves, blood vessels, nerve endings (sensory receptors)",
    function: "Energy storage, thermal insulation, shock absorption, anchors skin to fascia/bone",
    quickID: "Large white empty circles (fat cells) = hypodermis; may see nerve bundles",
    cnsEquivalent: null
  }],

  insideTheFascicles: [{
    structure: "Hair follicle",
    description: "Tubular invagination of epidermis extending into dermis/hypodermis; shows circular/oval profiles with concentric layers (external root sheath, internal root sheath, hair shaft)",
    function: "Produces hair through matrix cell division; provides anchorage for arrector pili muscle and outlet for sebaceous gland",
    keyFeature: "Three segments: bulb (deepest, contains papilla and matrix), isthmus (middle, arrector pili attachment), infundibulum (uppermost, opens to surface)",
    spotIt: "Look for circular structures with concentric rings in dermis; may see hair shaft as darker central structure"
  }, {
    structure: "Sebaceous gland",
    description: "Clusters of pale-staining cells with foamy/vacuolated cytoplasm arranged as acini; peripheral cells are small and basophilic (stem cells)",
    function: "Holocrine secretion of sebum (oily mixture of lipids) that lubricates hair and skin, provides waterproofing and antibacterial properties",
    keyFeature: "Cells transform completely into secretion; opens into hair follicle infundibulum forming pilosebaceous unit",
    spotIt: "Pale grape-like clusters adjacent to hair follicles; cells look 'bubbly' or empty due to lipid extraction"
  }, {
    structure: "Arrector pili muscle",
    description: "Smooth muscle bundle appearing as elongated pink bundles running diagonally from dermis to hair follicle bulge",
    function: "Contracts to erect hair ('goosebumps'), compresses sebaceous gland to aid sebum release, generates minor heat",
    keyFeature: "Attaches to hair bulge region and papillary dermis; smooth muscle cells with elongated nuclei",
    spotIt: "Diagonal pink muscle strips connecting hair follicle to upper dermis"
  }, {
    structure: "Merocrine sweat glands",
    description: "Simple coiled tubular glands with secretory portion (wider, pale-staining with clear and dark cells) and excretory duct (narrower, darker two-layered cuboidal epithelium)",
    function: "Thermoregulation through evaporative cooling; secretes watery sweat containing water, NaCl, urea via exocytosis",
    keyFeature: "Secretory portion has clear cells (water/electrolytes), dark cells (glycoproteins), and myoepithelial cells; duct opens directly to skin surface",
    spotIt: "Coiled tubes in deep dermis; secretory portion larger and paler than darker-staining duct"
  }, {
    structure: "Peripheral nerves",
    description: "Bundles of nerve fibers with characteristic pink rim (perineurium) and internal white spaces (myelin); found in hypodermis",
    function: "Transmit sensory information (touch, pain, temperature) from skin receptors to CNS and motor signals to arrector pili muscles and glands",
    spotIt: "Small bundles with honeycomb pattern (if cross-sectioned) in hypodermis near vessels"
  }, {
    structure: "Vessels",
    description: "Blood vessels of varying caliber; arteries have thick muscular walls, veins have thinner walls with larger lumens; capillaries in papillary dermis",
    function: "Supply nutrients and oxygen to dermis and epidermis (via diffusion); thermoregulation through vasodilation/vasoconstriction",
    spotIt: "Circular or oval profiles with red blood cells inside; wall thickness distinguishes arteries from veins"
  }, {
    structure: "Nerve endings",
    description: "Various sensory receptors including free nerve endings (throughout dermis) and encapsulated receptors (Meissner's in papillae, Pacinian in hypodermis)",
    function: "Detect touch, pressure, pain, temperature, and hair movement; transmit sensory information to CNS",
    keyFeature: "Free endings are most common in thin skin; encapsulated corpuscles less prominent than in thick skin",
    spotIt: "Meissner's corpuscles in dermal papillae (if visible); nerve fiber bundles near hair follicles"
  }],

  aroundOrOutside: [{
    structure: "Adipocytes",
    description: "Large spherical cells (~50-150μm) appearing as empty white circles due to lipid extraction during processing; nucleus pushed to periphery (signet ring appearance)",
    function: "Energy storage as triglycerides, thermal insulation, mechanical cushioning, and endocrine functions",
    spotIt: "LARGE white empty circles in hypodermis; much bigger than any structures in dermis; signet ring nucleus at edge"
  }],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple (basophilic). Eosin stains cytoplasm, collagen, and connective tissue pink/red (eosinophilic).",
    whatItStainsInThisSlide: [
      "Nuclei (all cell types) → Blue/purple",
      "Epidermis → Pink with purple nuclei in basal layers",
      "Dermis (collagen) → Pink",
      "Hair follicles → Concentric pink/purple layers",
      "Sebaceous glands → Pale/foamy (lipids dissolved)",
      "Smooth muscle (arrector pili) → Pink",
      "Adipocytes → WHITE (lipids removed)",
      "Sweat glands → Pink secretory cells, darker duct cells"
    ],
    keyEmphasis: "HE shows skin organization well. Key identifiers: thin epidermis (NO stratum lucidum), hair follicles with sebaceous glands, adipocytes in hypodermis."
  },

  bigPicture: "Hairy skin (thin skin) = body's main covering with hair follicles, sebaceous glands, and thin epidermis WITHOUT stratum lucidum!",

  hierarchy: [
    "Surface → Epidermis → Dermis → Hypodermis",
    "Thin skin: ~0.1mm epidermis, NO stratum lucidum",
    "Hair apparatus: Follicle + Sebaceous gland + Arrector pili = Pilosebaceous unit"
  ],

  criticalRelationships: [{
    title: "Thin vs Thick Skin (EXAM FAVORITE!)",
    content: "The KEY distinction for slide identification - hairy skin LACKS stratum lucidum and has hair follicles",
    details: [
      "THIN SKIN: epidermis ~0.1mm, 4 layers (NO stratum lucidum)",
      "THICK SKIN: epidermis ~0.5mm, 5 layers (HAS stratum lucidum)",
      "THIN SKIN: HAS hair follicles, sebaceous glands, arrector pili",
      "THICK SKIN: LACKS hair follicles, sebaceous glands, arrector pili",
      "THIN SKIN: fewer sweat glands",
      "THICK SKIN: abundant sweat glands, prominent dermal papillae"
    ],
    emphasis: "NO stratum lucidum + hair follicles = THIN/HAIRY SKIN. This is the #1 identification point!"
  }, {
    title: "Pilosebaceous Unit (HIGH-YIELD!)",
    content: "Hair follicle + sebaceous gland + arrector pili muscle form a functional unit",
    details: [
      "Hair follicle: three segments (bulb → isthmus → infundibulum)",
      "Sebaceous gland: opens into infundibulum via short duct",
      "Arrector pili: attaches at bulge (between bulb and isthmus)",
      "Muscle contraction → erects hair AND squeezes sebum out",
      "Sebaceous gland uses HOLOCRINE secretion (entire cell becomes product)"
    ],
    emphasis: "Understanding this unit explains goosebumps and oily skin!"
  }, {
    title: "Three Segments of Hair Follicle (HIGH-YIELD!)",
    content: "From deep to superficial: bulb (growth zone) → isthmus (muscle attachment) → infundibulum (gland opening)",
    details: [
      "BULB: deepest, contains dermal papilla (vascular CT) and hair matrix (dividing cells)",
      "Bulge: stem cell reservoir, arrector pili attachment point",
      "ISTHMUS: between arrector pili insertion and sebaceous opening",
      "INFUNDIBULUM: from sebaceous opening to skin surface",
      "Matrix cells + melanocytes → produce pigmented hair shaft"
    ],
    emphasis: "Bulge contains stem cells - critical for hair regeneration after injury!"
  }, {
    title: "Gland Types in Hairy Skin (HIGH-YIELD!)",
    content: "Sebaceous (holocrine) and merocrine sweat glands have different secretion mechanisms and locations",
    details: [
      "SEBACEOUS: holocrine (whole cell becomes sebum), opens into hair follicle",
      "MEROCRINE/ECCRINE: exocytosis, opens directly onto skin surface via pore",
      "Sebaceous: pale/foamy cells due to lipid content",
      "Sweat gland: clear cells (water) + dark cells (proteins) + myoepithelial cells",
      "Sweat duct: stratified cuboidal epithelium, darker staining than secretory portion"
    ],
    emphasis: "Secretion mechanism: Holocrine = cell death, Merocrine = exocytosis!"
  }, {
    title: "Dermis Organization (HIGH-YIELD!)",
    content: "Two distinct layers with different connective tissue types and contents",
    details: [
      "PAPILLARY layer: loose CT, dermal papillae, capillary loops, Meissner's corpuscles",
      "RETICULAR layer: dense irregular CT, hair follicles, glands, arrector pili",
      "Boundary between layers often indistinct in sections",
      "Hair follicles may extend into hypodermis (especially terminal hairs)",
      "Blood vessel plexuses at papillary-reticular junction and dermo-hypodermal junction"
    ],
    emphasis: "Hair follicle roots are found in RETICULAR dermis or hypodermis!"
  }],

  relationshipsSummary: [{
    title: "Thin vs Thick Skin ID (EXAM FAVORITE!)",
    summary: "Thin skin = NO stratum lucidum + HAS hair follicles; opposite for thick skin",
    keyPoints: [
      "Look for hair follicle profiles in dermis",
      "Check if epidermis has 4 or 5 layers",
      "Sebaceous glands confirm thin skin"
    ]
  }, {
    title: "Pilosebaceous Unit (HIGH-YIELD!)",
    summary: "Hair follicle + sebaceous gland + arrector pili = functional unit for hair and sebum",
    keyPoints: [
      "Sebaceous opens into infundibulum",
      "Arrector pili attaches at bulge",
      "Muscle contraction erects hair + releases sebum"
    ]
  }, {
    title: "Sweat Gland Identification (HIGH-YIELD!)",
    summary: "Merocrine glands: coiled tubes in deep dermis with secretory portion (wide) and duct (narrow)",
    keyPoints: [
      "Secretory: clear + dark cells + myoepithelial",
      "Duct: darker, two-layered cuboidal epithelium",
      "Opens directly to skin surface (NOT to follicle)"
    ]
  }],

  keyIdentifyingFeatures: [
    "THIN epidermis with ABSENT stratum lucidum = thin/hairy skin",
    "Hair follicle profiles: circular structures with concentric layers in dermis",
    "Sebaceous glands: pale, foamy cell clusters attached to hair follicles",
    "Arrector pili: diagonal smooth muscle bands near hair follicles",
    "Large white adipocytes in hypodermis",
    "Coiled merocrine sweat glands in deep dermis"
  ],

  commonMistakes: [{
    mistake: "Confusing thin skin with thick skin",
    why: "Both have stratified squamous keratinized epithelium",
    avoid: "Check for stratum lucidum (thick only) and hair follicles (thin only)"
  }, {
    mistake: "Confusing sebaceous glands with adipocytes",
    why: "Both appear as pale/empty spaces",
    avoid: "Sebaceous: smaller, grape-like clusters near follicles; Adipocytes: LARGE single cells in hypodermis with signet ring nucleus"
  }, {
    mistake: "Missing the arrector pili muscle",
    why: "Smooth muscle can blend with surrounding CT",
    avoid: "Look for diagonal pink bands running from hair follicle toward papillary dermis"
  }, {
    mistake: "Confusing sweat gland types",
    why: "Both can appear as coiled tubular structures",
    avoid: "Merocrine (eccrine): opens to surface, smaller lumen, in dermis. Apocrine: opens to follicle, larger lumen, axilla/groin only"
  }],

  mnemonics: [
    "THIN skin: 'T-H-I-N' = Thin epidermis, Hair follicles, Integumentary glands (sebaceous), No stratum lucidum",
    "Hair follicle segments (deep to superficial): 'BII' = Bulb → Isthmus → Infundibulum",
    "Pilosebaceous unit: 'HAM' = Hair follicle + Arrector pili + (oil gland) Makes sebum",
    "Sebaceous secretion: 'Whole HOG' = HOLocrine = whole cell dies"
  ],

  clinicalCorrelations: [
    "Alopecia: hair follicle dysfunction or destruction leads to hair loss",
    "Acne: sebaceous gland hyperactivity + follicular obstruction + bacterial infection",
    "Goosebumps: arrector pili contraction in response to cold or emotional stimuli",
    "Hyperhidrosis: excessive sweat gland activity",
    "Seborrheic dermatitis: inflammatory condition involving sebaceous glands"
  ]
};
const SLIDE_DATA_03 = {
  slideNumber: "3",
  name: "Palpebra (HE)",
  section: null,
  stain: "HE",

  examEssentialStructures: {
    grouped: [
      {
        parent: "cutaneous part",
        where: "Anterior (outer) surface of the eyelid facing externally",
        appearance: "Thin skin with small hair follicles, sebaceous glands, and sweat glands; thinnest skin in the body",
        function: "Protective covering with sensory and thermoregulatory functions; contains specialized eyelid margin structures",
        quickID: "Look for the outer surface with hair follicles and keratinized epithelium",
        children: [
          {
            name: "stratified squamous keratinized epithelium",
            description: "Thin keratinized epidermis covering the outer eyelid surface; thinnest skin in the body",
            relationship: "surface lining of cutaneous part"
          },
          {
            name: "hair follicles",
            description: "Small follicles with fine vellus hairs scattered across the eyelid skin",
            relationship: "embedded in dermis"
          },
          {
            name: "sebaceous glands",
            description: "Small oil-secreting glands associated with hair follicles; holocrine secretion",
            relationship: "opens into hair follicle"
          },
          {
            name: "merocrine sweat glands",
            description: "Eccrine sweat glands for thermoregulation; simple coiled tubular glands",
            relationship: "in dermis, opens to surface"
          },
          {
            name: "limbus anterior",
            description: "Anterior free margin of eyelid containing specialized structures",
            relationship: "anterior edge of eyelid margin",
            children: [
              {
                name: "cilium (eyelash)",
                description: "Large modified hairs at anterior margin; lack arrector pili muscles; protective function",
                relationship: "at anterior palpebral margin",
                clinicalNote: "Blepharitis - inflammation at eyelash base"
              },
              {
                name: "glandulae sebaceae (glands of Zeiss)",
                description: "Ordinary sebaceous glands attached to eyelash follicles; holocrine secretion prevents brittle lashes",
                relationship: "opens into eyelash follicle",
                clinicalNote: "External hordeolum (stye) - infected Zeiss gland"
              },
              {
                name: "glandulae ciliares (glands of Moll)",
                description: "Modified apocrine sweat glands at eyelash base; wide lumen, simple coiled tubules, viscous secretion",
                relationship: "near eyelash follicles",
                clinicalNote: "Can form cysts (Moll's cyst) when obstructed"
              }
            ]
          },
          {
            name: "limbus posterior",
            description: "Posterior edge of free margin where Meibomian gland openings are located",
            relationship: "posterior edge of eyelid margin"
          }
        ]
      },
      {
        parent: "conjunctival part",
        where: "Posterior (inner) surface of the eyelid facing the eyeball",
        appearance: "Smooth, moist surface with non-keratinized epithelium; transitions to columnar epithelium at fornix",
        function: "Lines the inner eyelid, produces mucin via goblet cells, contains accessory lacrimal glands for tear film",
        quickID: "Inner surface with moist, non-keratinized epithelium and goblet cells",
        children: [
          {
            name: "stratified squamous non-keratinized epithelium",
            description: "Covers posterior eyelid surface close to palpebral margin; moist surface without keratin layer",
            relationship: "lines palpebral conjunctiva"
          },
          {
            name: "fornix conjunctivae",
            description: "Reflection point where palpebral conjunctiva meets bulbar conjunctiva; contains goblet cells",
            relationship: "junction between palpebral and bulbar conjunctiva",
            children: [
              {
                name: "stratified columnar epithelium",
                description: "Found in fornix region; contains goblet cells that secrete mucin for tear film inner layer",
                relationship: "epithelium at fornix",
                clinicalNote: "Goblet cell loss leads to dry eye syndrome"
              }
            ]
          },
          {
            name: "accessory lacrimal glands (glands of Krause)",
            description: "Small serous tubuloalveolar glands near superior conjunctival fornix; ~42 in upper, 6-8 in lower fornix",
            relationship: "in lamina propria near fornix",
            clinicalNote: "Produce aqueous component of tear film; supplement main lacrimal gland"
          }
        ]
      }
    ],
    layers: ["tarsal plate", "skeletal muscle tissue"],
    additional: ["tarsal glands (Meibomian glands)", "orbicularis oculi muscle", "levator palpebrae superioris muscle", "blood vessels"]
  },

  layers: [
    {
      name: "Tarsal Plate",
      level: "Central structural layer",
      wraps: "Provides rigid framework for the eyelid",
      appearance: "Dense fibro-elastic plate appearing as thick pink band in center of eyelid; contains elongated glands",
      composition: "Dense regular connective tissue with elastic fibers",
      contains: "Tarsal (Meibomian) glands embedded within; anchors tarsal muscles",
      function: "Provides structural support and shape to eyelid; houses Meibomian glands",
      quickID: "Dense pink plate in center with embedded elongated glands (Meibomian)"
    },
    {
      name: "Skeletal Muscle Tissue",
      level: "Between cutaneous part and tarsal plate",
      wraps: "Encircles the eye (orbicularis) and extends to upper lid (levator)",
      appearance: "Striated muscle fibers with peripheral nuclei; fascicles oriented parallel to eyelid",
      composition: "Striated voluntary muscle with satellite cells",
      contains: "Orbicularis oculi (closes eyelid), Levator palpebrae superioris (opens upper lid)",
      function: "Voluntary eyelid movement - opening, closing, and blinking; aids tear distribution",
      quickID: "Look for striated muscle fibers between skin and tarsal plate"
    }
  ],

  insideTheFascicles: [
    {
      structure: "Tarsal glands (Meibomian glands)",
      description: "Elongated holocrine glands embedded within tarsal plate; 20-25 large sebaceous glands with multiple acini draining into long central duct",
      function: "Produce meibum (lipid-rich oily secretion) that forms outer layer of tear film; prevents tear evaporation and lubricates eyelid movement",
      keyFeature: "Modified sebaceous glands that open directly at posterior lid margin (not into hair follicles)",
      spotIt: "Look for elongated gland profiles within the dense tarsal plate; multiple acini visible"
    }
  ],

  aroundOrOutside: [
    {
      structure: "Orbicularis oculi muscle",
      description: "Circular striated muscle surrounding the eye; lies beneath skin of eyelid",
      function: "Closes eyelids; assists in pumping tears through nasolacrimal duct system",
      spotIt: "Striated muscle fibers in circular arrangement beneath skin layer"
    },
    {
      structure: "Levator palpebrae superioris muscle",
      description: "Striated muscle in upper eyelid only; extends from orbital apex to tarsal plate",
      function: "Elevates (opens) the upper eyelid; innervated by CN III (oculomotor)",
      spotIt: "Only in upper eyelid; muscle fibers inserting into tarsal plate"
    },
    {
      structure: "Blood vessels",
      description: "Arteries and veins in loose connective tissue between muscle layers and in conjunctival stroma",
      function: "Vascular supply to eyelid structures; rich anastomotic network",
      spotIt: "Round or oval profiles with RBCs in loose CT areas"
    }
  ],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple. Eosin stains cytoplasm, collagen, and muscle pink/red.",
    whatItStainsInThisSlide: [
      "Nuclei (epithelial cells, muscle, fibroblasts) → Blue/purple",
      "Keratinized epithelium → Intensely pink outer layer",
      "Skeletal muscle fibers → Pink with visible striations",
      "Tarsal plate (dense CT) → Deep pink/red",
      "Meibomian gland acini → Pale/foamy (lipid content partially dissolved)",
      "Conjunctival epithelium → Lighter pink (non-keratinized)"
    ],
    keyEmphasis: "HE shows the layered sandwich architecture: skin → muscle → tarsal plate → conjunctiva. Meibomian glands appear pale within the dense tarsal plate."
  },

  bigPicture: "The eyelid (palpebra) is a 4-layer sandwich protecting the eye: cutaneous part (skin with specialized glands) → muscle layer → tarsal plate (with Meibomian glands) → conjunctival part (mucous membrane). Multiple gland types work together to maintain the tear film!",

  hierarchy: [
    "ANTERIOR → POSTERIOR",
    "Cutaneous (skin) → Muscle → Tarsal Plate → Conjunctiva",
    "4 GLAND TYPES: Zeiss (sebaceous) + Moll (apocrine) + Meibomian (holocrine) + Krause (serous)"
  ],

  criticalRelationships: [
    {
      title: "Tear Film Layers & Gland Sources (EXAM FAVORITE!)",
      content: "Three-layer tear film requires secretions from multiple glands - critical for understanding dry eye pathology",
      details: [
        "LIPID LAYER (outer): Meibomian glands + Glands of Zeiss → prevents evaporation",
        "AQUEOUS LAYER (middle): Main lacrimal gland + Glands of Krause & Wolfring",
        "MUCIN LAYER (inner): Goblet cells in conjunctival epithelium → anchors tear film",
        "Meibomian gland dysfunction = most common cause of dry eye",
        "Krause glands: ~42 upper fornix, 6-8 lower fornix"
      ],
      emphasis: "Each gland type contributes to a specific tear film layer - know which gland makes what!"
    },
    {
      title: "Eyelid Margin Glands - Location Matters (HIGH-YIELD!)",
      content: "Anterior vs posterior margin glands have different structures and clinical significance",
      details: [
        "ANTERIOR MARGIN: Glands of Zeiss (sebaceous → oil), Glands of Moll (apocrine → sweat)",
        "POSTERIOR MARGIN: Meibomian glands open here (12-30 per lid)",
        "Zeiss = ordinary sebaceous, opens INTO eyelash follicle",
        "Meibomian = modified sebaceous, opens DIRECTLY to surface (not via follicle)",
        "External stye (hordeolum) = infected Zeiss gland",
        "Internal stye = infected Meibomian gland"
      ],
      emphasis: "Zeiss opens into follicle, Meibomian opens directly - this explains infection patterns!"
    },
    {
      title: "Conjunctival Epithelium Transition (HIGH-YIELD!)",
      content: "Epithelium type changes based on location - essential for understanding conjunctival pathology",
      details: [
        "Near palpebral margin: Stratified squamous NON-KERATINIZED",
        "At fornix: Stratified COLUMNAR with goblet cells",
        "Bulbar conjunctiva: Returns to stratified squamous non-keratinized",
        "Goblet cells produce mucin (MUC5AC) for tear film adherence",
        "Conjunctivitis = inflammation of this membrane (pink eye)"
      ],
      emphasis: "Columnar epithelium with goblet cells appears at fornix - site of mucin production!"
    },
    {
      title: "Muscle Actions - Which Opens, Which Closes? (HIGH-YIELD!)",
      content: "Two striated muscles control eyelid movement with different innervation",
      details: [
        "ORBICULARIS OCULI: Encircles eye, CLOSES lids, CN VII (facial nerve)",
        "LEVATOR PALPEBRAE: Upper lid only, OPENS lid, CN III (oculomotor)",
        "Tarsal muscle (Müller's): Smooth muscle, sympathetic innervation, maintains lid tone",
        "Bell's palsy (CN VII) → cannot close eye → corneal damage risk",
        "CN III palsy → ptosis (drooping upper lid)"
      ],
      emphasis: "Orbicularis = close (VII), Levator = open (III) - nerve damage causes opposite deficits!"
    },
    {
      title: "Gland Secretion Types - Know Your Mechanisms (HIGH-YIELD!)",
      content: "Different secretion mechanisms for each gland type in the eyelid",
      details: [
        "HOLOCRINE (cell destruction): Meibomian glands, Glands of Zeiss (sebaceous types)",
        "APOCRINE (apical pinching): Glands of Moll → viscous secretion",
        "MEROCRINE (exocytosis): Glands of Krause → watery aqueous secretion",
        "Meibomian = produces MEIBUM (oily lipid mixture)",
        "Holocrine glands have stem cells at base to replace destroyed cells"
      ],
      emphasis: "Holocrine = sebaceous glands destroy themselves; Merocrine = watery secretion via exocytosis"
    }
  ],

  relationshipsSummary: [
    {
      title: "4-Layer Architecture (HIGH-YIELD!)",
      summary: "Eyelid = skin → muscle → tarsal plate → conjunctiva sandwich",
      keyPoints: [
        "Cutaneous: thinnest skin, specialized margin glands",
        "Muscle: orbicularis (close) + levator (open)",
        "Tarsal plate: dense CT housing Meibomian glands",
        "Conjunctival: non-keratinized → columnar at fornix"
      ]
    },
    {
      title: "Tear Film Gland Sources (EXAM FAVORITE!)",
      summary: "Multiple glands produce each tear film layer - know the source!",
      keyPoints: [
        "Lipid: Meibomian + Zeiss glands",
        "Aqueous: Lacrimal + Krause glands",
        "Mucin: Goblet cells at fornix"
      ]
    },
    {
      title: "Margin Gland Comparison (HIGH-YIELD!)",
      summary: "Anterior margin has Zeiss+Moll; posterior has Meibomian openings",
      keyPoints: [
        "Zeiss: sebaceous, into follicle",
        "Moll: apocrine, near follicle",
        "Meibomian: modified sebaceous, direct opening"
      ]
    }
  ],

  keyIdentifyingFeatures: [
    "4-layer sandwich: skin → muscle → tarsal plate → conjunctiva",
    "Meibomian glands = elongated pale structures within dense tarsal plate",
    "Eyelashes (cilia) at anterior margin - no arrector pili muscles",
    "Conjunctival epithelium changes: squamous → columnar with goblet cells at fornix",
    "Striated muscle fibers between skin and tarsal plate",
    "Glands of Krause near superior fornix (look like small serous acini)"
  ],

  commonMistakes: [
    {
      mistake: "Confusing Meibomian glands with regular sebaceous glands",
      why: "Both are holocrine/sebaceous type",
      avoid: "Meibomian are MODIFIED sebaceous - open DIRECTLY to surface, not into follicle; located within tarsal plate"
    },
    {
      mistake: "Mixing up Zeiss vs Moll glands",
      why: "Both located at eyelash base",
      avoid: "Zeiss = sebaceous (holocrine, into follicle); Moll = apocrine sweat gland (wide lumen, coiled)"
    },
    {
      mistake: "Thinking conjunctival epithelium is keratinized",
      why: "It faces externally during blinking",
      avoid: "Conjunctiva is NON-keratinized - must stay moist for eye contact; only cutaneous part is keratinized"
    },
    {
      mistake: "Forgetting which muscle opens vs closes the eyelid",
      why: "Two muscles with opposite functions",
      avoid: "Orbicularis OCULI = closes (encircles); Levator PALPEBRAE = opens (levator = lifts)"
    },
    {
      mistake: "Confusing Krause with Meibomian glands",
      why: "Both in eyelid, both contribute to tears",
      avoid: "Krause = SEROUS (aqueous layer, at fornix); Meibomian = SEBACEOUS/holocrine (lipid layer, in tarsal plate)"
    }
  ],

  teachingPoints: [
    "The eyelid contains 4 distinct gland types each contributing to the tear film",
    "Meibomian gland dysfunction is the most common cause of evaporative dry eye",
    "Goblet cells in fornix epithelium are critical for tear film stability",
    "External stye = infected Zeiss; Internal stye = infected Meibomian",
    "Eyelashes lack arrector pili muscles - they don't stand up when cold!"
  ],

  clinicalCorrelations: [
    {
      condition: "Meibomian Gland Dysfunction (MGD)",
      description: "Most common cause of dry eye; gland obstruction leads to unstable tear film",
      histologicalBasis: "Meibomian glands produce lipid layer that prevents tear evaporation"
    },
    {
      condition: "Hordeolum (Stye)",
      description: "External = infected Zeiss/Moll gland; Internal = infected Meibomian gland",
      histologicalBasis: "Bacterial infection of eyelid margin glands causes localized abscess"
    },
    {
      condition: "Chalazion",
      description: "Chronic granulomatous inflammation of blocked Meibomian gland",
      histologicalBasis: "Lipogranuloma forms when meibum leaks into surrounding tissue"
    },
    {
      condition: "Ptosis",
      description: "Drooping upper eyelid from levator muscle weakness or CN III palsy",
      histologicalBasis: "Levator palpebrae superioris muscle dysfunction prevents lid elevation"
    },
    {
      condition: "Bell's Palsy",
      description: "CN VII damage prevents eye closure; risk of corneal exposure",
      histologicalBasis: "Orbicularis oculi paralysis from facial nerve dysfunction"
    }
  ]
};
const SLIDE_DATA_4 = {
  slideNumber: "4",
  name: "Mammary Gland - Resting (HE)",
  section: null,
  stain: "HE",

  examEssentialStructures: {
    grouped: [{
      parent: "dense irregular connective tissue",
      where: "Throughout interlobular spaces and surrounding duct system",
      appearance: "Dense pink staining fibrous tissue with prominent wavy collagen bundles and scattered dark nuclei",
      function: "Provides structural support, separates lobules, maintains gland architecture during inactive state",
      quickID: "Look for thick pink fibrous bands surrounding adipose tissue and lobules",
      children: [
        {
          name: "collagen fibers",
          description: "Wavy pink eosinophilic bundles arranged in interlacing patterns",
          relationship: "main structural component of interlobular CT",
          clinicalNote: "Amount increases with age as glandular tissue regresses"
        },
        {
          name: "fibrocytes",
          description: "Elongated cells with flattened dark nuclei scattered between collagen bundles",
          relationship: "produce and maintain collagen matrix",
          clinicalNote: "Quiescent form of fibroblasts in resting tissue"
        }
      ]
    }, {
      parent: "lobules",
      where: "Scattered throughout gland parenchyma, embedded in dense connective tissue",
      appearance: "Small clusters of tubular structures surrounded by loose intralobular CT, appearing sparse compared to lactating gland",
      function: "Contain the rudimentary secretory units that will develop during pregnancy; basic functional units of mammary gland",
      quickID: "Look for small pale clusters of tubules within dense pink CT - NOT filled with alveoli like lactating gland",
      children: [
        {
          name: "duct system",
          description: "Small tubules lined by cuboidal or low columnar epithelium representing undeveloped secretory portions",
          relationship: "forms the framework for future alveolar development",
          children: [
            {
              name: "intralobular ducts",
              description: "Small ducts within lobules lined by simple cuboidal epithelium",
              relationship: "collect from terminal ductules"
            },
            {
              name: "interlobular ducts",
              description: "Larger ducts between lobules lined by stratified cuboidal epithelium",
              relationship: "drain multiple lobules toward lactiferous ducts"
            }
          ]
        },
        {
          name: "rudimentary alveoli",
          description: "Undeveloped, non-functional secretory units appearing as small tubular structures with minimal lumen",
          relationship: "precursors to functional alveoli during lactation",
          clinicalNote: "Will proliferate dramatically during pregnancy under hormonal stimulation (estrogen, progesterone, prolactin)"
        }
      ]
    }],
    layers: [],
    additional: ["adipose tissue", "excretory duct system (lactiferous ducts)"]
  },

  insideTheFascicles: [{
    structure: "Intralobular connective tissue",
    description: "Loose cellular connective tissue within lobules surrounding duct system; contains fibroblasts, small blood vessels",
    function: "Provides microenvironment for duct system; will become infiltrated with plasma cells and lymphocytes during lactation",
    spotIt: "Pale loose CT within lobule clusters - much less cellular than surrounding dense interlobular CT"
  }],

  aroundOrOutside: [{
    structure: "adipose tissue",
    description: "Large white circular empty spaces (signet ring appearance) filling interlobular spaces; adipocyte nuclei pushed to periphery",
    function: "Energy storage, cushioning, contributes to breast shape and size; amount varies with nutritional status and age",
    spotIt: "Large white empty circles much bigger than any duct lumens; DOMINANT feature of resting mammary gland"
  }, {
    structure: "excretory duct system (lactiferous ducts)",
    description: "Larger ducts with wider lumens lined by stratified cuboidal to stratified squamous epithelium (near nipple)",
    function: "Transport system for milk secretion; remain patent but empty in resting state",
    spotIt: "Larger ducts with obvious lumens and thicker epithelium compared to small intralobular ducts"
  }],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple. Eosin stains cytoplasm and collagen pink/red.",
    whatItStainsInThisSlide: [
      "Collagen fibers → Pink (eosinophilic)",
      "Fibrocyte/fibroblast nuclei → Blue/purple",
      "Epithelial cells of ducts → Pink cytoplasm, blue nuclei",
      "Adipocytes → WHITE (lipid dissolved during processing)",
      "Dense CT → Darker pink due to compact collagen"
    ],
    keyEmphasis: "HE shows abundant pink dense CT and white adipose tissue with sparse glandular elements - diagnostic of RESTING state"
  },

  bigPicture: "Resting mammary gland = inactive tubuloalveolar gland dominated by adipose tissue and dense CT with minimal glandular elements (ducts without functional alveoli)",

  hierarchy: [
    "Breast → Lobes (15-20) → Lobules → Duct system",
    "↓ Dense irregular CT between lobules",
    "↓ Adipose tissue fills interlobular spaces"
  ],

  criticalRelationships: [{
    title: "Resting vs Lactating Comparison (HIGH-YIELD EXAM!)",
    content: "The key to identifying resting mammary gland is the ABUNDANCE of adipose tissue and CT with MINIMAL glandular elements",
    details: [
      "RESTING: Abundant adipose tissue, dense CT dominates",
      "RESTING: Lobules small with only duct system (no alveoli)",
      "RESTING: No milk secretion visible in lumens",
      "LACTATING: Reduced adipose, expanded alveoli dominant",
      "LACTATING: Lumens filled with secretion (pink material)",
      "LACTATING: Plasma cells and lymphocytes in stroma"
    ],
    emphasis: "If you see mostly fat and CT with small tubular clusters = RESTING. If you see expanded alveoli filled with secretion = LACTATING"
  }, {
    title: "Duct System Epithelium (MEMORIZE!)",
    content: "The epithelium changes as you move from small ducts toward the nipple",
    details: [
      "Smallest ducts (intralobular) → Simple cuboidal epithelium",
      "Larger ducts (interlobular) → Stratified cuboidal epithelium",
      "Lactiferous sinuses → Stratified cuboidal epithelium",
      "Lactiferous ducts (near nipple) → Stratified squamous epithelium",
      "Pattern: Simple → Stratified as ducts get larger"
    ],
    emphasis: "This epithelial transition pattern is commonly tested!"
  }, {
    title: "Connective Tissue Organization (HIGH-YIELD!)",
    content: "Two distinct types of CT are present in the mammary gland",
    details: [
      "INTRALOBULAR CT: Loose, cellular, surrounds ducts within lobules",
      "INTERLOBULAR CT: Dense, fibrous, separates lobules",
      "Interlobular spaces also contain abundant adipose tissue",
      "CT provides structural framework and blood supply",
      "Amount of CT increases in resting vs lactating state"
    ],
    emphasis: "Dense CT + Adipose = RESTING. Reduced CT with expanded glands = LACTATING"
  }, {
    title: "Tubuloalveolar Gland Classification (UNDERSTAND!)",
    content: "The mammary gland is a compound tubuloalveolar gland - modified apocrine sweat gland",
    details: [
      "15-20 lobes, each with own lactiferous duct opening at nipple",
      "Tubuloalveolar = has both tubular ducts AND alveolar secretory units",
      "Compound = branching duct system (not simple)",
      "Apocrine origin = derived from epidermis like sweat glands",
      "Secretion will be apocrine (lipid) + merocrine (protein) when active"
    ],
    emphasis: "Know the gland classification - this distinguishes mammary from other glands on exams!"
  }],

  relationshipsSummary: [{
    title: "Resting vs Lactating (EXAM CRITICAL!)",
    summary: "Resting = fat & CT dominant, minimal glands; Lactating = alveoli dominant with secretion",
    keyPoints: [
      "RESTING: White adipose + pink dense CT + sparse tubules",
      "LACTATING: Expanded alveoli filled with pink secretion",
      "Look at CT:gland ratio to identify state"
    ]
  }, {
    title: "Epithelial Transition Pattern",
    summary: "Simple cuboidal → Stratified cuboidal → Stratified squamous from lobule to nipple",
    keyPoints: [
      "Small ducts = simple cuboidal",
      "Large ducts = stratified cuboidal",
      "Lactiferous ducts = stratified squamous"
    ]
  }, {
    title: "CT Types in Mammary Gland",
    summary: "Intralobular (loose) within lobules; Interlobular (dense) between lobules with adipose",
    keyPoints: [
      "Loose CT supports duct system within lobules",
      "Dense CT + adipose fills space between lobules",
      "CT dominates in resting state"
    ]
  }],

  keyIdentifyingFeatures: [
    "Abundant white adipose tissue = DIAGNOSTIC of resting state",
    "Dense pink connective tissue surrounding small lobule clusters",
    "Small tubular structures (ducts) without expanded alveoli",
    "No visible secretion in duct lumens",
    "Lobules appear sparse and small compared to surrounding CT/fat"
  ],

  commonMistakes: [{
    mistake: "Confusing resting with lactating mammary gland",
    why: "Both have lobules and duct systems",
    avoid: "Check for ADIPOSE DOMINANCE (resting) vs ALVEOLAR DOMINANCE (lactating). Resting has fat everywhere; lactating has expanded glands with secretion"
  }, {
    mistake: "Mistaking adipocytes for secretory alveoli",
    why: "Both appear as white/clear circular structures",
    avoid: "Adipocytes are MUCH larger, have peripheral nuclei, and are in interlobular spaces. Alveoli would be smaller, clustered in lobules, lined by epithelium"
  }, {
    mistake: "Not recognizing the duct epithelium transitions",
    why: "Different duct sizes have different epithelium",
    avoid: "Remember: Simple cuboidal (small) → Stratified cuboidal (large) → Stratified squamous (near nipple)"
  }],

  functionalCorrelation: {
    overview: "The resting mammary gland represents the non-functional state between puberty and pregnancy, or after weaning",
    keyPoints: [
      "Gland is inactive - no milk production",
      "Structure dominated by supportive tissue (CT, adipose)",
      "Glandular elements are minimal - only duct framework present",
      "Rudimentary alveoli are undeveloped precursors",
      "Will undergo dramatic transformation during pregnancy"
    ]
  },

  hormonalRegulation: {
    overview: "The mammary gland state is controlled by hormonal balance",
    resting: [
      "Low prolactin - no stimulation of secretion",
      "Baseline estrogen maintains duct system",
      "No progesterone surge - no alveolar development"
    ],
    activation: [
      "Pregnancy: Estrogen + Progesterone → duct branching & alveolar proliferation",
      "Lactation: Prolactin → milk production",
      "Milk ejection: Oxytocin → myoepithelial cell contraction"
    ]
  },

  clinicalCorrelations: [{
    condition: "Fibrocystic changes",
    description: "Common benign breast changes with increased fibrous tissue and cyst formation",
    histologicalFeature: "Exaggerated CT changes, dilated ducts forming cysts"
  }, {
    condition: "Age-related involution",
    description: "Post-menopausal regression of mammary gland",
    histologicalFeature: "Further increase in adipose and CT with atrophy of remaining glandular elements"
  }]
};
const SLIDE_DATA_05 = {
  slideNumber: "5",
  name: "Mammary Gland - Lactating (HE)",
  section: null,
  stain: "HE",

  examEssentialStructures: {
    grouped: [{
      parent: "lobules",
      where: "Throughout the breast parenchyma, organized into 15-20 lobes, each with multiple lobules",
      appearance: "Grape-like clusters of pink secretory alveoli with visible lumens containing eosinophilic milk secretion; lobules appear expanded and filled with glandular tissue",
      function: "Functional units of milk production; each lobule contains multiple alveoli that synthesize and secrete milk components",
      quickID: "Look for expanded clusters of round/oval glandular structures with visible secretion in lumens - dominant feature in lactating gland",
      children: [
        {
          name: "glands - alveoli",
          description: "Round to oval secretory units lined by cuboidal/columnar epithelium with basally located nuclei and eosinophilic cytoplasm containing lipid droplets",
          relationship: "secretory units within lobules",
          children: [
            {
              name: "secretory epithelial cells",
              description: "Cuboidal to low columnar cells with apical cytoplasm containing lipid droplets of various sizes; nuclei round and basally located",
              relationship: "lining cells of alveoli",
              clinicalNote: "Produce milk via dual secretion: merocrine (proteins) and apocrine (lipids)"
            },
            {
              name: "myoepithelial cells",
              description: "Stellate/basket-shaped cells located between secretory cells and basement membrane; nuclei flattened and oriented along alveolar periphery",
              relationship: "contractile cells surrounding alveoli",
              clinicalNote: "Contract in response to oxytocin to eject milk - essential for milk let-down reflex"
            },
            {
              name: "alveolar lumen",
              description: "Central space filled with eosinophilic secretion containing visible lipid droplets of varying sizes",
              relationship: "milk storage space within alveoli"
            }
          ]
        }
      ]
    }],
    layers: ["connective tissue septa", "excretory duct system"],
    additional: ["adipose tissue", "plasma cells", "blood vessels"]
  },

  layers: [{
    name: "Connective Tissue Septa",
    level: "Interlobular supporting framework",
    wraps: "Individual lobules and groups of alveoli, separating glandular nests",
    appearance: "Thin pink fibrous bands between lobules; significantly reduced compared to resting gland as glandular tissue predominates",
    composition: "Compacted collagen fibers forming septal walls; vascularized loose CT within lobules (intralobular stroma)",
    contains: "Blood vessels, lymphatics, lymphocytes, plasma cells (IgA-producing), nerve fibers",
    function: "Provides structural support while allowing flexibility for expanded alveoli; delivers blood supply and immune cells to glandular tissue",
    quickID: "Look for thin pink bands between clusters of alveoli - much thinner than in resting gland"
  }, {
    name: "Excretory Duct System (Lactiferous Ducts)",
    level: "Hierarchical transport network from alveoli to nipple",
    wraps: "Collects milk from alveoli → terminal ducts → intralobular ducts → interlobular ducts → lactiferous ducts",
    appearance: "Dilated ducts with visible lumens containing milk; epithelium varies from simple cuboidal (small ducts) to stratified cuboidal (larger ducts) to stratified squamous (near nipple)",
    composition: "Terminal ducts: simple cuboidal epithelium; Interlobular ducts: stratified cuboidal/columnar; Lactiferous sinuses: stratified cuboidal; Lactiferous ducts at nipple: stratified squamous",
    contains: "Milk secretion in dilated lumens; myoepithelial cells in smaller ducts",
    function: "Transport and temporary storage of milk; lactiferous sinuses beneath areola serve as milk reservoirs before ejection",
    quickID: "Larger tubular structures with wider lumens than alveoli; stratified epithelium in larger ducts distinguishes from secretory alveoli"
  }],

  insideTheFascicles: [{
    structure: "Plasma Cells",
    description: "Oval cells with eccentric 'clock-face' nuclei scattered in intralobular stroma; basophilic cytoplasm with perinuclear hof (clear Golgi area)",
    function: "Produce secretory IgA antibodies that are transcytosed into milk, providing passive immunity to the newborn",
    spotIt: "Look for cells with eccentric dark nuclei and basophilic cytoplasm in loose CT between alveoli"
  }, {
    structure: "Blood Vessels",
    description: "Abundant capillaries and venules in intralobular stroma; arterioles in interlobular septa with visible RBCs in lumens",
    function: "Rich blood supply provides nutrients and substrates for milk synthesis; also delivers hormones (prolactin, oxytocin) to secretory cells",
    spotIt: "Pink-walled vessels with RBCs (small red discs) in their lumens"
  }],

  aroundOrOutside: [{
    structure: "Adipose Tissue",
    description: "Large white/clear circular spaces with thin cell membrane rim and peripherally displaced flat nucleus; significantly REDUCED in lactating gland compared to resting state",
    function: "Energy storage and cushioning; adipose tissue is largely replaced by proliferating glandular tissue during lactation",
    spotIt: "Large empty-appearing circular cells (lipid dissolved in processing) - much less prominent than in resting mammary gland; look in peripheral areas between lobes"
  }],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple. Eosin stains cytoplasm, collagen, and secretions pink/red. Lipids are dissolved during processing leaving clear spaces.",
    whatItStainsInThisSlide: [
      "Nuclei (secretory cells, myoepithelial cells, stromal cells) → Blue/purple",
      "Cytoplasm of secretory cells → Pink/eosinophilic",
      "Collagen in septa → Pink",
      "Milk secretion in lumens → Pale pink/eosinophilic",
      "Lipid droplets → WHITE/clear (lipids dissolved)",
      "Adipocytes → WHITE (lipid content removed)"
    ],
    keyEmphasis: "HE shows expanded lobules filled with secretory alveoli. Pink secretion in lumens and variable-sized clear lipid droplets in secretory cells are characteristic of active lactation."
  },

  bigPicture: "Lactating mammary gland = expanded alveoli filled with milk, organized in lobules separated by reduced CT septa, connected by dilated duct system - the complete milk production factory!",

  hierarchy: [
    "Alveoli → Lobules → Lobes → Whole Gland",
    "Secretory cells + Myoepithelial cells = Alveolar unit",
    "Terminal duct → Intralobular → Interlobular → Lactiferous duct → Nipple"
  ],

  criticalRelationships: [{
    title: "Resting vs Lactating: The Dramatic Transformation (HIGH-YIELD!)",
    content: "Understanding the structural differences between states is essential for identification",
    details: [
      "RESTING: Abundant adipose tissue + dense CT, rudimentary alveoli, minimal secretion",
      "LACTATING: Expanded alveoli fill lobules, greatly reduced adipose + CT",
      "RESTING: Ducts without functional acini dominate",
      "LACTATING: Fully developed secretory alveoli with wide lumens dominate",
      "KEY CHANGE: Glandular parenchyma replaces stromal tissue",
      "SEPTA: Dense collagen → thin septal walls separating glandular nests"
    ],
    emphasis: "If you see mostly adipose tissue = RESTING. If you see expanded alveoli with secretion = LACTATING!"
  }, {
    title: "Dual Secretion Mechanism - Milk Production (EXAM FAVORITE!)",
    content: "Milk components are secreted by two distinct mechanisms from the same cells",
    details: [
      "MEROCRINE (exocytosis): Proteins (caseins, lactalbumin, lactoferrin), lactose",
      "APOCRINE (membrane-wrapped): Lipid droplets enveloped by plasma membrane",
      "Proteins: Synthesized in rER → packaged in Golgi → exocytosis at apical surface",
      "Lipids: Cytoplasmic droplets grow → pushed to apex → pinched off with membrane",
      "RESULT: Milk = proteins + lipids + lactose + IgA antibodies + water + minerals",
      "Both mechanisms occur simultaneously in active secretory cells"
    ],
    emphasis: "Know BOTH mechanisms - proteins via merocrine exocytosis, lipids via apocrine release!"
  }, {
    title: "Myoepithelial Cells and Oxytocin Reflex (HIGH-YIELD!)",
    content: "The milk ejection reflex requires neuroendocrine coordination",
    details: [
      "LOCATION: Myoepithelial cells between secretory epithelium and basement membrane",
      "STRUCTURE: Stellate/basket-like network around alveoli",
      "STIMULUS: Suckling → sensory signals to hypothalamus",
      "HORMONE: Oxytocin released from posterior pituitary",
      "ACTION: Oxytocin causes myoepithelial cell contraction",
      "RESULT: Milk squeezed from alveoli into duct system → ejection"
    ],
    emphasis: "Suckling → Hypothalamus → Oxytocin → Myoepithelial contraction → Milk ejection!"
  }, {
    title: "Immune Protection Through Milk - IgA Transfer (HIGH-YIELD!)",
    content: "Breast milk provides passive immunity to the newborn",
    details: [
      "PLASMA CELLS: Abundant in intralobular stroma during lactation",
      "IgA PRODUCTION: Plasma cells synthesize secretory IgA (sIgA)",
      "TRANSPORT: IgA transcytosed across epithelial cells into milk",
      "COLOSTRUM: First milk especially rich in antibodies",
      "PROTECTION: sIgA protects infant's gut lumen from pathogens",
      "Also contains: lactoferrin (antimicrobial), growth factors"
    ],
    emphasis: "Plasma cells in stroma → IgA in milk → passive immunity for newborn!"
  }, {
    title: "Duct System Epithelial Transitions (EXAM FAVORITE!)",
    content: "Epithelium changes along the length of the duct system",
    details: [
      "ALVEOLI & TERMINAL DUCTS: Simple cuboidal epithelium",
      "INTRALOBULAR DUCTS: 1-2 layers of cuboidal cells",
      "INTERLOBULAR DUCTS: Stratified cuboidal/columnar epithelium",
      "LACTIFEROUS SINUSES: Stratified cuboidal epithelium (milk reservoir)",
      "LACTIFEROUS DUCTS at nipple: Stratified squamous epithelium",
      "TRANSITION: Simple → stratified as ducts approach surface"
    ],
    emphasis: "Know the epithelial progression from secretory to excretory portions!"
  }],

  relationshipsSummary: [{
    title: "Resting vs Lactating Identification (HIGH-YIELD!)",
    summary: "Lactating gland shows expanded alveoli with secretion replacing the adipose-dominant resting state",
    keyPoints: [
      "Lactating: Alveoli filled with milk, reduced adipose/CT",
      "Resting: Dense CT + abundant adipose, rudimentary alveoli",
      "Lobules expanded in lactation, compressed in resting",
      "Look for secretion in lumens = actively lactating"
    ]
  }, {
    title: "Dual Secretion Mechanism (EXAM CRITICAL!)",
    summary: "Milk produced by merocrine (proteins) + apocrine (lipids) secretion from same cells",
    keyPoints: [
      "Proteins released by exocytosis (merocrine)",
      "Lipids pinched off with membrane (apocrine)",
      "Both mechanisms essential for complete milk",
      "Visible lipid droplets in cytoplasm on HE"
    ]
  }, {
    title: "Milk Ejection Reflex (HIGH-YIELD!)",
    summary: "Suckling triggers oxytocin release causing myoepithelial contraction and milk let-down",
    keyPoints: [
      "Suckling → hypothalamus → oxytocin release",
      "Myoepithelial cells contract around alveoli",
      "Milk ejected into duct system",
      "Neuroendocrine reflex essential for breastfeeding"
    ]
  }],

  keyIdentifyingFeatures: [
    "Expanded lobules filled with grape-like clusters of secretory alveoli",
    "Alveolar lumens containing eosinophilic milk secretion",
    "Variable-sized clear lipid droplets in secretory cell cytoplasm",
    "Cuboidal/columnar epithelium lining alveoli with basally located nuclei",
    "Thin connective tissue septa between lobules (much reduced vs resting)",
    "Significantly reduced adipose tissue compared to resting gland",
    "Dilated ducts with milk content",
    "Plasma cells in intralobular stroma (clock-face nuclei)"
  ],

  commonMistakes: [{
    mistake: "Confusing resting and lactating mammary gland",
    why: "Both contain lobules and ducts",
    avoid: "LACTATING: Expanded alveoli with secretion, reduced CT/adipose. RESTING: Adipose-dominant, dense CT, rudimentary alveoli without secretion. Look for milk in lumens!"
  }, {
    mistake: "Confusing alveoli with ducts",
    why: "Both are tubular/round structures",
    avoid: "ALVEOLI: Smaller, round, thin simple epithelium, secretion in lumen. DUCTS: Larger, thicker stratified epithelium in bigger ducts, transport pathway"
  }, {
    mistake: "Not recognizing lipid droplets",
    why: "They appear as empty spaces after processing",
    avoid: "Clear/white circular spaces WITHIN cells = lipid droplets. Much smaller than adipocytes. Look for variable sizes within secretory cell cytoplasm"
  }, {
    mistake: "Missing myoepithelial cells",
    why: "Flattened cells easily overlooked",
    avoid: "Look for flattened nuclei at the BASE of alveoli, between secretory cells and basement membrane. Stellate shape forms basket around alveolus"
  }]
};
const SLIDE_DATA_6 = {
  slideNumber: "6",
  name: "Axillary Skin (HE)",
  section: null,
  stain: "HE",
  
  examEssentialStructures: {
    grouped: [{
      parent: "epidermis",
      where: "Outermost layer covering the skin surface",
      appearance: "Thin stratified squamous keratinized epithelium; thinner than thick skin with only 4 layers (stratum lucidum absent)",
      function: "Protective barrier against pathogens, physical injury, and water loss; continuous renewal from basal layer",
      quickID: "Look for thin pink keratinized surface layer; thinner than palms/soles, no stratum lucidum",
      children: [
        {
          name: "stratum corneum",
          description: "Outermost layer of dead, flattened keratinized cells (squames); thinner than in thick skin",
          relationship: "OUTERMOST protective layer"
        },
        {
          name: "stratum granulosum",
          description: "3-5 layers of flattened cells with basophilic keratohyalin granules; cells undergoing keratinization",
          relationship: "BELOW corneum"
        },
        {
          name: "stratum spinosum",
          description: "Several layers of polyhedral keratinocytes connected by desmosomes; spiny appearance in histology",
          relationship: "MIDDLE layer"
        },
        {
          name: "stratum basale",
          description: "Single layer of cuboidal/columnar cells on basement membrane; stem cells for continuous renewal",
          relationship: "DEEPEST layer",
          clinicalNote: "High mitotic activity; melanocytes present for pigmentation"
        }
      ]
    }, {
      parent: "dermis",
      where: "Middle layer beneath epidermis; thicker in axillary skin to support extensive glandular tissue",
      appearance: "Pink connective tissue with two zones - lighter papillary layer with dermal papillae and darker reticular layer with dense collagen bundles",
      function: "Structural support, vascular supply, houses glands, hair follicles, and nerve endings",
      quickID: "Thick pink CT layer with abundant glands; look for hair follicles, sebaceous glands, and both types of sweat glands",
      children: [
        {
          name: "stratum papillare",
          description: "Superficial loose connective tissue with thin collagen and elastin fibers forming finger-like dermal papillae",
          relationship: "UPPER dermis layer",
          children: [
            {
              name: "dermal papillae",
              description: "Finger-like projections extending into epidermis containing capillary loops for nutrition"
            }
          ]
        },
        {
          name: "stratum reticulare",
          description: "Deep dense irregular connective tissue with thick collagen bundles providing strength",
          relationship: "LOWER dermis layer",
          children: [
            {
              name: "hair follicle",
              description: "Terminal hair follicles producing coarse axillary hair; tubular invagination of epidermis into dermis",
              relationship: "EMBEDDED in dermis",
              children: [
                {
                  name: "hair bulb",
                  description: "Terminal swelling at base containing dermal papilla (vascularized CT) and hair matrix (mitotic keratinocytes/melanocytes)"
                },
                {
                  name: "isthmus",
                  description: "Segment between arrector pili muscle insertion and sebaceous gland opening"
                },
                {
                  name: "infundibulum",
                  description: "Uppermost portion from sebaceous gland opening to skin surface; contains follicular lumen"
                }
              ]
            },
            {
              name: "sebaceous gland",
              description: "Oil-secreting holocrine glands appearing as clusters of polygonal cells with vacuolated cytoplasm (lipid content)",
              relationship: "ASSOCIATED with hair follicles",
              clinicalNote: "More active in axillary skin; entire cell disintegrates to release sebum into infundibulum"
            },
            {
              name: "merocrine sweat glands",
              description: "Simple coiled tubular glands with small lumens; secretory portion deep in dermis with clear and dark cells",
              relationship: "SCATTERED in dermis",
              children: [
                {
                  name: "secretory portion",
                  description: "Coiled tubules with cuboidal/pyramidal cells (clear cells produce electrolytes/water; dark cells produce macromolecules)"
                },
                {
                  name: "excretory duct",
                  description: "Two layers of cuboidal epithelium opening directly onto skin surface"
                }
              ]
            },
            {
              name: "apocrine sweat glands",
              description: "Large coiled tubular glands with wide lumens; CHARACTERISTIC of axillary skin; lined by cuboidal to columnar eosinophilic cells with myoepithelial cells at base",
              relationship: "KEY FEATURE of axillary skin",
              clinicalNote: "Develop in hair follicle areas; ducts empty into hair follicles; become functional at puberty under sex hormone control; protein-rich secretion decomposed by bacteria produces body odor (pheromones)",
              children: [
                {
                  name: "secretory portion",
                  description: "Single layer of secretory cells with myoepithelial cells; coiled tubuloalveolar with sac-shaped outpockets"
                },
                {
                  name: "excretory duct",
                  description: "Simple cuboidal epithelium; opens into hair follicle above sebaceous duct"
                },
                {
                  name: "myoepithelial cells",
                  description: "Contractile cells surrounding secretory portion; contract under adrenaline to expel secretion"
                }
              ]
            }
          ]
        }
      ]
    }],
    layers: ["epidermis", "dermis", "hypodermis"],
    additional: ["adipose tissue", "vessels", "peripheral nerves"]
  },
  
  layers: [{
    name: "Epidermis",
    level: "Outermost layer (Level 1)",
    wraps: "Entire body surface",
    appearance: "Thin stratified squamous keratinized epithelium appearing as thin pink band at surface with 4 distinct sublayers (stratum lucidum absent in thin skin)",
    composition: "Four layers from deep to superficial: stratum basale (single mitotic layer attached by hemidesmosomes), stratum spinosum (polyhedral spiny cells with desmosomes), stratum granulosum (3-5 layers with keratohyalin granules), stratum corneum (dead keratinized cells)",
    contains: "Keratinocytes, melanocytes, Langerhans cells, Merkel cells",
    function: "Primary protective barrier against pathogens, chemicals, physical injury, and water loss; continuous renewal every 15-30 days",
    quickID: "Thin pink keratinized surface; thinner than thick skin (palms/soles); no stratum lucidum present",
    cnsEquivalent: null
  }, {
    name: "Dermis",
    level: "Middle layer (Level 2)",
    wraps: "Underlies entire epidermis",
    appearance: "Thick pink connective tissue layer with two distinct zones; thicker in axillary skin to accommodate extensive glandular tissue and terminal hair follicles",
    composition: "Stratum papillare (loose CT with dermal papillae containing capillary loops) and stratum reticulare (dense irregular CT with thick collagen bundles, hair follicles, and glands)",
    contains: "Hair follicles (terminal type), sebaceous glands (more active), merocrine sweat glands, apocrine sweat glands (CHARACTERISTIC), blood vessels, lymphatics, nerve endings",
    function: "Structural support, thermoregulation, sensory perception, housing for glands producing sebum, sweat, and pheromones",
    quickID: "Look for abundant glandular tissue - identify apocrine glands by their WIDE lumens and association with hair follicles; compare to smaller merocrine glands",
    cnsEquivalent: null
  }, {
    name: "Hypodermis",
    level: "Deepest layer (Level 3)",
    wraps: "Connects skin to underlying muscles and bones",
    appearance: "Loose connective tissue dominated by large white adipocytes appearing as empty spaces (lipid dissolved in processing)",
    composition: "Loose connective tissue (superficial fascia) with abundant adipose tissue, collagen fibers, and fibrocytes",
    contains: "Adipocytes, peripheral nerves, blood vessels, lymphatics, deep portions of hair follicles",
    function: "Energy storage, thermal insulation, mechanical cushioning, anchoring skin to underlying structures",
    quickID: "Large white empty spaces (adipocytes) below dermis; peripheral nerves visible as small pink bundles with wavy fibers",
    cnsEquivalent: null
  }],
  
  insideTheFascicles: [{
    structure: "Peripheral nerves",
    description: "Small bundles of nerve fibers visible as pink wavy structures in hypodermis and deep dermis; may show honeycomb pattern in cross-section",
    function: "Sensory innervation for touch, pressure, temperature, and pain; autonomic innervation for glands and blood vessels",
    spotIt: "Look for small pink bundles with wavy appearance in hypodermis; may contain visible fascicles"
  }],
  
  aroundOrOutside: [{
    structure: "Adipose tissue",
    description: "Large white circular/polygonal spaces representing adipocytes with peripheral nuclei; lipid content dissolved during histological processing leaving empty appearance",
    function: "Energy storage as triglycerides, thermal insulation, mechanical cushioning and protection",
    spotIt: "Large empty white spaces in hypodermis; much larger than merocrine gland lumens; cells appear as 'signet rings' with flattened peripheral nuclei"
  }, {
    structure: "Vessels",
    description: "Arteries appear as round structures with thick muscular walls and small lumens; veins have thinner walls and larger lumens; capillaries are small thin-walled structures",
    function: "Blood supply for nutrition and thermoregulation; subpapillary plexus supplies dermal papillae",
    spotIt: "Look for round/oval structures with distinct walls in dermis and hypodermis; arteries have thicker walls than veins"
  }],
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple (basophilic structures). Eosin stains cytoplasm and collagen pink/red (eosinophilic structures).",
    whatItStainsInThisSlide: [
      "Nuclei (all cells) → Blue/purple",
      "Keratinocyte cytoplasm → Pink",
      "Collagen fibers (dermis) → Pink",
      "Sebaceous gland cells → Pale with vacuolated cytoplasm",
      "Merocrine glands → Pink with clear and dark cells visible",
      "Apocrine glands → Eosinophilic cells with WIDE lumens",
      "Adipocytes → WHITE (lipids dissolved), thin rim of cytoplasm",
      "Muscle (arrector pili) → Dark pink"
    ],
    keyEmphasis: "HE reveals the unique glandular composition of axillary skin. Look for APOCRINE glands with wide lumens associated with hair follicles - this is the DIAGNOSTIC feature distinguishing axillary skin from regular thin skin."
  },
  
  bigPicture: "Axillary skin = specialized thin skin with THREE gland types: apocrine sweat glands (pheromone production, puberty activation), sebaceous glands (more active), and merocrine sweat glands (thermoregulation) - all associated with terminal hair follicles!",
  
  hierarchy: [
    "Surface → Epidermis → Dermis → Hypodermis",
    "       4 layers       Papillare + Reticulare      Adipose tissue",
    "                   GLANDS: Apocrine + Merocrine + Sebaceous"
  ],
  
  criticalRelationships: [{
    title: "APOCRINE vs MEROCRINE Glands (EXAM CRITICAL!)",
    content: "Both sweat gland types are present in axillary skin but differ significantly in size, secretion, and function",
    details: [
      "APOCRINE: Wide lumens, associated with hair follicles, ducts open into follicle",
      "APOCRINE: Cuboidal to columnar eosinophilic cells; protein-rich secretion",
      "APOCRINE: Functional only after puberty (sex hormone dependent); produces pheromones",
      "MEROCRINE: Small lumens, open directly onto skin surface",
      "MEROCRINE: Clear cells (water/electrolytes) + Dark cells (macromolecules)",
      "MEROCRINE: Functional from birth; thermoregulation via cholinergic innervation"
    ],
    emphasis: "LUMEN SIZE is the key differentiator - apocrine glands have MUCH wider lumens than merocrine glands!"
  }, {
    title: "Axillary Skin vs Regular Thin Skin (HIGH-YIELD!)",
    content: "Axillary skin is a specialized form of thin skin with unique features",
    details: [
      "AXILLARY: High density of apocrine glands (absent in most thin skin)",
      "AXILLARY: Terminal hair follicles (coarse hair vs vellus hair)",
      "AXILLARY: More active sebaceous glands",
      "AXILLARY: Slightly thicker epidermis due to friction",
      "AXILLARY: Thicker dermis supporting extensive glandular tissue",
      "REGULAR THIN: Primarily vellus hair, fewer/no apocrine glands"
    ],
    emphasis: "The presence of APOCRINE sweat glands is the DIAGNOSTIC feature of axillary skin!"
  }, {
    title: "Gland-Hair Follicle Relationship (EXAM FAVORITE!)",
    content: "All three gland types in axillary skin are intimately associated with hair follicles",
    details: [
      "SEBACEOUS: Develops from external root sheath; opens into infundibulum",
      "APOCRINE: Found in hair-rich areas; duct empties INTO hair follicle",
      "MEROCRINE: Independent of follicle; opens directly onto skin surface",
      "Hair follicle segments: Bulb (matrix + papilla) → Isthmus → Infundibulum",
      "Arrector pili muscle: Attaches to bulge region, contracts for goosebumps"
    ],
    emphasis: "Know which glands connect to follicles vs open directly to surface - commonly tested!"
  }, {
    title: "Secretion Mechanisms Comparison (HIGH-YIELD!)",
    content: "Each gland type uses a different mechanism for releasing secretory products",
    details: [
      "APOCRINE: Modified secretion - part of apical cytoplasm pinches off (though actually merocrine-like exocytosis)",
      "MEROCRINE/ECCRINE: Exocytosis - secretory granules released by membrane fusion",
      "HOLOCRINE (Sebaceous): Entire cell disintegrates to release sebum",
      "Myoepithelial cells: Present in both sweat gland types; contract to expel secretion"
    ],
    emphasis: "Sebaceous = holocrine (cell death), Sweat glands = modified/merocrine mechanisms!"
  }, {
    title: "Body Odor and Pheromone Production",
    content: "Apocrine glands produce the secretions responsible for body odor and potential pheromone signaling",
    details: [
      "Apocrine secretion is initially ODORLESS",
      "Bacterial decomposition on skin surface creates characteristic smell",
      "Contains proteins, lipids, and steroids (potential pheromones)",
      "Becomes active at PUBERTY under sex hormone control",
      "Controlled by ADRENERGIC (sympathetic) innervation - responds to emotion/stress",
      "Clinical: Axillary microbiome contributes to body odor variation"
    ]
  }],
  
  relationshipsSummary: [{
    title: "Apocrine vs Merocrine Glands (EXAM CRITICAL!)",
    summary: "Apocrine = wide lumen, opens into hair follicle, puberty activation; Merocrine = small lumen, opens to surface",
    keyPoints: [
      "LUMEN SIZE is key differentiator",
      "Apocrine: sex hormone dependent, pheromones",
      "Merocrine: thermoregulation, cholinergic"
    ]
  }, {
    title: "Axillary Skin = Specialized Thin Skin",
    summary: "Distinguished by high density of apocrine glands, terminal hair follicles, and active sebaceous glands",
    keyPoints: [
      "Apocrine glands DIAGNOSTIC feature",
      "Terminal hair (coarse) vs vellus hair",
      "Thicker dermis supports glands"
    ]
  }, {
    title: "Three Secretion Mechanisms (HIGH-YIELD!)",
    summary: "Holocrine (sebaceous), modified apocrine (apocrine glands), merocrine (eccrine glands)",
    keyPoints: [
      "Holocrine: entire cell disintegrates",
      "Apocrine: cytoplasm pinches off",
      "Merocrine: exocytosis (granule release)"
    ]
  }],
  
  keyIdentifyingFeatures: [
    "Thin epidermis (4 layers, no stratum lucidum) = thin skin type",
    "APOCRINE sweat glands with wide lumens associated with hair follicles",
    "Terminal hair follicles (coarse hair) with sebaceous glands",
    "Merocrine sweat glands with smaller lumens opening to surface",
    "Thick dermis supporting extensive glandular tissue",
    "Adipose tissue in hypodermis"
  ],
  
  commonMistakes: [{
    mistake: "Confusing apocrine and merocrine sweat glands",
    why: "Both are tubular glands present in same slide",
    avoid: "Check LUMEN SIZE (apocrine = wide, merocrine = small) and OPENING (apocrine opens into hair follicle, merocrine opens directly to skin surface)"
  }, {
    mistake: "Mistaking sebaceous gland cells for adipocytes",
    why: "Both have vacuolated/clear cytoplasm",
    avoid: "Sebaceous glands are IN DERMIS associated with hair follicles; adipocytes are in HYPODERMIS and much larger with peripheral flattened nuclei"
  }, {
    mistake: "Thinking stratum lucidum should be present",
    why: "Axillary skin is thin skin type",
    avoid: "Stratum lucidum is ONLY in thick skin (palms and soles); axillary skin has only 4 epidermal layers"
  }, {
    mistake: "Forgetting apocrine glands become active at puberty",
    why: "Both sweat gland types present from development",
    avoid: "Merocrine glands functional from birth for thermoregulation; APOCRINE glands require sex hormone activation at puberty"
  }]
};
const SLIDE_DATA_7 = {
  slideNumber: "7",
  name: "Eye (HE)",
  section: null,
  stain: "HE",

  examEssentialStructures: {
    grouped: [
      {
        parent: "Fibrous Layer / Tunica Fibrosa",
        where: "Outermost coat of the eyeball, comprising anterior 1/6 (cornea) and posterior 5/6 (sclera)",
        appearance: "Cornea is transparent with layered structure; sclera is opaque white with dense pink collagen in HE",
        function: "Maintains eye shape, protects internal structures; cornea focuses and transmits light while sclera provides structural support",
        quickID: "Cornea = clear anterior dome with 5 distinct layers; Sclera = white opaque outer shell",
        children: [
          {
            name: "Cornea",
            description: "Transparent anterior 1/6 of eye, avascular, 5-layered structure",
            relationship: "anterior transparent portion of fibrous tunic",
            clinicalNote: "Avascularity allows corneal transplantation with low rejection risk",
            children: [
              {
                name: "Corneal epithelium",
                description: "Stratified squamous non-keratinized epithelium, ~5 cell layers thick (~50 μm)",
                relationship: "outermost layer of cornea",
                clinicalNote: "Remarkable regenerative capacity; turnover time ~7 days"
              },
              {
                name: "Bowman's membrane",
                description: "Homogenous acellular layer (~8-10 μm) of randomly oriented collagen fibrils",
                relationship: "anterior limiting lamina beneath epithelium",
                clinicalNote: "Does NOT regenerate if damaged; injury leads to loss of transparency"
              },
              {
                name: "Substantia propria",
                description: "Thickest layer (90% of corneal thickness) composed of precisely organized collagen lamellae",
                children: [
                  {
                    name: "Highly regular dense connective tissue",
                    description: "60 lamellae of parallel collagen fibrils arranged at right angles to adjacent layers"
                  },
                  {
                    name: "Keratocytes",
                    description: "Flattened fibroblast-like cells between collagen lamellae that maintain stromal matrix"
                  }
                ]
              },
              {
                name: "Descemet's membrane",
                description: "Thick (~10 μm) PAS-positive basement membrane, acidophilic",
                relationship: "posterior limiting lamina",
                clinicalNote: "Readily regenerates after injury; thickens with age"
              },
              {
                name: "Corneal endothelium",
                description: "Single layer of simple squamous epithelium facing anterior chamber",
                relationship: "innermost layer of cornea",
                clinicalNote: "Maintains corneal transparency by regulating stromal hydration; damage causes edema"
              }
            ]
          },
          {
            name: "Sclera",
            description: "Opaque white posterior 5/6 of fibrous tunic, dense irregular CT",
            relationship: "posterior protective portion of fibrous tunic",
            children: [
              {
                name: "Collagen fibers",
                description: "Dense irregular arrangement providing mechanical strength"
              },
              {
                name: "Fibrocytes",
                description: "Scattered elongated cells maintaining collagen matrix"
              },
              {
                name: "Melanocytes",
                description: "Pigmented cells, especially in deeper layers; more prominent in darker individuals"
              }
            ]
          },
          {
            name: "Corneo-scleral junction",
            description: "Transition zone (corneal limbus) where transparent cornea meets opaque sclera",
            children: [
              {
                name: "Canal of Schlemm",
                description: "Circular venous channel lined by endothelium at iridocorneal angle",
                relationship: "drains aqueous humor from trabecular meshwork",
                clinicalNote: "Blockage leads to increased intraocular pressure and glaucoma"
              }
            ]
          }
        ]
      },
      {
        parent: "Vascular Layer / Tunica Vascularis",
        where: "Middle coat (uvea) between fibrous layer and retina, highly vascularized",
        appearance: "Dark brown/pigmented due to melanocytes; rich vascular network visible in HE",
        function: "Provides blood supply and nutrients to retina, controls light entry, produces aqueous humor, enables accommodation",
        quickID: "Pigmented middle layer; iris = colored diaphragm; ciliary body = folded tissue at lens edge",
        children: [
          {
            name: "Choroid",
            description: "Posterior pigmented loose CT layer between sclera and retina",
            relationship: "posterior 5/6 of vascular layer",
            clinicalNote: "Accounts for 90% of ocular blood flow; nourishes outer retina"
          },
          {
            name: "Ciliary body",
            description: "Thickened anterior ring-shaped portion extending from ora serrata to iris root",
            children: [
              {
                name: "Ciliary processes",
                description: "75 radial folds (plicae ciliares) with double-layered epithelium",
                relationship: "finger-like projections producing aqueous humor",
                clinicalNote: "Site of aqueous humor secretion; maintains intraocular pressure"
              },
              {
                name: "Ciliary muscle",
                description: "Smooth muscle with meridional, radial, and circular fiber groups",
                relationship: "controls lens accommodation",
                clinicalNote: "Parasympathetic (CN III) innervation; contraction allows near focus"
              }
            ]
          },
          {
            name: "Iris",
            description: "Colored contractile diaphragm with central pupil aperture",
            children: [
              {
                name: "Endothelium camerae anterioris",
                description: "Discontinuous anterior surface epithelium with melanocytes and fibroblasts"
              },
              {
                name: "Stroma",
                description: "Highly vascularized loose CT core of iris",
                children: [
                  {
                    name: "Loose connective tissue",
                    description: "Vascularized matrix containing blood vessels forming arterial circles"
                  },
                  {
                    name: "Melanocytes",
                    description: "Pigmented cells determining eye color; high melanin = brown, low = blue"
                  },
                  {
                    name: "Sphincter pupillae muscle",
                    description: "Circular smooth muscle band near pupillary margin",
                    relationship: "constricts pupil (miosis)",
                    clinicalNote: "Parasympathetic innervation via CN III"
                  }
                ]
              },
              {
                name: "Pigmented epithelium / Str. pigmenti iridis",
                description: "Posterior bilayer epithelium derived from non-visual retina",
                children: [
                  {
                    name: "Dilator pupillae muscle",
                    description: "Radial myoepithelial cell processes in posterior epithelium",
                    relationship: "dilates pupil (mydriasis)",
                    clinicalNote: "Sympathetic innervation from superior cervical ganglion"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        parent: "Sensory Tunic / Tunica Nervosa",
        where: "Innermost layer of eyeball, lines posterior cavity from ora serrata to optic disc",
        appearance: "Layered neural tissue with distinct nuclear and plexiform layers in HE; pigmented layer is darkest",
        function: "Photoreception and initial processing of visual information; converts light to neural signals",
        quickID: "Multi-layered neural tissue; look for alternating dark (nuclear) and light (plexiform) layers",
        children: [
          {
            name: "Photosensitive retina / Pars optica retinae",
            description: "Photosensitive portion posterior to ora serrata containing 10 histological layers",
            children: [
              {
                name: "Pigment epithelium / Str. pigmenti retinae",
                description: "Outermost layer of simple cuboidal pigmented cells on Bruch's membrane",
                relationship: "Layer 1 - outermost; adjacent to choroid",
                clinicalNote: "Forms blood-retina barrier; phagocytoses photoreceptor outer segments"
              },
              {
                name: "Rod and cone processes / Str. bacilli et coni",
                description: "Light-sensitive outer segments of photoreceptors containing visual pigments",
                relationship: "Layer 2 - photoreceptor layer"
              },
              {
                name: "Outer limiting membrane / Membrana limitans externa",
                description: "Apparent boundary formed by Müller cell processes and zonulae adherentes",
                relationship: "Layer 3 - not true membrane"
              },
              {
                name: "Outer nuclear layer / Str. granulosum externum",
                description: "Contains nuclei of rod and cone photoreceptor cells",
                relationship: "Layer 4 - photoreceptor cell bodies"
              },
              {
                name: "Outer plexiform layer / Str. plexiforme externum",
                description: "Synaptic zone between photoreceptors, bipolar cells, and horizontal cells",
                relationship: "Layer 5 - first synaptic layer"
              },
              {
                name: "Inner nuclear layer / Str. granulosum internum",
                description: "Contains nuclei of bipolar, horizontal, amacrine cells, and Müller cells",
                relationship: "Layer 6 - interneuron cell bodies"
              },
              {
                name: "Inner plexiform layer / Str. plexiforme internum",
                description: "Synaptic zone between bipolar cells, ganglion cells, and amacrine cells",
                relationship: "Layer 7 - second synaptic layer"
              },
              {
                name: "Ganglion cell layer / Str. ganglionare",
                description: "Contains large multipolar ganglion cell bodies",
                relationship: "Layer 8 - output neurons of retina"
              },
              {
                name: "Layer of afferent fibers / Str. neurofibrarum",
                description: "Unmyelinated axons of ganglion cells converging toward optic disc",
                relationship: "Layer 9 - forms optic nerve"
              },
              {
                name: "Inner limiting membrane / Membrana limitans interna",
                description: "Basal lamina of Müller cells forming smooth internal surface",
                relationship: "Layer 10 - innermost; borders vitreous body"
              }
            ]
          },
          {
            name: "Ora serrata",
            description: "Serrated anterior boundary where photosensitive retina ends and becomes non-visual retina",
            relationship: "junction between pars optica and pars ciliaris"
          },
          {
            name: "Pars ciliaris retinae / Ciliary epithelium",
            description: "Non-photosensitive portion covering ciliary body, derived from optic cup",
            children: [
              {
                name: "External layer: Pigmented epithelium",
                description: "Outer layer adjacent to stroma, continuous with retinal pigment epithelium"
              },
              {
                name: "Internal layer: Non-pigmented epithelium",
                description: "Inner layer facing vitreous, secretes aqueous humor and zonular fibers"
              }
            ]
          }
        ]
      }
    ],
    layers: [],
    additional: ["blood vessels", "vitreous body"]
  },

  layers: [],

  insideTheFascicles: [
    {
      structure: "Vitreous body",
      description: "Transparent gel (vitreous humor) filling posterior chamber; 99% water with hyaluronic acid and collagen",
      function: "Maintains eye shape, supports retina, transmits light to retina",
      spotIt: "Large clear space behind lens - appears empty in HE due to processing"
    }
  ],

  aroundOrOutside: [
    {
      structure: "Blood vessels",
      description: "Central retinal artery/vein within optic nerve; ciliary arteries in sclera and choroid; choriocapillaris layer",
      function: "Supply nutrients and oxygen to retina (inner layers via central retinal; outer layers via choroid)",
      spotIt: "Look for vessel profiles in choroid layer and emerging at optic disc"
    }
  ],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple (basophilic). Eosin stains cytoplasm, collagen, and extracellular matrix pink/red (acidophilic).",
    whatItStainsInThisSlide: [
      "Corneal layers → pink stroma with scattered blue keratocyte nuclei",
      "Sclera → dense pink collagen with blue fibrocyte nuclei",
      "Retinal layers → alternating dark (nuclear) and light (plexiform) bands",
      "Pigment epithelium → dark brown/black (melanin)",
      "Iris and choroid → brown pigmented with vascular spaces"
    ],
    keyEmphasis: "HE shows the three tunics clearly; melanin pigment remains brown/black. Nuclear layers appear dark blue, plexiform layers appear pink/pale."
  },

  bigPicture: "The eye is a 3-layered structure: outer fibrous coat (protection), middle vascular coat (nutrition/light control), and inner neural coat (photoreception) - like concentric shells protecting and processing light.",

  hierarchy: [
    "Light enters → Cornea → Lens → Vitreous → Retina",
    "FIBROUS → VASCULAR → SENSORY (outer to inner)",
    "Retina: 10 layers from pigment epithelium to inner limiting membrane"
  ],

  criticalRelationships: [
    {
      title: "Three Tunics Organization (EXAM ESSENTIAL!)",
      content: "The eye has three concentric coats that serve distinct functions - structural, vascular, and sensory.",
      details: [
        "FIBROUS (outer): Cornea (transparent, 5 layers) + Sclera (opaque, dense CT)",
        "VASCULAR (middle): Choroid + Ciliary body + Iris = UVEA",
        "SENSORY (inner): Retina with 10 histological layers",
        "Each layer has unique composition and function critical for vision"
      ],
      emphasis: "Know the THREE TUNICS and their components - most tested concept!"
    },
    {
      title: "Cornea Five Layers - Superficial to Deep (HIGH-YIELD!)",
      content: "The transparent cornea has 5 distinct layers from anterior to posterior.",
      details: [
        "1. Corneal epithelium - stratified squamous, regenerates in 7 days",
        "2. Bowman's membrane - does NOT regenerate if injured",
        "3. Substantia propria - 90% thickness, keratocytes + organized collagen",
        "4. Descemet's membrane - regenerates, thickens with age",
        "5. Corneal endothelium - maintains transparency by hydration control"
      ],
      emphasis: "Bowman's vs Descemet's regeneration capacity is frequently tested!"
    },
    {
      title: "Retina Ten Layers - Outer to Inner (CRITICAL!)",
      content: "The photosensitive retina contains 10 layers from choroid side inward.",
      details: [
        "1-3: Pigment epithelium → Photoreceptors → Outer limiting membrane",
        "4-6: Outer nuclear → Outer plexiform → Inner nuclear",
        "7-9: Inner plexiform → Ganglion cell → Nerve fiber layer",
        "10: Inner limiting membrane (formed by Müller cells)",
        "Light must pass through all layers to reach photoreceptors (inverted retina)"
      ],
      emphasis: "Layer order and Latin names frequently tested - memorize the sequence!"
    },
    {
      title: "Aqueous Humor Pathway (HIGH-YIELD!)",
      content: "Understanding aqueous humor flow is essential for glaucoma understanding.",
      details: [
        "Produced by: Ciliary processes (non-pigmented epithelium)",
        "Flows: Posterior chamber → Pupil → Anterior chamber",
        "Drains: Trabecular meshwork → Canal of Schlemm → Episcleral veins",
        "Blockage at any point → Increased intraocular pressure → Glaucoma"
      ],
      emphasis: "Canal of Schlemm location and function is exam favorite!"
    },
    {
      title: "Iris Muscles and Innervation (EXAM FAVORITE!)",
      content: "Two muscles control pupil size with opposite autonomic innervation.",
      details: [
        "Sphincter pupillae: Circular muscle, PARASYMPATHETIC (CN III), causes MIOSIS",
        "Dilator pupillae: Radial myoepithelial, SYMPATHETIC (superior cervical ganglion), causes MYDRIASIS",
        "Location: Sphincter in stroma; Dilator in posterior pigmented epithelium",
        "Horner's syndrome: Sympathetic damage → Miosis + Ptosis + Anhidrosis"
      ],
      emphasis: "Muscle locations and autonomic innervation are board exam staples!"
    },
    {
      title: "Ciliary Epithelium - Double Layer Origin (HIGH-YIELD!)",
      content: "The ciliary epithelium is uniquely derived from two layers of the optic cup.",
      details: [
        "Outer layer: PIGMENTED - continuous with retinal pigment epithelium",
        "Inner layer: NON-PIGMENTED - secretes aqueous humor and zonular fibers",
        "Continues onto iris as posterior pigmented epithelium",
        "Junction at ora serrata marks transition to photosensitive retina"
      ],
      emphasis: "Remember: Outer = Pigmented, Inner = Non-pigmented (secretory)!"
    }
  ],

  relationshipsSummary: [
    {
      title: "Three Tunics Structure (ESSENTIAL!)",
      summary: "Fibrous→Vascular→Sensory from outside to inside; each with specific components",
      keyPoints: [
        "Fibrous: Cornea (transparent) + Sclera (opaque)",
        "Vascular: Choroid + Ciliary body + Iris (= Uvea)",
        "Sensory: Retina with 10 layers",
        "All three must be identified for exam"
      ]
    },
    {
      title: "Cornea Layers (HIGH-YIELD!)",
      summary: "5 layers anterior to posterior; Bowman's doesn't regenerate, Descemet's does",
      keyPoints: [
        "Epithelium → Bowman's → Stroma → Descemet's → Endothelium",
        "Stroma = 90% thickness with keratocytes",
        "Endothelium controls hydration = transparency"
      ]
    },
    {
      title: "Retina Layer Organization (CRITICAL!)",
      summary: "10 layers from pigment epithelium (outer) to inner limiting membrane (inner)",
      keyPoints: [
        "Outer 3: Pigment + Receptors + OLM",
        "Middle 4: ONL + OPL + INL + IPL",
        "Inner 3: Ganglion + NFL + ILM"
      ]
    },
    {
      title: "Aqueous Humor Flow (HIGH-YIELD!)",
      summary: "Ciliary processes → posterior chamber → pupil → anterior chamber → Canal of Schlemm",
      keyPoints: [
        "Blockage → glaucoma",
        "Canal of Schlemm at iridocorneal angle",
        "Drains to episcleral veins"
      ]
    }
  ],

  keyIdentifyingFeatures: [
    "Three concentric tunics visible in cross-section",
    "Transparent cornea with 5 distinct layers",
    "Dense white sclera continuous with cornea at limbus",
    "Pigmented uvea (iris, ciliary body, choroid) forms middle layer",
    "Retina shows alternating dark nuclear and light plexiform layers",
    "Ora serrata marks anterior limit of photosensitive retina",
    "Canal of Schlemm at iridocorneal angle (corneoscleral junction)",
    "Ciliary processes with double epithelial layer"
  ],

  commonMistakes: [
    {
      mistake: "Confusing Bowman's and Descemet's membranes",
      why: "Both are acellular layers in cornea",
      avoid: "Bowman's = anterior (below epithelium), doesn't regenerate; Descemet's = posterior (above endothelium), regenerates"
    },
    {
      mistake: "Misidentifying retinal layers",
      why: "Ten layers with similar-sounding names",
      avoid: "Use mnemonic: 'Rods And Cones Light Our Retina In Proper Good Nerve Inner' for layer sequence"
    },
    {
      mistake: "Confusing sphincter and dilator pupillae locations",
      why: "Both are iris muscles",
      avoid: "Sphincter = in stroma (circular); Dilator = in posterior pigmented epithelium (radial)"
    },
    {
      mistake: "Mixing up ciliary epithelium layers",
      why: "Double layer with opposite pigmentation",
      avoid: "OUTER = pigmented (toward stroma); INNER = non-pigmented (toward vitreous, secretory)"
    },
    {
      mistake: "Forgetting Canal of Schlemm function",
      why: "Small structure at limbus",
      avoid: "Critical for aqueous drainage; blockage → glaucoma. Located at iridocorneal angle."
    }
  ]
};
const SLIDE_DATA_8 = {
  slideNumber: "8",
  name: "Lacrimal Gland (HE)",
  section: null,
  stain: "HE",

  examEssentialStructures: {
    grouped: [
      {
        parent: "serous tubuloalveolar glands",
        where: "Throughout the glandular parenchyma, organized into lobules separated by connective tissue septa",
        appearance: "Rounded to oval acini with wide lumens, lined by columnar cells with basally located spherical nuclei and pale eosinophilic cytoplasm; secretory granules visible in apical regions",
        function: "Produce aqueous component of tear film containing water, lysozyme, electrolytes, and proteins that moisten/lubricate cornea and conjunctiva while providing antimicrobial defense",
        quickID: "Look for clusters of rounded acini with wide lumens and pale cytoplasm - characteristic serous gland appearance but LACKS intercalated and striated ducts",
        children: [
          {
            name: "secretory cells",
            description: "Columnar cells forming acinar walls with basal spherical nuclei and light cytoplasm containing secretory granules",
            relationship: "Produce and secrete tear fluid components via merocrine secretion",
            children: [
              {
                name: "secretory granules",
                description: "Apical cytoplasmic granules containing lysozyme, lactoferrin, and tear proteins",
                relationship: "Store tear components for release into acinar lumen"
              }
            ]
          },
          {
            name: "myoepithelial cells",
            description: "Flattened contractile cells located between secretory cells and basement membrane",
            relationship: "Surround acini and small ducts, contract to expel secretions",
            clinicalNote: "Essential for tear ejection during blinking reflex"
          },
          {
            name: "acinar lumen",
            description: "Wide central space within each acinus, characteristically larger than in other serous glands",
            relationship: "Collects tear fluid before draining into duct system"
          }
        ]
      }
    ],
    layers: [],
    additional: ["excretory ducts", "lymphocytes", "adipocytes", "vessels, nerves"]
  },

  layers: [],

  insideTheFascicles: [
    {
      structure: "excretory ducts",
      description: "System of ducts including intralobular ducts (simple cuboidal epithelium within lobules), interlobular ducts (simple to stratified columnar in CT septa), and main excretory ducts (10-20 openings) with simple columnar epithelium and wide lumens",
      function: "Transport tears from acini to superior conjunctival fornix where 10-20 excretory ducts open to deliver tears to ocular surface",
      keyFeature: "Simpler duct system than other serous glands - LACKS intercalated ducts, LACKS striated ducts, LACKS centroacinar cells",
      spotIt: "Find tubular structures with cuboidal to columnar epithelium running between acinar clusters; larger interlobular ducts visible in CT septa"
    },
    {
      structure: "lymphocytes",
      description: "Small round cells with dense blue nuclei and scant cytoplasm scattered throughout glandular stroma; includes IgA-secreting plasma cells with eccentric nuclei and perinuclear hof",
      function: "IgA-producing plasma cells (both IgA1 and IgA2 subclasses) provide mucosal immune defense by inhibiting bacterial/viral adhesion to epithelial cells and neutralizing toxins both extra- and intracellularly",
      keyFeature: "Plasma cells produce secretory IgA that becomes part of tear film providing antimicrobial protection",
      spotIt: "Small dark nuclei scattered in stroma between acini; plasma cells show clock-face chromatin and perinuclear clear zone"
    }
  ],

  aroundOrOutside: [
    {
      structure: "adipocytes",
      description: "Large white circular spaces representing lipid-filled cells; increase in number with aging, particularly prominent in loose connective tissue stroma surrounding lobules",
      function: "Energy storage, cushioning, and structural support within orbital tissues; age-related increase may affect gland function",
      spotIt: "Large empty-appearing circular spaces much larger than acinar lumens; found in interlobular CT septa and gland periphery - more numerous in older specimens"
    },
    {
      structure: "vessels, nerves",
      description: "Blood vessels with visible lumens and thin walls; nerve bundles with fascicular organization found within loose connective tissue stroma between lobules",
      function: "Vessels provide nutrition and oxygen to secretory tissue; nerves (parasympathetic from facial nerve via pterygopalatine ganglion) regulate tear secretion in response to emotional and reflex stimuli",
      spotIt: "Vessels appear as thin-walled tubes with open lumens in CT; nerves appear as pink bundles with small dark nuclei in interlobular septa"
    }
  ],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple. Eosin stains cytoplasm and connective tissue pink/red. This standard stain reveals glandular architecture, duct system, and stromal components.",
    whatItStainsInThisSlide: [
      "Secretory cell nuclei → Blue/purple, basally located within columnar cells",
      "Secretory cell cytoplasm → Pale pink/eosinophilic with visible granularity",
      "Myoepithelial cell nuclei → Flattened, dark blue between secretory cells and basement membrane",
      "Duct epithelium → Blue nuclei with pink cytoplasm, cuboidal to columnar",
      "Connective tissue stroma → Pink, separates lobules into septa",
      "Lymphocytes/plasma cells → Small dark blue nuclei scattered in stroma",
      "Adipocytes → WHITE (empty) with thin pink rim (lipids dissolved)",
      "Blood vessels → Pink walls with empty or RBC-filled lumens"
    ],
    keyEmphasis: "HE reveals the lobular organization of serous tubuloalveolar glands with wide acinar lumens. Key diagnostic features: absence of intercalated and striated ducts distinguishes lacrimal gland from other serous glands like parotid. Lymphocytic infiltration in stroma is NORMAL and provides IgA for tear film."
  },

  bigPicture: "Lacrimal gland is a serous tubuloalveolar gland with simplified duct system (no striated/intercalated ducts) producing aqueous tears with antimicrobial IgA for ocular protection",

  hierarchy: [
    "Acini produce tears → Intralobular ducts → Interlobular ducts → Excretory ducts (10-20)",
    "Tears drain to superior conjunctival fornix → spread by blinking → lacrimal puncta → nasolacrimal duct → nasal cavity",
    "Three-layer tear film: Lipid (Meibomian) → Aqueous (Lacrimal) → Mucin (Goblet cells)"
  ],

  criticalRelationships: [
    {
      title: "Lacrimal Gland vs Other Serous Glands (HIGH-YIELD! EXAM FAVORITE)",
      content: "The lacrimal gland has a distinctively simplified duct system compared to other serous glands like parotid or pancreas",
      details: [
        "LACKS intercalated ducts: No small connecting tubules between acini and larger ducts - ducts connect directly to acini",
        "LACKS striated ducts: No specialized ducts with basal striations for ion transport and secretion modification",
        "LACKS centroacinar cells: No pale cells extending into acinar lumens (unlike pancreas)",
        "LACKS islets of Langerhans: No endocrine component (purely exocrine gland)",
        "HAS wide acinar lumens: Larger than parotid - allows tear fluid to collect before drainage",
        "HAS myoepithelial cells: Surround acini and ducts for secretion expulsion"
      ],
      emphasis: "EXAM KEY: When identifying lacrimal gland, first rule out parotid/pancreas by confirming ABSENCE of intercalated and striated ducts. This is the most frequently tested distinguishing feature!"
    },
    {
      title: "Tear Film Components and Lacrimal Gland Role (HIGH-YIELD!)",
      content: "Understanding the three-layer tear film structure and each component's source is clinically important",
      details: [
        "OUTER LIPID LAYER: Produced by Meibomian glands (tarsal glands) - prevents tear evaporation",
        "MIDDLE AQUEOUS LAYER: Produced by lacrimal gland + accessory glands (Krause, Wolfring) - contains water, lysozyme, electrolytes, IgA",
        "INNER MUCIN LAYER: Produced by conjunctival goblet cells - anchors tear film to corneal epithelium",
        "Lacrimal gland secretes approximately 10ml tears/day via reflex and basal secretion",
        "Accessory lacrimal glands (42 Krause glands upper fornix, 6-8 lower) provide continuous basal tear production"
      ],
      emphasis: "Dry eye syndrome can result from lacrimal gland dysfunction (aqueous deficiency) or Meibomian gland dysfunction (evaporative dry eye) - understanding component sources is clinically essential."
    },
    {
      title: "IgA Production and Mucosal Immunity (HIGH-YIELD!)",
      content: "Lymphocytes and plasma cells in lacrimal gland stroma are NORMAL and functionally important, not pathological",
      details: [
        "Plasma cells produce both IgA1 and IgA2 subclass antibodies",
        "IgA provides first-line defense by inhibiting bacterial/viral adhesion to epithelial cells",
        "IgA neutralizes toxins both extracellularly (in tear fluid) and intracellularly (during transcytosis)",
        "Secretory IgA transported across epithelium to become part of tear film",
        "This represents MALT (mucosa-associated lymphoid tissue) - similar to intestinal and respiratory systems"
      ],
      emphasis: "Don't mistake normal lymphocytic infiltration for pathology! Plasma cells in stroma are essential for tear IgA production."
    },
    {
      title: "Lacrimal Gland Anatomical Organization (HIGH-YIELD!)",
      content: "The gland's division and drainage pattern are important for clinical correlations",
      details: [
        "Divided by levator palpebrae superioris tendon into: Orbital part (larger, superior) and Palpebral part (smaller, inferior)",
        "Located in lacrimal fossa of frontal bone in superolateral orbit",
        "10-20 excretory ducts open into lateral superior conjunctival fornix",
        "1-2 smaller ducts may open into inferior fornix",
        "Tears then spread medially by blinking → collect in lacrimal lake → drain via puncta → canaliculi → lacrimal sac → nasolacrimal duct → inferior nasal meatus"
      ],
      emphasis: "The excretory duct openings in the fornix explain why tears appear in the lateral eye corner and flow medially toward the nose."
    }
  ],

  relationshipsSummary: [
    {
      title: "Distinguishing from Other Serous Glands (HIGH-YIELD!)",
      summary: "Lacrimal gland LACKS intercalated ducts, striated ducts, centroacinar cells, and islets of Langerhans",
      keyPoints: [
        "Simple duct system connects directly to acini",
        "Wide acinar lumens characteristic",
        "Rules out parotid/pancreas identification"
      ]
    },
    {
      title: "Tear Film Production (HIGH-YIELD!)",
      summary: "Lacrimal gland produces aqueous layer with lysozyme, IgA, and electrolytes",
      keyPoints: [
        "Three-layer tear film: lipid → aqueous → mucin",
        "Aqueous layer from lacrimal + accessory glands",
        "IgA from stromal plasma cells provides immunity"
      ]
    },
    {
      title: "Histological Identification Keys",
      summary: "Serous tubuloalveolar glands with wide lumens, prominent lymphocytes, and age-related adipocytes",
      keyPoints: [
        "Wide acinar lumens + columnar cells",
        "Lymphocytes/plasma cells in stroma = NORMAL",
        "Adipocytes increase with aging"
      ]
    }
  ],

  keyIdentifyingFeatures: [
    "Serous tubuloalveolar glands with characteristically WIDE acinar lumens",
    "ABSENCE of intercalated and striated ducts - distinguishes from parotid",
    "Lymphocytes and plasma cells scattered throughout stroma (normal finding)",
    "Lobular organization with CT septa containing vessels, nerves, ducts",
    "Adipocytes present, increasing with age",
    "Myoepithelial cells surrounding acini (not always visible in HE)",
    "Columnar secretory cells with basal nuclei and pale cytoplasm"
  ],

  commonMistakes: [
    {
      mistake: "Confusing lacrimal gland with parotid gland",
      why: "Both are serous glands with similar acinar appearance",
      avoid: "Lacrimal gland LACKS intercalated and striated ducts that parotid possesses - check duct morphology carefully"
    },
    {
      mistake: "Interpreting lymphocytes as inflammation/pathology",
      why: "Lymphocytic infiltration appears prominent in stroma",
      avoid: "Plasma cells producing IgA are NORMAL in lacrimal gland - they contribute to tear film immunity, not disease"
    },
    {
      mistake: "Missing adipocytes in stroma",
      why: "May appear as empty spaces that could be mistaken for artifacts",
      avoid: "Large empty circles much larger than acinar lumens are adipocytes - their number increases with age"
    },
    {
      mistake: "Confusing acinar lumens with blood vessels",
      why: "Both appear as open spaces",
      avoid: "Acinar lumens are surrounded by secretory cells with basal nuclei; vessels have thin endothelial walls and may contain RBCs"
    }
  ],

  clinicalCorrelations: [
    {
      condition: "Sjögren's Syndrome",
      description: "Autoimmune destruction of lacrimal and salivary glands causing dry eyes (keratoconjunctivitis sicca) and dry mouth",
      histology: "Lymphocytic infiltration destroys acini; fibrosis replaces functional tissue"
    },
    {
      condition: "Dacryoadenitis",
      description: "Inflammation of lacrimal gland causing pain, swelling, and tenderness in superolateral orbit",
      histology: "Intense inflammatory infiltrate with edema; may be infectious or autoimmune"
    },
    {
      condition: "Age-Related Changes",
      description: "Progressive decrease in tear production with aging leads to dry eye symptoms",
      histology: "Increased adipocyte infiltration, acinar atrophy, and periductal fibrosis"
    }
  ]
};
const SLIDE_DATA_9 = {
  slideNumber: "9",
  name: "Cochlea (HE)",
  section: "cross section",
  stain: "HE",

  examEssentialStructures: {
    grouped: [
      {
        parent: "cochlea (cartilaginous)",
        where: "Within the petrous part of temporal bone, spiral-shaped organ making 2¾ turns around central modiolus",
        appearance: "Snail-shaped bony structure with three fluid-filled chambers visible in cross-section; hyaline cartilage transitioning to bone during development",
        function: "Houses the auditory apparatus (organ of Corti) which transforms sound vibrations into neural impulses for hearing",
        quickID: "Look for the distinctive spiral/snail-shell shape with three chambers separated by membranes around a central bony axis",
        children: [
          {
            name: "modiolus",
            description: "Conical central bony axis of the cochlea around which the spiral turns wind",
            relationship: "Core structure containing neural pathways connecting organ of Corti to brainstem",
            children: [
              {
                name: "longitudinal canal of modiolus",
                description: "Central channel running through the modiolus from base to apex",
                relationship: "Contains the cochlear nerve fibers traveling to brainstem",
                children: [
                  {
                    name: "fibers of the cochlear nerve",
                    description: "Central processes of spiral ganglion bipolar neurons bundled together forming part of CN VIII",
                    relationship: "Transmit auditory signals from spiral ganglion to cochlear nuclei in brainstem",
                    clinicalNote: "Acoustic neuroma (vestibular schwannoma) can compress these fibers causing unilateral hearing loss"
                  }
                ]
              },
              {
                name: "spiral canal of modiolus",
                description: "Spiral channel winding within the modiolus at the base of osseous spiral lamina",
                relationship: "Houses the spiral ganglion containing sensory neuron cell bodies",
                children: [
                  {
                    name: "spiral ganglion",
                    description: "Cluster of sensory neuron cell bodies arranged in a spiral pattern within the bony modiolus",
                    relationship: "Contains bipolar neurons that relay sound information from hair cells to CNS",
                    clinicalNote: "Progressive loss in age-related hearing loss (presbycusis)",
                    children: [
                      {
                        name: "bipolar neurons",
                        description: "Sensory neurons with oval cell bodies and two processes; peripheral process contacts hair cells, central process forms cochlear nerve",
                        relationship: "UNIQUE: Only bipolar neurons in sensory ganglia - all others have pseudounipolar neurons",
                        clinicalNote: "Damaged by ototoxic drugs (aminoglycosides, cisplatin) causing irreversible hearing loss"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "osseous spiral lamina",
            description: "Thin bony shelf projecting from modiolus partway across cochlear canal like a spiral staircase",
            relationship: "Partially divides cochlear canal; basilar membrane attaches to its free edge to complete division"
          }
        ]
      },
      {
        parent: "scala vestibuli",
        where: "Upper compartment of cochlea above vestibular membrane",
        appearance: "Large triangular space containing perilymph fluid; bounded below by vestibular membrane",
        function: "Conducts sound vibrations from oval window toward helicotrema; contains perilymph (similar to extracellular fluid)",
        quickID: "Upper/outer spiral chamber - connects to vestibule and oval window",
        children: []
      },
      {
        parent: "scala tympani",
        where: "Lower compartment of cochlea below basilar membrane",
        appearance: "Large triangular space containing perilymph; bounded above by basilar membrane",
        function: "Returns sound vibrations from helicotrema to round window; perilymph continuous with scala vestibuli at apex",
        quickID: "Lower/outer spiral chamber - connects to round window (secondary tympanic membrane)",
        children: []
      },
      {
        parent: "cochlear duct / scala media",
        where: "Middle triangular compartment between vestibular and basilar membranes",
        appearance: "Smallest of three chambers; contains endolymph (high K+, low Na+); houses organ of Corti on floor",
        function: "Creates electrochemical environment essential for hair cell mechanotransduction; endolymph K+ concentration maintained by stria vascularis",
        quickID: "Middle chamber - triangular, bounded by vestibular membrane (roof), basilar membrane (floor), and stria vascularis (lateral wall)",
        children: []
      },
      {
        parent: "vestibular membrane",
        where: "Roof of cochlear duct separating it from scala vestibuli; also called Reissner's membrane",
        appearance: "Very thin membrane stretching diagonally from osseous spiral lamina to lateral wall; appears as delicate line",
        function: "Creates ionic barrier between perilymph (scala vestibuli) and endolymph (scala media); allows pressure transmission",
        quickID: "Thin diagonal membrane forming roof of scala media - very delicate, often appears as single line",
        children: [
          {
            name: "endothel-like cells",
            description: "Flattened mesothelial cells facing scala vestibuli (perilymph side)",
            relationship: "Form outer layer of vestibular membrane"
          },
          {
            name: "squamous epithelium cells (microvilli)",
            description: "Squamous epithelial cells with microvilli facing scala media (endolymph side)",
            relationship: "Form inner layer; microvilli increase surface area for ion transport"
          }
        ]
      },
      {
        parent: "basilar membrane",
        where: "Floor of cochlear duct separating it from scala tympani",
        appearance: "Fibrous membrane stretching from osseous spiral lamina to spiral ligament; widens toward apex (base to apex gradient)",
        function: "Vibrates in response to sound; tonotopic organization - base responds to high frequency, apex to low frequency",
        quickID: "Floor membrane supporting organ of Corti - wider at apex, narrower at base (frequency tuning)",
        children: [
          {
            name: "organ of Corti",
            description: "Complex sensory epithelium sitting on basilar membrane containing inner and outer hair cells, supporting cells, and tunnel of Corti",
            relationship: "The actual sensory transducer - converts mechanical vibration to neural signals",
            clinicalNote: "Hair cells do NOT regenerate in mammals - damage causes permanent hearing loss",
            children: [
              {
                name: "inner hair cells",
                description: "Single row of flask-shaped mechanoreceptors (~3,500 cells); receive 95% of afferent innervation",
                relationship: "Primary auditory receptors - stereocilia deflection opens ion channels"
              },
              {
                name: "outer hair cells",
                description: "Three rows of cylindrical mechanoreceptors (~12,000 cells); have electromotility (can change length)",
                relationship: "Cochlear amplifiers - enhance sensitivity and frequency selectivity"
              },
              {
                name: "pillar cells",
                description: "Inner and outer pillar cells forming tunnel of Corti containing perilymph",
                relationship: "Structural support separating inner from outer hair cells"
              }
            ]
          },
          {
            name: "tectorial membrane",
            description: "Acellular gelatinous membrane extending from spiral limbus over organ of Corti",
            relationship: "Outer hair cell stereocilia embedded in underside; shearing motion activates hair cells",
            clinicalNote: "Tectorial membrane abnormalities cause congenital hearing loss"
          }
        ]
      },
      {
        parent: "spiral ligament",
        where: "Lateral wall of cochlear duct; thickened periosteal tissue on outer cochlear wall",
        appearance: "Dense fibrous tissue forming lateral attachment for basilar membrane; supports stria vascularis",
        function: "Anchors basilar membrane laterally; contains fibrocytes that recycle K+ from perilymph to stria vascularis",
        quickID: "Thick fibrous tissue on outer wall where basilar membrane attaches - supports stria vascularis above",
        children: []
      }
    ],
    layers: [],
    additional: [
      "stria vascularis",
      "intraepithelial capillaries",
      "zones of enchondral ossification",
      "skeletal muscle tissue",
      "brown adipose tissue",
      "vessels"
    ]
  },

  layers: [],

  insideTheFascicles: [
    {
      structure: "stria vascularis",
      description: "Highly vascularized pseudostratified epithelium on lateral wall of cochlear duct, overlying spiral ligament; unique in having blood vessels within epithelium",
      function: "Produces endolymph and maintains its high K+ concentration (150mM) essential for hair cell function; generates endocochlear potential (+80mV)",
      keyFeature: "Only epithelium in body with intraepithelial capillaries - blood vessels run between epithelial cells",
      spotIt: "Look for vascular epithelium on lateral wall of scala media - darker staining area with visible capillaries within epithelial layer"
    },
    {
      structure: "intraepithelial capillaries",
      description: "Unique capillary network embedded within the epithelial layer of stria vascularis rather than in underlying connective tissue",
      function: "Provide blood supply for intense metabolic activity of stria vascularis; supply oxygen and nutrients for endolymph production and K+ recycling",
      keyFeature: "Capillaries WITHIN epithelium - extremely rare arrangement found almost nowhere else in body",
      spotIt: "Identify small blood vessel profiles within the stria vascularis epithelium - not below it in connective tissue"
    },
    {
      structure: "bipolar neurons of spiral ganglion",
      description: "Sensory neurons with oval perikarya, two distinct processes (peripheral to hair cells, central to brainstem), visible Nissl substance",
      function: "Relay auditory information from inner hair cells to cochlear nuclei; comprise 95% Type I (myelinated, contact inner hair cells) and 5% Type II (unmyelinated, contact outer hair cells)",
      keyFeature: "BIPOLAR morphology - different from pseudounipolar neurons in all other sensory ganglia (except vestibular ganglion)",
      spotIt: "Look for clusters of oval neurons in spiral canal of modiolus with visible two processes extending from cell body"
    }
  ],

  aroundOrOutside: [
    {
      structure: "zones of enchondral ossification",
      description: "Regions where cartilaginous otic capsule is being replaced by bone via enchondral ossification; shows characteristic zones: resting, proliferative, hypertrophic, calcification, ossification",
      function: "Formation of petrous portion of temporal bone (otic capsule) that protects the inner ear structures; this ossification continues postnatally",
      spotIt: "Look for transitional zones between hyaline cartilage (blue-purple matrix with lacunae) and mature bone (pink, with Haversian systems) - shows developmental progression"
    },
    {
      structure: "skeletal muscle tissue",
      description: "Cross-sections or longitudinal sections of striated muscle fibers from muscles associated with ear structures (tensor tympani, stapedius nearby); peripheral nuclei, cross-striations visible",
      function: "Tensor tympani and stapedius muscles dampen ossicular vibration (acoustic reflex) protecting inner ear from loud sounds",
      spotIt: "Look for large eosinophilic fibers with peripheral nuclei and characteristic cross-striations if longitudinal; polygonal profiles with peripheral nuclei if cross-section"
    },
    {
      structure: "brown adipose tissue",
      description: "Multilocular adipocytes with multiple small lipid droplets and central nuclei; abundant mitochondria give cytoplasm granular eosinophilic appearance; present in surrounding tissue",
      function: "Non-shivering thermogenesis - important in newborns for temperature regulation; may contribute to maintaining optimal temperature for inner ear function",
      spotIt: "Look for clusters of adipocytes with multiple small vacuoles and central nuclei (vs white adipose with single large vacuole and peripheral nucleus)"
    },
    {
      structure: "vessels",
      description: "Blood vessels of various calibers in surrounding connective tissue; arteries with thick muscular walls, veins with thinner walls, capillaries with single endothelial layer",
      function: "Supply blood to cochlea, spiral ganglion, and surrounding structures; labyrinthine artery (branch of AICA or basilar) is sole blood supply - NO collaterals",
      spotIt: "Look for circular profiles with lumens in connective tissue surrounding cochlea; arteries have thick walls with smooth muscle"
    }
  ],

  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei and basophilic structures (ribosomes, Nissl bodies) blue/purple. Eosin stains cytoplasm, collagen, and most extracellular matrix pink/red. This standard stain reveals overall tissue architecture of the complex cochlear structures.",
    whatItStainsInThisSlide: [
      "Spiral ganglion neurons → Pale purple nuclei with basophilic Nissl bodies in cytoplasm",
      "Cartilage matrix → Blue-purple (basophilic proteoglycans) with chondrocytes in lacunae",
      "Bone → Pink matrix with osteocytes in lacunae; darker staining at cement lines",
      "Stria vascularis → Eosinophilic with visible nuclei; capillaries visible within",
      "Organ of Corti → Delicate cellular structure with supporting cells and hair cells (difficult to resolve)",
      "Membranes (vestibular, basilar, tectorial) → Pale pink fibrous or gelatinous appearance",
      "Connective tissue → Pink collagen fibers with scattered fibroblast nuclei"
    ],
    keyEmphasis: "HE reveals the beautiful spiral architecture of cochlea with three scalae separated by delicate membranes. Key identifiers: snail-shell shape, central modiolus containing spiral ganglion, cartilage/bone of otic capsule, and the triangular cochlear duct with stria vascularis on lateral wall."
  },

  bigPicture: "The cochlea is nature's frequency analyzer - a fluid-filled spiral where sound vibrations are transformed into neural signals through precisely organized tonotopic hair cells",

  hierarchy: [
    "Sound → Oval window → Perilymph (scala vestibuli) → Basilar membrane vibration",
    "Basilar membrane → Hair cell stereocilia deflection → Ion channel opening → Neural firing",
    "Spiral ganglion bipolar neurons → Cochlear nerve → Cochlear nuclei → Auditory cortex"
  ],

  criticalRelationships: [
    {
      title: "Three Scalae Organization (HIGH-YIELD! EXAM ESSENTIAL)",
      content: "Understanding the three fluid-filled chambers and their separation is fundamental to cochlear anatomy and function",
      details: [
        "SCALA VESTIBULI (upper): Contains perilymph; connects to oval window; receives sound vibrations from stapes",
        "SCALA MEDIA / COCHLEAR DUCT (middle): Contains endolymph (high K+); houses organ of Corti; bounded by vestibular membrane (above) and basilar membrane (below)",
        "SCALA TYMPANI (lower): Contains perilymph; connects to round window; allows pressure release",
        "HELICOTREMA: Apex where scala vestibuli and scala tympani connect; allows perilymph continuity",
        "KEY: Scala media is ISOLATED from others - different ionic composition essential for hair cell function"
      ],
      emphasis: "Exam loves asking about membrane boundaries and fluid contents! Remember: PERI-lymph in PERI-pheral scalae (vestibuli + tympani), ENDO-lymph in ENDO-closed scala media"
    },
    {
      title: "Modiolus and Neural Pathway (HIGH-YIELD!)",
      content: "The central bony axis contains the entire afferent pathway from hair cells to brainstem",
      details: [
        "SPIRAL GANGLION in spiral canal of modiolus: Contains bipolar neuron cell bodies",
        "BIPOLAR NEURONS: Unique to cochlear and vestibular ganglia - all other sensory ganglia have pseudounipolar",
        "PERIPHERAL PROCESSES: Extend through osseous spiral lamina to synapse with inner hair cells",
        "CENTRAL PROCESSES: Bundle together in longitudinal canal as cochlear nerve (CN VIII)",
        "TYPE I neurons (95%): Large, myelinated, contact single inner hair cell - precise frequency coding",
        "TYPE II neurons (5%): Small, unmyelinated, contact multiple outer hair cells - modulatory function"
      ],
      emphasis: "The BIPOLAR morphology of spiral ganglion neurons is frequently tested - distinguish from pseudounipolar in spinal/trigeminal ganglia!"
    },
    {
      title: "Stria Vascularis - Unique Vascular Epithelium (HIGH-YIELD!)",
      content: "The only epithelium in the body with blood vessels INSIDE the epithelial layer - critical for endolymph production",
      details: [
        "LOCATION: Lateral wall of scala media, overlying spiral ligament",
        "INTRAEPITHELIAL CAPILLARIES: Blood vessels run between epithelial cells - nowhere else in body!",
        "FUNCTION: Produces endolymph; maintains high K+ (150mM) and low Na+ essential for hair cell function",
        "ENDOCOCHLEAR POTENTIAL: Generates +80mV potential in scala media - drives K+ into hair cells",
        "THREE CELL TYPES: Marginal cells (epithelial), intermediate cells (melanocytes), basal cells",
        "CLINICAL: Damage causes endolymph imbalance → sensorineural hearing loss"
      ],
      emphasis: "The intraepithelial capillaries are UNIQUE - no other epithelium has this! This is a high-yield identification feature."
    },
    {
      title: "Tonotopic Organization of Basilar Membrane (EXAM FAVORITE!)",
      content: "The basilar membrane acts as a frequency analyzer - different locations respond to different frequencies",
      details: [
        "BASE (narrow, stiff): Resonates to HIGH frequency sounds (20,000 Hz) - near oval window",
        "APEX (wide, flexible): Resonates to LOW frequency sounds (20 Hz) - at helicotrema",
        "TRAVELING WAVE: Sound creates wave that peaks at frequency-specific location along membrane",
        "HAIR CELLS at peak: Maximally stimulated, sending frequency-specific signals to brain",
        "ORGAN OF CORTI sits on basilar membrane - tonotopy preserved through auditory pathway to cortex",
        "CLINICAL: Noise-induced hearing loss affects base first (high frequency loss) - most metabolically active region"
      ],
      emphasis: "Remember: Base = High, Apex = Low (opposite of what you might expect!). High frequency loss in presbycusis and noise exposure reflects basal damage."
    },
    {
      title: "Vestibular vs Basilar Membrane Functions (HIGH-YIELD!)",
      content: "Two very different membranes with distinct roles in cochlear physiology",
      details: [
        "VESTIBULAR MEMBRANE (Reissner's): Thin, two cell layers, creates ionic barrier between perilymph and endolymph; NOT involved in sound transduction",
        "BASILAR MEMBRANE: Fibrous, supports organ of Corti, VIBRATES in response to sound - the key to frequency selectivity",
        "Vestibular membrane: Allows pressure transmission but blocks ion flow - maintains endolymph composition",
        "Basilar membrane: Mechanical properties vary along length creating tonotopic map",
        "Both essential: Vestibular for ionic environment, Basilar for mechanotransduction"
      ],
      emphasis: "Don't confuse these! Vestibular membrane = ionic barrier (roof). Basilar membrane = vibrating platform for organ of Corti (floor)."
    },
    {
      title: "Surrounding Tissues in Cochlear Slide (EXAM IDENTIFICATION)",
      content: "Several additional tissues visible in cochlear sections provide context clues",
      details: [
        "ENCHONDRAL OSSIFICATION ZONES: Otic capsule forming from cartilage - see zones of cartilage-to-bone transition",
        "SKELETAL MUSCLE: From tensor tympani/stapedius muscles - peripheral nuclei, cross-striations",
        "BROWN ADIPOSE TISSUE: Multilocular adipocytes with central nuclei - thermogenesis in newborns",
        "BLOOD VESSELS: Supplying cochlea - labyrinthine artery is end artery (no collaterals!)",
        "These structures help confirm you're looking at temporal bone section with inner ear"
      ],
      emphasis: "Identifying surrounding tissues helps confirm correct slide identification. Brown adipose is unusual finding - indicates newborn/infant specimen or neonatal thermogenic tissue."
    }
  ],

  relationshipsSummary: [
    {
      title: "Three Scalae Architecture (HIGH-YIELD!)",
      summary: "Upper (vestibuli) and lower (tympani) contain perilymph; middle (media) contains endolymph with organ of Corti",
      keyPoints: [
        "Scala vestibuli: Perilymph, connects to oval window",
        "Scala media: Endolymph, houses organ of Corti",
        "Scala tympani: Perilymph, connects to round window"
      ]
    },
    {
      title: "Spiral Ganglion - Bipolar Neurons (HIGH-YIELD!)",
      summary: "Sensory neurons in modiolus relay sound from hair cells to brainstem - uniquely bipolar (not pseudounipolar)",
      keyPoints: [
        "Located in spiral canal of modiolus",
        "BIPOLAR morphology - unique to cochlea and vestibule",
        "Central processes form cochlear nerve (CN VIII)"
      ]
    },
    {
      title: "Stria Vascularis - Intraepithelial Capillaries",
      summary: "Only epithelium with blood vessels inside epithelial layer - produces endolymph maintaining K+ gradient",
      keyPoints: [
        "Lateral wall of scala media",
        "Unique intraepithelial capillaries",
        "Produces endolymph and endocochlear potential"
      ]
    },
    {
      title: "Tonotopic Basilar Membrane (EXAM FAVORITE!)",
      summary: "Base = high frequency, Apex = low frequency - frequency-specific vibration patterns create tonotopic map",
      keyPoints: [
        "Base: Narrow, stiff → high frequency",
        "Apex: Wide, flexible → low frequency",
        "Noise damage affects base first"
      ]
    }
  ],

  keyIdentifyingFeatures: [
    "Distinctive spiral/snail-shell architecture with 2¾ turns around central modiolus - pathognomonic for cochlea",
    "Three fluid-filled chambers (scalae) separated by thin membranes in each turn of spiral",
    "Triangular scala media bounded by vestibular membrane (roof), basilar membrane (floor), and stria vascularis (lateral wall)",
    "Spiral ganglion neurons clustered in spiral canal of modiolus - bipolar cells with oval cell bodies",
    "Stria vascularis appears as vascularized epithelium on lateral wall with visible capillaries within epithelium",
    "Osseous spiral lamina projects as bony shelf from modiolus partway across each turn",
    "Organ of Corti visible as complex epithelial structure on basilar membrane (may require high magnification)",
    "Surrounding otic capsule shows cartilage-to-bone transition (enchondral ossification zones)",
    "Brown adipose tissue may be visible as multilocular adipocytes with central nuclei in surrounding tissue"
  ],

  commonMistakes: [
    {
      mistake: "Confusing scala vestibuli with scala tympani",
      why: "Both contain perilymph and appear similar",
      avoid: "Remember: Vestibuli is ABOVE vestibular membrane (roof of scala media), Tympani is BELOW basilar membrane (floor of scala media). Vestibuli connects to oval window, Tympani to round window."
    },
    {
      mistake: "Thinking spiral ganglion neurons are pseudounipolar like other sensory ganglia",
      why: "All other sensory ganglia (dorsal root, trigeminal, etc.) have pseudounipolar neurons",
      avoid: "Spiral ganglion and vestibular ganglion are EXCEPTIONS - they contain BIPOLAR neurons. This is frequently tested!"
    },
    {
      mistake: "Confusing vestibular membrane with tectorial membrane",
      why: "Both are membranes in the cochlea",
      avoid: "Vestibular (Reissner's) membrane = thin, separates scala vestibuli from scala media. Tectorial membrane = thick gelatinous, covers organ of Corti and embeds outer hair cell stereocilia."
    },
    {
      mistake: "Forgetting that stria vascularis has intraepithelial capillaries",
      why: "Capillaries are usually in underlying connective tissue, not within epithelium",
      avoid: "Stria vascularis is UNIQUE - only epithelium with blood vessels inside it. This is essential for producing endolymph."
    },
    {
      mistake: "Reversing the tonotopic organization (thinking apex = high frequency)",
      why: "Might expect larger apex to handle larger/lower sounds, but physics is opposite",
      avoid: "BASE (narrow, stiff) = HIGH frequency. APEX (wide, flexible) = LOW frequency. Presbycusis and noise damage affect base first causing high-frequency hearing loss."
    }
  ],

  clinicalCorrelations: [
    "Presbycusis (Age-Related Hearing Loss): Progressive loss of spiral ganglion neurons and hair cells, starting at base (high frequency loss first); stria vascularis degeneration reduces endolymph production",
    "Noise-Induced Hearing Loss: Excessive sound damages outer hair cells at frequency-specific locations on basilar membrane; affects base (high frequency) first due to highest metabolic activity",
    "Ménière's Disease: Endolymphatic hydrops (excessive endolymph) causes distension of scala media; episodes of vertigo, hearing loss, tinnitus, and aural fullness",
    "Ototoxicity: Aminoglycoside antibiotics and cisplatin damage hair cells and spiral ganglion neurons; irreversible because mammalian hair cells do not regenerate",
    "Acoustic Neuroma (Vestibular Schwannoma): Benign tumor of Schwann cells on vestibular nerve that can compress cochlear nerve in internal auditory canal causing unilateral hearing loss",
    "Cochlear Implant: Bypasses damaged hair cells by directly stimulating spiral ganglion neurons with electrode array inserted into scala tympani"
  ],

  detailedNotes: {
    fluids: {
      title: "Perilymph vs Endolymph Composition",
      content: [
        "PERILYMPH (scala vestibuli and tympani): Similar to extracellular fluid - high Na+ (~140mM), low K+ (~5mM); continuous with CSF via cochlear aqueduct",
        "ENDOLYMPH (scala media only): Unique composition - high K+ (~150mM), low Na+ (~1mM); produced by stria vascularis; essential for hair cell function",
        "The high K+ in endolymph means K+ flows INTO hair cells when mechanotransduction channels open (instead of normal K+ efflux)",
        "Endocochlear potential: +80mV in scala media (endolymph) creates huge electrochemical gradient driving K+ into hair cells",
        "Disruption of ionic balance (Ménière's disease, ototoxicity) causes hearing and vestibular dysfunction"
      ]
    },
    organOfCorti: {
      title: "Organ of Corti Components",
      content: [
        "INNER HAIR CELLS (~3,500): Single row; flask-shaped; receive 95% of afferent innervation; primary sensory receptors encoding sound frequency and intensity",
        "OUTER HAIR CELLS (~12,000): Three rows; cylindrical; have electromotility (prestin protein); function as cochlear amplifiers enhancing sensitivity and frequency selectivity",
        "PILLAR CELLS: Inner and outer pillar cells form rigid tunnel of Corti containing perilymph; provide structural support and separate inner from outer hair cells",
        "SUPPORTING CELLS: Deiters' cells (support outer hair cells), Hensen's cells, Claudius' cells - maintain ionic environment and structural integrity",
        "TECTORIAL MEMBRANE: Acellular gel extending from spiral limbus; outer hair cell stereocilia embedded in underside; shearing motion during basilar membrane vibration activates hair cells"
      ]
    },
    development: {
      title: "Cochlear Development and Otic Capsule",
      content: [
        "Membranous labyrinth develops from otic vesicle (otic placode ectoderm) during week 4-8",
        "Otic capsule (bony labyrinth) forms by enchondral ossification of cartilage template - visible as ossification zones in developing specimens",
        "Cochlear coiling begins week 6, completes 2¾ turns by week 8-10",
        "Hair cells and organ of Corti differentiate weeks 9-10; hearing function begins around week 25-28",
        "Spiral ganglion neurons derive from otic vesicle; send peripheral processes to hair cells and central processes to brainstem"
      ]
    }
  }
};


export const SLIDES = {
  1: SLIDE_DATA_01,
  2: SLIDE_DATA_02,
  3: SLIDE_DATA_03,
  4: SLIDE_DATA_4,
  5: SLIDE_DATA_05,
  6: SLIDE_DATA_6,
  7: SLIDE_DATA_7,
  8: SLIDE_DATA_8,
  9: SLIDE_DATA_9
};

export default SLIDES;
