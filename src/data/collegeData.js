export const COLLEGE_INFO = {
  name: "Amal Jyothi College of Engineering",
  shortName: "AJCE Autonomous",
  motto: "25 Years of Pure Light (2001–2026)",
  etymology: "'Amal' means immaculate and inviolate; 'Jyothi' means light. Amal Jyothi stands for pure light — a universal symbol for the search for unblemished truth, dedicated to enlightenment through Mary Immaculate.",
  tagline: "Where Knowledge Meets Purpose",
  vision: "To mould top-notch engineering and management professionals with a heart for societal transformation.",
  location: "Amal Jyothi College of Engineering, Kanjirappally, Koovappally P.O., Kottayam Dt., Kerala 686518",
  establishmentYear: 2001,
  autonomousApprovalDate: "Conferred Autonomous status by UGC on 6 July 2023",
  affiliation: "Affiliated to APJ Abdul Kalam Technological University (KTU) since 2015 & Approved by AICTE, New Delhi",
  
  contacts: {
    email: ["info@ajce.in", "info@amaljyothi.ac.in"],
    reception: "+91 907 26 61 610",
    office: "+91 949 60 94 661",
    admissions: {
      btech: "+91 9072661600",
      mtech: "+91 951 66 66 000",
      bba: "+91 907 45 57 708",
      bcaMca: "+91 860 63 09 393"
    },
    deanResearch: {
      name: "Dr. Soney C George",
      email: "deanresearch@amaljyothi.ac.in",
      phone: "+91 90726 61605"
    }
  },

  accreditations: [
    { label: "Status", value: "UGC Autonomous Institution (Since 6 July 2023)", highlight: true },
    { label: "Accreditation", value: "NAAC 'A+' Grade", highlight: true },
    { label: "NBA Accreditation", value: "7 NBA Accredited Programmes (CH, CE, CSE, ECE, EEE, ME, MCA)", highlight: true },
    { label: "State Ranking", value: "Rank #4 in Kerala (KIRF 2026)", highlight: true },
    { label: "Innovation Rank", value: "Rank #2 in Kerala (NIRF Innovation)", highlight: true },
    { label: "ARIIA Band", value: "ARIIA 'Excellent' (Only Engg College in Kerala)", highlight: true },
    { label: "AICTE IDEA Lab", value: "1 of 49 in India funded by AICTE", highlight: true },
    { label: "ISO Certifications", value: "ISO 14001 & 50001 Certified Green Campus", highlight: false },
    { label: "UNAI Member", value: "United Nations Academic Impact on SDGs", highlight: false }
  ],

  // Exact KPI counters matching official website Array T
  kpiBadges: [
    { v: "A+ Grade", l: "NAAC Grade" },
    { v: "7 Programs", l: "NBA Accredited" },
    { v: "Rank 4", l: "KIRF Kerala 2026" },
    { v: "Rank 2 Kerala", l: "NIRF Innovation" },
    { v: "23 Programs", l: "Autonomous Intake" },
    { v: "25 Years", l: "Silver Jubilee (2001)" },
    { v: "95+ Startups", l: "2 TBIs Incubated" },
    { v: "ISO Certified", l: "14001 & 50001" },
    { v: "ARIIA Excellent", l: "Only Engg Kerala" },
    { v: "500-m Skywalk", l: "World Record" },
    { v: "68 Acres", l: "1.26L Sq.m Built-up" },
    { v: "SIH Grand Finale", l: "Nodal Centre" },
    { v: "AICTE IDEA Lab", l: "1 of 49 in India" },
    { v: "IIC 4-Star", l: "1 of 6 Kerala" },
    { v: "First IEDC", l: "In Kerala" },
    { v: "₹20 LPA", l: "Highest Package" },
    { v: "840 B.Tech", l: "12 Specialisations" },
    { v: "3,500+ Students", l: "240+ Faculty" },
    { v: "22+ Patents", l: "Published & Granted" },
    { v: "UNAI Member", l: "SDGs Sustainable" }
  ],

  // Kerala YIP 8.0 Official Landmark Metric
  yipLeadership: {
    title: "Kerala YIP 8.0 State Leaders",
    subtitle: "Young Innovators Programme Excellence",
    stateWinners: "5 State-Level Group Winners",
    projects: "638 Projects",
    innovators: "2,866 Student Innovators",
    mentors: "132 Faculty Mentors",
    benchmark: "One Unrivaled Benchmark of Student Innovation in Kerala"
  },

  // Campus specifications
  infrastructure: {
    campusArea: "68-Acre Hilltop Campus",
    builtUpArea: "1.26 Lakh sq.m built-up area",
    students: "3,500+ Students",
    faculty: "240+ Faculty Members",
    hostels: {
      totalCapacity: "2,500 Residents",
      ladies: "1,200 Capacity (Amala)",
      gents: "1,300 Capacity (Sanjo)"
    },
    network: "2.10 Gbps Leased Line Internet with 1,400+ PCs",
    power: "1,120 KVA Diesel Generator Backup + 500 kW / 400 kW Solar Farm",
    skywalk: "500-Meter Skywalk connecting academic complexes (World Record)"
  },

  // Placements snapshot
  placementStats: {
    classOf2026: "519+ Offers & Counting",
    classOf2027: "Early Birds Recruitment Active",
    highestPackage: "₹20 LPA",
    averagePackage: "₹5.5 – ₹6.8 LPA",
    recruitersCount: "100+ Tier-1 MNCs & Core Leaders"
  }
};

