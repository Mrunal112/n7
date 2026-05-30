export const navLinks = [
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Resources", href: "#insights", hasDropdown: true },
  { label: "About Us", href: "#footer", hasDropdown: false },
] as const;

export const trustedByLogos = [
  "SHELLS",
  "SmartFinder",
  "Zoomerr",
  "ArtVenue",
  "kontrastr",
  "WAVESMARATHON",
] as const;

export const solutions = [
  {
    id: "cb7",
    title: "Core Banking CB7",
    tag: null,
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    href: "#cb7",
    icon: "core" as const,
  },
  {
    id: "n7",
    title: "Digital Banking N7",
    tag: null,
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    href: "#digital-banking",
    icon: "digital" as const,
  },
  {
    id: "open",
    title: "Open Banking",
    tag: null,
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    href: "#solutions",
    icon: "open" as const,
  },
  {
    id: "los",
    title: "Loan Origination System",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    href: "#solutions",
    icon: "loan-orig" as const,
  },
  {
    id: "lms",
    title: "Loan Management System",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    href: "#solutions",
    icon: "loan-mgmt" as const,
  },
] as const;

export const cb7Features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
] as const;

export const regulatoryChecks = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
] as const;

export const legacyChecks = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
] as const;

export const branchlessChecks = [
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
] as const;

export const insightsArticles = [
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: true,
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: false,
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: false,
  },
] as const;

export const caseStudies = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    client: "Zoomerr",
  },
  {
    category: "DIGITAL TRANSFORMATION",
    title: "Scaling branchless banking across regions",
    client: "SmartFinder",
  },
  {
    category: "CORE BANKING",
    title: "Modernizing legacy systems with CB7",
    client: "ArtVenue",
  },
] as const;

export const footerOffices = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.",
  },
  {
    city: "Pune",
    address:
      "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
  },
] as const;

export const footerLinks = {
  solutions: [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ],
  banking: [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
  ],
  socials: ["LinkedIn", "X"],
} as const;
