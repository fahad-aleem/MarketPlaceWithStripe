import Balance from "../components/Balance";
import { useSelector } from "../store/authStore";
import AccountFailed from "./AccountFailed";
const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return <>{user.isProfileCompleted ? <Balance /> : <AccountFailed />}</>;
};

export default Dashboard;
