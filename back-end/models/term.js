const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchedTermSchema = new mongoose.Schema({
    searched_term: String,
    count: Number,
    user: String,
});

module.exports = mongoose.model('terms', searchedTermSchema);