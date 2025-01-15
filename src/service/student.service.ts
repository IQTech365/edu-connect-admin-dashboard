import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddStudentPayload, IAddStudentResponse } from "../types";
import * as URI from '../http/Endpoint';
import { IDeleteStudentResponse, IGetAllStudentResponse, IGetStudentByIdResponse, IUpdateStudentPayload, IUpdateStudentResponse } from "../types/student.type";

export const AddStudent = async (payload: IAddStudentPayload): Promise<IAddStudentResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddStudentPayload, AxiosResponse<IAddStudentResponse>>(payload, URI.ADD_STUDENT);
};

export const getAllStudent = async (): Promise<IGetAllStudentResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetAllStudentResponse>(URI.GET_ALL_STUDENT);
}

export const deleteStudent = async (id: string): Promise<IDeleteStudentResponse> => {
    const api = Api.getInstance();
    return await api.delete<any, AxiosResponse<IDeleteStudentResponse>>(null, URI.DELETE_STUDENT(id));
};

export const getStudentById = async (id: string): Promise<IGetStudentByIdResponse> => {
    const api = Api.getInstance();
    return await api.get<IGetStudentByIdResponse>(URI.GET_STUDENT_BY_ID(id))
}

export const updateStudent = async (payload: IUpdateStudentPayload, id: string): Promise<IUpdateStudentResponse> => {
    const api = Api.getInstance();
    return await api.update<IUpdateStudentPayload, AxiosResponse<IUpdateStudentResponse>>(payload, URI.UPDATE_STUDENT_BY_ID(id));
}