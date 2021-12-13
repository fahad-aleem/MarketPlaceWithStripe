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
import UpdateUserInfo from "../functions/UpdateUserInfo";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  max-width: 650px;
  margin: 1rem auto;
  padding: 2rem;
`;
const AccountSuccess = () => {
  const auth = useSelector((state) => state.auth);
  const handleSetAuth = useSelector((state) => state.setAuth);
  const Navigate = useNavigate();
  useEffect(() => {
    if (auth.user.isProfileCompleted) {
      Navigate("/dashboard");
    }

    GetStripeAccountDetails(auth.user.stripeAccountId).then((res) => {
      if (res.details_submitted) {
        // update the user info
        UpdateUserInfo(auth.user.id, {
          ...auth.user,
          isProfileCompleted: true,
        });
      }
    });
  });
  return (
    <Container>
      <FlexContainer direction="column">
        <Typography align="center">
          Congratulations! You have completed your stripe onboarding. You can
          now get payout to your bank account.
        </Typography>
        <Link to="/dashboard">
          <Button
            radius="5px"
            width="200px"
            margin="1rem"
            onClick={() => {
              // update store
              handleSetAuth({
                ...auth.user,
                isProfileCompleted: true,
              });
            }}
          >
            Go to dashboard
          </Button>
        </Link>
      </FlexContainer>
    </Container>
  );
};

export default AccountSuccess;
