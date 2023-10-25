import { createSlice } from "@reduxjs/toolkit";

// On initialise d'abord l'état de base
const initialState = {
    userName: "null",
    firstName: "null", 
    lastName: "null",
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        setUserName: (state, { payload }) => {
            state.userName = payload;
        },
        setFirstName: (state, { payload }) => {
            state.firstName = payload;
        },
        setLastName: (state, { payload }) => {
            state.lastName = payload;
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
    }
});

export const { setUserName, setFirstName, setLastName, setToken } = userSlice.actions;
export default userSlice.reducer
