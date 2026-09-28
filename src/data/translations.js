export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Operational Suites',
      oilfield: 'Oil Field & Remote Ops',
      trust: 'Certifications & Trust',
      rfp: 'Request Proposal (RFP)',
      contact: 'Direct Contact',
      langToggle: 'العربية',
    },
    hero: {
      badge: 'MISSION-CRITICAL TECHNOLOGY PARTNER — IRAQ',
      headline: 'Enterprise Infrastructure, Industrial Defense & Operational AI',
      subhead: 'Architecting high-availability IT backbones, TIA-942 data centers, ATEX-grade oil field monitoring, and cyber defense for Iraq’s commercial enterprises and critical energy operations.',
      ctaRfp: 'Launch RFP Configurator',
      ctaServices: 'Explore Operational Suites',
      ctaWhatsapp: 'WhatsApp Engineering Desk',
      metrics: [
        { value: '99.999%', label: 'Uptime SLA Target', sub: 'High-availability architecture' },
        { value: '180+ km', label: 'Fiber & Wireless Backbone', sub: 'Deployed across urban & field zones' },
        { value: '4,800+', label: 'Secured Perimeter Nodes', sub: 'CCTV, radar & biometric access' },
        { value: '< 24h', label: 'Consultation Response', sub: 'Senior systems engineer review' },
      ]
    },
    trust: {
      title: 'Standards, Compliance & Tier-1 Ecosystem',
      subtitle: 'Engineered in compliance with international industrial safety, data center reliability, and cybersecurity governance standards.',
      badges: [
        { code: 'TIA-942', name: 'Data Center Standard', desc: 'Rated-3 & Rated-4 physical architecture design, power redundancy, and HVAC cooling standards.' },
        { code: 'ISO/IEC 27001', name: 'Information Security', desc: 'Enterprise-wide information security management system (ISMS) implementation & auditing.' },
        { code: 'ATEX / IECEx', name: 'Hazardous Environments', desc: 'Zone 1 & Zone 2 certified explosion-proof enclosures for oil & gas refinery deployments.' },
        { code: 'ISO 9001:2015', name: 'Quality Management', desc: 'Standardized operational frameworks, cabling certification, and SLA lifecycle management.' },
      ],
      partnersHeadline: 'Interoperable with Tier-1 Global Technology Ecosystems',
      partners: ['Cisco Systems', 'Schneider Electric', 'Fortinet', 'Dahua Industrial', 'Hikvision Pro', 'Dell Technologies', 'Furukawa Electric', 'MikroTik Enterprise']
    },
    suites: {
      title: 'Operational Technology Suites',
      subtitle: 'Sprawling capabilities grouped into three focused enterprise pillars designed for mission-critical reliability.',
      filterAll: 'All Suites',
      requestPillarRfp: 'Configure RFP for this Suite',
      pillars: [
        {
          id: 'infrastructure',
          title: 'Critical Infrastructure & Power Systems',
          category: 'PILLAR 01',
          tagline: 'Resilient digital backbones, high-density server halls, and continuous power protection.',
          description: 'Turnkey engineering for high-reliability data centers, certified structured cabling, campus fiber rings, and redundant wireless long-haul networks tailored for Iraqi climate extremes.',
          specs: [
            'TIA-942 Tier III compliant server room architecture & raised flooring',
            'Single-mode & multi-mode armored fiber optic backbone laying (OTDR certified)',
            'High-capacity licensed microwave point-to-point & Wi-Fi 6/7 campus meshes',
            'Modular N+1 UPS systems, automatic transfer switches (ATS) & industrial generators'
          ],
          technologies: ['TIA-942', 'OTDR Testing', 'Single-Mode Armored Fiber', 'N+1 Redundant UPS', 'Cold/Hot Aisle Containment']
        },
        {
          id: 'security',
          title: 'Physical & Facility Security',
          category: 'PILLAR 02',
          tagline: 'Zero-trust perimeter protection, automated access gates, and industrial surveillance.',
          description: 'Defend physical facilities, corporate headquarters, and remote field perimeters with integrated electronic gates, anti-ram barriers, automatic license plate recognition (ALPR), and thermal night-vision.',
          specs: [
            'Hydraulic crash bollards, heavy-duty barrier arms & anti-ram speed gates',
            'Thermal dual-spectrum CCTV with AI human/vehicle classification and radar tracking',
            'Integrated biometric access control, RFID turnstiles & visitor credentialing',
            'Centralized Command & Control Video Management Systems (VMS) with failover recording'
          ],
          technologies: ['Crash-Rated K12/M50', 'ALPR / LPR Engines', 'Long-Range Thermal Optics', 'Biometric Multi-Factor', 'Unified VMS']
        },
        {
          id: 'cyber_ai',
          title: 'Cyber Defense & Operational AI',
          category: 'PILLAR 03',
          tagline: 'Threat intelligence, industrial SCADA monitoring, and bespoke automation software.',
          description: 'Harden organizational networks against APTs and ransomware while applying custom artificial intelligence models to operational telemetry, document flows, and pipeline monitoring.',
          specs: [
            '24/7 Security Operations Center (SOC) monitoring, SIEM integration & endpoint isolation',
            'SCADA, DCS & PLC industrial network segmentation complying with IEC 62443',
            'Custom operational dashboards, oilfield production log processing & workflow automation',
            'Computer vision models for PPE compliance, flare stack thermal analysis & intrusion alerts'
          ],
          technologies: ['IEC 62443 Industrial Security', 'Next-Gen SIEM/SOAR', 'SCADA Network Air-Gapping', 'Enterprise Vision AI', 'Custom Web/ERP Portals']
        }
      ]
    },
    oilfield: {
      badge: 'HARSH ENVIRONMENT DEPLOYMENTS',
      title: 'Oil Field & Remote Operations Engineering',
      subtitle: 'Engineered specifically for the extreme conditions of Southern Iraq’s energy basins—including Rumaila, Zubair, West Qurna, and Missan fields.',
      highlight: 'Operating in 55°C ambient temperatures, desert sandstorms, and explosive gas classifications requires specialized hardware and certified field practices.',
      pillars: [
        {
          title: 'ATEX / IECEx Explosion-Proof Certified',
          desc: 'Class I, Division 1 & 2 / Zone 1 & 2 rated CCTV cameras, junction boxes, and sealed wireless transceivers preventing electrical ignition in hydrocarbon atmospheres.'
        },
        {
          title: 'Sand, Heat & Thermal Hardening',
          desc: 'IP66/IP67 ingress-protected enclosures with active closed-loop thermoelectric cooling, surge suppression, and dual-layer filtration resisting fine desert dust.'
        },
        {
          title: 'Autonomous Hybrid Connectivity',
          desc: 'Cellular private LTE, redundant microwave backhauls, and auto-failover satellite links ensuring SCADA and CCTV streams reach headquarters during public network blackouts.'
        },
        {
          title: 'Rapid Field Technician Dispatch',
          desc: 'Certified field engineering teams with oil concession safety passes (HSE compliant) stationed in Basra for on-site preventive maintenance and rapid emergency repair.'
        }
      ],
      slaBox: {
        title: 'Critical Operations SLA Matrix',
        items: [
          { label: 'Ambient Thermal Range', value: '-10°C to +65°C continuous' },
          { label: 'Uptime Commitment', value: '99.99% critical links' },
          { label: 'Field Response Window', value: '< 4 hours in Basra/Zubair concession' },
          { label: 'Certifications Held', value: 'BOSIET / H2S / HSE Level 3 certified personnel' }
        ]
      }
    },
    rfp: {
      badge: 'STRUCTURED PROCUREMENT ENGINE',
      title: 'Request for Proposal (RFP) & Engineering Consultation',
      subtitle: 'Submit your project parameters to receive an architectural scope breakdown, preliminary Bill of Quantities (BOQ), and an assigned technical director within 24 hours.',
      directCallNotice: 'Need immediate emergency escalation? Contact our direct Baghdad or Basra engineering desks below.',
      steps: {
        step1: '1. Project Scope',
        step2: '2. Site & Location',
        step3: '3. Technical Specs & Verification',
      },
      form: {
        pillarLabel: 'Select Primary Operational Pillar *',
        subServicesLabel: 'Specific Modules Required (Select all that apply)',
        locationLabel: 'Deployment Governorate / Region *',
        locations: [
          'Baghdad (Commercial / Gov / Data Center)',
          'Basra — North / South Rumaila Concession',
          'Basra — Zubair / Khor Al-Zubair Industrial Zone',
          'Basra — City & Commercial Ports',
          'Missan — Halfaya / Buzurgan Fields',
          'Dhi Qar / Nasiriah',
          'Erbil & Kurdistan Region',
          'Other Iraqi Governorate',
        ],
        facilityTypeLabel: 'Facility Classification *',
        facilityTypes: [
          'Enterprise Headquarters / Commercial Campus',
          'Dedicated Tier II/III Data Center',
          'Industrial Plant / Oil & Gas Field Concession',
          'Government / Municipal Infrastructure',
          'Logistics Hub / Port / Warehouse Complex',
        ],
        timelineLabel: 'Target Execution Timeline *',
        timelines: [
          'Immediate (Within 30 Days - Emergency / RFP Active)',
          'Q1 / Q2 (1 to 3 Months)',
          'Budget Planning / Future Tender (3 to 6 Months)',
        ],
        nameLabel: 'Lead Engineer or Procurement Officer Name *',
        namePlaceholder: 'e.g., Eng. Tariq Al-Hashimi',
        companyLabel: 'Organization / Enterprise Name *',
        companyPlaceholder: 'e.g., Iraq Energy Consortium / Al-Mansour Bank',
        emailLabel: 'Official Corporate Email *',
        emailPlaceholder: 'procurement@organization.iq',
        phoneLabel: 'Direct Phone / Mobile *',
        phonePlaceholder: '+964 780 000 0000',
        notesLabel: 'Project Scope Brief & Bill of Quantities (BOQ) Summary',
        notesPlaceholder: 'Outline required camera counts, fiber distances, server rack requirements, gate widths, or specific tender reference numbers...',
        fileLabel: 'Attach Technical Specification Sheet or RFP Document (Simulated)',
        fileHint: 'PDF, DOCX, XLSX, DWG or ZIP up to 25MB',
        fileSelected: 'Attached file:',
        removeFile: 'Remove',
        submitButton: 'Submit Formal RFP Specification',
        submitting: 'Verifying & Dispatching to Engineering Desk...',
        successTitle: 'RFP Successfully Dispatched to Senior Engineering',
        successRef: 'Official Reference Code:',
        successMsg: 'Our lead systems architect has received your parameters. A preliminary technical assessment and confirmation call will take place within 24 business hours.',
        successDetails: 'Summary of Dispatched Parameters:',
        resetButton: 'Submit Another Project Inquiry',
        whatsappSend: 'Send Copy via Direct WhatsApp Desk',
      },
      escalation: {
        title: 'Direct Escalation Channels',
        baghdadHq: 'Baghdad Headquarters',
        baghdadAddress: 'Al-Mansour District, Baghdad, Iraq',
        basraHub: 'Basra Energy Operations Desk',
        basraAddress: 'Zubair Road / Rumaila Logistics Corridor, Basra, Iraq',
        phone: '+964 786 080 8090',
        phone2: '+964 770 123 4567',
        email: 'info@thesmartinnovation.com',
        rfpEmail: 'rfp@thesmartinnovation.com',
        hours: 'Saturday – Thursday: 08:30 – 17:30 (NOC 24/7/365)',
        slaGuarantee: 'Strict 24-Hour Engineering Consultation Response SLA Guaranteed'
      }
    },
    footer: {
      desc: 'The Smart Innovation is Iraq’s trusted engineering partner for turnkey critical infrastructure, certified data centers, physical security automation, and operational AI.',
      navTitle: 'Quick Navigation',
      suitesTitle: 'Operational Suites',
      locationsTitle: 'Operating Hubs',
      baghdad: 'Baghdad: Al-Mansour Commercial Center',
      basra: 'Basra: Rumaila-Zubair Logistics Route',
      rights: 'All rights reserved. Registered Technology Enterprise in the Republic of Iraq.',
      privacyNotice: 'Enterprise Data Confidentiality Enforced (NDA Compliant).'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الأجنحة التشغيلية',
      oilfield: 'الحقول النفطية والبيئات الحرجة',
      trust: 'المعايير والاعتمادات',
      rfp: 'طلب عرض فني (RFP)',
      contact: 'الاتصال المباشر',
      langToggle: 'English',
    },
    hero: {
      badge: 'الشريك التكنولوجي للعمليات الحرجة — العراق',
      headline: 'البنية التحتية للمؤسسات، الحماية الصناعية والذكاء الاصطناعي',
      subhead: 'تصميم وبناء شبكات بيانات عالية الموثوقية، مراكز بيانات بمعيار TIA-942، منظومات مراقبة وحماية معتمدة للبيئات النفطية ATEX، وحلول دفاع سيبراني متقدمة للقطاعين الصناعي والتجاري في العراق.',
      ctaRfp: 'بدء معالج طلب العروض (RFP)',
      ctaServices: 'استكشاف الأجنحة التشغيلية',
      ctaWhatsapp: 'مكتب المهندسين عبر واتساب',
      metrics: [
        { value: '99.999%', label: 'مستوى استمرارية الخدمة (SLA)', sub: 'بنية تشغيلية مزدوجة التكرار' },
        { value: '+180 كم', label: 'مسارات كابلات الألياف واللاسلكي', sub: 'منفذة في المدن والحقول النفطية' },
        { value: '+4,800', label: 'نقطة حماية وتحكم طرفية', sub: 'كاميرات حرارية، رادارات وبوابات' },
        { value: 'أقل من 24 س', label: 'زمن الاستجابة للاستشارة', sub: 'مراجعة من مهندس نظم أول' },
      ]
    },
    trust: {
      title: 'المعايير الدولية، التوافق ومنظومة الشركاء',
      subtitle: 'نلتزم بأعلى معايير السلامة الصناعية العالمية ومستويات موثوقية مراكز البيانات وحوكمة الأمن السيبراني.',
      badges: [
        { code: 'TIA-942', name: 'معايير مراكز البيانات', desc: 'تصميم البنية التحتية والكهربائية والتبريد وفق مستويات الموثوقية Rated-3 و Rated-4.' },
        { code: 'ISO/IEC 27001', name: 'إدارة أمن المعلومات', desc: 'تطبيق وتدقيق نظام إدارة أمن المعلومات المؤسسي (ISMS) الصارم لحماية بيانات المنشآت.' },
        { code: 'ATEX / IECEx', name: 'البيئات الخطرة والغازية', desc: 'تجهيزات وحافظات مقاومة للانفجار معتمدة لمناطق Zone 1 و Zone 2 في المصافي والحقول النفطية.' },
        { code: 'ISO 9001:2015', name: 'إدارة الجودة الشاملة', desc: 'أطر تشغيلية معتمدة لضمان جودة التمديدات واختبارات فحص الكابلات وضمانات استمرارية التشغيل.' },
      ],
      partnersHeadline: 'توافق كامل مع كبرى المنظومات التقنية العالمية المعتمدة',
      partners: ['Cisco Systems', 'Schneider Electric', 'Fortinet', 'Dahua Industrial', 'Hikvision Pro', 'Dell Technologies', 'Furukawa Electric', 'MikroTik Enterprise']
    },
    suites: {
      title: 'الأجنحة والحلول التشغيلية المتكاملة',
      subtitle: 'هيكلة منظمة لقدراتنا ضمن ثلاثة محاور أساسية مكرسة لضمان أقصى درجات الاستقرار والموثوقية المؤسسية.',
      filterAll: 'جميع الأجنحة',
      requestPillarRfp: 'تخصيص طلب العرض لهذا الجناح',
      pillars: [
        {
          id: 'infrastructure',
          title: 'البنية التحتية الحيوية وأنظمة الطاقة',
          category: 'المحور 01',
          tagline: 'عمود فقري رقمي متين، قاعات خوادم فائقة التجهيز، وحماية مستمرة للتغذية الكهربائية.',
          description: 'تصميم وتنفيذ متكامل لمراكز البيانات، شبكات الألياف الضوئية المسلحة، والشبكات اللاسلكية ذات المدى البعيد المصممة لتحمل المناخ الصحراوي العراقي.',
          specs: [
            'هندسة غرف خوادم مطابقة لمعايير TIA-942 Tier III مع أرضيات مرتفعة وعزل حراري',
            'تمديد كابلات ألياف ضوئية مسلحة Single-mode / Multi-mode مع اختبارات تصديق OTDR',
            'روابط مايكرويف مرخصة عالية السعة وشبكات لاسلكية صناعية Wi-Fi 6/7 للمجمعات',
            'أنظمة طاقة غير منقطعة (UPS) معيارية N+1 ومفاتيح تحويل آلية (ATS) ومولدات صناعية'
          ],
          technologies: ['معيار TIA-942', 'فحص OTDR للألياف', 'كابلات مسلحة مدرعة', 'طاقة احتياطية N+1', 'عزل الممرات الحارة والباردة']
        },
        {
          id: 'security',
          title: 'الأمن الفيزيائي وحماية المنشآت',
          category: 'المحور 02',
          tagline: 'حماية متقدمة للمحيط الخارجي، بوابات إلكترونية ذكية، ومراقبة بصرية بالرؤية الحرارية.',
          description: 'تأمين المقرات الرئيسية ومواقع العمل والمحيط الأمني للمنشآت باستخدام مصدات هيدروليكية، بوابات أمنية، كاميرات حرارية بعيدة المدى، وقراءة لوحات المركبات (LPR).',
          specs: [
            'مصدات هيدروليكية مقاومة للاقتحام Crash-rated وبوابات إلكترونية سريعة للحراسة',
            'كاميرات مراقبة ثنائية الطيف بصرية وحرارية مع خوارزميات رادار وتمييز المركبات والأشخاص',
            'أنظمة تحكم بالدخول بايومترية بالبصمة والوجه وبوابات دوارة ذكية لتدقيق التصاريح',
            'غرف تحكم ومراقبة مركزية (VMS) مدعومة بخوادم تسجيل احتياطية دائمة'
          ],
          technologies: ['مصدات معيار K12/M50', 'أنظمة قراءة اللوحات ALPR', 'بصريات حرارية بعيدة المدى', 'تحقق بايومتري متعدد', 'إدارة فيديو مركزية VMS']
        },
        {
          id: 'cyber_ai',
          title: 'الدفاع السيبراني والذكاء الاصطناعي التشغيلي',
          category: 'المحور 03',
          tagline: 'رصد استباقي للتهديدات، حماية شبكات سكادا الصناعية، وبرمجيات مخصصة للتحكم الآلي.',
          description: 'تحصين البنية التحتية الرقمية ضد الهجمات الموجهة مع دمج نماذج الذكاء الاصطناعي لتحليل البيانات الميدانية، أتمتة الإجراءات الورقية، ورصد خطوط الأنابيب والآبار.',
          specs: [
            'مراقبة أمنية مستمرة 24/7 عبر مركز العمليات الأمنية (SOC) وتكامل منصات SIEM',
            'عزل وتأمين شبكات التحكم الصناعي SCADA / DCS / PLC وفق معيار IEC 62443',
            'لوحات تحكم تشغيلية مخصصة، معالجة سجلات الإنتاج النفطي وأتمتة مسارات العمل',
            'رؤية حاسوبية ذكية لمراقبة شروط السلامة المهنية (PPE) وتحليل حرارة شعلات الغاز واكتشاف التسلل'
          ],
          technologies: ['معيار أمن المنشآت IEC 62443', 'منصات SIEM/SOAR المتقدمة', 'عزل شبكات سكادا الصناعية', 'رؤية حاسوبية بالذكاء الاصطناعي', 'بوابات برمجية مخصصة ERP']
        }
      ]
    },
    oilfield: {
      badge: 'حلول البيئات الصحراوية والصناعية القاسية',
      title: 'هندسة الحقول النفطية والعمليات النائية',
      subtitle: 'صممت خصيصاً لتلائم الظروف التشغيلية شديدة القسوة في أحواض الطاقة بجنوب العراق — مثل حقول الرميلة، الزبير، غرب القرنة، وميسان.',
      highlight: 'العمل في درجات حرارة تصل إلى 55 مئوية، والعواصف الرملية، ووجود الغازات الهيدروكربونية القابلة للاشتعال يتطلب أجهزة ومعدات حاصلة على شهادات مطابقة دولية وكوادر مدربة.',
      pillars: [
        {
          title: 'شهادات ATEX / IECEx المقاومة للانفجار',
          desc: 'كاميرات مراقبة وصناديق ربط ووحدات بث لاسلكية معتمدة لمناطق Zone 1 و Zone 2 تمنع أي شرارة كهربائية في الأجواء المشبعة بالغازات.'
        },
        {
          title: 'مقاومة الرمال، الحرارة والعوامل الجوية',
          desc: 'حافظات محكمة بدرجة حماية IP66/IP67 مع تبريد كهروحراري مغلق وموانع صواعق وفلاتر مزدوجة لمنع دخول ذرات الغبار الصحراوي الدقيقة.'
        },
        {
          title: 'اتصال هجين ومستقل ذاتياً',
          desc: 'شبكات خلوية خاصة LTE، وروابط مايكرويف احتياطية، واتصال فضائي تلقائي يضمن تدفق بيانات SCADA والكاميرات إلى غرف العمليات حتى عند انقطاع الشبكات العامة.'
        },
        {
          title: 'استجابة ميدانية سريعة وفورية',
          desc: 'فرق صيانة ودعم هندسي حاصلة على تصاريح دخول الحقول والمنشآت النفطية (BOSIET & HSE) متمركزة في البصرة للصيانة الوقائية والتدخل الطارئ.'
        }
      ],
      slaBox: {
        title: 'مصفوفة اتفاقية مستوى الخدمة (SLA) للحقول',
        items: [
          { label: 'نطاق درجات الحرارة المحيطة', value: 'من 10- إلى +65 مئوية متواصلة' },
          { label: 'ضمان استمرارية الربط', value: '99.99% للخطوط الحرجة' },
          { label: 'الوصول الميداني في حالات الطوارئ', value: 'أقل من 4 ساعات في حقول البصرة والزبير' },
          { label: 'الشهادات الميدانية للكوادر', value: 'شهادات سلامة معتمدة BOSIET / H2S / HSE' }
        ]
      }
    },
    rfp: {
      badge: 'منظومة العطاءات والمشتريات المؤسسية',
      title: 'طلب عرض فني ومواصفات هندسية (RFP)',
      subtitle: 'أرسل معايير مشروعك للحصول على دراسة معمارية أولية وجداول كميات (BOQ) وتعيين مدير فني متخصص لمشروعك خلال 24 ساعة.',
      directCallNotice: 'هل تحتاج إلى تصعيد طارئ فوري؟ اتصل بمكتبنا الهندسي المباشر في بغداد أو البصرة أدناه.',
      steps: {
        step1: '1. نطاق العمل والمحور',
        step2: '2. الموقع والتصنيف الميداني',
        step3: '3. المواصفات الفنية والتحقق',
      },
      form: {
        pillarLabel: 'حدد المحور التشغيلي الأساسي *',
        subServicesLabel: 'الوحدات التقنية المطلوبة (اختر كل ما ينطبق)',
        locationLabel: 'المحافظة / الموقع الميداني *',
        locations: [
          'بغداد (مقرات تجارية / حكومية / مراكز بيانات)',
          'البصرة — امتياز حقل شمال / جنوب الرميلة',
          'البصرة — المنطقة الصناعية الزبير / خور الزبير',
          'البصرة — المدينة والموانئ البحرية التجارية',
          'ميسان — حقول الحلفاية / البزركان',
          'ذي قار / الناصرية',
          'أربيل وإقليم كوردستان',
          'محافظة عراقية أخرى',
        ],
        facilityTypeLabel: 'تصنيف المنشأة *',
        facilityTypes: [
          'مقر رئيسي لمؤسسة / مجمع تجاري وإداري',
          'مركز بيانات مخصص Tier II / Tier III',
          'منشأة صناعية / امتياز حقل نفط وغاز',
          'بنية تحتية حكومية / بلدية',
          'مجمع لوجستي / ميناء / مخازن كبرى',
        ],
        timelineLabel: 'الجدول الزمني المستهدف للتنفيذ *',
        timelines: [
          'فوري (خلال 30 يوماً - مناقصة نشطة أو متطلب عاجل)',
          'خلال 1 إلى 3 أشهر',
          'تخطيط ميزانية / إعداد مناقصة قادمة (3 إلى 6 أشهر)',
        ],
        nameLabel: 'اسم المهندس المسؤول أو مسؤول المشتريات *',
        namePlaceholder: 'مثال: المهندس طارق الهاشمي',
        companyLabel: 'اسم المؤسسة / الشركة / الجهة *',
        companyPlaceholder: 'مثال: ائتلاف مشاريع الطاقة / مصرف المنصور',
        emailLabel: 'البريد الإلكتروني المؤسسي الرسمي *',
        emailPlaceholder: 'procurement@organization.iq',
        phoneLabel: 'رقم الهاتف المباشر / الموبايل *',
        phonePlaceholder: '+964 780 000 0000',
        notesLabel: 'ملخص نطاق المشروع وجدول الكميات (BOQ)',
        notesPlaceholder: 'حدد أعداد الكاميرات التقريبية، مسافات الألياف، قياسات البوابات، أحجام قاعات الخوادم، أو رقم المناقصة المرجعي...',
        fileLabel: 'إرفاق وثيقة العطاء أو كراس الشروط والمواصفات (محاكاة)',
        fileHint: 'ملفات PDF, DOCX, XLSX, DWG أو ZIP حتى 25 ميجابايت',
        fileSelected: 'الملف المرفق:',
        removeFile: 'حذف',
        submitButton: 'إرسال طلب العرض الفني الرسمي',
        submitting: 'جارٍ التحقق وتوجيه الطلب للمكتب الهندسي...',
        successTitle: 'تم إرسال طلب العرض الفني بنجاح للمكتب الهندسي',
        successRef: 'الرمز المرجعي الرسمي للمشروع:',
        successMsg: 'تم استلام بيانات مشروعك من قبل كبير مهندسي النظم لدينا. سيتم إجراء التقييم الفني الأولي والتواصل معك هاتفياً خلال 24 ساعة عمل.',
        successDetails: 'ملخص معايير المشروع المسجلة:',
        resetButton: 'تقديم استفسار عن مشروع آخر',
        whatsappSend: 'إرسال نسخة مباشرة عبر واتساب الهندسي',
      },
      escalation: {
        title: 'قنوات الاتصال والتصعيد المباشر',
        baghdadHq: 'المقر الرئيسي — بغداد',
        baghdadAddress: 'حي المنصور، بغداد، العراق',
        basraHub: 'المكتب التشغيلي للحقول — البصرة',
        basraAddress: 'طريق الزبير / الممر اللوجستي للرميلة، البصرة، العراق',
        phone: '8090 080 786 964+',
        phone2: '4567 123 770 964+',
        email: 'info@thesmartinnovation.com',
        rfpEmail: 'rfp@thesmartinnovation.com',
        hours: 'السبت – الخميس: 08:30 – 17:30 (مركز المراقبة 24/7)',
        slaGuarantee: 'نلتزم بالرد وتقديم الاستشارة الهندسية الأولية خلال 24 ساعة عمل'
      }
    },
    footer: {
      desc: 'شركة الابتكار الذكي هي الشريك الهندسي الموثوق في العراق لتنفيذ البنية التحتية الحيوية، مراكز البيانات المعتمدة، أمن المنشآت وحلول الذكاء الاصطناعي التشغيلية.',
      navTitle: 'روابط سريعة',
      suitesTitle: 'الأجنحة التشغيلية',
      locationsTitle: 'المراكز التشغيلية',
      baghdad: 'بغداد: حي المنصور، المجمع التجاري',
      basra: 'البصرة: محور عمليات الرميلة - الزبير',
      rights: 'جميع الحقوق محفوظة. شركة تقنية مسجلة في جمهورية العراق.',
      privacyNotice: 'نلتزم باتفاقيات سرية البيانات وحماية المعلومات المؤسسية (NDA).'
    }
  }
};
