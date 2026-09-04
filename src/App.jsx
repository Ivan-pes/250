import Header from '@/components/layout/Header.jsx';
import Footer from '@/components/layout/Footer.jsx';
import MobileBar from '@/components/layout/MobileBar.jsx';
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

/**
 * Порядок секций на странице.
 * Убрать блок — удалить строку; поменять местами — переставить.
 *
 * Между разделами стоят узоры-разделители (src/components/ui/Ornament.jsx).
 * `tinted` — когда узор остаётся на подкрашенном фоне соседней секции.
 */
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

      <MobileBar />
    </>
  );
}
