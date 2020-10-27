import React from 'react'
import FoodList from './Components/FoodList'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <Router>
    <div className="App">
    <Navbar/>

    <Switch>
      <Route path="/home" exact component={Home}/>
     <Route path="/portfolio" exact component={FoodList}/>
     <Route path="/contact" exact component={Contact}/>
     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
