const path = require('path');


exports.resolve=(p='')=>path.join(__dirname, '..', p);