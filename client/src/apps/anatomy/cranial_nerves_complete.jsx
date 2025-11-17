import React from 'react';

const cranialNervesData = {
  title: 'Cranial Nerves (CN I-XII)',
  sections: [
    {
      id: 'cn-summary',
      title: 'All 12 Cranial Nerves - Summary Table',
      description: 'Complete reference extracted from neuroanatomy PDFs',
      content: (
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="">CN</th>
              <th className="">Name</th>
              <th className="">Type</th>
              <th className="">Nuclei (Location)</th>
              <th className="">Exit</th>
              <th className="">Function</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="">I</td>
              <td className="">Olfactory</td>
              <td className="">Sensory (SVA)</td>
              <td className="">Olfactory bulb</td>
              <td className="">Cribriform plate</td>
              <td className="">Smell</td>
            </tr>
            <tr className="">
              <td className="">II</td>
              <td className="">Optic</td>
              <td className="">Sensory (SSA)</td>
              <td className="">Lateral geniculate nucleus (thalamus)</td>
              <td className="">Optic canal</td>
              <td className="">Vision</td>
            </tr>
            <tr className="">
              <td className="">III</td>
              <td className="">Oculomotor</td>
              <td className="">Motor (GSE) + Parasympathetic (GVE)</td>
              <td className="">Oculomotor nucleus (midbrain, superior colliculus), Edinger-Westphal nucleus</td>
              <td className="">Superior orbital fissure</td>
              <td className="">Eye movements, pupil constriction, accommodation</td>
            </tr>
            <tr className="">
              <td className="">IV</td>
              <td className="">Trochlear</td>
              <td className="">Motor (GSE)</td>
              <td className="">Trochlear nucleus (midbrain, inferior colliculus)</td>
              <td className="">Superior orbital fissure</td>
              <td className="">Superior oblique muscle</td>
            </tr>
            <tr className="">
              <td className="">V</td>
              <td className="">Trigeminal</td>
              <td className="">Sensory (GSA) + Motor (SVE)</td>
              <td className="">Motor nucleus (pons), Mesencephalic (midbrain), Principal (pons), Spinal (pons-medulla)</td>
              <td className="">V1: Superior orbital fissure, V2: Foramen rotundum, V3: Foramen ovale</td>
              <td className="">Facial sensation, mastication</td>
            </tr>
            <tr className="">
              <td className="">VI</td>
              <td className="">Abducens</td>
              <td className="">Motor (GSE)</td>
              <td className="">Abducens nucleus (pons)</td>
              <td className="">Superior orbital fissure</td>
              <td className="">Lateral rectus muscle (eye abduction)</td>
            </tr>
            <tr className="">
              <td className="">VII</td>
              <td className="">Facial</td>
              <td className="">Motor (SVE) + Parasympathetic (GVE) + Sensory (SVA, GSA)</td>
              <td className="">Motor nucleus (pons), Superior salivatory (pons), Nucleus solitarius (medulla)</td>
              <td className="">Internal acoustic meatus → Stylomastoid foramen</td>
              <td className="">Facial expression, taste (ant. 2/3 tongue), salivation</td>
            </tr>
            <tr className="">
              <td className="">VIII</td>
              <td className="">Vestibulocochlear</td>
              <td className="">Sensory (SSA)</td>
              <td className="">Cochlear nuclei (dorsal & ventral), Vestibular nuclei (4 types) in pons-medulla</td>
              <td className="">Internal acoustic meatus</td>
              <td className="">Hearing (cochlear), balance (vestibular)</td>
            </tr>
            <tr className="">
              <td className="">IX</td>
              <td className="">Glossopharyngeal</td>
              <td className="">Motor (SVE) + Parasympathetic (GVE) + Sensory (SVA, GSA, GVA)</td>
              <td className="">Nucleus ambiguus (medulla), Inferior salivatory (medulla), Nucleus solitarius</td>
              <td className="">Jugular foramen</td>
              <td className="">Taste (post. 1/3 tongue), swallowing, parotid salivation</td>
            </tr>
            <tr className="">
              <td className="">X</td>
              <td className="">Vagus</td>
              <td className="">Motor (SVE) + Parasympathetic (GVE) + Sensory (SVA, GSA, GVA)</td>
              <td className="">Nucleus ambiguus (medulla), Dorsal motor nucleus (medulla), Nucleus solitarius</td>
              <td className="">Jugular foramen</td>
              <td className="">Pharynx, larynx, parasympathetic to thoracic/abdominal organs</td>
            </tr>
            <tr className="">
              <td className="">XI</td>
              <td className="">Accessory</td>
              <td className="">Motor (SVE cranial, GSE spinal)</td>
              <td className="">Nucleus ambiguus (medulla - cranial), Spinal nucleus (C1-C5/C6 - spinal)</td>
              <td className="">Jugular foramen (foramen magnum entry)</td>
              <td className="">SCM and trapezius muscles</td>
            </tr>
            <tr className="">
              <td className="">XII</td>
              <td className="">Hypoglossal</td>
              <td className="">Motor (GSE)</td>
              <td className="">Hypoglossal nucleus (medulla)</td>
              <td className="">Hypoglossal canal</td>
              <td className="">Tongue movements (all except palatoglossus)</td>
            </tr>
          </tbody>
        </table>
      )
    },
    
    {
      id: 'cn1',
      title: 'CN I - Olfactory Nerve',
      description: 'Special sensory nerve for smell',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Sensory (Special Visceral Afferent - SVA)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Olfactory bulb</strong> (2nd order neurons: mitral & tufted cells)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Cribriform plate</strong> of ethmoid bone</td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Smell (olfaction)</td>
              </tr>
              <tr>
                <td className="">Pathway</td>
                <td className="">Olfactory receptor cells (nasal epithelium) → olfactory nerve fibers → cribriform plate → olfactory bulb → olfactory tract → primary olfactory cortex</td>
              </tr>
              <tr>
                <td className="">Clinical Note</td>
                <td className="">Receptor cells regenerate every 30-60 days (unique among CNS neurons)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn2',
      title: 'CN II - Optic Nerve',
      description: 'Special sensory nerve for vision',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Sensory (Special Somatic Afferent - SSA)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Lateral Geniculate Nucleus (LGN)</strong> of thalamus</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Optic canal</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Vision</td>
              </tr>
              <tr>
                <td className="">Pathway</td>
                <td className="">Retina (photoreceptors → bipolar → ganglion cells) → optic nerve → optic chiasm (nasal fibers cross) → optic tract → LGN → optic radiation → primary visual cortex (calcarine sulcus)</td>
              </tr>
              <tr>
                <td className="">Clinical Note</td>
                <td className="">Nasal retinal fibers cross at chiasm; temporal fibers stay ipsilateral</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn3',
      title: 'CN III - Oculomotor Nerve',
      description: 'Motor nerve for eye movements',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (GSE) + Parasympathetic (GVE)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Oculomotor nucleus</strong> (midbrain, superior colliculus level), <strong>Edinger-Westphal nucleus</strong> (parasympathetic)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Eye movements, pupil constriction, lens accommodation</td>
              </tr>
              <tr>
                <td className="">Motor Innervation</td>
                <td className="">Superior rectus, inferior rectus, medial rectus, inferior oblique, levator palpebrae superioris</td>
              </tr>
              <tr>
                <td className="">Parasympathetic</td>
                <td className="">Sphincter pupillae (pupil constriction), ciliary muscle (accommodation)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn4',
      title: 'CN IV - Trochlear Nerve',
      description: 'Motor nerve for superior oblique muscle',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (GSE)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Trochlear nucleus</strong> (midbrain, inferior colliculus level)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Superior oblique muscle (depresses & intorts eye)</td>
              </tr>
              <tr>
                <td className="">Clinical Note</td>
                <td className="">Only CN to exit dorsally from brainstem; smallest CN; longest intracranial course</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn5',
      title: 'CN V - Trigeminal Nerve',
      description: 'Mixed nerve for facial sensation and mastication',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Sensory (GSA) + Motor (SVE)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Motor:</strong> Motor nucleus (pons)<br/><strong>Sensory:</strong> Mesencephalic (midbrain), Principal/pontine (pons), Spinal (pons-medulla)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className="">V1: Superior orbital fissure<br/>V2: Foramen rotundum<br/>V3: Foramen ovale</td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Facial sensation, muscles of mastication</td>
              </tr>
              <tr>
                <td className="">Divisions</td>
                <td className="">V1 (Ophthalmic), V2 (Maxillary), V3 (Mandibular - only motor)</td>
              </tr>
              <tr>
                <td className="">Motor Innervation</td>
                <td className="">Muscles of mastication, mylohyoid, anterior digastric, tensor tympani, tensor veli palatini</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn6',
      title: 'CN VI - Abducens Nerve',
      description: 'Motor nerve for lateral rectus muscle',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (GSE)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Abducens nucleus</strong> (pons, floor of 4th ventricle)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Superior orbital fissure</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Lateral rectus muscle (eye abduction)</td>
              </tr>
              <tr>
                <td className="">Clinical Note</td>
                <td className="">Long intracranial course makes it vulnerable to increased intracranial pressure</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn7',
      title: 'CN VII - Facial Nerve',
      description: 'Mixed nerve for facial expression, taste, and salivation',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (SVE) + Parasympathetic (GVE) + Sensory (SVA, GSA)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Motor nucleus</strong> (lower pons), <strong>Superior salivatory nucleus</strong> (pons), <strong>Nucleus solitarius</strong> (medulla)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className="">Internal acoustic meatus → Facial canal → <strong>Stylomastoid foramen</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Facial expression, taste (ant. 2/3 tongue), salivation, lacrimation</td>
              </tr>
              <tr>
                <td className="">Motor Innervation</td>
                <td className="">Facial expression muscles, stapedius, stylohyoid, posterior digastric</td>
              </tr>
              <tr>
                <td className="">Parasympathetic</td>
                <td className="">Lacrimal, submandibular, sublingual glands</td>
              </tr>
              <tr>
                <td className="">Sensory</td>
                <td className="">Taste anterior 2/3 tongue (via chorda tympani)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn8',
      title: 'CN VIII - Vestibulocochlear Nerve',
      description: 'Special sensory nerve for hearing and balance',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Sensory (SSA)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Cochlear:</strong> Dorsal & ventral cochlear nuclei (pons-medulla)<br/><strong>Vestibular:</strong> Superior, inferior, medial, lateral nuclei (pons-medulla)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Internal acoustic meatus</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Hearing (cochlear division), balance & equilibrium (vestibular division)</td>
              </tr>
              <tr>
                <td className="">Cochlear Pathway</td>
                <td className="">Organ of Corti → spiral ganglion → cochlear nuclei → superior olive → lateral lemniscus → inferior colliculus → medial geniculate body → auditory cortex</td>
              </tr>
              <tr>
                <td className="">Vestibular Pathway</td>
                <td className="">Semicircular canals (rotation), utricle & saccule (linear acceleration) → vestibular nuclei</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn9',
      title: 'CN IX - Glossopharyngeal Nerve',
      description: 'Mixed nerve for posterior tongue and pharynx',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (SVE) + Parasympathetic (GVE) + Sensory (SVA, GSA, GVA)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Nucleus ambiguus</strong> (medulla), <strong>Inferior salivatory nucleus</strong> (medulla), <strong>Nucleus solitarius</strong> (medulla)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Jugular foramen</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Taste (post. 1/3 tongue), swallowing, parotid salivation, carotid body/sinus</td>
              </tr>
              <tr>
                <td className="">Motor Innervation</td>
                <td className="">Stylopharyngeus muscle</td>
              </tr>
              <tr>
                <td className="">Parasympathetic</td>
                <td className="">Parotid gland (via otic ganglion)</td>
              </tr>
              <tr>
                <td className="">Sensory</td>
                <td className="">Taste posterior 1/3 tongue, pharyngeal sensation, carotid body (chemoreceptors), carotid sinus (baroreceptors)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn10',
      title: 'CN X - Vagus Nerve',
      description: 'Major parasympathetic nerve',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (SVE) + Parasympathetic (GVE) + Sensory (SVA, GSA, GVA)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Nucleus ambiguus</strong> (medulla), <strong>Dorsal motor nucleus</strong> (medulla), <strong>Nucleus solitarius</strong> (medulla)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Jugular foramen</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Pharynx, larynx, parasympathetic to thoracic/abdominal organs to left colic flexure</td>
              </tr>
              <tr>
                <td className="">Motor Innervation</td>
                <td className="">Pharyngeal & laryngeal muscles (except stylopharyngeus, tensor veli palatini)</td>
              </tr>
              <tr>
                <td className="">Parasympathetic</td>
                <td className="">Heart, lungs, GI tract (to left colic flexure)</td>
              </tr>
              <tr>
                <td className="">Sensory</td>
                <td className="">Pharynx, larynx, thoracic/abdominal viscera, taste epiglottis</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn11',
      title: 'CN XI - Accessory Nerve',
      description: 'Motor nerve for neck and shoulder muscles',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (SVE cranial root, GSE spinal root)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Cranial root:</strong> Nucleus ambiguus (medulla)<br/><strong>Spinal root:</strong> Spinal accessory nucleus (C1-C5/C6)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className="">Spinal root ascends through <strong>foramen magnum</strong> → exits via <strong>jugular foramen</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Sternocleidomastoid, trapezius muscles</td>
              </tr>
              <tr>
                <td className="">Cranial Root</td>
                <td className="">Joins vagus (laryngeal/pharyngeal muscles)</td>
              </tr>
              <tr>
                <td className="">Spinal Root</td>
                <td className="">SCM (head rotation to opposite side), trapezius (shoulder elevation)</td>
              </tr>
              <tr>
                <td className="">Clinical Note</td>
                <td className="">Injury causes shoulder droop, inability to elevate arm above horizontal</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    {
      id: 'cn12',
      title: 'CN XII - Hypoglossal Nerve',
      description: 'Motor nerve for tongue movements',
      content: (
        <div className="space-y-4">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="">Attribute</th>
                <th className="">Details</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="">Type</td>
                <td className="">Motor (GSE)</td>
              </tr>
              <tr>
                <td className="">Nuclei</td>
                <td className=""><strong>Hypoglossal nucleus</strong> (medulla, floor of 4th ventricle)</td>
              </tr>
              <tr>
                <td className="">Exit Foramen</td>
                <td className=""><strong>Hypoglossal canal</strong></td>
              </tr>
              <tr>
                <td className="">Function</td>
                <td className="">Tongue movements (all intrinsic & extrinsic muscles except palatoglossus)</td>
              </tr>
              <tr>
                <td className="">Motor Innervation</td>
                <td className="">All intrinsic tongue muscles + extrinsic (genioglossus, hyoglossus, styloglossus)</td>
              </tr>
              <tr>
                <td className="">NOT Innervated</td>
                <td className="">Palatoglossus (CN X via cranial root of CN XI)</td>
              </tr>
              <tr>
                <td className="">Clinical Note</td>
                <td className="">Unilateral lesion → tongue deviates to IPSILATERAL side (toward lesion)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ]
};

export default cranialNervesData;

/*
## Functional Type Abbreviations

- **GSE** = General Somatic Efferent (motor to skeletal muscle)
- **GVE** = General Visceral Efferent (autonomic/parasympathetic)
- **GSA** = General Somatic Afferent (general sensation)
- **GVA** = General Visceral Afferent (visceral sensation)
- **SVE** = Special Visceral Efferent (branchial arch muscle motor)
- **SVA** = Special Visceral Afferent (taste)
- **SSA** = Special Somatic Afferent (vision, hearing, balance)

## Key Clinical Exits Summary

- **Superior orbital fissure:** CN III, IV, V1, VI
- **Foramen rotundum:** CN V2
- **Foramen ovale:** CN V3
- **Internal acoustic meatus:** CN VII, VIII
- **Jugular foramen:** CN IX, X, XI
- **Hypoglossal canal:** CN XII
- **Optic canal:** CN II
- **Cribriform plate:** CN I
*/
