import react, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getCast } from 'Api/Api';
import s from './FilmCast.module.css';

const FilmCast = ({ FilmCast }) => {
  console.log(FilmCast);

  if (FilmCast) {
    if (FilmCast.cast.length > 15) {
      FilmCast.cast.length = 15;
    }
    return (
      <ul className={s.castFotosList}>
        {' '}
        {FilmCast.cast.map((el, index) => {
          let foto = (
            <img
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={`${el.name}`}
            />
          );

          return (
            <li key={index}>
              <div>
                {foto.props.src.split('').splice(-4).join('') !== 'null' ? (
                  foto
                ) : (
                  <img
                    src="https://myrusakov.ru/images/articles/html_placeholder_01.jpg"
                    alt="poster2"
                  ></img>
                )}
                <p>{el.original_name}</p>
                <p>Character: {el.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>Eror</p>;
  }
};
export default FilmCast;
