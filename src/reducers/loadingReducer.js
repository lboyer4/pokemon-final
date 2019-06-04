const initialState = true;

export const loadingReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_LOADING':
			return action.bool
		default: 
			return state
	};
};