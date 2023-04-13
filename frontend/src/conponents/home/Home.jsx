import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHomeData } from '../../redux/HomeSlice';
import { Link } from 'react-router-dom';
import { getCategorie } from '../../redux/CategorieSlice';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import "../images/style.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useSelector(state => state.home);
  const listrestaurant = useSelector(state => state.categorie.categorie);
  useEffect(() => {
    dispatch(getCategorie());
    dispatch(fetchHomeData());
  },[dispatch]);
  console.log("rest:", listrestaurant);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="home-main">
        <div className="content">
          <span>welcome foodies</span>
          <h3>Original taste from Mexico 😋</h3>
          <p>We guarantee to use fresh food with the best quality. Customers will enjoy Mexican cuisine with
              explosive, sophisticated flavors.</p>
          < Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
        </div>
        <div className="image">
          <img src={require("../images/FiveWeeks_Chantepie_nov2021_BurgerAfrica.jpg")} alt="" className="home-img" />
          
        </div>
      </div>
      
      <div className="home-category">
        {listrestaurant.length === 0 ? (
            <h1>Liste des restaurant est vide</h1>
          ) : (
            listrestaurant.categories.map((item,index) =>
              <div class="box" key={index}>
                <img src={item.strCategoryThumb} alt={item.strCategory} onClick={() => navigate(`/home/${item.strCategory}`)} />
                <h3>{item.strCategory}</h3>
              </div>
            )
          )}
        </div>
      <div className="home-banner">
        <div className="grid-banner row">
          <div className="grid col-md-4">
            <img  src={require("../images/dis-1.jpg")} alt="" />   
            <div className="content">
              <span>special offer</span>
              <h3>upto 50% off</h3>
              <Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
            </div>
            </div>
            <div className="grid col-md-4">
            <img  src={require("../images/dis-2.png")} alt="" />  
              <div class="content center">
                <span>special offer</span>
                <h3>upto 25% extra</h3>
                <Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
              </div>
              </div>

                <div className="grid col-md-4">
                  <img  src={require("../images/dis-3.jpg")} alt="" />  
                    <div className="content">
                        <span>limited offer</span>
                        <h3>100% cashback</h3>
                        <Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
                    </div>
                </div>
          </div>
        </div>

        <div class="home-about">
            <div className='image'>
                <img src={require("../images/about-img.jpg")} alt=""/>
            </div>
            <div className="content">
                <span>why choose us?</span>
                <h3 className="title">what's make our food delicious!</h3>
                <p>Food to customers is always guaranteed of the best quality. Our dishes are made by chef Quang (a 5
                    Michelin stars chef), promising to bring explosive, delicate, impressive flavors. Our delivery
                    service is very professional, customers can enjoy the same quality at the restaurant</p>
                <Link onClick="scrollToTop()" to="about" className="btn">read more</Link>

                <div className="icons-container">
                    <div className="icons">
                        <img src={require("../images/serv-1.png")} alt=""/>
                        <h3>fast delivery</h3>
                    </div>
                    <div className="icons">
                        <img src={require("../images/serv-2.png")} alt=""/>
                        <h3>fresh food</h3>
                    </div>
                    <div className="icons">
                        <img src={require("../images/serv-3.png")} alt=""/>
                        <h3>best quality</h3>
                    </div>
                    <div className="icons">
                        <img src={require("../images/serv-4.png")} alt=""/>
                        <h3>24/7 support</h3>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  );
};

export default Home;
