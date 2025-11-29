import { Award, HeartHandshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sobre a Decreína + Prospez
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">A Decreína</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Marca criada por especialistas em cuidados para os pés, desenvolvida especificamente 
                    para a rotina profissional. Cada produto é resultado de pesquisa e desenvolvimento 
                    focado em entregar resultados reais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">A Prospez</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Canal exclusivo onde podólogas e profissionais encontram toda a linha oficial Decreína, 
                    com entrega rápida e suporte real. Seu parceiro de confiança para produtos profissionais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 shadow-xl">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-teal-600">15+</div>
                <p className="text-2xl font-semibold text-gray-900">Anos de experiência</p>
                <p className="text-gray-600">
                  Dedicados ao desenvolvimento de produtos de excelência para profissionais da podologia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
