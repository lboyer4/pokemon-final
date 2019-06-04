const initialState = []

export const pokemonReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_POKEMON':
			return action.pokemon
		default: 
			return state

	}
}