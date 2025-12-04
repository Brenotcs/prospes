import Header from './components/Header';
import Hero from './components/Hero';
import BannerCarousel from './components/BannerCarousel';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import Segmentation from './components/Segmentation';
import Journey from './components/Journey';
import Catalog from './components/Catalog';
import Stats from './components/Stats';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  // Desabilita clique direito em imagens
  const handleContextMenu = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen" onContextMenu={handleContextMenu}>
      <Header />
      {/* 1. HERO (Acima da Dobra) */}
      <Hero />
      
      {/* Banner Carousel (mantido) */}
      <BannerCarousel />
      
      {/* 2. Benefícios Diretos da Decreína (3 Cards) */}
      <Benefits />
      
      {/* 3. Prova Social I (Depoimentos de Podólogas) */}
      <Testimonials />
      
      {/* 4. Produtos Mais Vendidos (Grid de 4 a 6 itens) */}
      <Products />
      
      {/* 5. Segmentação (Para quem é a Decreína?) */}
      <Segmentation />
      
      {/* 6. Jornada do Tratamento (3 Passos) */}
      <Journey />
      
      {/* 7. Catálogo Detalhado por Categoria */}
      <Catalog />
      
      {/* 8. Prova Social II (Números e Autoridade) */}
      <Stats />
      
      {/* 9. Sobre a Decreína + Prospez (Credibilidade) */}
      <About />
      
      {/* 10. FAQ Otimizado (Objeções Finais) */}
      <FAQ />
      
      {/* 11. CTA Final (Forte e Direto) */}
      <CTA />
      
      {/* Contato e Footer */}
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
