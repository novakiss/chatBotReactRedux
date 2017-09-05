import React from 'react';
//import PropTypes from 'prop-types';
import Message from './Message';


class MessageInput extends React.Component{
    state = {
        messages: [],
        text: ''};

    handleChange =(e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit =(e) => {
        e.preventDefault();
        const d = new Date();
        const time = d.toISOString();
        const newItem = {
            messageUser : this.state.text,
            messageUserTime : time,
            userMessageID : Date.now()
        }; 
        this.props.sendMessage(newItem);
        //console.log(this.props.test);
        this.props.changeStep(this.props.currentStep);

        this.setState((prevState) => ({
            messages: prevState.messages.concat(newItem),
            text: ''
        }));
    };

    render () {
        return <div>
            <form onSubmit={this.handleSubmit} >
                <Message messages={this.state.messages} />
                <input onChange={this.handleChange} value={this.state.text} />
                <button type ="submit" disabled={this.props.disable}>Send</button>
            </form>
        </div>
    }
}

export default MessageInput;