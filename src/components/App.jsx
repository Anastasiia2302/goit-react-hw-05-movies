import Home from 'Pages/Home/Home';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Movies from 'Pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import Cast from './Cast/Cast';
import { Header } from './Header/Header';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Movies />} path="movies" />
        <Route element={<MovieDetails />} path="movies/:movieId">
          <Route element={<Cast />} path="cast" />
          <Route element={<Reviews />} path="reviews" />
        </Route>
      </Routes>
    </>
  );
};
