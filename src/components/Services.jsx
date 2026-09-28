import { useState } from 'react';
import { Server, ShieldAlert, Cpu, Check, ArrowRight, Layers } from 'lucide-react';

export default function Services({ lang = 'en', t, onConfigurePillarRfp }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const pillarIcons = {
    infrastructure: <Server size={32} className="text-cyan" />,
    security: <ShieldAlert size={32} className="text-cyan" />,
    cyber_ai: <Cpu size={32} className="text-cyan" />,
  };

  const filteredPillars = activeFilter === 'all'
    ? t.suites.pillars
    : t.suites.pillars.filter((p) => p.id === activeFilter);

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">
            <Layers size={16} />
            {t.suites.title}
          </span>
          <h2>{lang === 'ar' ? 'الأجنحة التشغيلية الثلاثة للمؤسسات والمنشآت الكبرى' : 'Three Enterprise Operational Suites'}</h2>
          <p className="section-lead">{t.suites.subtitle}</p>
        </div>

        {/* Filter Segmented Control */}
        <div className="suites-filter-bar">
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t.suites.filterAll}
          </button>
          {t.suites.pillars.map((pillar) => (
            <button
              type="button"
              key={pillar.id}
              className={`filter-btn ${activeFilter === pillar.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(pillar.id)}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* 3 Pillars Grid */}
        <div className="pillars-grid">
          {filteredPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.id}>
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  {pillarIcons[pillar.id]}
                </div>
                <div>
                  <span className="pillar-category">{pillar.category}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
              </div>

              <p className="pillar-tagline">{pillar.tagline}</p>
              <p className="pillar-desc">{pillar.description}</p>

              <div className="pillar-specs-block">
                <h4 className="specs-title">
                  {lang === 'ar' ? 'المواصفات والأنظمة الهندسية المشمولة:' : 'Core Engineering Deliverables:'}
                </h4>
                <ul className="pillar-specs-list">
                  {pillar.specs.map((spec, i) => (
                    <li key={i}>
                      <Check size={16} className="text-cyan flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Standards tags */}
              <div className="pillar-tech-chips">
                {pillar.technologies.map((tech, i) => (
                  <span className="tech-chip" key={i}>{tech}</span>
                ))}
              </div>

              <div className="pillar-footer">
                <button
                  type="button"
                  className="btn btn-outline btn-full"
                  onClick={() => onConfigurePillarRfp(pillar.id)}
                >
                  <span>{t.suites.requestPillarRfp}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
