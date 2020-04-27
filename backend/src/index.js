const express = require('express');
const cors    = require('cors'); //pacote de seguraça que vai validar quem vai poder acessar a aplicação
const routes  = require('./routes'); // ./ indica uma que esta no mesmo lugar, ../ é um diretorio atrás. Utiliza-se o ./ para indicar que não é um pacote, e sim um arquivo no mesmo diretório

const app = express(); //instanciando a aplicação

app.use(cors()); // em produção pode-se enviar um enereço chamado {origin:} onde o frontend está hospedado
app.use(express.json()); // Comunica para o expresse que o corpo da requisição é um json
app.use(routes);

app.listen(3333); //Para acessar a aplicação em localhost:3333 (Aplicação node utilizar port 3333)

//npm install nodemon -D (Comando para instalar o nodemon como dependencia de desenvolvimento apenas)

/*
*  Rotas são o endereço, recurso é o /user por exemplo
*/

/*
 * Metodos HTTP
 * GET: Busca/lsitar informções do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Apagar uma informação no backend
 */

/*
 * Tipos de parâmetros
 * Query Params: busca parametros enviados na rota após "?" (Filtros, Paginação, )
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou auterar recursos
 */

 /*
  * Bancos de Dados
  *  SQL: MySWL, SQLite, PostrgreSQL, Oracle, Microsoft SQL Server.
  * NoSQL: MongDB, CouchDB, etc.
  */

  /*
   * Exemplo de Query no Banco de dados:
   * DB Driver: SELECT * FROM Users
   * Query Builder: table('Users').select(*).where()...
   */

   /**
    * Query builder instalado (npm intall knex) [knexjs.org]
    * Driver para Db ( npm intall sqlite3)
    */


