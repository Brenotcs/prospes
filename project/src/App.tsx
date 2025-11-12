import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Contato from './components/Contato';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <Contato />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