// 23 Programmes across 13 Departments with exact seat matrix
export const PROGRAMMES_DIRECTORY = {
  btech: {
    totalSeats: 840,
    duration: "4 Years",
    features: "12 Programs with Honours & Minor Tracks (Autonomous)",
    items: [
      { name: "Computer Science & Engineering", code: "CSE", seats: 180, accredited: "NBA Accredited" },
      { name: "Electronics & Communication Engineering", code: "ECE", seats: 120, accredited: "NBA Accredited" },
      { name: "Artificial Intelligence & Data Science", code: "AI & DS", seats: 60, accredited: "Autonomous Honors" },
      { name: "CSE – Artificial Intelligence", code: "CSE - AI", seats: 60, accredited: "Autonomous Honors" },
      { name: "CSE – Cyber Security", code: "CSE - CS", seats: 60, accredited: "Autonomous Honors" },
      { name: "Chemical Engineering", code: "CHE", seats: 60, accredited: "NBA Accredited" },
      { name: "Civil Engineering", code: "CE", seats: 60, accredited: "NBA Accredited" },
      { name: "Electrical & Electronics Engineering", code: "EEE", seats: 60, accredited: "NBA Accredited" },
      { name: "Mechanical Engineering", code: "ME", seats: 60, accredited: "NBA Accredited" },
      { name: "Food Technology", code: "FT", seats: 60, accredited: "Autonomous Core" },
      { name: "Mechanical Automobile Engineering", code: "ME-AU", seats: 30, accredited: "Autonomous Core" },
      { name: "Metallurgical & Materials Engineering", code: "MME", seats: 30, accredited: "Autonomous Core" }
    ]
  },
  mtech: {
    totalSeats: 42,
    duration: "2 Years",
    features: "6 Advanced Master of Technology Specializations",
    items: [
      { name: "Computer Science & Engineering", code: "CSE" },
      { name: "Energy Systems", code: "ES" },
      { name: "Structural Engineering & Construction Management", code: "SECM" },
      { name: "Environmental Engineering", code: "EE" },
      { name: "Electric Vehicle Technology", code: "EVT" },
      { name: "VLSI & Embedded Systems", code: "VLSI" }
    ]
  },
  computerApplications: {
    totalSeats: 180,
    duration: "2 / 4 / 5 Years",
    features: "Industry-aligned IT & Software Architectures",
    items: [
      { name: "MCA Regular", duration: "2 Years", seats: 60, accredited: "NBA Accredited" },
      { name: "MCA Integrated", duration: "5 Years", seats: 60, accredited: "Autonomous Integrated" },
      { name: "BCA (AI/ML Enhanced)", duration: "4 Years", seats: 60, accredited: "Autonomous Degree" }
    ]
  },
  management: {
    totalSeats: 60,
    duration: "4 Years",
    school: "Amal Jyothi Business School (ABS)",
    badge: "New Programme · 2026 Intake",
    items: [
      { name: "BBA Honours (Fully Residential)", duration: "4 Years", seats: 60, accredited: "ABS Autonomous" }
    ]
  },
  phd: {
    duration: "3–5 Years",
    features: "Doctoral Research under KTU & National Funding",
    departments: [
      "Chemical Engineering (CH)",
      "Civil Engineering (CE)",
      "Computer Science & Engg (CSE)",
      "Computer Applications (CA)",
      "Electronics & Comm. (ECE)",
      "Electrical & Electronics (EEE)",
      "Food Technology (FT)",
      "Mechanical Engineering (ME)",
      "Metallurgical & Materials (MT)",
      "Basic Sciences (BS)"
    ]
  }
};

