const FOLLOW_FRIEND = "FOLLOW-FRIEND";
const UN_FOLLOW_FRIEND = "UN-FOLLOW-FRIEND";
const SET_FRIEND = "SET-FRIEND";

let initialState = {
    friends: [
        
    ]
}

const reducerFriend = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW_FRIEND: {
            
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.id) {
                        friend.followed = true;
                    }
                    return friend;
                })
            }
        }
        case UN_FOLLOW_FRIEND: {

            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.id) {
                        friend.followed = false;
                    }
                    return friend;
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


export const followAC = (id) => ({ type: FOLLOW_FRIEND, id: id });
export const unFollowAC = (id) => ({ type: UN_FOLLOW_FRIEND, id: id });
export const setFriendAC = (newFriends) => ({type: SET_FRIEND, newFriends: newFriends})

export default reducerFriend;