import { ChevronDown, Shield, Truck, Award } from 'lucide-react';
import ImgHero from '../assets/imghero.jpg'; 

export default function Hero() {
  const scrollToBanners = () => {
    const element = document.getElementById('banners');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-12 bg-gradient-to-br from-teal-50 via-white to-cyan-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fadeInUp"> 
            
            <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold">
              Canal Oficial Decreína
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              O canal oficial da Decreína para profissionais da podologia
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Qualidade de nível clínico para elevar seus atendimentos, fidelizar pacientes e aumentar seu faturamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href="#banners"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToBanners();
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
              >
                Quero comprar agora
              </a>
              <a 
                href="#catalogo"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 text-sm md:text-base"
              >
                Ver catálogo completo
              </a>
            </div>

            {/* Mini Selos */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4">
              <div className="flex flex-col md:flex-row items-center md:gap-2 text-xs md:text-sm text-gray-700">
                <div className="bg-teal-100 p-1.5 md:p-2 rounded-lg mb-1 md:mb-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
                </div>
                <span className="font-medium text-center md:text-left">Canal oficial</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-2 text-xs md:text-sm text-gray-700">
                <div className="bg-teal-100 p-1.5 md:p-2 rounded-lg mb-1 md:mb-0">
                  <Truck className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
                </div>
                <span className="font-medium text-center md:text-left">Entrega rápida</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-2 text-xs md:text-sm text-gray-700">
                <div className="bg-teal-100 p-1.5 md:p-2 rounded-lg mb-1 md:mb-0">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
                </div>
                <span className="font-medium text-center md:text-left">100% originais</span>
              </div>
            </div>
          </div>

          <div className="relative p-4 md:p-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-4 md:inset-8 bg-gradient-to-br from-violet-200 via-purple-200 to-violet-300 rounded-3xl transform rotate-6"></div>
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
          onClick={scrollToBanners}
          className="animate-bounce bg-white/80 hover:bg-white text-teal-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Ver Decreína"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}