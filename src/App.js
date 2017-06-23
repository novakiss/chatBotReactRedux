import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';


class App extends Component {
    state = {
        messages: [],
        text: ''};

    handleChange =(e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit =(e) => {
        e.preventDefault();
        let newItem = {
            text: this.state.text,
        };
        this.setState((prevState) => ({
            messages: prevState.messages.concat(newItem),
            text: ''
        }));
    };

    handleSubmit1 = (e) =>{
      e.preventDefault();

    };

    render() {
        console.log(this.state.messages);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React Chatbot</h2>
                </div>

                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button type ="submit">Send</button>
                    <MessageList messages={this.state.messages} />
                </form>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} />
                    <button> Test submit </button>
                </form>
            </div>
        );
    }
}


export default App;
