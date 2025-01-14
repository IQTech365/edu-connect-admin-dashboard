export interface IDeleteSchoolResponse {
    success: boolean;
    message: string;
}

export interface IGetSchoolByIdResponse {
    success: boolean;
    message: string;
    error: string;
    school: any;
}

export interface IUpdateSchoolPayload {
    name: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
};

export interface IUpdateSchoolResponse {
    message: string,
    success: boolean,
}