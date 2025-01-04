import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { ISignInPayload, ISignInResponse } from "../types";
import * as URI from '../http/Endpoint';

export const SignIn = async (payload: ISignInPayload): Promise<ISignInResponse> => {
    const api = Api.getInstance();
    return await api.post<ISignInPayload, AxiosResponse<ISignInResponse>>(payload,URI.SIGNIN,);
  };