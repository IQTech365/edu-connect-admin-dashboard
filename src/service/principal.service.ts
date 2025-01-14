import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddPrincipalPayload, IGetAllPricipalRespose, IPrincipalDeleteResponse, IPrincipalResponse } from "../types";
import * as URI from '../http/Endpoint';

export const AddPrincipal = async (payload: IAddPrincipalPayload, id: string): Promise<IPrincipalResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddPrincipalPayload, AxiosResponse<IPrincipalResponse>>(payload, URI.addPrincipalBySchoolId(id));
};

export const getAllPrincipalBySchool = async (id: string): Promise<IGetAllPricipalRespose> => {
    const api = Api.getInstance();
    return await api.get<IGetAllPricipalRespose>(URI.getAllPrincipalBySchoolId(id))
}

export const deletePrinciapl = async (id: string): Promise<IPrincipalDeleteResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IPrincipalDeleteResponse>>(null, URI.DELETE_PRINCIPAL(id));
};