// International Pathways directly featured on ajce.in homepage
export const INTERNATIONAL_PATHWAYS = [
  {
    id: "usa_elmhurst",
    countries: "India · USA",
    title: "PG Certificate in AI&DS + MS at Elmhurst University USA",
    duration: "1 Year at AJCE India + 1 Year Full-Time at Elmhurst University, Chicago USA",
    description: "Earn a Post-Graduate Certificate in Artificial Intelligence & Data Science from Amal Jyothi College, then complete your full Master's Degree at Elmhurst University USA with twelve months of full-time study.",
    features: ["Dual Credential", "Chicago Campus Study", "STEM OPT Eligible", "AI & Data Science Specialty"],
    cta: "Apply for Elmhurst Pathway"
  },
  {
    id: "australia_jcu",
    countries: "India · Australia",
    title: "B.Tech + Final Semester Joint Project with James Cook University Australia",
    duration: "3.5 Years at AJCE + Transfer to JCU Australia for 2-Year Master's",
    description: "Complete 3.5 years of your Bachelor's at Amal Jyothi College, then transfer to James Cook University (JCU) Australia to pursue a two-year Master's degree, with your final semester project jointly supervised by AJCE and JCU faculty.",
    features: ["Dual Degree Transfer", "Joint Faculty Supervision", "Australian Post-Study Work Visa", "Research Pathway"],
    contact: "Dr. Soney C George (Dean Research) · deanresearch@amaljyothi.ac.in · +91 90726 61605",
    cta: "Contact Dean Research"
  }
];

// 2026 Conferences, Events & Announcements from ajce.in
export const CONFERENCES_2026 = [
  { code: "ASSET 2026", date: "July 16–18, 2026", title: "Intl. Conference on Advances in Sustainable System Engineering & Tech" },
  { code: "NACORE 2026", date: "Mar 18–20, 2026", title: "National Conference on Computing & Communication Systems" },
  { code: "NCECA 2026", date: "Mar 25, 2026", title: "National Conference on Energy, Control & Automation" },
  { code: "AICERA 2026", date: "Apr 8–10, 2026", title: "Annual International Conference on Emerging Research Areas" },
  { code: "NCSISD 2026", date: "May 14–15, 2026", title: "National Conference on Structural Innovation & Sustainable Design" }
];

export const HIGHLIGHT_EVENTS_2026 = [
  {
    badge: "Save the Date",
    tag: "AI Conclave 2026",
    theme: "“Humans first. AI for tasks, not for jobs.”",
    date: "15 & 16 September 2026",
    venue: "AJCE Campus, Kanjirappally",
    description: "National flagship conclave uniting enterprise AI architects, ethicists, researchers, and students to debate the future of human-centered AI."
  },
  {
    badge: "Student Project Contest",
    tag: "I²U — Innovation Ideas Unleashed",
    theme: "Annual Flagship Student Project Championship",
    date: "Held Annually Since 2007",
    venue: "AJCE TBI & Innovation Center",
    description: "AJCE's premier innovation platform awarding seed grants, incubation support, and cash prizes for breakthrough student prototypes."
  },
  {
    badge: "Championship",
    tag: "Checkmate 2026",
    theme: "Inter-School & Open Chess Tournament",
    date: "02 October 2026 · 09:00 AM",
    venue: "Central Knowledge Centre Auditorium",
    description: "Open championship gathering top junior and collegiate chess masters from across South India."
  },
  {
    badge: "Hands-on Immersion",
    tag: "SIP — Summer Internship Programme",
    theme: "On-Campus & Open to External Students",
    date: "Summer 2026 Cohort",
    venue: "Spanning 13 Departments, 2 TBIs & Startups",
    description: "Intensive 4-to-6 week summer research and development residency working on live patent projects and startup incubations."
  },
  {
    badge: "Public Upskilling",
    tag: "Edu-Connect Hybrid Skill Pathway",
    theme: "Cyber Hygiene, App Dev, GenAI & Ethical Hacking",
    date: "1-Year Hybrid Programme",
    venue: "Dept. of Computer Applications",
    description: "Year-long certified tech literacy and hands-on developer training open to school and college students as well as working professionals."
  }
];

