-- ============================================
-- COLE ESTE CÓDIGO NO SUPABASE SQL EDITOR
-- ============================================

-- 1. Criar tabela
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  company text,
  cidade text,
  uf text,
  perfil_profissional text,
  principais_servicos text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Criar índices
create index if not exists leads_email_idx on leads(email);
create index if not exists leads_created_at_idx on leads(created_at desc);

-- 3. HABILITAR ROW LEVEL SECURITY (RLS)
alter table leads enable row level security;

-- 4. PERMITIR INSERÇÃO PÚBLICA (qualquer pessoa pode inserir leads)
create policy "Permitir inserção pública de leads"
  on leads
  for insert
  to anon, authenticated
  with check (true);

-- 5. PERMITIR LEITURA APENAS PARA USUÁRIOS AUTENTICADOS
create policy "Apenas autenticados podem ler leads"
  on leads
  for select
  to authenticated
  using (true);

-- 6. Comentários nas colunas
comment on table leads is 'Leads capturados pelo formulário de contato';
comment on column leads.name is 'Nome completo do lead';
comment on column leads.email is 'Email de contato';
comment on column leads.phone is 'WhatsApp/Telefone';
comment on column leads.company is 'Empresa ou Instagram';
comment on column leads.cidade is 'Cidade';
comment on column leads.uf is 'Estado (UF)';
comment on column leads.perfil_profissional is 'Perfil profissional (podóloga, manicure, etc)';
comment on column leads.principais_servicos is 'Descrição dos principais serviços';
