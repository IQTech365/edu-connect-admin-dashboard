export interface IAddSubjectPayload {
    subject: string;
};

export interface IAddSubjectResponse {
    success: boolean;
    message: string;
    error: string;
}

export interface IGetAllSubjectResponse {
    count: number;
    subjects: any[];
    success: boolean;
    message: string;
}

export interface IDeleteSubjectResponse {
    success: boolean;
    message: string;
}

export interface IUpdateSubjectPayload {
    subject: string;
};

export interface IUpdateSubjectResponse {
    message: string,
    success: boolean,
}

export interface IGetSubjectByIdResponse {
    success: boolean;
    message: string;
    error: string;
    subjects: any;
}
