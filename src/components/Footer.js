import React from 'react';

export default React.createClass({
  render: function () {
    return(
      <div>
        <footer className="text-muted">
          <div className="container">
            <p className="float-xs-right">
              <a href="#">Back to top</a>
            </p>
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting
              started guide</a>.</p>
          </div>
        </footer>
      </div>
    )
  }
})