import React from 'react';
import Card from './Card';
import axios from 'axios';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';
import { setMovieList } from '../actions';
import { getMovieList } from '../thunks';
import { setGenreList } from '../actions';
import { getGenreList } from '../thunks';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    props.onGetMovieList();
    props.onGetGenreList();
  };
  
  render() {
    const { movieList } = this.props;
    const { genreList } = this.props;
    
    return (
        <div>
          <div className='genres'>
            {genreList.map((listItem) => (
                <span
                    className='genre'

                >
              {listItem.name}
            </span>
            ))}
          </div>

        {movieList.map((listItem) => (
          <Card
            backgroundImage={getImageUrl(listItem.backdrop_path)}
            title={listItem.original_title}
            releaseDate={listItem.release_date}
            score={listItem.vote_average}
            votes={listItem.vote_count}
            description={listItem.overview}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
  genreList: state.genres.list,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMovieList: () => dispatch(getMovieList()),
  onGetGenreList: () => dispatch(getGenreList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
