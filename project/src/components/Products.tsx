import { products } from '../data/products';
import ProductCard from './ProductCard';
// 👈 1. Importa a imagem local
import LogoDecreina from '../assets/logodecreina.png'; 

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          
          {/* 👈 2. SUBSTITUIÇÃO: Usamos a imagem centralizada no lugar do texto */}
          <div className="flex flex-col justify-center items-center mb-4">
            {/* Mantemos o "Produtos" separadamente, se for o desejo */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Produtos
            </h2>

            <img
              src={LogoDecreina}
              alt="Logo Decreína"
              className="mt-1 h-16 md:h-20 lg:h-32 w-auto object-contain"
            />
            
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curadoria especializada de cosméticos podológicos profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}