import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddTeacherPayload, IAddTeacherResponse } from "../types";
import * as URI from '../http/Endpoint';

export const AddTeacher = async (payload: IAddTeacherPayload): Promise<IAddTeacherResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddTeacherPayload, AxiosResponse<IAddTeacherResponse>>(payload, URI.ADD_TEACHER);
};