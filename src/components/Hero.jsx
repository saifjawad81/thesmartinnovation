import { Shield, ArrowRight, Layers, MessageSquare, Server, ShieldCheck, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero({ lang = 'en', t, onNavigateRfp, onNavigateServices, onSelectPillar }) {
  const suitesPreview = [
    {
      id: 'infrastructure',
      title: lang === 'ar' ? 'البنية التحتية ومراكز البيانات' : 'Critical Infrastructure & Power',
      desc: lang === 'ar' ? 'مراكز بيانات TIA-942، كابلات ألياف ضوئية مسلحة، وروابط مايكرويف' : 'TIA-942 Data Centers, Armored Fiber & N+1 Industrial UPS',
      icon: <Server size={20} className="text-cyan flex-shrink-0" />,
      tag: 'TIA-942 Rated-3/4'
    },
    {
      id: 'security',
      title: lang === 'ar' ? 'الأمن الفيزيائي وحماية المنشآت' : 'Physical & Facility Security',
      desc: lang === 'ar' ? 'بوابات ومصدات هيدروليكية، قراءة اللوحات ALPR، وكاميرات حرارية' : 'Crash Gates K12/M50, ALPR Engines & Thermal Night CCTV',
      icon: <ShieldCheck size={20} className="text-cyan flex-shrink-0" />,
      tag: 'K12/M50 Crash-Rated'
    },
    {
      id: 'cyber_ai',
      title: lang === 'ar' ? 'الدفاع السيبراني والذكاء الاصطناعي' : 'Cyber Defense & Operational AI',
      desc: lang === 'ar' ? 'مراقبة SOC على مدار الساعة، حماية سكادا IEC 62443، وأتمتة العمليات' : '24/7 SOC Monitoring, SCADA Air-Gapping & Enterprise AI',
      icon: <Cpu size={20} className="text-cyan flex-shrink-0" />,
      tag: 'IEC 62443 Industrial'
    }
  ];

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Enterprise Value Proposition & High-Trust Metrics */}
          <div className="hero-content-col">
            <div className="hero-badge">
              <Shield size={14} className="text-cyan" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="hero-headline">
              {t.hero.headline}
            </h1>

            <p className="hero-subhead">
              {t.hero.subhead}
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-actions-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onNavigateRfp()}
              >
                <span>{t.hero.ctaRfp}</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => onNavigateServices()}
              >
                <Layers size={16} />
                <span>{t.hero.ctaServices}</span>
              </button>

              <a
                href="https://wa.me/9647860808090"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label="Direct WhatsApp Engineering Desk"
              >
                <MessageSquare size={16} />
                <span>{t.hero.ctaWhatsapp}</span>
              </a>
            </div>

            {/* Quantified Past Performance Metrics */}
            <div className="hero-metrics-grid">
              {t.hero.metrics.map((metric, i) => (
                <div className="metric-box" key={i}>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-sub text-muted">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Operational Suites Showcase Card */}
          <div className="hero-visual-col">
            <div className="hero-suites-card">
              <div className="hero-card-header">
                <div>
                  <span className="card-kicker">
                    {lang === 'ar' ? 'نطاق الحلول المؤسسية' : 'OPERATIONAL SUITES OVERVIEW'}
                  </span>
                  <h3 className="card-heading">
                    {lang === 'ar' ? 'ثلاثة محاور هندسية متكاملة' : 'Integrated Enterprise Delivery'}
                  </h3>
                </div>
                <div className="card-header-badge">
                  <CheckCircle2 size={15} className="text-cyan" />
                  <span>{lang === 'ar' ? 'جاهز للتنفيذ' : 'Active Scope'}</span>
                </div>
              </div>

              <div className="hero-suites-list">
                {suitesPreview.map((suite) => (
                  <div
                    key={suite.id}
                    className="hero-suite-row"
                    onClick={() => {
                      if (onSelectPillar) {
                        onSelectPillar(suite.id);
                      } else {
                        onNavigateServices();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        if (onSelectPillar) onSelectPillar(suite.id);
                        else onNavigateServices();
                      }
                    }}
                  >
                    <div className="hero-suite-icon-box">
                      {suite.icon}
                    </div>
                    <div className="hero-suite-body">
                      <div className="hero-suite-title-row">
                        <h4>{suite.title}</h4>
                        <span className="hero-suite-tag">{suite.tag}</span>
                      </div>
                      <p>{suite.desc}</p>
                    </div>
                    <ChevronRight size={18} className="hero-suite-arrow text-muted" />
                  </div>
                ))}
              </div>

              {/* Verified Trust & Operating Hubs Footer */}
              <div className="hero-card-footer">
                <div className="hero-footer-standards">
                  <span>TIA-942</span>
                  <span>·</span>
                  <span>ISO 27001</span>
                  <span>·</span>
                  <span>ATEX Zone 1/2</span>
                  <span>·</span>
                  <span>ISO 9001</span>
                </div>
                <div className="hero-footer-locations">
                  <span className="location-dot"></span>
                  <span>{lang === 'ar' ? 'مقرات بغداد والبصرة' : 'Baghdad HQ & Basra Field Desk'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
