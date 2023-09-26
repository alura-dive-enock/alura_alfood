import estilos from './Rodape.module.scss';

const NavBar = () => {
  return (<footer className={estilos.Rodape}>
    <div>
      <p>Copyright &copy; {new Date().getFullYear()} Alfood - Enock</p>
    </div>
    <div>
      <ul className="social-icons">
        <li><i className="fa fa-facebook"></i></li>
        <li><i className="fa fa-twitter"></i></li>
        <li><a href="http://www.linkedin.com/in/bernardoenock/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
        <li><i className="fa fa-rss"></i></li>
        <li><i className="fa fa-dribbble"></i></li>
      </ul>
    </div>
    <div>
      <p>Uma alegria <em>a cada prato</em></p>
    </div>
  </footer>)
}

export default NavBar