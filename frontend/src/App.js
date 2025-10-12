import React, { useState } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('hide');
  const [secret, setSecret] = useState('');
  const [key, setKey] = useState('');
  const [response, setResponse] = useState('');

  const API_BASE = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

  const handleHide = async () => {
    if (!secret.trim()) {
      setResponse('Por favor escribe un secreto.');
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/hide/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret })
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(`Tu clave secreta es: ${data.key}`);
        setSecret('');
      } else {
        setResponse(data.error || 'Error al ocultar el secreto.');
      }
    } catch (error) {
      setResponse('Error de conexión con el backend.');
    }
  };

  const handleReveal = async () => {
    if (!key.trim()) {
      setResponse('Por favor escribe una clave.');
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/reveal/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(`Secreto revelado: ${data.secret}`);
        setKey('');
      } else {
        setResponse(data.error || 'Error al revelar el secreto.');
      }
    } catch (error) {
      setResponse('Error de conexión con el backend.');
    }
  };

  return (
    <div className="App">
      <h1>Secure Link App</h1>

      <div className="tabs">
        <button
          className={tab === 'hide' ? 'active' : ''}
          onClick={() => { setResponse(''); setTab('hide'); }}
        >
          Ocultar
        </button>
        <button
          className={tab === 'reveal' ? 'active' : ''}
          onClick={() => { setResponse(''); setTab('reveal'); }}
        >
          Revelar
        </button>
      </div>

      <div className="content">
        {tab === 'hide' && (
          <>
            <input
              placeholder="Escribe aquí tu secreto..."
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            <button onClick={handleHide}>Ocultar</button>
          </>
        )}

        {tab === 'reveal' && (
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

        {response && <p className="response">{response}</p>}
      </div>
    </div>
  );
}

export default App;
