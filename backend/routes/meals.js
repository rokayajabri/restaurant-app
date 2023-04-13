const express = require("express");
const MealsModel= require("../models/MealsModel");
const CategoryModel= require("../models/CategoryModel");

const routes = express.Router();

routes.get("/all", (req, res) => {
    MealsModel.find().then((food) => {
            if (!food) {
                return res.status(404).json({ message: "No food found" });
            }
            return res.json(food);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

routes.get("/category", (req, res) => {
    CategoryModel.find().then((food) => {
        if (!food) {
            return res.status(404).json({ message: "No food found" });
        }
        return res.json(food);
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
});
module.exports = routes;