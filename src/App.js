import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";


import NavigationBar from './NavigationBar'
import Home from './Home'
import BottomBar from './BottomBar'
import ErorrPage from './ErorrPage'


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
