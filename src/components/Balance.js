import styled from "@emotion/styled";
import { Typography, FlexContainer } from "./StyledComponent";
import userAvatar from "../assets/user.png";
import { useSelector } from "../store/authStore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

const ActiveIcon = styled.i`
  color: #00b894;
`;

const Balance = () => {
  const auth = useSelector((state) => state.auth);
  const { username, stripeAccountId } = auth.user;

  const [balance, setBalance] = useState({
    available: 0,
    pending: 0,
  });

  useEffect(() => {
    // get available balance
    axios
      .get(`http://localhost:3000/get-balance/${stripeAccountId}`)
      .then((res) => {
        const { available, pending } = res.data;

        setBalance({
          available: available[0].amount,
          pending: pending[0].amount,
        });
      });
  }, []);

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
              {username} <ActiveIcon className="fas fa-check"></ActiveIcon>
            </Typography>
            <Typography variant="p">{stripeAccountId}</Typography>
            <Link to="/">
              <Typography variant="p">View stripe account</Typography>
            </Link>
          </div>
        </FlexContainer>
        <FlexContainer direction="column">
          <FlexContainer>
            <Typography>Your Available Balance: </Typography>
            <Typography margin="0 1rem">
              ${balance.available.toFixed(2)}
            </Typography>
          </FlexContainer>
          <FlexContainer>
            <Typography>Your Pending Balance: </Typography>
            <Typography margin="0 1rem">
              ${balance.pending.toFixed(2)}
            </Typography>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default Balance;
