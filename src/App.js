import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './componenets/About/About';
import FoodDetails from './componenets/FoodDetails/FoodDetails';
import Header from './componenets/Header/Header';
import NotFound from './componenets/NotFound/NotFound';
import Offers from './componenets/Offers/Offers';
import Showcase from './componenets/Showcase/Showcase';
// So we need five things to make router...first we need BrowserRouter..we can change it Router and the Swich to switch between routes ..then Route where will be property name 'path' and we will define the path and in Router we will place out component which we defined as path in Route.Two different rules for default page we will give a prop named 'exact' in Route and the we can define the path as '/'..this means by defaut the site will loaded in this path and it will show the page what we will give in it's Route..Another system is path='*'...this means all path without the given paths we generallyl give this to show an error page..So that's it mainly we need this five things to decalare a route in component..
function App() {

  return (

    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/"
          >
            <Showcase></Showcase>
          </Route>
          <Route exact path="/foods">
            <Showcase></Showcase>
          </Route>
          <Route exact path='/offers'>
            <Offers></Offers>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route path='/foods/:foodId'>
            <FoodDetails></FoodDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div >
  );
}

export default App;