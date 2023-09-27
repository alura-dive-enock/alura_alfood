import { Routes, Route } from 'react-router-dom';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';
import FormularioPrato from './paginas/Administracao/Pratos/FormularioPrato';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormularioRestaurante from './paginas/Administracao/Restaurantes/FormularioRestaurante';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="alura_alfood/" element={<Home />} />
      <Route path="alura_alfood/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='alura_alfood/admin' element={<PaginaBaseAdmin />} />

      <Route path="alura_alfood/admin/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="alura_alfood/admin/restaurantes/novo" element={<FormularioRestaurante />} />
      <Route path="alura_alfood/admin/restaurantes/:id" element={<FormularioRestaurante />} />

      <Route path="alura_alfood/admin/pratos" element={<AdministracaoPratos />} />
      <Route path="alura_alfood/admin/pratos/novo" element={<FormularioPrato />} />
    

    </Routes>
  );
}

export default App;
