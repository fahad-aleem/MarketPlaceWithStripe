import styled from "@emotion/styled/";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
} from "./StyledComponent";
import { useFormik } from "formik";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import db from "../firebase";
import axios from "axios";
import { Link } from "react-router-dom";
import createNewUser from "../functions/CreateNewUser";
import SigninUser from "../functions/SigninUser";
import { useSelector } from "../store/authStore";
import handleGetStripeAccountLink from "../functions/GenerateStripAccountLink";

const Form = styled.form`
  max-width: 680px;
  margin: 0 auto 1rem auto;
`;

const Error = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
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
      <Typography margin="1rem 0">
        Already have an account? <Link to="/login">login here</Link>
      </Typography>
      <Button type="submit" radius="5px" width="150px" bg="#f72c25">
        Submit
      </Button>
    </Form>
  );
};

const SellerForm = () => {
  const [loading, setLoading] = useState(false);
  const handeLogin = useSelector((state) => state.setAuth);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username required";
    } else if (!values.email) {
      errors.email = "Email Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else if (!values.businessOwnerName) {
      errors.businessOwnerName = "Business Owner Name Required";
    } else if (!values.shopName) {
      errors.shopName = "Business Name Required";
    } else if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    } else if (!values.contactNo) {
      errors.contactNo = "Contact No. Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNo: "",
      businessOwnerName: "",
      shopName: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        createNewUser(values.email, values.password).then((res) => {
          if (res.status === "success") {
            axios({
              method: "post",
              url: "http://localhost:3000/create-account",
              data: {
                email: values.email,
              },
            })
              .then(async (resp) => {
                // save the account details to the firebase
                await setDoc(doc(db, "users", resp.data.id), {
                  id: resp.data.id,
                  username: values.username,
                  email: values.email,
                  contactNo: values.contactNo,
                  role: "seller",
                  businessOwnerName: values.businessOwnerName,
                  shopName: values.shopName,
                  isProfileCompleted: false,
                  stripeAccountId: resp.data.id,
                });
                // empty the values
                formik.setValues({
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  contactNo: "",
                  businessOwnerName: "",
                  shopName: "",
                });
                // get the stripe account link
                // this function will redirect the user to the link that will be generated by the stripe
                // from here the user onboarding starts
                const accountLink = await handleGetStripeAccountLink(
                  resp.data.id
                );

                // login the user with signup data
                const user = await SigninUser(values.email, values.password);
                // store the user to the store
                handeLogin(user.userData);
                setLoading(false);
                // redirect the user to the link
                window.location.href = accountLink.url;
              })
              .catch((err) => {
                setLoading(false);
                alert(err.message);
              });
          } else if (res.status === "error") {
            setLoading(false);
            alert(res.message);
          }
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      noValidate
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
        {formik.errors.username ? (
          <Error>{formik.errors.username}</Error>
        ) : null}
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Business Owner Name:</FormLabel>
        <Input
          type="text"
          id="businessOwnerName"
          placeholder="John Doe"
          value={formik.values.businessOwnerName}
          onChange={formik.handleChange}
        />
        {formik.errors.businessOwnerName ? (
          <Error>{formik.errors.businessOwnerName}</Error>
        ) : null}
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Business Name:</FormLabel>
        <Input
          type="text"
          id="shopName"
          placeholder="Indus Valley Labs"
          value={formik.values.shopName}
          onChange={formik.handleChange}
        />
        {formik.errors.shopName ? (
          <Error>{formik.errors.shopName}</Error>
        ) : null}
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
        {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
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
        {formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
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
        {formik.errors.confirmPassword ? (
          <Error>{formik.errors.confirmPassword}</Error>
        ) : null}
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
        {formik.errors.contactNo ? (
          <Error>{formik.errors.contactNo}</Error>
        ) : null}
      </FormControl>
      <Typography margin="1rem 0">
        Already have an account? <Link to="/login">login here</Link>
      </Typography>
      <Button
        type="submit"
        radius="5px"
        disabled={loading}
        width="200px"
        bg="#f72c25"
      >
        {loading ? "Please wait..." : "Signup"}
      </Button>
    </Form>
  );
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = useSelector((state) => state.setAuth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const user = await SigninUser(values.email, values.password);
      setLoading(false);
      if (user.status === "success") {
        alert("Login Successful");
        handleLogin(user.userData);
      } else if (user.status === "error") {
        setLoading(false);
        alert(user.message);
      }
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
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          id="email"
          value={formik.values.email}
          placeholder="John@gmail.com"
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl margin="1rem 0">
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          id="password"
          value={formik.values.password}
          placeholder="Type your password"
          onChange={formik.handleChange}
        />
      </FormControl>
      <Typography margin="1rem 0">
        If you don't have an account?{" "}
        <Link to="/signup">Create an account!</Link>
      </Typography>
      <Button
        type="submit"
        radius="5px"
        disabled={loading}
        width="200px"
        bg="#f72c25"
      >
        {loading ? "Please wait..." : "Login"}
      </Button>
    </Form>
  );
};

export { CustomerForm, SellerForm, LoginForm };
