import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase";

async function UpdateUserInfo(userId, userInfo) {
  try {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, userInfo);
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

export default UpdateUserInfo;
