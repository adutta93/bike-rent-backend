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

/**
 * !GetBikeById
 * !Get
 */
exports.GetBikeById = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) res.status(400).json({ error: 'Bike Id required' });
		const bike = await Bike.findById(id);

		if (!bike) res.status(404).json({ error: 'could not find bike' });
		res.status(200).json({
			status: 'Success',
			bike,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Error',
			err: err.message,
		});
	}
};

/**
 * !UpdateBike
 * !Update
 */

exports.UpdateBike = async (req, res) => {
	try {
		// const userId = req.user.id;
		const bike = await Bike.findById(req.params.id);

		if (!bike) return res.status(404).json({ Error: 'Bike not found' });

		// if (!isUserTheOwner(userId, region.owner)) {
		// 	res.status(400).json({
		// 		status: 'Failed, you are not the owner, you cant update',
		// 	});
		// }

		const updatedBike = await bike.update(req.body, {
			new: true,
		});
		if (!updatedBike) return res.status(404).json({ Error: 'Could not update bike' });
		res.status(200).json({
			msg: 'Bike updated successfully',
			updatedBike,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Error',
			err: err.message,
		});
	}
};

/**
 * !DeleteBike
 * !Delete
 */
exports.DeleteBike = async (req, res) => {
	try {
		// const userId = req.user.id;
		const bike = await Bike.findById(req.params.id);

		if (!bike) return res.status(404).json({ Error: 'Bike not found' });

		// if (!isUserTheOwner(userId, region.owner)) {
		// 	res.status(400).json({
		// 		status: 'Failed, you are not the owner, you cant delete',
		// 	});
		// }

		const isDeleted = await bike.remove();
		if (!isDeleted) return res.status(404).json({ Error: 'Could not delete bike' });
		res.json({
			msg: 'bike successfully deleted ',
			id: req.params.id,
		});
	} catch (error) {
		res.status(400).json({
			status: 'Error',
			err: err.message,
		});
	}
};
