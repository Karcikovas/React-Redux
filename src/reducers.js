import { combineReducers } from 'redux';

const initialState = {
  list: [],
  genrelist: [],
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
    case 'SET_GENRES_LIST':
      return {
        ...state,
        list: action.list,
      };

    default: return state;
  }
};

const genreMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        genrelist: action.list,
      };

    default: return state;
  }
};


export default combineReducers({
  genreMovies: genreMoviesReducer  ,
  movies: moviesReducer,
  genres: genresReducer,
});