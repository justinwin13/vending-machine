import { Outlet, Navigate } from "react-router";

const authAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.isAdmin ? true : false;
};

const ProtectedRoutes = () => {
  const isAdmin = authAdmin();
  return isAdmin ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedRoutes;
