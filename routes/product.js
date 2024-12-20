const express = require('express');
const Product = require('../modelschema/ProductSchema');
const { body, validationResult } = require('express-validator');
const router = express.Router();


router.get('/get/product/:search', async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({Success, errors: errors.array() });
    }
    try {
        const search = req.params.search || '';
    // const category = req.body.category;
    // $regex: yaha regex ak mongoDB operater hai jo search karta hai particular keyword like name.
    // option i  is for lowercase and uppercase letter it is nonsenstive case.
    const products = await Product.find({ name: { $regex: search, $options: 'i' } });
    res.json(products);
    } catch (error) {
        console.log("there is error in get Product ",error);
    }
});

router.get('/getall/product', async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({Success, errors: errors.array() });
    }
    try {
        
    const products = await Product.find();
    res.json(products);
    } catch (error) {
        console.log("there is an error in fetching all the documents" ,error);
    }
});


router.post('/post/product', async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({Success, errors: errors.array() });
    }
    try {
        const { name,category, price,description } = req.body;
        const chat = new Product({name,category, price,description });
        await chat.save();
        res.status(201).json(chat);    
    } catch (error) {
        console.log(error,"there is an error in post the product");
    }
    
 } );

module.exports = router;