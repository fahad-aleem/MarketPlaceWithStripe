import {
  Typography,
  Button,
  FlexContainer,
} from "../components/StyledComponent";
import styled from "@emotion/styled/";
import handleGetStripeAccountLink from "../functions/GenerateStripAccountLink";
import { useSelector } from "../store/authStore";
const Container = styled.div`
  max-width: 650px;
  margin: 1rem auto;
  padding: 2rem;
`;
const AccountFailed = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Container>
      <FlexContainer direction="column">
        <Typography align="center">
          You have not completed your onboarding process. Because of this, you
          can not access your account. click the button below to complete your
          onboarding process.
        </Typography>
        <Button
          radius="5px"
          width="260px"
          margin="1rem"
          onClick={async () => {
            const response = await handleGetStripeAccountLink(
              auth.user.stripeAccountId
            );
            window.location.href = response.url;
          }}
        >
          Complete Onboarding
        </Button>
      </FlexContainer>
    </Container>
  );
};

export default AccountFailed;
