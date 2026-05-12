import { Helmet } from 'react-helmet-async';
import { products } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import BannerCarousel from './components/BannerCarousel';
import Benefits from './components/Benefits';
import BeforeAfterSection from './components/Testimonials';
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
import PopupAviso from './components/PopupAviso';

function App() {
  // Desabilita clique direito em imagens
  const handleContextMenu = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Os produtos são originais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Toda a linha vendida aqui é 100% Decreína direto da fábrica. Garantimos a autenticidade de todos os produtos."
        }
      },
      {
        "@type": "Question",
        "name": "Demora para chegar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enviamos para todo o Brasil com prazos rápidos e rastreamento completo. Você acompanha seu pedido desde o envio até a entrega."
        }
      },
      {
        "@type": "Question",
        "name": "Podem ser usados em qualquer tipo de pele?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, as fórmulas são seguras para uso profissional em todos os tipos de pele, inclusive as mais sensíveis."
        }
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": "https://www.prospes.com.br/logo.png",
        "brand": {
          "@type": "Brand",
          "name": "Decreína"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen" onContextMenu={handleContextMenu}>
      <Helmet>
        <title>Prospés | O Canal Oficial para Profissionais da Podologia</title>
        <meta name="description" content="Na Prospés você encontra os melhores produtos Decreína, de alta qualidade e nível clínico para podologia. Eleve seus atendimentos e aumente seu faturamento." />
        <link rel="canonical" href="https://www.prospes.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>
      <Header />
      {/* 1. HERO (Acima da Dobra) */}
      <Hero />
      
      {/* Banner Carousel (mantido) */}
      <BannerCarousel />
      
      {/* 2. Benefícios Diretos da Decreína (3 Cards) */}
      <Benefits />
      
      {/* 3. Antes e Depois (Resultados Reais) */}
      <BeforeAfterSection />
      
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
      <PopupAviso />
    </div>
  );
}

export default App;
