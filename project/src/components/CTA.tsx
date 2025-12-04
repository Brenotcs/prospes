import { ShoppingCart } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
            Cuide melhor de cada paciente
          </h2>

          <p className="text-xl xl:text-2xl text-teal-50">
            Com produtos profissionais reconhecidos pela comunidade da podologia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              Comprar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
