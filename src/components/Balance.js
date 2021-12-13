import styled from "@emotion/styled";
import { Typography, FlexContainer } from "./StyledComponent";
import userAvatar from "../assets/user.png";
import { useSelector } from "../store/authStore";

const Container = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #eaeaea;
  border-radius: 5px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;

const Balance = () => {
  const auth = useSelector((state) => state.auth);
  const { email, username, stripeAccountId } = auth.user;
  return (
    <Container>
      <Typography variant="h3" align="center">
        Balance Status
      </Typography>
      <FlexContainer>
        <FlexContainer>
          <Avatar src={userAvatar} alt="user avatar" />
          <div>
            <Typography variant="h4">
              {username} <i class="fas fa-check"></i>
            </Typography>
            <Typography variant="p">{stripeAccountId}</Typography>
          </div>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default Balance;
