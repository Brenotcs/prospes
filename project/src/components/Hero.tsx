import { ChevronDown } from 'lucide-react';
// 👈 1. Importa a imagem local
import ImgHero from '../assets/imghero.jpg'; 
import BannerCarousel from './BannerCarousel';

export default function Hero() {
  const scrollToBanners = () => {
    document.getElementById('banners')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
    {/* Reaplicando ajustes de compactação: pt-24, min-h-[80vh], py-8, pb-24 */}
    <section className="relative pt-24 pb-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Usando gap-8 e space-y-4 para compactação */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fadeInUp"> 
            
            <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
              Cosméticos Podológicos Profissionais
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Seus atendimentos mais seguros e 
              <span className="text-teal-600"> eficazes</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Descubra a linha completa de produtos desenvolvidos especialmente para o cuidado com a saúde das unhas, dos pés e das mãos. Formulação exclusiva, com qualidade e segurança.
            </p>

            {/* Botões removidos conforme solicitado (Ver Produtos / Saiba Mais)
                A navegação para produtos fica no banner/decreína abaixo */}
          </div>

          <div className="relative p-4 md:p-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {/* Fundo menor (lilás) */}
            <div className="absolute inset-4 md:inset-10 bg-gradient-to-br from-violet-200 via-purple-200 to-violet-300 rounded-3xl transform rotate-6"></div>
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
          onClick={scrollToBanners}
          className="animate-bounce bg-white/80 hover:bg-white text-teal-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Ir para banners"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>

    {/* Sessão de banners/carrossel abaixo do hero */}
    <BannerCarousel />
    </>
  );
}