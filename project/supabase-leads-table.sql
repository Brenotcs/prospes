-- Crie esta tabela no Supabase Dashboard
-- SQL Editor > New Query > Cole este código > Run

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

-- Índice para buscar por email
create index if not exists leads_email_idx on leads(email);

-- Índice para ordenar por data
create index if not exists leads_created_at_idx on leads(created_at desc);

-- Comentários nas colunas
comment on table leads is 'Leads capturados pelo formulário de contato';
comment on column leads.name is 'Nome completo do lead';
comment on column leads.email is 'Email de contato';
comment on column leads.phone is 'WhatsApp/Telefone';
comment on column leads.company is 'Empresa ou Instagram';
comment on column leads.cidade is 'Cidade';
comment on column leads.uf is 'Estado (UF)';
comment on column leads.perfil_profissional is 'Perfil profissional (podóloga, manicure, etc)';
comment on column leads.principais_servicos is 'Descrição dos principais serviços';
