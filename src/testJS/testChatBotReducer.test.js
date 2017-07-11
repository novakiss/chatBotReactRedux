import  reducers from '../app/reducer';


const expectedReducerModulTest = {
        modules: {
            chatBot: {
                step: {
                    currentStep: 'SYMPTOM_STEP',
                    stepDone: {},
                    finishConversation: false
                },
                symptom: {
                    symptompInputMessage: '',
                    symptomInputID: 0,
                    finishSymptom: false
                },
                messageUser: {
                    byId: {
                        '1': {
                            messageId: 1,
                            time: '',
                            text: ''
                        }
                    },
                    allIDS: []
                },
                question: {
                    byId: {
                        '1': {
                            messageId: 1,
                            time: '',
                            questionType: 0,
                            text: ''
                        }
                    },
                    allIDS: []
                }
            }
        }
    }
;

test('reducers', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual(expectedReducerModulTest);
});




