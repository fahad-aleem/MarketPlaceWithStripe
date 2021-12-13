import {
  Typography,
  Button,
  FlexContainer,
} from "../components/StyledComponent";
import styled from "@emotion/styled/";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import GetStripeAccountDetails from "../functions/GetStripeAccountDetails";
import { useSelector } from "../store/authStore";
const Container = styled.div`
  max-width: 650px;
  margin: 1rem auto;
  padding: 2rem;
`;
const AccountSuccess = () => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(auth);
    GetStripeAccountDetails(auth.user.stripeAccountId).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Container>
      <FlexContainer direction="column">
        <Typography align="center">
          Congratulations! You have completed your stripe onboarding. You can
          now get payout to your bank account.
        </Typography>
        <Link to="/dashboard">
          <Button radius="5px" width="200px" margin="1rem">
            Go to dashboard
          </Button>
        </Link>
      </FlexContainer>
    </Container>
  );
};

export default AccountSuccess;
