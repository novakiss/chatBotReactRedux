import React from 'react';
import withStyle  from 'react-jss';
import PropTypes from 'prop-types';
import MessageContainer from '../containers/MessageContainer';

const style = {
    questionInput:{
        color : 'blue'
    },
    message: {
        background: '#e5e5e5',
        width: '300px',
        height: '300px',
        overflow: 'scroll',
    }
};


class Chat extends React.Component{
    render(){
        const {message,questionInput} = this.props.classes;
        return (
            <div className={message}>
                <div className={questionInput}>Question Input?</div>
                {this.props.ids.map(id => <MessageContainer key ={id} id ={id}/>)}
            </div>)
    }
}

Chat.PropTypes = {
    ids: PropTypes.array.isRequired,
};
export default withStyle(style)(Chat);