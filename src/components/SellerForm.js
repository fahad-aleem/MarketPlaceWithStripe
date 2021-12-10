import styled from "@emotion/styled/";
import {
  FormControl,
  FormLabel,
  Label,
  Input,
  Button,
} from "./StyledComponent";
import { useFormik } from "formik";

const Form = styled.form`
  max-width: 680px;
  margin: 2rem auto;
`;

const CustomerForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNo: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <FormControl margin="1rem 0">
        <FormLabel>Username:</FormLabel>
        <Input
          type="text"
          id="username"
          placeholder="John Doe"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="John@gmail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="Type your password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Confirm Password:</FormLabel>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Type your password again"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Contact No.:</FormLabel>
        <Input
          type="text"
          id="contactNo"
          placeholder="031-123-4567"
          value={formik.values.phoneNo}
          onChange={formik.handleChange}
        />
      </FormControl>
      <Button type="submit" radius="5px" width="150px" bg="#f72c25">
        Submit
      </Button>
    </Form>
  );
};

export default CustomerForm;
