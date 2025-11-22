const topic38 = {
  id: 'topic-38',
  mcqs: ['mcq-3'],
  number: 38,
  title: 'Cardiac muscle: cellular electrophysiology',
  subtitle: 'Comprehensive study of cardiac action potentials in working myocardium and nodal tissue, ionic mechanisms of automaticity, cardiac conduction system, autonomic regulation, and effects of hyperkalemia on cardiac excitability.',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true,
      title: '>>Sketch a typical action potential in a ventricular muscle and a pacemaker cell, labeling both the voltage and time axes accurately. Describe how ionic currents contribute to the four phases of the cardiac action potential. Use this information to explain differences in the shapes of action potentials recorded from different cardiac cells.<<',
      keyPoints: [
        'Ventricular muscle action potential: Fast upstroke (Phase 0: +20 mV), notch (Phase 1), plateau (Phase 2: ~0 mV for 200-300 ms), repolarization (Phase 3), stable resting potential (Phase 4: -90 mV)',
        'Pacemaker cell action potential: Slow upstroke (Phase 0: reaches 0 to +10 mV), no Phase 1, minimal plateau, repolarization (Phase 3), unstable pacemaker potential (Phase 4: -60 mV depolarizing to threshold)',
        'Phase 0 ventricular: Fast voltage-gated sodium channels (I_Na) cause rapid sodium ion influx creating steep upstroke; pacemaker cells lack fast sodium channels, using L-type calcium channels (I_CaL) for slower calcium ion influx',
        'Phase 1 ventricular only: Transient outward potassium current (I_to) causes brief potassium efflux creating characteristic notch; absent in pacemaker cells',
        'Phase 2 ventricular: Balance between inward L-type calcium current (I_CaL) and outward delayed rectifier potassium currents (I_Ks, I_Kr) maintains prolonged plateau; minimal or absent in pacemaker cells',
        'Phase 3 both cell types: Voltage-gated potassium channels (I_K) dominate with potassium efflux while calcium channels close, returning membrane to negative potential',
        'Phase 4 differences: Ventricular cells have stable resting potential maintained by inward rectifier potassium channels (I_K1) and sodium-potassium ATPase; pacemaker cells have unstable pacemaker potential driven by funny current (I_f) from HCN channels allowing sodium influx, plus T-type calcium channels (I_CaT) contributing to gradual depolarization toward threshold'
      ],
      officialDefinitions: [
        'Phase 0 - Rapid Depolarization in Ventricular Muscle Cells: Ionic Mechanism: The rapid influx of sodium (Na⁺) ions through fast voltage-gated sodium channels occurs when the cell membrane reaches a certain threshold potential. This sudden opening of fast Na⁺ channels results in a rapid increase in membrane potential. Result: The upstroke is steep and rapid due to the fast kinetics of the Na⁺ channels. This phase initiates the action potential and contributes to the forceful contraction of the ventricles.',
        'Phase 0 - Rapid Depolarization in Pacemaker Cells (e.g., SA Node): Ionic Mechanism: Pacemaker cells lack fast voltage-gated Na⁺ channels. Instead, the depolarization in these cells is driven by the influx of calcium (Ca²⁺) through L-type (long-lasting) Ca²⁺ channels. Result: The upstroke in pacemaker cells is slower and less steep compared to that in ventricular cells. This gradual increase contributes to the slow pacemaker potential, allowing the SA node to set the pace of the heart rhythm.',
        'Phase 1 - Initial Repolarization in Ventricular Muscle Cells: Ionic Mechanism: Transient outward K⁺ currents (I_to) briefly open, allowing potassium ions to exit the cell. This short-lived current causes a small, sharp drop in membrane potential. Result: This phase produces the characteristic notch seen in the ventricular action potential and contributes to early repolarization.',
        'Phase 1 - Initial Repolarization in Pacemaker Cells: Absent Phase: Pacemaker cells do not exhibit this phase, as their action potential shape is smoother, without the characteristic notch of ventricular cells.',
        'Phase 2 - Plateau Phase in Ventricular Muscle Cells: Ionic Mechanism: The plateau phase results from a delicate balance between the inward flow of Ca²⁺ through L-type Ca²⁺ channels and the outward flow of K⁺ through delayed rectifier K⁺ channels (I_K). Result: The plateau phase prolongs the action potential duration, allowing sustained contraction. This is crucial for adequate ventricular filling and efficient blood ejection during systole. Physiological Significance: The plateau ensures that cardiac muscle cells remain in a depolarized state for a longer period, preventing tetany and allowing time for blood to be ejected from the heart.',
        'Phase 2 - Plateau Phase in Pacemaker Cells: Minimal or Absent Plateau: Pacemaker cells typically do not show a distinct plateau phase. The lack of a plateau contributes to their shorter action potential and quicker repolarization, aiding in their role in generating rhythmic impulses.',
        'Phase 3 - Repolarization in Ventricular Muscle Cells: Ionic Mechanism: Repolarization occurs due to the closure of Ca²⁺ channels and the continued efflux of K⁺ through delayed rectifier K⁺ channels. The increase in K⁺ permeability accelerates the return of the membrane potential toward its resting value. Result: The cell membrane potential returns to its resting level, completing the action potential cycle.',
        'Phase 3 - Repolarization in Pacemaker Cells: Ionic Mechanism: Similar to ventricular cells, repolarization in pacemaker cells involves K⁺ efflux. However, this repolarization is more gradual. Result: This phase resets the membrane potential, allowing the pacemaker cells to prepare for the next cycle of depolarization.',
        'Phase 4 - Resting Membrane Potential in Ventricular Muscle Cells: Ionic Mechanism: At rest, the membrane potential is maintained by K⁺ leak channels, which allow potassium to move in and out of the cell freely, and by the Na⁺/K⁺ ATPase pump, which helps maintain ionic gradients. Result: The membrane stays at a stable resting potential, ready for the next action potential.',
        'Phase 4 - Pacemaker Potential in Pacemaker Cells: Ionic Mechanism: The key feature of phase 4 in pacemaker cells is the presence of a "funny" current (I_f). This current is primarily carried by Na⁺, with a smaller contribution from Ca²⁺ influx through T-type (transient) channels. Result: The funny current causes a slow, spontaneous depolarization, allowing pacemaker cells to reach the threshold for phase 0. This automaticity is what sets the intrinsic heart rate.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Ventricular muscle action potentials have five phases:',
            critical: true,
            items: [
              'Phase zero rapid depolarization occurs when fast voltage-gated sodium channels open, causing steep sodium influx to positive 20 millivolts',
              'Phase one shows brief potassium efflux through transient outward channels creating a notch',
              'Phase two plateau results from balanced inward L-type calcium current and outward delayed rectifier potassium currents, maintaining near-zero millivolts for 200 to 300 milliseconds',
              'Phase three repolarization occurs as potassium channels dominate and calcium channels close, returning to negative 90 millivolts',
              'Phase four is stable at negative 90 millivolts via inward rectifier potassium channels and sodium-potassium ATPase'
            ]
          },
          { type: 'paragraph', content: 'Pacemaker cells differ fundamentally: Phase zero uses L-type calcium channels producing gradual upstroke to zero to positive 10 millivolts; they lack phase one and plateau; phase four is unstable, starting at negative 60 millivolts with spontaneous depolarization via funny current from HCN channels and T-type calcium channels, enabling automaticity.', critical: true }
        ],
        raw: '>>Ventricular muscle action potentials have five phases. Phase zero rapid depolarization occurs when fast voltage-gated sodium channels open, causing steep sodium influx to positive 20 millivolts. Phase one shows brief potassium efflux through transient outward channels creating a notch. Phase two plateau results from balanced inward L-type calcium current and outward delayed rectifier potassium currents, maintaining near-zero millivolts for 200 to 300 milliseconds. Phase three repolarization occurs as potassium channels dominate and calcium channels close, returning to negative 90 millivolts. Phase four is stable at negative 90 millivolts via inward rectifier potassium channels and sodium-potassium ATPase. Pacemaker cells differ fundamentally: Phase zero uses L-type calcium channels producing gradual upstroke to zero to positive 10 millivolts; they lack phase one and plateau; phase four is unstable, starting at negative 60 millivolts with spontaneous depolarization via funny current from HCN channels and T-type calcium channels, enabling automaticity.<<'
      }
    },
    {
      id: 'lo-2',
      isCritical: true,
      title: '>>Describe the ion channels that contribute to each phase of the cardiac action potential. How do differences in channel population influence the shape of the action potential in the nodal tissue and in the working myocardium?<<',
      keyPoints: [
        'Phase 0 working myocardium: Fast voltage-gated sodium channels generate rapid depolarization; nodal tissue: L-type calcium channels (slow activation) generate gradual depolarization, lacking fast sodium channels',
        'Phase 1 working myocardium: Transient outward potassium channels (I_to, Kv4.3) cause initial repolarization notch; nodal tissue: absent due to lack of these channels',
        'Phase 2 working myocardium: L-type calcium channels (Cav1.2) provide inward current balanced by delayed rectifier potassium channels (I_Ks: Kv7.1, I_Kr: Kv11.1) providing outward current; nodal tissue: minimal plateau due to different channel balance',
        'Phase 3 both tissues: Voltage-gated potassium channels (I_K) dominate repolarization as L-type calcium channels close',
        'Phase 4 working myocardium: Inward rectifier potassium channels (I_K1: Kir2.1) maintain stable resting potential at negative 90 millivolts, sodium-potassium ATPase maintains ionic gradients',
        'Phase 4 nodal tissue: Funny current channels (I_f: HCN channels) activated by hyperpolarization allow sodium influx, T-type calcium channels (Cav3.1, Cav3.2) open during late diastolic depolarization, reduced I_K1 expression prevents stable resting potential',
        'Channel population determines automaticity: Working myocardium has high fast sodium channel and I_K1 density creating steep upstroke and stable resting potential; nodal tissue lacks fast sodium channels but has HCN channels and low I_K1 creating automaticity and slower conduction'
      ],
      officialDefinitions: [
        'Phase 0 - Depolarization in Working Myocardium (e.g., Ventricular Muscle Cells): Channels Involved: Fast voltage-gated Na⁺ channels open, causing a rapid influx of Na⁺ ions and a steep upstroke of the action potential. Influence on Shape: This rapid Na⁺ entry results in a sharp, quick rise in membrane potential, creating the characteristic steep upstroke of the action potential in non-pacemaker cells.',
        'Phase 0 - Depolarization in Nodal Tissue (e.g., SA Node, AV Node): Channels Involved: L-type Ca²⁺ channels open more gradually than Na⁺ channels. The upstroke in nodal cells is slower and primarily due to Ca²⁺ influx. Influence on Shape: The reliance on Ca²⁺ channels results in a slower, less steep depolarization, contributing to the gradual rise seen in pacemaker cells\' action potential.',
        'Phase 1 - Initial Repolarization in Working Myocardium: Channels Involved: Transient outward K⁺ channels (I_to) open, causing a brief K⁺ efflux that slightly repolarizes the cell. Influence on Shape: This phase leads to a small dip following the sharp upstroke, seen only in ventricular and atrial cells.',
        'Phase 1 - Initial Repolarization in Nodal Tissue: Presence: This phase is generally absent in nodal tissues due to different channel compositions.',
        'Phase 2 - Plateau Phase in Working Myocardium: Channels Involved: L-type Ca²⁺ channels remain open, allowing Ca²⁺ influx, balanced by K⁺ efflux through delayed rectifier K⁺ channels. Influence on Shape: This phase is characterized by a maintained, prolonged depolarization (plateau), crucial for the sustained contraction of the myocardium.',
        'Phase 2 - Plateau Phase in Nodal Tissue: Presence: Nodal cells do not have a prominent plateau phase. The action potential repolarizes more smoothly without this sustained depolarization due to the different ionic channels active.',
        'Phase 3 - Repolarization in Working Myocardium: Channels Involved: K⁺ voltage channels (I_K) are responsible for K⁺ efflux, while L-type Ca²⁺ channels close, leading to repolarization. Influence on Shape: The membrane potential returns to its resting state, ending the action potential and allowing the muscle to relax.',
        'Phase 3 - Repolarization in Nodal Tissue: Channels Involved: voltage K⁺ channels (I_K) also play a role, allowing K⁺ efflux that drives repolarization. Influence on Shape: The slower repolarization in nodal cells contributes to their characteristic action potential.',
        'Phase 4 - Resting Membrane Potential in Working Myocardium: Channels Involved: The resting membrane potential is maintained by inward rectifier K⁺ channels (I_K1) and the Na⁺/K⁺ ATPase pump. Influence on Shape: This phase is stable and maintains a constant membrane potential until the next depolarization.',
        'Phase 4 - Pacemaker Potential in Nodal Tissue: Channels Involved: Funny current (I_f) channels allow slow Na⁺ influx, and T-type Ca²⁺ channels help depolarize the cell gradually toward the threshold. L-type Ca²⁺ channels eventually open for the next phase. Influence on Shape: The pacemaker potential in nodal tissue leads to automaticity, causing the cells to generate action potentials spontaneously.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'list',
            intro: 'Ion channels contributing to each phase differ between working myocardium and nodal tissue:',
            critical: true,
            items: [
              'Phase zero: working myocardium uses fast voltage-gated sodium channels creating steep upstroke, while nodal tissue lacks these and uses L-type calcium channels (Cav1.2) producing gradual depolarization',
              'Phase one: transient outward potassium channels (Kv4.3) present in working myocardium only; nodal tissue lacks these channels',
              'Phase two: working myocardium balances L-type calcium channels (Cav1.2) with delayed rectifier potassium channels (Kv7.1 for I_Ks, Kv11.1 for I_Kr); nodal tissue has minimal plateau due to different channel balance',
              'Phase three: voltage-gated potassium channels present in both tissues',
              'Phase four differs critically: working myocardium has high inward rectifier potassium channel (Kir2.1) density maintaining stable negative 90 millivolts, while nodal tissue has low Kir2.1 expression but expresses HCN channels carrying funny current and T-type calcium channels (Cav3.1, Cav3.2), creating unstable pacemaker potential and automaticity'
            ]
          }
        ],
        raw: '>>Working myocardium phase zero uses fast voltage-gated sodium channels creating steep upstroke, while nodal tissue lacks these and uses L-type calcium channels (Cav1.2) producing gradual depolarization. Phase one uses transient outward potassium channels (Kv4.3) in working myocardium only; nodal tissue lacks these channels. Phase two in working myocardium balances L-type calcium channels (Cav1.2) with delayed rectifier potassium channels (Kv7.1 for I_Ks, Kv11.1 for I_Kr); nodal tissue has minimal plateau due to different channel balance. Phase three uses voltage-gated potassium channels in both tissues. Phase four differs critically: working myocardium has high inward rectifier potassium channel (Kir2.1) density maintaining stable negative 90 millivolts, while nodal tissue has low Kir2.1 expression but expresses HCN channels carrying funny current and T-type calcium channels (Cav3.1, Cav3.2), creating unstable pacemaker potential and automaticity.<<'
      }
    },
    {
      id: 'lo-3',
      isCritical: false,
      title: 'Explain what accounts for the long duration of the cardiac action potential and the resultant long refractory period. What is the advantage of the long plateau of the cardiac action potential and the long refractory period?',
      keyPoints: [
        'Long action potential duration (200-300 ms): Sustained opening of L-type calcium channels during plateau phase maintains depolarization, balanced by slower potassium channel activation for repolarization',
        'Long refractory period: Sodium channels remain inactivated throughout plateau and most of repolarization; absolute refractory period spans upstroke, entire plateau, and part of repolarization; effective refractory period slightly longer',
        'Contrast with skeletal muscle: Cardiac action potential 200-300 milliseconds versus skeletal muscle 1-2 milliseconds; cardiac refractory period 200-300 milliseconds versus skeletal muscle 1-2 milliseconds',
        'Prevention of tetany: Long refractory period ensures action potentials remain separated in time, preventing summation of contractions and sustained tetanic contraction',
        'Adequate relaxation and filling time: Extended refractory period allows ventricles to relax completely and refill with blood from atria before next contraction',
        'Protection from premature re-excitation: Long refractory period prevents arrhythmias by blocking rapid repetitive stimulation that could cause ventricular fibrillation',
        'Coordination of pump function: Sustained calcium influx during plateau triggers prolonged calcium-induced calcium release from sarcoplasmic reticulum, ensuring complete ventricular contraction for effective blood ejection'
      ],
      officialDefinitions: [
        'Ionic Basis of the Long Duration and Plateau Phase: Phase 2 (Plateau Phase): The long duration of the cardiac action potential is primarily due to the plateau phase, during which there is a balance between calcium (Ca²⁺) influx and potassium (K⁺) efflux. Ca²⁺ Channels: L-type Ca²⁺ channels open during this phase, allowing a sustained influx of calcium ions into the cell. This maintains the depolarization and prolongs the action potential. K⁺ Channels: The delayed rectifier K⁺ channels allow a slow and steady efflux of potassium, balancing the inward flow of calcium to maintain the plateau. Prolonged Depolarization: The prolonged opening of L-type Ca²⁺ channels keeps the cell membrane depolarized longer, delaying the repolarization phase (Phase 3).',
        'Ionic Basis of the Long Refractory Period: Refractory Period: The long refractory period in cardiac muscle is directly tied to the prolonged action potential. During the plateau phase and the early repolarization phase, the Na⁺ channels remain inactivated, preventing new action potentials from being initiated. Inactivation of Na⁺ Channels: The inactivation gates of fast Na⁺ channels do not reset until the membrane potential has repolarized to a sufficiently negative level. This ensures that the cell cannot be re-excited during the refractory period.',
        'Prevention of Tetany: One of the most critical advantages of the long plateau phase and the corresponding long refractory period is the prevention of tetanic (sustained) contraction in cardiac muscle. This ensures that the heart has time to relax between beats, allowing for proper filling of the chambers.',
        'Coordinated Contraction: The long refractory period ensures that cardiac muscle cells contract in a coordinated manner and that there is sufficient time for the heart to eject blood and refill before the next contraction.',
        'Sustained Contraction for Ejection: The plateau phase allows for a sustained contraction, which is necessary for the heart to pump blood effectively into the systemic and pulmonary circulations. This is in contrast to the brief action potential in skeletal muscle, which allows for rapid, repetitive stimulation and tetanic contraction.',
        'Prevention of Arrhythmias: The long refractory period acts as a protective mechanism, reducing the likelihood of arrhythmias by preventing premature re-excitation of the cardiac tissue.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The long action potential duration of 200 to 300 milliseconds results from sustained L-type calcium channel opening during the plateau phase, balanced by slowly activating delayed rectifier potassium channels. This contrasts with skeletal muscle where action potentials last only 1 to 2 milliseconds. The long refractory period occurs because sodium channels remain inactivated throughout the plateau and most of repolarization, unable to reopen until adequate repolarization.' },
          {
            type: 'list',
            intro: 'The advantages are critical for cardiac function:',
            items: [
              'Prevents tetany by ensuring action potentials remain separated, allowing complete relaxation between beats',
              'Provides adequate time for ventricular filling as chambers relax and atrioventricular valves open',
              'Protects against arrhythmias by blocking rapid repetitive stimulation',
              'Ensures sustained calcium influx triggering complete calcium-induced calcium release for powerful ventricular contraction and effective blood ejection'
            ]
          }
        ],
        raw: 'The long action potential duration of 200 to 300 milliseconds results from sustained L-type calcium channel opening during the plateau phase, balanced by slowly activating delayed rectifier potassium channels. This contrasts with skeletal muscle where action potentials last only 1 to 2 milliseconds. The long refractory period occurs because sodium channels remain inactivated throughout the plateau and most of repolarization, unable to reopen until adequate repolarization. The advantages are critical for cardiac function: prevents tetany by ensuring action potentials remain separated, allowing complete relaxation between beats; provides adequate time for ventricular filling as chambers relax and atrioventricular valves open; protects against arrhythmias by blocking rapid repetitive stimulation; ensures sustained calcium influx triggering complete calcium-induced calcium release for powerful ventricular contraction and effective blood ejection.'
      }
    },
    {
      id: 'lo-4',
      isCritical: true,
      title: '>>Explain the ionic mechanism of pacemaker automacy and rhythmicity.<<',
      keyPoints: [
        'Pacemaker automaticity: Spontaneous generation of action potentials without external stimulation due to unstable phase 4 membrane potential',
        'Funny current (I_f): Hyperpolarization-activated cyclic nucleotide-gated HCN channels open when membrane hyperpolarizes below negative 60 millivolts after repolarization, allowing sodium ion influx (with small calcium contribution) causing slow spontaneous depolarization',
        'T-type calcium channels: Transient calcium channels (Cav3.1, Cav3.2) activate at threshold around negative 55 millivolts during late pacemaker potential, contributing additional calcium influx to reach threshold for L-type channel activation',
        'Reduced potassium efflux: Low expression of inward rectifier potassium channels (I_K1) prevents membrane potential stabilization, allowing pacemaker depolarization to proceed',
        'L-type calcium channels: When threshold around negative 40 millivolts is reached, L-type calcium channels open causing phase 0 depolarization driven by calcium influx rather than sodium',
        'Repolarization and cycle restart: Voltage-gated potassium channels open during phase 3, potassium efflux repolarizes membrane to approximately negative 60 millivolts, activating funny current again to repeat cycle',
        'Rhythmicity: Gradual slope of pacemaker potential determines firing frequency; steeper slope results in faster heart rate, shallower slope results in slower rate; SA node normally sets pace at intrinsic rate of 100 action potentials per minute'
      ],
      officialDefinitions: [
        'Phase 4: Pacemaker Potential (Slow Depolarization) - Resting Membrane Potential: Unlike other cardiac cells, SA nodal cells do not have a stable resting membrane potential. Instead, they have a slowly depolarizing pacemaker potential that initiates each heartbeat.',
        'Funny Current (I_f): The primary driver of the pacemaker potential is the "funny current" (I_f), mediated by hyperpolarization-activated cyclic nucleotide-gated (HCN) channels. This current allows Na⁺ ions to slowly enter the cell, creating a gradual depolarization. The I_f current is unique because it is activated when the membrane potential becomes more negative (hyperpolarizes) after the previous action potential.',
        'T-type Ca²⁺ Channels: As the membrane potential continues to depolarize, transient (T-type) calcium channels open, allowing a small influx of Ca²⁺ ions and contributing to the late part of the pacemaker potential.',
        'Reduction in K⁺ Efflux: During this phase, the outward movement of K⁺ ions through potassium channels decreases, aiding in the depolarization process.',
        'Phase 0: Upstroke of the Action Potential - L-type Ca²⁺ Channels: Once the threshold potential is reached (approximately -40 mV), voltage-gated L-type Ca²⁺ channels open, leading to a rapid influx of Ca²⁺ ions. This Ca²⁺ influx is responsible for the upstroke (depolarization) of the action potential in pacemaker cells. Mechanism: Unlike ventricular or atrial myocytes, which rely on fast Na⁺ channels for the action potential upstroke, pacemaker cells predominantly use L-type Ca²⁺ channels. This makes the depolarization slower compared to the action potential in other cardiac cells.',
        'Phase 3: Repolarization - K⁺ Channels: Voltage-gated K⁺ channels open during this phase, allowing K⁺ to exit the cell. This efflux of K⁺ leads to repolarization of the membrane potential. Closure of L-type Ca²⁺ Channels: As repolarization progresses, L-type Ca²⁺ channels close, halting the influx of calcium and facilitating the repolarization process.',
        'Return to Phase 4 (Pacemaker Potential) - Cycle Continuation: Once the membrane potential returns to approximately -60 mV (hyperpolarized state), the I_f current is activated again, initiating the next pacemaker potential and repeating the cycle.',
        'Pacemaker Automaticity and Rhythmicity - Intrinsic Rhythmicity: The automatic nature of the pacemaker cells is due to the I_f current, which ensures that the cells can depolarize on their own without any external stimulation. Unstable Resting Potential: The absence of a true resting membrane potential and the continuous slow depolarization (pacemaker potential) facilitate the spontaneous generation of action potentials. Gradual Depolarization: The gradual nature of the pacemaker potential ensures rhythmic firing, which sets the heart rate. Ca²⁺-Dependent Depolarization: The reliance on Ca²⁺ influx for the upstroke of the action potential contributes to the distinct shape of the nodal action potential compared to non-pacemaker cells.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Pacemaker automaticity is spontaneous rhythmic action potential generation without external stimulation, resulting from unstable phase four. After repolarization to approximately negative 60 millivolts, the funny current (I_f) through hyperpolarization-activated HCN channels opens, allowing sodium influx with small calcium contribution, causing gradual depolarization. Simultaneously, very low inward rectifier potassium channel (I_K1) expression prevents membrane stabilization, allowing pacemaker depolarization to proceed.', critical: true },
          { type: 'paragraph', content: 'As the membrane reaches approximately negative 55 millivolts, T-type calcium channels activate, providing additional calcium influx. At threshold around negative 40 millivolts, L-type calcium channels open, causing phase zero upstroke via calcium influx. After minimal plateau, voltage-gated potassium channels repolarize the membrane to negative 60 millivolts, reactivating funny current and repeating the cycle.', critical: true },
          { type: 'paragraph', content: 'Rhythmicity is determined by pacemaker potential slope: steeper slope produces faster heart rate, shallower slope produces slower rate; SA node intrinsically generates approximately 100 action potentials per minute.', critical: true }
        ],
        raw: '>>Pacemaker automaticity is spontaneous rhythmic action potential generation without external stimulation, resulting from unstable phase four. After repolarization to approximately negative 60 millivolts, the funny current (I_f) through hyperpolarization-activated HCN channels opens, allowing sodium influx with small calcium contribution, causing gradual depolarization. Simultaneously, very low inward rectifier potassium channel (I_K1) expression prevents membrane stabilization, allowing pacemaker depolarization to proceed. As the membrane reaches approximately negative 55 millivolts, T-type calcium channels activate, providing additional calcium influx. At threshold around negative 40 millivolts, L-type calcium channels open, causing phase zero upstroke via calcium influx. After minimal plateau, voltage-gated potassium channels repolarize the membrane to negative 60 millivolts, reactivating funny current and repeating the cycle. Rhythmicity is determined by pacemaker potential slope: steeper slope produces faster heart rate, shallower slope produces slower rate; SA node intrinsically generates approximately 100 action potentials per minute.<<'
      }
    },
    {
      id: 'lo-5',
      isCritical: true,
      title: '>>Beginning in the SA node, diagram the normal sequence of cardiac activation (depolarisation) and the role played by the specialized conducting system.<<',
      keyPoints: [
        'SA node (sinoatrial node): Located near superior vena cava entrance into right atrium; primary pacemaker initiating electrical impulse at intrinsic rate of 100 action potentials per minute; depolarization spreads from SA node across both atria',
        'Atrial conduction pathways: Bachmann bundle conducts impulse to left atrium; internodal tracts conduct impulse through right atrium to AV node; causes atrial depolarization and contraction (P wave on ECG)',
        'AV node (atrioventricular node): Located at junction between atria and ventricles near interatrial septum; only normal electrical connection between atria and ventricles due to annulus fibrosus insulation; delays impulse approximately 0.1 seconds (conduction velocity 0.02-0.05 meters per second)',
        'Bundle of His: Located in interventricular septum; receives impulse from AV node and conducts rapidly to bundle branches',
        'Right and left bundle branches: Run along interventricular septum; left bundle branch divides into anterior and posterior fascicles; distribute impulse to respective ventricles',
        'Purkinje fibers: Terminal conducting fibers in subendocardial layer; very rapid conduction (2-4 meters per second) due to large diameter and abundant gap junctions; ensure simultaneous depolarization of ventricular myocardium from endocardium to epicardium',
        'Sequence timing: SA node at 0 seconds, atrial depolarization 0.03 seconds, AV node delay 0.03-0.16 seconds, bundle branches and Purkinje fibers 0.16-0.22 seconds, complete ventricular depolarization by 0.22 seconds'
      ],
      officialDefinitions: [
        'Sinoatrial (SA) Node Initiation: Location: The SA node is located in the upper right atrium, near the superior vena cava. Role: The SA node acts as the primary pacemaker of the heart, initiating electrical impulses at a typical rate of 60-100 beats per minute. It sets the pace for the entire heart. Depolarization: The impulse generated by the SA node spreads across the atria, causing atrial depolarization, which leads to atrial contraction (seen as the P wave on an ECG).',
        'Atrial Conduction Pathways: Pathways: The electrical impulse travels through specialized conduction pathways within the atria, such as Bachmann\'s bundle (to the left atrium) and other internodal tracts. Effect: These pathways ensure the synchronized contraction of both atria, pushing blood into the ventricles.',
        'Atrioventricular (AV) Node: Location: The AV node is located at the junction between the atria and ventricles, near the interatrial septum. Role: The AV node delays the electrical impulse slightly (about 0.1 seconds) to allow complete filling of the ventricles after atrial contraction. Depolarization: The delay at the AV node ensures that the atria finish contracting before the ventricles begin contracting. This is essential for efficient ventricular filling.',
        'Bundle of His: Location: The bundle of His is located in the interventricular septum and acts as a bridge between the AV node and the ventricles. Role: It transmits the electrical impulse from the AV node to the ventricles and bifurcates into the left and right bundle branches. Depolarization: The impulse moves quickly down the bundle of His to ensure that the electrical signal reaches the ventricles without significant delay.',
        'Right and Left Bundle Branches: Location: The right and left bundle branches run along the interventricular septum. The left bundle branch further divides into the anterior and posterior fascicles. Role: These branches distribute the electrical impulse to their respective ventricles. Depolarization: The electrical impulse travels through these branches to reach the ventricular muscle.',
        'Purkinje Fibers: Location: The Purkinje fibers extend from the ends of the bundle branches and spread throughout the ventricular myocardium. Role: They facilitate rapid and coordinated depolarization of the ventricles, allowing for an efficient and forceful contraction. Depolarization: This rapid conduction through the Purkinje fibers ensures that both ventricles contract simultaneously, which corresponds to the QRS complex on an ECG.'
      ],

      examAnswer: {
        formatted: [
          {
            type: 'steps',
            intro: 'Normal cardiac activation sequence:',
            critical: true,
            items: [
              'SA node located in the upper right atrium near the superior vena cava initiates electrical impulse, acting as primary pacemaker generating approximately 100 action potentials per minute',
              'Impulse spreads across both atria via Bachmann bundle to the left atrium and internodal tracts to the AV node, causing atrial depolarization and contraction',
              'AV node, located at the atrial-ventricular junction near the interatrial septum, is the only normal electrical pathway between atria and ventricles due to the insulating annulus fibrosus, introducing crucial delay of approximately 0.1 seconds allowing complete ventricular filling',
              'Impulse enters the Bundle of His in the interventricular septum after AV delay',
              'Impulse rapidly conducts to right and left bundle branches running along the interventricular septum',
              'Impulse reaches Purkinje fibers in the subendocardial layer with very rapid conduction velocity of 2 to 4 meters per second, ensuring nearly simultaneous ventricular depolarization from endocardium to epicardium for coordinated contraction'
            ]
          }
        ],
        raw: '>>Normal cardiac activation begins in the SA node located in the upper right atrium near the superior vena cava, acting as primary pacemaker generating approximately 100 action potentials per minute. The impulse spreads across both atria via Bachmann bundle to the left atrium and internodal tracts to the AV node, causing atrial depolarization and contraction. The AV node, located at the atrial-ventricular junction near the interatrial septum, is the only normal electrical pathway between atria and ventricles due to the insulating annulus fibrosus. The AV node introduces crucial delay of approximately 0.1 seconds, allowing complete ventricular filling before contraction. After this delay, the impulse enters the Bundle of His in the interventricular septum, then rapidly conducts to right and left bundle branches running along the septum. Finally, the impulse reaches Purkinje fibers in the subendocardial layer with very rapid conduction velocity of 2 to 4 meters per second, ensuring nearly simultaneous ventricular depolarization from endocardium to epicardium for coordinated contraction.<<'
      }
    },
    {
      id: 'lo-6',
      isCritical: true,
      title: '>>Explain why the AV node- His bundle is the only normal electrical pathway between the atria and the ventricles, and explain the functional significance of the slow conduction through the AV node.<<',
      keyPoints: [
        'Annulus fibrosus (fibrous skeleton): Fibrous connective tissue ring separating atrial myocardium from ventricular myocardium; electrically insulating structure preventing direct electrical connection',
        'AV node-His bundle as sole pathway: Only route through annulus fibrosus where electrical impulses can pass from atria to ventricles under normal conditions',
        'Slow AV node conduction: Conduction velocity 0.02-0.05 meters per second due to small diameter cells, fewer gap junctions, and reliance on slow L-type calcium channels rather than fast sodium channels',
        'Functional significance - ventricular filling: 0.1 second delay ensures atria complete contraction and push remaining blood into ventricles before ventricular systole begins, optimizing end-diastolic volume and cardiac output',
        'Functional significance - rate limiting function: AV node acts as filter preventing excessively rapid atrial rates from conducting to ventricles; protects ventricles from rapid irregular atrial activity in conditions like atrial fibrillation or flutter',
        'Functional significance - synchronized contraction: Delay allows coordinated transition from atrial systole to ventricular systole, preventing simultaneous contraction that would impair filling',
        'Clinical importance: AV node function can be modulated pharmacologically (calcium channel blockers, beta-blockers) or electrically (ablation) to control ventricular rate in arrhythmias'
      ],
      officialDefinitions: [
        'The AV node-His bundle pathway serves as the only normal electrical connection between the atria and the ventricles due to the insulating fibrous skeleton of the heart. This fibrous tissue, which separates the atrial myocardium from the ventricular myocardium, prevents electrical impulses from directly passing between the atria and ventricles, ensuring that conduction occurs solely through the AV node and His bundle. This insulation is crucial to maintain an orderly and controlled sequence of contraction, allowing for efficient heart function.',
        'Delay for Ventricular Filling: The slow conduction velocity through the AV node introduces a brief delay in the transmission of the electrical impulse from the atria to the ventricles. This delay is functionally significant as it provides time for the atria to contract and push blood into the ventricles before the ventricles begin to contract. This ensures that the ventricles are filled to their optimal capacity, improving cardiac output.',
        'Prevention of Excessively Rapid Ventricular Rates: The AV node acts as a rate limiter that prevents rapid atrial rates from being conducted to the ventricles. This protective mechanism ensures that the ventricles do not contract too rapidly, which could lead to inadequate filling time and impaired cardiac output. In conditions such as atrial fibrillation or atrial flutter, the AV node\'s filtering property limits the number of impulses that reach the ventricles.',
        'Synchronizing Atrial and Ventricular Contraction: The slow conduction allows for a coordinated transition between atrial contraction (systole) and ventricular contraction. This coordination maximizes the efficiency of the heart\'s pumping action by ensuring that the ventricles contract after they are adequately filled with blood from the atria.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'The AV node-His bundle is the only normal electrical pathway between atria and ventricles because the annulus fibrosus, the fibrous skeleton of the heart, forms an electrically insulating ring separating atrial and ventricular myocardium. Only the AV node and Bundle of His penetrate this barrier, making them the obligatory pathway for normal atrioventricular conduction. Slow AV node conduction at 0.02 to 0.05 meters per second results from small diameter cells, fewer gap junctions, and reliance on slow L-type calcium channels rather than fast sodium channels.', critical: true },
          {
            type: 'list',
            intro: 'The approximately 0.1 second AV delay has critical functional significance:',
            critical: true,
            items: [
              'Allows atria to complete contraction and fill ventricles completely before ventricular systole, optimizing end-diastolic volume',
              'Acts as rate-limiting filter preventing excessively rapid atrial rates from conducting to ventricles, protecting against dangerous ventricular rates',
              'Ensures synchronized coordinated transition between atrial and ventricular contraction'
            ]
          }
        ],
        raw: '>>The AV node-His bundle is the only normal electrical pathway between atria and ventricles because the annulus fibrosus, the fibrous skeleton of the heart, forms an electrically insulating ring separating atrial and ventricular myocardium. Only the AV node and Bundle of His penetrate this barrier, making them the obligatory pathway for normal atrioventricular conduction. Slow AV node conduction at 0.02 to 0.05 meters per second results from small diameter cells, fewer gap junctions, and reliance on slow L-type calcium channels rather than fast sodium channels. This creates approximately 0.1 second delay with critical functional significance: allows atria to complete contraction and fill ventricles completely before ventricular systole, optimizing end-diastolic volume; acts as rate-limiting filter preventing excessively rapid atrial rates from conducting to ventricles, protecting against dangerous ventricular rates; ensures synchronized coordinated transition between atrial and ventricular contraction.<<'
      }
    },
    {
      id: 'lo-7',
      isCritical: true,
      title: '>>Contrast the sympathetic and parasympathetic nervous system influence on heart rate and cardiac excitation in general. Define the terms: positive and negative chronotropy and dromotropy,<< and explain the ionic background of the effects in the SA node and in the AV node.',
      keyPoints: [
        'Sympathetic effects (norepinephrine, beta-1 receptors): Positive chronotropy increases heart rate, positive dromotropy increases AV conduction velocity, positive inotropy increases contractility, positive lusitropy increases relaxation rate, positive bathmotropy increases excitability',
        'Parasympathetic effects (acetylcholine, M2 receptors): Negative chronotropy decreases heart rate, negative dromotropy decreases AV conduction velocity, minimal effect on ventricular contractility',
        'Positive chronotropy definition: Increase in heart rate; sympathetic stimulation can increase SA node intrinsic rate from 100 to up to 200 action potentials per minute',
        'Negative chronotropy definition: Decrease in heart rate; parasympathetic vagal tone normally suppresses SA node rate from intrinsic 100 to resting 60-70 action potentials per minute',
        'Positive dromotropy definition: Increase in conduction velocity through AV node, shortening AV delay',
        'Negative dromotropy definition: Decrease in conduction velocity through AV node, prolonging AV delay',
        'Sympathetic ionic mechanism SA node: Beta-1 receptor activation increases cAMP, enhances funny current (I_f) activity making pacemaker potential slope steeper, increases L-type and T-type calcium channel activity accelerating depolarization to threshold',
        'Parasympathetic ionic mechanism SA node: M2 receptor activation increases potassium channel activity causing hyperpolarization and flatter pacemaker potential slope, decreases cAMP inhibiting funny current, inhibits T-type calcium channels',
        'Sympathetic ionic mechanism AV node: PKA phosphorylation of L-type calcium channels increases calcium influx, enhancing conduction velocity through AV node',
        'Parasympathetic ionic mechanism AV node: Increased potassium efflux hyperpolarizes membrane, reduces calcium channel opening, slowing depolarization and decreasing conduction velocity'
      ],
      officialDefinitions: [
        'Positive Chronotropy: Refers to an increase in heart rate due to stimulation that leads to faster depolarization of the pacemaker cells, primarily in the SA node.',
        'Negative Chronotropy: Refers to a decrease in heart rate, which occurs when the depolarization rate of the pacemaker cells in the SA node slows down.',
        'Positive Dromotropy: Refers to an increase in the conduction velocity of electrical impulses through the AV node, leading to a faster transmission of impulses from the atria to the ventricles.',
        'Negative Dromotropy: Refers to a decrease in conduction velocity through the AV node, resulting in a slower transmission of electrical impulses from the atria to the ventricles.',
        'Sympathetic Influence - Increased Heart Rate (Positive Chronotropy): Norepinephrine binds to beta-1 adrenergic receptors in the sinoatrial (SA) node. This increases intracellular cyclic AMP (cAMP) levels, which enhances the activity of funny currents (If) and L-type calcium channels, accelerating the rate of depolarization. Result: Faster heart rate.',
        'Sympathetic Influence - Increased Conduction Velocity (Positive Dromotropy): PKA phosphorylates ion channels in the atrioventricular (AV) node, speeding up depolarization and conduction through the AV node.',
        'Parasympathetic Influence - Negative Chronotropy: Parasympathetic Stimulation: The release of acetylcholine (ACh) from the vagus nerve binds to muscarinic (M2) receptors on the SA node. Ion Channel Effects: This increases the activity of potassium (K⁺) channels, leading to hyperpolarization of the cell membrane and a decreased slope of phase 4. Result: It takes longer for the membrane potential to reach the threshold, slowing the rate of depolarization and decreasing the heart rate. Calcium Channel Inhibition: Parasympathetic stimulation also inhibits T-type Ca²⁺ channels, further reducing the slope of phase 4.',
        'Parasympathetic Influence - Negative Dromotropy: Parasympathetic Stimulation: The release of acetylcholine (ACh) binds to M2 receptors on AV nodal cells. Ion Channel Effects: This increases the K⁺ efflux, leading to hyperpolarization and a reduction in the opening of Ca²⁺ channels, slowing the depolarization process. Result: This decreases the conduction velocity through the AV node, increasing the delay in the transmission of electrical impulses from the atria to the ventricles.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Sympathetic stimulation via norepinephrine binding beta-1 adrenergic receptors produces positive chronotropy increasing heart rate, positive dromotropy increasing AV conduction velocity, and positive inotropy increasing contractility. Parasympathetic stimulation via acetylcholine from vagus nerve binding muscarinic M2 receptors produces negative chronotropy decreasing heart rate and negative dromotropy decreasing AV conduction velocity.', critical: true },
          {
            type: 'list',
            intro: 'Definitions of autonomic effects on cardiac function:',
            critical: true,
            items: [
              'Positive chronotropy is increased heart rate; sympathetic stimulation can increase SA node firing from intrinsic 100 to 200 action potentials per minute',
              'Negative chronotropy is decreased heart rate; parasympathetic vagal tone normally suppresses SA node from 100 to resting 60 to 70 action potentials per minute',
              'Positive dromotropy is increased AV conduction velocity and shortened delay',
              'Negative dromotropy is decreased AV conduction velocity and prolonged delay'
            ]
          },
          { type: 'paragraph', content: 'In the SA node, sympathetic effects involve beta-1 receptor activation increasing cyclic AMP, enhancing funny current activity creating steeper pacemaker slope, and increasing T-type and L-type calcium channel activity. Parasympathetic M2 activation increases potassium channel activity causing hyperpolarization and flatter slope, decreases cyclic AMP inhibiting funny current, and inhibits calcium channels.', critical: true },
          { type: 'paragraph', content: 'In the AV node, sympathetic stimulation via protein kinase A phosphorylates L-type calcium channels increasing calcium influx and conduction velocity. Parasympathetic stimulation increases potassium efflux causing hyperpolarization, reducing calcium channel opening and slowing conduction.', critical: true }
        ],
        raw: '>>Sympathetic stimulation via norepinephrine binding beta-1 adrenergic receptors produces positive chronotropy increasing heart rate, positive dromotropy increasing AV conduction velocity, and positive inotropy increasing contractility. Parasympathetic stimulation via acetylcholine from vagus nerve binding muscarinic M2 receptors produces negative chronotropy decreasing heart rate and negative dromotropy decreasing AV conduction velocity. Positive chronotropy is increased heart rate; sympathetic stimulation can increase SA node firing from intrinsic 100 to 200 action potentials per minute. Negative chronotropy is decreased heart rate; parasympathetic vagal tone normally suppresses SA node from 100 to resting 60 to 70 action potentials per minute. Positive dromotropy is increased AV conduction velocity and shortened delay. Negative dromotropy is decreased AV conduction velocity and prolonged delay. In the SA node, sympathetic effects involve beta-1 receptor activation increasing cyclic AMP, enhancing funny current activity creating steeper pacemaker slope, and increasing T-type and L-type calcium channel activity. Parasympathetic M2 activation increases potassium channel activity causing hyperpolarization and flatter slope, decreases cyclic AMP inhibiting funny current, and inhibits calcium channels. In the AV node, sympathetic stimulation via protein kinase A phosphorylates L-type calcium channels increasing calcium influx and conduction velocity. Parasympathetic stimulation increases potassium efflux causing hyperpolarization, reducing calcium channel opening and slowing conduction.<<'
      }
    },
    {
      id: 'lo-8',
      isCritical: true,
      title: '>>How does hyperkalaemia affect the excitability of the cardiac muscle?<<',
      keyPoints: [
        'Hyperkalemia definition: Elevated extracellular potassium concentration above normal 3.4-5.2 millimolar range',
        'Resting membrane potential effect: Increased extracellular potassium reduces potassium gradient across membrane according to Nernst equation, making resting membrane potential less negative (partial depolarization from negative 90 toward negative 80 or less negative)',
        'Initial paradoxical increased excitability: Cells become closer to threshold temporarily, more easily excited by stimuli',
        'Sodium channel inactivation: Sustained partial depolarization causes voltage-gated sodium channels to enter and remain in inactivated state, unable to open for subsequent action potentials',
        'Decreased action potential amplitude and upstroke velocity: Fewer available sodium channels reduces sodium influx during phase 0, decreasing maximum depolarization rate (dV/dt) and peak voltage',
        'Shortened action potential duration: Enhanced potassium efflux during repolarization due to increased extracellular potassium accelerates repolarization, shortening plateau phase and reducing calcium entry',
        'Prolonged refractory period: Sodium channels take longer to recover from inactivation at less negative potentials, delaying cell ability to fire again',
        'Slowed conduction velocity: Reduced sodium channel availability and decreased upstroke velocity slow impulse propagation through myocardium',
        'Arrhythmia risk: Severe hyperkalemia can cause ventricular tachycardia, ventricular fibrillation, or asystole through disrupted depolarization-repolarization; ECG shows peaked T waves, widened QRS complex, prolonged PR interval'
      ],
      officialDefinitions: [
        'Resting Membrane Potential (RMP) Changes - Elevated RMP: Hyperkalemia reduces the K⁺ gradient across the membrane, making the RMP less negative (partial depolarization). Initial Effect: Cells become more excitable and closer to threshold. Over Time: Sustained depolarization leads to inactivation of fast voltage-gated Na⁺ channels, which decreases excitability.',
        'Action Potential (AP) Changes - Shortened Duration: Increased extracellular K⁺ enhances K⁺ efflux during repolarization, leading to a shorter plateau phase and reduced Ca²⁺ entry. Decreased Amplitude and Upstroke: Due to Na⁺ channel inactivation, the upstroke velocity and amplitude of the AP are reduced.',
        'Refractory Period Alteration - Prolonged Refractory Period: The inactivation of Na⁺ channels means they take longer to reset, delaying the ability of the cell to fire again.',
        'Conduction Abnormalities - Slower Conduction: Depolarized RMP slows conduction due to reduced Na⁺ channel availability. Increased Risk of Arrhythmias: Hyperkalemia can cause ventricular tachycardia, fibrillation, or even asystole, especially if severe. Disruption of normal depolarization and repolarization processes is a key factor.',
        'Mechanisms Behind These Effects - Reduced Na⁺ Channel Availability: Fewer Na⁺ channels recover, decreasing excitability and conduction. Enhanced K⁺ Efflux: Speeds up repolarization → shortens AP duration. Ca²⁺ Channel Impact: Shorter plateau phase reduces Ca²⁺ influx, weakening contraction strength.'
      ],

      examAnswer: {
        formatted: [
          { type: 'paragraph', content: 'Hyperkalemia, elevated extracellular potassium above normal 3.4 to 5.2 millimolar, profoundly affects cardiac excitability. Increased extracellular potassium reduces the potassium gradient, making the resting membrane potential less negative according to the Nernst equation, moving from negative 90 toward negative 80 or negative 75 millivolts. Initially, this paradoxically increases excitability as the membrane is closer to threshold. However, sustained partial depolarization causes voltage-gated sodium channels to enter inactivated state and remain unavailable.', critical: true },
          {
            type: 'list',
            intro: 'This produces multiple consequences on cardiac excitability:',
            critical: true,
            items: [
              'Decreased action potential amplitude and upstroke velocity due to fewer available sodium channels reducing sodium influx during phase zero',
              'Shortened action potential duration as enhanced potassium efflux accelerates repolarization',
              'Prolonged refractory period as sodium channels require more negative potentials to recover from inactivation',
              'Slowed conduction velocity through myocardium due to reduced sodium channel availability',
              'Increased arrhythmia risk including ventricular tachycardia, fibrillation, or asystole',
              'Electrocardiographically produces peaked tall T waves, widened QRS complexes, and prolonged PR intervals'
            ]
          }
        ],
        raw: '>>Hyperkalemia, elevated extracellular potassium above normal 3.4 to 5.2 millimolar, profoundly affects cardiac excitability. Increased extracellular potassium reduces the potassium gradient, making the resting membrane potential less negative according to the Nernst equation, moving from negative 90 toward negative 80 or negative 75 millivolts. Initially, this paradoxically increases excitability as the membrane is closer to threshold. However, sustained partial depolarization causes voltage-gated sodium channels to enter inactivated state and remain unavailable. This produces multiple consequences: decreased action potential amplitude and upstroke velocity due to fewer available sodium channels reducing sodium influx during phase zero; shortened action potential duration as enhanced potassium efflux accelerates repolarization; prolonged refractory period as sodium channels require more negative potentials to recover from inactivation; slowed conduction velocity through myocardium due to reduced sodium channel availability; increased arrhythmia risk including ventricular tachycardia, fibrillation, or asystole. Electrocardiographically, hyperkalemia produces peaked tall T waves, widened QRS complexes, and prolonged PR intervals.<<'
      }
    }
  ],
  referenceValues: [
    {
      parameter: 'Duration of myocardial action potential',
      value: '200-300 ms',
      isCritical: true
    },
    {
      parameter: 'Frequency of intrinsic pacemaker (SA node)',
      value: '100 AP/min',
      isCritical: true
    },
    {
      parameter: 'Conduction speed in AV node',
      value: '0.02-0.05 m/s',
      isCritical: false
    },
    {
      parameter: 'Conduction speed in Purkinje fibers',
      value: '2-4 m/s',
      isCritical: false
    }
  ]
};

export default topic38;
// end of topic38