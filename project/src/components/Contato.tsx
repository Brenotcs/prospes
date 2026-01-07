import { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';

type FormState = {
  tipoUsuario: string;
  nome: string;
  sobrenome: string;
  whatsapp: string;
  email: string;
  empresa: string;
  cidade: string;
  uf: string;
};

const ESTADOS_BRASIL = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function Contato() {
  const [etapa, setEtapa] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>({
    tipoUsuario: '',
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    empresa: '',
    cidade: '',
    uf: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showWarning, setShowWarning] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    
    // Formatação especial para WhatsApp
    if (name === 'whatsapp') {
      // Remove tudo que não é número
      const numbers = value.replace(/\D/g, '');
      
      // Limita a 11 dígitos (DDD + 9 dígitos)
      const limited = numbers.slice(0, 11);
      
      // Formata: (00) 00000-0000
      let formatted = limited;
      if (limited.length > 10) {
        formatted = limited.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (limited.length > 6) {
        formatted = limited.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (limited.length > 2) {
        formatted = limited.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      } else if (limited.length > 0) {
        formatted = limited.replace(/(\d{0,2})/, '($1');
      }
      
      setForm(prev => ({ ...prev, [name]: formatted }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
    
    setErrors(prev => ({ ...prev, [name]: undefined }));

    // Mostrar aviso quando selecionar consumidor final ou estudante
    if (name === 'tipoUsuario' && (value === 'consumidor' || value === 'estudante')) {
      setShowWarning(true);
    } else if (name === 'tipoUsuario') {
      setShowWarning(false);
    }
  }

  function validateEtapa1() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    
    if (!form.tipoUsuario) nextErrors.tipoUsuario = 'Selecione uma opção.';
    if (!form.nome.trim()) nextErrors.nome = 'Nome é obrigatório.';
    if (!form.sobrenome.trim()) nextErrors.sobrenome = 'Sobrenome é obrigatório.';
    
    // Validação de WhatsApp
    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = 'WhatsApp é obrigatório.';
    } else {
      const numbers = form.whatsapp.replace(/\D/g, '');
      if (numbers.length !== 11) {
        nextErrors.whatsapp = 'WhatsApp deve ter exatamente 11 dígitos (DDD + número).';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateEtapa2() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    
    if (!form.email.trim()) nextErrors.email = 'Email é obrigatório.';
    else if (!validateEmail(form.email)) nextErrors.email = 'Email inválido.';
    if (!form.empresa.trim()) nextErrors.empresa = 'Empresa ou Instagram é obrigatório.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleContinuar(e: React.FormEvent) {
    e.preventDefault();
    
    // Bloquear consumidor final
    if (form.tipoUsuario === 'consumidor') {
      return;
    }

    if (!validateEtapa1()) return;
    setEtapa(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEtapa2()) return;

    setStatus('sending');

    try {
      // Remove formatação e adiciona código do Brasil (55)
      const phoneNumbers = form.whatsapp.replace(/\D/g, '');
      const phoneWithCountryCode = `55${phoneNumbers}`;
      
      const leadData = {
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        phone: phoneWithCountryCode,
        company: form.empresa,
        cidade: form.cidade,
        uf: form.uf,
        tipo_usuario: form.tipoUsuario,
        perfil_profissional: 'Profissional',
        timestamp: new Date().toISOString(),
        source: 'website_contact_form'
      };

      console.log('=== INICIANDO ENVIO ===');
      console.log('Dados do lead:', leadData);

      // Enviar direto para webhook do Zapier
      const webhookUrl = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
      
      console.log('URL do webhook:', webhookUrl ? 'Configurada' : 'NÃO configurada');
      
      if (!webhookUrl) {
        console.error('VITE_ZAPIER_WEBHOOK_URL não configurada no arquivo .env');
        alert('Configuração incorreta. Entre em contato com o suporte.');
        setStatus('error');
        return;
      }

      console.log('Enviando requisição para Zapier...');

      // Zapier webhooks funcionam com no-cors mode
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Necessário para evitar erro de CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      console.log('✅ Lead enviado com sucesso para o Zapier!');
      console.log('Verifique no Zapier > Zap History se o dado chegou');

      setStatus('success');
      
      // Resetar formulário
      setForm({
        tipoUsuario: '',
        nome: '',
        sobrenome: '',
        whatsapp: '',
        email: '',
        empresa: '',
        cidade: '',
        uf: ''
      });
      setEtapa(1);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    }
  }

  function voltar() {
    setEtapa(1);
    setErrors({});
  }

  const tipoUsuarioLabel = form.tipoUsuario === 'profissional' ? 'Profissional' :
                           form.tipoUsuario === 'estudante' ? 'Estudante' : '';

  return (
    <section id="contato" className="py-20 scroll-mt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {etapa === 1 ? 'Acesso exclusivo para profissionais' : 'Complete seu cadastro'}
          </h2>
          {etapa === 1 && (
            <p className="text-lg text-gray-600">*Informe seus dados para continuar.</p>
          )}
        </div>

        {/* Indicador de etapas */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className={`flex items-center gap-2 ${etapa === 1 ? 'text-teal-600 font-semibold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${etapa === 1 ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              1
            </div>
            <span>Acesso</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          <div className={`flex items-center gap-2 ${etapa === 2 ? 'text-teal-600 font-semibold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${etapa === 2 ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              2
            </div>
            <span>Dados</span>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fadeInUp">
          {etapa === 1 ? (
            // ETAPA 1
            <form onSubmit={handleContinuar} noValidate>
              <div className="space-y-6">
                {/* Tipo de usuário */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Você é profissional da área? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-teal-500 transition">
                      <input
                        type="radio"
                        name="tipoUsuario"
                        value="profissional"
                        checked={form.tipoUsuario === 'profissional'}
                        onChange={handleChange}
                        className="w-5 h-5 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">Sim, sou profissional</span>
                    </label>

                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-amber-500 transition">
                      <input
                        type="radio"
                        name="tipoUsuario"
                        value="estudante"
                        checked={form.tipoUsuario === 'estudante'}
                        onChange={handleChange}
                        className="w-5 h-5 text-amber-600"
                      />
                      <span className="ml-3 text-gray-700">Sou estudante</span>
                    </label>

                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-red-500 transition">
                      <input
                        type="radio"
                        name="tipoUsuario"
                        value="consumidor"
                        checked={form.tipoUsuario === 'consumidor'}
                        onChange={handleChange}
                        className="w-5 h-5 text-red-600"
                      />
                      <span className="ml-3 text-gray-700">Sou consumidor final</span>
                    </label>
                  </div>
                  {errors.tipoUsuario && <p className="text-red-500 text-sm mt-2">{errors.tipoUsuario}</p>}
                </div>

                {/* Avisos */}
                {showWarning && form.tipoUsuario === 'consumidor' && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-start gap-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-red-800 font-medium">
                        *Nosso canal é de uso exclusivo para profissionais.
                      </p>
                      <p className="text-red-700 text-sm mt-1">
                        Para compras como cliente final, acesse:{' '}
                        <a href="https://decreina.com.br/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                          https://decreina.com.br/
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {showWarning && form.tipoUsuario === 'estudante' && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded flex items-start gap-3">
                    <AlertCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-amber-800 font-medium">
                        *Nosso canal é exclusivo para profissionais em atuação.
                      </p>
                      <p className="text-amber-700 text-sm mt-1">
                        Caso ainda não atue, o atendimento pode ser limitado.
                        Para compras como cliente final, acesse:{' '}
                        <a href="https://decreina.com.br/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                          https://decreina.com.br/
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Campos básicos */}
                {form.tipoUsuario && form.tipoUsuario !== 'consumidor' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Nome *</label>
                        <input
                          name="nome"
                          value={form.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.nome ? 'border-red-400' : 'border-gray-300'}`}
                        />
                        {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Sobrenome *</label>
                        <input
                          name="sobrenome"
                          value={form.sobrenome}
                          onChange={handleChange}
                          placeholder="Seu sobrenome"
                          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.sobrenome ? 'border-red-400' : 'border-gray-300'}`}
                        />
                        {errors.sobrenome && <p className="text-red-500 text-sm mt-1">{errors.sobrenome}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">WhatsApp *</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        maxLength={15}
                        className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.whatsapp ? 'border-red-400' : 'border-gray-300'}`}
                      />
                      {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:bg-teal-700 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Continuar
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </form>
          ) : (
            // ETAPA 2
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Perfil profissional</label>
                  <input
                    type="text"
                    value="Profissional"
                    disabled
                    className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600 cursor-not-allowed"
                  />
                  <p className="text-gray-500 text-sm mt-1">Campo preenchido automaticamente</p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Empresa ou Instagram profissional *</label>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Ex: Clínica ou @instagram"
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.empresa ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Cidade</label>
                    <input
                      name="cidade"
                      value={form.cidade}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">UF</label>
                    <select
                      name="uf"
                      value={form.uf}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Selecione</option>
                      {ESTADOS_BRASIL.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={voltar}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex-1 bg-teal-600 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:bg-teal-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Finalizar cadastro'}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Mensagens de status */}
          {status === 'success' && (
            <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded flex items-center gap-3">
              <CheckCircle className="text-green-500" size={24} />
              <p className="text-green-800 font-medium">Cadastro realizado com sucesso!</p>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-center gap-3">
              <AlertCircle className="text-red-500" size={24} />
              <p className="text-red-800 font-medium">Erro ao enviar. Tente novamente.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
