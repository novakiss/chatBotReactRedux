import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

const style = {
    form: {
        textAlign: 'center',
    },
    button: {

    },
    input: {}
};

export class MessageInput extends React.Component {
    state = {
        message: '',
    };

    handleChange = (e) => {
        this.setState({message: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const d = new Date();
        const time = d.toISOString();
        const newItem = {
            messageUser: this.state.message,
            messageUserTime: time,
            userMessageID: Date.now()
        };
        this.props.sendToMessageContainer(newItem);

        this.props.changeStep(this.props.currentStep);

        this.props.sendToServer(this.state.message,this.props.questionId,this.props.score,this.props.userId,this.props.count);
        this.setState({message: ''});
    };

    render() {
        const {form} = this.props.classes;
        return <div>
            <form className={form}>
                <input onChange={this.handleChange} value={this.state.message} placeholder="type your answer here..."/>
                <button onClick={this.handleSubmit} type="submit" disabled={this.props.disable}>Send</button>
            </form>
        </div>
    }
}

MessageInput.propTypes = {
    sendToMessageContainer: PropTypes.func,
    currentStep: PropTypes.string,
    senToServer: PropTypes.func,
    changeStep: PropTypes.func,
    disable: PropTypes.bool.isRequired
};

export default withStyle(style)(MessageInput);