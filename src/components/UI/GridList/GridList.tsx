import React from 'react';
import style from './index.module.scss';
import Item from '../GridItem/GridItem';
import Loader from '../Loader/Loader';
import { getSearchbarReducer } from '../../../store/searchbar/searchbar.reducer';
import { useSelector } from 'react-redux';


const List = () => {
    const { loading, search } = useSelector(getSearchbarReducer);

    if(loading) return <Loader loading={true}/>

    return (
        <div className={style.list}>
            <div className={style.listTitle}>
                <h1>
                    {search}
                </h1>
            </div>
            <Item />
        </div>
    )
}

export default List;