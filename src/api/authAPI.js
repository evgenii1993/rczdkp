import { instanceAxios } from "./instanceAxios";

export const authAPI = {
    getAuthMe() {
        return instanceAxios.get(`auth/me`)
                .then(response => response.data);
    },
    postAuthMe(propsInfo) {
        return instanceAxios.post(`auth/login`, propsInfo)
                .then(response => response.data);
    },
    logoutMe(){
        return instanceAxios.delete(`auth/login`)
                .then(response => response.data)
    }
}