import { CardHolder, mapStateToProps } from './CardHolder.js';

describe('mapStateToProps', () => {

	it('should return an object with a pokemon array', () => {

		const mockState = {
			pokemon: [ 'one', 'two'],
			error: 'error',
			loading: false
		}

		const expected = {
			pokemon: ['one', 'two']
		}

		const mappedProps = mapStateToProps(mockState)

		expect(mappedProps).toEqual(expected)
	});
});