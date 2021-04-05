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
        // url: `https://tennis-live-data.p.rapidapi.com/rankings/${tour}`,
        url: `http://localhost:5000/rdata`
        // headers: {
        //     'x-rapidapi-key': RANKING_TENNIS_KEY,
        //     'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        // }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.get('/rdata', (req, res) => {
    res.json({
        'results': {
            'rankings': [
                {
                    "country": "Serbia",
                    "first_name": "Novak",
                    "full_name": "Novak Djokovic",
                    "id": 89304,
                    "last_name": "Djokovic",
                    "movement": "",
                    "ranking": 1,
                    "ranking_points": 10220
                },
                {
                    "country": "Spain",
                    "first_name": "Rafael",
                    "full_name": "Rafael Nadal",
                    "id": 86928,
                    "last_name": "Nadal",
                    "movement": "",
                    "ranking": 2,
                    "ranking_points": 9850
                },
                {
                    "country": "Austria",
                    "first_name": "Dominic",
                    "full_name": "Dominic Thiem",
                    "id": 262500,
                    "last_name": "Thiem",
                    "movement": "",
                    "ranking": 3,
                    "ranking_points": 7045
                },
                {
                    "country": "Switzerland",
                    "first_name": "Roger",
                    "full_name": "Roger Federer",
                    "id": 262501,
                    "last_name": "Federer",
                    "movement": "",
                    "ranking": 4,
                    "ranking_points": 6630
                },
                {
                    "country": "Russia",
                    "first_name": "Daniil",
                    "full_name": "Daniil Medvedev",
                    "id": 981036,
                    "last_name": "Medvedev",
                    "movement": "",
                    "ranking": 5,
                    "ranking_points": 5890
                },
                {
                    "country": "Greece",
                    "first_name": "Stefanos",
                    "full_name": "Stefanos Tsitsipas",
                    "id": 734208,
                    "last_name": "Tsitsipas",
                    "movement": "",
                    "ranking": 6,
                    "ranking_points": 4745
                },
                {
                    "country": "Germany",
                    "first_name": "Alexander",
                    "full_name": "Alexander Zverev",
                    "id": 342990,
                    "last_name": "Zverev",
                    "movement": "",
                    "ranking": 7,
                    "ranking_points": 3630
                },
                {
                    "country": "Italy",
                    "first_name": "Matteo",
                    "full_name": "Matteo Berrettini",
                    "id": 676710,
                    "last_name": "Berrettini",
                    "movement": "",
                    "ranking": 8,
                    "ranking_points": 2860
                },
                {
                    "country": "France",
                    "first_name": "Gael",
                    "full_name": "Gael Monfils",
                    "id": 89076,
                    "last_name": "Monfils",
                    "movement": "",
                    "ranking": 9,
                    "ranking_points": 2860
                },
                {
                    "country": "Belgium",
                    "first_name": "David",
                    "full_name": "David Goffin",
                    "id": 155040,
                    "last_name": "Goffin",
                    "movement": "",
                    "ranking": 10,
                    "ranking_points": 2555

                }
            ]
        }
    })
});

app.post('/london-ranking', (req, res) => {
    const tour = req.body.tour;

    const options = {
        method: 'GET',
        // url: `https://tennis-live-data.p.rapidapi.com/rankings/race/${tour}`,
        url: 'http://localhost:5000/rdata'
        // headers: {
        //     'x-rapidapi-key': RANKING_TENNIS_KEY,
        //     'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        // }
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
        // url: `https://tennis-live-data.p.rapidapi.com/tournaments/${tour}/2021`,
        url: `http://localhost:5000/seasondata`
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

app.get('/seasondata', (req, res) => {
    res.json({
        'results': [
            {
                "city": "Doha",
                "code": "ATP",
                "country": "Qatar",
                "end_date": "2020-01-11",
                "id": 1143,
                "name": "Qatar ExxonMobil Open",
                "season": 2020,
                "start_date": "2020-01-06",
                "surface": "Outdoor Hard"
            },
            {
                "city": "Adelaide",
                "code": "ATP",
                "country": "Australia",
                "end_date": "2020-01-18",
                "id": 1144,
                "name": "Adelaide International",
                "season": 2020,
                "start_date": "2020-01-12",
                "surface": "Outdoor Hard"
            },
            {
                "city": "Auckland",
                "code": "ATP",
                "country": "New Zealand",
                "end_date": "2020-01-18",
                "id": 1145,
                "name": "ASB Classic",
                "season": 2020,
                "start_date": "2020-01-13",
                "surface": "Outdoor Hard"
            },
            {
                "city": "Cordoba",
                "code": "ATP",
                "country": "Argentina",
                "end_date": "2020-02-09",
                "id": 1147,
                "name": "Cordoba Open",
                "season": 2020,
                "start_date": "2020-02-03",
                "surface": "Outdoor Clay"
            },
            {
                "city": "Montpellier",
                "code": "ATP",
                "country": "France",
                "end_date": "2020-02-09",
                "id": 1148,
                "name": "Open Sud de France",
                "season": 2020,
                "start_date": "2020-02-03",
                "surface": "Indoor Hard"
            },
            {
                "city": "Pune",
                "code": "ATP",
                "country": "India",
                "end_date": "2020-02-09",
                "id": 1149,
                "name": "Tata Open Maharashtra",
                "season": 2020,
                "start_date": "2020-02-03",
                "surface": "Outdoor Hard"
            }
        ]
    })
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
});

app.use('/users', userRoute);
app.use('/news', newsRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});