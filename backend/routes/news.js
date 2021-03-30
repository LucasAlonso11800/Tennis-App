const express = require('express');
const Article = require('../models/Article')
const router = express.Router();

router.post('/get-news', async (req, res) => {
    const id = req.body.id
    const article = await Article.find({userId: id})
    res.json(article)
});

router.post('/add', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        urlToImage: req.body.urlToImage,
        description: req.body.description,
        url: req.body.url,
        userId: req.body.userId
    })

    try{
        article = await article.save()
        res.json('Article saved')
    }
    catch(err){
        console.log(err)
    }
});

router.post('/delete', async (req, res) => {
    const url = req.body.url;
    const userId = req.body.userId;

    await Article.findOneAndDelete({url: url, userId: userId});
    res.json('Article deleted from DB');
});

module.exports = router