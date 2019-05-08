const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AppetizersSchema = new Schema({
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

let Appetizers = mongoose.model('Appetizers', AppetizersSchema)

module.exports = Appetizers;