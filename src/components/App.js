import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';
import { getMovieList } from '../thunks';
import { getGenresList } from '../thunks';
import { getGenreMovies } from '../thunks';
import { setLike, unsetLike } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.onGetGenreMovies();
    props.onGetMovieList();
    props.onGetGenreList();
  };


  render() {
    const { onSetLike } =this.props;
    const { onUnsetLike } =this.props;
    const { hearted } = this.props;
    const { movieList } = this.props;
    const { genreList } = this.props;

    return (
        <div>
          <div className='genres'>
            {genreList.map((listItem) => (
                <span
                    className='genre'
                    key={listItem.id}
                    onClick={(

                    ) =>  this.props.onGetGenreMovies(listItem.id)}
                >
              {listItem.name}
            </span>
            ))}
          </div>

        {movieList.map((listItem) => (
          <Card
              key={listItem.id}
              id={listItem.id}
              backgroundImage={getImageUrl(listItem.backdrop_path)}
              title={listItem.original_title}
              releaseDate={listItem.release_date}
              score={listItem.vote_average}
              votes={listItem.vote_count}
              description={listItem.overview}
              onLike={hearted.includes(listItem.id) ? onUnsetLike : onSetLike}
              hearted={hearted.includes(listItem.id)}
          />
        ))}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    genreMovies: state.genreMovies.list,
    hearted: state.movies.hearted,
    movieList: state.movies.list,
    genreList: state.genres.list,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onGetGenreMovies: (id) => dispatch(getGenreMovies(id)),
  onGetMovieList: () => dispatch(getMovieList()),
  onGetGenreList: () => dispatch(getGenresList()),
  onSetLike: (id) => dispatch(setLike(id)),
  onUnsetLike: (id) => dispatch(unsetLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
