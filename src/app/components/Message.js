import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

import botImg from '../images/bot.png';
import userImg from '../images/user.jpg';

const style = {
    user: {
        boxSizing: 'border-box',
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
    bot: {
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
    testBot: {
        display: 'flex',
        alignItems: 'flex-end',
        webkitBoxPack: 'end',
        justifyContent: 'flex-end'
    },
    testUser: {
        display: 'flex',
        justifyContent: 'flex-start',
        webkitBoxPack: 'start',
        alignItems: 'flex-end'
    },

    a: {
        background: '#6E48AA',
        borderRadius: '22px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
        color: '#fff',
        display: 'inline-block',
        fontSize: '14px',
        padding: '12px',
        '&:hover': {
            opacity: '.7'
        }
    },

    li: {
        webkitAnimation: 'Lmuha .3s ease forwards',
        animation: 'Lmuha .3s ease forwards',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '2px'
    },

    ul: {
        margin: '2px 0 12px 0',
        padding: '0 6px'
    }

};

class Message extends React.Component {
    state = {
        answered: false,
    };

    onClick = (input) => {
        const {getUserMessage, changeStep, getResponse, questionId, score, userId, count, question, questionType} = this.props;
        const d = new Date();
        const time = d.toISOString();
        const mess = {
            messageUser: input,
            messageUserTime: time,
            userMessageID: Date.now()
        };
        getUserMessage(mess);
        changeStep();
        getResponse(input, questionId, score, userId, count, questionType, question);
        this.setState({answered: true});
    };

    render() {
        const {text, type, medics, noQuestion, questionType, questionId} = this.props;
        const {user, bot, testBot, testUser} = this.props.classes;

        if (type === 'user') {
            return (<div className={testUser}>
                <img src={userImg} alt="avatar" width='56px' height='56px'/>
                <div className={user}>{text}</div>
            </div>);

        } else if (type === 'bot' && !noQuestion && questionType === 1) {
            return (<div className={testBot}>
                    <div className={bot}> {text}</div>
                    <img src={botImg} alt="avatar" width='56px' height='56px'/>
                </div>
            );
        } else if (type === 'bot' && !noQuestion && questionType === 2) {
            return (
                <div className={testBot}>
                    <div className={bot}> {text}. Geben Sie bitte eine Zahl.</div>
                    <img src={botImg} alt="avatar" width='56px' height='56px'/>
                </div>
            );
        } else if (type === 'bot' && !noQuestion && questionType === 3 && questionId !== 13) {
            return (<div>
                    <div className={testBot}>
                        <div className={bot}> {text}. Wählen Sie eine Auswahl!</div>
                        <img src={botImg} alt="avatar" width='56px' height='56px'/>
                    </div>

                    {!this.state.answered ? (
                        <div>
                            <ul className={this.props.classes.ul}>
                                <li className={this.props.classes.li}>
                                    <a className={this.props.classes.a} onClick={() => this.onClick("Ja")}>
                                        Ja
                                    </a>
                                </li>
                                <li className={this.props.classes.li}>
                                    <a className={this.props.classes.a} onClick={() => this.onClick("Nein")}>
                                        Nein
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
            );
        } else if (type === 'bot' && !noQuestion && questionType === 3 && questionId === 13) {
            return (<div>
                <div className={testBot}>
                    <div className={bot}> {text}. Wählen Sie eine Auswahl!</div>
                    <img src={botImg} alt="avatar" width='56px' height='56px'/>
                </div>
                {!this.state.answered ? (
                    <div>
                        <ul className={this.props.classes.ul}>
                            <li className={this.props.classes.li}>
                                <a className={this.props.classes.a} onClick={() => this.onClick("Männlich")}>
                                    Männlich
                                </a>
                            </li>
                            <li className={this.props.classes.li}>
                                <a className={this.props.classes.a} onClick={() => this.onClick("Weiblich")}>
                                    Weiblich
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>);
        } else if (!medics && noQuestion) {
            return (<div className={testBot}>
                <div className={bot}>Bitte gehen Sie zum Apotheke!!!</div>
                <img src={botImg} alt="avatar" width='56px' height='56px'/>
            </div>)
        } else {
            return (<div className={testBot}>
                <div className={bot}>Keine Frage mehr. Ihr beste Medikament
                    ist {medics[Object.keys(medics)[0]].name}</div>
                <img src={botImg} alt="avatar" width='56px' height='56px'/>
            </div>);
        }
    }
}

Message.PropTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default withStyle(style)(Message);