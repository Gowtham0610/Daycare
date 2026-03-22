import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Programs } from '../components/Programs';
import { Facilities } from '../components/Facilities';
import { Testimonials } from '../components/Testimonials';
import { Admissions } from '../components/Admissions';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-sky-50">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Testimonials />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}
