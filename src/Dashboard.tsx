import { useUserContext } from "./context";

function Dashboard() {
  const user = useUserContext();
  return <div>{user.name}</div>;
}

export default Dashboard;
