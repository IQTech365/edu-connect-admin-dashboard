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
import ProtectedRoute from "./ProtectedRoutes";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signin", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/schools",
        element: <Schools />,
      },
      {
        path: "/dashboard/add-school",
        element: <AddSchoolForm />,
      },
      {
        path: "/dashboard/principal-list",
        element: <PrincipalList />,
      },
      {
        path: "/dashboard/add-principal",
        element: <AddPrincipalForm />,
      },
      {
        path: "/dashboard/teachers-list",
        element: <TeachersList />,
      },
      {
        path: "/dashboard/add-teachers",
        element: <AddTeacherFrom />,
      },
      {
        path: "/dashboard/students-list",
        element: <StudentsList />,
      },
      {
        path: "/dashboard/add-students",
        element: <AddStudentForm />,
      },
      {
        path: "/dashboard/add-parents",
        element: <AddParentsForm />,
      },
      {
        path: "/dashboard/parents-list",
        element: <ParentsList />,
      },
      {
        path: "/dashboard/head-of-dept-list",
        element: <HeadOfDepepartmentList />,
      },
      {
        path: "/dashboard/add-head-of-dept",
        element: <AddHeadOfDepartmentForm />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/product-list",
        element: <ProductList />,
      },
      {
        path: "/dashboard/order-detail",
        element: <OrderDetails />,
      },
    ],
  },
]);

export default routes;
