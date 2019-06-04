export const setPokemon = (pokemon) => ({
	type: 'SET_POKEMON',
	pokemon
})

export const setError = (error) => ({
	type: 'SET_ERROR',
	error
})

export const setLoading = (bool) => ({
	type: 'SET_LOADING',
	bool
})