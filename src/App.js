import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom';

import GlobalStyle from './GlobalStyles';
import Navigation from './Navigation';
import Landing from './Landing';
import About from './pages/About';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';
import UploadProduct from './pages/UploadProduct';
import Login from './forms/Login';
import Register from './forms/Register';
import Home from './Home';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import { auth } from './pages/utils/firebase';
import { useStateValue } from './pages/utils/StateProvider';

const App = () =>{
const [{}, dispatch] = useStateValue();
  useEffect(()=> {
    //will only run once when the app component loads...
 
    auth.onAuthStateChanged(authUser => {
      console.log("User is >>> ", authUser);

      if(authUser){
        //user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
  return (
    <>
    <GlobalStyle/>
  <Router>

    <Switch>
            <Route exact path="/" component={Landing}>
            </Route>
            <Route exact path="/home">
              <Navigation/>
              <Home/>
        <Footer/>

            </Route>     
            <Route exact path="/about">
            <Navigation/>

              <About/>
        <Footer/>

              </Route> 
              <Route exact path="/checkout">
            <Navigation/>

              <Checkout/>
        <Footer/>
            </Route> 
            <Route exact path="/products">
              <Navigation/>
              <Products/>

        <Footer/>

              </Route> 
            <Route exact path="/login">
            <Navigation/>

              <Login/>
        <Footer/>

              </Route> 
              
            <Route exact path="/register">
            <Navigation/>

              <Register/>
        <Footer/>
              
              </Route> 
            <Route exact path="/product:productId">
              <Navigation/>
                  <DetailProduct/>
              <Footer/>
            </Route>
            <Route exact path="/product/upload">
            <Navigation/>

              <UploadProduct/>
        <Footer/>

              </Route> 
    </Switch>
  </Router>
  </>
);


}
 
export default App;
