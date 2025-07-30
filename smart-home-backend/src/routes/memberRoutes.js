const express = require('express');
const router = express.Router();
const addMember = require('../controllers/addMember');
const deleteMember = require('../controllers/deleteMember');
const getMembers = require('../controllers/getMembers');


router.post('/add', addMember); // POST /api/members/add
router.delete('/delete/:memberId', deleteMember); // DELETE /api/delete/:memberId
router.get('/members/:adminId', getMembers);

module.exports = router;