// Department explorer structured list
export const DEPARTMENTS = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    code: "CSE",
    degree: "B.Tech (180), M.Tech, PhD",
    accreditation: "NBA Accredited",
    tagline: "Architecting cloud systems, scalable software, and high-performance algorithms.",
    gradient: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    avgPackage: "₹6.2 LPA",
    topPackage: "₹20 LPA",
    seats: 180,
    highlights: [
      "Dedicated High Performance Computing, Cloud & AI Labs",
      "Official Academies with IBM, Red Hat, Oracle, GitHub, and EC-Council",
      "Autonomous curriculum updated with Microservices, DevOps & GenAI",
      "Active GDG on Campus, ACM Chapter & IEEE Computer Society"
    ],
    labs: ["Cloud Computing Lab", "Advanced Software Engg Lab", "Network Security Testbed"],
    careers: ["Full-Stack Architect", "Cloud DevOps Engineer", "Cybersecurity Analyst", "Systems Engineer"]
  },
  {
    id: "aids",
    name: "Artificial Intelligence & Data Science",
    code: "AI & DS",
    degree: "B.Tech (60) + Elmhurst USA Pathway",
    accreditation: "Emerging Tech Honours",
    tagline: "Unlocking machine intelligence, neural models, and big data pipelines.",
    gradient: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    avgPackage: "₹6.8 LPA",
    topPackage: "₹18.5 LPA",
    seats: 60,
    highlights: [
      "NVIDIA GPU Accelerated Deep Learning Workstations",
      "Direct pathway: 1 Yr AJCE PG Certificate + 1 Yr MS at Elmhurst Univ Chicago",
      "Host of National AI Conclave 2026 ('Humans first. AI for tasks, not jobs')",
      "Direct integration with AJCE TBI AI Startup Incubation"
    ],
    labs: ["GPU Deep Learning Centre", "Big Data Analytics Lab", "Cognitive Computing Lab"],
    careers: ["AI/ML Engineer", "Data Scientist", "Computer Vision Specialist", "NLP Engineer"]
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    code: "ECE",
    degree: "B.Tech (120), M.Tech, PhD",
    accreditation: "NBA Accredited",
    tagline: "Designing next-gen microchips, 5G signal networks, and IoT robotics.",
    gradient: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    avgPackage: "₹5.5 LPA",
    topPackage: "₹16 LPA",
    seats: 120,
    highlights: [
      "Cadence & Synopsys VLSI Design Tool Suite",
      "Texas Instruments IoT & Embedded Systems Hub",
      "Autonomous Drone telematics & satellite telemetry labs",
      "High core placements in Bosch, Intel, UST, and Tata Elxsi"
    ],
    labs: ["VLSI Design Centre", "IoT & Embedded Systems Lab", "Microwave & Optical Comm Lab"],
    careers: ["VLSI Design Engineer", "Embedded Firmware Dev", "Robotics Hardware Architect", "Telecom Engineer"]
  },
  {
    id: "mech",
    name: "Mechanical Engineering & Automobile",
    code: "ME & ME-AU",
    degree: "B.Tech (60 + 30), M.Tech, PhD",
    accreditation: "NBA Accredited",
    tagline: "Home of Team Amal Jyothi Racing, Eicher CoE, and smart EV manufacturing.",
    gradient: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    avgPackage: "₹5.0 LPA",
    topPackage: "₹14 LPA",
    seats: 90,
    highlights: [
      "Team Amal Jyothi Racing: Student-designed Formula racecars",
      "Eicher Centre of Excellence, Yamaha Training Centre & Royal Enfield Cell",
      "Advanced CNC 5-Axis Machining, 3D Additive Printing & Bosch Automotive Lab",
      "Heavy industry tie-ups with MRF, Bosch, JK Tyre, and Ashok Leyland"
    ],
    labs: ["Formula Student Racing Workshop", "Eicher CoE & Dyno Lab", "Advanced CNC Lab"],
    careers: ["Automotive Design Engineer", "Robotics Mechanical Lead", "Aerospace Manufacturing", "Energy Systems Analyst"]
  },
  {
    id: "civil",
    name: "Civil & Environmental Engineering",
    code: "CE",
    degree: "B.Tech (60), M.Tech, PhD",
    accreditation: "NBA Accredited",
    tagline: "Creating resilient smart cities, eco-structures, and seismic-safe infra.",
    gradient: "from-emerald-600/20 to-green-500/10 border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    avgPackage: "₹4.8 LPA",
    topPackage: "₹12 LPA",
    seats: 60,
    highlights: [
      "BIM (Building Information Modelling) and Total Station GIS",
      "Green Building materials research & eco-concrete innovation",
      "Consultancy cell handling major government infrastructure projects",
      "Modern geotechnical and environmental testing facilities"
    ],
    labs: ["Structural Dynamics Lab", "Geotechnical & Soil Mechanics", "Advanced Surveying GIS Centre"],
    careers: ["Structural Consultant", "Urban Infrastructure Planner", "BIM Specialist", "Geotechnical Engineer"]
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    code: "EEE",
    degree: "B.Tech (60), M.Tech, PhD",
    accreditation: "NBA Accredited",
    tagline: "Powering the renewable revolution with 500 kW microgrids and EV tech.",
    gradient: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    avgPackage: "₹5.2 LPA",
    topPackage: "₹15 LPA",
    seats: 60,
    highlights: [
      "Hands-on control of the 500 kW on-campus rooftop Solar Grid",
      "Smart Grid Automation & Industrial SCADA testing",
      "EV charging station R&D and battery management prototypes",
      "Continuous placement records in power utilities and energy MNCs"
    ],
    labs: ["500kW Solar Microgrid Station", "Power Electronics & Drives", "Electrical Machine Dynamics"],
    careers: ["Renewable Energy Specialist", "Smart Grid Automation Engineer", "Power Systems Architect", "EV Power Tech"]
  },
  {
    id: "chem_food",
    name: "Chemical Engineering & Food Technology",
    code: "CHE & FT",
    degree: "B.Tech (60 + 60), PhD",
    accreditation: "NBA Accredited (CHE)",
    tagline: "Innovating bioprocessing, bio-fuels, and sustainable nutraceutical engineering.",
    gradient: "from-rose-500/20 to-pink-500/10 border-rose-500/30",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    avgPackage: "₹5.1 LPA",
    topPackage: "₹14 LPA",
    seats: 120,
    highlights: [
      "Comprehensive Pilot Plant with continuous distillation columns",
      "Food Quality testing and safety analysis labs (FSSAI aligned)",
      "Polymer composites, effluent treatment, and waste-to-wealth prototypes",
      "Placements in petrochemical, FMCG, and multinational pharma giants"
    ],
    labs: ["Chemical Reaction Engineering Lab", "Food Processing Pilot Plant", "Mass Transfer Unit"],
    careers: ["Process Design Engineer", "Food Quality & Safety Director", "Petrochemical Specialist", "R&D Chemist"]
  },
  {
    id: "ca",
    name: "Department of Computer Applications",
    code: "CA / MCA",
    degree: "MCA (60), MCA Integrated (60), BCA (60), PhD",
    accreditation: "NBA Accredited (MCA)",
    tagline: "Building modern full-stack cloud architectures, enterprise software, and applied AI systems.",
    gradient: "from-blue-500/20 to-indigo-500/10 border-blue-500/30",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    avgPackage: "₹5.8 LPA",
    topPackage: "₹16 LPA",
    seats: 180,
    highlights: [
      "NBA Accredited Master of Computer Applications (MCA) with continuous placement track",
      "BCA 4-Year (AI/ML Enhanced) with applied data science and software minor",
      "5-Year Integrated MCA program directly after Plus Two / 12th Grade",
      "Annual Edu-Connect certified tech skilling in Full Stack, Cloud & Cyber Hygiene",
      "Direct software venture incubations at AJCE Technology Business Incubator"
    ],
    labs: ["Advanced Web & Mobile Computing Lab", "Enterprise Software Engineering Lab", "Cloud Development Sandbox"],
    careers: ["Full-Stack Software Engineer", "Cloud Solutions Architect", "Enterprise App Developer", "Data Analyst"]
  },
  {
    id: "abs",
    name: "Amal Jyothi Business School (ABS)",
    code: "ABS / BBA",
    degree: "BBA Honours (60) — 4-Year Fully Residential",
    accreditation: "ABS Autonomous Management",
    tagline: "Cultivating visionary business leaders, venture founders, and executive managers.",
    gradient: "from-amber-500/20 to-yellow-500/10 border-amber-500/30",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    avgPackage: "₹5.2 LPA",
    topPackage: "₹12 LPA",
    seats: 60,
    highlights: [
      "New 2026 Intake: 4-Year Honours with specialization in FinTech, Digital Marketing & Analytics",
      "Fully residential executive cohort with corporate immersion & internship guarantees",
      "Direct incubation support with ₹50L seed grant access at 2 on-campus TBIs",
      "Industry mentoring by CXOs, startup founders, and global alumni network"
    ],
    labs: ["Executive Boardroom Simulator", "Financial Analytics Terminal", "Digital Marketing Studio"],
    careers: ["Business Operations Specialist", "FinTech Product Associate", "Venture Entrepreneur", "Management Consultant"]
  }
];

