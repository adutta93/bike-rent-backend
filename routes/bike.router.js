const express = require('express');
const router = express.Router();

const {
	AddBike,
	GetAllBikes,
	GetAllBikesPagination,
	GetBikeById,
	UpdateBike,
	DeleteBike,
} = require('../controller/bike.controller');

router.post('/bike/add-bike', AddBike);
router.get('/bike/all-bikes', GetAllBikes);
router.get('/bike/all-bikes/pagination', GetAllBikesPagination);
router.get('/bike/:id', GetBikeById);
router.put('/bike/:id', UpdateBike);
router.delete('/bike/:id', DeleteBike);
module.exports = router;
