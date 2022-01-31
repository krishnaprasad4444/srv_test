import { Link } from 'react-router-dom';

import classes from './NoDataFound.module.css';

const NoDataFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No employee data found!</p>
      <Link className='btn' to='/up-details'>upload data</Link>
    </div>
  );
};

export default NoDataFound;
