import { Card, mapStateToProps } from './Card.js';

describe('mapStateToProps', () => {

	it('should return an object with a pokemon array', () => {

		const mockState = {
			pokemon: [ 'one', 'two'],
			error: 'error',
			loading: false
		}

		const expected = {
			loading: false
		}

		const mappedProps = mapStateToProps(mockState)

		expect(mappedProps).toEqual(expected)
	});
});