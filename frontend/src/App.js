import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './views/Main/Main';
import Login from './views/LoginSignup/LoginSignup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;