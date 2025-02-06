const express = require('express')
const router = express.Router()

router.get('/test', (req, res)=>{
    res.send('User Route Working')
})

module.exports = router