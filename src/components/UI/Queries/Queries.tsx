import React from 'react';
import style from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchbarReducer } from '../../../store/searchbar/searchbar.reducer';
import { onFormSubmit, clearKeywords } from '../../../store/searchbar/searchbar.actions';



const Queries = () => {

    const { keywords } = useSelector(getSearchbarReducer);
    const dispatch = useDispatch();

    const renderKeywords = () => {
        return keywords?.map((item,idx) => <span className={style.queryContainer}><p key={item} onClick={(e) => dispatch(onFormSubmit(e, item))}>{item}</p><button onClick={() => dispatch(clearKeywords(idx))}>X</button></span> );
    }

    return (
        <div className={style.queriesContainer}>
            <h1 className={style.heading}>Saved keywords:</h1>
            {renderKeywords()}
        </div>
    )
}

export default Queries;