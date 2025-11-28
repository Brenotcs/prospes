# Integração com Reev via Webhook - Guia de Configuração

## Por que webhook?

O Reev não possui uma API pública para envio direto de leads. A forma recomendada é usar:
1. **Zapier/Make/n8n** - Cria um webhook que recebe os dados e envia ao Reev
2. **Formulário embed do Reev** - Usa o formulário nativo
3. **Backend próprio** - Cria um servidor que usa a integração oficial

## Arquivos criados/modificados

1. **`src/services/reev.ts`** - Serviço de webhook genérico
2. **`src/components/Contato.tsx`** - Envia dados via webhook
3. **`.env`** - Variáveis de ambiente
4. **`.env.example`** - Template de configuração

---

## OPÇÃO 1: Integração via Zapier (Recomendado)

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

## OPÇÃO 2: Integração via Make (anteriormente Integromat)

### Passo 1: Criar Cenário no Make

1. Acesse https://www.make.com
2. Crie um novo cenário
3. Adicione um módulo **"Webhook"** como trigger
4. Copie a URL do webhook
5. Adicione módulo **"Reev"** para criar lead
6. Mapeie os campos recebidos para o Reev
7. Ative o cenário

### Passo 2: Configurar

```env
VITE_WEBHOOK_URL=https://hook.us1.make.com/abc123def456
```

---

## OPÇÃO 3: Integração via n8n (Self-hosted)

### Passo 1: Criar Workflow no n8n

1. Instale n8n: `npx n8n`
2. Crie workflow com:
   - **Webhook Node** (recebe dados)
   - **HTTP Request Node** ou **Reev Node** (envia ao Reev)
3. Configure e ative

### Passo 2: Configurar

```env
VITE_WEBHOOK_URL=http://localhost:5678/webhook/seu-webhook-id
```

---

## OPÇÃO 4: Backend próprio (Node.js/Express)

Se preferir criar seu próprio backend:

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