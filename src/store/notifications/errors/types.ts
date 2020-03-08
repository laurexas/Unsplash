import { Types } from '../../searchbar/types';

export interface showUnexpectedError {
    type: Types.SHOW_UNEXPECTED_ERROR,
    data: {[key:string]:any}
}

export interface hideUnexpectedError {
    type: Types.HIDE_UNEXPECTED_ERROR
}

export type ErrorAction = showUnexpectedError | hideUnexpectedError;
