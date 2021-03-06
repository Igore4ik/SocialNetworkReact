import Axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

let instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "caf7b140-65ad-4aeb-a0e8-18a0fcfc54d9"
    }
});
export const getUsersAll = (currentPage = 1, pageSize = 5) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
            return response.data;
        });
};
export const getProfile = (id) => {
    return instance
        .get(`profile/${id}`)
        .then((response) => {
            return response.data;
        });
};
export const followUser = (id) => {
    return instance
        .post(`/follow/${id}`)
        .then(response => {
            return response.data;
        })
};
export const unFollowUser = (id) => {
    return instance
        .delete(`/follow/${id}`)
        .then(response => {
            return response.data;
        })
};
export const getStatus = (id) => {
    return instance
        .get(`profile/status/${id}`)
        .then((response) => {
            return response.data;
        });
};
export const updateStatus = (status) => {
    return instance
        .put(`profile/status`, {
            status: status
        })
        .then((response) => {
            return response.data;
        });
};
export const isLoginUser = () => {
    return instance
        .get("auth/me")
        .then(response => {
            return response.data;
        })
};
export const loginEnter = (email, password, rememberMe=false,captcha=null) => {
    return instance
        .post(`auth/login`,
            {
                email,
                password,
                rememberMe,
                captcha
            })
        .then((response) => {
            return response.data;
        });
};
export const loginOut = () => {
    return instance
        .delete(`auth/login`)
        .then((response) => {
            return response.data;
        });
};
export const setPhoto = (photoFile) => {
    const formData = new FormData();
     formData.append("image", photoFile);
    return instance
        .put(`profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            return response.data;
        });
};
export const updateProfileSettings = (formData) => {

    return instance
        .put(`profile`, formData)
        .then((response) => {
            return response.data;
        });
};
export const secirityCaptca = () => {

    return instance
        .get(`security/get-captcha-url`)
        .then((response) => {
            return response.data;
        });
};