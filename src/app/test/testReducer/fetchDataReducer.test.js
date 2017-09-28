import fetchData from '../../reducers/fetchData';

import {START, SUCCESS, ERROR, NEW_MESSAGE} from '../../constants';

const expectedInitialState = {
    success: false,
    error: false,
    loading: false,
    response: {},
};

const actionSuccess = {
    type: SUCCESS,
    payload: 'payload of Action'
};

const expectedStateIfSuccess = {
    success: true,
    error: false,
    loading: false,
    response: 'payload of Action'
};

const actionError = {
    type: ERROR
};

const expectedStateIfError = {
    success: false,
    error: true,
    loading: false,
    response: {}
};

const actionStart = {
    type: START
};

const expectedStateIfStart = {
    success: false,
    error: false,
    loading: false,
    response: {}
};

const testState = {
    success: true,
    loading: true,
    error: false,
    response: {
        data1: 'data1',
        data2: 'data2',
        data3: 'data3'
    }
};
const actionNewMessage = {
    type: NEW_MESSAGE,
};

const expectedStateIfNewMessage = {
    success: false,
    loading: false,
    error: false,
    response: {
        data1: 'data1',
        data2: 'data2',
        data3: 'data3'
    }
};

describe('fetchData reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(fetchData(undefined, {})).toEqual(expectedInitialState);
    });
    it('test State if start', () => {
        expect(fetchData(undefined, actionStart)).toEqual(expectedStateIfStart)
    });
    it('test State if success', () => {
        expect(fetchData(undefined, actionSuccess)).toEqual(expectedStateIfSuccess)
    });
    it('test State if error', () => {
        expect(fetchData(undefined, actionError)).toEqual(expectedStateIfError)
    });
    it('test State if new Message', () => {
        expect(fetchData(testState, actionNewMessage)).toEqual(expectedStateIfNewMessage)
    });
});