const Article = require("../models/articles")

module.exports = {
    async start(req, res) {
        res.status(200).send("Fullstack Challenge 2021 🏅 - Space Flight News")
    },

    async index(req, res) {
        const { page, order, search } = req.query;
        const page_get = page || 1;
        let query = {}
        if(search){
          query ={ title: { $regex: search, $options : 'i' }}
        }
        let sort = {};
        if(order){
          sort = { publishedAt: order }
        }
        const articles = await Article.paginate( query,{ page: page_get, limit: 10, sort: sort })

        res.status(200).json(articles);
    },

    async show(req, res){
        await Article
              .findById({ _id: req.params.id })
              .then((article) => {
                if (article) {
                  return res.json(article);
                }
            })
            .catch(()=>{
                return res.status(404).json({ sucess: false, message: 'Article not found!', statusCode: 404 })
            })
      },

    async store(req, res) {
        const { featured, title, url, imageUrl, newsSite, summary, publishedAt, launches, events, id } = req.body;

        Article.create({
            id: id || 233,
          featured,
          title,
          url,
          imageUrl,
          newsSite,
          summary,
          publishedAt,
          launches,
          events
        }).then(result=>{
            return res.status(201).json(result);
        }).catch(err=>{
            return res.status(500).json({ sucess: false, message: 'Article unregistered!', message_err: err, statusCode: 500 })
        })
      },

      async update(req, res) {
        const { id } = req.params;
        const { featured, title, url, imageUrl, newsSite, summary, publishedAt, launches, events } = req.body;

        const article = {
          featured,
          title,
          url,
          imageUrl,
          newsSite,
          summary,
          publishedAt,
          launches,
          events
        }
        Article.findOneAndUpdate(
            {_id: id},
            { $set: article },
            { new: true },
            (err, model) => {
                if (err) {
                  res.status(500).json({ sucess: false, message: err, statusCode: 500 });
                } else {
                  res.status(200).json(model);
                }
              }
        )
      },

      delete(req, res) {
        const { id } = req.params;
        Article.deleteOne({ _id: id }).then(()=>{
            return res.status(200).json({sucess: true, ok: true });
        }).catch(()=>{
            return res.status(500).json({sucess: false, message: 'Could not delete'});
        })
       
      },
    
}