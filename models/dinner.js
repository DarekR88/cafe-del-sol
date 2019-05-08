const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let DinnerSchema = new Schema({
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
        default: false
    },
    items: [{}]
})

let Dinner = mongoose.model('Dinner', DinnerSchema)

module.exports = Dinner;