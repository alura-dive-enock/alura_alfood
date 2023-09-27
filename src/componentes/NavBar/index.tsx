import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<nav className={estilos.Link}>
    <ul>
      <li>
        <Link to="/alura_alfood">Home</Link>
      </li>
      <li>
        <Link to="restaurantes">Restaurantes</Link>
      </li>
      <li>
        <Link to="admin">Admin</Link>
      </li>
    </ul>
  </nav>)
}

export default NavBar