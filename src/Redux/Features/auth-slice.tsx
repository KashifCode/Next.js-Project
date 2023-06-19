import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    value: AuthState,
}

type AuthState = {
    isAuth: boolean,
    user: ActionState,
}

type ActionState = {
    fname: string,
    lname: string,
    email: string,
    school: string,
    pass: string,
    registerAs: string,
}

const initialState = {
    value: {
        isAuth: false,
        user: {
            fname: "",
            lname: "",
            email: "",
            school: "",
            pass: "",
            registerAs: "",
        } as ActionState
    } as AuthState
} as InitialState

export const signUp = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        resetForm: () => {
            return {
                value: {
                    isAuth: false,
                    user: initialState.value.user
                }
            };
        },
        acceptUser: (state, action: PayloadAction<ActionState>) => {
            console.log("Hi! From Redux Reducer")
            let signUpp = {
                isAuth: true,
                user: action.payload
            }
            console.log(signUpp)
            return {
                value: {
                    isAuth: true,
                    user: action.payload
                }
            }
        }
    }
})

export const {resetForm, acceptUser} = signUp.actions
export default signUp.reducer;