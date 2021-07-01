import { useState } from 'react';

import { format } from 'date-fns-tz';

import Header from './components/Header';
import TextInput from './components/TextInput';
import DateInput from './components/DateInput';

import './App.css';

const TODAY = format(new Date(), 'yyyy-MM-dd', { timeZone: 'America/Sao_Paulo' });

const App = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState(TODAY);

  const handleChangeNome = (novoNome) => {
    setNome(novoNome);
  };

  const handleChangeDataNascimento = (novaDataNascimento) => {
    setDataNascimento(novaDataNascimento);
  }

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

        <DateInput
          id="txtNome"
          label="Digite a sua data de nascimento:"
          value={dataNascimento}
          handleOnChange={handleChangeDataNascimento}
        />

        <div>
          <p>O seu nome é {nome}, com {nome.length} caracteres, e você possui 37 anos.</p>
        </div>
      </main>
    </>
  );
}

export default App;
