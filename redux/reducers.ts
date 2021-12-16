import { combineReducers } from 'redux';

 import { quotes } from './quotes/reducer'; 

const reducers = combineReducers({
   quotes, 
});

export default reducers;