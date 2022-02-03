import { NavLink } from 'react-router-dom';
import SFormMenu from './style';
import MenuBurger from '../MenuBurger';

export default function Menu() {
  return (
    <SFormMenu id="myMenu">
      <MenuBurger />
      <nav className="menu">
        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/">Accueil</NavLink>
          </div>
        </div>
        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/presentation">Présentation</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/clamp">CLAMP</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/manga">Manga</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/anime">Anime</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/card">Liste des cartes</NavLink>
          </div>
        </div>
      </nav>
    </SFormMenu>
  );
}
