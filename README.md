# Sistema de Escola de Idiomas

Este é um sistema completo de gerenciamento de uma escola de idiomas, desenvolvido utilizando Angular para o frontend e Node.js com GraphQL para o backend. Ele permite cadastrar, listar, editar e excluir alunos, além de calcular automaticamente a média e o status (Aprovado/Reprovado) dos alunos com base nas notas fornecidas.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Instalando Dependências](#instalando-dependências)
- [Rodando o Backend](#rodando-o-backend)
  - [Configurando Variáveis de Ambiente](#configurando-variáveis-de-ambiente)
  - [Iniciando o Backend](#iniciando-o-backend)
- [Rodando o Frontend](#rodando-o-frontend)
  - [Configurando o Frontend](#configurando-o-frontend)
  - [Iniciando o Frontend](#iniciando-o-frontend)
- [Configurando o MongoDB com Docker](#configurando-o-mongodb-com-docker)
  - [Criando um Container MongoDB](#criando-um-container-mongodb)
  - [Verificando o MongoDB](#verificando-o-mongodb)
- [Considerações Finais](#considerações-finais)

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:

- **Node.js** (versão 14 ou superior)
- **npm** ou **Yarn**
- **Angular CLI**
- **Docker**
- **Docker Compose**

## Configuração do Ambiente

### Clonando o Repositório

Clone o repositório do projeto em seu ambiente local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


Instalando Dependências
Instale as dependências do backend e do frontend:

Instale as dependências do backend:

bash
Copiar código
cd backend
npm install
Instale as dependências do frontend:

bash
Copiar código
cd ../frontend
npm install
Rodando o Backend
Configurando Variáveis de Ambiente
Crie um arquivo .env na raiz do diretório backend e adicione as seguintes variáveis:

env
Copiar código
DATABASE_URI=mongodb://localhost:27017/escola_idiomas
PORT=4000
Iniciando o Backend
Para iniciar o servidor backend, execute o seguinte comando no diretório backend:

bash
Copiar código
npm start
O backend será iniciado em http://localhost:4000.

Rodando o Frontend
Configurando o Frontend
Se necessário, ajuste o arquivo de configuração do Angular (environment.ts) no diretório frontend/src/environments/ para apontar para a URL correta do backend.

Iniciando o Frontend
Para iniciar o servidor de desenvolvimento do frontend, execute o seguinte comando no diretório frontend:

bash
Copiar código
ng serve
O frontend será iniciado em http://localhost:4200.

Configurando o MongoDB com Docker
Criando um Container MongoDB
Para configurar o MongoDB utilizando Docker, execute o seguinte comando para criar e iniciar um container:

bash
Copiar código
docker run -d -p 27017:27017 --name mongodb-escola -v ~/data:/data/db mongo
Isso cria um container chamado mongodb-escola que estará disponível em mongodb://localhost:27017.

Verificando o MongoDB
Para verificar se o MongoDB está rodando corretamente, utilize o seguinte comando:

bash
Copiar código
docker ps
Você deve ver o container mongodb-escola em execução. Caso queira acessar o MongoDB dentro do container, use:

bash
Copiar código
docker exec -it mongodb-escola mongo
Considerações Finais
Agora que você configurou o ambiente, é possível começar a desenvolver e testar o sistema. O frontend se comunica com o backend através da API GraphQL, e todos os dados são persistidos no MongoDB configurado no Docker. Certifique-se de que o backend e o MongoDB estejam rodando antes de iniciar o frontend para evitar problemas de comunicação.

Se tiver dúvidas ou problemas, consulte a documentação oficial das tecnologias utilizadas ou entre em contato com o mantenedor do projeto.

perl
Copiar código

Este arquivo `README.md` fornece instruções claras e detalhadas para rodar o backend, o frontend e conf
