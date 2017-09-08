import React from 'react';
import {shallow} from 'enzyme';

import ChatBot from '../../components/ChatBot';

describe('test ChatBot',()=>{
    const wrapper = shallow(<ChatBot/>).first().shallow();
   it('test Anzahl div', () =>{
       expect(wrapper.find('div').length).toBe(3);
   });
});