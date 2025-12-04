import { Check, PlusCircle, X } from 'lucide-react';
// Importamos a interface Product do arquivo de dados.
import { Product } from '../data/products'; 
import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

// A interface ProductCardProps permanece a mesma, mas a interface Product (no seu products.ts)
// precisa ser atualizada para incluir 'details2?: string;'.

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const touchTimeoutRef = useRef<number | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTouchStart = () => {
    handleOpen();
    
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }

    touchTimeoutRef.current = window.setTimeout(() => {
      // Reset se necessário
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative flex flex-col h-full">
      
      {/* Bloco da Imagem: Altura Fixa (h-64) e flex-shrink-0 */}
      <div className="relative overflow-hidden h-64 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 xl:opacity-0 transition-opacity"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 xl:opacity-0 transition-opacity duration-200">
          <button
            aria-label={`Mais informações sobre ${product.name}`}
            onClick={handleTouchStart}
            onTouchStart={handleTouchStart}
            className="bg-white/30 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm shadow-md transform transition-transform duration-200 hover:scale-105"
          >
            <PlusCircle className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Bloco de Conteúdo: flex-grow para expandir e min-h fixo */}
      <div className="p-6 space-y-4 flex-grow min-h-[200px]"> 
        <div>
          {/* Título */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          {/* Descrição: Altura mínima para estabilizar o layout */}
          <p className="text-gray-600 text-sm leading-relaxed min-h-[40px]">{product.description}</p>
        </div>

        <div className="space-y-2">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal (renderizado via portal) */}
      {open && typeof document !== 'undefined' && createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay-enter">
            <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 z-10 overflow-auto max-h-[90vh] modal-content-enter">
              <div className="flex items-start justify-between p-6 border-b">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <button onClick={handleClose} aria-label="Fechar" className="text-gray-500 hover:text-gray-900">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                {product.details && <p className="text-gray-700">{product.details}</p>}

                {/* Renderiza a lista se product.list existir */}
                {product.list && product.list.length > 0 && (
                  <div className="mb-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {product.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* 👈 NOVO BLOCO: Renderiza details2 logo após a lista */}
                {product.details2 && (
                    <p className="text-gray-700">{product.details2}</p>
                )}


                {product.highlights && product.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Destaques</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {product.highlights.map((h, i) => (
                        <li key={i}>{h}</li> 
                      ))}
                    </ul>
                  </div>
                )}

                {product.faqs && product.faqs.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Perguntas Frequentes</h4>
                    <div className="space-y-3">
                      {product.faqs.map((f, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-semibold">P: {f.question}</p>
                          <p className="text-gray-700">R: {f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}