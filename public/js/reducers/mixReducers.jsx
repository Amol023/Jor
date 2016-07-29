import { combineReducers } from 'redux';
import UberReducer from './reducers_uber';

const ureducer = combineReducers({
	uber: UberReducer
});

export default ureducer;