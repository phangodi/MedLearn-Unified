import type { ExamData, ChapterData } from '@/types/sociology';

export const exam2Chapters = [
  {
    num: 8,
    icon: '♿',
    title: 'Disability & Inclusion',
    description: 'Disability politics, integration vs segregation, and the social model of disability in healthcare.',
  },
  {
    num: 9,
    icon: '🏷️',
    title: 'Social Stigma & Stereotypes',
    description: 'Understanding prejudice, labeling theory, deviance, and stigmatized health conditions.',
  },
  {
    num: 10,
    icon: '👨‍👩‍👧‍👦',
    title: 'Family & Intimate Violence',
    description: 'Family structures, kinship, marriage types, and addressing intimate violence.',
  },
  {
    num: 11,
    icon: '🎓',
    title: 'Medical Socialisation',
    description: 'Professional identity formation, gender socialisation, and the medical education process.',
  },
  {
    num: 12,
    icon: '👨‍⚕️',
    title: 'Doctors as Professionals',
    description: 'Professional dominance, traits of professions, and feminisation in medicine.',
  },
  {
    num: 13,
    icon: '🤝',
    title: 'Doctor-Patient Relationship',
    description: 'Role theory, physician-patient models, communication barriers, and compliance.',
  },
  {
    num: 14,
    icon: '❤️‍🩹',
    title: 'Health & Medicalisation',
    description: 'Concepts of health, illness behavior, sociocultural definitions, and medicalisation.',
  },
];

// Chapter 8: Disability & Inclusion
export const chapter8: ChapterData = {
  id: 8,
  title: 'Disability & Inclusion',
  subtitle: 'Understanding disability politics, integration and inclusion',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of disability politics characterises your country?',
    },
    {
      type: 'paragraph',
      text: `The United States treats disability as a civil‑rights issue. The Americans with Disabilities Act (ADA) prohibits discrimination in employment, education, public services and other areas. Title II requires state and local governments to provide services in the most integrated settings possible rather than segregated environments, and the ADA's employment provisions mandate reasonable accommodations. Other laws—such as the Individuals with Disabilities Education Act—guarantee children with disabilities the right to a free appropriate education in the least restrictive environment. Income‑support programmes like Social Security Disability Insurance and Supplemental Security Income offer financial assistance. Overall, U.S. policy emphasises integration and inclusion while recognising the need for targeted support.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What are the advantages and disadvantages of integration and segregation?',
    },
    {
      type: 'paragraph',
      text: '<strong>Integration</strong> places people with disabilities in mainstream schools, workplaces and communities. Advantages include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Equal access and participation:</strong> Disabled people learn, work and live alongside non‑disabled peers, which challenges stereotypes and promotes equality.',
        '<strong>Broader social networks:</strong> Integrated settings expand social networks and improve opportunities for employment, education and civic engagement.',
        '<strong>Reduced stigma:</strong> Visibility in mainstream environments helps dispel myths about disability.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Integration also has disadvantages if institutions do not adapt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Expectation of adaptation:</strong> Disabled people may be expected to adjust to existing norms without accommodations, leaving them unsupported.',
        '<strong>Risk of tokenism:</strong> Without systemic changes, integration can be superficial, leading to isolation within the group.',
      ],
    },
    {
      type: 'paragraph',
      text: '<strong>Segregation</strong> refers to educating or housing disabled people in separate settings such as special schools or sheltered workshops. While separate environments may offer specialised support and safety for some individuals, segregation has significant drawbacks:',
    },
    {
      type: 'list',
      items: [
        '<strong>Social isolation and stigma:</strong> Separate settings cut people off from mainstream society and reinforce prejudice.',
        '<strong>Limited opportunities:</strong> Segregated programmes may not provide pathways to higher education or competitive employment, leaving participants with fewer options.',
        '<strong>Civil‑rights concerns:</strong> Unnecessary segregation can violate anti‑discrimination laws and hinder full participation in society.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The most effective approach combines the supports found in specialised programmes with the participation and rights‑based focus of integration—often referred to as <strong>inclusion</strong>.',
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Do you have your own experience with disabled people?',
    },
    {
      type: 'paragraph',
      text: `While this page reflects a general overview rather than one person's biography, many people have close connections with disabled friends or family members. For example, a classmate who uses a wheelchair can attend school alongside peers thanks to accessible ramps and assistive technology, or a colleague with a visual impairment may use screen‑reader software at work. These everyday interactions show that when physical and attitudinal barriers are removed, disabled people can fully participate in school, work and community life.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What does disability mean?',
    },
    {
      type: 'paragraph',
      text: `The World Health Organization describes disability as an umbrella term covering <strong>impairments</strong>, <strong>activity limitations</strong> and <strong>participation restrictions</strong>. An impairment is a problem in body function or structure (for example, hearing or vision loss); an activity limitation is difficulty executing a task; and a participation restriction is a problem engaging in life situations. Disability results from the interaction between a person's health condition and the social and physical environment. According to WHO, about 1.3&nbsp;billion people—roughly 16&nbsp;% of the global population—experience significant disability. Barriers such as negative attitudes, inaccessible transportation and limited social support hinder full participation, and addressing these barriers is essential for achieving health equity.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Compare the individual and social model of disability.',
    },
    {
      type: 'paragraph',
      text: `The <strong>individual (medical) model</strong> views disability as a personal problem caused by illness, injury or congenital conditions. Management focuses on curing or rehabilitating the individual. People with disabilities are often isolated, rely heavily on family care and are subject to professional control over their lives. The onus is on the person to adapt to their impairment.`,
    },
    {
      type: 'paragraph',
      text: `By contrast, the <strong>social model</strong> argues that disability is created by social and environmental barriers rather than by impairments themselves. It calls for removing physical, institutional and attitudinal obstacles so that people with disabilities can participate fully in society. According to this model, equal access is a human right, and society as a whole shares responsibility for accommodating diverse needs. Disabled people organise for rights, demand self‑determination and seek systemic change.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What do inclusion, exclusion, integration, and segregation mean?',
    },
    {
      type: 'paragraph',
      text: `<strong>Exclusion</strong> occurs when people with disabilities are denied access to education, employment or services and remain outside mainstream institutions. <strong>Segregation</strong> educates or houses disabled people in separate settings designed for particular impairments, isolating them from non‑disabled peers. <strong>Integration</strong> places disabled people in mainstream institutions but often expects them to adjust to existing norms without broader changes. <strong>Inclusion</strong> goes beyond integration: it involves reforming curriculum, policies, structures and attitudes so that everyone learns, works and participates together. Inclusive environments remove barriers, recognise diversity as normal and provide equitable opportunities for all.`,
    },
  ],
};

export const exam2Data: ExamData = {
  examNumber: 2,
  examTitle: 'Chapters 8-14',
  examDescription: 'Advanced medical sociology covering disability, stigma, family, socialisation, professionalism, doctor-patient relationships, and health concepts.',
  chapters: exam2Chapters,
  chapterContent: {
    8: chapter8,
    // Chapters 9-14 will be added later
  },
};
