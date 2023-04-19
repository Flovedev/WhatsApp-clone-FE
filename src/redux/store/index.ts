import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer";
import chatReducer from "../reducers/chatReducer";

const persistConfig = {
  storage: Storage,
  key: "root",
};

const combineReducer = combineReducers({
  users: userReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      // immutableCheck: false,
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistedStore };
