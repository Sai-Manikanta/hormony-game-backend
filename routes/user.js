const express = require('express');
const router = express.Router();
const { getUsers, createUser, getSingleUser, updateUserAllowStatus, updateUserCount, updateSelectedCount } = require('../controllers/user')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getSingleUser)

router.route('/enableUser/:userId')
    .put(updateUserAllowStatus)

router.route('/updateCount/:userId')
    .put(updateUserCount)

router.route('/updateSelectedCount/:userId')
    .put(updateSelectedCount)

// products/compare?ids=[]
// router.route('/compare')
//     .get(getCompareProducts)

module.exports = router;