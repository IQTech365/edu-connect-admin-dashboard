
const SIGNIN: string = ``;

// School----
const ADD_SCHOOL: string = `/school/school-register`;
const GET_ALL_SCHOOLS: string = `/school/get-all-school`;
const DELETE_SCHOOL = (id: string) =>`/school/remove/${id}`;
const GET_SCHOOL_BY_ID = (id: string) => `/school/get-school-by-id/${id}`;
const UPDATE_SCHOOL_BY_ID = (id: string) => `/school/update/${id}`;

// Teacher----
const ADD_TEACHER: string = `/teacher/teacher-add`;
const GET_ALL_TEACHERS: string = `/teacher/get-all-teachers`;
const DELETE_TEACHERS = (id: string) => `/teacher/remove/${id}`;
const GET_TEACHERS_BY_ID = (id: string) => `/teacher/get-teachers-by-id/${id}`;
const UPDATE_TEACHERS_BY_ID = (id: string) => `/teacher/update-by-principal/${id}`;

// Student----
const ADD_STUDENT: string = `/student/student-add`;
const GET_ALL_STUDENT: string = `/student/get-all-student`;
const DELETE_STUDENT = (id: string) => `/student/student-remove/${id}`;
const GET_STUDENT_BY_ID = (id: string) => `/student/get-by-studentId/${id}`;
const UPDATE_STUDENT_BY_ID = (id: string) => `/student/update-by-principal/${id}`;

// Principal----
const addPrincipalBySchoolId = (id: string) => `/principal/add-principal/${id}`;
const getAllPrincipalBySchoolId = (id: string) => `/principal/get-all-principals/${id}`
const DELETE_PRINCIPAL = (id: string) => `/principal/delete-by-admin/${id}`


// Parent----
const ADD_PARENT: string = `/parent/add-parent`;
const GET_ALL_PARENT: string = `/parent/get-all-parent`;
const DELETE_PARENT = (id: string) => `/parent/parent-remove/${id}`;
const GET_PARENT_BY_ID = (id: string) => `/parent/get-by-parentId/${id}`;
const UPDATE_PARENT_BY_ID = (id: string) => `/parent/update-parent/${id}`;

// Subject----
const ADD_SUBJECT: string = `/subject/add-subject`;
const GET_ALL_SUBJECT: string = `/subject/get-all-subject`;
const DELETE_SUBJECT = (id: string) => `/subject/subject-remove/${id}`;
const GET_SUBJECT_BY_ID = (id: string) => `/subject/get-by-subjectId/${id}`;
const UPDATE_SUBJECT_BY_ID = (id: string) => `/subject/update-subject/${id}`;

// Classes----
const ADD_CLASSES: string = `/class/add-class`;
const GET_ALL_CLASSES: string = `/class/get-all-class`;
const DELETE_CLASSES = (id: string) => `/class/class-remove/${id}`;
const GET_CLASSES_BY_ID = (id: string) => `/class/get-by-classId/${id}`;
const UPDATE_CLASSES_BY_ID = (id: string) => `/class/update-by-class/${id}`;

export {

    SIGNIN,

    ADD_CLASSES,
    GET_ALL_CLASSES,
    DELETE_CLASSES,
    GET_CLASSES_BY_ID,
    UPDATE_CLASSES_BY_ID,

    ADD_SUBJECT,
    GET_ALL_SUBJECT,
    DELETE_SUBJECT,
    GET_SUBJECT_BY_ID,
    UPDATE_SUBJECT_BY_ID,

    ADD_PARENT,
    GET_ALL_PARENT,
    DELETE_PARENT,
    GET_PARENT_BY_ID,
    UPDATE_PARENT_BY_ID,

    ADD_SCHOOL,
    DELETE_SCHOOL,
    GET_SCHOOL_BY_ID,
    GET_ALL_SCHOOLS,
    UPDATE_SCHOOL_BY_ID,

    ADD_TEACHER,
    GET_ALL_TEACHERS,
    DELETE_TEACHERS,
    GET_TEACHERS_BY_ID,
    UPDATE_TEACHERS_BY_ID,

    ADD_STUDENT,
    GET_ALL_STUDENT,
    DELETE_STUDENT,
    GET_STUDENT_BY_ID,
    UPDATE_STUDENT_BY_ID,

    addPrincipalBySchoolId,
    getAllPrincipalBySchoolId,
    DELETE_PRINCIPAL,
}