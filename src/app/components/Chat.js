import React from 'react';
import withStyle  from 'react-jss';
import PropTypes from 'prop-types';
import MessageContainer from '../containers/MessageContainer';

const style = {
    message: {
        background: '#e5e5e5',
        width: '300px',
        height: '300px',
        overflow: 'scroll',
    }
};


class Chat extends React.Component{
    render(){
        const {message} = this.props.classes;
        return (
            <div className={message}>
                {this.props.ids.map(id => <MessageContainer key ={id} id ={id}/>)}
            </div>)
    }
}

Chat.PropTypes = {
    ids: PropTypes.array.isRequired,
};
export default withStyle(style)(Chat);