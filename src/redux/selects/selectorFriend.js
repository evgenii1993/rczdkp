export const getFriends = (state) => {
    return state.friendPage.friends;
}

export const getCurrentCountFriend = (state) => {
    return state.friendPage.currentCountFriend;
}

export const getCurrentPage = (state) => {
    return state.friendPage.currentPage;
}

export const getTotalCount = (state) => {
    return state.friendPage.totalCount;
}

export const getIsFetching = (state) => {
    return state.friendPage.isFetching;
}

export const getDisabledFollowUsers = (state) => {
    return state.friendPage.disabledFollowUsers;
}