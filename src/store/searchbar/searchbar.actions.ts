import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import { SearchBarAction, Types, Data } from './types';
import { parseError } from '../utils';



export const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): SearchBarAction => {
    return {
       type: Types.SEARCHBAR_ON_INPUT_CHANGE,
       name: e.target.name,
       value: e.target.value
    }
};

export const onFormSubmit = (e: React.SyntheticEvent, value: string): AsyncAction | SearchBarAction => {
    const acces_key = 'BpslQNxqHYJPSxnqRpQ3h8oK56dxVnGqZZ6z7nvzx2Y';
    const URL = 'https://api.unsplash.com/search/photos';
    return async (dispatch: Dispatch) => {
        e.preventDefault();
        
        dispatch({ type: Types.SEARCHBAR_FORM_LOADING })
        const errors: {[key:string]:any} = {};
        if(value.length < 1) errors.search = 'Search field is empty, please enter value...';
        if(Object.keys(errors).length) {
            return parseError(errors, dispatch);
        }
        try {
            const { data } : AxiosResponse<Data> = await axios.get(`${URL}?per_page=30&query=${value}`, { headers:{ 
                Authorization: `Client-ID ${acces_key}`
            }});

            if(data.results.length < 1) {
                errors.results = 'No results found';
                parseError(errors, dispatch);
            }
            dispatch({ type: Types.SEARCHBAR_FORM_SUBMIT_SUCCESS, data })
        }
        catch(error) {
        
        parseError(error, dispatch);
          
        }
    }
}

export const saveKeyword = (keyword: string): SearchBarAction => {
    return {
        type: Types.SEARCHBAR_SAVED_NEW_KEYWORD,
        keyword
    }
}

export const clearKeywords = (index:number):SearchBarAction => {
    return {
        type:Types.CLEAR_SAVED_QUERY,
        index
    }
}
 