const express = require('express');

const app = express();
app.set('port', process.env.PORT || '8080');

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