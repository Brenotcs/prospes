import { ChevronDown } from 'lucide-react';
import ImgHero2 from '../assets/imghero2.png';
import BackgroundImg from '../assets/background.jpg'; 

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
    <section className="relative pt-20 pb-12 xl:pb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 xl:px-12 py-8 xl:py-4 relative z-10 w-full">
        <div className="xl:max-w-3xl">
          {/* Conteúdo Textual */}
          <div className="space-y-6 xl:space-y-4 animate-fadeInUp"> 
            
            <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white px-5 xl:px-4 py-2.5 xl:py-2 rounded-full text-sm font-semibold">
              Canal Oficial Decreína
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
              O canal oficial da <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Decreína</span> para profissionais da podologia
            </h1>

            <p className="text-lg xl:text-base text-gray-300 leading-relaxed">
              Qualidade de nível clínico para elevar seus atendimentos, fidelizar pacientes e aumentar seu faturamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 xl:gap-3 pt-4 xl:pt-2">
              <button 
                onClick={scrollToBanners}
                className="inline-flex items-center justify-center px-8 xl:px-6 py-4 xl:py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 hover:scale-105 text-base xl:text-sm"
              >
                Quero comprar agora
              </button>
              <a 
                href="#catalogo"
                className="inline-flex items-center justify-center px-8 xl:px-6 py-4 xl:py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-base xl:text-sm"
              >
                Ver catálogo completo
              </a>
            </div>

            {/* Estatísticas/Badges */}
            <div className="flex flex-wrap gap-6 xl:gap-4 pt-6 xl:pt-4 text-sm xl:text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2.5 xl:w-2 h-2.5 xl:h-2 bg-teal-400 rounded-full"></div>
                <span>Canal oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 xl:w-2 h-2.5 xl:h-2 bg-blue-400 rounded-full"></div>
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 xl:w-2 h-2.5 xl:h-2 bg-teal-400 rounded-full"></div>
                <span>100% originais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagem com background - apenas desktop (xl e acima) - posicionada no canto inferior direito */}
      <div className="hidden xl:block absolute bottom-0 right-0 top-24 w-[35%] z-10 opacity-0 animate-fadeIn overflow-hidden" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', clipPath: 'ellipse(100% 100% at 100% 50%)' }}>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={BackgroundImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Imagem principal */}
        <img
          src={ImgHero2}
          alt="Profissional com produtos Decreína"
          className="relative z-10 w-auto h-full object-cover object-bottom drop-shadow-2xl ml-auto"
        />
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