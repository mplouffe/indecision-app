console.log('App.js is running!');

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p> That is super cool.</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <div id="rootyTootyPointyShooty"></div>
    </div>
);

var templateTwo = (
    <div>
        <h1>Rendering a seperate template</h1>
        <p>Some text</p>
    </div>
);

var appRoot = document.getElementById('app');

// interesting... render overwrites the content without complaint.
ReactDOM.render(templateTwo, appRoot);


