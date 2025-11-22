import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [users, setUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("users")) || {};
    } catch {
      return {};
    }
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("login");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const validate = () => {
    if (!email || !senha) {
      setMessage("Preencha email e senha.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Email inválido.");
      return false;
    }
    if (senha.length < 4) {
      setMessage("Senha muito curta (mínimo 4 caracteres).");
      return false;
    }
    return true;
  };

  const handleCadastro = () => {
    if (!validate()) return;

    if (users[email]) {
      setMessage("Usuário já existe!");
      return;
    }

    setUsers((prev) => ({ ...prev, [email]: senha }));
    setMessage("Cadastro realizado com sucesso!");
    setEmail("");
    setSenha("");
  };

  const handleLogin = () => {
    if (!validate()) return;

    if (!users[email]) {
      setMessage("Usuário não encontrado!");
      return;
    }

    if (users[email] !== senha) {
      setMessage("Usuário ou senha inválidos!");
      return;
    }

    setMessage("Login realizado com sucesso!");
    setEmail("");
    setSenha("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") handleLogin();
    else handleCadastro();
  };

  const toggleMode = (next) => {
    setMode(next);
    setMessage("");
  };

  return (
    <div className="login-background">
      <div className="login-panel">
        <h2>{mode === "login" ? "FAÇA SEU LOGIN." : "CRIE SUA CONTA."}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span className="sr-only">Email</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
          </label>

          <label>
            <span className="sr-only">Senha</span>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              aria-label="Senha"
            />
          </label>

          {mode === "login" && (
            <div className="login-links">
              <button
                type="button"
                className="link-button"
                onClick={() => setMessage("Recuperação ainda não implementada.")}
              >
                Esqueceu a senha
              </button>
            </div>
          )}

          <button type="submit">{mode === "login" ? "Entrar" : "Cadastrar"}</button>

          <button
            type="button"
            className="secondary"
            onClick={() => toggleMode(mode === "login" ? "cadastro" : "login")}
          >
            {mode === "login" ? "Criar Conta" : "Voltar ao Login"}
          </button>
        </form>

        <p className="message" role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </div>
  );
}

export default App;
