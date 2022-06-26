const mongoose = require('mongoose');
const bikeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		brand: {
			type: String,
			required: true,
			trim: true,
		},
		rent: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		offer: { type: Number },
		// bikePictures: [{ img: { type: String } }],
		// bikeImg: { type: String, required: true },
		reviews: [
			{
				userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
				review: String,
			},
		],
		updatedAt: Date,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Bike', bikeSchema);
