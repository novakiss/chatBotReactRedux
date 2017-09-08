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
    messageRender = () =>{
        const {text, type,medicine,noQuestion} = this.props;
        const {user, bot} = this.props.classes;
        if(type=== 'user'){
            return <div className={user}>{text}</div>
        }else if(type=== 'bot' && !noQuestion){
            return <div className={bot}> {text}</div>
        }else {
            return <div className={bot}>Keine Frage mehr. Ihre beste Medikament ist {medicine}</div>
        }
    };

    render() {
        return (<div>
            {this.messageRender()}
            </div>
        )

    }
}

Message.PropTypes ={
    text : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
};

export default withStyle(style) (Message);