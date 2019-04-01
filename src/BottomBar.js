import React, { Component } from 'react';

class BottomBar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <table>
                    <tr>
                        <td>ABOUT US</td>
                        <td>STAY UP-TO-DATE</td>
                    </tr>
                    <tr>
                        <td>We combine cutting-edge technology and years of research to make an impact. Our 
                            EyeMusic combines sensory substitution and computer vision in a wearable device 
                            to help people who are visually impaired live a more independent life. Our IP-Protected .
                            technologies provide users with the ability to detect surrounding objects and where they 
                            are located, while providing a new perceptual experience of a visual landscape</td>
                        <td>
                            <p>Want to try our EyeMusic app or test our wearable devices? Join our mailing list to
                                 hear all about our latest updates.</p>
                            <input width="200px" type="email-adress" placeholder="Email address" name="mail" required ></input>
                            <br/>
                            <input type="submit" value="Subscribe"></input>
                        </td>
                    </tr>
                </table>
                <p>© 2019 RenewSenses Ltd.</p>
            </div>
          );
    }
}
 
export default BottomBar;
