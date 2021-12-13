import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/Signup";
import AppBar from "./components/Navbar";
import Login from "./views/Login";
import { useSelector } from "./store/authStore";
import Dashboard from "./views/Dashboard";
import Success from "./views/AccountSuccess";
import AddProduct from "./views/AddNewProduct";

const Router = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {!auth.isAuthenticated && <Route path="/login" element={<Login />} />}
        {!auth.isAuthenticated && <Route path="/signup" element={<Signup />} />}
        {auth.isAuthenticated && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
        {auth.isAuthenticated && (
          <Route path="/success" element={<Success />} />
        )}
        {auth.isAuthenticated && (
          <Route path="/add-products" element={<AddProduct />} />
        )}
      </Routes>
    </div>
  );
};

export default Router;
