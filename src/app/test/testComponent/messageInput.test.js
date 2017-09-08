import React from 'react';
import {shallow} from 'enzyme';

import {MessageInput} from '../../components/MessageInput';

describe('test MessageInput', () => {
    const wrapper = shallow(<MessageInput disable={false}/>);//.first().shallow();
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
        expect(wrapper.state().message).toBe('');
        wrapper.find('input').simulate('change', {target: {value: 'test'}});
        expect(wrapper.state().message).toBe('test');
        wrapper.find('button').simulate('click',{preventDefault(){}}); //loai bo truong hop preventDefault undefined :https://github.com/airbnb/enzyme/issues/592
        expect(wrapper.state().message).toBe('');
    });
});