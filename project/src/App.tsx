import Header from './components/Header';
import Hero from './components/Hero';
import ProductsCarousel from './components/ProductsCarousel';
import Benefits from './components/Benefits';
import Contato from './components/Contato';
import VerticalImages from './components/VerticalImages';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsCarousel />
      <Benefits />
      <Contato />
      <VerticalImages />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
