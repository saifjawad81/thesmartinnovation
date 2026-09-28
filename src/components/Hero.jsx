import { Shield, ArrowRight, Layers, MessageSquare } from 'lucide-react';
import NocTopologyPreview from './NocTopologyPreview';

export default function Hero({ lang = 'en', t, onNavigateRfp, onNavigateServices }) {
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

          {/* Right Column: Interactive NOC & Network Topology Visualizer */}
          <div className="hero-visual-col">
            <NocTopologyPreview lang={lang} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
