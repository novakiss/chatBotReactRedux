import step from '../../reducers/step';
import {ANSWER_STEP, QUESTION_STEP, CHANGE_STEP} from '../../constants';

const action = {
    type: CHANGE_STEP,
    payload: QUESTION_STEP
};
describe('step reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(step(undefined, {})).toEqual(
            {
                currentStep: ANSWER_STEP,
            }
        );
    });
    it('test action type', () => {
        expect(step(undefined,action)).toEqual(
            {
                currentStep: QUESTION_STEP
            }
        )
    })
});
