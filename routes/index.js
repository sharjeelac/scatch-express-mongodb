const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/isLoggined.js')
const productModel = require('../models/product-Model.js')

router.get('/', (req, res)=>{
    let error = req.flash('error')
    res.render('index', {error, loggedin: false})
})

router.get('/shop', isLoggedIn ,async (req, res)=>{
    const products = await productModel.find()    
    res.render('shop', {products})
})

module.exports = router