import { Data, Types, SearchBarAction } from './types';




export interface SearchBarReducer {
    search: string,
    loading: boolean,
    error: {[key:string]: any},
    data: Data | null
}

const initialState : SearchBarReducer = {
    search: '',
    loading: false,
    error: {},
    data: null
}

export default (state=initialState, action:SearchBarAction) => {
    switch (action.type) {
        case Types.SEARCHBAR_FORM_LOADING: {
            return {...state, loading: true}
        }
        case Types.SEARCHBAR_ON_INPUT_CHANGE: {
            return {...state, [action.name]: action.value}
        }
        case Types.SEARCHBAR_FORM_ERROR: {
            return {...state, error: action.error, loading:false}
        }
        case Types.SEARCHBAR_FORM_SUBMIT_SUCCESS: {
            return {...state, data: action.data, loading:false}
        }
        default :
          return state
    }
}


export const getSearchbarReducer = (state: RootState) => state.search;