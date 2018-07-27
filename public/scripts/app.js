'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'p',
  null,
  'That is super cool.'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
