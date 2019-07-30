const FOLLOW_FRIEND = "FOLLOW-FRIEND";
const UN_FOLLOW_FRIEND = "UN-FOLLOW-FRIEND";
const SET_FRIEND = "SET-FRIEND";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_CURRENT_COUNT_FRIEND = "SET-CURRENT-COUNT-FRIEND";

let initialState = {
    friends: [
        
    ],
    currentCountFriend: 20,
    currentPage: 1,
    totalCount: 20
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
                friends: [...action.newFriends]
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                friends: [...state.friends],
                currentPage: action.currentPage
            }
        }
        case SET_CURRENT_COUNT_FRIEND: {
            return {
                ...state,
                currentCountFriend: action.currentCountFriend
            }
        }
        default:
            return state; 
    }
}


export const followAC = (id) => ({ type: FOLLOW_FRIEND, id: id });
export const unFollowAC = (id) => ({ type: UN_FOLLOW_FRIEND, id: id });
export const setFriendAC = (newFriends) => ({type: SET_FRIEND, newFriends: newFriends});
export const setTotalCountAC = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setCurrentCountFriendAC = (currentCountFriend) => ({type: SET_CURRENT_COUNT_FRIEND, currentCountFriend});

export default reducerFriend;