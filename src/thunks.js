import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList } from './actions';
import { setGenreList } from "./actions";

export const getMovieList = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};
export const getGenreList = () => (dispatch) => {
  axios
      .get(endpoints.genres())
      .then((res) => dispatch(setGenreList(res.data.genres)))
      .catch((error) => console.log(error));
};