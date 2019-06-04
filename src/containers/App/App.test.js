import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { setPokemon, setError, setLoading } from '../../actions';

describe('mapStateToProps', () => {
	it('should return an object with loading and error', () => {

		const mockState = {
			pokemon: ['one', 'two'],
			loading: false,
			error: 'error'
		}

		const expected = {
			loading: false,
			error: 'error'
		}

		const mappedProps = mapStateToProps(mockState)

		expect(mappedProps).toEqual(expected)
	})

	it('should return an object with a error string', () => {

		const mockState = {
			error: 'error'
		}

		const expected = {
			error: 'error'
		}

		const mappedProps = mapStateToProps(mockState)

		expect(mappedProps).toEqual(expected)
	});

		it('should return an object with a loading boolean', () => {

		const mockState = {
			loading: false,
		}

		const expected = {
			loading: false
		}

		const mappedProps = mapStateToProps(mockState)

		expect(mappedProps).toEqual(expected)
	})

})

describe('mapDispatchToProps', () => {

	it('should call dispatch with a set setPokemon action when setPokemon is called', () => {
		const mockDispatch = jest.fn()

		const actionToDispatch = setPokemon(['one', 'two'])

		const mappedProps = mapDispatchToProps(mockDispatch)

		  mappedProps.setPokemon(['one', 'two'])

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});

		it('should call dispatch with a set setError action when setError is called', () => {
		const mockDispatch = jest.fn()

		const actionToDispatch = setError('error')

		const mappedProps = mapDispatchToProps(mockDispatch)

		  mappedProps.setError('error')

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});

	it('should call dispatch with a set setLoading action when setLoading is called', () => {
		const mockDispatch = jest.fn()

		const actionToDispatch = setLoading(false)

		const mappedProps = mapDispatchToProps(mockDispatch)

		  mappedProps.setLoading(false)

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});

});