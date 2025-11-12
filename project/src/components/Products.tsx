import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Produtos Decreína
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seleção premium de produtos profissionais para cuidados podológicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
