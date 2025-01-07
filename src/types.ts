/**
 * Common State
 */
interface ICommonState<D, E> {
    requesting: boolean;
    success: boolean;
    failure: boolean;
    data?: D | null;
    error: E;
}

interface IApiResponse<D> {
    data: D;
}

/**
 * Error Model
 */
export interface IError {
    code: number;
    message: string;
}

/**
 * ************************************************************
 * ******************* Models -BEGINS- *******************
 * ************************************************************
 */
interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface ISignInPayload {
    email: string;
    password: string;
}


export interface ISignInResponse extends IApiResponse<IUser> { }
export interface IAddSchoolPayload {
    name: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
};

export interface IAddSchoolResponse {
    success: boolean;
    message: string;
    error: string
}

export interface ISchool {
    _id: string;
    name: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    principals: [];
}

export interface IGetAllSchoolsRespose {
    status: boolean;
    count: number;
    schools: any[];
    message: string;
}


// Teacher interface
export interface IAddTeacherPayload {
    name: string;
    email: string;
    phone: string;
    password: string;
    // avatar: string;
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
    error: string
}

// Student interface
export interface IAddStudentPayload {
    name: string;
    email: string;
    phone: string;
    password: string;
    classes: string;
    section: string;
    // department: string;
    rollNumber: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    // avatar: string;
};

export interface IAddStudentResponse {
    message: string;
    error: string;
    success: boolean;
}

// Pricipal interface
export interface IAddPrincipalPayload {
    name: string;
    email: string;
    phone: number;
    password: string;
    avatar: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    country: string;
    school: any;
}

export interface IPrincipalResponse {
    message: string;
    success: boolean;
}

/**
 * ************************************************************
 * ******************* Models -ENDS- *******************
 * ************************************************************
 */

/**
 * ************************************************************
 * ******************* Slices State Declaration -BEGINS- *******************
 * ************************************************************
 */

export interface ISignInState extends ICommonState<null, IError> {
    user: IUser | null;
}

/**
 * ************************************************************
 * ******************* Slices State Declaration -ENDS- *******************
 * ************************************************************
 */