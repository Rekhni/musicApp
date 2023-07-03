import classes from './MainNav__link.module.css';

const NavLink = ({ linkName }) => {
  return (
    <li className={classes.navLink}>
      <a href="http://" className="menu__link">
        {linkName}
      </a>
    </li>
  );
};

export default NavLink;