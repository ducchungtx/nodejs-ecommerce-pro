'use strict'

const { default: mongoose } = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

const connectString = `mongodb://localhost:27017/shopDEV`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      // in lại các hoạt động khi query
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose.connect(connectString).then((_) => console.log(`Mongodb connect successfully.`, countConnect()))
      .catch(err => console.error('Error connect'));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;