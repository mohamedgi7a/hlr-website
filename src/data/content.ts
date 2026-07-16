import type { Locale } from "@/lib/i18n";

export type LocalText = { ar: string; en: string };
export type IconName =
  | "search"
  | "file"
  | "users"
  | "settings"
  | "chart"
  | "shield"
  | "target"
  | "handshake"
  | "headphones"
  | "sparkles"
  | "building"
  | "factory"
  | "health"
  | "education"
  | "finance"
  | "tech"
  | "hospitality"
  | "store"
  | "eye"
  | "message"
  | "briefcase";

export const t = (value: LocalText, locale: Locale) => value[locale];

export const navigation = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/about", label: { ar: "من نحن", en: "About" } },
  { href: "/services", label: { ar: "خدماتنا", en: "Services" } },
  { href: "/sectors", label: { ar: "القطاعات", en: "Sectors" } },
  { href: "/process", label: { ar: "آلية عملنا", en: "Our Process" } },
  { href: "/partners", label: { ar: "شركاء النجاح", en: "Partners" } },
  { href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } }
] as const;

export const hero = {
  eyebrow: { ar: "حلول توريد وتشغيل القوى العاملة في المملكة", en: "Workforce supply and operations across Saudi Arabia" },
  fixed: { ar: "نوفر لك", en: "We provide" },
  lines: [
    { ar: "العمالة المناسبة لاحتياجك", en: "the right workforce for your needs" },
    { ar: "فرقًا جاهزة تدعم تشغيلك", en: "teams ready to support operations" },
    { ar: "كفاءات متخصصة لكل قطاع", en: "specialized talent for every sector" },
    { ar: "حلولًا مرنة تنمو مع أعمالك", en: "flexible solutions that grow with you" }
  ],
  paragraph: {
    ar: "نحدد احتياج منشأتك، نوفر الكفاءات المناسبة، ونتابع جودة الأداء بعد بدء العمل؛ من فريق واحد إلى حلول تشغيل متكاملة لمختلف القطاعات.",
    en: "We define your needs, supply the right people, and follow performance after deployment—from a single team to integrated workforce operations."
  },
  primary: { ar: "اطلب استشارة", en: "Request a Consultation" },
  secondary: { ar: "استكشف خدماتنا", en: "Explore Our Services" },
  cardTitle: { ar: "فرق مختارة وجاهزة للتشغيل", en: "Selected, deployment-ready teams" },
  cardText: { ar: "اختيار، توريد، ومتابعة مستمرة", en: "Select, supply, and continuously support" },
  imageAlt: {
    ar: "مشرف سعودي مع فريق عمالة محترف يحمل هوية شركة HLR",
    en: "A Saudi supervisor with a professional HLR-branded workforce"
  }
} as const;

export const trustPoints: LocalText[] = [
  { ar: "اختيار دقيق", en: "Precise selection" },
  { ar: "تنفيذ مرن", en: "Flexible delivery" },
  { ar: "متابعة مستمرة", en: "Continuous support" },
  { ar: "شراكة طويلة الأمد", en: "Long-term partnership" }
];

export const whyItems: Array<{ icon: IconName; title: LocalText; description: LocalText }> = [
  {
    icon: "eye",
    title: { ar: "فهم دقيق لاحتياجاتكم", en: "A precise understanding" },
    description: {
      ar: "نبدأ بتحليل متطلبات المنشأة وطبيعة القطاع قبل اقتراح أي حل.",
      en: "We analyze your organization and sector before recommending a solution."
    }
  },
  {
    icon: "search",
    title: { ar: "كفاءات مختارة بعناية", en: "Carefully selected talent" },
    description: {
      ar: "نبحث ونفرز ونقيّم المرشحين وفق متطلبات الوظيفة ومعايير الجودة.",
      en: "We source, screen, and assess candidates against role and quality requirements."
    }
  },
  {
    icon: "settings",
    title: { ar: "حلول مرنة ومخصصة", en: "Flexible, tailored solutions" },
    description: {
      ar: "نصمم الخدمة وفق حجم العمل والقطاع والمدة والاحتياج الفعلي.",
      en: "We shape each service around your scale, sector, timeline, and real needs."
    }
  },
  {
    icon: "users",
    title: { ar: "فريق عمل متخصص", en: "A specialized team" },
    description: {
      ar: "يدير كل مرحلة فريق يمتلك الخبرة في الاستقطاب والتوظيف والمتابعة.",
      en: "Experienced specialists manage every stage, from sourcing to follow-up."
    }
  },
  {
    icon: "headphones",
    title: { ar: "دعم متواصل وجودة مضمونة", en: "Continuous support" },
    description: {
      ar: "نستمر في المتابعة بعد التوظيف لدعم استقرار الخدمة وتحقيق النتائج المطلوبة.",
      en: "We stay engaged after placement to support stability and service quality."
    }
  }
];

