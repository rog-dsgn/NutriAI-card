import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Correção: useAuth geralmente é uma função que retorna {user, loading}
  const { loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <span className="text-emerald-600 font-medium animate-pulse">
          Carregando...
        </span>
      </div>
    );

  // if (user)
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-slate-50">
  //       <span className="text-slate-600">Usuário já autenticado!</span>
  //     </div>
  //   );

  const onSubmit = (e) => {
    e.preventDefault(); // Previne o refresh da página
    signInWithEmailAndPassword(auth, email, pass);
  };

  return (
    <section className="min-h-screen w-2xl shadow-2xl flex items-center justify-center bg-slate-50 p-4 font-sans">
      <div className="w-full max-w-md bg-white overflow-hidden p-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-light text-slate-800 tracking-tight">
            Nutri<strong className="font-bold text-emerald-500">Link</strong>
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mx-auto mt-2 rounded-full"></div>
        </header>

        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            Bem-vindo de volta
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Acesse sua conta estratégica
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-4 tracking-wider">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-slate-300 text-slate-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-4 tracking-wider">
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-slate-300 text-slate-600"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-4 bg-linear-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Entrar no Painel
          </button>
        </form>

        {/* <footer className="mt-8 text-center">
          <p className="text-slate-400 text-xs">
            Esqueceu a senha?{" "}
            <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
              Recuperar acesso
            </span>
          </p>
        </footer> */}
      </div>
    </section>
  );
};

export default UserAuth;
