// TODO: Require Controllers...
// const express = require('express');
const { log } = require('console')
const homeController = require('../controllers/homeController')
const cubeController = require('../controllers/cubeController')
const accessoryController = require('../controllers/accessoryController')

 module.exports = (app) => {
//    const PORT = 5000
app.use(homeController)
app.use("/cubes",cubeController)
app.use("/accessories",accessoryController)
app.get('*', (req, res) => {
    res.redirect('/404')
})
//    app.listen(PORT, () => log(`Server running on ${PORT}`))
 };