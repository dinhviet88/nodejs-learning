const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
//const port = 8080

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// config prosess env
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/abc', (req, res) => {
    //   res.send('Dinh van Viet')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on URL: ${hostname}:${port}`)
})