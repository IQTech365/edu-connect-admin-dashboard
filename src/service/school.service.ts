import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddSchoolPayload, IAddSchoolResponse, IGetAllSchoolsRespose } from "../types";
import * as URI from '../http/Endpoint';
import { IDeleteSchoolResponse, IGetSchoolByIdResponse, IUpdateSchoolPayload, IUpdateSchoolResponse } from "../types/school.type";

export const AddSchool = async (payload: IAddSchoolPayload): Promise<IAddSchoolResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddSchoolPayload, AxiosResponse<IAddSchoolResponse>>(payload, URI.ADD_SCHOOL);
};

export const GetAllSchools = async (): Promise<IGetAllSchoolsRespose> => {
    const api = Api.getInstance();
    return await api.get<IGetAllSchoolsRespose>(URI.GET_ALL_SCHOOLS)
}

export const deleteSchool = async (id: string): Promise<IDeleteSchoolResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IDeleteSchoolResponse>>(null, URI.DELETE_SCHOOL(id));
};

export const getSchoolById = async (id: string): Promise<IGetSchoolByIdResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetSchoolByIdResponse>(URI.GET_SCHOOL_BY_ID(id))
}

export const updateSchool = async (payload: IUpdateSchoolPayload, id: string): Promise<IUpdateSchoolResponse> => {
    const api = Api.getInstance();
    return await api.update<IUpdateSchoolPayload, AxiosResponse<IUpdateSchoolResponse>>(payload, URI.UPDATE_SCHOOL_BY_ID(id));
}