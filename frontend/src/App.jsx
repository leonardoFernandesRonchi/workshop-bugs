import { useState, useEffect } from "react";

const API = "http://localhost:3000";

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(`${API}/usuarios`)
      .then((r) => r.json())
      .then((dados) => setUsuarios(dados));
  }, []);

  async function adicionar(e) {
    e.preventDefault();
    const res = await fetch(`${API}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email }),
    });
    const novo = await res.json();
    setUsuarios([...usuarios, novo]);
    setNome("");
    setEmail("");
  }

  async function remover(id) {
    await fetch(`${API}/usuarios/${id}`, { method: "DELETE" });
    setUsuarios(usuarios.filter((u) => u.id !== id));
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h1>Usuários</h1>

      <form onSubmit={adicionar}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => remover(u.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