export const MATCH_QUESTIONS = [
  {
    id: 1,
    title: "What sparks your curiosity the most?",
    subtitle: "Choose the domain you naturally find yourself reading or tinkering with.",
    options: [
      {
        id: "code_ai",
        label: "Writing intelligent algorithms, neural models & software systems",
        icon: "Cpu",
        branches: ["cse", "aids"],
        description: "You're drawn to logic, data pipelines, and transforming software ideas into real code."
      },
      {
        id: "machines_speed",
        label: "Designing physical machinery, engines, chassis & racing dynamics",
        icon: "Wrench",
        branches: ["mech"],
        description: "You love tangible mechanical systems, thermodynamics, and high-velocity engineering."
      },
      {
        id: "chips_robotics",
        label: "Soldering circuits, embedded IoT chips, sensors & robotic arms",
        icon: "Radio",
        branches: ["ece", "eee"],
        description: "You bridge the boundary between physical electronic hardware and firmware intelligence."
      },
      {
        id: "cities_structures",
        label: "Architecting megastructures, bridges, smart cities & green concrete",
        icon: "Building2",
        branches: ["civil"],
        description: "You want to shape skyline infrastructure, environmental resilience, and civil spaces."
      },
      {
        id: "biomolecules_food",
        label: "Synthesizing clean polymers, biofuels, and modern food biotechnology",
        icon: "FlaskConical",
        branches: ["chem_food"],
        description: "You're passionate about molecular reactions, processing plants, and food science."
      },
      {
        id: "business_leadership",
        label: "Business innovation, tech management, startups & leadership",
        icon: "Sparkles",
        branches: ["abs_mca"],
        description: "You aspire to lead corporate enterprises, scale digital products, and manage business ventures."
      }
    ]
  },
  {
    id: 2,
    title: "Where do you envision yourself thriving on Day 1 after graduation?",
    subtitle: "Select your ideal professional playground.",
    options: [
      {
        id: "tech_titan",
        label: "At a global software giant or AI venture studio in Bengaluru/Silicon Valley",
        icon: "Sparkles",
        branches: ["cse", "aids"]
      },
      {
        id: "motorsports_plant",
        label: "At an automotive racing pit, aerospace hangar, or advanced CNC plant",
        icon: "Compass",
        branches: ["mech"]
      },
      {
        id: "semiconductor_grid",
        label: "Inside a cleanroom semiconductor fab or a state-of-the-art solar microgrid",
        icon: "Zap",
        branches: ["ece", "eee"]
      },
      {
        id: "infra_consulting",
        label: "Overseeing massive metro rail, smart highway, or green building developments",
        icon: "Navigation",
        branches: ["civil"]
      },
      {
        id: "process_lab",
        label: "In a pharmaceutical bioreactor facility or FMCG sustainable packaging lab",
        icon: "Layers",
        branches: ["chem_food"]
      },
      {
        id: "venture_business",
        label: "Managing enterprise finance, modern business analytics, or leading a venture studio",
        icon: "Building",
        branches: ["abs_mca"]
      }
    ]
  },
  {
    id: 3,
    title: "What kind of project would you launch at AJCE's 2 TBIs (Incubators)?",
    subtitle: "AJCE has 2 TBIs with 95+ incubated startups. What will be your flagship creation?",
    options: [
      {
        id: "ai_startup",
        label: "An autonomous AI agent for healthcare diagnosis or real-time code synthesis",
        icon: "Terminal",
        branches: ["aids", "cse"]
      },
      {
        id: "ev_racecar",
        label: "A custom electric formula car with carbon-fiber chassis & telemetry",
        icon: "Rocket",
        branches: ["mech"]
      },
      {
        id: "drone_iot",
        label: "An AI-powered agricultural drone swarm for high-precision farming",
        icon: "Radio",
        branches: ["ece", "eee"]
      },
      {
        id: "green_infra",
        label: "Earthquake-dampening modular homes made of recycled carbon-negative slag",
        icon: "Building",
        branches: ["civil"]
      },
      {
        id: "bio_package",
        label: "Zero-waste edible algae packaging to eliminate single-use plastics",
        icon: "Leaf",
        branches: ["chem_food"]
      },
      {
        id: "fintech_platform",
        label: "A micro-investing fintech platform for emerging green tech enterprises",
        icon: "Sparkles",
        branches: ["abs_mca"]
      }
    ]
  }
];

