import React from 'react';
import {shallow} from 'enzyme';
import {createMockStore } from 'redux-test-utils';
import {shallowWithStore} from 'enzyme-redux';

import ChatContainerConnected,{ChatContainer} from '../../containers/ChatContainer';
import Chat from '../../components/Chat';

describe('test ChatContainer',()=>{
    it('test State', () =>{
        const wrapper= shallow(<ChatContainer chatIDs={[1,3]}/>);
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
        const component = shallowWithStore(<ChatContainerConnected/>,store);
        expect(component.props().chatIDs).toBe(testState.chatBot.state.message.chatIDs);
        expect(wrapper.find(Chat).exists()).toBe(true);
        expect(wrapper.find(Chat).props().ids[1]).toBe(3);
    })
});