import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';

const mainStore = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default mainStore;
