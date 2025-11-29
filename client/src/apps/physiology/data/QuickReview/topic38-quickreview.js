/**
 * Quick Review content for Topic 38 - Cardiac muscle: cellular electrophysiology
 * Auto-generated - ALL 8 Learning Objectives
 */
const topic38QuickReview = {
  topicId: 'topic-38',
  topicNumber: 38,
  learningObjectives: {
    'lo-1': {
      title: 'Sketch a typical action potential in a ventricular muscle and a pacemaker cell, labeling both the voltage and time axes accurately. Describe how ionic currents contribute to the four phases of the cardiac action potential. Use this information to explain differences in the shapes of action potentials recorded from different cardiac cells.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Ventricular vs Pacemaker Action Potentials',
          critical: true
        },
        {
          type: 'comparison',
          left: {
            title: 'Ventricular Muscle',
            items: [
              'Phase 0: Fast upstroke to +20 mV (Na+ channels)',
              'Phase 1: Notch (transient K+ efflux)',
              'Phase 2: Plateau ~0 mV for 200-300 ms (Ca2+ in, K+ out balanced)',
              'Phase 3: Repolarization (K+ efflux)',
              'Phase 4: Stable at -90 mV (IK1 channels)'
            ]
          },
          right: {
            title: 'Pacemaker Cells',
            items: [
              'Phase 0: Slow upstroke to 0-10 mV (Ca2+ channels only)',
              'Phase 1: Absent',
              'Phase 2: Minimal plateau',
              'Phase 3: Repolarization (K+ efflux)',
              'Phase 4: Unstable at -60 mV (spontaneous depolarization)'
            ]
          }
        },
        {
          type: 'table',
          headers: ['Phase', 'Ventricular Channels', 'Pacemaker Channels'],
          rows: [
            ['0', 'Fast Na+ channels (steep)', 'L-type Ca2+ (gradual)'],
            ['1', 'Transient K+ (Ito)', 'Absent'],
            ['2', 'L-type Ca2+ + delayed K+ (IKs, IKr)', 'Minimal'],
            ['3', 'Voltage-gated K+', 'Voltage-gated K+'],
            ['4', 'IK1 + Na+/K+ pump (stable)', 'If (funny) + T-type Ca2+ (unstable)']
          ]
        },
        {
          type: 'keypoint',
          text: 'Key difference: Ventricular cells have fast Na+ channels and stable Phase 4; pacemaker cells lack fast Na+ channels and have unstable Phase 4 with funny current (If) causing automaticity',
          critical: true
        }
      ]
    },
    'lo-2': {
      title: 'Describe the ion channels that contribute to each phase of the cardiac action potential. How do differences in channel population influence the shape of the action potential in the nodal tissue and in the working myocardium?',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Ion Channels Across Cardiac Action Potential Phases',
          critical: true
        },
        {
          type: 'table',
          headers: ['Phase', 'Working Myocardium', 'Nodal Tissue', 'Channel Names'],
          rows: [
            ['0', 'Fast Na+ channels', 'L-type Ca2+ channels', 'Na+: Nav1.5 / Ca2+: Cav1.2'],
            ['1', 'Transient outward K+', 'Absent', 'Kv4.3 (Ito)'],
            ['2', 'L-type Ca2+ + delayed K+', 'Minimal plateau', 'Cav1.2, Kv7.1 (IKs), Kv11.1 (IKr)'],
            ['3', 'Voltage-gated K+', 'Voltage-gated K+', 'IK channels'],
            ['4', 'Inward rectifier K+ (stable)', 'HCN + T-type Ca2+ (unstable)', 'Kir2.1 (IK1) / HCN, Cav3.1, Cav3.2']
          ]
        },
        {
          type: 'keypoint',
          text: 'Channel population determines automaticity: High IK1 + fast Na+ = stable working myocardium; Low IK1 + HCN channels = automatic nodal tissue',
          critical: true
        },
        {
          type: 'list',
          intro: 'Critical channel differences that create automaticity:',
          critical: true,
          items: [
            'Working myocardium: High fast sodium channel density → steep upstroke',
            'Working myocardium: High IK1 (Kir2.1) → stable -90 mV resting potential',
            'Nodal tissue: NO fast sodium channels → gradual Ca2+-dependent upstroke',
            'Nodal tissue: LOW IK1 expression → unstable resting potential',
            'Nodal tissue: HCN channels (funny current If) → spontaneous depolarization',
            'Nodal tissue: T-type Ca2+ channels → late diastolic depolarization'
          ]
        }
      ]
    },
    'lo-3': {
      title: 'Explain what accounts for the long duration of the cardiac action potential and the resultant long refractory period. What is the advantage of the long plateau of the cardiac action potential and the long refractory period?',
      isCritical: false,
      blocks: [
        {
          type: 'header',
          text: 'Long Cardiac Action Potential & Refractory Period'
        },
        {
          type: 'paragraph',
          text: 'Cardiac action potentials last 200-300 ms (vs skeletal muscle 1-2 ms) due to sustained L-type Ca2+ channel opening during Phase 2 plateau, balanced by slowly activating delayed rectifier K+ channels.'
        },
        {
          type: 'keypoint',
          text: 'Na+ channels remain inactivated throughout the plateau and most of repolarization, creating absolute refractory period of 200-300 ms'
        },
        {
          type: 'list',
          intro: 'Advantages of long plateau and refractory period:',
          items: [
            'Prevents tetany: Action potentials stay separated, allowing complete relaxation between beats',
            'Ensures adequate filling time: Ventricles fully relax and fill with blood from atria',
            'Protects against arrhythmias: Blocks rapid repetitive stimulation that could cause fibrillation',
            'Sustained contraction: Prolonged Ca2+ influx triggers complete calcium-induced calcium release from SR',
            'Effective blood ejection: Prolonged ventricular contraction ejects blood efficiently'
          ]
        },
        {
          type: 'clinical',
          text: 'Unlike skeletal muscle which can tetanize with rapid stimulation, cardiac muscle MUST relax between beats to refill with blood. The long refractory period is essential for heart function.'
        }
      ]
    },
    'lo-4': {
      title: 'Explain the ionic mechanism of pacemaker automacy and rhythmicity.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Pacemaker Automaticity Mechanism',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Automaticity is spontaneous rhythmic action potential generation without external stimulation, caused by unstable Phase 4 pacemaker potential.',
          critical: true
        },
        {
          type: 'steps',
          intro: 'The pacemaker cycle operates through these ionic mechanisms:',
          critical: true,
          items: [
            'After repolarization to ~-60 mV, funny current (If) through HCN channels activates',
            'If allows Na+ influx (plus small Ca2+ contribution), causing slow spontaneous depolarization',
            'Low IK1 expression prevents membrane stabilization, allowing depolarization to continue',
            'At ~-55 mV, T-type Ca2+ channels (Cav3.1, Cav3.2) activate, adding Ca2+ influx',
            'At threshold ~-40 mV, L-type Ca2+ channels open → Phase 0 upstroke',
            'Voltage-gated K+ channels repolarize membrane to -60 mV → cycle repeats'
          ]
        },
        {
          type: 'keypoint',
          text: 'Rhythmicity depends on pacemaker slope: Steeper slope = faster heart rate; Shallower slope = slower rate. SA node intrinsic rate: ~100 AP/min',
          critical: true
        },
        {
          type: 'formula',
          formula: 'Heart Rate = 1 / (Time for pacemaker depolarization from -60 mV to threshold)',
          explanation: 'Steeper Phase 4 slope shortens time to threshold, increasing heart rate'
        }
      ]
    },
    'lo-5': {
      title: 'Beginning in the SA node, diagram the normal sequence of cardiac activation (depolarisation) and the role played by the specialized conducting system.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Normal Cardiac Conduction Sequence',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Electrical impulse propagation through the heart:',
          critical: true,
          items: [
            'SA node (near superior vena cava in right atrium) initiates impulse at ~100 AP/min',
            'Atrial conduction: Bachmann bundle → left atrium; Internodal tracts → AV node',
            'Atrial depolarization and contraction occur (P wave on ECG)',
            'AV node (atrial-ventricular junction) introduces ~0.1 second delay',
            'Bundle of His in interventricular septum receives impulse after delay',
            'Right and left bundle branches (left divides into anterior/posterior fascicles)',
            'Purkinje fibers in subendocardium conduct at 2-4 m/s (fastest conduction)',
            'Ventricular depolarization spreads from endocardium to epicardium'
          ]
        },
        {
          type: 'table',
          headers: ['Structure', 'Location', 'Conduction Speed', 'Function'],
          rows: [
            ['SA node', 'Right atrium near SVC', '~1 m/s', 'Primary pacemaker'],
            ['Atrial pathways', 'Both atria', '~1 m/s', 'Synchronize atrial contraction'],
            ['AV node', 'Atrial-ventricular junction', '0.02-0.05 m/s', 'Delay for filling'],
            ['Bundle of His', 'Interventricular septum', '~1 m/s', 'Bridge to ventricles'],
            ['Bundle branches', 'Septum', '~2 m/s', 'Distribute to ventricles'],
            ['Purkinje fibers', 'Subendocardium', '2-4 m/s', 'Rapid ventricular spread']
          ]
        },
        {
          type: 'keypoint',
          text: 'Timing: SA node (0 s) → Atrial activation (0.03 s) → AV delay (0.03-0.16 s) → Bundle branches (0.16-0.22 s) → Complete ventricular activation (0.22 s)',
          critical: true
        }
      ]
    },
    'lo-6': {
      title: 'Explain why the AV node- His bundle is the only normal electrical pathway between the atria and the ventricles, and explain the functional significance of the slow conduction through the AV node.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'AV Node as Sole Atrioventricular Pathway',
          critical: true
        },
        {
          type: 'keypoint',
          text: 'The annulus fibrosus (fibrous skeleton) forms an electrically insulating ring separating atrial and ventricular myocardium. Only the AV node-His bundle penetrates this barrier.',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'AV node conduction is slow (0.02-0.05 m/s) due to small cell diameter, fewer gap junctions, and reliance on slow L-type Ca2+ channels instead of fast Na+ channels.',
          critical: true
        },
        {
          type: 'list',
          intro: 'Functional significance of AV delay (~0.1 second):',
          critical: true,
          items: [
            'Allows atria to complete contraction and fully fill ventricles before ventricular systole',
            'Optimizes end-diastolic volume and cardiac output',
            'Acts as rate-limiting filter preventing dangerously rapid atrial rates from reaching ventricles',
            'Protects ventricles during atrial fibrillation/flutter',
            'Ensures coordinated transition from atrial to ventricular systole',
            'Prevents simultaneous atrial-ventricular contraction that would impair filling'
          ]
        },
        {
          type: 'clinical',
          text: 'Clinical importance: AV node can be pharmacologically controlled (Ca2+ blockers, beta-blockers) or ablated to manage ventricular rate in arrhythmias. The AV node\'s filtering function is life-saving in atrial fibrillation.'
        }
      ]
    },
    'lo-7': {
      title: 'Contrast the sympathetic and parasympathetic nervous system influence on heart rate and cardiac excitation in general. Define the terms: positive and negative chronotropy and dromotropy, and explain the ionic background of the effects in the SA node and in the AV node.',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Autonomic Control of Cardiac Excitation',
          critical: true
        },
        {
          type: 'table',
          headers: ['Effect', 'Definition', 'Sympathetic', 'Parasympathetic'],
          rows: [
            ['Positive chronotropy', 'Increased heart rate', 'SA: 100→200 AP/min', '—'],
            ['Negative chronotropy', 'Decreased heart rate', '—', 'SA: 100→60-70 AP/min'],
            ['Positive dromotropy', 'Faster AV conduction', 'Shortened AV delay', '—'],
            ['Negative dromotropy', 'Slower AV conduction', '—', 'Prolonged AV delay']
          ]
        },
        {
          type: 'comparison',
          left: {
            title: 'Sympathetic (NE, β1 receptors)',
            items: [
              'SA node: ↑cAMP → ↑If (steeper slope)',
              'SA node: ↑L-type and T-type Ca2+ channels',
              'Faster depolarization to threshold',
              'AV node: PKA phosphorylates Ca2+ channels',
              'AV node: ↑Ca2+ influx → faster conduction'
            ]
          },
          right: {
            title: 'Parasympathetic (ACh, M2 receptors)',
            items: [
              'SA node: ↑K+ channel activity (hyperpolarization)',
              'SA node: Flatter pacemaker slope',
              'SA node: ↓cAMP → ↓If',
              'SA node: ↓T-type Ca2+ channels',
              'AV node: ↑K+ efflux, ↓Ca2+ channels',
              'AV node: Slower conduction'
            ]
          }
        },
        {
          type: 'keypoint',
          text: 'At rest: Parasympathetic vagal tone dominates, suppressing SA node from intrinsic 100 to resting 60-70 AP/min',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Sympathetic also produces positive inotropy (↑contractility), positive lusitropy (↑relaxation rate), and positive bathmotropy (↑excitability). Parasympathetic has minimal ventricular effects.',
          critical: true
        }
      ]
    },
    'lo-8': {
      title: 'How does hyperkalaemia affect the excitability of the cardiac muscle?',
      isCritical: true,
      blocks: [
        {
          type: 'header',
          text: 'Hyperkalemia Effects on Cardiac Excitability',
          critical: true
        },
        {
          type: 'paragraph',
          text: 'Hyperkalemia (elevated extracellular K+ above normal 3.4-5.2 mM) reduces the K+ gradient, making resting membrane potential less negative (from -90 mV toward -80 or -75 mV) according to the Nernst equation.',
          critical: true
        },
        {
          type: 'steps',
          intro: 'Progressive effects of hyperkalemia on excitability:',
          critical: true,
          items: [
            'Initial paradoxical ↑excitability: Membrane closer to threshold, more easily stimulated',
            'Sustained depolarization → Na+ channels enter inactivated state and remain unavailable',
            'Decreased AP amplitude and upstroke velocity (fewer Na+ channels available)',
            'Shortened AP duration (enhanced K+ efflux accelerates repolarization)',
            'Prolonged refractory period (Na+ channels need more negative potential to recover)',
            'Slowed conduction velocity through myocardium',
            'Severe cases → ventricular tachycardia, fibrillation, or asystole'
          ]
        },
        {
          type: 'keypoint',
          text: 'The paradox: Hyperkalemia initially increases excitability (closer to threshold) but ultimately DECREASES excitability by inactivating Na+ channels',
          critical: true
        },
        {
          type: 'list',
          intro: 'ECG manifestations of hyperkalemia:',
          items: [
            'Peaked tall T waves (earliest sign)',
            'Widened QRS complex (slow conduction)',
            'Prolonged PR interval (AV node slowing)',
            'Loss of P wave (severe cases)',
            'Sine wave pattern (pre-arrest)'
          ]
        },
        {
          type: 'clinical',
          text: 'Emergency treatment: Calcium gluconate (stabilizes membrane), insulin + glucose (shifts K+ into cells), sodium bicarbonate (alkalinizes), dialysis (removes K+). Hyperkalemia is a life-threatening electrolyte emergency.'
        }
      ]
    }
  }
};

export default topic38QuickReview;
