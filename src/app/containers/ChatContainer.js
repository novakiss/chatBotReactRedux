import React  from 'react';
import {connect} from 'react-redux';
import {messageSelector} from '../selectors';

import Chat from '../components/Chat';

const ChatContainer = ({chatIDs}) => {
    return (<div>
        <Chat ids={chatIDs}/>
    </div>)

};

const mapStateToProps = (state) => {
    const {chatIDs} = messageSelector(state);
    return {chatIDs};
};

export default connect(mapStateToProps)(ChatContainer);