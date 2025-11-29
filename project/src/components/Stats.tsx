import { Users, Award, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "30mil+",
    label: "Atendimentos realizados com Decreína"
  },
  {
    icon: Award,
    number: "92%",
    label: "Das profissionais recompram"
  },
  {
    icon: MapPin,
    number: "Nacional",
    label: "Usado em clínicas em todo o Brasil"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que comprovam a confiança
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resultados reais de profissionais em todo o país
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-teal-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-teal-400" />
                </div>
                <div className="text-5xl font-bold text-teal-400 mb-2">{stat.number}</div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
