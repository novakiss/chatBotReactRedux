import React from 'react';
import {shallow} from 'enzyme';
import {ChatBot} from '../../components/ChatBot';
import ChatContainer from '../../containers/ChatContainer';
import MessageInputContainer from '../../containers/MessageInputContainer';
import MedicsContainer from '../../containers/MedicsContainer';

describe('test ChatBot', () =>{
   let wrapper;
    beforeEach(()=>{
     wrapper = shallow(<ChatBot classes={{}}/>);
   });
    it('test',()=>{
        expect(wrapper.find(ChatContainer).length).toBe(1);
        expect(wrapper.find(MedicsContainer).length).toBe(1);
        expect(wrapper.find(MessageInputContainer).length).toBe(1);
    });
});
