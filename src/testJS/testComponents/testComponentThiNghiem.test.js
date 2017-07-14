import React from 'react';
import ComponentThiNghiem from '../../app/modules/message/ComponentThiNghiem';
import renderer from 'react-test-renderer';

import {shallow,mount} from 'enzyme';

describe('Link changes the class when hovered', () => {
    const wrapper = shallow(<ComponentThiNghiem/>);

    it('get Values State in Components', () => {
        expect(wrapper.state().data).toBe('first State')
    });

    //Check props
    /*
    it('Test Props ', () => {
        expect(wrapper.props().testProps).toBe('some things wrong here')
    });
    */

    it('test h4',()=>{
        expect(wrapper.find('h4').length).toBe(1);  //So luong tag trong render

        expect(wrapper.find('h4').at(0).text()).toBe('Test Component');  // Noi dung ben trong tag h4 o vi tri dau tien
    });

    it ('test button' ,() =>{
        expect(wrapper.state().data).toBe('first State');
        wrapper.find('button').simulate('click');
        expect(wrapper.state().data).toBe('second State')
    });

    //full render

    it('full Render' ,() =>{
        const wrapper = mount(<ComponentThiNghiem/>)
    });

});