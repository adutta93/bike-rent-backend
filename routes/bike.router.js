const express = require('express');
const router = express.Router();

const { AddBike, GetAllBikes, GetAllBikesPagination } = require('../controller/bike.controller');

router.post('/bike/add-bike', AddBike);
router.get('/bike/all-bikes', GetAllBikes);
router.get('/bike/all-bikes/pagination', GetAllBikesPagination);
module.exports = router;
