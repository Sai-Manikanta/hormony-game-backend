const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateAsSelected } = require('../controllers/product')

router.route('/')
    .get(getProducts)
    .post(createProduct)


router.route('/updatedAsSelected/:id')
    .put(updateAsSelected)

// products/compare?ids=[]
// router.route('/compare')
//     .get(getCompareProducts)

module.exports = router;