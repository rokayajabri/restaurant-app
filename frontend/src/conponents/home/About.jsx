import React, { useEffect } from 'react';
import "./Home.css";
function About(props) {
  

  return (
    <section className="about-section">
      <div className="heading">
        <span>about us</span>
        <h3>good quality dishes</h3>
      </div>

      
        <div className="row">
          <div className="about-content">
            <img src={require("../images/taco-chefcartoon.png")} alt="" />
            <div className="about-content-text">
                    <p>Our restaurant QFood was founded by Quang (a 5 Michelin stars chef) in 2002 in Vietnam. After
                        that, thanks to the support of our customers, our brand has been popularized globally in markets
                        such as Australia, USA, Canada, UK, France, Germany, Belgium, Russia, China, Japan,
                        Singapore, ... Mexican-style meals, the products that we deliver to customers are always the
                        best quality products.</p>
                    <p>Customers can eat at the restaurant to experience the Mexican atmosphere or can order food to be
                        delivered to their homes.</p>
                </div>
          </div>
        </div>
      

      <div className="row">
        <div className="about-article">
          <h3>food brings people together</h3>
        </div>
      </div>

      <div className="row gallery">
        <div className="wrapper">
          <img src={require("../images/taco-2.jpg")} alt="" />
          <img src={require("../images/taco-4.jpg")} alt="" />
          <img src={require("../images/burrito-6.jpg")} alt="" />
          <img src={require("../images/burrito-2.jpg")} alt="" />
          <img src={require("../images/burrito-3.jpg")} alt="" />
          <img src={require("../images/nachos-1.jpg")} alt="" />
          <img src={require("../images/nachos-2.jpg")} alt="" />
          <img src={require("../images/nachos-3.jpg")} alt="" />
          <img src={require("../images/dessert-2.jpg")} alt="" />
          <img src={require("../images/dessert-6.jpg")} alt="" />
        </div>
      </div>
    </section>
  );
}


export default About;
