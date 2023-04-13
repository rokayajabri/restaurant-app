const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const CategorySchema = new Schema({
    idCategory :{ type:Number ,unique:true},
    strCategory: String,
    strCategoryThumb:String,
    strCategoryDescription:String

}, {collection: "category"})

module.exports = mongoose.model("category", CategorySchema , "category") 
    