import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

const Dashboard = () => {
  const logout = () => signOut(auth);

  return (
    <section>
      <button onClick={logout}>Logout</button>
    </section>
  );
};

export default Dashboard;
