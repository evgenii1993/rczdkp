const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   isFetching: false
};

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default: {
            return state;
        }
    }
}

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export default reducerAuth;