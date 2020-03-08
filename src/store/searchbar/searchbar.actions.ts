import axios, {AxiosResponse} from 'axios';
import {Dispatch, Action} from 'redux';
import { SearchBarAction, Types, Data } from './types';



export const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): SearchBarAction => {
    return {
       type: Types.SEARCHBAR_ON_INPUT_CHANGE,
       name: e.target.name,
       value: e.target.value
    }
};

export const onFormSubmit = (e: React.FormEvent<HTMLFormElement>, value: string): AsyncAction | SearchBarAction => {
    const acces_key = 'BpslQNxqHYJPSxnqRpQ3h8oK56dxVnGqZZ6z7nvzx2Y';
    const URL = 'https://api.unsplash.com/search/photos';
    const query = value;
    return async (dispatch: Dispatch) => {
        e.preventDefault();
        dispatch({ type: Types.SEARCHBAR_FORM_LOADING })
        try {
            const { data } : AxiosResponse<Data> = await axios.get(`${URL}?per_page=100&quer=${query}`, { headers:{ 
                Authorization: `Client-ID ${acces_key}`
            }});
            dispatch({ type: Types.SEARCHBAR_FORM_SUBMIT_SUCCESS, data })
        }
        catch(error) {
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
          
        }
    }
}
 