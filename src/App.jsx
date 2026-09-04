import Header from '@/components/layout/Header.jsx';
import Footer from '@/components/layout/Footer.jsx';
import Intro from '@/components/layout/Intro.jsx';
import Ornament from '@/components/ui/Ornament.jsx';
import {
  Hero,
  About,
  Packages,
  Portfolio,
  Reviews,
  Faq,
  Contact,
} from '@/components/sections';

export default function App() {
  return (
    <>
      <Intro />

      <a className="skip-link" href="#main">К содержанию</a>

      <Header />

      <main id="main">
        <Hero />
        <Ornament variant="diamond" />

        <About />
        <Ornament variant="quatrefoil" />

        <Packages />
        <Ornament variant="diamond" tinted />

        <Portfolio />
        <Ornament variant="trefoil" />

        <Reviews />
        <Ornament variant="diamond" />

        <Faq />
        <Ornament variant="quatrefoil" />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
