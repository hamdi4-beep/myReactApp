import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;