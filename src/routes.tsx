import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dashboard/Dashboard";
import Schools from "./screens/schools";
import AddSchoolForm from "./screens/schools/AddSchoolForm";
import PrincipalList from "./screens/principal";
import AddPrincipalForm from "./screens/principal/AddPrincipalForm";
import TeachersList from "./screens/teachers";
import AddTeacherFrom from "./screens/teachers/AddTeachersForm";
import StudentsList from "./screens/students";
import AddStudentForm from "./screens/students/AddStudentForm";
import AddParentsForm from "./screens/parents/AddParents";
import ParentsList from "./screens/parents";
import HeadOfDepepartmentList from "./screens/headOfDepartment";
import AddHeadOfDepartmentForm from "./screens/headOfDepartment/AddHeadOfDepartment";
import AddProduct from "./screens/add-product/AddProduct";
import ProductList from "./screens/add-product";
import OrderDetails from "./screens/order-details/OrderDetails";
import Login from "./screens/login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard-home",
        element:<Dashboard/>
      },
      {
        path: "schools",
        element:<Schools/>
      },
      {
        path: "/add-school",
        element:<AddSchoolForm/>
      },
      {
        path: "/principal-list",
        element:<PrincipalList/>
      },
      {
        path: "/add-principal",
        element:<AddPrincipalForm/>
      },
      {
        path: "/teachers-list",
        element:<TeachersList/>
      },
      {
        path: "/add-teachers",
        element:<AddTeacherFrom/>
      },
      {
        path: "/students-list",
        element:<StudentsList/>
      },
      {
        path: "/add-students",
        element:<AddStudentForm/>
      },
      {
        path: "/add-parents",
        element:<AddParentsForm/>
      },
      {
        path: "/parents-list",
        element:<ParentsList/>
      },
      {
        path: "/head-of-dept-list",
        element:<HeadOfDepepartmentList/>
      },
      {
        path: "/add-head-of-dept",
        element:<AddHeadOfDepartmentForm/>
      },
      {
        path: "/add-product",
        element:<AddProduct/>
      },
      {
        path: "/product-list",
        element:<ProductList/>
      },
      {
        path: "/order-detail",
        element:<OrderDetails/>
      },
    ],
    
  },
]);

export default routes;
