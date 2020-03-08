import {Types} from '../store/searchbar/types';
import {Dispatch} from 'redux';

export const parseError = (error: any, dispatch:Dispatch) => {
    let data;
      
    if (typeof error === 'object' && error.hasOwnProperty('response')) {
        data = JSON.stringify(error.response.data)
        console.log(data)
    } else if (typeof error === 'object') {
        console.log(error);
        data = JSON.stringify(error)
    } else {
        console.log(error);
        data = error
    }
    dispatch({
        type: Types.SHOW_UNEXPECTED_ERROR,
        data
    })
    dispatch({
        type:Types.SEARCHBAR_FORM_LOADING
    })
}