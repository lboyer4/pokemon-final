import { combineReducers} from 'redux';
import { pokemonReducer} from './pokemonReducer.js';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	error: errorReducer,
	loading: loadingReducer
})