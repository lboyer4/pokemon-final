import { combineReducers} from 'redux';
import { pokemonReducer} from './pokemonReducer.js'

export const rootReducer = combineReducers({
	pokemon: pokemonReducer
})