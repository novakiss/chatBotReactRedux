import React from 'react';
import ComponentThiNghiem from '../../app/modules/message/ComponentThiNghiem';
import renderer from 'react-test-renderer';

import {shallow,mount} from 'enzyme';

describe('Link changes the class when hovered', () => {
    const wrapper = shallow(<ComponentThiNghiem/>);

    it('get Values State in Components', () => {
        expect(wrapper.state().data).toBe('first State')
    });


    it('test h4',()=>{
        expect(wrapper.find('h4').length).toBe(1);  //So luong tag trong render

        expect(wrapper.find('h4').at(0).text()).toBe('Test Component');  // Noi dung ben trong tag h4 o vi tri dau tien
    });

    it ('test button' ,() =>{
        expect(wrapper.state().data).toBe('first State');
        wrapper.find('button').simulate('click');
        expect(wrapper.state().data).toBe('second State')
    });

    //https://stackoverflow.com/questions/41732318/test-setting-text-value-with-react-and-enzyme

    it ('test input onchange ', () =>{
        expect(wrapper.state().text).toBe('');
        wrapper.find('input').simulate('change',{target:{value: 'test'}});
        expect(wrapper.state().text).toBe('test');
    })



});