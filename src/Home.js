import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'
import BottomBar from './BottomBar';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <div class="section-1">
                    {/* to flex it to row*/}
                    <div class="section-1-text">
                        <h1>RenewSenses</h1>
                        <span>Revolutionizing the<br/> way people with visual<br/> impairment experience<br/> the world.</span>
                        <br/><span class="sub-text">A new form of eyes-free independence
                        <br/>Scroll down to learn more</span>
                        <br/><NavLink class="section-1-link" to="./Contact">Contact Us</NavLink>
                    </div>
                    <img class="section-1-img" src="Brain Art_ Yellow with white background_.webp"/>
               </div>
               <div class="section_2">
                    <img class="background-img" src="/DSC00038.JPG"/>
                    <div class="text-block">
                        <h3 class="mustard">HOW IT WORKS</h3>
                        <ul class="ul-text">
                            <li>Download the EyeMusic app to your smart phone</li><br/>
                            <li>Connect the EyeMusic app via your smartphone to the Glasses</li>
                            <br/><li>Open and the app and you are ready to go!</li>
                        </ul>
                        <p>With the EyeMusic glasses, you'll now be able to recognize not only objects around you
                            and, but even the faces of your loved ones, through sound and speech.
                        </p>
                    </div>
                </div>
               <div class= "section-3">
                     {/* to flex it to row - white smoke*/}
                     <div class="section-3-text">
                         <img src="research_svg.PNG"/>
                         <h2>RESEARCH</h2>
                         <span >Research has consistently shown that areas in the visual cortex of people who are
                              blind from birth are activated using our working prototype.</span>
                     </div>
                     <div class="section-3-text">
                         <img src="technology_svg.PNG"/>
                         <h2>TECHNOLOGY</h2>
                         <span >With the help of computer vision, objects, faces and visual characteristics of
                              a surrounding scene is converted to a unique,  auditory method combining speech and musical notes.</span>
                     </div>
                     <div class="section-3-text">
                         <img src="impact_svg.PNG"/>
                         <h2>IMPACT</h2>
                         <span >There are 250 million people people worldwide who are visually impaired, which often 
                             results in a lower quality of life and lower rates of independence in daily life.
                             We hope to change that.</span>
                     </div>
               </div>
               <div class="section-4">
                    <div>
                        <img/>
                        <h2     >ENGAGE YOUR AUDITORY SENSES</h2    >
                        <span>Use sound to help you navigate and understand your surroundings independently.</span>
                        <br/><span>Our EyeMusic app uses AI to identify objects, faces and any potential obstacle in your way.</span>
                        <span>A.I. Cane</span>
                        <span>Object Recognition</span>
                        <span>EyeMusic App</span>
                    </div>
               </div>
               <div class="section_5">
                    <img/>
                    <div>
                        <span>"I could feel the world stretching out before me. It was as if my hand could reach much
                             further. As if the silent objects on the other side of the room came to life."</span>
                        <span>— H.M., 38 years old, congenitally blind</span>
                    </div>
                    <img/>
                    <div>
                        <span>"This experience is a whole new dimension. It is like you need to use this other
                             part of your brain that has been sleeping for years."</span>
                        <span>—  I.D. 56 years old, blind since 2003</span>
                    </div>
               </div>
               <div class="section_6">
                    <div>
                        <span>News</span>
                        <span>In just a short time, we're proud to have accomplished a lot. This is just the
                             start. We can't wait to see what's yet to come.</span>
                    </div>
               </div>
               <div class="slider">
               </div>
            </div>
         );
    }
}
 
export default Home;