const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'success',
            users: users
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
};

const createUser = async (req, res) => {
    const { name } = req.body;

    try {
        const user = new User({ name });

        await user.save();

        res.status(200).json({
            status: 'success',
            user: user
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            error: err.message
        })
    }
};

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            user: user
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
};

const updateUserAllowStatus = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { allowed: req.body.allowed }, { new: true });
        res.status(200).json({
            status: 'success',
            user: user
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
};

const updateUserCount = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, {
            numberOfSelections: req.body.numberOfSelections
        }, {
            new: true
        });
        res.status(200).json({
            status: 'success',
            user: user
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
};

const updateSelectedCount = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, {
            selectedCount: req.body.selectedCount
        }, {
            new: true
        });
        res.status(200).json({
            status: 'success',
            user: user
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
};

module.exports = { getUsers, createUser, getSingleUser, updateUserAllowStatus, updateUserCount, updateSelectedCount }

