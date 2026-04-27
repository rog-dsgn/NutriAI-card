import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useEffect, useState } from "react";

const HOOK = {
  n8nWebhookUrl: "https://nutriai2.app.n8n.cloud/webhook/metrics",
};

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const logout = () => signOut(auth);

  useEffect(() => {
    fetch(HOOK.n8nWebhookUrl)
      .then((res) => res.json())
      .then((data) => setMetrics(data));
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

      <div>{metrics?.contador}</div>
    </section>
  );
};

export default Dashboard;
