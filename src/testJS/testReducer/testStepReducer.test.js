import step from '../../app/modules/chatBot/ducks/step';
import {SYMPTOM_STEP, CHANGE_STEP, ANSWER_STEP, FINISH, STEP_DONE,QUESTION_STEP} from '../../app/modules/chatBot/constants';


const stepSymtomDoneTest = {
    type: STEP_DONE,
    payload: SYMPTOM_STEP
};

const stepQuestionStep = {
    type: STEP_DONE,
    payload: QUESTION_STEP
};

const stepChangeTest = {
    type: CHANGE_STEP,
    payload: ANSWER_STEP
};

const finishConversationTest={
  type: FINISH
};
const SymptomDone = {
    currentStep: SYMPTOM_STEP,
    stepDone: {"SYMPTOM_STEP": true},
    finishConversation: false
};

describe('step reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(step(undefined, {})).toEqual(
            {
                currentStep: SYMPTOM_STEP,
                stepDone: {},
                finishConversation: false
            }
        );
    });

    it('test Step Symptom done', () => {
        expect(step(undefined, stepSymtomDoneTest)).toEqual(
            {
                currentStep: SYMPTOM_STEP,
                stepDone: {"SYMPTOM_STEP": true},
                finishConversation: false
            }
        );
    });

    it('test 2 Step Done',()=>{
       expect(step(SymptomDone, stepQuestionStep)).toEqual(
           {
               currentStep: SYMPTOM_STEP,
               stepDone: {"SYMPTOM_STEP": true,"QUESTION_STEP": true},
               finishConversation: false
           }
       )
    });

    it('test Change Step to Answer Step ', () => {
        expect(step(undefined, stepChangeTest)).toEqual(
            {
                currentStep: ANSWER_STEP,
                stepDone: {},
                finishConversation: false
            }
        );
    });

    it('test finish conversation',() =>{
       expect (step(undefined,finishConversationTest)).toEqual(
           {
               currentStep: SYMPTOM_STEP,
               stepDone: {},
               finishConversation: true
           }
       )
    });
});