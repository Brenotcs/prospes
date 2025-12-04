/**
 * Serviço para salvar leads diretamente no Supabase
 * Opção gratuita e sem necessidade de webhook externo
 */

import { supabase } from '../lib/supabase';

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

export interface SaveResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Salva lead diretamente no Supabase
 * Não precisa de webhook externo - 100% gratuito!
 */
export async function saveLeadToSupabase(data: LeadData): Promise<SaveResponse> {
  try {
    const { data: savedData, error } = await supabase
      .from('leads') 
      .insert([{
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        cidade: data.cidade,
        uf: data.uf,
        perfil_profissional: data.perfil_profissional,
        principais_servicos: data.principais_servicos,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('Erro ao salvar no Supabase:', error);
      return {
        success: false,
        error: error.message,
        message: 'Erro ao salvar dados',
      };
    }

    return {
      success: true,
      message: 'Lead salvo com sucesso!',
    };
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      message: 'Erro ao processar dados',
    };
  }
}
