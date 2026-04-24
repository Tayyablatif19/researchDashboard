export const researchData = {
  title: "Cultural Barriers to Healthcare Access in Pakistan",
  subtitle: "An Ethnographic Study of Gender Norms, Traditional Healing Practices, Health Illiteracy, and Patient Rights in Islamabad",
  year: 2026,
  locations: ["Huma Medical Complex"],
  methodology: "Ethnographic Qualitative Research",
  abstract: "This ethnographic study examines cultural barriers to healthcare access in Islamabad, Pakistan, with a focus on four interconnected dimensions: gender norms and purdah culture, traditional and alternative healing practices, health illiteracy, and unawareness of patient rights. Conducted at Huma Medical Complex in Islamabad, the study employs qualitative methods including in-depth interviews with practising physicians and synthetically constructed patient narratives.",
  kpis: [
    { label: "Total Participants", value: 15, icon: "Users" },
    { label: "Practicing Physicians", value: 5, icon: "Stethoscope" },
    { label: "Patient Narratives", value: 10, icon: "BookOpen" },
    { label: "Research Site", value: 1, icon: "MapPin" }
  ],
  themes: [
    {
      id: "gender",
      title: "Gender Norms & Purdah",
      description: "Structural dependence of female patients on male family members for authorization of medical decisions.",
      insights: [
        "Purdah culture restricts public mobility and male physician examinations.",
        "Male decision-making authority frequently delays or redirects patient care.",
        "Adaptive clinical strategies (e.g., calling female staff) are standard but reactive."
      ],
      quote: "Women are mostly dependent upon their males for their decisions. In Pakistan, the male is basically considered as a superior.",
      author: "Dr Muhammad Saad Naeem"
    },
    {
      id: "healing",
      title: "Traditional Healing Practices",
      description: "Widespread co-utilization of formal and informal health systems across socioeconomic levels.",
      insights: [
        "Faith healing (dam darood) and herbal remedies often precede formal consultation.",
        "Pragmatic 'therapeutic pluralism' exists where patients navigate multiple systems.",
        "Digital misinformation (e.g., YouTube exercises) is a growing modern layer."
      ],
      quote: "We can't go harsh on them. Moreover, if it benefits their health then I personally encourage them.",
      author: "Dr Umar"
    },
    {
      id: "literacy",
      title: "Health Illiteracy",
      description: "Systemic educational failures leading to impaired informed consent and prescription adherence.",
      insights: [
        "Linguistic diversity requires physicians to be 'communicative chameleons'.",
        "Informal visual cues (sun/moon symbols) are used to bridge communication gaps.",
        "Low literacy is associated with 'performative compliance' without understanding."
      ],
      quote: "I don't use the name of the bacteria; I tell them there is a germ causing the problem — khoon mein jaraseem hai.",
      author: "Dr Muhammad Saad Naeem"
    },
    {
      id: "rights",
      title: "Patient Rights Awareness",
      description: "Critically low awareness of formal rights charters, perpetuating clinical power asymmetries.",
      insights: [
        "Patient-level awareness of existing formal charters is minimal.",
        "Requesting second opinions is often viewed as an affront to medical authority.",
        "Systemic power imbalances make exercising rights difficult even for the educated."
      ],
      quote: "The system itself is not designed to empower patients. It's a systemic problem.",
      author: "Usman Raza"
    }
  ],
  participants: {
    doctors: [
      { name: "Dr Muhammad Saad Naeem", gender: "Male", role: "GP & Orthopedics", experience: "10+ years" },
      { name: "Dr Rubina Masood", gender: "Female", role: "Paediatrics", experience: "10+ years" },
      { name: "Dr Aizaz", gender: "Male", role: "General Medicine", experience: "1-2 years" },
      { name: "Dr Umar", gender: "Male", role: "General Medicine", experience: "2+ years" },
      { name: "Dr Nauman", gender: "Male", role: "Orthopedics / Physiotherapy", experience: "10 years" }
    ],
    patients: [
      { name: "Zainab Bibi", gender: "Female", age: 34, barrier: "Gender Norms + Illiteracy", story: "Prolonged abdominal pain for 6 weeks. Husband delayed care. Difficulty speaking in front of male chaperone." },
      { name: "Bashir Ahmed", gender: "Male", age: 52, barrier: "Health Illiteracy", story: "Self-medicated for 3 years with chemist tablets. Didn't know about systemic damage." },
      { name: "Hina Nawaz", gender: "Female", age: 26, barrier: "Gender Norms + Purdah", story: "Avoided consultation for 4 months due to lack of female doctors in OPD." },
      { name: "Riaz Hussain", gender: "Male", age: 45, barrier: "Traditional Healing", story: "8 months of treatment by Hakim for knee pain before presenting at hospital." },
      { name: "Sadia Rehman", gender: "Female", age: 38, barrier: "Patient Rights", story: "Felt bad for asking for second opinion. Husband insisted on hijama first." },
      { name: "Imtiaz Khan", gender: "Male", age: 60, barrier: "Language + Illiteracy", story: "Pashtun migrant with language barrier. Missed critical precautions due to translation gaps." },
      { name: "Nafeesa Begum", gender: "Female", age: 29, barrier: "Gender + Traditional", story: "First hospital visit after home births. Refused male exam during complications." },
      { name: "Tariq Mehmood", gender: "Male", age: 41, barrier: "Traditional Healing + Quacks", story: "Treated by unlicensed 'doctor' for 2 years. Vision loss due to uncontrolled sugar." },
      { name: "Shaheen Akhtar", gender: "Female", age: 55, barrier: "Multiple Barriers", story: "Used peer sahib, karela juice, and Hakim before hospital. Permanent nerve damage." },
      { name: "Usman Raza", gender: "Male", age: 23, barrier: "Patient Rights", story: "Digitally literate youth who still felt power imbalance when questioning senior doctor." }
    ]
  },
  references: [
    "Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology.",
    "Foucault, M. (1973). The Birth of the Clinic.",
    "Kleinman, A. (1980). Patients and Healers in the Context of Culture.",
    "Mumtaz, Z., & Salway, S. (2007). Gender, pregnancy and the uptake of antenatal care in Pakistan.",
    "Shaikh, B. T., & Hatcher, J. (2005). Health seeking behaviour and health service utilization in Pakistan."
  ]
};
