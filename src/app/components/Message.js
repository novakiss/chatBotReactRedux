import React from 'react';

class Message extends React.Component {
    render() {
        const {text,type} = this.props;
        console.log(this.props.type);
        return (
           <div>
               {(type === 'user') ? (<div style={user}>
                   {text}
               </div>):(<div style={bot}>
                   {text}
               </div>)}
           </div>
        );
    }
}
const user = {
    color: 'red',
};

const bot ={
  color : 'blue'
};
export default Message;