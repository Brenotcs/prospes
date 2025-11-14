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

// Se as variáveis de ambiente não estiverem configuradas, cria um cliente mock
// que não fará requisições reais (útil para desenvolvimento)
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key');

