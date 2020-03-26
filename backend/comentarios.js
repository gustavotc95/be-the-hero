/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
*/

/**
 * Tipos de parâmetros 
 * 
 * Query Params: Parâmentros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmentros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 * 
*/

/** 
 * Migrations
 * 
 * Criar migration: npx knex migrate:make nome_migration
 * Roda migration: npx knex migrate:latest
 * Rollcak na ultima migration: migration: migrate:rollback 
 * exports.up => é o que roda se der certo
 * exports.down => é o que roda se der errado
*/

/**
  app.use(cors({
    origin: 'http://meuapp.com'
  }));
*/

