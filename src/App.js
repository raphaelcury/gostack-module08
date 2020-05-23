import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  /* DidUpdate */
  useEffect(() => {
    if (techs.length > 0) {
      localStorage.setItem('techs', JSON.stringify(techs));
    }
  }, [techs]);

  /* DidMount */
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');
    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p>Você tem {techsSize} tecnologias</p>
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTechs([...techs, newTech]);
          setNewTech('');
        }}
      >
        Adicionar
      </button>
    </>
  );
}

export default App;
