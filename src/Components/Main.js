import React from 'react';
import './Profile.css';

import pUser from  '../Data/PersonalUser.json';
import cUser from '../Data/CorporateUser.json';
import projects from '../Data/projects.json';

class Main extends React.Component {
    render(){
        
        return(
        <div id="base">
            <table id="banner">
                <tr>
                    <td width="50px"><img id="logo" src={cUser.logo} alt="LOGO"></img></td>
                    <td width="100px"><div id="corpName">{cUser.name}</div></td>
                    <td><div className="nav-buttons">
                        <button className="nav-button">Home</button>
                        <button className="nav-button">Challanges</button>
                        <button className="nav-button">Projects</button>
                    </div></td>
                    <td><a href="#profile"><img src={pUser.image} alt="Pfp" id="smallpp"></img></a></td>
                </tr>
            </table>
            <div id="projects">
                <p className="title"> My Projects</p>
                <ul>
                    <li><div className="project-block">
                        <p className="name">{projects.projects[0].name}</p>
                        <p className="about">{projects.projects[0].about}</p>
                    </div></li>
                    <li><div className="project-block">
                        <p className="name">{projects.projects[1].name}</p>
                        <p className="about">{projects.projects[1].about}</p>
                    </div></li>
                    <li><div className="project-block">
                        <p className="name">{projects.projects[2].name}</p>
                        <p className="about">{projects.projects[2].about}</p>
                    </div></li>
                    <li><div className="project-block">
                        <p className="name">{projects.projects[3].name}</p>
                        <p className="about">{projects.projects[3].about}</p>
                    </div></li>
                    <li><div className="project-block">
                        <p className="name">{projects.projects[4].name}</p>
                        <p className="about">{projects.projects[4].about}</p>
                    </div></li>
                </ul>
            </div>
            <div id="center">
                <div id="center-t">
                    <p className="title">Top projects and listings</p>
                    <ul>
                        <li><div className="challange-block">
                            <p className="name challange-name">{projects.challanges[2].name}</p>
                            <p className="about">{projects.challanges[2].about}</p> 
                            <div className="rating-stars">{projects.challanges[2].rating}</div>
                        </div></li>
                        <li><div className="project-block">
                            <p className="name project-name">{projects.projects[1].name}</p>
                            <p className="about">{projects.projects[1].about}</p>
                        </div></li>
                        <li><div className="project-block">
                            <p className="name project-name">{projects.projects[0].name}</p>
                            <p className="about">{projects.projects[0].about}</p>
                        </div></li>
                        <li><div className="challange-block">
                            <p className="name challange-name">{projects.challanges[0].name}</p>
                            <p className="about">{projects.challanges[0].about}</p> 
                            <div className="rating-stars">{projects.challanges[0].rating}</div>
                        </div></li>
                        <li><div className="challange-block">
                            <p className="name challange-name">{projects.challanges[3].name}</p>
                            <p className="about">{projects.challanges[3].about}</p> 
                            <div className="rating-stars">{projects.challanges[3].rating}</div>
                        </div></li>
                    </ul>
                </div>
            </div>
            <div id="bottomBar">{cUser.slogan} <br/> <p className="inc-name">GoleTete.Inc</p></div>
        </div>
    )};
}
export default Main;