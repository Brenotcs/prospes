import { createClient } from '@supabase/supabase-js';

// Tipos para os testimonials
export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  location?: string;
  approved: boolean;
  created_at: string;
}

// Configuração do Supabase
// IMPORTANTE: Você precisa criar um arquivo .env na raiz do projeto com:
// VITE_SUPABASE_URL=sua_url_do_supabase
// VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Debug: verificar se as variáveis estão carregadas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ ERRO: Variáveis de ambiente do Supabase não configuradas!');
  console.log('VITE_SUPABASE_URL:', supabaseUrl);
  console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Definida' : 'Indefinida');
  throw new Error('Variáveis de ambiente do Supabase não configuradas. Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

