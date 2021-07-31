const express = require('express');
const Article = require('../models/Article');
const router = express.Router();
const checkAuth = require('../helpers/CheckAuth');

router.post('/get-news', async (req, res) => {
    const id = req.body.id
    try {
        const article = await Article.find({ userId: id }).sort({ 'date': -1 })
        res.json(article)
    }
    catch (err) {
        console.log(err)
    }
});

router.post('/add', async (req, res) => {
    const { title, urlToImage, description, url, userId, token } = req.body;
    checkAuth(token)

    const newArticle = new Article({
        title,
        urlToImage,
        description,
        url,
        userId
    });

    try {
        await Article.insertMany(newArticle)
        res.json('Article saved')
    }
    catch (err) {
        throw new Error(err)
    }
});

router.post('/delete', async (req, res) => {
    const { url, userId, token }  = req.body;
    const user = checkAuth(token)
    try {
        const article = Article.findOne({ url: url, userId: userId });
        if(!article) throw new Error('Article not found');
        if(user.userId !== article.userId) throw new Error('Action not allowed');

        await Article.findOneAndDelete({ url: url, userId: userId });
        res.json('Article deleted from DB');
    }
    catch (err) {
        throw new Error(err)
    }
});

module.exports = router