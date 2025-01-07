import { AxiosResponse } from "axios";
import { Api } from "../http/Api";
import { IAddSchoolPayload, IAddSchoolResponse, IGetAllSchoolsRespose } from "../types";
import * as URI from '../http/Endpoint';

export const AddSchool = async (payload: IAddSchoolPayload): Promise<IAddSchoolResponse> => {
    const api = Api.getInstance();
    return await api.post<IAddSchoolPayload, AxiosResponse<IAddSchoolResponse>>(payload, URI.ADD_SCHOOL);
};

export const GetAllSchools = async (): Promise<IGetAllSchoolsRespose> => {
    const api = Api.getInstance();
    return await api.get<IGetAllSchoolsRespose>(URI.GET_ALL_SCHOOLS)
}