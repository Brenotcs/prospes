/**
 * Serviço de integração com CRM via Webhook
 * 
 * OPÇÕES DE INTEGRAÇÃO COM REEV:
 * 
 * 1. WEBHOOK DIRETO (Zapier/Make/n8n):
 *    - Configure um webhook no Zapier/Make
 *    - Use a URL do webhook na variável VITE_WEBHOOK_URL
 *    - Configure a automação para enviar ao Reev
 * 
 * 2. FORMULÁRIO EMBED DO REEV:
 *    - Acesse Reev > Funis > Formulários
 *    - Copie o código de embed do formulário
 *    - Cole no componente React
 * 
 * 3. BACKEND PRÓPRIO:
 *    - Crie um endpoint no seu backend
 *    - Use a integração nativa do Reev no backend
 */

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  cidade?: string;
  uf?: string;
  perfil_profissional?: string;
  principais_servicos?: string;
}

export interface WebhookResponse {
  success: boolean;
  message?: string;
}

/**
 * Envia dados via webhook (pode ser conectado ao Reev via Zapier/Make/n8n)
 * @param data Dados do lead a serem enviados
 * @returns Resposta do webhook
 */
export async function sendLeadViaWebhook(data: LeadData): Promise<WebhookResponse> {
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('VITE_WEBHOOK_URL não configurada');
    throw new Error('URL do webhook não configurada');
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'website_contact_form',
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro no webhook: ${response.status}`);
    }

    return {
      success: true,
      message: 'Dados enviados com sucesso',
    };
  } catch (error) {
    console.error('Erro ao enviar dados via webhook:', error);
    throw error;
  }
}

/**
 * Envia email via serviço de email (alternativa quando webhook não está disponível)
 */
export async function sendLeadViaEmail(data: LeadData): Promise<WebhookResponse> {
  const emailServiceUrl = import.meta.env.VITE_EMAIL_SERVICE_URL;

  if (!emailServiceUrl) {
    console.error('VITE_EMAIL_SERVICE_URL não configurada');
    throw new Error('Serviço de email não configurado');
  }

  try {
    const response = await fetch(emailServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: import.meta.env.VITE_CONTACT_EMAIL || 'contato@example.com',
        subject: 'Novo contato do site',
        data,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar email: ${response.status}`);
    }

    return {
      success: true,
      message: 'Email enviado com sucesso',
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
}