export const INNOVATIONS = [
  {
    id: "formula_car",
    title: "Amal Jyothi Racing (AJR) — Formula Student",
    category: "Motorsport & Automotive Engineering",
    stat: "National Podiums",
    description: "Designed, engineered, and built completely in-house by AJCE students. Features custom tubular spaceframe chassis, aerodynamic CFD wings, and real-time electronic telemetry.",
    metric: "0-100 km/h in 3.9s",
    badge: "Student Fabricated"
  },
  {
    id: "solar_plant",
    title: "500 kW Rooftop Solar Power Plant",
    category: "Green Energy & Sustainability",
    stat: "100% Green Microgrid",
    description: "One of the largest institutional solar installations in Kerala, feeding clean power to KSEB grid, backed by a 1,120 KVA diesel generator with ISO 14001 & 50001 certification.",
    metric: "7.2 Lakh Units/yr",
    badge: "Carbon Neutral"
  },
  {
    id: "two_tbis",
    title: "2 Technology Business Incubators (TBIs)",
    category: "Startup Ecosystem & Entrepreneurship",
    stat: "95+ Startups",
    description: "Supported by Department of Science & Technology (Govt. of India), offering seed grants up to ₹50 Lakhs, fab labs, legal IP guidance, and venture demo days.",
    metric: "₹12 Cr+ Raised",
    badge: "DST Govt. of India"
  },
  {
    id: "idea_lab",
    title: "AICTE IDEA Lab & Central Fab Lab",
    category: "Rapid Prototyping & Maker Movement",
    stat: "1 of 49 in India",
    description: "One of only 49 prestigious IDEA Labs sanctioned nationwide by AICTE. Equipped with laser cutters, 3D printers, 5-axis CNCs, and advanced IoT testing instrumentation.",
    metric: "300+ Prototypes",
    badge: "AICTE Funded"
  }
];

