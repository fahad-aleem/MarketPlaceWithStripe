import styled from "@emotion/styled";
import { Typography } from "./StyledComponent";
import { Link } from "react-router-dom";
import { useSelector } from "../store/authStore";

const Navbar = styled.nav`
  padding: 1rem;
  background-color: #f72c25;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

const AppBar = () => {
  const auth = useSelector((state) => state.auth);
  const handleLogout = useSelector((state) => state.setLogout);
  return (
    <Navbar>
      <Typography variant="h5" color="light">
        Mobiles Arena
      </Typography>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Products</Link>
        </NavItem>
        <NavItem>
          <Link to="/">About us</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Support</Link>
        </NavItem>
        <NavItem>
          {auth.isAuthenticated ? (
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppBar;
