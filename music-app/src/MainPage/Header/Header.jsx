import classes from './Header.module.css';
import logo from 'img/logo.png';

import Search from '../Header__search/Header__search';
import SidebarPersonal from '../Header__sidebar/Header__sidebar';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
      </div>
      <Search />
      <SidebarPersonal />
    </header>
  );
};

export default Header;