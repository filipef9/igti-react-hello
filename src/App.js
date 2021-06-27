import { useState } from 'react';

import Header from './components/Header';
import TextInput from './components/TextInput';

import './App.css';

const App = () => {
  const [nome, setNome] = useState('');

  const handleChangeNome = (novoNome) => {
    setNome(novoNome);
  };

  return (
    <>
      <Header>igti-react-hello</Header>

      <main>
        <TextInput
          id="txtNome"
          label="Digite o seu nome:"
          value={nome}
          handleOnChange={handleChangeNome}
          autoFocus
        />

        <div>
          <p>O seu nome é {nome}, com {nome.length} caracteres, e você possui 37 anos.</p>
        </div>
      </main>
    </>
  );
}

export default App;
