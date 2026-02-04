import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import LogoDecreina from '../assets/logodecreina.png';

export default function ProductsCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  
  // Estados para drag/swipe
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Configurações do Desktop:
  const desktopWindowSize = 3; // Quantos produtos VISÍVEIS de uma vez (3 cards)
  // O índice máximo que podemos ter antes de atingir o final da lista (onde cabem 3 produtos)
  const desktopMaxIndex = products.length - desktopWindowSize;
  
  // Configurações do Mobile:
  const mobileWindowSize = 1; // Quantos produtos VISÍVEIS de uma vez (1 card)
  const mobileMaxIndex = products.length - mobileWindowSize;
  
  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navegação Desktop (avanço de 1 em 1)
  const handleDesktopPrev = () => {
    setDesktopIndex((i) => (i - 1 < 0) ? desktopMaxIndex : i - 1);
  };

  const handleDesktopNext = () => {
    setDesktopIndex((i) => (i + 1 > desktopMaxIndex) ? 0 : i + 1);
  };

  // Navegação Mobile (avanço de 1 em 1, igual ao desktop)
  const handleMobilePrev = () => {
    setMobileIndex((i) => (i - 1 < 0) ? mobileMaxIndex : i - 1);
  };

  const handleMobileNext = () => {
    setMobileIndex((i) => (i + 1 > mobileMaxIndex) ? 0 : i + 1);
  };

  // Funções para drag/swipe
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setPrevTranslate(0);
    setCurrentTranslate(0);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setCurrentTranslate(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const movedBy = currentTranslate;
    const threshold = 50; // pixels para considerar um swipe
    
    if (isMobile) {
      if (movedBy < -threshold && mobileIndex < mobileMaxIndex) {
        handleMobileNext();
      } else if (movedBy > threshold && mobileIndex > 0) {
        handleMobilePrev();
      }
    } else {
      if (movedBy < -threshold && desktopIndex < desktopMaxIndex) {
        handleDesktopNext();
      } else if (movedBy > threshold && desktopIndex > 0) {
        handleDesktopPrev();
      }
    }
    
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };


  return (
    <section id="produtos" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex flex-col justify-center items-center mb-4">
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900">
              Produtos
            </h2>
            <img
                src={LogoDecreina}
                loading="lazy"
              alt="Logo Decreína"
              className="mt-1 h-16 xl:h-20 xl:h-32 w-auto object-contain"
            />
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curadoria especializada de cosméticos podológicos profissionais
          </p>
        </div>

        {/* BLOCO DESKTOP CORRIGIDO PARA DESLIZAMENTO DE 1 EM 1 */}
        {!isMobile && (
          <div className="relative mb-8"> 
            
            <div className="relative overflow-hidden"> 
              {/* Contêiner de deslizamento: flex com transição e translação */}
              <div 
                ref={containerRef}
                className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing select-none"
                style={{ 
                  transform: `translateX(calc(-${desktopIndex * (100 / desktopWindowSize)}% + ${isDragging ? currentTranslate : 0}px))`,
                  transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {products.slice(desktopIndex, desktopIndex + desktopWindowSize).map((product, idx) => (
                  <div 
                    key={product.id} 
                    className="flex-shrink-0 w-full xl:w-1/3 px-4" 
                  >
                    <ProductCard product={product} priority={idx === 0} />
                  </div>
                ))}
              </div>
            </div>
            {/* FIM DO CONTÊINER DE DESLIZAMENTO */}

            {/* Botões de navegação (Desktop) - Fora da área dos cards */}
            <button
              onClick={handleDesktopPrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 bg-emerald-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Produto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleDesktopNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-emerald-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Próximo produto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores (mantidos) */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: desktopMaxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === desktopIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para produto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* BLOCO MOBILE - Funciona igual ao desktop, mas mostra 1 produto por vez */}
        {isMobile && (
          <div className="relative mb-8"> 
            
            <div className="relative overflow-hidden touch-pan-y"> 
              {/* Contêiner de deslizamento: flex com transição e translação */}
              <div 
                ref={containerRef}
                className="flex transition-transform duration-500 ease-out select-none"
                style={{ 
                  transform: `translateX(calc(-${mobileIndex * (100 / mobileWindowSize)}% + ${isDragging ? currentTranslate : 0}px))`,
                  transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                <div className="flex-shrink-0 w-full px-4">
                  <ProductCard product={products[mobileIndex]} priority={true} />
                </div>
              </div>
            </div>
            {/* FIM DO CONTÊINER DE DESLIZAMENTO */}

            {/* Botões de navegação (Mobile) - Translucidez e posição ajustada */}
            <button
              onClick={handleMobilePrev}
              className="absolute -left-2 top-1/3 -translate-y-1/2 bg-emerald-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Produto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleMobileNext}
              className="absolute -right-2 top-1/3 -translate-y-1/2 bg-emerald-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Próximo produto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores (mantidos) */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: mobileMaxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === mobileIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para produto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}