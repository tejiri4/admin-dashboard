// react libraries
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';

// styles
import './App.scss';

// components
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import TransferSection from './pages/TransferSection';
import BalanceSection from './pages/BalanceSection';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNavbar />
        <div className="app__right">
        <TopNavbar />   
          <Switch >
            <Route exact path="/transfers" component={TransferSection} />
            <Route exact path="/balances"  component={BalanceSection} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
