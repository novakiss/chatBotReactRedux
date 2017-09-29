import React from 'react';
import {shallow} from 'enzyme';

import {Medics} from '../../components/Medics';

describe('test Medics', () => {

    let wrapper;
    const medics = [
        {
            id: 1,
            name: 'name1'
        },
        {
            id: 2,
            name: 'name2'
        },
        {
            id: 3,
            name: 'name4'
        }];
    beforeEach (() => {
        wrapper = shallow(<Medics medics={medics} classes ={{}}/>);
    });

    it('will render three li', () => {
        expect(wrapper.find('li').length).toBe(3);
    });

    it('should return "name4" with 3. Element',()=>{
        expect(wrapper.find('li').nodes[2].props.children).toBe("name4");
    });

    it('should return zero li',()=>{
        const wrapper2 = shallow(<Medics medics={[]} classes ={{}}/>);
        expect(wrapper2.find('li').length).toBe(0);
    });

});