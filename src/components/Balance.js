import styled from "@emotion/styled";
import { Typography, FlexContainer } from "./StyledComponent";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Balance = () => {
  return (
    <Container>
      <Typography>Balance</Typography>
    </Container>
  );
};

export default Balance;
