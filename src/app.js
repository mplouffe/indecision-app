console.log('App.js is running!');

const app = {
    title: "Indecision App",
    subtitle: "Decisions for the indecisive...",
    options: []
}

const getOptions = (options) => {
    if(options.length > 0){
        return <p>Here are your options</p>
    }
    return <p>No options</p>
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if(option) {
        app.options.push(option);
    }

    e.target.elements.option.value = '';
    render();
};

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    // JSX - Javascript XML
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                { app.options.map(option => <li key={option}>{option}</li>) }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(jsx, appRoot);
}


const appRoot = document.getElementById('app');

render();