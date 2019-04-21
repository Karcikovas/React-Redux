import { combineReducers } from 'redux';

const initialState = {
  list: [],
  genrelist: [],
  hearted: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        list: action.list,
      };
    case 'SET_LIKE':
      const liked = [...state.hearted, action.id];
      const newliked = [...new Set(liked)];
      return {...state, hearted: newliked};
    case 'UNSET_LIKE':
      const unliked = state.hearted.filter(item => item !== action.id);
      return {...state, hearted: unliked};
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
