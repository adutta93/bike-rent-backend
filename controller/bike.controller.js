const Bike = require('../models/bike.model');

/**
 * !Add Bike
 * !Post
 */
exports.AddBike = async (req, res) => {
	try {
		const { name, brand, rent, description } = req.body;

		const newBike = new Bike({
			name,
			brand,
			rent,
			description,
			// bikeImg,
		});

		const _bike = await newBike.save();
		// console.log(_bike);
		if (!_bike) {
			return res.status(400).json({ error: 'unable to add bike' });
		}
		res.status(201).json({ success: 'Bike added successfully', bike: { _bike } });
	} catch (error) {
		return res.status(400).json({ error: error });
	}
};

/**
 * !GetAllBikes
 * !Get
 */
exports.GetAllBikes = async (req, res) => {
	try {
		const bikes = await Bike.find();
		res.status(200).json({
			status: 'Success',
			Total: bikes.length,
			bikes,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Error',
			err: err.message,
		});
	}
};

/**
 * !GetAllBikesPagination
 * !Get
 */
exports.GetAllBikesPagination = async (req, res) => {
	const skip = req.query.skip ? Number(req.query.skip) : 0;
	const DEFAULT_LIMIT = 10;
	try {
		const bikes = await Bike.find({}).skip(skip).limit(DEFAULT_LIMIT);
		res.status(200).json({
			status: 'Success',
			Total: bikes.length,
			bikes,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Error',
			err: err.message,
		});
	}
};
