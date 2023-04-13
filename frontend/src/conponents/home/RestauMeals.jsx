import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestauMeals = () => {
  const [meals, setMeals] = useState([]);
  const { strCategory } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
      console.log(res.data); // affiche les données retournées par l'API
      return res.data.meals;
    };
  
    getData().then((m) => {
      if (m && m.length > 0) {
        setMeals(m);
      }
    });
  }, [strCategory]);
  

  return (
    <div className="list">
      {meals.length === 0 ? (
        <h1>Liste de meals vide</h1>
      ) : (
        meals.map((item,index) =>
        <div key={index}>
            <h3>{item.strMeal}</h3>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <p>{item.strCategory}</p>
        </div>
        
        )
      )}
    </div>
  );
};

export default RestauMeals;