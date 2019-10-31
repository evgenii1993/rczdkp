import {getAuth} from "./reducer-auth";

const INITIAL_SUCCESS = "rczdkp/reducer-app/INITIAL-SUCCESS";

let initialState = {
   initialSuccess: false
};

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_SUCCESS: {
            return {
                ...state,
                initialSuccess: true
            }
        }
        
        default: {
            return state;
        }
    }
}

export const initialSuccess = () => ({
    type: INITIAL_SUCCESS
});

export const initialApp = () => (dispatch) => {
    let promiseAuth = dispatch(getAuth());

    Promise.all([promiseAuth])
        .then(() => {
            dispatch(initialSuccess());
        })
};


export default reducerApp;