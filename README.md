# Gerador de Documentos REURB (POC)

Prova de Conceito para geração de documentos REURB (Regularização Fundiária Urbana) em formato DOCX a partir de um formulário HTML usando templates EJS.

## Visão Geral

Este projeto demonstra uma aplicação web simples que:
1. Apresenta um formulário para dados de declaração REURB
2. Processa o envio do formulário
3. Gera um documento DOCX formatado usando templates EJS
4. Permite aos usuários fazer o download do documento gerado

## Recursos

- Interface de formulário limpa e responsiva
- Templates EJS no lado do servidor
- Conversão direta de HTML para DOCX
- Nenhum template DOCX externo necessário
- Campos de dados específicos para REURB

## Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Biblioteca html-to-docx
- JavaScript/CSS Vanilla

## Pré-requisitos

- Node.js (v12 ou superior)
- npm (normalmente vem com o Node.js)

## Instalação

1. Clone o repositório:
   \`\`\`bash
   git clone <url-do-repositorio>
   cd reurb-ejs-html-docx
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

## Uso

1. Inicie a aplicação:
   \`\`\`bash
   npm start
   \`\`\`

2. Abra seu navegador e acesse:
   \`\`\`
   http://localhost:3000
   \`\`\`

3. Preencha o formulário REURB com as informações necessárias

4. Clique em "Gerar Declaração em DOCX" para gerar e baixar o documento

## Estrutura do Projeto

\`\`\`
.
├── app.js                 # Arquivo principal da aplicação
├── package.json           # Dependências e scripts do projeto
├── README.md              # Este arquivo
├── .gitignore             # Regras para ignorar arquivos no Git
├── public/
│   └── style.css          # Estilização do formulário
└── views/
    ├── form.ejs           # Template do formulário principal
    └── document.ejs       # Template para geração do documento
\`\`\`

## Como Funciona

1. **Renderização do Formulário**: A página principal renderiza `views/form.ejs` que apresenta o formulário de entrada de dados
2. **Envio do Formulário**: Quando o formulário é enviado, os dados são enviados para o endpoint `/generate-docx`
3. **Processamento do Template**: O servidor usa EJS para renderizar `views/document.ejs` com os dados do formulário
4. **Conversão para DOCX**: O HTML renderizado é convertido para formato DOCX usando a biblioteca `html-to-docx`
5. **Entrega do Arquivo**: O arquivo DOCX gerado é enviado ao usuário para download

## Personalização

Para modificar os campos do formulário ou o template do documento:
1. Edite `views/form.ejs` para alterar o formulário
2. Atualize `views/document.ejs` para alterar o formato do documento de saída
3. Modifique `app.js` se você adicionar novos campos de formulário que precisem de processamento

## Limitações (POC)

- Nenhuma validação de dados além da validação de formulário HTML5
- Nenhum armazenamento em banco de dados (os dados são processados e descartados)
- Estilização simples sem frameworks CSS
- Tratamento básico de erros

## Possíveis Melhorias

- Adicionar validação de dados no lado do servidor
- Implementar armazenamento em banco de dados para documentos gerados
- Adicionar capacidade de geração de PDF
- Melhorar a acessibilidade do formulário
- Adicionar suporte a múltiplos idiomas
- Implementar autenticação de usuário

## Licença

Este é um projeto de prova de conceito para fins educacionais. Sinta-se à vontade para usar e modificar conforme necessário.