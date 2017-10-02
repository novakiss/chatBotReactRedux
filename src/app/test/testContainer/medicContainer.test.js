import React from 'react';
import {createMockStore} from 'redux-test-utils';
import {shallowWithStore} from 'enzyme-redux';

import MedicContainerConnected from '../../containers/MedicsContainer';

describe('test medicContainer', () => {
    it('test State', () => {
        const testMedics = {
            chatBot: {
                state: {
                    fetchData: {
                        response: {
                            medics: ['medic1', 'medic2']
                        }
                    }
                }
            }
        };
        const store = createMockStore(testMedics);
        const component = shallowWithStore(<MedicContainerConnected/>, store);
        expect(component.props().medics).toBe(testMedics.chatBot.state.fetchData.response.medics);
    })
});
