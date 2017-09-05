import React from 'react';

class Message extends React.Component {
    render() {
        const {text,type} = this.props;
        return (
           <div>
               {(type === 'user') ? (<div className="user">
                   {text}
               </div>):(<div className="bot">
                   {text}
               </div>)}
           </div>
        );
    }
}
export default Message;