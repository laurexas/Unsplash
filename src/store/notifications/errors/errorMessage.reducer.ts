import {Types} from '../../searchbar/types';

export type ErrorMessage = string | null

export const errorMessageReducer = (state:ErrorMessage=null,action:any):ErrorMessage=>{
  switch (action.type){
    case Types.SHOW_UNEXPECTED_ERROR : return action.data;
    case Types.HIDE_UNEXPECTED_ERROR : return null;
    default : return state
  }
};

export const getErrors = (state: RootState) => state;