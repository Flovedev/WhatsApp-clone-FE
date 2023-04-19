import { User } from "../interfaces/user";

export const SET_USER_INFO = "SET_USER_INFO";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setUserInfo = (user: User) => {
    return {
        type: SET_USER_INFO,
        payload: { userInfo: user },
    }
}

export const setCurrentUser = (currentUser: User) => {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser
    }
}
