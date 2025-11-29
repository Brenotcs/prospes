import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Uso em todos os atendimentos. As pacientes notam a diferença na hora.",
    author: "Dra. Ana Paula Silva",
    role: "Podóloga",
    location: "São Paulo, SP"
  },
  {
    id: 2,
    quote: "A qualidade dos produtos Decreína eleva o padrão da minha clínica. Resultados visíveis e pacientes satisfeitas.",
    author: "Carla Mendes",
    role: "Podóloga",
    location: "Rio de Janeiro, RJ"
  },
  {
    id: 3,
    quote: "Desde que comecei a usar a linha Decreína, minha taxa de retorno de clientes aumentou significativamente.",
    author: "Juliana Santos",
    role: "Podóloga",
    location: "Belo Horizonte, MG"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Profissionais que confiam na Decreína
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos de podólogas que usam nossos produtos diariamente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <Quote className="w-12 h-12 text-teal-200" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonial.author}
                </p>
                <p className="text-teal-600 font-medium">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
