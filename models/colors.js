const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ColorSchema = new Schema({
    title: {
        type: String
    },
    backgroundColorOne: {
        type: String
    },
    backgroundColorTwo: {
        type: String
    },
    textColorOne: {
        type: String
    },
    textColorTwo: {
        type: String
    },
    deal: {
        type: String
    }
})

let Colors = mongoose.model('Colors', ColorSchema)

module.exports = Colors;