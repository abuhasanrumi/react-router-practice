import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './Components/Error/Error';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetail/>
          </Route>

          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
