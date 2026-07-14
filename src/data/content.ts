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
  eyebrow: { ar: "توريد عمالة احترافية... ندعم الأعمال", en: "Professional Workforce Supply. Business Support." },
  fixed: { ar: "نمكّن أعمالك", en: "Empower your business" },
  lines: [
    { ar: "بعمالة تلائم احتياجك", en: "With workforce built for your needs" },
    { ar: "بأفضل الكفاءات البشرية", en: "With the right human talent" },
    { ar: "بحلول موارد بشرية أكثر مرونة", en: "With flexible HR solutions" },
    { ar: "بشراكة تدعم نموك", en: "With a partner that supports growth" }
  ],
  paragraph: {
    ar: "نورّد العمالة والكفاءات المناسبة لمنشأتك، وندير رحلة الاستقطاب والتوظيف والمتابعة بحلول مرنة تلائم مختلف القطاعات في المملكة.",
    en: "We supply the right workforce for your organization and manage sourcing, recruitment, and follow-up through flexible solutions tailored to sectors across Saudi Arabia."
  },
  primary: { ar: "اطلب استشارة", en: "Request a Consultation" },
  secondary: { ar: "استكشف خدماتنا", en: "Explore Our Services" },
  cardTitle: { ar: "توريد كفاءات مختارة بعناية", en: "Carefully selected workforce" },
  cardText: { ar: "فرق جاهزة تناسب احتياج منشأتك", en: "Teams ready for your business needs" },
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
  problems: LocalText[];
  deliverables: LocalText[];
}> = [
  {
    slug: "workforce-supply",
    icon: "users",
    title: { ar: "توريد وتأجير العمالة والكفاءات", en: "Workforce Supply" },
    description: {
      ar: "توفير عمالة وكفاءات مؤهلة لمختلف المهن والقطاعات وفق حجم العمل ومتطلبات التشغيل.",
      en: "Provide qualified workforce across roles and sectors, aligned with your operational scale and requirements."
    },
    problems: [
      { ar: "الاحتياج إلى فرق مرنة حسب التشغيل", en: "Need for flexible operational teams" },
      { ar: "صعوبة تغطية تخصصات متنوعة", en: "Difficulty covering varied specializations" }
    ],
    deliverables: [
      { ar: "تحديد هيكل الفريق المطلوب", en: "Required team structure definition" },
      { ar: "اختيار الكفاءات المناسبة", en: "Selection of suitable talent" },
      { ar: "متابعة جودة الخدمة", en: "Ongoing service quality follow-up" }
    ]
  },
  {
    slug: "talent-acquisition",
    icon: "search",
    title: { ar: "استقطاب المواهب", en: "Talent Acquisition" },
    description: {
      ar: "البحث عن أفضل الكفاءات وفرزها وتقييمها وفق احتياجات منشأتك وطبيعة الوظيفة.",
      en: "Source, screen, and assess strong talent based on your role and business requirements."
    },
    problems: [
      { ar: "صعوبة الوصول إلى المرشحين المناسبين", en: "Difficulty reaching relevant candidates" },
      { ar: "تفاوت جودة الفرز الأولي", en: "Inconsistent initial screening quality" }
    ],
    deliverables: [
      { ar: "تحليل متطلبات الوظيفة", en: "Role requirement analysis" },
      { ar: "بحث وفرز وتقييم المرشحين", en: "Candidate sourcing, screening, and assessment" },
      { ar: "قائمة مختصرة واضحة", en: "A focused, qualified shortlist" }
    ]
  },
  {
    slug: "recruitment-contracting",
    icon: "file",
    title: { ar: "التوظيف والتعاقد", en: "Recruitment & Contracting" },
    description: {
      ar: "إدارة إجراءات التوظيف والتعاقد بصورة منظمة ومرنة تضمن وضوح العملية وسرعة الإنجاز.",
      en: "Manage recruitment and contracting through a structured, flexible, and transparent process."
    },
    problems: [
      { ar: "تعدد مراحل التوظيف وتشتت المتابعة", en: "Fragmented recruitment workflows" },
      { ar: "بطء التنسيق بين الأطراف", en: "Slow coordination between stakeholders" }
    ],
    deliverables: [
      { ar: "تنسيق مراحل الاختيار", en: "Selection-stage coordination" },
      { ar: "تنظيم إجراءات التعاقد", en: "Structured contracting procedures" },
      { ar: "متابعة واضحة لحالة الطلب", en: "Clear application status tracking" }
    ]
  },
  {
    slug: "hr-management",
    icon: "settings",
    title: { ar: "إدارة الموارد البشرية", en: "HR Management" },
    description: {
      ar: "حلول تساعد المنشآت على تنظيم عمليات الموارد البشرية ورفع كفاءتها التشغيلية.",
      en: "Practical solutions that organize HR operations and improve operational efficiency."
    },
    problems: [
      { ar: "عدم وضوح الإجراءات الداخلية", en: "Unclear internal HR processes" },
      { ar: "هدر الوقت في الأعمال التشغيلية", en: "Time lost to manual HR operations" }
    ],
    deliverables: [
      { ar: "مراجعة العمليات الحالية", en: "Current process review" },
      { ar: "تنظيم سير العمل", en: "Workflow organization" },
      { ar: "حلول تشغيلية قابلة للتطبيق", en: "Actionable operating solutions" }
    ]
  },
  {
    slug: "consulting",
    icon: "chart",
    title: { ar: "الدراسات والاستشارات", en: "HR Studies & Consulting" },
    description: {
      ar: "تحليل احتياجات الموارد البشرية وتقديم توصيات وحلول عملية مخصصة للمنشأة.",
      en: "Analyze HR needs and provide practical recommendations tailored to your organization."
    },
    problems: [
      { ar: "قرارات موارد بشرية دون بيانات كافية", en: "HR decisions made without enough insight" },
      { ar: "الحاجة إلى منظور متخصص ومحايد", en: "Need for an expert, objective perspective" }
    ],
    deliverables: [
      { ar: "تحليل الاحتياج", en: "Needs analysis" },
      { ar: "تحديد الفجوات والأولويات", en: "Gap and priority identification" },
      { ar: "توصيات عملية مخصصة", en: "Tailored practical recommendations" }
    ]
  },
  {
    slug: "post-employment",
    icon: "shield",
    title: { ar: "خدمات ما بعد التوظيف", en: "Post-Employment Support" },
    description: {
      ar: "متابعة مستمرة بعد التوظيف لدعم استقرار الكفاءات وضمان جودة الخدمة.",
      en: "Continued follow-up after placement to support workforce stability and service quality."
    },
    problems: [
      { ar: "ضعف المتابعة بعد مباشرة العمل", en: "Limited follow-up after onboarding" },
      { ar: "تأخر اكتشاف تحديات الاستقرار", en: "Late identification of stability issues" }
    ],
    deliverables: [
      { ar: "متابعة ما بعد المباشرة", en: "Post-start follow-up" },
      { ar: "رصد الملاحظات مبكرًا", en: "Early feedback capture" },
      { ar: "دعم استقرار الخدمة", en: "Service stability support" }
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
  { q: { ar: "ما الخدمات التي تقدمها HLR؟", en: "What services does HLR provide?" }, a: { ar: "نقدم استقطاب المواهب، والتوظيف والتعاقد، وتأجير وتوريد الكفاءات، وإدارة الموارد البشرية، والدراسات والاستشارات، وخدمات ما بعد التوظيف.", en: "We provide talent acquisition, recruitment and contracting, workforce supply, HR management, consulting, and post-employment support." } },
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
    servicesTitle: "توريد عمالة وحلول توظيف متكاملة من الاحتياج إلى المتابعة.",
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
    servicesTitle: "Workforce supply and integrated recruitment solutions from need to follow-up.",
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
