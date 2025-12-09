-- ============================================
-- NOVA ESTRUTURA DA TABELA LEADS
-- ============================================

-- 1. Deletar tabela antiga
drop table if exists leads cascade;

-- 2. Criar nova tabela com campos atualizados
create table leads (
  id uuid default gen_random_uuid() primary key,
  nome text not null,
  sobrenome text not null,
  email text not null,
  phone text not null,
  company text not null,
  cidade text,
  uf text,
  tipo_usuario text not null check (tipo_usuario in ('profissional', 'estudante')),
  perfil_profissional text default 'Profissional',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Criar índices
create index leads_email_idx on leads(email);
create index leads_created_at_idx on leads(created_at desc);
create index leads_tipo_usuario_idx on leads(tipo_usuario);

-- 4. HABILITAR ROW LEVEL SECURITY (RLS)
alter table leads enable row level security;

-- 5. PERMITIR INSERÇÃO PÚBLICA (qualquer pessoa pode inserir leads)
create policy "Permitir inserção pública de leads"
  on leads
  for insert
  to anon, authenticated
  with check (true);

-- 6. PERMITIR LEITURA APENAS PARA USUÁRIOS AUTENTICADOS
create policy "Apenas autenticados podem ler leads"
  on leads
  for select
  to authenticated
  using (true);

-- 7. Comentários nas colunas
comment on table leads is 'Leads capturados pelo formulário de contato (nova estrutura 2 etapas)';
comment on column leads.nome is 'Nome do lead';
comment on column leads.sobrenome is 'Sobrenome do lead';
comment on column leads.email is 'Email de contato';
comment on column leads.phone is 'WhatsApp/Telefone';
comment on column leads.company is 'Empresa ou Instagram profissional (ex: Clínica ou @instagram)';
comment on column leads.cidade is 'Cidade (opcional)';
comment on column leads.uf is 'Estado/UF (opcional)';
comment on column leads.tipo_usuario is 'Tipo de usuário: profissional ou estudante';
comment on column leads.perfil_profissional is 'Perfil profissional (sempre "Profissional")';
comment on column leads.created_at is 'Data e hora do cadastro';
