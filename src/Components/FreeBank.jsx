import React from 'react';
import './Profile.css';
import './Project.css';
import { withRouter } from "react-router-dom";


import pUser from  '../Data/PersonalUser.json';
import cUser from '../Data/CorporateUser.json';
import projects from '../Data/projects.json';
import user from '../Data/Users.json';

class FreeBank extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
      }
    
    render() {
        return(
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
                <div id="base-body">
                    <div id="projects freebank-base">
                        <p className="ProjectName">{projects.challanges[2].name}</p>
                        <hr className="name-break"></hr>
                        <p className="center">{projects.challanges[2].about}</p>
                        <p  className="icon-text"><img className="icon" src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/contacts1600.png" alt="Members: "></img>{projects.challanges[2].members}</p>
                        <div id="files" className="block-center">
                            <p className="title">Project files</p>
                            <p className="project-block "><img className="icon" src="https://www.shareicon.net/data/2015/09/03/95405_folder_1024x1024.png" alt="File"></img><span className="rise">Project-folder.zip</span></p>
                            <p className="project-block "><img className="icon" src="https://www.shareicon.net/data/2015/09/03/95405_folder_1024x1024.png" alt="File"></img><span className="rise">Project-folder.zip</span></p>
                        </div>
                        <div id="reviews" className="project-block block-center">
                            <p className="title">AI review</p>
                            <span><b>Generated :</b> <i> A solid project with a lot of potential but lacks backing and support for payment</i></span>
                            <hr id="span"></hr>
                            <div className="project-block review">
                                <img className="icon" src={user.profile} alt="user"></img> <span>{user.profiles[0].name}</span> <span>3/5</span>
                                <p>{user.profiles[0].review}</p>
                            </div>
                            <div className="project-block review">
                                <img className="icon" src={user.profile} alt="user"></img> <span>{user.profiles[1].name}</span> <span>3/5</span>
                                <p>{user.profiles[1].review}</p>
                            </div>
                            <div className="project-block review">
                                <img className="icon" src={user.profile} alt="user"></img> <span>{user.profiles[6].name}</span> <span>3/5</span>
                                <p>{user.profiles[6].review}</p>
                            </div>
                            <div className="project-block review">
                                <img className="icon" src={user.profile} alt="user"></img> <span>{user.profiles[3].name}</span> <span>3/5</span>
                                <p>{user.profiles[3].review}</p>
                            </div>
                            <div className="project-block review">
                                <img className="icon" src={user.profile} alt="user"></img> <span>{user.profiles[5].name}</span> <span>3/5</span>
                                <p>{user.profiles[5].review}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomBar">{cUser.slogan} <br/> <p className="inc-name">GoleTete.Inc</p></div>
            </div>
        )};
}
export default FreeBank;
