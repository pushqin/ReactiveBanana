import React from 'react/addons';
import ReactiveBanana from '../lib/reactivebanana.jsx';

describe('ReactiveBanana', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactiveBanana/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('reactivebanana');
  });
});
