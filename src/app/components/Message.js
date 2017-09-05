import React from 'react';


class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.messages.map(item => (
                    <div key={item.userMessageID}>{item.messageUser}</div>
                ))}
            </div>
        );
    }
}
export default Message;