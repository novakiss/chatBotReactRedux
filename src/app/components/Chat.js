import React from 'react';
import withStyle  from 'react-jss';
import PropTypes from 'prop-types';
import MessageContainer from '../containers/MessageContainer';
import bot from '../images/bot.png'
const style = {
    questionInput: {
        boxSizing: 'border-box',
        //float: 'right',
        width: 'auto',
        maxWidth: '80%',
        position: 'relative',
        clear: 'both',

        background: '#95c2fd',
        filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=\'#95c2fd\', endColorstr=\'#bee2ff\')',

        border: 'solid 1px rgba(0,0,0,0.5)',
        borderRadius: '20px',
        boxShadow: ' inset 0 8px 5px rgba(255,255,255,0.65), 0 1px 2px rgba(0,0,0,0.2)',
        marginBottom: '20px',
        padding: '6px 20px',
        color: '#000',
        textShadow: '0 1px 1px rgba(255,255,255,0.8)',
        wordWrap: 'break-word'
    },
    message: {
        padding: '40px 20px',
        height: '400px',
        margin: '0 auto',
        overflow: 'auto',
    },
    test: {
        display:'flex',
        alignItems:'flex-end',
        webkitBoxPack: 'end',
        justifyContent:'flex-end'
    }

};

class Chat extends React.Component {
    render() {
        const {message, questionInput,test} = this.props.classes;

        return (
            <div className={message}>
                <div className={test}>
                    <div className={questionInput}>Question Input?</div>
                    <img src={bot} alt="avatar" width='56px' height='56px'/>
                </div>
                {this.props.ids.map(id => <MessageContainer key={id} id={id}/>)}
            </div>)
    }
}

Chat.PropTypes = {
    ids: PropTypes.array.isRequired,
};
export default withStyle(style)(Chat);