import React from 'react';

const brainstemData = {
  title: 'Brainstem Structures',
  sections: [
    {
      id: 'medulla',
      title: 'Medulla Oblongata',
      description: 'Most caudal brainstem - CN VIII-XII nuclei, 3 decussations',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-700">Proper Nuclei of Medulla</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">Nucleus</th>
                  <th className="">Localization</th>
                  <th className="">Function</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">Nucleus gracilis</td>
                  <td className="">Closed part (dorsal medulla)</td>
                  <td className="">Somatosensory - receives fasciculus gracilis from lower body</td>
                </tr>
                <tr className="">
                  <td className="">Nucleus cuneatus</td>
                  <td className="">Closed part (dorsal medulla)</td>
                  <td className="">Somatosensory - receives fasciculus cuneatus from upper body</td>
                </tr>
                <tr>
                  <td className="">Inferior olivary complex</td>
                  <td className="">Closed & open part</td>
                  <td className="">Part of cerebellar movement regulatory system</td>
                </tr>
                <tr className="">
                  <td className="">Accessory cuneate nucleus</td>
                  <td className="">Closed part</td>
                  <td className="">Has cerebellar projection, similar to spinocerebellar tracts</td>
                </tr>
                <tr>
                  <td className="">Area postrema</td>
                  <td className="">Floor of 4th ventricle</td>
                  <td className="">Chemoreceptor trigger zone</td>
                </tr>
                <tr className="">
                  <td className="">Arcuate nucleus</td>
                  <td className="">Ventral medulla</td>
                  <td className="">Gives rise to external arcuate fibers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-700">Cranial Nerve Nuclei in Medulla</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">CN</th>
                  <th className="">Motor Nuclei</th>
                  <th className="">PSY Nuclei</th>
                  <th className="">Sensory Nuclei</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">CN VIII</td>
                  <td className="">—</td>
                  <td className="">—</td>
                  <td className="">Inferior, medial, lateral, superior vestibular nuclei<br/>Dorsal & ventral cochlear nucleus</td>
                </tr>
                <tr className="">
                  <td className="">CN IX</td>
                  <td className="">Nucleus ambiguus</td>
                  <td className="">Inferior salivatory nucleus</td>
                  <td className="">Spinal trigeminal nucleus<br/>Nucleus of solitary tract</td>
                </tr>
                <tr>
                  <td className="">CN X</td>
                  <td className="">Nucleus ambiguus</td>
                  <td className="">Dorsal vagal nucleus</td>
                  <td className="">Spinal trigeminal nucleus<br/>Nucleus of solitary tract</td>
                </tr>
                <tr className="">
                  <td className="">CN XI</td>
                  <td className="">Nucleus ambiguus</td>
                  <td className="">—</td>
                  <td className="">—</td>
                </tr>
                <tr>
                  <td className="">CN XII</td>
                  <td className="">Hypoglossal nucleus</td>
                  <td className="">—</td>
                  <td className="">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-700">White Matter Tracts in Medulla</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">Tract</th>
                  <th className="">Originate From</th>
                  <th className="">Terminate In</th>
                  <th className="">Function</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">Fasciculus gracilis</td>
                  <td className="">Spinal cord (primary sensory neurons)</td>
                  <td className="">Nucleus gracilis</td>
                  <td className="">Somatosensory - discriminative touch, kinesthesia</td>
                </tr>
                <tr className="">
                  <td className="">Fasciculus cuneatus</td>
                  <td className="">Spinal cord (primary sensory neuron)</td>
                  <td className="">Nucleus cuneatus</td>
                  <td className="">Somatosensory</td>
                </tr>
                <tr>
                  <td className="">Medial lemniscus</td>
                  <td className="">Nucleus gracilis, Nucleus cuneatus</td>
                  <td className="">Thalamus (VPL)</td>
                  <td className="">Somatosensory</td>
                </tr>
                <tr className="">
                  <td className="">Spinoolivary tract</td>
                  <td className="">Spinal cord</td>
                  <td className="">Inferior olive</td>
                  <td className="">Somatosensory</td>
                </tr>
                <tr>
                  <td className="">Spinal trigeminal tract</td>
                  <td className="">Pons (radix of CN V)</td>
                  <td className="">Spinal trigeminal nucleus</td>
                  <td className="">Somatosensory - pain, thermal, touch</td>
                </tr>
                <tr className="">
                  <td className="">Solitary tract</td>
                  <td className="">Pons & medulla</td>
                  <td className="">Nucleus of solitary tract</td>
                  <td className="">Visceral & taste sensory</td>
                </tr>
                <tr>
                  <td className="">Central tegmental tract</td>
                  <td className="">Red nucleus of midbrain</td>
                  <td className="">Inferior olivary complex</td>
                  <td className="">Cerebellar regulation</td>
                </tr>
                <tr className="">
                  <td className="">Vestibulospinal tract</td>
                  <td className="">Lateral vestibular nucleus (Deiters)</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Motor regulation (muscle tone)</td>
                </tr>
                <tr>
                  <td className="">Reticulospinal tract</td>
                  <td className="">Reticular formation (pons and medulla)</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Motor regulation (muscle tone)</td>
                </tr>
                <tr className="">
                  <td className="">Olivocerebellar tract</td>
                  <td className="">Inferior olivary complex</td>
                  <td className="">Cerebellar cortex</td>
                  <td className="">Cerebellar regulation</td>
                </tr>
                <tr>
                  <td className="">Corticospinal tract</td>
                  <td className="">Motor neocortex</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Voluntary motor regulation</td>
                </tr>
                <tr className="">
                  <td className="">Medial longitudinal fasciculus</td>
                  <td className="">Vestibular nuclei: pons, medulla</td>
                  <td className="">CN nuclei (III, IV, VI), Spinal cord ventral horn</td>
                  <td className="">Motor regulation of eye movements and head position</td>
                </tr>
                <tr>
                  <td className="">Spinothalamic tract</td>
                  <td className="">Spinal cord</td>
                  <td className="">Thalamus (VPL)</td>
                  <td className="">Somatosensory (pain, thermal, touch)</td>
                </tr>
                <tr className="">
                  <td className="">Corticobulbar tract</td>
                  <td className="">Motor neocortex</td>
                  <td className="">Motor cranial nerve nuclei (XII, XI, X, IX)</td>
                  <td className="">Voluntary motor regulation</td>
                </tr>
                <tr>
                  <td className="">Dorsal spinocerebellar tract</td>
                  <td className="">Spinal cord</td>
                  <td className="">Cerebellar cortex (through inferior cerebellar peduncle)</td>
                  <td className="">Proprioceptive (mainly) sensory information for cerebellum</td>
                </tr>
                <tr className="">
                  <td className="">Ventral spinocerebellar tract</td>
                  <td className="">Spinal cord</td>
                  <td className="">Cerebellar cortex (through superior cerebellar peduncle)</td>
                  <td className="">Proprioceptive (mainly) information for cerebellum</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-red-700">Three Decussations in Medulla</h3>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Pyramidal decussation:</strong> Corticospinal tract crosses (80-90%)</li>
                <li><strong>Lemniscal decussation:</strong> Internal arcuate fibers from gracilis/cuneatus cross to form medial lemniscus</li>
                <li><strong>Olivocerebellar tract decussation:</strong> Fibers from inferior olivary complex cross</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-700">CN Exit Sites</h3>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
              <ul className="space-y-2">
                <li><strong>CN IX, X, XI:</strong> Lateral para-olivary sulcus (retro-olivary groove/postolivary sulcus)</li>
                <li><strong>CN XII:</strong> Medial para-olivary sulcus</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-orange-700">Key Anatomical Features</h3>
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
              <ul className="space-y-1">
                <li><strong>Rostral limit:</strong> Bulbo-pontine sulcus (ventral), striae medullares (dorsal)</li>
                <li><strong>Caudal limit:</strong> Foramen magnum (spino-medullary junction)</li>
                <li><strong>Closed portion:</strong> Contains continuation of central canal</li>
                <li><strong>Open portion:</strong> Contains caudal half of 4th ventricle</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    {
      id: 'pons',
      title: 'Pons',
      description: 'Middle brainstem - CN V-VIII nuclei, 2.5cm long, cerebellar relay',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-green-700">Proper Nuclei of Pons</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">Nucleus</th>
                  <th className="">Localization</th>
                  <th className="">Function</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">Nuclei pontis</td>
                  <td className="">Basis of pons (at every level)</td>
                  <td className="">Belongs to cerebellar system - corticopontine fibers synapse here</td>
                </tr>
                <tr className="">
                  <td className="">Superior olivary complex</td>
                  <td className="">Tegmentum, lower pons</td>
                  <td className="">Nucleus of auditory system</td>
                </tr>
                <tr>
                  <td className="">Nucleus of trapezoid body</td>
                  <td className="">Inside corpus trapezoideum, lower pons</td>
                  <td className="">Part of brainstem auditory system</td>
                </tr>
                <tr className="">
                  <td className="">Locus coeruleus</td>
                  <td className="">Tegmentum, upper pons</td>
                  <td className="">Part of reticular formation - containing adrenergic neurons, innervating forebrain & spinal cord</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-green-700">Cranial Nerve Nuclei in Pons</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">CN</th>
                  <th className="">Motor Nuclei</th>
                  <th className="">PSY Nuclei</th>
                  <th className="">Sensory Nuclei</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">CN V</td>
                  <td className="">Motor trigeminal nucleus</td>
                  <td className="">—</td>
                  <td className="">Mesencephalic nucleus<br/>Spinal trigeminal nucleus<br/>Principal sensory nucleus (upper pons)</td>
                </tr>
                <tr className="">
                  <td className="">CN VI</td>
                  <td className="">Motor abducens nucleus</td>
                  <td className="">—</td>
                  <td className="">—</td>
                </tr>
                <tr>
                  <td className="">CN VII</td>
                  <td className="">Motor facial nucleus</td>
                  <td className="">Superior salivatory nucleus</td>
                  <td className="">—</td>
                </tr>
                <tr className="">
                  <td className="">CN VIII</td>
                  <td className="">—</td>
                  <td className="">—</td>
                  <td className="">Superior, medial, lateral vestibular nuclei</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-green-700">White Matter Tracts of Pons</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">Tract</th>
                  <th className="">Originate From</th>
                  <th className="">Terminate In</th>
                  <th className="">Function</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">Spinothalamic tract</td>
                  <td className="">Spinal cord</td>
                  <td className="">Thalamus (VPL)</td>
                  <td className="">Somatosensory from body (touch, pain, thermal)</td>
                </tr>
                <tr className="">
                  <td className="">Medial lemniscus</td>
                  <td className="">Dorsal column nuclei</td>
                  <td className="">Thalamus (VPL)</td>
                  <td className="">Somatosensory</td>
                </tr>
                <tr>
                  <td className="">Lateral lemniscus</td>
                  <td className="">Nuclei of trapezoid body, Superior olive</td>
                  <td className="">Inferior colliculus</td>
                  <td className="">Auditory pathway</td>
                </tr>
                <tr className="">
                  <td className="">Central tegmental fasciculus</td>
                  <td className="">Red nucleus</td>
                  <td className="">Inferior olivary complex</td>
                  <td className="">Cerebellar regulation</td>
                </tr>
                <tr>
                  <td className="">Medial longitudinal fasciculus</td>
                  <td className="">Lateral vestibular nucleus</td>
                  <td className="">Nerve nuclei III, IV, VI</td>
                  <td className="">Motor regulation of eye movements and head position</td>
                </tr>
                <tr className="">
                  <td className="">Dorsal longitudinal fasciculus</td>
                  <td className="">Hypothalamus</td>
                  <td className="">CN nuclei VII, IX, X; reticular formation</td>
                  <td className="">Autonomic regulation</td>
                </tr>
                <tr>
                  <td className="">Corticospinal tract</td>
                  <td className="">Motor neocortex</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Motor regulation (voluntary movements)</td>
                </tr>
                <tr className="">
                  <td className="">Corticobulbar tract</td>
                  <td className="">Motor neocortex</td>
                  <td className="">Motor cranial nerve nuclei</td>
                  <td className="">Motor regulation (voluntary movement)</td>
                </tr>
                <tr>
                  <td className="">Corticopontine tract</td>
                  <td className="">Frontal, parietal, occipital & temporal lobes</td>
                  <td className="">Nuclei pontis</td>
                  <td className="">Cerebellar regulation</td>
                </tr>
                <tr className="">
                  <td className="">Pontocerebellar tract</td>
                  <td className="">Pontine nuclei</td>
                  <td className="">Cerebellar cortex</td>
                  <td className="">Cerebellar regulation - large crossing tract in middle cerebellar peduncle</td>
                </tr>
                <tr>
                  <td className="">Spinal trigeminal tract</td>
                  <td className="">Radix nervi V</td>
                  <td className="">Spinal trigeminal nucleus</td>
                  <td className="">Somatosensory (thermal, touch, pain)</td>
                </tr>
                <tr className="">
                  <td className="">Solitary tract</td>
                  <td className="">Radix nervi VII, IX, X</td>
                  <td className="">Nucleus of solitary tract</td>
                  <td className="">Visceral and taste sensory</td>
                </tr>
                <tr>
                  <td className="">Trigeminal lemniscus</td>
                  <td className="">Spinal trigeminal nucleus, Principal sensory nucleus, Mesencephalic nucleus</td>
                  <td className="">Thalamus (VPM)</td>
                  <td className="">Somatosensory from head (touch, pressure, pain, thermal, kinesthesia)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-green-700">CN Exit Sites</h3>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <ul className="space-y-2">
                <li><strong>CN V:</strong> Rostral pons (anterolateral aspect)</li>
                <li><strong>CN VI:</strong> Bulbopontine sulcus</li>
                <li><strong>CN VII & VIII:</strong> Cerebello-medullary angle (pontomedullary angle)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-700">Two Decussations in Pons</h3>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Pontocerebellar tract fibers</strong> running towards middle cerebellar peduncle</li>
                <li><strong>Corpus trapezoideum:</strong> Auditory system fibers</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-orange-700">Key Anatomical Features</h3>
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
              <ul className="space-y-1">
                <li><strong>Length:</strong> 2.5 cm long</li>
                <li><strong>Ventral portion:</strong> Basis of pons</li>
                <li><strong>Dorsal portion:</strong> Tegmentum of pons</li>
                <li><strong>Name origin:</strong> Appearance of bridge connecting right & left cerebellar hemispheres</li>
                <li><strong>Boundary:</strong> Bulbopontine sulcus (between medulla & pons)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'midbrain',
      title: 'Midbrain (Mesencephalon)',
      description: 'Most rostral brainstem - CN III-IV nuclei, 1.5cm long, smallest part',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-700">Proper Nuclei of Midbrain</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">Nucleus</th>
                  <th className="">Localization</th>
                  <th className="">Function</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">Periaqueductal grey matter</td>
                  <td className="">Tegmentum (around cerebral aqueduct)</td>
                  <td className="">Participates in pain modulation - receives fibers from reticular formation, hypothalamus, limbic system</td>
                </tr>
                <tr className="">
                  <td className="">Substantia nigra</td>
                  <td className="">Tegmentum (ventrally) - has compact & reticular parts</td>
                  <td className="">Belongs to basal ganglia-mediated motor system (nigrostriatal tract to striatum)</td>
                </tr>
                <tr>
                  <td className="">Red nucleus</td>
                  <td className="">Tegmentum (main nucleus)</td>
                  <td className="">Belongs to cerebellar motor regulatory system</td>
                </tr>
                <tr className="">
                  <td className="">Inferior colliculus</td>
                  <td className="">Tectum (dorsally)</td>
                  <td className="">Belongs to auditory system - lateral lemniscus terminates here; synaptic relay station</td>
                </tr>
                <tr>
                  <td className="">Superior colliculus</td>
                  <td className="">Tectum (dorsally)</td>
                  <td className="">Belongs to visual system - afferents from retina & visual neocortex; relay for eye & pupillary reflexes</td>
                </tr>
                <tr className="">
                  <td className="">Interstitial nucleus of Cajal</td>
                  <td className="">Tegmentum</td>
                  <td className="">Eye movement control</td>
                </tr>
                <tr>
                  <td className="">Pretectal nucleus</td>
                  <td className="">Tegmentum (dorsal)</td>
                  <td className="">Pupillary light reflex</td>
                </tr>
                <tr className="">
                  <td className="">Interpeduncular nucleus</td>
                  <td className="">Ventral margin of tegmentum</td>
                  <td className="">Rich in peptidergic neurons</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-700">Cranial Nerve Nuclei in Midbrain</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">CN</th>
                  <th className="">Motor Nuclei</th>
                  <th className="">PSY Nuclei</th>
                  <th className="">Sensory Nuclei</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">CN III</td>
                  <td className="">Oculomotor nucleus (at level of superior colliculus)</td>
                  <td className="">Edinger-Westphal nucleus (preganglionic fibers for smooth muscles of eye)</td>
                  <td className="">—</td>
                </tr>
                <tr className="">
                  <td className="">CN IV</td>
                  <td className="">Trochlear nucleus (at level of inferior colliculus)</td>
                  <td className="">—</td>
                  <td className="">—</td>
                </tr>
                <tr>
                  <td className="">CN V</td>
                  <td className="">—</td>
                  <td className="">—</td>
                  <td className="">Mesencephalic nucleus</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-700">White Matter Tracts of Midbrain</h3>
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="">Tract</th>
                  <th className="">Originate From</th>
                  <th className="">Terminate In</th>
                  <th className="">Function</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">Medial lemniscus</td>
                  <td className="">Dorsal column nuclei (medulla)</td>
                  <td className="">Thalamus (VPL)</td>
                  <td className="">Somatosensory (body)</td>
                </tr>
                <tr className="">
                  <td className="">Trigeminal lemniscus</td>
                  <td className="">Spinal trigeminal nucleus, Principal sensory nucleus of V, Mesencephalic nucleus of V</td>
                  <td className="">Thalamus (VPM)</td>
                  <td className="">Somatosensory (head)</td>
                </tr>
                <tr>
                  <td className="">Spinothalamic tract</td>
                  <td className="">Spinal cord</td>
                  <td className="">Thalamus (VPL)</td>
                  <td className="">Somatosensory (body)</td>
                </tr>
                <tr className="">
                  <td className="">Fibers of superior cerebellar peduncle</td>
                  <td className="">Deep cerebellar nuclei</td>
                  <td className="">Red nucleus, Thalamus</td>
                  <td className="">Cerebellar motor regulation (decussates in midbrain)</td>
                </tr>
                <tr>
                  <td className="">Medial longitudinal fasciculus</td>
                  <td className="">Vestibular nuclei</td>
                  <td className="">Cranial nerve nuclei III, IV, VI; Cervical spinal cord motor cells</td>
                  <td className="">Motor regulation of eye movements & head position</td>
                </tr>
                <tr className="">
                  <td className="">Dorsal longitudinal fasciculus</td>
                  <td className="">Hypothalamus</td>
                  <td className="">Dorsal vagal nucleus</td>
                  <td className="">Autonomic regulation</td>
                </tr>
                <tr>
                  <td className="">Central tegmental tract</td>
                  <td className="">Red nucleus</td>
                  <td className="">Inferior olivary complex</td>
                  <td className="">Cerebellar motor regulation (rubro-olivary tract)</td>
                </tr>
                <tr className="">
                  <td className="">Rubrospinal tract</td>
                  <td className="">Red nucleus</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Motor regulation (crosses immediately in midbrain)</td>
                </tr>
                <tr>
                  <td className="">Tectospinal tract</td>
                  <td className="">Superior colliculus</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Motor regulation</td>
                </tr>
                <tr className="">
                  <td className="">Corticobulbar tract</td>
                  <td className="">Motor neocortex</td>
                  <td className="">Motor cranial nerve nuclei</td>
                  <td className="">Motor regulation of voluntary movements</td>
                </tr>
                <tr>
                  <td className="">Corticospinal tract</td>
                  <td className="">Motor neocortex</td>
                  <td className="">Spinal cord, ventral horn</td>
                  <td className="">Motor regulation of voluntary movements (passes through crus cerebri)</td>
                </tr>
                <tr className="">
                  <td className="">Frontopontine tract</td>
                  <td className="">Frontal neocortex</td>
                  <td className="">Nuclei pontis</td>
                  <td className="">Cerebellar motor regulation</td>
                </tr>
                <tr>
                  <td className="">Temporopontine tract</td>
                  <td className="">Temporal neocortex</td>
                  <td className="">Nuclei pontis</td>
                  <td className="">Cerebellar motor regulation</td>
                </tr>
                <tr className="">
                  <td className="">Occipitopontine tract</td>
                  <td className="">Occipital neocortex</td>
                  <td className="">Nuclei pontis</td>
                  <td className="">Cerebellar motor regulation</td>
                </tr>
                <tr>
                  <td className="">Parietopontine tract</td>
                  <td className="">Parietal neocortex</td>
                  <td className="">Nuclei pontis</td>
                  <td className="">Cerebellar motor regulation</td>
                </tr>
                <tr className="">
                  <td className="">Lateral lemniscus</td>
                  <td className="">Lower brainstem auditory nuclei</td>
                  <td className="">Inferior colliculus</td>
                  <td className="">Auditory pathway</td>
                </tr>
                <tr>
                  <td className="">Brachium of inferior colliculus</td>
                  <td className="">Inferior colliculus</td>
                  <td className="">Medial geniculate body (thalamus)</td>
                  <td className="">Auditory pathway</td>
                </tr>
                <tr className="">
                  <td className="">Brachium of superior colliculus</td>
                  <td className="">Superior colliculus</td>
                  <td className="">Lateral geniculate body (thalamus) & neocortex</td>
                  <td className="">Visual pathway</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-700">CN Exit Sites</h3>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
              <ul className="space-y-2">
                <li><strong>CN III:</strong> At level of superior colliculus, exits through interpeduncular fossa (ventrally)</li>
                <li><strong>CN IV:</strong> At level of inferior colliculus, exits on dorsal surface (only CN to exit dorsally)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-red-700">Key Anatomical Features</h3>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <ul className="space-y-2">
                <li><strong>Length:</strong> Smallest part of brainstem (1.5 cm)</li>
                <li><strong>Three parts:</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>• <strong>Tectum:</strong> Quadrigeminal plate (superior & inferior colliculi)</li>
                    <li>• <strong>Tegmentum:</strong> Contains CN nuclei, substantia nigra, red nucleus</li>
                    <li>• <strong>Base:</strong> Cerebral peduncles (crus cerebri) - descending cortical tracts</li>
                  </ul>
                </li>
                <li><strong>Organization:</strong> Tegmentum & base make up cerebral peduncle; Tectum & cerebral peduncles surround cerebral aqueduct</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-orange-700">Superior Cerebellar Peduncle Decussation</h3>
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
              <p>Fibers from deep cerebellar nuclei cross in the midbrain tegmentum and project to the contralateral red nucleus and thalamus (VL). This is the main cerebellar output pathway.</p>
            </div>
          </div>
        </div>
      )
    }
  ]
};

export default brainstemData;
