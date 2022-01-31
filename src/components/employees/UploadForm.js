import { useRef } from 'react';
import readXlsxFile from 'read-excel-file';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './UploadForm.module.css';

const UploadForm = (props) => {

  const fileInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    if (fileInputRef.current.files.length === 0) {
      alert('No valid file found');
      return;
    }

    readXlsxFile(fileInputRef.current.files[0])
      .then((data) => {
        if (data.length === 0) {
          alert('No valid data found in file');
          return;
        }
        const convertedData = data.reduce((a, c) => {
          return [...a, { name: c[0], position: c[1], office: c[2], age: c[3], salary: '$'+c[4] }]
        }, []);
        
        props.onUpload(convertedData);
      })
      .catch(e => console.log(e))
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (<div className={classes.loading}><LoadingSpinner /></div>)}
        <div className={classes.control}>
          <label htmlFor='file'>File</label>
          <input type="file" id="file" ref={fileInputRef} ></input>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Upload data</button>
        </div>
      </form>
    </Card>
  );
};

export default UploadForm;
