import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import * as URI from '../http/Endpoint';
import { IAddTeacherPayload, IAddTeacherResponse, IDeleteTeacherResponse, IGetAllTeacherResponse } from "../types/teacher.types";

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