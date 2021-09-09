import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ActionPage from './Components/ActionPage'
import Profile from './Components/Profile'

function App() {

  return (
    <Router>
      <Route exact path="/ActionPage" component={ActionPage}/>
      <Route exact path="/Profile" component={Profile}/>
    </Router>
  );
}

export default App;
