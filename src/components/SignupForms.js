import { Typography, FlexContainer } from "./StyledComponent";
import styled from "@emotion/styled";
import { useState } from "react";
import { CustomerForm, SellerForm } from "./Forms";

const LinkButton = styled.button`
  font-size: 1.2rem;
  width: 200px;
  margin: 0 0.3rem;
  padding: 0.4rem;
  background-color: ${(props) => (props.selected ? "#000" : "#fff")};
  border: none;
  border: 1px solid #000;
  border-radius: 5px;
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #090910;
    color: #fff;
  }
`;

const LoginForm = () => {
  const [isSeller, setIsSeller] = useState();
  return (
    <div>
      <Typography variant="h3" align="center" margin="1rem 0">
        Create your account to get started!
      </Typography>
      <FlexContainer justify="center" direction="column">
        <FlexContainer>
          <LinkButton
            background="light"
            onClick={() => {
              setIsSeller(false);
            }}
            selected={!isSeller}
          >
            Customer
          </LinkButton>
          <LinkButton
            selected={isSeller}
            onClick={() => {
              setIsSeller(true);
            }}
          >
            Seller
          </LinkButton>
        </FlexContainer>
        <Typography variant="h3" align="center" margin="1rem 0 0 0">
          {isSeller ? "Signup as Seller" : "Signup as Customer"}
        </Typography>
      </FlexContainer>
      {isSeller ? <SellerForm /> : <CustomerForm />}
    </div>
  );
};

export default LoginForm;
