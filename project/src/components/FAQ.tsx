import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como faço para realizar um pedido?",
    answer: "Entre em contato conosco pelo WhatsApp através do botão 'Fale Conosco' ou 'Comprar pelo WhatsApp' nos produtos. Nossa equipe irá auxiliá-lo com todo o processo de compra."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega varia de acordo com sua localização. Geralmente, realizamos entregas em todo o Brasil entre 5 a 15 dias úteis. Oferecemos frete grátis para compras acima de R$ 150."
  },
  {
    question: "Os produtos são seguros para uso diário?",
    answer: "Sim! Todos os nossos produtos são testados dermatologicamente e desenvolvidos por profissionais de podologia. São seguros para uso diário seguindo as instruções de cada produto."
  },
  {
    question: "Como sei qual produto é ideal para mim?",
    answer: "Entre em contato conosco pelo WhatsApp e descreva suas necessidades. Nossa equipe de especialistas irá recomendar os produtos mais adequados para o seu caso específico."
  },
  {
    question: "Posso trocar ou devolver um produto?",
    answer: "Sim, aceitamos trocas e devoluções em até 7 dias após o recebimento, desde que o produto esteja lacrado e sem uso. Entre em contato conosco para iniciar o processo."
  },
  {
    question: "Vocês têm loja física?",
    answer: "Atualmente trabalhamos apenas com vendas online, o que nos permite oferecer os melhores preços. Realizamos entregas para todo o Brasil com total segurança."
  },
  {
    question: "Qual a diferença entre produtos profissionais e comuns?",
    answer: "Produtos profissionais possuem formulações mais concentradas e eficazes, desenvolvidas com ingredientes de alta qualidade e tecnologia avançada, proporcionando resultados superiores."
  },
  {
    question: "Como posso acompanhar meu pedido?",
    answer: "Após a confirmação do pagamento, você receberá o código de rastreamento pelo WhatsApp. Você poderá acompanhar seu pedido em tempo real através do site dos Correios."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-teal-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Não encontrou sua resposta?
          </h3>
          <p className="text-gray-600 mb-4">
            Entre em contato conosco pelo WhatsApp e teremos prazer em ajudá-lo
          </p>
          <a
            href="#contato"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Falar Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
