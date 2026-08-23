/**
 * translations.js
 * Comprehensive bilingual (Arabic / English) dictionary and localization engine
 * for Yunes Al-Khaledi's Portfolio.
 * Default language is Arabic ('ar').
 */

(function (window) {
  const TRANSLATIONS = {
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
      "hero.avail": "متاح للعمل والتعاقد · عن بُعد (Full-time Remote / Freelance)",
      "hero.title_html": "Senior Flutter<br><em>Developer</em><br>&amp; مهندس برمجيات<br>تطبيقات جوال",
      "hero.lead_html": "<strong>Senior Flutter Developer</strong> بخبرة <strong>5+ سنوات في بناء ونشر تطبيقات iOS &amp; Android احترافية</strong> في مجالات FinTech، المتاجر الإلكترونية، التوصيل، والمنصات التفاعلية. <strong>9+ تطبيقات حية</strong> على المتاجر — أمتلك دورة بناء التطبيق كاملة من المعمارية النظيفة (Clean Architecture) حتى App Store &amp; Google Play.",
      "hero.btn_work": "استعرض أعمالي ←",
      "hero.btn_talk": "تواصل معي",
      "hero.btn_cv": "تحميل السيرة الذاتية ↓",
      "hero.badge_years": "+5",
      "hero.badge_label_html": "سنوات خبرة<br>Years Exp.",
      "hero.ms_exp": "سنوات خبرة",

      // Projects Section
      "proj.tag": "أبرز الأعمال",
      "proj.title_html": "تطبيقات قمت <em>بنشرها وإطلاقها</em>",
      "proj.loading": "جاري تحميل المشاريع…",
      "proj.badge_featured": "Featured Project",
      "proj.badge_company": "Company Project",
      "proj.badge_freelance": "Freelance",
      "proj.badge_grad": "Graduation Project",
      "proj.live_stores": "Live",
      "proj.on_stores": "على المتاجر",
      "proj.delivered": "تم التسليم",
      "proj.successfully": "بنجاح تام",
      "proj.case_study": "Case Study",
      "proj.read_case_study": "دراسة الحالة والتفاصيل",
      "proj.store_apple": "App Store",
      "proj.store_play": "Google Play",
      "proj.store_github": "GitHub",
      "proj.cta_title": "استكشف كافة المشاريع",
      "proj.cta_desc_html": "تصفح الأرشيف الكامل الذي يضم أكثر من <strong>10+ تطبيقات حية ومنشورة</strong>",
      "proj.cta_btn": "عرض الأرشيف الكامل ←",

      // About Band
      "about.title_html": "بناء تطبيقات<br><em>يعتمد عليها آلاف المستخدمين</em>",
      "about.body_html": "أنا <strong>Senior Flutter Developer</strong> مقيم في عدن بخبرة تتجاوز 5 سنوات في هندسة وبناء تطبيقات الجوال عالية الأداء في مجالات <strong>FinTech، التجارة الإلكترونية، خدمات التوصيل، والمنصات التفاعلية</strong>. نشرت 9+ تطبيقات حية على Google Play و App Store تخدم آلاف المستخدمين النشطين.<br><br>مؤخراً في منصة <strong>Siolla</strong> — منصة استثمارية ومالية رائدة طوّرت فيها الميزات الجوهرية لتطبيق ضخم يتعامل مع بيانات مالية حساسة وحركات سوق حية فورية (Real-time). كما أعمل كـ <strong>Flutter Trainer</strong>، حيث قمت بتدريب وتوجيه <strong>أكثر من 50 مطوراً</strong> على أفضل الممارسات البرمجية وأنماط Clean Architecture الحقيقية.",
      "about.item_1": "Clean Architecture + Riverpod / BLoC / GetX",
      "about.item_2": "9+ apps shipped to App Store & Google Play",
      "about.item_3": "REST APIs, Dio, Retrofit, WebSockets",
      "about.item_4": "مطور ثنائي اللغة بطلاقة (العربية والإنجليزية)",
      "about.item_5": "Flutter Trainer — درّبت أكثر من 50+ مطور برمجيات",

      // Experience Section
      "exp.tag": "سجل الخبرات المهنية",
      "exp.title": "Experience",
      "exp.siolla_period": "أغسطس 2024 — يوليو 2026",
      "exp.siolla_pill": "عن بُعد (Remote) · الرياض، السعودية",
      "exp.siolla_role": "Senior Flutter Developer",
      "exp.siolla_pt1_html": "تطوير وصيانة الميزات الجوهرية لـ <strong>تطبيق مالي واستثماري ضخم عالي الزيارات</strong> يتعامل مع بيانات مستخدمين حساسة ومنطق أعمال معقد.",
      "exp.siolla_pt2_html": "تطبيق <strong>Clean Architecture</strong> مع فصل صارم لطبقات (UI / Domain / Data) لتحقيق أعلى درجات القابلية للتوسع وسهولة الاختبار والـ Maintainability.",
      "exp.siolla_pt3_html": "ربط وتأمين واجهات <strong>REST APIs</strong> متعددة وتطبيق أفضل ممارسات التشفير والمصادقة المعتمدة على الرموز (Tokens).",
      "exp.siolla_pt4_html": "تحسين أداء التطبيق لعرض <strong>بيانات السوق الحية والفورية (Real-time)</strong> وتسليم المهام بانتظام ضمن دورات Agile sprint السريعة مع فريق موزع.",

      "exp.bbsoft_period": "أغسطس 2023 — حتى الآن",
      "exp.bbsoft_cur": "● حالياً",
      "exp.bbsoft_loc": "عدن، اليمن",
      "exp.bbsoft_role": "Flutter Trainer",
      "exp.bbsoft_pt1_html": "تقديم برامج تدريبية متقدمة في Flutter &amp; Dart تغطي <strong>Clean Architecture، إدارة الحالة (BLoC, GetX)</strong>، وأنماط التطبيقات الإنتاجية.",
      "exp.bbsoft_pt2_html": "تدريب وتوجيه <strong>أكثر من 50 مطوراً</strong> — شمل المنهج ربط الـ APIs، خدمات Firebase، هندسة النظم، والنشر على المتاجر.",
      "exp.bbsoft_pt3_html": "إعداد سيناريوهات ومشاريع عملية واقعية تحاكي متطلبات سوق العمل البرمجي الحقيقي.",

      "exp.youit_period": "ديسمبر 2021 — يوليو 2024",
      "exp.youit_role": "Mobile Developer — Flutter",
      "exp.youit_pt1_html": "بناء وإطلاق <strong>9+ تطبيقات Flutter إنتاجية</strong> في قطاعات التجارة الإلكترونية، التوصيل، الأخبار، والخدمات — جميعها منشورة على Google Play و App Store.",
      "exp.youit_pt2_html": "قيادة القرارات الهندسية باستخدام <strong>Clean Architecture و MVC</strong>؛ ودمج واجهات REST APIs ومنظومة Firebase بالكامل.",
      "exp.youit_pt3_html": "التعاون الوثيق مع مصممي واجهات UI/UX (Figma, Adobe XD) لتسليم <strong>واجهات Pixel-Perfect</strong> فائقة الدقة وإدارة دورة حياة التطبيقات بالكامل.",

      "exp.free_period": "يناير 2020 — ديسمبر 2021",
      "exp.free_pill": "عمل حر (Freelance) · عن بُعد",
      "exp.free_role": "Android Developer",
      "exp.free_pt1_html": "تطوير ونشر تطبيقات أندرويد أصلية بلغة <strong>Java ونمط MVVM</strong>؛ ودمج خدمات Firebase (FCM, Realtime DB, Storage) ونظام إعلانات AdMob.",
      "exp.free_pt2_html": "إدارة جميع مراحل المشاريع بشكل مستقل: تحليل المتطلبات، تصميم قواعد البيانات، البرمجة، الاختبار، و<strong>النشر على متجر Google Play</strong>.",

      // Skills Section
      "skills.tag": "المهارات والخبرات التقنية",
      "skills.title_html": "القدرات التقنية التي<br>أضيفها إلى <em>فريقك</em>",
      "skills.cat_mobile": "Mobile & Platforms",
      "skills.cat_arch": "Architecture & State",
      "skills.cat_api": "APIs & Networking",
      "skills.cat_backend": "Backend & SDKs",
      "skills.cat_cicd": "CI/CD & Publishing",
      "skills.cat_ui": "UI/UX & Workflow",

      // Certifications Section
      "certs.tag": "التعلم والتطوير المستمر",
      "certs.title": "الشهادات المهنية",
      "certs.c1_title": "The Complete Flutter Development Bootcamp",
      "certs.c1_by": "يوديمي (Udemy)",
      "certs.c2_title": "The Complete Dart Language Guide",
      "certs.c2_by": "يوديمي (Udemy)",
      "certs.c3_title": "Android Application Development with Java",
      "certs.c3_by": "مهارة تك (MaharaTech)",
      "certs.c4_title": "Project Management Fundamentals",
      "certs.c4_by": "مؤسسة جدارة للتدريب",

      // Contact Section
      "contact.tag": "تواصل معي",
      "contact.title_html": "لنقم ببناء<br>شيء <em>استثنائي</em><br>معاً",
      "contact.sub": "متاح للوظائف الكاملة عن بُعد (Full-time Remote)، المشاريع المستقلة (Freelance)، والتعاون التقني طويل الأمد. سواء كنت بحاجة إلى خبير Flutter للانضمام لفريقك، ربط بوابات دفع وحزم مخصصة، أو بناء تطبيقك من الصفر — أنا جاهز للبدء فوراً.",
      "contact.lbl_wa": "اتصال / WhatsApp",
      "contact.lbl_email": "Email",
      "contact.lbl_github": "GitHub",
      "contact.lbl_linkedin": "LinkedIn",
      "contact.lbl_cv": "Resume / CV",
      "contact.val_cv": "PDF (5+ Years Exp.)",
      "contact.lbl_loc": "Location",
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
      "footer.role": "Senior Flutter Developer · Aden, Yemen",

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
    },

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
    }
  };

  // Dedicated project-level Arabic localized metadata for all 10 projects
  const PROJECT_ARABIC_DATA = {
    "siolla": {
      name: "سيولا | Siolla",
      category: "FinTech · Investment Platform · iOS & Android",
      badge: "Featured Project",
      short_description: "منصة استثمارية متكاملة تحول المدخرات إلى دخل إضافي وتجعل الاستثمار سهلاً ومتاحاً للجميع. توفر تحليلات سوقية لحظية، آلاف الأسهم وصناديق المؤشرات بدون أي عمولات إضافية.",
      overview: "منصة سيولا هي منصة استثمارية دقيقة بُنيت باستخدام Flutter لتحويل المدخرات البسيطة إلى عوائد استثمارية منتظمة. تجعل المنصة الاستثمار متاحاً للجميع من خلال أدوات التوفير والادخار والاستثمار بدون أي تكاليف خفية.\n\nتوفر المنصة أدوات تحليلية حديثة وبيانات سوقية فورية تمكن المستخدمين من تتبع حركة الأسهم وتأثيرها على محافظهم في الوقت الفعلي (Real-time) مع تداول غير محدود وبدون عمولات.",
      stats: [
        { number: "2+", label: "سنوات من التطوير النشط" },
        { number: "Live", label: "على Google Play و App Store" },
        { number: "9+", label: "تطبيقات حية منشورة للمطور" }
      ],
      capabilities: [
        { icon: "trending", title: "بيانات سوق فورية (Real-time Market Data)", description: "تحليلات سوقية وتتبع فوري للمحافظ في الوقت الحقيقي لمساعدة المستخدم على اتخاذ قرارات مالية مدروسة." },
        { icon: "zap", title: "تداول بدون عمولات", description: "تداول غير محدود بدون أي رسوم أو عمولات إضافية، مما يجعل الاستثمار متاحاً للجميع." },
        { icon: "analytics", title: "أدوات تحليل متقدمة", description: "رسوم بيانية وأدوات تحليل فنية متطورة ترشد المستخدم لفهم حركة السوق وأداء المحفظة." },
        { icon: "lock", title: "أمان عالي للبيانات", description: "معمارية Clean Architecture مع فصل دقيق للطبقات لضمان حماية البيانات المالية الحساسة ومنطق الأعمال." },
        { icon: "briefcase", title: "آلاف الأصول المالية (ETFs & Stocks)", description: "تصفح آلاف الأسهم وصناديق المؤشرات المتداولة مع معلومات تفصيلية دقيقة لكل أصل." },
        { icon: "rocket", title: "أداء فائق وسرعة معالجة", description: "عرض ومعالجة فورية للبيانات المالية السريعة لتقديم تجربة استخدام فائقة السلاسة." }
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
      category: "E-Commerce · Apple Devices & Accessories · iOS & Android",
      badge: "Company Project",
      short_description: "تطبيق تجارة إلكترونية متخصص في أجهزة الآيفون الأصلية وملحقات Apple في عدن. تجربة مستخدم فائقة السلاسة مع تصنيفات منظمة وإتمام سريع وآمن للطلبات.",
      overview: "تطبيق أنيس فون هو منصة تجارة إلكترونية متخصصة لبيع هواتف iPhone وملحقات Apple الأصلية في مدينة عدن. يركز التطبيق على تجربة المستخدم السلسة وسرعة التصفح وتصنيف المنتجات بشكل دقيق مع دعم سلة المشتريات والطلبات الفورية وضمان المنتجات الأصلية.",
      stats: [
        { number: "Live", label: "على Google Play و App Store" },
        { number: "+20", label: "تصنيف ومنتج مميز" },
        { number: "UX", label: "تصميم متقن وإتمام طلبات فوري" }
      ],
      capabilities: [
        { icon: "smartphone", title: "كتالوج منتجات Apple الأصلية", description: "تصفح سهل مع فلاتر حسب النوع، السعة، واللون مع صور عالية الجودة ومواصفات تفصيلية دقيقة." },
        { icon: "cart", title: "سلة مشتريات فورية وآمنة", description: "إدارة سلة التسوق وحساب الإجمالي تلقائياً مع خيارات التوصيل واستلام الطلب بكل يسر." },
        { icon: "search", title: "استكشاف سلس للمنتجات (UX-focused)", description: "تصميم يركز على تجربة المستخدم مع تنقل بديهي وبحث سريع للوصول إلى المنتجات في ثوانٍ." },
        { icon: "truck", title: "خدمة التوصيل وتتبع الشحنة", description: "خدمة توصيل متكاملة تغطي كافة مناطق عدن مع إمكانية متابعة حالة الطلب لحظة بلحظة." }
      ],
      architecture_text: "بُني التطبيق باستخدام Flutter مع معمارية Clean Architecture و GoRouter للتنقل المحكم بين الشاشات، مع ربط كامل بواجهات REST APIs لإدارة المنتجات والسلة والطلبات، وتصميم الواجهات بدقة Pixel-Perfect استناداً إلى تصاميم Figma."
    },
    "medalah-store": {
      name: "متجر مظلة | Medalah Store",
      category: "E-Commerce · Nonprofit Foundation · iOS & Android",
      badge: "Company Project",
      short_description: "تطبيق متجر إلكتروني لمؤسسة مظلة لدعم المشاريع والأنشطة المجتمعية. يقدم تجربة تسوق آمنة وسريعة مع ربط سحابي متكامل عبر Firebase.",
      overview: "متجر مظلة ستور هو متجر إلكتروني تابع لمؤسسة مظلة، أُنشئ بهدف دعم وتشجيع مشاريع المؤسسة المجتمعية. يعرض المتجر منتجات متنوعة مثل الملابس، الأكواب، والحقائب التي تحمل شعار وهوية المؤسسة لجمع التبرعات وزيادة الوعي بأنشطتها الإنسانية.\n\nيتيح التطبيق للعملاء تصفح الأقسام والمنتجات، إضافتها إلى سلة التسوق، وقراءة المواصفات الدقيقة مع إتمام عمليات الشراء بخيارات دفع آمنة وسهلة.",
      stats: [
        { number: "Live", label: "على Google Play و App Store" },
        { number: "NGO", label: "دعم مشاريع مؤسسة مظلة المجتمعية" },
        { number: "Firebase", label: "دفع وإدارة سحابية آمنة" }
      ],
      capabilities: [
        { icon: "bag", title: "كتالوج المنتجات والهوية", description: "استعراض منتجات المؤسسة المختلفة مع تفاصيل دقيقة ومواصفات التصنيع والجودة." },
        { icon: "heart", title: "دعم المبادرات المجتمعية", description: "كل عملية شراء تساهم مباشرة في تمويل مشاريع المؤسسة ودعم أنشطتها التنموية." },
        { icon: "lock", title: "عمليات دفع آمنة", description: "خيارات دفع إلكتروني آمنة وموثوقة مدمجة داخل التطبيق لتوفير أقصى درجات الأمان." },
        { icon: "cart", title: "إدارة سلة التسوق", description: "تجربة شراء متكاملة تشمل إدارة السلة، تعديل الكميات، وإتمام الطلب بسلاسة." }
      ],
      architecture_text: "بُني التطبيق باستخدام Flutter ومدعوم بخدمات Firebase السحابية (قواعد البيانات الفورية، التخزين السحابي، والإشعارات)، مع تطبيق مبادئ Material Design لواجهة أنيقة تعكس هوية المؤسسة."
    },
    "361-yemen": {
      name: "361 اليمن | 361 Yemen",
      category: "E-Commerce · Sports & Fashion · iOS & Android",
      badge: "Company Project",
      short_description: "المتجر الإلكتروني الرسمي للعلامة التجارية الرياضية العالمية 361° في اليمن. يقدم الأحذية والملابس الرياضية الأصلية مع تجربة تسوق مميزة وسريعة.",
      overview: "العلامة التجارية العالمية 361 Degrees تعد من أبرز العلامات الرائدة في تصنيع الأحذية والملابس الرياضية حول العالم، وتمتلك أكثر من 7000 متجر دولي وتعد الراعي الرسمي للجان الأولمبية في 28 دولة.\n\nيقدم تطبيق 361 Yemen هذه التجربة العالمية لعملاء السوق المحلي في اليمن، موفراً تصفحاً شاملاً لأحدث المنتجات الرياضية مع خيارات مقاسات دقيقة وخدمة التوصيل السريع.",
      stats: [
        { number: "+7000", label: "متجر حول العالم للعلامة التجارية" },
        { number: "Live", label: "على Google Play و App Store" },
        { number: "28", label: "لجنة أولمبية معتمدة" }
      ],
      capabilities: [
        { icon: "tag", title: "كتالوج المنتجات الرياضية", description: "تصفح تشكيلة واسعة من الأحذية والملابس والمستلزمات الرياضية مع دليل مقاسات تفصيلي." },
        { icon: "cart", title: "تجربة تسوق متكاملة", description: "إدارة متطورة لسلة المشتريات، إتمام آمن للطلبات، وتتبع دقيق لمراحل الشحن." },
        { icon: "globe", title: "علامة عالمية بتطبيق محلي", description: "تجربة مستخدم راقية مخصصة للسوق اليمني مع دعم التوصيل لكافة المحافظات." },
        { icon: "award", title: "تصنيفات رياضية متنوعة", description: "أقسام منظمة تشمل الجري، كرة القدم، التمارين البدنية، والأزياء الرياضية اليومية." }
      ],
      architecture_text: "بُني التطبيق باستخدام Flutter للعمل بكفاءة على iOS و Android، مع ربطه بواجهات REST APIs لمنظومة التجارة الإلكترونية التابعة لتاجرلي، واستخدام Firebase للإشعارات الترويجية والتحليلات."
    },
    "beutiqaty": {
      name: "بوتيكاتي | Beutiqaty",
      category: "E-Commerce · Multi-Vendor Marketplace · iOS & Android",
      badge: "Company Project",
      short_description: "منصة تجارة إلكترونية متعددة التجار تتيح للمتاجر والبوتيكات في عدن بيع منتجاتهم وإدارتها دون الحاجة لإنشاء متاجر مستقلة مكلفة.",
      overview: "بوتيكاتي هي منصة أسواق ومتاجر متعددة (Multi-Vendor Marketplace) تمكن تجار التجزئة وأصحاب البوتيكات في عدن من عرض وبيع منتجاتهم عبر منصة رقمية مركزية وموحدة، كحل اقتصادي وفعال يغنيهم عن تكاليف تطوير تطبيقات مستقلة.\n\nيشكل التطبيق جسراً متكاملاً بين البوتيكات والعملاء، موفراً تجربة تسوق موحدة تسمح بالطلب من عدة متاجر في سلة واحدة وتنسيق عمليات التوصيل.",
      stats: [
        { number: "Live", label: "على Google Play و App Store" },
        { number: "Multi", label: "منصة متاجر وبوتيكات مشتركة" },
        { number: "اقتصادي", label: "حل مجدي لأصحاب الأعمال" }
      ],
      capabilities: [
        { icon: "store", title: "منصة متاجر متعددة (Multi-Vendor)", description: "إمكانية انضمام عدة متاجر وبوتيكات لبيع منتجاتهم والوصول لقاعدة عملاء واسعة." },
        { icon: "bag", title: "استكشاف المنتجات وتصفحها", description: "تصفح منتجات البوتيكات المختلفة في مكان واحد مع فلاتر ذكية وتصنيفات مفصلة." },
        { icon: "card", title: "إتمام شراء موحد وآمن", description: "سلة مشتريات ذكية تدعم منتجات من متاجر متعددة مع حساب دقيق لخيارات الشحن." },
        { icon: "package", title: "إدارة وتوجيه الطلبات", description: "توجيه آلي للطلبات إلى المتاجر المعنية مع تتبع حالة التجهيز والشحن." }
      ],
      architecture_text: "تم بناء التطبيق باستخدام Flutter مع تكامل واجهات REST APIs لإدارة كتالوج المنتجات والسلة الموحدة والطلبات، مع توظيف Firebase للمصادقة وتنبيهات الإشعارات الفورية."
    },
    "aswaq-aden": {
      name: "أسواق عدن | Aswaq Aden",
      category: "City Guide · Google Maps Business Directory · Android & iOS",
      badge: "Company Project",
      short_description: "أول منصة تسويق إلكتروني ودليل تجاري شامل للمحلات والأنشطة التجارية في عدن مدعومة بخرائط Google Maps وجمهور يتجاوز 135 ألف متابع.",
      overview: "أسواق عدن هي منصة إعلانية وتسويقية تأسست عام 2018 كأول منصة تسويق إلكتروني للأعمال والمحلات التجارية في مدينة عدن، وتشكل دليلاً شاملاً لكافة المنشآت والأنشطة التجارية في المدينة.\n\nحققت المنصة انتشاراً واسعاً يتجاوز 65 ألف متابع على فيسبوك و 70 ألف متابع على إنستغرام. يوفر التطبيق دليلاً متكاملاً لبيانات المحلات، مواقعها، ووسائل التواصل معها، مما يسهل على السكان والزوار الوصول إلى أي نشاط تجاري في ثوانٍ معدودة.",
      stats: [
        { number: "+65K", label: "متابع على فيسبوك" },
        { number: "+70K", label: "متابع على إنستغرام" },
        { number: "2018", label: "أول منصة تسويقية رائدة في عدن" }
      ],
      capabilities: [
        { icon: "mapPin", title: "تكامل خرائط Google Maps", description: "استعراض مواقع المحلات والأنشطة التجارية على الخريطة التفاعلية مع الاتجاهات الدقيقة." },
        { icon: "building", title: "دليل تجاري شامل", description: "قائمة مصنفة تضم مئات المنشآت التجارية مع العناوين، أرقام التواصل، وأوقات العمل." },
        { icon: "megaphone", title: "منصة تسويق متطورة", description: "تغطية تسويقية متكاملة للمحلات تشمل التصوير الاحترافي والترويج الرقمي." },
        { icon: "award", title: "تغطية العروض والفعاليات", description: "متابعة مستمرة للافتتاحات، العروض الترويجية، المهرجانات، والخصومات في أسواق عدن." }
      ],
      architecture_text: "بُني التطبيق باستخدام Flutter لأنظمة Android و iOS مع ربط حزمة Google Maps SDK لتحديد المواقع والملاحة، وتكامل واجهات REST APIs لعرض وتحديث بيانات الدليل التجاري بشكل فوري."
    },
    "tagerly-driver": {
      name: "تاجرلي كابتن | Tagerly Driver",
      category: "Delivery & Logistics · Android",
      badge: "Company Project",
      short_description: "منصة إدارة التوصيل لكباتن وسائقي الشحن تمكن شركات التوصيل في عدن من استقبال وتنسيق وتتبع طلبات المتاجر الإلكترونية لحظياً.",
      overview: "تطبيق تاجرلي كابتن هو منصة لوجستية متطورة لإدارة عمليات التوصيل تمكن شركات التوصيل والسائقين في عدن من استقبال المهام وتتبع الطلبات الصادرة من المتاجر الإلكترونية في الوقت الفعلي.\n\nيتيح التطبيق للسائقين استلام طلبات التوصيل، إدارة وتحديد مسارات التوصيل اليومية، وتحديث حالة الطلبات مباشرة للتنسيق الفوري بين التاجر والعميل وشركة الشحن.",
      stats: [
        { number: "Multi", label: "دعم شركات توصيل متعددة" },
        { number: "Real-time", label: "تتبع وتوجيه الطلبات لحظياً" },
        { number: "Aden", label: "تغطية شاملة لكافة المديريات" }
      ],
      capabilities: [
        { icon: "truck", title: "استقبال وإسناد الطلبات (Dispatch)", description: "استلام مهام التوصيل من عدة متاجر إلكترونية مع إدارة طوابير الطلبات بكفاءة." },
        { icon: "navigation", title: "إدارة مسارات التوصيل (Route Management)", description: "تتبع المسارات الجغرافية وتحديث حالات الشحنات لحظياً لضمان دقة وسرعة التسليم." },
        { icon: "building", title: "دعم شركات متعددة (Multi-Company)", description: "إمكانية عمل وتسجيل شركات توصيل مختلفة على المنصة لتغطية متطلبات المتاجر." },
        { icon: "analytics", title: "لوحة تحليلات الكابتن", description: "متابعة أداء السائق، معدلات التوصيل المنجزة، وحساب الأرباح اليومية بوضوح." }
      ],
      architecture_text: "تم تطوير التطبيق باستخدام Flutter مع المعمارية النظيفة (Clean Architecture)، وربطه بواجهات REST APIs لتحديث الحالات وتنسيق المهام اللحظية مع خوادم منظومة تاجرلي اللوجستية."
    },
    "mufeed": {
      name: "مفيد | Mufeed",
      category: "Food & Restaurant Discovery · Android",
      badge: "Company Project",
      short_description: "تطبيق استكشاف المطاعم في عدن — تصفح قوائم الطعام والوجبات، معرفة الأسعار الدقيقة، العناوين، وحساب إجمالي تكلفة الطلبات قبل الذهاب.",
      overview: "تطبيق مفيد هو دليل المطاعم الشامل في مدينة عدن، صُمم لمساعدة المستخدمين على اكتشاف المطاعم، استعراض قوائم الوجبات والأسعار، ومعرفة العناوين بدقة من خلال واجهة استخدام عصرية وبسيطة.\n\nيمكن للمستخدمين تصفح المطاعم حسب التصنيف، الاطلاع على تفاصيل الأصناف، وحساب التكلفة الإجمالية التقديرية للطلبات، مما يجعل اختيار وجهة الطعام قراراً سهلاً ومدروساً.",
      stats: [
        { number: "Aden", label: "تغطية شاملة لمطاعم المدينة" },
        { number: "Menus", label: "أسعار وتفاصيل الوجبات كاملة" },
        { number: "UX", label: "واجهة سريعة وبديهية" }
      ],
      capabilities: [
        { icon: "coffee", title: "استكشاف المطاعم", description: "تصفح مطاعم عدن حسب نوع الوجبات، المنطقة، والمطبخ المفضل." },
        { icon: "menu", title: "قوائم الطعام والأسعار (Full Menus)", description: "استعراض المنيو بالكامل مع الأسعار، المكونات، وصور الوجبات." },
        { icon: "mapPin", title: "العناوين والمواقع (Locations)", description: "الوصول السريع إلى مواقع وعناوين المطاعم وأرقام التواصل." },
        { icon: "dollar", title: "حساب تكلفة الطلب (Price Estimation)", description: "أداة ذكية لحساب إجمالي تكلفة الوجبات قبل الزيارة لتسهيل التخطيط." }
      ],
      architecture_text: "بُني التطبيق باستخدام Flutter مع واجهات REST APIs لجلب بيانات المطاعم وقوائم الأسعار، مع تطبيق إرشادات Material Design لتقديم تجربة تصفح هادئة وسريعة."
    },
    "stc-aden": {
      name: "تطبيق STC عدن الرسمي",
      category: "News & Media · Jaridah CMS · Android",
      badge: "Company Project",
      short_description: "التطبيق الإخباري الرسمي لمحافظة عدن المرتبط بنظام جريدة CMS من YOU-IT لنقل الأخبار العاجلة والبيانات الرسمية مع إشعارات فورية.",
      overview: "تطبيق STC عدن هو المنصة الإخبارية الرسمية لمحافظة عدن، المرتبط بنظام إدارة المحتوى المتقدم (Jaridah CMS) المطور لدى شركة YOU-IT. يوفر التطبيق تغطية حية للأخبار والأحداث والبيانات الرسمية مع إشعارات فورية عبر Firebase.\n\nيقدم التطبيق تجربة قراءة مريحة للمستخدمين تمكنهم من متابعة المستجدات المحلية أولاً بأول وحفظ الأخبار ومشاركتها بسهولة.",
      stats: [
        { number: "Real-time", label: "تحديثات وتغطية إخبارية فورية" },
        { number: "FCM", label: "تنبيهات الأخبار العاجلة" },
        { number: "Aden", label: "تغطية شاملة لعموم المحافظة" }
      ],
      capabilities: [
        { icon: "newspaper", title: "تغذية إخبارية لحظية (Live Feed)", description: "عرض الأخبار والبيانات الرسمية فور نشرها عبر الارتباط بنظام Jaridah CMS." },
        { icon: "bell", title: "إشعارات الأخبار العاجلة (Push Notifications)", description: "تنبيهات فورية عبر Firebase Cloud Messaging للأخبار والتطورات الهامة." },
        { icon: "smartphone", title: "تجربة قراءة مميزة ومريحة", description: "واجهة قراءة سلسة ومصنفة حسب الأقسام الإخبارية والموضوعات." }
      ],
      architecture_text: "تم تطوير التطبيق باستخدام Flutter وتكامله عبر REST API مع نظام إدارة المحتوى Jaridah CMS، مع توظيف Firebase Cloud Messaging لبث الإشعارات العاجلة بفاعلية وسرعة."
    },
    "south-water": {
      name: "مياه الجنوب | South Water",
      category: "Delivery & Utility · Android",
      badge: "Company Project",
      short_description: "تطبيق طلب وتوصيل مياه الشرب النقية لكافة مناطق ومديريات محافظة عدن — تحديد المنطقة، جدولة الطلب، وتتبع مسار التوصيل.",
      overview: "تطبيق مياه الجنوب هو تطبيق خدمي ولوجستي مخصص لطلب وتوصيل مياه الشرب المعبأة والنقية لجميع مناطق ومديريات محافظة عدن. يسهل التطبيق عملية طلب المياه للمنازل، الشركات، والمساجد مع ميزات تحديد المناطق وجدولة مواعيد التوصيل.\n\nصُمم التطبيق ليوفر أقصى درجات السهولة للمستخدم مع إمكانية حفظ المواقع ومتابعة حالة التوصيل وقواعد بيانات محلية لحفظ سجل الطلبات.",
      stats: [
        { number: "Aden", label: "تغطية كاملة لكافة المديريات" },
        { number: "On-demand", label: "خدمة توصيل سريعة ومجدولة" },
        { number: "Tracking", label: "متابعة وتحديث حالة الشحنة" }
      ],
      capabilities: [
        { icon: "droplet", title: "طلب وتوصيل المياه", description: "خدمة طلب مياه الشرب النقية بسهولة مع خيارات كميات متعددة وتوصيل سريع." },
        { icon: "mapPin", title: "تحديد المنطقة الجغرافية", description: "اختيار عنوان التوصيل بدقة من قائمة شاملة تغطي كافة أحياء ومديريات عدن." },
        { icon: "package", title: "إدارة ومتابعة الطلبات", description: "تتبع حالة الطلب من الاستلام وحتى باب المنزل في الوقت الفعلي." },
        { icon: "database", title: "تخزين محلي للبيانات (SQLite)", description: "دعم التخزين المحلي عبر SQLite لحفظ سجل الطلبات والتفضيلات بدون إنترنت." }
      ],
      architecture_text: "بُني التطبيق باستخدام Flutter مع Firebase للخدمات السحابية وقاعدة بيانات SQLite للتخزين المحلي، مع تكامل واجهات REST APIs لمعالجة الطلبات وتتبع التوصيل."
    }
  };

  function getCurrentLang() {
    if (typeof window !== "undefined" && window.location && window.location.pathname.includes("/en/")) {
      return "en";
    }
    return (typeof localStorage !== "undefined" ? localStorage.getItem("yonas_portfolio_lang") : null) || "ar";
  }

  function setLanguage(lang) {
    if (lang !== "en" && lang !== "ar") lang = "ar";
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("yonas_portfolio_lang", lang);
    }
    applyTranslations(lang);
  }

  function toggleLanguage() {
    const isEnPage = typeof window !== "undefined" && window.location.pathname.includes("/en/");
    const nextLang = isEnPage ? "ar" : (getCurrentLang() === "en" ? "ar" : "en");
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("yonas_portfolio_lang", nextLang);
    }

    if (typeof window !== "undefined" && window.location) {
      const path = window.location.pathname;
      const search = window.location.search || "";
      const hash = window.location.hash || "";

      // If currently on English static page and clicking to Arabic
      if (isEnPage && nextLang === "ar") {
        let arPath = path.replace("/en/", "/").replace(/\/\/+/g, "/");
        if (arPath === "") arPath = "/";
        window.location.href = arPath + search + hash;
        return "ar";
      }

      // If currently on Arabic static page and clicking to English
      if (!isEnPage && nextLang === "en") {
        let enPath;
        if (path.endsWith("/") || path.endsWith("/index.html") || path === "" || path === "/") {
          enPath = path.endsWith("index.html") ? path.replace(/index\.html$/, "en/index.html") : (path.replace(/\/?$/, "/en/index.html"));
        } else if (path.includes("/projects/")) {
          enPath = path.replace("/projects/", "/en/projects/");
        } else {
          enPath = "/en" + (path.startsWith("/") ? path : "/" + path);
        }
        window.location.href = enPath + search + hash;
        return "en";
      }
    }

    setLanguage(nextLang);
    return nextLang;
  }

  function t(key, lang) {
    lang = lang || getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ar;
    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.ar[key] || TRANSLATIONS.en[key] || key);
  }

  function getProjectArabic(slug) {
    return PROJECT_ARABIC_DATA[slug] || null;
  }

  function applyTranslations(lang) {
    lang = lang || getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ar;
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
    TRANSLATIONS,
    PROJECT_ARABIC_DATA
  };

  // Auto-initialize when DOM is ready
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => applyTranslations(getCurrentLang()));
    } else {
      applyTranslations(getCurrentLang());
    }
  }

})(typeof window !== "undefined" ? window : global);
