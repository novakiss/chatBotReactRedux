import React from 'react';
import logo from '../../../logo.svg';
import MessageList from './MessageList';

import {newAnswer as newAnswerAction} from '../chatBot/actions';
import {selectChatBot} from  '../chatBot/selectors';

import {connect} from 'react-redux';

class Messages extends React.Component{
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
            id : Date.now()
        };
        this.setState((prevState) => ({
            messages: prevState.messages.concat(newItem),
            text: ''
        }));

        this.props.newAnswer(this.state.text);

    };

    render () {
        return <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React Chatbot</h2>
            </div>
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} value={this.state.text} />
                <button type ="submit">Send</button>
                <MessageList messages={this.state.messages} />
            </form>
        </div>
    }
}


const mapStateToProps = {newAnswer : newAnswerAction};

const mapDispatchToProps = (state) =>{
    const {answer} = selectChatBot(state);
    return {answer};
};

export default connect (mapDispatchToProps,mapStateToProps) (Messages);