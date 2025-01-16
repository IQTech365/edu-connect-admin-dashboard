import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import * as URI from '../http/Endpoint';
import { IAddSubjectPayload, IAddSubjectResponse, IDeleteSubjectResponse, IGetAllSubjectResponse, IGetSubjectByIdResponse, IUpdateSubjectPayload, IUpdateSubjectResponse } from "../types/Subject.type";

export const AddSubject = async (payload: IAddSubjectPayload): Promise<IAddSubjectResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddSubjectPayload, AxiosResponse<IAddSubjectResponse>>(payload, URI.ADD_SUBJECT);
};

export const getAllSubject = async (): Promise<IGetAllSubjectResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetAllSubjectResponse>(URI.GET_ALL_SUBJECT);
}

export const deleteSubject = async (id: string): Promise<IDeleteSubjectResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IDeleteSubjectResponse>>(null, URI.DELETE_SUBJECT(id));
};

export const getSubjectById = async (id: string): Promise<IGetSubjectByIdResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetSubjectByIdResponse>(URI.GET_SUBJECT_BY_ID(id))
}

export const updateSubject = async (payload: IUpdateSubjectPayload, id: string): Promise<IUpdateSubjectResponse> => {
    const api = Api.getInstance();
    return await api.update<IUpdateSubjectPayload, AxiosResponse<IUpdateSubjectResponse>>(payload, URI.UPDATE_SUBJECT_BY_ID(id));
}