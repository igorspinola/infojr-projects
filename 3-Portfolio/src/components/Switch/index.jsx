import { useState } from 'react';
import { useEffect } from 'react';
import './styles.scss';

function Switch() {
  const [tema, setTema] = useState('claro');

  document.body.setAttribute('tema-atual', tema);
  
  function switchMode() {
    const novoTema = tema == 'claro'? 'escuro': 'claro';
    setTema(novoTema);
  };

  useEffect(() => {
    document.body.setAttribute('tema-atual', tema);
  }, [tema]);

  return (
    <div id='switch'>
      <input type='checkbox' id='checkbox' onChange={switchMode}/>
      <label htmlFor='checkbox'></label>
    </div>
  );
};

export default Switch;

