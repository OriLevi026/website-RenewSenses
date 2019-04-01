import React, { Component } from 'react';

class Team extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>Meet The Team</p>
                <table>
                    <tr class="team-img">
                        <td><img src="/Tomer.webp"/></td>
                        <td><img src="/Amir_BW.webp"/></td>
                        <td><img src="/Serj.webp"/></td>
                        <td><img src="/Nomi.webp"/></td>
                    </tr>
                    <tr class="team-name">
                        <td>Tomer Behor<br/>Co-Founder & CEO</td>
                        <td>Professor Amir Amedi<br/>Co-Founder & CSO</td>
                        <td>Serj Smorodinsky<br/>VP R&D</td>
                        <td>Nomi Teplitsky<br/>Director, Communicatons & Partnerships</td>
                    </tr>
                    <tr class="team-mail">
                        <td><a href="mailto:tomer@renewsenses.com">tomer@renewsenses.com</a></td>
                        <td><a href="mailto:renewsenses@gmail.com">renewsenses@gmail.com</a></td>
                        <td><a href="mailto:serj@renewsenses.com">serj@renewsenses.com</a></td>
                        <td><a href="mailto:nomi@renewsenses.com">nomi@renewsenses.com</a></td>
                    </tr>
                    <tr class="team-linkedin">
                        <td><a href="https://www.linkedin.com/in/tomer-behor-28b765140/" target="_blank">
                            <img src="linkedin.png"/></a></td>
                        <td><a href="https://www.linkedin.com/in/amir-amedi-26038a18/" target="_blank">
                            <img src="linkedin.png"/></a></td>
                        <td><a href="https://www.linkedin.com/in/serjsmor/" target="_blank">
                            <img src="linkedin.png"/></a></td>
                        <td><a href="https://www.linkedin.com/in/nteplitsky/" target="_blank">
                            <img src="linkedin.png"/></a></td>
                    </tr>
                    <tr class="team-text">
                        <td>Tomer worked closed with Professor Amedi, conducting multisensory research through
                            cutting edge technology and specifically researched the area of assistive technology
                            for the blind - research that yielded one of the patents used in RenewSenses.</td>
                        <td>Amir is an internationally acclaimed brain scientist with 15 years of experience in 
                            the field of brain plasticity and multisensory integration. He has a particular 
                            interest in visual rehabilitation. He is an Full Professor at the Department of Medical
                             Neurobiology at the Hebrew University. </td>
                        <td>Prior to joining the RenewSenses team, Serj received his Master of Science degree in
                             Bioinformatics and worked in several startups as an Android developer and was a lead
                              developer at SafeDK Ltd.</td>
                        <td>Nomi is bringing her Fundraising and Communications experience to RenewSenses to leverage
                             new partnerships. Previously, Nomi lived and worked in NYC, where she completed her MPA
                              degree and gained experience in Corporate Social Responsibility, Fundraising and 
                              Communications.</td>
                    </tr>
                </table>
                <div>
                    <p>Advisory Committee & Contributors</p>
                    <table>
                        <tr>
                            <td><p class="advisory-name">Brian Charlson</p>
                                <br/>Director of Technology <br/>Carroll Center for the Blind</td>
                            <td><p class="advisory-name">Benedetta Heimler</p>
                                <br/>Amedi Lab <br/>The Hebrew University of Jerusalem</td>
                            <td><p class="advisory-name">Ophir Netzer</p>
                                <br/>Amedi Lab <br/>The Hebrew University of Jerusalem</td>
                        </tr>
                        <tr>
                            <td><p class="advisory-name">Boaz Zilberman</p>
                                <br/>Founder & CEO <br/>Project-RAY</td>
                            <td><p class="advisory-name">Galit Buchs</p>
                                <br/>Amedi Lab <br/>The Hebrew University of Jerusalem</td>
                            <td><p class="advisory-name">Shahar Luski</p>
                                <br/>Amedi Lab <br/>The Hebrew University of Jerusalem</td>
                        </tr>
                        <tr>
                            <td><p class="advisory-name">Elon Littwitz</p>
                                <br/>Rafael Ltd. </td>
                        </tr>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Team;