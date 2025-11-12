import { Sparkles, Shield, Award, Heart, Clock, Users } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: "Fórmulas Avançadas",
    description: "Produtos desenvolvidos com tecnologia de ponta para resultados eficazes e duradouros."
  },
  {
    icon: Shield,
    title: "Testado Dermatologicamente",
    description: "Todos os produtos são testados e aprovados por profissionais da saúde."
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Ingredientes de alta qualidade importados e nacionais cuidadosamente selecionados."
  },
  {
    icon: Heart,
    title: "Cuidado Profissional",
    description: "Desenvolvido por podólogos para proporcionar o melhor cuidado aos seus pés."
  },
  {
    icon: Clock,
    title: "Resultados Rápidos",
    description: "Veja mudanças significativas nas primeiras semanas de uso regular."
  },
  {
    icon: Users,
    title: "Confiança Comprovada",
    description: "Milhares de clientes satisfeitos em todo o Brasil confiam em nossos produtos."
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
  <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher a Prospés?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compromisso com qualidade, eficácia e satisfação dos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
