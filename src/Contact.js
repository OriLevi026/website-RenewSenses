import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>Contact Us</p>
                <div>
                    <p>We look forward to hearing from you!</p>
                    <div>
                        <form action="/action_page.php">
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" />
                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit" />
                        </form>
                    </div>
                   
                    {/* <table>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table> */}
                </div>
            </div>
         );
    }
}
 
export default Contact;