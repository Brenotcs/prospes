import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

interface CategorySection {
  title: string;
  description: string;
  categories: string[];
}

const categorySections: CategorySection[] = [
  {
    title: "Tratamento e Proteção",
    description: "Produtos focados na reparação, fortalecimento e cicatrização intensiva.",
    categories: ["tratamento"]
  },
  {
    title: "Hidratação Profunda",
    description: "Soluções de longa duração para pele extremamente seca e sensível.",
    categories: ["hidratação"]
  },
  {
    title: "Esfoliação e Emoliência",
    description: "Para procedimentos rápidos, renovação celular e amolecimento.",
    categories: ["esfoliação", "emoliência"]
  },
  {
    title: "Higienização e Assepsia",
    description: "Preparação e limpeza profissional da pele.",
    categories: ["higienização"]
  },
  {
    title: "Massagem e Relaxamento",
    description: "Alívio de fadiga e ativação circulatória.",
    categories: ["massagem"]
  }
];

function CategoryCarousel({ categoryProducts }: { categoryProducts: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 < 0 ? categoryProducts.length - 1 : i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1 >= categoryProducts.length ? 0 : i + 1));
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
    if (currentTranslate < -threshold && currentIndex < categoryProducts.length - 1) {
      handleNext();
    } else if (currentTranslate > threshold && currentIndex > 0) {
      handlePrev();
    }
    
    setCurrentTranslate(0);
  };

  return (
    <>
      {/* Mobile: Carrossel */}
      <div className="md:hidden relative mb-8">
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
            {categoryProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-full px-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/3 -translate-y-1/2 bg-teal-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Produto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/3 -translate-y-1/2 bg-teal-600/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Próximo produto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {categoryProducts.map((_, i) => (
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
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product, index) => (
          <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default function Catalog() {
  return (
    <section id="catalogo" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo Completo por Categoria
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre o produto ideal para cada tipo de tratamento
          </p>
        </div>

        <div className="space-y-20">
          {categorySections.map((section, sectionIndex) => {
            const categoryProducts = products.filter(p => 
              section.categories.includes(p.category)
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div key={sectionIndex} className="animate-fadeInUp" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-lg text-gray-600">{section.description}</p>
                </div>

                <CategoryCarousel categoryProducts={categoryProducts} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#produtos"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Produtos mais vendidos
          </a>
        </div>
      </div>
    </section>
  );
}
