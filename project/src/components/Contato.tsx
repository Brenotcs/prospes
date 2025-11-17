import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function Contato() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Nome é obrigatório.';
    if (!form.email.trim()) nextErrors.email = 'Email é obrigatório.';
    else if (!validateEmail(form.email)) nextErrors.email = 'Email inválido.';
    if (!form.message.trim()) nextErrors.message = 'Mensagem é obrigatória.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    // envio simulado
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  }

  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Entre em contato para dúvidas, suporte ou informações sobre nossos produtos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: form card */}
          <div className="bg-white rounded-2xl p-8 shadow-md h-full animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-4 text-center">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-3 flex flex-col items-center">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className={`w-full md:w-96 rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className={`w-full md:w-96 rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Telefone"
                  className="w-full md:w-96 rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 border-gray-200"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva sua dúvida ou solicitação"
                  rows={5}
                  className={`w-full md:w-96 rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  // 👈 MUDANÇA: Adicionamos 'transition-colors'
                  className="w-full md:w-96 bg-slate-900 text-white rounded-md py-2 font-semibold transition **transition-colors** transform duration-500 ease-out hover:scale-105 hover:bg-gradient-to-r hover:from-slate-900 hover:to-sky-500 hover:shadow-lg"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {status === 'success' && <p className="text-green-600 text-center">Mensagem enviada com sucesso.</p>}
                {status === 'error' && <p className="text-red-600 text-center">Erro ao enviar. Tente novamente.</p>}
                </div>
              </form>
          </div>

          {/* Right: contact info (Mantido) */}
          <div className="h-full flex flex-col justify-between gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4 text-gray-700">
                {/* Ícone de Telefone */}
                <div className="flex items-start gap-3">
                  <span className="text-slate-900 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.107l.522 1.044a2 2 0 01-.45 2.178L8.382 9.618a16.042 16.042 0 006 6l1.289-1.257a2 2 0 012.178-.45l1.044.522A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 4V3a2 2 0 012-2h0z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Telefone</div>
                    <div className="text-sm text-gray-600">(71) 99999-9999</div>
                  </div>
                </div>
                {/* Ícone de E-mail */}
                <div className="flex items-start gap-3">
                  <span className="text-slate-900 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-slate-900">E-mail</div>
                    <div className="text-sm text-gray-600">contato@prospes.com.br</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Horário de Atendimento Comercial</h4>
              <p className="text-sm text-gray-700">Segunda a Sexta: 9h às 17h</p>
              <p className="text-sm text-gray-700">Para suporte de vendas, utilize o formulário ao lado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}