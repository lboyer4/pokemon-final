import * as actions from '../actions';

describe('actions', () => {
	it('should have a type of SET_POKEMON', () => {
		const pokemon = ['pokemon1', 'pokemon2']

		const expectedAction = {
			type: 'SET_POKEMON',
			pokemon: ['pokemon1', 'pokemon2']
		}

		const result = actions.setPokemon(pokemon)

		expect(result).toEqual(expectedAction)
	});

		it('should have a type of SET_ERROR', () => {
		const error = 'danger will robinson!'

		const expectedAction = {
			type: 'SET_ERROR',
			error: 'danger will robinson!'
		}

		const result = actions.setError(error)

		expect(result).toEqual(expectedAction)
	});

	it('should have a type of SET_ERROR', () => {
		const bool = false

		const expectedAction = {
			type: 'SET_LOADING',
			bool: false
		}

		const result = actions.setLoading(bool)

		expect(result).toEqual(expectedAction)
	});
});