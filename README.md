# Fullstack Challenge 🏅 2022 - Space Flight News

Aplicação que armazena e exibe dados de artigos relacionados a voos espaciais;
Foi desenvolvido uma api que armazena e mantém sincronizado o banco de dados com a API https://api.spaceflightnewsapi.net/v3/;
Foi desenvolvido o frontend que consome esses dados da API;


## API
Os dados são disponibilizados na API  (https://api.spaceflightnewsapi.net/v3/).

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção deste projeto:

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Vuejs](https://vuejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)

## Pré-requisito

### Para executar o aplicativo, você precisará de;

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)

## Executando com Docker e Docker-compose;
### Frontend
Executar este comando:
```bash
docker-compose up
```
  
### Backend
*Seguintes passos
- 1 Criar arquivo .env a partir do .env.exemplo.
- 2 Definir as variáveis de email SMTP para o envio de alertas.
- 3 Definir a variável de conexão com o mongoDB.
```bash
docker-compose up
```

### Script de armazenamento de dados
- Na raiz do backend execute:
```bash
npm run loadDB
```

### Apresentação

link da apresentação, [link]().



This is a challenge by [Coodesh](https://coodesh.com/)


