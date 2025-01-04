import { configureStore, AnyAction, Reducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

import { rootSaga } from "../sagas";
import { SignInSlice } from "./slices/signIn.slice";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const appReducer = combineReducers({
    SignIn: SignInSlice,
  });

  const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'OtpSlice/logout') {
    //   AsyncStorage.removeItem('persist:root');
    //   removeLoginStatus();
    //   removeToken();
    //   removeIsRegistrationComplete();
    //   removeCurrentCompanyId();
      state = {} as RootState;
    }
    //@ts-ignore
    return appReducer(state, action);
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(middleware);
    },
  });
  
  export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  sagaMiddleware.run(rootSaga);
