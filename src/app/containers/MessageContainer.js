import React  from 'react';
import {connect} from 'react-redux';
import {ANSWER_STEP} from '../constants';
import {stepSelector, messageSelector} from '../selectors';

import Message from '../components/Message';

class MessageContainer extends React.Component{

    render(){
        return (<div>
            {this.props.chatIDs.map(i=> {
                if(this.props.currentStep === ANSWER_STEP){
                    return <Message key = {i} text = {this.props.byID[i].text} type ='user'/>
                }else {
                    return <Message key = {i} text = {this.props.byID[i].text} type = 'bot'/>
                }
            })}
            </div>
    )};

}

const mapStateToProps = (state) => {
    const {currentStep} = stepSelector(state);
    const {chatIDs, byID} = messageSelector(state);
    return {currentStep, chatIDs, byID};
};

export default connect(mapStateToProps)(MessageContainer);


/*
 const Container = ({ ids, byId }) => (<div>
 ids.map(id => <div style={{}}>
 <ChatMessageContainer id={id} />
 </div>
 </div>);

 const mapStateToProps = (state) => ({
 ids: state.messages.chatArray
 });

 const mapStateToProps = (state, props) => ({
 message: state.messages.byID[props.id]
 });

 connect(

 )
 */