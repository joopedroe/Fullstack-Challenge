const axios = require('axios');
const Article = require('../models/articles') ;
const nodemailer = require("nodemailer");
const moment = require('moment');
require('dotenv').config();

async function creatArticle(article){
    try {
        await Article.create(article);
        return true;
     }
     catch {
        return false;
     }
     
 }

 async function submitEmail(errs, statusGenerateHtml){
    let message = ''
    if(statusGenerateHtml){
        message = await generateHtml(errs)
    }
    else{
        console.log(errs)
        message = errs;
    }
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    transport.sendMail({
        from: '<joopedroe936@gmail.com>',
        to: 'joopedroe936@gmail.com',
        subject: 'Articles sync failed',
        html: message,
        text: message
    }).then(response=>{
        console.log('Email succes');
    })
 }

 async function generateHtml(listArticles){
    let initialHtml = '<h2>Articles sync failed</h2> <h3>ID   -    Title </h3> <ul>';
    listArticles.forEach(element=>{
        initialHtml+='<li>'+element.id+' - '+element.title+'</li>'
    })
    initialHtml+='</ul>';
     return initialHtml;
 }

 async function create(listArticles){
    const errs = [];
    let listStatus = [];
    let promises = [];
    listArticles.forEach(element => {
        promises.push(creatArticle(element));        
    });
    Promise.all(promises).then(response=>{
        listStatus = response;
    }).finally(()=>{
        listStatus.forEach((status, index)=>{
            if(!status){
                errs.push(listArticles[index])
            }
        })
        submitEmail(errs, true);
    })


    
 }

 module.exports = { 
    async loadArticlesDaily(){
        const date = moment().subtract(1, "days").format('YYYY-MM-DD');
        console.log(date);
        let responses =[]
        const articles = axios.get(`https://api.spaceflightnewsapi.net/v3/articles?publishedAt_gte=${date}`);
        articles.then(response =>{
            responses=response.data;
        }).catch(error=>{
            submitEmail(`<h2>Articles sync failed</h2> <h3> ${error} </h3> `, false);
        }).finally(() => {
            if(responses.length){
                create(responses);
            }
        });
    }
}