export const services: Array<{
  slug: string;
  icon: IconName;
  title: LocalText;
  description: LocalText;
  image: string;
  imageAlt: LocalText;
  problems: LocalText[];
  deliverables: LocalText[];
}> = [
  {
    slug: "human-resources-organizational-consulting",
    icon: "settings",
    title: { ar: "إدارة الموارد البشرية والاستشارات التنظيمية", en: "Human Resources & Organizational Consulting" },
    description: {
      ar: "ندير عمليات الموارد البشرية في منشأتك داخل المملكة وفق نظام العمل السعودي، من التوظيف وإدارة الموظفين إلى تقييم الأداء وتطوير السياسات الداخلية، مع استشارات تنظيمية تدعم الامتثال والاستقرار الوظيفي.",
      en: "We manage HR operations in Saudi Arabia—from recruitment and employee administration to performance management, internal policies, compliance, and organizational stability."
    },
    image: "/images/services/human-resources-organizational-consulting.webp",
    imageAlt: { ar: "فريق موارد بشرية سعودي يناقش الهيكل التنظيمي وإدارة الموظفين", en: "A Saudi HR team discussing organizational structure and employee management" },
    problems: [
      { ar: "تشتت إجراءات الموارد البشرية والسياسات الداخلية", en: "Fragmented HR procedures and internal policies" },
      { ar: "الحاجة إلى مواءمة الممارسات مع نظام العمل السعودي", en: "Need to align practices with Saudi labor regulations" }
    ],
    deliverables: [
      { ar: "تشخيص وتنظيم عمليات الموارد البشرية", en: "HR process assessment and organization" },
      { ar: "سياسات وإجراءات داخلية واضحة", en: "Clear internal policies and procedures" },
      { ar: "دعم الأداء والامتثال والاستقرار الوظيفي", en: "Performance, compliance, and workforce stability support" }
    ]
  },
  {
    slug: "business-setup-misa-licensing",
    icon: "building",
    title: { ar: "تأسيس الشركات والحصول على التراخيص", en: "Business Setup & MISA Licensing" },
    description: {
      ar: "نساعد شركتك في دخول السوق السعودي عبر تأسيس كيان رسمي معتمد لدى وزارة الاستثمار السعودية (MISA)، وإصدار التراخيص الاستثمارية والسجل التجاري والربط مع الجهات الحكومية.",
      en: "We help your company enter the Saudi market through MISA licensing, legal entity setup, commercial registration, and coordinated government registrations."
    },
    image: "/images/services/business-setup-misa-licensing.webp",
    imageAlt: { ar: "فريق أعمال سعودي يراجع وثائق تأسيس شركة والتراخيص الرسمية", en: "A Saudi business team reviewing company setup and licensing documents" },
    problems: [
      { ar: "تعدد متطلبات دخول السوق والجهات الرسمية", en: "Complex market-entry and authority requirements" },
      { ar: "الحاجة إلى مسار تأسيس متوافق وسريع", en: "Need for a compliant and efficient setup path" }
    ],
    deliverables: [
      { ar: "ترخيص وزارة الاستثمار وتأسيس الكيان", en: "MISA licensing and legal entity setup" },
      { ar: "إصدار السجل والتراخيص المطلوبة", en: "Commercial registration and required licenses" },
      { ar: "تنسيق التسجيل والربط مع الجهات الحكومية", en: "Government registration and integration coordination" }
    ]
  },
  {
    slug: "government-relations-compliance",
    icon: "file",
    title: { ar: "العلاقات الحكومية والامتثال", en: "Government Relations & Compliance" },
    description: {
      ar: "ندير معاملاتك الحكومية من خلال فريق علاقات حكومية محترف، بما يشمل التأشيرات والإقامات ونقل الكفالات وتجديد الرخص وتحديث السجلات والتوافق مع المنصات الرسمية.",
      en: "Our GRO team manages visas, residency permits, sponsorship transfers, license renewals, record updates, and compliance across official Saudi platforms."
    },
    image: "/images/services/government-relations-compliance.webp",
    imageAlt: { ar: "فريق سعودي يراجع معاملات حكومية ووثائق الامتثال", en: "A Saudi team reviewing government transactions and compliance documents" },
    problems: [
      { ar: "تعدد المنصات والمعاملات الحكومية", en: "Multiple government platforms and transactions" },
      { ar: "مخاطر التأخير أو عدم الامتثال", en: "Risk of delays or non-compliance" }
    ],
    deliverables: [
      { ar: "إدارة التأشيرات والإقامات ونقل الخدمات", en: "Visa, residency, and sponsorship services" },
      { ar: "تجديد الرخص وتحديث السجلات", en: "License renewals and record updates" },
      { ar: "متابعة قوى ومقيم والتأمينات الاجتماعية", en: "Qiwa, Muqeem, and GOSI coordination" }
    ]
  },
  {
    slug: "payroll-wage-protection",
    icon: "finance",
    title: { ar: "إدارة الرواتب وحماية الأجور", en: "Payroll Management & Wage Protection System" },
    description: {
      ar: "نقدم نظامًا متكاملًا لإدارة الرواتب بدقة وشفافية ومتوافقًا مع نظام حماية الأجور (WPS)، من احتساب الرواتب والاستقطاعات إلى الملفات البنكية والتكامل الحكومي والمالي.",
      en: "We deliver accurate, transparent payroll administration aligned with WPS, including calculations, deductions, bank files, and government and finance-system integration."
    },
    image: "/images/services/payroll-wage-protection.webp",
    imageAlt: { ar: "فريق مالي سعودي يدير الرواتب ونظام حماية الأجور", en: "A Saudi finance team managing payroll and wage protection" },
    problems: [
      { ar: "أخطاء الرواتب والاستقطاعات والملفات البنكية", en: "Payroll, deduction, and bank-file errors" },
      { ar: "الحاجة إلى الالتزام بنظام حماية الأجور", en: "Need to maintain WPS compliance" }
    ],
    deliverables: [
      { ar: "احتساب ومراجعة الرواتب والاستقطاعات", en: "Payroll and deduction calculation and review" },
      { ar: "إعداد الملفات البنكية ونظام حماية الأجور", en: "Bank files and WPS preparation" },
      { ar: "تقارير وتكاملات مالية منظمة", en: "Structured reporting and financial integrations" }
    ]
  },
  {
    slug: "legal-consulting-corporate-governance",
    icon: "shield",
    title: { ar: "الاستشارات القانونية والحوكمة", en: "Legal Consulting & Corporate Governance" },
    description: {
      ar: "نقدم دعمًا قانونيًا متكاملًا لتأسيس وتشغيل شركتك في المملكة، يشمل صياغة العقود وسياسات الامتثال ومتابعة الأنظمة والتشريعات المحلية والحوكمة المؤسسية.",
      en: "We provide integrated legal support for operating in Saudi Arabia, including contracts, compliance policies, regulatory monitoring, and sound corporate governance."
    },
    image: "/images/services/legal-consulting-corporate-governance.webp",
    imageAlt: { ar: "فريق قانوني سعودي يناقش الحوكمة والامتثال المؤسسي", en: "A Saudi legal team discussing governance and corporate compliance" },
    problems: [
      { ar: "الحاجة إلى عقود وسياسات متوافقة مع الأنظمة", en: "Need for compliant contracts and policies" },
      { ar: "تغير المتطلبات النظامية ومخاطر الحوكمة", en: "Changing regulations and governance risks" }
    ],
    deliverables: [
      { ar: "صياغة ومراجعة العقود", en: "Contract drafting and review" },
      { ar: "سياسات امتثال وحوكمة مؤسسية", en: "Compliance and corporate governance policies" },
      { ar: "متابعة الأنظمة والتشريعات المحلية", en: "Monitoring Saudi laws and regulations" }
    ]
  },
  {
    slug: "accounting-tax-zatca-integration",
    icon: "chart",
    title: { ar: "المحاسبة والضرائب والتكامل مع الزكاة", en: "Accounting, Tax & ZATCA Integration" },
    description: {
      ar: "ندير حساباتك المالية والضريبية بتكامل مباشر مع هيئة الزكاة والضريبة والجمارك (ZATCA)، بما يشمل الفواتير الإلكترونية وضريبة القيمة المضافة وتقديم الإقرارات.",
      en: "We manage accounting and tax operations with ZATCA integration, including e-invoicing, VAT calculation, and organized filing of tax returns."
    },
    image: "/images/services/accounting-tax-zatca-integration.webp",
    imageAlt: { ar: "فريق محاسبة سعودي يراجع الضرائب والفواتير الإلكترونية", en: "A Saudi accounting team reviewing tax and e-invoicing records" },
    problems: [
      { ar: "تعقيد الالتزامات المحاسبية والضريبية", en: "Complex accounting and tax obligations" },
      { ar: "الحاجة إلى تكامل دقيق مع متطلبات ZATCA", en: "Need for accurate ZATCA integration" }
    ],
    deliverables: [
      { ar: "إدارة الحسابات والقيود المالية", en: "Accounting and financial records management" },
      { ar: "الفوترة الإلكترونية وضريبة القيمة المضافة", en: "E-invoicing and VAT management" },
      { ar: "إعداد وتقديم الإقرارات الضريبية", en: "Tax return preparation and filing" }
    ]
  },
  {
    slug: "business-consulting-services",
    icon: "briefcase",
    title: { ar: "الاستشارات الإدارية والمالية", en: "Business Consulting Services" },
    description: {
      ar: "نقدم استشارات استراتيجية تساعد شركتك على فهم السوق السعودي، وتشمل دراسات السوق وتحليل التكلفة التشغيلية وهيكلة الأعمال ووضع خطط دخول وتشغيل فعالة.",
      en: "Our strategic consulting helps you understand the Saudi market through market studies, operating-cost analysis, business structuring, and effective entry and operating plans."
    },
    image: "/images/services/business-consulting-services.webp",
    imageAlt: { ar: "فريق استشارات سعودي يناقش استراتيجية النمو والأداء المالي", en: "A Saudi consulting team discussing growth strategy and financial performance" },
    problems: [
      { ar: "نقص الرؤية الواضحة للسوق والتكاليف", en: "Limited clarity on the market and operating costs" },
      { ar: "الحاجة إلى نموذج تشغيل وخطة نمو قابلة للتنفيذ", en: "Need for an actionable operating and growth plan" }
    ],
    deliverables: [
      { ar: "دراسات سوق وتحليل جدوى تشغيلية", en: "Market studies and operational feasibility analysis" },
      { ar: "هيكلة الأعمال وتحليل التكاليف", en: "Business structuring and cost analysis" },
      { ar: "خطة دخول وتشغيل ونمو", en: "Market-entry, operations, and growth plan" }
    ]
  },
  {
    slug: "manpower-outsourcing",
    icon: "users",
    title: { ar: "خدمات التشغيل والاستقدام", en: "Manpower & Outsourcing" },
    description: {
      ar: "نوفر القوى العاملة المؤهلة لتشغيل مشاريعك داخل المملكة، مع إدارة شاملة للاستقدام والتأشيرات والإقامات والرواتب والإشراف الميداني ضمن حلول مرنة تناسب نشاطك.",
      en: "We supply qualified manpower for projects across Saudi Arabia, with end-to-end recruitment, visas, residency, payroll, and field supervision through flexible outsourcing models."
    },
    image: "/images/services/manpower-outsourcing.webp",
    imageAlt: { ar: "فريق توظيف سعودي مع كوادر مهنية من قطاعات متعددة", en: "A Saudi recruitment team with professional workers from multiple sectors" },
    problems: [
      { ar: "صعوبة توفير كوادر جاهزة للتشغيل بسرعة", en: "Difficulty mobilizing qualified workers quickly" },
      { ar: "تعدد مسؤوليات الاستقدام والتشغيل والمتابعة", en: "Complex recruitment, mobilization, and follow-up responsibilities" }
    ],
    deliverables: [
      { ar: "استقدام وتوريد القوى العاملة المؤهلة", en: "Recruitment and supply of qualified manpower" },
      { ar: "إدارة التأشيرات والإقامات والرواتب", en: "Visa, residency, and payroll administration" },
      { ar: "إشراف ميداني ومتابعة مستمرة", en: "Field supervision and ongoing follow-up" }
    ]
  }
];

