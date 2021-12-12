import { getAuth, createUserWithEmailAndPassword } from "../firebase";

const createNewUser = async (email, password) => {
  try {
    const auth = getAuth();
    const user = await createUserWithEmailAndPassword(auth, email, password);
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

export default createNewUser;
