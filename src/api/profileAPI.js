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
    },
    putAvatar(avatar) {
        let formData = new FormData();
        formData.append('file', avatar);

        return instanceAxios.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};