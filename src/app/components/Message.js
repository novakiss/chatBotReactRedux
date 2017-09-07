import React from 'react';

class Message extends React.Component {
    render() {
        const {text,type} = this.props;
        console.log(this.props.type);
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