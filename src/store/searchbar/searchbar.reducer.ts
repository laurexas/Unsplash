import { Data, Types, SearchBarAction } from './types';




export interface SearchBarReducer {
    search: string,
    loading: boolean,
    error: {[key:string]: any},
    data: Data | null, 
    keywords: string[]
}

const initialState : SearchBarReducer = {
    search: '',
    loading: false,
    error: {},
    data: null,
    keywords: []
}

export default (state=initialState, action:SearchBarAction) => {
    switch (action.type) {
        case Types.SEARCHBAR_FORM_LOADING: {
            return {...state, loading: !state.loading}
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
        case Types.SEARCHBAR_SAVED_NEW_KEYWORD: {
            const keywordCopy : string[] = state.keywords;
            const splittedKeyword = action.keyword.split(' ')
            const newArray = keywordCopy.concat(splittedKeyword)
            return {...state, keywords: newArray}
        }
        case Types.CLEAR_SAVED_QUERY: {
            const filteredKeywordArray = state.keywords.filter((item, idx) => idx !== action.index ? item : null  )
            return {...state, keywords: filteredKeywordArray}
        }
        default :
          return state
    }
}


export const getSearchbarReducer = (state: RootState) => state.search;