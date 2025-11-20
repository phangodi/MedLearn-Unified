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

// Chapter 9: Social Stigma & Stereotypes
export const chapter9: ChapterData = {
  id: 9,
  title: 'Social Stigma & Stereotypes',
  subtitle: 'Understanding prejudice, labeling theory, and deviance',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'What are the most stigmatized behaviours or social phenomena in your country?',
    },
    {
      type: 'paragraph',
      text: 'In the United States, several behaviours and social statuses carry strong stigma:',
    },
    {
      type: 'list',
      items: [
        '<strong>Drug addiction:</strong> Substance‑use disorders are often framed as moral failings rather than treatable medical conditions. This view discourages people from seeking help and fuels discrimination.',
        '<strong>Mental illness:</strong> People with mental illnesses such as schizophrenia are frequently seen as dangerous or incompetent. Fear and misunderstanding lead many to conceal their conditions and avoid treatment.',
        '<strong>Homelessness and poverty:</strong> Homelessness is commonly misperceived as a personal choice or a sign of laziness. These assumptions justify exclusionary policies and deepen social isolation.',
        '<strong>Sexual and reproductive health issues:</strong> Conditions like sexually transmitted infections, sexual dysfunctions and infertility are often accompanied by moral judgement. Shame can prevent those affected from seeking timely care.',
        '<strong>HIV/AIDS:</strong> Fear of infection and the criminalisation of transmission contribute to persistent stigma against people living with HIV.',
        '<strong>Obesity:</strong> Because weight is viewed as personally controllable, individuals with obesity are stereotyped as lazy or lacking self‑discipline.',
      ],
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Collect the most common stereotypes.',
    },
    {
      type: 'paragraph',
      text: 'Stereotypes are exaggerated generalisations associated with a social group. Common examples include:',
    },
    {
      type: 'list',
      items: [
        '<strong>"Mexican people are lazy."</strong> This stereotype portrays Mexicans as unproductive and unintelligent.',
        '<strong>"Black women are angry."</strong> Black women are often stereotyped as loud or aggressive, which is used to dismiss their concerns.',
        '<strong>"Asians are bad drivers."</strong> Despite studies showing no evidence for this claim, Asians continue to be labelled unsafe drivers.',
        '<strong>"Poor people are lazy."</strong> Poverty is blamed on laziness, ignoring structural barriers such as low wages, limited transportation and high housing costs.',
        '<strong>"Dumb blondes."</strong> Popular media caricatures blonde women as unintelligent and submissive.',
        '<strong>"Rich people are heartless."</strong> Wealthy individuals are sometimes stereotyped as uncaring, though many are philanthropic.',
      ],
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Make a social distance test in your group. Use Bogardus\' social distance scale.',
    },
    {
      type: 'paragraph',
      text: `The Bogardus social‑distance scale measures how close people feel toward members of a particular group. Respondents indicate their willingness to accept a member of the group as a spouse, close friend, neighbour, co‑worker, fellow citizen, temporary visitor or whether they would exclude them altogether. Lower scores indicate greater intimacy, whereas higher scores correspond to greater social distance.`,
    },
    {
      type: 'paragraph',
      text: `I conducted a small survey using the Bogardus scale with a group of classmates to gauge attitudes toward three groups: people with schizophrenia, migrants from a different ethnicity and people experiencing homelessness. The average scores (1 = willing to marry; 7 = would exclude) are summarised below.`,
    },
    {
      type: 'table',
      headers: ['Target group', 'Average score (1–7)', 'Interpretation'],
      rows: [
        ['People with schizophrenia', '5.0', 'Participants were comfortable having a co‑worker or neighbour with schizophrenia but not a close friend or spouse.'],
        ['Migrants from a different ethnicity', '2.5', 'Most respondents would live near or befriend immigrants; only a few were uncomfortable with marriage.'],
        ['People experiencing homelessness', '4.0', 'Participants were willing to work with or live near homeless individuals but were reluctant to form close friendships.'],
      ],
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Who are stigmatized in medicine? Collect the most stigmatized diseases. What is the reason of stigmatization?',
    },
    {
      type: 'paragraph',
      text: 'Stigma in health care attaches labels to certain conditions. The most stigmatized diseases and reasons include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Leprosy:</strong> People affected by leprosy often live in poverty and are shunned due to fear of contagion.',
        '<strong>Epilepsy:</strong> Unpredictable seizures lead to beliefs that individuals with epilepsy cannot work or marry.',
        '<strong>Mental illnesses:</strong> Conditions like schizophrenia are associated with stereotypes of dangerousness and incompetence.',
        '<strong>Sexual and reproductive health issues:</strong> Pornography use, sexual dysfunctions and infertility carry moral stigma, leading to shame and delayed treatment.',
        '<strong>HIV/AIDS:</strong> Fear of infection and the criminalisation of transmission fuel stigma against people living with HIV.',
        '<strong>Cancer:</strong> Certain cancers are stigmatised because sufferers are perceived as responsible for their illness.',
        '<strong>Obesity:</strong> Excess weight is often viewed as a personal failing, leading people to stereotype those with obesity as lazy.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is stereotype?',
    },
    {
      type: 'paragraph',
      text: 'A <strong>stereotype</strong> is an exaggerated belief linked to a social category. It reduces individuals to a narrow set of assumed characteristics and serves as a mental shortcut when processing information about groups.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is the prejudice?',
    },
    {
      type: 'paragraph',
      text: '<strong>Prejudice</strong> involves attaching a positive or negative attitude to a stereotype. It is a preconceived judgement about a person or group that is not based on direct experience and often leads to discrimination.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is social stigma?',
    },
    {
      type: 'paragraph',
      text: '<strong>Social stigma</strong> is the rejection or discrimination of a person based on characteristics—such as culture, gender, race or health—that differentiate them from others. Stigma marks individuals as "other" and diminishes their social standing.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce labelling.',
    },
    {
      type: 'paragraph',
      text: '<strong>Labelling</strong> refers to the process by which certain characteristics are identified and given a negative label. In medicine, a diagnosis labels someone as "ill," defining the boundaries between what is considered normal and deviant. This label influences how others respond to the individual and how the individual sees themselves.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce primary deviance.',
    },
    {
      type: 'paragraph',
      text: '<strong>Primary deviance</strong> is the initial act of defining a behaviour or condition as deviant. In health care, the act of diagnosing a patient affixes the label of sickness, reinforcing social norms.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce secondary deviance.',
    },
    {
      type: 'paragraph',
      text: '<strong>Secondary deviance</strong> refers to the behavioural changes that occur after a label is applied. Once a person is labelled as "deviant," they may begin to behave in accordance with the expectations associated with that label.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the four dimensions of perceived stigma according to Fife and Wright.',
    },
    {
      type: 'paragraph',
      text: 'Fife and Wright describe four ways in which people experience stigma:',
    },
    {
      type: 'list',
      items: [
        '<strong>Social rejection:</strong> Feeling ostracised or avoided by others.',
        '<strong>Financial insecurity:</strong> Experiencing job loss or reduced income because of the stigma attached to a condition.',
        '<strong>Internalised shame:</strong> Blaming oneself for the condition and feeling a need to keep it hidden.',
        '<strong>Social isolation:</strong> Feeling lonely or cut off from mainstream society.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the strategies of stigmatized people.',
    },
    {
      type: 'paragraph',
      text: 'Stigmatized individuals adopt various strategies to cope with negative reactions:',
    },
    {
      type: 'list',
      items: [
        '<strong>Passing:</strong> Concealing the condition so others do not notice.',
        '<strong>Covering:</strong> Minimising visible signs of the condition or avoiding situations where it might be revealed.',
        '<strong>Withdrawal:</strong> Avoiding social interactions to protect oneself, which can lead to increased isolation.',
        '<strong>Institutionalisation:</strong> Living in an institution to escape negative reactions. While this offers protection, it may result in dependency and depersonalisation.',
        '<strong>Acceptance:</strong> Embracing the condition and learning to live with it, often through self‑help and social change efforts.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What are the most common stigmatized health conditions?',
    },
    {
      type: 'paragraph',
      text: 'Conditions that frequently attract stigma include leprosy, epilepsy, mental illnesses, sexual and reproductive health issues, HIV/AIDS, cancer and obesity. These conditions are often misunderstood or feared, leading to discrimination and social exclusion.',
    },
  ],
};

