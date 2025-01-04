import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import { IError, ISignInPayload, ISignInResponse } from '../types';
import { signIn, signInFailure, signInSuccess } from '../redux/slices/signIn.slice';
import * as AuthService from '../service/auth.service';

export function* signInSaga(action: PayloadAction<ISignInPayload>) {
    try {
        const response: ISignInResponse = yield call(AuthService.SignIn, action.payload);
        yield put(signInSuccess(response));
    } catch (err) {
        yield put(signInFailure(err as IError));
    }
}

export function* watcherSignInSaga() {
    yield takeLatest(signIn.type, signInSaga);
}