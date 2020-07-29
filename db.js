const mongoose = require('mongoose');

const MONGO_USERNAME = 'davidajao';
const MONGO_PASSWORD = 'redroad328!';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'birthdays';


const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.set('useFindAndModify', false);
mongoose.connect(url, { useNewUrlParser: true });