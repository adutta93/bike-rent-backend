const express = require('express');
const router = express.Router();

const { addBike } = require('../controller/bike.controller');

router.post('/bike/add-bike', addBike);
module.exports = router;
