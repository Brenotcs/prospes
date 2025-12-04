import LogoDecreina from '../assets/logodecreina.png';

export default function BannerCarousel() {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleBuy = () => {
    const element = document.getElementById('contato');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="banners" className="relative w-full py-12 bg-emerald-500 text-white overflow-hidden">
      {/* Overlay de gradiente suave apenas na parte direita */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-emerald-400/40 to-transparent pointer-events-none rounded-l-3xl z-0" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 items-center">
          {/* Logo em destaque */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl flex items-center justify-center border-2 border-emerald-200">
              <img src={LogoDecreina} alt="Logo Decreína" className="w-56 h-auto object-contain" />
            </div>
          </div>

          {/* Texto e ações */}
          <div className="space-y-4 text-white">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Referência em qualidade e inovação, desde 2003
            </div>

            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              A Prospés é o Canal de Vendas Oficial da Decreína para Profissionais
            </div>

            <h3 className="text-4xl xl:text-5xl font-extrabold tracking-tight">Decreína</h3>

            <p className="text-base text-white/90 leading-relaxed max-w-xl">
              Nossa linha profissional reúne produtos de alta performance para hidratação, renovação, reparação e proteção da pele e das unhas, oferecendo um ciclo de cuidado completo, com resultados visíveis, segurança e praticidade.
            </p>

            <div className="flex gap-3 pt-3">
              <button
                onClick={scrollToProducts}
                className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
              >
                Ver produtos
              </button>

              <button
                onClick={handleBuy}
                className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
