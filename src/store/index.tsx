import {combineReducers, createStore, compose, applyMiddleware, Action} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import SearchReducer, { SearchBarReducer } from './searchbar/searchbar.reducer';
import {ErrorMessage, errorMessageReducer} from './notifications/errors/errorMessage.reducer';


declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose,
   }
}

declare global {
   interface RootState {
        search: SearchBarReducer,
        error: ErrorMessage
   }
   type AsyncAction<ReturnType = void> = ThunkAction<ReturnType,
      RootState,
      null,
      Action<string>>
}

// Create reducer combined of all other. This is the global app state
const rootReducer = combineReducers<RootState>({
   search:SearchReducer,
   error: errorMessageReducer
});
// Enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Export store (state) so we can use it in <Provider> or store.dispatch(action)
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));