const {Schema, model} = require('mongoose')

const loadSchema = new Schema({
    orgin: String,
    destination: String,
    pickUp: String,
    sizeWeight: String,
    Miles: Number,
    equipmentType: String,
    creditScore: String,
    details: String
})

const Load = model