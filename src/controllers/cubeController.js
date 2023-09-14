const router = require('express').Router()
const cubeService = require('../services/cubeService')
const {log}=require('console')

router.get('/create', (req, res) => {
    log(cubeService.getAll())

    res.render('create',);

})

router.post('/create', (req, res) => {
    const { name, 
        description, 
        imageUrl, 
        difficultyLevel,
     } = req.body
    cubeService.create({ name, 
        description, 
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
    })


    res.redirect('/')
})

router.get('/:userID/details', (req, res) => {
   const cube = cubeService.getOne(req.params.userID)
    res.render('details',{cube})
})
module.exports = router