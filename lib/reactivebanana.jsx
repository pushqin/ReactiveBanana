import React from 'react';
import TextBox from './textbox.jsx';
import Form from './form.jsx';
import Label from './label.jsx';
import Resource from './resource.jsx';
import Tooltip from './tooltip.jsx';
import Message from './message.jsx';

export default React.createClass({
  render: function() {
    return (
      <Form className="reactivebanana">
        <h1><Resource resKey="HelloWorld"/></h1>
        <TextBox type="text" value="cool" text="nice" />
      </Form>
    );
  }
});


