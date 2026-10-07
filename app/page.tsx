import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy';
import HowItWorks from './components/HowItWorks';
import TariffStack from './components/TariffStack';
import Audiences from './components/Audiences';
import Trust from './components/Trust';
import Faq from './components/Faq';
import CtaBand from './components/CtaBand';
import SiteFooter from './components/SiteFooter';
import JsonLd from './components/JsonLd';

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <CaseStudy />
        <HowItWorks />
        <TariffStack />
        <Audiences />
        <Trust />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
      <JsonLd />
    </>
  );
}
