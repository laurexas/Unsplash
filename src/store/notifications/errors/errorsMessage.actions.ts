import { ErrorAction } from './types';
import { Types } from '../../searchbar/types';

export const showUnexpectedError = (data: {[key:string]:any}) : ErrorAction => {
  return {
    type: Types.SHOW_UNEXPECTED_ERROR,
    data
  }
};

export const hideUnexpectedError = () : ErrorAction => {
  return {
    type: Types.HIDE_UNEXPECTED_ERROR
  }
};