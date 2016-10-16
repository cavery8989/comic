import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

export default React.createClass({
  render: function () {
    return (
      <div className="landing-page hero">
        <SectionOne/>
        <SectionTwo/>
      </div>
    )
  }
})