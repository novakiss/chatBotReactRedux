import  {combineReducers}  from 'redux';

import step from './ducks/step';
import symptom from './ducks/symptom';
import messageUser from './ducks/messageUser';
import question from './ducks/question';
import axiosFetchData from './ducks/axiosFetchData';

export default combineReducers({
    step, symptom,messageUser,question,axiosFetchData
})