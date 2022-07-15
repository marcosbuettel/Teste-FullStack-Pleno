import { useParams, useNavigate } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { URL_BASE } from '../../constants/URL_BASE';
import { backPage } from '../../routes/Coodinator';
import { Cabecalho, BotaoPadrao } from '../Home/HomeStyled';
import { TableStyle } from './EmpreendimentosStyled';

const Empreendimentos = () => {
  const pathParams = useParams();
  const navigate = useNavigate();
  const empreendimento = useRequestData(
    `${URL_BASE}empreendimentos/${pathParams.codigo}`,
  );
  const unidades = useRequestData(`${URL_BASE}unidades`);

  const deletar = async (tipo, codigo) => {
    await fetch(`http://localhost/api/${tipo}/${codigo}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson));
  };

  const unidadesList =
    unidades[0] &&
    unidades[0]
      .filter((unidade) => {
        return unidade.codigo_empreendimento === pathParams.codigo;
      })
      .map((unidade) => {
        return (
          <tbody key={unidade.codigo_unidade}>
            <tr>
              <td>{unidade.codigo_unidade}</td>
              <td>{unidade.valor_unidade}</td>
              <td>{unidade.status_unidade}</td>
              <td>
                <button>Editar</button> |{' '}
                <button
                  onClick={() => {
                    deletar('unidades', unidade.codigo_unidade);
                  }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        );
      });
  return (
    empreendimento[0] && (
      <>
        <Cabecalho>
          <h1>{empreendimento[0].nome_empreendimento}</h1>
          <BotaoPadrao
            onClick={() => {
              backPage(navigate);
            }}
          >
            Voltar
          </BotaoPadrao>
        </Cabecalho>
        <p>{empreendimento[0].localizacao_empreendimento}</p>
        <button
          onClick={() => {
            deletar('empreendimentos', pathParams.codigo);
          }}
        >
          Excluir empreendimento
        </button>
        <br />
        <br />
        <h2>Unidades:</h2>
        <TableStyle>
          <thead>
            <tr>
              <th>Bloco</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          {unidadesList}
        </TableStyle>
      </>
    )
  );
};

export default Empreendimentos;
