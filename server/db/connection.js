const monk = require('monk');
const db = monk('localhost/authTesting');

module.exports = db;