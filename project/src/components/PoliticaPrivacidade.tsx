import React from "react";
import Logo from "../assets/logo.png";

const PoliticaPrivacidade: React.FC = () => (
  <div className="min-h-screen bg-white">
    <header className="w-full border-b border-gray-200 bg-white py-6 mb-10">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 text-center sm:text-left">
        <img src={Logo} alt="Logo Prospés" className="h-12 w-auto mb-2 sm:mb-0" />
        <span
          className="text-xl sm:text-2xl text-gray-800"
          style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', fontWeight: 400 }}
        >
          Política de Privacidade
        </span>
      </div>
    </header>
    <div className="max-w-3xl mx-auto px-4 py-4 text-gray-800">
      <h1 className="text-xl font-bold mb-6">POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS (LGPD) – LCA LABORATÓRIO & PROSPÉS</h1>
    <p className="mb-4">Esta Política de Privacidade descreve como a LCA - LABORATÓRIO DE COSMETOLOGIA APLICADA LTDA (Controladora), em parceria comercial estratégica com a PROSPÉS COSMÉTICOS E ARTIGOS PROFISSIONAIS LTDA (Operadora e parceira comercial), coleta, usa e protege suas informações pessoais.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">1. OBJETIVO DA COLETA</h2>
    <p className="mb-4">Este formulário tem como objetivo identificar profissionais da área de podologia interessados nos produtos Decreina para fins de contato comercial, ofertas exclusivas e atendimento especializado realizado pela equipe da Prospés.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">2. DADOS COLETADOS</h2>
    <p className="mb-2">Para viabilizar o atendimento, coletamos através deste formulário as seguintes informações, conforme visualizado por você no momento do preenchimento:</p>
    <ul className="list-disc pl-6 mb-2">
      <li>Identificação Pessoal: Nome, Sobrenome e Cidade;</li>
      <li>Contato: Número de telefone e Endereço de e-mail;</li>
      <li>Dados Profissionais: Informação sobre atuação na área (Se é podólogo, estudante ou não atua) e Nome da empresa ou Instagram profissional.</li>
    </ul>
    <p className="mb-4">Não são coletados dados pessoais sensíveis, nos termos do art. 5º, II, da LGPD.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">3. COMPARTILHAMENTO E USO DOS DADOS</h2>
    <p className="mb-2">Ao enviar este formulário, o titular consente expressamente que:</p>
    <ul className="list-disc pl-6 mb-2">
      <li>Os dados são captados através da página oficial da Decreina;</li>
      <li>Esses dados são compartilhados automaticamente com a Prospés, nossa parceira e distribuidora oficial;</li>
      <li>A equipe comercial da Prospés entrará em contato via WhatsApp, telefone ou e-mail para apresentar soluções adequadas ao seu perfil profissional.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">4. ARMAZENAMENTO E SEGURANÇA</h2>
    <p className="mb-4">Seus dados serão mantidos em ambiente seguro e utilizados estritamente para a finalidade comercial descrita acima, sendo armazenados apenas pelo tempo necessário ao cumprimento das finalidades informadas, ou até solicitação de exclusão pelo titular.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">5. SEUS DIREITOS (LGPD)</h2>
    <p className="mb-4">Você pode, a qualquer momento, solicitar a confirmação, correção ou exclusão dos seus dados da nossa base de contatos. Incluindo acesso aos dados, correção, exclusão, revogação do consentimento e informações sobre o tratamento realizado.</p>
    <p className="mb-4">Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato diretamente com nossa equipe de gestão de dados através do e-mail:</p>
    <p className="font-semibold text-center sm:text-left mt-6">
      <a
        href="mailto:faleconosco@prospes.com.br"
        className="text-teal-600 hover:underline break-all"
      >
        faleconosco@prospes.com.br
      </a>
    </p>
    </div>
    <footer className="w-full border-t border-gray-200 bg-white py-6 mt-12">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-4 text-center sm:text-left">
        <img src={Logo} alt="Logo Prospés" className="h-10 w-auto mb-1 sm:mb-0" />
        <div className="w-full sm:w-auto flex justify-center">
          <a
            href="https://prospes.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm sm:text-xs font-semibold hover:underline block mb-1 sm:mb-0"
          >
            Visite nosso site principal
          </a>
        </div>
        <span className="text-gray-400 text-xs mt-2 sm:mt-0">&copy; {new Date().getFullYear()} Prospés</span>
      </div>
    </footer>
  </div>
);

export default PoliticaPrivacidade;
