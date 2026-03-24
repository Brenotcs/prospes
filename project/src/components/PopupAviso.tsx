import { useState, useEffect } from 'react';
import { ShoppingCart, ArrowRight, X } from 'lucide-react';

export default function PopupAviso() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica se já foi mostrado nesta sessão
    const hasSeenPopup = sessionStorage.getItem('hasSeenProspesPopup');
    if (!hasSeenPopup) {
      // Pequeno delay para a animação ficar mais natural
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenProspesPopup', 'true');
  };

  const scrollToContact = () => {
    closePopup();
    const element = document.getElementById('contato');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up relative border border-teal-100">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-[11] bg-gray-50 hover:bg-gray-100 rounded-full p-2"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>
        
        <div className="bg-gradient-to-br from-teal-50 to-white p-8 pt-10 text-center relative overflow-hidden">
          {/* Efeito decorativo de fundo */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-2xl z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-100 rounded-full opacity-50 blur-2xl z-0"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 mx-auto transform -rotate-6 transition-transform hover:rotate-0 duration-300">
              <ShoppingCart className="w-8 h-8 text-teal-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aviso aos clientes – Decreína / Prospés
            </h3>
            
            <div className="text-gray-600 mb-8 text-[15px] leading-relaxed space-y-3">
              <p>Atualizamos nosso processo de pedidos para profissionais.</p>
              <p>Agora, as compras são realizadas <strong className="text-teal-700 font-semibold">diretamente com nossos consultores pelo WhatsApp</strong>.</p>
              <p>Preencha o formulário para ser direcionado ao atendimento.</p>
            </div>
            
            <button
              onClick={scrollToContact}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/30 group"
            >
              <span>Clique e faça seu pedido</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