export const CAMPUS_HOTSPOTS = [
  {
    id: "knowledge_centre",
    name: "Central Knowledge Centre (Digital Library)",
    subtitle: "60,000+ volumes, IEEE digital access & silent carrels",
    description: "A multi-storey architectural jewel overlooking the Western Ghats. Features 24/7 digital journal subscriptions, private research carrels, and 2.10 Gbps Wi-Fi access.",
    category: "Academic",
    badge: "60,000+ Titles"
  },
  {
    id: "hostels",
    name: "Sanjo & Amala Modern Residence Halls",
    subtitle: "2,500+ resident capacity (Ladies 1,200 · Gents 1,300)",
    description: "Comfortable twin/triple sharing rooms, multi-cuisine dining options, recreation lounges, high-speed fiber connectivity, and around-the-clock security.",
    category: "Residential",
    badge: "2,500 Capacity"
  },
  {
    id: "skywalk",
    name: "500-Meter Elevated Skywalk",
    subtitle: "World Record elevated walkway connecting campus blocks",
    description: "An iconic glass-and-steel architectural engineering feat that safely connects the main academic complexes across scenic hilltop contours.",
    category: "Engineering Marvel",
    badge: "World Record"
  },
  {
    id: "driving_academy",
    name: "Amal Jyothi Driving Academy",
    subtitle: "Kerala's first college-run certified driving school",
    description: "Students earn valid 4-wheeler and 2-wheeler government driving licenses conveniently on campus with dual-control vehicles and certified instructors.",
    category: "Unique Feature",
    badge: "Govt Certified"
  },
  {
    id: "sports_complex",
    name: "International Sports Complex & Synthetic Turf",
    subtitle: "Floodlit football turf, indoor badminton courts & gymnasiums",
    description: "State-of-the-art sports pavilion hosting 'Arena', the prestigious All-Kerala inter-collegiate tournament, plus basketball courts and fitness facilities.",
    category: "Athletics",
    badge: "Floodlit Turf"
  }
];

// Ecosystem Partners & Centers of Excellence from ajce.in Array W
export const INDUSTRY_PARTNERS = [
  { name: "Eicher Centre of Excellence", type: "Automotive CoE" },
  { name: "Yamaha Training Centre", type: "Two-Wheeler CoE" },
  { name: "Royal Enfield Training Cell", type: "Motorcycle Engineering" },
  { name: "Bosch Automotive Centre", type: "Automotive Electronics" },
  { name: "JK Tyre Tech Centre", type: "Material Testing" },
  { name: "AWS Academy", type: "Cloud Computing" },
  { name: "Microsoft Azure Edu Hub", type: "Cloud & AI" },
  { name: "Google Cloud Edu Grant", type: "Cloud Infrastructure" },
  { name: "GitHub Education", type: "Developer Community" },
  { name: "Red Hat Academy", type: "Open Source Enterprise" },
  { name: "Oracle Academy", type: "Databases & Java" },
  { name: "VMware IT Academy", type: "Virtualization" },
  { name: "EC-Council", type: "Cybersecurity" },
  { name: "Infosys Springboard", type: "Digital Learning" },
  { name: "GDG on Campus (GDSC)", type: "Google Developer Groups" },
  { name: "IEEE Student Branch", type: "Global Engineering Society" },
  { name: "ACM Student Chapter", type: "Computing Machinery" }
];

