import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import * as URI from '../http/Endpoint';
import { IAddClassesPayload, IAddClassesResponse, IDeleteClassesResponse, IGetAllClassesResponse, IGetClassesByIdResponse, IUpdateClassesPayload, IUpdateClassesResponse } from "../types/Classes.type";

export const AddClasses = async (payload: IAddClassesPayload): Promise<IAddClassesResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddClassesPayload, AxiosResponse<IAddClassesResponse>>(payload, URI.ADD_CLASSES);
};

export const getAllClasses = async (): Promise<IGetAllClassesResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetAllClassesResponse>(URI.GET_ALL_CLASSES);
}

export const deleteClasses = async (id: string): Promise<IDeleteClassesResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IDeleteClassesResponse>>(null, URI.DELETE_CLASSES(id));
};

export const getClassesById = async (id: string): Promise<IGetClassesByIdResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetClassesByIdResponse>(URI.GET_CLASSES_BY_ID(id))
}

export const updateClasses = async (payload: IUpdateClassesPayload, id: string): Promise<IUpdateClassesResponse> => {
    const api = Api.getInstance();
    return await api.update<IUpdateClassesPayload, AxiosResponse<IUpdateClassesResponse>>(payload, URI.UPDATE_CLASSES_BY_ID(id));
}