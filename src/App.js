import { useEffect, useState } from 'react';

import { format } from 'date-fns-tz';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';
import DateInput from './components/DateInput';

import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';

const TODAY = format(new Date(), 'yyyy-MM-dd', { timeZone: 'America/Sao_Paulo' });

const App = () => {
  const [nome, setNome] = useState('');
  useEffect(() => {
    document.title = nome;
  }, [nome]);

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

      <Main>
        <TextInput
          id={getNewId()}
          label="Digite o seu nome:"
          value={nome}
          handleOnChange={handleChangeNome}
          autoFocus
        />

        <DateInput
          id={getNewId()}
          label="Digite a sua data de nascimento:"
          value={dataNascimento}
          handleOnChange={handleChangeDataNascimento}
        />

        <div>
          <p>O seu nome é {nome}, com {nome.length} caracteres, e você possui {getAgeFrom(dataNascimento)} anos.</p>
        </div>
      </Main>
    </>
  );
}

export default App;
