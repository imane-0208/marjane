const express = require('express');
const router = express.Router();
// const dbConn  = require('../db/database');

const { GetAdmin
 } = require('../controller/admin_general.controller');

// get all admin
router.get('/',GetAdmin);
// router.get('/login',login);

module.exports = router;
