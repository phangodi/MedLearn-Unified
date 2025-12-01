import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/Button'
import {
  ArrowLeft,
  Table as TableIcon,
  BookText,
  Search,
} from 'lucide-react'

// Summary Tables Data (From All 22 Essay Questions)
const summaryTables = [
  {
    category: 'Embryology & Development',
    tables: [
      {
        title: 'Early Development & Axis Formation',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['Dorso-Ventral Axis', 'Formed by cortical rotation after fertilization; Wnt pathway activation on dorsal side; β-catenin stabilization leads to organizer formation'],
          ['Situs Inversus', 'Mirror-image organ reversal; incidence 1:10,000; autosomal recessive'],
          ['Kartagener Syndrome', 'Primary ciliary dyskinesia + situs inversus + sinusitis + bronchiectasis; 25% of SI cases'],
          ['Ciliary Defect Molecules', 'Dynein, tubulin, nexin, kinases, phosphatases, PCP proteins'],
          ['Blastogenesis', 'Days 0-28; severe defects; example: thalidomide-induced amelia'],
          ['Organogenesis', 'Days 29-56; relatively mild defects; example: syndactyly'],
          ['Fetal Development', 'Days 57-266; minor anomalies; example: achondroplasia'],
          ['Homeotic Genes', 'Transcription factors defining body part borders; 150 aa motif'],
          ['HOX Complexes', '4 in mammals; activated centromere → telomere corresponding to head → tail'],
          ['Cardiac Homeotic Genes', 'GATA4, NKX2.5, TBX5, TBX1 regulate MYH6 expression'],
          ['Holt-Oram Syndrome', 'TBX5 mutation; carpal bone defects + cardiac septal/conductivity defects; autosomal dominant'],
          ['DiGeorge Syndrome', 'TBX1 defect; cardiac outflow problems + cleft palate + thymic hypoplasia + immune defects'],
        ],
      },
    ],
  },
  {
    category: 'Molecular Signaling Pathways',
    tables: [
      {
        title: 'Key Signaling Pathways',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['Wnt Pathway Components', 'Wnt ligand, Frizzled receptor, LRP, Dishevelled, Axin, APC, GSK-3, β-catenin, LEF'],
          ['Angiotensin II Pathway', 'Heptahelical receptor → PLC → IP3 → Ca²⁺ → Calcineurin → NFAT'],
          ['Calcineurin', 'Serine-threonine phosphatase; dephosphorylates NFAT'],
          ['NFAT', 'Transcription factor; nuclear translocation leads to hypertrophic genes'],
          ['ACE D/D Genotype', 'Associated with severe hypertrophic cardiomyopathy'],
          ['DSCR1', 'Calcineurin inhibitor; elevated in Down syndrome'],
          ['ADP-ribosylation Types', 'Mono-ADP-ribosylation (single unit) and poly-ADP-ribosylation (chains)'],
          ['PARP Function', 'DNA damage detection, repair enzyme organization, NAD⁺ consumption'],
          ['PARP Overactivity', 'ATP deficiency, GAPDH inhibition, cell lysis'],
          ['Bacterial Toxins', 'Cholera, diphtheria, pertussis use ADP-ribosylation to modify G-proteins'],
        ],
      },
    ],
  },
  {
    category: 'Cell Biology & Regulation',
    tables: [
      {
        title: 'Protein Regulation & Apoptosis',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['Ubiquitin', '8.5 kDa regulatory protein; ubiquitous in eukaryotes'],
          ['Isopeptide Bond', 'Between C-terminal Gly of ubiquitin and ε-amino of Lys'],
          ['E1, E2, E3 Enzymes', 'Activating, conjugating, ligase enzymes respectively'],
          ['Proteasome Structure', '4 rings of 7 proteins each; outer rings = gates, inner rings = catalytic'],
          ['Degradation Products', '7-8 amino acid peptides'],
          ['UPS Functions', 'Cell cycle, gene expression, oxidative stress response, apoptosis'],
          ['SUMO', 'Similar to ubiquitin (12 kDa) but does NOT signal degradation'],
          ['Thalidomide Target', 'Cereblon (E3 ubiquitin ligase)'],
          ['Disease Associations', 'Alzheimer\'s, Parkinson\'s, Pick\'s, Huntington\'s show ubiquitin accumulation'],
          ['Intrinsic Pathway Components', 'Caspase-3, Caspase-9, BAX, APAF, PUMA, Smac, Bcl-2, IAP'],
          ['Extrinsic vs Intrinsic', 'Extrinsic (TNFα) not essential for embryogenesis; intrinsic pathway critical'],
          ['Nicotine - Apoptosis', 'Over-stimulates intrinsic apoptosis pathway in developing brain'],
        ],
      },
    ],
  },
  {
    category: 'Genetic & Chromosomal Disorders',
    tables: [
      {
        title: 'Major Genetic Syndromes',
        headers: ['Topic', 'Gene/Protein', 'Key Mechanism', 'Clinical Features'],
        rows: [
          ['Down Syndrome', 'Chromosome 21 (DSCR1, DYRK1A, APP, miRNAs)', 'Gene dosage effect; NFAT dysregulation; APP accumulation', 'Intellectual disability, cardiac defects, facial features'],
          ['Cystic Fibrosis', 'CFTR (ΔF508 most common)', 'Chloride channel dysfunction; thick mucus', 'Lung disease, pancreatic insufficiency, male infertility'],
          ['Marfan Syndrome', 'FBN1 (Fibrillin-1)', 'ECM defect + TGFβ dysregulation', 'Tall stature, arachnodactyly, aortic dilatation'],
          ['DMD Mechanism', 'Dystrophin gene', 'Out-of-frame mutations → no functional dystrophin → calcium influx → ROS → muscle necrosis', 'Severe muscle weakness, early death'],
          ['BMD Mechanism', 'Dystrophin gene', 'In-frame mutations → shortened but functional dystrophin → milder symptoms', 'Milder muscle weakness, later onset'],
          ['Achondroplasia', 'FGFR3', 'Constitutively active receptor; G→A at nucleotide 1138; stabilizes receptor dimers', 'Most common dwarfism (70%); incidence 1:15,000-1:40,000'],
        ],
      },
    ],
  },
  {
    category: 'Blood Disorders',
    tables: [
      {
        title: 'Thalassemias & Iron Metabolism',
        headers: ['Topic', 'Gene/Protein', 'Key Mechanism', 'Clinical Features'],
        rows: [
          ['α-Thalassemia', 'HBA1/HBA2 (4 loci)', 'Reduced α-chain → excess β or γ chains', 'Silent carrier to hydrops fetalis'],
          ['β-Thalassemia', 'β-globin (2 loci)', 'β⁰ or β⁺ mutations reduce β-chain', 'Minor, intermedia, or major forms'],
          ['Hepcidin', '25 aa peptide hormone from liver', 'Master regulator of iron; degrades ferroportin', 'Controls iron homeostasis'],
          ['Ferroportin', 'Iron exporter', 'Degraded by hepcidin binding', 'Iron export from cells'],
          ['Iron Absorption', 'Dcytb, DMT1, ferritin, ferroportin', 'Dcytb reduces Fe³⁺ to Fe²⁺ → DMT1 imports → ferritin stores or ferroportin exports', 'Normal iron homeostasis'],
          ['Anemia of Chronic Disease', 'Hepcidin overexpression', 'High hepcidin → ferroportin degradation → iron sequestration', 'Functional iron deficiency'],
          ['Hemochromatosis', 'HFE, HJV, hepcidin deficiency', 'Low/absent hepcidin → uncontrolled iron absorption → iron overload', 'Liver, heart, pancreas damage'],
          ['HJV (Hemojuvelin)', 'Hepcidin regulator', 'Positive regulator of hepcidin; mutations cause juvenile hemochromatosis', 'Early-onset iron overload'],
        ],
      },
    ],
  },
  {
    category: 'Oncology',
    tables: [
      {
        title: 'Cancer Biology',
        headers: ['Topic', 'Gene/Protein', 'Key Mechanism', 'Clinical Features'],
        rows: [
          ['Cancer Cell Identity', 'Oncogenes, tumor suppressors', '6 hallmarks of malignancy', 'Uncontrolled growth, metastasis'],
          ['VHL Syndrome', 'VHL gene (pVHL)', 'pVHL ubiquitin ligase degrades HIF1α; defect causes HIF1α accumulation → VEGF overexpression', 'Renal carcinoma, hemangioblastomas'],
        ],
      },
    ],
  },
  {
    category: 'Stem Cells & Regeneration',
    tables: [
      {
        title: 'Stem Cell Biology',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['Stem Cell Criteria', 'Undifferentiated, unlimited division, dual fate (self-renewal + differentiation)'],
          ['Stem Cell Functions', 'Tissue repair, regeneration, developmental potential'],
        ],
      },
    ],
  },
  {
    category: 'Biochemistry & Metabolism',
    tables: [
      {
        title: 'Essential Metabolic Molecules',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['Glutathione Structure', 'γ-glutamyl-cysteinyl-glycine tripeptide'],
          ['Glutathione Functions', 'Antioxidant, NO cycle maintenance, tubulin glutamylation, amino acid transport, detoxification'],
          ['Folic Acid Structure', 'Pteridine + p-aminobenzoic acid + glutamate'],
          ['Active Form', 'Tetrahydrofolic acid (THF)'],
          ['C1 Fragments', 'Essential for purine, pyrimidine, thymidine, methionine synthesis'],
          ['Folate Deficiency', 'Neural tube defects (spina bifida, anencephaly), other malformations'],
          ['Folate Antagonists', 'Sulfonamides (inhibit pteridine synthetase), Trimethoprim (inhibit dihydrofolate reductase)'],
          ['Dystrophin', 'Largest human gene (2.2×10⁶ bp, 79 exons); links cytoskeleton to ECM; mutations cause DMD/BMD'],
          ['Exon Skipping', 'AON therapy to restore reading frame → converts DMD to BMD-like phenotype'],
        ],
      },
    ],
  },
  {
    category: 'Teratogens & Environmental Factors',
    tables: [
      {
        title: 'Teratogenic Exposures',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['FASD Incidence', '1% of births; many undiagnosed'],
          ['FASD Features', 'Smooth philtrum, microcephaly, decreased eye width, heart defects, mental retardation'],
          ['Alcohol Mechanisms', 'Cell adhesion defects, free radicals, apoptosis stimulation, growth factor antagonism'],
          ['RALDH2 Inhibition', 'Alcohol competitively inhibits RALDH2 → retinoic acid deficiency → impaired eye/brain development'],
          ['CDT', 'Carbohydrate-deficient transferrin as marker of chronic maternal alcohol abuse'],
          ['Nicotine - Fertility', 'Reduces both male and female fertility'],
          ['Nicotine - First Trimester', 'Decreases estrogen/progesterone ratio; inhibits Fallopian tube cilia'],
          ['Ectopic Pregnancy', '3x higher risk in smokers'],
          ['Valproic Acid', 'Inhibits folic acid synthesis; 3x higher birth defects; contraindicated in pregnancy'],
        ],
      },
    ],
  },
  {
    category: 'Gestational & Metabolic Conditions',
    tables: [
      {
        title: 'Pregnancy-Related Conditions',
        headers: ['Topic', 'Key Points'],
        rows: [
          ['Gestational Diabetes Definition', 'Metabolic condition in pregnancy with inadequate insulin response to increased resistance'],
          ['GD Hormonal Cause', 'ACTH and cortisol increase insulin resistance beyond compensation'],
          ['GD Risks - Newborn', 'Macrosomia, perinatal hypoglycemia, perinatal trauma'],
          ['GD Risks - Mother', 'Hypertension, perinatal morbidity, future type II diabetes'],
          ['GD Epidemiology', '1-15% worldwide; higher in Afro-American and Asian women'],
          ['GD Molecular Effects', 'Increased free radicals, abnormal signaling, increased need for folic acid and glutathione'],
        ],
      },
    ],
  },
]

