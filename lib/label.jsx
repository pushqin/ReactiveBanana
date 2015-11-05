import React from 'react';
import Resource from './resource.jsx';

export default React.createClass({
  render: function () {
    return (
      <label {...this.props} className="rb-label">{this.props.text}</label>
    );
  }
});
