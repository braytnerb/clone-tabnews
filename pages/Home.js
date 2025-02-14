import React, { useState } from "react";

function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <h1 className="title">ADILA MEU AMOR E ANALU TB E A KAINHA</h1>
      <p className="subtitle">Aqui você encontra o que tanto espera:</p>
      <button className="btn" onClick={() => setShowMessage(true)}>
        Mostrar Mensagem
      </button>
      {showMessage && (
        <div className="message-box">
          <p>aqui voce encontra o que tanto espera:</p>
          <p className="encoded-text">QWRpbGEgcXVlciBjYXNhciBjb21pZ28/Cg==</p>
        </div>
      )}
    </div>
  );
}

export default Home;
