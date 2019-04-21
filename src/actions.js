
export const setMovieList = (list) => ({
  type: 'SET_MOVIE_LIST',
  list,
});

export const setGenresList = (list) => ({
  type: 'SET_GENRES_LIST',
  list,
});

export const SetHearted = (id) => ({
  type: 'SET_HEARTED_MOVIE',
  id,
});
