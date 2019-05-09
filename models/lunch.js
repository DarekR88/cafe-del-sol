const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let LunchSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    items: [{}]
})

let Lunch = mongoose.model('Lunch', LunchSchema)

module.exports = Lunch;