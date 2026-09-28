import Hero from './Hero';
import TrustBar from './TrustBar';
import Services from './Services';
import OilFieldSection from './OilFieldSection';
import WhoWeAre from './WhoWeAre';
import RfpWizard from './RfpWizard';

export default function Home({ 
  lang = 'en', 
  t, 
  onNavigateRfp, 
  onNavigateServices, 
  selectedPillarForRfp, 
  onConfigurePillarRfp 
}) {
  return (
    <>
      <Hero 
        lang={lang} 
        t={t} 
        onNavigateRfp={onNavigateRfp} 
        onNavigateServices={onNavigateServices} 
      />

      <TrustBar 
        lang={lang} 
        t={t} 
      />

      <Services 
        lang={lang} 
        t={t} 
        onConfigurePillarRfp={onConfigurePillarRfp} 
      />

      <OilFieldSection 
        lang={lang} 
        t={t} 
        onNavigateRfp={() => onConfigurePillarRfp('oilfield')} 
      />

      <WhoWeAre 
        lang={lang} 
      />

      <RfpWizard 
        key={`${selectedPillarForRfp}-${lang}`}
        lang={lang} 
        t={t} 
        initialPillar={selectedPillarForRfp} 
      />
    </>
  );
}