export const story = [
  {
    key: "about",
    tab: { ar: "نبذة", en: "About" },
    title: { ar: "شريك يفهم احتياج منشأتك", en: "A partner who understands your needs" },
    text: {
      ar: "تأسست شركة الحلول للموارد البشرية لتخفف عن المنشآت عبء البحث عن الكفاءات المناسبة. نفهم طبيعة الاحتياج، ونختار المرشحين بعناية، ونوفر حلولًا تلائم مختلف القطاعات والأعمال، لنضع الشخص المناسب في المكان المناسب.",
      en: "HLR was established to reduce the burden of finding the right talent. We understand each need, select candidates carefully, and provide solutions suited to different sectors and operations."
    },
    image: "/images/story-saudi-workforce.webp"
  },
  {
    key: "vision",
    tab: { ar: "الرؤية", en: "Vision" },
    title: { ar: "نحو مستقبل أكثر كفاءة واستدامة", en: "Toward a more efficient, sustainable future" },
    text: {
      ar: "أن نكون الشريك الرائد في تقديم حلول مبتكرة ومستدامة في مجال الموارد البشرية، بما يسهم في تحقيق مستهدفات رؤية المملكة 2030.",
      en: "To be a leading partner in innovative and sustainable HR solutions that contribute to the goals of Saudi Vision 2030."
    },
    image: "/images/strategy-saudi-team.webp"
  },
  {
    key: "message",
    tab: { ar: "الرسالة", en: "Mission" },
    title: { ar: "حلول متكاملة تحقق أهداف المنشآت", en: "Integrated solutions that advance business goals" },
    text: {
      ar: "تقديم حلول موارد بشرية متكاملة تمكّن المنشآت من تحقيق أهدافها من خلال استقطاب وتطوير أفضل الكفاءات وفق أعلى معايير الجودة.",
      en: "To deliver integrated HR solutions that help organizations achieve their goals through strong talent and quality-led execution."
    },
    image: "/images/hero-saudi-workforce.webp"
  },
  {
    key: "task",
    tab: { ar: "المهمة", en: "Purpose" },
    title: { ar: "كفاءات مؤهلة لمختلف القطاعات", en: "Qualified talent across sectors" },
    text: {
      ar: "استقطاب العمالة المدربة باحتراف وكفاءة من مختلف الجنسيات والمهن، وتوفيرها للشركات والمنشآت في سوق العمل بالمملكة وفق أعلى معايير الجودة.",
      en: "To source trained, capable professionals across roles and backgrounds for organizations operating in the Saudi market."
    },
    image: "/images/story-saudi-workforce.webp"
  },
  {
    key: "goals",
    tab: { ar: "الأهداف", en: "Goals" },
    title: { ar: "نتائج مستدامة تبدأ بالإنسان", en: "Sustainable results begin with people" },
    text: {
      ar: "نسرّع وصول المنشآت إلى الكفاءات المناسبة، ونقدم حلولًا مرنة، ونرفع جودة الاستقطاب والتوظيف، ونبني شراكات طويلة الأمد قائمة على الثقة.",
      en: "We accelerate access to suitable talent, improve recruitment quality, provide flexible solutions, and build long-term partnerships based on trust."
    },
    image: "/images/strategy-saudi-team.webp"
  }
] as const;

