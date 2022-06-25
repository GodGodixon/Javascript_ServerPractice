const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

const basicRouter = require('./router.js');

const app = express();
dotenv.config();
app.set('port', process.env.PORT || '8081');


app.use(morgan('dev'));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret:process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure : false,
    },


}))

app.use((req, res, next) => {
    console.log('Run on ALL YEAH');
    next();
});

//app.get('/', (req, res, next) => {
//    console.log('GET 요청에서 실행되는 친구입니다');
//    res.status(200).send("Yeah good");
//})
app.use('/', basicRouter);


app.use((req, res, next) => {
    console.log("You can see me easily :D");
    next();
})

app.get('/', (req, res) => {
    res.send("nah");
    console.log("Get RUNNED");
});

app.get('/error', (req, res) => {
    res.send("ERROR AHHAHAHA");
    console.log("Error here");
    throw new Error("Error NOOOOOO");
});

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {

    console.log('Port : ',  app.get('port'), ' had been connected.')
});

//Middleware