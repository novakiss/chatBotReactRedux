import React from 'react';
import {shallow} from 'enzyme';

import {Chat} from '../../components/Chat';
import MessageContainer from '../../containers/MessageContainer';

describe('test Chat', () => {
    let wrapper;
    let ids;
    beforeEach(() => {
        ids = [1, 2, 4];
        wrapper = shallow(<Chat ids={ids} classes={{}}/>);
    });
    //check component has one img-tag
    it('test image-Tag', () => {
        expect(wrapper.find('img').length).toBe(1);
    });

    //check render 3 times Message
    it('should render three Messages Components', () => {
        expect(wrapper.find(MessageContainer).length).toBe(3);
    });

    //check id of 2. MessageContainer after Render
    it('should render the 3. MessageContainer with Value 4', () => {
        expect(wrapper.find(MessageContainer).nodes[2].props.id).toBe(4);
    });
});