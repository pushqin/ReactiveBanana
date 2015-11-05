import React from 'react';
import Label from './label.jsx';
import Message from './message.jsx';

export default React.createClass({
  // TODO: set state obj

  render: function () {
    return (
      <div className="rb-form-control">
        <Label {...this.props}/>
        <input {...this.props} className="rb-textbox" ref="input" key="input"/>
        <Message />
      </div>
    );
  }
});