export const sectors: Array<{ icon: IconName; title: LocalText; description: LocalText; image: string }> = [
  { icon: "building", title: { ar: "القطاع الحكومي", en: "Government" }, description: { ar: "توريد فرق تدعم الأعمال الإدارية والتشغيلية للجهات العامة.", en: "Workforce teams for administrative and operational public-sector needs." }, image: "/images/sector-government-saudi.webp" },
  { icon: "factory", title: { ar: "القطاع الصناعي", en: "Industrial" }, description: { ar: "عمالة وكفاءات تلائم بيئات المصانع والإنتاج والتشغيل.", en: "Workforce for manufacturing, production, and industrial operations." }, image: "/images/sector-industry-saudi.webp" },
  { icon: "health", title: { ar: "القطاع الصحي", en: "Healthcare" }, description: { ar: "فرق دعم مؤهلة لبيئات الرعاية والخدمات الصحية.", en: "Qualified support teams for care and healthcare services." }, image: "/images/sector-health-saudi.webp" },
  { icon: "education", title: { ar: "التعليم والتدريب", en: "Education & Training" }, description: { ar: "كوادر للمؤسسات التعليمية ومراكز التدريب.", en: "Workforce for educational institutions and training providers." }, image: "/images/sector-education-saudi.webp" },
  { icon: "finance", title: { ar: "القطاع المالي", en: "Financial Services" }, description: { ar: "كفاءات تدعم الدقة والامتثال وكفاءة الأعمال.", en: "Talent that supports precision, compliance, and business efficiency." }, image: "/images/sector-finance-saudi.webp" },
  { icon: "tech", title: { ar: "تقنية المعلومات", en: "Information Technology" }, description: { ar: "فرق تقنية تلائم التحول الرقمي والتشغيل الحديث.", en: "Technology teams for digital transformation and modern operations." }, image: "/images/sector-tech-saudi.webp" },
  { icon: "hospitality", title: { ar: "الضيافة والسياحة", en: "Hospitality & Tourism" }, description: { ar: "توريد فرق ضيافة تركز على جودة التجربة والخدمة.", en: "Hospitality teams focused on service and guest experience." }, image: "/images/sector-hospitality-saudi.webp" },
  { icon: "store", title: { ar: "القطاع التجاري", en: "Commercial" }, description: { ar: "عمالة مرنة لعمليات البيع والتجزئة والخدمات.", en: "Flexible workforce for retail, sales, and service operations." }, image: "/images/sector-commercial-saudi.webp" }
];

