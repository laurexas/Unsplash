import React from 'react';
import style from './index.module.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {getSearchbarReducer } from '../../store/searchbar/searchbar.reducer';
import { onFormSubmit } from '../../store/searchbar/searchbar.actions';


const Searchbar = ():JSX.Element => {
    const { search } = useSelector(getSearchbarReducer)
    const dispatch = useDispatch();

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        dispatch(onFormSubmit(e, search))
    };
    
    return (
        <div className={style.searchBar}>
            <form className={style.searchForm} onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
                <Input />
                <Button className={style.searchBtn}>Search</Button>
            </form>
            <div className={style.saveContainer}>
                <Button className={style.saveBtn}>Save</Button>
            </div>
        </div>
    )
}

export default Searchbar;