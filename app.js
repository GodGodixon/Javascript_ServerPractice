const express = require('express');

const app = express();
app.set('port', process.env.PORT || '8080');

app.get('/', (req, res) => {
    res.send("nah");

});

app.listen(app.get('port'), () => {

    console.log('Port : ',  app.get('port'), ' had been connected.')
})