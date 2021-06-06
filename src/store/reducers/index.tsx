import {combineReducers} from 'redux';
import authReducer from './authReducer/authReducer';
import shopReducer from './shopReducer';

export default combineReducers({auth: authReducer, shop: shopReducer});
