# ReactiveBanana

Get the AMD module located at `reactivebanana.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactiveBanana': 'reactivebanana'
  }
});

require(['react', 'ReactiveBanana'], function(React, ReactiveBanana) {

  React.render(React.createElement(ReactiveBanana), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
