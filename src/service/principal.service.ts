import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddPrincipalPayload, IPrincipalResponse } from "../types";
import * as URI from '../http/Endpoint';

export const AddPrincipal = async (payload: IAddPrincipalPayload): Promise<IPrincipalResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddPrincipalPayload, AxiosResponse<IPrincipalResponse>>(payload, URI.ADD_PRINCIPAL);
};
