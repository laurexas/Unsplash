import React from 'react';
import style from './index.module.scss';
import { Icon } from '../Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchbarReducer } from '../../../store/searchbar/searchbar.reducer';
import { onInputChange } from '../../../store/searchbar/searchbar.actions';

const Input:React.FC = ():JSX.Element => {
    const { search } = useSelector(getSearchbarReducer);

    const dispatch = useDispatch();

     return (
        <div className={style.search}>
            <Icon className={style.searchIcon}/>
            <input type="text" name="search" placeholder="Search images..." value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(onInputChange(e))}/>
        </div>
    )
}

export default Input;