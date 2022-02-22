import React from 'react';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from 'Views/Header/Header';
// import HomePage from 'Views/HomePage/HomePage';
// import Movies from 'Views/Movies/Movies';
// import Movie from 'Views/Movie/Movie';
// import FilmCast from 'Views/FilmCast/FilmCast';
// import Review from 'Views/Review/Review';
// import MoviesOverlay from 'Views/MoviesOverlay/MoviesOverlay';
import { findTrends } from 'Api/Api';

const HomePage = lazy(() => import('../Views/HomePage/HomePage'));
const Movies = lazy(() => import('../Views/Movies/Movies'));
const Movie = lazy(() => import('../Views/Movie/Movie'));
const FilmCast = lazy(() => import('../Views/FilmCast/FilmCast'));
const Review = lazy(() => import('../Views/Review/Review'));
const MoviesOverlay = lazy(() =>
  import('../Views/MoviesOverlay/MoviesOverlay')
);

export const App = () => {
  const [trendFilms, setTrendsfilms] = useState([]);

  const [castFromMovie, setCastFromMovie] = useState('');
  const [reviewFromMovie, setReviewFromMovie] = useState('');

  useEffect(() => {
    findTrends().then(data => setTrendsfilms(data.results));
  }, []);

  function getCastFromMovie(cast) {
    setCastFromMovie(cast);
  }

  function getReviewFromMovie(review) {
    setReviewFromMovie(review);
  }

  return (
    <>
      <Header />
      <Suspense fallback={<div>Download</div>}>
        <Routes>
          {' '}
          <Route
            path="/"
            element={
              <HomePage trendFilms={trendFilms} title={'Trending today'} />
            }
          ></Route>{' '}
          <Route path="movies" element={<MoviesOverlay />}>
            <Route index element={<Movies />} />
            <Route
              path=":id"
              element={<Movie getCastFromMovie={getCastFromMovie} />}
            >
              <Route
                path="cast"
                element={<FilmCast FilmCast={castFromMovie} />}
              />
              <Route
                path="review"
                element={<Review Review={getReviewFromMovie} />}
              />
              <Route />
            </Route>{' '}
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
};
