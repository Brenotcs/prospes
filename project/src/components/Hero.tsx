import { ChevronDown, Shield, Truck, Award } from 'lucide-react';
import ImgHero from '../assets/imghero.jpg'; 

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInUp"> 
            
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
              Canal Oficial Decreína
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              O canal oficial da Decreína para profissionais da podologia
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Qualidade de nível clínico para elevar seus atendimentos, fidelizar pacientes e aumentar seu faturamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProducts();
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Quero comprar agora
              </a>
              <a 
                href="#catalogo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300"
              >
                Ver catálogo completo
              </a>
            </div>

            {/* Mini Selos */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">Canal oficial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">100% originais</span>
              </div>
            </div>
          </div>

          <div className="relative p-4 md:p-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-4 md:inset-10 bg-gradient-to-br from-violet-200 via-purple-200 to-violet-300 rounded-3xl transform rotate-6"></div>
            <img
              src={ImgHero}
              alt="Produtos Decreína para Podologia"
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
          aria-label="Ver produtos"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}