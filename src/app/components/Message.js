import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
const style = {
    user: {
        color: 'red'
    },
    bot: {
        color: 'blue'
    }
};

class Message extends React.Component {
    render() {
        const {text, type} = this.props;
        const {user, bot} = this.props.classes;
        return (
            <div>
                {(type === 'user') ? (<div className={user}>
                    {text}
                </div>) : (<div className={bot}>
                    {text}
                </div>)}
            </div>
        );
    }
}

Message.PropTypes ={
    text : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
};

export default withStyle(style) (Message);