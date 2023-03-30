import { useState, useEffect } from 'react';
import { getTrending } from 'services/Api';
import { MoviesList } from 'components/MoviesItems/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(res => setMovies(res.data.results));
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};
 export default Home;