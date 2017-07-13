import axiosFetchDataReducer from '../../app/modules/chatBot/ducks/axiosFetchData';
import {ERROR_DATA, POST_DATA, FETCH_DATA,UPDATE_DATA} from  '../../app/modules/chatBot/constants';


const initialState = {
    getData: {},
    postData: {},
    error: {},
    updatedData: false,
    updateData: {}
};

const testFetchData1 = {
    type: FETCH_DATA,
    payload: {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
};

const expectedFetchData = {
    getData: {
        "1":
            {
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "userId": 1
            }

    },
    postData: {},
    error: {},
    updatedData: false,
    updateData: {}
};

const testFetchData2 = {
    type: FETCH_DATA,
    payload: {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
};

const expectedFetchData2Time = {
    getData: {
        "1":
            {
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "userId": 1
            }
        ,
        "2":
            {
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                "id": 2,
                "title": "qui est esse",
                "userId": 1
            }

    },
    postData: {},
    error: {},
    updatedData: false,
    updateData: {}
};

const testPostData = {
    type: POST_DATA,
    payload: {
        id: 1,
        firstName: 'abc',
        lastName: 'xyz'
    }
};

const expectedPostData = {
    getData: {},
    postData: {
        1: {
            id: 1,
            firstName: 'abc',
            lastName: 'xyz'
        }
    },
    error: {},
    updatedData: false,
    updateData: {}
};

const testPostData2 = {
    type: POST_DATA,
    payload: {
        id: 2,
        firstName: 'ABC',
        lastname: 'XYZ'
    }
};

const expectedPostData2 = {
    getData: {},
    postData: {
        1: {
            id: 1,
            firstName: 'abc',
            lastName: 'xyz'
        },
        2: {
            id: 2,
            firstName: 'ABC',
            lastname: 'XYZ'
        }
    },
    error: {},
    updatedData: false,
    updateData: {}
};

const testErrorData = {
    type: ERROR_DATA,
    payload: "error will be displayed here"
};

const expectedErrorData = {
    getData: {},
    postData: {},
    error: "error will be displayed here",
    updatedData: false,
    updateData: {}
};

const testUpdateData = {
    type: UPDATE_DATA,
    payload: {
        name: 'Test Name',
        id: 101
    }
};

const expectedUpdateData = {
    getData: {},
    postData: {},
    error: {},
    updatedData: true,
    updateData: {
        name: 'Test Name',
        id: 101
    }

};


describe('test Axios', () => {

    it('test string destruct', () => {
        const bla = 'asdasd';
        console.log(...bla);
    });

    it('get InitialState', () => {
        expect(axiosFetchDataReducer(undefined, {})).toEqual(initialState)
    });
    it('test Fetch Data 1.time', () => {
        expect(axiosFetchDataReducer(undefined, testFetchData1)).toEqual(expectedFetchData)
    });

    it('test Fetch equal Data ', () => {
        expect(axiosFetchDataReducer(expectedFetchData, testFetchData1)).toEqual(expectedFetchData)
    });

    it('test Fetch Data 2.time', () => {
        expect(axiosFetchDataReducer(expectedFetchData, testFetchData2)).toEqual(expectedFetchData2Time)
    });

    it('test Post Data', () => {
        expect(axiosFetchDataReducer(undefined, testPostData)).toEqual(expectedPostData)
    });

    it('test Post Data 2.time', () => {
        expect(axiosFetchDataReducer(expectedPostData, testPostData2)).toEqual(expectedPostData2)
    });

    it('test Error Data', () => {
        expect(axiosFetchDataReducer(undefined, testErrorData)).toEqual(expectedErrorData)
    });

    it ('test Update Data ', () =>{
        expect ( axiosFetchDataReducer(undefined,testUpdateData)).toEqual(expectedUpdateData);
    });


});

