const express = require('express')
const router = express.Router()

router.get('/test', (req, res)=>{
    res.send('Products Route Working')
})

module.exports = router