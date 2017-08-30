import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => <div> text
</div>;

Message.propTypes = {
    text: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { id }) => state.messages.id;

connect()

class MessageList extends Component {
    render() {
        return (
            <div>
                {this.props.messages.map(id => {
                    return (<Message key={id} id={id} />)
                })}
            </div>
        );
    }
}

export default (MessageList);
