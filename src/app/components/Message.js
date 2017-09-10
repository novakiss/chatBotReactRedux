import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
const style = {
    user: {
        boxSizing: 'border-box',
        float: 'left',
        width: 'auto',
        maxWidth: '80%',
        position: 'relative',
        clear: 'both',

        background: '#95c2fd',
        filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=\'#95c2fd\', endColorstr=\'#bee2ff\')',

        border: 'solid 1px rgba(0,0,0,0.5)',
        borderRadius: '20px',
        boxShadow: ' inset 0 8px 5px rgba(255,255,255,0.65), 0 1px 2px rgba(0,0,0,0.2)',
        marginBottom :'20px',
        padding: '6px 20px',
        color: '#000',
        textShadow: '0 1px 1px rgba(255,255,255,0.8)',
        wordWrap : 'break-word'
    },
    bot: {
        boxSizing: 'border-box',
        float: 'right',
        width: 'auto',
        maxWidth: '80%',
        position: 'relative',
        clear: 'both',

        background: '#95c2fd',
        filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=\'#95c2fd\', endColorstr=\'#bee2ff\')',

        border: 'solid 1px rgba(0,0,0,0.5)',
        borderRadius: '20px',
        boxShadow: ' inset 0 8px 5px rgba(255,255,255,0.65), 0 1px 2px rgba(0,0,0,0.2)',
        marginBottom :'20px',
        padding: '6px 20px',
        color: '#000',
        textShadow: '0 1px 1px rgba(255,255,255,0.8)',
        wordWrap : 'break-word'
    }
};

class Message extends React.Component {
    messageRender = () =>{
        const {text, type,medicine,noQuestion} = this.props;
        const {user, bot} = this.props.classes;
        if(type=== 'user'){
            return (<div>
                <div className={user}>{text}</div>

            </div>);

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