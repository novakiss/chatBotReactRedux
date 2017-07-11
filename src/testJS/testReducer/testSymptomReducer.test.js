import symptom from '../../app/modules/chatBot/ducks/symptom';

import {SYMPTOM_INPUT_MESSAGE, SYMPTOM_INPUT_FINISH} from '../../app/modules/chatBot/constants';

const symtomInputMessageTest = {
    type: SYMPTOM_INPUT_MESSAGE,
    payload: 'test message'
};

const finishSymptom = {
    type: SYMPTOM_INPUT_FINISH
};



describe('step reducer', () => {
    it('test InitialState', () => {
        expect(symptom(undefined, {})).toEqual(
            {
                symptompInputMessage: '',
                symptomInputID: 0,
                finishSymptom: false,
            }
        )
    });
    it('test Symptom Input Message', () => {
        expect(symptom(undefined, symtomInputMessageTest)).toEqual(
            {
                symptompInputMessage: 'test message',
                symptomInputID: 0,
                finishSymptom: false,
            }
        )
    });

    it('test Finish Input Symptom', () => {
        expect(symptom(undefined, finishSymptom)).toEqual(
            {
                symptompInputMessage: '',
                symptomInputID: 0,
                finishSymptom: true,
            }
        )
    });



});