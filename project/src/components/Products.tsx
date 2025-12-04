import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import LogoDecreina from '../assets/logodecreina.png'; 

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Seleciona os primeiros 3 produtos como "mais vendidos"
  const featuredProducts = products.slice(0, 3);

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 < 0 ? featuredProducts.length - 1 : i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1 >= featuredProducts.length ? 0 : i + 1));
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
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
    
    const threshold = 50;
    if (currentTranslate < -threshold && currentIndex < featuredProducts.length - 1) {
      handleNext();
    } else if (currentTranslate > threshold && currentIndex > 0) {
      handlePrev();
    }
    
    setCurrentTranslate(0);
  };

  return (
    <section id="produtos" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          
          <div className="flex flex-col justify-center items-center mb-4">
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
              Produtos Mais Vendidos
            </h2>

            <img
              src={LogoDecreina}
              alt="Logo Decreína"
              className="mt-1 h-16 xl:h-20 xl:h-24 w-auto object-contain"
            />
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Os favoritos das profissionais da podologia
          </p>
        </div>

        {/* Mobile: Carrossel */}
        <div className="xl:hidden relative mb-8">
          <div className="relative overflow-hidden">
            <div 
              ref={containerRef}
              className="flex transition-transform duration-500 ease-out select-none"
              style={{ 
                transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? currentTranslate : 0}px))`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-full px-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/3 -translate-y-1/2 bg-teal-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Produto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < featuredProducts.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/3 -translate-y-1/2 bg-teal-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Próximo produto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="flex justify-center gap-2 mt-6">
            {featuredProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para produto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden xl:grid xl:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#catalogo"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver todos os produtos
          </a>
        </div>
      </div>
    </section>
  );
}