import React from 'react';
import Resource from './resource.jsx';

// TODO: show error message for textbox

export default React.createClass({
  render: function () {
    return (
      <span {...this.props} className="rb-message">{this.props.text}</span>
    );
  }
});
