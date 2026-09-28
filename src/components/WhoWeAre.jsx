import { Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function WhoWeAre({ lang = 'en' }) {
  const content = {
    en: {
      badge: 'ENTERPRISE DELIVERY TRACK RECORD',
      title: 'Technology Aligned With Mission-Critical Operations',
      p1: 'The Smart Innovation is a specialized engineering integrator delivering resilient digital infrastructure, automated facility defense, and operational intelligence across Iraq.',
      p2: 'From high-density financial data centers in Baghdad to ATEX-certified telemetry and perimeter surveillance in the harsh oil basins of Basra and Missan, we bridge physical security, critical power, and enterprise networking into a singular, accountable operational fabric.',
      cards: [
        {
          icon: <Target size={24} className="text-cyan" />,
          title: 'Turnkey Architectural Scope',
          desc: 'End-to-end design, civil-structural integration, Tier-certified cabling, and multi-year maintenance SLAs.'
        },
        {
          icon: <Eye size={24} className="text-cyan" />,
          title: 'Standards-Grounded Engineering',
          desc: 'Adherence to TIA-942, ISO 27001, and IEC 62443 guarantees zero-compromise audit readiness for enterprise and public tenders.'
        },
        {
          icon: <ShieldCheck size={24} className="text-cyan" />,
          title: 'Field-Proven In Extreme Climates',
          desc: 'Deployment resilience against 55°C desert ambient heat, electrical harmonics, and hazardous gas classifications.'
        }
      ]
    },
    ar: {
      badge: 'سجل حافل في تنفيذ المشاريع الحيوية',
      title: 'حلول تكنولوجية تلبي متطلبات العمليات الحرجة',
      p1: 'شركة الابتكار الذكي هي جهة هندسية متخصصة في تصميم وبناء البنية التحتية الرقمية، أنظمة الأمن الصناعي وأتمتة المنشآت والذكاء الاصطناعي في العراق.',
      p2: 'من قاعات الخوادم ومراكز البيانات الحساسة في بغداد إلى شبكات الاتصال الميدانية وكاميرات المراقبة المقاومة للانفجار في حقول البصرة وميسان، نوفر منظومة تقنية متكاملة تربط البنية التحتية، استقرار الطاقة والأمن السيبراني تحت سقف هندسي موحد.',
      cards: [
        {
          icon: <Target size={24} className="text-cyan" />,
          title: 'تنفيذ متكامل تسليم مفتاح (Turnkey)',
          desc: 'دراسات هندسية معمارية، مد الكابلات المعتمدة، الربط الشبكي، وتوفير عقود صيانة ودعم فني طويلة الأمد.'
        },
        {
          icon: <Eye size={24} className="text-cyan" />,
          title: 'هندسة قائمة على المعايير الدولية',
          desc: 'الالتزام الصارم بمعايير TIA-942 و ISO 27001 و IEC 62443 لضمان الجاهزية للتدقيق والمناقصات الرسمية.'
        },
        {
          icon: <ShieldCheck size={24} className="text-cyan" />,
          title: 'موثوقية مجربة في أقسى الظروف',
          desc: 'تحمل درجات حرارة صحراوية تصل إلى 55 مئوية، تقلبات الطاقة الكهربائية، ومطابقة البيئات النفطية الخطرة.'
        }
      ]
    }
  };

  const c = content[lang] || content.en;

  return (
    <section className="section" id="who-we-are">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <CheckCircle2 size={16} />
            {c.badge}
          </span>
          <h2>{c.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="lead-paragraph">{c.p1}</p>
            <p>{c.p2}</p>
          </div>

          <div className="about-cards">
            {c.cards.map((card, idx) => (
              <article className="value-card" key={idx}>
                <span className="value-icon">{card.icon}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
