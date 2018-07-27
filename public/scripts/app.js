'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        ' That is super cool.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    ),
    React.createElement('div', { id: 'rootyTootyPointyShooty' })
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Rendering a seperate template'
    ),
    React.createElement(
        'p',
        null,
        'Some text'
    )
);

var appRoot = document.getElementById('app');

// interesting... render overwrites the content without complaint.
ReactDOM.render(templateTwo, appRoot);
