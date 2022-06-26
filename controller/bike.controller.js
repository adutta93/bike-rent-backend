const Bike = require('../models/bike.model');

exports.addBike = async (req, res) => {
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
