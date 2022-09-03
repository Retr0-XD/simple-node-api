const express = require('express'),
router = express.Router(),
hello = require('../controllers/monkemon')


router.get('/',(req,res)=> {
    res.render(hello)
    
})


module.exports = router