const express = require('express');
const router = express.Router();
const updateRoute = require('../controllers/updateInfor');

// POST /api/update/:id
router.put('/update/:id', updateRoute);

module.exports = router;