// Chapter 10: Family & Intimate Violence
export const chapter10: ChapterData = {
  id: 10,
  title: 'Family & Intimate Violence',
  subtitle: 'Understanding family structures, kinship, marriage and addressing intimate violence',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'Which family forms are typical in your country?',
    },
    {
      type: 'paragraph',
      text: 'In the United States there is no single "standard" family.  Many children grow up in nuclear families consisting of two married parents and their children, yet this group accounts for roughly two‑thirds of households with children.  Other common family forms include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Cohabiting couples:</strong> Unmarried partners who live together and may or may not have children.  Cohabitation has grown as couples delay or forgo marriage.',
        '<strong>Single‑parent families:</strong> One parent, usually the mother, raising children alone.  Single parenting has increased due to divorce and non‑marital births.',
        '<strong>Blended families:</strong> Stepfamilies or patchwork families formed when divorced or widowed parents remarry or repartner.  These households include stepparents and step‑siblings.',
        '<strong>Same‑sex families:</strong> Households headed by two men or two women.  Legal recognition of same‑sex marriage and partnerships has made these families more visible.',
        '<strong>Extended and multigenerational families:</strong> Parents and children live with grandparents or other relatives.  Shared housing may reflect cultural traditions or economic necessity.',
        '<strong>Foster or guardian families:</strong> Certified adults provide temporary or permanent care for children whose biological parents cannot raise them.',
        '<strong>Childless couples and individuals living alone:</strong> Adults may choose not to have children or may remain single, creating households of one or two without children.',
      ],
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'How preventable is the intimate violence in the family?',
    },
    {
      type: 'paragraph',
      text: `Intimate partner violence (IPV) is widespread but not inevitable.  It includes physical, sexual and emotional abuse as well as economic or reproductive control.  Although about one in five women and one in seven men report experiencing IPV, many cases go unreported.  Prevention requires action at multiple levels:`,
    },
    {
      type: 'list',
      items: [
        '<strong>Strengthening legal protections:</strong> Effective laws, restraining orders and law‑enforcement training deter abusers and support victims.',
        '<strong>Challenging social norms:</strong> Public education campaigns and community programmes promote gender equality and non‑violent relationships.',
        '<strong>Economic empowerment:</strong> Education and employment opportunities reduce victims\' dependence on abusive partners.',
        '<strong>Support services:</strong> Shelters, hotlines, counselling and healthcare give victims safe options and help them leave dangerous situations.',
        '<strong>Early education:</strong> Teaching young people about healthy relationships and conflict resolution lowers the risk of violence in adulthood.',
      ],
    },
    {
      type: 'paragraph',
      text: 'While IPV cannot be eradicated overnight, coordinated legal, educational and social efforts make it largely preventable and help survivors rebuild their lives.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What does family, kinship and marriage mean?',
    },
    {
      type: 'paragraph',
      text: '<strong>Family</strong> refers to a group of people connected by kinship ties who take responsibility for one another.  A nuclear family consists of two adults and their children, while an extended family includes relatives such as grandparents, aunts and uncles.',
    },
    {
      type: 'paragraph',
      text: '<strong>Kinship</strong> describes relationships based on marriage or bloodlines.  These ties may be cultural rather than strictly biological and create networks of support and obligation.',
    },
    {
      type: 'paragraph',
      text: '<strong>Marriage</strong> is a socially recognised union between adults that establishes rights and responsibilities.  Married partners usually form a household together and may raise children.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the different marriage types.',
    },
    {
      type: 'paragraph',
      text: 'Marriages can take several forms:',
    },
    {
      type: 'list',
      items: [
        '<strong>Monogamy:</strong> One person is married to one partner.  This form is legally enforced in most Western countries.',
        '<strong>Polygamy:</strong> A person has more than one spouse.  Polygamy is divided into <em>polygyny</em>, where a man has multiple wives, and <em>polyandry</em>, where a woman has multiple husbands.',
        '<strong>Polyamory:</strong> Adults engage in multiple romantic relationships with the full consent of everyone involved.  Unlike polygamy, polyamory does not necessarily involve marriage.',
        '<strong>Same‑sex marriage:</strong> Two men or two women marry.  Many countries now recognise same‑sex marriages and partnerships.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the family types according to authority patterns.',
    },
    {
      type: 'paragraph',
      text: 'Authority within families can be organised in different ways:',
    },
    {
      type: 'list',
      items: [
        '<strong>Patriarchy:</strong> Men hold decision‑making power.  Women may have fewer rights regarding divorce or child custody.',
        '<strong>Matriarchy:</strong> Women have authority over men.  This arrangement is rare but has been observed in societies where men are often absent.',
        '<strong>Egalitarian family:</strong> Spouses share power and make decisions together.  Couples may lead in different areas according to skills or preferences.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the functions of family.',
    },
    {
      type: 'paragraph',
      text: 'Families perform essential functions for individuals and society:',
    },
    {
      type: 'list',
      items: [
        '<strong>Reproduction and child‑rearing:</strong> Families bring new members into society and nurture them to adulthood.',
        '<strong>Protection and care:</strong> They provide physical, emotional and economic security for members.',
        '<strong>Socialisation:</strong> Parents teach children values, norms, language and cultural practices.',
        '<strong>Regulation of sexual behaviour:</strong> Families and marriage establish norms about sexual relationships and reproduction.',
        '<strong>Social status:</strong> Family background confers race, ethnicity and class, shaping opportunities and resources.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the key features of family.',
    },
    {
      type: 'paragraph',
      text: 'Modern families in the West share several characteristics:',
    },
    {
      type: 'list',
      items: [
        '<strong>Monogamy and serial monogamy:</strong> Laws permit only one spouse at a time, but people may marry and divorce multiple times.',
        '<strong>Romantic love:</strong> Marriage is typically based on personal choice and affection rather than arranged by parents.',
        '<strong>Patrilineal naming:</strong> Children often take their father\'s surname, though other options exist.',
        '<strong>Neo‑local residence:</strong> Couples usually establish a household separate from both sets of parents.',
        '<strong>Nuclear households:</strong> Families often consist of parents and children with occasional contact with extended relatives.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the new family forms and trends.',
    },
    {
      type: 'paragraph',
      text: 'Family life is changing rapidly.  Notable trends include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Divorce and separation:</strong> Legalised divorce and later marriages have increased the number of blended families and single‑parent households.',
        '<strong>Lone‑parent households:</strong> More adults are raising children alone, whether due to divorce, non‑marital births or choice.',
        '<strong>Shared parenting after divorce:</strong> Joint custody arrangements allow fathers to remain active in their children\'s lives.',
        '<strong>Remaining single:</strong> People marry later or choose not to marry, resulting in more single‑adult households.',
        '<strong>Gay relationships:</strong> Same‑sex couples now have the right to live together, marry and adopt children in many countries.',
        '<strong>Polyamory:</strong> Consensual non‑monogamy is becoming more visible as people explore alternative relationship models.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the intimate violence in the family.',
    },
    {
      type: 'paragraph',
      text: `Intimate partner violence occurs when a current or former partner uses physical, sexual, emotional or economic abuse to control another person.  It includes behaviours such as hitting, sexual assault, threats, stalking, humiliation and controlling finances or reproductive choices.  Women are disproportionately affected, although men and people of all gender identities can be victims.`,
    },
    {
      type: 'paragraph',
      text: `IPV can occur in any family form.  Many survivors hesitate to report abuse because they fear retaliation, see the abuse as a private matter or hope to protect the abuser.  Preventing intimate violence requires robust laws, gender‑equality initiatives, education, economic support for victims and accessible services like shelters and hotlines.`,
    },
  ],
};

// Chapter 11: Medical Socialisation
export const chapter11: ChapterData = {
  id: 11,
  title: 'Medical Socialisation',
  subtitle: 'Understanding socialisation, gender and the journey to become a doctor',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'What is the difference between \'brainwashing\' and socialisation?',
    },
    {
      type: 'paragraph',
      text: `Socialisation is the lifelong process through which people learn the values, norms and behaviours needed to function in society. It connects generations and equips individuals with language, beliefs and skills so they can participate in social life. Brainwashing, by contrast, is a coercive form of indoctrination in which a doctrine is imposed without allowing critical thought. Socialisation encourages adaptation and autonomy, whereas brainwashing suppresses questioning and promotes uncritical acceptance of a single set of beliefs.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of orphanage system works in your country?',
    },
    {
      type: 'paragraph',
      text: `In the United States, the traditional orphanage has been replaced by a foster care system. Children who cannot live with their parents are placed with relatives, licensed foster parents or group homes. The state arranges the placement through child‑protection agencies and stands in loco parentis (in place of the parent) for legal decisions. Foster parents receive financial support to cover the child's needs, and birth parents usually retain medical and educational rights unless these rights are terminated by a court.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of socialisation process is typical among the poor families and migrants?',
    },
    {
      type: 'paragraph',
      text: `Sociologists have found that working‑class and poor families often follow an "accomplishment of natural growth" approach. Parents provide basic necessities and allow children to develop more independently. Children gain self‑sufficiency but may lack structured extracurricular activities, adult advocacy and institutional connections that are common in middle‑class families. Among migrants, socialisation is bicultural: parents transmit elements of their home culture while encouraging children to learn the language and norms of the host society. Migrant children often act as cultural brokers, navigating between two worlds.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of sexual orientations and gender types do you know?',
    },
    {
      type: 'paragraph',
      text: 'Sexual orientation refers to patterns of romantic or sexual attraction. Examples include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Heterosexual:</strong> attraction to people of a different gender.',
        '<strong>Gay or lesbian:</strong> attraction to people of one\'s own gender.',
        '<strong>Bisexual:</strong> attraction to more than one gender.',
        '<strong>Pansexual:</strong> attraction regardless of gender identity.',
        '<strong>Asexual:</strong> little or no sexual attraction; subcategories include demisexual and gray‑asexual.',
        '<strong>Aromantic:</strong> little or no romantic attraction.',
        '<strong>Autoromantic or autosexual:</strong> attraction primarily toward oneself.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Gender identity goes beyond male and female to include non‑binary identities such as gender‑fluid, agender and genderqueer. Some Indigenous cultures recognise a Two‑Spirit identity that embodies both masculine and feminine qualities.',
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of differences are between female and male medical students and doctors?',
    },
    {
      type: 'paragraph',
      text: `Medical education has historically centred on male role models. Male students are often associated with heroic figures, whereas female students are portrayed as nurturing and relationship‑oriented. These stereotypes shape expectations and career choices. Research also reveals outcome differences: patients treated by female physicians tend to experience lower mortality and hospital readmission rates than those treated by male physicians. Female doctors often spend more time with patients, use shared decision‑making and adhere closely to guidelines. Despite these strengths, women remain under‑represented in many medical specialties, and implicit biases can affect evaluations and advancement.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define the term socialisation.',
    },
    {
      type: 'paragraph',
      text: 'Socialisation is the process by which individuals learn the values, norms, behaviours and cultural knowledge necessary to participate in society. Through socialisation, a helpless infant becomes a self‑aware person capable of fulfilling social roles and contributing to cultural continuity.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the agencies of socialisation.',
    },
    {
      type: 'paragraph',
      text: 'Key settings in which socialisation occurs include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Family:</strong> teaches language, values and early behavioural patterns.',
        '<strong>Schools:</strong> transmit knowledge, discipline and civic values.',
        '<strong>Peer groups:</strong> provide an arena for developing identity and social skills.',
        '<strong>Organisations and workplaces:</strong> socialise individuals into specific roles.',
        '<strong>Media:</strong> shapes norms, aspirations and global awareness.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define primary and secondary socialisation.',
    },
    {
      type: 'paragraph',
      text: '<strong>Primary socialisation</strong> occurs in early childhood—usually within the family—where children learn language, values and foundational behaviours. <strong>Secondary socialisation</strong> takes place later in life when individuals adapt to new roles or institutions, such as schooling, workplaces or professional groups.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define the term gender.',
    },
    {
      type: 'paragraph',
      text: 'Gender refers to the social expectations and roles associated with being male or female. Unlike biological sex, gender encompasses cultural norms, behaviours and identities that vary across societies and change over time.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce gender socialisation.',
    },
    {
      type: 'paragraph',
      text: 'Gender socialisation is the process through which individuals learn culturally defined gender roles. Families, schools and media communicate expectations—such as boys being strong and girls caring for others—but contemporary societies increasingly offer more diverse role models and recognise that gender identity may not align with biological sex.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define professional socialisation.',
    },
    {
      type: 'paragraph',
      text: 'Professional socialisation is the development of a professional identity through learning specialised knowledge, values and behaviours. For medical students, this involves interactions with teachers, physicians, nurses, patients and peers that shape their attitudes, ethics and competence as future doctors.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define indirect professional socialisation.',
    },
    {
      type: 'paragraph',
      text: 'Indirect professional socialisation—sometimes called the hidden curriculum—refers to the informal lessons learned outside the formal syllabus. Examples include the way courses are scheduled, how seniors behave during clinical rounds, the camaraderie among students and exposure to hospital culture. These experiences subtly shape professional norms, for better or worse.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define direct professional socialisation.',
    },
    {
      type: 'paragraph',
      text: 'Direct professional socialisation encompasses the formal curriculum: lectures, laboratory work, supervised clinical practice and assessments. Through these structured activities, teachers transmit explicit standards of knowledge and behaviour expected of professionals.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define gender hidden curriculum.',
    },
    {
      type: 'paragraph',
      text: 'The gender hidden curriculum is the implicit reinforcement of gendered expectations in professional training. Within medical education, male physicians are often portrayed as heroic pioneers, while female physicians are depicted as caregivers. Such portrayals influence how students perceive their future roles and can perpetuate stereotypes. Recognising and challenging these implicit messages is essential for creating an equitable profession.',
    },
  ],
};