// Abbreviations Data (From All 22 Essay Questions)
const abbreviations = [
  // Q1-Q3
  { abbr: 'APC', full: 'Adenomatous Polyposis Coli' },
  { abbr: 'BAX', full: 'Bcl-2 Associated X Protein' },
  // Q4-Q6
  { abbr: 'ADH', full: 'Alcohol Dehydrogenase' },
  { abbr: 'APAF', full: 'Apoptotic Protease Activating Factor' },
  { abbr: 'CDT', full: 'Carbohydrate-Deficient Transferrin' },
  { abbr: 'FASD', full: 'Fetal Alcohol Spectrum Disorder' },
  { abbr: 'GABA', full: 'Gamma-Aminobutyric Acid' },
  { abbr: 'HDAC', full: 'Histone Deacetylase' },
  { abbr: 'IAP', full: 'Inhibitor of Apoptosis Proteins' },
  { abbr: 'LLO', full: 'Lipid-Linked Oligosaccharide' },
  { abbr: 'NTD', full: 'Neural Tube Defect' },
  { abbr: 'PUMA', full: 'p53 Upregulated Modulator of Apoptosis' },
  { abbr: 'RA', full: 'Retinoic Acid' },
  { abbr: 'RALDH2', full: 'Retinaldehyde Dehydrogenase 2' },
  { abbr: 'Smac', full: 'Small Mitochondria-Derived Activator of Caspases' },
  { abbr: 'THF', full: 'Tetrahydrofolic Acid' },
  { abbr: 'TNFα', full: 'Tumor Necrosis Factor Alpha' },
  { abbr: 'VPA', full: 'Valproic Acid' },
  // Q7-Q9
  { abbr: 'ACTH', full: 'Adrenocorticotropic Hormone' },
  { abbr: 'CoA', full: 'Coenzyme A' },
  { abbr: 'DDB1', full: 'Damaged DNA Binding Protein 1' },
  { abbr: 'E1', full: 'Ubiquitin-Activating Enzyme' },
  { abbr: 'E2', full: 'Ubiquitin-Conjugating Enzyme' },
  { abbr: 'E3', full: 'Ubiquitin Ligase' },
  { abbr: 'FGF', full: 'Fibroblast Growth Factor' },
  { abbr: 'G6P', full: 'Glucose-6-Phosphate' },
  { abbr: 'GATA4', full: 'GATA Binding Protein 4' },
  { abbr: 'GD', full: 'Gestational Diabetes' },
  { abbr: 'HIF1', full: 'Hypoxia-Inducible Factor 1' },
  { abbr: 'HK', full: 'Hexokinase' },
  { abbr: 'HOX', full: 'Homeobox' },
  { abbr: 'MYH6', full: 'α-Myosin Heavy Chain Gene' },
  { abbr: 'NKX2.5', full: 'NK2 Homeobox 5' },
  { abbr: 'PDH', full: 'Pyruvate Dehydrogenase' },
  { abbr: 'PFK', full: 'Phosphofructokinase' },
  { abbr: 'pVHL', full: 'Von Hippel-Lindau Protein' },
  { abbr: 'SUMO', full: 'Small Ubiquitin-like Modifier' },
  { abbr: 'TBX', full: 'T-Box Transcription Factor' },
  { abbr: 'UPS', full: 'Ubiquitin-Proteasome System' },
  { abbr: 'VEGF', full: 'Vascular Endothelial Growth Factor' },
  // Q10-Q12
  { abbr: 'ACE', full: 'Angiotensin Converting Enzyme' },
  { abbr: 'ADP', full: 'Adenosine Diphosphate' },
  { abbr: 'AIF', full: 'Apoptosis Inducing Factor' },
  { abbr: 'DAG', full: 'Diacylglycerol' },
  { abbr: 'DSCR1', full: 'Down Syndrome Critical Region 1' },
  { abbr: 'DYRK1A', full: 'Dual-Specificity Tyrosine Phosphorylation-Regulated Kinase 1A' },
  { abbr: 'FGFR3', full: 'Fibroblast Growth Factor Receptor 3' },
  { abbr: 'GAPDH', full: 'Glyceraldehyde-3-Phosphate Dehydrogenase' },
  { abbr: 'GSK-3', full: 'Glycogen Synthase Kinase 3' },
  { abbr: 'IP3', full: 'Inositol Trisphosphate' },
  { abbr: 'mTOR', full: 'Mammalian Target of Rapamycin' },
  { abbr: 'NAD⁺', full: 'Nicotinamide Adenine Dinucleotide' },
  { abbr: 'NFAT', full: 'Nuclear Factor of Activated T-cells' },
  { abbr: 'PARP', full: 'Poly-ADP-Ribosyl Polymerase' },
  { abbr: 'PKC', full: 'Protein Kinase C' },
  { abbr: 'PLC', full: 'Phospholipase C' },
  // Q13-Q15
  { abbr: 'ABC', full: 'ATP-Binding Cassette' },
  { abbr: 'APP', full: 'Amyloid Precursor Protein' },
  { abbr: 'Aβ', full: 'Beta Amyloid' },
  { abbr: 'CFTR', full: 'Cystic Fibrosis Transmembrane Conductance Regulator' },
  { abbr: 'CREB1', full: 'cAMP Response Element Binding Protein 1' },
  { abbr: 'ECM', full: 'Extracellular Matrix' },
  { abbr: 'ETS2', full: 'Avian Erythroblastosis Virus E26 Oncogene Homolog 2' },
  { abbr: 'FBN1', full: 'Fibrillin-1 Gene' },
  { abbr: 'LTP', full: 'Long-Term Potentiation' },
  { abbr: 'MeCP2', full: 'Methyl-CpG-Binding Protein 2' },
  { abbr: 'TGFβ', full: 'Transforming Growth Factor Beta' },
  { abbr: 'TGFβR2', full: 'TGFβ Receptor Type 2' },
  { abbr: 'ΔF508', full: 'Deletion of Phenylalanine at Position 508' },
  // Q16-Q18
  { abbr: 'AON', full: 'Antisense Oligonucleotide' },
  { abbr: 'BMD', full: 'Becker Muscular Dystrophy' },
  { abbr: 'Dcytb', full: 'Duodenal Cytochrome b' },
  { abbr: 'DMD', full: 'Duchenne Muscular Dystrophy' },
  { abbr: 'DMT1', full: 'Divalent Metal Transporter 1' },
  { abbr: 'HFE', full: 'Human Hemochromatosis Protein' },
  { abbr: 'HJV', full: 'Hemojuvelin' },
  { abbr: 'nNOS', full: 'Neuronal Nitric Oxide Synthase' },
  { abbr: 'ODN', full: 'Oligo Deoxynucleotide' },
  { abbr: 'RGMc', full: 'Repulsive Guidance Molecule c' },
  { abbr: 'ROS', full: 'Reactive Oxygen Species' },
  { abbr: 'TD', full: 'Thanatophoric Dysplasia' },
  { abbr: 'TfR1', full: 'Transferrin Receptor 1' },
  { abbr: 'TfR2', full: 'Transferrin Receptor 2' },
  // Q19-Q22
  { abbr: 'ALDH', full: 'Aldehyde Dehydrogenase' },
  { abbr: 'BMP', full: 'Bone Morphogenetic Protein' },
  { abbr: 'DCC', full: 'Deleted in Colon Carcinoma' },
  { abbr: 'ESC', full: 'Embryonic Stem Cell' },
  { abbr: 'Hb', full: 'Hemoglobin' },
  { abbr: 'HbA₂', full: 'Hemoglobin A2 (α₂δ₂)' },
  { abbr: 'HbF', full: 'Hemoglobin F (Fetal)' },
  { abbr: 'HbH', full: 'Hemoglobin H (β₄ tetramer)' },
  { abbr: 'Hb Barts', full: 'Hemoglobin Barts (γ₄ tetramer)' },
  { abbr: 'HBA1', full: 'Hemoglobin Subunit Alpha 1' },
  { abbr: 'HBA2', full: 'Hemoglobin Subunit Alpha 2' },
  { abbr: 'HBB', full: 'Hemoglobin Subunit Beta' },
  { abbr: 'HIF1α', full: 'HIF1 Alpha Subunit' },
  { abbr: 'HSC', full: 'Hematopoietic Stem Cell' },
  { abbr: 'ICM', full: 'Inner Cell Mass' },
  { abbr: 'iPSC', full: 'Induced Pluripotent Stem Cell' },
  { abbr: 'Klf4', full: 'Kruppel-Like Factor 4' },
  { abbr: 'LFS', full: 'Li-Fraumeni Syndrome' },
  { abbr: 'LOH', full: 'Loss of Heterozygosity' },
  { abbr: 'Nanog', full: 'Nanog Homeobox' },
  { abbr: 'Oct4', full: 'Octamer-Binding Transcription Factor 4' },
  { abbr: 'SCID', full: 'Severe Combined Immunodeficiency' },
  { abbr: 'Sox2', full: 'SRY-Box Transcription Factor 2' },
  { abbr: 'VHL', full: 'Von Hippel-Lindau' },
  { abbr: 'c-Myc', full: 'Cellular Myc' },
]

