import { combineReducers } from 'redux';
import stockReducer from './Stocks';
import FilterReducer from './Filter';
import ProfileReducer from './Profile';

export default combineReducers({
  stock: stockReducer, filter: FilterReducer, profile: ProfileReducer,
});
