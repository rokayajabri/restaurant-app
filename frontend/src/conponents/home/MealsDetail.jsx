import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Home.css";

const MealsDetail = () => {
  const [meals, setMeals] = useState([]);
  const { idMeal } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      console.log("Data : " + res.data);
      return res.data;
    };

    getData().then((f) => setMeals(f.meals));
  }, [idMeal]);

  return (
    <div className="produit">
      {meals.length > 0 && (
        <div className="meal-detail-container">
          <div className="image-container">
            <img src={meals[0].strMealThumb} alt="meal" className="meal-image" />
          </div>
          <div className="text-container">
            <h1>{meals[0].strMeal}</h1>
            <p className="intro-paragraph">
              <span>Introduction:</span> {meals[0].strInstructions}
            </p>
            <h3>Categorie de meals: {meals[0].strCategory}</h3>
            <h4>youtube : {meals[0].strYoutube}</h4>
            <h4>Source : {meals[0].strSource}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealsDetail;
