import styled from "@emotion/styled";
import { Typography, Button } from "./StyledComponent";
import { Link } from "react-router-dom";

const Box = styled.div`
  height: 100vh !important;
  background-color: #f72c25;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomeHeader = () => {
  return (
    <Box>
      <Typography variant="h1" color="light" align="center">
        Buy and Sell amazing stuff
      </Typography>
      <Typography variant="h4" color="light" align="center">
        Click on the button below to get started!
      </Typography>
      <Link
        to="/login"
        style={{ textAlign: "center", width: "200px", margin: "0 auto" }}
      >
        <Button width="200px" margin="2rem auto" color="light" radius="5px">
          Explore...
        </Button>
      </Link>
    </Box>
  );
};

export default HomeHeader;
