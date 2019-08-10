import * as axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:  {
        'API-KEY': '28573ac2-4e3d-436e-a06e-785713baaebe'
    }
})