export function ReferencePage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // Initialize as collapsed - no animation needed
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    localStorage.setItem('sidebarCollapsed', 'true')
    return true
  })
  const [activeTab, setActiveTab] = useState<'tables' | 'abbreviations'>('tables')
  const [searchQuery, setSearchQuery] = useState('')

  const handleBack = () => {
    navigate('/electives/body-development')
  }

  // Filter abbreviations by search query
  const filteredAbbreviations = useMemo(() => {
    if (!searchQuery.trim()) return abbreviations
    const query = searchQuery.toLowerCase()
    return abbreviations.filter(
      (item) =>
        item.abbr.toLowerCase().includes(query) ||
        item.full.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Group abbreviations by first letter
  const groupedAbbreviations = useMemo(() => {
    const groups: Record<string, typeof abbreviations> = {}
    filteredAbbreviations.forEach((item) => {
      const firstLetter = item.abbr[0].toUpperCase()
      if (!groups[firstLetter]) {
        groups[firstLetter] = []
      }
      groups[firstLetter].push(item)
    })
    return groups
  }, [filteredAbbreviations])

  return (
    <div className="min-h-screen bg-background flex">
      {/* Aurora Gradient Background - balanced intensity */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            opacity: [0.5, 0.75, 0.5],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-[900px] h-[900px] rounded-full
                     bg-gradient-to-br from-rose-300/55 via-pink-300/40 to-transparent
                     dark:from-rose-500/45 dark:via-pink-500/28 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full
                     bg-gradient-to-tl from-rose-400/50 via-pink-400/35 to-transparent
                     dark:from-rose-600/38 dark:via-pink-600/25 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.45, 0.65, 0.45],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] rounded-full
                     bg-gradient-to-br from-pink-300/45 via-rose-300/35 to-transparent
                     dark:from-pink-500/35 dark:via-rose-500/25 dark:to-transparent
                     blur-3xl"
        />
      </div>

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

      <div className="flex-1 flex flex-col relative z-10">
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Hub
            </Button>
          </div>
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3
                           bg-gradient-to-r from-rose-600 via-pink-500 to-rose-500
                           dark:from-rose-400 dark:via-pink-400 dark:to-rose-400
                           bg-clip-text text-transparent">
              Reference Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive summary tables and abbreviations from all 22 essay questions
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <button
              onClick={() => setActiveTab('tables')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === 'tables'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-card border border-border/50 text-muted-foreground hover:border-rose-400/60 dark:hover:border-rose-500/40'
              }`}
            >
              <TableIcon className="w-4 h-4" />
              Summary Tables
            </button>
            <button
              onClick={() => setActiveTab('abbreviations')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === 'abbreviations'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-card border border-border/50 text-muted-foreground hover:border-rose-400/60 dark:hover:border-rose-500/40'
              }`}
            >
              <BookText className="w-4 h-4" />
              Abbreviations
            </button>
          </motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            {activeTab === 'tables' ? (
              <motion.div
                key="tables"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {summaryTables.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    {/* Category Header */}
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                      className="text-2xl lg:text-3xl font-bold mb-6
                                 bg-gradient-to-r from-rose-600 to-pink-600
                                 dark:from-rose-400 dark:to-pink-400
                                 bg-clip-text text-transparent"
                    >
                      {category.category}
                    </motion.h2>

                    {/* Tables in Category */}
                    <div className="space-y-8">
                      {category.tables.map((table, tableIndex) => (
                        <motion.div
                          key={tableIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + tableIndex * 0.05 }}
                          className="bg-white dark:bg-[#1A1F3A] rounded-xl shadow-lg border border-border/50 overflow-hidden"
                        >
                          {/* Table Title */}
                          <div className="px-6 py-4 bg-gradient-to-r from-rose-100 to-pink-100
                                          dark:from-rose-950/40 dark:to-pink-950/40
                                          border-b-2 border-rose-500">
                            <h3 className="text-xl font-bold text-rose-700 dark:text-rose-300">
                              {table.title}
                            </h3>
                          </div>

                          {/* Table Content */}
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-gradient-to-r from-rose-50 to-pink-50
                                               dark:from-rose-950/20 dark:to-pink-950/20
                                               border-b border-rose-200 dark:border-rose-800">
                                  {table.headers.map((header, headerIndex) => (
                                    <th
                                      key={headerIndex}
                                      className="px-4 py-3 text-left text-xs font-bold text-rose-700
                                                 dark:text-rose-300 uppercase tracking-wider"
                                    >
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {table.rows.map((row, rowIndex) => (
                                  <tr
                                    key={rowIndex}
                                    className={`border-b border-border/30 transition-colors duration-200
                                                hover:bg-rose-50 dark:hover:bg-rose-950/10 ${
                                      rowIndex % 2 === 0
                                        ? 'bg-card'
                                        : 'bg-muted/20'
                                    }`}
                                  >
                                    {row.map((cell, cellIndex) => (
                                      <td
                                        key={cellIndex}
                                        className="px-4 py-3 text-sm text-foreground/90"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="abbreviations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search abbreviations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-border/50
                                 bg-card text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent
                                 transition-all duration-200"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {filteredAbbreviations.length} abbreviation{filteredAbbreviations.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Abbreviations Grid */}
                <div className="space-y-8">
                  {Object.keys(groupedAbbreviations)
                    .sort()
                    .map((letter, letterIndex) => (
                      <motion.div
                        key={letter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: letterIndex * 0.05 }}
                      >
                        {/* Letter Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500
                                          flex items-center justify-center shadow-lg shadow-rose-500/30">
                            <span className="text-2xl font-bold text-white">{letter}</span>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-rose-300 via-pink-300 to-transparent
                                          dark:from-rose-700 dark:via-pink-700" />
                        </div>

                        {/* Abbreviations List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {groupedAbbreviations[letter].map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: letterIndex * 0.05 + itemIndex * 0.02 }}
                              className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-[#1A1F3A]
                                         border border-border/50 hover:border-rose-400/60 dark:hover:border-rose-500/40
                                         hover:shadow-md transition-all duration-200"
                            >
                              <span className="font-mono font-bold text-rose-600 dark:text-rose-400 text-sm
                                               px-2 py-1 rounded bg-rose-100 dark:bg-rose-950/40
                                               border border-rose-200 dark:border-rose-800/30 whitespace-nowrap">
                                {item.abbr}
                              </span>
                              <span className="text-sm text-foreground/90 leading-relaxed">
                                {item.full}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredAbbreviations.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      No abbreviations found matching "{searchQuery}"
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
