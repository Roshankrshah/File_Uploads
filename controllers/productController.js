const Product = require('../models/product');
const { StatusCode } = require('http-status-code');

const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(StatusCode.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(StatusCode.OK).json({ products });
};

module.exports = { createProduct, getAllProducts };