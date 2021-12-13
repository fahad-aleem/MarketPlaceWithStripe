import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import getUserByEmail from "./GetUserByEmail";

const SigninUser = async (email, password) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    const userData = await getUserByEmail(email);
    return {
      status: "success",
      userData,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export default SigninUser;
