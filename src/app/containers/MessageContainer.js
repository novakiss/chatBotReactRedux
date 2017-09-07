import React  from 'react';
import {connect} from 'react-redux';
import {ANSWER_STEP} from '../constants';
import {stepSelector, messageSelector} from '../selectors';

import Message from '../components/Message';

class MessageContainer extends React.Component {
    render() {
        return (<div>
                {this.props.currentStep ===ANSWER_STEP ?
                    <Message key={this.props.id} text={this.props.text} type='user'/> :
                    <Message key={this.props.id} text ={this.props.text} type ='bot' />}
            </div>
        )
    };
}

const mapStateToProps = (state,props) => {
    const {currentStep} = stepSelector(state);
    const {text} = messageSelector(state).byID[props.id];
    return {currentStep, text};
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