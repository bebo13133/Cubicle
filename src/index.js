const express = require('express');
const app = express();
const { log } = require('console')
const homeController = require('./controllers/homeController')
//const config = require('./config/config');//

const PORT = 5000
require('./config/express')(app);
// require('./config/routes')(app)

app.use(homeController)


//routes 
app.listen(PORT, () => log(`Server running on ${PORT}`))
