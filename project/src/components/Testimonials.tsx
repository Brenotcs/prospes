import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos com nossos produtos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-teal-200" />
                </div>

                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                  {testimonial.message}
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  {testimonial.location && (
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
