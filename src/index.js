const express = require('express');
const app = express();
const { log } = require('console')
const homeController = require('./controllers/homeController')
//const config = require('./config/config');//
const cubeController = require('./controllers/cubeController')


const PORT = 5000
require('./config/express')(app);
// require('./config/routes')(app)

app.use(homeController)
app.use("/cubes",cubeController)

app.get('*', (req, res) => {
    res.redirect('/404')
})
//routes 
app.listen(PORT, () => log(`Server running on ${PORT}`))
