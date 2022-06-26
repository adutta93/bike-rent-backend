const mongoose = require('mongoose');

const mongoAtlasUri =
	'mongodb+srv://bike-app-db:Atl9NCzO52k4OLKT@cluster0.kdryf.mongodb.net/?retryWrites=true&w=majority';

// DB connection
const ConnectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoAtlasUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		if (!conn) {
			console.log(`Error connecting mongodb`);
		}
		console.log('MongoDB Successfully connected');
	} catch (error) {
		console.log(`Error is ${error}`);
		// exit process with fail
		process.exit(1);
	}
};

module.exports = ConnectDB;
