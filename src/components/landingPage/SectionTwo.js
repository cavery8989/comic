import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className=" part-two">
        <div className="columns">
          <div className="column is-4">
            <p>col 1</p>

          </div>
          <div className="column is-4">col 2</div>
          <div className="column is-4">col 3</div>
        </div>
      </div>
    )
  }
})