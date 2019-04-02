import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";


import NavigationBar from './NavigationBar'
import Home from './Home'
import BottomBar from './BottomBar'
import ErorrPage from './ErorrPage'
import Products from './Products'
import Videos from './Videos'
import Press from './Press'
import Training from './Training'
import Team from './Team'
import Contact from './Contact'


// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
            <div>
              <NavigationBar/>
              <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/Products" component={Products} exact></Route>
                <Route path="/Videos" component={Videos} exact></Route>
                <Route path="/Press" component={Press} exact></Route>
                <Route path="/Training" component={Training} exact></Route>
                <Route path="/Team" component={Team} exact></Route>
                <Route path="/Contact" component={Contact} exact></Route>
                <Route component={ErorrPage} exact/>
              </Switch>
              <BottomBar/>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
