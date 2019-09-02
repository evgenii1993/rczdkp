import { authAPI } from "../api/authAPI";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const LOGOUT_USER = 'LOGOUT-USER';

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

        case LOGOUT_USER: {
            return {
                ...state,
                ...action.data,
                isAuth: false
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

export const setUserLogoutData = () => ({
    type: LOGOUT_USER,
    data: {userId: null, email: null, login: null}
});

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
    return (dispatch) => {
        authAPI.postAuthMe(propsInfo)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(getAuth());
                } 
            })
    }
    
}

export const logoutUser = () => {
    return (dispatch) => authAPI.logoutMe()
        .then((response) => {
            console.log(response);
            if (response.resultCode === 0) {
                dispatch(setUserLogoutData());
            }
        })
}

export default reducerAuth;