export const RECRUITERS = [
  { name: "Amazon", role: "SDE / Cloud Architect", tier: "Dream" },
  { name: "Microsoft", role: "SWE / Cloud Solutions", tier: "Dream" },
  { name: "Bosch", role: "Embedded & Automotive", tier: "Core" },
  { name: "Federal Bank", role: "Probationary Officers & IT", tier: "Banking" },
  { name: "Infosys", role: "System Engineers & Digital", tier: "Premier" },
  { name: "TCS Digital", role: "Digital Innovator & Prime", tier: "Premier" },
  { name: "Cognizant", role: "GenC Next & Elevate", tier: "Premier" },
  { name: "UST", role: "Software & AI Solutions", tier: "Premier" },
  { name: "IBM", role: "Cloud & Cognitive Software", tier: "Dream" },
  { name: "Tata Elxsi", role: "Automotive & Design", tier: "Core" },
  { name: "MRF Tyres", role: "Core Mechanical & Chem", tier: "Core" },
  { name: "Hexaware", role: "Full Stack & Cloud", tier: "Premier" },
  { name: "IBS Software", role: "Aviation & Travel Tech", tier: "Product" },
  { name: "Experion", role: "Product Development", tier: "Product" },
  { name: "EY", role: "Tech Consulting", tier: "Consulting" }
];

export const TESTIMONIALS = [
  {
    name: "Anjali S. Nair",
    batch: "CSE (2024)",
    company: "Amazon AWS (Cloud Engineer)",
    package: "₹18.5 LPA",
    quote: "The autonomous curriculum at AJCE allowed us to master cloud systems, microservices, and live open-source frameworks. The placement training gave me the exact edge needed for AWS.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Mathew Varghese",
    batch: "Mechanical (2023)",
    company: "Bosch Mobility Solutions",
    package: "₹14.2 LPA",
    quote: "Building the Formula Student racecar at the Amal Jyothi Racing workshop and testing on the Eicher Dyno was the defining experience of my career. Recruiters were amazed by our telemetry data.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Nandana Rajesh",
    batch: "AI & DS (2025)",
    company: "Founder, BioSense AI (TBI Incubated)",
    package: "₹50L Seed Grant",
    quote: "Having 2 DST-funded incubators and the AICTE IDEA Lab right on campus gave my team seed capital, IP patent assistance, and prototyping gear before we even completed our final year.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQS = [
  {
    q: "Is Amal Jyothi an Autonomous College?",
    a: "Yes! AJCE was conferred Autonomous status by the UGC on 6 July 2023. Affiliated to APJ Abdul Kalam Technological University (KTU), AJCE designs its own industry-driven curriculum with Honours, Minors, and flexible credit transfers."
  },
  {
    q: "What is the NAAC and NBA accreditation standing of AJCE?",
    a: "AJCE holds the prestigious NAAC 'A+' Grade accreditation and has 7 NBA Accredited programmes (Chemical, Civil, Computer Science, Electronics & Comm., Electrical & Electronics, Mechanical, and MCA)."
  },
  {
    q: "What are the scholarship criteria for KEAM rank holders?",
    a: "Students with top KEAM ranks receive massive tuition fee discounts: KEAM rank < 2,000 gets up to 100% tuition waiver (Diocesan Platinum Award), rank ≤ 5,000 gets 75% waiver, and ranks up to 10,000 receive 50% tuition concessions."
  },
  {
    q: "What international pathways are available at AJCE?",
    a: "AJCE offers dual-destination pathways: (1) India · USA: 1-Year PG Certificate in AI&DS at AJCE + 1-Year Master's Degree at Elmhurst University USA; and (2) India · Australia: 3.5 Years B.Tech at AJCE + Joint Semester Project + 2-Year Master's at James Cook University Australia."
  },
  {
    q: "What are the hostel and campus facilities like?",
    a: "The 68-acre residential campus houses over 2,500 students in modern hostels (Ladies 1,200 · Gents 1,300), 2.10 Gbps internet with 1,400+ PCs, 500 kW solar farm, 500-meter Skywalk, and Kerala's first college-run Driving Academy."
  },
  {
    q: "How can I contact admissions directly for B.Tech, M.Tech, BBA, or MCA?",
    a: "Call our dedicated admissions helplines: B.Tech: +91 9072661600 | M.Tech: +91 951 66 66 000 | BBA: +91 907 45 57 708 | BCA/MCA: +91 860 63 09 393 | Email: info@ajce.in"
  }
];
