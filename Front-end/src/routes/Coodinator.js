export const goHome = (navigate) => {
  navigate('/');
};

export const goToEmpreendimentosPage = (navigate, codigo) => {
  navigate(`/empreendimentos/${codigo}`);
};

export const goToCadastroEmpreendimentoPage = (navigate) => {
  navigate(`/cadastro-empreendimento/`);
};

export const backPage = (navigate) => {
  navigate(-1);
};
