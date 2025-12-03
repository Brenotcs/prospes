import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

type FormState = {
  nome: string;
  sobrenome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  cidade: string;
  uf: string;
  perfilProfissional: string;
  perfilOutros: string;
  principaisServicos: string;
};

const ESTADOS_BRASIL = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const PERFIS_PROFISSIONAIS = [
  'Sou podóloga',
  'Sou manicure',
  'Sou esteticista',
  'Outros…'
];

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function Contato() {
  const [form, setForm] = useState<FormState>({
    nome: '',
    sobrenome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    cidade: '',
    uf: '',
    perfilProfissional: '',
    perfilOutros: '',
    principaisServicos: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) nextErrors.nome = 'Nome é obrigatório.';
    if (!form.sobrenome.trim()) nextErrors.sobrenome = 'Sobrenome é obrigatório.';
    if (!form.email.trim()) nextErrors.email = 'Email é obrigatório.';
    else if (!validateEmail(form.email)) nextErrors.email = 'Email inválido.';
    if (!form.whatsapp.trim()) nextErrors.whatsapp = 'WhatsApp é obrigatório.';
    if (!form.cidade.trim()) nextErrors.cidade = 'Cidade é obrigatória.';
    if (!form.uf) nextErrors.uf = 'UF é obrigatória.';
    if (!form.perfilProfissional) nextErrors.perfilProfissional = 'Perfil profissional é obrigatório.';
    if (form.perfilProfissional === 'Outros…' && !form.perfilOutros.trim()) {
      nextErrors.perfilOutros = 'Por favor, especifique seu perfil profissional.';
    }
    if (!form.principaisServicos.trim()) nextErrors.principaisServicos = 'Principais serviços é obrigatório.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      // Preparar dados para salvar
      const nomeCompleto = `${form.nome} ${form.sobrenome}`.trim();
      const perfilFinal = form.perfilProfissional === 'Outros…' 
        ? form.perfilOutros 
        : form.perfilProfissional;

      const leadData = {
        name: nomeCompleto,
        email: form.email,
        phone: form.whatsapp,
        company: form.empresa,
        cidade: form.cidade,
        uf: form.uf,
        perfil_profissional: perfilFinal,
        principais_servicos: form.principaisServicos,
      };

      console.log('Enviando lead:', leadData);

      // 1. Salvar no Supabase (backup)
      const { supabase } = await import('../lib/supabase');
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([leadData]);

      if (supabaseError) {
        console.error('Erro ao salvar no Supabase:', supabaseError);
      }

      // 2. Enviar para Make.com → Reev
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      
      if (webhookUrl) {
        try {
          const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...leadData,
              timestamp: new Date().toISOString(),
              source: 'website_contact_form'
            }),
          });

          if (!webhookResponse.ok) {
            console.error('Erro ao enviar para webhook:', webhookResponse.status);
          } else {
            console.log('Lead enviado para Make/Reev com sucesso!');
          }
        } catch (webhookError) {
          console.error('Erro no webhook:', webhookError);
        }
      }

      setStatus('success');
      
      // Limpar formulário após sucesso
      setForm({
        nome: '',
        sobrenome: '',
        empresa: '',
        email: '',
        whatsapp: '',
        cidade: '',
        uf: '',
        perfilProfissional: '',
        perfilOutros: '',
        principaisServicos: ''
      });

      // Após 2 segundos, rolar para o topo da página
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Resetar o status após rolar
        setTimeout(() => setStatus('idle'), 1000);
      }, 2000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    }
  }

  const showPerfilOutros = form.perfilProfissional === 'Outros…';

  return (
    <section id="contato" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Entre em contato para dúvidas, suporte ou informações sobre nossos produtos.</p>
        </div>

        <div className="max-w-6xl mx-auto animate-fadeInUp">
          <h3 className="text-2xl font-semibold mb-6 text-center">Envie sua mensagem</h3>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lado esquerdo */}
              <div className="space-y-4">
                <div>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.nome ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <input
                    name="sobrenome"
                    value={form.sobrenome}
                    onChange={handleChange}
                    placeholder="Sobrenome"
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.sobrenome ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.sobrenome && <p className="text-red-500 text-sm mt-1">{errors.sobrenome}</p>}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="empresa" className="block text-sm font-semibold text-gray-800 mb-1">
                    Empresa <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2 italic">Campo obrigatório</p>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Se não tiver uma clínica ou salão, coloque aqui seu perfil do Instagram!
                  </p>
                  <input
                    id="empresa"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Nome da empresa ou @instagram"
                    className={`w-full rounded-md border px-4 py-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ${errors.empresa ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {errors.empresa && <p className="text-red-500 text-sm mt-2">{errors.empresa}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="WhatsApp"
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.whatsapp ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                </div>

                <div>
                  <input
                    name="cidade"
                    value={form.cidade}
                    onChange={handleChange}
                    placeholder="Cidade"
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.cidade ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
                </div>

                <div>
                  <select
                    name="uf"
                    value={form.uf}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.uf ? 'border-red-400' : 'border-gray-200'}`}
                  >
                    <option value="">UF</option>
                    {ESTADOS_BRASIL.map(estado => (
                      <option key={estado} value={estado}>{estado}</option>
                    ))}
                  </select>
                  {errors.uf && <p className="text-red-500 text-sm mt-1">{errors.uf}</p>}
                </div>
              </div>

              {/* Lado direito */}
              <div className="space-y-4">
                <div>
                  <select
                    name="perfilProfissional"
                    value={form.perfilProfissional}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.perfilProfissional ? 'border-red-400' : 'border-gray-200'}`}
                  >
                    <option value="">Perfil profissional</option>
                    {PERFIS_PROFISSIONAIS.map(perfil => (
                      <option key={perfil} value={perfil}>{perfil}</option>
                    ))}
                  </select>
                  {errors.perfilProfissional && <p className="text-red-500 text-sm mt-1">{errors.perfilProfissional}</p>}
                </div>

                {showPerfilOutros && (
                  <div>
                    <input
                      name="perfilOutros"
                      value={form.perfilOutros}
                      onChange={handleChange}
                      placeholder="Especifique seu perfil profissional"
                      className={`w-full rounded-md border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.perfilOutros ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.perfilOutros && <p className="text-red-500 text-sm mt-1">{errors.perfilOutros}</p>}
                  </div>
                )}

                <div>
                  <textarea
                    name="principaisServicos"
                    value={form.principaisServicos}
                    onChange={handleChange}
                    placeholder="Principais serviços - Costumo trabalhar principalmente com casos de…"
                    rows={8}
                    className={`w-full rounded-md border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300 ${errors.principaisServicos ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.principaisServicos && <p className="text-red-500 text-sm mt-1">{errors.principaisServicos}</p>}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto bg-slate-900 text-white rounded-md px-8 py-3 font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-slate-900 hover:to-sky-500 hover:shadow-xl active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 animate-fadeInUp">
                  <CheckCircle className="w-8 h-8 animate-bounce" />
                  <span className="font-semibold">Mensagem enviada com sucesso!</span>
                </div>
              )}
              
              {status === 'error' && (
                <p className="text-red-600 text-center">Erro ao enviar. Tente novamente.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}