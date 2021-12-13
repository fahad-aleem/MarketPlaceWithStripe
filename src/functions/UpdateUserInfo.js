import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase";

async function UpdateUserInfo(userId, userInfo) {
  try {
    await db.collection("users").doc(userId).update(userInfo);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
