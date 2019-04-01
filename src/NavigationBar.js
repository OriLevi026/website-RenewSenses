import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
                <div class="nav-bar">
                    <img class="nav-bar-logo" src="/biglogo.jpg" />
                    
                    <NavLink class="nav-bar-link" to="/">HOME</NavLink>
                    <NavLink class="nav-bar-link" to="/Products">PRODUCTS</NavLink>
                    <NavLink class="nav-bar-link" to="/Videos">VIDEOS</NavLink>
                    <NavLink class="nav-bar-link" to="/Press">PRESS</NavLink>
                    <NavLink class="nav-bar-link" to="/Training">TRAINING</NavLink>
                    <NavLink class="nav-bar-link" to="/Team">TEAM</NavLink>
                    <NavLink class="nav-bar-link" to="/Contact">CONTACT</NavLink>
                    
                </div>
            {/* <div class="blackLine"/> */}
            </div>
         );
    }
}
 
export default NavigationBar;