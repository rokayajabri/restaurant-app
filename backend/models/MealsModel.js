const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const MealsSchema = new Schema({
    idMeal :{ type:Number ,unique:true},
    strMeal: String,
    strInstructions:String,
    strCategory:String,
    strMealThumb:String,
    strInstructions:String,
    strYoutube:String,
    strSource:String
}, {collection: "meals"})

module.exports = mongoose.model("meals", MealsSchema , "meals") 
    