import { Typography } from "../components/StyledComponent";
import styled from "@emotion/styled";
import AddNewProductForm from "../components/AddNewProduct";

const Container = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
`;

const AddProduct = () => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Add New Mobile
      </Typography>
      <Typography variant="p" align="center">
        Add new product to sell them and get paid for it.
      </Typography>
      <AddNewProductForm />
    </Container>
  );
};

export default AddProduct;
