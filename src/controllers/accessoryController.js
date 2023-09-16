const router = require('express').Router();


router.get('/create', function(req, res) {
    res.render('accessory/create')
})
module.exports = router;

