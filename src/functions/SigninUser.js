import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SigninUser = async (email, password) => {
  try {
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, password);
    return {
      status: "success",
      user,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export default SigninUser;
