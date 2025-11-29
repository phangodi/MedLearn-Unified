/**
 * Quick Review content for Topic 40 - Cardiac work and metabolism. The coronary circulation
 * Auto-generated - ALL 8 Learning Objectives
 */
const topic40QuickReview = {
  topicId: 'topic-40',
  topicNumber: 40,
  learningObjectives: {
    'lo-1': {
      title: 'Describe the components of the external work of the heart (pressure-volume work and kinetic work) and the mechanical efficiency of the cardiac work.',
      isCritical: false,
      blocks: [
        { type: 'header', text: 'Components of External Cardiac Work', critical: false },
        {
          type: 'list',
          intro: 'The heart performs two types of external work:',
          items: [
            'Pressure-Volume Work (99%): Energy to generate pressure moving blood from ventricles into arteries, calculated as W = p × V',
            'Kinetic Work (1%): Energy to impart velocity to ejected blood, calculated as W = ½mv², becomes significant in high cardiac output states or valve disorders'
          ],
          critical: false
        },
        { type: 'formula', formula: 'Mechanical Efficiency = (External Work / Total Energy) × 100', explanation: 'Ratio of useful work to total energy expenditure', critical: false },
        { type: 'keypoint', text: 'Normal heart mechanical efficiency is only 20-25%; remaining 75-80% dissipates as heat for myocardial contraction and cellular processes', critical: false },
        {
          type: 'list',
          intro: 'Efficiency is reduced by:',
          items: [
            'Increased afterload (hypertension)',
            'Excessive heart rates reducing diastolic filling',
            'Valvular disorders (e.g., aortic stenosis)',
            'Heart failure with ineffective contractions'
          ],
          critical: false
        }
      ]
    },
    'lo-2': {
      title: 'Characterize the substrates supplying the energy metabolism of cardiac muscle fibers, and describe quantitatively the contribution of the cardiac muscle to resting oxygen consumption.',
      isCritical: false,
      blocks: [
        { type: 'header', text: 'Cardiac Energy Metabolism', critical: false },
        { type: 'paragraph', text: 'Cardiac muscle has high continuous energy demand with mitochondria occupying ~30% of cell volume. The heart is metabolically flexible, using multiple substrates depending on availability and physiological state.', critical: false },
        {
          type: 'table',
          headers: ['Substrate', 'Contribution', 'Conditions'],
          rows: [
            ['Fatty acids', '60-80%', 'Primary source at rest and fasting via β-oxidation'],
            ['Glucose', '10-30%', 'Increased during workload or hypoxia via GLUT1/GLUT4'],
            ['Lactate', '10-20%', 'Especially during exercise, converted to pyruvate'],
            ['Ketone bodies', 'Variable', 'Increases during fasting, diabetes, or heart failure']
          ],
          critical: false
        },
        { type: 'keypoint', text: 'At rest, the heart accounts for 4-5% of total oxygen consumption despite comprising only 0.5% of body mass (~8-10 ml O₂/min)', critical: false },
        { type: 'clinical', text: 'Oxygen extraction is already high at 70-80% at rest, so increased demand must be met by increasing coronary blood flow, not extraction' }
      ]
    },
    'lo-3': {
      title: 'Describe the phasic flow of blood to the ventricular myocardium through an entire cardiac cycle.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Phasic Coronary Blood Flow', critical: true },
        { type: 'paragraph', text: 'Coronary blood flow varies throughout the cardiac cycle because the myocardium compresses coronary vessels during systole and relaxes during diastole. This phasic pattern is most pronounced in the left ventricle.', critical: true },
        {
          type: 'steps',
          intro: 'Flow through the four phases of the cardiac cycle:',
          items: [
            'Isovolumetric Contraction (Early Systole): Intraventricular pressure rises sharply, compressing coronary vessels. LV flow significantly reduced or ceases entirely, especially in subendocardium. RV flow less affected due to lower pressures.',
            'Ventricular Ejection (Late Systole): Peak intraventricular pressure. LV coronary flow remains suppressed due to persistent vessel compression. RV flow relatively preserved due to lower wall tension.',
            'Isovolumetric Relaxation (Early Diastole): Aortic valve closes, allowing blood into coronary arteries. LV flow increases dramatically, reaching peak—this accounts for majority of LV perfusion. RV flow increases moderately.',
            'Ventricular Filling (Mid-Late Diastole): Ventricular pressure remains low. LV flow continues steady but decreases compared to early diastole. RV flow is steady and less phasic.'
          ],
          critical: true
        },
        { type: 'keypoint', text: 'Left ventricular perfusion occurs predominantly during diastole; right ventricular flow is more continuous throughout the cycle', critical: true },
        { type: 'clinical', text: 'Tachycardia shortens diastole, reducing LV perfusion time and increasing ischemia risk, especially in the subendocardium' }
      ]
    },
    'lo-4': {
      title: 'Contrast this cyclic variation in myocardial flow a) in the walls of the right and left ventricles and b) in the subendocardium and the subepicardum of the left ventricle.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Right Ventricle vs Left Ventricle Flow', critical: true },
        {
          type: 'comparison',
          left: {
            title: 'Right Ventricle',
            items: [
              'Low systolic pressure (~15-25 mmHg)',
              'Minimal coronary vessel compression',
              'Blood flow relatively even during systole and diastole',
              'Continuous coronary flow throughout cardiac cycle',
              'Minor dependence on diastolic relaxation'
            ]
          },
          right: {
            title: 'Left Ventricle',
            items: [
              'High systolic pressure (~120 mmHg)',
              'Significant coronary vessel compression',
              'Flow predominantly during diastole',
              'Flow suppressed or halted during systole',
              'Highly diastolic-dependent coronary flow'
            ]
          },
          critical: true
        },
        { type: 'header', text: 'Subendocardium vs Subepicardium Flow', critical: true },
        {
          type: 'comparison',
          left: {
            title: 'Subendocardium (Inner)',
            items: [
              'Highest intramural pressure during systole',
              'Greatest wall stress (proximity to cavity)',
              'More metabolically active',
              'Vessels almost completely occluded during systole',
              'Highly dependent on diastolic perfusion',
              'Most susceptible to ischemia'
            ]
          },
          right: {
            title: 'Subepicardium (Outer)',
            items: [
              'Lower intramural pressure',
              'Less wall stress',
              'Lower metabolic demand',
              'Some flow continues during systole',
              'Less dependent on diastolic perfusion',
              'More resistant to ischemia'
            ]
          },
          critical: true
        },
        { type: 'clinical', text: 'Subendocardium is particularly vulnerable during tachycardia (reduced diastolic time) or hypotension (reduced coronary perfusion pressure)—explains why ischemia typically begins subendocardially' }
      ]
    },
    'lo-5': {
      title: 'Give the reference values of oxygen extraction and arteriovenous oxygen difference in the coronary circulation, and explain how these values are unique when compared with other body organs.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Coronary Oxygen Extraction Values', critical: true },
        {
          type: 'table',
          headers: ['Parameter', 'Coronary Circulation', 'Comparison'],
          rows: [
            ['Oxygen Extraction', '65-75%', 'Skeletal muscle: 20-25%, Brain: 30-35%'],
            ['AVDO₂', '~114 ml/L', 'Body average: ~50 ml/L (more than double!)'],
            ['Resting O₂ consumption', '8-10 ml/min', '4-5% of total despite 0.5% body mass']
          ],
          critical: true
        },
        { type: 'keypoint', text: 'The heart extracts oxygen near maximally even at rest—this is unique among organs', critical: true },
        {
          type: 'list',
          intro: 'Why these values are unique:',
          items: [
            'Myocardium relies almost entirely on oxidative metabolism with minimal anaerobic capacity',
            'Oxygen extraction already near maximum at rest, cannot significantly increase during stress',
            'Heart is continuously active with high constant metabolic demand',
            'Increased oxygen demand must be met by increasing coronary blood flow, not extraction',
            'Heart has little reserve capacity for oxygen extraction—highly sensitive to ischemia'
          ],
          critical: true
        },
        { type: 'clinical', text: 'Any reduction in coronary blood flow quickly causes ischemia because extraction is already maximal. This makes the heart particularly vulnerable to atherosclerosis, tachycardia, or hypotension.' }
      ]
    },
    'lo-6': {
      title: 'Explain the mechanism whereby coronary blood flow is coupled to myocardial workload, and identify the humoral mechanisms that cause coronary vasodilation and increased blood flow',
      isCritical: false,
      blocks: [
        { type: 'header', text: 'Metabolic Autoregulation of Coronary Flow', critical: false },
        { type: 'paragraph', text: 'Coronary blood flow is tightly matched to metabolic demands through metabolic autoregulation. Since the heart extracts oxygen near maximally at rest (~70-80%), the only way to meet increased demand is to increase coronary blood flow.', critical: false },
        {
          type: 'steps',
          intro: 'Coupling mechanism:',
          items: [
            'Increased myocardial workload raises heart rate, contractility, and wall stress',
            'Higher oxygen consumption leads to local hypoxia and metabolite accumulation',
            'Vasodilatory metabolites are released, acting on coronary arterioles',
            'Vasodilation occurs, increasing blood flow',
            'Flow-mediated vasodilation: Shear stress releases more nitric oxide, amplifying effect'
          ],
          critical: false
        },
        {
          type: 'table',
          headers: ['Vasodilator', 'Source', 'Mechanism'],
          rows: [
            ['Adenosine', 'ATP breakdown during hypoxia', 'Binds A2 receptors → ↑cAMP → smooth muscle relaxation (MOST POTENT)'],
            ['Nitric Oxide (NO)', 'Endothelial cells (shear stress)', 'Activates guanylyl cyclase → ↑cGMP → relaxation'],
            ['Prostacyclin (PGI₂)', 'Endothelial cells', 'Increases cAMP → relaxation + inhibits platelet aggregation'],
            ['Bradykinin', 'Inflammation/shear stress', 'Stimulates NO and prostaglandin release'],
            ['CO₂ and H⁺', 'Increased metabolism/hypoxia', 'Directly relax vascular smooth muscle (lower pH)']
          ],
          critical: false
        },
        { type: 'keypoint', text: 'Adenosine is the most potent local vasodilator, released immediately during hypoxia or increased ATP breakdown', critical: false }
      ]
    },
    'lo-7': {
      title: 'Explain how sympathethic stimulation alters cardiac activity and coronary vascular resistance.',
      isCritical: true,
      blocks: [
        { type: 'header', text: 'Sympathetic Effects on Cardiac Activity', critical: true },
        {
          type: 'list',
          intro: 'Via β1-adrenergic receptors (increased cAMP and PKA):',
          items: [
            'Positive Chronotropy: ↑ heart rate via enhanced funny currents and Ca²⁺ channels in SA node',
            'Positive Inotropy: ↑ contractility via increased Ca²⁺ influx and release in myocytes',
            'Positive Lusitropy: ↑ relaxation via PKA phosphorylating phospholamban, accelerating Ca²⁺ reuptake',
            'Positive Dromotropy: ↑ AV conduction velocity via PKA phosphorylating ion channels'
          ],
          critical: true
        },
        { type: 'header', text: 'Direct Effects on Coronary Vascular Resistance', critical: true },
        {
          type: 'comparison',
          left: {
            title: 'α1-Adrenergic (Vasoconstriction)',
            items: [
              'Norepinephrine binds α1 receptors',
              'Activates phospholipase C',
              'Increases intracellular Ca²⁺',
              'Primarily in epicardial arteries',
              'Minor role during exercise'
            ]
          },
          right: {
            title: 'β2-Adrenergic (Vasodilation)',
            items: [
              'NE/Epi bind β2 receptors',
              'Increases cAMP and PKA',
              'Smooth muscle relaxation',
              'In coronary arterioles',
              'Promotes flow increase'
            ]
          },
          critical: true
        },
        { type: 'header', text: 'Indirect Effects (Metabolic)', critical: true },
        { type: 'paragraph', text: 'Increased myocardial oxygen demand (from ↑HR, ↑contractility, ↑wall tension) triggers metabolic vasodilation through adenosine release, NO from shear stress, and accumulated CO₂, H⁺, and lactate. This metabolic vasodilation directs flow to high-demand areas like subendocardium.', critical: true },
        { type: 'keypoint', text: 'During exercise, indirect metabolic effects OVERRIDE α1-mediated vasoconstriction, allowing coronary flow to increase 4-5 fold with decreased vascular resistance', critical: true }
      ]
    },
    'lo-8': {
      title: 'Identify the importance of direct and indirect sympathethic nervous system effects in determining coronary blood flow during exercise?',
      isCritical: false,
      blocks: [
        { type: 'header', text: 'Direct vs Indirect SNS Effects During Exercise', critical: false },
        {
          type: 'comparison',
          left: {
            title: 'Direct SNS Effects (Minor Role)',
            items: [
              'α1-receptor vasoconstriction (mainly epicardial arteries)',
              'β2-receptor vasodilation',
              'Competing effects partially cancel out',
              'Overall contribution: minimal during exercise'
            ]
          },
          right: {
            title: 'Indirect SNS Effects (DOMINANT)',
            items: [
              'Increased myocardial O₂ demand (↑HR, ↑inotropy, ↑wall tension)',
              'Metabolic vasodilation (adenosine, NO, CO₂, H⁺, lactate)',
              'Preferential flow to high-demand areas (subendocardium)',
              'Overall: enables 4-5 fold flow increase'
            ]
          },
          critical: false
        },
        { type: 'keypoint', text: 'Indirect effects are MORE IMPORTANT because metabolic vasodilation overrides α1 vasoconstriction, ensuring flow matches demand', critical: false },
        { type: 'paragraph', text: 'This dominance of indirect effects is necessary because the myocardium already extracts 65-75% of oxygen at rest. Therefore, increased oxygen demand during exercise can ONLY be met by increasing coronary blood flow, driven primarily by metabolic signals.', critical: false },
        { type: 'clinical', text: 'Coronary flow reserve allows up to 4-5 fold increase in flow during maximal exercise. This reserve is entirely dependent on metabolic autoregulation overcoming direct sympathetic vasoconstriction.' }
      ]
    }
  }
};

export default topic40QuickReview;
