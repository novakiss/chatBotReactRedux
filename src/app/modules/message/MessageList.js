import React, {Component} from 'react';

class MessageList extends Component {
    render(){
        return(
            <div>
                {this.props.messages.map(item => (<div key = {item.id}>{item.text}</div>))}
            </div>
        )  ;
    }
}

export default MessageList;
