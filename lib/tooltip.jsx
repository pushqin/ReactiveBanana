import React from 'react';
import Resource from './resource.jsx';

export default React.createClass({
  render: function () {
    return (
      <span {...this.props} title={this.props.title} className="rb-tooltip"></span>
    );
  }
});
