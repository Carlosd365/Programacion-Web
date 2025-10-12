import React, { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("hide");
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

  const handleHide = async () => {
    if (!secret.trim()) {
      setResult({ type: "error", value: "Por favor escribe un secreto." });
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/hide/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ type: "key", value: data.key });
        setSecret("");
      } else {
        setResult({ type: "error", value: data.error });
      }
    } catch {
      setResult({ type: "error", value: "Error de conexión con el servidor." });
    }
  };

  const handleReveal = async () => {
    if (!key.trim()) {
      setResult({ type: "error", value: "Por favor escribe una clave." });
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/reveal/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ type: "secret", value: data.secret });
        setKey("");
      } else {
        setResult({ type: "error", value: data.error });
      }
    } catch {
      setResult({ type: "error", value: "Error de conexión con el servidor." });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="App">
      <h1>Secure Text App</h1>

      <div className="tabs">
        <button
          className={tab === "hide" ? "active" : ""}
          onClick={() => {
            setResult(null);
            setTab("hide");
          }}
        >
          Ocultar
        </button>
        <button
          className={tab === "reveal" ? "active" : ""}
          onClick={() => {
            setResult(null);
            setTab("reveal");
          }}
        >
          Revelar
        </button>
      </div>

      <div className="content">
        {tab === "hide" && (
          <>
            <textarea
              placeholder="Escribe aquí tu secreto..."
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            <button onClick={handleHide}>Ocultar</button>
          </>
        )}

        {tab === "reveal" && (
          <>
            <input
              type="text"
              placeholder="Pega aquí tu clave..."
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            <button onClick={handleReveal}>Revelar</button>
          </>
        )}

        {result && (
          <div
            className={`result-container ${
              result.type === "error"
                ? "error"
                : result.type === "secret"
                ? "secret"
                : "key"
            }`}
          >
            {result.type === "key" && (
              <>
                <h4>Tu clave secreta</h4>
                <div className="inline-box">
                  <code>{result.value}</code>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(result.value)}
                  >
                    {copied ? "Copiado" : "Copiar"}
                  </button>
                </div>
                <p className="note">Guárdala, solo podrás usarla una vez.</p>
              </>
            )}

            {result.type === "secret" && (
              <>
                <h4>Secreto revelado</h4>
                <div className="inline-box">
                  <p>{result.value}</p>
                </div>
              </>
            )}

            {result.type === "error" && <p className="error-msg">{result.value}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
