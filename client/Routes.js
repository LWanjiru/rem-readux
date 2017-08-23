import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignUp from './components/signUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <App>
          <Switch>
            <Route exact path="/" component={Greetings} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </App>
      </div>
    );
  }
}

export default Routes;