import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddSchoolPayload, IAddSchoolResponse } from "../types";
import * as URI from '../http/Endpoint';

export const AddSchool = async (payload: IAddSchoolPayload): Promise<IAddSchoolResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddSchoolPayload, AxiosResponse<IAddSchoolResponse>>(payload, URI.ADD_SCHOOL);
};