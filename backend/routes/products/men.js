const express = require('express')
const router = express.Router()

const Product = require('../../models/products')

router.get('/home',async(req,res)=>{
    const items = await Product.find({});
})