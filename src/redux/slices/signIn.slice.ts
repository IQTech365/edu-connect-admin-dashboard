import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IError, ISignInPayload, ISignInResponse, ISignInState } from "../../types";

const initialState:ISignInState = {
    requesting: false,
    success: false,
    failure: false,
    error: {code: 0, message: ''},
    user: null,
}

export const SignInSlice = createSlice({
    name: 'SignInSlice',
    initialState: initialState,
    reducers: {
      signIn: (state, _: PayloadAction<ISignInPayload>) => {
        state.requesting = true;
      },
      signInSuccess: (state, action: PayloadAction<ISignInResponse>) => {
        state.requesting = false;
        state.success = true;
        state.user = action.payload.data;
      },
      signInFailure: (state, action: PayloadAction<IError>) => {
        state.requesting = false;
        state.success = false;
        state.failure = true;
        state.error = action.payload;
      },
    },
  });
  
  export default SignInSlice.reducer;
  
  export const {signIn, signInSuccess, signInFailure} = SignInSlice.actions;