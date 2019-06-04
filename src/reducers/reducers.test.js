import { pokemonReducer } from './pokemonReducer.js';
import {loadingReducer} from './loadingReducer.js/';
import { errorReducer } from './errorReducer';


describe('pokemonReducer', () => {
	it('should return the initial state', () => {
		const expected = []

		const result = pokemonReducer(undefined, {})

		expect(result).toEqual(expected)
	})

	it('should return the array object of pokemon', () => {
		const expected = ['pokemoneone', 'pokemonetwo']

		const result = pokemonReducer(undefined,{ type: 'SET_POKEMON', pokemon: ['pokemoneone', 'pokemonetwo']})

		expect(result).toEqual(expected)
	});
});

describe('loadingReducer', () => {
	it('should return initial state', () => {
		const expected = true

		const result = loadingReducer(undefined, {})

		expect(result).toEqual(expected)
	})

	it('should return false with a type of SET_LOADING', () => {
		const expected = false;

		const result = loadingReducer(true, {type: 'SET_LOADING', bool: false })

		expect(result).toEqual(expected)
	})
})

describe('errorReducer', () => {
	it('should return initial state', () => {
		const expected = ''

		const result = errorReducer(undefined,{})

		expect(result).toEqual(expected)
	})

	it('should return a message with a status of SET_ERROR', () => {

		const expected = 'Danger Will Robinson!'

		const result = errorReducer(undefined, {type: 'SET_ERROR', error: 'Danger Will Robinson!'})

		expect(result).toEqual(expected)
	})
})

