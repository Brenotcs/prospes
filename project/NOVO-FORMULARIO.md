# 🔄 NOVA ESTRUTURA DO FORMULÁRIO - 2 ETAPAS

## ✅ O QUE FOI FEITO:

### 1. Novo Componente de Formulário
- **Arquivo:** `src/components/ContatoNovo.tsx`
- **Funcionalidades:**
  - Formulário em 2 etapas com validação
  - Bloqueio automático para consumidores finais
  - Aviso para estudantes
  - Campos otimizados e organizados
  - Validações em cada etapa

### 2. Nova Estrutura de Dados
- **Arquivo:** `supabase-leads-nova-estrutura.sql`
- **Campos:**
  - `name` (nome completo)
  - `email`
  - `phone` (WhatsApp)
  - `company` (empresa ou Instagram)
  - `cidade` (opcional)
  - `uf` (opcional)
  - `tipo_usuario` (profissional ou estudante)
  - `perfil_profissional` (sempre "Profissional")

---

## 📋 COMO IMPLEMENTAR:

### PASSO 1: Atualizar tabela no Supabase

1. Acesse: https://supabase.com/dashboard/project/kwanxaenszoztcsggvuk/sql
2. Clique em **"New Query"**
3. Cole TODO o conteúdo do arquivo: **`supabase-leads-nova-estrutura.sql`**
4. Clique em **"Run"** (F5)
5. Confirme que apareceu "Success"

### PASSO 2: Testar o formulário

1. Reinicie o servidor:
```bash
npm run dev
```

2. Acesse o site e vá no formulário de contato

3. **Teste os 3 cenários:**

   **A) Profissional (fluxo normal):**
   - Selecione "Sim, sou profissional"
   - Preencha nome, sobrenome, WhatsApp
   - Clique em "Continuar"
   - Preencha email e empresa
   - Clique em "Finalizar cadastro"
   - ✅ Deve salvar no Supabase

   **B) Estudante (com aviso):**
   - Selecione "Sou estudante"
   - Deve aparecer aviso amarelo
   - Continue normalmente
   - ✅ Deve salvar no Supabase

   **C) Consumidor final (bloqueado):**
   - Selecione "Sou consumidor final"
   - Deve aparecer aviso vermelho
   - Botão "Continuar" não deve funcionar
   - ❌ Não deixa avançar

---

## 🗂️ ESTRUTURA DO FORMULÁRIO:

### ETAPA 1 - Validação de Acesso
**Título:** "Acesso exclusivo para profissionais"

**Campos:**
- [ ] Você é profissional da área? (radio - obrigatório)
  - Sim, sou profissional
  - Sou estudante (mostra aviso)
  - Sou consumidor final (bloqueia acesso)
- [ ] Nome * (obrigatório)
- [ ] Sobrenome * (obrigatório)
- [ ] WhatsApp * (obrigatório)

**Botão:** "Continuar"

---

### ETAPA 2 - Dados Essenciais
**Título:** "Complete seu cadastro"

**Campos:**
- [ ] Email * (obrigatório)
- [ ] Perfil profissional (bloqueado: "Profissional")
- [ ] Empresa ou Instagram profissional * (obrigatório)
- [ ] Cidade (opcional)
- [ ] UF (opcional)

**Botões:** 
- "Voltar" (retorna para etapa 1)
- "Finalizar cadastro" (envia para Supabase → Make → Reev)

---

## 🎨 MELHORIAS IMPLEMENTADAS:

✅ **UX/UI:**
- Indicador visual de progresso (etapa 1/2)
- Avisos com ícones e cores distintas
- Transições suaves entre etapas
- Feedback visual para cada ação

✅ **Validação:**
- Valida campos obrigatórios em cada etapa
- Bloqueia consumidores finais automaticamente
- Valida formato de email
- Mensagens de erro específicas

✅ **Segurança:**
- Não permite prosseguir sem preencher campos obrigatórios
- Validação no frontend e backend
- RLS habilitado no Supabase

---

## 📊 MAPEAMENTO DE CAMPOS:

| Campo Antigo | Campo Novo | Mudança |
|--------------|------------|---------|
| nome + sobrenome | name | Concatenados |
| email | email | Igual |
| whatsapp | phone | Igual |
| empresa | company | Igual |
| cidade | cidade | Igual |
| uf | uf | Igual |
| perfilProfissional | perfil_profissional | Fixo: "Profissional" |
| ~~perfilOutros~~ | ❌ Removido | - |
| ~~principaisServicos~~ | ❌ Removido | - |
| ➕ N/A | tipo_usuario | Novo campo |

---

## 🔄 INTEGRAÇÃO COM REEV:

O fluxo continua o mesmo:
1. ✅ Formulário salva no **Supabase**
2. ✅ Webhook do Supabase dispara
3. ✅ **Make.com** recebe os dados
4. ⚠️ Make envia para **Reev** (se configurado)

---

## 🐛 TROUBLESHOOTING:

**Erro ao salvar no Supabase:**
- Verifique se executou o SQL novo
- Confirme que o RLS está desabilitado temporariamente para testes
- Veja os logs no console (F12)

**Formulário não aparece:**
- Verifique se importou `ContatoNovo` no `App.tsx`
- Reinicie o servidor

**Campos não validam:**
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique o console por erros

---

## ✅ CHECKLIST FINAL:

- [ ] SQL executado no Supabase
- [ ] Tabela `leads` existe com nova estrutura
- [ ] Servidor reiniciado
- [ ] Teste com "profissional" funcionou
- [ ] Teste com "estudante" mostrou aviso
- [ ] Teste com "consumidor" bloqueou acesso
- [ ] Leads aparecem no Supabase
- [ ] Webhook do Supabase configurado (opcional)

---

**Tudo pronto! O formulário está modernizado e otimizado.** 🚀
