'use strict'

const { default: mongoose } = require("mongoose")

const connectString = `mongodb://localhost:27017/shopDEV`;

mongoose.connect(connectString).then((_) => console.log(`Mongodb connect successfully.`))
  .catch(err => console.error('Error connect'));

// dev
if (1 === 0) {
  mongoose.set('debug', true);
  mongoose.set('debug', { color: true });
}

module.exports = mongoose;
