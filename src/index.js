const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const {log} = require('console')
const path = require('path');
//const config = require('./config/config');//
// Express static configuration

app.use(express.static(path.resolve(__dirname,'static')))

//Handlebars config

app.engine('hbs',handlebars.engine({
    extname: 'hbs',

}));

app.set('view engine', 'hbs')
app.set('views', 'src/views');

//routes 
const PORT=5000
app.get('/', (req, res) => {
    res.render('index')

})

app.listen(PORT, ()=> log(`Server running on ${PORT}`))