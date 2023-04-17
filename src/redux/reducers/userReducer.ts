import { GET_USERS } from "../actions";

const initialState = {
  userList: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
