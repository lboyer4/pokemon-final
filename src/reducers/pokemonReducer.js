const initialState = []

export const pokemonReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_POKEMON':
			console.log(action.pokemon)
			return action.pokemon
		default: 
			return state

	}
}