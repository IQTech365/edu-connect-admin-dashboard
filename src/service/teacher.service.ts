import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import * as URI from '../http/Endpoint';
import { IAddTeacherPayload, IAddTeacherResponse, IDeleteTeacherResponse, IGetAllTeacherResponse, IGetTeacherByIdResponse, IUpdateTeacherPayload, IUpdateTeacherResponse } from "../types/teacher.types";

export const AddTeacher = async (payload: IAddTeacherPayload): Promise<IAddTeacherResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddTeacherPayload, AxiosResponse<IAddTeacherResponse>>(payload, URI.ADD_TEACHER);
};

export const getAllTeachers = async (): Promise<IGetAllTeacherResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetAllTeacherResponse>(URI.GET_ALL_TEACHERS);
}

export const deleteTeacher = async (id: string): Promise<IDeleteTeacherResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IDeleteTeacherResponse>>(null, URI.DELETE_TEACHERS(id));
};

export const getTeacherById = async (id: string): Promise<IGetTeacherByIdResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetTeacherByIdResponse>(URI.GET_TEACHERS_BY_ID(id))
}

export const updateTeacher = async (payload: IUpdateTeacherPayload, id: string): Promise<IUpdateTeacherResponse> => {
    const api = Api.getInstance();
    return await api.update<IUpdateTeacherPayload, AxiosResponse<IUpdateTeacherResponse>>(payload, URI.UPDATE_TEACHERS_BY_ID(id));
}