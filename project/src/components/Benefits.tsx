import { Zap, Shield, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: Zap,
    title: "Resultados imediatos no atendimento",
    description: "Fórmulas de alta performance que entregam resultados visíveis já na primeira aplicação, elevando a qualidade do seu trabalho."
  },
  {
    icon: Shield,
    title: "Fórmulas seguras para peles sensíveis",
    description: "Produtos testados dermatologicamente, desenvolvidos especialmente para uso profissional com total segurança."
  },
  {
    icon: TrendingUp,
    title: "Alto rendimento para rotina pesada",
    description: "Produtos econômicos e eficientes, ideais para quem atende alto volume de pacientes diariamente."
  }
];

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Por que profissionais escolhem a Decreína?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compromisso com resultados, segurança e eficiência em cada produto
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon; 
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}