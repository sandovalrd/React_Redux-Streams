import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form'; // npm install redux-form@8.1.0
import streamReducer from './streamReducer'; 

export default combineReducers({
    auth : authReducer,
    form : formReducer,
    streams : streamReducer
});