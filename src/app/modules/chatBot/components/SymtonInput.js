import React from 'react';
import {connect} from 'react-redux';
import {symptonInputDone as systomInputDoneAction} from '../actions';

class SymtonInput extends React.Component {
    onClickHandle = (e)=>{
        e.preventDefault();
        //this.props.goToQuestion();
    };

    render() {
        return <div>
            Sympton Input Success
            <button onClick={(e) => {this.props.goToQuestion}}>NEXT</button>
        </div>;
    }
}

export default (SymtonInput)

