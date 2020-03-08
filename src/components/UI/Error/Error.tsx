import React from 'react';
import style from './index.module.scss';
import Button from "../Button/Button";
import { useSelector, useDispatch } from 'react-redux';
import { hideUnexpectedError } from '../../../store/notifications/errors/errorsMessage.actions';
import { getErrors } from '../../../store/notifications/errors/errorMessage.reducer';


const ErrorModal = () => {

  const dispatch = useDispatch();
  const {error} = useSelector(getErrors);

  if(!error) return null;

  return (
    <React.Fragment>
      <div className={style.backdrop} onClick={() => dispatch(hideUnexpectedError())}/>
      <div className={style.modal}>
        <h1 className={style.heading}>Unexpected error</h1>
        <p className={style.desc}>{error}</p>
        <Button className={style.button} onClick={() => dispatch(hideUnexpectedError())}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );
};



export default ErrorModal;
