export enum Types {
    SEARCHBAR_SAVED_NEW_KEYWORD = 'SEARCHBAR_SAVED_NEW_KEYWORD',
    SEARCHBAR_ON_INPUT_CHANGE = 'SEARCHBAR_ON_INPUT_CHANGE',
    SEARCHBAR_FORM_LOADING = 'SEARCHBAR_FORM_LOADING',
    SEARCHBAR_FORM_ERROR = 'SEARCHBAR_FORM_ERROR',
    SEARCHBAR_FORM_SUBMIT_SUCCESS = 'SEARCHBAR_FORM_SUBMIT_SUCCESS',
    CLEAR_SAVED_QUERY = 'CLEAR_SAVED_QUERY',
    SHOW_UNEXPECTED_ERROR = 'SHOW_UNEXPECTED_ERROR',
    HIDE_UNEXPECTED_ERROR = 'HIDE_UNEXPECTED_ERROR'
}


export interface SearchBarOnInputChangeAction {
    type: Types.SEARCHBAR_ON_INPUT_CHANGE,
    name: string,
    value: string
}

export interface SavedQueryClear {
    type: Types.CLEAR_SAVED_QUERY,
    index: number
}

export interface SearchbarSavedKeyword {
    type: Types.SEARCHBAR_SAVED_NEW_KEYWORD,
    keyword: string
}

export interface SearchBarFormLoadingAction {
    type: Types.SEARCHBAR_FORM_LOADING,

}

export interface SearchBarFormSubmitAction {
    type: Types.SEARCHBAR_FORM_SUBMIT_SUCCESS,
    data: Data
}

export interface SearchBarFormErrorsAction {
    type: Types.SEARCHBAR_FORM_ERROR,
    error: { [key: string]: string }
}


export type SearchBarAction =
    SearchBarOnInputChangeAction
   | SearchBarFormLoadingAction
   | SearchBarFormErrorsAction
   | SearchBarFormSubmitAction
   | SearchbarSavedKeyword
   | SavedQueryClear
 


   export interface Data {
    total:       number;
    total_pages: number;
    results:     Result[];
}

export interface Result {
    id:                       string;
    created_at:               Date;
    width:                    number;
    height:                   number;
    color:                    string;
    likes:                    number;
    liked_by_user:            boolean;
    description:              string;
    user:                     User;
    current_user_collections: any[];
    urls:                     Urls;
    links:                    ResultLinks;
}

export interface ResultLinks {
    self:     string;
    html:     string;
    download: string;
}

export interface Urls {
    raw:     string;
    full:    string;
    regular: string;
    small:   string;
    thumb:   string;
}

export interface User {
    id:                 string;
    username:           string;
    name:               string;
    first_name:         string;
    last_name:          string;
    instagram_username: string;
    twitter_username:   string;
    portfolio_url:      string;
    profile_image:      ProfileImage;
    links:              UserLinks;
}

export interface UserLinks {
    self:   string;
    html:   string;
    photos: string;
    likes:  string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}


export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}