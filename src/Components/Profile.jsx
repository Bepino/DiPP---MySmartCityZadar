import React from 'react';
import ReactDOM from 'react-dom'
import './Profile.css'

class Profile extends React.Component {
    render(){ return(
        <div id="base">
            <div id="banner"></div>
            <div id="userinfo">
                <div id="picture-name">
                    <img src="" alt="Logo.png" />
                    <p id="name">Marin Cilic</p>
                    <p id="tag"></p>
                </div>
                <div id="social"></div>
                <div id="contact-info"> </div>
            </div>
            <div id="portfolio"></div>
            <div id="projects"></div>

        </div>
    )};
}
export default Profile;