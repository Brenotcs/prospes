import { ArrowRight, ChevronDown } from 'lucide-react';
// 👈 1. Importa a imagem local
import ImgHero from '../assets/imghero.png'; 

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Reaplicando ajustes de compactação: pt-24, min-h-[80vh], py-8, pb-24
    <section className="relative pt-24 pb-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Usando gap-8 e space-y-4 para compactação */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fadeInUp"> 
            
            <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
              Produtos Profissionais de Podologia
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Cuide dos seus pés com produtos
              <span className="text-teal-600"> profissionais</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Descubra nossa linha completa de produtos desenvolvidos especialmente para o cuidado e saúde dos seus pés. Qualidade profissional ao seu alcance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={scrollToProducts}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-md font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                Ver Produtos
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#beneficios"
                className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-6 py-3 rounded-full text-md font-semibold flex items-center justify-center gap-2 transition"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="relative p-4 md:p-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {/* Fundo menor */}
            <div className="absolute inset-4 md:inset-10 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl transform rotate-6"></div>
            <img
              // 👈 2. Usa a variável da imagem importada
              src={ImgHero}
              alt="Produtos de Podologia"
              // Reaplicado max-w-sm e mx-auto para compactação
              className="relative rounded-3xl shadow-2xl w-full md:max-w-sm mx-auto h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Seta para baixo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToProducts}
          className="animate-bounce bg-white/80 hover:bg-white text-teal-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Ir para produtos"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}