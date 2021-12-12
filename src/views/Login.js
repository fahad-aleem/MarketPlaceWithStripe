import { LoginForm } from "../components/Forms";
import { Typography } from "../components/StyledComponent";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 550px;
  padding: 1rem;
  margin: 0 auto;
`;

const Login = () => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Login Your Account!
      </Typography>
      <LoginForm />
    </Container>
  );
};

export default Login;
