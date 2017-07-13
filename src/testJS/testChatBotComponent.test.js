import React from 'react';
import ReactDom from 'react-dom';
import Messages from '../../src/app/modules/message/Messages';
import MessageList from '../../src/app/modules/message/MessageList';


test('Link changes the class when hovered', () => {
    it('renders without crashing',()=>{
        const div = document.createElement('div');
        ReactDom.render(<Messages/>,div);
    });
});