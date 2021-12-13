import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase";

async function getUserByEmail(email) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const user = await getDocs(q);
  let userObject = {};
  user.forEach((u) => {
    userObject = { ...u.data() };
  });

  return userObject;
}

export default getUserByEmail;
