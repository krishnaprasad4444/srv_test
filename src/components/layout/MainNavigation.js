import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ABC Company</div>
      <nav className={classes.nav}>
        <ul>
          <li><NavLink to='/up-details' activeClassName={classes.active}>Upload</NavLink></li>
          <li><NavLink to='/empl-details' activeClassName={classes.active}>Employees</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
