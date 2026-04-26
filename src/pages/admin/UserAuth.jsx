import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { user, loading } = useAuth;

  if (loading) return <span>Carregando...</span>;
  if (user) return <span>Usuario ja autenticado!</span>;

  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, pass);
  };

  return (
    <section>
      <header>
        <h2>
          Nutri<strong>LinkAI</strong>
        </h2>
      </header>

      {/* txt de apresentacao de tela */}
      <h3>Entrar</h3>

      {/* formulario */}
      <form action={onSubmit} className="flex flex-col">
        <label>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Senha"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default UserAuth;
