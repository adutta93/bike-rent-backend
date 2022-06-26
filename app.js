const express = require('express');
const ConnectDB = require('./db/db');
const cors = require('cors');
const app = express();

/**
 * !Middleware
 */
app.use(cors());
app.use(express.json());

/**
 * !DB Connection
 */
ConnectDB();

/**
 * !Routes
 */

const bikeRoute = require('./routes/bike.router');
app.use('/api', bikeRoute);
/**
 * !Start Server
 */
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.clear();
	console.log('listening on port', port);
});
