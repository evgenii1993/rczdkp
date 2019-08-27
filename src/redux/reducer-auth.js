import { authAPI } from "../api/authAPI";
import { SubmissionError } from 'redux-form';

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

export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuthMe()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setUserData(id, email, login));
                }
            })
    }
}

export const postAuth = (propsInfo) => {
    authAPI.postAuthMe(propsInfo)
        .then((response) => {
            if (response.resultCode === 0) {
                getAuth();
            } else if (response.resultCode === 1) {
               // throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' });
            }
        })
    
}

export default reducerAuth;