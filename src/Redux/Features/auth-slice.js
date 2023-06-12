import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: {
        isAuth: false,
        fname: "",
        lname: "",
        email: "",
        location: "",
        password: ""
    }
}

export const signUp = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        resetForm: () => {
            return initialState;
        },
        acceptUser: (state, action) => {
            console.log("Hi! From Redux Reducer")
            let signUp = {
                value: {
                    isAuth: true,
                    user: action.payload
                }
            }
            console.log(signUp);
            return {
                signUp
            }
        }
    }
})

export const {resetForm, acceptUser} = signUp.actions
export default signUp.reducer;