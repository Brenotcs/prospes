# 🆓 GUIA RÁPIDO - INTEGRAÇÃO GRATUITA COM REEV

## ⭐ RECOMENDAÇÃO: Use Supabase (Você já tem!)

A forma **MAIS SIMPLES E GRATUITA** é salvar no Supabase e depois importar para o Reev.

---

## OPÇÃO 1: Supabase Database (Recomendado - 0 configuração extra)

### ✅ Vantagens:
- Você já tem Supabase configurado
- 100% gratuito
- Sem limites
- Dados seguros
- Pode exportar para Excel e importar no Reev

### 📋 Passo a passo:

**1. Criar tabela no Supabase:**
- Acesse: https://supabase.com/dashboard/project/SEU_PROJETO
- Vá em **SQL Editor**
- Cole o código do arquivo `supabase-leads-table.sql`
- Clique em **Run**

**2. Atualizar o componente de contato:**
```typescript
// Em Contato.tsx, troque a importação:
import { saveLeadToSupabase } from '../services/supabase-leads';

// E no handleSubmit:
const response = await saveLeadToSupabase({
  name: nomeCompleto,
  email: form.email,
  phone: form.whatsapp,
  company: form.empresa,
  cidade: form.cidade,
  uf: form.uf,
  perfil_profissional: perfilFinal,
  principais_servicos: form.principaisServicos,
});
```

**3. Ver os leads:**
- No Supabase Dashboard: **Table Editor** > **leads**
- Exporte para CSV e importe no Reev

**4. (Opcional) Integração automática:**
- Configure um webhook no Supabase Database Webhooks
- Envie para Make.com quando novo lead for criado

---

## OPÇÃO 2: Make.com (100% Grátis - 1000 operações/mês)

**Passo 1:** Acesse https://www.make.com/en/register

**Passo 2:** Crie conta gratuita

**Passo 3:** Crie cenário:
1. Webhook (trigger)
2. Reev/HTTP Request (ação)

**Passo 4:** Configure:
```env
VITE_WEBHOOK_URL=https://hook.us1.make.com/abc123
```

**Custo:** R$ 0,00 (até 1000 leads/mês)

---

## OPÇÃO 3: n8n Self-Hosted (Grátis e ilimitado)

**Passo 1:** Instale n8n:
```bash
npx n8n
```

**Passo 2:** Acesse http://localhost:5678

**Passo 3:** Crie workflow com Webhook + HTTP Request

**Passo 4:** Para produção, use ngrok:
```bash
npx ngrok http 5678
```

**Custo:** R$ 0,00 (ilimitado, mas precisa manter rodando)

---

## COMPARAÇÃO

| Opção | Custo | Limite | Configuração | Recomendado |
|-------|-------|--------|--------------|-------------|
| **Supabase DB** | R$ 0 | Ilimitado | ⭐ Fácil | ✅ SIM |
| **Make.com** | R$ 0 | 1000/mês | ⭐⭐ Médio | ✅ SIM |
| **n8n** | R$ 0 | Ilimitado | ⭐⭐⭐ Difícil | Para devs |
| **Zapier** | R$ 109/mês | Ilimitado | ⭐ Fácil | ❌ Pago |

---

## MINHA RECOMENDAÇÃO

**Para começar HOJE (5 minutos):**
→ Use **Supabase Database** (Opção 1)

**Para automação completa:**
→ Use **Make.com** (Opção 2)

**Para controle total:**
→ Use **n8n** (Opção 3)

---

## Como exportar do Supabase para o Reev

1. **No Supabase:**
   - Table Editor > leads
   - Clique nos 3 pontinhos > Export to CSV

2. **No Reev:**
   - Funis > Seu Funil
   - Importar > Upload CSV
   - Mapeie as colunas
   - Pronto! 🎉

---

## Precisa de ajuda?

Escolha uma opção e eu te ajudo a configurar!
