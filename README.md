# Serverless Template

Template disponibilizado para criação de novos services com novo escopo.

## Setup inicial

- Nodejs v12.X
- API GW
- Dynamo
- S3
- Elasticsearch
- Alarmes
- SecretManager
- Dynamo
- Cloudwatch

## Como usar

Clone o repositorio com nome customizado

`git clone git@github.com:thadeu/serverless-service-template-ts.git NOME-DO-SERVICE`

Instalar as dependencias

`npm install`

Trocar o nome do template e demais referentes a customização

Atualize o atributo `service` do arquivo `serverless.yml` Com nome do serviço a ser criado

Exclua a pasta de .git e mova para o repositorio dos projetos serverless caso não ainda não tenha feito

![Screen Shot 2020-12-03 at 18 12 49](https://user-images.githubusercontent.com/77889/101088977-3cb6a700-3593-11eb-8ab6-d63d42a0d18c.png)
