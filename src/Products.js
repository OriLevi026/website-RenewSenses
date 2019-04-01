import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

class Products extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table>
                    <tr class="products-img">
                        <td><img src="/DSC00039.JPG"/></td>
                        <td><img src="/DSC00023.JPG"/></td>
                    </tr>
                    <tr class="products-link">
                        <td><NavLink to="/Products/EyeMusic">Learn More</NavLink></td>
                        <td><NavLink to="/Products/A-I-Cane">Learn More</NavLink></td>
                    </tr>
                    <tr class="products-headline">
                        <td><p>"See" Through Sound</p></td>
                        <td><p>Navigate Freely</p></td>
                    </tr>
                    <tr class="products-text">
                        <td>EyeMusic is a unique IP-protected algorithm that combines artificial intelligence
                             and sensory substitution to not only know where something is located, but to also.
                             understand how it appears.</td>
                        <td>The A.I. Cane consists of a camera attached to our customized hand-held device to 
                            help you navigate freely. The A.I. Cane uses the EyeMusic app to detect and identify 
                            objects, where they are located and how they appear.</td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default Products;