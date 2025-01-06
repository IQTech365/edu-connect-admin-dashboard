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