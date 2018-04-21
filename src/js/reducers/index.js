import financeReducers from './financeReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    finance: financeReducers
});