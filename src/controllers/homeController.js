const router = require('express').Router()
const cubeService = require('../services/cubeService')



router.get('/', (req, res) => {
    const cubes = cubeService.getAll()
    res.render('index',{cubes})
})
router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})
module.exports = router