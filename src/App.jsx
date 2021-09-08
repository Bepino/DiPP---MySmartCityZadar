import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ActionPage from './Components/ActionPage'
function App() {

  return (
    <Router>
      <Route exact path="/ActionPage" component={ActionPage}/>
    </Router>
  );
}

export default App;
