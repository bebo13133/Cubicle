const router = require('express').Router();
const userService = require('../services/userService')
const User = require('../models/User')


router.get('/register', (req,res) => {
res.render('./users/register');
});

router.post('/register', async (req,res) => {
const {username, password, repeatPassword} = req.body

await userService.register({username, password, repeatPassword})

res.redirect('/users/login') //todo: да се промени на логин страницата

});

router.get('/login', (req, res) => {
    res.render('./users/login')
});
router.post('/login', async (req,res)=>{
const {username, password} = req.body


const token = await userService.login(username, password)

res.cookie('auth', token,{httpOnly: true})

res.redirect("/")
})



module.exports = router;