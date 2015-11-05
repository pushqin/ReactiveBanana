import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <form {...this.props} className="rb-form">
        {this.props.children}
      </form>
    );
  }
});
