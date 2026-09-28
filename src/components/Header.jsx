import { useState, useEffect } from 'react';
import { Globe, MessageSquare, Phone, Menu, X } from 'lucide-react';

export default function Header({ 
  lang = 'en', 
  toggleLang, 
  t, 
  activeSection = 'home', 
  onNavigate 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="logo-anchor" 
          onClick={(e) => handleLinkClick(e, 'home')}
          aria-label="The Smart Innovation Home"
        >
          <img
            src="/images/Horizental-white-2.png"
            alt="The Smart Innovation — الابتكار الذكي"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.removeAttribute('hidden');
            }}
          />
          <span className="logo-fallback" hidden>
            <span className="logo-icon" aria-hidden="true">◇</span>
            <span className="logo-text">The Smart <strong>Innovation</strong></span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            {t.nav.home}
          </a>
          <a
            href="#services"
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            {t.nav.services}
          </a>
          <a
            href="#oilfield"
            className={`nav-link ${activeSection === 'oilfield' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'oilfield')}
          >
            {t.nav.oilfield}
          </a>
          <a
            href="#trust"
            className={`nav-link ${activeSection === 'trust' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'trust')}
          >
            {t.nav.trust}
          </a>
        </nav>

        {/* Right Header Utility Controls */}
        <div className="header-actions">
          {/* Quick Hotline / WhatsApp direct */}
          <a
            href="https://wa.me/9647860808090"
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp-link"
            title="Direct WhatsApp Hotline"
            aria-label="WhatsApp Engineering Desk"
          >
            <MessageSquare size={16} />
            <span className="hidden-sm">+964 786 080 8090</span>
          </a>

          {/* Request RFP CTA */}
          <button
            type="button"
            className="btn btn-primary btn-sm header-rfp-btn"
            onClick={(e) => handleLinkClick(e, 'rfp')}
          >
            {t.nav.rfp}
          </button>

          {/* Bilingual Switcher (AR / EN) */}
          <button
            type="button"
            className="lang-switcher-btn"
            onClick={toggleLang}
            title={lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe size={15} />
            <span className="lang-text">{t.nav.langToggle}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav-links">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
              {t.nav.home}
            </a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>
              {t.nav.services}
            </a>
            <a href="#oilfield" onClick={(e) => handleLinkClick(e, 'oilfield')}>
              {t.nav.oilfield}
            </a>
            <a href="#trust" onClick={(e) => handleLinkClick(e, 'trust')}>
              {t.nav.trust}
            </a>
            <a href="#rfp" className="mobile-rfp-link" onClick={(e) => handleLinkClick(e, 'rfp')}>
              {t.nav.rfp}
            </a>
          </nav>
          <div className="mobile-drawer-footer">
            <a href="tel:+9647860808090" className="drawer-contact-item">
              <Phone size={16} />
              <span>+964 786 080 8090</span>
            </a>
            <button
              type="button"
              className="drawer-lang-btn"
              onClick={() => {
                toggleLang();
                setMobileMenuOpen(false);
              }}
            >
              <Globe size={16} />
              <span>{t.nav.langToggle}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
