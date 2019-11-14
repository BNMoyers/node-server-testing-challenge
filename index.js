//imports
require('dotenv').config();

const server = require('./server');

//port
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`** server running on port ${port} **`));
