import fetchData from '../../reducers/fetchData';

import {START,SUCCESS,ERROR} from '../../constants';

const expectedInitialState = {
    success: false,
    error: false,
    loading:false,
    response: null,
};

const actionSuccess = {
    type: SUCCESS,
    payload : 'payload of Action'
};

const expectedStateIfSuccess = {
    success: true,
    error: false,
    loading: false,
    response: 'payload of Action'
};

const actionError = {
  type : ERROR
};

const expectedStateIfError = {
    success: false,
    error : true,
    loading: false,
    response: null
};

const actionStart =  {
  type: START
};

const expectedStateIfStart ={
    success: false,
    error: false,
    loading: false,
    response : null
};


describe('fetchData reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(fetchData(undefined, {})).toEqual(expectedInitialState);
    });
    it('test State if start', () => {
        expect(fetchData(undefined,actionStart)).toEqual(expectedStateIfStart)
    });
    it('test State if success', () => {
        expect(fetchData(undefined,actionSuccess)).toEqual(expectedStateIfSuccess)
    });
    it('test State if error', () => {
        expect(fetchData(undefined,actionError)).toEqual(expectedStateIfError)
    });
});