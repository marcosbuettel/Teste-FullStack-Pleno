import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroEmpreendimento from '../components/CadastroEmpreendimento/CadastroEmpreendimento';
import Empreendimentos from '../components/Empreendimentos/Empreendimentos';
import Home from '../components/Home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/empreendimentos/:codigo" element={<Empreendimentos />} />
        <Route
          path="/cadastro-empreendimento/"
          element={<CadastroEmpreendimento />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
