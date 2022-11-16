const { loadArticlesDaily } = require('./scripts/loadArticlesDaily');
const cron = require('node-cron');
const app = require('./server')

cron.schedule('0 9 * * *', () => {
    loadArticlesDaily();
  });

app.listen(process.env.PORT || 3333);
