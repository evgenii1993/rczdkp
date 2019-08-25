import { instanceAxios } from "./instanceAxios";

export const profileAPI = {
    getProfileUser(idFriend = 1417) {
        return instanceAxios.get(`profile/${idFriend}`);
    },
    getStatusFriend(idFriend = 1417) {
        return instanceAxios.get(`profile/status/${idFriend}`);
    },
    putStatusFriend(status = "") {
        return instanceAxios.put(`profile/status/`, {status});
    }
};