import React from 'react';
import style from './index.module.scss';
import {getSearchbarReducer } from '../../../store/searchbar/searchbar.reducer';
import { useSelector } from 'react-redux';


const Item = () => {
    const { data } = useSelector(getSearchbarReducer);
    
    const images = data?.results.map((item,idx) => {
        return <img key={idx} src={`${item.urls.small}`} alt={`${item.description}`} />
    })

    
    return <div className={style.imgContainer}>{images}</div>
}

export default Item;