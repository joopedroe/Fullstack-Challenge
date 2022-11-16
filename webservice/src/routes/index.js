const { Router } = require('express');
const ArticlesController = require('../controllers/articlesController');


const routes = new Router();

routes.get('/', ArticlesController.start);
routes.get('/articles', ArticlesController.index);
routes.get('/articles/:id', ArticlesController.show);
routes.post('/articles', ArticlesController.store);
routes.put('/articles/:id', ArticlesController.update);
routes.delete('/articles/:id', ArticlesController.delete);

module.exports = routes;