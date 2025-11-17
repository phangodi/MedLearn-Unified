import React from 'react';

export const quickRefData = {
  title: 'Quick Reference',
  sections: [
    {
      id: 'brainstem-summary',
      title: 'Brainstem Nuclei by Level',
      content: (
        <div className="space-y-6">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Level</th>
                <th className="">Motor Nuclei</th>
                <th className="">Sensory Nuclei</th>
                <th className="">Special Nuclei</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">MIDBRAIN</td>
                <td className="">
                  <span className="font-semibold">• CN III - Oculomotor</span><br/>
                  &nbsp;&nbsp;(at superior colliculus)<br/>
                  <span className="font-semibold">• Edinger-Westphal</span><br/>
                  &nbsp;&nbsp;(parasympathetic)<br/>
                  <span className="font-semibold">• CN IV - Trochlear</span><br/>
                  &nbsp;&nbsp;(at inferior colliculus)
                </td>
                <td className="">
                  <span className="font-semibold">• Mesencephalic nucleus of CN V</span>
                </td>
                <td className="">
                  <span className="font-semibold">• Substantia nigra</span><br/>
                  &nbsp;&nbsp;(compact & reticular parts)<br/>
                  <span className="font-semibold">• Red nucleus</span><br/>
                  <span className="font-semibold">• Periaqueductal gray matter</span><br/>
                  <span className="font-semibold">• Superior colliculus</span><br/>
                  &nbsp;&nbsp;(visual reflexes)<br/>
                  <span className="font-semibold">• Inferior colliculus</span><br/>
                  &nbsp;&nbsp;(auditory relay)
                </td>
              </tr>
              <tr>
                <td className="">PONS</td>
                <td className="">
                  <span className="font-semibold">• Motor nucleus of CN V</span><br/>
                  &nbsp;&nbsp;(Trigeminal)<br/>
                  <span className="font-semibold">• Motor nucleus of CN VI</span><br/>
                  &nbsp;&nbsp;(Abducens - at bulbopontine sulcus)<br/>
                  <span className="font-semibold">• Motor nucleus of CN VII</span><br/>
                  &nbsp;&nbsp;(Facial)<br/>
                  <span className="font-semibold">• Superior salivatory nucleus</span><br/>
                  &nbsp;&nbsp;(CN VII - parasympathetic)
                </td>
                <td className="">
                  <span className="font-semibold">• Principal sensory nucleus of CN V</span><br/>
                  &nbsp;&nbsp;(upper pons)<br/>
                  <span className="font-semibold">• Spinal trigeminal nucleus</span><br/>
                  <span className="font-semibold">• Mesencephalic nucleus of CN V</span><br/>
                  <span className="font-semibold">• Superior, medial & lateral vestibular nuclei</span><br/>
                  &nbsp;&nbsp;(CN VIII)<br/>
                  <span className="font-semibold">• Dorsal & ventral cochlear nuclei</span><br/>
                  &nbsp;&nbsp;(CN VIII)
                </td>
                <td className="">
                  <span className="font-semibold">• Superior olivary complex</span><br/>
                  &nbsp;&nbsp;(auditory system)<br/>
                  <span className="font-semibold">• Nucleus of trapezoid body</span><br/>
                  &nbsp;&nbsp;(auditory)<br/>
                  <span className="font-semibold">• Locus coeruleus</span><br/>
                  &nbsp;&nbsp;(adrenergic neurons)<br/>
                  <span className="font-semibold">• Nuclei pontis</span><br/>
                  &nbsp;&nbsp;(cerebellar connections)
                </td>
              </tr>
              <tr>
                <td className="">MEDULLA</td>
                <td className="">
                  <span className="font-semibold">• Nucleus ambiguus</span><br/>
                  &nbsp;&nbsp;(CN IX, X, XI - pharynx, larynx)<br/>
                  <span className="font-semibold">• Hypoglossal nucleus</span><br/>
                  &nbsp;&nbsp;(CN XII - medial para-olivary sulcus)<br/>
                  <span className="font-semibold">• Dorsal vagal nucleus</span><br/>
                  &nbsp;&nbsp;(CN X - parasympathetic)<br/>
                  <span className="font-semibold">• Inferior salivatory nucleus</span><br/>
                  &nbsp;&nbsp;(CN IX - parasympathetic)<br/>
                  <span className="font-semibold">• Spinal nucleus of CN XI</span><br/>
                  &nbsp;&nbsp;(C1-C5/C6)
                </td>
                <td className="">
                  <span className="font-semibold">• Nucleus solitarius</span><br/>
                  &nbsp;&nbsp;(CN VII, IX, X - taste & visceral)<br/>
                  <span className="font-semibold">• Spinal trigeminal nucleus</span><br/>
                  &nbsp;&nbsp;(CN V, VII, IX, X - pain/temp)<br/>
                  <span className="font-semibold">• Inferior, medial, lateral & superior vestibular nuclei</span><br/>
                  &nbsp;&nbsp;(CN VIII)<br/>
                  <span className="font-semibold">• Dorsal & ventral cochlear nuclei</span><br/>
                  &nbsp;&nbsp;(CN VIII)
                </td>
                <td className="">
                  <span className="font-semibold">• Nucleus gracilis</span><br/>
                  &nbsp;&nbsp;(lower body fine touch)<br/>
                  <span className="font-semibold">• Nucleus cuneatus</span><br/>
                  &nbsp;&nbsp;(upper body fine touch)<br/>
                  <span className="font-semibold">• Accessory cuneate nucleus</span><br/>
                  <span className="font-semibold">• Inferior olivary complex</span><br/>
                  &nbsp;&nbsp;(cerebellar regulation)<br/>
                  <span className="font-semibold">• Area postrema</span><br/>
                  &nbsp;&nbsp;(chemoreceptor trigger zone)
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            <div className="mb-3">
              <h4 className="font-bold text-lg mb-2">Key Brainstem Exit Points:</h4>
              <ul className="list-none space-y-1 ml-2">
                <li><strong>Midbrain:</strong> CN III (interpeduncular fossa), CN IV (dorsal surface between inferior colliculi)</li>
                <li><strong>Pons:</strong> CN V (rostral pons), CN VI (bulbopontine sulcus), CN VII & VIII (cerebellopontine angle)</li>
                <li><strong>Medulla:</strong> CN IX, X, XI (lateral para-olivary sulcus), CN XII (medial para-olivary sulcus)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">3 Major Decussations in Medulla:</h4>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Pyramidal decussation (corticospinal tract - 80%)</li>
                <li>Medial lemniscus decussation (internal arcuate fibers)</li>
                <li>Olivocerebellar tract decussation</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cn-exits',
      title: 'CN Exit Foramina',
      content: (
        <div className="space-y-6">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">CN</th>
                <th className="">Name</th>
                <th className="">Brainstem Exit</th>
                <th className="">Skull Exit Foramen</th>
                <th className="">Key Function</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">I</td>
                <td className="">Olfactory</td>
                <td className="">Olfactory bulb</td>
                <td className=""><strong>Cribriform plate</strong> of ethmoid</td>
                <td className="">Smell (SVA)</td>
              </tr>
              <tr>
                <td className="">II</td>
                <td className="">Optic</td>
                <td className="">Optic chiasm</td>
                <td className=""><strong>Optic canal</strong></td>
                <td className="">Vision (SSA)</td>
              </tr>
              <tr>
                <td className="">III</td>
                <td className="">Oculomotor</td>
                <td className="">Interpeduncular fossa (midbrain at superior colliculus)</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
                <td className="">Eye movement (4/6 extraocular muscles), pupil constriction, lens accommodation (GSE + GVE)</td>
              </tr>
              <tr>
                <td className="">IV</td>
                <td className="">Trochlear</td>
                <td className="">Dorsal midbrain (inferior colliculus level) - ONLY nerve exiting dorsally</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
                <td className="">Superior oblique muscle - depression, intorsion (GSE)</td>
              </tr>
              <tr>
                <td className="">V₁</td>
                <td className="">Ophthalmic (V1)</td>
                <td className="">Rostral pons</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
                <td className="">Sensation forehead, cornea, upper eyelid (GSA)</td>
              </tr>
              <tr>
                <td className="">V₂</td>
                <td className="">Maxillary (V2)</td>
                <td className="">Rostral pons</td>
                <td className=""><strong>Foramen rotundum</strong></td>
                <td className="">Sensation midface, upper teeth, palate (GSA)</td>
              </tr>
              <tr>
                <td className="">V₃</td>
                <td className="">Mandibular (V3)</td>
                <td className="">Rostral pons</td>
                <td className=""><strong>Foramen ovale</strong></td>
                <td className="">Sensation lower face, lower teeth; muscles of mastication (GSA + SVE)</td>
              </tr>
              <tr>
                <td className="">VI</td>
                <td className="">Abducens</td>
                <td className="">Bulbopontine sulcus (pons/medulla junction)</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
                <td className="">Lateral rectus muscle - eye abduction (GSE)</td>
              </tr>
              <tr>
                <td className="">VII</td>
                <td className="">Facial</td>
                <td className="">Cerebellopontine angle</td>
                <td className="">Internal acoustic meatus → Facial canal → <strong>Stylomastoid foramen</strong></td>
                <td className="">Facial expression muscles, taste ant. 2/3 tongue, salivation (SVE + SVA + GVE)</td>
              </tr>
              <tr>
                <td className="">VIII</td>
                <td className="">Vestibulocochlear</td>
                <td className="">Cerebellopontine angle</td>
                <td className=""><strong>Internal acoustic meatus</strong> (does not exit skull)</td>
                <td className="">Hearing & balance (SSA)</td>
              </tr>
              <tr>
                <td className="">IX</td>
                <td className="">Glossopharyngeal</td>
                <td className="">Lateral para-olivary sulcus (medulla)</td>
                <td className=""><strong>Jugular foramen</strong></td>
                <td className="">Taste post. 1/3 tongue, pharynx sensation, parotid salivation, carotid body/sinus (SVA + GVA + SVE + GVE)</td>
              </tr>
              <tr>
                <td className="">X</td>
                <td className="">Vagus</td>
                <td className="">Lateral para-olivary sulcus (medulla)</td>
                <td className=""><strong>Jugular foramen</strong></td>
                <td className="">Pharynx/larynx muscles, parasympathetic to thorax/abdomen, visceral sensation (SVE + GVA + GVE + SVA)</td>
              </tr>
              <tr>
                <td className="">XI</td>
                <td className="">Accessory</td>
                <td className="">Lateral para-olivary sulcus + spinal cord C1-C5</td>
                <td className=""><strong>Jugular foramen</strong> (cranial root joins vagus; spinal root continues)</td>
                <td className="">Sternocleidomastoid & trapezius muscles (SVE + GSE)</td>
              </tr>
              <tr>
                <td className="">XII</td>
                <td className="">Hypoglossal</td>
                <td className="">Medial para-olivary sulcus (medulla)</td>
                <td className=""><strong>Hypoglossal canal</strong></td>
                <td className="">Tongue muscles (all except palatoglossus) (GSE)</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            <div className="mb-4">
              <h4 className="font-bold text-lg mb-2">Mnemonic - Skull Foramina (superior to inferior):</h4>
              <p className="mb-2 italic">"<strong>S</strong>ome <strong>S</strong>ay <strong>F</strong>inally <strong>R</strong>eally <strong>O</strong>dd <strong>J</strong>ugglers <strong>H</strong>ave <strong>S</strong>killed <strong>I</strong>nternal <strong>C</strong>arotid":</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>S</strong>uperior orbital fissure (CN III, IV, V₁, VI)</li>
                <li><strong>S</strong>uperior orbital fissure</li>
                <li><strong>F</strong>oramen rotundum (V₂)</li>
                <li>(F)o<strong>R</strong>amen <strong>O</strong>vale (V₃)</li>
                <li><strong>J</strong>ugular foramen (CN IX, X, XI)</li>
                <li><strong>H</strong>ypoglossal canal (CN XII)</li>
                <li><strong>S</strong>tylomastoid foramen (CN VII exit)</li>
                <li><strong>I</strong>nternal acoustic meatus (CN VII, VIII enter)</li>
                <li><strong>C</strong>ribriform plate (CN I)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Special Foramina Notes:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>CN VII enters internal acoustic meatus but exits stylomastoid foramen</li>
                <li>CN VIII enters internal acoustic meatus but doesn't exit the skull</li>
                <li>CN IV is the ONLY cranial nerve that exits dorsally from brainstem</li>
                <li>Jugular foramen contains CN IX, X, XI (all exit together)</li>
                <li>Superior orbital fissure contains CN III, IV, V₁, VI (all eye-related)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mnemonics',
      title: 'Memory Aids',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Cranial Nerve Names:</h4>
            <p className="mb-2 italic">"<strong>O</strong>n <strong>O</strong>ld <strong>O</strong>lympus' <strong>T</strong>owering <strong>T</strong>ops, <strong>A</strong> <strong>F</strong>inn <strong>A</strong>nd <strong>G</strong>erman <strong>V</strong>iewed <strong>S</strong>ome <strong>H</strong>ops"</p>
            <p className="ml-4"><strong>O</strong>lfactory, <strong>O</strong>ptic, <strong>O</strong>culomotor, <strong>T</strong>rochlear, <strong>T</strong>rigeminal, <strong>A</strong>bducens, <strong>F</strong>acial, <strong>A</strong>uditory (Vestibulocochlear), <strong>G</strong>lossopharyngeal, <strong>V</strong>agus, <strong>S</strong>pinal accessory, <strong>H</strong>ypoglossal</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Cranial Nerve Functions (Sensory, Motor, or Both):</h4>
            <p className="mb-2 italic">"<strong>S</strong>ome <strong>S</strong>ay <strong>M</strong>arry <strong>M</strong>oney <strong>B</strong>ut <strong>M</strong>y <strong>B</strong>rother <strong>S</strong>ays <strong>B</strong>ig <strong>B</strong>rains <strong>M</strong>atter <strong>M</strong>ore"</p>
            <ul className="list-none ml-4 space-y-1">
              <li><strong>S</strong> = Sensory (I - Olfactory)</li>
              <li><strong>S</strong> = Sensory (II - Optic)</li>
              <li><strong>M</strong> = Motor (III - Oculomotor)</li>
              <li><strong>M</strong> = Motor (IV - Trochlear)</li>
              <li><strong>B</strong> = Both (V - Trigeminal)</li>
              <li><strong>M</strong> = Motor (VI - Abducens)</li>
              <li><strong>B</strong> = Both (VII - Facial)</li>
              <li><strong>S</strong> = Sensory (VIII - Vestibulocochlear)</li>
              <li><strong>B</strong> = Both (IX - Glossopharyngeal)</li>
              <li><strong>B</strong> = Both (X - Vagus)</li>
              <li><strong>M</strong> = Motor (XI - Accessory)</li>
              <li><strong>M</strong> = Motor (XII - Hypoglossal)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Brainstem Level for Motor Nuclei:</h4>
            <p className="mb-2 italic">"<strong>3-4</strong> at the <strong>MIDBRAIN</strong> door, <strong>5-6-7-8</strong> at the <strong>PONTINE</strong> gate, <strong>9-10-11-12</strong> at the <strong>MEDULLA's</strong> shelf"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>CN III, IV = Midbrain</li>
              <li>CN V, VI, VII, VIII = Pons</li>
              <li>CN IX, X, XI, XII = Medulla</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">CN III (Oculomotor) Eye Muscles:</h4>
            <p className="mb-2 italic">"<strong>L</strong>ift the <strong>lid</strong>, look <strong>U</strong>p, <strong>D</strong>own, and <strong>I</strong>n" = LR6SO4, rest are CN3</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>L</strong>evator palpebrae superioris</li>
              <li>Superior <strong>R</strong>ectus (up)</li>
              <li>Inferior <strong>R</strong>ectus (down)</li>
              <li><strong>M</strong>edial <strong>R</strong>ectus (adduction/in)</li>
              <li><strong>I</strong>nferior <strong>O</strong>blique (up & out)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Eye Muscle Innervation:</h4>
            <p className="mb-2 italic">"<strong>LR6 SO4</strong>, rest by CN3"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>L</strong>ateral <strong>R</strong>ectus = CN <strong>6</strong> (Abducens)</li>
              <li><strong>S</strong>uperior <strong>O</strong>blique = CN <strong>4</strong> (Trochlear)</li>
              <li>All other extraocular muscles = CN <strong>3</strong> (Oculomotor)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Ascending Tracts (Sensory):</h4>
            <p className="mb-2 italic">"<strong>D</strong>orsal <strong>C</strong>olumns <strong>M</strong>ediate <strong>F</strong>ine <strong>T</strong>ouch"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>D</strong>orsal <strong>C</strong>olumns = <strong>M</strong>edial lemniscus pathway</li>
              <li><strong>F</strong>ine touch, vibration, proprioception</li>
              <li><strong>T</strong>actile discrimination</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Spinothalamic Tract:</h4>
            <p className="mb-2 italic">"<strong>P</strong>ain and <strong>T</strong>emperature <strong>T</strong>ake the <strong>L</strong>ateral <strong>S</strong>pinothalamic <strong>T</strong>ract"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Lateral spinothalamic tract = Pain & temperature</li>
              <li>Crosses at spinal cord level (within 1-2 segments)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Descending Motor Tracts:</h4>
            <p className="mb-2 italic">"<strong>P</strong>yramidal tracts are <strong>P</strong>recise" (Corticospinal = voluntary precise movements)</p>
            <p className="italic">"<strong>E</strong>xtrapyramidal tracts <strong>E</strong>nable balance & tone" (Rubrospinal, Vestibulospinal, Reticulospinal)</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Corticospinal Tract Decussation:</h4>
            <p className="mb-2 italic">"<strong>80%</strong> cross at <strong>P</strong>yramidal decussation → <strong>L</strong>ateral corticospinal tract"</p>
            <p className="italic">"<strong>20%</strong> stay <strong>A</strong>nterior → <strong>A</strong>nterior corticospinal tract (crosses later at spinal cord)"</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Medial Lemniscus Pathway:</h4>
            <p className="mb-2 italic">"<strong>F</strong>ine touch goes up <strong>G</strong>racile and <strong>C</strong>uneate"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Lower body (below T6) → Fasciculus <strong>G</strong>racilis → Nucleus gracilis</li>
              <li>Upper body (above T6) → Fasciculus <strong>C</strong>uneatus → Nucleus cuneatus</li>
              <li>Both cross as internal arcuate fibers → form medial lemniscus → VPL of thalamus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Functional Components Abbreviations:</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>GSA</strong> = General Somatic Afferent (pain, temp, touch from body/face)</li>
              <li><strong>SSA</strong> = Special Somatic Afferent (vision, hearing, balance)</li>
              <li><strong>GVA</strong> = General Visceral Afferent (visceral sensation)</li>
              <li><strong>SVA</strong> = Special Visceral Afferent (taste, smell)</li>
              <li><strong>GSE</strong> = General Somatic Efferent (skeletal muscles from somites)</li>
              <li><strong>SVE</strong> = Special Visceral Efferent (branchiomeric muscles - face, pharynx, larynx)</li>
              <li><strong>GVE</strong> = General Visceral Efferent (parasympathetic)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Parasympathetic Nuclei in Brainstem:</h4>
            <p className="mb-2 italic">"<strong>E</strong>dinger-<strong>W</strong>estphal <strong>S</strong>ays <strong>S</strong>alivate <strong>I</strong>nferiorly, <strong>D</strong>orsally for <strong>V</strong>agus"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>E</strong>dinger-<strong>W</strong>estphal nucleus (CN III) - pupil & lens</li>
              <li><strong>S</strong>uperior <strong>S</strong>alivatory nucleus (CN VII) - lacrimal, submandibular glands</li>
              <li><strong>I</strong>nferior salivatory nucleus (CN IX) - parotid gland</li>
              <li><strong>D</strong>orsal vagal nucleus (CN X) - thoracic & abdominal viscera</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Vestibular Nuclei:</h4>
            <p className="mb-2 italic">"<strong>S</strong>uper <strong>M</strong>an <strong>L</strong>ies <strong>I</strong>njured"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>S</strong>uperior vestibular nucleus</li>
              <li><strong>M</strong>edial vestibular nucleus</li>
              <li><strong>L</strong>ateral vestibular nucleus (Deiters' nucleus)</li>
              <li><strong>I</strong>nferior vestibular nucleus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Cerebellar Peduncles:</h4>
            <p className="mb-2 italic">"<strong>S</strong>uper <strong>M</strong>om <strong>I</strong>s the best"</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>S</strong>uperior cerebellar peduncle (midbrain) - OUTPUT from cerebellum</li>
              <li><strong>M</strong>iddle cerebellar peduncle (pons) - INPUT from pontine nuclei</li>
              <li><strong>I</strong>nferior cerebellar peduncle (medulla) - INPUT from spinal cord & medulla</li>
            </ul>
          </div>
        </div>
      )
    }
  ]
};

export const quizData = [
  {
    id: 1,
    question: "Which nucleus is located at the level of the superior colliculus in the midbrain?",
    options: [
      "Oculomotor nucleus (CN III)",
      "Trochlear nucleus (CN IV)",
      "Abducens nucleus (CN VI)",
      "Facial nucleus (CN VII)"
    ],
    correct: 0,
    explanation: "The oculomotor nucleus (CN III) is located at the level of the superior colliculus in the midbrain. The trochlear nucleus is at the inferior colliculus level.",
    category: "brainstem"
  },
  {
    id: 2,
    question: "Through which foramen does the trigeminal nerve's maxillary division (V2) exit the skull?",
    options: [
      "Foramen ovale",
      "Foramen rotundum",
      "Superior orbital fissure",
      "Jugular foramen"
    ],
    correct: 1,
    explanation: "The maxillary division (V2) exits through foramen rotundum. V1 exits through superior orbital fissure, and V3 exits through foramen ovale.",
    category: "cranial-nerves"
  },
  {
    id: 3,
    question: "The hypoglossal nucleus is located in which part of the brainstem?",
    options: [
      "Midbrain",
      "Pons",
      "Medulla oblongata",
      "Thalamus"
    ],
    correct: 2,
    explanation: "The hypoglossal nucleus (CN XII) is located in the medulla oblongata, specifically near the medial para-olivary sulcus.",
    category: "brainstem"
  },
  {
    id: 4,
    question: "What is the primary function of the lateral corticospinal tract?",
    options: [
      "Control of axial muscles",
      "Voluntary skilled motor activity",
      "Pain and temperature sensation",
      "Proprioception from lower limbs"
    ],
    correct: 1,
    explanation: "The lateral corticospinal tract mediates voluntary skilled motor activity. It comprises 80% of corticospinal fibers that decussate at the pyramidal decussation.",
    category: "tracts"
  },
  {
    id: 5,
    question: "Which cranial nerve exits the brainstem dorsally?",
    options: [
      "Oculomotor (CN III)",
      "Trochlear (CN IV)",
      "Abducens (CN VI)",
      "Facial (CN VII)"
    ],
    correct: 1,
    explanation: "The trochlear nerve (CN IV) is the ONLY cranial nerve that exits from the dorsal aspect of the brainstem, specifically between the inferior colliculi.",
    category: "cranial-nerves"
  },
  {
    id: 6,
    question: "The nucleus gracilis and nucleus cuneatus are located in which brainstem level?",
    options: [
      "Midbrain",
      "Pons",
      "Medulla oblongata",
      "Thalamus"
    ],
    correct: 2,
    explanation: "Nucleus gracilis and nucleus cuneatus are proper nuclei of the medulla oblongata. They receive dorsal column (medial lemniscus) input for fine touch and proprioception.",
    category: "brainstem"
  },
  {
    id: 7,
    question: "Which structure passes through the superior orbital fissure?",
    options: [
      "CN V2 (maxillary)",
      "CN III, IV, V1, and VI",
      "CN VII (facial)",
      "CN IX (glossopharyngeal)"
    ],
    correct: 1,
    explanation: "The superior orbital fissure transmits CN III (oculomotor), CN IV (trochlear), CN V1 (ophthalmic), and CN VI (abducens) - all nerves related to eye function.",
    category: "cranial-nerves"
  },
  {
    id: 8,
    question: "What percentage of corticospinal tract fibers cross at the pyramidal decussation?",
    options: [
      "100%",
      "80%",
      "50%",
      "20%"
    ],
    correct: 1,
    explanation: "Approximately 80% of corticospinal fibers cross at the pyramidal decussation to form the lateral corticospinal tract. The remaining 20% form the anterior corticospinal tract.",
    category: "tracts"
  },
  {
    id: 9,
    question: "The substantia nigra is a characteristic nucleus of which brainstem level?",
    options: [
      "Medulla",
      "Pons",
      "Midbrain",
      "Spinal cord"
    ],
    correct: 2,
    explanation: "The substantia nigra is a specific nucleus of the midbrain tegmentum. It belongs to the basal ganglia-mediated motor system and has compact and reticular parts.",
    category: "brainstem"
  },
  {
    id: 10,
    question: "Which cranial nerves exit through the jugular foramen?",
    options: [
      "CN VII and VIII",
      "CN IX, X, and XI",
      "CN V and VI",
      "CN III and IV"
    ],
    correct: 1,
    explanation: "CN IX (glossopharyngeal), CN X (vagus), and CN XI (accessory) all exit the skull through the jugular foramen at the lateral para-olivary sulcus of the medulla.",
    category: "cranial-nerves"
  },
  {
    id: 11,
    question: "The medial lemniscus carries which type of sensory information?",
    options: [
      "Pain and temperature",
      "Fine touch, vibration, and proprioception",
      "Crude touch only",
      "Visceral sensation"
    ],
    correct: 1,
    explanation: "The medial lemniscus (dorsal column pathway) carries epicritic sensations: fine/discriminative touch, vibration, and proprioception from the body.",
    category: "tracts"
  },
  {
    id: 12,
    question: "Where is the motor nucleus of CN VI (abducens) located?",
    options: [
      "Midbrain at superior colliculus",
      "Rostral pons",
      "At the bulbopontine sulcus (ventral pons)",
      "Medulla oblongata"
    ],
    correct: 2,
    explanation: "The abducens nucleus is located at the level of the bulbopontine sulcus in the ventral pons, the groove between the medulla oblongata and inferior margin of pons.",
    category: "brainstem"
  },
  {
    id: 13,
    question: "Which nucleus is associated with CN III for parasympathetic control?",
    options: [
      "Superior salivatory nucleus",
      "Inferior salivatory nucleus",
      "Edinger-Westphal nucleus",
      "Dorsal vagal nucleus"
    ],
    correct: 2,
    explanation: "The Edinger-Westphal nucleus provides parasympathetic innervation for CN III, controlling pupil constriction (sphincter pupillae) and lens accommodation (ciliary muscle).",
    category: "brainstem"
  },
  {
    id: 14,
    question: "The spinothalamic tract primarily carries which sensations?",
    options: [
      "Fine touch and vibration",
      "Pain, temperature, and crude touch",
      "Proprioception only",
      "Visual information"
    ],
    correct: 1,
    explanation: "The spinothalamic tract (part of spinal lemniscus) carries protopathic sensations: pain, temperature, and crude/coarse touch from the body.",
    category: "tracts"
  },
  {
    id: 15,
    question: "The inferior olivary nucleus is located in which brainstem region?",
    options: [
      "Midbrain",
      "Pons",
      "Medulla oblongata",
      "Diencephalon"
    ],
    correct: 2,
    explanation: "The inferior olivary complex is a proper nucleus of the medulla oblongata (both closed and open parts). It's part of the cerebellar movement regulatory system.",
    category: "brainstem"
  },
  {
    id: 16,
    question: "Through which foramen does the facial nerve (CN VII) exit the skull?",
    options: [
      "Internal acoustic meatus",
      "Stylomastoid foramen",
      "Jugular foramen",
      "Superior orbital fissure"
    ],
    correct: 1,
    explanation: "CN VII enters the internal acoustic meatus, travels through the facial canal, and exits the skull via the stylomastoid foramen. It then gives off 5 terminal branches in the parotid gland.",
    category: "cranial-nerves"
  },
  {
    id: 17,
    question: "Which muscle is innervated by CN IV (trochlear nerve)?",
    options: [
      "Lateral rectus",
      "Medial rectus",
      "Superior oblique",
      "Inferior oblique"
    ],
    correct: 2,
    explanation: "The trochlear nerve (CN IV) innervates the superior oblique muscle, which produces eye movements directing the gaze inferolaterally (depression, intorsion, abduction).",
    category: "cranial-nerves"
  },
  {
    id: 18,
    question: "The vestibulospinal tract primarily controls which muscle group?",
    options: [
      "Flexor muscles",
      "Extensor muscles (anti-gravity)",
      "Facial muscles",
      "Tongue muscles"
    ],
    correct: 1,
    explanation: "The vestibulospinal tract activates extensor muscles (anti-gravity/posture muscles). It originates mainly from the lateral vestibular nucleus (Deiters) and controls extensor tone.",
    category: "tracts"
  },
  {
    id: 19,
    question: "At what level are CN V nuclei primarily located?",
    options: [
      "Medulla only",
      "Midbrain only",
      "Pons (with extensions to midbrain and medulla)",
      "Thalamus"
    ],
    correct: 2,
    explanation: "CN V (trigeminal) has nuclei spanning multiple levels: motor nucleus in pons, principal sensory nucleus in upper pons, mesencephalic nucleus extending to midbrain, and spinal nucleus extending to medulla.",
    category: "brainstem"
  },
  {
    id: 20,
    question: "The red nucleus is characteristic of which brainstem level?",
    options: [
      "Medulla",
      "Pons",
      "Midbrain tegmentum",
      "Cerebellum"
    ],
    correct: 2,
    explanation: "The red nucleus is a main nucleus of the midbrain tegmentum. It belongs to the cerebellar motor regulatory system and gives rise to the rubrospinal tract.",
    category: "brainstem"
  },
  {
    id: 21,
    question: "Which cranial nerve provides motor innervation to the lateral rectus muscle?",
    options: [
      "CN III (oculomotor)",
      "CN IV (trochlear)",
      "CN VI (abducens)",
      "CN VII (facial)"
    ],
    correct: 2,
    explanation: "CN VI (abducens) innervates the lateral rectus muscle, which abducts the eye and directs the gaze laterally in the horizontal plane. Remember: LR6 (Lateral Rectus = CN 6).",
    category: "cranial-nerves"
  },
  {
    id: 22,
    question: "Where do internal arcuate fibers decussate?",
    options: [
      "Pyramidal decussation",
      "Lemniscal decussation in medulla",
      "Superior cerebellar peduncle decussation",
      "Corpus callosum"
    ],
    correct: 1,
    explanation: "Internal arcuate fibers from nucleus gracilis and cuneatus cross at the lemniscal decussation in the medulla to form the medial lemniscus, which then ascends to VPL of thalamus.",
    category: "tracts"
  },
  {
    id: 23,
    question: "The nucleus ambiguus provides motor innervation to which cranial nerves?",
    options: [
      "CN III, IV, VI",
      "CN V, VII",
      "CN IX, X, XI",
      "CN I, II"
    ],
    correct: 2,
    explanation: "The nucleus ambiguus (in medulla) provides special visceral efferent (SVE) motor fibers to CN IX, X, and XI, innervating muscles of the pharynx, larynx, and soft palate.",
    category: "brainstem"
  },
  {
    id: 24,
    question: "The locus coeruleus is located in which brainstem region?",
    options: [
      "Medulla",
      "Upper pons tegmentum",
      "Midbrain",
      "Thalamus"
    ],
    correct: 1,
    explanation: "The locus coeruleus is located in the tegmentum of the upper pons. It contains adrenergic neurons and is part of the reticular formation, innervating the forebrain and spinal cord.",
    category: "brainstem"
  },
  {
    id: 25,
    question: "Which tract originates from the red nucleus and controls flexor tone?",
    options: [
      "Vestibulospinal tract",
      "Reticulospinal tract",
      "Rubrospinal tract",
      "Corticospinal tract"
    ],
    correct: 2,
    explanation: "The rubrospinal tract originates from the red nucleus in the midbrain, crosses at the ventral tegmental decussation, and stimulates flexor muscles (primarily upper limb).",
    category: "tracts"
  },
  {
    id: 26,
    question: "Through which structure does CN I (olfactory) pass to reach the olfactory bulb?",
    options: [
      "Foramen magnum",
      "Cribriform plate of ethmoid bone",
      "Optic canal",
      "Superior orbital fissure"
    ],
    correct: 1,
    explanation: "Olfactory nerve fibers (CN I) pass through foramina in the cribriform plate of the ethmoid bone to reach the olfactory bulb, which lies superior to the cribriform plate.",
    category: "cranial-nerves"
  },
  {
    id: 27,
    question: "The superior olivary nuclei, located in the pons, are part of which system?",
    options: [
      "Visual system",
      "Auditory system",
      "Vestibular system",
      "Olfactory system"
    ],
    correct: 1,
    explanation: "The superior olivary complex is located in the tegmentum of the lower pons and is a nucleus of the auditory system. It's associated with the lateral lemniscus.",
    category: "brainstem"
  },
  {
    id: 28,
    question: "What does the anterior corticospinal tract control?",
    options: [
      "Fine motor movements of hands",
      "Control of axial muscles",
      "Pain sensation",
      "Visual reflexes"
    ],
    correct: 1,
    explanation: "The anterior (ventral) corticospinal tract comprises the uncrossed 20% of fibers that descend in the anterior funiculus and mediate control of axial muscles. It crosses later at the spinal cord level.",
    category: "tracts"
  },
  {
    id: 29,
    question: "The nucleus solitarius receives sensory input from which cranial nerves?",
    options: [
      "CN III, IV, VI",
      "CN VII, IX, X",
      "CN I, II",
      "CN V only"
    ],
    correct: 1,
    explanation: "The nucleus solitarius (solitary nucleus) in the medulla receives special visceral afferent (taste) and general visceral afferent (visceral sensation) from CN VII, IX, and X.",
    category: "brainstem"
  },
  {
    id: 30,
    question: "Which cerebellar peduncle connects the pons to the cerebellum?",
    options: [
      "Superior cerebellar peduncle",
      "Middle cerebellar peduncle",
      "Inferior cerebellar peduncle",
      "Medial cerebellar peduncle"
    ],
    correct: 1,
    explanation: "The middle cerebellar peduncle connects the pons to the cerebellum, carrying input from pontine nuclei. The pontocerebellar tract is a large crossing tract running through it.",
    category: "tracts"
  }
];
