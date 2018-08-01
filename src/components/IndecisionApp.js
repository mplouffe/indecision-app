import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    // EVENT HANDLERS
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };
    handleClearModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    // LIFECYCLE METHODS
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing, default data will catch it
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        const subtitle = 'Decisiveness for the Indecisive';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    handleClearModal={this.handleClearModal}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;