import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/Signup";
import AppBar from "./components/Navbar";
import Login from "./views/Login";
import { useSelector } from "./store/authStore";

const Router = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {!auth.isAuthenticated && <Route path="/login" element={<Login />} />}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Router;
