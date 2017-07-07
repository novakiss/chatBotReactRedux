import  {addTodo,changeStepTest as addTextAction,changeStep as changeStepAction} from '../app/modules/chatBot/actions';
import {SYMPTOM_STEP,CHANGE_STEP } from '../app/modules/chatBot/constants';


describe('test all Action' , ()  =>{
    describe('test Addtodo', () => {
        it('should create an action to add a todo', () => {
            const text = 'Finish docs';
            const expectedAction = {
                type: 'ADD_TODO',
                text
            };
            expect(addTodo(text)).toEqual(expectedAction)
        })
    });


    describe('test addText', () => {
        it('should create an action to add a todo', () => {
            const step = SYMPTOM_STEP;
            const expectedAction = {
                type: CHANGE_STEP,
                payload :step
            };
            expect(addTextAction(step)).toEqual(expectedAction)
        })
    });

    describe('test changeStep', () => {
        it('Step must change', () => {
            const step = SYMPTOM_STEP;
            const expectedAction = {
                type: CHANGE_STEP,
                payload: step
            };
            expect(changeStepAction(step)).toEqual(expectedAction)
        })
    });
});








