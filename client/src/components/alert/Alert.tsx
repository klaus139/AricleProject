import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { RootStore } from '../../utils/Type';
import Loading from './Loading';
import Toast from './Toast';


export const Alert = () => {
  const {alert} = useSelector((state: RootStore) => state);
  const [displayErrors, setDisplayErrors] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  useEffect(() => {
    if (alert.errors) {
      setDisplayErrors(true);
      const errorTimeout = setTimeout(() => {
        setDisplayErrors(false);
      }, 5000);
      return () => clearTimeout(errorTimeout);
    }
  }, [alert.errors]);

  useEffect(() => {
    if (alert.success) {
      setDisplaySuccess(true);
      const successTimeout = setTimeout(() => {
        setDisplaySuccess(false);
      }, 5000);
      return () => clearTimeout(successTimeout);
    }
  }, [alert.success]);
  return (
    <div>
        {alert.loading && <Loading />}
        {displayErrors &&  
         alert.errors &&  
          <Toast 
          title="Errors"
          body={alert.errors}
          bgColor="bg-danger"
          />
        }
        {displaySuccess &&
         alert.success &&  
          <Toast 
          title="Success"
          body={alert.success}
          bgColor="bg-success"
          />
        }
    </div>
  )
}

export const showErrMsg = (msg:string) => {
  return <div className='errMsg'>{msg}</div>
}

export const showSuccessMsg = (msg: string) => {
  return <div className='successMsg'>{msg}</div>
}