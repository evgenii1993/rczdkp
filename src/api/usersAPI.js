import { instanceAxios } from "./instanceAxios";

export const usersAPI =  {
    getUsers(page = 1, count = 10) {
        return instanceAxios
            .get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
    },
    unFollow(id = 1) {
        return instanceAxios
            .delete(`/follow/${id}`)
    },
    follow(id = 1) {
        return instanceAxios
            .post(`/follow/${id}`)
    }
}



