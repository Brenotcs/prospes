# Integração com Reev via Webhook - Guia de Configuração

## Por que webhook?

O Reev não possui uma API pública para envio direto de leads. A forma recomendada é usar:
1. **Make.com (GRÁTIS)** - 1.000 operações/mês no plano free
2. **n8n (GRÁTIS)** - Self-hosted, ilimitado
3. **Supabase Edge Functions (GRÁTIS)** - Serverless, ilimitado no plano free
4. **Formulário embed do Reev** - Usa o formulário nativo

## Arquivos criados/modificados

1. **`src/services/reev.ts`** - Serviço de webhook genérico
2. **`src/components/Contato.tsx`** - Envia dados via webhook
3. **`.env`** - Variáveis de ambiente
4. **`.env.example`** - Template de configuração

---

## ⭐ OPÇÃO 1: Make.com - 100% GRÁTIS (Recomendado)

### Passo 1: Criar Zap no Zapier

1. Acesse https://zapier.com e faça login
2. Clique em **"Create Zap"**
3. **Trigger (Gatilho):**
   - Busque por **"Webhooks by Zapier"**
   - Escolha **"Catch Hook"**
   - Copie a **URL do webhook** fornecida
4. **Action (Ação):**
   - Busque por **"Reev"**
   - Escolha **"Create Lead"** ou **"Add Contact to Funnel"**
   - Conecte sua conta do Reev
   - Mapeie os campos do webhook para os campos do Reev:
     - `name` → Nome
     - `email` → Email
     - `phone` → Telefone
     - `company` → Empresa
     - `cidade` → Cidade (campo personalizado)
     - `uf` → UF (campo personalizado)
     - `perfil_profissional` → Perfil (campo personalizado)
     - `principais_servicos` → Serviços (campo personalizado)
5. **Teste** o Zap e **Ative**

### Passo 2: Configurar no projeto

Edite o arquivo `.env`:
```env
VITE_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/123456/abcdef/
```

### Passo 3: Testar

```bash
npm run dev
```

Preencha o formulário e verifique se o lead aparece no Reev!

---

**Plano Free:** 1.000 operações/mês (suficiente para maioria dos sites!)

### Passo 1: Criar conta no Make

1. Acesse **https://www.make.com/en/register**
2. Crie uma conta gratuita (não precisa cartão de crédito)
3. Faça login

### Passo 2: Criar Cenário (Scenario)

1. Clique em **"Create a new scenario"**
2. **Adicione o Webhook:**
   - Clique no **+** para adicionar módulo
   - Busque por **"Webhooks"**
   - Selecione **"Custom webhook"**
   - Clique em **"Create a webhook"**
   - Dê um nome (ex: "Formulário Prospés")
   - Clique em **"Save"**
   - **COPIE A URL** que aparece (ex: `https://hook.us1.make.com/abc123def456`)
   - Clique em **"OK"**

3. **Adicione o Reev:**
   - Clique no **+** ao lado do webhook
   - Busque por **"HTTP"** (Make > HTTP > Make a request)
   - **OU** busque por **"Reev"** se estiver disponível
   - Configure:
     - **URL:** Endpoint da API do Reev para criar leads
     - **Method:** POST
     - **Headers:** `Content-Type: application/json`
     - **Body:** Mapeie os campos do webhook

4. **Mapeie os dados:**
   - Arraste os campos do webhook para o módulo do Reev:
     - `name` → Nome
     - `email` → Email
     - `phone` → Telefone
     - `company` → Empresa
     - `cidade` → Cidade
     - `uf` → UF
     - `perfil_profissional` → Perfil
     - `principais_servicos` → Serviços

5. **Salve e Ative:**
   - Clique em **"Save"** (canto inferior esquerdo)
   - Ative o cenário com o botão **"ON"**

### Passo 3: Configurar no projeto

```env
VITE_WEBHOOK_URL=https://hook.us1.make.com/abc123def456
```

---

## OPÇÃO 2: Supabase Edge Functions - 100% GRÁTIS

Você já tem Supabase configurado! Podemos criar uma função serverless gratuita.

### Passo 1: Criar Edge Function

No terminal do projeto:

```bash
cd project
npx supabase functions new send-to-reev
```

### Passo 2: Implementar a função

