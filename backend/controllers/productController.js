import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


// @desc    Get all products
// @route   GET /v1/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


// @desc    Get all products
// @route   GET /v1/products/:id
// @access  Private/Admin
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
});


// @desc    Delete product by ID
// @route   GET /api/products/:id
// @access  Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
});

// @desc    Create product
// @route   POST /api/products
// @access  PUBLIC
const createProduct = asyncHandler(async (req, res) => {

  // const product = new Product({
  //   name: req.body.name,
  //   price: req.body.price,
  //   user: req.user._id,
  //   image: req.body.image,
  //   description: req.body.description,
  //   category: req.body.category,
  //   countInStock: req.body.countInStock,
  //   numReviews: req.body.numReviews,
  //   brand: req.body.brand,
  // });

  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    description: 'Sample description',
    category: 'Sample category',
    countInStock: 0,
    brand: 'Sample brand',
  });


  const createProduct = await product.save();
  if (createProduct) {
    res.status(201).json(createProduct);
  } else {
    res.status(400);
    throw new Error('Product not created');
  }
});

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {

  const {
    name,
    price,
    image,
    description,
    category,
    countInStock,
    brand
  } = req.body;

  const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404)
      throw new Error('Product not found')
    }

    product.name = name;
    product.price = price;
    product.user = req.user._id;
    product.image = image;
    product.description = description;
    product.category = category;
    product.countInStock = countInStock;
    product.brand = brand;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
});


export { getProducts, getProductById, deleteProduct, createProduct,updateProduct };