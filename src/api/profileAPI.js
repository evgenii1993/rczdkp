import { instanceAxios } from "./instanceAxios";

export const profileAPI = {
    getProfileUser(idFriend = 1) {
        return instanceAxios.get(`profile/${idFriend}`);
    }
};