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
    qualification: string;
};

export interface IAddStudentResponse {
    success: boolean;
    message: string;
    error: string;
}

export interface IGetAllStudentResponse {
    count: number;
    teachers: any[];
    success: boolean;
    message: string;
}

export interface IDeleteStudentResponse {
    success: boolean;
    message: string;
}