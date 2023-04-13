import { Routes, Route } from 'react-router-dom';
import NavBar from './conponents/home/NavBar'
import Footer from './conponents/home/Footer';
import Home from './conponents/home/Home';
import About from './conponents/home/About';
import Promotions from './conponents/home/Promo';
import Menu from './conponents/home/Menu';
import RestauMeals from './conponents/home/RestauMeals';
import MealsDetail from './conponents/home/MealsDetail';
import Login from './conponents/home/Login';
import Register from './conponents/home/Registrer';


function App() {
   

  
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path="/" >
              <Route index element={<Home/>} />
              <Route path="/Home/:strCategory" element={<RestauMeals />} />
        </Route>
        <Route path="/menu" >
              <Route index element={<Menu/>} />
              <Route path="/menu/:strCategory" element={<RestauMeals />} />
          </Route>
          <Route path="/MealsDetail/:idMeal" element={<MealsDetail />} />
        <Route  path="/about" element={ <About/>} />
        <Route  path="/promotions" element={ <Promotions/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/registre" element={<Register />} /> 
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
