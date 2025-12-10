import { Users, Award, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountAnimation } from '../hooks/useCountAnimation';

const stats = [
  {
    icon: Users,
    number: 30000,
    suffix: "+",
    label: "Atendimentos realizados com Decreína",
    format: (n: number) => `${(n / 1000).toFixed(0)}mil`
  },
  {
    icon: Award,
    number: 92,
    suffix: "%",
    label: "Das profissionais recompram",
    format: (n: number) => n.toString()
  },
  {
    icon: MapPin,
    number: 0,
    suffix: "",
    label: "Usado em clínicas em todo o Brasil",
    text: "Nacional"
  }
];

interface StatCardProps {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
}

function StatCard({ stat, index, isVisible }: StatCardProps) {
  const Icon = stat.icon;
  const count = useCountAnimation({ 
    end: stat.number, 
    duration: 2000, 
    isVisible 
  });

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 ${
        isVisible ? 'animate-fade-zoom' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="bg-teal-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
        <Icon className="w-8 h-8 text-teal-400" />
      </div>
      <div className="text-5xl font-bold text-teal-400 mb-2">
        {stat.text ? stat.text : `${stat.format?.(count) || count}${stat.suffix}`}
      </div>
      <p className="text-gray-300 text-lg">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Números que comprovam a confiança
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resultados reais de profissionais em todo o país
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatCard 
                key={index} 
                stat={stat} 
                index={index} 
                isVisible={isVisible} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
