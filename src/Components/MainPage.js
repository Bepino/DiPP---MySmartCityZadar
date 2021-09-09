import React from 'react';
import '../'
import pUser from  '../Data/PersonalUser.json';

class MainPage extends React.Component {
    render(){
        
        return(
        <div id="base">
            <div id="banner">
                <button>Home</button>
                <button>Challanges</button>
                <button>Projects</button>
                <a id="smallProfileP" href="#profile"><img src={pUser.image} alt="Pfp"></img></a>
            </div>
            <div id="projects">
                <ul>
                    <li><div>
                        {pUser.projects[0].name}<br/>
                        {pUser.projects[0].about}
                    </div></li>
                    <li><div>
                        {pUser.projects[1].name}<br/>
                        {pUser.projects[1].about}
                    </div></li>
                </ul>
            </div>
            <div id="center">
                <ul>
                    <div id="projects">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    )};
}
export default MainPage;