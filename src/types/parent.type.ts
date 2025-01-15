export interface IAddParentPayload {
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
    parentType: string;
};

export interface IAddParentResponse {
    success: boolean;
    message: string;
    error: string;
}

export interface IGetAllParentResponse {
    count: number;
    parents: any[];
    success: boolean;
    message: string;
}

export interface IDeleteParentResponse {
    success: boolean;
    message: string;
}

export interface IUpdateParentPayload {
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
    parentType: string;
};

export interface IUpdateParentResponse {
    message: string,
    success: boolean,
}

export interface IGetParentByIdResponse {
    success: boolean;
    message: string;
    error: string;
    parents: any;
}
