import styled from "@emotion/styled";

const Typography = styled.h1`
  font-size: ${(props) =>
    props.variant === "h1"
      ? "4rem"
      : props.variant === "h2"
      ? "3rem"
      : props.variant === "h3"
      ? "2rem"
      : props.variant === "p"
      ? "16px"
      : "1.2rem"};

  color: ${(props) => (props.color === "light" ? "#efefef" : "#000")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const Button = styled.button`
  font-size: 1.2rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) => (props.bg ? props.bg : "#000")};
  color: ${(props) => (props.color === "light" ? "#000" : "#efefef")};
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  padding: 12px 0;
  cursor: pointer;
  outline: none;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const Input = styled.input`
  font-size: 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.5rem 0.8rem")};
  border-radius: 5px;
  border: 1px solid #d5d5d5 !important;
  outline: ${(props) => (props.outline ? props.outline : "none")};
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  align-items: ${(props) => (props.align ? props.align : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const LinkButton = styled.p`
  font-size: 1.2rem;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  cursor: pointer;
  text-decoration: underline;
  color: ${(props) => (props.color ? props.color : "#000")};
  &:hover {
    background-color: ${(props) =>
      props.color === "light" ? "#efefef" : "#000"};
    color: ${(props) => (props.color === "light" ? "#000" : "#efefef")};
  }
`;

export {
  Typography,
  Button,
  FormControl,
  Input,
  FormLabel,
  FlexContainer,
  LinkButton,
};
