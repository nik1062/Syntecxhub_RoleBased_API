const express = require('express');
const { getAllUsers, updateUserRole, toggleBlockUser, deleteUser } = require('../controllers/adminController');
const { verifyToken, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// All routes in this file are protected and require admin privileges
router.use(verifyToken, authorizeAdmin);

router.get('/users', getAllUsers);
router.put('/users/:id/role', updateUserRole);
router.put('/users/:id/block', toggleBlockUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
