export interface IAddTeacherPayload {
    name: string;
    email: string;
    phone: number;
    password: string;
    avatar: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    qualification: string;
};

export interface IAddTeacherResponse {
    success: boolean;
    message: string;
    error: string;
}

export interface IGetAllTeacherResponse {
    count: number;
    teachers: any[];
    success: boolean;
    message: string;
}

export interface IDeleteTeacherResponse {
    success: boolean;
    message: string;
}

export interface IUpdateTeacherPayload {
    name: string;
    email: string;
    phone: number;
    password: string;
    avatar: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    qualification: string;
};

export interface IUpdateTeacherResponse {
    message: string,
    success: boolean,
}

export interface IGetTeacherByIdResponse {
    success: boolean;
    message: string;
    error: string;
    teachers: any;
}
