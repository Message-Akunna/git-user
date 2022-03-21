import * as types from '../types';

const initialState = {
	user: null,
	isUserLoading: false, //will be true when fetching data and back to false when the fetch is done
	isUserLoaded: false,
	isCategoryDeleting: false,
}

//export the post reducer
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_USER:
			return {
				...state,
				user: {
					...action.payload.productUser
                },
				isUserLoading: false,
				isUserLoaded: true
			}
		case types.USER_LOADING:
			return {
				...state,
				isUserLoading: true,
				isUserLoaded: false
			}
		default:
			return state;
	}
}


export default userReducer;