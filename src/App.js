import React from 'react';
import CryptoList from './containers/CryptoList';
import Navigation from './components/Navigation/Navigation';
import Settings from './components/Settings/Settings';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
const App =() => {
  return (
    <div>
      {alert("for testing functionalities i used json placeholder since i have problems with coinmarket api key")}
      <Router>

          <Navigation />
          <Switch>
            <Route path="/home" exact component={CryptoList} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
          
          
      </Router>
        
    </div>
  );
}

export default App;
