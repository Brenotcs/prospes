import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
              Produtos Profissionais de Podologia
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Cuide dos seus pés com produtos
              <span className="text-teal-600"> profissionais</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Descubra nossa linha completa de produtos desenvolvidos especialmente para o cuidado e saúde dos seus pés. Qualidade profissional ao seu alcance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToProducts}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                Ver Produtos
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#beneficios"
                className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                Saiba Mais
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">5000+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-gray-600">Produtos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Produtos de Podologia"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
