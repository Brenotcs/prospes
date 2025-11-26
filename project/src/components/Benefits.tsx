import { FlaskConical, ShieldCheck, Zap, Leaf, Star, ThumbsUp } from 'lucide-react'; // 👈 Ícones atualizados

// Lista de benefícios com os novos ícones
const benefits = [
  {
    icon: FlaskConical, // Era Sparkles
    title: "Fórmulas Avançadas",
    description: "Produtos desenvolvidos no Laboratório de Cosmetologia Aplicada (LCA), a partir de tecnologias de ponta e do compromisso em garantir resultados eficazes, seguros e duradouros."
  },
  {
    icon: ShieldCheck, // Era Shield
    title: "Testado Dermatologicamente",
    description: "Todos os produtos são testados e aprovados por profissionais da saúde."
  },
  {
    icon: Zap, // Era Award
    title: "Resultados Rápidos",
    description: "Resultados visíveis já nas primeiras aplicações. O uso contínuo intensifica os efeitos e garante o bem-estar duradouro."
  },
  {
    icon: Leaf, // Era Heart
    title: "Vegano",
    description: "Todos os produtos são veganos, sem ingredientes de origem animal. Inclusive, utilizamos o Lanogreen (lanolina vegetal) para assegurar uma hidratação intensa e sustentável."
  },
  {
    icon: Star, // Era Clock
    title: "Qualidade Premium",
    description: "Ingredientes de alta qualidade, importados e nacionais, cuidadosamente selecionados."
  },
  {
    icon: ThumbsUp, // Era Users
    title: "Confiança na praça",
    description: "Milhares de clientes satisfeitos em todo Brasil confiam em nossos produtos."
  }
];

export default function Benefits() {
  return (
    // Fundo Gradiente: Mantido from-gray-50 to-teal-50
    <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher a Decreína?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Compromisso com a qualidade, segurança e inovação em cada fórmula
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon; 
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Cores do Ícone: MANTIDO bg-teal-100 e text-teal-600 */}
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-teal-600" /> {/* 👈 ÍCONE ATUALIZADO */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                {/* Justificação do Texto */}
                <p className="text-gray-600 leading-relaxed **text-justify**">{benefit.description}</p> {/* 👈 TEXTO JUSTIFICADO */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}