import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

const style = {
    form: {
        position: 'relative'
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        borderBottomRightRadius: '10px',
        cursor: 'pointer',
        outline: 'none',
        padding: '14px 16px 12px 16px',
        position: 'absolute',
        right: '0',
        top: '0'
    },
    input: {
        border: '0',
        borderRadius: '0',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTop: '1px solid #eee',
        fontSize: '14px',
        opacity: '1',
        outline: 'none',
        padding: '16px 52px 16px 10px',
        width: '100%',
        webkitAppearance: 'none'

    }
};

export class MessageInput extends React.Component {
    state = {
        message: '',
    };

    handleChange = (e) => {
        this.setState({message: e.target.value});
    };

    handleSubmit = (e) => {
        const {sendToMessageContainer,changeStep,sendToServer,questionId, score, userId, count, questionType, question} = this.props;
        e.preventDefault();
        const d = new Date();
        const time = d.toISOString();
        const newItem = {
            messageUser: this.state.message,
            messageUserTime: time,
            userMessageID: Date.now()
        };
        sendToMessageContainer(newItem);
        sendToServer(this.state.message, questionId,score,userId,count,questionType,question);
        changeStep();
        this.setState({message: ''});
    };

    render() {
        const {input, button, form} = this.props.classes;
        return <div className={form}>
            <form>
                <input className={input} onChange={this.handleChange} value={this.state.message}
                       placeholder="Type your answer here..."/>
                {this.state.message === '' ?
                    <button className={button} onClick={this.handleSubmit} type="submit" disabled={true}>
                        Senden
                    </button> :
                    <button className={button} onClick={this.handleSubmit} type="submit" disabled={this.props.disable}>
                        Senden
                    </button>}
            </form>
        </div>
    }
}

MessageInput.propTypes = {
    sendToMessageContainer: PropTypes.func,
    currentStep: PropTypes.string,
    sendToServer: PropTypes.func,
    changeStep: PropTypes.func,
    disable: PropTypes.bool.isRequired
};

export default withStyle(style)(MessageInput);