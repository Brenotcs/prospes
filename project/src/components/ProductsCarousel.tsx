import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import LogoDecreina from '../assets/logodecreina.png';

export default function ProductsCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndexes, setMobileIndexes] = useState([0, 0, 0]); // Um índice para cada carrossel mobile

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop: 3 produtos por página
  const desktopItemsPerView = 3;
  const desktopPagesCount = Math.ceil(products.length / desktopItemsPerView);
  const desktopVisibleProducts = products.slice(
    desktopIndex * desktopItemsPerView,
    (desktopIndex + 1) * desktopItemsPerView
  );

  // Mobile: 3 carrosseis com 5 produtos cada
  const mobileCarousels = [
    products.slice(0, 5),
    products.slice(5, 10),
    products.slice(10, 15)
  ];

  const handleDesktopPrev = () => {
    setDesktopIndex((i) => (i - 1 + desktopPagesCount) % desktopPagesCount);
  };

  const handleDesktopNext = () => {
    setDesktopIndex((i) => (i + 1) % desktopPagesCount);
  };

  const handleMobilePrev = (carouselIdx: number) => {
    setMobileIndexes((prev) => {
      const newIndexes = [...prev];
      const carouselLength = mobileCarousels[carouselIdx].length;
      newIndexes[carouselIdx] = (newIndexes[carouselIdx] - 1 + carouselLength) % carouselLength;
      return newIndexes;
    });
  };

  const handleMobileNext = (carouselIdx: number) => {
    setMobileIndexes((prev) => {
      const newIndexes = [...prev];
      const carouselLength = mobileCarousels[carouselIdx].length;
      newIndexes[carouselIdx] = (newIndexes[carouselIdx] + 1) % carouselLength;
      return newIndexes;
    });
  };

  const renderCarousel = (
    carouselProducts: typeof products,
    index: number,
    onPrev: () => void,
    onNext: () => void,
    currentPage: number,
    showSingle: boolean = false
  ) => {
    const displayProducts = showSingle ? [carouselProducts[currentPage]] : carouselProducts;

    return (
      <div className="relative mb-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProducts.map((product, idx) => (
            <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={onPrev}
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Produto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Próximo produto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: carouselProducts.length }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isMobile) {
                  setMobileIndexes((prev) => {
                    const newIndexes = [...prev];
                    newIndexes[index] = i;
                    return newIndexes;
                  });
                } else {
                  setDesktopIndex(i);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentPage ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para produto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="produtos" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Produtos
          </h2>

          <img
            src={LogoDecreina}
            alt="Logo Decreína"
            className="mt-1 h-16 md:h-20 lg:h-32 w-auto object-contain mx-auto"
          />
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Curadoria especializada de cosméticos podológicos profissionais
          </p>
        </div>

        {/* Desktop: Um carrossel */}
        {!isMobile && (
          <div className="relative mb-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {desktopVisibleProducts.map((product, idx) => (
                <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Botões de navegação */}
            <button
              onClick={handleDesktopPrev}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Produto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleDesktopNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Próximo produto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: desktopPagesCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === desktopIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para página ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mobile: 3 carrosseis */}
        {isMobile && (
          <div>
            {mobileCarousels.map((carousel, idx) => (
              <div key={idx}>
                {renderCarousel(
                  carousel,
                  idx,
                  () => handleMobilePrev(idx),
                  () => handleMobileNext(idx),
                  mobileIndexes[idx],
                  true
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
