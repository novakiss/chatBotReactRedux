import {FETCH_DATA, POST_DATA} from '../../app/modules/chatBot/constants';

import {actionMustTest as actionMustTestAction} from '../../app/modules/chatBot/actions';

const a = {type: POST_DATA, payload: 'test1'};
const b = {type: FETCH_DATA, payload: 'test2'};


describe('test Try Hard', () => {
    it('test action', () => {
        expect(actionMustTestAction('test1', 'test2')).toEqual(
            {a, b}
        )
    });
});


