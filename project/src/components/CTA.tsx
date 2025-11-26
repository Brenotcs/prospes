import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Pronta para testar a Decreína nos seus atendimentos?
          </h2>

          <p className="text-xl md:text-2xl text-teal-50">
          Entre em contato agora e tire suas dúvidas com nossa equipe!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contato"
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Fale Conosco
            </a>

            <a
              href="#produtos"
              className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              Ver Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
