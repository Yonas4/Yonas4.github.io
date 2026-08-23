/**
 * translations.js
 * Comprehensive bilingual (English / Arabic) dictionary and localization engine
 * for Yunes Al-Khaledi's Portfolio.
 */

(function (window) {
  const TRANSLATIONS = {
    en: {
      // Global & Navigation
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.certifications": "Certifications",
      "nav.hire": "Hire me",
      "nav.settings": "Preferences",
      "nav.dark_mode": "Dark Mode",
      "nav.accent_color": "Accent Color",
      "nav.language": "Language",
      "lang.switch_btn": "عربي",

      // Hero Section
      "hero.avail": "Available for hire · Remote",
      "hero.title_html": "Senior Flutter<br><em>Developer</em><br>&amp; Mobile<br>Engineer",
      "hero.lead_html": "Senior Flutter Developer with <strong>5+ years shipping production iOS &amp; Android apps</strong> across FinTech, e-commerce, delivery, and content platforms. <strong>9+ live apps</strong> on the stores — Clean Architecture to App Store, I own the full stack.",
      "hero.btn_work": "View my work →",
      "hero.btn_talk": "Let's talk",
      "hero.btn_cv": "Download CV ↓",
      "hero.badge_years": "5+",
      "hero.badge_label_html": "Years of<br>Experience",
      "hero.ms_exp": "Years Exp.",

      // Projects Section
      "proj.tag": "Selected Work",
      "proj.title_html": "Projects I've <em>shipped</em>",
      "proj.loading": "Loading projects…",
      "proj.badge_featured": "Featured Project",
      "proj.badge_company": "Company Project",
      "proj.badge_freelance": "Freelance",
      "proj.badge_grad": "Graduation Project",
      "proj.live_stores": "Live",
      "proj.on_stores": "on stores",
      "proj.delivered": "Delivered",
      "proj.successfully": "successfully",
      "proj.case_study": "Case Study",
      "proj.read_case_study": "Read Case Study",
      "proj.store_apple": "App Store",
      "proj.store_play": "Google Play",
      "proj.store_github": "GitHub",
      "proj.cta_title": "Explore All Projects",
      "proj.cta_desc_html": "Browse the full portfolio archive of <strong>10+ live apps</strong>",
      "proj.cta_btn": "View Full Archive →",

      // About Band
      "about.title_html": "Building apps<br><em>people rely on</em>",
      "about.body_html": "I'm an Aden-based <strong>Senior Flutter Developer</strong> with 5+ years of experience building production-grade mobile applications across <strong>FinTech, e-commerce, delivery, and content platforms</strong>. I've shipped 9+ live apps to Google Play &amp; App Store serving thousands of active users.<br><br>Most recently at <strong>Siolla</strong> — a live investment platform where I developed and maintained core features for a large-scale, high-traffic app handling sensitive user data. Also experienced as a <strong>Flutter Trainer</strong>, mentoring <strong>50+ developers</strong> on production-level best practices and real-world architecture patterns.",
      "about.item_1": "Clean Architecture + Riverpod / BLoC / GetX",
      "about.item_2": "9+ apps shipped to App Store & Google Play",
      "about.item_3": "REST API, Dio, Retrofit, WebSockets",
      "about.item_4": "Arabic / English bilingual developer",
      "about.item_5": "Flutter Trainer — 50+ developers mentored",

      // Experience Section
      "exp.tag": "Work History",
      "exp.title": "Experience",
      "exp.siolla_period": "Aug 2024 — Jul 2026",
      "exp.siolla_pill": "Remote · Riyadh, KSA",
      "exp.siolla_role": "Senior Flutter Developer",
      "exp.siolla_pt1_html": "Developed and maintained core features for a <strong>large-scale, high-traffic mobile application</strong> handling sensitive user data and complex business logic.",
      "exp.siolla_pt2_html": "Implemented <strong>Clean Architecture</strong> with strict UI / Domain / Data layer separation — improving scalability, testability, and long-term maintainability.",
      "exp.siolla_pt3_html": "Integrated and secured multiple <strong>REST APIs</strong>, applying encryption and token-based authentication best practices.",
      "exp.siolla_pt4_html": "Optimized app performance for <strong>real-time data rendering</strong> and delivered features consistently within Agile sprint cycles across a distributed remote team.",

      "exp.bbsoft_period": "Aug 2023 — Present",
      "exp.bbsoft_cur": "● Current",
      "exp.bbsoft_loc": "Aden, Yemen",
      "exp.bbsoft_role": "Flutter Trainer",
      "exp.bbsoft_pt1_html": "Delivered structured Flutter &amp; Dart training covering <strong>Clean Architecture, state management (GetX, BLoC)</strong>, and production app patterns.",
      "exp.bbsoft_pt2_html": "Trained <strong>50+ developers</strong> — curriculum spanned API integration, Firebase services, architecture design, and app store deployment.",
      "exp.bbsoft_pt3_html": "Designed hands-on exercises and project scenarios aligned with <strong>real industry workflows</strong>.",

      "exp.youit_period": "Dec 2021 — Jul 2024",
      "exp.youit_role": "Mobile Developer — Flutter",
      "exp.youit_pt1_html": "Built and shipped <strong>9+ production Flutter applications</strong> across e-commerce, delivery, news, and utility domains — all live on Google Play &amp; App Store.",
      "exp.youit_pt2_html": "Led architecture decisions using <strong>Clean Architecture and MVC</strong>; integrated REST APIs and full Firebase ecosystem across all projects.",
      "exp.youit_pt3_html": "Collaborated with UI/UX designers (Figma, Adobe XD) to deliver <strong>pixel-perfect interfaces</strong>; managed full app lifecycle from requirements to deployment.",

      "exp.free_period": "Jan 2020 — Dec 2021",
      "exp.free_pill": "Remote",
      "exp.free_role": "Android Developer",
      "exp.free_pt1_html": "Developed and published Android apps in <strong>Java using MVVM</strong>; integrated Firebase (FCM, Realtime DB, Cloud Storage) and AdMob monetization.",
      "exp.free_pt2_html": "Handled all project phases independently: requirements analysis, database design, development, testing, and <strong>Play Store publishing</strong>.",

      // Skills Section
      "skills.tag": "Skills & Expertise",
      "skills.title_html": "What I bring<br>to your <em>team</em>",
      "skills.cat_mobile": "Mobile & Platforms",
      "skills.cat_arch": "Architecture & State",
      "skills.cat_api": "APIs & Networking",
      "skills.cat_backend": "Backend & SDKs",
      "skills.cat_cicd": "CI/CD & Publishing",
      "skills.cat_ui": "UI/UX & Workflow",

      // Certifications Section
      "certs.tag": "Learning & Growth",
      "certs.title": "Certifications",
      "certs.c1_title": "The Complete Flutter Development Bootcamp",
      "certs.c1_by": "Udemy",
      "certs.c2_title": "The Complete Dart Language Guide",
      "certs.c2_by": "Udemy",
      "certs.c3_title": "Android Application Development with Java",
      "certs.c3_by": "MaharaTech",
      "certs.c4_title": "Project Management Fundamentals",
      "certs.c4_by": "Jadara Training",

      // Contact Section
      "contact.tag": "Get In Touch",
      "contact.title_html": "Let's build<br>something <em>great</em><br>together",
      "contact.sub": "Open to full-time remote roles, freelance projects, and long-term collaborations. Whether you need a Flutter expert to join your team, integrate a payment SDK, or build a production app from scratch — I'm ready to ship.",
      "contact.lbl_wa": "Call / WhatsApp",
      "contact.lbl_email": "Email",
      "contact.lbl_github": "GitHub",
      "contact.lbl_linkedin": "LinkedIn",
      "contact.lbl_cv": "Resume / CV",
      "contact.val_cv": "PDF (5+ Years Exp.)",
      "contact.lbl_loc": "Location",
      "contact.val_loc": "Aden, Yemen (GMT+3)",
      "contact.form_name": "Your name",
      "contact.form_email": "Your email",
      "contact.form_msg": "Project details or message",
      "contact.form_submit": "Send Message →",
      "contact.placeholder_name": "Enter your name",
      "contact.placeholder_email": "name@company.com",
      "contact.placeholder_msg": "Describe your project, timeline, or requirements...",
      "contact.status_sending": "Sending…",
      "contact.status_success": "Message sent — I'll get back to you soon.",
      "contact.status_error": "Something went wrong. Please try emailing me directly.",
      "contact.status_net_error": "Network error. Please try emailing me directly.",
      "footer.role": "Senior Flutter Developer · Aden, Yemen",

      // Case Study & Archive Pages
      "case.back": "← Back to Portfolio",
      "case.all_tag": "Full Archive",
      "case.all_title_html": "All projects <em>I've shipped</em>",
      "case.screens_tag": "App Preview & Screens",
      "case.screens_title": "Screenshots & Interface",
      "case.tab_mockups": "Screenshots",
      "case.tab_video": "Emulator Walkthrough",
      "case.overview_title": "Overview",
      "case.caps_tag": "Core Capabilities",
      "case.caps_title": "What the app does",
      "case.arch_tag": "Architecture",
      "case.arch_title": "How it's built",
      "case.challenges_tag": "Problems Solved",
      "case.challenges_title": "Real engineering challenges",
      "case.tech_tag": "Technologies Employed",
      "case.tech_title": "Built with"
    },

    ar: {
      // Global & Navigation
      "nav.home": "الرئيسية",
      "nav.projects": "المشاريع",
      "nav.about": "عني",
      "nav.experience": "الخبرات",
      "nav.skills": "المهارات",
      "nav.certifications": "الشهادات",
      "nav.hire": "وظّفني",
      "nav.settings": "التفضيلات",
      "nav.dark_mode": "الوضع الليلي",
      "nav.accent_color": "اللون المميز",
      "nav.language": "اللغة",
      "lang.switch_btn": "English",

      // Hero Section
      "hero.avail": "متاح للعمل والتعاقد · عن بُعد (Remote)",
      "hero.title_html": "مطور فلاتر<br><em>أول</em><br>&amp; مهندس<br>تطبيقات جوال",
      "hero.lead_html": "مطور فلاتر أول (Senior Flutter Developer) بخبرة تتجاوز <strong>5+ سنوات في بناء ونشر تطبيقات iOS و Android احترافية</strong> في مجالات التقنية المالية (FinTech)، المتاجر الإلكترونية، وتطبيقات التوصيل والمحتوى. قمت بنشر <strong>9+ تطبيقات حية</strong> على المتاجر — أمتلك دورة بناء التطبيق كاملة من المعمارية حتى النشر.",
      "hero.btn_work": "استعرض أعمالي ←",
      "hero.btn_talk": "تواصل معي",
      "hero.btn_cv": "تحميل السيرة الذاتية ↓",
      "hero.badge_years": "+5",
      "hero.badge_label_html": "سنوات من<br>الخبرة العملية",
      "hero.ms_exp": "سنوات خبرة",

      // Projects Section
      "proj.tag": "أبرز الأعمال",
      "proj.title_html": "تطبيقات قمت <em>بنشرها وإطلاقها</em>",
      "proj.loading": "جاري تحميل المشاريع…",
      "proj.badge_featured": "مشروع مميز",
      "proj.badge_company": "مشروع شركة",
      "proj.badge_freelance": "مشروع حر",
      "proj.badge_grad": "مشروع تخرج",
      "proj.live_stores": "متاح",
      "proj.on_stores": "على المتاجر",
      "proj.delivered": "تم التسليم",
      "proj.successfully": "بنجاح تام",
      "proj.case_study": "تفاصيل المشروع",
      "proj.read_case_study": "دراسة الحالة والتفاصيل",
      "proj.store_apple": "آب ستور",
      "proj.store_play": "جوجل بلاي",
      "proj.store_github": "جيت هاب",
      "proj.cta_title": "استكشف كافة المشاريع",
      "proj.cta_desc_html": "تصفح الأرشيف الكامل الذي يضم أكثر من <strong>10+ تطبيقات حية ومنشورة</strong>",
      "proj.cta_btn": "عرض الأرشيف الكامل ←",

      // About Band
      "about.title_html": "بناء تطبيقات<br><em>يعتمد عليها المستخدمون</em>",
      "about.body_html": "أنا <strong>مطور فلاتر أول (Senior Flutter Developer)</strong> مقيم في عدن بخبرة تتجاوز 5 سنوات في هندسة وبناء تطبيقات الجوال عالية الأداء في مجالات <strong>التقنية المالية (FinTech)، التجارة الإلكترونية، خدمات التوصيل، والمنصات التفاعلية</strong>. نشرت 9+ تطبيقات حية على Google Play و App Store تخدم آلاف المستخدمين النشطين.<br><br>مؤخراً في منصة <strong>سيولا (Siolla)</strong> — منصة استثمارية ومالية رائدة طوّرت فيها الميزات الجوهرية لتطبيق ضخم يتعامل مع بيانات مالية حساسة وحركات سوق حية. كما أعمل كـ <strong>مدرب فلاتر معتمد</strong>، حيث قمت بتدريب وتوجيه <strong>أكثر من 50 مطوراً</strong> على أفضل الممارسات البرمجية وأنماط المعمارية النظيفة الحقيقية.",
      "about.item_1": "معمارية نظيفة (Clean Architecture) مع Riverpod / BLoC / GetX",
      "about.item_2": "9+ تطبيقات منشورة على App Store و Google Play",
      "about.item_3": "تكامل واجهات REST API، Dio، Retrofit، و WebSockets",
      "about.item_4": "مطور ثنائي اللغة بطلاقة (العربية والإنجليزية)",
      "about.item_5": "مدرب فلاتر وموجّه لأكثر من 50+ مطور برمجيات",

      // Experience Section
      "exp.tag": "سجل الخبرات المهنية",
      "exp.title": "الخبرة العملية",
      "exp.siolla_period": "أغسطس 2024 — يوليو 2026",
      "exp.siolla_pill": "عن بُعد · الرياض، السعودية",
      "exp.siolla_role": "مطور فلاتر أول (Senior Flutter Developer)",
      "exp.siolla_pt1_html": "تطوير وصيانة الميزات الجوهرية لـ <strong>تطبيق مالي واستثماري ضخم عالي الزيارات</strong> يتعامل مع بيانات مستخدمين حساسة ومنطق أعمال معقد.",
      "exp.siolla_pt2_html": "تطبيق <strong>المعمارية النظيفة (Clean Architecture)</strong> مع فصل صارم لطبقات (UI / Domain / Data) لتحقيق أعلى درجات القابلية للتوسع وسهولة الاختبار.",
      "exp.siolla_pt3_html": "ربط وتأمين واجهات <strong>REST APIs</strong> متعددة وتطبيق أفضل ممارسات التشفير والمصادقة المعتمدة على الرموز (Tokens).",
      "exp.siolla_pt4_html": "تحسين أداء التطبيق لعرض <strong>بيانات السوق الحية والفورية (Real-time)</strong> وتسليم المهام بانتظام ضمن دورات Agile السريعة مع فريق موزع.",

      "exp.bbsoft_period": "أغسطس 2023 — حتى الآن",
      "exp.bbsoft_cur": "● حالياً",
      "exp.bbsoft_loc": "عدن، اليمن",
      "exp.bbsoft_role": "مدرب ومحاضر فلاتر (Flutter Trainer)",
      "exp.bbsoft_pt1_html": "تقديم برامج تدريبية متقدمة في Flutter &amp; Dart تغطي <strong>المعمارية النظيفة، إدارة الحالة (BLoC, GetX)</strong>، وأنماط التطبيقات الإنتاجية.",
      "exp.bbsoft_pt2_html": "تدريب وتوجيه <strong>أكثر من 50 مطوراً</strong> شمل المنهج ربط الـ APIs، خدمات Firebase، هندسة النظم، والنشر على المتاجر.",
      "exp.bbsoft_pt3_html": "إعداد سيناريوهات ومشاريع عملية واقعية تحاكي متطلبات سوق العمل البرمجي الحقيقي.",

      "exp.youit_period": "ديسمبر 2021 — يوليو 2024",
      "exp.youit_role": "مطور تطبيقات جوال فلاتر (Flutter Developer)",
      "exp.youit_pt1_html": "بناء وإطلاق <strong>9+ تطبيقات فلاتر إنتاجية</strong> في قطاعات التجارة الإلكترونية، التوصيل، الأخبار، والخدمات — جميعها منشورة على Google Play و App Store.",
      "exp.youit_pt2_html": "قيادة القرارات الهندسية باستخدام <strong>Clean Architecture و MVC</strong>؛ ودمج واجهات REST APIs ومنظومة Firebase بالكامل.",
      "exp.youit_pt3_html": "التعاون الوثيق مع مصممي واجهات UI/UX (Figma, Adobe XD) لتسليم <strong>واجهات بكسل بيرفكت (Pixel-Perfect)</strong> فائقة الدقة وإدارة دورة حياة التطبيقات بالكامل.",

      "exp.free_period": "يناير 2020 — ديسمبر 2021",
      "exp.free_pill": "عمل حر · عن بُعد",
      "exp.free_role": "مطور تطبيقات أندرويد (Android Developer)",
      "exp.free_pt1_html": "تطوير ونشر تطبيقات أندرويد أصلية بلغة <strong>Java ونمط MVVM</strong>؛ ودمج خدمات Firebase (FCM, Realtime DB, Storage) ونظام إعلانات AdMob.",
      "exp.free_pt2_html": "إدارة جميع مراحل المشاريع بشكل مستقل: تحليل المتطلبات، تصميم قواعد البيانات، البرمجة، الاختبار، و<strong>النشر على متجر Google Play</strong>.",

      // Skills Section
      "skills.tag": "المهارات والخبرات التقنية",
      "skills.title_html": "القدرات التقنية التي<br>أضيفها إلى <em>فريقك</em>",
      "skills.cat_mobile": "الجوال والمنصات الأساسية",
      "skills.cat_arch": "المعمارية وإدارة الحالة",
      "skills.cat_api": "الشبكات والواجهات البرمجية",
      "skills.cat_backend": "الخدمات السحابية والحزم",
      "skills.cat_cicd": "النشر والتحزيم المستمر",
      "skills.cat_ui": "تصميم الواجهات وسير العمل",

      // Certifications Section
      "certs.tag": "التعلم والتطوير المستمر",
      "certs.title": "الشهادات المهنية",
      "certs.c1_title": "المعسكر التدريبي المتكامل لتطوير تطبيقات Flutter",
      "certs.c1_by": "يوديمي (Udemy)",
      "certs.c2_title": "الدليل الشامل لإتقان لغة Dart",
      "certs.c2_by": "يوديمي (Udemy)",
      "certs.c3_title": "تطوير تطبيقات أندرويد باستخدام Java",
      "certs.c3_by": "مهارة تك (MaharaTech)",
      "certs.c4_title": "أساسيات ومنهجيات إدارة المشاريع",
      "certs.c4_by": "مؤسسة جدارة للتدريب",

      // Contact Section
      "contact.tag": "تواصل معي",
      "contact.title_html": "لنقم ببناء<br>شيء <em>استثنائي</em><br>معاً",
      "contact.sub": "متاح للوظائف الكاملة عن بُعد (Full-time Remote)، المشاريع المستقلة، والتعاون التقني طويل الأمد. سواء كنت بحاجة إلى خبير فلاتر للانضمام لفريقك، ربط بوابات دفع وحزم مخصصة، أو بناء تطبيقك من الصفر — أنا جاهز للبدء فوراً.",
      "contact.lbl_wa": "اتصال / واتساب",
      "contact.lbl_email": "البريد الإلكتروني",
      "contact.lbl_github": "جيت هاب",
      "contact.lbl_linkedin": "لينكد إن",
      "contact.lbl_cv": "السيرة الذاتية",
      "contact.val_cv": "ملف PDF (خبرة 5+ سنوات)",
      "contact.lbl_loc": "الموقع الحالي",
      "contact.val_loc": "عدن، اليمن (توقيت مكة GMT+3)",
      "contact.form_name": "الاسم الكريم",
      "contact.form_email": "البريد الإلكتروني",
      "contact.form_msg": "تفاصيل المشروع أو الرسالة",
      "contact.form_submit": "إرسال الرسالة ←",
      "contact.placeholder_name": "أدخل اسمك الكريم",
      "contact.placeholder_email": "name@company.com",
      "contact.placeholder_msg": "صف متطلبات مشروعك، النطاق، أو الجدول الزمني...",
      "contact.status_sending": "جاري الإرسال…",
      "contact.status_success": "تم إرسال رسالتك بنجاح — سأتواصل معك قريباً.",
      "contact.status_error": "حدث خطأ ما. يرجى التواصل عبر البريد الإلكتروني مباشرة.",
      "contact.status_net_error": "خطأ في الشبكة. يرجى التواصل عبر البريد الإلكتروني مباشرة.",
      "footer.role": "مطور فلاتر أول · عدن، اليمن",

      // Case Study & Archive Pages
      "case.back": "→ الرجوع إلى البورتفوليو",
      "case.all_tag": "الأرشيف الكامل",
      "case.all_title_html": "كافة المشاريع <em>التي قمت بإطلاقها</em>",
      "case.screens_tag": "معاينة التطبيق والشاشات",
      "case.screens_title": "لقطات الشاشة وواجهة المستخدم",
      "case.tab_mockups": "شاشات التطبيق",
      "case.tab_video": "معاينة تفاعلية بالمحاكي",
      "case.overview_title": "نظرة عامة",
      "case.caps_tag": "القدرات الأساسية",
      "case.caps_title": "ما يقدمه التطبيق",
      "case.arch_tag": "المعمارية التقنية",
      "case.arch_title": "كيف تم بناء وهندسة التطبيق",
      "case.challenges_tag": "حل المشكلات والتحديات",
      "case.challenges_title": "تحديات هندسية واقعية تم التغلب عليها",
      "case.tech_tag": "التقنيات المستخدمة",
      "case.tech_title": "بُني باستخدام"
    }
  };

  // Dedicated project-level Arabic localized metadata for all 10 projects
  const PROJECT_ARABIC_DATA = {
    "siolla": {
      name: "سيولا | Siolla",
      category: "تقنية مالية · منصة استثمارية · iOS & Android",
      badge: "مشروع مميز",
      short_description: "منصة استثمارية متكاملة تحول المدخرات إلى دخل إضافي وتجعل الاستثمار سهلاً ومتاحاً للمبتدئين. توفر تحليلات سوقية لحظية، آلاف الأسهم وصناديق المؤشرات بدون أي عمولات إضافية.",
      overview: "منصة سيولا هي منصة استثمارية دقيقة بُنيت باستخدام فلاتر لتحويل المدخرات البسيطة إلى عوائد استثمارية منتظمة. تجعل المنصة الاستثمار متاحاً للجميع من خلال أدوات التوفير والادخار والاستثمار بدون أي تكاليف خفية.\n\nتوفر المنصة أدوات تحليلية حديثة وبيانات سوقية فورية تمكن المستخدمين من تتبع حركة الأسهم وتأثيرها على محافظهم في الوقت الفعلي مع تداول غير محدود وبدون عمولات.",
      stats: [
        { number: "2+", label: "سنوات من التطوير النشط" },
        { number: "متاح", label: "على Google Play و App Store" },
        { number: "9+", label: "تطبيقات حية منشورة للمطور" }
      ],
      capabilities: [
        { title: "بيانات سوق فورية", description: "تحليلات سوقية وتتبع فوري للمحافظ في الوقت الحقيقي لمساعدة المستخدم على اتخاذ قرارات مالية مدروسة." },
        { title: "تداول بدون عمولات", description: "تداول غير محدود بدون أي رسوم أو عمولات إضافية، مما يجعل الاستثمار متاحاً للجميع." },
        { title: "أدوات تحليل متقدمة", description: "رسوم بيانية وأدوات تحليل فنية متطورة ترشد المستخدم لفهم حركة السوق وأداء المحفظة." },
        { title: "أمان عالي للبيانات", description: "معمارية نظيفة مع فصل دقيق للطبقات لضمان حماية البيانات المالية الحساسة ومنطق الأعمال." },
        { title: "آلاف الأصول المالية", description: "تصفح آلاف الأسهم وصناديق المؤشرات المتداولة (ETFs) مع معلومات تفصيلية دقيقة لكل أصل." },
        { title: "أداء فائق وسرعة معالجة", description: "عرض ومعالجة فورية للبيانات المالية السريعة لتقديم تجربة استخدام فائقة السلاسة." }
      ],
      architecture_text: "تم بناء التطبيق وفق مبادئ المعمارية النظيفة (Clean Architecture) مع فصل صارم لطبقات (UI / Domain / Data) لضمان القابلية للتوسع وسهولة الاختبار. تم استخدام Riverpod مع توليد الأكواد لإدارة الحالة، و AutoRoute للتنقل الآمن بين الشاشات، مع تأمين واجهات REST APIs بالتشفير والمصادقة المتقدمة.",
      challenges: [
        { label: "الأمان", title: "تشفير البيانات المالية الحساسة أثناء النقل", description: "تطبيق أعلى معايير التشفير والمصادقة عبر الرموز في جميع واجهات REST APIs لحماية بيانات المستخدمين." },
        { label: "الأداء", title: "معالجة وعرض البيانات المالية اللحظية بكفاءة", description: "تحسين أداء التطبيق لعرض تدفق الأسعار والرسوم البيانية دون أي تأخير أو استهلاك زائد للذاكرة." },
        { label: "المعمارية", title: "الحفاظ على بنية نظيفة في قاعدة كود ضخمة", description: "تطبيق المعمارية النظيفة لضمان استقرار التطبيق وسهولة إضافة ميزات جديدة مع فريق العمل الموزع." }
      ]
    },
    "anis-phone": {
      name: "أنيس فون | Anis Phone",
      category: "تجارة إلكترونية · هواتف وملحقات · iOS & Android",
      badge: "مشروع شركة",
      short_description: "تطبيق تجارة إلكترونية متخصص في أجهزة الآيفون الأصلية وملحقات آبل في عدن. تجربة مستخدم فائقة السلاسة مع تصنيفات منظمة وإتمام سريع وآمن للطلبات.",
      overview: "تطبيق أنيس فون هو منصة تجارة إلكترونية متخصصة لبيع هواتف آيفون وملحقات آبل الأصلية في مدينة عدن. يركز التطبيق على تجربة المستخدم السلسة وسرعة التصفح وتصنيف المنتجات بشكل دقيق مع دعم سلة المشتريات والطلبات الفورية وضمان المنتجات الأصلية.",
      stats: [
        { number: "متاح", label: "على Google Play و App Store" },
        { number: "+20", label: "تصنيف ومنتج مميز" },
        { number: "UX", label: "تصميم متقن وإتمام طلبات فوري" }
      ],
      capabilities: [
        { title: "كتالوج منتجات آبل الأصلية", description: "تصفح سهل مع فلاتر حسب النوع، السعة، واللون مع صور عالية الجودة ومواصفات تفصيلية دقيقة." },
        { title: "سلة مشتريات فورية وآمنة", description: "إدارة سلة التسوق وحساب الإجمالي تلقائياً مع خيارات التوصيل واستلام الطلب بكل يسر." },
        { title: "استكشاف سلس للمنتجات", description: "تصميم يركز على تجربة المستخدم مع تنقل بديهي وبحث سريع للوصول إلى المنتجات في ثوانٍ." },
        { title: "خدمة التوصيل وتتبع الشحنة", description: "خدمة توصيل متكاملة تغطي كافة مناطق عدن مع إمكانية متابعة حالة الطلب لحظة بلحظة." }
      ],
      architecture_text: "بُني التطبيق باستخدام فلاتر مع معمارية Clean Architecture و GoRouter للتنقل المحكم بين الشاشات، مع ربط كامل بواجهات REST APIs لإدارة المنتجات والسلة والطلبات، وتصميم الواجهات بدقة بكسل بيرفكت استناداً إلى تصاميم Figma."
    },
    "medalah-store": {
      name: "متجر مظلة | Medalah Store",
      category: "تجارة إلكترونية · دعم مجتمعي خيري · iOS & Android",
      badge: "مشروع شركة",
      short_description: "تطبيق متجر إلكتروني لمؤسسة مظلة لدعم المشاريع والأنشطة المجتمعية. يقدم تجربة تسوق آمنة وسريعة مع ربط سحابي متكامل عبر Firebase.",
      overview: "متجر مظلة ستور هو متجر إلكتروني تابع لمؤسسة مظلة، أُنشئ بهدف دعم وتشجيع مشاريع المؤسسة المجتمعية. يعرض المتجر منتجات متنوعة مثل الملابس، الأكواب، والحقائب التي تحمل شعار وهوية المؤسسة لجمع التبرعات وزيادة الوعي بأنشطتها الإنسانية.\n\nيتيح التطبيق للعملاء تصفح الأقسام والمنتجات، إضافتها إلى سلة التسوق، وقراءة المواصفات الدقيقة مع إتمام عمليات الشراء بخيارات دفع آمنة وسهلة.",
      stats: [
        { number: "متاح", label: "على Google Play و App Store" },
        { number: "مجتمعي", label: "دعم مشاريع مؤسسة مظلة" },
        { number: "آمن", label: "دفع وإدارة سحابية عبر Firebase" }
      ],
      capabilities: [
        { title: "كتالوج المنتجات والهوية", description: "استعراض منتجات المؤسسة المختلفة مع تفاصيل دقيقة ومواصفات التصنيع والجودة." },
        { title: "دعم المبادرات المجتمعية", description: "كل عملية شراء تساهم مباشرة في تمويل مشاريع المؤسسة ودعم أنشطتها التنموية." },
        { title: "عمليات دفع آمنة", description: "خيارات دفع إلكتروني آمنة وموثوقة مدمجة داخل التطبيق لتوفير أقصى درجات الأمان." },
        { title: "إدارة سلة التسوق", description: "تجربة شراء متكاملة تشمل إدارة السلة، تعديل الكميات، وإتمام الطلب بسلاسة." }
      ],
      architecture_text: "بُني التطبيق باستخدام فلاتر ومدعوم بخدمات Firebase السحابية (قواعد البيانات الفورية، التخزين السحابي، والإشعارات)، مع تطبيق مبادئ Material Design لواجهة أنيقة تعكس هوية المؤسسة."
    },
    "361-yemen": {
      name: "361 اليمن | 361 Yemen",
      category: "تسوق وأزياء رياضية · iOS & Android",
      badge: "مشروع شركة",
      short_description: "المتجر الإلكتروني الرسمي للعلامة التجارية الرياضية العالمية 361° في اليمن. يقدم الأحذية والملابس الرياضية الأصلية مع تجربة تسوق مميزة وسريعة.",
      overview: "العلامة التجارية العالمية 361 Degrees تعد من أبرز العلامات الرائدة في تصنيع الأحذية والملابس الرياضية حول العالم، وتمتلك أكثر من 7000 متجر دولي وتعد الراعي الرسمي للجان الأولمبية في 28 دولة.\n\nيقدم تطبيق 361 Yemen هذه التجربة العالمية لعملاء السوق المحلي في اليمن، موفراً تصفحاً شاملاً لأحدث المنتجات الرياضية مع خيارات مقاسات دقيقة وخدمة التوصيل السريع.",
      stats: [
        { number: "+7000", label: "متجر حول العالم للعلامة التجارية" },
        { number: "متاح", label: "على Google Play و App Store" },
        { number: "28", label: "لجنة أولمبية معتمدة" }
      ],
      capabilities: [
        { title: "كتالوج المنتجات الرياضية", description: "تصفح تشكيلة واسعة من الأحذية والملابس والمستلزمات الرياضية مع دليل مقاسات تفصيلي." },
        { title: "تجربة تسوق متكاملة", description: "إدارة متطورة لسلة المشتريات، إتمام آمن للطلبات، وتتبع دقيق لمراحل الشحن." },
        { title: "علامة عالمية بتطبيق محلي", description: "تجربة مستخدم راقية مخصصة للسوق اليمني مع دعم التوصيل لكافة المحافظات." },
        { title: "تصنيفات رياضية متنوعة", description: "أقسام منظمة تشمل الجري، كرة القدم، التمارين البدنية، والأزياء الرياضية اليومية." }
      ],
      architecture_text: "بُني التطبيق باستخدام فلاتر للعمل بكفاءة على iOS و Android، مع ربطه بواجهات REST APIs لمنظومة التجارة الإلكترونية التابعة لتاجرلي، واستخدام Firebase للإشعارات الترويجية والتحليلات."
    },
    "beutiqaty": {
      name: "بوتيكاتي | Beutiqaty",
      category: "منصة متاجر متعددة وتجارة إلكترونية · iOS & Android",
      badge: "مشروع شركة",
      short_description: "منصة تجارة إلكترونية متعددة التجار تتيح للمتاجر والبوتيكات في عدن بيع منتجاتهم وإدارتها دون الحاجة لإنشاء متاجر مستقلة مكلفة.",
      overview: "بوتيكاتي هي منصة أسواق ومتاجر متعددة (Multi-Vendor Marketplace) تمكن تجار التجزئة وأصحاب البوتيكات في عدن من عرض وبيع منتجاتهم عبر منصة رقمية مركزية وموحدة، كحل اقتصادي وفعال يغنيهم عن تكاليف تطوير تطبيقات مستقلة.\n\nيشكل التطبيق جسراً متكاملاً بين البوتيكات والعملاء، موفراً تجربة تسوق موحدة تسمح بالطلب من عدة متاجر في سلة واحدة وتنسيق عمليات التوصيل.",
      stats: [
        { number: "متاح", label: "على Google Play و App Store" },
        { number: "متعدد", label: "منصة متاجر وبوتيكات مشتركة" },
        { number: "اقتصادي", label: "حل مجدي لأصحاب الأعمال" }
      ],
      capabilities: [
        { title: "منصة متاجر متعددة", description: "إمكانية انضمام عدة متاجر وبوتيكات لبيع منتجاتهم والوصول لقاعدة عملاء واسعة." },
        { title: "استكشاف المنتجات وتصفحها", description: "تصفح منتجات البوتيكات المختلفة في مكان واحد مع فلاتر ذكية وتصنيفات مفصلة." },
        { title: "إتمام شراء موحد وآمن", description: "سلة مشتريات ذكية تدعم منتجات من متاجر متعددة مع حساب دقيق لخيارات الشحن." },
        { title: "إدارة وتوجيه الطلبات", description: "توجيه آلي للطلبات إلى المتاجر المعنية مع تتبع حالة التجهيز والشحن." }
      ],
      architecture_text: "تم بناء التطبيق باستخدام فلاتر مع تكامل واجهات REST APIs لإدارة كتالوج المنتجات والسلة الموحدة والطلبات، مع توظيف Firebase للمصادقة وتنبيهات الإشعارات الفورية."
    },
    "aswaq-aden": {
      name: "أسواق عدن | Aswaq Aden",
      category: "دليل تجاري وسياحي للمدينة · خرائط Google · Android & iOS",
      badge: "مشروع شركة",
      short_description: "أول منصة تسويق إلكتروني ودليل تجاري شامل للمحلات والأنشطة التجارية في عدن مدعومة بخرائط Google وجمهور يتجاوز 135 ألف متابع.",
      overview: "أسواق عدن هي منصة إعلانية وتسويقية تأسست عام 2018 كأول منصة تسويق إلكتروني للأعمال والمحلات التجارية في مدينة عدن، وتشكل دليلاً شاملاً لكافة المنشآت والأنشطة التجارية في المدينة.\n\nحققت المنصة انتشاراً واسعاً يتجاوز 65 ألف متابع على فيسبوك و 70 ألف متابع على إنستغرام. يوفر التطبيق دليلاً متكاملاً لبيانات المحلات، مواقعها، ووسائل التواصل معها، مما يسهل على السكان والزوار الوصول إلى أي نشاط تجاري في ثوانٍ معدودة.",
      stats: [
        { number: "+65K", label: "متابع على فيسبوك" },
        { number: "+70K", label: "متابع على إنستغرام" },
        { number: "2018", label: "أول منصة تسويقية رائدة في عدن" }
      ],
      capabilities: [
        { title: "تكامل خرائط Google Maps", description: "استعراض مواقع المحلات والأنشطة التجارية على الخريطة التفاعلية مع الاتجاهات الدقيقة." },
        { title: "دليل تجاري شامل", description: "قائمة مصنفة تضم مئات المنشآت التجارية مع العناوين، أرقام التواصل، وأوقات العمل." },
        { title: "منصة تسويق متطورة", description: "تغطية تسويقية متكاملة للمحلات تشمل التصوير الاحترافي والترويج الرقمي." },
        { title: "تغطية العروض والفعاليات", description: "متابعة مستمرة للافتتاحات، العروض الترويجية، المهرجانات، والخصومات في أسواق عدن." }
      ],
      architecture_text: "بُني التطبيق باستخدام فلاتر لأنظمة Android و iOS مع ربط حزمة Google Maps SDK لتحديد المواقع والملاحة، وتكامل واجهات REST APIs لعرض وتحديث بيانات الدليل التجاري بشكل فوري."
    },
    "tagerly-driver": {
      name: "تاجرلي كابتن | Tagerly Driver",
      category: "إدارة التوصيل والخدمات اللوجستية · Android",
      badge: "مشروع شركة",
      short_description: "منصة إدارة التوصيل لكباتن وسائقي الشحن تمكن شركات التوصيل في عدن من استقبال وتنسيق وتتبع طلبات المتاجر الإلكترونية لحظياً.",
      overview: "تطبيق تاجرلي كابتن هو منصة لوجستية متطورة لإدارة عمليات التوصيل تمكن شركات التوصيل والسائقين في عدن من استقبال المهام وتتبع الطلبات الصادرة من المتاجر الإلكترونية في الوقت الفعلي.\n\nيتيح التطبيق للسائقين استلام طلبات التوصيل، إدارة وتحديد مسارات التوصيل اليومية، وتحديث حالة الطلبات مباشرة للتنسيق الفوري بين التاجر والعميل وشركة الشحن.",
      stats: [
        { number: "متعدد", label: "دعم شركات توصيل متعددة" },
        { number: "فوري", label: "تتبع وتوجيه الطلبات لحظياً" },
        { number: "عدن", label: "تغطية شاملة لكافة المديريات" }
      ],
      capabilities: [
        { title: "استقبال وإسناد الطلبات", description: "استلام مهام التوصيل من عدة متاجر إلكترونية مع إدارة طوابير الطلبات بكفاءة." },
        { title: "إدارة مسارات التوصيل", description: "تتبع المسارات الجغرافية وتحديث حالات الشحنات لحظياً لضمان دقة وسرعة التسليم." },
        { title: "دعم شركات متعددة", description: "إمكانية عمل وتسجيل شركات توصيل مختلفة على المنصة لتغطية متطلبات المتاجر." },
        { title: "لوحة تحليلات الكابتن", description: "متابعة أداء السائق، معدلات التوصيل المنجزة، وحساب الأرباح اليومية بوضوح." }
      ],
      architecture_text: "تم تطوير التطبيق باستخدام فلاتر مع المعمارية النظيفة (Clean Architecture)، وربطه بواجهات REST APIs لتحديث الحالات وتنسيق المهام اللحظية مع خوادم منظومة تاجرلي اللوجستية."
    },
    "mufeed": {
      name: "مفيد | Mufeed",
      category: "دليل ومطاعم · استكشاف وقوائم الطعام · Android",
      badge: "مشروع شركة",
      short_description: "تطبيق استكشاف المطاعم في عدن — تصفح قوائم الطعام والوجبات، معرفة الأسعار الدقيقة، العناوين، وحساب إجمالي تكلفة الطلبات قبل الذهاب.",
      overview: "تطبيق مفيد هو دليل المطاعم الشامل في مدينة عدن، صُمم لمساعدة المستخدمين على اكتشاف المطاعم، استعراض قوائم الوجبات والأسعار، ومعرفة العناوين بدقة من خلال واجهة استخدام عصرية وبسيطة.\n\nيمكن للمستخدمين تصفح المطاعم حسب التصنيف، الاطلاع على تفاصيل الأصناف، وحساب التكلفة الإجمالية التقديرية للطلبات، مما يجعل اختيار وجهة الطعام قراراً سهلاً ومدروساً.",
      stats: [
        { number: "عدن", label: "تغطية شاملة لمطاعم المدينة" },
        { number: "القوائم", label: "أسعار وتفاصيل الوجبات كاملة" },
        { number: "سهل", label: "واجهة سريعة وبديهية" }
      ],
      capabilities: [
        { title: "استكشاف المطاعم", description: "تصفح مطاعم عدن حسب نوع الوجبات، المنطقة، والمطبخ المفضل." },
        { title: "قوائم الطعام والأسعار", description: "استعراض المنيو بالكامل مع الأسعار، المكونات، وصور الوجبات." },
        { title: "العناوين والمواقع", description: "الوصول السريع إلى مواقع وعناوين المطاعم وأرقام التواصل." },
        { title: "حساب تكلفة الطلب", description: "أداة ذكية لحساب إجمالي تكلفة الوجبات قبل الزيارة لتسهيل التخطيط." }
      ],
      architecture_text: "بُني التطبيق باستخدام فلاتر مع واجهات REST APIs لجلب بيانات المطاعم وقوائم الأسعار، مع تطبيق إرشادات Material Design لتقديم تجربة تصفح هادئة وسريعة."
    },
    "stc-aden": {
      name: "تطبيق STC عدن الرسمي",
      category: "أخبار وإعلام محلي · Android",
      badge: "مشروع شركة",
      short_description: "التطبيق الإخباري الرسمي لمحافظة عدن المرتبط بنظام جريدة CMS من YOU-IT لنقل الأخبار العاجلة والبيانات الرسمية مع إشعارات فورية.",
      overview: "تطبيق STC عدن هو المنصة الإخبارية الرسمية لمحافظة عدن، المرتبط بنظام إدارة المحتوى المتقدم (Jaridah CMS) المطور لدى شركة YOU-IT. يوفر التطبيق تغطية حية للأخبار والأحداث والبيانات الرسمية مع إشعارات فورية عبر Firebase.\n\nيقدم التطبيق تجربة قراءة مريحة للمستخدمين تمكنهم من متابعة المستجدات المحلية أولاً بأول وحفظ الأخبار ومشاركتها بسهولة.",
      stats: [
        { number: "لحظي", label: "تحديثات وتغطية إخبارية فورية" },
        { number: "FCM", label: "تنبيهات الأخبار العاجلة" },
        { number: "عدن", label: "تغطية شاملة لعموم المحافظة" }
      ],
      capabilities: [
        { title: "تغذية إخبارية لحظية", description: "عرض الأخبار والبيانات الرسمية فور نشرها عبر الارتباط بنظام Jaridah CMS." },
        { title: "إشعارات الأخبار العاجلة", description: "تنبيهات فورية عبر Firebase Cloud Messaging للأخبار والتطورات الهامة." },
        { title: "تجربة قراءة مميزة", description: "واجهة قراءة سلسة ومصنفة حسب الأقسام الإخبارية والموضوعات." }
      ],
      architecture_text: "تم تطوير التطبيق باستخدام فلاتر وتكامله عبر REST API مع نظام إدارة المحتوى Jaridah CMS، مع توظيف Firebase Cloud Messaging لبث الإشعارات العاجلة بفاعلية وسرعة."
    },
    "south-water": {
      name: "مياه الجنوب | South Water",
      category: "طلب وتوصيل مياه الشرب · خدمات لوجستية · Android",
      badge: "مشروع شركة",
      short_description: "تطبيق طلب وتوصيل مياه الشرب النقية لكافة مناطق ومديريات محافظة عدن — تحديد المنطقة، جدولة الطلب، وتتبع مسار التوصيل.",
      overview: "تطبيق مياه الجنوب هو تطبيق خدمي ولوجستي مخصص لطلب وتوصيل مياه الشرب المعبأة والنقية لجميع مناطق ومديريات محافظة عدن. يسهل التطبيق عملية طلب المياه للمنازل، الشركات، والمساجد مع ميزات تحديد المناطق وجدولة مواعيد التوصيل.\n\nصُمم التطبيق ليوفر أقصى درجات السهولة للمستخدم مع إمكانية حفظ المواقع ومتابعة حالة التوصيل وقواعد بيانات محلية لحفظ سجل الطلبات.",
      stats: [
        { number: "عدن", label: "تغطية كاملة لكافة المديريات" },
        { number: "عند الطلب", label: "خدمة توصيل سريعة ومجدولة" },
        { number: "تتبع", label: "متابعة وتحديث حالة الشحنة" }
      ],
      capabilities: [
        { title: "طلب وتوصيل المياه", description: "خدمة طلب مياه الشرب النقية بسهولة مع خيارات كميات متعددة وتوصيل سريع." },
        { title: "تحديد المنطقة الجغرافية", description: "اختيار عنوان التوصيل بدقة من قائمة شاملة تغطي كافة أحياء ومديريات عدن." },
        { title: "إدارة ومتابعة الطلبات", description: "تتبع حالة الطلب من الاستلام وحتى باب المنزل في الوقت الفعلي." },
        { title: "تخزين محلي للبيانات", description: "دعم التخزين المحلي عبر SQLite لحفظ سجل الطلبات والتفضيلات بدون إنترنت." }
      ],
      architecture_text: "بُني التطبيق باستخدام فلاتر مع Firebase للخدمات السحابية وقاعدة بيانات SQLite للتخزين المحلي، مع تكامل واجهات REST APIs لمعالجة الطلبات وتتبع التوصيل."
    }
  };

  function getCurrentLang() {
    return localStorage.getItem("yonas_portfolio_lang") || "en";
  }

  function setLanguage(lang) {
    if (lang !== "en" && lang !== "ar") lang = "en";
    localStorage.setItem("yonas_portfolio_lang", lang);
    applyTranslations(lang);
  }

  function toggleLanguage() {
    const nextLang = getCurrentLang() === "en" ? "ar" : "en";
    setLanguage(nextLang);
    return nextLang;
  }

  function t(key, lang) {
    lang = lang || getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.en[key] || key);
  }

  function getProjectArabic(slug) {
    return PROJECT_ARABIC_DATA[slug] || null;
  }

  function applyTranslations(lang) {
    lang = lang || getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const isAr = lang === "ar";

    // Set HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";

    // Update simple text elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update HTML elements (bolding, line breaks)
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update lang switch buttons
    document.querySelectorAll(".lang-switch-btn, #lang-toggle, #mob-lang-toggle").forEach(btn => {
      btn.textContent = isAr ? "English" : "عربي";
      btn.setAttribute("title", isAr ? "Switch to English" : "التحويل للغة العربية");
    });

    // Notify project renderers if active
    if (window.renderProjects) {
      window.renderProjects();
    }
    if (window.renderProjectDetail) {
      window.renderProjectDetail();
    }

    // Trigger custom event for external listeners
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang, isRTL: isAr } }));
  }

  // Expose to window
  window.I18n = {
    t,
    getCurrentLang,
    setLanguage,
    toggleLanguage,
    applyTranslations,
    getProjectArabic,
    TRANSLATIONS
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => applyTranslations(getCurrentLang()));
  } else {
    applyTranslations(getCurrentLang());
  }

})(window);
