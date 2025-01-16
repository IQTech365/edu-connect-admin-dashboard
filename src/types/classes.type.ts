export interface IAddClassesPayload {
    department: string;
    section: string;
};

export interface IAddClassesResponse {
    success: boolean;
    message: string;
    error: string;
}

export interface IGetAllClassesResponse {
    count: number;
    classes: any[];
    success: boolean;
    message: string;
}

export interface IDeleteClassesResponse {
    success: boolean;
    message: string;
}

export interface IUpdateClassesPayload {
    department: string;
    section: string;
};

export interface IUpdateClassesResponse {
    message: string,
    success: boolean,
}

export interface IGetClassesByIdResponse {
    success: boolean;
    message: string;
    error: string;
    classes: any;
}
