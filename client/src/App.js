import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar, Home, Sodas, Auth, Error, Admin } from "./components";
import { getSodas } from "./actions/sodas";
import { getUser } from "./actions/users";
import ProtectedRoutes from "./protected_routes/ProtectedRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?._id) {
      dispatch(getUser(user._id));
    }
    dispatch(getSodas());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vending-machine" element={<Sodas />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin-panel" exact element={<Admin />} />
        </Route>
        <Route path="*" exact element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
