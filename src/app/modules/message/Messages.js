import React from 'react';

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


    handleStartStopClick(){
        let startTime = new Date();

        setInterval(() => {
            this.setState(previousState => {
                return {timeElapsed:new Date() - startTime};
            });
        }, 100);
    }

    render () {
        return <div className="App">
            <form onSubmit={this.handleSubmit} >
                <MessageList messages={this.state.messages} />
                <input onChange={this.handleChange} value={this.state.text} />
                <button type ="submit">Send</button>
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