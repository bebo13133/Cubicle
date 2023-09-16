const router = require('express').Router()
const cubeService = require('../services/cubeService')
const { log } = require('console')

router.get('/create', (req, res) => {
    log(cubeService.getAll())

    res.render('create',);

})

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body
  await  cubeService.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    })


    res.redirect('/')
})

router.get('/:cubeId/details', async (req, res) => {
    log(req.params)
    const cube = await cubeService.getOne(req.params.cubeId).lean()
console.log(cube)
    return !cube ? res.redirect('/404') : res.render('details', { cube })
})
module.exports = router