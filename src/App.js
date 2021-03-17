import React , {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CryptoList from './containers/CryptoList';
import Navigation from './components/Navigation/Navigation';
import Settings from './components/Settings/Settings';
import {connect} from 'react-redux';
import {fetchCrypto} from './actions/cryptoActions';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import FormImpl from 'react-bootstrap/esm/Form';
const App =({fetchedCrypto , selectedCurrency}) => {


  useEffect(() => {
    
    fetchedCrypto(selectedCurrency);
    
  }, [])

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

const mapStateToProps = state => {
  return {
      cryptoList: state.fetching ,
      selectedCurrency: state.fetching.currency
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchedCrypto: (curr) => dispatch(fetchCrypto(curr))
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