export const processSteps = [
  { icon: "target" as IconName, title: { ar: "تحليل الاحتياج", en: "Needs Analysis" }, description: { ar: "نفهم طبيعة المنشأة والقطاع والمهارات المطلوبة قبل بدء البحث.", en: "We understand your organization, sector, and required capabilities before we begin." } },
  { icon: "search" as IconName, title: { ar: "البحث والفرز", en: "Sourcing & Screening" }, description: { ar: "نبحث عن المرشحين ونراجع الخبرات ونستبعد الخيارات غير المناسبة.", en: "We source candidates, review experience, and filter out unsuitable profiles." } },
  { icon: "message" as IconName, title: { ar: "المقابلة والتقييم", en: "Interview & Assessment" }, description: { ar: "نقيّم الكفاءة والخبرة ومدى توافق المرشح مع متطلبات العمل.", en: "We assess capability, experience, and fit against the role requirements." } },
  { icon: "briefcase" as IconName, title: { ar: "التوظيف", en: "Placement" }, description: { ar: "ندير إجراءات الاختيار والتعاقد بصورة منظمة وواضحة.", en: "We manage selection and contracting through a clear, structured process." } },
  { icon: "shield" as IconName, title: { ar: "متابعة ما بعد التوظيف", en: "Post-Placement Support" }, description: { ar: "نتابع جودة الأداء واستقرار الخدمة بعد بدء العمل.", en: "We follow performance and service stability after work begins." } }
];

