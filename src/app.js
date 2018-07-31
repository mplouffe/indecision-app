class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Decisiveness for the Indecisive';
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>            
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('What Should I Do clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll() {
        alert('Remove All Clicked.');
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                <ol>
                { this.props.options.map((option) => <Option key={option} option={option} />) }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
            </div>
        );
    }
}

class AddOption extends React.Component {
    addOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
        e.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input name="option" type="text" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));