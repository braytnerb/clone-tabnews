import { useState } from "react";
import "./styles.css";

function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Adila, Analu e Aika, vocês são meus amores</h1>
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
