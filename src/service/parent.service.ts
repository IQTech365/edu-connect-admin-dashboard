import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddParentPayload, IParentResponse } from "../types";
import * as URI from '../http/Endpoint';

export const AddParent = async (payload: IAddParentPayload): Promise<IParentResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddParentPayload, AxiosResponse<IParentResponse>>(payload, URI.ADD_PRINCIPAL);
};