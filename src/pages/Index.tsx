import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
