import { combineReducers } from 'redux';
import stockReducer from './Stocks';
import ProfileReducer from './Profile';

export default combineReducers({
  stock: stockReducer, profile: ProfileReducer,
});
