import { authAPI } from "../api/authAPI";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = 'rczdkp/reducer-auth/SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'rczdkp/reducer-auth/TOGGLE-IS-FETCHING';
const LOGOUT_USER = 'rczdkp/reducer-auth/LOGOUT-USER';

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
    data: { userId, email, login }
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const setUserLogoutData = () => ({
    type: LOGOUT_USER,
    data: { userId: null, email: null, login: null }
});

export const getAuth = () => async (dispatch) => {
    let response = await authAPI.getAuthMe()

    if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setUserData(id, email, login));
    }
}


export const postAuth = (propsInfo) => async (dispatch) => {
    let response = await authAPI.postAuthMe(propsInfo)

    if (response.resultCode === 0) {
        dispatch(getAuth());
    } else {
        if (response.messages[0].length > 0) {
            dispatch(stopSubmit("login", { _error: response.messages[0] }));
        } else {
            dispatch(stopSubmit("login", { _error: "some error" }));
        }

    }

}



export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logoutMe()
    if (response.resultCode === 0) {
        dispatch(setUserLogoutData());
    }
}

export default reducerAuth;