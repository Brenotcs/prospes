import { ChevronDown } from 'lucide-react';
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
    <section className="relative pt-20 pb-12 md:pb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-8 md:py-4 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Conteúdo Textual */}
          <div className="space-y-6 md:space-y-4 animate-fadeInUp"> 
            
            <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-5 md:px-4 py-2.5 md:py-2 rounded-full text-sm font-semibold">
              Canal Oficial Decreína
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              O canal oficial da <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Decreína</span> para profissionais da podologia
            </h1>

            <p className="text-lg md:text-base text-gray-300 leading-relaxed">
              Qualidade de nível clínico para elevar seus atendimentos, fidelizar pacientes e aumentar seu faturamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-3 pt-4 md:pt-2">
              <button 
                onClick={scrollToBanners}
                className="inline-flex items-center justify-center px-8 md:px-6 py-4 md:py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 hover:scale-105 text-base md:text-sm"
              >
                Quero comprar agora
              </button>
              <a 
                href="#catalogo"
                className="inline-flex items-center justify-center px-8 md:px-6 py-4 md:py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-base md:text-sm"
              >
                Ver catálogo completo
              </a>
            </div>

            {/* Estatísticas/Badges */}
            <div className="flex flex-wrap gap-6 md:gap-4 pt-6 md:pt-4 text-sm md:text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2.5 md:w-2 h-2.5 md:h-2 bg-teal-400 rounded-full"></div>
                <span>Canal oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 md:w-2 h-2.5 md:h-2 bg-blue-400 rounded-full"></div>
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 md:w-2 h-2.5 md:h-2 bg-teal-400 rounded-full"></div>
                <span>100% originais</span>
              </div>
            </div>
          </div>

          {/* Imagem com círculo decorativo - apenas desktop */}
          <div className="relative hidden md:flex justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute w-[350px] h-[350px] bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute w-[320px] h-[320px] border-4 border-white/10 rounded-full"></div>
            <div className="relative z-10">
              <img
                src={ImgHero}
                alt="Produtos Decreína para Podologia"
                className="rounded-2xl shadow-2xl w-full max-w-sm h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Seta para baixo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToBanners}
          className="animate-bounce bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 border border-white/20 cursor-pointer"
          aria-label="Ver Decreína"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}