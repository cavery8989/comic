import React from 'react';
import NavBar from './NavBar';

export default React.createClass({
  render: function () {
   return (
     <div>
        <NavBar/>
       {this.props.children}
     </div>
   )
  }
});