export const values = [
  { title: { ar: "التميز", en: "Excellence" }, description: { ar: "نلتزم بمستويات عالية من الجودة والكفاءة لتحقيق أفضل النتائج.", en: "We maintain high standards of quality and efficiency." } },
  { title: { ar: "الالتزام", en: "Commitment" }, description: { ar: "نحترم وعودنا وننفذ الأعمال في الوقت والمستوى المتفق عليهما.", en: "We honor our commitments and agreed standards." } },
  { title: { ar: "الابتكار", en: "Innovation" }, description: { ar: "نطور حلولًا ذكية تواكب متغيرات سوق العمل.", en: "We evolve practical solutions with the changing labor market." } },
  { title: { ar: "الشفافية", en: "Transparency" }, description: { ar: "نتبنى الوضوح والصدق لبناء علاقات قائمة على الثقة.", en: "We communicate with clarity and build relationships on trust." } },
  { title: { ar: "الاحترافية", en: "Professionalism" }, description: { ar: "نعمل وفق معايير مهنية وأخلاقية يقودها فريق متخصص.", en: "We work to professional and ethical standards." } }
];

export const successStrategies = [
  { title: { ar: "تأهيل الكفاءات", en: "Talent Readiness" }, text: { ar: "تأهيل وتدريب الكوادر البشرية وفق متطلبات سوق العمل لضمان جاهزيتها للمهام المطلوبة.", en: "Preparing people around labor-market needs so they are ready for the work required." } },
  { title: { ar: "التحليل والحلول المخصصة", en: "Analysis & Tailored Solutions" }, text: { ar: "تحليل بيانات واحتياجات المنشآت لتقديم حلول عملية ومتكاملة تناسب طبيعة كل عميل.", en: "Analyzing business needs to create practical, integrated solutions for each client." } },
  { title: { ar: "تجربة عميل قائمة على الشراكة", en: "A Partnership-Led Experience" }, text: { ar: "بناء علاقات طويلة الأمد ترتكز على التواصل والرضا والثقة والمتابعة المستمرة.", en: "Building long-term relationships through communication, trust, and continuous support." } }
];

