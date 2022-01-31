import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import UploadForm from '../components/employees/UploadForm';
import useHttp from '../hooks/use-http';
import { uploadData } from '../lib/api';

const UploadDetails = () => {
  const { sendRequest, status } = useHttp(uploadData);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/empl-details');
    }
  }, [status, history]);

  const onUploadHandler = (xlData) => {
    sendRequest(xlData);
  };

  return <UploadForm isLoading={status === 'pending'} onUpload={onUploadHandler} />;
};

export default UploadDetails;
