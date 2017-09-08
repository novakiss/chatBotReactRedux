import React from 'react';
import {shallow,mount} from 'enzyme';

import {MessageInput} from '../../components/MessageInput';



describe('test MessageInput', () => {
    let sendToMessageContainer;
    let changeStep;
    let sentToServer;
    let wrapper;

    beforeEach(() => {
        sendToMessageContainer = jest.fn();
        changeStep = jest.fn();
        sentToServer = jest.fn();
        wrapper = shallow(<MessageInput disable={true} sendToMessageContainer={sendToMessageContainer} changeStep={changeStep} sendToServer={sentToServer}/> );
    });

    //const wrapper = shallow(<MessageInput disable={false}/>);//.first().shallow();
    it('test div', () => {
        expect(wrapper.find('div').length).toBe(1);
    });

    it('test button', () => {
        expect(wrapper.find('button').length).toBe(1);
    });
    it('test input', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it('test Value State in Component', () => {
        expect(wrapper.state().message).toBe('');
    });

    it('test handleChange', () => {
        expect(wrapper.state().message).toBe('');
        wrapper.find('input').simulate('change', {target: {value: 'test'}});
        expect(wrapper.state().message).toBe('test');
    });

    it('test button click', () => {
        // jest.clearAllMocks();
        expect(wrapper.state().message).toBe('');
        wrapper.find('input').simulate('change', {target: {value: 'test'}});
        expect(wrapper.state().message).toBe('test');
        wrapper.find('button').simulate('click',{preventDefault(){}}); //loai bo truong hop preventDefault undefined :https://github.com/airbnb/enzyme/issues/592
        expect(wrapper.state().message).toBe('');
    });
});