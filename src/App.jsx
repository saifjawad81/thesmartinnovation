import { useEffect, useState } from 'react';
import CyberBackground from './components/CyberBackground';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPillarForRfp, setSelectedPillarForRfp] = useState('infrastructure');

  // Sync RTL and document language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleConfigurePillarRfp = (pillarId) => {
    setSelectedPillarForRfp(pillarId);
    scrollToSection('rfp');
  };

  const t = translations[lang] || translations.en;

  return (
    <div className={`app-root ${lang === 'ar' ? 'is-arabic' : 'is-english'}`}>
      <CyberBackground />
      <Header
        lang={lang}
        toggleLang={toggleLang}
        t={t}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main className="main-content">
        <Home
          lang={lang}
          t={t}
          onNavigateRfp={() => scrollToSection('rfp')}
          onNavigateServices={() => scrollToSection('services')}
          selectedPillarForRfp={selectedPillarForRfp}
          onConfigurePillarRfp={handleConfigurePillarRfp}
        />
      </main>
      <Footer
        lang={lang}
        t={t}
        onNavigate={scrollToSection}
      />
    </div>
  );
}

export default App;
