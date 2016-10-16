import React from 'react'
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import LandingPage from './components/landingPage/LandingPage';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={LandingPage}/>
          </Route>
        </Router>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));