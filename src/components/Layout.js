import React from 'react';
import NavBar from './NavBar';
import LandingPage from './landingPage/LandingPage';
import Footer from './Footer';

export default React.createClass({
  render: function () {
    return (
      <div>
        <NavBar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
});