import { Search, Droplets, Heart } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Escolha o produto ideal",
    description: "Selecione o produto adequado para a necessidade específica da sua paciente."
  },
  {
    number: "2",
    icon: Droplets,
    title: "Aplique com segurança",
    description: "Use fórmulas testadas e aprovadas para uso profissional."
  },
  {
    number: "3",
    icon: Heart,
    title: "Entregue resultados visíveis",
    description: "Conquiste a fidelização no primeiro atendimento com resultados reais."
  }
];

export default function Journey() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como entregar resultado real em cada atendimento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e eficiente para resultados consistentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -left-4 bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
