const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose')
const passport = require('passport');
const expSession = require('express-session');
const cors = require('cors');
require('dotenv').config()
require('./config/passport');

const userRoute = require('./routes/users')
const newsRoute = require('./routes/news')

const app = express()

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => { console.log('Connected to Mongo') })

app.use(express.json())
app.use(cors())


app.use(expSession({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

const NEWS_API_KEY = process.env.NEWS_API_KEY
const RANKING_TENNIS_KEY = process.env.RANKING_TENNIS_KEY
const SEASON_TENNIS_KEY = process.env.SEASON_TENNIS_KEY

app.post('/news', (req, res) => {
    const query = req.body.query
    const url = `https://newsapi.org/v2/everything?q=${query}&en&apiKey=${NEWS_API_KEY}`;

    axios({
        method: 'GET',
        url: url,
        responseType: 'application/json'
    })
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
})

app.post('/ranking', (req, res) => {
    const tour = req.body.tour;

    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/rankings/${tour}`,
        headers: {
            'x-rapidapi-key': RANKING_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.post('/london-ranking', (req, res) => {
    const tour = req.body.tour;

    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/rankings/race/${tour}`,
        headers: {
            'x-rapidapi-key': RANKING_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.post('/season-calendar', (req, res) => {
    const tour = req.body.tour
    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/tournaments/${tour}/2021`,
        headers: {
            'x-rapidapi-key': SEASON_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.post('/current-tournament', (req, res) => {
    const date = new Date
    const options = {
        method: 'GET',
        // url: `https://tennis-live-data.p.rapidapi.com/matches-by-date/${date.toISOString().substr(0, 10)}`,
        url: 'http://localhost:5000/ctdata',
        // headers: {
        //     'x-rapidapi-key': SEASON_TENNIS_KEY,
        //     'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        // }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))

});

app.get('/ctdata', (req, res) => {
    res.json({
        'results': [
            [
                {
                    'matches': [
                        {
                            "away_id": 155040,
                            "away_player": "Goffin D.",
                            "court": "Court 10",
                            "date": "2020-08-23T23:10:00+00:00",
                            "home_id": 387492,
                            "home_player": "Coric B.",
                            "id": 13058,
                            "result": {
                                "away_set1": "7",
                                "away_set2": "6",
                                "away_sets": "2",
                                "away_tb1": "8",
                                "home_set1": "6",
                                "home_set2": "4",
                                "home_sets": "0",
                                "home_tb1": "6",
                                "result_description": "Ended",
                                "winner_id": 155040
                            },
                            "round_id": 49,
                            "round_name": "1/16",
                            "status": "finished",
                            "title": "Coric B. - Goffin D."
                        },
                        {
                            "away_id": 1152090,
                            "away_player": "Auger-Aliassime F.",
                            "court": "Court 10",
                            "date": "2020-08-24T15:00:00+00:00",
                            "home_id": 220080,
                            "home_player": "Sandgren T.",
                            "id": 13059,
                            "result": {
                                "away_set1": "7",
                                "away_set2": "2",
                                "away_set3": "6",
                                "away_sets": "1",
                                "away_tb1": "7",
                                "away_tb3": "5",
                                "home_set1": "6",
                                "home_set2": "6",
                                "home_set3": "7",
                                "home_sets": "2",
                                "home_tb1": "4",
                                "home_tb3": "7",
                                "result_description": "Ended",
                                "winner_id": 220080
                            },
                            "round_id": 49,
                            "round_name": "1/16",
                            "status": "finished",
                            "title": "Sandgren T. - Auger-Aliassime F."
                        }
                    ]
                },
                {
                    'tournament': {
                        "city": "Cincinnati",
                        "code": "ATP",
                        "country": "USA",
                        "end_date": "2020-08-28",
                        "id": 1193,
                        "name": "Western & Southern Open",
                        "season": 2020,
                        "start_date": "2020-08-22",
                        "surface": "Outdoor Hard"
                    }
                }
            ],
            [
                {
                    'matches': [
                        {
                            "away_id": 401820,
                            "away_player": "Kudermetova V.",
                            "court": "Court 17",
                            "date": "2020-08-23T22:00:00+00:00",
                            "home_id": 124404,
                            "home_player": "Plíšková Ka.",
                            "id": 13134,
                            "result": {
                                "away_set1": "7",
                                "away_set2": "6",
                                "away_sets": "2",
                                "home_set1": "5",
                                "home_set2": "4",
                                "home_sets": "0",
                                "result_description": "Ended",
                                "winner_id": 401820
                            },
                            "round_id": 49,
                            "round_name": "1/16",
                            "status": "finished",
                            "title": "Plíšková Ka. - Kudermetova V."
                        },
                        {
                            "away_id": 551772,
                            "away_player": "Kenin S.",
                            "court": "Grandstand",
                            "date": "2020-08-23T23:00:00+00:00",
                            "home_id": 112860,
                            "home_player": "Cornet A.",
                            "id": 13135,
                            "result": {
                                "away_set1": "1",
                                "away_set2": "6",
                                "away_sets": "0",
                                "away_tb2": "7",
                                "home_set1": "6",
                                "home_set2": "7",
                                "home_sets": "2",
                                "home_tb2": "9",
                                "result_description": "Ended",
                                "winner_id": 112860
                            },
                            "round_id": 49,
                            "round_name": "1/16",
                            "status": "finished",
                            "title": "Cornet A. - Kenin S."
                        }
                    ]
                },
                {
                    'tournament': {
                        "city": "Cincinnati",
                        "code": "ATP",
                        "country": "USA",
                        "end_date": "2020-08-28",
                        "id": 1193,
                        "name": "Western & Southern Open",
                        "season": 2020,
                        "start_date": "2020-08-22",
                        "surface": "Outdoor Hard"
                    }
                }
            ]
        ]
    })
})

app.use('/users', userRoute);
app.use('/news', newsRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});