export const faqs = [
  { q: { ar: "ما الخدمات التي تقدمها HLR؟", en: "What services does HLR provide?" }, a: { ar: "نقدم إدارة الموارد البشرية، وتأسيس الشركات والتراخيص، والعلاقات الحكومية، والرواتب، والاستشارات القانونية والمالية، والمحاسبة والضرائب، وخدمات التشغيل والاستقدام.", en: "We provide HR management, business setup and licensing, government relations, payroll, legal and business consulting, accounting and tax, and manpower outsourcing." } },
  { q: { ar: "هل تقدمون حلولًا مخصصة حسب احتياج المنشأة؟", en: "Do you tailor solutions to each organization?" }, a: { ar: "نعم. نبدأ بفهم القطاع وحجم العمل وطبيعة الوظائف، ثم نبني الخدمة وفق الاحتياج الفعلي.", en: "Yes. We first understand your sector, operating scale, and roles, then shape the service around your actual needs." } },
  { q: { ar: "ما القطاعات التي تخدمونها؟", en: "Which sectors do you serve?" }, a: { ar: "نخدم القطاعات الحكومية والصناعية والصحية والتعليمية والمالية والتقنية والضيافة والقطاع التجاري.", en: "We serve government, industrial, healthcare, education, financial, technology, hospitality, and commercial sectors." } },
  { q: { ar: "كيف تبدأ عملية الاستقطاب والتوظيف؟", en: "How does recruitment begin?" }, a: { ar: "تبدأ بتحليل الاحتياج، ثم البحث والفرز، فالمقابلة والتقييم، وبعدها التوظيف والمتابعة.", en: "It begins with needs analysis, followed by sourcing and screening, assessment, placement, and follow-up." } },
  { q: { ar: "هل تشمل الخدمة المتابعة بعد التوظيف؟", en: "Do services include post-placement follow-up?" }, a: { ar: "نعم، تشمل خدماتنا المتابعة بعد مباشرة العمل لدعم الاستقرار وجودة الخدمة.", en: "Yes. Our post-placement support helps maintain stability and service quality." } },
  { q: { ar: "كيف يمكن طلب استشارة؟", en: "How can I request a consultation?" }, a: { ar: "يمكنك تعبئة نموذج طلب الاستشارة بتفاصيل منشأتك واحتياجك، وسيتلقى الفريق الطلب عبر قناة الإرسال المربوطة بالموقع.", en: "Complete the consultation form with your organization and requirements. The request will be delivered through the configured website channel." } }
];

