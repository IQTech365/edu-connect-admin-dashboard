const SIGNIN: string = ``;

// School----
const ADD_SCHOOL: string = `/school/school-register`;
const GET_ALL_SCHOOLS: string = `/school/get-all-school`;
const DELETE_SCHOOL = (id: string) => `/school/remove/${id}`;
const GET_SCHOOL_BY_ID = (id: string) => `/school/get-school-by-id/${id}`;
const UPDATE_SCHOOL_BY_ID = (id: string) => `/school/update/${id}`;

// Teacher----
const ADD_TEACHER: string = `/teacher/add`;
const GET_ALL_TEACHERS: string = `/teacher/get-all-teachers`;
const DELETE_TEACHERS = (id: string) => `/teacher/remove/${id}`;

// Student----
const ADD_STUDENT: string = `/student/student-add`;

// Principal----
const addPrincipalBySchoolId = (id: string) => `/principal/add-principal/${id}`;
const getAllPrincipalBySchoolId = (id: string) => `/principal/get-all-principals/${id}`
const DELETE_PRINCIPAL = (id: string) => `/principal/delete-by-admin/${id}`


export {
    SIGNIN,
    ADD_SCHOOL,
    ADD_TEACHER,
    ADD_STUDENT,
    GET_ALL_SCHOOLS,
    addPrincipalBySchoolId,
    getAllPrincipalBySchoolId,
    DELETE_PRINCIPAL,
    GET_ALL_TEACHERS,
    DELETE_TEACHERS,
    DELETE_SCHOOL,
    GET_SCHOOL_BY_ID,
    UPDATE_SCHOOL_BY_ID,
}
