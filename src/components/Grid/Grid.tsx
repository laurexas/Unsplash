import React from 'react';
import style from './index.module.scss';
import List from '../UI/GridList/GridList';
import Queries from '../UI/Queries/Queries';


const Body = () => {
    return (
        <div className={style.main}>
            <List/>
            <Queries/>
        </div>
    )
}


export default Body;