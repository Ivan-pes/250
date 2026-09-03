import Header from '@/components/layout/Header.jsx';
import Footer from '@/components/layout/Footer.jsx';
import {
  Hero,
  About,
  Process,
  Portfolio,
  Reviews,
  Faq,
  Contact,
} from '@/components/sections';

/**
 * Порядок секций на странице.
 * Убрать блок — удалить строку; поменять местами — переставить.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">К содержанию</a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Process />
        <Portfolio />
        <Reviews />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
