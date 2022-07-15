import { useNavigate } from 'react-router-dom';
import { backPage } from '../../routes/Coodinator';
import { useState } from 'react';
import { Cabecalho, BotaoPadrao } from '../Home/HomeStyled';
import { FormStyle } from './CadastroEmpreendimentoStyled';

const CadastroEmpreendimento = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    nome_empreendimento: '',
    localizacao_empreendimento: '',
    previsao_empreendimento: '',
  });

  const saveData = async (e) => {
    e.preventDefault();

    await fetch('http://localhost/api/empreendimentos/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson));
  };

  const valorInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Cabecalho>
        <h2>Cadastro de Empreendimento</h2>
        <BotaoPadrao
          onClick={() => {
            backPage(navigate);
          }}
        >
          Voltar
        </BotaoPadrao>
      </Cabecalho>
      <br />

      <FormStyle>
        <form onSubmit={saveData}>
          <div>
            <label>Nome: </label>
            <br />
            <input
              type="text"
              name="nome_empreendimento"
              onChange={valorInput}
            />{' '}
          </div>
          <div>
            <label>Localização: </label>
            <br />
            <input
              type="text"
              name="localizacao_empreendimento"
              onChange={valorInput}
            />{' '}
          </div>
          <div>
            <label>Previsão: </label>
            <br />
            <input
              type="number"
              name="previsao_empreendimento"
              onChange={valorInput}
            />{' '}
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </FormStyle>
    </>
  );
};

export default CadastroEmpreendimento;
