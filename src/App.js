import { useEffect, useState } from 'react';

import { format } from 'date-fns-tz';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';
import DateInput from './components/DateInput';
import Timer from './components/Timer';

import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';
import CheckInput from './components/CheckInput';
import OnlineOffline from './components/OnlineOffline';

const TODAY = format(new Date(), 'yyyy-MM-dd', { timeZone: 'America/Sao_Paulo' });

const App = () => {

  const [showTimer, setShowTimer] = useState(false);
  const toggleShowTimer = () => {
    setShowTimer(currentValue => !currentValue);
  };

  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const toggleOnline = () => setIsOnline(true);
    const toggleOffline = () => setIsOnline(false);

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline)
    }
  }, [])

  const [nome, setNome] = useState('');
  const handleChangeNome = (novoNome) => {
    setNome(novoNome);
  };
  useEffect(() => {
    document.title = nome;
  }, [nome]);

  const [dataNascimento, setDataNascimento] = useState(TODAY);
  const handleChangeDataNascimento = (novaDataNascimento) => {
    setDataNascimento(novaDataNascimento);
  };

  return (
    <>
      <Header>igti-react-hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}

        <CheckInput
          id={getNewId()}
          label="Mostrar cronômetro"
          handleOnChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId()}
          label="Digite o seu nome:"
          value={nome}
          handleOnChange={handleChangeNome}
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
