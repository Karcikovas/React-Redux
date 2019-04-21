
export const setMovieList = (list) => ({

  type: 'SET_MOVIE_LIST',
  list,
});

export const setGenresList = (list) => ({
  type: 'SET_GENRES_LIST',
  list,
});

export const setLike = (id) => ({
  type: 'SET_LIKE',
  id,
});

export const unsetLike = (id) => ({
  type: 'UNSET_LIKE',
  id,
});



