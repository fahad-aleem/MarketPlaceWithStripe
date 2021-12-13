import styled from "@emotion/styled";
import { Typography, FlexContainer, Button } from "./StyledComponent";
import userAvatar from "../assets/user.png";
import { useSelector } from "../store/authStore";
import { useEffect, useState } from "react";
import axios from "axios";
import GenerateDashboardLink from "../functions/GenerateDashboardLink";

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

const PayoutBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #f72c25;
  font-size: 16px;
  cursor: pointer;
`;

const Balance = () => {
  const auth = useSelector((state) => state.auth);
  const { username, stripeAccountId, isProfileCompleted } = auth.user;

  const [balance, setBalance] = useState({
    available: 0,
    pending: 0,
    total: 0,
  });
  const [dashboardUrl, setDashboardUrl] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    // get available balance
    axios
      .get(`http://localhost:3000/get-balance/${stripeAccountId}`)
      .then((res) => {
        const { available, pending } = res.data;

        setBalance({
          available: available[0].amount,
          pending: pending[0].amount,
          total: ((available[0].amount + pending[0].amount) / 100).toFixed(2),
        });
        setCurrency(available[0].currency);
        GenerateDashboardLink(stripeAccountId).then((url) => {
          setDashboardUrl(url);
        });
      });
  });

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
              {username}{" "}
              {isProfileCompleted && (
                <ActiveIcon className="fas fa-check"></ActiveIcon>
              )}
            </Typography>
            <Typography variant="p">{stripeAccountId}</Typography>
            <a href={dashboardUrl}>
              <Typography variant="p">View stripe account</Typography>
            </a>
          </div>
        </FlexContainer>
        <FlexContainer direction="column" align="baseline">
          <FlexContainer>
            <Typography>Available Balance: </Typography>
            <Typography margin="0 1rem">
              {currency.toLocaleUpperCase()}&nbsp;
              {(balance.available / 100).toFixed(2)}
            </Typography>
          </FlexContainer>
          <FlexContainer>
            <Typography>Pending Balance: </Typography>
            <Typography margin="0 1rem">
              {currency.toLocaleUpperCase()}&nbsp;
              {(balance.pending / 100).toFixed(2)}
            </Typography>
          </FlexContainer>
          <PayoutBtn>Payout my available balance</PayoutBtn>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default Balance;
