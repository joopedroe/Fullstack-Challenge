const axios = require('axios');
const Article = require('../models/articles') ;

 const valor = axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=20000');
 valor.then(response =>{
    response.data.forEach(element => {
        creatArticle(element);
    });
 })

 async function creatArticle(article){
    try {
        await Article.create(article);
     }
     catch {
        console.log('Erro')
     }
    
    
 }
