import { Users, Building2, Sparkles } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: "Podólogas que querem elevar a eficiência dos tratamentos",
    description: "Produtos desenvolvidos especificamente para a rotina profissional da podologia."
  },
  {
    icon: Building2,
    title: "Clínicas que precisam de padronização de alta qualidade",
    description: "Linha completa para estabelecer protocolos eficientes e seguros."
  },
  {
    icon: Sparkles,
    title: "Manicures/Esteticistas que querem oferecer algo superior",
    description: "Diferencial competitivo com produtos de nível clínico para seus clientes."
  }
];

export default function Segmentation() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Feito para quem exige resultado real
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Profissionais que buscam excelência em cada atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                <p className="text-teal-100 leading-relaxed">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
