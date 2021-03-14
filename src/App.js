import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CryptoList from './containers/CryptoList';
import Navigation from './components/Navigation/Navigation';
import Settings from './components/Settings/Settings';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
const App =() => {
  return (
    <div>
      
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
