"use strict";

console.log('App.js is running!');

var app = {
    title: "Indecision App",
    subtitle: "Decisions for the indecisive...",
    options: []
};

var getOptions = function getOptions(options) {
    if (options.length > 0) {
        return React.createElement(
            "p",
            null,
            "Here are your options"
        );
    }
    return React.createElement(
        "p",
        null,
        "No options"
    );
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value.trim();

    if (option) {
        app.options.push(option);
    }

    e.target.elements.option.value = '';
    render();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var render = function render() {
    // JSX - Javascript XML
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(jsx, appRoot);
};

var appRoot = document.getElementById('app');

render();
