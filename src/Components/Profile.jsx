import React from 'react';
import './Profile.css'

import projects from '../Data/projects.json';
import pUser from  '../Data/PersonalUser.json';
import user from '../Data/Users.json';
import cUser from '../Data/CorporateUser.json';

class Profile extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
      }

    render(){ return(
        <div id="base">
            <table id="banner">
                    <tr>
                        <td width="50px"><img id="logo" src={cUser.logo} alt="LOGO"></img></td>
                        <td width="100px"><div id="corpName">{cUser.name}</div></td>
                        <td><div className="nav-buttons">
                            <button className="nav-button" onClick={() => this.nextPath('/main')}>Home</button>
                            <button className="nav-button">Challenges</button>
                            <button className="nav-button">Projects</button>
                        </div></td>
                        <td><a href="#profile"><img src={pUser.image} alt="Pfp" id="smallpp"></img></a></td>
                    </tr>
                </table>
            <div id="banner"></div>
            <div id="userinfo">
                <div id="picture-name">
                    <img id="bigpp" src={pUser.image} alt="Logo.png" />
                    <p id="title">{pUser.name}</p>
                    <p id="about">{pUser.tag}</p>
                    <p id="about"><b>{pUser.aboutme}</b></p>
                </div>
                <div id="social">
                    <img className="icon" src="http://4.bp.blogspot.com/-Rm3giw7mj_8/VQLP1ZWAVwI/AAAAAAAAXw0/WPoJhWJu_aY/s1600/facebook-iOS-icon.png"></img>
                    <img className="icon" src="https://th.bing.com/th/id/R.4fd5bc151d032f2e16b92f032ae6fb02?rik=ReJQix%2fYrKgeXw&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f08%2fTwitter-logo-bird_logo_2012.png&ehk=%2fm%2fj3zBDsMNBXd4I77UkMaA%2bUg%2b6uE%2fBIUXoHnbw7SU%3d&risl=&pid=ImgRaw&r=0"></img>
                    <img className="icon" src="https://cdn1.iconfinder.com/data/icons/simple-icons/4096/github-4096-black.png"></img>
                </div>
                <div id="contact-info">
                    <p>{pUser.phone}</p>
                    <p>{pUser.mail}</p>
                    <p>Company: Strukovna skola</p>
                </div>
            </div>
            <div id="portfolio">
                <div id="reviews" className="project-block block-center profile-review">
                    <p className="title ">AI review</p>
                    <span><b>Generated :</b> <i> A solid project with a lot of potential but lacks backing and support for payment</i></span>
                    <hr id="span"></hr>
                    <div className="project-block review">
                        <img className="icon" src={user.profile} alt="user"></img> <span>{user.profiles[3].name}</span> <span>3/5</span>
                        <p>{user.profiles[3].review}</p>
                    </div>
                </div>
                <div className="project-block container-project">
                    <p className="container-text">My Projects</p>
                    <div className="project-block projects">
                        <p className="name">{projects.projects[2].name}</p>
                        <p className="about">{projects.projects[2].about}</p>
                    </div>
                    <div className="project-block projects">
                        <p className="name">{projects.projects[3].name}</p>
                        <p className="about">{projects.projects[3].about}</p>
                    </div>
                </div>
                <div className="project-block container-project">
                    <p className="container-text">Challanges</p>
                    <div className="project-block projects">
                        <p className="name">{projects.challanges[2].name}</p>
                        <p className="about">{projects.challanges[2].about}</p>
                    </div>
                    <div className="project-block projects">
                        <p className="name">{projects.challanges[3].name}</p>
                        <p className="about">{projects.challanges[3].about}</p>
                    </div>
                </div>
            </div>
        </div>
    )};
}
export default Profile;