
# Backend de EmpreendHer
A plataforma de empreededorismo EmpreendHer  tem o objetivo de estimular o empreendedorismo feminino através da divulgação de serviços e vagas na área de tecnologia. Foi idealizado no HackingRio 2024, Hackathon exclusivo para mulheres.

O repositório completo com frontend e prototipação pode ser acessado [aqui](https://github.com/hackingrio/hacking-her2024-41)

Site Map: Site Map: [![site map](https://images2.imgbox.com/b3/ca/fU9d3xip_o.png)](https://imgbox.com/fU9d3xip)



## Node.js, Express, TypeORM, MySQL e Injeção de Dependência

Este projeto implementa o backend para EmpreendHer utilizando Node.js para o ambiente de execução, Express como framework web, TypeORM para mapeamento objeto-relacional com MySQL como banco de dados e injeção de dependência para gerenciar componentes e serviços.

### Estrutura de Pastas

- **config**: Contém configurações do projeto, incluindo definições de ambiente.
- **di**: Implementação do container de injeção de dependência e tokens para centralizar a resolução de dependências.
- **domain**: Núcleo da aplicação onde são definidas entidades, interfaces, repositórios e serviços.
  - **entities**: Entidades de domínio, como Service, Job, Content e Promotion.
  - **interfaces**: Interfaces utilizadas para definições contratuais entre diferentes partes da aplicação.
  - **repositories**: Definições de repositórios que encapsulam operações de persistência.
  - **services**: Lógica de negócio da aplicação, incluindo serviços para manipulação de dados.

- **infrastructure**: Implementações específicas para infraestrutura, como conexões com banco de dados e migrações.
  - **database/mysql/migrations**: Migrações do TypeORM para controle de versão do banco de dados.

- **presentation**: Camada de apresentação da aplicação, incluindo controladores, tratamento de erros e definição de rotas.
  - **controllers**: Controladores que recebem requisições HTTP, interagem com serviços e retornam respostas.
  - **errors**: Tratamento centralizado de erros para padronização de respostas de erro.
  - **routes**: Definição de rotas da aplicação utilizando Express.

### Como Iniciar a Aplicação

1. Clone este repositório e navegue até o diretório raiz.
2. Execute `npm install` para instalar todas as dependências necessárias.
3. Faça uma cópia do arquivo `.env.example` como `.env` e configure as variáveis de ambiente conforme necessário.

### Banco de Dados

- Instale MySQL (utilizado Xampp 8.2) e crie um banco de dados chamado `empreendher`.

### Criar e Rodar as Migrações

Para aplicar as migrações ao banco de dados:

```
npm run migrate
```

- Para criar novas migrations 
```
npm run typeorm migration:create -n src/infrastructure/database/mysql/migrations/  
```

### Testando a API

Você pode testar a API utilizando ferramentas como Insomnia ou Postman.


#### Rota de Criação de Local - POST

- **Endpoint**: `/location/post`

**Exemplo de JSON**:

```json
{
  "name": "Remoto",
}
```

##### Rota de Listagem de Local - GET

- **Endpoint**: `/location/list`


</br>

#### Rota de Criação de Métodos de Pagamento - POST

- **Endpoint**: `/payment-methods/post`

**Exemplo de JSON**:

```json
{
  "name": "Pix",
  "description": "pagamento via app do banco"
}
```
##### Rota de Listagem de Métodos de Pagamento - GET

- **Endpoint**: `/payment-methods/list`

</br>

#### Rota de Criação de Tipos de Serviço - POST

- **Endpoint**: `/service-type/post`

**Exemplo de JSON**:

```json
{
  "name": "Desenvolvimento Web",
  "description": "Serviços que envolvem a criação, manutenção e otimização de websites e aplicações web. Inclui design responsivo, desenvolvimento front-end e back-end, integração de APIs, e-commerce, blogs, portfólios."
}

```
</br>

##### Rota de Criação de Tipos de Serviço - GET

- **Endpoint**: `/service-type/list`


#### Rota de Criação de Publicação de Serviço - POST

- **Endpoint**: `/publications/post`

**Exemplo de JSON**:

```json
{
  "title": "Serviço de Teste",
  "serviceType": "coloque o id do service_type",
  "paymentMethods": "coloque o id do payment_method",
  "description": "Descrição do serviço de teste.",
  "price": 100.50,
  "deliveryTime": "2 dias úteis",
  "location": "coloque o id do location"
}

```

##### Rota de Listagem de Serviços - GET

- **Endpoint**: `/publications/list`