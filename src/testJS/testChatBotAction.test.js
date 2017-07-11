import  {changeStep as changeStepAction, stepDone as stepDoneAction,symptomInputDone as symptomInputDoneAction} from '../app/modules/chatBot/actions';
import {SYMPTOM_STEP, CHANGE_STEP,STEP_DONE} from '../app/modules/chatBot/constants';

const step = SYMPTOM_STEP;

const expectedChangeStepAction = {
    type: CHANGE_STEP,
    payload: step
};
const expectedStepDoneAction = {
    type: STEP_DONE ,
    payload: step
};
//1.Mock the dispatch function with jest's built in mocking functions
const mockDispatch = jest.fn();

describe('test Action', () => {
    it('Step must change', () => {
        expect(changeStepAction(step)).toEqual(expectedChangeStepAction)
    });


    //2.Call the action
    stepDoneAction(SYMPTOM_STEP)(mockDispatch);

    it('test Step Done', () => {
        expect(mockDispatch).toHaveBeenCalledWith({type: STEP_DONE, payload : SYMPTOM_STEP})
    });

    //3.Check it was called with the correct arguement
    it('test SymtomInput Done',() =>{
       expect(symptomInputDoneAction()).toEqual(expectedStepDoneAction)
    });
});








