import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import getMockData from '../src/mock';

// actionTypes
// session
const INIT = 'INIT';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const INITMOVIE = 'INITMOVIE'

// actionsCreaters
export const init = () => ({ type: INIT });
export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });

export const initMovie = list => ({ type: INITMOVIE, list });

const storeData = list => ({ type: INITMOVIE, list });
export const fetchData = () => dispatch => getMockData().then(data => dispatch(storeData(data)));

// reducers
const sessionReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case INIT:
      return true;
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};
const movieReducer = (state = [], action) =>{
  switch(action.type){
    case INITMOVIE:
      return action.list;
    default:
      return state
  }
    
}
const reducer = combineReducers({
  sessionReducer,
  movieReducer
}) 
export default initState => createStore(
  reducer,
  initState,
  applyMiddleware(thunkMiddleware)
);