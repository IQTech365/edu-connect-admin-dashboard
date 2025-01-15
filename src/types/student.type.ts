export interface IAddStudentPayload {
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
    classes: string;
    rollNumber: string;
    section: string;
};

export interface IAddStudentResponse {
    success: boolean;
    message: string;
    error: string;
}

export interface IGetAllStudentResponse {
    count: number;
    students: any[];
    success: boolean;
    message: string;
}

export interface IDeleteStudentResponse {
    success: boolean;
    message: string;
}

export interface IUpdateStudentPayload {
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
    classes: string;
    rollNumber: string;
    section: string;
};

export interface IUpdateStudentResponse {
    message: string,
    success: boolean,
}

export interface IGetStudentByIdResponse {
    success: boolean;
    message: string;
    error: string;
    student: any;
}
