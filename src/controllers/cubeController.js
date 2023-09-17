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

    const hasAccessory = cube.accessories.length > 0
    return !cube ? res.redirect('/404') : res.render('details', { cube, hasAccessory })
});

router.get('/:cubeId/attach-accessory', async (req, res) => {

    const cube = await cubeService.getOne(req.params.cubeId).lean()
    const accessory = await accessoryService.getAccessories(cube.accessories).lean()
    const hasAccessory = accessory.length > 0  // ако имаме аксесоари - подаваме като параметър за да го плзваме като if проверка в attach.hbs и details.hbs

    // const accessory = await 
    res.render("accessory/attach", { cube, accessory, hasAccessory })
})

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory } = req.body // получаваме accessory id-to
    const cubeId = req.params.cubeId

    await cubeService.attachAcc(cubeId, accessory)

    res.redirect(`/cubes/${cubeId}/details`)
})


module.exports = router