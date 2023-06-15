import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "@/Redux/Features/auth-slice";

export const store = configureStore({
    reducer: {
        signUpReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch