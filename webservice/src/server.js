const express = require('express');
const swagger = require('swagger-ui-express');
const cors = require('cors');
const routes = require('./routes');
const swaggerFile = require('./swagger.json')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile));
app.use(routes);


module.exports = app;