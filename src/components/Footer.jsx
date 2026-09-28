import { ShieldCheck, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer({ lang = 'en', t, onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col-brand">
            <div className="footer-brand">
              <img
                src="/images/Horizental-white-2.png"
                alt="The Smart Innovation — الابتكار الذكي"
                className="logo-img logo-img-footer"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.removeAttribute('hidden');
                }}
              />
              <span className="logo-fallback" hidden>
                <span className="logo-icon" aria-hidden="true">◇</span>
                <span>The Smart Innovation</span>
              </span>
            </div>
            <p className="footer-tagline">
              {t.footer.desc}
            </p>
            <div className="footer-compliance-badges">
              <span>TIA-942</span>
              <span>·</span>
              <span>ISO 27001</span>
              <span>·</span>
              <span>ATEX Zone 1/2</span>
              <span>·</span>
              <span>ISO 9001</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.navTitle}</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>{t.nav.home}</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>{t.nav.services}</a></li>
              <li><a href="#oilfield" onClick={(e) => { e.preventDefault(); onNavigate('oilfield'); }}>{t.nav.oilfield}</a></li>
              <li><a href="#trust" onClick={(e) => { e.preventDefault(); onNavigate('trust'); }}>{t.nav.trust}</a></li>
              <li><a href="#rfp" onClick={(e) => { e.preventDefault(); onNavigate('rfp'); }}>{t.nav.rfp}</a></li>
            </ul>
          </div>

          {/* Operating Hubs */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.locationsTitle}</h4>
            <div className="footer-loc-item">
              <MapPin size={16} className="text-cyan flex-shrink-0" />
              <div>
                <strong>{lang === 'ar' ? 'المقر الرئيسي — بغداد' : 'Baghdad Headquarters'}</strong>
                <p className="text-muted">{t.footer.baghdad}</p>
              </div>
            </div>
            <div className="footer-loc-item mt-3">
              <MapPin size={16} className="text-cyan flex-shrink-0" />
              <div>
                <strong>{lang === 'ar' ? 'مكتب العمليات — البصرة' : 'Basra Energy Field Desk'}</strong>
                <p className="text-muted">{t.footer.basra}</p>
              </div>
            </div>
          </div>

          {/* Direct Escalation */}
          <div className="footer-col">
            <h4 className="footer-col-title">{lang === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Escalation'}</h4>
            <div className="footer-contact-links">
              <a href="tel:+9647860808090" className="footer-contact-item">
                <Phone size={15} className="text-cyan" />
                <span>+964 786 080 8090</span>
              </a>
              <a href="mailto:info@thesmartinnovation.com" className="footer-contact-item">
                <Mail size={15} className="text-cyan" />
                <span>info@thesmartinnovation.com</span>
              </a>
              <a
                href="https://wa.me/9647860808090"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item text-cyan"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Business Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {currentYear} The Smart Innovation. {t.footer.rights}
          </p>
          <div className="footer-confidentiality">
            <ShieldCheck size={14} className="text-cyan inline mr-1" />
            <span>{t.footer.privacyNotice}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
