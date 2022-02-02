import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import SFormMenuBurger from './style';

export default function MenuBurger() {
  return (
    <SFormMenuBurger id="myMenuBurger">
      <div className="menuBurger">
        <Menu>
          <ul>
            <li>
              <NavLink to="/presentation" className="navLink">
                • Présentation
              </NavLink>
            </li>
            <li>
              <NavLink to="/clamp" className="navLink">
                • CLAMP
              </NavLink>
            </li>
            <li>
              <NavLink to="/manga" className="navLink">
                • Manga
              </NavLink>
            </li>
            <li>
              <NavLink to="/anime" className="navLink">
                • Anime
              </NavLink>
            </li>
            <li>
              <NavLink to="/listcard" className="navLink">
                • Liste des cartes
              </NavLink>
            </li>
          </ul>
        </Menu>
      </div>
    </SFormMenuBurger>
  );
}
