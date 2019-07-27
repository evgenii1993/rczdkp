const FOLLOW_FRIEND = "FOLLOW-FRIEND";
const UN_FOLLOW_FRIEND = "UN-FOLLOW-FRIEND";
const SET_FRIEND = "SET-FRIEND";

let initialState = {
    friends: [
        { 
            id: "1", 
            urlAvatar: "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg", 
            name: "Evgen",
            status: "I'm Evgen. My life will the best, from step to step",
            isFollow: false,
            address: {
                country: "Russia",
                city: "TLT"
            }
        },
        { 
            id: "1", 
            urlAvatar: "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg", 
            name: "Eva",
            status: "I'm Evgen. My life will the best, from step to step",
            isFollow: false,
            address: {
                country: "Russia",
                city: "TLT"
            }
        }
    ]
}

const reducerFriend = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW_FRIEND: {
            
            return {
                ...state,
                friends: state.friends.map(() => {
                    if (this.id === action.id) {
                        this.isFollow = true;
                    }
                    return this;
                })
            }
        }
        case UN_FOLLOW_FRIEND: {

            return {
                ...state,
                friends: state.friends.map(() => {
                    if (this.id === action.id) {
                        this.isFollow = false;
                    }
                    return this;
                })
            }
        }
        case SET_FRIEND: {
            return {
                ...state,
                friends: [...state.friends, ...action.newFriends]
            }
        }
        default:
            return state; 
    }
}


export const followAC = () => ({ type: FOLLOW_FRIEND });
export const unFollowAC = () => ({ type: UN_FOLLOW_FRIEND });
export const setFriendAC = () => ({type: SET_FRIEND})

export default reducerFriend;