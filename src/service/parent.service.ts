import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import * as URI from '../http/Endpoint';
import { IAddParentPayload, IAddParentResponse, IDeleteParentResponse, IGetAllParentResponse, IGetParentByIdResponse, IUpdateParentPayload, IUpdateParentResponse } from "../types/parent.type";

export const AddParent = async (payload: IAddParentPayload): Promise<IAddParentResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddParentPayload, AxiosResponse<IAddParentResponse>>(payload, URI.ADD_PARENT);
};

export const getAllParent = async (): Promise<IGetAllParentResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetAllParentResponse>(URI.GET_ALL_PARENT);
}

export const deleteParent = async (id: string): Promise<IDeleteParentResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IDeleteParentResponse>>(null, URI.DELETE_PARENT(id));
};

export const getParentById = async (id: string): Promise<IGetParentByIdResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetParentByIdResponse>(URI.GET_PARENT_BY_ID(id))
}

export const updateParent = async (payload: IUpdateParentPayload, id: string): Promise<IUpdateParentResponse> => {
    const api = Api.getInstance();
    return await api.update<IUpdateParentPayload, AxiosResponse<IUpdateParentResponse>>(payload, URI.UPDATE_PARENT_BY_ID(id));
}