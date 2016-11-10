import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="section-two">
        <div className="tile is-ancestor">
          <div className="tile is-5 is-vertical is-parent">
            <div className="tile is-child box panel-one">
              <p className="title">One</p>
              <p>Sing up for free</p>
            </div>
            <div className="tile is-child box panel-two">
              <p className="title">Two</p>
              <p>Post your unused comics</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box panel-three">
              <p className="title">Three</p>
              <p>Set up trades with people all over the world!!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})