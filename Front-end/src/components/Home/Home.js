import { useRequestData } from '../../hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import {
  goToEmpreendimentosPage,
  goToCadastroEmpreendimentoPage,
} from '../../routes/Coodinator';
import { Cabecalho, BotaoPadrao } from './HomeStyled';
import { URL_BASE } from '../../constants/URL_BASE';
import { TableStyle } from '../Empreendimentos/EmpreendimentosStyled';

const Home = () => {
  const dados = useRequestData(`${URL_BASE}empreendimentos/`);
  const navigate = useNavigate();

  const empreendimentosList =
    dados[0] &&
    dados[0].map((dado) => {
      return (
        <tbody key={dado.codigo_empreendimento}>
          <tr>
            <td>
              <button
                onClick={() => {
                  goToEmpreendimentosPage(navigate, dado.codigo_empreendimento);
                }}
              >
                VER
              </button>
              {dado.nome_empreendimento}
            </td>
            <td>{dado.localizacao_empreendimento}</td>
            <td>{dado.previsao_entrega_empreendimento}</td>
          </tr>
        </tbody>
      );
    });

  return (
    <>
      <Cabecalho>
        <h2>Home</h2>
        <BotaoPadrao
          onClick={() => {
            goToCadastroEmpreendimentoPage(navigate);
          }}
        >
          Cadastrar Empreendimento
        </BotaoPadrao>
      </Cabecalho>
      <div>
        <h3>Nossos Empreendimentos</h3>

        <TableStyle>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Localização</th>
              <th>Previsão</th>
            </tr>
          </thead>
          {empreendimentosList}
        </TableStyle>
      </div>
    </>
  );
};

export default Home;
