import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import { getVisits } from "../../utils/analytics";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [visits, setVisits] = useState(0);
  const logout = () => signOut(auth);

  useEffect(() => {
    getVisits().then((data) => setVisits(data.visits));
  }, []);

  return (
    <section>
      <header>
        <h1>Dashboard</h1>
      </header>

      {/* logout dev */}
      <div>
        <button onClick={logout}>Logout</button>
      </div>

      <hr />
      <span>{visits}</span>
    </section>
  );
};

export default Dashboard;
