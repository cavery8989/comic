import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded navbar-full">
          <a className="navbar-brand" href="#">Comic Ex</a>
          <div className="nav navbar-nav float-xs-right sign-in-up">
            <button type="button" className="btn btn-primary">Sign UP</button>
            <button type="button" className="btn btn-primary">Sign In</button>
          </div>
        </nav>
      </div>
    )
  }
})