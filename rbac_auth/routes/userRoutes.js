const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', authMiddleware, roleMiddleware(['admin']), getAllUsers);
router.get('/:id', authMiddleware, roleMiddleware(['admin', 'user']), getUserById);

module.exports = router;
