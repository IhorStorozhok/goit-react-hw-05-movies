import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Button from 'components/Button/Button';
import { getInfo, getCast, getViews } from 'Api/Api';

const Movie = ({ getCastFromMovie }) => {
  const [filmInfo, setFilminfo] = useState('');

  let params = +useParams().id;

  //

  // console.log(url);

  useEffect(() => {
    getInfo(params).then(data => {
      setFilminfo(data);
    });
    getCast(params).then(data => {
      getCastFromMovie(data);
    });
  }, [params]);

  return (
    <section>
      <Button imgComponent={<AiOutlineArrowLeft />} path={-1} />

      <h3>
        {filmInfo.title}{' '}
        {filmInfo.release_date ? filmInfo.release_date.split('-')[0] : '(---)'}
      </h3>
      <p>User Score: {filmInfo.vote_average}</p>
      <h4>Overview</h4>
      <p>{filmInfo.overview && filmInfo.overview}</p>
      <h4>Genres</h4>
      <p>
        {filmInfo.genres &&
          filmInfo.genres
            .map(el => {
              return el.name;
            })
            .join(' ')}
      </p>
      <div>
        {filmInfo ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${filmInfo.backdrop_path}`}
            alt="poster"
          ></img>
        ) : (
          <img
            src="https://myrusakov.ru/images/articles/html_placeholder_01.jpg"
            alt="poster2"
          ></img>
        )}
      </div>
      <div>
        <h5>Aditional information</h5>
        <ul>
          <li>{<Link to={`cast`}>Cast</Link>}</li>
          <li>
            {' '}
            <Link to={`review`}>Rewiev</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default Movie;
