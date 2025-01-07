import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddStudentPayload, IAddStudentResponse } from "../types";
import * as URI from '../http/Endpoint';

export const AddStudent = async (payload: IAddStudentPayload): Promise<IAddStudentResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddStudentPayload, AxiosResponse<IAddStudentResponse>>(payload, URI.ADD_STUDENT);
};