import { MessageCircle, Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "5511999999999";

  const handleBuyClick = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="space-y-2">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-2 mb-4">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-lg">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-3xl font-bold text-teal-600">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleBuyClick}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Comprar pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
