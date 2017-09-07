import React from 'react';
//import PropTypes from 'prop-types';
//import Message from './Message';


class MessageInput extends React.Component{
    state = {
        message: '',
        };

    handleChange =(e) => {
        this.setState({message: e.target.value});
    };

    handleSubmit =(e) => {
        e.preventDefault();
        const d = new Date();
        const time = d.toISOString();
        const newItem = {
            messageUser : this.state.message,
            messageUserTime : time,
            userMessageID : Date.now()
        };
        this.props.sendToMessageContainer(newItem);

        this.props.changeStep(this.props.currentStep);

        this.props.sendToServer(this.state.message);

        this.setState((prevState) => ({
            message: ''
        }));


    };

    render () {
        return <div>
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} value={this.state.message} placeholder="type your answer here..."/>
                <button type ="submit" disabled={this.props.disable}>Send</button>
            </form>
        </div>
    }
}

export default MessageInput;