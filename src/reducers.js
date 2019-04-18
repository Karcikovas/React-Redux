import { combineReducers } from 'redux';

const initialState = {
  list: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        list: action.list,
      };
      
    default: return state;
  }
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENRE_LIST':
      return {
        ...state,
        list: action.list,
      };

    default: return state;
  }
};


export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
});