import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageInput extends Component{
    state= {
        message: [],
        text :'',
    };

    handleChange = (e) =>{
      this.setState({text : e.target.value});
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            text: this.state.text,
            id : Date.now()
        };
        this.setState((prevState) => ({
            messages: prevState.messages.concat(newItem),
            text: '',
        }));
        //this.props.send(this.state.text);
    };

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value = {this.state.text}/>
                <button type="submit" disabled={this.props.disable}>Senden</button>
            </form>
        </div>);
    }
}
/*
MessageInput.propTypes = {
  text : PropTypes.string.isRequire,
};
*/
export default MessageInput;