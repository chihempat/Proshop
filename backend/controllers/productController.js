import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


// @desc    Get all products
// @route   GET /v1/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? {
   name: new RegExp(req.query.keyword, 'i')
  }: {};
  const products = await Product.find({...keyword});
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

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private/Admin
const createProductReview = asyncHandler(async (req, res) => {

  const {
    rating,
    comment
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(r=>r.user.toString() === req.user._id.toString())

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating : Number(rating),
      comment,
      user: req.user._id
    }

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating = product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / product.reviews.length;
    await product.save();
    res.status(201).json({message: 'Review added'});

  } else {
    res.status(404);
    throw new Error('Product not found');
  }




});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview
};