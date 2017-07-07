import  reducer from '../app/modules/chatBot/reducer';
import {SYMPTOM_STEP, CHANGE_STEP,ANSWER_STEP} from '../app/modules/chatBot/constants';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                currentStep: SYMPTOM_STEP,
                stepDone: {},
                questionTypeId: 0,
                userId: 0,
                answer: []
            }
        );
    });
    const actionTest = {
        type: CHANGE_STEP,
        payload: ANSWER_STEP
    };
    it('currentStep Change', () => {
        expect(reducer(undefined, actionTest)).toEqual(
            {
                currentStep: ANSWER_STEP,
                stepDone: {},
                questionTypeId: 0,
                userId: 0,
                answer: []
            }
        );
    })
});