export const labels = {
  ar: {
    whyEyebrow: "لماذا HLR؟",
    whyTitle: "لأن الحل الصحيح يبدأ بفهم احتياجك.",
    whyText: "نستمع إلى متطلبات منشأتك، نحلل طبيعة العمل، ثم نبني حلًا بشريًا مرنًا يحقق الجودة والكفاءة.",
    servicesEyebrow: "خدماتنا",
    servicesTitle: "حلول متكاملة لتأسيس أعمالك وإدارتها وتشغيلها في المملكة.",
    more: "اعرف المزيد",
    storyEyebrow: "قصتنا واتجاهنا",
    storyTitle: "نضع الإنسان في قلب كل حل نقدمه.",
    pause: "إيقاف التشغيل التلقائي",
    sectorsEyebrow: "القطاعات التي نخدمها",
    sectorsTitle: "حلول مرنة لمتطلبات كل قطاع.",
    sectorsText: "نقدم حلولًا تلائم طبيعة التشغيل ومتطلبات الكفاءات في قطاعات متعددة.",
    processEyebrow: "آلية عملنا",
    processTitle: "منهجية واضحة من الاحتياج إلى الاستقرار.",
    processText: "خمس مراحل مترابطة تضمن وضوح الاختيار وكفاءة التنفيذ والمتابعة.",
    valuesEyebrow: "قيمنا",
    valuesTitle: "مبادئ ثابتة توجه كل قرار.",
    successEyebrow: "نهجنا",
    successTitle: "استراتيجيات متطورة لنجاح مستدام",
    faqEyebrow: "الأسئلة الشائعة",
    faqTitle: "إجابات واضحة قبل أن تبدأ.",
    ctaTitle: "هل تبحث عن الكفاءات المناسبة؟",
    ctaText: "دعنا نفهم احتياج منشأتك ونبني لك حلًا مرنًا يدعم أعمالك ويحقق أهدافك.",
    consultation: "اطلب استشارة",
    contact: "تواصل معنا",
    trust: "استشارة أولية لفهم احتياجك وتحديد الحل الأنسب."
  },
  en: {
    whyEyebrow: "Why HLR",
    whyTitle: "Because the right solution starts with understanding.",
    whyText: "We listen, analyze the nature of your operation, and build a flexible people solution that advances quality and efficiency.",
    servicesEyebrow: "Our Services",
    servicesTitle: "Integrated solutions to set up, manage, and operate your business in Saudi Arabia.",
    more: "Learn more",
    storyEyebrow: "Our Story & Direction",
    storyTitle: "People are at the heart of every solution.",
    pause: "Pause automatic playback",
    sectorsEyebrow: "Sectors We Serve",
    sectorsTitle: "Flexible solutions for every sector.",
    sectorsText: "We adapt to the operating realities and talent requirements of multiple industries.",
    processEyebrow: "Our Process",
    processTitle: "A clear journey from need to stability.",
    processText: "Five connected stages that keep selection, delivery, and follow-up clear.",
    valuesEyebrow: "Our Values",
    valuesTitle: "Principles that guide every decision.",
    successEyebrow: "Our Approach",
    successTitle: "Progressive strategies for sustainable success",
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Clear answers before you begin.",
    ctaTitle: "Looking for the right talent?",
    ctaText: "Let us understand your needs and build a flexible solution that supports your operation and goals.",
    consultation: "Request a Consultation",
    contact: "Contact Us",
    trust: "An initial consultation to understand your needs and identify the right solution."
  }
} as const;