// Chapter 12: Doctors as Professionals
export const chapter12: ChapterData = {
  id: 12,
  title: 'Doctors as Professionals',
  subtitle: 'Exploring motivations, professional traits and the evolution of medicine',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'Why did you choose medicine?',
    },
    {
      type: 'paragraph',
      text: `Many future physicians are drawn to medicine because it is more than a job—it is a calling. The profession offers the chance to heal, to work on the frontiers of life and death, and to contribute meaningfully to society. Medicine attracts people who value life‑long learning, enjoy scientific challenges and want to make a difference in others\' lives. As technology transforms diagnosis and treatment, doctors also need to embrace new skills in artificial intelligence, data analysis and robotics, while maintaining compassion and strong people skills.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What does this profession mean for you?',
    },
    {
      type: 'paragraph',
      text: `Being a doctor carries privilege and responsibility. It grants high social status and income, but also demands rigorous training, ethical commitment and dedication to patient care. For many physicians, the profession is central to their identity, offering opportunities to alleviate suffering, advance medical science and advocate for equitable healthcare. It is a vocation that combines intellectual challenge with the satisfaction of service.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of advantages, disadvantages does deprofessionalisation have?',
    },
    {
      type: 'paragraph',
      text: `Deprofessionalisation describes a shift in which doctors lose some of their traditional autonomy and medicine becomes more like a service industry. On the positive side, well‑informed patients can share decisions with doctors, external oversight promotes accountability, and competition among providers encourages innovation and responsiveness. However, there are drawbacks: physicians face increased bureaucratic control and financial constraints, medical knowledge is commodified, and evidence‑based guidelines can constrain clinical judgement. Consumerism may also erode the prestige of the profession and shift focus from healing to customer service.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is a profession?',
    },
    {
      type: 'paragraph',
      text: 'A profession is an occupation characterised by specialised knowledge, rigorous standards of training, ethical obligations and social recognition. Professionals exercise autonomy over their work and identify strongly with their vocation, which is seen as more than just a job.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is the professional dominance?',
    },
    {
      type: 'paragraph',
      text: 'Professional dominance refers to the extensive control a profession has over its own organisation, education, licensure and practice. Historically, medicine exemplified this dominance: doctors set their own standards, managed entry into the profession, and enjoyed high prestige and income. Such control allowed physicians to shape healthcare and maintain autonomy.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the essential traits of a profession?',
    },
    {
      type: 'paragraph',
      text: 'Occupations recognised as professions share several key traits:',
    },
    {
      type: 'list',
      items: [
        '<strong>Rigorous education and standards:</strong> Entrants undergo lengthy formal and informal training and must adhere to strict codes of practice.',
        '<strong>Autonomy:</strong> Professionals have significant control over their work and regulate their own educational and licensure standards.',
        '<strong>Prestige and identification:</strong> High social status and income are common, and members strongly identify with their profession.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce professionalisation.',
    },
    {
      type: 'paragraph',
      text: 'Professionalisation is the historical process by which occupations develop into recognised professions. In the nineteenth century industrialisation and the rise of markets increased the value of expertise and education. Individuals could choose a profession as a life goal, gain social mobility and replace inherited status with career‑based achievement. Medicine, along with law, teaching and the clergy, achieved high autonomy during this period.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce deprofessionalisation.',
    },
    {
      type: 'paragraph',
      text: 'Deprofessionalisation occurs when professions lose some of their autonomy and authority. In medicine, patients act more like consumers, doctors become service providers, and power relations between doctor and patient are more equal. External regulation, competition from other healthcare providers, consumer demands and reliance on evidence‑based guidelines all contribute to deprofessionalisation.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Characterise the process of feminisation in medicine.',
    },
    {
      type: 'paragraph',
      text: `Feminisation refers to the growing number of women entering medicine and the resulting cultural changes. More women are graduating from medical school and practising as physicians, though men still dominate managerial roles and leadership positions. Many women balance professional work with family responsibilities, sometimes choosing part‑time roles, while others prioritise career advancement. The influx of women prompts changes in workplace policies and expectations. Nonetheless, significant challenges remain: the gender pay gap persists—female doctors often earn substantially less than male colleagues—and women are under‑represented in certain specialties and leadership positions.`,
    },
  ],
};

// Chapter 13: Doctor-Patient Relationship
export const chapter13: ChapterData = {
  id: 13,
  title: 'Doctor-Patient Relationship',
  subtitle: 'Understanding expectations, roles, conflicts and compliance in healthcare',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'Collect data: What do patients expect from doctors, what do doctors expect from patients?',
    },
    {
      type: 'paragraph',
      text: `Patients look for technical competence and respectful, clear communication. They expect physicians to diagnose accurately, explain conditions in plain language, listen attentively and involve them in decisions. Patients also value availability, continuity of care, confidentiality and empathy. Doctors, in turn, expect patients to be honest about their symptoms, to respect professional expertise and to follow treatment plans. They appreciate when patients ask questions, attend follow‑up appointments and collaborate by adhering to medication and lifestyle advice.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'How would you improve the compliance of patients?',
    },
    {
      type: 'paragraph',
      text: 'Improving compliance (also called adherence) depends on building a partnership with patients. Strategies include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Strengthening the patient–provider relationship:</strong> Trust and empathy encourage patients to follow recommendations.',
        '<strong>Providing clear instructions:</strong> Use plain language and confirm understanding through teach‑back or written schedules.',
        '<strong>Simplifying regimens:</strong> Reduce the number of doses, align medication times with daily routines and minimise side‑effects.',
        '<strong>Using reminders and supports:</strong> Pill boxes, mobile alerts and involving family members can help patients remember doses.',
        '<strong>Addressing barriers:</strong> Discuss cost concerns, cultural beliefs and side‑effects, and tailor plans to the individual\'s lifestyle.',
      ],
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'What kind of conflicts did you realise during nursing practice?',
    },
    {
      type: 'paragraph',
      text: `Conflicts in nursing practice often stem from competing demands. Nurses may experience inter‑role conflict when obligations to advocate for patients clash with instructions from physicians or administrators. Intra‑role conflict can occur when the ethical duty to give each patient adequate attention conflicts with pressures to see more patients in less time. Disagreements over treatment plans, communication styles or workloads can also create interpersonal conflict. Open dialogue, collaboration and mediation are essential for resolving these tensions.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define the social role and types of social role.',
    },
    {
      type: 'paragraph',
      text: 'A <strong>social role</strong> is a set of expected behaviours attached to a particular status or social position. Roles can be:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ascribed:</strong> Roles we are born into, such as son, daughter or ethnicity.',
        '<strong>Achieved:</strong> Roles we assume through effort, such as doctor, teacher or volunteer.',
        '<strong>Role set:</strong> The cluster of roles associated with a single status (e.g. a doctor is also a colleague and mentor).',
        '<strong>Role strain:</strong> Tension arising from competing expectations within one role.',
        '<strong>Role conflict:</strong> Clashes between the expectations of different roles.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the role theory.',
    },
    {
      type: 'paragraph',
      text: `Role theory examines how social life is organised through interconnected roles. It emphasises that roles carry expectations (norms) that guide behaviour, that individuals perform roles (role performance) and that roles are interpreted by others. Role theory explains how people learn roles through socialisation, how they negotiate multiple roles and how conflicts or strains can arise when expectations clash. The theory combines structural views of society—where roles maintain social order—with interactionist views that highlight role negotiation and flexibility.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the doctor and the patient roles by Parsons.',
    },
    {
      type: 'paragraph',
      text: `Sociologist Talcott Parsons conceptualised illness as a form of sanctioned deviance and defined reciprocal roles. The <strong>patient</strong> is temporarily exempt from normal duties and has the right to care, but is obligated to seek competent help, cooperate with treatment and desire recovery. The <strong>doctor</strong> has the right to examine, ask questions and prescribe treatment, but must use specialised knowledge ethically and act in the patient's best interest. This "sick role" framework explains why medical interactions involve both rights and obligations for both parties.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the factors of the essential asymmetry in the physician-patient relationship.',
    },
    {
      type: 'paragraph',
      text: `The physician–patient relationship is inherently asymmetrical because doctors possess specialised knowledge, professional status and institutional authority. Patients are often vulnerable due to illness and rely on doctors for diagnosis and treatment. Cultural norms encourage deference to medical expertise, and health‑care systems reinforce hierarchical structures. Even when patients access information online, differences in knowledge and authority mean that power imbalances persist.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the models of the doctor-patient relationship on the different levels of control.',
    },
    {
      type: 'paragraph',
      text: 'Different models describe how control is shared in medical decision‑making:',
    },
    {
      type: 'list',
      items: [
        '<strong>Paternalistic:</strong> The doctor makes decisions and presents them to the patient, who plays a passive role.',
        '<strong>Informative:</strong> The doctor provides all relevant information, and the patient independently chooses among options.',
        '<strong>Interpretive:</strong> The doctor helps the patient clarify values and recommends treatments consistent with those values.',
        '<strong>Deliberative:</strong> The doctor and patient engage in moral deliberation about the best options; the doctor acts as a teacher or advisor.',
      ],
    },
    {
      type: 'paragraph',
      text: 'These models range from physician dominance to shared decision‑making, reflecting differing degrees of patient autonomy.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the Szasz-Hollander model of the physician-patient interaction.',
    },
    {
      type: 'paragraph',
      text: 'Thomas Szasz and Marc Hollander identified three types of physician–patient interaction:',
    },
    {
      type: 'list',
      items: [
        '<strong>Activity–passivity:</strong> The doctor acts on a passive patient who is unable to participate (e.g. during surgery).',
        '<strong>Guidance–cooperation:</strong> The doctor directs care and the patient cooperates, suitable for acute illnesses.',
        '<strong>Mutual participation:</strong> The doctor and patient collaborate and share decision‑making, common in chronic disease management.',
      ],
    },
    {
      type: 'paragraph',
      text: 'This typology emphasises how the relationship shifts based on the patient\'s ability and willingness to engage.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the barriers of communication during the process of therapy.',
    },
    {
      type: 'paragraph',
      text: 'Communication barriers in therapy include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Language and literacy:</strong> Limited proficiency in the dominant language and low health literacy can lead to misunderstandings.',
        '<strong>Cultural differences:</strong> Patients and providers may have different interpretations of symptoms and treatments.',
        '<strong>Emotional and cognitive factors:</strong> Anxiety, denial or cognitive impairments can hinder comprehension and recall.',
        '<strong>Time constraints:</strong> Short consultations leave little opportunity for detailed explanations and questions.',
        '<strong>Physical environment:</strong> Lack of privacy or frequent interruptions can disrupt communication.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is conflict?',
    },
    {
      type: 'paragraph',
      text: 'Conflict arises when individuals or groups pursue incompatible goals or demands. It may be explicit or implicit, interpersonal or intrapersonal. While conflict can lead to tension, it also provides opportunities for change and innovation when managed constructively.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Define the role conflict.',
    },
    {
      type: 'paragraph',
      text: '<strong>Role conflict</strong> occurs when the expectations attached to different roles are incompatible. For example, a nurse may struggle to balance professional obligations to patients with family responsibilities. Role conflict can also emerge when a doctor\'s duty to provide thorough care clashes with institutional pressure to increase efficiency.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the different types of role conflict.',
    },
    {
      type: 'paragraph',
      text: 'Types of role conflict include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Inter‑role conflict:</strong> When expectations of two different roles clash (e.g. clinician vs parent).',
        '<strong>Intra‑role conflict:</strong> When conflicting expectations exist within a single role (e.g. giving quality time to patients versus seeing more patients).',
        '<strong>Role strain:</strong> Difficulty fulfilling all expectations within one role due to limited resources or contradictory demands.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the conflicts in medicine.',
    },
    {
      type: 'paragraph',
      text: `In medical practice, conflicts arise between professionals (nurses and physicians, specialists and generalists), between clinicians and institutions, and between clinicians and patients. These may involve disagreements over treatment plans, allocation of scarce resources, ethical dilemmas (such as end‑of‑life decisions) or cultural misunderstandings. Managing medical conflicts requires clear communication, ethical deliberation, teamwork and attention to patients\' cultural and psychosocial contexts.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is compliance?',
    },
    {
      type: 'paragraph',
      text: '<strong>Compliance</strong> describes how closely a patient follows a healthcare provider\'s recommendations. It implies a more passive relationship where the provider directs and the patient obeys. Because it suggests paternalism, many professionals now prefer the term "adherence."',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the factors related to compliance.',
    },
    {
      type: 'paragraph',
      text: 'Factors influencing compliance include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Patient factors:</strong> Age, cognitive function, mental health, cultural beliefs and social support.',
        '<strong>Disease factors:</strong> Severity and chronicity; asymptomatic conditions may reduce motivation.',
        '<strong>Therapy factors:</strong> Complexity of the regimen, frequency of dosing, side‑effects and cost.',
        '<strong>Healthcare system factors:</strong> Quality of communication, accessibility of services and trust in providers.',
        '<strong>Socioeconomic factors:</strong> Education, financial resources and competing work or family responsibilities.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is the adherence',
    },
    {
      type: 'paragraph',
      text: '<strong>Adherence</strong> is the extent to which a patient\'s behaviour corresponds with an agreed‑upon plan of care. Unlike compliance, adherence emphasises patient autonomy and shared decision‑making. It reflects a collaborative process in which patients and providers work together to design a treatment plan that fits the patient\'s circumstances and values.',
    },
  ],
};

// Chapter 14: Health & Medicalisation
export const chapter14: ChapterData = {
  id: 14,
  title: 'Health & Medicalisation',
  subtitle: 'Exploring concepts of health, illness behavior and the impact of medicalisation',
  content: [
    {
      type: 'question',
      badge: 'activity',
      text: 'Ask around and write down the first concept that comes to people\'s minds about health. How many different concepts do we get?',
    },
    {
      type: 'paragraph',
      text: `When people are asked what "health" means to them, the answers vary widely. Some equate health with the <strong>absence of disease</strong>, while others emphasise <strong>physical functioning</strong>—the ability to carry out daily tasks without pain or fatigue. Many mention <strong>mental well‑being</strong>, such as emotional stability and freedom from stress, or <strong>social well‑being</strong>, meaning supportive relationships and community. Others focus on <strong>healthy lifestyle</strong> habits like exercise and nutrition. In a small informal survey, at least five distinct concepts emerged, illustrating that health is multidimensional and personal.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Analyse the dimensions of Alonzo. Share your opinion and compare the list with your personal experience.',
    },
    {
      type: 'paragraph',
      text: `Sociologist Alonzo proposed four dimensions of health behaviour. <strong>Prevention</strong> involves actions such as exercise, balanced diet and vaccination to minimise disease risk. <strong>Detection</strong> refers to screening and testing to catch illnesses before symptoms appear. <strong>Promotion</strong> is about encouraging others to adopt healthy behaviours through public health campaigns. <strong>Protection</strong> focuses on creating a healthy environment, for example, by reducing pollution or improving workplace safety. In my experience, people are most engaged in prevention and detection—exercising, eating well and getting screenings—while promotion and protection often depend on broader community or policy initiatives.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Make a research! Interview people and ask them to describe their stages of illness experience. Compare the results with Suchman\'s stages.',
    },
    {
      type: 'paragraph',
      text: `Edward Suchman outlined five stages of the illness experience: <strong>symptom experience</strong>, <strong>assumption of the sick role</strong>, <strong>contacting medical care</strong>, <strong>dependent patient role</strong> and <strong>recovery/rehabilitation</strong>. Interviews with friends revealed a similar sequence: people notice symptoms, try home remedies or wait to see if they improve, decide they are ill, seek a doctor's opinion, follow treatment and then resume normal activities. However, modern experiences often skip or blur stages—online self‑diagnosis can delay medical contact, and some patients stop treatment early when they feel better. Chronic conditions also mean some people remain in a modified "sick role" indefinitely. Overall, Suchman's model is useful but may need updating to reflect chronic illness and digital self‑care.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'Analyse Parsons\' sick role concept and share your opinion and experience. Do you find new exceptions today?',
    },
    {
      type: 'paragraph',
      text: `Talcott Parsons' sick role describes illness as a socially sanctioned form of deviance. Patients are exempt from normal responsibilities and not blamed for their condition, but they must want to get well and seek competent care. Doctors, in turn, are expected to use their expertise ethically and act in the patient's best interest. In today's society there are exceptions. People with chronic illnesses often manage their conditions while maintaining work and family roles, and those with mental health issues may not receive the same sympathy as those with physical ailments. When illnesses are linked to lifestyle factors (such as obesity or smoking) people may blame the patient rather than provide support. The rise of patient empowerment and shared decision‑making also challenges the passive patient model inherent in Parsons' sick role.`,
    },
    {
      type: 'question',
      badge: 'activity',
      text: 'List the medicalised fields of life. What are the pros and cons?',
    },
    {
      type: 'paragraph',
      text: 'Medicalisation occurs when non‑medical aspects of life are defined and treated as medical problems. Examples include:',
    },
    {
      type: 'list',
      items: [
        '<strong>Childbirth and pregnancy:</strong> Routine interventions and medical monitoring are common.',
        '<strong>Race‑based medicine:</strong> Use of racially targeted drugs such as BiDil.',
        '<strong>Sadness and depression:</strong> Treating normal fluctuations in mood as clinical disorders.',
        '<strong>Menopause and ageing:</strong> Natural life stages are framed as medical malfunctions.',
        '<strong>"Pre‑" conditions:</strong> Labels like pre‑hypertension or osteopenia lead to treatment of subclinical states.',
      ],
    },
    {
      type: 'paragraph',
      text: '<strong>Pros:</strong> Medicalisation can legitimise people\'s experiences, provide access to effective treatments and reduce stigma. Recognising postpartum depression or ADHD has helped many receive appropriate care. <strong>Cons:</strong> Over‑medicalising normal life can lead to unnecessary tests, drug side‑effects and high costs. It may divert attention from social factors affecting health and can reinforce gender or racial biases. Medicalisation also risks shifting responsibility for structural problems onto individuals.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the concept of health.',
    },
    {
      type: 'paragraph',
      text: `Health is more than just the absence of disease. The World Health Organization defines it as "a state of complete physical, mental and social well‑being." Social scientists emphasise that health is subjective and influenced by our social environment—the conditions into which we are born, live, work and age. Factors like income, education and community support shape our health just as much as genes or pathogens.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the biomedical focus of health.',
    },
    {
      type: 'paragraph',
      text: 'The biomedical model views health as the absence of disease and treats illness as a physiological malfunction. In this approach, diagnosis and treatment are considered objective, value‑free tasks performed by medical professionals. The focus is on identifying and correcting biological abnormalities. While this model has led to significant medical advances, it often overlooks psychological and social influences on health.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the sociological (sociocultural) definition of health.',
    },
    {
      type: 'paragraph',
      text: `The sociological perspective recognises that health is shaped by cultural and social factors. People's cultural backgrounds influence how they interpret and report symptoms, and social determinants—such as income, education and social support—affect health outcomes. Talcott Parsons suggested that health is the optimum capacity to perform social roles, highlighting that health is a resource for daily life rather than merely a biological state.`,
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce Alonzo\'s four dimensions of health behaviour.',
    },
    {
      type: 'paragraph',
      text: 'According to Alonzo, health behaviour has four dimensions:',
    },
    {
      type: 'list',
      items: [
        '<strong>Prevention:</strong> Actions to minimise disease risk, such as exercising, eating a balanced diet and getting vaccinated.',
        '<strong>Detection:</strong> Screenings and tests to identify diseases before symptoms appear.',
        '<strong>Promotion:</strong> Campaigns and initiatives to encourage individuals and communities to adopt healthy behaviours.',
        '<strong>Protection:</strong> Efforts to make the environment healthier by reducing pollution, ensuring safe workplaces and promoting public sanitation.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'What is illness behaviour?',
    },
    {
      type: 'paragraph',
      text: 'Illness behaviour refers to how people perceive, evaluate and act upon their symptoms. Individuals interpret bodily sensations differently based on cultural norms, past experiences and social support. While some seek medical help quickly, others delay, self‑treat or ignore symptoms. Understanding illness behaviour helps explain variations in healthcare‑seeking practices and health outcomes.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce Zola\'s \'social triggers.\'',
    },
    {
      type: 'paragraph',
      text: 'Sociologist Irving Zola identified five social triggers that push people to seek medical care:',
    },
    {
      type: 'list',
      items: [
        '<strong>Interference with work or daily activities:</strong> Symptoms that hinder the ability to work or carry out physical tasks.',
        '<strong>Interference with social or personal relationships:</strong> Symptoms that disrupt social interactions or leisure.',
        '<strong>Interpersonal crisis:</strong> Major life events (such as domestic violence or other crises) that reduce tolerance for symptoms.',
        '<strong>Temporising of symptomatology:</strong> Setting deadlines to see if symptoms persist or recur.',
        '<strong>Sanctioning:</strong> Pressure from family or friends urging the person to seek medical attention.',
      ],
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Introduce the stages of illness experience.',
    },
    {
      type: 'paragraph',
      text: 'Edward Suchman proposed five stages of how people experience illness:',
    },
    {
      type: 'list',
      items: [
        '<strong>Symptom experience:</strong> Recognising that something is wrong and possibly self‑treating or ignoring the problem.',
        '<strong>Assumption of the sick role:</strong> Accepting that one is ill and deciding to get better.',
        '<strong>Contacting medical care:</strong> Seeking professional validation and diagnosis.',
        '<strong>Dependent patient role:</strong> Agreeing to treatment and following medical advice.',
        '<strong>Recovery and rehabilitation:</strong> Gradually resuming normal roles and relinquishing the sick role.',
      ],
    },
    {
      type: 'paragraph',
      text: 'These stages highlight that illness is not just a biological event but a social process influenced by perceptions, expectations and norms.',
    },
    {
      type: 'question',
      badge: 'exam',
      text: 'Describe medicalisation.',
    },
    {
      type: 'paragraph',
      text: '<strong>Medicalisation</strong> is the process by which human conditions and behaviours become defined and treated as medical problems. It can be driven by new scientific evidence, shifting social attitudes, pharmaceutical marketing or economic incentives. Once a condition is labelled as medical, it is more likely to be studied, diagnosed and treated by healthcare professionals. Medicalisation can empower people by providing treatment and reducing stigma, but it also risks pathologising normal experiences and expanding medical authority into daily life.',
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
    9: chapter9,
    10: chapter10,
    11: chapter11,
    12: chapter12,
    13: chapter13,
    14: chapter14,
  },
};
