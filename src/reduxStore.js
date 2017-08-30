import {combineReducers,createStore,applyMiddleware,compose}  from 'redux';
import thunk from 'redux-thunk';

import appReducer from './app/reducer';

export const reducer = combineReducers({app : appReducer });


axios.post('asidbjbuiasd', { symptomInput: (...) });

//To enable use applyMiddleware from redux
export const store = createStore(
    reducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
