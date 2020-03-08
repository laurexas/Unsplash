import React from 'react';
import style from './index.module.scss';
import Item from '../GridItem/GridItem';
import Loader from '../Loader/Loader';
import { getSearchbarReducer } from '../../../store/searchbar/searchbar.reducer';
import { useSelector } from 'react-redux';


const List = () => {
    const { loading } = useSelector(getSearchbarReducer);

    if(loading) return <Loader loading={true}/>
    
    return (
        <div className={style.list}>
            <Item />
        </div>
    )
}

export default List;