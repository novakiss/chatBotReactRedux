import React from 'react';
import {createMockStore } from 'redux-test-utils'
import {shallowWithStore} from 'enzyme-redux';

import ChatContainer from '../../containers/ChatContainer';

describe('test ChatContainer',()=>{
    it('should render', () =>{
        const testState = {
            chatBot: {
                state: {
                   message :{
                       chatIDs: [1,2]
                   }
                }
            }
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<ChatContainer/>,store);
        expect(component.props().chatIDs).toBe(testState.chatBot.state.message.chatIDs);
    })
});