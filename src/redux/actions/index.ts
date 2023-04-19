import { User } from "../interfaces/user";

export const SET_USER_INFO = "SET_USER_INFO";
export const GET_CHATS = "GET_CHATS";

export const setUserInfo = (user: User) => {
  return {
    type: SET_USER_INFO,
    payload: { userInfo: user },
  };
};

export const getChats = (userId: String) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/chats/${userId}`
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_CHATS,
          payload: data,
        });
      } else {
        console.log("Error baby!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
