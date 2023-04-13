import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMeals } from '../../redux/MenuSlice';
import { useNavigate } from 'react-router-dom';
import { getCategorie } from '../../redux/CategorieSlice';
export default function Menu(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const listmeals = useSelector(state => state.menu.meals);
    const listrestaurant = useSelector(state => state.categorie.categorie);
    
    useEffect(() => {
        dispatch(getMeals());
        dispatch(getCategorie())
    }, [dispatch]);

    console.log("meals:", listmeals);

    const filteredMeals = listmeals.meals
  ? listmeals.meals.filter((meal) => {
        return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    })
  : [];

    return(
      <div>
         <div class="heading">
            <span>menu</span>
            <h3>our special dishes</h3>
        </div>
         <input type="text" placeholder="Search categories and names" onChange={(e) => setSearchTerm(e.target.value)} />
         <div className="menu-category">

         {listrestaurant.length === 0 ? (
            <h1>Liste des restaurant est vide</h1>
          ) : (
            listrestaurant.categories.map((item,index) =>
              <div class="box2" key={index}>
                <h3 onClick={() => navigate(`/menu/${item.strCategory}`)} >{item.strCategory}</h3>
              </div>
            )
          )}
        </div>
        <div className="list">
           
            {filteredMeals.length === 0 ? (
              <h1>Liste des restaurant est vide</h1>
            ) : (
                filteredMeals.map((item,index) =>
                  <div key={index}>
                      <h3>{item.strMeal}</h3>
                      <img src={item.strMealThumb} alt={item.strMeal} />
                      <p>{item.strCategory}</p>
                      <button onClick={() => navigate(`/MealsDetail/${item.idMeal}`)}>Plus de details</button>
                  </div>
              )
            )}
        </div>
        </div>
    )
}