Crie o arquivo `supabase/functions/send-to-reev/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const data = await req.json()
    
    // Aqui você pode:
    // 1. Enviar email com os dados
    // 2. Salvar no Supabase Database
    // 3. Integrar com Reev via API interna
    // 4. Usar serviço de email (SendGrid, Resend, etc)
    
    console.log('Lead recebido:', data)
    
    // Exemplo: Salvar no Supabase
    const { data: savedData, error } = await supabase
      .from('leads')
      .insert([data])
    
    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
```

### Passo 3: Deploy

```bash
npx supabase functions deploy send-to-reev
```

### Passo 4: Configurar

```env
VITE_WEBHOOK_URL=https://SEU_PROJETO.supabase.co/functions/v1/send-to-reev
```

---

## OPÇÃO 3: n8n Self-Hosted - 100% GRÁTIS E ILIMITADO

---

Totalmente gratuito e sem limites! Roda na sua máquina.

### Passo 1: Instalar n8n

```bash
npx n8n
```

Acesse: http://localhost:5678

### Passo 2: Criar Workflow

1. Crie novo workflow
2. Adicione **"Webhook"** node
   - Configure como trigger
   - Copie a URL gerada
3. Adicione **"HTTP Request"** node
   - URL da API do Reev
   - Método POST
   - Mapeie os campos
4. Ative o workflow

### Passo 3: Expor para internet (para produção)

Use ngrok ou cloudflare tunnel:
```bash
npx ngrok http 5678
```

### Passo 4: Configurar

```env
VITE_WEBHOOK_URL=http://localhost:5678/webhook/seu-webhook-id
# OU para produção:
VITE_WEBHOOK_URL=https://seu-dominio.ngrok.io/webhook/seu-webhook-id
```

---

---

## OPÇÃO 4: Salvar no Supabase Database (Mais Simples)

Como você já tem Supabase, pode simplesmente salvar os leads no banco e depois exportar/integrar manualmente:

### Passo 1: Criar tabela no Supabase

No Supabase Dashboard, crie uma tabela `leads`:

```sql
create table leads (
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
```

### Passo 2: Atualizar o serviço

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const leadData = req.body;
  
  // Aqui você implementa a lógica para enviar ao Reev
  // Pode usar email, webhook do Reev, ou outra integração
  
  console.log('Lead recebido:', leadData);
  
  // Exemplo: enviar email
  // await sendEmailToReev(leadData);
  
  res.json({ success: true });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
```

Configure:
```env
VITE_WEBHOOK_URL=http://localhost:3001/api/contact
```

---

## OPÇÃO 5: Usar formulário embed do Reev

Se preferir usar o formulário nativo do Reev:

1. Acesse **Reev** > **Funis** > **Formulários**
2. Crie ou edite um formulário
3. Copie o código de embed
4. Cole no componente `Contato.tsx` substituindo o formulário atual

---

## Dados enviados

O webhook recebe os seguintes dados:

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "(11) 99999-9999",
  "company": "Empresa LTDA",
  "cidade": "São Paulo",
  "uf": "SP",
  "perfil_profissional": "Sou podóloga",
  "principais_servicos": "Tratamento de unhas encravadas...",
  "timestamp": "2025-11-28T10:30:00.000Z",
  "source": "website_contact_form"
}
```

---

## Testando localmente

Para testar webhooks localmente, use:

### ngrok (expõe localhost para internet)
```bash
npx ngrok http 3001
```

Use a URL gerada no `.env`:
```env
VITE_WEBHOOK_URL=https://abc123.ngrok.io/api/contact
```

---

## Troubleshooting

### Erro: "URL do webhook não configurada"
- Verifique se `VITE_WEBHOOK_URL` está definida no `.env`
- Reinicie o servidor após modificar o `.env`

### Webhook não recebe dados
- Teste a URL do webhook com ferramentas como Postman
- Verifique os logs do Zapier/Make/n8n
- Confirme que o webhook está ativo

### Dados não aparecem no Reev
- Verifique o mapeamento de campos no Zapier/Make
- Confirme que a conexão com o Reev está ativa
- Verifique os logs de erro na automação

---

## Recomendação final

Para produção, recomendo:
1. **Zapier** (mais simples, plano gratuito tem limite)
2. **Make** (mais flexível, interface visual)
3. **Backend próprio** (controle total, sem limites)

Qualquer dúvida, consulte:
- Zapier: https://zapier.com/apps/reev/integrations
- Make: https://www.make.com/en/integrations/reev
- Reev: https://suporte.reev.co