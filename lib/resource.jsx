import React from 'react';
//import Resource from 'resource';

export default React.createClass({
  render: function () {
    var {resKey, resSubKey} = this.props;

    // TODO: get resource from infrajs
    //var res = Resource.get(resKey, resSubKey);

    return (<span>
      {this.props.resKey}
    </span>);
  }
});
