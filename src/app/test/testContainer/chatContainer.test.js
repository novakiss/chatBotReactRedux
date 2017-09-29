import React from 'react';

import {connect} from 'react-redux';
import {createMockStore } from 'redux-test-utils'
import {shallowWithStore} from 'enzyme-redux';
import {ChatContainer} from '../../containers/ChatContainer';
describe('test ChatContainer',()=>{
    it('should render', () =>{
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
        const component = shallowWithStore(<ChatContainer/>,store);
        expect(component.props()).toBe(testState);
    })
});

const ReactComponent = () => (<div>dummy component</div>);
describe('state', () => {
    it('works', () => {
        const expectedState = 'expectedState';
        const mapStateToProps = (state) => ({
            state,
        });
        const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
        const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
        expect(component.props().state).toBe(expectedState);
    });
});

