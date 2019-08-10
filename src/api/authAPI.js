import { instanceAxios } from "./instanceAxios";

export const authAPI = {
    getAuthMe() {
        return instanceAxios.get(`auth/me`)
                .then(response => response.data);
    }
}