import { useEffect } from 'react';

import EmployeeList from '../components/employees/EmployeeList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoDataFound from '../components/employees/NoDataFound';
import useHttp from '../hooks/use-http';
import { downloadData } from '../lib/api';

const EmployeeDetails = () => {
  const { sendRequest, status, data: xlData, error } = useHttp(downloadData, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return <div className='centered'><LoadingSpinner /></div>
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!xlData || xlData.length === 0)) {
    return <NoDataFound />;
  }

  return <EmployeeList data={xlData} />;
};

export default EmployeeDetails;
