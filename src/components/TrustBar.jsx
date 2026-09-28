import { ShieldCheck, Award, CheckCircle2, Cpu } from 'lucide-react';

export default function TrustBar({ lang = 'en', t }) {
  return (
    <section className="section-trust" id="trust">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">
            <ShieldCheck size={16} />
            {t.trust.title}
          </span>
          <h2>{lang === 'ar' ? 'اعتمادات الجودة، معايير السلامة وموثوقية التشغيل' : 'Engineering Compliance, Certifications & Ecosystem'}</h2>
          <p className="section-lead">{t.trust.subtitle}</p>
        </div>

        {/* 4 Compliance Standards Cards */}
        <div className="trust-grid">
          {t.trust.badges.map((badge, idx) => (
            <div className="trust-card" key={idx}>
              <div className="trust-card-top">
                <span className="trust-code">{badge.code}</span>
                <Award size={20} className="text-cyan" />
              </div>
              <h3 className="trust-name">{badge.name}</h3>
              <p className="trust-desc">{badge.desc}</p>
              <div className="trust-card-footer">
                <CheckCircle2 size={14} className="text-cyan" />
                <span>{lang === 'ar' ? 'معتمد للمشاريع الحيوية' : 'Verified Implementation Standard'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Ecosystem Badges */}
        <div className="partners-banner">
          <p className="partners-title">
            <Cpu size={16} className="text-cyan" />
            {t.trust.partnersHeadline}
          </p>
          <div className="partners-logo-row">
            {t.trust.partners.map((partner, index) => (
              <div className="partner-item" key={index}>
                <span className="partner-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
