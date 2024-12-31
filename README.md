# JET-X Extension

Este repositório contém um sistema composto por uma extensão para navegador (pasta `extension`) e um backend (pasta `backend`). Este guia explica como configurar e executar o sistema localmente.

---

## Requisitos

Certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- Um navegador compatível para carregar a extensão (Google Chrome ou Microsoft Edge)

---

## Configuração Local

Siga os passos abaixo para configurar o sistema:

### 1. Clonar o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/JoelRodrigues-dev/Jet-x.git
cd Jet-x
2. Configurar o Backend
Acesse a pasta do backend:

bash
Copiar código
cd backend
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env na raiz da pasta backend com as seguintes variáveis de ambiente:

env
Copiar código
CHATBASE_API_URL=Sua chave Api
CHATBASE_TOKEN=Seu chatbase token
CHATBOT_ID=chatbotid
PORT=3000
Nota: Substitua SUA_CHAVE_API e outros valores conforme necessário.

Inicie o servidor:

no terminal:
npm run dev
O servidor estará rodando em http://localhost:3000.

3. Configurar a Extensão
Volte para a raiz do projeto:

no terminal:
cd ..

Acesse a pasta da extensão:


no terminal:
cd extension

No navegador, carregue a extensão:

Abra o menu de extensões do navegador (em Chrome ou Edge, acesse chrome://extensions/).
Ative o modo Desenvolvedor.
Clique em Carregar sem compactação (ou "Load unpacked").
Selecione a pasta extension deste repositório.
A extensão agora estará carregada no navegador.

Uso
Abra a extensão no navegador clicando no ícone correspondente.
Interaja com o sistema. Certifique-se de que o backend esteja rodando para que todas as funcionalidades funcionem corretamente.
Problemas Comuns
Erro de conexão com o backend: Verifique se o servidor está rodando e se a URL configurada na extensão aponta para http://localhost:3000.
Variáveis de ambiente ausentes: Certifique-se de que o arquivo .env está corretamente configurado na pasta backend.
