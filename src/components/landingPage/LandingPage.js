import React from 'react'
//var image = require('./../../../public/assets/images/comicBackground.jpg');

export default React.createClass({
  render: function () {
    return (
      <div>
        <section className="jumbotron text-xs-center home-header">
          <div className="container header-text-container">
            <h1 className="jumbotron-heading">Search, Swap, Share</h1>
            <p className="lead">Comic ex allows you to trade your unwanted comics and graphic novels for shiny new ones
              that you haven't read. And its FREE!</p>
            <p>
              <a href="#" className="btn btn-secondary">Get started!</a>
            </p>
          </div>
        </section>

        <div className="album text-muted">
          <div className="container">

            <div className="row">
              <div className="col-sm-12">
                <div className="card-group">
                  <div className="card">
                    <div className="card-block">
                      <h4 className="card-title">Dig out your unwanted comics</h4>
                      <h6 className="card-subtitle">and post them to your collection</h6>
                    </div>
                    <img src='http://i0.wp.com/bossfight.co/wp-content/uploads/2015/03/boss-fight-stock-images-photos-free-photography-71.jpg' alt="Chalk board"/>
                      <div className="card-block">
                        <p className="card-text">
                          Add your unwanted comics acnd grapic novels to your online collection quickly and easily using their ISBN numbers.

                        </p>

                      </div>
                  </div>
                  <div className="card">
                    <div className="card-block">
                      <h4 className="card-title">Browse others collection</h4>
                      <h6 className="card-subtitle">and set up trades</h6>
                    </div>
                    <img src="http://www.vdatingtips.com/wp-content/uploads/2014/06/woman_online_profile.jpg" alt="Working on laptop"/>
                      <div className="card-block">
                        <p className="card-text">
                          Look for a particular title or browse another users collection. When you found something you like make and offer or wait for the offers to come to you.
                        </p>

                      </div>
                  </div>
                  <div className="card">
                    <div className="card-block">
                      <h4 className="card-title">Seal the deal</h4>
                      <h6 className="card-subtitle">and wait for the postman</h6>
                    </div>
                    <img src="https://pastprologue.files.wordpress.com/2012/07/waiting_cat-wallpaper-1920x1080.jpg" alt="Programming"/>
                      <div className="card-block">
                        <p claclassNamess="card-text">
                          When both sides have agreed share postal information and wait for you sweet sweet comic to arrive.
                        </p>

                      </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
})