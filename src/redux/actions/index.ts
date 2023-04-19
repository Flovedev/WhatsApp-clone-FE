import { User } from "../interfaces/user";

export const SET_USER_INFO = "SET_USER_INFO";

export const setUserInfo = (user: User) => {
    return {
        type: SET_USER_INFO,
        payload: { userInfo: user },
    }
}

