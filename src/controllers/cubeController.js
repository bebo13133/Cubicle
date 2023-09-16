const router = require('express').Router()
const cubeService = require('../services/cubeService')
const { log } = require('console')
const accessoryService = require('../services/accessoryService')


router.get('/create', (req, res) => {


    res.render('create',);

})

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body
    await cubeService.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    })


    res.redirect('/')
})

router.get('/:cubeId/details', async (req, res) => {

    const cube = await cubeService.getOne(req.params.cubeId).lean()
    return !cube ? res.redirect('/404') : res.render('details', { cube })
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const accessory = await accessoryService.getAll().lean()

    const cube = await cubeService.getOne(req.params.cubeId).lean()
    // const accessory = await 
    res.render("accessory/attach", { cube ,accessory})


})



module.exports = router