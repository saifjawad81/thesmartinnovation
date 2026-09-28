import { Shield, Flame, Wind, Radio, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OilFieldSection({ lang = 'en', t, onNavigateRfp }) {
  const iconMap = [
    <Flame key="flame" size={24} className="text-cyan" />,
    <Wind key="wind" size={24} className="text-cyan" />,
    <Radio key="radio" size={24} className="text-cyan" />,
    <Wrench key="wrench" size={24} className="text-cyan" />
  ];

  return (
    <section className="section section-oilfield" id="oilfield">
      <div className="container">
        <div className="oilfield-top-wrapper">
          <div className="section-header">
            <span className="section-label">
              <Shield size={16} />
              {t.oilfield.badge}
            </span>
            <h2>{t.oilfield.title}</h2>
            <p className="section-lead">{t.oilfield.subtitle}</p>
          </div>

          <div className="oilfield-highlight-box">
            <p>{t.oilfield.highlight}</p>
          </div>
        </div>

        <div className="oilfield-layout-grid">
          {/* Left Column: 4 Technical Pillars */}
          <div className="oilfield-pillars-list">
            {t.oilfield.pillars.map((item, idx) => (
              <div className="oilfield-pillar-card" key={idx}>
                <div className="oilfield-pillar-icon">
                  {iconMap[idx]}
                </div>
                <div className="oilfield-pillar-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: SLA Matrix & Technical Quick Action */}
          <div className="oilfield-sla-sidebar">
            <div className="sla-card">
              <div className="sla-card-header">
                <span className="sla-tag">{lang === 'ar' ? 'معايير العقود النفطية' : 'OIL & GAS OPERATIONAL SLA'}</span>
                <h3>{t.oilfield.slaBox.title}</h3>
              </div>
              <div className="sla-list">
                {t.oilfield.slaBox.items.map((item, i) => (
                  <div className="sla-row" key={i}>
                    <div className="sla-label-group">
                      <CheckCircle2 size={16} className="text-cyan" />
                      <span className="sla-label">{item.label}</span>
                    </div>
                    <span className="sla-val">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="sla-deployment-basins">
                <span className="basins-title">
                  {lang === 'ar' ? 'مناطق التغطية الميدانية المباشرة في جنوب العراق:' : 'Active Southern Field Deployment Corridors:'}
                </span>
                <div className="basins-tags">
                  <span>Rumaila (North & South)</span>
                  <span>Zubair</span>
                  <span>West Qurna 1 & 2</span>
                  <span>Majnoon</span>
                  <span>Halfaya (Missan)</span>
                  <span>Khor Al-Zubair Port</span>
                </div>
              </div>

              <div className="sla-cta-wrap">
                <button
                  type="button"
                  className="btn btn-primary btn-full"
                  onClick={() => onNavigateRfp('oilfield')}
                >
                  {lang === 'ar' ? 'طلب كراس المواصفات للحقول النفطية' : 'Request Oilfield Technical BOQ'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
