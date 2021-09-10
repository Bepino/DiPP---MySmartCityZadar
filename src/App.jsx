import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ActionPage from './Components/ActionPage'
import Profile from './Components/Profile'
import Main from './Components/Main';
import FreeBank from './Components/FreeBank';
import CovidBot from './Components/CovidBot';

function App() {

  return (
    <Router>
      <Route exact path="/ActionPage" component={ActionPage}/>
      <Route exact path="/Profile" component={Profile}/>
      <Route exact path="/Main" component={Main}/>
      <Route exact path="/FreeBank" component={FreeBank}/>
      <Route exact path="/CovidBot" component={CovidBot}/>
    </Router>
  );
}

export default App;
