import { MessageCircle, Phone } from 'lucide-react';

export default function CTA() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de conhecer os produtos da Prospés e fazer um pedido.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto para transformar a saúde dos seus pés?
          </h2>

          <p className="text-xl md:text-2xl text-teal-50">
            Entre em contato agora pelo WhatsApp e conheça nossos produtos profissionais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </button>

            <a
              href="#produtos"
              className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              Ver Produtos
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold">Frete Grátis</div>
              <div className="text-teal-100">Acima de R$ 150</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">Entrega Rápida</div>
              <div className="text-teal-100">Todo o Brasil</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">Suporte</div>
              <div className="text-teal-100">Via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
